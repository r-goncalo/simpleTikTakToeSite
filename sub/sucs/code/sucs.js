class Succ {

	constructor(a0){
		this.a0 = a0;
		this.current = a0;


	}

	first(){

		this.curent = a0;
		return this.current;

	}

	curr(){

		return this.current;

	}

	next(){




	}

	at(i){

		this.current = this.a0;
		let index = 0;
		while(index < i){

			this.next();
			index++;

		}
		return this.current;

	}

	print(n){


		this.current = this.a0;
		let index = 0;
		console.log(this.current);
		while(index < n){

			console.log(this.next());
			index++;

		}
		return this.current;

	}
}

class Arit extends Succ {

	constructor(a0, inc){

		super(a0);
		this.inc = inc;

	}

	next(){

		this.current = this.current + this.inc;
		return this.current;

	}

}


let suc = new Arit(2, 5);
suc.print(10);
