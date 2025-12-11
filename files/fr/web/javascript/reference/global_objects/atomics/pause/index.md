---
title: "Atomics : méthode statique pause()"
short-title: pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`pause()`** de l'objet {{JSxRef("Atomics")}} fournit une primitive de micro‑attente qui indique au processeur que l'appelant effectue une boucle d'attente active en attendant l'accès à une ressource partagée. Cela permet au système de réduire les ressources allouées au cœur (par exemple la consommation d'énergie) ou au processus, sans céder l'exécution du processus courant.

`pause()` n'a pas d'effet observable autre que le temps d'attente. Le comportement exact dépend de l'architecture du processeur et du système d'exploitation. Par exemple, sur Intel x86, il peut s'agir d'une instruction `pause` comme indiqué dans le [manuel d'optimisation d'Intel <sup>(angl.)</sup>](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html). Sur certaines plateformes, il peut s'agir d'une opération sans effet.

## Syntaxe

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### Paramètres

- `durationHint` {{Optional_Inline}}
  - : Un entier que l'implémentation peut utiliser pour déterminer la durée d'attente. Pour une valeur `n + 1`, une implémentation attend au moins aussi longtemps que pour la valeur `n`. Ce nombre n'a pas de signification physique précise. Il peut exister une limite interne sur la durée maximale de pause de l'ordre de dizaines à centaines de nanosecondes. Ce paramètre peut être utilisé pour implémenter une [backoff strategy](#backoff_strategies) en augmentant la valeur passée dans `durationHint`. Aucune garantie n'existe quant à l'utilisation effective de cet indice par l'implémentation.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `durationHint` n'est ni un entier ni `undefined`.

## Exemples

### Utilisation de `pause()`

Appeler {{JSxRef("Atomics.wait()")}} ou {{JSxRef("Atomics.waitAsync()")}} pour attendre l'accès à une mémoire partagée entraîne la mise hors du cœur du fil d'exécution, puis son retour après l'attente. Cela est efficace en période de forte contention, où l'accès à la mémoire partagée peut prendre un certain temps. Lorsque la contention est faible, il est souvent plus efficace de sonder le verrou sans céder le fil d'exécution&nbsp;: cette approche est connue sous le nom d'[attente active](https://fr.wikipedia.org/wiki/Attente_active) ou de [verrou tournant](https://fr.wikipedia.org/wiki/Spinlock). La méthode `pause()` permet d'effectuer l'attente active de manière plus efficace en fournissant au processeur un indice sur ce que fait le fil d'exécution, et donc sur son faible besoin en ressources.

Pour couvrir les deux cas, une approche courante consiste d'abord à effectuer une attente active en espérant que la contention est faible, puis à attendre si le verrou n'est pas acquis après un court laps de temps. Si le verrou a déjà été acquis via l'attente active, l'appel à `wait()` sera une opération sans effet.

L'exemple ci-dessous montre comment utiliser `Atomics.pause()` et `Atomics.wait()`.

> [!WARNING]
> L'utilisation des verrous tournants sur le thread principal n'est pas recommandée, car elle figerait la page entière. En général, à moins d'être conçus avec beaucoup de soin, les verrous tournants peuvent ne pas être plus performants qu'une attente normale.

```js
// Imaginez qu'un autre processus a aussi accès à cette mémoire partagée
const sab = new SharedArrayBuffer(1024);
const i32 = new Int32Array(sab);

// Voie rapide : faire tourner le processeur un court instant
let spin = 0;
do {
  if (Atomics.compareExchange(i32, 0, 0, 1) === 0) {
    break;
  }
  Atomics.pause();
  spin++;
} while (spin < 10);

// Voie lente : attendre le verrou
// Cela ne peut être appelé que dans un worker,
// car le processus principal ne peut pas être bloqué
Atomics.wait(i32, 0, 1);
```

### Stratégies de suspension

Le paramètre `durationHint` peut être utilisé pour implémenter des stratégies de suspension. Par exemple, un processus peut commencer avec un indice faible et l'augmenter de manière exponentielle à chaque itération. Cela est préférable à l'appel répété de `pause()` parce que, dans du code non soumis au <abbr lang="en" title="Just-In-Time">JIT</abbr>, les appels de fonction ont eux-mêmes un coût important.

> [!NOTE]
> Les implémentations peuvent ne pas utiliser du tout `durationHint` et attendre toujours un temps constant.

```js
// Suspension exponentiel
for (let hint = 1; hint < 1000; hint *= 2) {
  Atomics.pause(hint);
}

// Suspension linéaire
for (let hint = 1; hint < 100; hint++) {
  Atomics.pause(hint);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.wait()")}}
- La méthode {{JSxRef("Atomics.waitAsync()")}}
