---
title: Votre deuxième WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---

{{AddonSidebar}}

Si vous avez lu l'article [votre première extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension), vous avez déjà une idée de la manière d'écrire une extension. Dans cet article, nous allons écrire une extension légèrement plus complexe qui illustre un peu plus les API.

L'extension ajoute un nouveau bouton à la barre d'outils Firefox. Lorsque l'utilisateur clique sur le bouton, nous affichons une fenêtre contextuelle qui leur permet de choisir un animal. Une fois l'animal choisi, l'extension remplace le contenu de la page actuelle par une image de l'animal choisi.

Pour implémenter ce module, il nous faut :

- **Définir une [action du navigateur (_browser action_)](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action), matérialisée par un bouton dans la barre d'outils de Firefox**. Pour ce bouton, nous avons besoin :

  - d'une icône, nommée "beasts-32.png"
  - d'une popup qui s'ouvrira lorsqu'on cliquera sur le bouton. La popup sera constituée d'HTML, de CSS et de JavaScript.

- **Définir l'icône de l'extension,** nommée "beasts-48.png". Elle apparaîtra dans le gestionnaire de module.
- **Écrire un script de contenu (_content script_), "beastify.js" qui sera injecté dans les pages web**. C'est le code qui va effectivement transformer les pages.
- **Packager les images d'animaux, afin de remplacer les images de la page web**. Nous définirons les images comme étant des ressources accessibles par le Web de sorte que la page web puisse y accéder.

Voici une visualisation globale possible de la structure du module :

![](untitled-1.png)

Il s'agit d'une extension simple mais qui démontre plusieurs concepts élémentaires de l'API des WebExtensions :

- Ajout d'un bouton à la barre d'outils
- Définition d'une popup à l'aide de HTML, CSS et JavaScript
- Injection des scripts de contenu dans les pages web
- Communication entre les scripts de contenu et le reste de l'extension
- Empaquetage de ressources comme les images dans le module afin que celles-ci puissent ensuite être utilisées par les pages web

Le [code source complet du module est disponible sur GitHub](https://github.com/mdn/webextensions-examples/tree/master/beastify).

Afin de tester cette extension, vous aurez besoin de Firefox 45 ou d'une version ultérieure.

## Écrire l'extension

Créez un nouveau répertoire et positionnez-vous dedans :

```bash
mkdir beastify
cd beastify
```

### manifest.json

Créez un nouveau fichier nommé "manifest.json" directement dans le répertoire "beastify" et saisissez-y le contenu suivant :

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Ajoute une icône à la barre d'outil pour une action navigateur. Cliquez sur le bouton pour choisir une bête. Le contenu de l'onglet actif sera alors remplacé par une image de la bête choisie. Voir https://developer.mozilla.org/fr/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": ["activeTab"],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]
}
```

- Les trois premières clés : [`manifest_version`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), et [`version`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), sont obligatoires et contiennent les métadonnées élémentaires nécessaires à l'extension.
- [`description`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) and [`homepage_url`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sont optionnelles mais recommandées : elles apportent des informations utiles à propos de l'extension.
- [`icons`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) est optionnelle mais recommandée : elle permet de spécifier l'icône du module qui s'affichera dans le gestionnaire d'extension.
- [`permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) indique les permissions nécessaires à cette extension. Ici, uniquement [la permission `activeTab`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) est demandée.
- [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spécifie le bouton de la barre d'outil. Nous fournissons trois informations :

  - `default_icon` est obligatoire et référence l'icône du bouton
  - `default_title` est optionelle et s'affichera dans une bulle d'aide
  - `default_popup` est nécessaire si vous souhaitez qu'une popup s'affiche lorsque l'utilisateur clique sur le bouton. C'est notre cas, nous avons donc défini cette clé et l'avons faite pointer sur un fichier HTML inclus dans le module.

- [`web_accessible_resources`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) liste les fichiers qui doivent être accessibles aux pages web. Comme cette extension remplace le contenu de la page web par les images incluses dans cette extension, il faut les rendre accessibles à la page.

Il est à noter que tous les chemins sont relatifs au fichier manifest.json.

### L'icône

L'extension doit posséder une icône qui sera affichée dans le catalogue des extensions et dans la liste des extensions du navigateur (vous pouvez afficher le gestionnaire en ouvrant l'URL "about:addons"). Le fichier manifest.json a déclaré une icône pour la barre d'outils, "icons/beasts-48.png".

