---
title: Programmation orientée objet
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
original_slug: Learn/JavaScript/Objects/Object-oriented_programming
l10n:
  sourceCommit: 72d4c8678b172f558eca279d98abf23395e0d9a4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

La programmation orientée objet est un paradigme de programmation fondamental pour de nombreux langages de programmation, dont Java et C++. Dans cet article, nous fournirons un aperçu des notions de base de la programmation orientée objet et décrirons trois concepts&nbsp;:

- Les classes et instances
- L'héritage
- L'encapsulation

Nous décrirons ces concepts sans référence particulière à JavaScript, les exemples seront écrits en [pseudo-code](/fr/docs/Glossary/Pseudocode).

> [!NOTE]
> Pour être tout à fait précis, les fonctionnalités décrites ici appartiennent à un style particulier de programmation orienté objet basé sur les classes. La plupart du temps, quand on parle de programmation orientée objet, on parle de ce modèle utilisant des classes.

Après ces descriptions, nous verrons en JavaScript comment les constructeurs et la chaîne de prototypes peuvent être rapprochés de ces concepts objets et leurs différences. Dans l'article suivant, nous verrons d'autres fonctionnalités de JavaScript qui simplifient l'implémentation de programmes orientés objet.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Compréhension des fonctions en JavaScript, notions de bases de JavaScript (voir <a href="/fr/docs/Learn/JavaScript/First_steps">Premiers pas</a> et <a href="/fr/docs/Learn/JavaScript/Building_blocks">Blocs de construction</a >), et notions de base sur les objets (voir <a href="/fr/docs/Learn/JavaScript/Objects/Basics">Introduction aux objets</a> et <a href="/fr/docs/Learn/JavaScript/Objects/Object_prototypes">Prototypes d'objet</a>).</td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Comprendre les concepts élémentaires de la programmation orientée objet basée sur les classes.</td>
    </tr>
  </tbody>
</table>

La programmation orientée objet consiste à modéliser un système comme un ensemble d'objets, où chaque objet représente un aspect donné du système. Les objets contiennent des fonctions (ou méthodes) et des données. Un objet fournit une interface publique pour le reste du code qui voudrait l'utiliser, mais maintient son propre état interne&nbsp;; les autres parties du système n'ont pas à se soucier du fonctionnement interne de l'objet.

## Classes et instances

Lorsqu'on modélise un problème sous la forme d'objets, on crée des définitions abstraites qui représentent les types d'objet qui existent dans le système. Par exemple, si on modélise une école, on pourra avoir des objets pour représenter les enseignants. Les enseignants auront certaines caractéristiques communes&nbsp;: un nom et un sujet d'enseignement. De plus, chaque enseignant pourra réaliser des actions similaires comme noter un devoir ou se présenter au début de l'année.

Ainsi, `Enseignant` pourrait être une **classe** de notre système. La définition d'une classe liste les données et les méthodes dont chaque enseignant dispose.

En pseudo-code, une telle classe pourrait être écrite ainsi&nbsp;:

```
classe Enseignant
    propriétés
        nom
        matière
    méthodes
        noter(devoir)
        sePrésenter()
```

On a donc défini une classe `Enseignant` avec&nbsp;:

- Deux propriétés de données&nbsp;: `nom` et `matière`
- Deux méthodes&nbsp;: `noter()` pour noter un devoir et `sePrésenter()` pour se présenter.

Toute seule, une classe ne fait rien. Il s'agit d'un modèle pour créer des objets réels avec ce type. Chaque enseignant qu'on créera à partir de ce modèle sera appelé une **instance** de la classe `Enseignant`. Le processus de création d'une instance est réalisé par une fonction spéciale appelée **constructeur**. On passera des valeurs au constructeur pour initialiser l'état interne de l'instance.

Généralement, le constructeur fait partie de la définition de la classe et possède le même nom que la classe&nbsp;:

```
classe Enseignant
    propriétés
        nom
        matière
    constructeur
        Enseignant(nom, matière)
    méthodes
        noter(devoir)
        sePrésenter()
```

Ce constructeur prend deux paramètres afin d'initialiser les propriétés `nom` et `matière` lorsqu'on crée un nouvel enseignant.

Maintenant que nous disposons d'un constructeur, nous pouvons créer des enseignants. Les langages de programmation utilisent souvent le mot-clé `new` afin d'indiquer qu'un constructeur est appelé.

```js
guillaume = new Enseignant("Guillaume", "Psychologie");
liliane = new Enseignant("Liliane", "Poésie");

guillaume.matière; // "Psychologie"
guillaume.sePrésenter(); // "Je m'appelle Guillaume et je serai votre enseignant·e en psychologie."

liliane.matière; // "Poésie"
liliane.sePrésenter(); // "Je m'appelle Liliane et je serai votre enseignant·e en poésie."
```

