import api from './api'

const companyService = {
  createCompany: (data) => api.post('/companies/', data),
  getCompany: () => api.get('/companies/my-company/'),
  updateCompany: (id, data) => api.put(`/companies/${id}/`, data),
  getCompanyJobs: (page = 1) => api.get('/companies/my-jobs/', { params: { page } }),
}

export default companyService
