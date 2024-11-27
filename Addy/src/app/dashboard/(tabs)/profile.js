import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

const tweets = [
  {
    id: '1',
    user: {
      name: 'Andre Jimm Campilan',
      handle: '@andway_09',
      avatar: 'https://via.placeholder.com/50',
    },
    content: 'Gusto nako mo graduate!!!',
    likes: '69k',
    comments: '96',
    retweets: '9k',
    time: 'Few minutes ago',
  },

];

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.coverImage}
        />
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Andre Jimm Camplian</Text>
          <Text style={styles.handle}>@andway_09</Text>
          <Text style={styles.bio}>
            Titit.
          </Text>
          <View style={styles.followInfo}>
            <Text style={styles.followText}>
              <Text style={styles.boldText}>1</Text> Following
            </Text>
            <Text style={styles.followText}>
              <Text style={styles.boldText}>120M</Text> Followers
            </Text>
          </View>
        </View>
        <Button mode="contained" style={styles.editProfileButton}>
          Edit Profile
        </Button>
      </View>

      {/* Tweets Section */}
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tweet}>
            <Text style={styles.tweetContent}>{item.content}</Text>
            <View style={styles.tweetActions}>
              <TouchableOpacity>
                <Text style={styles.action}>❤️ {item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.action}>🔁 {item.retweets}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.action}>💬 {item.comments} Comments</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202B', // Dark background
  },
  header: {
    backgroundColor: '#192734', // Slightly lighter than the main background
    borderBottomWidth: 1,
    borderBottomColor: '#38444D', // Border for separation
    paddingBottom: 10,
  },
  coverImage: {
    width: '100%',
    height: 150,
    marginBottom: -50,
  },
  profileInfo: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#192734',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Primary text color
  },
  handle: {
    fontSize: 16,
    color: '#8899A6', // Secondary text color
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#E1E8ED', // Bio text color
  },
  followInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  followText: {
    fontSize: 14,
    color: '#8899A6',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  editProfileButton: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#1DA1F2', // Twitter's primary blue
  },
  tweet: {
    padding: 15,
    backgroundColor: '#192734',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  tweetContent: {
    fontSize: 16,
    marginBottom: 10,
    color: '#E1E8ED', // Tweet content color
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    fontSize: 14,
    color: '#1DA1F2', // Action buttons color
  },
});
