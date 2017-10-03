
class Model {
constructor() { 
this.Players =[
      {
        name: "Jim Hoskins",
        score: 31,
        id: 1,
      },
       {
        name: "Andree Hoskins",
        score: 35,
        id: 2,
      },
       {
        name: "Alena Hoskins",
        score: 42,
        id: 3,
      },
      ];
      this.callback = null;
   
      } 
      subscribe(render) {
            this.callback = render;
      }
      
      notify() {
            this.callback();
      }  

      score(){
      let scoreTotal=0;
       for(let i=0 ;i<Players.length ;i++){
            return scoreTotal=Players.score;       
       }
      }
      More(){
        this.Players[index].score+1;
        this.callback=render;
      }
      Decrement(){
            if(this.Players[index]>0){
                  this.Players[index]-1;               
            }
            this.callback=render;
      }  
    
}

const Header = ({model})=>{
      return (  <div className="header">
                  <div className="stats">
                    <table><tbody>
                      <tr><td>Players:</td><td>{model.PLAYERS.length}</td></tr>
                      <tr><td>Total ponits:</td><td>{model.addScore()}</td></tr>
                    </tbody></table>
                  </div>
                  <div className="stopwatch">
                    <h2>stopwatch</h2>
                    <h1 className="stopwatch-time">0</h1>
                    <button>start</button>
                    <button>reset</button>
                  </div>
                </div>);
    }

    const PlayerList = ({model}) => {
      return (
        <div>
          {
            model.Players.map((item,index) => {
              return <div className='player' key={item.name}>
                <div className='player-name'>{item.name}</div>
                <div className='player-score counter'>
                  <button onClick={()=>model.Decrement(index)} className='counter-action decrement'>-</button>
                  <span className='counter-score'>{item.score}</span>
                  <button onClick={()=>model.More(index)} className='counter-action increment'>+</button>
                </div>
              </div>
            })
          }
        </div>
      );
    }


    const PlayerForm = () => {
      return (
        <div className='add-player-form'>
          <form>
            <input type="text" placeholder='ENTER A NAME' />
            <input type="submit" value='add player' />
          </form>
        </div>
      );
    }
    const Application = ({ title, players }) => {
      return (
        <div className='scoreboard'>
          <Header players={players} />
          <PlayerList players={players}/>
          <PlayerForm />    
        </div>
      );
    }

  
    
    let model = new Model();
    let render = () => {
       ReactDOM.render(
          <View title="View" model={model} />,
          document.getElementById('container')
       );
    };
    model.subscribe(render);
    render(); 











