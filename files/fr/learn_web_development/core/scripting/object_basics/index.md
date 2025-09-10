---
title: Les bases de JavaScript, orienté objet
slug: Learn_web_development/Core/Scripting/Object_basics
original_slug: Learn/JavaScript/Objects/Basics
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting")}}

Dans cet article, nous examinerons la syntaxe fondamentale des objets JavaScript et revisiterons certaines fonctionnalités de JavaScript que nous avons déjà vu plus tôt dans le cours, réitérant le fait que bon nombre des fonctionnalités que vous avez déjà traitées sont des objets.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Une compréhension du langage <a href="/fr/docs/Learn_web_development/Core/Structuring_content">HTML</a> et des <a href="/fr/docs/Learn_web_development/Core/Styling_basics">principes fondamentaux du CSS</a>, ainsi qu'une bonne connaissance des bases du JavaScript abordées dans les leçons précédentes.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre que dans JavaScript, la plupart des éléments sont des objets, et que vous avez probablement utilisé des objets chaque fois que vous avez utilisé JavaScript.</li>
          <li>Syntaxe de base&nbsp;: littéraux d'objets, propriétés et méthodes, imbrication d'objets et de tableaux dans des objets.</li>
          <li>Utilisation de constructeurs pour créer un nouvel objet.</li>
          <li>Portée des objets et <code>this</code>.</li>
          <li>Accès aux propriétés et méthodes — syntaxe des crochets et des points.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Les bases de l'objet

Un objet est une collection de données et/ou de fonctionnalités connexes. Ceux-ci se composent généralement de plusieurs variables et fonctions (qui sont appelées propriétés et méthodes lorsqu'elles sont à l'intérieur des objets). Passons à un exemple pour comprendre à quoi ils ressemblent.

Pour commencer, faites une copie locale de notre fichier [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html). Il contient peu de choses : un élément {{HTMLElement("script")}} pour écrire notre code à l'intérieur. Nous utiliserons ces éléments de base pour explorer les bases de la syntaxe objet. Durant cette exemple, vous devriez avoir [la console JavaScript des outils de développement](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#la_console_javascript) ouverte et prête, pour y saisir des commandes.

Comme pour beaucoup de choses dans JavaScript, la création d'un objet commence souvent par définir et initialiser une variable. Essayez de saisir la ligne suivante sous le code JavaScript qui est déjà dans votre fichier, puis enregistrer et refraîchissez la page&nbsp;:

```js
const personne = {};
```

Ouvrez maintenant la [console JavaScript](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) de votre navigateur, saisissez `person` et appuyez sur <kbd>Entrée</kbd>. Vous devriez obtenir un résultat similaire à l'une des lignes ci-dessous&nbsp;:

```plain
[object Object]
Object { }
{ }
```

Félicitations, vous avez créé votre premier objet ! Mais c'est un objet vide, on ne peut pas faire grand-chose avec. Modifions notre objet pour qu'il ressemble à ceci&nbsp;:

```js
const personne = {
  nom: ["Jean", "Martin"],
  age: 32,
  bio: function () {
    console.log(`${this.nom[0]} ${this.nom[1]} a ${this.age} ans.`);
  },
  salutation: function () {
    console.log(`Salut! Je suis ${this.nom[0]}.`);
  },
};
```

Après avoir sauvegardé et rafraîchi la page, essayez d'entrer les lignes suivantes dans le champ de saisie `input` :

```js
personne.nom;
personne.nom[0];
personne.age;
personne.bio();
// "Jean Martin a 32 ans."
personne.salutation();
// "Salut! Je suis Jean."
```

Vous disposez désormais de données et de fonctionnalités dans votre objet, et vous pouvez y accéder grâce à une syntaxe simple et pratique&nbsp;!

Que se passe-t-il ici&nbsp;? Eh bien, un objet est composé de plusieurs membres, chacun ayant un nom (par exemple, `nom` et `age` ci-dessus) et une valeur (par exemple, `['Jean', 'Martin']` et `32`). Chaque paire nom/valeur doit être séparée par une virgule, et le nom et la valeur dans chaque cas sont séparés par deux points. La syntaxe suit toujours ce modèle&nbsp;:

```js
const monObjet = {
  membre1: valeurMembre1,
  membre2: valeurMembre2,
  membre3: valeurMembre3,
};
```

