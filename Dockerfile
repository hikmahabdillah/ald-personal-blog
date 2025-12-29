# Use the official Node.js 20 image as the base image
FROM node:20-alpine 
# Set the working directory inside the container
WORKDIR /app
# Copy the package.json file to the working directory
COPY package*.json ./
# Install the project dependencies to the working directory
RUN npm i
# copy all files to the working directory
COPY . .
# Expose port 3000 to allow access to the application
EXPOSE 3000

CMD ["npm", "run", "dev"]
