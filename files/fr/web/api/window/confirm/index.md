---
title: "Window : méthode confirm()"
slug: Web/API/Window/confirm
l10n:
  sourceCommit: 70b1b8ac18d3e3346645d4ee5155f654c83d96e0
---

{{ApiRef("Window")}}

`window.confirm()` indique au navigateur d'afficher une boîte de dialogue avec un message optionnel et d'attendre que la personne confirme ou annule la boîte de dialogue.

Sous certaines conditions, par exemple au changement d'onglet, le navigateur pourra ne pas afficher la boîte de dialogue ou ne pas attendre la confirmation ou l'annulation.

## Syntaxe

```js-nolint
confirm(message)
```

### Paramètres

- `message`
  - : Une chaîne de caractères qu'on souhaite afficher dans la boîte de dialogue de confirmation.

### Valeur de retour

Un booléen qui indique si l'option «&nbsp;OK&nbsp;» (`true`) ou «&nbsp;Annuler&nbsp;» (`false`) a été sélectionnée. Si le navigateur ignore les boîtes de dialogue, la valeur renvoyée est toujours `false`.

## Exemples

```js
if (window.confirm("Souhaitez-vous vraiment quitter le site ?")) {
  window.open("exit.html", "Merci de votre visite !");
}
```

Créera le résultat suivant&nbsp;:

![Confirmation dans Firefox](firefoxcomfirmdialog_zpsf00ec381.png)

## Notes

Ces boîtes de dialogue sont des fenêtres modales qui empêchent d'accéder au reste de l'interface utilisateur du programme, à moins que la boîte de dialogue soit fermée. Aussi, il ne faut pas abuser de cette fonction.

Il y a également d'autres raisons [d'éviter les boîtes de dialogue pour demander une confirmation](https://alistapart.com/article/neveruseawarning/).

Une autre méthode consiste à utiliser l'élément HTML [`<dialog>`](/fr/docs/Web/HTML/Reference/Elements/dialog) afin d'afficher des demandes de confirmation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<dialog>`](/fr/docs/Web/HTML/Reference/Elements/dialog)
- [`window.alert()`](/fr/docs/Web/API/Window/alert)
- [`window.prompt()`](/fr/docs/Web/API/Window/prompt)
