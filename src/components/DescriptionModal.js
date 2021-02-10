import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import styles from '../../styles'

const DescriptionModal = (props) => {
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={props.onPressItem}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.textModal}>{props.selectedItem.description}</Text>
                        <TouchableHighlight
                            style={styles.buttonContainer}
                            onPress={props.onPressItem}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default DescriptionModal;

