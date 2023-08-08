---
title: Element.before()
slug: Web/API/Element/before
---

{{APIRef("DOM")}}

La méthode **`Element.before()`** permet d'insérer un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères dans la liste des enfants du parent de l'objet `Element` courant, juste avant ce dernier.
Les objets qui sont des chaînes de caractères sont insérés comme des nœuds [`Text`](/fr/docs/Web/API/Text).

## Syntaxe

```js
before(param1);
before(param1, param2);
before(param1, param2, /* ... ,*/ paramN);
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères à insérer.

### Exceptions

- [`DOMException`](/fr/docs/Web/API/DOMException) `HierarchyRequestError`
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

- [`Element.after()`](/fr/docs/Web/API/Element/after)
- [`Element.append()`](/fr/docs/Web/API/Element/append)
- [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/fr/docs/Web/API/Node/insertBefore)
- [`Element.insertAdjacentElement()`](/fr/docs/Web/API/Element/insertAdjacentElement)
- [`NodeList`](/fr/docs/Web/API/NodeList)
