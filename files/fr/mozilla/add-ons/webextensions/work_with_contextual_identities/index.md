---
title: Travailler avec des identités contextuelles
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
---

{{AddonSidebar}}

Beaucoup de gens ont besoin ou veulent interagir avec le web en utilisant plusieurs personnages. Ils peuvent avoir des comptes pour le travail sur le Web et le courrier électronique personnel. Ils peuvent se déconnecter de leurs comptes de médias sociaux avant d'accéder aux achats en ligne, afin de s'assurer que les scripts de suivi sur les sites d'achat ne peuvent pas prendre en charge leur activité de médias sociaux. Pour répondre à ces exigences, les utilisateurs finissent souvent par utiliser une fenêtre de navigateur standard et privée ou deux navigateurs différents.

Pour répondre à ce besoin, Firefox inclut une fonctionnalité connue sous le nom d'identités contextuelles, d'onglets de conteneurs ou de conteneurs de comptes. Cette fonctionnalité permet la création d'un conteneur de cookies pour chacune des identités que l'utilisateur souhaite utiliser dans son navigateur. Les onglets peuvent être associés à l'une de ces identités, en conservant les cookies distincts de ceux des autres identités dans le navigateur. Le résultat pratique est que, par exemple, un utilisateur peut avoir une identité personnelle et professionnelle. Ils peuvent ensuite utiliser l'identité personnelle dans un onglet, où ils se connectent à leur messagerie Web personnelle, et l'identité professionnelle dans un autre onglet, où ils se connectent à leur messagerie Web professionnelle.

Pour plus d'informations sur cette fonctionnalité, voir :

- [Mettez vos multiples personnalités en ligne dans Firefox Multi-Compte ContaYouiners (anglais)](https://blog.mozilla.org/firefox/introducing-firefox-multi-account-containers/)
- [Securité / Projet d'identité contextuelle / conteneurs (anglais)](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Article de support Firefox sur les conteneurs (français)](https://support.mozilla.org/fr/kb/onglets-contextuels-avec-les-containers)

## API pour travailler avec des identités contextuelles

Pour utiliser les fonctionnalités d'identité contextuelle dans les extensions, vous utiliserez deux APIs :

- {{WebExtAPIRef("contextualIdentities")}} qui permet à une extension d'ajouter, d'interroger, de mettre à jour et de supprimer des identités contextuelles.
- {{WebExtAPIRef("tabs")}} ou plus précisément {{WebExtAPIRef("tabs.create")}} qui vous permet de créer un onglet utilisant le conteneur d'une identité contextuelle (magasin de cookies).

## Permissions

Pour utiliser l'API {{WebExtAPIRef("contextualIdentities")}} vous devez inclure la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "contextualIdentities" dans votre fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json). Vous n'avez pas besoin de la permission "tabs" pour utiliser {{WebExtAPIRef("tabs.create")}} ; vous avez besoin de la permission "cookies" pour spécifier le conteneur de cookies que vous souhaitez utiliser.

## Exemple de procédure pas à pas

L'exemple d'extension [contextual-identities](https://github.com/mdn/webextensions-examples/tree/master/contextual-identities) fournit un bouton de barre d'outils avec une fenêtre qui répertorie les identités dans le navigateur. Pour chaque identité, l'extension fournit des options permettant de créer un nouvel onglet en utilisant son conteneur de cookies ou de supprimer tous les onglets de l'identité.

Voici une courte vidéo de l'extension en action :

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Les principales caractéristiques du fichier [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/contextual-identities/manifest.json) sont :

- La demande de permissions :

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- spécification du bouton de la barre d'outils (browseAction) donnant accès aux fonctionnalités de l'extension :

  ```json
    "browser_action": {
      "browser_style": true,
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Une fenêtre contextuelle sur le bouton de la barre d'outils fournit l'interface utilisateur de l'extension. [context.html](https://github.com/mdn/webextensions-examples/blob/master/contextual-identities/context.html) implémente ce popup, mais c'est juste un shell dans lequel le script context.js écrit la liste des identités contextuelles et leurs options associées.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Toutes les fonctionnalités de l'extension sont implémentées via [context.js](https://github.com/mdn/webextensions-examples/blob/master/contextual-identities/context.js), qui est appelée chaque fois que la barre d'outils est affichée.

Le script obtient d'abord le div 'identity-list' depuis context.html.

```json
var div = document.getElementById('identity-list');
```

Il vérifie ensuite si la fonction d'identités contextuelles est activée dans le navigateur. Si ce n'est pas le cas, des informations sur la façon de l'activer sont ajoutées à la fenêtre contextuelle.

```json
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {
```

Firefox s'installe avec la fonctionnalité d'identité contextuelle désactivée, elle est activée lorsqu'une extension utilisant l'API contextualIdentities est installée. Cependant, il est toujours possible pour l'utilisateur de désactiver la fonctionnalité, en utilisant une option sur la page des préférences (about:preferences), d'où la nécessité de la vérification.

Le script utilise maintenant contextualIdentities.query pour déterminer s'il existe des identités contextuelles définies dans le navigateur. S'il n'y en a pas, un message est ajouté au popup et le script s'arrête.

```json
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }
```

Si des identités contextuelles sont présentes — Firefox a quatre identités par défaut — le script parcourt chacune d'elles en ajoutant son nom, stylisé dans la couleur choisie, à l'élément \<div>. La fonction `createOptions()` ajoute ensuite les options à "create" ou "close all" à la \<div> avant qu'elle ne soit ajoutée au popup.

```json
     for (let identity of identities) {
       let row = document.createElement('div');
       let span = document.createElement('span');
       span.className = 'identity';
       span.innerText = identity.name;
       span.style = `color: ${identity.color}`;
       console.log(identity);
       row.appendChild(span);
       createOptions(row, identity);
       div.appendChild(row);
     }
  });
}

