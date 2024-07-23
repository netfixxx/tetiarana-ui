import React from 'react';
import Navbar from './components/homepage/Navbar';
import SchemaTree from './components/homepage/SchemaTree';
import './globals.css';

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            <div className="mt-16">
                <SchemaTree />
            </div>
        </div>
    );
}
