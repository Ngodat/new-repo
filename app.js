function MyApp({name}) {
  return <h1>Hello, {name}!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp name="Dat"/>);

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<MyApp name="Dat"/>);
// ReactDOM.createRoot(document.getElementById('root')).render((<MyApp name="Dat"/>));
// ReactDOM.createRoot(document.getElementById('root2')).render((<MyApp name="Lala"/>));
