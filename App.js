import React from 'react';
import { View, Text, SectionList, Image, StyleSheet, StatusBar, Alert, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

// Data Source
const datasource = [
  {
    data: [
      {
        key: 'Venom (2018)',
        category: "Action, Adventure, Fantasy, Sci-Fi",
        actors: "Tom Hardy",
        director: "Ruben Fleischer",
        imageId: require('./img/venom.jpg'),
        description: "Journalist Eddie Brock gains superpowers after merging with an alien symbiote.",
      },
      {
        key: 'Dune: Part Two (2024)',
        category: "Sci-Fi, Adventure, Action, Fantasy, Drama",
        actors: "Timothée Chalamet",
        director: "Denis Villeneuve",
        imageId: require('./img/dune.jpg'),
        description: "Paul Atreides unites with the Fremen to lead a revolt against the Harkonnen.",
      },
      {
        key: 'Spider-Man: Across the Spider-Verse (2023)',
        category: "Animation, Action, Adventure, Fantasy, Sci-Fi",
        actors: "Shameik Moore, Hailee Steinfeld",
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        imageId: require('./img/spider.jpg'),
        description: "Miles Morales embarks on an epic journey across the multiverse.",
      },
    ],
    title: "Action & Adventure",
    bgColor: "#FF6347",
    icon: "mountain-sun"
  },
  {
    data: [
      {
        key: 'Evil Dead (2013)',
        category: "Horror, Mystery & Thriller",
        actors: "Jane Levy",
        director: "Fede Alvarez",
        imageId: require('./img/evil.jpg'),
        description: "A group of friends discover a demonic book in an old cabin.",
      },
    ],
    title: "Horror & Mystery",
    bgColor: "#8B0000",
    icon: "ghost"
  },
  {
    data: [
      {
        key: 'Teen Spirit (2019)',
        category: "Drama, Music",
        actors: "Elle Fanning",
        director: "Max Minghella",
        imageId: require('./img/teen.jpg'),
        description: "A shy teenager pursues her dreams of becoming a pop star.",
      },
    ],
    title: "Drama & Music",
    bgColor: "#2E8B57",
    icon: "music"
  },
  {
    data: [
      {
        key: 'Toy Story 4 (2019)',
        category: "Animation, Adventure, Comedy, Family, Fantasy",
        director: "Josh Cooley",
        imageId: require('./img/toy.jpg'),
        description: "Woody and the gang embark on a road trip with Forky.",
      },
    ],
    title: "Family & Animation",
    bgColor: "#FFD700",
    icon: "face-grin-wide"
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  sectionHeader: {
    padding: 10,
    borderWidth: 1,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  listItem: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    borderWidth: 1,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  movieCategory: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
  movieDetail: {
    fontSize: 14,
    color: '#777',
  },
  movieImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 5,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});



const MoviesApp = () => {
  const handlePress = (movie) => {
    Alert.alert(movie.key, movie.description);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>POPULAR MOVIES</Text>
        <StatusBar hidden={true} />
        <SectionList
            sections={datasource}
            renderSectionHeader={({ section }) => (
                <View style={[styles.sectionHeader, { backgroundColor: section.bgColor }]}>
                  <Icon name={section.icon} size={20} color="whitesmoke" />
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </View>
            )}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <View style={styles.listItem}>
                    <Text style={styles.movieTitle}>{item.key}</Text>
                    <Text style={styles.movieCategory}>{item.category}</Text>
                    <Text style={styles.movieDetail}>Actors: {item.actors}</Text>
                    <Text style={styles.movieDetail}>Director: {item.director}</Text>
                    <Image source={item.imageId} style={styles.movieImage} />
                  </View>
                </TouchableOpacity>
            )}
        />
      </View>
  );
};

export default MoviesApp;