On a ici créé deux objets, tous les deux des instances de la classe `Enseignant`.

## Héritage

Imaginons qu'on veuille également représenter les étudiants dans notre système. À la différence des enseignants, un élève ne peut pas noter de devoirs, n'enseigne pas une matière donnée et appartient à une promotion d'une année donnée.

Toutefois, les élèves ont également un nom et peuvent aussi se présenter. On pourrait alors écrire la définition de la classe d'un élève ainsi&nbsp;:

```
classe Élève
    propriétés
        nom
        année
    constructeur
        Élève(nom, année)
    méthodes
        sePrésenter()
```

Il serait utile de représenter le fait que les élèves et enseignants partagent des caractéristiques. En fait, il s'agit à un certain niveau du même type de choses. C'est là que **l'héritage** entre en jeu.

On peut déjà observer que les élèves et enseignants sont des personnes et que les personnes ont un nom et peuvent se présenter. On peut alors modifier notre modèle en définissant une nouvelle classe, `Personne`, où on définit les propriétés communes à toutes les personnes. Ensuite, les deux classes `Enseignant` et `Élève` peuvent **dériver** de la classe `Personne`, et ajouter leurs propriétés supplémentaires&nbsp;:

```
classe Personne
    propriétés
        nom
    constructeur
        Personne(nom)
    méthodes
        sePrésenter()

classe Enseignant : étend Personne
    propriétés
        matière
    constructeur
        Enseignant(nom, matière)
    méthodes
        noter(devoir)
        sePrésenter()

classe Élève : étend Personne
    propriétés
        année
    constructeur
        Élève(nom, année)
    méthodes
        sePrésenter()
```

Dans ce cas, on dit alors que `Personne` est la **classe parente** (ou surclasse) des classes `Enseignant` et `Élève`. Réciproquement, `Enseignant` et `Élèves` sont des **classes enfants** (ou sous-classes) de `Personne`.

On peut voir ici que la méthode `sePrésenter()` est définie pour les trois classes. En effet, ces personnes peuvent se présenter différemment&nbsp;:

```js
guillaume = new Enseignant("Guillaume", "Psychologie");
guillaume.sePrésenter(); // "Je m'appelle Guillaume et je serai votre enseignant·e en psychologie."

suzanne = new Élève("Suzanne", 1);
suzanne.sePrésenter(); // "Je m'appelle Suzanne et je suis en première année."
```

On pourrait avoir une implémentation par défaut de `sePrésenter()` pour les personnes qui ne sont pas des étudiants ou des enseignants&nbsp;:

```js
thomas = new Person("Thomas");
thomas.sePrésenter(); // "Je m'appelle Thomas."
```

Cette fonctionnalité où une méthode possède le même nom mais différentes implémentations dans différentes classes est appelée **polymorphisme**. Lorsqu'une méthode d'une classe enfant remplace l'implémentation de sa classe parente, on dit qu'elle **surcharge** la version de la classe parente.

## Encapsulation

Les objets fournissent une interface au reste du code qui voudrait les utiliser et ils maintiennent leur propre état interne. L'état interne d'un objet est **privé**, et peut uniquement être manipulé par les méthodes de l'objet (mais pas par celles des autres objets). Séparer l'état privé interne d'un objet et son interface publique est ce qu'on appelle **l'encapsulation**.

Il s'agit d'une fonctionnalité utile, car elle permet de modifier l'implémentation interne d'un objet sans avoir à identifier et à modifier le reste du code qui l'utilise. On a ainsi un pare-feu entre l'objet et le reste du système.

Par exemple, si les élèves ne sont autorisés à étudier le tir à l'arc qu'à partir de la deuxième année, on pourrait implémenter cette règle en exposant la propriété `année` pour que le code externe puisse la consulter et décider si l'élève peut s'inscrire au cours&nbsp;:

```js
if (élève.année > 1) {
  // Autoriser l'inscription dans cette classe
}
```

