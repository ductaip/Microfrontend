import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from 'shared/src/lib/shared-button';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full px-4 mt-10">
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Feature 1</h2>
          <p className="text-gray-600 mt-2">
            Explore the first feature of this microfrontend project.
          </p>
          <PrimaryButton>View Details</PrimaryButton>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Feature 2</h2>
          <p className="text-gray-600 mt-2">
            Dive into the second feature for a seamless experience.
          </p>
          <PrimaryButton>View Details</PrimaryButton>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Feature 3</h2>
          <p className="text-gray-600 mt-2">
            Check out the third feature of our platform.
          </p>
          <PrimaryButton>View Details</PrimaryButton>
        </div>
      </div>

      <PrimaryButton>Explore More</PrimaryButton>
    </main>
  );
}
