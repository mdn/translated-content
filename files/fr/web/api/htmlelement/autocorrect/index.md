---
title: "HTMLElement : propriété autocorrect"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La propriété **`autocorrect`** de l'interface {{DOMxRef("HTMLElement")}} contrôle l'activation ou non de la correction automatique du texte éditable pour les erreurs d'orthographe et/ou de ponctuation.

Le comportement précis de la correction automatique, y compris les mots remplacés, dépend de l'agent utilisateur et des services fournis par l'appareil sous-jacent.
Par exemple, sous macOS, un agent utilisateur peut s'appuyer sur les [remplacements de texte et de ponctuation enregistrés](https://support.apple.com/fr-fr/guide/mac-help/mh35735/mac).
D'autres appareils et navigateurs peuvent utiliser une approche différente.

La propriété reflète la valeur de l'attribut HTML universel [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect).

## Valeur

`true` si la correction automatique est activée pour l'élément, sinon `false`.

## Exemples

### Activer et désactiver la correction automatique

Cet exemple montre comment activer et désactiver la correction automatique.

#### HTML

Le balisage HTML définit un bouton d'activation et un élément {{HTMLElement("input")}} de [`type="search"`](/fr/docs/Web/HTML/Reference/Elements/input/search).
Notez que si la correction automatique est prise en charge, elle sera activée par défaut.

```html
<button id="toggleAutocorrect">Inconnu</button>
<input type="search" id="searchinput" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Le code vérifie d'abord si la propriété `autocorrect` est prise en charge en vérifiant sa présence sur le prototype de `HTMLElement`.
Si elle est présente, un gestionnaire de clic est ajouté pour permettre d'activer ou de désactiver la valeur.
Si elle n'est pas présente, l'interface masque les éléments interactifs et indique que `autocorrect` n'est pas pris en charge.

```js
const toggleButton = document.querySelector("button");
const searchInput = document.querySelector("#searchinput");

function setButtonText() {
  toggleButton.textContent = searchInput.autocorrect ? "Activée" : "Désactivée";
  log(`correction automatique : ${searchInput.autocorrect}`);
}

if (`autocorrect` in HTMLElement.prototype) {
  setButtonText();

  toggleButton.addEventListener("click", (e) => {
    searchInput.autocorrect = !searchInput.autocorrect;
    setButtonText();
  });
} else {
  toggleButton.hidden = true;
  searchInput.hidden = true;
  log("correction automatique non prise en charge");
}
```

#### Résultat

<!-- cSpell:ignore Carot -->

Activez le bouton pour basculer la valeur de la correction automatique.
Saisissez un texte erroné dans la zone de texte, comme «&nbsp;Carot&nbsp;».
Lorsque la correction automatique est activée, et si l'implémentation propose le mot de remplacement «&nbsp;carotte&nbsp;», le texte devrait être corrigé automatiquement.

{{EmbedLiveSample("Activer et désactiver la correction automatique", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
