---
title: "Element : propriété part"
short-title: part
slug: Web/API/Element/part
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("DOM")}}

La propriété en lecture seule **`part`** de l'interface {{DOMxRef("Element")}} contient un objet {{DOMxRef("DOMTokenList")}} représentant l'identifiant de la ou des parties de l'élément. Elle reflète l'attribut de contenu [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part) de l'élément. Ceux-ci peuvent être utilisés pour mettre en forme des parties d'un DOM d'ombre, à l'aide du pseudo-élément {{CSSxRef("::part")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}}. Si l'attribut `part` n'est pas défini ou est vide, il retourne un `DOMTokenList` vide, c'est-à-dire un `DOMTokenList` dont la propriété `length` est égale à `0`.

Bien que la propriété `part` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours attribuer directement à la propriété `part`, ce qui équivaut à attribuer à sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

L'extrait suivant provient de notre exemple [de partie d'ombre <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/shadow-part/).
Ici, l'attribut `part` est utilisé pour trouver les parties d'ombre, et la propriété `part` est ensuite utilisée pour modifier les identifiants de partie de chaque onglet afin que le style correct soit appliqué à l'onglet actif lorsque les onglets sont cliqué.

```js
const onglets = [];
const enfants = this.shadowRoot.children;

for (const elem of enfants) {
  if (elem.getAttribute("part")) {
    onglets.push(elem);
  }
}

onglets.forEach((onglet) => {
  onglet.addEventListener("click", (e) => {
    onglets.forEach((onglet) => {
      onglet.part = "tab";
    });
    e.target.part = "tab active";
  });

  console.log(onglet.part);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément CSS {{CSSxRef("::part")}}
- L'attribut universel HTML [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part)
