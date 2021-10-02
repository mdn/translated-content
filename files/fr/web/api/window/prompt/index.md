---
title: window.prompt
slug: Web/API/Window/prompt
tags:
  - API
  - DOM
  - Méthode
  - Reference
  - Window
translation_of: Web/API/Window/prompt
---
{{ApiRef("Window")}}

La méthode `Window.prompt()` affiche une boîte de dialogue, éventuellement avec un message, qui invite l'utilisateur à saisir un texte.

## Syntaxe

    résultat = window.prompt(message, défaut);

### Paramètres

- `message` {{optional_inline}}
  - : Une chaîne de caractères qui sera affichée pour l'utilisateur. Cet argument peut ne pas être utilisé s'il n'y a rien à afficher dans la fenêtre.
- `default` {{optional_inline}}
  - : Une chaîne de caractères contenant la valeur par défaut affichée pour la saisie. Pour Internet Explorer 7 et 8, si cet argument n'est pas fourni, ce sera la chaîne de caractères `"undefined"` qui sera la valeur par défaut.

### Valeur de retour

La chaîne de caractères qui a été saisie par l'utilisateur ou `null`.

## Exemples

```js
let signe = prompt("Quel est votre signe astrologique ?");

if (signe.toLowerCase() == "verseau") {
  console.log("Oh ? moi aussi je suis verseau :)");
}

// Différentes façons d'utiliser prompt
signe = window.prompt(); // ouvre une fenêtre de saisie sans texte
signe = prompt();       //  ouvre une fenêtre de saisie sans texte

 // ouvre une fenêtre avec le texte "Quelle est la réponse ?"
signe = window.prompt('Quelle est la réponse ?');

// ouvre une fenêtre avec le texte "Quelle est la réponse ?"
// avec la valeur "42" comme réponse par défaut
signe = window.prompt('Quelle est la réponse ?', '42');
```

Lorsque l'utilisateur clique sur le bouton OK, le texte saisi dans le champ est renvoyé par la fonction. Si l'utilisateur clique sur OK sans avoir saisi de texte, c'est la chaîne vide qui est renvoyée. Si l'utilisateur clique sur le bouton "Annuler", la fonction renvoie `null`.

## Notes

Une boîte de dialogue contient un texte sur une ligne, un bouton "Annuler" ainsi qu'un bouton "OK". Elle permet de renvoyer le texte (éventuellement vide) saisi par l'utilisateur dans le champ de saisie.

The following text is shared between this article, `DOM:window.confirm` and `DOM:window.alert`. Les boîtes de dialogue sont des fenêtres modales : elles empêchent l'utilisateur d'accéder au reste de l'interface du programme tant que la fenêtre n'est pas fermée. Pour ces raisons, mieux vaut ne pas abuser des fonctions qui créent de telles boîtes de dialogue et autres fenêtres modales.

On notera que le résultat de la fonction est une chaîne de caractères. Cela signifie qu'il faut parfois convertir la valeur founie par l'utilisateur. Si, par exemple, on souhaite que la réponse soit un nombre, il faudra la convertir (avec le constructeur {{jsxref("Number")}} éventuellement).

```js
const aNumber = Number(window.prompt("Veuillez saisir un nombre.", ""));
```

## Spécifications

| Spécification                                                                                                | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'timers-and-user-prompts.html#dom-prompt', 'prompt()')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.Window.prompt")}}

## Voir aussi

- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
