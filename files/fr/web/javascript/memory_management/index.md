---
title: Gestion de la mémoire
slug: Web/JavaScript/Memory_Management
tags:
  - JavaScript
  - Mémoire
  - Performance
translation_of: Web/JavaScript/Memory_Management
original_slug: Web/JavaScript/Gestion_de_la_mémoire
---
{{JsSidebar("Advanced")}}

Les langages de bas niveau, tels que C, possèdent des primitives permettant de gérer la mémoire : [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) et [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions) par exemple. En revanche, lorsqu'on utilise JavaScript, la mémoire est allouée lors de la création des objets puis libérée « automatiquement » lorsque ceux-ci ne sont plus utilisés. Cette libération automatique est appelée _garbage collection_ en anglais ou ramasse-miettes. Le fait que ce processus soit automatique est souvent source de confusion et donne parfois l'impression que JavaScript (ou d'autres langages de haut niveau) ne permet pas de gérer la mémoire : nous allons voir que ce n'est pas le cas.

## Le cycle de vie de la mémoire

Quel que soit le langage de programmation, le cycle de vie de la mémoire ressemblera à :

1.  Allouer la mémoire dont on a besoin
2.  Utiliser cette mémoire allouée (lecture, écriture)
3.  Libérer la mémoire allouée lorsqu'on n'en a plus besoin

Le deuxième point est explicite, au niveau du code, pour tous les langages de programmation. Le premier et le troisième points sont explicites pour les langages de bas niveau mais souvent implicites pour les langages de haut niveau tels que JavaScript.

### Allocation de la mémoire en JavaScript

#### Initialisation des valeurs

Afin de simplifier l'écriture de code, JavaScript alloue la mémoire lors de la déclaration des variables :

```js
// alloue de la mémoire pour un nombre
var n = 123;
// alloue de la mémoire pour une chaîne de caractères
var s = "azerty";

// alloue de la mémoire pour un objet et les valeurs qu'il contient
var o = {
  a: 1,
  b: null
};

// alloue de la mémoire pour un tableau et les valeurs qu'il contient
var a = [1, null, "abra"];

// alloue de la mémoire pour une fonction
// une fonction est un objet qui peut être appelé
function f(a) {
  return a + 2;
}

// les expressions de fonction allouent aussi de la mémoire
unElement.addEventListener('click', function(){
  unElement.style.backgroundColor = 'blue';
}, false);
```

#### Allocation par appels de fonctions

Certains appels de fonctions entraînent l'allocation mémoire d'un objet.

```js
// Alloue la mémoire pour un objet date
var d = new Date();

// Alloue de la mémoire pour un objet représentant un élément du DOM
var e = document.createElement('div');
```

Certaines méthodes allouent de la mémoire pour des nouveaux objets ou de nouvelles valeurs.

```js
var s = "azerty";
var s2 = s.substr(0, 3); // s2 est une nouvelle chaîne de caractères
// Les chaînes étant immuables, JavaScript peut choisir
// de ne pas allouer de mémoire mais seulement
// de stocker l'intervalle [0, 3].

var a = ["ouais ouais", "nan nan"];
var a2 = ["génération", "nan nan"];
var a3 = a.concat(a2);
// nouveau tableau de 4 éléments
// (résultat de la concaténation de a et a2)
```

### Utilisation des variables

Utiliser des variables revient à lire et écrire la mémoire allouée. Cela peut être effectué lorsqu'on lit ou modifie la valeur d'une variable ou d'une propriété d'un objet ou encore lorsqu'on passe un argument à une fonction.

### Libérer la mémoire qui n'est plus nécessaire

La plupart des problèmes concernant la gestion de la mémoire surviennent à cet endroit. Le plus difficile est de savoir « quand » la mémoire allouée n'est plus utilisée. Pour les langages « bas niveau », il faut donc que le développeur détermine quelle partie de la mémoire n'est plus utilisée à tel endroit du code et la libère.

Les interpréteurs des langages de haut niveau intègrent un composant logiciel, appelé « ramasse-miettes » qui a pour but de surveiller l'utilisation de la mémoire afin de déterminer quand une partie de la mémoire allouée n'est plus utilisée afin de la libérer automatiquement. Ce procédé ne peut être qu'une approximation car savoir si tel ou tel fragment de mémoire est nécessaire est un problème [indécidable](https://fr.wikipedia.org/wiki/D%C3%A9cidabilit%C3%A9) (autrement dit, ce problème ne peut être résolu par un algorithme).

## Le ramasse-miettes ou _garbage collection_

Comme on vient de le voir, savoir si de la mémoire peut être libérée demeure un problème indécidable. Les ramasses-miettes ne sont donc que des solutions restreintes pour ce problème. La section qui suit détaille les notions importantes pour comprendre ce mécanisme, ainsi que ses limitations.

### Références

Le concept principal utilisé par les algorithmes de ramasse-miettes est celui de _référence_. Dans ce contexte, un objet en référence un autre lorsqu'il a accès à lui (implicitement ou explicitement). Ainsi, un objet JavaScript référencera son [prototype](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (référence implicite) et ses propriétés (référence explicite).

Dans ce contexte, la notion d'objet s'étend et dépasse celle utilisée pour décrire les objets JavaScript, elle contiendra notamment les portées de fonctions (ou la portée globale).

### Compter les références

L'algorithme le plus simple consiste à faire l'équivalence entre « un objet n'est plus nécessaire » et « un objet n'a pas d'objet le référençant ». Ainsi un objet peut être « ramassé » par le ramasse-miettes quand il n'y a plus de références pointant vers lui.

#### Exemple

```js
var o = {
  a: {
    b: 2
  }
};
// 2 objets sont créés. L'un est référencé par l'autre en tant que propriété.
// L'autre est référencé car assigné à la variable 'o'.
// Aucun des deux ne peut être ramassé par le ramasse-miettes.


var o2 = o; // la variable 'o2' est le deuxième élément qui
            // référence l'objet o
o = 1;      // désormais, l'objet qui était dans 'o' possède
            // une seule référence de o2 vers lui

var oa = o2.a; // référence la propriété 'a' de l'objet
               // cet objet a donc 2 références : une
               // par une propriété, l'autre par la variable 'oa'

o2 = "yo"; // L'objet 'o' ne possède plus de références vers lui
           // Il peut être ramassé.
           // Cependant sa propriété 'a' est toujours référencé.
           // La mémoire ne peut donc pas être libérée.

oa = null; // la propriété 'a' ne possède plus de références
           // vers elle. L'objet peut être ramassé et la mémoire
           // libérée.
```

#### Une limitation : les cycles

Cet algorithme est limité car il ne peut pas gérer les cycles (exemple : A référence B et B référence A, ce qui forme un cycle). Avec les cycles, des objets pourraient très bien ne plus être nécessaires et cependant il serait impossible de les ramasser pour libérer la mémoire en utilisant l'algorithme précédent car chaque objet serait référencé au moins une fois et aucun ne pourrait être « ramassé ». Les références circulaires peuvent parfois entraîner des fuites mémoire.

```js
function f() {
  var o = {};
  var o2 = {};
  o.a = o2; // o référence o2
  o2.a = o; // o2 référence o

  return "azerty";
}

f();
```

#### Exemple réel

Les navigateurs Internet Explorer 6 et 7 utilisent cet algorithme pour gérer les objets du DOM. Certains codes peuvent donc entraîner des fuites de mémoires, en voici un exemple :

```js
var div;
window.onload = function() {
  div = document.getElementById("monElementDiv");
  div.referenceCirculaire = div;
  div.desDonnees = new Array(10000).join("*");
};
```

Dans cet exemple, l'élément du DOM `monElementDiv` possède une référence circulaire vers lui-même via la propriété `referenceCirculaire`. Si la propriété n'est pas retirée ou modifiée de façon explicite, un ramasse-miettes qui compte les références aura toujours au moins une référence comptée, ce qui gardera l'élément DOM en mémoire et ce même s'il a été retiré de l'arbre du DOM. Si l'élément du DOM contient beaucoup de données (ce qui est illustré ici avec la propriétés `desDonnées`), la mémoire consommée par ces données ne sera jamais libérée.

### Algorithme « marquer et balayer » (_mark-and-sweep_)

Cet algorithme réduit la définition « un objet n'est plus nécessaire » à « un objet ne peut être atteint ».

L'utilisation de cet algorithme implique de savoir quels sont les objets racines (en JavaScript, la racine est l'objet global). De façon périodique, le ramasse-miettes commencera par ces racines, listera tous les objets référencés par ces racines, puis les objets référencés par eux etc. Le ramasse-miettes pourra ainsi construire une liste de tous les objets accessibles et collecter ceux qui ne sont plus accessibles.

