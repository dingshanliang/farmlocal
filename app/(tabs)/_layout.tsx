import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

// 导入实际的屏幕组件
import CropManagementScreen from './crop-management';
import HomeScreen from './index';
import OperationRecordScreen from './operation-record';
import SettingsScreen from './settings';
import StatisticsScreen from './statistics';

console.log('TabLayout is being loaded');

const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <SafeAreaView style={{ flexDirection: 'row', backgroundColor: 'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName: keyof typeof Ionicons.glyphMap = 'ios-information-circle';
        if (route.name === '地图') {
          iconName = isFocused ? 'map' : 'map-outline';
        } else if (route.name === '作物管理') {
          iconName = isFocused ? 'leaf' : 'leaf-outline';
        } else if (route.name === '农事记录') {
          iconName = isFocused ? 'create' : 'create-outline';
        } else if (route.name === '统计分析') {
          iconName = isFocused ? 'bar-chart' : 'bar-chart-outline';
        } else if (route.name === '设置') {
          iconName = isFocused ? 'settings' : 'settings-outline';
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', padding: 10 }}
          >
            <Ionicons
              name={iconName}
              size={24}
              color={isFocused ? '#007AFF' : '#8E8E93'}
            />
            <Text style={{ color: isFocused ? '#007AFF' : '#8E8E93' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default function TabLayout() {
  console.log('Rendering TabLayout');
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="地图" component={HomeScreen} />
      <Tab.Screen name="作物管理" component={CropManagementScreen} />
      <Tab.Screen name="农事记录" component={OperationRecordScreen} />
      <Tab.Screen name="统计分析" component={StatisticsScreen} />
      <Tab.Screen name="设置" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
