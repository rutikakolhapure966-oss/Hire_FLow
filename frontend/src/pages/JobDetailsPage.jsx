import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import jobService from '../services/jobService'

const JobDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [applying, setApplying] = useState(false)
  const [resume, setResume] = useState(null)

  useEffect(() => {
    fetchJob()
  }, [id])

  const fetchJob = async () => {
    setLoading(true)
    try {
      const response = await jobService.getJobById(id)
      setJob(response.data)
    } catch (err) {
      setError('Failed to load job details')
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async () => {
    if (!resume) {
      setError('Please upload your resume')
      return
    }

    setApplying(true)
    try {
      const formData = new FormData()
      formData.append('resume', resume)
      await jobService.applyForJob(id, formData)
      navigate('/my-applications')
    } catch (err) {
      setError('Failed to apply for job')
    } finally {
      setApplying(false)
    }
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        {error && <ErrorMessage message={error} onRetry={fetchJob} />}
        
        {job && (
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{job.company}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded">
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-semibold">{job.location}</p>
              </div>
              <div>
                <p className="text-gray-600">Salary</p>
                <p className="font-semibold">{job.salary}</p>
              </div>
              <div>
                <p className="text-gray-600">Job Type</p>
                <p className="font-semibold">{job.job_type}</p>
              </div>
              <div>
                <p className="text-gray-600">Experience</p>
                <p className="font-semibold">{job.experience}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded">
              <h3 className="text-lg font-semibold mb-4">Apply for this job</h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Upload Resume (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                  className="w-full"
                />
              </div>
              <button
                onClick={handleApply}
                disabled={applying || !resume}
                className="w-full bg-secondary text-white py-3 rounded font-semibold hover:bg-green-600 disabled:opacity-50"
              >
                {applying ? 'Applying...' : 'Apply Now'}
              </button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default JobDetailsPage
