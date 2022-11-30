import { FunctionComponent, MouseEventHandler, useState } from 'react';

const listData = [
    {name: "dog", type: "mammal"},
    {name: "cat", type: "mammal"},
    {name: "parakeet", type: "bird"},
]
export const List: FunctionComponent = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(-1);

    const getListItems = () => {
        return listData.map((el, index) => {
            return <li key={index}>{el.name}</li>
        })
    };

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        setCurrentItemIndex(currentItemIndex + 1);
    }

    return (
        <div>
            <div>Test text.</div>
            <ul>
                {getListItems()}
            </ul>
            <button
                onClick={handleClick}
                disabled={currentItemIndex >= listData.length}
            >
                Next
            </button>
            {currentItemIndex < 0 &&
                <div>Click the Next button!</div>
            }
            {currentItemIndex >= listData.length &&
                <div>Too many clicks!</div>
            }
            {currentItemIndex > -1 && currentItemIndex < listData.length &&
                <>
                    <h3>Current Item</h3>
                    <div data-testid="currentItemName">{listData[currentItemIndex].name}</div>
                </>
            }
        </div>
    );
}

export default List;
