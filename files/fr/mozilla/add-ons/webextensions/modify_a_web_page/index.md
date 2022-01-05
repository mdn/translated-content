---
title: Modifier une page web
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
---
{{AddonSidebar}}

L'un des cas d'utilisation les plus courants pour un complément de navigateur est de modifier une page Web. Par exemple, une extension pourrait vouloir modifier le style appliqué à une page, cacher des nœuds DOM particuliers ou injecter des nœuds DOM supplémentaires dans la page.

Il existe deux façons de le faire avec WebExtensions :

- **Déclarativement** : Définissez un modèle qui correspond à un ensemble d'URL et chargez un ensemble de scripts dans des pages dont l'URL correspond à ce modèle
- **Par programme** : en utilisant une API JavaScript, chargez un script dans la page hébergée par un onglet particulier.

Quoi qu'il en soit, ces scripts sont appelés _scripts de contenu_, et sont différents des autres scripts qui forment un WebExtension :

- Ils n'ont accès qu'à un petit sous-ensemble des API WebExtension.
- Ils ont un accès direct à la page Web dans laquelle ils sont chargés.
- Ils communiquent avec le reste de WebExtension en utilisant une API de messagerie.

Dans cet article, nous examinerons les deux méthodes de chargement d'un script.

## Modification des pages qui correspondent à un modèle d'URL

Tout d'abord, créez un nouveau répertoire intitulé "modify-page". Dans ce répertoire, créez un fichier appelé "manifest.json", avec le contenu suivant :

```json
{

  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["page-eater.js"]
    }
  ]

}
```

La clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)  est la façon dont vous chargez les scripts dans des pages qui correspondent aux modèles d'URL. Dans ce cas, les instructions `content_scripts demandent au navigateur de charger un script appelé`  "page-eater.js" dans toutes les pages sous [https://developer.mozilla.org/](/).

> **Note :** Puisque la propriété "js" de content_scripts est un tableau, vous pouvez l'utiliser pour injecter plus d'un script dans des pages correspondantes. Si vous faites cela, les pages partagent la même portée, tout comme les scripts multiples chargés par une page, et ils sont chargés dans l'ordre dans lequel ils sont répertoriés dans le tableau.

> **Note :** La clé content_scripts possède également une propriété "css" que vous pouvez utiliser pour injecter des feuilles de style CSS.

Ensuite, créez un fichier appelé "page-eater.js" dans le dossier "modify-page" et donnez-lui le contenu suivant :

```js
document.body.textContent = "";

var header = document.createElement('h1');
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Maintenant [installer la WebExtension](/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), et visiter [https://developer.mozilla.org/](/):

{{EmbedYouTube("lxf2Tkg6U1M")}}

> **Note :** Cette vidéo montre le script de contenu fonctionnant dans [addons.mozilla.org](/fr/firefox/), les scripts de contenu sont actuellement bloqués pour ce site.

## Modification des pages par programme

Que faire si vous voulez toujours consommer des pages, mais seulement lorsque l'utilisateur vous le demande? Mettons à jour cet exemple afin d'injecter le script de contenu lorsque l'utilisateur clique sur un élément de menu contextuel.

Tout d'abord, mettez à jour "manifest.json" pour qu'il contienne les contenus suivants:

```json
{

  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "permissions": [
    "activeTab",
    "contextMenus"
  ],

  "background": {
    "scripts": ["background.js"]
  }

}
```

Ici, nous avons supprimé la clé content_scripts et ajouté deux nouvelles clés:

- [`permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Pour injecter dans des pages, nous avons besoin de permissions pour la page que nous modifions. La [`permission activeTab`](/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) est un moyen d'obtenir ceci temporaiement pour l'onglet actuellement actif. Nous avons également besoin de la permission contextMenus pour pouvoir ajouter des éléments du menu contextuel.
- [`background`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Nous utilisons ceci pour charger un ["script de fond"](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) persistant appelé "background.js", dans lequel nous configurons le menu contextuel et injectons le script de contenu.

Créons ce fichier, pour cela nous créons un fichier appelé "background.js" dans le dossier "modify-page", et donnez-lui le contenu suivant :

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js"
    });
  }
});
```

Dans ce script, nous créons un [élément de menu contextuel](/fr/Add-ons/WebExtensions/API/ContextMenus/create), lui donnant un identifiant et un titre précis (le texte à afficher dans le menu contextuel). Ensuite, nous mettons en place une écoute d'événements afin que l'utilisateur clique sur un élément de menu contextuel, nous vérifions si c'est notre élément de la page. Si c'est le cas, nous injectons "page-eater.js" dans l'onglet actuel à l'aide de l'API [`tabs.executeScript()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript). Cette API prend facultativement un ID de tabulation en tant qu'argument: nous avons omis l'ID de l'onglet, ce qui signifie que le script est injecté dans l'onglet actuellement actif.

