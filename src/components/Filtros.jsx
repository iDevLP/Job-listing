import deleteImage from './images/icon-remove.svg'
export default function Filtros({ listadoFiltros, handleDelete, handleClear }) {

    if (listadoFiltros.length > 0) {

        const filtros = listadoFiltros.map((response) => {
            return (
                <article key={response.id}
                    className="fc-option"
                    onClick={() => handleDelete(response.id)}>
                    <div className="fc-container">
                        <span>
                            {response.nombreFiltro}
                        </span>
                        <img src={deleteImage} alt="Icono de borrar filtro" />
                    </div>
                </article>

            );
        })

        return (
            <section className="filtros-container">
                {filtros}
                <span className="fc-clear" onClick={handleClear}>Clear</span>
            </section>
        );

    }
    else return <></>


}