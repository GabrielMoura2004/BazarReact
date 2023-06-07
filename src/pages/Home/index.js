import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';



const products = [
  {
    id: 1,
    name: 'Brinco de Argola',
    price: 'R$ 15,99',
    image: 'data:image/jpeg;base64,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',

    
    description: 'Brinco de Argola em metal dourado com pingente de strass.'
  },
  {
    id: 2,
    name: 'Colar de Pérolas',
    price: 'R$ 25,99',
    image: 'data:image/jpeg;base64,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',
    description: 'Colar de pérolas com fecho em metal prateado.'
  },
  {
    id: 3,
    name: 'Pulseira de Strass',
    price: 'R$ 12,99',
    image: 'https://images.tcdn.com.br/img/img_prod/680812/pulseira_bracelete_com_strass_casamento_folheado_a_ouro_18k_36103341_1_c069a5f124d5550c5aec03f56d2fc3ca.jpg',
    description: 'Pulseira de strass em metal prateado com fecho de imã.'
  }
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bazar do Gabriel</Text>
      </View>
      <View style={styles.productList}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productItem}
            onPress={() => handleProductPress(product)}
          >
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <TouchableOpacity style={styles.viewMoreButton} onPress={() => handleProductPress(product)}>
              <Text style={styles.viewMoreButtonText}>Ver mais</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      {selectedProduct && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedProduct.image }}
              style={styles.modalProductImage}
            />
            <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
            <Text style={styles.modalProductPrice}>{selectedProduct.price}</Text>
            <Text style={styles.modalProductDescription}>{selectedProduct.description}</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}


    </View>
   

         
    

   
);
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  },
  header: {
  height: 50,
  backgroundColor: '#6495ED',
  justifyContent: 'center',
  alignItems: 'center',
  },
  headerText: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  },
  productList: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  marginTop: 20,
  },
  productItem: {
  alignItems: 'center',
  marginBottom: 20,
  },
  productImage: {
  width: 150,
  height: 150,
  borderRadius: 75,
  },
  productName: {
  fontWeight: 'bold',
  fontSize: 16,
  textAlign: 'center',
  marginBottom: 5,
  },
  productPrice: {
  color: '#777',
  fontSize: 14,
  marginBottom: 5,
  },
  viewMoreButton: {
  backgroundColor: '#6495ED',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 10,
  },
  viewMoreButtonText: {
  color: '#fff',
  fontSize: 12,
  },
  modalContainer: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  modalProductImage: {
  width: 250,
  height: 250,
  borderRadius: 125,
  marginBottom: 20,
  },
  modalProductName: {
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  marginBottom: 10,
  },
  modalProductPrice: {
  color: '#777',
  fontSize: 18,
  marginBottom: 10,
  },
  modalProductDescription: {
  textAlign: 'center',
  paddingHorizontal: 20,
  marginBottom: 20,
  },
  modalCloseButton: {
  backgroundColor: '#6495ED',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 20,
  },
  modalCloseButtonText: {
  color: '#fff',
  fontSize: 16,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    height: 50,
    paddingHorizontal: 20,
  },
  });
  
  export default HomeScreen;
            