Cet algorithme est meilleur que le précédent car la proposition « un objet possède 0 référence » implique « un objet ne peut être atteint ». En revanche, la réciproque n'est pas vraie comme nous avons pu le voir avec les cycles.

En 2012, l'ensemble des navigateurs web modernes disposent d'un ramasse-miettes implémentant cet algorithme _mark-and-sweep_. L'ensemble des améliorations apportées dans ce domaine de JavaScript représentent des améliorations basées sur cet algorithme, ce ne sont pas de nouveaux algorithmes ou une nouvelle définition pour les objets à supprimer.

#### Les cycles ne posent plus problème

Dans l'exemple ci-dessus, après le retour de la fonction, les deux objets ne sont plus référencés par quelque chose d'accessible depuis l'objet global. L'algorithme les marquera donc comme « non-accessibles ».

#### Limitation : libérer la mémoire manuellement

On pourrait parfois avoir envie de décider quand libérer la mémoire. En 2019, il n'est pas possible de déclencher le ramasse miettes en JavaScript.

## Node.js

Node.js propose certaines options et outils pour configurer et déboguer des problèmes mémoires. Ces fonctionnalités peuvent ne pas être disponibles dans les environnements navigateur.

### Options d'exécution

La quantité de mémoire pour la mémoire du tas (_heap_) peut être augmentée avec une option :

```bash
node --max-old-space-size=6000 index.js
```

On peut également exposer le ramasse-miettes afin de déboguer des problèmes mémoires. Cela s'active via une option et s'utilise avec le débogueur Chrome :

```bash
node --expose-gc --inspect index.js
```

## Voir aussi

- [Article d'IBM sur les pratiques menant aux fuites mémoires en JavaScript (2007)](https://www.ibm.com/developerworks/web/library/wa-memleak/) (en anglais)
- [Billet de Kangax sur les méthodes à utiliser pour enregistrer les gestionnaires d'événements et éviter les fuites mémoires (2010)](https://msdn.microsoft.com/en-us/magazine/ff728624.aspx) (en anglais)
- [La performance pour les logiciels Mozilla et les modules complémentaires](/fr/docs/Performance)
