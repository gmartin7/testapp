import React, { FunctionComponent } from 'react';

const listData = [
    {name: "dog", type: "mammal"},
    {name: "cat", type: "mammal"},
    {name: "parakeet", type: "bird"},
]
export const List: FunctionComponent = () => {
    const getListItems = () => {
        return listData.map(el => {
            return <li>{el.name}</li>
        })
    };

    return (
        <div>
            <div>Test text.</div>
            <ul>
                {getListItems()}
            </ul>
        </div>
    );
}

export default List;
