---
title: Utiliser les objets
slug: Web/JavaScript/Guide/Working_with_Objects
tags:
  - Beginner
  - Comparing object
  - Document
  - Guide
  - JavaScript
  - Object
  - l10n:priority
translation_of: Web/JavaScript/Guide/Working_with_Objects
original_slug: Web/JavaScript/Guide/Utiliser_les_objets
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}</div>

<p>JavaScript est conçu autour d'un paradigme simple, basé sur les objets. Un objet est un ensemble de propriétés et une propriété est une association entre un nom (aussi appelé <em>clé</em>) et une valeur. La valeur d'une propriété peut être une fonction, auquel cas la propriété peut être appelée « méthode ». En plus des objets natifs fournis par l'environnement, il est possible de construire ses propres objets. Ce chapitre aborde la manipulation d'objets, l'utilisation des propriétés, fonctions et méthodes, il explique également comment créer ses objets.</p>

<h2 id="objects_overview">Un aperçu des objets</h2>

<p>À l'instar de nombreux autres langages de programmation, on peut comparer les objets JavaScript aux objets du monde réel.</p>

<p>En JavaScript, un objet est une entité à part entière qui possède des propriétés et un type. Si on effectue cette comparaison avec une tasse par exemple, on pourra dire qu'une tasse est un objet avec des propriétés. Ces propriétés pourront être la couleur, la forme, le poids, le matériau qui la constitue, etc. De la même façon, un objet JavaScript possède des propriétés, chacune définissant une caractéristique.</p>

<h2 id="objects_and_properties">Les objets et les propriétés</h2>

<p>Un objet JavaScript possède donc plusieurs propriétés qui lui sont associées. Une propriété peut être vue comme une variable attachée à l'objet. Les propriétés d'un objet sont des variables tout ce qu'il y a de plus classiques, exception faite qu'elles sont attachées à des objets. Les propriétés d'un objet représentent ses caractéristiques et on peut y accéder avec une notation utilisant le point « . », de la façon suivante :</p>

<pre class="brush: js">nomObjet.nomPropriete</pre>

<p>Comme pour les variables JavaScript en général, le nom de l'objet (qui peut être une variable) et le nom des propriétés sont sensibles à la casse (une lettre minuscule ne sera pas équivalente à une lettre majuscule). On peut définir une propriété en lui affectant une valeur. Ainsi, si on crée un objet <code>maVoiture</code> et qu'on lui donne les propriétés <code>fabricant</code>, <code>modèle</code>, et <code>année</code> :</p>

<pre class="brush: js">
let maVoiture = new Object();
maVoiture.fabricant = "Ford";
maVoiture.modele = "Mustang";
maVoiture.annee = 1969;
</pre>

<p>L'exemple précédent peut également s'écrire avec <strong><a href="#object_initializers">la syntaxe littérale pour initialiser les objets</a></strong> : on fournit une liste, délimitée par des virgules, qui contient des paires de noms et de valeurs décrivant les propriétés et où le tout est encadré d'accolades (<code>{}</code>) :</p>

<pre class="brush: js">
let maVoiture = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
</pre>

<p>Les propriétés d'un objet qui n'ont pas été affectées auront la valeur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> (et non <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>).</p>

<pre class="brush: js">maVoiture.color; // undefined</pre>

<p>On peut aussi définir ou accéder à des propriétés JavaScript en utilisant une notation avec les crochets (voir la page sur <a href="/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors">les accesseurs de propriétés</a> pour plus de détails). Les objets sont parfois appelés «&nbsp;tableaux associatifs&nbsp;». Cela peut se comprendre, car chaque propriété est associée avec une chaîne de caractères qui permet d'y accéder. Ainsi, par exemple, on peut accéder aux propriétés de l'objet <code>maVoiture</code> de la façon suivante :</p>

<pre class="brush: js">
maVoiture["fabricant"] = "Ford";
maVoiture["modèle"] = "Mustang";
maVoiture["année"] = 1969;
</pre>

