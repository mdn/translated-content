---
title: "HTMLOutputElement : constructeur HTMLOutputElement()"
short-title: HTMLOutputElement()
slug: Web/API/HTMLOutputElement/HTMLOutputElement
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Le constructeur **`HTMLOutputElement()`** crée un nouvel objet {{DOMxRef("HTMLOutputElement")}}.

> [!NOTE]
> Actuellement, seul Safari implémente ce constructeur, il est donc recommandé d'utiliser {{DOMxRef("Document.createElement()")}} pour une compatibilité plus large — voir [l'exemple ci-dessous](#creating_an_output_element_programmatically).

## Syntaxe

```js-nolint
new HTMLOutputElement()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet {{DOMxRef("HTMLOutputElement")}}.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée avec le message `"Illegal constructor"` dans les navigateurs qui ne prennent pas en charge ce constructeur.

## Exemples

### Création d'un élément `output` de manière programmatique

> [!NOTE]
> En pratique, vous créeriez généralement des éléments HTML {{HTMLElement("output")}} en utilisant {{DOMxRef("Document.createElement()")}} au lieu de ce constructeur, car `createElement()` est pris en charge par tous les navigateurs.

Cet exemple crée un élément {{HTMLElement("output")}} en utilisant le constructeur `HTMLOutputElement()` et l'insère dans un formulaire qui additionne deux nombres.

```html
<form id="my-form">
  <label>
    Premier nombre
    <input type="number" id="a" value="5" />
  </label>
  +
  <label>
    Deuxième nombre
    <input type="number" id="b" value="3" />
  </label>
  =
  <span id="output-container"></span>
</form>
<p id="warning" hidden>
  ⚠️ Votre navigateur ne prend pas en charge le constructeur
  <code>HTMLOutputElement()</code>.
</p>
```

```css hidden
body {
  font-family: system-ui;
}

input {
  width: 3rem;
  font-size: inherit;
}

p {
  padding: 0.25rem;
  background-color: #fff2cc;
}
```

```js
try {
  new HTMLOutputElement();
} catch {
  document.getElementById("warning").hidden = false;
}

const output = new HTMLOutputElement();
output.id = "result";
output.setAttribute("for", "a b");
document.getElementById("output-container").appendChild(output);

function updateResult() {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  output.value = a.valueAsNumber + b.valueAsNumber;
}

document.getElementById("my-form").addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("Création d'un élément `output` de manière programmatique", "", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLOutputElement")}}
- L'élément HTML {{HTMLElement("output")}}
- La méthode {{DOMxRef("Document.createElement()")}}
