---
title: Héritage et chaîne de prototype
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
tags:
  - Guide
  - Héritage
  - Intermédiaire
  - JavaScript
  - OOP
translation_of: Web/JavaScript/Inheritance_and_the_prototype_chain
original_slug: Web/JavaScript/Héritage_et_chaîne_de_prototypes
---
<div>{{jsSidebar("Advanced")}}</div>

<p>JavaScript peut prêter à confusion losqu'on est habitué à manipuler des langages de programmation manipulant les classes (tels que Java ou C++). En effet, JavaScript est un langage dynamique et ne possède pas de concept de classe à part entière (le mot-clé <code>class</code> a certes été ajouté avec ES2015 mais il s'agit uniquement de sucre syntaxique, JavaScript continue de reposer sur l'héritage prototypique).</p>

<p>En ce qui concerne l'héritage, JavaScript n'utilise qu'une seule structure : les objets. Chaque objet possède une propriété privée qui contient un lien vers un autre objet appelé le <strong>prototype</strong>. Ce prototype possède également son prototype et ainsi de suite, jusqu'à ce qu'un objet ait {{jsxref("null")}} comme prototype. Par définition, <code>null</code> ne possède pas de prototype et est ainsi le dernier maillon de la <strong>chaîne de prototype</strong>.</p>

<p>La majorité des objets JavaScript sont des instances de {{jsxref("Object")}} qui est l'avant dernier maillon de la chaîne de prototype.</p>

<p>Bien que cette confusion (entre classe et prototype) soit souvent avancée comme l'une des faiblesses de JavaScript, le modèle prototypique est plus puissant que le modèle classique et il est notamment possible de construire un modèle classique à partir d'un modèle prototypique.</p>

<h2 id="Héritage_et_chaîne_de_prototype">Héritage et chaîne de prototype</h2>

<h3 id="Propriété_héritées">Propriété héritées</h3>

<p>Les objets JavaScript sont des ensembles dynamiques de propriétés (les propriétés directement rattachées à un objet sont appelées <strong>propriétés en propre (<em>own properties</em>)</strong>). Les objets JavaScript possèdent également un lien vers un objet qui est leur prototype. Lorsqu'on tente d'accéder aux propriétés d'un objet, la propriété sera recherchée d'abord sur l'objet même, puis sur son prototype, puis sur le prototype du prototype et ainsi de suite jusqu'à ce qu'elle soit trouvée ou que la fin de la chaîne de prototype ait été atteinte.</p>

<div class="note">
<p><strong>Note :</strong> Dans la spécification ECMAScript, on utilise la notation <code>unObjet.[[Prototype]]</code> pour faire référence au prototype de <code>unObjet</code>. Depuis ECMAScript 2015, on peut accéder à <code>[[Prototype]]</code> grâce aux accesseurs {{jsxref("Object.getPrototypeOf()")}} et {{jsxref("Object.setPrototypeOf()")}}. Cela est équivalent à la propriété JavaScript <code>__proto__</code> qui était non-standard avant ES2015 mais qui était de fait implémentée par la majorité des navigateurs.</p>

<p>Cette propriété ne devrait pas être confondue avec la propriété <code><em>func</em>.prototype</code> des fonctions qui définissent le <code>[[Prototype]]</code> à affecter aux instances des objets créés par cette fonction lorsqu'elle est utilisée comme constructeur. La propriété <code><strong>Object.prototype</strong></code> représente le prototype de {{jsxref("Object")}}.</p>
</div>

<p>Voici ce qui se produit lorsqu'on tente d'accéder à une propriété :</p>