<p>Le nom d'une propriété d'un objet peut être n'importe quelle chaîne JavaScript valide (ou n'importe quelle valeur qui puisse être convertie en une chaîne de caractères), y compris la chaîne vide. Cependant, n'importe quel nom de propriété qui n'est pas un identifiant valide (par exemple si le nom d'une propriété contient un tiret, un espace ou débute par un chiffre) devra être utilisé avec la notation à crochets. Cette notation s'avère également utile quand les noms des propriétés sont déterminés de façon dynamique (c'est-à-dire qu'on ne sait pas le nom de la propriété avant l'exécution). Par exemple :</p>

<pre class="brush: js">
// on crée quatre variables avec une même instruction
let monObj = new Object();
let str = "maChaîne";
let rand = Math.random();
let obj = new Object();

monObj.type              = "Syntaxe point";
monObj["date created"]   = "Chaîne avec un espace";
monObj[str]              = "Une valeur qui est une chaîne";
monObj[rand]             = "Nombre aléatoire";
monObj[obj]              = "Objet";
monObj[""]               = "Une chaîne vide";

console.log(monObj);
</pre>

<p>On notera que les valeurs utilisées entre les crochets sont automatiquement converties en chaînes de caractères grâce à la méthode <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString">toString()</a></code> sauf si ces valeurs sont des symboles (cf. <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a>). En effet, les noms des propriétés pour les objets JavaScript peuvent être des chaînes de caractères ou des symboles. Ainsi, dans l'exemple précédent, lorsqu'on ajoute la clé <code>obj</code> sur <code>monObj</code>, le moteur JavaScript appelle la méthode <code>obj.toString()</code> et utilise la chaîne de caractères renvoyée par cette méthode comme nom pour la propriété.</p>

<p>On peut également accéder aux propriétés d'un objet en utilisant une valeur qui est une chaîne de caractères enregistrée dans une variable :</p>

<pre class="brush: js">
let nomPropriété = "fabricant";
maVoiture[nomPropriété] = "Ford";

nomPropriété = "modèle";
maVoiture[nomPropriété] = "Mustang";
</pre>

<p>La notation avec les crochets peut être utilisée dans une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code> afin de parcourir les propriétés énumérables d'un objet. Pour illustrer comment cela fonctionne, on définit la fonction suivante qui affiche les propriétés d'un objet qu'on lui a passé en argument avec le nom associé :</p>

<pre class="brush: js">
function afficherProps(obj, nomObjet) {
  let resultat = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
        resultat += `${nomObjet}.${i} = ${obj[i]}\n`;
    }
  }
  return resultat;
}
</pre>

<p>Si on appelle la fonction avec <code>afficherProps(maVoiture, "maVoiture")</code>, cela affichera le contenu suivant dans la console :</p>

<pre class="brush: js">
maVoiture.fabricant = Ford
maVoiture.modele = Mustang
maVoiture.annee = 1969
</pre>

<h2 id="enumerate_the_properties_of_an_object">Lister les propriétés d'un objet</h2>

<p>À partir d'ECMAScript 5, il existe trois méthodes natives pour lister/parcourir les propriétés d'un objet :</p>

<ul>
 <li>Les boucles <code><a href="/fr/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code> qui permettent de parcourir l'ensemble des propriétés énumérables d'un objet et de sa chaîne de prototypes.</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys(o)</code></a> qui permet de renvoyer un tableau contenant les noms (clés ou <em>keys</em>) des propriétés propres (celles qui ne sont pas héritées via la chaîne de prototypes) d'un objet <code>o</code> pour les propriétés énumérables.</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"><code>Object.getOwnPropertyNames(o)</code></a> qui permet de renvoyer un tableau contenant les noms des propriétés propres (énumérables ou non) d'un objet <code>o</code>.</li>
</ul>

<p>Avant ECMAScript 5, il n'existait aucune méthode native pour lister l'ensemble des propriétés d'un objet. Cependant, on pouvait utiliser le code suivant pour y parvenir :</p>

<pre class="brush: js">
function listerToutesLesProprietes(o){
  let objectToInspect;
  let resultat = [];

  for(objectToInspect = o;
      objectToInspect !== null;
      objectToInspect = Object.getPrototypeOf(objectToInspect)){
    resultat = resultat.concat(Object.getOwnPropertyNames(objectToInspect));
  }
  return resultat;
}
</pre>

<p>Cela peut être utile pour révéler les propriétés « cachées » où leur nom est réutilisé dans la chaîne de prototypes. Pour lister les propriétés accessibles, il suffit de retirer les duplicatas du tableau.</p>

<h2 id="creating_new_objects">Créer de nouveaux objets</h2>