Toutefois, on a un problème si on décide de changer le critère permettant d'autoriser les élèves à étudier le tir à l'arc (par exemple en demandant à ce qu'un représentant légal ait fourni sa permission)&nbsp;: il faudrait alors mettre à jour tous les endroits du code qui réalisent ce test. Mieux vaudrait avoir une méthode `peutEtudierTirArc()` sur les objets `Élève` et qui implémente cette règle logique&nbsp;:

```
classe Élève : étend Personne
    propriétés
       année
    constructeur
        Élève(nom, année)
    méthodes
       sePrésenter()
       peutEtudierTirArc() { renvoyer ceci.année > 1 }
```

```js
if (student.peutEtudierTirArc()) {
  // Autoriser l'inscription dans cette classe
}
```

Ainsi, si on change les règles pour l'accès à ce cours, il suffira de mettre à jour la classe `Élève` et le reste du code qui l'utilise continuera de fonctionner.

Dans de nombreux langages de programmation orientés objet, on peut empêcher l'accès à l'état interne de l'objet en marquant des propriétés comme étant privée avec le mot-clé `private`. Cela génèrera une erreur si du code externe tente d'y accéder&nbsp;:

```
classe Élève : étend Personne
    propriétés
       privée année
    constructeur
        Élève(nom, année)
    méthodes
       sePrésenter()
       peutEtudierTirArc() { renvoyer ceci.année > 1 }

unÉlève = nouvel Élève('Weber', 1)
unÉlève.année // erreur : 'année' est une propriété privée de Élève
```

Pour les langages qui n'ont pas cette notion, les développeuses et développeurs peuvent utiliser des conventions de nommage (par exemple commencer le nom de la propriété avec un tiret bas) afin d'indiquer qu'une propriété devrait être considérée comme privée.

## La programmation orientée objet et JavaScript

Dans cet article, nous avons décrit les fonctionnalités de base d'un langage de programmation orienté objet et qui utilise les classes, comme Java ou C++.

Dans les deux articles précédents, nous avions vu deux fonctionnalités de JavaScript&nbsp;: [les constructeurs](/fr/docs/Learn_web_development/Core/Scripting/Object_basics) et [les prototypes](/fr/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes). Ces fonctionnalités sont liées à certains des concepts orientés objet vus ci-dessus.

- **Les constructeurs** JavaScript fournissent de quoi écrire une définition de classe pour définir la structure d'un objet, dont ses méthodes, à un seul endroit. Toutefois, les prototypes peuvent aussi être utilisés dans ce cas. Ainsi, si une méthode est définie sur la propriété `prototype` du constructeur, tous les objets créés avec le constructeur auront la méthode via leur prototype et il ne sera pas nécessaire de la définir dans le constructeur.

- **La chaîne de prototypes** semble un outil naturel pour implémenter l'héritage. Ainsi, si on a un objet `Élève` dont le prototype est `Personne`, il pourra hériter de la propriété `nom` et surcharger `sePrésenter()`.

Ceci étant écrit, il y a quelques différences avec le modèle objet basé sur les classes et mieux vaut les comprendre avant d'aller plus loin. En voici quelques-unes.

Pour commencer, dans un modèle objet basé sur les classes, les classes et les objets sont deux notions séparées et les objets sont toujours créés comme des instances d'une classe. De plus, il existe une distinction entre la fonctionnalité qui permet de définir une classe (la syntaxe même de la classe) et la fonctionnalité permettant d'instancier la classe en un objet (le constructeur). En JavaScript, on peut (et on le fait souvent) créer des objets sans déclaration de classe préalable, en utilisant une fonction ou un littéral objet. La création d'objets est alors beaucoup plus légère qu'avec les classes.

Ensuite, bien que la chaîne de prototypes ressemble à une hiérarchie d'héritage et en partage quelques aspects, elle en diffère sur d'autres. Lorsqu'une classe enfant est instanciée, un seul objet est créé qui combine les propriétés définies par la sous-classe et les propriétés définies plus haut dans la hiérarchie. Avec les prototypes, chaque niveau de la hiérarchie est représenté par un objet différent et le lien se fait avec le prototype (voir [`Object.getPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)). Le comportement de la chaîne de prototype se rapproche plus de la **délégation** que de l'héritage. La délégation est une approche où un objet, lorsqu'on lui demande de réaliser une tâche, peut le faire lui-même ou demander à un autre objet de réaliser la tâche à sa place (lui **déléguer**). Sous plusieurs aspects, la délégation est une méthode plus flexible que l'héritage pour combiner les objets (on peut, entre autres, changer l'objet délégué au moment de l'exécution).

Ceci étant posé, les constructeurs et les prototypes peuvent être utilisés afin d'implémenter une programmation orientée objet basée sur les classes en JavaScript. Toutefois, les utiliser directement afin d'implémenter des fonctionnalités comme l'héritage peut s'avérer délicat. C'est pourquoi JavaScript fournit des fonctionnalités supplémentaires, construites par-dessus le modèle prototypal et qui correspondent mieux aux concepts de la programmation orientée objet basée sur les classes. Ces fonctionnalités supplémentaires seront abordées dans l'article suivant.

## Résumé

Dans cet article, nous avons vu les fonctionnalités de base offertes par la programmation orientée objet et rapidement comment les constructeurs et prototypes JavaScript étaient liés à ces fonctionnalités.

Dans le prochain article, nous verrons les fonctionnalités de JavaScript qui permettent de réaliser une programmation orientée objet basée sur des classes.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}
