import _ from 'lodash';

const api = 'http://localhost:3000/pizzas'; // Fill the api URL here and use it everywhere

export class PizzaService {


    constructor($http) {
        this.$http = $http;
        this.pizzas = this.getPizzas();
    }

    getPizzas() {

        return this.$http.get(api)
            .then((response) => {
                for (let i = 0; i < response.data.length; ++i) {

                    response.data[i].type = 'pizza';
                }
                return response.data;
            }
            );

    }

    getPizzaById(id) {

        return this.pizzas.then(pizzas => _.find(pizzas, p => p.id === id));
    }
}