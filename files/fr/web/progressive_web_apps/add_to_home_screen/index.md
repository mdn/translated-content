---
title: Ajouter à l'écran d'accueil
slug: Web/Progressive_web_apps/Add_to_home_screen
tags:
  - Ajouter à l'écran d'accueil
  - HTML
  - Manifest
  - PWA
translation_of: Web/Progressive_web_apps/Add_to_home_screen
original_slug: Web/Progressive_web_apps/ajouter_a_lecran_daccueil_a2hs
---
Ajouter à l’écran d’accueil (A2HS en abrégé) est une fonctionnalité disponible dans les navigateurs pour smartphones modernes qui permet aux développeurs d’ajouter facilement et rapidement un raccourci à leur écran d’accueil, représentant leur application Web. Ce guide explique comment utiliser A2HS et ce que vous devez faire en tant que développeur pour permettre à vos utilisateurs d’en tirer parti.

## Pourquoi A2HS?

On pense que A2HS fait partie de la philosophie des applications Web progressives : offrir aux applications Web les mêmes avantages en matière d'expérience utilisateur que les applications natives. Cela fait partie du simple geste d’accéder à une application en appuyant sur son icône sur votre écran d’accueil, puis en l’affichant proprement dans sa propre fenêtre. A2HS rend cela possible.

## Quels navigateurs prennent en charge A2HS?

A2HS est pris en charge par Mobile Chrome / Android Webview depuis la version 31, Opera pour Android depuis la version 32 et Firefox pour Android depuis la version 58 .

## Comment l'utiliser?

Nous avons écrit un exemple de site Web très simple ( voir la démo, et le code source ) qui ne fait pas grand chose, mais qui a été développé avec le code nécessaire pour pouvoir l'ajouter à un écran d'accueil. en tant qu'agent de service enregistré pour lui permettre d'être utilisé en mode hors connexion. L'exemple montre une série d'images de renard.

Si vous avez Firefox pour Android, utilisez-le pour accéder à notre démonstration à `https://mdn.github.io/pwa-examples/a2hs/` . Vous verrez des images de renard, mais plus important encore, vous verrez une icône "accueil" avec une icône plus (+) à l'intérieur: il s'agit de l'icône "Ajouter à l'écran d'accueil" affichée pour tout site doté de A2HS.

![](add-to-home-screen-icon.png)

Appuyez sur cette icône pour afficher une bannière de confirmation. Une pression sur le gros bouton + _AJOUTER À L'ÉCRAN D'ACCUEIL_ termine l'action et ajoute l'application à l'écran d'accueil. (Dans Android 8 et versions ultérieures, une boîte de dialogue d'autorisation au niveau du système "Ajouter à l'écran d'accueil" s'affiche en premier.)

![](fx-a2hs-banner.png)

Si vous avez Mobile Chrome disponible, l'expérience est légèrement différente. lors du chargement du site, une bannière d’installation apparaît vous demandant si vous souhaitez ajouter cette application à votre écran d’accueil.

![](chrome-a2hs-banner.png)

> **Note :** Pour en savoir plus sur les bannières d'installation de Chrome, consultez l'article Web Installer des bannières Web App .

Si vous choisissez de ne pas l'ajouter à votre écran d'accueil à ce stade, vous pourrez le faire ultérieurement à l'aide de l'icône _Ajouter à l'écran d'accueil_ dans le menu principal de Chrome.

Quel que soit le navigateur que vous utilisez, lorsque vous choisissez d'ajouter l'application à votre écran d'accueil, celle-ci s'affiche avec un titre abrégé, de la même manière que les applications natives.

![](a2hs-on-home-screen.png)

Cet icône ouvre le site, mais en tant que WebApp, vous ne verrez plus l'interface utilisateur du navigateur.

## Que faut-il pour utiliser A2HS?

Pour permettre à votre application d'être ajoutée à un écran d'accueil, vous devez disposer des éléments suivants:

- Un site en HTTPS - Internet est de plus en plus plus sécurisée et de nombreuses technologies modernes (A2HS incluses) ne fonctionneront que dans des contextes sécurisés.
- Avoir un fichier "manifest" contenant les champs appropriés, lié à partir de l'en-tête HTML.
- Avoir une icône disponible pour l'affichage sur l'écran d'accueil.
- Chrome exige en outre que l'application ait un agent de service enregistré (par exemple, pour pouvoir fonctionner en mode hors connexion).

### Manifest

