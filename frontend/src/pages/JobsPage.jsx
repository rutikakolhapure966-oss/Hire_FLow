import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JobCard from '../components/JobCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import Pagination from '../components/Pagination'
import jobService from '../services/jobService'

const JobsPage = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [currentPage, search])

  const fetchJobs = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await jobService.getJobs(currentPage, search)
      setJobs(response.data.results || [])
      setTotalPages(Math.ceil(response.data.count / 10))
    } catch (err) {
      setError('Failed to load jobs')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold mb-8">Available Jobs</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        
        {error && <ErrorMessage message={error} onRetry={fetchJobs} />}
        {loading && <LoadingSpinner />}
        
        {!loading && jobs.length === 0 && (
          <p className="text-center text-gray-600 py-8">No jobs found</p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default JobsPage
