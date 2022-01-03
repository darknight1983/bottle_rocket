import React, {useState} from 'react';
import ListView from './ListView';
import DetailView from "./DetailView";


const ListDetailViewWrapper = () => {
    const [sideBar, setSideBar] = useState(false);

    return (
        <>
            <ListView {...{sideBar, setSideBar}}/>
            <DetailView {...{sideBar, setSideBar}}/>
        </>
    )
}

export default ListDetailViewWrapper;
