import React from 'react';

const MyName = ({ name }) => {
    return (
        <div>
            Hello! my name is <b>{ name }</b>!
        </div>
    );
}

MyName.defaultProps = {
    name: '기본이름'
};
  

export default MyName;