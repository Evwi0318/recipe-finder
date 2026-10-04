import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import { colors } from '@/constants/theme';

type Tab = {
  name: string;
  title: string;
  icon: ComponentProps<typeof Ionicons>['name'];
};

const tabs: Tab[] = [
  { name: 'index', title: 'Search', icon: 'search' },
  { name: 'favorites', title: 'Favorites', icon: 'heart' },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        headerTitleStyle: { color: colors.text },
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      {tabs.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, size }) => <Ionicons name={icon} color={color} size={size} />,
          }}
        />
      ))}
    </Tabs>
  );
}
