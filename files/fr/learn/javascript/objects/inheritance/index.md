---
title: L'héritage au sein de JavaScript
slug: Learn/JavaScript/Objects/Inheritance
tags:
  - Apprendre
  - Article
  - Débutant
  - Héritage
  - JS Orienté Objet
  - JavaScript
  - Objet
  - Programmation orientée objet
  - Prototype
translation_of: Learn/JavaScript/Objects/Inheritance
original_slug: Learn/JavaScript/Objects/Heritage
---
<div>
<p>{{LearnSidebar}}</p>

<p>{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}</p>

<p>Les présentations ayant été faites pour les concepts du JavaScript orienté objet, cet article détaille comment il est possible de créer une classe fille qui hérite des propriétés de sa classe mère. Nous verrons ensuite quelques conseils quant à l'utilisation du JavaScript orienté objet.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Pré-requis :</th>
   <td>Une connaissance générale de l'informatique, des notions d'HTML et CSS, une connaissance des bases en JavaScript (voir <a href="/fr/docs/Learn/JavaScript/First_steps">Premiers pas</a> et <a href="/fr/docs/Learn/JavaScript/Building_blocks">Blocs de construction</a>) ainsi que des notions de JavaScript orienté objet (JSOO) (voir <a href="/fr/docs/Learn/JavaScript/Object-oriented/Introduction">Introduction aux objets</a>).</td>
  </tr>
  <tr>
   <th scope="row">Objectif :</th>
   <td>Comprendre comment implémenter l'héritage en JavaScript.</td>
  </tr>
 </tbody>
</table>

<h2 id="Héritage_prototypique">Héritage prototypique</h2>

<p>Nous avons déjà vu le concept d'héritage en action, nous avons vu comment la chaîne de prototypage fonctionnait, et comment les propriétés de cette chaîne sont lues de manière ascendante. En revanche,nous n'avons utilisé pratiquement que quelques fonctionnalités déjà intégrées dans le navigateur pour le faire. Comment créer un objet JavaScript qui hérite d'un autre objet ?</p>

<p>Certains pensent que JavaScript n'est pas un véritable langage orienté objet. Dans les langages orientés objets classiques, on définit des classes objet et on peut ensuite définir laquelle hérite d'une autre (voir <a href="http://www.tutorialspoint.com/cplusplus/cpp_inheritance.htm">C++ inheritance</a> en anglais pour des exemples simples). JavasScript utilise une approche différente : les objets héritant d'un autre n'ont pas de fonctionnalités copiées d'un autre objet, au lieu de ça, ils héritent des fonctionnalités via les liens de la chaîne de prototypage (on parle alors d'un <strong>héritage prototypique</strong>).</p>

<p>Voyons comment cela se passe avec un exemple concret.</p>

<h2 id="Pour_commencer">Pour commencer</h2>

<p>Tout d'abord, faites une copie du fichier <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html">oojs-class-inheritance-start.html</a> (voir la <a href="https://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html">démo</a>). Vous y trouverez le constructeur <code>Personne()</code> que nous avons utilisé jusque là dans l'ensemble des modules, néanmoins il y a un léger changement : nous n'avons défini que les attributs au sein du constructeur.</p>

<pre>function Personne(prenom, nom, age, genre, interets) {
  this.nom = {
    prenom,
    nom
  };
  this.age = age;
  this.genre = genre;
  this.interets = interets;
};</pre>

<p>L'ensemble des méthodes est défini dans le prototype :</p>

<pre>Personne.prototype.saluer = function() {
  alert('Salut! Je suis ' + this.nom.prenom + '.');
};</pre>

<p>Essayons de créer une classe <code>Professeur</code> similaire à celle que nous avons utilisée jusqu'ici dans les autres modules d'initiations à l'approche objet. Ainsi, cette classe hérite de <code>Personne</code> mais possède aussi :</p>

<ol>
 <li>Un nouvel attribut <code>matière</code> — qui contiendra la matière que le professeur enseigne.</li>
 <li>Une méthode <code>saluer</code> un peu plus élaborée, qui sera un peu plus formelle que la méthode de base, cela sera plus approprié, lorsque le professeur s'adrressera à des étudiants, par exemple.</li>
</ol>

<h2 id="Définissons_le_constructeur_Professeur()">Définissons le constructeur Professeur()</h2>

<p>La première chose à faire est de créer le constructeur <code>Professeur()</code> via l'ajout du code suivant :</p>

