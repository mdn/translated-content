---
title: "Window : méthode alert()"
short-title: alert()
slug: Web/API/Window/alert
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{APIRef}}

La méthode **`alert()`** de l'interface {{DOMxRef("Window")}} indique au navigateur d'afficher une boîte de dialogue avec un message optionnel, et d'attendre que la personne ferme cette boîte de dialogue.

Dans certaines conditions — par exemple, lorsque l'utilisateur·ice change d'onglet — le navigateur peut ne pas afficher réellement une boîte de dialogue, ou peut ne pas attendre que l'utilisateur·ice ferme la boîte.

## Syntaxe

```js-nolint
alert()
alert(message)
```

### Paramètres

- `message` {{Optional_Inline}}
  - : Une chaîne de caractères qu'on souhaite afficher dans la boîte de dialogue. Si la valeur fournie est un objet, elle sera convertie en chaîne de caractères puis affichée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
window.alert("Bonjour le monde !");
alert("Bonjour le monde !");
```

produiront tous les deux ce qui suit&nbsp;:

![La boîte de dialogue d'alerte noire. En haut à gauche, une petite icône en forme de cercle suivie de crochets blancs contenant ce texte blanc : Application JavaScript. En dessous, à gauche, le texte blanc Bonjour le monde ! Et en bas à droite, un petit bouton bleu. Le texte du bouton est : ok en noir.](alerthelloworld.png)

## Notes

La boîte de dialogue d'alerte doit être utilisée pour les messages qui ne nécessitent aucune réponse de la part de l'utilisateur·ice, autre que la reconnaissance du message.

Les boîtes de dialogue sont des fenêtres qui bloquent l'accès — elles empêchent l'utilisateur·ice d'accéder au reste de l'interface du programme tant que la boîte de dialogue n'est pas fermée. Pour cette raison, il ne faut pas abuser des fonctions qui créent une boîte de dialogue (ou une fenêtre qui bloque l'accès).

L'élément HTML {{HTMLElement("dialog")}} peut également être utilisé pour afficher des alertes.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- La méthode {{DOMxRef("window.confirm","confirm()")}}
- La méthode {{DOMxRef("window.prompt","prompt()")}}
