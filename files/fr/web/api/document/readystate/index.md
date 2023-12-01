---
title: Document.readyState
slug: Web/API/Document/readyState
---

{{APIRef("DOM")}}

La valeur **Document.readyState** est une propriété de {{ domxref("document") }} qui décrit l'état de chargement du document.

À chaque évolution de la valeur, un évenement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) est émis dans l'objet {{ domxref("document") }}.

## Syntaxe

```js
var string = document.readyState;
```

### Valeurs

La variable `readyState` peut valoir&nbsp;:

- **`loading`**
  - : Le {{ domxref("document") }} est encore en chargement.
- **`interactive`**
  - : Le document a été chargé, mais les ressources (images, scripts, css..) sont encore en cours d'acquisition. En revanche la structure DOM est générée, et [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event) a été émis.
- **`complete`**
  - : Le document et toutes les sous-ressources ont été chargés, et [`load`](/fr//docs/Web/API/Window/load_event) a été émis.

## Exemples

### Différents états de chargement

```js
switch (document.readyState) {
  case "loading":
    // Encore en chargement.
    break;
  case "interactive":
    // Le DOM est construit, on peut y accéder.
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // La page est pleinement chargée.
    console.log(
      "The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText,
    );
    break;
}
```

### readystatechange comme alternative à DOMContentLoaded

```js
// alternative à DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
};
```

### readystatechange comme alternative à load

```js
// alternative à load
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initApplication();
  }
};
```

### readystatechange comme event listener pour insérer ou modifier le DOM avant DOMContentLoaded

```js
// Modification du document <body> dès que possible en utilisant un script externe
var bootstrap = function (evt) {
  if (evt.target.readyState === "interactive") {
    initLoader();
  } else if (evt.target.readyState === "complete") {
    initApp();
  }
};
document.addEventListener("readystatechange", bootstrap, false);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'événement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event)
- L'événement [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event)
- L'événement [`load`](/fr//docs/Web/API/Window/load_event)
