import React, { useState } from 'react';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import '../index.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const generatePassword = () => {
    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition duration-500">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-80 transition duration-500 transform">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Password Generator</h1>
          <div className="mb-4">
            <label htmlFor="length" className="block text-gray-700 dark:text-gray-300">Length: {length}</label>
            <input
              type="range"
              id="length"
              min="4"
              max="100"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="block text-gray-700 dark:text-gray-300">Include Lowercase</label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="toggle-checkbox"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="block text-gray-700 dark:text-gray-300">Include Uppercase</label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="toggle-checkbox"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="block text-gray-700 dark:text-gray-300">Include Numbers</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="toggle-checkbox"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="block text-gray-700 dark:text-gray-300">Include Symbols</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="toggle-checkbox"
            />
          </div>
          <button
            onClick={generatePassword}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Generate
          </button>
          {password && (
            <div className="mt-4 break-words text-center bg-gray-200 dark:bg-gray-700 p-2 rounded text-gray-900 dark:text-gray-100 transition duration-500">
              {password}
              <button onClick={copyToClipboard} className="ml-2 text-blue-500 dark:text-blue-300">
                {copied ? <FaClipboardCheck /> : <FaClipboard />}
              </button>
              {copied && (
                <p className="text-green-500 dark:text-green-300 mt-2 transition duration-500">Password copied!</p>
              )}
            </div>
          )}
            <div className='text-gray-500 text-center mt-6 mb-0'>
                Powered by <a href="https://github.com/lul-v3" className='text-blue-500'>lulv3</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
