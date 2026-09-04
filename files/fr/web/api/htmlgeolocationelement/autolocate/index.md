---
title: "HTMLGeolocationElement : propriété autolocate"
short-title: autolocate
slug: Web/API/HTMLGeolocationElement/autolocate
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété **`autolocate`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} obtient et définit une valeur booléenne indiquant si le navigateur doit demander immédiatement les données de localisation lorsque l'élément HTML {{HTMLElement("geolocation")}} est affiché, à condition que l'autorisation d'utiliser la fonctionnalité `geolocation` ait déjà été accordée.

Elle reflète la valeur de l'attribut [`autolocate`](/fr/docs/Web/HTML/Reference/Elements/geolocation#autolocate) de l'élément `<geolocation>`.

## Valeur

Une valeur booléenne&nbsp;:

- Si `true`, les données de localisation sont demandées dès que l'élément `<geolocation>` est affiché, à condition que l'autorisation d'utiliser la fonctionnalité `geolocation` ait déjà été accordée.
- Si `false`, les données de localisation ne sont demandées que lorsque l'utilisateur·ice appuie sur le bouton `<geolocation>`.

La valeur par défaut est `false`.

Si l'autorisation d'utiliser la fonctionnalité `geolocation` n'a pas été accordée auparavant, la propriété `autolocate` est ignorée.

## Exemples

### Exemple simple

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.autolocate); // true
```

Voir notre [guide de l'exemple de carte intégrée](/fr/docs/Web/API/HTMLGeolocationElement#exemple_de_carte_intégrée) pour un exemple réel incluant `autolocate`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
