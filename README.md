# The Picture Search App
This is a simple React App that searches pictures using the Unsplash API.

## Requirements
Before running the App, you need to create a developer account with [Unsplash](https://unsplash.com/developers).
In the Unsplash console, create an application, which will give you and Access Key.
Once you have the Unsplash Access Key, create a `.env.local` directory at the root of the project with the environment variable `REACT_APP_PICS_UNSPLASH_CLIENT_ID`.
Assign the Unsplash Access Key to the above environment variable. For instance, the `.env.local` file may contain a like similar to this (with a fictional Access Key):
```
REACT_APP_PICS_UNSPLASH_CLIENT_ID=hufdg98458938yrfeiogy8r979-0423879r89yhiogf
```

## How to run the app
Once you have got an Unsplash application Access Key, and you have created the above described `.env.local` file:
1. Clone the Git repository.
2. Run `npm install` to install the node modules.
3. Run `npm run start` to run the app in developer mode.

## Building for production
In order to create a production build, run `npm run build`.
That will generate a production optimized app in the `Build` directory.

## License
MIT