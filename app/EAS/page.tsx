'use client';

import React, { useEffect, useState } from 'react'

export default function EAS() {

    //State for managing the checkbox
    const [isChecked, setIsChecked] = useState(false);

    //Function to handle checkbox change
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log('Checkbox state after click:', !isChecked);
    };

    useEffect(() => {
        console.log('Checked', isChecked ? "checked" : "unchecked");
    }, [isChecked]);

    return (
        <div className='bg-slate-50'>
            <div>
                <h1 className='text-black'>EAS</h1>
            </div>
            <fieldset>
                <legend className="sr-only">Notifications</legend>
                <div className="space-y-5">
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="checkbox"
                                aria-describedby="checkbox-description"
                                name="checkbox"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                checked={isChecked} //Controlled component
                                onChange={handleCheckboxChange} //Handle Change
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                                Tick to get your attestation
                            </label>
                            <p id="comments-description" className="text-gray-500">
                                Ticking the box above should allow the user to get an attestation that they ticked the box.
                            </p>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>


    )
}
