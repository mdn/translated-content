---
title: Travailler avec l'API Bookmarks
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
tags:
  - Add-ons
  - Bookmarks
  - Comment
  - Débutant
  - Extensions
  - How-to
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
---
{{AddonSidebar}}

Les signets permettent aux utilisateurs de collecter et d'organiser des listes de pages Web, afin qu'ils puissent facilement retrouver leurs favoris. Grâce à l'API Bookmarks, vos extensions peuvent manipuler les signets de la même manière que les utilisateurs.

## Permissions

Pour utiliser l'API Bookmarks, vous devez demander la permission `"bookmarks"` dans le fichier manifest.json de votre extension

```json
"permissions": [
  "bookmarks"
],
```

## Caractéristiques

L'API Bookmarks permet à votre extension de faire ce que les utilisateurs peuvent faire avec les signets et inclut des fonctions pour :

- Manipulation élémentaire d'un signet, offrant :

  - Ajouter ({{WebExtAPIRef("bookmarks.create")}}).
  - Récupérer ({{WebExtAPIRef("bookmarks.get")}}).
  - Mettre à jour ({{WebExtAPIRef("bookmarks.update")}}).
  - Déplacer ({{WebExtAPIRef("bookmarks.move")}}).
  - Supprimer ({{WebExtAPIRef("bookmarks.remove")}}).
  - Rechercher ({{WebExtAPIRef("bookmarks.search")}}).

- Obtention d'une liste de signets récemment ajoutés ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Signet la manipulation de l'arborescence des dossiers pour :

  - Obtenir des informations sur l'arborescence  ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, and {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - Ajouter des branches ({{WebExtAPIRef("bookmarks.create")}}).
  - Supprimer des noeuds ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - Déplacer des nœuds ({{WebExtAPIRef("bookmarks.move")}}).

- Écoute des événements de signets (ou de dossiers d'arborescence de signets) qui :

  - Ajouter ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - Changer ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - Déplacer ({{WebExtAPIRef("bookmarks.onMoved")}}.
  - Ré-order ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - Supprimer ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Écoute des importations de signets, qui peuvent être utilisées pour suspendre le traitement d'un autre signet pendant l'importation :

  - Importer commencé ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - Importer terminé ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Exemple de procédure pas à pas

Pour comprendre comment utiliser l'API Bookmarks, jetons un coup d'œil à l'exemple  [bookmark-it](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it). Cet exemple ajoute une icône de barre d'outils  ({{WebExtAPIRef("browserAction")}}) lorsqu'on clique dessus, ajoute ou supprime la page en cours des signets. Si la page est mise en signet (ou supprimée des signets) d'une autre manière, l'icône est mise à jour pour montrer l'état du signet de la page.

Cette vidéo montre l'extension en action :

{{EmbedYouTube("hCDN0FotiFw")}}

### manifest.json

Le [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/manifest.json) décrit l'extension :

```json
{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/bookmark-it",
```

Définit les icônes qui seront utilisées pour représenter l'extension, dans des endroits tels que le gestionnaire de modules complémentaires.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Demande des permissions. `"bookmarks"` est demandé pour permettre l'utilisation de l'API Bookmarks. Des `"onglets"` sont demandés afin que l'URL et le titre de l'onglet actif puissent être lus et utilisés pour créer ou rechercher le signet de la page. Le besoin de l'API Tabs pour accéder à ces détails signifie que vous ne pouvez pas utiliser l'API Bookmark sans l'API Tabs.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Définit les détails du bouton de la barre d'outils de base. La plupart des fonctionnalités du bouton seront configurées dans le code une fois que le statut du signet de la page sera connu.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Définit le script d'arrière-plan qui ajoutera et supprimera le signet de la page et définira les caractéristiques du bouton de la barre d'outils.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

Comme pour tout script d'arrière-plan, [background.js](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js)est exécuté dès que l'extension est démarrée. Initialement, le script appelle `updateActiveTab()` qui commence par obtenir l'objet `Tabs` pour l'onglet en cours, en utilisant {{WebExtAPIRef("tabs.query")}}, et en passant l'objet à `updatetab()` avec ce code :

```js
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
```

`updatetab()` passe d'abord l'URL de l'onglet actif à `isSupportedProtocol()`:

```js
  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
```

`isSupportedProtocol()` determines if the URL displayed in the active tab is one that can be bookmarked. To extract the protocol from the tab’s URL, the extension takes advantage of the [HTMLHyperlinkElementUtils](/fr/docs/Web/API/HTMLHyperlinkElementUtils) by adding the tab’s URL to an `<a>` element and then getting the protocol using the `protocol` property.

```js
  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }
```

Si le protocole est pris en charge par les signets, l'extension détermine si l'URL de l'onglet est déjà référencée et si c'est le cas, appelle `updateIcon()`:

```js
      var searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
```

`updateIcon()` définit l'icône et le titre du bouton de la barre d'outils, selon que l'URL est mise en signet ou non.

```js
function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark ? {
      19: "icons/star-filled-19.png",
      38: "icons/star-filled-38.png"
    } : {
      19: "icons/star-empty-19.png",
      38: "icons/star-empty-38.png"
    },
    tabId: currentTab.id
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: currentBookmark ? 'Unbookmark it!' : 'Bookmark it!',
    tabId: currentTab.id
  });
}
```

Avec le bouton de la barre d'outils initialisé, l'extension commence à écouter un clic sur le bouton de la barre d'outils, en appelant `toggleBookmark()` lorsque cela se produit.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` utilise le résultat de la recherche effectuée par `updateTabs()`, qui recherche la présence de l'URL dans un signet, afin de déterminer s'il faut supprimer ou ajouter un signet pour l'URL actuelle.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({title: currentTab.title, url: currentTab.url});
  }
}
```

Pour mettre à jour l'icône de la barre d'outils, l'extension écoute la création ou la suppression des signets. Cette approche a l'avantage de capturer à la fois la mise à jour de signet effectuée par l'extension et toute mise à jour faite par l'utilisateur en dehors de l'extension.

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Enfin, l'extension est à l'écoute d'une modification apportée à l'URL de l'onglet actif, ou l'utilisateur passe à un autre onglet ou une autre fenêtre. Ces actions peuvent modifier l'URL affichée et donc l'état de l'icône de la barre d'outils de l'extension.

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Apprendre encore plus

Si vous voulez en savoir plus, consultez la [référence de l'API Bookmarks](/fr/Add-ons/WebExtensions/API/bookmarks).