Créez le répertoire "icons" et enregistrez-y une icône nommée "beasts-48.png". Vous pouvez utiliser [une image de notre exemple](https://github.com/mdn/webextensions-examples/raw/master/beastify/icons/beasts-48.png), provenant du jeu d'icônes de [Aha-Soft's Free Retina](https://www.iconfinder.com/iconsets/free-retina-icon-set) et utilisable selon les termes de sa [licence](http://www.aha-soft.com/free-icons/free-retina-icon-set/).

Si vous décidez de fournir votre propre icône, sa taille devra être de 48 pixels par 48 pixels. Il vous est aussi possible de fournir une icône de taille 96 pixels par 96 pixels, adaptée aux affichages haute résolution, et, devra dans ce cas, être spécifiée par la propriété `96` de l'objet `icons` du manifeste :

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Le bouton de la barre d'outils

Une icône est nécessaire pour le bouton de la barre d'outils et le manifeste déclare une icône "icons/beasts-32.png" pour la barre d'outils.

Enregistrez une icône nommée "beasts-32.png" dans le répertoire "icons". Vous pouvez utiliser [une image de notre exemple](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png), provenant du jeu d'icône [IconBeast Lite icon](http://www.iconbeast.com/free) et utilisable selon les termes de sa [licence](http://www.iconbeast.com/faq/).

Si vous ne fournissez pas de popup, alors un évènement `click` est propagé au contexte de l'extension lorque l'utilisateur clique sur le bouton. Si une popup est fournie, l'évènement `click` n'est pas propagé, mais la popup fournie par l'extension s'ouvrira à la place. C'est ce que nous voulons faire ici, créons cette popup.

### La popup

Le but de la popup est de permettre à l'utilisateur de choisir une des trois bêtes.

Créez un nouveau répertoire nommé "popup" à la racine de l'extension. Ce sera l'emplacement du code de la popup. La popup sera constituée de trois fichiers :

- **`choose_beast.html`** qui définit le contenu du panneau
- **`choose_beast.css`** qui met en forme le contenu de ce panneau
- **`choose_beast.js`** qui gére le choix de l'utilisateur en exécutant un script de contenu dans l'onglet actif du navigateur

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

Voici le contenu du fichier HTML :

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <div class="button beast">Grenouille</div>
      <div class="button beast">Tortue</div>
      <div class="button beast">Serpent</div>
      <div class="button reset">Réinitialiser</div>
    </div>
    <div id="error-content" class="hidden">
      <p>Cette page ne peut être transformée.</p>
      <p>Veuillez essayer une autre page.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

On a un élément [`<div>`](/fr/docs/Web/HTML/Element/div) dont l'identifiant (`id`) vaut `"popup-content"` et qui contient un élément pour chaque choix d'animal. On a également un autre `<div>` avec l'identifiant `"error-content"` et une classe `"hidden"`. Nous utiliserons cet élément au cas où il y ait un problème à l'initialisation de la popup.

Il est à noter que le ficher CSS et le fichier JS sont inclus depuis ce fichier, tout comme une page web normale.

#### choose_beast.css

Le CSS fixe la taille de la popup, s'assure que les trois choix remplissent l'espace et les met en forme de façon élémentaire. C'est aussi le CSS qui masque les éléments avec `class="hidden"`, cela signifie que l'élément `<div>` `"error-content"` sera masqué par défaut :

```css
html,
body {
  width: 100px;
}

.hidden {
  display: none;
}

.button {
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
}

.beast:hover {
  background-color: #cff2f2;
}

.beast {
  background-color: #e5f2f2;
}

.reset {
  background-color: #fbfbc9;
}

.reset:hover {
  background-color: #eaea9d;
}
```

#### choose_beast.js

```js
/**
 * On utilise CSS pour masquer tout ce qui se trouve sur la
 * page sauf les éléments avec la classe "beastify-image".
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * On écoute les clics sur les boutons et on envoie
 * un message approprié au script de contenu dans la page
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * Selon le nom de la bête, on fournit l'URL vers
     * l'image correspondante.
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Grenouille":
          return browser.runtime.getURL("beasts/frog.jpg");
        case "Serpent":
          return browser.runtime.getURL("beasts/snake.jpg");
        case "Tortue":
          return browser.runtime.getURL("beasts/turtle.jpg");
      }
    }

    /**
     * On insère le CSS qui masque le contenu de la page
     * dans l'onglet actif puis on récupère l'URL de la bête
     * avant d'envoyer un message "beastify" au script de contenu
     * dans l'onglet actif.
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({ code: hidePage }).then(() => {
        let url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url,
        });
      });
    }

    /**
     * On retire le CSS qui masque le contenu de l'onglet actif
     * et on envoie un message "reset" au script de contenu dans
     * l'onglet actif.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({ code: hidePage }).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * On affiche l'erreur dans la console.
     */
    function reportError(error) {
      console.error(`Beastify impossible : ${error}`);
    }

    /**
     * On obtient l'onglet actif et on appelle
     * "beastify()" ou "reset()" lorsque c'est pertinent.
     */
    if (e.target.classList.contains("beast")) {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(beastify)
        .catch(reportError);
    } else if (e.target.classList.contains("reset")) {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(reset)
        .catch(reportError);
    }
  });
}

/**
 * Lors d'une erreur d'exécution du script, on affiche le
 * message d'erreur dans la popup et on masque l'interface
 * utilisateur normale.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(
    `Erreur d'exécution du script de contenu beastify : ${error.message}`,
  );
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs
  .executeScript({ file: "/content_scripts/beastify.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
```

Pour commencer, le script de la popup exécute un script de contenu dans l'onglet actif dès que la popup est chargée grâce à la méthode [`browser.tabs.executeScript()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript). Si l'exécution du script est réussie, le script de contenu sera chargé dans la page jusqu'à ce que l'onglet soit fermé ou que l'utilisateur navigue sur une autre page.

On peut avoir des erreurs lors de l'appel à `browser.tabs.executeScript()` car il est impossible d'exécuter des scripts de contenu sur certaines pages. On ne peut, par exemple, pas en exécuter pour certaines pages privilégiées comme about:debugging ou sur des pages du domaine [addons.mozilla.org](https://addons.mozilla.org/). Si un tel échec se produit, `reportExecuteScriptError()` masquera l'élément avec `"popup-content"` et affichera celui avec `"error-content"` puis enregistrera une erreur dans [la console](https://extensionworkshop.com/documentation/develop/debugging/).

Si l'exécution du script de contenu réussit, la méthode `listenForClicks()` est appelée. Celle-ci permet d'écouter les clics sur la popup.

- Si le clic a lieu sur un bouton avec `class="beast"`, on appelle `beastify()`.
- Si le clic a lieu sur un bouton avec `class="reset"`, on appelle `reset()`.

La fonction `beastify()` fait trois choses :

- Correspondre le bouton qui a reçu le clic avec l'URL d'une image correspondant à la bête choisie
- Masquer tout le contenu de la page en injectant du CSS avec [`browser.tabs.insertCSS()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- Envoyer un message "beastify" au script de contenu avec [`browser.tabs.sendMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) pour lui demander de transformer la page en lui passant l'URL de l'image pour la bête sélectionnée.

La fonction `reset()` annule la transformation de l'onglet courant en :

- Retirant le CSS ajouté grâce à [`browser.tabs.removeCSS()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS)
- Envoyant un message "reset" au script de contenu pour lui demander de réinitialiser la page.

### Le script de contenu (_content script_)

Créez un nouveau répertoire sous la racine du module nommé "content_scripts" et créez un nouveau fichier nommé "beastify.js", contenant :

```js
(function () {
  /**
   * On vérifie et on initialise une variable globale
   * permettant de s'assurer que le script ne fera rien
   * s'il est injecté plusieurs fois sur la page.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Selon une URL fournie, on retire les éventuelles bêtes
   * déjà ajoutées et on crée un élément img
   * qui pointe vers l'image indiquée par l'URL et on insère
   * le nœud dans le document.
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * On retire toute bête présente sur la page.
   */
  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * On écoute les messages du script d'arrière-plan pour
   * déclencher "insertBeast()" ou "removeExistingBeasts()".
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });
})();
```

La première chose que fait le script de contenu est de vérifier une variable globale `window.hasRun` : si elle est déjà définie, le script rend la main et sinon, il définit `window.hasRun` puis continue. On fait ceci pour éviter que la popup exécute un script de contenu à chaque fois que l'utilisateur ouvre la popup (y compris pour le même onglet) afin d'éviter d'avoir plusieurs instances du script dans le même onglet. Si un utilisateur ouvre plusieurs fois la popup, on doit s'assurer que c'est bien la première instance du script qui gère ce qui se passe.

Après ça, on voit plus loin que le script de contenu utilise [`browser.runtime.onMessage`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Cela permet de faire le lien avec le script de popup qui envoyait deux messages : "beastify" et "reset".

- Si le message est "beastify", on s'attend à ce que celui-ci contienne une URL pointant vers une image. On supprime alors toute image de bête ayant été placée par d'éventuels appels précédents puis on construit et on ajoute un élément [`<img>`](/fr/docs/Web/HTML/Element/Img) dont l'attribut `src` est défini avec l'URL pointant vers l'image de la bête sélectionnée.
- Si le message est "reset", on retire toute image de bête ayant été ajoutée.

### Les bêtes

Enfin, nous devons inclure les images d'animaux.

Créez un nouveau répertoire nommé "beasts", et ajoutez-y les trois images, nommées de façon appropriée. Vous pouvez récupérer les images du [dépôt GitHub](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts), ou bien ci-après :

![](frog.jpg)![](snake.jpg)![](turtle.jpg)

## Test

D'abord, vérifiez de nouveau que les bons fichiers sont au bon endroit :

```
beastify/

  beasts/
    frog.jpg
    snake.jpg
    turtle.jpg

  content_scripts/
    beastify.js

  icons/
    beasts-32.png
    beasts-48.png

  popup/
    choose_beast.css
    choose_beast.html
    choose_beast.js

  manifest.json
```

A partir de Firefox version 45, il est possible d'installer les WebExtensions temporairement.

Ouvrez "about:debugging" dans Firefox, cliquez sur "Charger un module complémentaire temporaire", et choisissez le fichier manifest.json. Vous devriez voir apparaitre l'icône du module dans la barre d'outils de Firefox :

{{EmbedYouTube("sAM78GU4P34")}}

Ouvrez une page web et cliquez sur l'icône, sélectionnez une bête et observez la page web se modifier :

{{EmbedYouTube("YMQXyAQSiE8")}}

## Développement depuis la ligne de commande

Il est possible d'automatiser l'installation temporaire de modules, étape par étape en utilisant l'outil [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) tool. Essayez ainsi :

```bash
cd beastify
web-ext run
```

## Et ensuite ?

Maitenant que vous avez créé une WebExtension avancée pour Firefox, vous pouvez :

- [Explorer l'anatomie d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Explorer les exemples d'extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Découvrir ce dont vous avez besoin pour développer, tester et publier votre extension](/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_)
- [Approfondir votre apprentissage](/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_#continuez_votre_expérience_d'apprentissage).
