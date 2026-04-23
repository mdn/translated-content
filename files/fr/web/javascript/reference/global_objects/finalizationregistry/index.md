---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Un objet **`FinalizationRegistry`** permet de déclencher une fonction de rappel (<i lang="en">callback</i>) lorsqu'un objet est récupéré par le ramasse-miettes.

## Description

`FinalizationRegistry` fournit une méthode pour demander à ce qu'une fonction de nettoyage soit appelée à un moment lorsqu'un objet enregistré dans le registre de mémoire a été _récupéré_ (traité par le ramasse-miettes). Ces fonctions de rappel pour du nettoyage sont parfois appelées _finaliseurs_.

> [!NOTE]
> Ces fonctions de rappels ne devraient pas être utilisées pour des opérations essentielles à la logique d'un programme. Voir [les notes sur les fonctions de rappel de nettoyage](#notes_quant_aux_fonctions_de_rappel_de_nettoyage) pour plus de détails.

On crée le registre en passant la fonction de rappel en paramètre&nbsp;:

```js
const registre = new FinalizationRegistry((valeurTenue) => {
  // …
});
```

Ensuite, avec la méthode `register` on inscrit au registre les différents objets pour lesquels on veut que la fonction de rappel de nettoyage soit appelée. Cette fonction prend en argument la valeur courante et une _valeur tenue_ pour celle-ci&nbsp;:

```js
registre.register(unObjet, "une valeur");
```

Le registre ne conserve pas de référence forte vers l'objet, cela irait contre son objectif premier, car l'objet ne serait alors jamais traité par le ramasse-miettes.

