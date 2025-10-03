import React from 'react';

const Container = ({children}) => {
    return (
        <>
            <div className=' w-11/12 mx-auto max-w-[1200px]'>{children}</div>
        </>
    );
};

export default Container;