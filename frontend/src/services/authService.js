import api from './api'

const authService = {
  register: (data) => api.post('/auth/register/', data),
  login: (credentials) => api.post('/auth/login/', credentials),
  logout: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
  },
  getProfile: () => api.get('/auth/profile/'),
  updateProfile: (data) => api.put('/auth/profile/', data),
}

export default authService
