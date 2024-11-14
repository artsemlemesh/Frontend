// src/components/Skeleton.jsx
import React from 'react';

const Skeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        </div>
    );
};

export default Skeleton;