import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import styles from '../../styles'

const Proposal = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { props.onPressItem(); props.showDescription(props.item) }}>
                <View style={styles.proposal}>
                    <Text style={styles.item}>Vendedor: {props.item.seller}</Text>
                    <Text style={styles.item}>Comprador: {props.item.customer}</Text>
                    <Text style={styles.item}>Preço: {props.item.value}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default Proposal;