const express = require("express");
const app = express();app.listen(3001, () => {

let responseBase = {
    error: false,
    codigo: 200,
    mensaje: ''
};

const hotels = [{"information":{"company_email":"paragraph@outlook.com","company_name":"San-ice","company_phone":"Daron"},"room_information":{"accept_pet":false,"accessible_all":false}},{"information":{"company_email":"julie@gmail.com","company_name":"Lanix","company_phone":"Kendall"},"room_information":{"accept_pet":true,"accessible_all":true}},{"information":{"company_email":"organ_kara@hotmail.com","company_name":"Lanedom","company_phone":"Louvenia"},"room_information":{"accept_pet":true,"accessible_all":false}},{"information":{"company_email":"drop57@yahoo.com","company_name":"Goldhow","company_phone":"Keegan"},"room_information":{"accept_pet":true,"accessible_all":false}},{"information":{"company_email":"such8@gmail.com","company_name":"Mathron","company_phone":"Dandre"},"room_information":{"accept_pet":true,"accessible_all":false}},{"information":{"company_email":"brandon@hotmail.com","company_name":"Sunlatline","company_phone":"Bonita"},"room_information":{"accept_pet":true,"accessible_all":false}},{"information":{"company_email":"exercitationem@yahoo.com","company_name":"Zervivatech","company_phone":"Ila"},"room_information":{"accept_pet":false,"accessible_all":true}},{"information":{"company_email":"pattern_berenice@outlook.com","company_name":"J-zardex","company_phone":"Mariano"},"room_information":{"accept_pet":true,"accessible_all":true}},{"information":{"company_email":"space@gmail.com","company_name":"Anquadplanet","company_phone":"Orlando"},"room_information":{"accept_pet":true,"accessible_all":false}},{"information":{"company_email":"guide@yahoo.com","company_name":"Subzatlane","company_phone":"Santina"},"room_information":{"accept_pet":true,"accessible_all":true}}]

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST', 'OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/hotels', function (req, res) {
    res.send(hotels);
});

 console.log("El servidor está inicializado en el puerto 3001");
});
