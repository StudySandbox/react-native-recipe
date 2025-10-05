import { Image } from "expo-image";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { homeStyles } from "@/assets/styles/home.styles";

interface Props {
  categories: any;
  selectedCategory: any;
  onSelectCategory: any;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <View style={homeStyles.categoryFilterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={homeStyles.categoryFilterScrollContent}
      >
        {categories.map((category: any) => {
          const isSelected = selectedCategory === category.name;
          return (
            <TouchableOpacity
              key={category.id}
              style={[
                homeStyles.categoryButton,
                isSelected && homeStyles.selectedCategory,
              ]}
              onPress={() => onSelectCategory(category.name)}
              activeOpacity={0.7}
            >
              <Image
                source={{ uri: category.image }}
                style={[
                  homeStyles.categoryImage,
                  isSelected && homeStyles.selectedCategoryImage,
                ]}
                contentFit="cover"
                transition={300}
              />
              <Text
                style={[
                  homeStyles.categoryText,
                  isSelected && homeStyles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
