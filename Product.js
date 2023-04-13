class Product {

    constructor(designation = null, prix = null, qte = null){
        this.designation = designation;
        this.prix = Number(prix);
        this.qte = Number(qte);
    }
    PrixQuantiteStocke(){
       return this.prix * this.qte;
    }
}
let ListProduct =[];
const form = document.getElementById('productform');
const designationInput = document.getElementById('designation');
const prixInput = document.getElementById('prix');
const qteInput = document.getElementById('qte');
const tableauProduits = document.getElementById("tableau-produits");


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let newProduct = new Product;
  newProduct.designation = designationInput.value;
  newProduct.prix = Number(prixInput.value);
  newProduct.qte = Number(qteInput.value);
  ListProduct.push(newProduct);
  // Vider le tableau
    while(tableauProduits.rows.length > 0) {
        tableauProduits.deleteRow(0);
    }
    // Boucle pour parcourir chaque objet dans ListProduct array
    ListProduct.forEach(function(produit) {
    // Créer une nouvelle ligne dans le tableau
    const nouvelleLigne = tableauProduits.insertRow(-1);
   
    // Créer des cellules pour chaque propriété du produit
    const celluleDesignation = nouvelleLigne.insertCell(0);
    const cellulePrix = nouvelleLigne.insertCell(1);
    const celluleQuantite = nouvelleLigne.insertCell(2);
    const celluleMontantStock = nouvelleLigne.insertCell(3);

    // Ajouter les valeurs du produit à chaque cellule
    celluleDesignation.appendChild(document.createTextNode(produit.designation));
    cellulePrix.appendChild(document.createTextNode(produit.prix));
    celluleQuantite.appendChild(document.createTextNode(produit.qte));
    celluleMontantStock.appendChild(document.createTextNode(produit.PrixQuantiteStocke()));
    });

  console.log(ListProduct);
});

