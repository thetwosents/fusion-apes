// An antd search input with useState, and useEffect based on change using the onChange event.
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }
    
    return (
        <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            value={text}
            onChange={onChange}
        />
    )
}

export default Search;