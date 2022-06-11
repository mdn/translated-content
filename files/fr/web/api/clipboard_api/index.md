---
title: API Clipboard
slug: Web/API/Clipboard_API
translation_of: Web/API/Clipboard_API
---
{{DefaultAPISidebar("Clipboard API")}}

L'**API Clipboard** (en français&nbsp;: API Presse-papiers) fournit la possibilité de répondre aux commandes du presse-papiers (couper, copier et coller) ainsi que de lire et écrire sur le presse-papiers système de façon asynchrone. L'accès aux contenus du presse-papiers est protégé par l'[API Permissions](/fr/docs/Web/API/Permissions_API)&nbsp;: la permission `clipboard-write` est donnée automatiquement aux pages lorsqu'elles sont dans l'onglet actif. La permission `clipboard-read` doit quant à elle être demandée, ce que vous pouvez faire en tentant de lire les données du presse-papiers.

> **Note :** Cette API _n'est pas disponible_ dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API) (elle n'est pas exposée via {{domxref("WorkerNavigator")}}).

Cette API est conçue pour remplacer l'accès au presse-papiers précédemment proposé via {{domxref("document.execCommand()")}}.

## Accéder au presse-papier

Au lieu de créer un objet `Clipboard` lors de l'instanciation, vous pouvez accéder au presse-papier du système avec la globale {{domxref("Navigator.clipboard")}}&nbsp;:

```js
navigator.clipboard.readText().then(
  clipText => document.querySelector(".editor").innerText += clipText);
```

Ce bout de code analyse le texte à partir du presse-papiers et l'insère après le premier élément trouvé comportant la classe `editor`. Puisque {{domxref("Clipboard.readText", "readText()")}} (sans oublier {{domxref("Clipboard.read", "read()")}}) retournent une chaîne vide si le contenu du presse-papier n'est pas textuel, ce code est sécurisé.

## Interfaces

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Fournit une interface pour la lecture et l'écriture de texte et de données sur le presse-papiers du système. La spécification s'y réfère avec le terme "Async Clipboard API".
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : Représente les évènements fournissant l'information relative à la modification du presse-papiers, qui peut être l'évènement {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} ou {{domxref("Element/paste_event", "paste")}}. La spécification s'y réfère avec le terme "Clipboard Event API".
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Représente un format de terme unique utilisé pour lire ou écrire des données.

## Spécifications

{{Specifications("api.Clipboard")}}

## Compatibilité des navigateurs

### Clipboard

{{Compat("api.Clipboard")}}

### ClipboardEvent

{{Compat("api.ClipboardEvent")}}

### ClipboardItem

{{Compat("api.ClipboardItem")}}

## Voir aussi

- [Démonstration de l'API Async Clipboard sur Glitch (en anglais)](https://async-clipboard-api.glitch.me/)
- <i lang="en">Image support for Async Clipboard article</i>

  [<i lang="en">Image support for Async Clipboard article</i> (en anglais)](https://web.dev/image-support-for-async-clipboard/)

- [API Permissions](/fr/docs/Web/API/Permissions_API)
- [Utiliser l'API Permissions](/fr/docs/Web/API/Permissions_API/Using_the_Permissions_API)
