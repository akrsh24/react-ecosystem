// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//     const [title, setTitle] = useState("");
//     return (
//         <>
//             <label htmlFor="title">Enter title</label>
//             <input type="text" id="title" onChange={setTitle(e)} />
//             <h1>Welcome to React {title}!</h1>
//         </>
//     );
// }

// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Welcome to React</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));