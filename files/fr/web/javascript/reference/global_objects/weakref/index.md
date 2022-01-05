---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
translation_of: Web/JavaScript/Reference/Global_Objects/WeakRef
browser-compat: javascript.builtins.WeakRef
---
{{JSRef}}

Un objet **`WeakRef`** permet de tenir une référence faible vers un autre objet, sans empêcher que ce dernier puisse être récupéré par le ramasse-miettes.

## Description

Un objet `WeakRef` contient une référence faible vers un objet, appelé _cible_ ou _référent_. Une _référence faible_ vers un objet est une référence qui n'empêche pas l'objet d'être récupéré par le ramasse-miettes. À l'inverse, une référence normale (aussi qualifiée de  _forte_) implique de conserver un objet en mémoire. Lorsqu'un objet n'a plus de référence forte envers lui, le ramasse-miettes du moteur JavaScript peut détruire l'objet et récupérer la mémoire correspondante. Une fois que cela est fait, on ne peut plus accéder à l'objet depuis une référence faible.

> **Note :** Voir la section [À éviter si possible](#à_éviter_si_possible) ci-après. Une utilisation correcte et pertinente de `WeakRef` nécessite une réflexion appuyée. C'est un objet qu'il conviendra d'éviter si possible.

## Constructeur

- [`WeakRef()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef)
  - : Crée un nouvel objet `WeakRef`.

## Méthodes d'instance

- [`WeakRef.prototype.deref()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref)
  - : Renvoie l'objet cible de l'objet `WeakRef`, ou `undefined` si l'objet cible a été récupéré.

## À éviter si possible

Une utilisation correcte de `WeakRef` nécessite une réflexion suffisante et il est préférable d'avoir à utiliser ces traitements si possible. Il est également important d'éviter d'avoir à dépendre de fonctionnements spécifiques non garantis par la spécification. Le moment, la façon et l'exécution même du ramasse-miettes dépendent éminemment de l'implémentation du moteur JavaScript. Tout comportement observé pour un moteur pourra être différent dans un autre moteur, dans une version différente du même moteur ou encore même dans une situation légèrement différente et pour la même version du même moteur. La gestion du ramasse-miettes est un problème complexe sur lequel travaillent constamment les personnes qui implémentent les moteurs JavaScript.


Voici quelques sujets spécifiques inclus dans [le document explicatif de la proposition correspondante](https://github.com/tc39/proposal-weakrefs/blob/master/reference.md)&nbsp;:

> [Les ramasses-miettes](https://fr.wikipedia.org/wiki/Ramasse-miettes_(informatique)) sont compliqués. Si une application ou une bibliothèque dépend d'un ramasse-miettes nettoyant un registre FinalizationRegistry ou appelant un finaliseur de façon précise et prédictible, qu'elle se prépare à être déçue&nbsp;: le nettoyage pourra avoir lieu bien plus tard que prévu voire pas du tout. Ce comportement grandement variable est dû&nbsp;:
>
> - Au fait qu'un objet peut être récupéré par le ramasse-miettes bien plus tôt qu'un autre, même s'il devient inaccessible au même temps, par exemple en raison du ramassage générationnel.
> - À l'action du ramasse-miettes qui peut être divisée dans le temps en utilisant des techniques incrémentales et concurrentes.
> - À des heuristiques d'exécution qui peuvent être utilisées afin d'équilibrer l'usage de la mémoire et la réactivité.
> - Au moteur JavaScript qui pourra tenir des références envers des choses qui semblent inaccessibles (comme des fermetures ou des caches en ligne).
> - À la différence des moteurs JavaScript ou au changement d'algorithmes pour un même moteur au fur et à mesure de ses différentes versions.
> - À des facteurs complexes pouvant maintenir en vie des objets pendant une période indéfinie comme avec l'utilisation de certaines API.

## Notes sur WeakRef

Quelques notes à propos des objets `WeakRef`&nbsp;:

- Si votre code vient de créer un objet `WeakRef` pour un objet cible, ou vient d'obtenir un objet cible via la méthode `deref`, cet objet cible ne sera pas récupéré avant la fin de la [tâche](https://tc39.es/ecma262/#job) courante (incluant toutes les tâches de réaction aux promesses qui s'exécutent à la fin de la tâche de script). Autrement dit, on ne peut «&nbsp;voir&nbsp;» un objet être récupéré qu'entre des tours de la boucle d'évènement. L'objectif premier est d'éviter d'exposer le comportement interne du ramasse-miettes à du code JavaScript (afin d'éviter que des personnes tirent des hypothèses hasardeuses sur le fonctionnement du ramasse-miettes qui est constamment en évolution).
- Si plusieurs `WeakRef` partagent la même cible, leurs états sont cohérents. Le résultat d'un appel à `deref` sur l'un d'entre eux correspondra au résultat d'un appel à `deref` sur un autre. Il n'est pas possible d'obtenir l'objet cible depuis l'un et `undefined` depuis l'autre.
- Si la cible d'un objet `WeakRef` appartient également à un registre [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry), la cible `WeakRef` est nettoyée au même moment ou avant toute fonction de rappel de nettoyage. Si votre fonction de rappel de nettoyage appel `deref` sur une `WeakRef` pour l'objet récupéré, la fonction recevra `undefined`.
- Il n'est pas possible de changer la cible d'un objet `WeakRef`, ce sera toujours la cible originelle ou `undefined` si la cible a été récupérée.
- Un objet `WeakRef` pourraient ne jamais renvoyer `undefined` avec `deref`, même si aucune référence forte n'existe envers l'objet cible, car le ramasse-miettes peut ne jamais décider de récupérer l'objet.

## Exemples

### Utiliser un objet WeakRef

Dans cet exemple, on démarre un compteur dans un élément DOM et on l'arrête quand l'élément n'existe plus&nbsp;:

```js
class Counter {
  constructor(element) {
    // On attache une référence faible à l'élément du DOM
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // On récupère l'élément depuis la référence faible s'il existe encore
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // Dans ce cas, l'élément n'existe plus
        console.log("L'élément n'est plus.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
- [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
