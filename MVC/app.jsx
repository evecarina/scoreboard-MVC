class Model{
      constructor(){
        this.PLAYERS = [
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
          }
        ];
        this.input=null;
        this.render=undefined;
      }
      subscribe(render){
        this.render=render;
      }
      render(){
        this.render();
      }
      score(){
        let sum=0;
        for(let i=0 ; i<this.PLAYERS ;i++)
          sum+=player.score;
        return sum;
      }
      decrement(index){
        if(this.PLAYERS[index].score>0){
          this.PLAYERS[index].score--;
          this.render();
        }
      }
      more(index){
        this.PLAYERS[index].score++;
        this.render();
      }
    
    }



    const Header = ({model})=>{
      return (  <div className="header">
                  <div className="stats">
                    <table><tbody>
                      <tr><td>Players:</td><td>{model.PLAYERS.length}</td></tr>
                      <tr><td>Total ponits:</td><td>{model.score()}</td></tr>
                    </tbody></table>
                  </div>
                  <div className="stopwatch">
                    <h2>stopwatch</h2>
                    <h1 className="stopwatch-time">0</h1>
                    <button>start</button><button>reset</button>
                  </div>
                </div>);
    }


    const PlayerList = ({model})=>{
      return (
        <div>
        {
          model.PLAYERS.map((item,index)=>{
                return (
                        <div key={index} className="player">
                          <div className="player-name">{item.name}</div>
                          <div className="player-score counter">
                            <button onClick={()=>model.decrement(index)} className="counter-action decrement">-</button>
                            <div className="counter-score">{item.score}</div>
                            <button onClick={()=>model.more(index)} className="counter-action increment">+</button>
                          </div>
                        </div>);
            })
        }
        </div>);
    }

    const PlayerForm = ({model})=>{
      return (<div className="add-player-form">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    model.addPlayer();
                  }}
                >
                  <input type="text" onChange={e => (model.input = e.target)} />
                  <input type="submit" value="add player"/>
                </form>
              </div>);
    }

    const UserView=({title,model})=>{
      return (
        <div className="scoreboard">
         <Header model={model}/>
         <PlayerList model={model}/>
         <PlayerForm model={model}/>
         </div>
      );
    }
    
    let model = new Model();
    let render = () => {
       ReactDOM.render(
          <UserView title="UserView" model={model} />,
          document.getElementById('container')
       );
    };
    model.subscribe(render);
    render(); 