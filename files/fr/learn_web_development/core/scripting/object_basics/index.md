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

Pour commencer, faites une copie locale de notre fichier [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html). Il contient peu de choses : un élément {{HTMLElement("script")}} pour écrire notre code à l'intérieur. Nous utiliserons ces éléments de base pour explorer les bases de la syntaxe objet. Durant cet exemple, vous devriez avoir [la console JavaScript des outils de développement](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#la_console_javascript) ouverte et prête, pour y saisir des commandes.

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
  nomMembre1: valeurMembre1,
  nomMembre2: valeurMembre2,
  nomMembre3: valeurMembre3,
};
```

La valeur d'un membre d'objet peut être pratiquement n'importe quoi — dans notre objet «&nbsp;personne&nbsp;», nous avons un nombre, un tableau et deux fonctions. Les deux premiers éléments sont des éléments de données et sont appelés les propriétés de l'objet. Les deux derniers éléments sont des fonctions qui permettent à l'objet d'effectuer une action avec ces données et sont appelées les **méthodes** de l'objet.

Lorsque les membres de l'objet sont des fonctions, il y a une syntaxe plus simple. Au lieu de `bio: function ()` Nous pouvons écrire `bio()`. Comme ça&nbsp;:

```js
const personne = {
  nom: ["Jean", "Martin"],
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

## Présentation des constructeurs

L'utilisation d'objets littéraux convient lorsque vous n'avez besoin de créer qu'un seul objet, mais si vous devez en créer plusieurs, comme dans la section précédente, ils s'avèrent sérieusement insuffisants. Nous devons écrire le même code pour chaque objet que nous créons, et si nous voulons modifier certaines propriétés de l'objet — comme ajouter une propriété `height` — nous devons alors penser à mettre à jour chaque objet.

Nous aimerions pouvoir définir la «&nbsp;forme&nbsp;» d'un objet — l'ensemble des méthodes et des propriétés qu'il peut avoir — puis créer autant d'objets que nous le souhaitons, en mettant simplement à jour les valeurs des propriétés qui sont différentes.

La première version de cette fonctionnalité est simplement une fonction&nbsp;:

```js
function creerPersonne(nom) {
  const obj = {};
  obj.nom = nom;
  obj.salutation = function () {
    console.log(`Salut ! Je suis ${this.nom}.`);
  };
  return obj;
}
```

Cette fonction crée et renvoie un nouvel objet à chaque fois qu'on l'appelle. L'objet aura deux membres&nbsp;:

- une propriété `nom`
- une méthode `salutation()`.

Noter que `creerPersonne()` prend un paramètre `nom` pour définir la valeur de la propriété `nom`, mais la valeur de la méthode `salutation()` sera la même pour tous les objets créés à l'aide de cette fonction. Il s'agit d'un modèle très courant pour créer des objets.

Nous pouvons désormais créer autant d'objets que nous le souhaitons, en réutilisant la définition&nbsp;:

```js
const sylvie = creerPersonne("Sylvie");
sylvie.salutation();
// "Salut ! Je suis Sylvie."

const frank = creerPersonne("Frank");
frank.salutation();
// "Salut ! Je suis Frank."
```

Cela fonctionne bien, mais c'est un peu long&nbsp;: nous devons créer un objet vide, l'initialiser et le renvoyer. Une meilleure solution consiste à utiliser un **constructeur**. Un constructeur est simplement une fonction appelée à l'aide du mot-clé {{jsxref("operators/new", "new")}}. Lorsque vous appelez un constructeur, celui-ci&nbsp;:

- Crée un nouvel objet
- Lie `this` au nouvel objet, afin que vous puissiez vous référer à `this` dans votre code constructeur
- Exécute le code dans le constructeur
- Renvoie le nouvel objet.

Par convention, les constructeurs commencent par une majuscule et sont nommés d'après le type d'objet qu'ils créent. Nous pourrions donc réécrire notre exemple comme suit&nbsp;:

```js
function Personne(nom) {
  this.nom = nom;
  this.salutation = function () {
    console.log(`Salut ! Je suis ${this.nom}.`);
  };
}
```

Pour appeler `Personne()` en tant que constructeur, nous utilisons `new`&nbsp;:

```js
const sylvie = new Personne("Sylvie");
sylvie.salutation();
// "Salut ! Je suis Sylvie."

const frank = new Personne("Frank");
frank.salutation();
// "Salut ! Je suis Frank."
```

## Vous avez toujours utilisé des objets

En parcourant ces exemples, vous vous êtes probablement dit que la notation par points que vous utilisez vous est très familière. C'est parce que vous l'avez utilisée tout au long du cours&nbsp;! Chaque fois que nous avons travaillé sur un exemple utilisant une API intégrée au navigateur ou un objet JavaScript, nous avons utilisé des objets, car ces fonctionnalités sont construites à partir de structures d'objets identiques à celles que nous avons étudiées ici, bien que plus complexes que dans nos exemples personnalisés de base.

Ainsi, lorsque vous avez utilisé des méthodes de chaîne de caractères telles que&nbsp;:

```js
maChaine.split(",");
```

Vous utilisiez une méthode disponible sur un objet [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String). Chaque fois que vous créez une chaîne dans votre code, cette chaîne est automatiquement créée en tant qu'instance de `String` et dispose donc de plusieurs méthodes et propriétés communes.

Lorsque vous avez accédé au modèle d'objet de document à l'aide de lignes telles que celles-ci&nbsp;:

```js
const maDiv = document.createElement("div");
const maVideo = document.querySelector("video");
```

Vous utilisez une méthode disponible dans l'instance de la classe {{domxref("Document")}}. Pour chaque page web chargée, une instance de `Document` est créée, appelée `document` et qui représente la structure entière de la page, son contenu et d'autres caractéristiques telles que son URL. Encore une fois, cela signifie qu'elle possède plusieurs méthodes/propriétés communes.

C'est également vrai pour beaucoup d'autres objets/API natifs que vous avez utilisé — {{jsxref("Array")}}, {{jsxref("Math")}}, etc.

On notera que les objets/API natifs ne créent pas toujours automatiquement des instances d'objet. Par exemple, [l'API Notifications](/fr/docs/Web/API/Notifications_API) — qui permet aux navigateurs modernes de déclencher leurs propres notifications — vous demande d'instancier vous-même une nouvelle instance d'objet en utilisant le constructeur pour chaque notification que vous souhaitez lancer. Essayez d'entrer le code ci-dessous dans la console JavaScript&nbsp;:

```js
const maNotification = new Notification("Bonjour !");
```

## Résumé

Vous devriez maintenant avoir une bonne idée de la manière dont fonctionnent les objets en JavaScript — y compris la création de vos propres objets simples. Vous devriez également comprendre que les objets sont très utiles en tant que structures permettant de stocker des données et des fonctionnalités connexes — si vous essayiez de garder une trace de toutes les propriétés et méthodes de notre objet `personne` sous forme de variables et de fonctions distinctes, cela serait inefficace et frustrant, et nous courrions le risque d'entrer en conflit avec d'autres variables et fonctions portant les mêmes noms. Les objets nous permettent de conserver les informations en toute sécurité dans leur propre package, à l'abri de tout danger.

Dans le prochain article, nous vous proposerons quelques tests que vous pourrez utiliser pour vérifier si vous avez bien compris et retenu toutes ces informations.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting")}}
