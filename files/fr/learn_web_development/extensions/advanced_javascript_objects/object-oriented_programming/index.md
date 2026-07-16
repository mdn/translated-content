---
title: Programmation orientée objet
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

La programmation orientée objet (POO) est un paradigme de programmation fondamental pour de nombreux langages de programmation, dont Java et C++. Dans cet article, nous fournirons un aperçu des concepts de base de la POO. Nous décrivons trois concepts principaux&nbsp;: **classes et instances**, **héritage** et **encapsulation**. Pour l'instant, nous décrivons ces concepts sans référence particulière à JavaScript, donc tous les exemples sont donnés en {{Glossary("Pseudocode", "pseudo-code")}}.

> [!NOTE]
> Pour être tout à fait précis, les fonctionnalités décrites ici appartiennent à un style particulier de POO appelé **basé sur les classes** ou «&nbsp;classique&nbsp;». Lorsque l'on parle de POO, c'est généralement ce type qui est sous-entendu.

Après cela, en JavaScript, nous examinerons comment les constructeurs et la chaîne de prototypes se rapportent à ces concepts de POO, et comment ils diffèrent. Dans l'article suivant, nous examinerons certaines fonctionnalités supplémentaires de JavaScript qui facilitent la mise en œuvre de programmes orientés objet.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Être familier avec les bases de JavaScript (en particulier
        <a href="/fr/docs/Learn_web_development/Core/Scripting/Object_basics">les bases des objets</a>) et les concepts de JavaScript orienté objet abordés dans les leçons précédentes de ce module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Concepts de la programmation orientée objet (POO)&nbsp;: classes, instances, héritage et encapsulation.</li>
          <li>Comment ces concepts de POO s'appliquent à JavaScript et quelles sont les différences avec des langages comme Java ou C++.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

La programmation orientée objet consiste à modéliser un système comme un ensemble d'objets, où chaque objet représente un aspect donné du système. Les objets contiennent des fonctions (ou méthodes) et des données. Un objet fournit une interface publique pour le reste du code qui veut l'utiliser, mais maintient son propre état interne&nbsp;; les autres parties du système n'ont pas à se soucier du fonctionnement interne de l'objet.

## Classes et instances

Lorsqu'on modélise un problème sous la forme d'objets, on crée des définitions abstraites qui représentent les types d'objet qui existent dans le système. Par exemple, si on modélise une école, on peut avoir des objets pour représenter les enseignants. Les enseignants ont certaines caractéristiques communes&nbsp;: un nom et un sujet d'enseignement. De plus, chaque enseignant peut réaliser des actions similaires comme noter un devoir ou se présenter au début de l'année.

Ainsi, `Enseignant` peut être une **classe** de notre système. La définition d'une classe liste les données et les méthodes dont chaque enseignant dispose.

En pseudo-code, une telle classe peut être écrite ainsi&nbsp;:

```
classe Enseignant
    propriétés
        nom
        matiere
    méthodes
        noter(devoir)
        sePresenter()
```

On a donc défini une classe `Enseignant` avec&nbsp;:

- Deux propriétés de données&nbsp;: `nom` et `matiere`
- Deux méthodes&nbsp;: `noter()` pour noter un devoir et `sePresenter()` pour se présenter.

Toute seule, une classe ne fait rien. Il s'agit d'un modèle pour créer des objets réels avec ce type. Chaque enseignant qu'on crée à partir de ce modèle est appelé une **instance** de la classe `Enseignant`. Le processus de création d'une instance est réalisé par une fonction spéciale appelée **constructeur**. On passe des valeurs au constructeur pour initialiser l'état interne de l'instance.

Généralement, le constructeur fait partie de la définition de la classe et possède le même nom que la classe&nbsp;:

```
classe Enseignant
    propriétés
        nom
        matiere
    constructeur
        Enseignant(nom, matiere)
    méthodes
        noter(devoir)
        sePresenter()
```

Ce constructeur prend deux paramètres afin d'initialiser les propriétés `nom` et `matiere` lorsqu'on crée un nouvel enseignant.

Maintenant que nous disposons d'un constructeur, nous pouvons créer des enseignants. Les langages de programmation utilisent souvent le mot-clé `new` afin d'indiquer qu'un constructeur est appelé.

```js
guillaume = new Enseignant("Guillaume", "Psychologie");
liliane = new Enseignant("Liliane", "Poésie");

guillaume.matiere; // "Psychologie"
guillaume.sePresenter(); // "Je m'appelle Guillaume et je suis votre enseignant·e en psychologie."

liliane.matiere; // "Poésie"
liliane.sePresenter(); // "Je m'appelle Liliane et je suis votre enseignant·e en poésie."
```

