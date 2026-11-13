---
title: "HTMLGeolocationElement : propriété isValid"
short-title: isValid
slug: Web/API/HTMLGeolocationElement/isValid
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété en lecture seule **`isValid`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} retourne une valeur booléenne indiquant si l'élément associé {{HTMLElement("geolocation")}} est valide ou invalide (bloqué).

Lorsqu'un [bloqueur](/fr/docs/Web/HTML/Reference/Elements/geolocation#blocage_de_geolocation) est actif sur un élément `<geolocation>`, il est empêché de fonctionner (invalide), soit temporairement, soit définitivement, selon la raison.

Vous pouvez obtenir la raison pour laquelle il est invalide via la propriété {{DOMxRef("HTMLGeolocationElement.invalidReason")}} — voir cette page pour la liste complète des raisons possibles.

## Valeur

Une valeur booléenne&nbsp;:

- Si `true`, l'élément `<geolocation>` est valide et fonctionnel, ce qui signifie qu'il peut être utilisé pour demander des données de localisation.
- Si `false`, l'élément `<geolocation>` est invalide et non fonctionnel, ce qui signifie qu'il ne peut pas être utilisé pour demander des données de localisation.

La valeur par défaut est `false`.

## Exemples

### Exemple simple

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.isValid);
// true, tant que l'élément `<geolocation>` n'est pas bloqué d'une quelconque manière
```

Voir la page {{DOMxRef("HTMLGeolocationElement.invalidReason")}} pour un exemple plus complet impliquant `isValid`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
