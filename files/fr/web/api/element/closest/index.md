---
title: "Element : méthode closest()"
short-title: closest()
slug: Web/API/Element/closest
l10n:
  sourceCommit: a659a31a9dda9d90cf4df1ed5a7ef216d0ad56ba
---

{{APIRef("DOM")}}

La méthode **`closest()`** de l'interface {{DOMxRef("Element")}} traverse l'élément et ses parents (en direction de la racine du document) jusqu'à ce qu'elle trouve un nœud correspondant au [sélecteur CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) défini.

## Syntaxe

```js-nolint
closest(selectors)
```

### Paramètres

- `selectors`
  - : Une chaîne de caractères de [sélecteurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) valides pour correspondre à un {{DOMxRef("Element")}} et à ses ancêtres.

### Valeur de retour

L'ancêtre le plus proche de {{DOMxRef("Element")}} ou lui-même, qui correspond aux `selectors`. S'il n'y a pas un tel élément, `null` est retourné.

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si la chaîne de caractères `selectors` n'est pas un sélecteur CSS valide.

## Exemples

### HTML

```html
<article>
  <div id="div-01">
    Voici div-01
    <div id="div-02">
      Voici div-02
      <div id="div-03">Voici div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById("div-03");

// l'ancêtre le plus proche avec l'identifiant "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

// l'ancêtre le plus proche qui est un div dans un div
console.log(el.closest("div div")); // <div id="div-03">

// l'ancêtre le plus proche qui est un div et qui a un article parent
console.log(el.closest("article > div")); // <div id="div-01">

// l'ancêtre le plus proche qui n'est pas un div
console.log(el.closest(":not(div)")); // <article>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

- Pour Edge 15-18, `document.createElement(tagName).closest(tagName)` retourne `null` si l'élément n'est pas d'abord connecté (directement ou indirectement) à l'objet de contexte, par exemple l'objet {{DOMxRef("Document")}} dans le cas du DOM classique.

## Voir aussi

- Le module [des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- Les autres méthodes de {{DOMxRef("Element")}} qui prennent des sélecteurs en argument&nbsp;: {{DOMxRef("Element.querySelector()")}}, {{DOMxRef("Element.querySelectorAll()")}} et {{DOMxRef("Element.matches()")}}.
