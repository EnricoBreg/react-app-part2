import axios from "axios";

const axiosIstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosIstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosIstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
