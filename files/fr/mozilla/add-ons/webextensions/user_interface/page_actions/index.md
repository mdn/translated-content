---
title: Bouton de la barre d'adresse
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
tags:
  - AddresseBarButton
  - Page Action
  - User Interface
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
---
{{AddonSidebar}}

Généralement appelée [action de page](/fr/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), cette option d'interface utilisateur est un bouton ajouté à la barre d'adresse du navigateur. Les utilisateurs cliquent sur le bouton pour interagir avec votre extension.

![](address_bar_button.png)

## Actions de pages et actions du navigateur

Le bouton de la barre d'adresse (ou action de la page) est très semblable au bouton de la barre d'outils (ou action du navigateur).

Les différences sont :

- **L'emplacement du bouton :**

  - L'action de la page s'affiche dans la barre d'adresse du navigateur.
  - L'action du navigateur s'affiche en dehors de la barre d'adresse, dans la barre d'outils du navigateur.

- La visibilité du bouton **:**

  - L'action page est masquée par défaut (bien que cette valeur par défaut puisse être modifiée via les propriétés [manifest ](/fr/Add-ons/WebExtensions/manifest.json/page_action)des clés `show_matches` et `hide_matches`), et vous appelez [`pageAction.show()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/show) et [`pageAction.hide()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/hide) pour l'afficher ou la masquer dans des onglets spécifiques.
  - L'action du navigateur est toujours affichée.

Utilisez une action de page lorsque l'action est liée à la page en cours, et une action navigateur lorsque l'action est liée au navigateur dans son ensemble ou à trop de pages. Par exemple :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Type</th>
      <th scope="col">Bookmarks action</th>
      <th scope="col">Content action</th>
      <th scope="col">Tabs operation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">page action</th>
      <td>Bookmark this page</td>
      <td>Reddit enhancement</td>
      <td>Send tab</td>
    </tr>
    <tr>
      <th scope="row">browser action</th>
      <td>Show all bookmarks</td>
      <td>Enable ad-blocking</td>
      <td>Sync all open tabs</td>
    </tr>
  </tbody>
</table>

## Spécification de l'action de la page

Vous définissez les propriétés de la clé de l'[`action de page`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) dans le manifest.json:

```json
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
}
```

La seule clé obligatoire est `default_icon`.

Il y a deux façons de spécifier une action de page : avec ou sans [popup](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Sans popup:** Lorsque l'utilisateur clique sur le bouton, un événement est envoyé à l'extension, que l'extension écoute pour utiliser [`pageAction.onClicked`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked):
- ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```
- **Avec un popup:** L'événement `click` n'est pas envoyé. Au lieu de cela, le popup apparaît lorsque l'utilisateur clique sur le bouton. L'utilisateur interagit alors avec le popup. Lorsque l'utilisateur clique à l'extérieur de la fenêtre contextuelle, celle-ci se ferme automatiquement. Voir l'article [Popup ](/fr/Add-ons/WebExtensions/Popups)pour plus de détails sur la création et la gestion des popups.

Notez que votre extension ne peut avoir qu'une seule page action.

Vous pouvez modifier l'une des propriétés d'action de la page de manière programmée en utilisant l'API de la [`pageAction`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/pageAction).

## Icônes

Pour plus de détails sur la création d'icônes à utiliser avec l'action de votre page, voir   [Iconography](https://design.firefox.com/photon/visuals/iconography.html) dans la documentation du [Photon Design System](https://design.firefox.com/photon/index.html).

## Exemples

Le dépôt [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilisent la page action :

- [chill-out](https://github.com/mdn/webextensions-examples/tree/master/chill-out) utilise une action de navigateur sans popup
