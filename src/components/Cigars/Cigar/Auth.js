import auth0 from "auth0-js";

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: "cheap-drugs.auth0.com",
		clientID: "BOoXXPrkROdPs4RsQPXNPye6bDgfBhZB",
		redirectUri: "https://localhost:3000/callback",
		audience: "https://cheap-drugs.auth0.com/userinfo",
		responseType: "token id_token",
		scope: "openid"
	})

	constructor() {
		this.login = this.login.bind(this);
	}

	login() {
	this.auth0.authorize();
	}
}