<p>Un environnement JavaScript possède certains objets natifs prédéfinis. En plus de ces objets, il est possible de créer ses propres objets. Pour cela, on peut utiliser un <a href="/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer">initialisateur d'objet</a>. On peut aussi créer un constructeur puis instancier un objet avec cette fonction en utilisant l'opérateur <code>new</code>.</p>

<h3 id="using_object_initializers">Utiliser les initialisateurs d'objets</h3>

<p>On peut créer des objets avec une fonction qui est un constructeur, mais on peut aussi créer des objets avec des <a href="/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer">initialisateurs d'objets</a>. On appelle parfois cette syntaxe la notation <em>littérale</em>.</p>

<p>La syntaxe utilisée avec les initialisateurs d'objets est la suivante :</p>

<pre class="brush: js">
let obj = { 
  propriete_1:   valeur_1,   // propriete_# peut être un identifiant
            2:   valeur_2,   // ou un nombre
            // ...,
  "propriete n": valeur_n
  }; // ou une chaîne
</pre>

<p>où on a <code>obj</code> le nom de l'objet qu'on souhaite créer et chaque <code>propriete_<em>i</em></code> un identifiant (que ce soit un nom, un nombre ou une chaîne de caractères) et chaque <code>valeur_<em>i</em></code> une expression dont la valeur sera affectée à la propriété <code>propriete_<em>i</em></code>. S'il n'est pas nécessaire d'utiliser l'objet <code>obj</code> par la suite, il n'est pas nécessaire de réaliser l'affectation à une variable (attention alors à l'encadrer dans des parenthèses pour que le littéral objet soit bien interprété comme une instruction et non pas comme un bloc.)</p>

<p>Les initialisateurs d'objets sont des expressions et chaque initialisateur entraîne la création d'un nouvel objet dans l'instruction pour laquelle il est exécuté. Des initialisateurs d'objets identiques créeront des objets distincts qui ne seront pas équivalents. Les objets sont créés de la même façon qu'avec <code>new Object()</code>, les objets créés à partir d'une expression littérale seront des instances d'<code>Object</code>.</p>

<p>L'instruction suivante crée un objet et l'affecte à une variable <code>x</code> si et seulement si l'expression <code>cond</code> est vraie :</p>

<pre class="brush: js">if (cond) let x = {emplacement: "le monde"};
</pre>

<p>Dans l'exemple suivant, on crée un objet <code>maHonda</code> avec trois propriétés. La propriété <code>moteur</code> est également un objet avec ses propres propriétés.</p>

<pre class="brush: js">
let maHonda = {
  couleur: "rouge",
  roue: 4,
  moteur: {
    cylindres: 4,
    taille: 2.2
  }
};
</pre>

<p>De la même façon, on pourra utiliser des initialisateurs pour créer des tableaux. Pour plus d'informations à ce sujet, voir <a href="/fr/docs/Web/JavaScript/Guide/Grammar_and_types#les_litt.c3.a9raux_de_tableaux">les littéraux de tableaux</a>.</p>

<h3 id="using_a_constructor_function">Utiliser les constructeurs</h3>

<p>On peut aussi créer des objets d'une autre façon, en suivant deux étapes :</p>

<ol>
 <li>On définit une fonction qui sera un constructeur définissant le type de l'objet. La convention, pour nommer les constructeurs, est d'utiliser une majuscule comme première lettre pour l'identifiant de la fonction.</li>
 <li>On crée une instance de l'objet avec <code>new</code>.</li>
</ol>

<p>Pour définir le type d'un objet, on crée une fonction qui définit le nom de ce type et les propriétés et méthodes des instances. Ainsi, si on souhaite créer un type d'objet pour représenter des voitures, on pourra nommer ce type <code>voiture</code>, et il pourra avoir des propriétés pour le fabricant, le modèle et l'année. Pour ce faire, on pourra écrire la fonction suivante :</p>

<pre class="brush: js">
function Voiture(fabricant, modele, annee) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
}
</pre>

<p>On voit ici qu'on utilise le mot-clé <code>this</code> pour affecter des valeurs aux propriétés d'un objet en fonction des valeurs passées en arguments de la fonction.</p>

<p>On peut désormais créer un objet <code>maVoiture</code> de la façon suivante :</p>

<pre class="brush: js">
let maVoiture = new Voiture("Eagle", "Talon TSi", 1993);
</pre>

