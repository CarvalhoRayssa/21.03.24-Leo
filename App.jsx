


const cambio = {
  BRL: 1,  //MOEDA BRASILEIRA
  USD: 0.19,  //DOLAR AMERICANO
  EUR: 0.16,  //EURO
  GBP: 0.14,  //LIBRA ESTERLINA
  JPY: 10.80 //IENE JAPONES
}


const conversao = () => {
  const[quantidadeInicial, setQuantidadeInicial] = useState(0)
  const[quantidadeFinal, setQuantidadeFinal] = useState(0)
  const[conversaoInicial, setConversaoInicial] = useState('BRL')
  const[conversaoFinal, setConversaoFinal] = useState('USD')
}

const calculo = () => {
  const calc = cambio[conversaoInicial] / cambio[conversaoFinal];
  const valorFinal = quantidadeInicial * calc

  setConversaoFinal(valorFinal.toFixed(2));
};

return(
  <div className="conversão">
    <h2>Conversor de Moedas</h2>
    <div>
      <input
      type="number"
      value={quantidadeInicial}
      onChange={(e) => setQuantidadeInicial(e.target.value)}
      />
      <select name="" id=""></select>
    </div>
  </div>
)
