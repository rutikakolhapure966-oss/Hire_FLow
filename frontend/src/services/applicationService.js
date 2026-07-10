import api from './api'

const applicationService = {
  getMyApplications: (page = 1) => api.get('/applications/', { params: { page } }),
  getApplicationById: (id) => api.get(`/applications/${id}/`),
  updateApplicationStatus: (id, status) => api.patch(`/applications/${id}/`, { status }),
  uploadResume: (formData) => api.post('/applications/upload-resume/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
}

export default applicationService
