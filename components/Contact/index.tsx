import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    let formIsValid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formData.name) {
      newErrors.name = "Name is required."
      formIsValid = false
    }

    if (!formData.email) {
      newErrors.email = "Email is required."
      formIsValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address."
      formIsValid = false
    }

    if (!formData.message) {
      newErrors.message = "Message is required."
      formIsValid = false
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long."
      formIsValid = false
    }

    setErrors(newErrors)
    return formIsValid
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return // Prevent form submission if validation fails
    }

    setLoading(true)

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScD5Gu_vGmGYgzs5nCYQswvBhRpW33ij8cTkvhv4LugoVjyoA/formResponse"
    const formBody = new URLSearchParams({
      "entry.205947465": formData.name,
      "entry.947042284": formData.email,
      "entry.1462407160": formData.message,
    })

    try {
      const response = await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      })

      setLoading(false)
      setSubmitted(true)
    } catch (error) {
      setLoading(false)
      console.error("Error submitting the form", error)
    }
  }

  const handleNewResponse = () => {
    setFormData({ name: "", email: "", message: "" })
    setSubmitted(false)
    setErrors({ name: "", email: "", message: "" })
  }

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "rgba(0,0,0,.55)",
        overflow: "auto",
        height: "100%",
      }}
    >
      <div>
        <h2 className="mb-4 text-4xl font-medium">Get in touch</h2>
        <h3 className="mb-8 text-4xl font-medium text-[#00FFFF]">
          Let's talk about your project
        </h3>

        <p className="mb-4">
          Thinking about a new project, a problem to solve, or just want to
          connect? Let's do it!
        </p>
        <p className="mb-8">
          Use the form on this page or get in touch by other means.
        </p>
      </div>

      <div className="flex space-x-6 mb-8">
        <a
          href="https://github.com/jsingh0026"
          rel="noreferrer"
          target="_blank"
          className="pulse flex items-center justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden cursor-pointer font-bold text-sm transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_#00FFFF]"
        >
          <img
            src="assets/icons/github.png"
            alt="GitHub"
            className="github-logo w-6 h-6 mr-2 transition-transform duration-200 ease-in-out"
          />
          <span className="text-[#00FFFF]">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jaspreets0026/"
          rel="noreferrer"
          target="_blank"
          className="pulse flex items-center justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden cursor-pointer font-bold text-sm transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_#00FFFF]"
        >
          <img
            src="assets/icons/linkedin.png"
            alt="LinkedIn"
            className="github-logo w-6 h-6 mr-2 transition-transform duration-200 ease-in-out"
          />
          <span className="text-[#00FFFF]">LinkedIn</span>
        </a>
      </div>

      {submitted ? (
        <div className="text-center">
          <h2 className="text-4xl font-medium text-[#00FFFF] mb-4">
            Thank You!
          </h2>
          <p className="text-xl mb-4">
            Your message has been submitted successfully.
          </p>
          <button
            onClick={handleNewResponse}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-[#00FFFF] text-primary-foreground hover:bg-[#00CCCC] h-10 px-4 py-2 mt-8"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  className="flex w-full rounded-md border border-input py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-12 px-4 bg-gray-900"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  className="flex w-full rounded-md border border-input py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-12 px-4 bg-gray-900"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                className="flex min-h-20 w-full rounded-md border border-input py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-4 bg-gray-900"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-[#00FFFF] text-primary-foreground hover:bg-[#00CCCC] h-10 px-4 py-2 w-full mt-8"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Contact
