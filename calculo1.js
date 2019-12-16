class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            n1: 0,
            n2:0,
            resultado:0
        };
        this.manipulador1= this.manipulador1.bind(this);
        this.manipulador2= this.manipulador2.bind(this);
        this.soma = this.soma.bind(this)
        this.sub = this.sub.bind(this)
        this.mult = this.mult.bind(this)
        this.div = this.div.bind(this)
    }
    manipulador1(event){
        this.setState({n1: event.target.value});
    }
    manipulador2(event){
        this.setState({n2: event.target.value});
    }
    soma(){
        this.setState({resultado: (parseFloat(this.state.n1)+ parseFloat(this.state.n2)) })
    }
    sub(){
        this.setState({resultado: (parseFloat(this.state.n1)- parseFloat(this.state.n2)) })
    }
    mult(){
        this.setState({resultado: (parseFloat(this.state.n1)* parseFloat(this.state.n2)) })
    }
    div(){
        this.setState({resultado: (parseFloat(this.state.n1)/ parseFloat(this.state.n2)) })
    }
    
    render(){
        return (
            <div className="Formatacao">
            <form>
            Digite o primeiro número:
            <input type="text" onChange={this.manipulador1}/>
            <br/> <br/>
            Digite o segundo número:
            <input type="text" onChange={this.manipulador2}/>
            <br/> <br/>
            <input type="button" value="Somar" onClick={this.soma}/> 
            <input type="button" value="Subtrair" onClick={this.sub}/> 
            <input type="button" value="Multiplicar" onClick={this.mult}/> 
            <input type="button" value="Dividir" onClick={this.div}/> 
            <p><b>Resultado: {this.state.resultado}</b></p>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("conteudo"))
