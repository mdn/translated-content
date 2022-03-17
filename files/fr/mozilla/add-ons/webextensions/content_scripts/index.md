---
title: Scripts de contenu
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
tags:
  - Add-ons
  - JavaScript
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Content_scripts
---
{{AddonSidebar}}

Un script de contenu (_content script_ en anglais) est une partie de votre extension qui s’exécute dans le contexte d’une page web donnée (par opposition aux scripts d’arrière-plan qui font partie de l'extension, ou aux scripts qui font partie du site Web lui-même, tels que ceux chargés en utilisant l'élément {{HTMLElement("script")}}).

Les [scripts d'arrière-plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) peuvent accéder à l'ensemble des [API WebExtension](/fr/Add-ons/WebExtensions/API) mais ils ne peuvent pas accéder directement au contenu des pages web. Aussi, si votre extension doit manipuler le contenu des pages web, vous devrez utiliser les scripts de contenu.

Tout comme les scripts habituellement chargés par les pages web classiques, les scripts de contenu peuvent lire et modifier le contenu de leurs pages en utilisant les API DOM standard.

Les scripts de contenu ne peuvent accéder qu'à [un sous-ensemble des API WebExtension](<#API WebExtensions>), mais ils peuvent [communiquer avec les scripts d'arrière-plan](#communication_background) grâce à un système de messages et ainsi accéder indirectement aux API WebExtension.

> **Note :** que les scripts de contenu sont bloqués sur les domaines suivants :
>
> - accounts-static.cdn.mozilla.net
> - accounts.firefox.com
> - addons.cdn.mozilla.net
> - addons.mozilla.org
> - api.accounts.firefox.com
> - content.cdn.mozilla.net
> - content.cdn.mozilla.net
> - discovery.addons.mozilla.org
> - input.mozilla.org
> - install.mozilla.org
> - oauth.accounts.firefox.com
> - profile.accounts.firefox.com
> - support.mozilla.org
> - sync.services.mozilla.com
> - testpilot.firefox.com
>
> If you try to inject a content script into a page in these domains, it will fail and the page will log a [CSP](/fr/docs/Web/HTTP/CSP) error.
>
> Because these restrictions include addons.mozilla.org, users may attempt to use your extension immediately after installation—only to find that it doesn't work! You may want to add an appropriate warning, or an [onboarding page](/fr/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices) to move users away from addons.mozilla.org.

> **Note :** Les valeurs ajoutées à la portée globale d'un script de contenu avec `var foo` ou `window.foo = "bar"` peuvent disparaître à cause du bogue [1408996](https://bugzilla.mozilla.org/show_bug.cgi?id=1408996).

## Charger des scripts de contenu

Il est possible de charger un script de contenu dans une page web de trois manières différentes :

1.  **Lors de la phase d'installation, pour les pages qui correspondent à certains motifs d'URL :** en utilisant la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts) dans le fichier `manifest.json`, vous pouvez demander au navigateur de charger un script de contenu chaque fois que le navigateur charge une page dont l'URL [correspond à un motif donné](/fr/Add-ons/WebExtensions/Match_patterns).
2.  **Lors de l'exécution, pour les pages qui correspondent à certains motifs d'URL :** en utilisant l'API {{WebExtAPIRef("contentScripts")}}, vous pouvez demander au navigateur de charger un script de contenu chaque fois que le navigateur charge une page dont l'URL [correspond à un motif donné](/fr/Add-ons/WebExtensions/Match_patterns). Cette méthode est la version dynamique de la première méthode.
3.  **Lors de l'exécution, pour certains onglets spécifiques :** en utilisant la méthode  [`tabs.executeScript()`](/fr/Add-ons/WebExtensions/API/Tabs/executeScript), vous pouvez charger un script de contenu dans un onglet spécifique quand vous le souhaitez (par exemple lorsqu'un utilisateur clique sur un [bouton d'action du navigateur](/fr/Add-ons/WebExtensions/Browser_action)).

Il n'y a qu'une seule portée globale pour chaque _frame_ et pour chaque extension. Cela signifie que les variables d'un script de contenu peuvent être accédées directement par un autre script de contenu, indépendamment de la manière dont le script de contenu a été chargé.

À l'aide des méthodes (1) et (2), vous ne pouvez charger des scripts que dans des pages dont les URL peuvent être représentées par un [motif de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

En utilisant la méthode (3), vous pouvez également charger des scripts dans des pages packagées avec votre extension, mais vous ne pouvez pas charger des scripts dans des pages privilégiées du navigateur (comme [`about:debugging`]() ou [`about:addons`]()).

## Environnement des scripts de contenu

### Accès au DOM

Les scripts de contenu peuvent accéder et modifier le DOM de la page à la manière des scripts classique. Ils peuvent également observer tout changement du DOM effectué par les scripts de la page.

Cependant, les scripts de contenu reçoivent une «&nbsp;vue propre du DOM&nbsp;». Cela signifie que :

- Les scripts de contenu ne peuvent pas accéder aux variables JavaScript définies par les scripts de la page.
- Si un script de page redéfinit une propriété intrinsèque du DOM, le script de contenu verra la version originale de cette propriété et non la version redéfinie.

Dans Firefox, ce comportement s'appelle [Vision Xray](/fr/docs/Mozilla/Tech/Xray_vision).

Prenons par exemple la page web suivante&nbsp;:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

Le script «&nbsp;page-script.js&nbsp;» est écrit ci-dessous&nbsp;:

```js
// page-script.js

// ajouter un élément au DOM
var p = document.createElement("p");
p.textContent = "Ce paragraphe a été ajouté par un script de la page.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// définition d’une nouvelle propriété pour la fenêtre
window.toto = "Cette variable globale a été ajoutée par un script de la page.";

// redéfinition de la fonction intégrée window.confirm()
window.confirm = function() {
  alert("Ce script de page peut aussi redéfinir ’confirm’.");
}
```

Et maintenant une extension injecte ce script de contenu dans la page&nbsp;:

```js
// content-script.js

// peut accéder au DOM et le modifier
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// ne peut pas voir les propriétés ajoutées par un script de la page
console.log(window.toto);  // non défini

// voit la forme originale des propriétés redéfinies
window.confirm("Êtes-vous sûr ?"); // appelle la méthode window.confirm() originale
```

L'inverse est également vrai&nbsp;: les scripts de la page ne peuvent pas voir les propriétés JavaScript ajoutées par les scripts de contenu.

Ceci signifie que le script de contenu peut compter sur un comportement prévisible des propriétés du DOM et n'a pas à se soucier d'un éventuel conflit entre les variables qu'il définit et celles des scripts de page.

Une des conséquences pratiques de ce comportement est que les scripts de contenu n’ont accès à aucune des bibliothèques JavaScript chargées par la page. Par exemple, si la page inclut jQuery, le script de contenu ne pourra pas le voir.

Si un script de contenu veut utiliser une bibliothèque JavaScript, alors la bibliothèque doit être injectée en tant que script de contenu aux côtés du script de contenu qui veut l’utiliser.

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> **Note :** Firefox _fournis_ certaines API qui permettent aux scripts de contenu d'accéder aux objets JavaScript créés par les scripts de page et d'exposer leurs propres objets JavaScript aux scripts de page.
>
> Voir [Partage d'objets avec des scripts de page](/fr/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) pour plus de détails.

### Les API WebExtension accessibles

En plus des API standard du DOM, les scripts de contenu peuvent utiliser les API WebExtension suivantes&nbsp;:

Depuis l'API [`extension`](/fr/Add-ons/WebExtensions/API/extension)&nbsp;:

- [`getURL()`](</fr/Add-ons/WebExtensions/API/extension#getURL()>)
- [`inIncognitoContext`](/fr/Add-ons/WebExtensions/API/extension#inIncognitoContext)

Depuis l'API [`runtime`](/fr/Add-ons/WebExtensions/API/runtime)&nbsp;:

- [`connect()`](</fr/Add-ons/WebExtensions/API/runtime#connect()>)
- [`getManifest()`](</fr/Add-ons/WebExtensions/API/runtime#getManifest()>)
- [`getURL()`](</fr/Add-ons/WebExtensions/API/runtime#getURL()>)
- [`onConnect`](/fr/Add-ons/WebExtensions/API/runtime#onConnect)
- [`onMessage`](/fr/Add-ons/WebExtensions/API/runtime#onMessage)
- [`sendMessage()`](</fr/Add-ons/WebExtensions/API/runtime#sendMessage()>)

Depuis l'API [`i18n`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n)&nbsp;:

- [`getMessage()`](/fr/Add-ons/WebExtensions/API/i18n/getMessagee)
- [`getAcceptLanguages()`](/fr/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/fr/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/fr/Add-ons/WebExtensions/API/i18n/detectLanguage)

A partir des [`menus`](/fr/Add-ons/WebExtensions/API/menus):

- [`getTargetElement`](/fr/Add-ons/WebExtensions/API/menus/getTargetElement)

L'ensemble des propriétés et méthodes de l'API [`storage`](/fr/Add-ons/WebExtensions/API/storage).

### XHR et Fetch

Les scripts de contenu peuvent effectuer des requêtes en utilisant les API classiques  [`window.XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) et [`window.fetch()`](/fr/docs/Web/API/Fetch_API).

Les scripts de contenu obtiennent les mêmes privilèges interdomaines que le reste de l'extension : si l'extension a demandé un accès interdomaine pour un domaine à l'aide de la clé [`permissions`](/fr/Add-ons/WebExtensions/manifest.json/permissions) dans le fichier [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json), ses scripts de contenu auront également accès à ce domaine.

Ceci est accompli en exposant des instances XHR et _fetch_ privilégiées dans le script de contenu. Cela a pour effet secondaire de ne pas définir les en-têtes [`Origin`](/fr/docs/Web/HTTP/Headers/Origin) et [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) tels que la page elle-même l'aurait fait. Cela est souvent préférable afin d'éviter que la requête révèle la différence d'origine. À partir de Firefox 58, les extensions qui doivent exécuter des requêtes se comportant comme si elles étaient envoyées par le contenu lui-même peuvent utiliser `content.XMLHttpRequest` et `content.fetch()`. Pour les extensions visant une compatibilité entre les navigateurs, il est nécessaire de vérifier la présence de ces API avant de les utiliser.

## Communication avec les scripts d'arrière-plan

Bien que les scripts de contenu ne puissent pas utiliser la totalité des API WebExtension, ils peuvent communiquer avec les scripts d'arrière-plan de l'extension via l'API de messagerie et ont donc indirectement accès aux mêmes API que ces derniers.

Par défault, il existe deux moyens de communication entre les scripts d'arrière-plan et les scripts de contenu&nbsp;: vous pouvez envoyer des messages un par un, avec des réponses optionelles, ou vous pouvez établir une connexion continue entre les scripts, et utiliser cette connexion pour échanger des messages.

### Un message à la fois

Pour envoyer un message à la fois, vous pouvez utiliser les API suivantes :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Dans le script de contenu</th>
      <th scope="col">Dans les scripts d'arrière-plan</th>
    </tr>
  </thead>
  <tbody>
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
      <th scope="row">Recevoir un message</th>
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
  </tbody>
</table>

Par exemple, voici un script de contenu qui écoute les évènements de clic sur une page web. Si le clic était sur un lien, il envoie un message à la page d'arrière-plan avec l'URL cible&nbsp;:

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}
```

Le script d'arrière-plan écoute les messages et affiche une notification en utilisant l'API [`notification`](/fr/Add-ons/WebExtensions/API/notifications) :

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "Vous avez cliqué sur un lien&nbsp;!",
    "message": message.url
  });
}
```

Ce code d'exemple est légèrement dérivé de l'exemple [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) sur GitHub.

### Les messages en flux continu

L'envoi de messages distincts peut vite devenir lourd si de nombreux messages sont envoyés entre les scripts d'arrière plan et les scripts de contenu.

L'une des alternatives possibles est d'établir une connexion longue durée entre les deux scripts et d'utiliser cette connexion afin d'échanger des messages.

De chaque côté (contenu d'une part, arrière-plan d'autre part), les scripts possèdent un objet [`runtime.Port`](/fr/Add-ons/WebExtensions/API/runtime/Port) dont ils peuvent se servir pour échanger des messages.

Pour créer la connexion&nbsp;:

- L'un des côtés se tient à l'écoute des connexions avec [](/fr/Add-ons/WebExtensions/API/runtime/onConnect)[`runtime.onConnect`](/fr/Add-ons/WebExtensions/API/runtime/onConnect).
- L'autre côté appelle [`tabs.connect()`](/fr/Add-ons/WebExtensions/API/tabs/connect) (pour se connecter à un script de contenu) ou [`runtime.connect()`](/fr/Add-ons/WebExtensions/API/runtime/connect) (pour se connecter à un script d'arrière plan). Ces deux méthodes renvoient un objet [`runtime.Port`](/fr/Add-ons/WebExtensions/API/runtime/Port).
- Le gestionnaire d'évènement [`runtime.onConnect`](/fr/Add-ons/WebExtensions/API/runtime/onConnect) reçoit alors en argument un objet [`runtime.Port`](/fr/Add-ons/WebExtensions/API/runtime/Port) qui lui est propre.

Une fois que chaque côté possède son propre port, ils peuvent échanger en utilisant `runtime.Port.postMessage()` pour envoyer des message et `runtime.Port.onMessage` pour en recevoir.

Par exemple, dès le chargement, ce script de contenu&nbsp;:

- se connecte au script d'arrière plan et stocke l'objet `Port` dans une variable `myPort`
- écoute des messages sur `myPort`, et les enregistre.
- envoie des messages au script d'arrière plan via `myPort`, quand l'utlisateur clique sur le document.

```js
// content-script.js

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "ici le script de contenu"});

myPort.onMessage.addListener(function(m) {
  console.log("Dans le script de contenu, réception d'un message du script d'arrière-plan");
  console.log(m.greeting);
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "clic sur la page&nbsp;!"});
});
```

Le script d'arrière plan qui correspond ·

- Écoute les tentatives de connexion depuis le script de contenu.
- Quand il reçoit une tentative de connexion&nbsp;:

  - Enregistre le port dans une variable nommée `portFromCS`
  - Envoie un message au script de contenu en utilisant le port
  - Commence à écouter les messages reçus sur le port et les enregistre.

- Envoie des messages au script de contenu en utilisant `portFromCS`, quand l'utilisateur clique sur l'action navigateur de l'add-on

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "salut, script de contenu&nbsp;!"});
  portFromCS.onMessage.addListener(function(m) {
    console.log("Dans le script d'arrière-plan, réception d'un message du script de contenu.")
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function() {
  portFromCS.postMessage({greeting: "clic sur le bouton&nbsp;!"});
});
```

#### Scripts de contenu multiples

Si plusieurs scripts de contenu communiquent en même temps, vous pouvez stocker chaque connexion dans un tableau.

```js
// background-script.js

var ports = [];

function connected(p) {
  ports[p.sender.tab.id] = p;
  //...
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(function() {
  ports.forEach(p => {
      p.postMessage({greeting: "clic sur le bouton !"})
    })
});
```

## Communiquer avec la page web

Bien que les scripts de contenu ne puissent (par défaut) accéder aux objets créés par les scripts de page, ils peuvent cependant communiquer avec les scripts de page en utilisant les API [`window.postMessage`](/fr/docs/Web/API/Window/postMessage) et [`window.addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener) du DOM.

Par exemple&nbsp;:

```js
// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Message de la page"
  }, "*");
```

```js
// content-script.js

window.addEventListener("message", function(event) {
  if (event.source == window &&
      event.data &&
      event.data.direction == "from-page-script") {
    alert("Le script de contenu a reçu ce message&nbsp;: \"" + event.data.message + "\"");
  }
});
```

Pour un exemple complet et fonctionnel, [visitez la page de démo sur Github](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) et suivez les instructions.

> **Attention :** Notez que vous devez être très prudent lorsque vous interagissez avec du contenu Web non fiable de cette manière. Les extensions sont du code privilégié qui peut avoir de puissantes capacités et les pages Web hostiles peuvent facilement les amener à accéder à ces capacités.
>
> Pour donner un exemple trivial, supposons que le code du script de contenu qui reçoit le message ressemble à ceci&nbsp;:
>
> ```js
> // content-script.js
>
> window.addEventListener("message", function(event) {
>   if (event.source == window &&
>       event.data.direction &&
>       event.data.direction == "from-page-script") {
>     eval(event.data.message);
>   }
> });
> ```
>
> Maintenant, le script de page peut exécuter n'importe quel code avec tous les privilèges du script de contenu.

## Utilisation de `eval()` dans les scripts de contenu

Dans Chrome, {{jsxref("Objets_globaux/eval","eval()")}} exécute toujours le code dans le contexte du script de contenu et pas dans le contexte de la page.

Dans Firefox&nbsp;:

- Si vous appelez `eval()`, le code est exécuté dans le contexte du **script de contenu**
- Si vous appelez `window.eval()`, le code est exécute dans le contexte de la **page**.

Par exemple, considérons un script de contenu comme ceci &nbsp;:

```js
// content-script.js

window.eval('window.x = 1;');
eval('window.y = 2');

console.log(`Dans le script de contenu, window.x: ${window.x}`);
console.log(`Dans le script de contenu, window.y: ${window.y}`);

window.postMessage({
  message: "check"
}, "*");
```

Ce code crée simplement des variables x et y en utilisant `window.eval()` et `eval()` puis enregistre leurs valeurs et envoie un message à la page.

À la réception du message, le script de page enregistre les mêmes variables :

```js
window.addEventListener("message", function(event) {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`Dans le script de la page, window.x: ${window.x}`);
    console.log(`Dans le script de la page, window.y: ${window.y}`);
  }
});
```

Dans Chrome, cela produira le résultat suivant :

    Dans le script de contenu, window.x: 1
    Dans le script de contenu, window.y: 2
    Dans le script de la page, window.x: undefined
    Dans le script de la page, window.y: undefined

Dans Firefox, on aura le résultat suivant :

    Dans le script de contenu, window.x: undefined
    Dans le script de contenu, window.y: 2
    Dans le script de la page, window.x: 1
    Dans le script de la page, window.y: undefined

La même chose s'applique pour [`setTimeout()`](/fr/docs/Web/API/WindowTimers/setTimeout), [`setInterval()`](/fr/docs/Web/API/WindowTimers/setInterval), et [`Function()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function).

> **Attention :** Lorsque vous exécutez du code dans le contexte de la page, l'avertissement précédent reste nécessaire : l'environnement de la page est contrôlé par des pages web potentiellement malveillantes qui peuvent redéfinir les objets avec lesquels vous interagissez&nbsp;:
>
> ```js
> // page.js redéfinit console.log
>
> var original = console.log;
>
> console.log = function() {
>   original(true);
> }
> ```
>
> ```js
> // content-script.js appelle la version redéfinie
>
> window.eval('console.log(false)');
> ```
