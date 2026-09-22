---
title: "Element : méthode matches()"
short-title: matches()
slug: Web/API/Element/matches
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La méthode **`matches()`** de l'interface {{DOMxRef("Element")}} teste si l'élément est sélectionné par le [sélecteur CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) défini.

## Syntaxe

```js-nolint
matches(selectors)
```

### Paramètres

- `selectors`
  - : Une chaîne de caractères contenant des [sélecteurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) valides pour tester le {{DOMxRef("Element")}}.

### Valeur de retour

`true` si l'objet {{DOMxRef("Element")}} correspond aux `selectors`. Sinon, `false`.

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si `selectors` ne peut pas être analysé comme une liste de sélecteurs CSS.

## Exemples

### HTML

```html
<ul id="oiseaux">
  <li>Perroquet à ailes orange</li>
  <li class="disparition">Aigle des Philippines</li>
  <li>Grand pélican blanc</li>
</ul>
```

### JavaScript

```js
const oiseaux = document.querySelectorAll("li");

for (const oiseau of oiseaux) {
  if (oiseau.matches(".disparition")) {
    console.log(`Le ${oiseau.textContent} est en voie de disparition !`);
  }
}
```

Ça affiche «&nbsp;L'aigle des Philippines est en voie de disparition&nbsp;!» dans la console, puisque l'élément a effectivement un attribut `class` avec la valeur `disparition`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- Les autres méthodes de {{DOMxRef("Element")}} qui utilisent des sélecteurs&nbsp;: {{DOMxRef("Element.querySelector()")}}, {{DOMxRef("Element.querySelectorAll()")}} et {{DOMxRef("Element.closest()")}}.
