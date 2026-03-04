---
title: "HTMLOptionElement : constructeur Option()"
short-title: Option()
slug: Web/API/HTMLOptionElement/Option
l10n:
  sourceCommit: ff4c8cf18c9247e93fdeee03c44499f85e5e617c
---

{{APIRef("HTML DOM")}}

Le constructeur **`Option()`** permet de créer un nouvel objet {{DOMxRef("HTMLOptionElement")}}.

## Syntaxe

```js-nolint
new Option()
new Option(text)
new Option(text, value)
new Option(text, value, defaultSelected)
new Option(text, value, defaultSelected, selected)
```

### Paramètres

- `text` {{Optional_Inline}}
  - : Une chaîne de caractères représentant le contenu de l'élément, c'est-à-dire le texte affiché. Si ce paramètre n'est pas défini, la valeur par défaut sera `""` (chaîne vide).
- `value` {{Optional_Inline}}
  - : Une chaîne de caractères représentant la valeur de {{DOMxRef("HTMLOptionElement")}}, c'est-à-dire l'attribut HTML `value` de l'élément {{HTMLElement("option")}}. Si ce paramètre n'est pas défini, la valeur de `text` est utilisée comme valeur, par exemple pour la valeur de l'élément {{HTMLElement("select")}} associé lorsque le formulaire est envoyé au serveur.
- `defaultSelected` {{Optional_Inline}}
  - : Une valeur `true` ou `false` qui définit la valeur de l'attribut [`selected`](/fr/docs/Web/HTML/Reference/Elements/option#selected), c'est-à-dire que cette {{HTMLElement("option")}} sera la valeur par défaut sélectionnée dans l'élément HTML {{HTMLElement("select")}} lors du premier chargement de la page. Si ce paramètre n'est pas défini, la valeur par défaut est `false`. Notez qu'une valeur `true` ne sélectionne pas l'option si elle n'est pas déjà sélectionnée.
- `selected` {{Optional_Inline}}
  - : Une valeur `true` ou `false` qui définit l'état sélectionné de l'option&nbsp;; la valeur par défaut est `false` (non sélectionné). Si cet argument est absent, même si l'argument `defaultSelected` vaut `true`, l'option n'est pas sélectionnée.

## Exemples

### Ajouter de nouvelles options

```js
/* Imaginons qu'on ait le code HTML suivant dans le document
<select id='s'>

</select>
*/

const s = document.getElementById("s");
const options = [Quatre, Cinq, Six];

options.forEach((element, key) => {
  s[key] = new Option(element, key);
});
```

### Ajouter des options avec différents paramètres

```html
<select id="s"></select>
```

```js
const s = document.getElementById("s");
const options = ["zéro", "un", "deux"];

options.forEach((element, key) => {
  if (element == "zéro") {
    s[s.options.length] = new Option(element, s.options.length, false, false);
  }
  if (element == "un") {
    s[s.options.length] = new Option(element, s.options.length, true, false); // Ajouter l'attribut "selected"
  }
  if (element == "deux") {
    s[s.options.length] = new Option(element, s.options.length, false, true); // Sélectionnera l'option dans la vue
  }
});
```

Résultat&nbsp;:

```html
<select id="s">
  <option value="0">zéro</option>
  <option value="1" selected>un</option>
  <option value="2">deux</option>
  <!-- L'utilisateur verra cette option sélectionnée -->
</select>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
