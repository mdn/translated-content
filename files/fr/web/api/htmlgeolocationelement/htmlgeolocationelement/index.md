---
title: "HTMLGeolocationElement : constructeur HTMLGeolocationElement()"
short-title: HTMLGeolocationElement()
slug: Web/API/HTMLGeolocationElement/HTMLGeolocationElement
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Le constructeur **`HTMLGeolocationElement()`** crée une nouvelle instance d'objet {{DOMxRef("HTMLGeolocationElement")}}.

## Syntaxe

```js-nolint
new HTMLGeolocationElement()
```

### Paramètres

Aucun.

### Valeur de retour

Une nouvelle instance d'objet {{DOMxRef("HTMLGeolocationElement")}}, si elle est utilisée en interne par le navigateur.

Les développeur·euse·s ne peuvent pas utiliser directement le constructeur `HTMLGeolocationElement()` pour créer une nouvelle instance de `HTMLGeolocationElement`&nbsp;: toute tentative entraîne une erreur «&nbsp;illegal constructor&nbsp;».

### Exemples

#### Créer une nouvelle instance de `HTMLGeolocationElement` par programmation

Pour créer une nouvelle instance de `HTMLGeolocationElement` par programmation, au lieu d'essayer d'utiliser le constructeur directement, vous devez créer une nouvelle instance d'élément {{HTMLElement("geolocation")}} en utilisant {{DOMxRef("Document.createElement()")}}&nbsp;:

```js
const geo = document.createElement("geolocation");
```

Vous pouvez ensuite l'utiliser en l'ajoutant au DOM&nbsp;:

```js
document.body.append(geo);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
