---
title: "Window : méthode prompt()"
short-title: prompt()
slug: Web/API/Window/prompt
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{ApiRef("Window")}}

La méthode `window.prompt()` demande au navigateur d'afficher une boîte de dialogue avec un message optionnel pour inviter l'utilisateur·ice à saisir du texte, puis attend que l'utilisateur·ice soumette le texte ou annule la boîte de dialogue.

Dans certaines conditions (par exemple si l'utilisateur·ice change d'onglet), le navigateur peut ne pas afficher de boîte de dialogue ou ne pas attendre la saisie ou l'annulation par l'utilisateur·ice.

## Syntaxe

```js
prompt();
prompt(message);
prompt(message, defaultValue);
```

### Paramètres

- `message` {{optional_inline}}
  - : Une chaîne de caractères affichée pour l'utilisateur·ice. Peut être omise s'il n'y a rien à afficher dans la fenêtre de saisie.
- `defaultValue` {{optional_inline}}
  - : Une chaîne de caractères contenant la valeur par défaut affichée dans le champ de saisie.

### Valeur de retour

Une chaîne de caractères saisie par l'utilisateur·ice ou `null`.

## Exemples

### Utiliser prompt avec un message et une valeur par défaut

L'exemple suivant montre comment vérifier la valeur retournée par prompt.
Quand l'utilisateur·ice clique sur OK, le texte saisi dans le champ est retourné.
Si l'utilisateur·ice clique sur OK sans saisir de texte, une chaîne de caractères vide est retournée.
Si l'utilisateur·ice clique sur Annuler, la fonction retourne `null`.

```html live-sample___prompt
<button id="boutonSigne">Vérifier le signe astrologique</button>
<pre id="resultat"></pre>
```

```js live-sample___prompt
const boutonSigne = document.querySelector("#boutonSigne");
const resultat = document.querySelector("#resultat");

boutonSigne.addEventListener("click", () => {
  let signe = prompt("Quel est votre signe astrologique ?");

  if (signe === null) {
    resultat.innerText = "OK, peut-être la prochaine fois.";
  } else if (signe.toLowerCase() === "") {
    resultat.innerText = "N'ayez pas peur, entrez votre signe !";
  } else if (signe.toLowerCase() === "scorpion") {
    resultat.innerText = "Wow ! Je suis aussi scorpion !";
  } else {
    resultat.innerText = `${signe} est mon préféré !`;
  }
});
```

{{EmbedLiveSample('prompt', , , , , , , 'allow-modals')}}

### Messages et valeurs par défaut pour prompt

Il existe plusieurs façons d'utiliser prompt, que ce soit avec `prompt`, `window.prompt`, et en fournissant un message ou des valeurs par défaut&nbsp;:

```js
// ouvre une fenêtre de saisie vide
signe = prompt();
// ouvre une fenêtre de saisie vide
signe = window.prompt();
// ouvre une fenêtre de saisie avec le texte "Vous sentez-vous chanceux ?"
signe = window.prompt("Vous sentez-vous chanceux ?");
// ouvre une fenêtre de saisie avec le texte "Vous sentez-vous chanceux ?" et "sûr" comme valeur par défaut
signe = prompt("Vous sentez-vous chanceux ?", "sûr");
```

## Notes

Les boîtes de dialogue sont des fenêtres modales&nbsp;: elles empêchent l'utilisateur·ice d'accéder au reste de l'interface du programme tant que la boîte de dialogue n'est pas fermée.
Pour cette raison, il vaut mieux ne pas abuser des fonctions qui créent ce type de fenêtre.
On peut aussi utiliser l'élément {{HTMLElement("dialog")}} pour les confirmations.

Une boîte de dialogue de type prompt contient un champ de saisie sur une ligne, un bouton Annuler et un bouton OK, et renvoie le texte (éventuellement vide) saisi par l'utilisateur·ice.
Le résultat est une chaîne de caractères, il peut donc être nécessaire de convertir la valeur fournie par l'utilisateur·ice.
Par exemple, si la réponse attendue est un nombre, il faut convertir la valeur avec le constructeur Number.

```js
const unNombre = Number(window.prompt("Veuillez saisir un nombre.", ""));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- La méthode {{domxref("window.alert", "alert")}}
- La méthode {{domxref("window.confirm", "confirm")}}
- [Ne jamais utiliser un avertissement quand il faut proposer une annulation <sup>(angl.)</sup>](https://alistapart.com/article/neveruseawarning/) sur A List Apart (2017)