La valeur d'un membre d'objet peut être pratiquement n'importe quoi — dans notre objet «&nbsp;personne&nbsp;», nous avons un nombre, un tableau et deux fonctions. Les deux premiers éléments sont des éléments de données et sont appelés les propriétés de l'objet. Les deux derniers éléments sont des fonctions qui permettent à l'objet d'effectuer une action avec ces données et sont appelées les **méthodes** de l'objet.

Lorsque les membres de l'objet sont des fonctions, il y a une syntaxe plus simple. Au lieu de `bio: function ()` Nous pouvons écrire `bio()`. Comme ça&nbsp;:

```js
const personne = {
  nom: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.nom[0]} ${this.nom[1]} a ${this.age} ans.`);
  },
  salutation() {
    console.log(`Salut! Je suis ${this.nom[0]}.`);
  },
};
```

À partir de maintenant, nous utiliserons cette syntaxe plus courte.

Un objet comme celui-ci est appelé **objet littéral** — nous avons littéralement écrit le contenu de l'objet car nous en sommes venus à le créer. Ceci est différent par rapport aux objets instanciés des classes, que nous examinerons plus tard.

Il est très courant de créer un objet à l'aide d'un littéral d'objet lorsque vous souhaitez transférer une série d'éléments de données structurés et liés d'une certaine manière, par exemple en envoyant une requête au serveur pour qu'elle soit intégrée à une base de données. L'envoi d'un seul objet est beaucoup plus efficace que l'envoi de plusieurs éléments individuellement, et il est plus facile à utiliser qu'un tableau lorsque vous souhaitez identifier des éléments individuels par leur nom.

## Notation avec un point

Ci-dessus, on accède aux membres de l'objet en utilisant la **notation avec un point**.

Le nom de l'objet (`personne`) agit comme un **espace de noms** (ou _namespace_ en anglais) — il doit être entré en premier pour accéder aux membres **encapsulés** dans l'objet. Ensuite, on écrit un point, puis le membre auquel on veut accéder — que ce soit le nom d'une propriété, un élément d'un tableau, ou un appel à une méthode de l'objet. Par exemple :

```js
personne.age;
personne.bio();
```

### Objets comme propriétés d'objet

Une propriété d'objet peut elle-même être un objet. Par exemple, essayez de changer le `nom` membre de

```js
const personne = {
  nom: ["Jean", "Martin"],
};
```

à

```js
const personne = {
  nom: {
    prenom: "Jean",
    nom: "Martin",
  },
  // …
};
```

Pour accéder à ces éléments, il suffit d'ajouter une étape supplémentaire à la fin avec un autre point. Essayez ceci dans la console JS&nbsp;:

```js
personne.nom.prenom;
personne.nom.nom;
```

Si vous procédez ainsi, vous devrez également parcourir le code de votre méthode et modifier toutes les occurrences de

```js
nom[0];
nom[1];
```

à

```js
nom.prenom;
nom.nom;
```

Sinon, vos méthodes ne fonctionneront plus.

## Notation avec les crochets

La notation entre crochets offre une autre façon d'accéder aux propriétés d'un objet. Au lieu d'utiliser la [notation par points](#notation_avec_un_point) comme ça&nbsp;:

```js
personne.age;
personne.nom.prenom;
```

Vous pouvez utiliser des crochets à la place&nbsp;:

```js
personne["age"];
personne["nom"]["prenom"];
```

Cela ressemble beaucoup à la manière dont vous accédez aux éléments d'un tableau, et c'est fondamentalement la même chose — au lieu d'utiliser un numéro d'index pour sélectionner un élément, vous utilisez le nom associé à la valeur de chaque membre. Il n'est pas étonnant que les objets soient parfois appelés tableaux associatifs — ils associent des chaînes de caractères à des valeurs de la même manière que les tableaux associent des nombres à des valeurs.

La notation par points est généralement préférée à la notation entre crochets, car elle est plus concise et plus facile à lire. Cependant, dans certains cas, vous devez utiliser des crochets. Par exemple, si le nom d'une propriété d'objet est contenu dans une variable, vous ne pouvez pas utiliser la notation par points pour accéder à la valeur, mais vous pouvez y accéder en utilisant la notation entre crochets.

Dans l'exemple ci-dessous, la fonction `logProperty()` peut utiliser `personne[propertyName]` pour récupérer la valeur de la propriété nommée dans `propertyName`.

```js
const personne = {
  nom: ["Jean", "Martin"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(personne[propertyName]);
}

logProperty("nom");
// ["Jean", "Martin"]
logProperty("age");
// 32
```

## Définir les membres d'un objet

Jusqu'à présent, nous avons uniquement abordé la récupération (ou l'**obtention**) des membres d'un objet — vous pouvez également **définir** (mettre à jour) la valeur des membres d'un objet en déclarant le membre que vous souhaitez définir (à l'aide de la notation par point ou par crochet), comme ceci&nbsp;:

```js
personne.age = 45;
personne["nom"]["nomFamille"] = "Rabuchon";
```

Essayez d'entrer les lignes ci-dessus, puis récupérez à nouveau les membres pour voir comment ils ont changé, comme ceci&nbsp;:

```js
personne.age;
personne["nom"]["nomFamille"];
```

La définition des membres ne se limite pas à la mise à jour des valeurs des propriétés et méthodes existantes&nbsp;; vous pouvez également créer des membres entièrement nouveaux. Essayez ceci dans la console JS&nbsp;:

```js
personne["yeux"] = "noisette";
personne["auRevoir"] = function () {
  console.log("Au revoir tout le monde!");
};
```

Vous pouvez maintenant tester vos nouveaux membres&nbsp;:

```js
personne["yeux"];
personne["auRevoir"]();
// "Au revoir tout le monde!"
```

L'un des aspects utiles de la notation entre crochets est qu'elle peut être utilisée pour définir non seulement les valeurs des membres de manière dynamique, mais aussi leurs noms. Supposons que nous souhaitions permettre aux utilisateurs de stocker des types de valeurs personnalisés dans leurs données personnelles, en saisissant le nom du membre et la valeur dans deux champs de saisie de texte. Nous pourrions obtenir ces valeurs comme suit&nbsp;:

```js
const monNomDeDonnee = nomInput.value;
const maValeurDeDonnee = valeurNom.value;
```

Nous pourrions ensuite ajouter ce nouveau nom et cette nouvelle valeur de membre à l'objet `personne` comme suit&nbsp;:

```js
personne[monNomDeDonnee] = maValeurDeDonnee;
```

Pour tester cela, essayez d'ajouter les lignes suivantes dans votre code, juste en dessous de l'accolade fermante de l'objet `personne`&nbsp;:

```js
const monNomDeDonnee = "taille";
const maValeurDeDonnee = "1.75m";
personne[monNomDeDonnee] = maValeurDeDonnee;
```

Sauvegardez, rafraîchissez et entrez le texte suivant dans le champ de saisie (l'élément `input`)&nbsp;:

```js
personne.taille;
```

L'ajout d'une propriété à un objet à l'aide de la méthode ci-dessus n'est pas possible avec la notation par points, qui n'accepte que les noms de membres littéraux, et non les valeurs de variables pointant vers un nom.

## Qu'est-ce que « `this` » ?

Vous avez peut-être remarqué quelque chose d'un peu étrange dans nos méthodes. Prenons l'exemple suivant :

```js
const personne = {
  // …
  salutation() {
    console.log(`Salut! Je suis ${this.name[0]}.`);
  },
};
```

Vous vous demandez probablement ce qu'est «&nbsp;this&nbsp;». Le mot-clé `this` fait généralement référence à l'objet actuel dans lequel le code est exécuté. Dans le contexte d'une méthode d'objet, `this` fait référence à l'objet sur lequel la méthode a été appelée.

Illustrons ce que nous voulons dire à l'aide d'une paire simplifiée d'objets personne&nbsp;:

```js
const personne1 = {
  nom: "Christophe",
  salutation() {
    console.log(`Salut! Je suis ${this.nom}.`);
  },
};

const personne2 = {
  nom: "Bruno",
  salutation() {
    console.log(`Salut! Je suis ${this.nom}.`);
  },
};
```

Dans ce cas, `personne1.salutation()` affiche «&nbsp;Bonjour ! Je m'appelle Christophe.&nbsp;»&nbsp;; `personne2.salutation()` affiche «&nbsp;Bonjour ! Je m'appelle Bruno.&nbsp;». Cela s'explique par le fait que lorsque la méthode est appelée, `this` fait référence à l'objet sur lequel la méthode est appelée, ce qui permet à la même définition de méthode de fonctionner pour plusieurs objets.

Ce n'est pas très utile lorsque vous écrivez des littéraux d'objet à la main, car l'utilisation du nom de l'objet (`personne1` et `personne2`) donne exactement le même résultat, mais cela sera essentiel lorsque nous commencerons à utiliser des **constructeurs** pour créer plusieurs objets à partir d'une seule définition d'objet, ce qui sera le sujet de la section suivante.

Essayons d'illustrer nos propos par une paire d'objet `personne` simplifiée :

```js
var personne1 = {
  nom: "Christophe",
  salutation: function () {
    alert("Bonjour ! Je suis " + this.nom + ".");
  },
};

var personne2 = {
  nom: "Bruno",
  salutation: function () {
    alert("Bonjour ! Je suis " + this.nom + ".");
  },
};
```

Dans ce cas, `personne1.salutation()` affichera "Bonjour ! Je suis Christophe.", tandis que `personne2.salutation()` affichera "Bonjour ! Je suis Bruno." alors que le code est le même dans les deux cas. Comme expliqué plus tôt, `this` est égal à l'objet pour lequel le code est éxécuté. Ce n'est pas très utile quand on écrit des objets littéraux à la main, mais ça prend tout son sens quand on génère des objets dynamiques (avec des constructeurs par exemple, comme nous le verrons dans le prochain article).

## Vous utilisiez des objets depuis le début !

Tout au long de ces exemples, vous vous êtes probablement dit que la notation avec un point vous était très familière. C'est parce que vous l'avez utilisée tout au long du cours ! À chaque fois que vous avez travaillé avec un exemple qui utilise une API ou un objet JavaScript natif, nous avons utilisé des objets. Ces fonctionnalités sont construites exactement comme les objets que nous avons manipulés ici, mais sont parfois plus complexes que dans nos exemples.

Ainsi, quand vous utilisez une méthode comme :

```js
maChaineDeCaracteres.split(",");
```

Vous utilisez une méthode disponible dans une instance du type {{jsxref("String")}}. Dès que vous créez une chaîne de caractères dans votre code, cette chaîne est automatiquement créée comme une instance de `String` et possède donc plusieurs méthodes/propriétés communes.

Quand vous accédez au DOM (_Document Object Model_ ou « modèle objet du document ») avec `document` et des lignes telles que :

```js
var monDiv = document.createElement("div");
var maVideo = document.querySelector("video");
```

Vous utilisez une méthode disponible dans l'instance de la classe {{domxref("Document")}}. Pour chaque page web chargée, une instance de `Document` est créée, appelée `document` et qui représente la structure entière de la page, son contenu et d'autres caractéristiques telles que son URL. Encore une fois, cela signifie qu'elle possède plusieurs méthodes/propriétés communes.

C'est également vrai pour beaucoup d'autres objets/API natifs que vous avez utilisé — {{jsxref("Array")}}, {{jsxref("Math")}}, etc.

On notera que les objets/API natifs ne créent pas toujours automatiquement des instances d'objet. Par exemple, [l'API Notifications](/fr/docs/Web/API/Notifications_API) — qui permet aux navigateurs modernes de déclencher leurs propres notifications — vous demande d'instancier vous-même une nouvelle instance d'objet en utilisant le constructeur pour chaque notification que vous souhaitez lancer. Essayez d'entrer le code ci-dessous dans la console JavaScript :

```js
var maNotification = new Notification("Bonjour !");
```

Nous verrons les constructeurs dans un prochain article.

> [!NOTE]
> On peut voir le mode de communication des objets comme un **envoi de message**. Quand un objet a besoin d'un autre pour faire une action, souvent il va envoyer un message à un autre objet via l'une de ses méthode et attendre une réponse, qui retournera une valeur.

## Résumé

Félicitations, vous avez terminé notre premier article sur les objets JavaScript — vous devriez maintenant mieux comprendre comment on travaille avec des objets en JavaScript. Vous avez pu créer vos propres objets basiques. Vous devriez aussi voir que les objets sont très pratiques pour stocker des données et des fonctionnalités. Si on ne passe pas par un objet et qu'on a une variable différente pour chaque propriété et méthode de notre objet `personne`, cela sera inefficace et frustrant et vous prendrez le risque de créer des conflits avec d'autres variables et fonctions du même nom.

Les objets permettent de conserver les informations de façon sûre, enfermées dans leur propre « paquet », hors de danger.

Dans le prochain article, nous commencerons à voir la théorie de la programmation orientée objet (POO) et comment utiliser ces techniques en JavaScript.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting")}}
