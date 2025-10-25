---
title: "Attribut HTML : for"
short-title: for
slug: Web/HTML/Reference/Attributes/for
original_slug: Web/HTML/Attributes/for
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`for`** est un attribut autorisé pour les éléments HTML {{HTMLElement("label")}} et {{HTMLElement("output")}}. Lorsqu'il est utilisé sur un élément `<label>`, il indique l'élément de formulaire que ce label décrit. Lorsqu'il est utilisé sur un élément `<output>`, il permet une relation explicite entre les éléments, qui représentent les valeurs, qui sont utilisées dans le résultat représenté par `<output>`.

{{InteractiveExample("Démonstration HTML&nbsp;: for", "tabbed-shorter")}}

```html interactive-example
<p>
  <label>Prénom (sans attribut «&nbsp;for&nbsp;»)&nbsp;:</label>
  <input id="first" type="text" value="Jeanne" />
</p>
<p>
  <label for="last">Nom (avec attribut «&nbsp;for&nbsp;»)&nbsp;:</label>
  <input id="last" type="text" value="Dupont" />
</p>
<p id="result">
  <strong id="result-label">Nom complet&nbsp;:</strong>
  <output for="first last" aria-labelledby="result-label" id="output"></output>
</p>
```

```css interactive-example
label[for="paragraph"] {
  color: rebeccapurple;
}

#result {
  text-align: center;
}

#result-label {
  font-size: 16pt;
}

#result-label,
#output {
  display: block;
}
```

```js interactive-example
const firstNameEl = document.getElementById("first");
const lastNameEl = document.getElementById("last");
const outputEl = document.getElementById("output");

function updateOutput() {
  const value = `${firstNameEl.value} ${lastNameEl.value}`;
  outputEl.innerText = value;
}

updateOutput();
firstNameEl.addEventListener("input", updateOutput);
lastNameEl.addEventListener("input", updateOutput);
```

## Notes d'utilisation

Lorsqu'il est utilisé comme attribut de `<label>`, l'attribut `for` a une valeur qui est l'`id` de l'élément de formulaire, auquel il se rapporte.

```html
<label for="username">Votre nom</label> <input type="text" id="username" />
```

Lorsqu'il est utilisé comme attribut de `<output>`, l'attribut `for` a une valeur qui est une liste séparée, par des espaces, des valeurs `id` des éléments, qui sont utilisés pour créer l'output.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Exemples

Voir des exemples d'utilisation sur les pages des éléments pour {{HTMLElement("label")}} et {{HTMLElement("output")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
