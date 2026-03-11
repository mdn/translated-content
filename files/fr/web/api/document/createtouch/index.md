---
title: "Document : méthode createTouch()"
short-title: createTouch()
slug: Web/API/Document/createTouch
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

La méthode **`createTouch()`** de l'interface {{DOMxRef("Document")}} crée et retourne un nouvel objet {{DOMxRef("Touch")}}.

> [!NOTE]
> Utilisez le constructeur {{DOMxRef("TouchEvent.TouchEvent", "TouchEvent()")}}.

## Syntaxe

```js-nolint
createTouch(view, target, identifier, pageX, pageY, screenX, screenY)
```

### Paramètres

> [!NOTE]
> Tous les paramètres sont optionnels.

- `view`
  - : La fenêtre ({{DOMxRef("window")}}) dans laquelle le toucher s'est produit.
- `target`
  - : L'objet {{DOMxRef("EventTarget")}} pour le toucher.
- `identifier`
  - : La valeur pour {{DOMxRef("Touch.identifier")}}.
- `pageX`
  - : La valeur pour {{DOMxRef("Touch.pageX")}}.
- `pageY`
  - : La valeur pour {{DOMxRef("Touch.pageY")}}.
- `screenX`
  - : La valeur pour {{DOMxRef("Touch.screenX")}}.
- `screenY`
  - : La valeur pour {{DOMxRef("Touch.screenY")}}.

> [!NOTE]
> Les versions précédentes de cette méthode incluaient les paramètres supplémentaires suivants, mais ces paramètres ne sont inclus dans aucune des normes énumérées ci-dessous. Par conséquent, ces paramètres doivent être considérés comme obsolètes et ne pas être utilisés.

- `clientX`
  - : La valeur pour {{DOMxRef("Touch.clientX")}}.
- `clientY`
  - : La valeur pour {{DOMxRef("Touch.clientY")}}.
- `radiusX`
  - : La valeur pour {{DOMxRef("Touch.radiusX")}}.
- `radiusY`
  - : La valeur pour {{DOMxRef("Touch.radiusY")}}.
- `rotationAngle`
  - : La valeur pour {{DOMxRef("Touch.rotationAngle")}}.
- `force`
  - : La valeur pour {{DOMxRef("Touch.force")}}.

### Valeur de retour

Un objet {{DOMxRef("Touch")}} configuré comme décrit par les paramètres d'entrée.

## Exemples

Cet exemple illustre l'utilisation de la méthode `Document.createTouch()` pour créer des objets {{DOMxRef("Touch")}}.

Dans l'extrait de code suivant, deux objets {{DOMxRef("Touch")}} sont créés pour l'élément `target`.

```js
const target = document.getElementById("target");

const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);
```

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification actuelle. Elle n'est plus en voie de standardisation.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les événements Touch](/fr/docs/Web/API/Touch_events)
- L'interface {{DOMxRef("TouchList")}}
- L'interface {{DOMxRef("Touch")}}
- La méthode {{DOMxRef("Document.createTouchList()")}}
