---
title: "Element : méthode before()"
short-title: before()
slug: Web/API/Element/before
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

La méthode **`before()`** de l'interface {{DOMxRef("Element")}} permet d'insérer un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères dans la liste des enfants du parent de cet `Element`, juste avant celui-ci. Les chaînes de caractères sont insérées comme des nœuds {{DOMxRef("Text")}} équivalents.

## Syntaxe

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères à insérer.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque le nœud ne peut pas être inséré à l'emplacement indiqué dans la hiérarchie.

## Exemples

### Insérer un élément

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### Insérer du texte

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.before("Texte");

console.log(container.outerHTML);
// "<div>Texte<p></p></div>"
```

### Insérer un élément et du texte

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span, "Texte");

console.log(container.outerHTML);
// "<div><span></span>Texte<p></p></div>"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.after()")}}
- La méthode {{DOMxRef("Element.append()")}}
- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- La méthode {{DOMxRef("CharacterData.before()")}}
- La méthode {{DOMxRef("DocumentType.before()")}}
- La méthode {{DOMxRef("Node.appendChild()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}}
- L'interface {{DOMxRef("NodeList")}}