Le "manifest" est un fichier écrit au format JSON standard et doit être placé quelque part dans le répertoire de votre application (il est préférable que le `fichier.webmanifest` soit à la racine du site) avec le nom `fichier.webmanifest` (nous avons choisi `manifest.webmanifest` ). Il contient plusieurs champs qui définissent certaines informations sur l'application Web et sur son comportement. .

> **Note :** L'extension `.webmanifest` est spécifiée dans la section Enregistrement du type de fichier, mais les navigateurs prennent aussi en charge les manifest avec d'autres extensions appropriées, par exemple `.json` .

Les champs nécessaires pour A2HS sont les suivants:

- `background_color` : spécifie une couleur d'arrière-plan à utiliser dans certains contextes d'application. Le plus pertinent pour A2HS est l'écran de démarrage qui s'affiche lorsque l'icône de l'application sur l'écran d'accueil est activée et qu'elle commence à se charger (elle ne s'affiche actuellement que lorsque des applications ont été ajoutées à l'écran d'accueil par Chrome).
- `display` : Spécifie comment l'application doit être affichée. Pour que cela ressemble à une application distincte (et pas seulement à une page Web), vous devez choisir une valeur telle que `fullscreen` (aucune interface utilisateur n'est affichée) ou `standalone` (très similaire, mais des éléments d'interface utilisateur au niveau du système tels que la barre d'état. pourrait être visible).
- `icons` : spécifie les icônes à utiliser par le navigateur pour représenter l'application à différents endroits (par exemple sur le sélecteur de tâches ou, plus important encore, sur l'écran d'accueil). Nous n'en avons inclus qu'un dans notre démo.
- `name` et `short_name` : Ces champs fournissent un nom d'application à afficher lors de la représentation de l'application à différents endroits. `name` fournit le nom complet de l'application et `short_name` fournit un nom abrégé à utiliser lorsque l'espace disponible est insuffisant pour afficher le nom complet. Nous vous conseillons de fournir les deux si le nom de votre application est long.
- `start_url` : fournit un chemin d'accès de l'application. Notez qu'il doit s'agir d'une URL pointant vers l'index du site, par rapport à l'URL du "manifest". Sachez également que Chrome en a besoin avant d'afficher la bannière d'installation, tandis que Firefox ne l'exige pas pour afficher l'icône.

Le fichier "manifest" de notre exemple ressemble à ceci:

```json
{
  "background_color": "purple",
  "description": "Shows random fox pictures. Hey, at least it isn't cats.",
  "display": "fullscreen",
  "icons": [
    {
      "src": "icon/fox-icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "name": "Awesome fox pictures",
  "short_name": "Foxes",
  "start_url": "/pwa-examples/a2hs/index.html"
}
```

### Icône

Comme indiqué dans le "manifest" ci-dessus, nous incluons une icône de 192 x 192 px. Vous pouvez inclure plus de tailles si vous le souhaitez. Android choisira la taille la plus appropriée pour chaque cas d'utilisation différent. Vous pouvez également décider d'inclure différents types d'icônes afin que les appareils puissent utiliser le meilleur qu'ils puissent (par exemple, Chrome prend déjà en charge le format WebP).

Notez que le membre de `type` dans l'objet de chaque icône spécifie le type MIME de l'icône, afin que le navigateur puisse rapidement identifier le type de l'icône, puis l'ignorer et passer à une autre icône s'il ne le prend pas en charge.

Pour ce qui est de la conception de l’icône, vous devez suivre les mêmes pratiques que vous suivriez pour n’importe quelle icône Android (voir les directives de conception d’icône Android ).

### Lier le code HTML au "manifest"

Pour terminer la configuration de votre "manifest", vous devez le référencer à partir du code HTML de la page d'accueil de votre application:

```html
< link rel = " manifest " href = "
```

Les navigateurs prenant en charge A2HS sauront où chercher votre manifeste une fois celui-ci en place.

## Qu'est-ce que A2HS ne vous donne pas?

N'oubliez pas que lorsque vous ajoutez une application à votre écran d'accueil, cela la rend simplement facilement accessible. Elle ne télécharge pas les ressources et les données de l'application sur votre appareil et ne la rend pas disponible hors connexion, ou quelque chose du genre. Pour que votre application fonctionne en mode hors connexion, vous devez utiliser l' API Service Worker pour gérer le stockage hors connexion et, si nécessaire, le stockage Web ou IndexedDB pour stocker ses données.

