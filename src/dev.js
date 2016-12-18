import './dev.scss';
import ReactLazyload from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-lazyload">
        <ReactLazyload />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
