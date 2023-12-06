import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

console.log(process.env.REACT_APP_BASE_URL);




class PGAApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PGAApi.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  //  Get the current user. 
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  //  Get companies (filtered by name if not undefined) 
  // static async addPet(data) {
  //   let res = await this.request(`pet/${id}`, data, 'post');
  //   return res.pet;
  // }

  //  Get jobs by id 
  static async getServices(id) {
    let res = await this.request(`services/${id}`);
    return res.services;
  }

  //  Signup for site. 
  static async signup(data) {
    let res = await this.request('auth/register', data, 'post');
    return res.token;
  }

  //  Get token for login from username, password. 
  static async login(data) {
    let res = await this.request('auth/token', data, 'post');
    return res.token;
  }

  // Save user profile edits. 
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }

  //  Delete user profile. 
  static async deleteProfile(username) {
    await this.request(`users/${username}`, {}, 'delete');
  }

  //  Save dog to current user. 
  static async addPet(user_id, pet_id) {
    await this.request(`users/${user_id}/pets/${pet_id}`, {}, 'post');
  }
}

// for now, put token ("testuser" / "password" on class)
PGAApi.token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ' +
  'SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.' +
  'FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc';

export default PGAApi;
