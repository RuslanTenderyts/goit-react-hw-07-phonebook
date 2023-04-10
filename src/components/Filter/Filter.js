import React from "react";
import {FilterLabel} from "./Filter.styled"
import { useSelector, useDispatch } from "react-redux";
import { setValueFilter } from "redux/filterSlice";
import { getValueFilter } from "redux/selectors"




const Filter = () =>  {    
    const dispatch = useDispatch(); 
    const handlerFilterChanch = (evt) => { 
        const value = evt.target.value.toLowerCase();
        dispatch(setValueFilter(value));
    };
    const valueFilter = useSelector(getValueFilter);
    
    return (
    
        <FilterLabel>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Find contacts by name"
                required
                value={valueFilter}
                onChange={handlerFilterChanch}
            />
        </FilterLabel>
    )
}

export default Filter;
