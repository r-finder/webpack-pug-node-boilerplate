class HomeController {
    constructor() {
    }

    getData(req, res) {
        let result = { 
          headers: ['x1', 'x2', 'x3'],
          rows: [
            ['x1', 'x2', 'x3'],
            ['x1', 'x2', 'x3'],
            ['x1', 'x2', 'x3'],
          ]
        };
        res.send(result);
    }
}

export default HomeController;