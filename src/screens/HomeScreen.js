import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FocusStatusBar from '../components/FocusStatusBar';
import {colors} from '../theme/colors';
import Text from '../components/text/text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {usersData} from '../data/data';
import UserItems from '../components/UserItems';

const HomeScreen = () => {
  const renderItem = ({item}) => {
    return <UserItems item={item} />;
  };

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Ibrahimhowlader2/jsonfile/master/usersData.json',
    )
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusStatusBar barStyle="dark-content" backgroundColor={colors.white} />
      {/* User Header */}
      <View style={styles.userHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity activeOpacity={0.8} style={styles.backIcon}>
            <AntDesign name="arrowleft" size={16} color={colors.white} />
          </TouchableOpacity>
          <Text preset="h1">Last 7 days visits</Text>
        </View>
        <Text preset="h1" style={{color: colors.secondary}}>
          290 Visits
        </Text>
      </View>

      {/* Search */}
      <View style={{paddingHorizontal: 20, marginBottom: 20}}>
        <View style={styles.wrapperSearch}>
          <AntDesign name="search1" color={colors.darkGrey} size={16} />
          <TextInput
            placeholder="Search employee"
            style={styles.textInputSearch}
            onChangeText={text => searchFilterFunction(text)}
          />
        </View>
      </View>
      {/* User List*/}
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={filteredDataSource}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.darkGrey,
  },
  backIcon: {
    padding: 5,
    backgroundColor: colors.blue,
    borderRadius: 5,
    marginRight: 15,
  },
  wrapperSearch: {
    marginTop: 15,
    height: 35,
    backgroundColor: '#c4c4c433',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInputSearch: {
    width: '90%',
    marginLeft: 5,
    fontSize: 12,
    color: '#4a4a4a80',
  },

  /*  separator: {
    borderBottomColor: colors.black,
    borderWidth: 0.5,
  }, */
});