<p>Cette instruction crée un objet <code>maVoiture</code> et lui affecte les valeurs fournies pour ses propriétés. On obtient donc <code>maVoiture.fabricant</code> qui sera la chaîne de caractères "Eagle", <code>maVoiture.annee</code> qui sera l'entier 1993, et ainsi de suite.</p>

<p>Grâce à ce constructeur, on peut ensuite créer autant d'objets <code>Voiture</code> que nécessaire. Par exemple :</p>

<pre class="brush: js">
let voitureMorgan = new Voiture("Audi", "A3", 2005);
let voitureMax = new Voiture("Mazda", "Miata", 1990);
</pre>

<p>Un objet peut avoir une propriété qui est elle-même un objet. Ainsi, si on définit un type d'objet <code>personne</code> de cette façon :</p>

<pre class="brush: js">
function Personne(nom, age, sexe) {
  this.nom = nom;
  this.age = age;
  this.sexe = sexe;
}
</pre>

<p>et qu'on instancie deux nouveaux objets <code>personne</code> avec</p>

<pre class="brush: js">
let max = new Personne("Max Gun", 33, "M");
let morgan = new Personne("Morgan Sousbrouille", 39, "M");
</pre>

<p>On pourra réécrire la fonction de définition pour le type <code>Voiture</code> pour inclure une propriété <code>proprietaire</code> qui est représentée par un objet <code>personne</code> :</p>

<pre class="brush: js">
function Voiture(fabricant, modele, annee, proprietaire) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
  this.proprietaire = proprietaire;
}
</pre>

<p>Pour instancier des nouveaux objets, on pourra donc utiliser :</p>

<pre class="brush: js">
let voiture1 = new Voiture("Mazda", "Miata", 1993, max);
let voiture2 = new Voiture("Audi", "A3", 2005, morgan);
</pre>

<p>On notera que le dernier argument n'est pas une chaîne de caractères ou une valeur numérique mais bien un objet. Les objets <code>max</code> et <code>morgan</code> sont passés en arguments pour représenter les propriétaires. Ainsi, si on veut obtenir le nom du propriétaire pour <code>voiture2</code>, on peut accéder à la propriété de la façon suivante :</p>

<pre class="brush: js">
voiture2.proprietaire.nom
</pre>

<p>Il est toujours possible d'ajouter une propriété à un objet défini précédemment. Par exemple, on peut ajouter une propriété à l'objet <code>voiture1</code> avec l'instruction :</p>

<pre class="brush: js">voiture1.couleur = "noir";
</pre>

<p>Ici, on ajoute une propriété <code>couleur</code> à <code>voiture1</code>, et on lui affecte une valeur "noir". Cependant, cela n'affecte pas les autres objets <code>voiture</code>. Pour ajouter une nouvelle propriété à tous les objets, il faudra ajouter la propriété au constructeur <code>voiture</code>.</p>

<h3 id="using_the_object.create_method">Utiliser la méthode <code>Object.create()</code></h3>

<p>Les objets peuvent également être créés en utilisant la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><code>Object.create()</code></a>. Cette méthode peut s'avérer très utile, car elle permet de choisir le prototype pour l'objet qu'on souhaite créer, sans avoir à définir un constructeur.</p>

<pre class="brush: js">
// Propriétés pour animal et encapsulation des méthodes
let Animal = {
  type: "Invertébrés",        // Valeur par défaut  value of properties
  afficherType : function() {  // Une méthode pour afficher le type Animal
    console.log(this.type);
  }
}

// On crée un nouveau type d'animal, animal1
let animal1 = Object.create(Animal);
animal1.afficherType(); // affichera Invertébrés

// On crée un type d'animal "Poisson"
let poisson = Object.create(Animal);
poisson.type = "Poisson";
poisson.afficherType(); // affichera Poisson
</pre>

<h2 id="inheritance">L'héritage</h2>

<p>Tous les objets JavaScript héritent d'un autre objet. L'objet dont on hérite est appelé <em>prototype</em> et les propriétés héritées peuvent être accédées via l'objet <code>prototype</code> du constructeur. Pour plus d'informations sur le fonctionnement de l'héritage, voir la page sur <a href="/fr/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">l'héritage et la chaîne de prototypes</a>.</p>

<h2 id="indexing_object_properties">Indexer les propriétés d'un objet</h2>