<pre>function Professeur(prenom, nom, age, genre, interets, matiere) {
  Personne.call(this, prenom, nom, age, genre, interets);

  this.matiere = matiere;
}</pre>

<p>Cela ressemble beaucoup au constructeur <code>Personne</code> mais il y a quelque chose que nous n'avons pas encore vu : la fonction <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a></code>. Cette fonction permet d'appeler une fonction définie ailleurs dans le contexte actuel. Le premier paramètre spécifie la valeur de <code>this</code> que l'on souhaite utiliser lors que l'on utilisera la fonction, les paramètres suivants seront les paramètres qui pourront être passés en arguments lorsqu'elle sera appelée.</p>

<p>Nous voulons que le constructeur <code>Professeur()</code> aie les mêmes attributs que <code>Personne()</code>, nous les spécifions donc dans l'appel fait via la fonction <code>call()</code>.</p>

<p>La dernière ligne au sein du constructeur sert simplement à définir l'attribut <code>matière</code> que les professeurs enseignent, ce qui n'est pas valable pour les personnes génériques.</p>

<p>Notez que nous aurions très bien pu écrire tout simplement ceci :</p>

<pre>function Professeur(prenom, nom, age, genre, interets, matiere) {
  this.nom_complet = {
    prenom,
    nom
  };
  this.age = age;
  this.genre = genre;
  this.interets = interets;
  this.matiere = matiere;
}</pre>

<p>Cependant cela aurait eu pour effet de redéfinir les attributs à nouveau, sans les hériter de <code>Personne()</code>, ce qui n'est pas vraiment le but que nous voulons atteindre lorsque l'on parle de l'héritage, cela rajoute aussi des lignes de code inutiles.</p>

<p> </p>

<h3 id="Hériter_d'un_constructeur_sans_paramètres">Hériter d'un constructeur sans paramètres</h3>

<p>Notez que si les valeurs des propriétés du constructeur dont vous héritez ne proviennent pas de paramètres, vous n'avez nullement besoin de les specifier comme arguments additionnels dans l'appel de la fonction <code>call()</code>. Donc, par exemple, si vous avez quelque chose d'aussi simple que ceci :</p>

<pre class="brush: js">function Brick() {
  this.width = 10;
  this.height = 20;
}</pre>

<p>Vous pouvez hériter des propriétés <code>width</code> et <code>height</code> en procédant comme ceci (Mais  également en suivant bien sûr les différentes étapes décrites ci dessous) :</p>

<pre class="brush: js">function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}</pre>

<p>Notez que nous n'avons spécifié que <code>this</code> au sein de <code>call()</code> — Aucun autre paramètre n'est requis puisque nous n'héritons ici d'aucune propriété provenant de la classe parente qui soit spécifiée via paramètres.  </p>

<h2 id="Définir_le_prototype_de_Professeur()_et_son_constructeur_référent.">Définir le prototype de Professeur() et son constructeur référent.</h2>

<p>Pour le moment tout va bien, mais nous avons un petit problème. Nous avons défini un  nouveau constructeur et ce dernier possède une propriété <code>prototype</code>, qui par défaut ne contient qu'une référence à la fonction constructrice elle même. En revanche il ne contient pas les méthodes de la propriété <code>prototype</code> du constructeur <code>Personne()</code>. Pour le constater, vous pouvez par exemple entrer <code>Professeur.prototype.constructor</code> dans la console JavaScript pour voir ce qu'il en est. Le nouveau constructeur n'a en aucun cas hérité de ces méthodes. Pour le constater, comparez les sorties de <code>Personne.prototype.saluer</code> et de <code>Professeur.prototype.saluer</code></p>

<p>Notre classe <code>Professeur()</code> doit hériter des méthodes définies dans le prototype de <code>Personne()</code>. Aussi comment procéder pour obtenir ce résultat ?</p>

<p>Ajoutez la ligne suivante à la suite du bloc de code que nous venons d'ajouter :</p>

<pre>Professeur.prototype = Object.create(Personne.prototype);</pre>

