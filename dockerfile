FROM node:18.17.1-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Expose the port your React app uses (usually 3000)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]