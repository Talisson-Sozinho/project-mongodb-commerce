db.produtos.find({
  nome: { 
    $not: {
      $in: ["McChicken", "Big Mac"],
    },
  },
},  
  { nome: 1, curtidas: 1, vendidos: 1, _id: 0 });