<p>Il est possible d'accéder à une propriété via son nom et via son indice (ordinal). Si on définit une propriété grâce à un nom, on accédera toujours à la valeur via le nom. De même, si on définit une propriété grâce à un indice, on y accèdera toujours via son indice.</p>

<p>Cette restriction s'applique lorsqu'on crée un objet et ses propriétés via un constructeur et lorsqu'on déclare les propriétés explicitement (par exemple avec <code>maVoiture.couleur = "rouge"</code>). Si on définit une propriété d'un objet avec <code>maVoiture[5] = "25 kmh"</code>, on pourra faire référence à cette propriété grâce à <code>maVoiture[5]</code>.</p>

<p>Il existe une exception à cette règle lorsqu'on manipule des objets "semblables à des tableaux" provenant d'API Web telles que l'objet <code>forms</code>. Pour ces objets semblables à des tableaux, on peut accéder à une propriété de l'objet grâce à son nom (si l'attribut <a href="/fr/docs/Web/HTML/Global_attributes#name"><code>name</code></a> est utilisé sur l'élément HTML) ou grâce à son index selon l'ordre dans le document. Ainsi, si on souhaite cibler un élément <code>&lt;form&gt;</code> du document possédant un attribut <code>name</code> qui vaut <code>monForm</code> et que cet élément est le deuxième élément du document, on pourra y accéder avec <code>document.forms[1]</code>, <code>document.forms["monForm"]</code> ou encore avec <code>document.forms.monForm</code>.</p>

<h2 id="defining_properties_for_an_object_type">Définir des propriétés pour un type d'objet</h2>

<p>On peut ajouter une propriété à un type précédemment défini en utilisant la propriété <code>prototype</code>. Cela permettra de définir une propriété qui sera partagée par tous les objets d'un même type plutôt qu'elle ne soit définie que pour un seul objet. Le code suivant permet d'ajouter une propriété <code>couleur</code> à tous les objets de type <code>voiture</code>. On affecte ensuite une valeur à cette propriété pour l'objet <code>voiture1</code>.</p>

<pre class="brush: js">
Voiture.prototype.couleur = null;
voiture1.couleur = "noir";
</pre>

<p>Pour plus d'informations, voir l'article sur <a href="/fr/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Function">la propriété <code>prototype</code></a> de l'objet <code>Function</code> de la <a href="/fr/docs/Web/JavaScript/Reference">référence JavaScript</a>.</p>

<h2 id="defining_methods">Définir des méthodes</h2>

<p>Une <em>méthode</em> est une fonction associée à un objet. Autrement dit, une méthode est une propriété d'un objet qui est une fonction. Les méthodes sont définies comme des fonctions normales et sont affectées à des propriétés d'un objet. Voir la page sur <a href="/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions">les définitions de méthodes</a> pour plus d'informations. Par exemple :</p>

<pre class="brush: js">
nomObjet.nomMethode = nomFonction;

let monObj = {
  maMethode: function(params) {
    // …faire quelque chose
  }

  // la forme suivante fonctionne aussi

  monAutreMethode(params) {
    // …faire autre chose
  }
};
</pre>

<p>avec <code>nomObjet</code> qui est un objet existant, <code>nomMethode</code> est le nom de la propriété à laquelle on souhaite affecter la méthode et <code>nomFonction</code> le nom de la fonction.</p>

<p>On peut ensuite appeler la méthode sur l'objet :</p>

<pre class="brush: js">
object.nomMethode(parametres);
</pre>

<p>On peut définir des méthodes pour un type d'objet en incluant la définition de la méthode dans le constructeur. Par exemple, on peut définir une fonction qui mettrait en forme et qui afficherait les propriétés d'un objet <code>voiture</code>. Par exemple :</p>

<pre class="brush: js">
function afficheVoiture() {
  let resultat = `Une belle ${this.modele}, fabriquée en ${this.annee} par ${this.fabricant}`;
  console.log(résultat);
}
</pre>

<p>On peut ensuite ajouter cette fonction comme méthode dans le constructeur avec cette instruction :</p>

<pre class="brush: js">
this.afficheVoiture = afficheVoiture;
</pre>

<p>La définition complète de <code>Voiture</code> serait donc :</p>

<pre class="brush: js">
function Voiture(fabricant, modele, annee, proprietaire) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
  this.proprietaire = proprietaire;
  this.afficheVoiture = afficheVoiture;
}
</pre>