A ce stade, l'extension devrait ressembler à ceci :

```html
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Maintenant [rechargeons la WebExtension](/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on), Ouvrez une page (n'importe quelle page, cette fois) activez le menu contextuel et sélectionnez "Eat this page":

{{EmbedYouTube("zX4Bcv8VctA")}}

> **Note :** Bien que cette vidéo montre le script de contenu fonctionnant dans  [addons.mozilla.org](/fr/firefox/), les scripts de contenu sont actuellement bloqués pour ce site.

## Messagerie

Les scripts de contenu et les scripts de fond ne peuvent pas accéder directement à l'état de l'autre.

Cependant, ils peuvent communiquer en envoyant des messages. Une extrémité met en place un message auditeur, et l'autre extrémité peut lui envoyer un message. Le tableau suivant résume les API impliquées de chaque côté:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Dans le script de contenu</th>
      <th scope="col">Dans le script d'arrière plan</th>
    </tr>
    <tr>
      <th scope="row">Envoyer un message</th>
      <td>
        <code
          ><a href="/fr/Add-ons/WebExtensions/API/runtime#sendMessage()"
            >browser.runtime.sendMessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/fr/Add-ons/WebExtensions/API/Tabs/sendMessage"
            >browser.tabs.sendMessage()</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Reçevoir un message</th>
      <td>
        <code
          ><a href="/fr/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/fr/Add-ons/WebExtensions/API/runtime#onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </thead>
</table>

> **Note :** En ajoutant à cette méthode de communication, qui envoie des messages uniques, vous pouvez également utiliser une [approche basée sur la connexion pour échanger des messages](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communication_avec_les_scripts_darri%C3%A8re-plan).

Mettons à jour notre exemple pour montrer comment envoyer un message à partir du script en arrière-plan.

D'abord, éditez "background.js" pour qu'il contienne ces contenus:

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page"
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the add-on!"
  });
}

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js"
    });

    var querying = browser.tabs.query({
      active: true,
      currentWindow: true
    });
    querying.then(messageTab);
  }
});
```

Maintenant, après avoir injecté "page-eater.js", nous utilisons [`tabs.query()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) pour obtenir l'onglet actuellement actif, puis utilisez [`tabs.sendMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) pour envoyer un message aux scripts de contenu chargés dans cet onglet. Le message comporte la charge utile `{remplacement: "Message from the add-on!"}`.

Ensuite, mettez à jour "page-eater.js" comme ceci :

```js
function eatPage(request, sender, sendResponse) {
  document.body.textContent = "";

  var header = document.createElement('h1');
  header.textContent = request.replacement;
  document.body.appendChild(header);
}

browser.runtime.onMessage.addListener(eatPage);
```

Maintenant, au lieu de simplement d'afficher la page tout de suite, le script de contenu écoute un message en utilisant [`runtime.onMessage`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Quand un message arrive, le script de contenu exécute essentiellement le même code que précédemment, sauf que le texte de remplacement est retiré de `request.replacement`.

Si nous voulions envoyer des messages du script de contenu à la page d'arrière-plan, la configuration serait inverse de cet exemple, sauf que nous utiliserions [`runtime.sendMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) dans le script de contenu.

> **Note :** Ces exemples injectent JavaScript; Vous pouvez également injecter CSS par programme en utilisant la fonction [`tabs.insertCSS()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).

## Apprendre plus

- [Content scripts](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) guide
- [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest key
- [`permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest key
- [`tabs.executeScript()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- Examples using `content_scripts`:

  - [borderify](https://github.com/mdn/webextensions-examples/tree/master/borderify)
  - [emoji-substitution](https://github.com/mdn/webextensions-examples/tree/master/emoji-substitution)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/master/page-to-extension-messaging)

- Examples using `tabs.executeScript()`:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify)
  - [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types)
