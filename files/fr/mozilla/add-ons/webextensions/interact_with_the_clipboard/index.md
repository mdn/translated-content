---
title: Interagir avec le presse-papier
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
---

{{AddonSidebar}}

La gestion du presse-papier avec les extensions s'effectue avec l'objet [`navigator.clipboard`](/fr/docs/Web/API/Clipboard) (elle s'effectuait avant avec la méthode [`document.execCommand()`](/fr/docs/Web/API/Document/execCommand) qui est désormais dépréciée).

> **Note :** L'API [`navigator.clipboard`](/fr/docs/Web/API/Clipboard) est un ajout relativement récent à la spécification et peut ne pas être complètement implémentée par l'ensemble des navigateurs. Cet article décrit certaines des limitations, mais il est préférable de vérifier les tableaux de compatibilité de chaque méthode avant de les utiliser.

La différence entre les deux API peut se décrire ainsi&nbsp;: [`document.execCommand()`](/fr/docs/Web/API/Document/execCommand) est analogue aux actions de copier/coller/couper du clavier en échangeant des données entre une page web et un presse-papier tandis que [`navigator.clipboard`](/fr/docs/Web/API/Clipboard) permet de lire et d'écrire des données arbitraires dans le presse-papier.

[`navigator.clipboard`](/fr/docs/Web/API/Clipboard) fournit des méthodes séparées pour la lecture et l'écriture&nbsp;:

- Pour le contenu textuel simple, on utilisera [`navigator.clipboard.readText()`](/fr/docs/Web/API/Clipboard/readText) et [`navigator.clipboard.writeText()`](/fr/docs/Web/API/Clipboard/writeText).
- Pour les images, le texte riche, du HTML ou d'autre contenu complexe, on utilisera [`navigator.clipboard.read()`](/fr/docs/Web/API/Clipboard/read) et [`navigator.clipboard.write()`](/fr/docs/Web/API/Clipboard/write).

On notera cependant que, bien que [`navigator.clipboard.readText()`](/fr/docs/Web/API/Clipboard/readText) et [`navigator.clipboard.writeText()`](/fr/docs/Web/API/Clipboard/writeText) fonctionnent pour tous les navigateurs, ce n'est pas le cas de [`navigator.clipboard.read()`](/fr/docs/Web/API/Clipboard/read) et [`navigator.clipboard.write()`](/fr/docs/Web/API/Clipboard/write). Ainsi, au moment où nous écrivons ces lignes, Firefox n'implémente pas complètement [`navigator.clipboard.read()`](/fr/docs/Web/API/Clipboard/read) et [`navigator.clipboard.write()`](/fr/docs/Web/API/Clipboard/write). Il faudra alors&nbsp;:

- Pour manipuler des images, utiliser [`browser.clipboard.setImageData()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData) pour écrire des images dans le presse-papier et [`document.execCommand("paste")`](/fr/docs/Web/API/Document/execCommand) pour coller des images sur une page web.
- Pour écrire du contenu riche (comme du HTML, du texte complexe incluant des images, etc.) dans le presse-papier, utiliser [`document.execCommand("copy")`](/fr/docs/Web/API/Document/execCommand) ou [`document.execCommand("cut")`](/fr/docs/Web/API/Document/execCommand). Pour lire le contenu équivalent depuis le presse-papier, on utilisera [`navigator.clipboard.read()`](/fr/docs/Web/API/Clipboard/read) (recommandée) ou [`document.execCommand("paste")`](/fr/docs/Web/API/Document/execCommand).

## Écrire dans le presse-papier

Cette section décrit les options permettant d'écrire des données dans le presse-papier.

### Utiliser l'API Clipboard

L'API Clipboard permet d'écrire des données arbitraires dans le presse-papier de votre extension. Pour utiliser cette API, il faut la permission `"clipboardRead"` ou `"clipboardWrite"` dans le fichier `manifest.json`. Cette API étant uniquement disponible [pour les contextes sécurisés](/fr/docs/Web/Security/Secure_Contexts), on ne peut pas l'utiliser pour un script de contenu qui s'exécute sur une page servie en HTTP mais uniquement sur des pages servies en HTTPS.

Pour les scripts de page, la permission `"clipboard-write"` doit être demandée via l'API [`navigator.permissions`](/fr/docs/Web/API/Permissions). Cette permission peut ensuite être vérifiée avec [`navigator.permissions.query()`](/fr/docs/Web/API/Permissions/query)&nbsp;:

```js
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state == "granted" || result.state == "prompt") {
    /* On peut alors écrire dans le presse-papier */
  }
});
```

> **Note :** La permission intitulée `clipboard-write` est uniquement prise en charge pour les navigateurs basés sur Chromium et pas dans Firefox.

La fonction qui suit prend en argument une chaîne de caractères et l'écrit dans le presse-papier&nbsp;:

```js
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
    function () {
      /* le presse-papier est correctement paramétré */
    },
    function () {
      /* l'écriture dans le presse-papier a échoué */
    },
  );
}
```

### Utiliser `execCommand()`

Les commandes `"cut"` et `"copy"`, fournies par la méthode [`document.execCommand()`](/fr/docs/Web/API/Document/execCommand), peuvent être utilisées pour remplacer le contenu du presse-papier avec les données voulues. Ces commandes peuvent être utilisées sans permission spéciale préalable dans des gestionnaires d'évènements éphémères (par exemple pour gérer l'évènement d'un clic).

Prenons comme exemple une fenêtre contenant le fragment de HTML suivant&nbsp;:

```html
<input id="input" type="text" /> <button id="copy">Copier</button>
```

Pour que le bouton `"copy"` copie effectivement le contenu de l'élément [`<input>`](/fr/docs/Web/HTML/Element/Input), on pourra utiliser un code comme celui-ci&nbsp;:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
```