<ol>
 <li>Ici, notre ami <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create">create()</a></code> vient nous aider à nouveau. Dans ce cas, on l'utilise afin de créer un nouvel objet que nous assignons à <code>Professeur.prototype</code>. Le nouvel objet possède <code>Personne.prototype</code> désormais comme son prototype et héritera ainsi, si et quand le besoin se fera sentir, de toutes les méthodes disponible sur <code>Personne.prototype</code>. </li>
 <li>Nous avons également besoin de faire encore une chose avant de continuer. Après avoir ajouté la ligne précédente, le constructeur du prototype de <code>Professeur()</code> est désormais équivalent à celui de <code>Personne()</code>, parce que nous avons défini <code>Professeur.prototype</code> pour référencer un objet qui hérite ses propriétés de  <code>Personne.prototype</code> ! Essayez, après avoir sauvegardé votre code et rechargé la page, d'entrer <code>Professeur.prototype.constructor</code> dans la console pour vérifier.</li>
 <li>Cela peut devenir problématique, autant le corriger dès maintenant. C'est possible via l'ajout de la ligne de code suivante à la fin :
  <pre>Professeur.prototype.constructor = Professeur;</pre>
 </li>
 <li>
  <p>A présent, si vous sauvegardez et rafraichissez après avoir écrit <code>Professeur.prototype.constructor</code>, cela devrait retourner <code>Professeur()</code>, et en plus nous héritons maintenant de <code>Personne()</code> !</p>
 </li>
</ol>

<h2 id="Donner_au_prototype_de_Professeur()_une_nouvelle_fonction_saluer()">Donner au prototype de Professeur() une nouvelle fonction saluer()</h2>

<p>Pour terminer notre code, nous devons définir une nouvelle fonction <code>saluer()</code> sur le constructeur de <code>Professeur()</code>.</p>

<p>La façon la plus facile d'accomplir cela est de la définir sur le prototype de Professeur() — ajoutez ceci à la suite de votre code :</p>

<pre>Professeur.prototype.saluer = function() {
  var prefix;

  if (this.genre === 'mâle' || this.genre === 'Mâle' || this.genre === 'm' || this.genre === 'M') {
    prefix = 'M.';
  } else if (this.genre === 'femelle' || this.genre === 'Femelle' || this.genre === 'f' || this.genre === 'F') {
    prefix = 'Mme';
  } else {
    prefix = '';
  }

  alert('Bonjour. Mon nom est ' + prefix + ' ' + this.nom_complet.nom + ', et j\'enseigne ' + this.matiere + '.');
};</pre>

<p>Ceci affiche la salutation du professeur, qui utilise le titre de civilité approprié à son genre, au moyen d'une instruction conditionnelle.</p>

<p> </p>

<h2 id="Exécuter_l'exemple">Exécuter l'exemple</h2>

<p>Une fois tout le code saisi, essayez de créer une instance d'objet <code>Professeur()</code> en ajoutant à la fin de votre JavaScript (ou à l'endroit de votre choix) :</p>

<pre>var professeur1 = new Professeur('Cédric', 'Villani', 44, 'm', ['football', 'cuisine'], 'les mathématiques');</pre>

<p>Sauvegardez et actualisez, et essayez d'accéder aux propriétés et méthodes de votre nouvel objet <code>professeur1</code>, par exemple :</p>

<pre>professeur1.nom_complet.nom;
professeur1.interets[0];
professeur1.bio();
professeur1.matiere;
professeur1.saluer();Ffa</pre>

<p>Tout cela devrait parfaitement fonctionner. Les instructions des lignes 1,2,3  et 6 accèdent à des membres hérités de la classe générique <code>Personne()</code> via son constructeur, tandis que la ligne 4 accède de façon plus spécifique à un membre qui n'est disponible que via le constructeur de la classe spécialisée <code>Professeur()</code>.</p>

<p><strong>Note</strong>: Si vous rencontrez un problème afin de faire fonctionner ce code comparez le à notre <a href="http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html">version finalisée</a> (Ou regarder tourner <a href="http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html">notre demo en ligne</a>).</p>

<p>La méthode que nous avons détaillée ici n'est pas la seule permettant de mettre en place l'héritage de classes en JavaScript, mais elle fonctionne parfaitement et elle vous permet d'avoir une bonne idée de comment implémenter l'héritage en JavaScript.</p>

<p>Vous pourriez également être intéressé par certaines des nouvelles fonctionnalités de {{glossary("ECMAScript")}} qui nous permettent de mettre en place l'héritage d'une façon beaucoup plus élégante en JavaScript (Voir <a href="/fr/docs/Web/JavaScript/Reference/Classes">Classes</a>). Nous ne les avons pas développées ici parce qu'elles ne sont actuellement pas supportées par tous les navigateurs. Toutes les autres constructions dont nous avons discuté dans cette série d'articles sont supportées par IE9 et les versions moins récentes et il existe des méthodes qui prennent plus en  charge les navigateurs moins récents.</p>