<p>On pourra donc ensuite appeler la méthode <code>afficheVoiture</code> pour chaque objet de ce type :</p>

<pre class="brush: js">voiture1.afficheVoiture();
voiture2.afficheVoiture();
</pre>

<h2 id="using_this_for_object_references">Utiliser <code>this</code> pour les références aux objets</h2>

<p>JavaScript possède un mot-clé spécial <code><a href="/fr/docs/Web/JavaScript/Reference/Operators/this">this</a></code>, qui peut être utilisé à l'intérieur d'une méthode pour faire référence à l'objet courant.</p>

<p>Par exemple, supposons qu'on ait deux objets, <code>responsable</code> et <code>stagiaire</code>. Chaque objet possède son propre <code>nom</code>, <code>age</code> et <code>poste</code>. Dans la fonction <code>direBonjour()</code>, on remarque qu'on utilise <code>this.nom</code>. Lorsqu'on ajoute cette méthode aux deux objets, on peut alors appeler cette fonction depuis les deux objets et celle-ci affichera <code>'Bonjour, mon nom est '</code> suivi de la valeur de la propriété <code>nom</code> rattaché à l'objet indiqué.</p>

<pre class="brush: js">
const responsable = {
 nom: "Jean",
 age: 27,
 poste: "Ingénieur logiciel"
};

const stagiaire = {
 nom: "Ben",
 age: 21,
 poste: "Stagiaire ingénieur logiciel"
};

function direBonjour() {
 console.log('Bonjour, mon nom est', this.nom)
};

// on ajoute direBonjour aux deux objets
responsable.direBonjour = direBonjour;
stagiaire.direBonjour = direBonjour;

responsable.direBonjour(); // Bonjour, mon nom est John'
stagiaire.direBonjour();   // Bonjour, mon nom est Ben'
</pre>

<p>Ici, <code>this</code> fait référence à l'objet courant. On peut également créer une fonction <code>direMonAge()</code> qui affiche une phrase indiquant l'age.</p>

<pre class="brush: js">
function direMonAge(){
  console.log("J'ai " + this.age + " ans.");
};

responsable.direMonAge = direMonAge;
responsable.direMonAge(); // J'ai 27 ans.
</pre>

<h2 id="defining_getters_and_setters">Définir des accesseurs et des mutateurs (<em>getters</em> et <em>setters</em>)</h2>

<p>Un <a href="/fr/docs/Web/JavaScript/Reference/Functions/get">accesseur</a> (<em>getter</em>) est une méthode qui permet de récupérer la valeur d'une propriété donnée. Un <a href="/fr/docs/Web/JavaScript/Reference/Functions/set">mutateur</a> (<em>setter</em>) est une méthode qui permet de définir la valeur d'une propriété donnée. Il est possible de définir des accesseurs et des mutateurs sur chaque objet (qu'il soit natif ou défini par l'utilisateur) qui supporte l'ajout de nouvelles propriétés.</p>

<p>Les accesseurs et mutateurs peuvent être :</p>

<ul>
 <li>définis avec <a href="#object_initializers">les initialisateurs d'objet</a>, ou</li>
 <li>ajoutés après la construction en utilisant une méthode pour ajouter un accesseur ou un mutateur.</li>
</ul>

<p>Lorsqu'on définit des accesseurs et des mutateurs <a href="#object_initializers">en utilisant la syntaxe littérale des initialisateurs d'objet</a>, il suffit d'ajouter un préfixe <code>get</code> devant une fonction pour un accesseur et un préfixe <code>set</code> devant une fonction pour un mutateur. La méthode pour l'accesseur ne doit pas utiliser de paramètre tandis que la méthode pour le mutateur doit utiliser un seul paramètre (la nouvelle valeur à définir). Ainsi :</p>

<pre class="brush: js">
let o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 &lt;-- À ce moment, la méthode get b() est invoquée
o.c = 50;         //   &lt;-- À ce moment, la méthode set c(x) est invoquée
console.log(o.a); // 25
</pre>

<p>Les propriétés de l'objet <code>o</code> sont :</p>

<ul>
 <li><code>o.a</code> — un nombre</li>
 <li><code>o.b</code> — un accesseur qui renvoie la valeur de <code>o.a</code> plus 1</li>
 <li><code>o.c</code> — un mutateur qui définit la valeur de <code>o.a</code> avec la moitié de la valeur passée pour <code>o.c</code></li>
</ul>

