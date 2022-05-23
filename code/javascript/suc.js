class Succ {

	constructor(a0){
		this.a0 = a0;
		this.current = a0;


	}

	first(){

		this.curent = a0;
		return current;

	}

	curr(){

		return current;

	}

	next(){




	}

	at(i){

		current = 0;
		let index = i;
		while(current < i){

			this.next();
			i--;

		}
		return current;

	}

	print(n){


		current = 0;
		let index = i;
		while(current < i){

			console.log(this.next());
			i--;

		}
		return current;

	}
}

class Arit extends Succ {

	constructor(a0, inc){

		super(a0);
		this.inc = inc;

	}

	next(){

		this.current = this.current + this.inc;
		return current;

	}

}


let suc = new Arit(2, 5);
suc.print(10);
