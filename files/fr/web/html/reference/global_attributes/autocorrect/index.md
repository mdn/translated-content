---
title: "Attribut HTML universel : autocorrect"
short-title: autocorrect
slug: Web/HTML/Reference/Global_attributes/autocorrect
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`autocorrect`** est un attribut {{Glossary("Enumerated", "énuméré")}} qui contrôle si la correction automatique du texte éditable est activée pour les erreurs d'orthographe et/ou de ponctuation.

Le comportement précis de la correction automatique, y compris les mots qui sont substitués, dépend de l'agent utilisateur et des services fournis par l'appareil sous‑jacent. Par exemple, sur macOS, un agent utilisateur peut s'appuyer sur [texte et ponctuation de remplacement enregistrés <sup>(angl.)</sup>](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac). D'autres appareils et navigateurs peuvent adopter une approche différente.

La correction automatique concerne les éléments de texte éditables&nbsp;:

- les éléments HTML {{HTMLElement("input")}}, à l'exception des types [`password`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email) et [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url), qui ne prennent pas en charge la correction automatique.
- les éléments HTML {{HTMLElement("textarea")}}.
- tout élément ayant l'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) défini.

La correction automatique est activée par défaut sur les éléments éditables, sauf à l'intérieur d'un élément {{HTMLElement("form")}}, où la valeur par défaut peut être héritée du formulaire. La définition explicite de l'attribut remplace la valeur par défaut.

## Valeurs

Les valeurs possibles sont&nbsp;:

- `on` ou `""` (la chaîne vide)
  - : Activer la correction automatique des fautes d'orthographe et de ponctuation.

- `off`
  - : Désactiver la correction automatique du texte éditable.

Les types d'élément {{HTMLElement("input")}} qui ne prennent pas en charge la correction automatique ont toujours l'état `off`&nbsp;: [`password`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email) et [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url).

Pour tous les autres éléments éditables, toute valeur autre que celles listées ci‑dessus est toujours traitée comme `on`.
La valeur par défaut pour les éléments qui ne sont pas imbriqués dans un `<form>` est `on`.

Lorsque l'élément est imbriqué dans un `<form>`, les éléments suivants héritent de la valeur par défaut de `autocorrect` du formulaire si celle‑ci a été définie&nbsp;: {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.

## Exemples

### Exemple simple

Cet exemple montre l'utilisation de base de l'attribut `autocorrect`.

#### HTML

On inclut deux éléments `<input>` de type texte avec des valeurs différentes pour leur attribut `autocorrect`&nbsp;:

```html
<label for="vegetable">Un légume&nbsp;: </label>
<input id="vegetable" name="vegetable" type="text" autocorrect="on" />

<label for="fruit">Un fruit&nbsp;: </label>
<input id="fruit" name="fruit" type="text" autocorrect="off" />
```

#### Résultats

{{EmbedLiveSample("Exemple simple", "100%", 75)}}

Saisissez un texte invalide dans les champs «&nbsp;fruit&nbsp;» et «&nbsp;légume&nbsp;» ci‑dessus.
Si la correction automatique est prise en charge par votre navigateur et qu'un remplacement approprié est fourni par l'appareil sous‑jacent, une faute de frappe dans le champ du légume devrait être corrigée automatiquement.
Les fautes de frappe ne doivent pas être corrigées dans le champ du fruit.

### Activer et désactiver la correction automatique

Cet exemple montre comment activer et désactiver la correction automatique à l'aide de l'attribut `autocorrect`.

#### HTML

Le markup HTML définit un {{HTMLElement("button")}}, un élément {{HTMLElement("input")}} «&nbsp;nom&nbsp;» de [`type="text"`](/fr/docs/Web/HTML/Reference/Elements/input/text), un élément {{HTMLElement("textarea")}} «&nbsp;bio&nbsp;», et deux éléments {{HTMLElement("label")}}.

L'élément «&nbsp;username&nbsp;» a `autocorrect="off"` car corriger automatiquement un nom serait gênant&nbsp;!
Le champ bio ne précise pas de valeur pour `autocorrect`, ce qui signifie que la correction automatique est activée (on aurait pu définir n'importe quelle valeur autre que `off`).

```html
<button id="reset">Réinitialiser</button>
<label for="username">Nom&nbsp;: </label>
<input id="username" name="username" type="text" autocorrect="off" />
<label for="bio">Biographie&nbsp;: </label>
<textarea id="bio" name="bio"></textarea>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 75px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}

button,
input,
textarea {
  display: block;
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

Le code vérifie si `autocorrect` est pris en charge en testant sa présence sur le prototype.
S'il n'est pas présent, un message est écrit dans le journal.
S'il est présent, la valeur de la propriété `autocorrect` pour chacun des éléments de saisie est consignées dans le journal.

Un gestionnaire d'événement est ajouté au bouton, permettant de réinitialiser le texte saisi et le journal.

```js
const resetButton = document.querySelector("#reset");
const userNameElement = document.querySelector("#username");
const bioElement = document.querySelector("#bio");

if (!("autocorrect" in HTMLElement.prototype)) {
  log("autocorrect n'est pas pris en charge");
} else {
  log(`userNameElement.autocorrect: ${userNameElement.autocorrect}`);
  log(`bioElement.autocorrect: ${bioElement.autocorrect}`);
}

resetButton.addEventListener("click", (e) => {
  userNameElement.value = "";
  bioElement.value = "";
});
```

#### Résultats

Si la correction automatique est prise en charge par votre navigateur, la zone de journal située sous les champs «&nbsp;Biographie&nbsp;» et «&nbsp;Nom&nbsp;» devrait indiquer qu'elle est activée pour la biographie mais pas pour le nom.

{{EmbedLiveSample("Activer et désactiver la correction automatique", "100%", 250)}}

Saisissez un texte invalide dans les champs nom et biographie.
Si l'appareil propose un remplacement pour le mot saisi, celui‑ci sera utilisé pour corriger automatiquement le texte dans le champ «&nbsp;Biographie&nbsp;» (seulement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Tous les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- L'attribut [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck)
