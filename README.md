# Recipe Finder

## Beskrivning

Recipe Finder är en receptapp byggd med React Native, Expo och TypeScript. Du kan söka bland hundratals recept, se ingredienser och instruktioner, kopiera ingredienslistan till exempelvis en inköpslista, titta på receptets video och spara dina favoriter.

Appen är för alla som vill hitta något att laga snabbt och ha sina favoritrecept samlade på ett ställe. Recepten hämtas från det öppna API:t [TheMealDB](https://www.themealdb.com/api.php).

## Så bygger och kör du projektet

**Krav:** [Node.js](https://nodejs.org) (LTS) och appen **Expo Go** på din telefon ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)).

1. Klona repot

   ```
   git clone https://github.com/Evwi0318/recipe-finder.git
   ```

2. Gå in i mappen

   ```
   cd recipe-finder
   ```

3. Installera beroenden

   ```
   npm install
   ```

4. Starta utvecklingsservern

   ```
   npx expo start
   ```

5. Öppna appen
   - **Android:** öppna Expo Go och skanna QR-koden i terminalen.
   - **iPhone:** skanna QR-koden med kameran och öppna länken i Expo Go.

Datorn och telefonen måste vara på samma nätverk. Fungerar det inte, prova `npx expo start --tunnel`.

## Projektstruktur

```
src/
├─ app/                     Skärmar (Expo Router, filbaserad navigering)
│  ├─ _layout.tsx           Stack-navigering
│  ├─ (tabs)/_layout.tsx    Flikar: Search och Favorites
│  ├─ (tabs)/index.tsx      Sökskärm
│  ├─ (tabs)/favorites.tsx  Sparade favoriter
│  └─ recipe/[id].tsx       Detaljskärm som tar emot receptets id
├─ components/              Återanvändbara komponenter
│  ├─ Button.tsx
│  ├─ Loader.tsx
│  └─ RecipeList.tsx
├─ constants/theme.ts       Färger
└─ services/
   ├─ api.ts                Anrop till TheMealDB
   └─ favorites.ts          Spara och läsa favoriter
```

## Använda RN-komponenter

| Komponent | Används till |
| --- | --- |
| `View` | Layout och gruppering av element, t.ex. knappraden på detaljskärmen |
| `Text` | All text: receptnamn, kategori, ingredienser och instruktioner |
| `TextInput` | Sökfältet på sökskärmen |
| `FlatList` | Listan med recept på sök- och favoritskärmen |
| `ScrollView` | Gör detaljskärmen scrollbar |
| `Pressable` | Klickbara receptkort, knappar och hjärtat i headern |
| `ActivityIndicator` | Laddningsindikator medan recept hämtas |

## Använda Expo SDK-moduler

| Modul | Används till |
| --- | --- |
| `expo-image` | Visar receptbilderna i listan och på detaljskärmen, med inbyggd cache |
| `expo-haptics` | Telefonen vibrerar när du sparar eller tar bort en favorit |
| `expo-clipboard` | Kopierar ingredienslistan med knappen "Copy ingredients" |
| `expo-web-browser` | Öppnar receptets YouTube-video i en webbläsare inne i appen |

## Extern modul

| Modul | Används till |
| --- | --- |
| `@react-native-async-storage/async-storage` | Sparar favoriterna lokalt på telefonen så att de finns kvar när appen startas om |

## Navigering

Appen använder **Expo Router**. Sök- och favoritskärmen ligger i flikar, och när du trycker på ett recept öppnas `recipe/[id].tsx` med receptets id som parameter. Skärmen läser id:t med `useLocalSearchParams` och hämtar receptet från API:t.

## Användning av AI-verktyg

**Verktyg:** Claude (Anthropic).

**Till vad:**
- Bolla idéer om vilken app som var lagom stor för uppgiften och vilka moduler som passade
- Planera projektstrukturen och dela upp arbetet i små steg och commits
- Ta fram kodförslag för skärmar, komponenter och API-anrop
- Felsöka problem, t.ex. saknade paket (`expo-font`, `react-native-web`) som gav fel och vit skärm
- Ta fram ett första utkast till den här README:n

**Så verifierade jag koden:**
- Jag har läst igenom och kan förklara varje rad. När ett förslag var för avancerat, t.ex. egna hooks och extra lager, bad jag om en enklare version som matchar det vi gått igenom på lektionerna.
- Jag körde `npx tsc --noEmit` för att kontrollera att TypeScript inte gav några fel.
- Jag testade varje funktion manuellt i Expo Go på telefonen: sökning, navigering till detaljskärmen, favoriter (även efter omstart), kopiering och videolänken.
- Jag committade i små steg så att varje ändring kunde testas för sig.

## Uppfyllda krav

### Godkänt (G)

- [x] Projektet använder minst 4 RN-komponenter och minst 4 moduler från Expo SDK
- [x] De använda komponenterna och modulerna är antecknade i README.md, tillsammans med en lista över uppfyllda krav
- [x] Expo Router används för navigering i appen, och minst en skärm tar emot en parameter
- [x] Git och GitHub har använts, med commits spridda över arbetets gång
- [x] Projektmappen innehåller en README.md enligt beskrivningen
- [ ] Uppgiften är inlämnad i tid
- [ ] Muntlig presentation är genomförd

### Väl godkänt (VG)

- [x] Alla punkter för godkänt är uppfyllda
- [x] Ytterligare en valfri extern modul används (`@react-native-async-storage/async-storage`)
- [x] Appen hämtar data från ett Web-API (TheMealDB)
- [x] Användningen av AI-verktyg dokumenteras i README
