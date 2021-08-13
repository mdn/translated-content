---
title: L'opérateur new
slug: Web/JavaScript/Reference/Operators/new
tags:
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/new
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_new
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'<strong>opérateur <code>new</code></strong> permet de créer une instance d'un certain type d'objet à partir du constructeur qui existe pour celui-ci (natif ou défini par l'utilisateur).</p>

<p>Le mot-clé <code>new</code>, utilisé avec une fonction, applique les 4 étapes suivantes :</p>

<ol>
 <li>Il crée un nouvel objet à partir de zéro</li>
 <li>Il lie cet objet à un autre objet en le définissant comme son prototype.</li>
 <li>Le nouvel objet, créé à l'étape 1, est passé comme valeur <code>this</code> à la fonction</li>
 <li>Si la fonction ne renvoie pas d'objet, c'est la valeur <code>this</code> qui est renvoyée.</li>
</ol>

<div>{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new <em>constructeur</em>[([<em>arguments</em>])]</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>constructeur</code></dt>
 <dd>Une fonction ou une classe qui définit le type de l'objet qui sera une instance.</dd>
 <dt><code>arguments</code></dt>
 <dd>Une liste de valeurs correspondant aux arguments avec lesquels appeler le <code>constructeur</code>.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>La création d'un objet personnalisé se fait en deux étapes :</p>

<ol>
 <li>Définition du type d'objet en écrivant une fonction.</li>
 <li>Création d'une instance de l'objet avec <code>new</code>.</li>
</ol>

<p>Pour définir un type d'objet, créez une fonction pour ce type qui spécifie son nom, ses propriétés et ses méthodes. Un objet peut avoir des propriétés qui sont elles-mêmes des objets, comme on pourra le voir dans les exemples ci-dessous.</p>

<p>Lorsque le code <code>new <em>Toto</em>(...)</code> est exécuté, voici ce qui se passe :</p>

<ol>
 <li>Un nouvel objet est créé qui hérite de <code><em>Toto</em>.prototype</code>.</li>
 <li>La fonction constructrice <code><em>Toto</em></code> est appelée avec les arguments fournis, <code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this">this</a></code> étant lié au nouvel objet créé. <code>new <em>Toto</em></code> sera équivalent à <code>new <em>Toto</em>()</code> (i.e. un appel sans argument).</li>
 <li>L'objet renvoyé par le constructeur devient le résultat de l'expression qui contient <code>new</code>. Si le constructeur ne renvoie pas d'objet de façon explicite, l'objet créé à l'étape 1 sera utilisé. (En général, les constructeurs ne renvoient pas de valeurs mais si on souhaite surcharger le processus habituel, on peut utiliser cette valeur de retour).</li>
</ol>

<p>Il est toujours possible d'ajouter une propriété à un objet défini précédemment. Par exemple, l'instruction <code>voiture1.couleur = "noir"</code> ajoute une propriété couleur à <code>voiture1</code>, et lui assigne une valeur : "<code>noir</code>". Cependant, ceci n'affecte aucunement les autres objets. Pour ajouter une nouvelle propriété à tous les objets du même type, cette propriété doit être ajoutée à la définition du type d'objet <code>Voiture</code>.</p>

<p>Il est possible d'ajouter une propriété partagée par tous les objets d'un type déjà défini auparavant en utilisant sa propriété <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/prototype">Function.prototype</a></code>. Ceci permet de définir une propriété partagée par tous les objets créés avec cette fonction, plutôt que simplement par une seule instance de ce type d'objet. Le code qui suit ajoute une propriété couleur avec la valeur <code>"couleur standard"</code> à tous les objets de type <code>Voiture</code>, et redéfinit ensuite cette valeur avec la chaîne "<code>noir</code>" uniquement pour l'instance d'objet <code>voiture1</code>. Pour plus d'informations, voir la page sur <a href="/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">prototype</a>.</p>

<pre class="brush: js">function Voiture() {}
voiture1 = new Voiture();
voiture2 = new Voiture();

console.log(voiture1.couleur);            // undefined

Voiture.prototype.couleur = "couleur standard";
console.log(voiture1.couleur);            // couleur standard

voiture1.couleur = "noir";
console.log(voiture1.couleur);            // noir

console.log(voiture1.__proto__.couleur);  // couleur standard
console.log(voiture2.__proto__.couleur);  // couleur standard
console.log(voiture1.couleur);            // noir
console.log(voiture2.couleur);            // couleur standard
</pre>

<div class="note">
<p><strong>Note :</strong> Si on n'écrit pas l'appel du constructeur avec l'opérateur <code>new</code>, le constructeur est appelé comme une fonction normale et ne crée pas d'objet. Dans ce cas, la valeur de <code>this</code> sera différente.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_type_d'objet_et_instance_d'objet">Exemple : type d'objet et instance d'objet</h3>

<p>Supposons que vous vouliez créer un type d'objet pour les voitures. Vous voulez que ce type d'objet s'appelle <code>Voiture</code>, et qu'il ait des propriétés pour la marque, le modèle et l'année. Pour ce faire, vous écririez la fonction suivante :</p>

<pre class="brush: js">function Voiture(marque, modèle, année) {
   this.marque = marque;
   this.modèle = modèle;
   this.année = année;
}
</pre>

<p>À présent, vous pouvez créer un objet appelé <code>ma_voiture</code> de la manière suivante :</p>

<pre class="brush: js">ma_voiture = new Voiture("Volkswagen", "Golf TDi", 1997);
</pre>

<p>Cette instruction crée l'objet <code>ma_voiture</code> et assigne les valeurs spécifiées à ses propriétés. La valeur de <code>ma_voiture.marque</code> est alors la chaîne <code>"Volkswagen"</code>, celle de <code>ma_voiture.année</code> est l'entier 1997, et ainsi de suite.</p>

<p>Il est possible de créer un nombre illimité d'objets <code>Voiture</code> en appelant <code>new</code>. Par exemple :</p>

<pre class="brush: js">voiture_de_ken = new Voiture("Nissan", "300ZX", 1992);
</pre>

<h3 id="Exemple_propriété_d'objet_qui_est_elle-même_un_autre_objet">Exemple : propriété d'objet qui est elle-même un autre objet</h3>

<p>Supposons que vous ayez défini un objet appelé <code>Personne</code> de la manière suivante :</p>

<pre class="brush: js">function Personne(nom, age, surnom) {
   this.nom = nom;
   this.age = age;
   this.surnom = surnom;
}
</pre>

<p>Et que vous avez ensuite instancié deux nouveaux objets <code>Personne</code> de la manière suivante :</p>

<pre class="brush: js">rand = new Personne("Rand McNally", 33, "Randy");
ken = new Personne("Ken Jones", 39, "Kenny");
</pre>

<p>Vous pouvez alors réécrire la définition de <code>Voiture</code> pour contenir une propriété <code>propriétaire</code> qui reçoit un objet <code>Personne</code>, comme ceci :</p>

<pre class="brush: js">function Voiture(marque, modèle, année, propriétaire) {
   this.marque = marque;
   this.modèle = modèle;
   this.année = année;
   this.propriétaire = propriétaire;
}
</pre>

<p>Pour instancier les nouveaux objets, vous utiliserez ensuite :</p>

<pre class="brush: js">voiture1 = new Voiture("Volkswagen", "Golf TDi", 1997, rand);
voiture2 = new Voiture("Nissan", "300ZX", 1992, ken);
</pre>

<p>Plutôt que de passer une chaîne littérale ou une valeur entière lors de la création des nouveaux objets, les instructions ci-dessus utilisent les objets <code>rand</code> et <code>ken</code> comme paramètres pour les propriétaires. Pour connaître le nom du propriétaire de <code>voiture2</code>, on peut alors accéder à la propriété suivante :</p>

<pre class="brush: js">voiture2.propriétaire.nom
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-new-operator', 'Opérateur new')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-new-operator', 'Opérateur new')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.2.2', 'Opérateur new')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-11.2.2', 'Opérateur new')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-11.2.2', 'Opérateur new')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.new")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Reflect.construct()")}}</li>
 <li>{{jsxref("Object.prototype")}}</li>
</ul>
