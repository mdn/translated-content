---
title: Closures (Fermetures)
slug: Web/JavaScript/Closures
tags:
  - Closure
  - Intermédiaire
  - JavaScript
translation_of: Web/JavaScript/Closures
---
<div>{{jsSidebar("Intermediate")}}</div>

<p>Une <strong>fermeture </strong>est la paire formée d'une fonction et des références à son état environnant (<strong>l'environnement lexical</strong>). En d'autres termes, une fermeture donne accès à la portée d'une fonction externe à partir d'une fonction interne (on dit aussi que la fonction « capture son environnement »). En JavaScript, une fermeture est créée chaque fois qu'une fonction est créée.</p>

<h2 id="Portée">Portée</h2>

<p>Dans l'exemple suivant :</p>

<pre class="brush: js">function init() {
  var nom = "Mozilla"; // nom est une variable locale de init
  function afficheNom() { // afficheNom est une fonction interne de init
    console.log(nom); // ici nom est une variable libre (définie dans la fonction parente)
  }
  afficheNom();
};
init();</pre>

<p>La fonction <code>init</code> créé une variable locale <code>nom</code> et une fonction interne <code>afficheNom</code>. La fonction interne est seulement visible de l'intérieur de <code>init</code>. Contrairement à <code>init</code>, <code>afficheNom</code> ne possède pas de variable locale propre, mais elle utilise la variable <code>nom</code> de la fonction parente (ceci dit <code>afficheNom</code> pourrait utiliser ses variables locales propres si elle en avait).</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/78dg25ax/", "js,result", 250)}}</p>

<p>Vous pouvez exécuter le code sur cette <a href="https://jsfiddle.net/4U5VD/">page</a> pour voir son fonctionnement. On a ici un exemple de portée lexicale : en JavaScript, la portée d'une variable est définie par son emplacement dans le code source (elle apparaît de façon <em>lexicale</em>), les fonctions imbriquées ont ainsi accès aux variables déclarées dans les portées parentes.</p>

<h2 id="Fermeture">Fermeture</h2>

<p>Étudions l'exemple suivant :</p>

<pre class="brush: js">function creerFonction() {
  var nom = "Mozilla";
  function afficheNom() {
    console.log(nom);
  }
  return afficheNom;
}

var maFonction = creerFonction();
maFonction();
</pre>

<p>Ce code produit le même résultat que l'appel à <code>init()</code> étudié précédemment : "Mozilla" est affiché dans la console. L'intérêt de ce code est qu'une fermeture contenant la fonction <code>afficheNom</code> est renvoyée par la fonction parente, avant d'être exécutée.</p>

<p>Le code continue à fonctionner, ce qui peut paraître contre-intuitif au regard de la syntaxe utilisée. Usuellement, les variables locales d'une fonction n'existent que pendant l'exécution d'une fonction. Une fois que <code>creerFonction()</code> a fini son exécution, on aurait pû penser que la variable <code>nom</code> n'est plus accessible. Cependant, le code fonctionne : en JavaScript, la variable est donc accessible d'une certaine façon.</p>

<p>L'explication est la suivante : <code>maFonction</code> est une fermeture. La fermeture combine la fonction <code>afficheNom</code> et son environnement. Cet environnement est composé de toutes les variables locales accessibles (dans la portée) à la création de la fermeture. Ici <code>maFonction</code> est une fermeture qui contient la fonction <code>afficheNom</code> et une référence à la variable <code>var nom = "Mozilla"</code> qui existait lorsque la fermeture a été créée. L'instance de <code>afficheNom</code> conserve une référence à son environnement lexical, dans lequel <code>nom</code>  existe. Pour cette raison, lorsque <code>maFonction</code> est invoquée, la variable <code>nom</code> reste disponible et "Mozilla" est transmis à <code>console.log</code>.</p>

<p>Voici un exemple un peu plus intéressant—une fonction <code>ajouterA</code> :</p>

<pre class="brush: js">function ajouterA(x) {
  return function(y) {
    return x + y;
  };
};

var ajouter_5 = ajouterA(5);
var ajouter_10 = ajouterA(10);

console.log(ajouter_5(2));  // 7
console.log(ajouter_10(2)); // 12
</pre>

<p>On définit une fonction <code>ajouterA(x)</code> avec un seul argument <code>x</code> et qui renvoie une fonction anonyme. La fonction anonyme a un seul argument <code>y</code>, et renvoie la somme de <code>x</code> et <code>y</code>.</p>

