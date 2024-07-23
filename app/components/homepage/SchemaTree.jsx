import React from 'react';

function SchemaTree() {
    return (
        <div className="mt-32 flex flex-col items-center relative z-10">
            {/* Grandparent */}
            <div className="card w-30 bg-base-100 shadow-xl m-4 relative z-10 bg-white">
                <figure className="px-10 pt-10">
                    <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Grandparent"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Grandparent</h2>
                    <p>Role: Grandparent</p>
                </div>
            </div>

            {/* Parents */}
            <div className="flex flex-row justify-center items-center relative z-10">
                <div className="card w-30 bg-base-100 shadow-xl m-4 bg-white">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://randomuser.me/api/portraits/women/2.jpg"
                            alt="Parent 1"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Parent 1</h2>
                        <p>Role: Parent</p>
                    </div>
                </div>

                <div className="card w-30 bg-base-100 shadow-xl m-4 bg-white">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://randomuser.me/api/portraits/men/3.jpg"
                            alt="Parent 2"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Parent 2</h2>
                        <p>Role: Parent</p>
                    </div>
                </div>
            </div>

            {/* Children */}
            <div className="flex flex-row justify-center items-center relative z-10">
                <div className="card w-30 bg-base-100 shadow-xl m-4 bg-white">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://randomuser.me/api/portraits/women/4.jpg"
                            alt="Child 1"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Child 1</h2>
                        <p>Role: Child</p>
                    </div>
                </div>

                <div className="card w-30 bg-base-100 shadow-xl m-4 bg-white">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://randomuser.me/api/portraits/men/5.jpg"
                            alt="Child 2"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Child 2</h2>
                        <p>Role: Child</p>
                    </div>
                </div>

                <div className="card w-30 bg-base-100 shadow-xl m-4 bg-white">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://randomuser.me/api/portraits/men/5.jpg"
                            alt="Child 2"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Child 2</h2>
                        <p>Role: Child</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchemaTree;
