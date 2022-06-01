---
title: Travailler avec l'API Tabs
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
tags:
  - Add-ons
  - Comment
  - Débutant
  - WebExtensions
  - onglets
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
original_slug: Mozilla/Add-ons/WebExtensions/Travailler_avec_l_API_Tabs
---
{{AddonSidebar}}

Les onglets permettent à un utilisateur d'ouvrir plusieurs pages Web dans la fenêtre de son navigateur, puis de basculer entre ces pages Web. Grâce à l'API Tabs, vous pouvez utiliser et manipuler ces onglets pour créer des utilitaires qui offrent aux utilisateurs de nouvelles façons de travailler avec des onglets ou de fournir les fonctionnalités de votre extension.

Dans cet article, nous allons regarder :

- Permissions nécessaires pour utiliser l'API Tabs.
- En savoir plus sur les onglets et leurs propriétés en utilisant {{WebExtAPIRef("tabs.query")}}.
- Création, duplication, déplacement, mise à jour, rechargement et suppression des onglets.
- Manipuler le niveau de zoom d'un onglet.
- Manipuler le CSS d'un onglet.

Nous concluons ensuite en examinant d'autres fonctionnalités diverses offertes par l'API.

> **Note :** Certaines fonctionnalités de l'API d'onglet sont couvert ailleurs. Voici les méthodes que vous pouvez utiliser pour manipuler le contenu de l'onglet avec des scripts ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}}, et  {{WebExtAPIRef("tabs.executeScript")}}). Si vous voulez plus d'informations sur ces méthodes, reportez-vous à l'article [scripts de contenu](/fr/Add-ons/WebExtensions/Content_scripts) et le guide pratique [modifier une page web](/fr/Add-ons/WebExtensions/Modify_a_web_page).

## Permissions et l'API Tabs

Pour la majorité des fonctions de l'API Tabs, vous n'avez besoin d'aucune autorisation. Cependant, il y a certaines exceptions :

