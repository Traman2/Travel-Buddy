import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      {/* Header */}
      <View className="px-6 pt-12 pb-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <Text className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome to NativeWind
        </Text>
        <Text className="text-lg text-gray-600 dark:text-gray-400">
          Current theme: {colorScheme === 'dark' ? 'Dark' : 'Light'} Mode
        </Text>
      </View>

      {/* Feature Cards */}
      <View className="px-6 py-8 gap-6">
        <View className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
          <Text className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
            Tailwind CSS
          </Text>
          <Text className="text-base text-blue-800 dark:text-blue-200">
            Use familiar Tailwind utility classes in React Native with automatic dark mode support.
          </Text>
        </View>

        <View className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
          <Text className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
            Dark Mode
          </Text>
          <Text className="text-base text-purple-800 dark:text-purple-200">
            Automatic dark mode support using the dark: variant. Change your device theme to see it in action.
          </Text>
        </View>

        <View className="bg-green-100 dark:bg-green-900/30 p-6 rounded-2xl border border-green-200 dark:border-green-800">
          <Text className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
            Easy Styling
          </Text>
          <Text className="text-base text-green-800 dark:text-green-200">
            No more StyleSheet.create! Use className prop directly on React Native components.
          </Text>
        </View>
      </View>

      {/* Sample Buttons */}
      <View className="px-6 py-4 gap-4">
        <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Sample Buttons
        </Text>

        <TouchableOpacity className="bg-blue-500 dark:bg-blue-600 py-4 px-6 rounded-xl active:opacity-80">
          <Text className="text-white text-center font-semibold text-lg">
            Primary Button
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white dark:bg-gray-800 py-4 px-6 rounded-xl border-2 border-gray-300 dark:border-gray-600 active:opacity-80">
          <Text className="text-gray-900 dark:text-white text-center font-semibold text-lg">
            Secondary Button
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 py-4 px-6 rounded-xl active:opacity-80">
          <Text className="text-white text-center font-semibold text-lg">
            Gradient Button
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sample Grid */}
      <View className="px-6 py-4">
        <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Sample Grid
        </Text>
        <View className="flex-row flex-wrap gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <View
              key={item}
              className="bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 w-[30%] aspect-square rounded-2xl items-center justify-center shadow-lg"
            >
              <Text className="text-white text-2xl font-bold">{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View className="px-6 py-8 mt-4">
        <View className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl">
          <Text className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Toggle your device theme to see dark mode in action
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