<p>Un moyen habituel est d'utiliser les librairies JavaScript — La plupart des options populaires ont une sélection de fonctionnalités disponibles pour réaliser l'héritage plus facilement et plus rapidement.</p>

<p><a href="http://coffeescript.org/#classes">CoffeeScript</a> par exemple fournit les fonctionnalités <code>class</code>, <code>extends</code>, etc.</p>

<h2 id="Un_exercice_plus_complexe.">Un exercice plus complexe.</h2>

<p>Dans notre <a href="/fr/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters">section sur la programmation orientée objet</a> nous avons également inclus  une classe <code>Etudiant</code> comme un concept qui hérite de toutes les fonctionnalités de la classe <code>Personne</code>, et qui a également une méthode <code>saluer()</code> differente de celle de <code>Personne</code> qui est beaucoup moins formelle que la méthode <code>saluer()</code> de <code>Professeur()</code>. Jetez un oeil à ce à quoi ressemble la méthode <code>saluer()</code> de la classe <code>Etudiant</code> dans cette section et essayez d'implémenter votre propre constructeur <code>Etudiant()</code> qui hérite de toutes les fonctionnalités de <code>Personne()</code> et la fonction <code>saluer()</code> différente.</p>

<p><strong>Note</strong>: Si vous rencontrez un problème afin de faire fonctionner ce code comparez le à notre <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-student.html">version finalisée</a> (Ou regarder tourner <a href="http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-student.html">notre demo en ligne</a>).</p>

<h2 id="Résumé_sur_les_membres_de_l'Objet">Résumé sur les membres de l'Objet</h2>

<p>Pour résumer, vous avez de façon basique trois types de propriétés/méthodes à prendre en compte :</p>

<ol>
 <li>Celles définies au sein d'un constructeur et passées en paramètres aux instances de l'objet. Celles là ne sont pas difficiles à repérer — Dans votre propre code personnalisé, elles sont les membres définis en utilisant les lignes comme <code>this.x = x</code> ; Dans les codes préconstruits propres aux navigateurs, ils sont les membres seulement accessibles aux instances d'objet (usuellement créés en appelant un constructeur via l'utilisation du mot clé <code>new</code>, exemple : <code>var myInstance = new myConstructor()</code>).</li>
 <li>Celles définies directement sur les constructeurs eux mêmes et accessibles uniquement sur les constructeurs. Celles là sont communément présentes uniquement dans les objets préconstruits des navigateurs et sont reconnus par le fait d'être directement chaînées sur un constructeur et non sur une instance. Par exemple, <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Object.keys()</a></code>.</li>
 <li>Celles définies sur un prototype de constructeur qui sont héritées par toutes les instances des classes d'objet. Celles là incluent n'importe quel membre défini sur un prototype de constructeur, exemple : <code>myConstructor.prototype.x()</code>.</li>
</ol>

<p>Si vous êtes encore dans la confusion par rapport aux différents types ne vous inquiétez pas c'est normal — vous êtes encore entrain d'apprendre et la familiarité apparaîtra avec la pratique.</p>

<h2 id="Quand_devez-vous_utiliser_l'héritage_en_JavaScript">Quand devez-vous utiliser  l'héritage en JavaScript?</h2>

<p>Particulièrement après ce dernier article, vous pourriez penser "woa c'est compliqué". Bien, vous avez vu juste, prototypes et héritages représentent une partie des aspects les plus complexes de JavaScript, mais une bonne partie de la puissance et de la flexibilité de JavaScript vient de sa structure Objet et de l'héritage et il est vraiment très important de comprendre comment cela fonctionne. </p>

<p>D'une certaine manière, vous utilisez l'héritage à plein temps — Que vous utilisiez différentes fonctionnalités d'une WebAPI , ou une méthode/propriété définie par défaut  sur un objet prédéfini du navigateur que vous invoquez sur vos chaînes de caractères, tableaux etc., vous utilisez de façon implicite l'héritage. </p>

<p>En termes d'utilisation de l'héritage dans votre propre code, vous ne l'utiliserez probablement pas si souvent et spécialement pour débuter avec, et dans les petits projets — C'est une perte de temps d'utiliser les objets et l'héritage par amour pour cette pratique quand vous n'en avez pas besoin. Mais à mesure que les bases de votre code s'élargissent vous trouverez cette façon de faire probablement très utile. Si vous trouvez utile et plus pratique de commencer en créant un certain nombre d'objets spécialisés partageant les mêmes fonctionnalités, alors créer un objet générique qui contiendra toutes les fonctionnalités communes dont les objets spécialisés hériteront vous apparaîtra être une pratique peut être plus confortable et efficace par la suite. </p>

