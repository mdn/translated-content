---
title: "Window : méthode confirm()"
short-title: confirm()
slug: Web/API/Window/confirm
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{APIRef("Window")}}

La méthode **`confirm()`** de l'interface {{DOMxRef("Window")}} indique au navigateur d'afficher une boîte de dialogue avec un message optionnel et d'attendre que la personne confirme ou annule la boîte de dialogue.

Sous certaines conditions — par exemple au changement d'onglet — le navigateur pourra ne pas afficher la boîte de dialogue ou ne pas attendre la confirmation ou l'annulation.

## Syntaxe

```js-nolint
confirm()
confirm(message)
```

### Paramètres

- `message` {{Optional_Inline}}
  - : Une chaîne de caractères qu'on souhaite afficher dans la boîte de dialogue de confirmation.

### Valeur de retour

### Confirmer avant une action

L'exemple suivant montre comment vérifier la valeur retournée par une boîte de dialogue de confirmation.
Lorsque l'utilisateur·ice clique sur le bouton OK, nous appelons {{DOMxRef("window.open()")}}, et si l'utilisateur·ice clique sur Annuler, nous affichons du texte dans un élément {{HTMLElement("pre")}}.

```html live-sample___confirm
<button id="windowButton">Ouvrir un nouvel onglet</button>
<pre id="log"></pre>
```

```js live-sample___confirm
const windowButton = document.querySelector("#windowButton");
const log = document.querySelector("#log");

windowButton.addEventListener("click", () => {
  if (window.confirm("Voulez-vous ouvrir un nouvel onglet ?")) {
    window.open("https://developer.mozilla.org/docs/Web/API/Window/open");
  } else {
    log.innerText = "Content que vous restiez !";
  }
});
```

{{EmbedLiveSample('confirm', , , , , , , 'allow-modals allow-popups')}}

## Notes

Les boîtes de dialogue sont des fenêtres bloquantes — elles empêchent l'utilisateur·ice d'accéder au reste de l'interface du programme tant que la boîte de dialogue n'est pas fermée.
Pour cette raison, vous ne devez pas abuser de toute fonction qui crée une boîte de dialogue ou une fenêtre bloquante.
Alternativement, un élément {{HTMLElement("dialog")}} peut être utilisé pour les confirmations.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- La méthode {{DOMxRef("window.alert()")}}
- La méthode {{DOMxRef("window.prompt()")}}
- [N'utilisez jamais un avertissement lorsque vous voulez dire Annuler <sup>(angl.)</sup>](https://alistapart.com/article/neveruseawarning/) sur A List Apart (2017)
