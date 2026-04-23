---
title: "Document : méthode createTouchList()"
short-title: createTouchList()
slug: Web/API/Document/createTouchList
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

La méthode **`createTouchList()`** de l'interface {{DOMxRef("Document")}} crée et retourne un nouvel objet {{DOMxRef("TouchList")}}.

## Syntaxe

```js-nolint
createTouchList(touch1)
createTouchList(touch1, touch2)
createTouchList(touch1, touch2, /* …, */ touchN)
```

### Paramètres

- `touch1`, …, `touchN`
  - : Zéro ou plusieurs objets {{DOMxRef("Touch")}}. Firefox accepte également un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) d'objets {{DOMxRef("Touch")}}.

### Valeur de retour

Un objet {{DOMxRef("TouchList")}} contenant les objets {{DOMxRef("Touch")}} définis par les paramètres `touch`s.

## Exemples

Cet exemple illustre l'utilisation de la méthode `Document.createTouchList()` pour créer des objets {{DOMxRef("TouchList")}}.

Dans l'extrait de code suivant, certains objets {{DOMxRef("Touch")}} sont créés pour l'élément `target` et ces points de contact sont ensuite utilisés pour créer des objets {{DOMxRef("TouchList")}}.

```js
const target = document.getElementById("target");

// Créez quelques points de contact
const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);

// Créez un objet TouchList vide
const list0 = document.createTouchList();

// Créez un objet TouchList avec un seul objet Touch
const list1 = document.createTouchList(touch1);

// Créez un objet TouchList avec deux objets Touch
const list2 = document.createTouchList(touch1, touch2);
```

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification actuelle. Elle n'est plus en voie de standardisation.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les événements Touch](/fr/docs/Web/API/Touch_events)
- L'interface {{DOMxRef("Touch")}}
- L'interface {{DOMxRef("TouchEvent")}}
- L'interface {{DOMxRef("TouchList")}}
- La méthode {{DOMxRef("Document.createTouch()")}}
