---
title: "HTMLGeolocationElement : évènement validationstatuschange"
short-title: validationstatuschange
slug: Web/API/HTMLGeolocationElement/validationstatuschange_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

L'évènement **`validationstatuschange`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} est déclenché chaque fois que la valeur {{DOMxRef("HTMLGeolocationElement.isValid", "isValid")}} de l'élément HTML {{HTMLElement("geolocation")}} change.

Ceci se produit lorsqu'un [bloqueur](/fr/docs/Web/HTML/Reference/Elements/geolocation#blocage_de_geolocation) est ajouté ou retiré d'un élément `<geolocation>`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("validationstatuschange", (event) => { })

onvalidationstatuschange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}}.

## Exemples

### Utiliser `validationstatuschange` pour rapporter les raisons d'invalidité

Dans notre [démonstration Explorer les raisons d'invalidité <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)), nous utilisons un gestionnaire d'évènement `validationstatuschange` pour indiquer quand un élément `<geolocation>` devient valide, et rapporter la raison d'invalidité lorsqu'il devient invalide&nbsp;:

```js
geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> est valide`;
  } else {
    reasonElem.textContent = `Raison d'invalidité : ${geo.invalidReason}`;
  }
});
```

À chaque changement de statut de validation, nous vérifions si l'élément `<geolocation>` est valide avec {{DOMxRef("HTMLGeolocationElement.isValid")}}, et si c'est le cas, nous affichons un message de confirmation dans le contenu texte de l'élément `<p>`. Si l'élément `<geolocation>` est invalide, nous affichons la {{DOMxRef("HTMLGeolocationElement.invalidReason")}} dans le contenu texte de l'élément `<p>`.

Voir la page {{DOMxRef("HTMLGeolocationElement.invalidReason")}} pour une explication complète de cet exemple.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
