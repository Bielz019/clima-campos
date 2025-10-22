import { useState } from 'react'
import './App.css'
import { CloudSun, MapPinned, Thermometer, Droplets, Wind } from 'lucide-react';

function App() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  //função para buscar dados do clima
  const buscarClima = async () => {
    //validação do campo vazio da cidade
    if (!cidade.trim()){
      setErro('Por favor, digite uma cidade');
      return;
    }

    setCarregando(true);
    setErro('');

    try{
      const API_KEY = "";
      const url = "";
      const resposta = await fetch(url);

      if(!resposta.ok){
        throw new Error('Cidade não encontrada');
      }

      const dados = await resposta.json();
      setClima(dados);

    }catch (error){
      setErro(error.message);
      setClima(null);

    }finally{
      setClima(null);
    }
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <header>
            <h1>
              <CloudSun color="white" size={48} />
              Consulta de Clima
            </h1>
            <p>Exemplo de consumo de API com React</p>
          </header>
          
          {/* Caixa de Busca */}
          <div className="busca-box">
            <div className="busca-container">
              <input 
                type="text"
                placeholder="Digite o nome da cidade.."
              />
              <button>Buscar</button>
            </div>
          </div>

          {/* Resultado do Clima */}
          <div id="card-resultado">
            <div id="cidade-info">
              <div id="cidade-nome">
                <MapPinned style={{color: '#550808ff'}} size={48} />
                Campinas, BR
              </div>
              <p id="cidade-desc">
                Nublado
              </p>
            </div> {/* Fecha #cidade-desc*/}

            {/* Temperatura principal */}
            <div id="temperatura-box">
              <div id="temp-valor">21°C</div>
              <div id="temp-sens">
                Sensação Térmica: 21°C
              </div>
            </div>


            <div id="detalhes-box">
              {/* inicio temperatura */}
              <div className="detal-item">
                <div className="detal-icone">
                <Thermometer />
                </div>
                <p className="detal-texto">
                  Min/Max
                </p>
                <p className="detal-valor">
                  23ºC/27ºC
                </p>
              </div> {/* fim temperatura */}



                   {/* inicio umidade */}
                   <div className="detal-item">
                <div className="detal-icone">
                <Droplets />
                </div>
                <p className="detal-texto">
                  Umidade
                </p>
                <p className="detal-valor">
                  17%
                </p>
              </div> {/* fim umidade */}



                   {/* inicio vento */}
                   <div className="detal-item">
                <div className="detal-icone">
                <Wind />
                </div>
                <p className="detal-texto">
                  Vento
                </p>
                <p className="detal-valor">
                  14km/h
                </p>
              </div> {/* fim vento */}
            </div>


          </div> {/* Fecha #card-resultado */}

          
        </div>
      </div>
    </>
  )
}

export default App
