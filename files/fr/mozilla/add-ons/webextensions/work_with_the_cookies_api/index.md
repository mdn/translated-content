---
title: Travailler avec l'API Cookies
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
tags:
  - Add-ons
  - Comment
  - Cookies
  - Débutant
  - Extensions
  - How-to
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
original_slug: Mozilla/Add-ons/WebExtensions/travailler_avec_l_API_cookies
---
{{AddonSidebar}}

Avec l'API Cookies, vos extensions ont accès à des fonctionnalités similaires à celles utilisées par les sites Web pour stocker et lire les cookies. Les fonctionnalités de l'API permettent aux extensions de stocker des informations site par site. Ainsi, comme nous le verrons dans l'exemple, vous pouvez stocker des détails sur le choix de la couleur de fond d'un site pour un utilisateur. Ensuite, lorsque l'utilisateur revient sur le site, votre extension peut utiliser la capacité de l'API pour obtenir des détails sur les cookies et les lire pour récupérer le choix de l'utilisateur et l'appliquer au site Web.

> **Note :** Le comportement des cookies peut être contrôlé à l'aide de la propriété {{WebExtAPIRef("privacy.websites")}} `cookieConfig`. Cette propriété contrôle si et comment les cookies sont acceptés ou si tous les cookies sont traités comme des cookies de session.

## Permissions

Pour utiliser l'API Cookies, vous devez demander à la fois la permission `"cookies"` et les  [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour les protocoles, domaines, ou sites web auxquels vous souhaitez accéder ou utiliser `"<all_urls>"` pour accéder à tous les protocoles et domaines. La façon dont vous définissez votre chaîne de permission d'hôte affecte la capacité de votre extension à lire, écrire et supprimer les cookies.

<table>
  <colgroup>
    <col />
    <col />
    <col />
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <td rowspan="2"><p>Chaine de permission hôte</p></td>
      <td colspan="2"><p>Lecture</p></td>
      <td colspan="2"><p>Ecriture/Effacer</p></td>
    </tr>
    <tr>
      <td><p>Sécurisé</p></td>
      <td><p>Non-sécurisé</p></td>
      <td><p>Sécurisé</p></td>
      <td><p>Non-sécurisé</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"http://*.example.com/"</code></p>
      </td>
      <td><p>Non</p></td>
      <td><p>Principaux et sous domaines, avec n'importe quel chemin</p></td>
      <td><p>Principaux et sous domaines, avec n'importe quel chemin</p></td>
      <td><p>Principaux et sous domaines, avec n'importe quel chemin</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"https://www.example.com/"</code></p>
      </td>
      <td>
        <p>
          www.example.com ou .example.com avec n'importe quel chemin, mais aucun
          sous domaine
        </p>
      </td>
      <td>
        <p>
          www.example.com ou .example.com avec n'importe quel chemin, mais aucun
          sous domaine
        </p>
      </td>
      <td>
        <p>
          www.example.com ou .example.com avec n'importe quel chemin, mais aucun
          sous domaine
        </p>
      </td>
      <td>
        <p>
          www.example.com ou .example.com avec n'importe quel chemin, mais aucun
          sous domaine
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>"*://*.example.com/"</code></p>
      </td>
      <td><p>Principaux et sous domaines, avec n'importe quel chemin</p></td>
      <td><p>Principaux et sous domaines, avec n'importe quel chemin</p></td>
      <td><p>Principaux et sous domaines, avec n'importe quel chemin</p></td>
      <td><p>Principaux et sous domaines, avec n'importe quel chemin</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"&#x3C;all_urls>"</code></p>
      </td>
      <td><p>Tout domaine avec un chemin</p></td>
      <td><p>Tout domaine avec un chemin</p></td>
      <td><p>Tout domaine avec un chemin</p></td>
      <td><p>Tout domaine avec un chemin</p></td>
    </tr>
  </tbody>
</table>

## Banque de cookies

Firefox fournit trois types de banque de cookies :

