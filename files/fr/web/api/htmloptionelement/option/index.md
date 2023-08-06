---
title: Option()
slug: Web/API/HTMLOptionElement/Option
---

{{APIRef("HTML DOM")}}

Le constructeur **`Option()`** permet de créer un nouvel objet {{domxref("HTMLOptionElement")}}.

## Syntaxe

```js
var optionElementReference = new Option(text, value, defaultSelected, selected);
```

### Parameters

- `text` {{optional_inline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} représentant le contenu de l'élément, c'est-à-dire le texte affiché. Si cet argument n'est pas spécifié, c'est la chaîne vide qui sera utilisée.
- `value` {{optional_inline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} représentant la valeur de {{domxref("HTMLOptionElement")}}, c'est-à-dire l'attribut HTML `value` de l'élément {{htmlelement("option")}}. Si cet argument n'est pas fourni, ce sera la valeur de `text` qui sera reprise comme valeur (par exemple pour l'élément {{htmlelement("select")}} associé lorsque le formulaire est envoyé au serveur).
- `defaultSelected` {{optional_inline}}
  - : Un {{domxref("Boolean")}} qui définit la valeur de l'attribut [`selected`](/fr/docs/Web/HTML/Element/option#selected), c'est-à-dire que cette {{htmlelement("option")}} sera la valeur par défaut sélectionné dans l'élément {{htmlelement("select")}} lors du premier chargement de la page. S'il n'est pas spécifié, la valeur `false` sera utilisée par défaut.
- `selected` {{optional_inline}}
  - : Un {{domxref("Boolean")}} qui définit l'état sélectionné de l'option, la valeur par défaut est `false` (non sélectionné). Si cet argument est absent et même si l'argument `defaultSelected` vaut `true`, l'option ne sera pas pas sélectionnée.

## Exemples

### Ajouter de nouvelles options

```js
/* Imaginons qu'on ait le code HTML suivant dans le document
<select id='s'>

</select>
*/

var s = document.getElementById("s");
var options = [Quatre, Cinq, Six];

options.forEach(function (element, key) {
  s[key] = new Option(element, key);
});
```

### Ajouter des options avec différents paramètres

```js
/* Imaginons qu'ont ait le code HTML suivant dans le document
<select id="s">
  <option>Premier</option>
  <option>Deuxième</option>
  <option>Troisième</option>
</select>
*/

var s = document.getElementById("s");
var options = ["zéro", "un", "deux"];

options.forEach(function (element, key) {
  if (element == "zéro") {
    s[s.options.length] = new Option(element, s.options.length, false, false);
  }
  if (element == "un") {
    s[s.options.length] = new Option(element, s.options.length, true, false); // Ajouter l'attribut "selected"
  }
  if (element == "deux") {
    s[s.options.length] = new Option(element, s.options.length, false, true); // Sélectionnera l'option
  }
});

/* Résultat dans le DOM / HTML modifié :
<select id="s">
  <option value="0">zéro</option>
  <option value="1" selected="">un</option>
  <option value="2">deux</option> // L'utilisateur verra cette option sélectionnée
</select>
*/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
