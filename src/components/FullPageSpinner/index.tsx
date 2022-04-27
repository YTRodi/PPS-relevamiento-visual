import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

interface Props {
  title?: string;
}

function FullPageSpinner({ title }: Props) {
  return (
    // TODO: implement Flex component.
    // TODO: implement Flex component.
    // TODO: implement Flex component.
    <View style={styles.container}>
      <ActivityIndicator animating />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
  },
});

export default FullPageSpinner;
