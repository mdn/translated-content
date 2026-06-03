---
title: "Fence : méthode getNestedConfigs()"
short-title: getNestedConfigs()
slug: Web/API/Fence/getNestedConfigs
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

La méthode **`getNestedConfigs()`** de l'interface {{domxref("Fence")}} retourne les {{domxref("FencedFrameConfig")}} chargés dans les éléments HTML `<fencedframe>` imbriqués à l'intérieur de l'élément HTML `<fencedframe>` courant.

## Syntaxe

```js-nolint
getNestedConfigs()
```

### Paramètres

Aucun.

### Valeur de retour

`getNestedConfigs()` a deux valeurs de retour possibles&nbsp;:

- Un tableau de 20 objets {{domxref("FencedFrameConfig")}}, si la configuration du `<fencedframe>` courant a été créée avec une API qui prend en charge les configs imbriquées (par exemple [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr)). Parmi ces 20 configs, les N premières sont celles enregistrées via l'API et les autres sont des configs de remplissage qui navigueront vers `about:blank`, afin que le nombre réel de configs soit masqué et ne puisse pas fuiter d'information.
- `null` si la configuration du `<fencedframe>` courant a été créée avec une API qui ne prend pas en charge les configs imbriquées (par exemple [Shared Storage](/fr/docs/Web/API/Shared_Storage_API)).

## Exemples

```js
// À exécuter dans un <fencedframe>

// Récupérer les configs des cadres protégés imbriqués
const configs = window.fence.getNestedConfigs();

// Définir la config d'un nouveau cadre protégé à l'une des configs récupérées
const frame = document.createElement("fencedframe");
frame.config = configs[0];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