<p><strong>Note</strong>: A cause de la manière dont JavaScript fonctionne, avec la chaîne de prototype, etc., le partage de fonctionnalités entre objet est souvent appelée <strong>délégation</strong> — Les objets spécialisés délèguent cette fonctionnalité à l'objet de type générique. C'est certainement beaucoup plus précis que de l'appeler héritage, puisque la fonctionnalité "héritée" n'est pas copiée dans les objets qui "héritent". Au contraire, elle demeure dans l'objet générique.</p>

<p>Lorsque vous utilisez l'héritage, il est conseillé de ne pas avoir trop de degrés d'héritage et de toujours garder minutieusement trace de l'endroit où vous définissez vos propriétés et méthodes. Il est possible de commencer à écrire un code qui modifie temporairement les prototypes des objets prédéfinis du navigateur mais vous ne devriez pas le faire à moins que n'ayiez une très bonne raison. Trop de degrés d'héritages peut conduire à une confusion sans fin et une peine sans fin quand vous essayez de déboguer un tel code. </p>

<p>En définitive, les objets sont juste une autre forme de réutilisation de code comme les fonctions et les boucles avec leurs propres rôles et avantages. Si vous trouvez utile de créer un lot de variables et fonctions relatives et que vous voulez les retracer ensemble et les empaqueter de façon ordonnée, un objet est une bonne idée. Les objets sont également très utiles quand vous souhaitez passer une collection de données d'un endroit à un autre. Toutes ces choses peuvent être accomplies sans l'utilisation d'un constructeur ou de l'héritage. Si vous n'avez besoin que d'une seule instance, l'utilisation d'un simple objet littéral serait certainement un choix beaucoup plus judicieux et vous n'avez certainement pas besoin de l'héritage.</p>

<h2 id="Résumé">Résumé</h2>

<p>Cet article a couvert le reste du coeur de la théorie du JSOO et des syntaxes que nous pensons que vous devriez connaître maintenant. A cet stade vous devriez comprendre l'objet JavaScript et les bases de la POO, les prototypes et l'héritage par prototype, comment créer les classes (constructeurs) et les instances d'objet, ajouter des fonctionnalités aux classes, et créer des sous classes qui héritent d'autres classes. </p>

<p>Dans le prochain article, nous jetterons un regard sur comment travailler avec le (JSON),  un format commun d'échange de données écrit en utilisant les objets JavaScript.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://www.objectplayground.com/">ObjectPlayground.com</a> — Un site interactif d'appentissage très utile pour en savoir plus sur les Objets.</li>
 <li><a href="https://www.amazon.com/gp/product/193398869X/">Secrets of the JavaScript Ninja</a>, Chapitre 6 — Un bon livre sur les concepts et techniques avancées du JavaScript par John Resig et Bear Bibeault. Le chapitre 6 couvre très bien les divers aspects des prototypes et de l'héritage ; vous trouverez sûrement facilement une version imprimée ou une version en ligne.</li>
 <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&amp;%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes">You Don't Know JS: this &amp; Object Prototypes</a> — Une partie de l'excellente série de manuels sur le JavaScript de Kyle Simpson. Le chapitre 5 en particulier jette un regard beaucoup plus approfondi sur les prototypes que nous ne l'avons fait ici. Nous avons présenté ici une vue simplifiée dans cette série d'articles dédiée aux débutants tandis que Kyle est allé dans les détails les plus profonds et fournit une image beaucoup plus complexe et plus précise.</li>
</ul>

<p>{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}</p>

<p> </p>

<h2 id="Dans_ce_module">Dans ce module</h2>

<ul>
 <li><a href="/fr/docs/Learn/JavaScript/Objects/Basics">Les bases de l'Objet</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/Objects/Object-oriented_JS">JavaScript  Orienté Objet pour débutants</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/Objects/Object_prototypes">Prototypes d'Objet</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/Objects/Inheritance">L'héritage en JavaScript</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/Objects/JSON">Travailler avec les données JSON</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/Objects/Object_building_practice">Construire les Objets dans la pratique</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features">Ajouter des fonctionnalités à la démo de nos balles bondissantes</a></li>
</ul>

<p> </p>
</div>

<p> </p>
