---
title: "Element : propriété customElementRegistry"
short-title: customElementRegistry
slug: Web/API/Element/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

La propriété en lecture seule **`customElementRegistry`** de l'interface {{DOMxRef("Element")}} retourne l'objet {{DOMxRef("CustomElementRegistry")}} associé à cet élément, ou `null` si aucun n'a été défini.

La propriété `customElementRegistry` d'un élément est définie lorsque l'élément est créé (par exemple avec {{DOMxRef("Document.createElement()")}} avec l'option `customElementRegistry`, ou lorsqu'il est analysé dans un contexte ayant un registre local). Une fois définie sur un objet `CustomElementRegistry`, elle ne peut pas être modifiée. Le registre détermine quelles définitions de [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) sont utilisées lorsque l'élément est [mis à niveau](/fr/docs/Web/API/CustomElementRegistry/upgrade).

## Valeur

Un objet {{DOMxRef("CustomElementRegistry")}}, ou `null`.

## Exemples

### Accéder au registre d'éléments personnalisés d'un élément

Cet exemple crée un registre local, l'attache à une racine d'ombre, puis lit la propriété `customElementRegistry` d'un élément à l'intérieur de l'arbre d'ombre pour confirmer qu'elle correspond au registre local.

```js
const monRegistre = new CustomElementRegistry();
monRegistre.define(
  "mon-element",
  class extends HTMLElement {
    connectedCallback() {
      this.textContent = "Bonjour depuis le registre local !";
    }
  },
);

const hote = document.createElement("div");
document.body.appendChild(hote);
const ombre = hote.attachShadow({
  mode: "open",
  customElementRegistry: monRegistre,
});
ombre.innerHTML = "<mon-element></mon-element>";

const el = ombre.querySelector("mon-element");
console.log(el.customElementRegistry === monRegistre); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.customElementRegistry")}}
- La propriété {{DOMxRef("ShadowRoot.customElementRegistry")}}
- L'interface {{DOMxRef("CustomElementRegistry")}}
- [Utiliser les éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements)