<p>On notera que les noms des fonctions pour les accesseurs et les mutateurs définis dans un initialisateur d'objet avec la forme <code>[gs]et <em>propriete</em>()</code> ne sont pas les noms des accesseurs/mutateurs eux-mêmes malgré ce que pourrait laisser croire la syntaxe.</p>

<p>Les accesseurs et mutateurs peuvent également être ajoutés à un objet après sa création via la méthode <code>Object.defineProperties()</code> (ou <code>Object.defineProperty()</code>). Le premier paramètre de cette méthode est l'objet sur lequel on souhaite ajouter les fonctions. Le deuxième paramètre est un objet dont les noms des propriétés sont les noms des accesseurs et/ou des mutateurs et les valeurs de ces propriétés sont les objets qui définissent les fonctions correspondantes. Voici un exemple qui définit un accesseur et un mutateur pour obtenir un résultat équivalent à l'exemple précédent :</p>

<pre class="brush: js">
let o = { a: 0 };

Object.defineProperties(o, {
 'b': { get: function() { return this.a + 1; } },
 'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Exécute le mutateur qui affecte 10 / 2 (5) à la propriété 'a'
console.log(o.b); // Exécute l'accesseur qui renvoie a + 1, soit 6
</pre>

<p>Le choix de l'une ou l'autre de ces formes dépend de votre style et du type de tâche à réaliser. Si vous utilisez déjà un initialisateur d'objet lors de la définition d'un prototype, vous choisirez probablement la première forme, plus concise et plus naturelle. Toutefois, si vous avez besoin d'ajouter des accesseurs/mutateurs plus tard, parce que vous n'avez pas écrit le prototype ou la définition de l'objet, seule la seconde forme sera possible. Cette dernière représente mieux la nature dynamique de JavaScript mais peut rendre la lecture et la compréhension du code plus difficiles.</p>

<h2 id="deleting_properties">Supprimer des propriétés</h2>

<p>Il est possible de retirer des propriétés propres (celles qui ne sont pas héritées) grâce à l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code>. Le code suivant montre comment retirer une propriété :</p>

<pre class="brush: js">
// On crée un nouvel objet, monObj, avec deux propriétés a et b.
let monObj = new Object;
monObj.a = 5;
monObj.b = 12;

// On retire la propriété a, monObj a donc uniquement la propriété b
delete monObj.a;
console.log("a" in monObj) // produit "false"
</pre>

<p>Il est aussi possible de supprimer une propriété de l'objet global avec <code>delete</code> si aucun mot-clé comme <code>var</code>, <code>let</code> ou <code>const</code> n'avait été utilisé :</p>

<pre class="brush: js">
g = 17;
delete g;
</pre>

<h2 id="comparing_objects">Comparer des objets</h2>

<p>En JavaScript, les objets fonctionnent par référence. Deux objets distincts ne sont jamais égaux, même s'ils ont les mêmes valeurs pour les mêmes propriétés. On aura une équivalence uniquement si on compare deux références vers un seul et même objet donné.</p>

<pre class="brush: js">
// Deux variables avec deux objets distincts
// qui ont les mêmes propriétés
let fruit = {nom: "pomme"};
let fruit2 = {nom: "pomme"};

fruit == fruit2  // renvoie false
fruit === fruit2 // renvoie false</pre>

<pre class="brush: js">
// Deux variables référençant un même objet
let fruit = {nom: "pomme"};
let fruit2 = fruit;  // On affecte la même référence

// dans ce cas fruit et fruit2 pointent vers le même objet
fruit == fruit2  // renvoie true
fruit === fruit2 // renvoie true

fruit.nom = "raisin";
console.log(fruit2); // affiche {nom: "raisin"} et non {nom: "pomme"}
</pre>

<p>Pour plus d'informations sur les opérateurs de comparaisons, voir <a href="/fr/docs/Web/JavaScript/Reference/Operators">cet article</a>.</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li>Pour aller plus loin, voir <a href="/fr/docs/Web/JavaScript/Guide/Details_of_the_Object_Model">les détails du modèle objet javaScript</a></li>
 <li>Pour en savoir plus sur les classes ECMAScript 2015 (une nouvelle façon de créer des objets), lire le chapitre sur les <a href="/fr/docs/Web/JavaScript/Reference/Classes">classes JavaScript</a>.</li>
</ul>

<p>{{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}</p>