- La banque par défaut, qui stocke les cookies de la navigation normale.
- Le mode de navigation privée stocke les cookies créés lors d'une session de navigation privée. Ces banques et tous les cookies qu'ils contiennent sont supprimés lorsque la fenêtre de navigation privée associée se ferme.
- La banque de conteneur d'onglets, qui stocke les cookies pour chaque identité contextuelle dans Firefox. Les identités contextuelles permettent à un utilisateur de conserver plusieurs identités dans une fenêtre de navigateur. Ceci est utile si, par exemple, vous avez un compte de messagerie d'entreprise et personnel sur Gmail. Avec les identités contextuelles, vous pouvez ouvrir un onglet par rapport à une identité personnelle et un deuxième onglet par rapport à une identité d'entreprise. Chaque onglet peut ensuite se connecter à Google Mail avec un nom d'utilisateur différent, et les deux comptes peuvent être utilisés côte à côte. Pour plus d'informations, voir [Sécurité/Projet d'identité contextuelle/Conteneurs](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) dans le wiki Mozilla.

Vous pouvez trouver les banques de cookies disponibles en utilisant {{WebExtAPIRef("cookies.getAllCookieStores")}}, qui renvoie un objet contenant l'ID de chaque cookie et une liste des ID des onglets utilisant chaque banque de cookies.

## Exemple de procédure pas à pas

L'exemple d'extension [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/master/cookie-bg-picker) permet à l'utilisateur de choisir une couleur et une icône appliquées à l'arrière-plan des pages Web d'un site. Ces choix sont sauvegardés par site en utilisant {{WebExtAPIRef("cookies.set")}}. Lorsqu'une page du site est ouverte, {{WebExtAPIRef("cookies.get")}} lit tout choix précédent, et l'extension l'applique à la page Web. Une option de réinitialisation supprime l'icône d'arrière-plan et la couleur du site ainsi que le cookie, en utilisant {{WebExtAPIRef("cookies.remove")}}. Il utilise également {{WebExtAPIRef("cookies.onChanged")}} pour écouter les modifications apportées aux cookies, en envoyant les détails de la modification à la console.

Cette vidéo montre l'extension en action :

{{EmbedYouTube("_rlp3eYqEMA")}}

Cet exemple utilise également les API Tabs et Runtime, mais nous ne discuterons de ces fonctionnalités qu'en passant.

### manifest.json

The key feature of the [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/manifest.json) file relating to the use of the Cookies API is the permissions request:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Ici, l'extension demande l'autorisation d'utiliser l'API Cookies (`"cookies"`) avec tous les sites Web (`"<all_urls>"`). Cela permet à l'extension d'enregistrer le choix de l'icône de couleur d'arrière-plan pour n'importe quel site Web.

### Scripts—bgpicker.js

L'interface utilisateur de l'extension utilise un bouton de barre d'outils ({{WebExtAPIRef("browserAction")}}) implémenté avec [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/popup/bgpicker.html) qui appelle [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/popup/bgpicker.js). Ensemble, ils permettent à l'utilisateur de sélectionner l'icône et d'entrer la couleur à appliquer en arrière-plan. Ils offrent également la possibilité d'effacer ces paramètres.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/popup/bgpicker.js) gère la sélection de l'icône ou l'entrée d'une couleur pour l'arrière-plan dans des fonctions séparées.

Pour gérer les boutons d'icônes, le script rassemble d'abord tous les noms de classe utilisés pour les boutons dans le fichier HTML :

```js
var bgBtns = document.querySelectorAll('.bg-container button');
```

Il boucle ensuite à travers tous les boutons en leur assignant leur image et en créant un écouteur onclick pour chaque bouton :

```js
for(var i = 0; i < bgBtns.length; i++) {
  var imgName = bgBtns[i].getAttribute('class');
  var bgImg = 'url(\'images/' + imgName + '.png\')';
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = function(e) {
```

