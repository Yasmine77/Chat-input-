import React, { useState } from "react";
import {
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    IonSearchbar,
} from "@ionic/react";
import { search } from "ionicons/icons";
import styled from "styled-components";

const InputSearch = styled(IonSearchbar)`
border-radius: 25px,
border: 1px solid gainsboro,
  `;

const SearchComponent = (props) => {
    const [searchShow, setSearchShow] = useState(false);
    return (
        <IonToolbar className='toolbar-search' style={{
            paddingRight: "7px", paddingTop: '5px'
        }}>
            {!searchShow ? (
                <IonButtons slot="primary">
                    <IonButton
                        onClick={() => {
                            setSearchShow(true);
                        }}
                    >
                        <IonIcon slot="icon-only" icon={search} />
                    </IonButton>
                </IonButtons>
            ) : (
                    <InputSearch
                        value={props.searchText} onIonChange={e => props.setSearchText(e.detail.value)}
                        placeholder="Search"
                    />
                )}
        </IonToolbar>
    );
};

export default SearchComponent;
