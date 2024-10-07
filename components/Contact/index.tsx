import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // On form submit, the form data will be sent to FormSubmit.co
  // }
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
          href="https://github.com"
          rel="noreferrer"
          target="_blank"
          className="pulse flex items-center justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden  cursor-pointer font-bold text-sm transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_#00FFFF]"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="github-logo w-4 h-4 mr-2 transition-transform duration-200 ease-in-out"
          />
          <span className="text-[#00FFFF]">GitHub</span>
        </a>

        <a
          href="https://github.com"
          rel="noreferrer"
          target="_blank"
          className="pulse flex items-center justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden  cursor-pointer font-bold text-sm transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_#00FFFF]"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="github-logo w-4 h-4 mr-2 transition-transform duration-200 ease-in-out"
          />
          <span className="text-[#00FFFF]">LinkedIn</span>
        </a>

        <a
          // href="https://github.com"
          // target="_blank"
          className="pulse flex items-center justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden  cursor-pointer font-bold text-sm transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_10px_2px_#00FFFF]"
        >
          {/* <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="github-logo w-4 h-4 mr-2 transition-transform duration-200 ease-in-out"
          /> */}
          <span className="text-[#00FFFF]">...Coming Soon</span>
        </a>
      </div>
      <div>
        <form
          action="https://formsubmit.co/jass.singh0026@gmail.com"
          method="POST"
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="From Portal!" />
            <input
              type="text"
              className="flex w-full rounded-md border border-input py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-12 px-4 file:text-base placeholder:text-base focus-visible:ring-[#00FFFF] bg-gray-900"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="flex w-full rounded-md border border-input py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-12 px-4 file:text-base placeholder:text-base focus-visible:ring-[#00FFFF] bg-gray-900"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="flex min-h-20 w-full rounded-md border border-input py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 scrollbar-y px-4 text-base placeholder:text-base focus-visible:ring-[#00FFFF] bg-gray-900"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
          ></textarea>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#00FFFF] text-primary-foreground hover:bg-[#00CCCC] h-10 px-4 py-2 w-full mt-8"
            type="submit"
          >
            <span>Send</span>
          </button>
        </form>
      </div>
      <style jsx>{`
        .pulse {
          animation: pulse 2s infinite;
        }
        .pulse:hover {
          animation: none;
        }
        @-webkit-keyframes pulse {
          0% {
            -webkit-box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); /* Updated to primary color */
          }
          70% {
            -webkit-box-shadow: 0 0 0 20px rgba(0, 255, 255, 0); /* Increased size */
          }
          100% {
            -webkit-box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
          }
        }

        @keyframes pulse {
          0% {
            -moz-box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); /* Updated to primary color */
            box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); /* Updated to primary color */
          }
          70% {
            -moz-box-shadow: 0 0 0 20px rgba(0, 255, 255, 0); /* Increased size */
            box-shadow: 0 0 0 20px rgba(0, 255, 255, 0); /* Increased size */
          }
          100% {
            -moz-box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
            box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