Comme l'appel à `execCommand()` est situé dans un gestionnaire d'évènement pour un clic, il n'est pas nécessaire d'avoir d'autres permissions.

Supposons toutefois que l'action soit déclenchée autrement, via une alarme&nbsp;:

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1,
});

browser.alarms.onAlarm.addListener(copy);
```

Selon le navigateur, le code présenté juste avant pourra ne pas fonctionner. Pour Firefox, ça ne fonctionnera pas et un message analogue à ce qui suit sera affiché dans la console&nbsp;:

`La commande document.execCommand('cut'/'copy') a été rejetée parce qu'elle n'a pas été appelée à l'intérieur d'un gestionnaire d'évènement généré par l'utilisateur.`

Pour permettre ce cas d'usage, il faut demander la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardWrite"`. Cette dernière permettra d'écrire dans le presse-papier en dehors des gestionnaires d'évènements éphémères déclenchés par une action de l'utilisatrice ou de l'utilisateur.

> **Note :** [`document.execCommand()`](/fr/docs/Web/API/Document/execCommand) ne fonctionne pas pour les champs de formulaire avec `type="hidden"`, les éléments avec l'attribut HTML `"hidden"`, ou ceux ciblés par une règle CSS contenant `"display: none;"`.

### Considérations spécifiques à chaque navigateur

Les différentes API évoquées ici évoluent rapidement. Il existe des variations quant à leur fonctionnement selon le navigateur.

Pour Chrome, la permission `"clipboardWrite"` n'est pas nécessaire, même pour écrire dans le presse-papier en dehors d'un gestionnaire d'évènement pour un évènement déclenché par l'utilisatrice ou l'utilisateur.

Pour Firefox, la méthode [`navigator.clipboard.write()`](/fr/docs/Web/API/Clipboard/write) n'est pas prise en charge.

Voir [les tableaux de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'information.

## Lire les données du presse-papier

Cette section décrit les options disponibles pour lire ou copier des données depuis le presse-papier.

### Utiliser l'API Clipboard

Les méthodes de l'API Clipboard [`navigator.clipboard.readText()`](/fr/docs/Web/API/Clipboard/readText) et [`navigator.clipboard.read()`](/fr/docs/Web/API/Clipboard/read) permettent de lire du texte ou des données binaires depuis le presse-papier [dans les contextes sécurisés](/fr/docs/Web/Security/Secure_Contexts). Cela permet d'accéder aux données du presse-papier sans avoir à les coller au préalable dans un élément éditable.

Une fois que la permission `"clipboard-read"` a été demandée via [l'API Permissions](/fr/docs/Web/API/Permissions_API), il est possible de lire depuis le presse-papier. Ce fragment de code illustre la récupération du texte depuis le presse-papier et remplace le contenu de l'élément ayant l'identifiant `"outbox"` avec ce texte.

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

### Utiliser `execCommand()`

Pour utiliser [`document.execCommand("paste")`](/fr/docs/Web/API/Document/execCommand), l'extension aura besoin de la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardRead"`. Cela vaut également lorsqu'on utilise la commande `"paste"` depuis un gestionnaire d'évènement pour un évènement généré par l'utilisatrice ou l'utilisateur (comme [`click`](/fr/docs/Web/API/Element/click_event) ou [`keypress`](/fr/docs/Web/API/Document/keypress_event)).

Prenons ce fragment de HTML&nbsp;:

```html
<textarea id="output"></textarea> <button id="paste">Coller</button>
```

Pour transformer le contenu de l'élément [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) avec l'identifiant `"output"` en utilisant celui du presse-papier lorsque l'utilisateur clique sur le bouton ([`<button>`](/fr/docs/Web/HTML/Element/Button)) `"paste"`, on pourra utiliser le code qui suit&nbsp;:

```js
function paste() {
  let pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
```

### Considérations spécifiques à chaque navigateur

Firefox prend en charge [la permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardRead"` à partir de la version 54 mais la prise en charge porte uniquement sur le collage au sein d'éléments [en mode éditable](/fr/docs/Web/Guide/HTML/Editable_content), ce qui limite à [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) pour les scripts de contenu. Pour les scripts d'arrière-plan, tout élément pourra être mis en mode éditable.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [API Clipboard](/fr/docs/Web/API/Clipboard_API)
- [API Permissions](/fr/docs/Web/API/Permissions_API)
- [Rendre le contenu éditable](/fr/docs/Web/Guide/HTML/Editable_content)
- [`contenteditable`](/fr/docs/Web/HTML/Global_attributes#attr-contenteditable)
