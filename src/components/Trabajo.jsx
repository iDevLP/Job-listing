import { v4 as uuidv4 } from 'uuid';

export default function Trabajo({ handle, data }) {


  function handleClick(e) {
    const newFilter = {
      id: uuidv4(),
      nombreFiltro: e.target.innerText
    }
    handle(newFilter)
  }


  const jobList = data.map(trabajos =>

    <article key={trabajos.id} className='job-card'>
      <div className="job-img">
        <img src={`.${trabajos.logo}`} alt={`Logo de ${trabajos.company}`} />
      </div>
      <div className="job-body">
        <div className="job-text">
          <span className='job-company'>{trabajos.company}</span>
          {trabajos.new && <span className='job-new'>New!</span>}
          {trabajos.featured && <span className='job-featured'>Featured!</span>}
          <span className='job-position' >{trabajos.position}</span>
          <span>{trabajos.postedAt}</span>
          <span className='job-contract'>{trabajos.contract}</span>
          <span>{trabajos.location}</span>
        </div>
        <div className="job-require">
          {
            trabajos.languages.map((response, index) =>
              <span onClick={handleClick} key={index}>{response}</span>)

          }
          {trabajos.tools.map((response, index) =>
            <span onClick={handleClick} key={index}>{response}</span>)}
        </div>
      </div>
    </article>
  );

  return jobList;
}