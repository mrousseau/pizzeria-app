const api = 'http://localhost:3000/pizzas'; // Fill the api URL here and use it everywhere

export class PizzaService {


    constructor( $http) {
        this.$http = $http;
    }


    getPizzas() {

        return this.$http.get(api)
            .then((response) =>
                response.data
            );

    }
}