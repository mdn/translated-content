---
title: Element.after()
slug: Web/API/Element/after
translation_of: Web/API/Element/after
browser-compat: api.Element.after
---
{{APIRef("DOM")}}

La méthode **`Element.after()`** permet d'insérer un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères dans la liste des enfants du parent de l'objet `Element` courant, juste après ce dernier.
Les objets qui sont des chaînes de caractères sont insérés comme des nœuds [`Text`](/fr/docs/Web/API/Text).

## Syntaxe

```js
after(noeud1)
after(noeud1, noeud2)
after(noeud1, noeud2, /* ... ,*/ noeudN)
```

### Paramètres

- `noeud1`, …, `noeudN`
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

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### Insérer du texte

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Texte");

console.log(container.outerHTML);
// "<div><p></p>Texte</div>"
```

### Insérer un élément et du texte

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Texte");

console.log(container.outerHTML);
// "<div><p></p><span></span>Texte</div>"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.before()`](/fr/docs/Web/API/Element/before)
- [`Element.append()`](/fr/docs/Web/API/Element/append)
- [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild)
- [`Element.insertAdjacentElement()`](/fr/docs/Web/API/Element/insertAdjacentElement)
- [`NodeList`](/fr/docs/Web/API/NodeList)