function createOptions(node, identity) {
  for (let option of ['Create', 'Close All']) {
    let a = document.createElement('a');
    a.href = '#';
    a.innerText = option;
    a.dataset.action = option.toLowerCase().replace(' ', '-');
    a.dataset.identity = identity.cookieStoreId;
    a.addEventListener('click', eventHandler);
    node.appendChild(a);
  }
}
```

Le script attend maintenant que l'utilisateur sélectionne une option dans le popup.

```js
function eventHandler(event) {
```

Si l'utilisateur clique sur l'option permettant de créer un onglet pour une identité, l'un d'entre eux est ouvert à l'aide de tabs.create en transmettant l'ID de cookie de l'identité.

```json
  if (event.target.dataset.action == 'create') {
    browser.tabs.create({
      url: 'about:blank',
      cookieStoreId: event.target.dataset.identity
    });
  }
```

Si l'utilisateur sélectionne l'option permettant de fermer tous les onglets pour l'identité, le script exécute une tabs.query pour tous les onglets qui utilisent le cookie store de l'identité. Le script passe ensuite cette liste d'onglets à `tabs.remove`.

```json
  if (event.target.dataset.action == 'close-all') {
    browser.tabs.query({
      cookieStoreId: event.target.dataset.identity
      ).then((tabs) => {
      browser.tabs.remove(tabs.map((i) => i.id));
    });
  }
  event.preventDefault();
}
```

## Apprendre encore plus

Si vous voulez en savoir plus sur l'API contextualIdentities, consultez :

- [contextualIdentities API reference](/fr/Add-ons/WebExtensions/API/contextualIdentities).
- code source de l'extension [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme). C'est le code pour l'extension [Firefox Multi-Account Containers](/fr/firefox/addon/multi-account-containers/).

  Cette extension fournit aux utilisateurs des fonctionnalités améliorées pour les identités contextuelles, telles que la possibilité de cliquer longuement sur le nouveau bouton de l'onglet, puis de sélectionner l'identité à utiliser dans le nouvel onglet. Il met vraiment en valeur les capacités offertes par les identités contextuelles et vaut le détour.

  .
