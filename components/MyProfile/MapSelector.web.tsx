import { Icon, Button, View, Input, Form, Item, Label, Content, Container } from 'native-base';
import { Text, Image, Modal } from 'react-native'
import * as React from 'react';
import JCButton, { ButtonTypes } from '../../components/Forms/JCButton'
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
//import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Marker } from 'google-maps-react';
import { Map, InfoWindow } from 'google-maps-react';


const mapstyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
]
interface Props {
    mapVisible: any,
    onClose(mapCoord: any): any
    google: any
}
interface State {
    mapCoord: any
    mapVisible: any
}

class MapSelector extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            mapCoord: { latitude: 0, longitude: 0 },
            mapVisible: false
        }
    }

    render() {
        return (

            this.props.mapVisible ?
                <View style={{ position: "fixed", left: 0, top: 0, width: "100%", height: "100%", zIndex: 100, backgroundColor: "#33333366" }}>
                    <View style={{ backgroundColor: "#ffffff", borderRadius: 10, padding: 10, margin: 10, left: "10%", top: "10%", width: "80%", height: "80%" }}>
                        <Text>Select a location (this will be public)</Text>
                        <JCButton buttonType={ButtonTypes.OutlineBold} onPress={() => this.props.onClose(this.state.mapCoord)}>Done</JCButton>

                        <Map google={this.props.google} zoom={6}
                            initialCenter={{ lat: 44, lng: -78.0 }}
                            mapTypeControl={false}
                            style={{ height: "300px" }}
                        >
                            <Marker
                                title="Location"
                                id={1}

                                draggable={true}
                                onDragend={(e, e2) => {
                                    console.log(e)
                                    console.log(e2)
                                    this.setState({ mapCoord: { latitude: e2.position.lat(), longitude: e2.position.lng() } })
                                }}
                            ></Marker>


                        </Map>

                    </View>
                </View>
                : null
        )
    }
}



export default GoogleApiWrapper({
    apiKey: ('AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0')
})(MapSelector)