<pre class="brush: js">// On commence par créer un objet o pour lequel la fonction f sera
// son constructeur et lui créera deux propriétés en propre
// a et b :
let f = function () {
   this.a = 1;
   this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// on ajoute des propriétés au prototype de la fonction
// f
f.prototype.b = 3;
f.prototype.c = 4;

// Note : on ne définit pas le prototype de f avec f.prototype = {b:3,c:4};
// car cela briserait la chaîne de prototype

// o.[[Prototype]] possède les propriétés b and c.
// o.[[Prototype]].[[Prototype]] est Object.prototype.
// Enfin, o.[[Prototype]].[[Prototype]].[[Prototype]] vaut null.
// On a alors atteint la fin de la chaîne de prototype car,
// par définition, null n'a pas de [[Prototype]].
// Ainsi, la chaîne complète est ici :
// {a: 1, b: 2} ---&gt; {b: 3, c: 4} ---&gt; Object.prototype ---&gt; null

console.log(o.a); // 1
// Existe-t-il une propriété 'a' en propre sur o ? Oui, elle vaut 1.

console.log(o.b); // 2
// Existe-t-il une propriété 'b' en propre sur o ? Oui, elle vaut 2.
// Le prototype possède également une propriété 'b' mais elle n'est pas
// utilisée.
// C'est ce qu'on appelle l'ombrage (shadowing en anglais)

console.log(o.c); // 4
// Existe-t-il une propriété 'c' en propre sur o ? Non, on vérifie le
// prototype.
// Existe-t-il une propriété 'c' en propre sur o.[[Prototype]] ?
// Oui, elle vaut 4.

console.log(o.d); // undefined
// Existe-t-il une propriété 'd' en propre sur o ? Non, on vérifie le
// prototype.
// Existe-t-il une propriété 'd' en propre sur o.[[Prototype]] ? Non, on vérifie le
// prototype.
// o.[[Prototype]].[[Prototype]] est Object.prototype et ne contient pas
// de propriété 'd' par défaut. On vérifie son prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] est null, on arrête la recherche
// aucune propriété n'est trouvée, le moteur renvoie undefined.
</pre>

<p>Lorsquon définit une propriété sur un objet, cela définit une propriété en propre. La seule exception se produit lorsqu'on définit <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#Définir_des_accesseurs_et_des_mutateurs_(getters_et_setters)">un accesseur et/ou un mutateur</a> sur une propriété héritée.</p>

<h3 id="Méthodes_héritées">Méthodes héritées</h3>

<p>JavaScript ne possède pas de méthodes au sens des langages de classe. En effet, en JavaScript, toute fonction associée à un objet est également une propriété. Une fonction héritée se comportera comme n'importe quelle autre propriété (y compris pour l'ombrage mentionné ci-avant où on pourra parler de surcharge).</p>

<p>Lorsqu'une fonction héritée est exécutée, la valeur de <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this"><code>this</code></a> pointe vers l'objet hérité et non vers l'objet prototype qui possède la fonction comme propriété en propre.</p>

<pre class="brush: js">var o = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// Quand on appelle o.m ici, 'this' fera référence à o

var p = Object.create(o);
// p est un objet qui hérite de o

p.a = 4; // on crée une propriété 'a' en propre sur p
console.log(p.m()); // 5
// lorsque p.m est appelée, 'this' fait référence à p.
// Ainsi quand p hérite de m via o,
// 'this.a' signifie p.a, soit la propriété 'a' de p


</pre>

<h2 id="Utiliser_les_prototypes_avec_JavaScript">Utiliser les prototypes avec JavaScript</h2>

<p>Regardons un peu plus en détail ce qui se déroule en arrière-plan.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Pour tous les exempls suivants, nous vous invitons à ouvrir la "console" de votre navigateur pour y copier/coller/éditer les fragments de code. Pour savoir comment lancer cette console, vous pouvez lire la documentation des navigateurs : <a href="/fr/docs/Tools">Firefox</a>, <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome</a>, <a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide">Edge</a>.</p>
</div>

<p>En JavaScript, comme mentionné ci-dessus, les fonctions peuvent avoir des propriétés. Toutes les fonctions ont une propriété spéciale intitulée <code>prototype</code>.</p>

<pre class="brush: js">function faireUnTruc(){}
console.log( faireUnTruc.prototype ); // Object {...}
// Peu importe comment vous déclarez la fonction.
// une fonction en JavaScript aura toujours une propriété
// prototype par défaut.
var faireUnTruc= function(){};
console.log(faireUnTruc.prototype); // Object {...}
</pre>

