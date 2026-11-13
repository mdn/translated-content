---
title: "HTMLOutputElement : propriété defaultValue"
short-title: defaultValue
slug: Web/API/HTMLOutputElement/defaultValue
l10n:
  sourceCommit: 4c8b7533087b60fb75e98de28ac6bccc4139e735
---

{{APIRef("HTML DOM")}}

La propriété **`defaultValue`** de l'interface {{DOMxRef("HTMLOutputElement")}} représente le contenu textuel par défaut de cet élément HTML {{HTMLElement("output")}}. Obtenir ou définir cette valeur est équivalent à obtenir ou définir {{DOMxRef("Node.textContent", "textContent")}} sur l'élément {{HTMLElement("output")}}.

## Valeur

Une chaîne de caractères.

## Exemples

Dans l'exemple ci-dessous, `defaultValue` retourne toujours la valeur initialement écrite dans le HTML. Les modifications de {{DOMxRef("HTMLOutputElement.value", "value")}} n'affectent pas le `defaultValue` ni son `textContent` dans le DOM.

```html
<fieldset>
  <legend>Ajouter deux nombres</legend>
  <p>
    <input type="number" id="operand1" value="5" aria-label="Premier nombre" />
    +
    <input type="number" id="operand2" value="7" aria-label="Deuxième nombre" />
    =
    <output
      id="result"
      for="operand1 operand2"
      aria-live="polite"
      aria-controls="output"
      >12</output
    >
  </p>
</fieldset>
<pre id="logs" aria-live="polite"></pre>
```

```js
const logs = document.getElementById("logs");
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const result = document.getElementById("result");

function updateResult() {
  result.value = operand1.valueAsNumber + operand2.valueAsNumber;
  logs.innerText = `result.defaultValue : ${result.defaultValue}\nresult.value : ${result.value}`;
}

operand1.addEventListener("input", updateResult);
operand2.addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("Exemples", "", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("output")}}
- La propriété {{DOMxRef("HTMLOutputElement.value")}}
