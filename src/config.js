const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URL } = process.env;

const config = {
  CLIENT_URL: `https://api.instagram.com/oauth/authorize/?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token`
};

export default config;