Dans notre exemple d'application, nous venons d'utiliser un agent de service pour stocker tous les fichiers nécessaires. Le fichier [`index.js`](https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js) est inscrit sur le site avec le bloc de code final dans le fichier [`index.js`](https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js) . Nous mettons ensuite en cache toutes les ressources du site à l'aide de l' API de cache et les servons à partir du cache plutôt que du réseau à l'aide du code [contenu](https://github.com/mdn/pwa-examples/blob/master/a2hs/sw.js) dans le fichier [sw.js.](https://github.com/mdn/pwa-examples/blob/master/a2hs/sw.js)

## A2HS sur le bureau

Bien que conçu à l'origine pour améliorer l'expérience utilisateur sur les systèmes d'exploitation mobiles, il existe également une technique pour rendre les PWA installables sur les plates-formes de bureau.

> **Note :** au moment de la rédaction de ce document, les fonctionnalités décrites ci-dessous n'étaient prises en charge que par les versions les plus récentes de Chrome: par défaut sous Windows et derrière l'indicateur `#enable-desktop-pwas` sous macOS.

### Ajout d'un bouton d'installation

Pour rendre notre PWA installable sur le bureau, nous avons d’abord ajouté un bouton à notre document pour permettre aux utilisateurs de procéder à l’installation. Ce bouton n’est pas automatiquement disponible sur les applications de bureau et l’installation doit être déclenchée par un geste de l’utilisateur:

```html
<button class="add-button">Add to home screen</button>
```

Nous lui avons ensuite donné un style simple:

```css
.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}
```

### JavaScript pour gérer l'installation

Au bas de notre [fichier `index.js`](https://github.com/mdn/pwa-examples/blob/master/a2hs/index.js) , nous avons ajouté du JavaScript pour gérer l'installation. Tout d'abord, nous déclarons une variable `deferredPrompt` (que nous expliquerons plus tard), obtenons une référence à notre bouton d'installation et le configurons pour `display: none`:

```js
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
```

Nous masquons le bouton initialement car le PWA ne sera pas disponible pour l’installation tant qu’il ne respectera pas les critères A2HS. Lorsque cela se produit, les navigateurs prenant en charge déclenchent un événement `beforeinstallprompt` . Nous pouvons ensuite utiliser un gestionnaire comme celui ci-dessous pour gérer l'installation:

```js
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
```

Ici il faut:

- Appeler `Event.preventDefault()` pour empêcher Chrome 67 et les versions antérieures d'appeler automatiquement l'invite d'installation (ce comportement a été modifié dans Chrome 68).
- Stocker l'objet événement dans la variable `deferredPrompt` afin qu'il puisse être utilisé ultérieurement pour effectuer l'installation réelle.
- Configurer le bouton  `display: block` afin qu'il apparaisse dans l'interface utilisateur sur laquelle l'utilisateur peut cliquer.
- Définir un gestionnaire de `click` pour le bouton.

Le gestionnaire de clics contient les étapes suivantes:

- Cacher à nouveau le bouton avec `display: none` - il n'est plus nécessaire une fois l'application installée.
- Utilisez la méthode `prompt()` disponible sur l'objet d'événement `beforeinstallprompt` (stocké dans `deferredPrompt` ) pour déclencher l'affichage de l'invite d'installation.
- Répondez à l'interaction de l'utilisateur avec l'invite à l'aide de la propriété `userChoice` , de nouveau disponible sur l'objet d'événement `beforeinstallprompt` .
- Définissez `deferredPrompt` sur null car il n'est plus nécessaire.

Ainsi, lorsque vous cliquez sur le bouton, l'invite d'installation apparaît.

![](chrome-desktop-a2hs-banner.png)

Si l'utilisateur sélectionne _Installer_ , l'application est installée (disponible en tant qu'application de bureau autonome) et le bouton Installer ne s'affiche plus (l'événement `onbeforeinstallprompt` ne se déclenche plus si l'application est déjà installée). Lorsque vous ouvrez l'application, celle-ci apparaît dans sa propre fenêtre:

![](a2hs-installed-desktop.png)

Si l'utilisateur sélectionne _Annuler_ , l'état de l'application revient à ce qu'il était avant le clic sur le bouton.

> **Note :** Le code de cette section provient principalement des bannières d'installation de l' application / Ajouter à l'écran d'accueil de Pete LaPage.

## Voir aussi

- Applications web progressives (PWA
- Service Worker API
- Référence du "manifest" Web
- App install banners
