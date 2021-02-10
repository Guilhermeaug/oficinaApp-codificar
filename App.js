import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles'
import DescriptionModal from './src/components/DescriptionModal'
import Proposal from './src/components/Proposal'

export default function App() {
  const [isLoading, setLoading] = useState(false); //hook para verificar se os dados da API foram carregados
  const [modalVisible, setModalVisible] = useState(false); //altera a visibilidade do modal de descrição
  const [data, setData] = useState([]); //hook para salvar os dados encontrados na API
  const [selectedItem, setSelectedItem] = useState(''); //hook para separar o item a ser exibido no modal

  useEffect(() => { //hook para buscar os dados. O useEffect é interessante, pois apenas busca os dados uma vez (não é executado ao renderizar novamente)
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
          keyExtractor={(item) => item.id.toString()}
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