On a ici créé deux objets, tous les deux des instances de la classe `Enseignant`.

## Héritage

Imaginons qu'on veuille également représenter les étudiants dans notre système. À la différence des enseignants, un élève ne peut pas noter de devoirs, n'enseigne pas une matière donnée et appartient à une promotion d'une année donnée.

Toutefois, les élèves ont également un nom et peuvent aussi se présenter. On peut alors écrire la définition de la classe d'un élève ainsi&nbsp;:

```
classe Eleve
    propriétés
        nom
        annee
    constructeur
        Eleve(nom, annee)
    méthodes
        sePresenter()
```

Il est utile de représenter le fait que les élèves et enseignants partagent des caractéristiques. En fait, il s'agit à un certain niveau du _même type de choses_. C'est là que **l'héritage** entre en jeu.

On peut déjà observer que les élèves et enseignants sont des personnes et que les personnes ont un nom et peuvent se présenter. On peut alors modifier notre modèle en définissant une nouvelle classe, `Personne`, où on définit les propriétés communes à toutes les personnes. Ensuite, les deux classes `Enseignant` et `Eleve` peuvent **dériver** de la classe `Personne`, et ajouter leurs propriétés supplémentaires&nbsp;:

```
classe Personne
    propriétés
        nom
    constructeur
        Personne(nom)
    méthodes
        sePresenter()

classe Enseignant : étend Personne
    propriétés
        matiere
    constructeur
        Enseignant(nom, matiere)
    méthodes
        noter(devoir)
        sePresenter()

classe Eleve : étend Personne
    propriétés
        annee
    constructeur
        Eleve(nom, annee)
    méthodes
        sePresenter()
```

Dans ce cas, on dit alors que `Personne` est la **classe parente** (ou surclasse) des classes `Enseignant` et `Eleve`. Réciproquement, `Enseignant` et `Eleve` sont des **classes enfants** (ou sous-classes) de `Personne`.

On peut voir ici que la méthode `sePresenter()` est définie pour les trois classes. En effet, ces personnes peuvent se présenter différemment&nbsp;:

```js
guillaume = new Enseignant("Guillaume", "Psychologie");
guillaume.sePresenter(); // "Je m'appelle Guillaume et je suis votre enseignant·e en psychologie."

suzanne = new Eleve("Suzanne", 1);
suzanne.sePresenter(); // "Je m'appelle Suzanne et je suis en première année."
```

On peut avoir une implémentation par défaut de `sePresenter()` pour les personnes qui ne sont pas des étudiants ou des enseignants&nbsp;:

```js
thomas = new Personne("Thomas");
thomas.sePresenter(); // "Je m'appelle Thomas."
```

Cette fonctionnalité où une méthode possède le même nom mais différentes implémentations dans différentes classes est appelée **polymorphisme**. Lorsqu'une méthode d'une classe enfant remplace l'implémentation de sa classe parente, on dit qu'elle **surcharge** la version de la classe parente.

## Encapsulation

Les objets fournissent une interface au reste du code qui veut les utiliser et ils maintiennent leur propre état interne. L'état interne d'un objet est **privé**, et peut uniquement être manipulé par les méthodes de l'objet (mais pas par celles des autres objets). Séparer l'état privé interne d'un objet et son interface publique est ce qu'on appelle **l'encapsulation**.

Il s'agit d'une fonctionnalité utile, car elle permet de modifier l'implémentation interne d'un objet sans avoir à identifier et à modifier le reste du code qui l'utilise. On a ainsi un pare-feu entre l'objet et le reste du système.

Par exemple, si les élèves ne sont autorisés à étudier le tir à l'arc qu'à partir de la deuxième année, on peut implémenter cette règle en exposant la propriété `annee` pour que le code externe puisse la consulter et décider si l'élève peut s'inscrire au cours&nbsp;:

```js
if (eleve.annee > 1) {
  // Autoriser l'inscription dans cette classe
}
```

