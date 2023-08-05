---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
---

{{JSRef}}

Un objet **`FinalizationRegistry`** permet de déclencher une fonction de rappel (<i lang="en">callback</i>) lorsqu'un objet est récupéré par le ramasse-miettes.

## Description

`FinalizationRegistry` fournit une méthode pour demander à ce qu'une fonction de nettoyage soit appelée à un moment lorsqu'un objet enregistré dans le registre de mémoire a été _récupéré_ (traité par le ramasse-miettes). Ces fonctions de rappel pour du nettoyage sont parfois appelées _finaliseurs_.

> **Note :** Ces fonctions de rappels ne devraient pas être utilisées pour des opérations essentielles à la logique d'un programme. Voir les notes ci-après pour plus de détails.

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
// …plus tard si on ne s'intéresse plus à `unObjet`…
registre.unregister(unObjet);
```

Il n'est toutefois pas nécessaire que ce soit le même objet, on peut tout à fait utiliser une autre valeur&nbsp;:

```js
registre.register(unObjet, "une valeur", objetJeton);
// …plus tard si on ne s'intéresse plus à `unObjet`…
registre.unregister(objetJeton);
```

## Constructeur

- [`FinalizationRegistry()`](/fr/docs/Web/JavaScript/Reference/FinalizationRegistry/FinalizationRegistry)
  - : Crée un nouvel objet `FinalizationRegistry`.

## Méthodes de l'instance

- [`FinalizationRegistry.prototype.register()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register)
  - : Enregistre un objet dans le registre afin de pouvoir déclencher une fonction de rappel de nettoyage lorsque l'objet est traité par le ramasse-miettes.
- [`FinalizationRegistry.prototype.unregister()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister)
  - : Retire un objet du registre.

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

Quelques notes à propos des fonctions de rappel de nettoyage&nbsp;:

- On ne doit pas faire reposer une logique essentielle d'un programme sur les fonctions de rappel de nettoyage. Ces dernières peuvent être utiles afin de réduire l'utilisation de la mémoire pendant la vie d'un programme mais seront vraisemblablement inutiles autrement.
- Une implémentation JavaScript conforme, y compris parmi celles qui implémentent un ramasse-miettes, n'est pas tenue d'appeler les fonctions de rappel de nettoyage. Le moment et l'éventualité de cet appel est entièrement dépendant des choix d'implémentation du moteur JavaScript. Lorsqu'un objet enregistré est récupéré, toute fonction de rappel de nettoyage déclarée pourra être appelée sur le coup, plus tard ou jamais.
- Il est probable que les implémentations majeures des moteurs appelleront les fonctions de rappel de nettoyage à un moment pendant l'exécution mais ces appels pourront arriver bien après que l'objet en question ait été récupéré.
- Il existe des situations où même les implémentations qui appellent ces fonctions de rappel ont peu de chance de les invoquer&nbsp;:
  - Lorsque le programme JavaScript s'interrompt entièrement (par exemple, lorsqu'on ferme un onglet dans un navigateur).
  - Lorsque l'instance de `FinalizationRegistry`, elle-même, n'est plus accessible depuis le reste du code JavaScript.

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
- [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
