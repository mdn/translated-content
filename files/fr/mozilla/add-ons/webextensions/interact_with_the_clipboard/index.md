---
title: Interagir avec le presse-papier
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
tags:
  - Add-ons
  - Clip
  - Clipboard
  - Cut
  - Editing
  - Extensions
  - Text
  - WebExtensions
  - coller
  - copier
  - copy
  - couper
  - paste
translation_of: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
original_slug: Mozilla/Add-ons/WebExtensions/interagir_avec_le_presse_papier
---
{{AddonSidebar}}

ll y a deux façons dont les extensions de navigateur peuvent interagir avec le presse-papiers système : la méthode {{domxref("Document.execCommand()")}}  et l'asynchrone moderne de l'[API Presse-papiers](/fr/docs/Web/API/Clipboard_API).

La méthode {{domxref("Document.execCommand()")}} peut être utilisée, en spécifiant la commande désirée :

- `document.execCommand("copy")`
- `document.execCommand("cut")`
- `document.execCommand("paste")`

L'API Presse-papiers fournit un accès asynchrone pour lire et écrire directement le contenu du presse-papiers. Par exemple, pour lire le texte du presse-papiers :

```js
navigator.clipboard.readText().then(text => outputElem.innerText = text);
```

Ceci demande le contenu du presse-papiers et, lorsque la réponse est reçue, stocke le texte du presse-papiers dans le {{domxref("Node.innerText", "innerText")}} d'un élément.

> **Note :** Les méthodes asynchrones de l'API Clipboard sont un ajout récent à la spécification et peuvent ne pas être entièrement implémentées dans tous les navigateurs. Assurez-vous de passer en revue les tableaux de compatibilité pour chaque méthode avant de les utiliser, afin de vous assurer que le support est suffisamment large pour vos besoins.

## Ecrire dans le presse-papiers

Il y a deux façons d'écrire dans le presse-papiers. Vous pouvez utiliser les actions {{domxref("Document.execCommand", "document.execCommand()")}} pour déclencher les actions "couper" et "copier", qui remplace le contenu actuel du presse-papiers par les données actuellement sélectionnées. L'autre option est d'utiliser la méthode {{domxref("Clipboard.writeText()")}} ou {{domxref("Clipboard.write()")}} de l'API Presse-papiers pour remplacer le contenu du presse-papiers par des données spécifiques.

### Utiliser execCommand()

Les commandes {{domxref("Document.execCommand", "document.execCommand()")}} de la méthode `"couper"` et `"copier"` peuvent être utilisées pour remplacer le contenu actuel du presse-papiers par le matériel sélectionné. Ces commandes peuvent être utilisées sans permission spéciale si vous les utilisez dans un gestionnaire d'événements de courte durée pour une action utilisateur (par exemple, un gestionnaire de clics).

Par exemple, supposons que vous ayez un popup qui inclut le HTML suivant :

```html
<input id="input" type="text"/>
<button id="copy">Copy</button>
```

Pour que le bouton `"copier"` copie le contenu de l'élément {{HTMLElement("input")}}, vous pouvez utiliser du code comme ceci :

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Parce que l'appel `execCommand()` se trouve à l'intérieur d'un gestionnaire d'événements click, vous n'avez pas besoin de permissions spéciales ici.

Cependant, disons que vous déclenchez plutôt la copie à partir d'une alarme  :

```js
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1
});

browser.alarms.onAlarm.addListener(copy);
```

Selon le navigateur, cela peut ne pas fonctionner. Sur Firefox, cela ne fonctionnera pas, et vous verrez un message comme celui-ci dans votre console :

    document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler.

Pour activer ce cas d'utilisation, vous devez demander [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardWrite"`. Alors :  `"clipboardWrite"` vous permet d'écrire dans le presse-papiers en dehors d'un gestionnaire d'événements de courte durée pour une action utilisateur.

### Utilisation de l'API Presse-papiers

L'API Presse-papiers ajoute une plus grande flexibilité, en ce sens que vous n'êtes pas limité à copier simplement la sélection courante dans le presse-papiers, mais vous pouvez spécifier directement quelles informations placer dans le presse-papiers.

L'utilisation de l'API nécessite que vous ayez les permissons de l'API `"clipboard-write"`. Vous pouvez vérifier cette permission en utilisant {{domxref("Permissions.query", "navigator.permissions.query()")}}:

```js
navigator.permissions.query({name: "clipboard-write"}).then(result => {
  if (result.state == "granted" || result.state == "prompt") {
    /* write to the clipboard now */
  }
});
```