Toutefois, on a un problème si on décide de changer le critère permettant d'autoriser les élèves à étudier le tir à l'arc (par exemple en demandant à ce qu'un représentant légal ait fourni sa permission)&nbsp;: il faut alors mettre à jour tous les endroits du code qui réalisent ce test. Mieux vaut avoir une méthode `peutEtudierTirArc()` sur les objets `Eleve` et qui implémente cette règle logique&nbsp;:

```
classe Eleve : étend Personne
    propriétés
       annee
    constructeur
        Eleve(nom, annee)
    méthodes
       sePresenter()
       peutEtudierTirArc() { retourner ceci.annee > 1 }
```

```js
if (eleve.peutEtudierTirArc()) {
  // Autoriser l'inscription dans cette classe
}
```

Ainsi, si on change les règles pour l'accès à ce cours, il suffit de mettre à jour la classe `Eleve` et le reste du code qui l'utilise continue de fonctionner.

Dans de nombreux langages de programmation orientés objet, on peut empêcher l'accès à l'état interne de l'objet en marquant des propriétés comme étant privée avec le mot-clé `private`. Cela lève une erreur si du code externe tente d'y accéder&nbsp;:

```
classe Eleve : étend Personne
    propriétés
       privée annee
    constructeur
        Eleve(nom, annee)
    méthodes
       sePresenter()
       peutEtudierTirArc() { retourner ceci.annee > 1 }

unEleve = nouvel Eleve('Weber', 1)
unEleve.annee // erreur : 'annee' est une propriété privée de Eleve
```

Pour les langages qui n'ont pas cette notion, les développeur·euse·s peuvent utiliser des conventions de nommage (par exemple commencer le nom de la propriété avec un tiret bas) afin d'indiquer qu'une propriété doit être considérée comme privée.

## La programmation orientée objet et JavaScript

Dans cet article, nous avons décrit les fonctionnalités de base d'un langage de programmation orienté objet et qui utilise les classes, comme Java ou C++.

Dans les deux articles précédents, nous avions vu deux fonctionnalités de JavaScript&nbsp;: [les constructeurs](/fr/docs/Learn_web_development/Core/Scripting/Object_basics) et [les prototypes](/fr/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes). Ces fonctionnalités sont liées à certains des concepts orientés objet vus ci-dessus.

- **Les constructeurs** JavaScript fournissent de quoi écrire une définition de classe pour définir la structure d'un objet, dont ses méthodes, à un seul endroit. Toutefois, les prototypes peuvent aussi être utilisés dans ce cas. Ainsi, si une méthode est définie sur la propriété `prototype` du constructeur, tous les objets créés avec le constructeur ont la méthode avec leur prototype et il n'est pas nécessaire de la définir dans le constructeur.

- **La chaîne de prototypes** semble un outil naturel pour implémenter l'héritage. Ainsi, si on a un objet `Eleve` dont le prototype est `Personne`, il peut hériter de la propriété `nom` et surcharger `sePresenter()`.

Ceci étant écrit, il y a quelques différences avec le modèle objet basé sur les classes et mieux vaut les comprendre avant d'aller plus loin. En voici quelques-unes.

Pour commencer, dans un modèle objet basé sur les classes, les classes et les objets sont deux notions séparées et les objets sont toujours créés comme des instances d'une classe. De plus, il existe une distinction entre la fonctionnalité qui permet de définir une classe (la syntaxe même de la classe) et la fonctionnalité permettant d'instancier la classe en un objet (le constructeur). En JavaScript, on peut (et on le fait souvent) créer des objets sans déclaration de classe préalable, en utilisant une fonction ou un littéral objet. La création d'objets est alors beaucoup plus légère qu'avec les classes.

Ensuite, bien qu'une chaîne de prototypes ressemble à une hiérarchie d'héritage et s'y comporte à certains égards, elle diffère à d'autres. Lorsqu'une sous-classe est instanciée, un seul objet est créé, qui combine les propriétés définies dans la sous-classe avec celles définies plus haut dans la hiérarchie. Avec le prototypage, chaque niveau de la hiérarchie est représenté par un objet distinct, et ceux-ci sont reliés entre eux par la propriété `__proto__`. Le comportement de la chaîne de prototypes s'apparente moins à l'héritage qu'à la **délégation**. La délégation est un modèle de programmation dans lequel un objet, lorsqu'on lui demande d'effectuer une tâche, peut l'exécuter lui-même ou demander à un autre objet (son **délégué**) de l'exécuter à sa place. Dans bien des cas, la délégation constitue une manière plus flexible de combiner des objets que l'héritage (notamment parce qu'il est possible de modifier ou de remplacer complètement le délégué au moment de l'exécution).

Cela dit, les constructeurs et les prototypes peuvent être utilisés pour implémenter des modèles de POO basés sur les classes en JavaScript. Mais les utiliser directement pour implémenter des fonctionnalités comme l'héritage est délicat, donc JavaScript fournit des fonctionnalités supplémentaires, superposées au modèle de prototype, qui correspondent plus directement aux concepts de la POO basée sur les classes. Ces fonctionnalités supplémentaires sont le sujet du prochain article.

## Résumé

Dans cet article, nous avons vu les fonctionnalités de base offertes par la programmation orientée objet et rapidement comment les constructeurs et prototypes JavaScript étaient liés à ces fonctionnalités.

Dans le prochain article, nous verrons les fonctionnalités de JavaScript qui permettent de réaliser une programmation orientée objet basée sur des classes.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
