import React from "react"
import './Busca.css';

function Busca() {
    return (
        <div class="root">
            <nav>
                <a href="index.html" class="brand">Cinema</a>
                <a href="busca.html">Busca</a>
                <a href="perfil.html">Perfil</a>
                <a href="contato.html">Contato</a>
	        </nav>
	    	<main>
                <form action="">
                    <input type="text" />
                    <button>Buscar</button>
                </form>
                <ul>
                    <li>
                        <img class="poster" src="https://infinitaeph.com.br/wp-content/uploads/2018/10/20128877.jpg" alt="" />
                        <span class="title">The Matrix</span>
                        <span class="year">1999</span>
                    </li>
                    <li>
                        <img class="poster" src="https://infinitaeph.com.br/wp-content/uploads/2018/10/20128877.jpg" alt="" />
                        <span class="title">The Matrix</span>
                        <span class="year">1999</span>
                    </li>
                    <li>
                        <img class="poster" src="https://infinitaeph.com.br/wp-content/uploads/2018/10/20128877.jpg" alt="" />
                        <span class="title">The Matrix</span>
                        <span class="year">1999</span>
                    </li>
                </ul>
	        </main>    
        </div>
       
)

}

export default Busca;