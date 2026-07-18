import "./App.css";

function App() {

  function getPromise ()  : Promise<[string, number]> { {
	 return new Promise((resolve)=> {
	   resolve(['Text', 50]);
	 });
	}}

	getPromise ()
	.then((data) => {
	 console.log(data);
	});

  	type AllType = {
	 name: string;
	 position: number;
	 color: string;
	 weight: number
	}

  	function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
	 return {
	   name: top.name,
	   color: top.color,
	   position: bottom.position,
	   weight: bottom.weight,
	 }
	}

  console.log(compare({name: 'Name', color: 'red'}, {position: 1, weight: 100}));


  // function merge<T extends object, U extends object>(objA: T, objB: U) { я потім побачив таке вирішення в конспекті але не знаю чи моє теж підходить
function merge<U>(objA:Object , objB: U) { 
  return Object.assign(objA, objB)
}

  const wert = merge({name: "Rook"}, {id:2})

  console.log(wert.id)

  



  class Component <T> {
	 constructor (public props:T) {

	 }
	}



class Page extends Component<{title: string}> {
	 pageInfo () {
	   console.log(this.props.title);
	 }
	}


  return <></>;
}

export default App;
