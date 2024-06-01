import { useState } from 'react';
import { useSymbols } from '../../context/SymbolsContext';
import { AddListButton, Selector, Wrapper, ListItem, SearchInput, Column } from './styles';


export const ListSelector = () => {
    const { listsOfSymbols, createList, selectedList, selectList } = useSymbols();

    const [newListName, setNewListName] = useState('');

    const createListOfSymbols = () => {
        if (newListName && !listsOfSymbols[newListName]) {
            createList(newListName);
            setNewListName('');
        }
    }

    return <Wrapper>
        <Column>
            <Selector value={selectedList}
                onChange={(e) => selectList(e.target.value)}>
                {Object.keys(listsOfSymbols).map((name) => (<ListItem key={name} value={name}>
                    {name}
                </ListItem>))}
            </Selector>
            <SearchInput
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)} />
        </Column>
        <AddListButton onClick={createListOfSymbols} >+</AddListButton>
    </Wrapper>
}