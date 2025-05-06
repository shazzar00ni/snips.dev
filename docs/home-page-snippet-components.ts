// client/src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { SnippetGrid } from '../components/snippets/SnippetGrid';
import { mockSnippets } from '../utils/mockData';

export function HomePage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Share your code</span>
          <span className="block text-indigo-600">visually</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Capture, annotate, and share screenshots of your code, designs, and technical content with the developer community.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          {!isAuthenticated ? (
            <>
              <div className="rounded-md shadow">
                <Link
                  to="/auth?mode=register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/explore"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Explore
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-md shadow">
                <Link
                  to="/create"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Create Snippet
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/explore"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Explore
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Featured Snippets */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Trending Snippets</h2>
          <Link to="/explore" className="text-indigo-600 hover:text-indigo-800">
            View all
          </Link>
        </div>
        <SnippetGrid snippets={mockSnippets.slice(0, 6)} />
      </section>

      {/* Features Section */}
      <section className="bg-white rounded-lg shadow-sm px-4 py-8 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Snips.dev?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The ultimate platform for visual code sharing and developer collaboration.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
              {/* Icon would go here */}
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Screenshot Tool</h3>
            <p className="mt-2 text-base text-gray-500">
              Capture code with automatic syntax highlighting and OCR for searchable content.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
              {/* Icon would go here */}
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Developer Focused</h3>
            <p className="mt-2 text-base text-gray-500">
              Built for developers with features that cater to code sharing and technical discussions.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
              {/* Icon would go here */}
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Community</h3>
            <p className="mt-2 text-base text-gray-500">
              Connect with other developers, share knowledge, and get inspired.
            </p>
          