<p>La fonction <code>ajouterA</code> permet de créer des fermetures qui font la somme de leur argument et d'un nombre fixé. Dans l'exemple ci-dessus, on crée  <code>ajouter_5</code> et <code>ajouter_10</code>. Elles partagent la même fonction, mais des environnements différents. Dans <code>ajouter_5</code>, <code>x</code> vaut 5 ; dans <code>ajouter_10</code>, <code>x</code> vaut 10.</p>

<h2 id="Les_fermetures_en_pratique">Les fermetures en pratique</h2>

<p>On a vu la théorie décrivant les fermetures. Est-ce qu'elles sont utiles pour autant ? Une fermeture permet d'associer des données (l'environnement) avec une fonction qui agit sur ces données. On peut faire un parallèle avec la programmation orientée objet car les objets permettent d'associer des données (les propriétés) avec des méthodes.</p>

<p>Ainsi, on peut utiliser une fermeture pour tout endroit où on utiliserait un objet et ce avec une seule méthode.</p>

<p>Beaucoup de code JavaScript utilisé sur le Web gère des événements : on définit un comportement, puis on l'attache à un événement déclenché par l'utilisateur (tel un clic ou une frappe clavier). Notre code est généralement une fonction de rappel (ou <em>callback</em>) exécutée en réponse à l'événement.</p>

<p>Voici un exemple concret : si on souhaite ajouter des boutons à une page afin d'ajuster la taille du texte, on pourrait définir la taille de police de l'élément <code>body</code> en pixels, et celles des autres éléments relativement à cette première taille grâce à l'unité <code>em</code> :</p>

<pre class="brush: css">body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
</pre>

<p>Les boutons vont ensuite changer la taille de la police de l'élément <code>body</code>, ce changement étant répercuté aux autres éléments grâce aux unités relatives.</p>

<p>Voici le code JavaScript qui correspond :</p>

<pre class="brush: js">function fabriqueRedimensionneur(taille) {
  return function() {
    document.body.style.fontSize = taille + 'px';
  };
};

var taille12 = fabriqueRedimensionneur(12);
var taille14 = fabriqueRedimensionneur(14);
var taille16 = fabriqueRedimensionneur(16);
</pre>

<p><code>taille12</code>, <code>taille14</code>, et <code>taille16</code> sont désormais des fermetures qui peuvent, respectivement, redimensionner le texte de l'élément <code>body</code> à 12, 14, ou 16 pixels. On peut les attacher aux boutons de la façon suivantes :</p>

<pre class="brush: js">document.getElementById('taille-12').onclick = taille12;
document.getElementById('taille-14').onclick = taille14;
document.getElementById('taille-16').onclick = taille16;
</pre>

<pre class="brush: html">&lt;a href="#" id="taille-12"&gt;12&lt;/a&gt;
&lt;a href="#" id="taille-14"&gt;14&lt;/a&gt;
&lt;a href="#" id="taille-16"&gt;16&lt;/a&gt;
</pre>

<p>{{JSFiddleEmbed("https://jsfiddle.net/vnkuZ/7726", "js,result", 200)}}</p>

<h2 id="Émuler_des_méthodes_privées_avec_des_fermetures">Émuler des méthodes privées avec des fermetures</h2>

<p>Certains langages de programmation, comme Java, permettent d'avoir des méthodes privées, c'est-à-dire qu'on ne peut les utiliser qu'au sein de la même classe.</p>

<p>JavaScript ne permet pas de faire cela de façon native. En revanche, on peut émuler ce comportement grâce aux fermetures. Les méthodes privées ne sont pas seulement utiles en termes de restriction d'accès au code, elles permettent également de gérer un espace de nom (<em>namespace</em>) global qui isole les méthodes secondaires de l'interface publique du code ainsi rendu plus propre.</p>

<p>Voici comment définir une fonction publique accédant à des fonctions et des variables privées en utilisant des fermetures. Cette façon de procéder est également connue comme le patron de conception <a href="https://en.wikipedia.org/wiki/Module_pattern">module</a> :</p>

<pre class="brush: js">var compteur = (function() {
  var compteurPrive = 0;
  function changeValeur(val) {
    compteurPrive += val;
  }
  return {
    increment: function() {
      changeValeur(1);
    },
    decrement: function() {
      changeValeur(-1);
    },
    valeur: function() {
      return compteurPrive;
    }
  };
})();

console.log(compteur.valeur()); /* Affiche 0 */
compteur.increment();
compteur.increment();
console.log(compteur.valeur()); /* Affiche 2 */
compteur.decrement();
console.log(compteur.valeur()); /* Affiche 1 */
</pre>

<p>Il y a beaucoup de différences par rapport aux exemples précédents. Au lieu de retourner une simple fonction, on retourne un objet anonyme qui contient 3 fonctions. Et ces 3 fonctions partagent le même environnement. L'objet retourné est affecté à la variable <code>compteur</code>, et les 3 fonctions sont alors accessibles sous les noms <code>compteur.increment</code>, <code>compteur.decrement</code>, et <code>compteur.valeur</code>.</p>

<p>L'environnement partagé vient du corps de la fonction anonyme qui est exécutée dès sa définition complète. L'environnement en question contient deux éléments privés : une variable <code>compteurPrive</code> et une fonction <code>changeValeur</code>. Aucun de ces deux éléments ne peut être utilisé en dehors de la fonction anonyme ; seules les trois fonctions renvoyées par la fonction anonyme sont publiques.</p>

<p>Ces trois fonctions publiques sont des fermetures qui partagent le même environnement. Grâce à la portée lexicale, chacune a accès à<code> compteurPrive</code> et à <code>changeValeur</code>.</p>

<p>On remarquera qu'on définit une fonction anonyme qui crée un compteur puis qu'on l'appelle immédiatement pour assigner le résultat à la variable <code>compteur</code>. On pourrait stocker cette fonction dans une variable puis l'appeler plusieurs fois afin de créer plusieurs compteurs.</p>

<pre class="brush: js">var creerCompteur = function() {
  var compteurPrive = 0;
  function changeValeur(val) {
    compteurPrive += val;
  }
  return {
    increment: function() {
      changeValeur(1);
    },
    decrement: function() {
      changeValeur(-1);
    },
    valeur: function() {
      return compteurPrive;
    }
  };
};

var compteur1 = creerCompteur();
var compteur2 = creerCompteur();
console.log(compteur1.valeur()); /* Affiche 0 */
compteur1.increment();
compteur1.increment();
console.log(compteur1.valeur()); /* Affiche 2 */
compteur1.decrement();
console.log(compteur1.valeur()); /* Affiche 1 */
console.log(compteur2.valeur()); /* Affiche 0 */
</pre>

<p>Ici on peut voir que chacun des deux compteurs est indépendant de l'autre. Un nouvel environnement est instancié à chaque appel <code>creerCompteur()</code>.</p>

<p>L'utilisation de fermetures permet ainsi de bénéficier de certains concepts liés à la programmation orientée objet comme l'encapsulation et la dissimulation de données.</p>

<h2 id="Les_fermetures_et_les_boucles_attention_au_mélange">Les fermetures et les boucles : attention au mélange</h2>

<p>Avant que le mot clé <a href="/fr/docs/Web/JavaScript/Reference/Instructions/let"><code>let</code></a> ne soit introduit avec ECMAScript 2015, un problème se posait fréquemment lorsqu'on manipulait des fermetures au sein d'une boucle. Par exemple :</p>

<pre class="brush: html">&lt;p id="aide"&gt;Des aides seront affichées ici&lt;/p&gt;
&lt;p&gt;E-mail : &lt;input type="text" id="email" name="email"&gt;&lt;/p&gt;
&lt;p&gt;Nom : &lt;input type="text" id="nom" name="nom"&gt;&lt;/p&gt;
&lt;p&gt;Âge : &lt;input type="text" id="âge" name="âge"&gt;&lt;/p&gt;
</pre>

<pre class="brush: js">function afficherAide(aide) {
  document.getElementById('aide').innerHTML = aide;
}

function preparerAide() {
  var texteAide = [
      {'id': 'email', 'aide': 'Votre adresse e-mail'},
      {'id': 'nom', 'aide': 'Vos prénom et nom'},
      {'id': 'âge', 'aide': 'Votre âge (plus de 16 ans requis)'}
    ];

  for (var i = 0; i &lt; texteAide.length; i++) {
    var item = texteAide[i];
    document.getElementById(item.id).onfocus = function() {
      afficherAide(item.aide);
    }
  }
}

preparerAide();
</pre>

<p>{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/8164/", "", 200)}}</p>

<p>Lorsqu'on essaie ce code, on s'aperçoit qu'il ne fonctionne pas exactement comme on le souhaitait : en effet, quelque soit le champ sur lequel on se situe, c'est toujours le message d'aide concernant l'âge qui s'affiche.</p>

<p>La cause de ce problème est que les fonctions attachées à <code>onfocus</code> sont des fermetures qui partagent le même environnement. À chaque itération de boucle, l'environnement de la fermeture créée contient une référence sur la même instance de la variable <code>item</code>. Ainsi, lorsque la fonction de rappel de <code>onfocus</code> est exécutée, la boucle a déjà été effectuée entièrement, et la variable <code>item</code> partagée par les trois fermetures pointe sur le dernier élément de <code>texteAide</code>.</p>

<p>Une solution consiste à utiliser plus de fermetures et à appliquer une fabrique de fonction comme on a vu précédemment :</p>

<pre class="brush: js">function afficheAide(aide) {
  document.getElementById('aide').innerHTML = aide;
}

function creerCallbackAide(aide) {
  return function() {
    afficheAide(aide);
  };
}

function prepareAide() {
  var texteAide = [
      {'id': 'email', 'aide': 'Votre adresse e-mail'},
      {'id': 'nom', 'aide': 'Votre prénom et nom'},
      {'id': 'âge', 'aide': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i &lt; texteAide.length; i++) {
    var item = texteAide[i];
    document.getElementById(item.id).onfocus = creerCallbackAide(item.aide);
  }
}

prepareAide();
</pre>

<p>Voici une autre solution qui permet de ne pas utiliser plus de fermetures :</p>

<pre class="brush: js">function afficheAide(aide) {
  document.getElementById('aide').innerHTML = aide;
}

function prepareAide() {
  var texteAide = [
      {'id': 'email', 'aide': 'Votre adresse e-mail'},
      {'id': 'nom', 'aide': 'Votre prénom et nom'},
      {'id': 'âge', 'aide': 'Votre âge (vous devez être majeur)'}
    ];

  for (var i = 0; i &lt; texteAide.length; i++) {
    let item = texteAide[i];
    document.getElementById(item.id).onfocus = function() {
      afficheAide(item.aide);
    }
  }
}

prepareAide();</pre>

<p>Dans ce fragment de code, nous avons utilisé <code>let</code> au lieu de <code>var</code> afin que chaque fermeture soit liée avec les variable de bloc.</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/9573/", "", 300)}}</p>

<p>Autrement, on aurait pu utiliser <code>forEach()</code> afin de parcourir le tableau <code>texteAide</code> et attacher un gestionnaire d'évènement sur chaque {{htmlelement("div")}} :</p>

<pre class="brush: js">function afficheAide(aide) {
  document.getElementById('aide').innerHTML = aide;
}

function prepareAide() {
  var texteAide = [
      {'id': 'email', 'aide': 'Votre adresse e-mail'},
      {'id': 'nom', 'aide': 'Votre prénom et nom'},
      {'id': 'âge', 'aide': 'Votre âge (vous devez être majeur)'}
    ];

  texteAide.forEach(function(texte) {
      document.getElementById(texte.id).onfocus = function() {
        afficheAide(texte.help);
      }
  });
}

prepareAide();</pre>

<h2 id="Les_performances_et_les_fermetures">Les performances et les fermetures</h2>

<p>Il est mal avisé de créer des fonctions imbriquées et des fermetures sans utilité. En effet, cela peut dégrader les performances en termes de vitesse d'exécution et de consommation de mémoire.</p>

<p>Quand, par exemple, on crée un nouvel objet, les méthodes devraient être associées au prototype de l'objet et non pas définies dans le constructeur de l'objet. De cette façon, on évite que les méthodes soient réassignées à chaque fois qu'un nouvel objet est créé.</p>

<p>Voici un exemple de la mauvaise façon de procéder :</p>

<pre class="example-bad brush: js">function MonObjet(nom, message) {
  this.nom = nom.toString();
  this.message = message.toString();
  this.getNom = function() {
    return this.nom;
  };

  this.getMessage = function() {
    return this.message;
  };
}
</pre>

<p>Le fragment de code précédent ne tire pas partie des avantages des fermetures. Il pourrait être mieux écrit ainsi :</p>

<pre class="brush: js">function MonObjet(nom, message) {
  this.nom = nom.toString();
  this.message = message.toString();
}
MonObjet.prototype = {
  getNom: function() {
    return this.nom;
  },
  getMessage: function() {
    return this.message;
  }
};
</pre>

<p>Cependant, redéfinir le prototype est déconseillé, donc encore meilleur serait d'ajouter les méthodes :</p>

<pre class="brush: js">function MonObjet(nom, message) {
  this.nom = nom.toString();
  this.message = message.toString();
}
MonObjet.prototype.getNom = function() {
  return this.nom;
};
MonObjet.prototype.getMessage = function() {
  return this.message;
};
</pre>

<p>Les deux derniers exemples permettent de voir que le prototype hérité est partagé par tous les objets construits et que les méthodes n'ont pas besoin d'être reconstruites pour chaque création d'objet. Veuillez consulter la page sur <a href="/fr/docs/Web/JavaScript/Guide/Le_mod%C3%A8le_objet_JavaScript_en_d%C3%A9tails">le modèle objet JavaScript en détails</a> pour plus d'informations.</p>