- permission `"tabs`" est nécessaire pour accéder aux propriétés de  `Tab.url`, `Tab.title`, et `Tab.favIconUrl` de l'objet Tab. Dans Firefox, vous avez également besoin de `"tabs"` pour effectuer une  [requête](/fr/Add-ons/WebExtensions/API/tabs/query) par URL.
- [persmission de l'hote](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) est nécessaire pour  {{WebExtAPIRef("tabs.executeScript")}} ou {{WebExtAPIRef("tabs.insertCSS")}}.

Vous pouvez demander la permission `"tabs"` dans le fichier manifest.json de votre extension :

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Cette requête vous permet d'utiliser toutes les fonctionnalités de l'API Tabs sur tous les sites Web que vos utilisateurs visitent. Il existe également une autre méthode pour demander la permission d'utiliser {{WebExtAPIRef("tabs.executeScript")}} ou {{WebExtAPIRef("tabs.insertCSS")}} où vous n'avez pas besoin de la permission de l'hôte, sous la forme [`"activeTab"`](/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission). Cette permission fournit les mêmes droits que les  `"onglets"` avec `<all_urls>`, mais avec deux restrictions:

- l'utilisateur doit interagir avec l'extension via son navigateur ou l'action de la page, le menu contextuel ou la touche de raccourci.
- il accorde uniquement la permission dans l'onglet actif..

L'avantage de cette approche est que l'utilisateur ne recevra pas d'avertissement d'autorisation indiquant que votre extension peut “Accéder à vos données pour tous les sites Web”. En effet, la permission `<all_urls>` permet à une extension d'exécuter des scripts dans n'importe quel onglet, à tout moment, alors que [`"activeTab"`](/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) se limite à autoriser l'extension à effectuer une action demandée par l'utilisateur dans l'onglet en cours.

## En savoir plus sur les onglets et leurs propriétés

Il y aura des occasions où vous voulez obtenir une liste de tous les onglets dans toutes les fenêtres du navigateur. D'autres fois, vous pourriez vouloir trouver un sous-ensemble d'onglets qui correspondent à certains critères spécifiques, tels que ceux ouverts à partir d'un onglet spécifique ou l'affichage des pages d'un domaine particulier. Et une fois que vous avez votre liste d'onglets, vous voudrez probablement en savoir plus sur leurs propriétés.

C'est ici qu'intervient {{WebExtAPIRef("tabs.query")}}. Utilisé seul pour obtenir tous les onglets ou prendre l'objet `queryInfo` — pour spécifier des critères de requête tels que l'activation de l'onglet, dans la fenêtre en cours ou plus de 17 critères — {{WebExtAPIRef("tabs.query")}} renvoie un tableau d'objets {{WebExtAPIRef("tabs.Tab")}} objects contenant des informations sur les onglets.

Lorsque vous souhaitez uniquement obtenir des informations sur l'onglet en cours, vous pouvez obtenir un objet {{WebExtAPIRef("tabs.Tab")}} pour cet onglet à l'aide de  {{WebExtAPIRef("tabs.getCurrent")}}. Si vous avez un ID d'onglet, vous pouvez obtenir son objet {{WebExtAPIRef("tabs.Tab")}} en utilisant {{WebExtAPIRef("tabs.get")}}.

### Par exemple

Pour voir comment {{WebExtAPIRef("tabs.query")}} et {{WebExtAPIRef("tabs.Tab")}} sont utilisés, voyons comment l'exemple [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs) ajoute la liste de  “passer aux onglets” à son popup bouton de barre d'outils.

![](switch_to_tab.png)

### manifest.json

Voici le [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json):

```json
{
  "browser_action": {
    "browser_style": true,
    "default_title": "Tabs, tabs, tabs",
    "default_popup": "tabs.html"
  },
  "description": "A list of methods you can perform on a tab.",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs",
  "manifest_version": 2,
  "name": "Tabs, tabs, tabs",
  "permissions": [
    "tabs"
  ],
  "version": "1.0"
}
```

> **Note :**
>
> - **tabs.html est défini comme `default_popup` dans `browser_action`**. C'est affiché chaque fois que l'utilisateur clique sur l'icône de la barre d'outils de l'extension.
> - **Les permissions incluent des onglets.** Ceci est nécessaire pour prendre en charge la fonction de liste d'onglets, car l'extension lit le titre des onglets à afficher dans la fenêtre contextuelle.

### tabs.html

tabs.html définit le contenu du popup de l'extension :

```html
<!DOCTYPE html>

<html>

 <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="tabs.css"/>
 </head>

<body>

 <div class="panel">
    <div class="panel-section panel-section-header">
     <div class="text-section-header">Tabs-tabs-tabs</div>
    </div>

    <a href="#" id="tabs-move-beginning">Move active tab to the beginning of the window</a><br>


…

Define the other menu items
…

    <div class="switch-tabs">

     <p>Switch to tab</p>

     <div id="tabs-list"></div>

    </div>
 </div>

 <script src="tabs.js"></script>

</body>

</html>
```

Ici, vous pouvez voir que, après la création des éléments de menu, un div vide avec la liste des onglets ID est configuré pour contenir la liste des onglets. Ensuite, tabs.js est appelée.

Voici un résumé de ce qui précède :

1.  Les éléments de menu sont déclarés.
2.  Une `div` vide avec `tabs-list` est déclaré comme contenant la liste des onglets.
3.  tabs.js est appelé.

### tabs.js

Dans [tabs.js](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js) nous pouvons voir comment la liste des onglets est construite et ajoutée à la popup.

Tout d'abord, un gestionnaire d'événements est ajouté pour exécuter `listTabs()` quand tabs.html est chargé :

#### Création de la fenêtre contextuelle

Tout d'abord, un gestionnaire d'événements est ajouté pour exécuter `listTabs()` quand tabs.html est chargé :

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

La première chose que fait `listTabs()` est d'appeler `getCurrentWindowTabs()`, où {{WebExtAPIRef("tabs.query")}} est utilisé pour obtenur un objet  {{WebExtAPIRef("tabs.Tab")}} pour le onglets dans la fenêtre courante :

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}
```

Maintenant, `listTabs()` est prêt à créer le contenu de la popup.

Pour commencer :

1.  Récupérer les `tabs-list` `div`.
2.  Créer un fragment de document (dans lequel la liste sera construite).
3.  Mettre les compteurs.
4.  Effacer le contenu de `tabs-list` `div`.

```js
function listTabs() {
 getCurrentWindowTabs().then((tabs) => {
    let tabsList = document.getElementById('tabs-list');
    let currentTabs = document.createDocumentFragment();
    let limit = 5;
    let counter = 0;

    tabsList.textContent = '';
```

Ensuite, nous allons créer les liens pour chaque onglet :

1.  Boucle les 5 premiers éléments de l'objet {{WebExtAPIRef("tabs.Tab")}}.
2.  Pour chaque poste, ajoutez un hyperlien vers le fragment de document.

    - L'étiquette du lien, c'est-à-dire son texte, est définie à l'aide du titre de l'onglet (ou de l'ID, s'il n'a pas de titre).
    - L'adresse du lien est définie à l'aide de l'ID de l'onglet.

```js
    for (let tab of tabs) {
     if (!tab.active && counter <= limit) {
        let tabLink = document.createElement('a');

        tabLink.textContent = tab.title || tab.id;

       tabLink.setAttribute('href', tab.id);
        tabLink.classList.add('switch-tabs');
        currentTabs.appendChild(tabLink);
     }

     counter += 1;

    }
```

Enfin, le fragment du document est écrit dans la div `tabs-list` :

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Travailler avec l'onglet actif

Un autre exemple connexe est l'option d'information “Alert active tab”qui décharge toutes les propriétés de l'objet {{WebExtAPIRef("tabs.Tab")}} de l'onglet actif dans une alerte :

```js
 else if (e.target.id === "tabs-alertinfo") {
   callOnActiveTab((tab) => {
     let props = "";
     for (let item in tab) {
       props += `${ item } = ${ tab[item] } \n`;
     }
     alert(props);
   });
 }
```

Où `callOnActiveTab()` ftrouve l'objet de tabulation active en faisant une boucle sur les objets {{WebExtAPIRef("tabs.Tab")}} qui recherchent l'objet avec l'ensemble actif :

```js
document.addEventListener("click", function(e) {
 function callOnActiveTab(callback) {
   getCurrentWindowTabs().then((tabs) => {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
 }
}
```

## Création, duplication, déplacement, mise à jour, rechargement et suppression des onglets

Après avoir recueilli des informations sur les onglets, vous voudrez probablement faire quelque chose avec eux — soit pour offrir aux utilisateurs des fonctionnalités de manipulation et de gestion des onglets — soit pour implémenter des fonctionnalités dans votre extension. Les fonctions suivantes sont disponibles :

- Créer un nouvel onglet ({{WebExtAPIRef("tabs.create")}}).
- Dupliquer un onglet ({{WebExtAPIRef("tabs.duplicate")}}).
- Supprimer un onglet ({{WebExtAPIRef("tabs.remove")}}).
- Déplacer un onglet ({{WebExtAPIRef("tabs.move")}}).
- Mettre à jour l'URL d'un onglet — accéderefficacement à une nouvelle page — ({{WebExtAPIRef("tabs.update")}}).
- Rechargez la page de l'onglet ({{WebExtAPIRef("tabs.reload")}}).

> **Note :**
>
> Ces fonctions nécessitent toutes l'ID (ou les ID) de l'onglet qu'elles manipulent :
>
> - {{WebExtAPIRef("tabs.duplicate")}}
> - {{WebExtAPIRef("tabs.remove")}}
> - {{WebExtAPIRef("tabs.move")}}
>
> Alors que les fonctions suivantes agissent sur l'onglet actif (si aucun ID d'onglet n'est fourni) :
>
> - {{WebExtAPIRef("tabs.update")}}
> - {{WebExtAPIRef("tabs.reload")}}

### Par exemple

L'exemple [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs) utilise toutes ces fonctionnalités sauf la mise à jour de l'URL d'un onglet. La façon dont ces API sont utilisées est similaire, nous allons donc regarder l'une des implémentations les plus impliquées, celle de l'option “Deplacer l'onglet actif vers le début de la liste des fenêtres”. Mais d'abord, voici une démonstration de la fonctionnalité en action :

{{EmbedYouTube("-lJRzTIvhxo")}}

#### [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json)

Aucune de ces fonctions ne nécessite de permission pour fonctionner, donc il n'y a aucune fonctionnalité dans le fichier manifest.json qui doit être mise en surbrillance.

#### [tabs.html](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.html)

tabs.html définit le “menu” affiché dans la fenêtre contextuelle, qui inclut l'option “Déplacer l'onglet actif au début de la liste des fenêtres”, wavec une série de balises `<a>` groupées par un séparateur visuel. Chaque élément de menu reçoit un ID, qui est utilisé dans tabs.js pour déterminer quel élément de menu est demandé.

```html
    <a href="#" id="tabs-move-beginning">Move active tab to the beginning of the window</a><br>
    <a href="#" id="tabs-move-end">Move active tab to the end of the window</a><br>

    <div class="panel-section-separator"></div>


    <a href="#" id="tabs-duplicate">Duplicate active tab</a><br>

    <a href="#" id="tabs-reload">Reload active tab</a><br>
    <a href="#" id="tabs-alertinfo">Alert active tab info</a><br>
```

#### [tabs.js](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js)

Pour implémenter le "menu" défini dans tabs.html, tabs.js inclut un écouteur pour les clics dans tabs.html

```js
document.addEventListener("click", function(e) {
 function callOnActiveTab(callback) {

   getCurrentWindowTabs().then((tabs) => {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
}
}
```

Une série d'instructions `if` cherche alors à faire correspondre l'identifiant de l'élément cliqué. Cet extrait de code est pour l'option “Déplacer l'onglet actif au début de la liste des fenêtres” :

```js
 if (e.target.id === "tabs-move-beginning") {
   callOnActiveTab((tab, tabs) => {
     var index = 0;
     if (!tab.pinned) {
       index = firstUnpinnedTab(tabs);
     }
     console.log(`moving ${tab.id} to ${index}`)
     browser.tabs.move([tab.id], {index});
   });
 }
```

Il est intéressant de noter l'utilisation de console.log. Cela vous permet de générer des informations sur la console du [debugger](/fr/Add-ons/WebExtensions/Debugging), ce qui peut être utile lors de la résolution des problèmes rencontrés lors du développement.

![](console.png)

Le code de déplacement appelle d'abord `callOnActiveTab()` qui à son tour appelle  `getCurrentWindowTabs()` pour obtenir un objet {{WebExtAPIRef("tabs.Tab")}} contenant les onglets de la fenêtre active. Il parcourt ensuite l'objet pour rechercher et renvoyer l'objet onglet actif :

```js
 function callOnActiveTab(callback) {
   getCurrentWindowTabs().then((tabs) => {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
 }
```

##### Onglets épinglés

Une caractéristique des onglets est que l'utilisateur peut épingler des onglets dans une fenêtre. Les onglets épinglés sont placés au début de la liste des onglets et ne peuvent pas être déplacés. Cela signifie que la première position vers laquelle un onglet peut se déplacer est la première position après les onglets épinglés. Ainsi, `firstUnpinnedTab()` est appelé pour trouver la position du premier onglet non goupillé en faisant une boucle dans l'objet `tabs` :

```js
function firstUnpinnedTab(tabs) {
 for (var tab of tabs) {
   if (!tab.pinned) {
     return tab.index;
   }
 }
}
```

Nous avons maintenant tout ce qu'il faut pour déplacer l'onglet : l'objet onglet actif à partir duquel nous pouvons obtenir l'ID de l'onglet et la position à laquelle l'onglet doit être déplacé. Ainsi, nous pouvons mettre en œuvre le mouvement :

```js
     browser.tabs.move([tab.id], {index});
```

Les fonctions restantes à dupliquer, recharger, créer et supprimer des onglets sont implémentées de manière similaire.

## Manipulation du niveau du zoom d'un onglet

Le prochain ensemble de fonctions vous permet d'obtenir  ({{WebExtAPIRef("tabs.getZoom")}}) et de définir ({{WebExtAPIRef("tabs.setZoom")}}) le niveau de zoom dans un onglet. Vous pouvez également récupérer les paramètres de zoom  ({{WebExtAPIRef("tabs.getZoomSettings")}}) mais, au moment de l'écriture, la possibilité de définir les paramètres ({{WebExtAPIRef("tabs.setZoomSettings")}}) n'était pas disponible dans Firefox.

Le niveau de zoom peut être compris entre 30% et 300% (représenté par des décimales de 0.3 à 3).

Dans Firefox les paramètres de zoom par défaut sont :

- **niveau de zoom par défaut** : 100%.
- **mode zoom**: automatique (le navigateur gère donc le réglage des niveaux de zoom).
- **portée des changements de zoom** : `"per-origin"`, ce qui signifie que lorsque vous visitez à nouveau un site, il prend le niveau de zoom défini lors de votre dernière visite.

### Par exemple

L'exemple [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs) comprend trois démonstrations de la fonction de zoom : zoom avant, zoom arrière, et réinitialisation du zoom. Voici la fonctionnalité en action :

{{EmbedYouTube("RFr3oYBCg28")}}

Jetons un coup d'oeil à la façon dont le zoom est implémenté.

#### [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json)

Aucune des fonctions de zoom n'a besoin d'autorisations. Par conséquent, aucune fonction du fichier manifest.json ne doit être mise en surbrillance.

#### [tabs.html](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.html)

Nous avons déjà discuté comment le tabs.html définit les options pour cette extension, rien de nouveau ou unique n'est fait pour fournir les options de zoom.

#### [tabs.js](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js)

tabs.js commence par définir plusieurs constantes utilisées dans le code du zoom :

```js
const ZOOM_INCREMENT = 0.2;
const MAX_ZOOM = 3;
const MIN_ZOOM = 0.3;
const DEFAULT_ZOOM = 1;
```

Il utilise ensuite le même écouteur que nous avons discuté précédemment afin qu'il puisse agir sur les clics dans tabs.html.

Pour la fonction zoom, ceci s'exécute :

```js
 else if (e.target.id === "tabs-add-zoom") {
   callOnActiveTab((tab) => {
     var gettingZoom = browser.tabs.getZoom(tab.id);
     gettingZoom.then((zoomFactor) => {
       //the maximum zoomFactor is 3, it can't go higher
       if (zoomFactor >= MAX_ZOOM) {
         alert("Tab zoom factor is already at max!");
       } else {
         var newZoomFactor = zoomFactor + ZOOM_INCREMENT;
         //if the newZoomFactor is set to higher than the max accepted
         //it won't change, and will never alert that it's at maximum
         newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
         browser.tabs.setZoom(tab.id, newZoomFactor);
       }
     });
   });
 }
```

Ce code utilise `callOnActiveTab()` pour obtenir les détails de l'onglet actif, puis  {{WebExtAPIRef("tabs.getZoom")}} obtient le facteur de zoom actuel de l'onglet. Le zoom actuel est comparé au maximum défini (`MAX_ZOOM`) et une alerte est émise si l'onglet est déjà au zoom maximum. Sinon, le niveau de zoom est incrémenté mais limité au zoom maximum, puis le zoom est défini avec {{WebExtAPIRef("tabs.getZoom")}}.

## Manipuler le CSS d'un onglet

Une autre fonctionnalité importante offerte par l'API Tabs est la possibilité de manipuler le CSS dans un onglet — ajouter un nouveau CSS dans un onglet ({{WebExtAPIRef("tabs.insertCSS")}}) ou supprimer CSS d'un onglet  ({{WebExtAPIRef("tabs.removeCSS")}}).

Cela peut être utile si vous voulez, par exemple, mettre en évidence certains éléments de la page ou modifier la disposition par défaut de la page (liste courte des cas d'utilisation).

### Par exemple

L'exemple [apply-css](https://github.com/mdn/webextensions-examples/tree/master/apply-css) utilise ces fonctionnalités pour ajouter une bordure rouge à la page Web dans l'onglet actif. Voici la fonctionnalité en action:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Voyons comment cela se passe.

#### [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/apply-css/manifest.json)

Pour utiliser les fonctionnalités CSS dont vous avez besoin :

- Permission `"tabs"`  et [permission hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) ou
- Permission `"activeTab"`.

Ce dernier est le plus utile, car il permet à une extension d'utiliser  {{WebExtAPIRef("tabs.insertCSS")}} et {{WebExtAPIRef("tabs.removeCSS")}} dans l'onglet actif lorsqu'il est exécuté depuis le navigateur de l'extension ou action de la page, menu contextuel ou un raccourci.

```json
{
  "description": "Adds a page action to toggle applying CSS to pages.",

 "manifest_version": 2,
 "name": "apply-css",
 "version": "1.0",
 "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/apply-css",

 "background": {

    "scripts": ["background.js"]
 },

 "page_action": {

    "default_icon": "icons/off.svg",
    "browser_style": true
 },

 "permissions": [
    "activeTab",
    "tabs"
 ]

}
```

Vous noterez que la permission `"tabs"` est ajoutée en plus de `"activeTab"`. Cette permission supplémentaire est nécessaire pour permettre au script de l'extension d'accéder à l'URL de l'onglet, dont nous verrons l'importance dans un instant.

Les autres caractéristiques principales du fichier manifeste sont la définition de:

- **un script d'arrière-plan**, qui commence à s'exécuter dès que l'extension est chargée.
- **une “action de page”**, qui définit une icône à ajouter à la barre d'adresse du navigateur.

#### [background.js](https://github.com/mdn/webextensions-examples/blob/master/apply-css/background.js)

Au démarrage, background.js définit un certain nombre de constantes à utiliser dans l'extension qui définissent le CSS à appliquer, des titres pour les “actions de page”, et une liste de protocoles dans lesquels l'extension fonctionnera :

```js
const CSS = "body { border: 20px solid red; }";
const TITLE_APPLY = "Apply CSS";
const TITLE_REMOVE = "Remove CSS";
const APPLICABLE_PROTOCOLS = ["http:", "https:"];
```

Lors du premier chargement, l'extension utilise {{WebExtAPIRef("tabs.query")}} pour obtenir une liste de tous les onglets de la fenêtre du navigateur en cours. Il parcourt ensuite les onglets appelant `initializePageAction()`.

```js
var gettingAllTabs = browser.tabs.query({});

gettingAllTabs.then((tabs) => {
 for (let tab of tabs) {
   initializePageAction(tab);
 }
});
```

`initializePageAction` utilise `protocolIsApplicable()` pour déterminer si l'URL de l'onglet actif est celle à laquelle le CSS peut être appliqué :

```js
function protocolIsApplicable(url) {
 var anchor =  document.createElement('a');
 anchor.href = url;
 return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
}
```

Ensuite, si l'exemple peut agir sur l'onglet, `initializePageAction()` définit l'icône  `pageAction` (barre de navigation) et le titre de l'onglet pour utiliser les versions ‘off’ avant de rendre la `pageAction` visible :

```js
function initializePageAction(tab) {

 if (protocolIsApplicable(tab.url)) {
   browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
   browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
   browser.pageAction.show(tab.id);
 }
}
```

Maintenant, un écouteur sur `geAction.onClicked` attend que l'icône pageAction soit cliqué et appelle `toggleCSS` quand il l'est.

```js
browser.pageAction.onClicked.addListener(toggleCSS);
```

`toggleCSS()` obtient le titre de la `pageAction`  puis prend l'action décrite :

- **Pour "Appliquer CSS”:**

  - Basculer l'icône `pageAction` et le titre dans les versions “supprimer”.
  - Applique le CSS en utilisant {{WebExtAPIRef("tabs.insertCSS")}}.

- **Pour “Supprimer CSS”:**

  - Basculer l'icône `pageAction` et le titre dans les versions “apply”.
  - Supprime le CSS en utilisant {{WebExtAPIRef("tabs.removeCSS")}}.

```js
function toggleCSS(tab) {


 function gotTitle(title) {

    if (title === TITLE_APPLY) {
     browser.pageAction.setIcon({tabId: tab.id, path: "icons/on.svg"});
     browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
     browser.tabs.insertCSS({code: CSS});
    } else {
     browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
     browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
     browser.tabs.removeCSS({code: CSS});
    }
 }

 var gettingTitle = browser.pageAction.getTitle({tabId: tab.id});

 gettingTitle.then(gotTitle);
}
```

Enfin, pour s'assurer que `pageAction` est valide après chaque mise à jour de l'onglet, un écouteur sur {{WebExtAPIRef("tabs.onUpdated")}} appelle  `initializePageAction()` chaque fois que l'onglet est mis à jour pour vérifier que l'onglet utilise toujours un protocole auquel le CSS peut être appliqué.

```js
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {

 initializePageAction(tab);
});
```

## Quelques autres capacités intéressantes

Il existe deux autres fonctionnalités de l'API Tabs qui ne rentrent pas dans l'une des sections précédentes :

- capturez le contenu de l'onglet visible avec {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- détecter la langue principale du contenu dans un onglet en utilisant  {{WebExtAPIRef("tabs.detectLanguage")}}, que vous pourriez utiliser, par exemple, pour faire correspondre la langue de l'interface utilisateur de votre extension avec celle de la page dans laquelle elle s'exécute.

## Apprendre encore plus

Si vous voulez en savoir plus sur l'API Tabs, consultez le :

- [Tabs API reference.](/fr/Add-ons/WebExtensions/API/tabs)
- [example extensions](/fr/Add-ons/WebExtensions/Examples), car beaucoup d'entre eux utilisent l'API Tabs.