<p>Comme mentionné avant, <code>faireUnTruc()</code> possède une propriété par défaut <code>prototype</code>. Après avoir exécuté ce code dans une console, la console devrait afficher un objet semblable à :</p>

<pre class="brush: js">{
    constructor: ƒ faireUnTruc(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}</pre>

<p>On peut ajouter des propriétés au prototype de <code>faireUnTruc()</code> comme suit :</p>

<pre class="brush: js">function faireUnTruc(){}
faireUnTruc.prototype.toto = "truc";
console.log( faireUnTruc.prototype );</pre>

<p>Produira le résultat suivant :</p>

<pre class="brush: js">{
    toto: "truc",
    constructor: ƒ faireUnTruc(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
</pre>

<p>On peut utiliser l'opérateur <code>new</code> afin de créer une instance de <code>faireUnTruc()</code> basée sur ce prototype. Pour utiliser l'opérateur <code>new</code>, il suffira d'appeler la fonction et de précéder cet appel avec le mot-clé <code>new</code>. Lorsqu'on appelle une fonction avec un opérateur <code>new</code>, celle-ci renvoie un objet qui est une instance de la fonction. On peut ensuite ajouter des propriétés sur cet objet.</p>

<p>Voyons le code qui suit :</p>

<pre class="brush: js">function faireUnTruc(){}
faireUnTruc.prototype.toto = "truc"; // on ajoute une propriété au prototype
var uneInstance = new faireUnTruc();
uneInstance.prop = "une valeur"; // on ajoute une propriété sur l'objet
console.log(uneInstance);</pre>

<p>Exécuté, ce code produira le résultat suivant dans la console :</p>

<pre class="brush: js">{
    prop: "une valeur",
    __proto__: {
        toto: "truc",
        constructor: ƒ faireUnTruc(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}</pre>

<p>Comme nous l'avons vu avant, la valeur de <code>__proto__</code> pour <code>uneInstance</code> est <code>faireUnTruc.prototype</code>. Mais quel est l'intérêt ? Lorsqu'on accède à une propriété de <code>uneInstance</code>, le moteur contrôle d'abord si <code>uneInstance</code> possède cette propriété.</p>

<p>Si <code>uneInstance</code> ne possède pas cette propriété, le moteur contrôlera la propriété sur la propriété <code>__proto__</code> de <code>uneInstance</code> (c'est-à-dire <code>faireUnTruc.prototype</code>). Si la propriété <code>__proto__</code> de <code>uneInstance</code> possède la propriété qu'on recherche, ce sera celle-ci qui sera utilisée.</p>

<p>Si <code>__proto__</code> de <code>unTruc</code> ne possède pas la propriété recherchée, le moteur contrôle la propriété <code>__proto__</code> de la propriété <code>__proto__</code> de <code>uneInstance</code>. Par défaut, la propriété <code>__proto__</code> de n'importe quel propriété <code>prototype</code>d'une fonction est  <code>window.Object.prototype</code>. Ainsi, la propriété <code>__proto__</code> de la propriété <code>__proto__</code> de  <code>uneInstance</code> (c'est-à-dire <code>__proto__</code> de <code>faireUnTruc.prototype</code> (c'est-à-dire. <code>Object.prototype</code>)) est contrôlée pour vérifier si la propriété y est présente.</p>

<p>Si la propriété n'est pas trouvée sur la propriété <code>__proto__</code> de la propriété <code>__proto__</code> de <code>uneInstance</code>, c'est la proriété <code>__proto__</code> de la propriété <code>__proto__</code> de la propriété <code>__proto__</code> de <code>uneInstance</code> qui est contrôlée. Cependant il y a un problème car la propriété <code>__proto__</code> de la propriété <code>__proto__</code> de la propriété <code>__proto__</code> de <code>unTruc</code> n'existe pas. Autrement dit, toute la chaîne de prototype a été parcouru et on ne peut pas remonter d'un cran sur un autre <code>__proto__</code> et le moteur peut conclure que la propriété n'existe pas pour cet objet et renvoyer <code>undefined</code>.</p>

<p>Regardons ce qui se produit dans la console avec un peu de code :</p>

<pre class="brush: js">function faireUnTruc(){}
faireUnTruc.prototype.toto = "truc";
var uneInstance = new faireUnTruc();
uneInstance.prop = "une valeur";
console.log("uneInstance.prop: " + uneInstance.prop);
console.log("uneInstance.toto: " + uneInstance.toto);
console.log("faireUnTruc.prop: " + faireUnTruc.prop);
console.log("faireUnTruc.toto: " + faireUnTruc.toto);
console.log("faireUnTruc.prototype.prop: " + faireUnTruc.prototype.prop);
console.log("faireUnTruc.prototype.toto:  " + faireUnTruc.prototype.toto);</pre>

<p>Le résultat est le suivant :</p>

<pre class="brush: js">uneInstance.prop: une valeur
uneInstance.toto: truc
faireUnTruc.prop: undefined
faireUnTruc.toto: undefined
faireUnTruc.prototype.prop: undefined
faireUnTruc.prototype.toto: truc</pre>

<h2 id="Les_différentes_façons_de_créer_des_objets_et_les_impacts_sur_la_chaîne_de_prototype">Les différentes façons de créer des objets et les impacts sur la chaîne de prototype</h2>

<h3 id="Objets_créés_avec_les_raccourcis_syntaxiques_littéraux">Objets créés avec les raccourcis syntaxiques (littéraux)</h3>

<pre class="brush: js">var o = {a: 1};

// Le nouvel objet possède Object.prototype comme [[Prototype]]
// o ne possède pas de propriété 'hasOwnProperty' en propre
// hasOwnProperty est une propriété en propre de Object.prototype.
// o hérite de hasOwnProperty via Object.prototype
// Object.prototype possède null comme prototype.
// o ---&gt; Object.prototype ---&gt; null

var b = ['coucou', 'ça va', '?'];

// Les tableaux (Array) héritent de Array.prototype
// (qui possède les méthodes indexOf, forEach, etc.)
// La chaîne de prototype est donc :
// b ---&gt; Array.prototype ---&gt; Object.prototype ---&gt; null

function f() {
  return 2;
}

// Les fonctions héritent de Function.prototype
// (qui possède les méthodes call, bind, etc.)
// La chaîne de prototype est donc
// f ---&gt; Function.prototype ---&gt; Object.prototype ---&gt; null
</pre>

<h3 id="Objets_créés_avec_un_constructeur">Objets créés avec un constructeur</h3>

<p>En JavaScript, un constructeur est <em>juste</em> une fonction que l'on invoque avec l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new">new</a></code>.</p>

<pre class="brush: js">function Graphe() {
  this.sommets = [];
  this.arêtes = [];
}

Graphe.prototype = {
  ajoutSommet: function(v) {
    this.sommets.push(v);
  }
};

var g = new Graphe();
// g est un objet qui possède les propriétés 'sommets' and 'arêtes' en propre.
// g.[[Prototype]] est la valeur de Graphe.prototype lorsque "new Graphe()" est exécuté.
</pre>

<h3 id="Objets_créés_avec_Object.create">Objets créés avec <code>Object.create()</code></h3>

<p>ECMAScript 5 a introduit une nouvelle méthode : {{jsxref("Object.create()")}}. Appeler cette méthode crée un nouvel objet et le prototype de cet objet est le premier argument de cette fonction :</p>

<pre class="brush: js">var a = {a: 1};
// a ---&gt; Object.prototype ---&gt; null

var b = Object.create(a);
// b ---&gt; a ---&gt; Object.prototype ---&gt; null
console.log(b.a); // 1 (héritée)

var c = Object.create(b);
// c ---&gt; b ---&gt; a ---&gt; Object.prototype ---&gt; null

var d = Object.create(null);
// d ---&gt; null
console.log(d.hasOwnProperty);
// undefined, car d n'hérite pas de Object.prototype
</pre>

<h4 id="Suppression_des_propriétés_avec_delete">Suppression des propriétés avec <code>delete</code></h4>

<p>L'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_delete">delete</a></code> permet de supprimer une propriété directement rattachée à un objet. En revanche, il n'empêchera pas l'exploration de la chaîne de prototype :</p>

<pre class="brush: js">let a = {toto: 1};
let b = Object.create(a);

console.log(b.toto); // Affiche 1 car c'est une propriété disponible via le prototype
b.toto = 5;
console.log(b.toto); // Affiche 5, désormais cette propriété existe sur l'objet

delete b.toto;
console.log(b.toto); // Affiche 1 : la propriété n'est plus disponible sur l'objet mais
                     // on peut toujours la récupérer via le prototype</pre>

<h3 id="Objets_créés_avec_le_mot-clé_class">Objets créés avec le mot-clé <code>class</code></h3>

<p>ECMAScript 2015 introduit plusieurs mots-clés destinés à créer du sucre syntaxique pour manipuler des <a href="/fr/docs/Web/JavaScript/Reference/Classes">classes</a>. Ces mots-clés sont {{jsxref("Instructions/class", "class")}}, {{jsxref("Classes/constructor", "constructor")}}, {{jsxref("Classes/static", "static")}}, {{jsxref("Classes/extends", "extends")}} et {{jsxref("Opérateurs/super", "super")}}.</p>

<pre class="brush: js">'use strict';

class Polygone {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}

class Carré extends Polygone {
  constructor(longueurCôté) {
    super(longueurCôté, longueurCôté);
  }
  get aire() {
    return this.hauteur * this.largeur;
  }
  set longueurCôté(nouvelleLongueur) {
    this.hauteur = nouvelleLongueur;
    this.largeur = nouvelleLongueur;
  }
}

var carré = new Carré(2);
</pre>

<h3 id="Performance">Performance</h3>

<p>Le temps de recherche des propriétés sera plus élevé si ces propriétés sont situées plus loin dans la chaîne de prototype. Tenter d'accéder à ces propriétés éloignées pourra avoir un impact négatif sur les performances. De plus, tenter d'accéder à des propriétés inexistantes entraîntera toujours le parcours de l'ensemble de la chaîne de prototype.</p>

<p>Lorsqu'on parcourt les propriétés d'un objet, <strong>toutes</strong> les propriétés énumérables situées sur la chaîne de prototype seront parcourues. Pour vérifier si un objet possède une propriété en propre plus que via sa chaîne de prototype, on devra utiliser la méthode <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty"><code>hasOwnProperty()</code></a> qui est héritée grâce à <code>Object.prototype</code>. Prenons un exemple concret avec le cas du graphe traité dans un exemple précédent :</p>

<pre class="brush: js">console.log(g.hasOwnProperty('arêtes'));
// true

console.log(g.hasOwnProperty('nononon'));
// false

console.log(g.hasOwnProperty('ajoutSommet'));
// false

console.log(g.__proto__.hasOwnProperty('ajoutSommet'));
// true
</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> Tester si une propriété vaut {{jsxref("undefined")}} ne suffit pas à vérifier la présence de la propriété sur un objet : une propriété peut très bien exister sur un objet mais valoir <code>undefined</code>.</p>
</div>

<h3 id="Mauvaise_pratique_étendre_les_prototypes_natifs">Mauvaise pratique : étendre les prototypes natifs</h3>

<p>On peut parfois voir du code qui étend <code>Object.prototype</code> ou l'un des prototypes natifs.</p>

<p>Cette technique est intitulée <em>monkey patching </em>et brise l'encapsulation. Bien qu'elle soit utilisée par certains <em>frameworks</em>, il n'existe pas de raison suffisante pour étendre les objets natifs avec des fonctionnalités non-standard.</p>

<p>La<strong> seule</strong> raison qui peut prévaloir pour l'extension de prototypes natifs est l'ajout de fonctionnalités JavaScript apparues avec les nouvelles versions des spécifications et moteurs afin d'en disposer dans de plus anciens environnements.</p>

<h3 id="Résumé_des_méthodes_pour_étendre_la_chaîne_de_prototype">Résumé des méthodes pour étendre la chaîne de prototype</h3>

<p>Voici un tableau avec les quatre outils qui permettent d'étendre une chaîne de prototypes avec chacun leurs avantages et leurs inconvénients. Tous les exemples mentionnés permettent de créer le même objet <code>inst</code> (et affichant donc le même résultat dans la console) mais de façon différente.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td style="width: 1%;">Nom</td>
   <td>Exemples</td>
   <td>Avantages</td>
   <td style="vertical-align: top; width: 60%;">Inconvénients</td>
  </tr>
  <tr>
   <td>Initialisation</td>
   <td>
    <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = new toto;
proto.truc_prop = "truc val";
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre>
   </td>
   <td style="vertical-align: top;">Prise en charge par l'ensemble des navigateurs. Cette méthode est très rapide, standard et facilement optimisable.</td>
   <td>
    <p>Afin d'utiliser cette méthode, il faut que la fonction ait été initialisée. Pendant cette initialisation, le constructeur peut enregistrer des informations uniques qui doivent être générées pour chaque objet.</p>

    <p>Toutefois, il est possible que ces informations uniques ne soient générées qu'une seule fois.</p>

    <p>De plus, l'initialisation du constructeur peut ajouter des méthodes non souhaitées sur l'objet.</p>

    <p>Cela dit, ces problèmes ne se révèlent que rarement.</p>
   </td>
  </tr>
  <tr>
   <td><code>Object.create()</code></td>
   <td style="vertical-align: top;">
    <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = Object.create(
  toto.prototype
);
proto.truc_prop = "truc val";
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre>

    <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = Object.create(
  toto.prototype,
  {
    truc_prop: {
      value: "truc val"
    }
  }
);
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop)</pre>
   </td>
   <td>Prise en charge par la majorité des navigateurs actuels. Elle permet de définir directement <code>__proto__</code> en une seule fois et le navigateur peut mieux optimiser l'objet. Elle permet aussi de créer des objets sans prototype avec <code>Object.create(null)</code>.</td>
   <td style="vertical-align: top;">
    <p>Cette méthode n'est pas prise en charge par IE8 et les versions antérieures. Toutefois, Microsoft ayant mis un terme au support des systèmes qui utilisent ces navigateurs, ce ne devrait pas être un problème pour la plupart des navigation.</p>

    <p>De plus, la lenteur de l'initialisation de l'objet peut être causer des soucis de performances lorsqu'on utilise un deuxième argument car descripteur de propriété possède un objet rattaché. Lorsqu'on gère des centaines de milliers de descripteurs, cela peut entraîner un certain <em>lag</em>.</p>
   </td>
  </tr>
  <tr>
   <td>
    <p><code>Object.setPrototypeOf()</code></p>
   </td>
   <td>
    <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = {
  truc_prop: "truc val"
};
Object.setPrototypeOf(
  proto, toto.prototype
);
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre>

    <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto;
proto=Object.setPrototypeOf(
  { truc_prop: "truc val" },
  toto.prototype
);
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop)</pre>
   </td>
   <td style="vertical-align: top;">Prise en charge par l'ensemble des navigateurs actuels. Elle permet de manipuler dynamiquement le prototype d'un objet et également de rattacher un prototype à un objet qui n'aurait pas de prototype.</td>
   <td>Cette méthode devrait être dépréciée et possède des performances faibles. En effet, les moteurs tenteront d'optimiser la connaissance de la structure du prototype et cette méthode viendra à l'enconte de ces hypothèses et certains navigateurs pourront même recompiler le code pour le faire fonctionner selon les spécifications. Cette méthode n'est pas prise en charge par IE8 et les versions antérieures.</td>
  </tr>
  <tr>
   <td><code>__proto__</code></td>
   <td style="vertical-align: top;">
    <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = {
  truc_prop: "truc val",
  __proto__: toto.prototype
};
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre>

    <pre class="brush: js">
var inst = {
  __proto__: {
    truc_prop: "truc val",
    __proto__: {
      toto_prop: "toto val",
      __proto__: Object.prototype
    }
  }
};
console.log(inst.toto_prop);
console.log(inst.truc_prop)</pre>
   </td>
   <td>Prise en charge par l'ensemble des navigateurs actuels (y compris IE11 et ultérieurs). Défiinir __proto__ sur quelque chose qui n'est pas un objet échouera silencieusement.</td>
   <td>Cette méthode est dépréciée et n'est pas performante car les moteurs tentent d'optimiser les prototypes. Aussi, le modifier ainsi dynamiquement bloque ces optimisations et peut causer la recompilation du code pour qu'il fonctionne selon les spécifications. Cette méthode n'est pas prise en charge par IE10 et les versions antérieures.</td>
  </tr>
 </tbody>
</table>

<h2 id="prototype_et_Object.getPrototypeOf"><code>prototype</code> et <code>Object.getPrototypeOf()</code></h2>

<p>JavaScript peut prêter à confusion pour les développeurs utilisant Java ou C++. JavaScript est un langage dynamique et les structures peuvent évoluer lors de l'exécution.</p>

<p>Vous avez peut-être remarqué que la fonction <code>A</code> possède une propriété spéciale intitulée <code>prototype</code>. Cette propriété spéciale fonctionne avec l'opérateur <code>new</code> Elle permet de copier la référence  l'objet prototype sur la propriété interne <code>[[Prototype]]</code> de la nouvelle instance créée. Ainsi, avec <code>var a1 = new A()</code>, Le moteur JavaScript définira <code>a1.[[Prototype]] = A.prototype</code>. Quand on tente d'accéder à une des propriétés de l'instance, JavaScript vérifie la présence sur l'instance puis analyse son prototype <code>[[Prototype]]</code>. Cela signifie que tout ce qui est défini sur <code>prototype</code> est effectivement partagé par l'ensemble des instances et on peut même modifier <code>prototype</code> en cours de route afin de modifier indirectement l'ensemble des instances.</p>

<p>Dans l'exemple précédent, si on avait eu <code>var a1 = new A(); var a2 = new A();</code> alors <code>a1.faireUnTruc</code> aurait fait référence à <code>Object.getPrototypeOf(a1).faireUntruc</code> qui est identique à <code>A.prototype.faireUnTruc</code>. Autrement dit <code>Object.getPrototypeOf(a1).faireUnTruc == Object.getPrototypeOf(a2).faireUnTruc == A.prototype.faireUnTruc</code>.</p>

<p>Autrement dit <code>prototype</code> peut être utilisé pour les types et <code>Object.getPrototypeOf()</code> pour les instances.</p>

<p><code>[[Prototype]]</code> est analysé de façon récursive. Ainsi, <code>a1.faireUnTruc</code> correspondra à chercher <code>Object.getPrototypeOf(a1).faireUnTruc</code> puis <code>Object.getPrototypeOf(Object.getPrototypeOf(a1)).faireUnTruc</code> etc., jusqu'à ce qu'elle soit trouvée ou que <code>Object.getPrototypeOf</code>renvoie <code>null</code>.</p>

<p>Ainsi, quand on appelle :</p>

<pre class="brush: js">var o = new Toto();</pre>

<p>Le moteur JavaScript effectue les étapes suivantes :</p>

<pre class="brush: js">var o = new Object();
o.[[Prototype]] = Toto.prototype;
Toto.call(o);</pre>

<p>(ou quelque chose qui y ressemble) et si on écrit ensuite :</p>

<pre class="brush: js">o.unePropriété;</pre>

<p>Le moteur vérifie si <code>o</code> possède une propriété <code>unePropriété</code> en propre. Si ce n'est pas le cas, il vérifie <code>Object.getPrototypeOf(o).unePropriété</code> et ainsi de suite.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>Il est essentiel de comprendre le modèle d'héritage prototypique avant d'écrire du code complexe qui repose sur ces notions. Il est également préférable d'avoir une idée de la longueur de la chaîne de prototype utilisée pour les différents objets et de fragmenter cette chaîne si besoin afin d'éviter des écueils de performances. Enfin, on veillera à ne pas étendre les prototypes natifs sauf afin d'émuler des nouvelles fonctionnalités qui ne seraient pas disponibles dans l'environnement utilisé.</p>
