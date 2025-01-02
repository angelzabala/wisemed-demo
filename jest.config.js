module.exports = {
  preset: 'ts-jest', // Use ts-jest preset
  testEnvironment: 'jsdom', // Important for React components
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // For jest-dom and other setup
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
};