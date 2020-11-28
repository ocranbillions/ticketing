import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    // requests should be made to http://SERVICE.NAMESPACE.SVC.CLUSTER.LOCAL/someroute
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers // contains cookie if needed
    });
  } else {
    // We must be on the browser
    // requests can be made with a base url of ''
    return axios.create({
      baseUrl: '/'
    });
  }
};
