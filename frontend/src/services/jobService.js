import api from './api'

const jobService = {
  getJobs: (page = 1, search = '', filters = {}) => 
    api.get('/jobs/', { params: { page, search, ...filters } }),
  getJobById: (id) => api.get(`/jobs/${id}/`),
  createJob: (data) => api.post('/jobs/', data),
  updateJob: (id, data) => api.put(`/jobs/${id}/`, data),
  deleteJob: (id) => api.delete(`/jobs/${id}/`),
  applyForJob: (jobId, data) => api.post(`/jobs/${jobId}/apply/`, data),
  getApplicants: (jobId, page = 1) => api.get(`/jobs/${jobId}/applicants/`, { params: { page } }),
}

export default jobService
