---
title: "Element : évènement DOMActivate"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: 99487ceacd216eeb20b8679b1dc0fe6b16e7366d
---

{{APIRef}}{{Deprecated_Header}}

L'évènement **`DOMActivate`** se déclenche sur un élément lorsqu'il devient actif, par exemple lorsqu'il est cliqué avec la souris ou lorsqu'une touche est utilisée pour y naviguer.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}.

```js-nolint
addEventListener("DOMActivate", (event) => { })
```

> [!NOTE]
> Il n'existe pas de propriété de gestionnaire d'évènement `onDOMActivate` pour cet évènement.

## Type d'évènement

Un objet {{DOMxRef("UIEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("UIEvent")}}

## Exemples

Cet exemple fait des écoutes pour `DOMActivate` sur un élément HTML {{HTMLElement("button")}} et affiche son {{DOMxRef("UIEvent/detail", "detail")}}.

### HTML

```html
<button>Cliquez</button>
```

### JavaScript

```js
const bouton = document.querySelector("button");

bouton.addEventListener("DOMActivate", (event) => {
  bouton.textContent = `Nombre de clics : ${event.detail}`;
});
```

### Résultat

Notez que `detail` de l'évènement `DOMActivate` peut avoir un comportement spécifique au navigateur. Il peut être toujours `0`, ou avoir un comportement similaire à celui de l'évènement {{DOMxRef("Element/click_event", "click")}} pour `detail` (c'est-à-dire indiquant le nombre de clics consécutifs).

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("UIEvent")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
