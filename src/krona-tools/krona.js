import { useState } from 'react'

function Krona() {

  const [ formData, setFormData ] = useState({
    fontSize: '12',
    isCollapse: 'false',
    chamber: '1'
  })

  const { fontSize, isCollapse, chamber } = formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const redirectKrona = (e) => {
    e.preventDefault()

    let kronaURL

    if (chamber === '1') {
      kronaURL = '/krona/text.krona-c1.html'
    } else {
      kronaURL = '/krona/text.krona-c2.html'
    }


    const query = kronaURL + `?font=${ fontSize }&collapse=${ isCollapse }` 
    
    window.open(query)
  }


  return (
    <div className="container w-25 vh-50">
      <div className="row">
        <div className="col-md">
          <div className="card bg-light text-dark">
            <img src="/images/krona.png" alt="" className="card-img-top"/>
            <div className="card-body">
              <p className="card-title fs-3 fw-light">
                Krona Graphs
              </p>
              <p className="fw-lighter fs-6">
                Krona allows hierarchical data to be explored with zooming, multi-layered pie charts.
              </p>
              <form onSubmit={ redirectKrona }>

                <div className="row mb-3 mt-4 mx-auto">
                  <div className="col-md">
                    <label htmlFor="isCollapse" className="form-label">Collapsable?</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="isCollapse" id="isCollapse" value="true" onChange={ handleChange } checked={ isCollapse === 'true'}></input>
                      <label className="form-check-label" htmlFor="isCollapse">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="isCollapse" id="isCollapse" value="false" onChange={ handleChange } checked={ isCollapse === 'false'}></input>
                      <label className="form-check-label" htmlFor="isCollapse">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md">
                    <label htmlFor="isCollapse" className="form-label">Chamber</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="chamber" id="chamber" value="1" onChange={ handleChange } checked={ chamber === '1'}></input>
                      <label className="form-check-label" htmlFor="chamber">
                        C1
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="chamber" id="chamber" value="2" onChange={ handleChange } checked={ chamber === '2'}></input>
                      <label className="form-check-label" htmlFor="chamber">
                        C2
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row mb-3 mt-4 mx-auto">
                  <div className="col-md">
                    <label htmlFor="fontSize" className="form-label">Font Size</label>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="fontSize" id="fontSize1" value="12" checked={ fontSize === '12' } onChange={ handleChange }></input>
                          <label className="form-check-label" htmlFor="fontSize1">
                            S
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="fontSize" id="fontSize2" value="16" checked={ fontSize === '16' } onChange={ handleChange }></input>
                          <label className="form-check-label" htmlFor="fontSize2">
                            M
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="fontSize" id="fontSize3" value="20" checked={ fontSize === '20' } onChange={ handleChange }></input>
                          <label className="form-check-label" htmlFor="fontSize3">
                            L
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="fontSize" id="fontSize4" value="24" checked={ fontSize === '24' } onChange={ handleChange }></input>
                          <label className="form-check-label" htmlFor="fontSize4">
                            XL
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3 mt-4">
                  <div className="col-md d-grid">
                    <button className="btn btn-warning" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Krona