Lorsque `unObjet` est récupéré, la fonction de rappel de nettoyage pourra être appelée à un moment avec la _valeur tenue_ fournie (`"une valeur"` dans l'exemple qui précède). La valeur tenue peut être n'importe quelle valeur&nbsp;: une valeur primitive, un objet, même `undefined`. Si la valeur tenue est un objet, le registre conservera une référence _forte_ vers celle-ci (afin de pouvoir la passer comme argument à la fonction de rappel de nettoyage).

Si vous souhaitez retirer un objet du registre plus tard, on passera un troisième argument à la méthode `register`. Cet argument sera _le jeton de désenregistrement_ qui sera utilisé plus tard avec la méthode `unregister` afin de retirer l'objet du registre. Le registre ne conserve qu'une référence faible pour le jeton de désenregistrement.

Une pratique fréquente consiste à utiliser l'objet lui-même comme jeton, ce qui fonctionne sans problème&nbsp;:

```js
registre.register(unObjet, "une valeur", unObjet);
// …

// plus tard si on ne s'intéresse plus à `unObjet`…
registre.unregister(unObjet);
```

Il n'est toutefois pas nécessaire que ce soit le même objet, on peut tout à fait utiliser une autre valeur&nbsp;:

```js
registre.register(unObjet, "une valeur", objetJeton);
// …

// plus tard si on ne s'intéresse plus à `unObjet`…
registre.unregister(objetJeton);
```

## À éviter si possible

Une utilisation correcte de `FinalizationRegistry` nécessite une réflexion suffisante et il est préférable d'avoir à utiliser ces traitements si possible. Il est également important d'éviter d'avoir à dépendre de fonctionnements spécifiques non garantis par la spécification. Le moment, la façon et l'exécution même du ramasse-miettes dépendent éminemment de l'implémentation du moteur JavaScript. Tout comportement observé pour un moteur pourra être différent dans un autre moteur, dans une version différente du même moteur ou encore même dans une situation légèrement différente et pour la même version du même moteur. La gestion du ramasse-miettes est un problème complexe sur lequel travaillent constamment les personnes qui implémentent les moteurs JavaScript.

Voici quelques sujets spécifiques inclus dans [le document explicatif de la proposition correspondante](https://github.com/tc39/proposal-weakrefs/blob/master/reference.md)&nbsp;:

> [Les ramasses-miettes](<https://fr.wikipedia.org/wiki/Ramasse-miettes_(informatique)>) sont compliqués. Si une application ou une bibliothèque dépend d'un ramasse-miettes nettoyant un registre FinalizationRegistry ou appelant un finaliseur de façon précise et prédictible, qu'elle se prépare à être déçue&nbsp;: le nettoyage pourra avoir lieu bien plus tard que prévu voire pas du tout. Ce comportement grandement variable est dû&nbsp;:
>
> - Au fait qu'un objet peut être récupéré par le ramasse-miettes bien plus tôt qu'un autre, même s'il devient inaccessible au même temps, par exemple en raison du ramassage générationnel.
> - À l'action du ramasse-miettes qui peut être divisée dans le temps en utilisant des techniques incrémentales et concurrentes.
> - À des heuristiques d'exécution qui peuvent être utilisées afin d'équilibrer l'usage de la mémoire et la réactivité.
> - Au moteur JavaScript qui pourra tenir des références envers des choses qui semblent inaccessibles (comme des fermetures ou des caches en ligne).
> - À la différence des moteurs JavaScript ou au changement d'algorithmes pour un même moteur au fur et à mesure de ses différentes versions.
> - À des facteurs complexes pouvant maintenir en vie des objets pendant une période indéfinie comme avec l'utilisation de certaines API.

## Notes quant aux fonctions de rappel de nettoyage

- Il ne faut pas faire reposer une logique essentielle d'un programme sur les fonctions de rappel de nettoyage. Ces fonctions peuvent être utiles pour réduire l'utilisation de la mémoire au cours de l'exécution d'un programme, mais seront vraisemblablement inutiles autrement.
- Si votre code vient d'enregistrer une valeur dans le registre, cette cible ne sera pas récupérée avant la fin de la [tâche <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) JavaScript courante. Voir [notes sur WeakRef](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_sur_weakref) pour plus de détails.
- Une implémentation JavaScript conforme, même si elle effectue une collecte de mémoire, n'est pas obligée d'appeler les fonctions de rappel de nettoyage. Le moment et l'éventualité de cet appel dépendent entièrement de l'implémentation du moteur JavaScript. Lorsqu'un objet enregistré est récupéré, toute fonction de rappel de nettoyage déclarée pourra être appelée sur le coup, plus tard ou jamais.
- Il est probable que les principales implémentations appellent les fonctions de rappel de nettoyage à un moment pendant l'exécution, mais ces appels pourront arriver bien après que l'objet concerné ait été récupéré. De plus, si un objet est enregistré dans deux registres, il n'y a aucune garantie que les deux fonctions de rappel soient appelées l'une après l'autre — l'une peut être appelée et l'autre jamais, ou l'autre peut être appelée bien plus tard.
- Il existe également des situations où même les implémentations qui appellent normalement les fonctions de rappel de nettoyage ont peu de chance de les invoquer&nbsp;:
  - Lorsque le programme JavaScript s'interrompt entièrement (par exemple, lorsqu'on ferme un onglet dans un navigateur).
  - Lorsque l'instance de `FinalizationRegistry` elle-même n'est plus accessible depuis le code JavaScript.
- Si la cible d'un `WeakRef` est également dans un `FinalizationRegistry`, la cible du `WeakRef` est effacée en même temps ou avant que toute fonction de rappel de nettoyage associée au registre ne soit appelée&nbsp;; si votre fonction de rappel de nettoyage appelle `deref` sur un `WeakRef` pour l'objet, elle recevra `undefined`.

## Constructeur

- {{JSxRef("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : Crée un nouvel objet `FinalizationRegistry`.

## Propriétés d'instance

Ces propriétés sont définies sur `FinalizationRegistry.prototype` et partagées par toutes les instances de `FinalizationRegistry`.

- {{JSxRef("Object/constructor", "FinalizationRegistry.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `FinalizationRegistry`, la valeur initiale est le constructeur {{JSxRef("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry")}}.
- `FinalizationRegistry.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"FinalizationRegistry"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("FinalizationRegistry.prototype.register()")}}
  - : Enregistre un objet dans le registre afin de pouvoir déclencher une fonction de rappel de nettoyage lorsque l'objet est traité par le ramasse-miettes.
- {{JSxRef("FinalizationRegistry.prototype.unregister()")}}
  - : Retire un objet du registre.

## Exemples

### Créer un nouveau registre

On crée le registre en y passant la fonction de rappel&nbsp;:

```js
const registre = new FinalizationRegistry((valeurTenue) => {
  // ....
});
```

### Enregistrer des objets en vue de leur nettoyage

Ensuite, on enregistre les objets pour lesquels on souhaite avoir la fonction de rappel de nettoyage exécutée. Pour cela, on appelle la méthode `register` en lui passant l'objet et une _valeur tenue_ correspondante&nbsp;:

```js
registre.register(unObjet, "une valeur");
```

### Les fonctions de rappel ne sont jamais appelées de manière synchrone

Peu importe la pression exercée sur le ramasse-miettes, la fonction de rappel de nettoyage ne sera jamais appelée de manière synchrone. L'objet peut être récupéré de façon synchrone, mais la fonction de rappel sera toujours appelée à un moment après la fin de la tâche courante&nbsp;:

```js
let compteur = 0;
const registre = new FinalizationRegistry(() => {
  console.log(`${compteur} tableau(x) récupéré(s) par le ramasse-miettes`);
});

registre.register(["foo"]);

(function allouerMemoire() {
  // Allouer 50000 fonctions — c'est beaucoup de mémoire !
  Array.from({ length: 50000 }, () => () => {});
  if (compteur > 5000) return;
  compteur++;
  allouerMemoire();
})();

console.log("Fin de la tâche principale");
// Logs:
// Fin de la tâche principale
// 5001 tableau(x) récupéré(s) par le ramasse-miettes
```

Cependant, si vous laissez une petite pause entre chaque allocation, la fonction de rappel pourra être appelée plus tôt&nbsp;:

```js
let tableauRecupere = false;
let compteur = 0;
const registre = new FinalizationRegistry(() => {
  console.log(`${compteur} tableau(x) récupéré(s) par le ramasse-miettes`);
  tableauRecupere = true;
});

registre.register(["toto"]);

(function allouerMemoire() {
  // Allouer 50000 fonctions — c'est beaucoup de mémoire !
  Array.from({ length: 50000 }, () => () => {});
  if (compteur > 5000 || tableauRecupere) return;
  compteur++;
  // Utiliser setTimeout pour que chaque allouerMemoire soit une tâche différente
  setTimeout(allouerMemoire);
})();

console.log("Fin de la tâche principale");
```

Il n'y a aucune garantie que la fonction de rappel soit appelée plus tôt ou qu'elle soit appelée tout court, mais il est possible que le message affiché ait une valeur de compteur inférieure à 5000.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("WeakRef")}}
- L'objet {{JSxRef("WeakSet")}}
- L'objet {{JSxRef("WeakMap")}}