Quand un bouton est cliqué, sa fonction d'écouteur correspondante obtient le nom de classe de bouton et ensuite le chemin d'icône qu'il passe au script de contenu de la page ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/content_scripts/updatebg.js)) en utilisant un message. Le script de contenu applique ensuite l'icône à l'arrière-plan de la page Web. Pendant ce temps, [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/popup/bgpicker.js) stocke les détails de l'icône appliquée à l'arrière-plan dans un cookie :

```js
    cookieVal.image = fullURL;
    browser.cookies.set({
    url: tabs[0].url,
    name: "bgpicker",
    value: JSON.stringify(cookieVal)
  })
```

Le paramètre de couleur est traité de la même manière, déclenché par un écouteur dans le champ de saisie de couleur. Lorsqu'une couleur est entrée, l'onglet actif est découvert et les détails de sélection de couleur envoyés, à l'aide d'un message, au script de contenu de la page à appliquer à l'arrière-plan de la page Web. Ensuite, la sélection de couleur est ajoutée au cookie :

```js
    cookieVal.color = currColor;
    browser.cookies.set({
    url: tabs[0].url,
    name: "bgpicker",
    value: JSON.stringify(cookieVal)
```

Lorsque l'utilisateur clique sur le bouton de réinitialisation qui a été affecté à la réinitialisation de la variable :

```js
var reset = document.querySelector('.color-reset button');
```

`reset.onclick` trouve d'abord l'onglet actif. Ensuite, en utilisant l'ID de l'onglet, il transmet un message au script de contenu de la page ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/content_scripts/updatebg.js)) pour qu'il supprime l'icône et la couleur de la page. La fonction efface ensuite les valeurs de cookie (de sorte que les anciennes valeurs ne sont pas reportées et écrites sur un cookie créé pour une nouvelle icône ou sélection de couleur sur la même page) avant de supprimer le cookie :

```js
    cookieVal = { image : '',
                  color : '' };
    browser.cookies.remove({
    url: tabs[0].url,
    name: "bgpicker"
```

Aussi, afin que vous puissiez voir ce qui se passe avec les cookies, le script rend compte de toutes les modifications apportées aux cookies dans la console :

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
  });
```

### Scripts—background.js

Un script d'arrière-plan ([background.js](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/background_scripts/background.js)) permet à l'utilisateur de choisir une icône d'arrière-plan et une couleur pour le site Web dans une session antérieure. Le script est à l'écoute des changements dans l'onglet actif, que ce soit l'utilisateur qui passe d'un onglet à l'autre ou modifie l'URL de la page affichée dans l'onglet. Lorsque l'un de ces événements se produit, `cookieUpdate()` est appelée.  `cookieUpdate()` utilise à son tour `getActiveTab()` pour obtenir l'ID de l'onglet actif. La fonction peut ensuite vérifier si un cookie existe pour l'extension, en utilisant l'URL de l'onglet :

```js
    var gettingCookies = browser.cookies.get({
      url: tabs[0].url,
      name: "bgpicker"
    });
```

Si le cookie `"bgpicker"` existe pour le site Web, les détails de l'icône et de la couleur sélectionnés précédemment sont récupérés et transmis au script de contenu [updatebg.js](https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/content_scripts/updatebg.js) à l'aide de messages :

```js
    gettingCookies.then((cookie) => {
      if (cookie) {
        var cookieVal = JSON.parse(cookie.value);
        browser.tabs.sendMessage(tabs[0].id, {image: cookieVal.image});
        browser.tabs.sendMessage(tabs[0].id, {color: cookieVal.color});
      }
    });
```

## Autres caractéristiques

En plus des API mentionnées jusqu'à présent, l'API Cookies propose également {{WebExtAPIRef("cookies.getAll")}}. Cette fonction prend l'objet details pour spécifier des filtres pour les cookies sélectionnés et retourne un tableau d'objets {{WebExtAPIRef("cookies.Cookie")}} qui correspondent aux critères de filtrage.

## Apprendre encore plus

Si vous voulez en savoir plus sur l'API Cookies, consultez :

- [Cookies API reference](/fr/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/master/list-cookies) exemple.
