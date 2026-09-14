---
title: "HTMLElement : méthode attachInternals()"
short-title: attachInternals()
slug: Web/API/HTMLElement/attachInternals
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Web Components")}}

La méthode **`attachInternals()`** de l'interface {{DOMxRef("HTMLElement")}} retourne un objet {{DOMxRef("ElementInternals")}}.
Cette méthode permet à un [élément personnalisé](/fr/docs/Web/API/Web_components/Using_custom_elements) de participer aux formulaires HTML. L'interface `ElementInternals` fournit des outils pour travailler avec ces éléments de la même manière qu'avec n'importe quel élément de formulaire HTML standard, et expose également le [modèle d'objet d'accessibilité <sup>(angl.)</sup>](https://wicg.github.io/aom/explainer.html) à l'élément.

## Syntaxe

```js-nolint
attachInternals()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("ElementInternals")}}.

### Exceptions

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si l'élément n'est pas un élément personnalisé.
- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si la fonctionnalité «&nbsp;internals&nbsp;» a été désactivée lors de la définition de l'élément.
- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si cette méthode est appelée deux fois sur le même élément.

## Exemples

L'exemple suivant montre comment créer un élément personnalisé associé à un formulaire avec `HTMLElement.attachInternals`. La propriété {{DOMxRef("ElementInternals.form")}} est ensuite affichée dans la console pour démontrer que nous avons bien un objet {{DOMxRef("ElementInternals")}}.

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }
  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

let element = document.getElementById("custom-checkbox");
console.log(element.internals_.form);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Contrôles de formulaire plus puissants <sup>(angl.)</sup>](https://web.dev/articles/more-capable-form-controls)
- [Créer des contrôles de formulaire personnalisés avec `ElementInternals` <sup>(angl.)</sup>](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
