import { Text, View } from 'react-native';
import { styles } from "../app/(tabs)/styles";
const Home: React.FC = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.card}>
        <Text style={styles.text}>This is my first Android App ! {'\n'} Please give me a round of applause </Text>
      </View>
    </View>
  )
}
export default Home;