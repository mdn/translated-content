---
title: vide
slug: Web/JavaScript/Reference/Statements/Empty
---

{{jsSidebar("Statements")}}

Une **instruction vide** est utilisée pour ne fournir aucune instruction là où JavaScript en attendrait une.

{{EmbedInteractiveExample("pages/js/statement-empty.html")}}

## Syntaxe

```js-nolint
;
```

## Description

L'instruction vide est représentée par un point-virgule (;) qui indique qu'il n'y a aucune instruction à exécuter, même si JavaScript requiert une instruction à cet emplacement. Le comportement réciproque, où on souhaite exécuter plusieurs instructions là où JavaScript en attend une est possible grâce [à l'instruction bloc](/fr/docs/JavaScript/Reference/Instructions/block) qui permet de combiner plusieurs instructions en une seule.

## Exemples

L'instruction vide peut être utilisée dans les boucles. Par exemple, ici on a un corps de boucle totalement vide :

```js
var arr = [1, 2, 3];

// Affecter 0 pour toutes les valeurs du tableau
for (i = 0; i < arr.length; arr[i++] = 0 /* instruction vide */);

console.log(arr);
// [0, 0, 0]
```

> **Note :** Cela peut être raisonnable que de commenter l'utilisation d'une instruction vide pour la rendre visible et l'expliciter. Par exemple, dans le code qui suit, le point-virgule ne semble pas intentionnel :

```js
if (condition); // Attention, ce "if" ne fait rien !
finDuMonde(); // Cette méthode est donc toujours lancée !!!
```

Un autre exemple avec une instruction {{jsxref("Instructions/if...else")}} sans accolade (`{}`). Si `trois` vaut `true`, rien ne sera exécuté, peu importera la valeur de `quatre`, la fonction `chargerFusée()` ne sera pas exécutée.

```js
if (un) faire1èreEtape();
else if (deux) faire4èmeEtape();
else if (trois);
else if (quatre)
  // rien ici
  faire4èmeEtape();
else chargerFusée();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/block", "L'instruction de bloc","",1)}}
