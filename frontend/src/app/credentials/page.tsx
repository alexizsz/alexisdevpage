export default function credentials() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section id="aboutcontent" className="w-full max-w-4xl mx-auto">
        <div id="about-content" className="text-lg text-gray-700">
          <h1 className="text-4xl font-bold mb-4">
          Who is Alexis Salazar?
          random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better, random text to fill the space and make it look better.
          </h1>
        </div>
        <div id="skills-content" className="grid grid-cols-3 gap-4 display:flex; flex-direction: row;justify-content: center;"> 
          <div id="skills-left" className="text-lg text-gray-700 display: flex; flex-direction: column;justify-content: center;"> 
            <div id="database" className="mb-4">
              <img src="/assets/database.png" alt="Database" className="w-16 h-16" />
              <div id="databaseText" className="text-sm text-gray-500 mt-2">
                Database development
              </div>
              </div>
            <div id="mongodb" className="mb-4">
              <img src="/assets/mongodb.png" alt="Mongodb" className="w-16 h-16" />
              <div id="mongodbText" className="text-sm text-gray-500 mt-2">
                Mongodb
              </div>
              </div> 
            <div id="postgresql" className="mb-4">
              <img src="/assets/postgresql.png" alt="PostgreSQL" className="w-16 h-16" />
              <div id="postgresqlText" className="text-sm text-gray-500 mt-2">
                PostgreSQL
              </div>
            </div> 
          </div>
          

          <div id="skills-middle" className="text-lg text-gray-700 display: flex; flex-direction: column;justify-content: center;">
            <div id="java" className="mb-4">
              <img src="/assets/java.png" alt="Java" className="w-16 h-16" />
              <div id="javaText" className="text-sm text-gray-500 mt-2">
                Java
              </div>
              </div>
            <div id="python" className="mb-4">
              <img src="/assets/python.png" alt="Python" className="w-16 h-16" />
              <div id="pythonText" className="text-sm text-gray-500 mt-2">
                Python
              </div>
              </div> 
            <div id="nextjs" className="mb-4">
              <img src="/assets/nextjs.png" alt="Nextjs" className="w-16 h-16" />
              <div id="nextjsText" className="text-sm text-gray-500 mt-2">
                Next.js
              </div>
              </div>
            <div id="html" className="mb-4">
              <img src="/assets/html.png" alt="HTML" className="w-16 h-16" />
              <div id="htmlText" className="text-sm text-gray-500 mt-2">
                HTML
              </div>
              </div>    
          </div>

          <div id="skills-right" className="text-lg text-gray-700 display: flex; flex-direction: column;justify-content: center;">
            <div id="javascript" className="mb-4">
              <img src="/assets/javascript.png" alt="JavaScript" className="w-16 h-16" />
              <div id="javascriptText" className="text-sm text-gray-500 mt-2">
                JavaScript
              </div>
              </div>
            <div id="react" className="mb-4">
              <img src="/assets/react.png" alt="React" className="w-16 h-16" />
              <div id="reactText" className="text-sm text-gray-500 mt-2">
                React
              </div>
              </div> 
            <div id="typescript" className="mb-4">
              <img src="/assets/typescript.png" alt="TypeScript" className="w-16 h-16" />
              <div id="typescriptText" className="text-sm text-gray-500 mt-2">
                TypeScript
              </div>
            </div> 
          </div>
        </div>
        </section>       

      <a href="/assets/01-Alexis_Salazar.pdf" download>
        <button className="download-button">
          <div className="docs">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Download CV
          </div>
          <div className="download">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>§
        </button>
      </a>
    </main>
    </>
  );
}