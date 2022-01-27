---
title: Incompatibilités avec Chrome
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
tags:
  - Guide
  - WebExtensions
  - google chrome
translation_of: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
original_slug: Mozilla/Add-ons/WebExtensions/Incompatibilités_Chrome
---
{{AddonSidebar}}

Les extensions construites à l'aide des API WebExtension sont conçues afin d'être compatibles avec les extensions Chrome et Opera. Les extensions écrites dans ces navigateurs devraient fonctionner, autant que possible, avec très peu de changement dans Firefox.

Toutefois, il existe certaines différences significatives entre Chrome, Firefox et Edge et notamment :

- La prise en charge des API JavaScript est hétérogène entre les navigateurs. Voir la page [Compatibilité des navigateurs avec les API JavaScript WebExtension](/fr/Add-ons/WebExtensions/Compatibilité_navigateurs_API_JavaScript) pour plus de détails.
- La prise en charge des clés du fichier `manifest.json` varie entre les navigateurs. Pour plus de détails, voir la section [Compatibilité des navigateurs de la page manifest.json](/fr/Add-ons/WebExtensions/manifest.json#Compatibilité_des_navigateurs).
- Pour Chrome, les API JavaScript sont accessibles sous l'espace de noms `chrome`. Pour Firefox et Edge, elles sont accessibles sous l'espace de noms `browser`. (cf. [bug Chrome 798169](https://bugs.chromium.org/p/chromium/issues/detail?id=798169))
- Pour Chrome et Edge, les API asynchrones sont implémentées avec des _callbacks_. Pour Firefox, les API asynchrones sont implémentées avec des [promises](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses). (cf.[bug Chrome 328932](https://bugs.chromium.org/p/chromium/issues/detail?id=328932))

La suite de cette page détaille ces problèmes ainsi que d'autres points d'incompatibilité.

## Les API JavaScript

### Les _callbacks_ et l'espace de noms chrome

Dans Chrome, les extensions peuvent accéder aux API JavaScript privilégiées à l'aide de l'espace de noms `chrome` :

```js
chrome.browserAction.setIcon({path: "path/to/icon.png"});
```

Les WebExtensions accèdent aux API équivalentes à l'aide de l'espace de noms `browser` :

```js
browser.browserAction.setIcon({path: "path/to/icon.png"});
```

Beaucoup d'API sont asynchrones. Dans Chrome, les API asynchrones utilisent des fonctions de rappel (_callback_) pour renvoyer des valeurs et {{WebExtAPIRef("runtime.lastError")}} pour communiquer les erreurs :

```js
function logCookie(c) {
  if (chrome.extension.lastError) {
    console.error(chrome.extension.lastError);
  } else {
    console.log(c);
  }
}

chrome.cookies.set(
  {url: "https://developer.mozilla.org/"},
  logCookie
);
```

Les API WebExtensions équivalentes utilisent plutôt [les promesses](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses) :

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set(
  {url: "https://developer.mozilla.org/"}
);
setCookie.then(logCookie, logError);
```

### Firefox : les espaces de noms `chrome` et `browser`

Afin d'aider au portage, l'implémentation de Firefox des WebExtensions prend en charge l'espace de noms `chrome`, l'utilisation des _callbacks_, l'espace de noms `browser` et l'utilisation des promesses. Cela signifie que de nombreuses extensions Chrome fonctionneront simplement dans Firefox sans aucune modification. Cependant, cela ne fait pas partie de la norme WebExtension et peut ne pas être pris en charge par l'ensemble des navigateurs compatibles.

Si vous écrivez votre extension en utilisant `browser` et les promesses, l'équipe de Firefox a également développé une prothèse (_polyfill_) qui lui permettra de fonctionner sur Chrome : <https://github.com/mozilla/webextension-polyfill>.

### Les API partiellement prises en charge

La page sur la [compatibilité des navigateurs pour les API JavaScript WebExtension](/fr/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) inclut l'ensemble des tableaux de compatibilité. Lorsqu'il existe des réserves autour du support d'un élément d'API donné, ceci est indiqué dans ces tableaux avec un astérisque "\*". Ces réserves sont détaillées la page de documentation respective de l'API.

Ces tableaux sont générés à partir des données de compatibilité stockées en tant que  [fichiers JSON dans GitHub](https://github.com/mdn/browser-compat-data).

Le reste de cette section décrit les problèmes de compatibilité qui ne sont pas encore pris en compte dans ces tableaux.

#### notifications

- Pour `notifications.create()`, lorsqu'on utilise le [type](/fr/Add-ons/WebExtensions/API/notifications/TemplateType) `"basic"`, l'icône `iconUrl` est optionnelle dans Firefox mais obligatoire dans Chrome.
- Les notifications sont effacées immédiatement lorsque l'utilisateur clique dessus. Ce n'est pas le cas dans Chrome.
- Si vous appelez `notifications.create()` plusieurs fois et rapidement, Firefox peut finir par ne pas afficher de notification du tout. Attendre de faire d'autres appels dans le _callback_ `chrome.notifications.create()` ne suffit pas (le délai n'est pas suffisamment long).

#### proxy

- [Cette API est complètement différente de celle conçue par Chrome. Avec l'API de Chrome, une extension peut enregistrer un fichier PAC, mais peut également définir des règles de proxy explicites. Comme cela est également possible en utilisant les fichiers PAC étendus, cette API ne prend en charge que l'approche de fichier PAC. Étant donné que cette API est incompatible avec l'API `proxy` de Chrome, cette API est uniquement disponible via l'espace de nom `browser`.](/fr/Add-ons/WebExtensions/API/proxy)

#### tabs

- Dans Firefox, les URL relatives passées à `tabs.executeScript()` ou `tabs.insertCSS()` sont résolues par rapport à l'URL de la page actuelle. Dans Chrome, ces URL sont résolues par rapport à l'URL de base de l'extension. Pour travailler pour l'ensemble des navigateurs, il est donc nécessaire d'indiquer le chemin comme URL absolue, en commençant par la racine de l'extension, comme ceci:

      /chemin/vers/script.json

- Dans Firefox, interroger les onglets avec des URL avec `tabs.query()` nécessitent une permission `"tabs"`. Dans Chrome, il est possible de le faire sans la permission `"tabs"` mais cela limitera les résultats aux onglets dont les URL correspondent aux permissions de l'hôte.
- Dans Firefox, la promesse `tabs.remove()` est tenue après l'évènement `beforeunload` alors que pour Chrome, le _callback_ n'attend pas `beforeunload`.

#### webRequest

- Dans Firefox, les requêtes ne peuvent être redirigées que si l'URL originale utilise le schéma `http:` ou `https:`.
- Dans Firefox, les évènements ne sont pas déclenchés pour les requêtes système (mise à jour d'extensions, suggestions dans la barre de recherche). À partir de Firefox 57, Firefox fait une exception pour les extensions qui doivent intercepter {{WebExtAPIRef("webRequest.onAuthRequired")}} afin d'autoriser le proxy. Pour plus d'informations, voir la page {{WebExtAPIRef("webRequest.onAuthRequired")}}.
- Dans Firefox, si une extension souhaite rediriger une URL publique vers [une page d'extension](/fr/Add-ons/WebExtensions/user_interface/pages_web_incluses), le fichier `manifest.json` de l'extension doit contenir une clé [`web_accessible_resources`](/fr/Add-ons/WebExtensions/manifest.json/web_accessible_resources) qui indique l'URL de la page de l'extension. On notera que n'importe quel site pourra alors lier ou rediriger vers cette URL et que les extensions doivent considérer n'importe quelle entrée (données provenant d'une requête POST par exemple) comme potentiellement dangereuse.
- Dans Firefox, à partir de Firefox 52, certaines API `browser.webRequest.*` renvoient des promesses qui résolvent `webRequest.BlockingResponse` de façon asynchrone. Pour Chrome, seule `webRequest.onAuthRequired` prend en charge une gestion asynchrone de `webRequest.BlockingResponse` avec `'asyncBlocking'`.

#### windows

- Dans Firefox, `onFocusChanged` sera déclenché plusieurs fois pour un changement de focus donné.

### API non prises en charge

#### declarativeContent

l'API `declarativeContent` de Chrome [n'a pas encore été implémentée](https://bugzilla.mozilla.org/show_bug.cgi?id=1435864) in Firefox.

Firefox [ne supportera pas](https://bugzilla.mozilla.org/show_bug.cgi?id=1323433#c16) l'API `declarativeContent.RequestContentScript`, qui est rarement utilisée et n'est pas disponible dans les versions stables de Chrome.

### Incompatibilités diverses

#### Gestion des URL dans CSS

Firefox résout les URL dans les fichiers CSS injectés par rapport au fichier CSS lui-même, plutôt que dans la page dans laquelle il est injecté.

#### Incompatibilités supplémentaires

Firefox ne prend pas en charge [`alert()`](/fr/docs/Web/API/Window/alert), [`confirm()`](/fr/docs/Web/API/Window/confirm) ou [`prompt()`](/fr/docs/Web/API/Window/prompt) à partir des pages d'arrière-plan.

#### web_accessible_resources

Dans Chrome, lorsqu'une ressource est répertoriée dans `web_accessible_resources`, elle est accessible via `chrome-extension://<id-de-l-extension>/<chemin/vers/la/ressource>`. L'identifiant de l'extension est fixé pour une extension donnée.

Firefox l'implémente différemment en utilisant un UUID aléatoire qui change pour chaque instance de Firefox : `moz-extension://<UUID-aleatoire>/<chemin/vers/la/ressource>`. Cette façon aléatoire peut empêcher certaines choses, comme ajouter l'URL de votre extension spécifique à la politique CSP d'un autre domaine.

#### La propriété `key` du manifeste

Lorsque vous travaillez avec une extension décompressée, Chrome permet d'ajouter une [propriété `key`](https://developer.chrome.com/extensions/manifest/key) au manifeste afin de fixer l'identifiant de l'extension sur différentes machines. Ceci s'avère notamment utile lorsqu'on travaille avec `web_accessible_resources`. Puisque Firefox utilise des UUID aléatoires pour les `web_accessible_resources`, cette propriété n'est pas prise en charge.

#### Les requêtes sont relatives au contexte de l'extension et pas à celui du contenu de la page

Dans Chrome, lorsque la requête est appelée (par exemple, en utilisant [`fetch()`](/fr/docs/Web/API/Fetch_API/Using_Fetch)) pour une URL relative comme `/api` du script de contenu, elle sera envoyée à `https://example.com/api`. Dans Firefox, vous devez fournir des URL absolues.

## Les clés de `manifest.json`

La page relative à [`manifest.json`](/fr/Add-ons/WebExtensions/manifest.json) contient un tableau décrivant la compatibilité des navigateurs pour les différentes clés du fichier. Lorsqu'il y a des mises en garde concernant le support d'une clé donnée, ceci est indiqué dans le tableau avec un astérisque "\*" et de plus amples informations sont fournies dans la page décrivant la clé.

Ces tables sont générées à partir des données de compatibilité stockées en tant que [fichiers JSON dans GitHub](https://github.com/mdn/browser-compat-data).

## Communication avec le système natif

### Arguments de messagerie basée sur la connexion

Sur Linux et Mac, Chrome passe un argument sur l'application natif, qui est l'origine de l'extension qui l'a lancée, sous la forme : `chrome-extension://[extensionID]`. Cela permet à l'application d'identifier l'extension.

Sur Windows, Chrome passe deux arguments: le premier est l'origine de l'extension, et le second est un handle de la fenêtre native de Chrome qui a démarré l'application.

### allowed_extensions

Dans Chrome, la clé de manifeste `allowed_extensions` s'appelle `allowed_origins`.

### Emplacement du fichier de manifeste d'application

Chrome s'attend à trouver le manifeste de l'application dans un autre endroit. Se référer à la documentation Chrome pour [l'emplacement de l'hôte de messagerie natif](https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location).
