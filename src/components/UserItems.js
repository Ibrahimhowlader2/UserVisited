import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Text from './text/text';
import {colors} from '../theme/colors';
import {typography} from '../theme/typography';
import {Userpic} from 'react-native-userpic';

const UserItems = ({item}) => {
  const {name, icon, work, visit} = item;
  return (
    <View style={styles.itemContainer}>
      {/* Profile Photo */}
      {icon ? (
        <Image style={styles.icon} source={icon} />
      ) : (
        <Userpic
          colorize={true}
          style={styles.textIcon}
          name={name.slice(0, 3)}
        />
      )}
      {/* User Details */}
      <View style={styles.content}>
        <View>
          <Text preset="h2">{name}</Text>
          <Text preset="small">{work}</Text>
        </View>
        <View>
          <Text preset="h2" style={{color: colors.secondary}}>
            {visit}{' '}
            <Text
              preset="h2"
              style={{fontFamily: typography.regular, color: colors.secondary}}>
              Visit
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserItems;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 30,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: colors.darkGrey,
    marginRight: 10,
  },
  textIcon: {
    borderWidth: 1,
    borderColor: colors.darkGrey,
    marginRight: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrey,
  },
});