Cette fonction prend une chaîne de caractères comme entrée et met à jour le presse-papiers pour contenir cette chaîne :

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}
```

> **Note :** Le nom de la permission `clipboard-write` n'est pas supporté actuellement dans Firefox - seulement les navigateurs Chromium.

### Considérations spécifiques du navigateur

Le presse-papiers et les autres API impliquées ici évoluent rapidement, de sorte qu'il y a des variations entre les navigateurs quant à leur mode de fonctionnement.

Dans Chrome:

- Vous pouvez écrire dans le presse-papiers comme ceci dans tous les contextes d'exécution - pages d'arrière-plan, scripts de contenu, pages d'options et popups.
- Vous n'avez pas besoin de `"clipboardWrite"`, même pour écrire dans le presse-papiers en dehors d'un gestionnaire d'événements généré par l'utilisateur.

Dans Firefox:

- Vous pouvez écrire dans le presse-papiers comme ceci dans tous les contextes d'exécution _à l'exception des pages d'arrière-plan_. Dans Firefox, vous ne pouvez pas sélectionner du texte ou mettre au point un champ de saisie dans les pages d'arrière-plan, de sorte que vous ne pouvez pas écrire dans le presse-papiers à partir d'une page d'arrière-plan.
- A partir de la version 57, vous pouvez copier des images dans le presse-papiers à l'aide de l'API [`clipboard.setImageData()`](/fr/Add-ons/WebExtensions/API/clipboard/setImageData).
- Le support de l'API Clipboard {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} a été ajouté dans Firefox 63.
- Lors de l'utilisation de scripts de contenu, l'API Clipboard n'est disponible que pour les pages HTTPS. Comme solution de contournement, utilisez la messagerie entre vos scripts de contenu et le script d'arrière-plan.

> **Note :** L'API `execCommand('copy')` n'est pas supporté dans **Safari**

## Lecture à partir du presse-papiers

La méthode `execCommand()` fournit la commande `"coller"`, qui vous permet de coller le contenu actuel du presse-papiers au point d'insertion dans un contrôle modifiable. Vous pouvez gagner en flexibilité en utilisant les méthodes {{domxref("Clipboard.read()")}} et {{domxref("Clipboard.readText()")}}.

### Utilisation de execCommand()

Tout d'abord, vous devez avoir la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardRead"` établie pour votre extension. C'est le cas même si vous utilisez la commande `"coller"` à partir d'un gestionnaire d'événements généré par l'utilisateur tel que {{event("click")}} ou {{event("keypress")}}.

Considérez le HTML qui inclut quelque chose comme ceci :

```html
<textarea id="output"></textarea>
<button id="paste">Paste</button>
```

Pour définir le contenu de l'élément {{HTMLElement("textarea")}} avec l'ID `"output"` du presse-papiers lorsque l'utilisateur clique sur le {{HTMLElement("button")}} `"coller"`, vous pouvez utiliser du code comme ceci :

```js
function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### Utilisation de l'API Presse-papiers

Les méthodes {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} et {{domxref("Clipboard.read", "navigator.clipboard.read()")}} de l'API Presse-papiers vous permettent de lire du texte arbitraire ou des données binaires à partir du presse-papiers. Cela vous permet d'accéder aux données du presse-papiers sans simplement les coller dans un élément modifiable.

Une fois que vous avez la permission `"clipboard-read"` de l'[API permissions](/fr/docs/Web/API/Permissions_API), vous pouvez lire facilement à partir du presse-papiers :

```js
navigator.clipboard.readText().then(clipText =>
  document.getElementById("outbox").innerText = clipText);
```

Cet extrait de code récupère le texte du presse-papiers et remplace le contenu actuel de l'élément par l'ID `"outbox"` avec ce texte.

### Considérations spécifiques au navigateur

Firefox supporte la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardRead" à partir de la version` 54, mais ne supporte pas que le collage dans les élements en [mode édition de contenu](/fr/docs/Web/Guide/HTML/Editable_content), qui pour les scripts de contenu ne fonctionne qu'avec un {{HTMLElement("textarea")}}. Pour les scripts d'arrière-plan, n'importe quel élément peut être mis en mode contenu modifiable.

## Voir aussi

- [Clipboard API](/fr/docs/Web/API/Clipboard_API)
- [Permissions API](/fr/docs/Web/API/Permissions_API)
- [Making content editable](/fr/docs/Web/Guide/HTML/Editable_content)
- {{htmlattrxref("contenteditable")}}
