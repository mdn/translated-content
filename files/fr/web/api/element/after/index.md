---
title: "Element : méthode after()"
short-title: after()
slug: Web/API/Element/after
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

La méthode **`after()`** de l'interface {{DOMxRef("Element")}} permet d'insérer un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères dans la liste des enfants du parent de l'objet `Element` courant, juste après ce dernier. Les chaînes de caractères sont insérées comme des nœuds {{DOMxRef("Text")}} équivalents.

## Syntaxe

```js-nolint
after(node1)
after(node1, node2)
after(node1, node2, /* …, */ nodeN)
```

### Paramètres

- `node1`, …, `nodeN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères à insérer.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque le nœud ne peut pas être inséré à l'emplacement indiqué dans la hiérarchie.

## Exemples

### Insérer un élément

```js
let conteneur = document.createElement("div");
let p = document.createElement("p");
conteneur.appendChild(p);
let span = document.createElement("span");

p.after(span);

console.log(conteneur.outerHTML);
// "<div><p></p><span></span></div>"
```

### Insérer du texte

```js
let conteneur = document.createElement("div");
let p = document.createElement("p");
conteneur.appendChild(p);

p.after("Texte");

console.log(conteneur.outerHTML);
// "<div><p></p>Texte</div>"
```

### Insérer un élément et du texte

```js
let conteneur = document.createElement("div");
let p = document.createElement("p");
conteneur.appendChild(p);
let span = document.createElement("span");

p.after(span, "Texte");

console.log(conteneur.outerHTML);
// "<div><p></p><span></span>Texte</div>"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.before()")}}
- La méthode {{DOMxRef("Element.append()")}}
- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- La méthode {{DOMxRef("CharacterData.after()")}}
- La méthode {{DOMxRef("DocumentType.after()")}}
- La méthode {{DOMxRef("Node.appendChild()")}}
- L'interface {{DOMxRef("NodeList")}}
