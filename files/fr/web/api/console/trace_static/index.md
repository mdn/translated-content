---
title: "console : méthode statique trace()"
slug: Web/API/console/trace_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.trace()`** permet d'afficher la trace de la pile d'appels dans la console.

{{AvailableInWorkers}}

> [!NOTE]
> Dans certains navigateurs, `console.trace()` pourra également afficher la séquence des appels et des évènements asynchrones qui ont mené à l'appel courant de `console.trace()` et qui ne sont pas nécessairement dans la pile d'appels, pour aider à déterminer l'origine de la boucle d'évaluation courante.

Voir [la section sur le traçage des piles d'appels dans la documentation de `console`](/fr/docs/Web/API/console#traces_de_piles_dappels) pour plus de détails et d'exemples.

## Syntaxe

```js-nolint
trace()
trace(obj1, /* …, */ objN)
```

### Paramètres

- `obj1` … `objN` {{optional_inline}}
  - : Zéro ou plusieurs objets à afficher dans la console avec la trace d'appels. Ces objets sont assemblés et formatés comme s'ils avaient été passés à [`console.log()`](/fr/docs/Web/API/console/log_static).

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

```js
function toto() {
  function truc() {
    console.trace();
  }
  truc();
}

toto();
```

Avec le fragment de code précédent, on aura la trace suivante dans la console&nbsp;:

```plain
truc
toto
<anonymous>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
