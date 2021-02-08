import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles'
import DescriptionModal from './src/components/DescriptionModal'
import Proposal from './src/components/Proposal'

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/codificar/oficina/proposals')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log('Problema no momento de buscar os dados da API'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container, styles.background}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <Proposal
              item={item}
              onPressItem={() => setModalVisible(!modalVisible)}
              showDescription={(item) => setSelectedItem(item)} />
          )}
        />
      )}

      <DescriptionModal
        modalVisible={modalVisible}
        onPressItem={() => setModalVisible(!modalVisible)}
        selectedItem={selectedItem}
      />

    </View>
  );
}
