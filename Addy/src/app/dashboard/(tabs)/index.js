import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';

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
  {
    id: '2',
    user: {
      name: 'Keyt Taylor',
      handle: '@aphrodeadz',
      avatar: 'https://via.placeholder.com/50',
    },
    content: 'All is well.',
    likes: '99k',
    comments: '69',
    retweets: '96k',
    time: '10 minutes ago',
  },
  {
    id: '3',
    user: {
      name: 'Code Camp',
      handle: '@kodangs',
      avatar: 'https://via.placeholder.com/50',
    },
    content: 'Tamang code langs.',
    likes: '1k',
    comments: '2',
    retweets: '10k',
    time: '30 minutes ago',
  },
  {
    id: '4',
    user: {
      name: 'Keyt Taylor',
      handle: '@aphrodeadz',
      avatar: 'https://via.placeholder.com/50',
    },
    content: 'Kapoy bayot.',
    likes: '30k',
    comments: '200',
    retweets: '5k',
    time: '1 hour ago',
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Post Input Section */}
      <View style={styles.postSection}>
        <View style={styles.postInput}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.avatar}
          />
          <TextInput
            placeholder="What's happening?"
            placeholderTextColor="#aaa"
            style={styles.input}
            mode="outlined"
            outlineColor="#444"
            theme={{ colors: { text: '#fff', placeholder: '#aaa' } }}
          />
        </View>
        <View style={styles.actionButtons}>
          <Button
            mode="text"
            icon="image"
            labelStyle={styles.buttonLabel}
            color="#1DA1F2"
          >
            Photo
          </Button>
          <Button
            mode="text"
            icon="video"
            labelStyle={styles.buttonLabel}
            color="#1DA1F2"
          >
            Video
          </Button>
          <Button
            mode="text"
            icon="text-box-outline"
            labelStyle={styles.buttonLabel}
            color="#1DA1F2"
          >
            Thread
          </Button>
          <Button
            mode="text"
            icon="clock-outline"
            labelStyle={styles.buttonLabel}
            color="#1DA1F2"
          >
            Schedule
          </Button>
        </View>
      </View>

      {/* Tweets Section */}
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tweet}>
            <View style={styles.tweetHeader}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.tweetName}>{item.user.name}</Text>
                <Text style={styles.tweetHandle}>{item.user.handle}</Text>
                <Text style={styles.tweetTime}>{item.time}</Text>
              </View>
            </View>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202B', // Dark background
  },
  postSection: {
    padding: 10,
    backgroundColor: '#192734', // Slightly lighter than the main background
    borderBottomWidth: 1,
    borderBottomColor: '#38444D', // Border for separation
  },
  postInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    backgroundColor: '#22303C', // Input box background
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLabel: {
    fontSize: 12,
    color: '#1DA1F2', // Twitter's primary blue
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
  tweetHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tweetName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  tweetHandle: {
    fontSize: 14,
    color: '#8899A6', // Muted text color
  },
  tweetTime: {
    fontSize: 12,
    color: '#8899A6',
  },
  tweetContent: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    fontSize: 14,
    color: '#1DA1F2',
  },
});
