---
title: Ajouter un bouton à la barre d'outils
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

Les boutons de la barre d'outils sont l'un des principaux composants de l'interface utilisateur disponibles pour les extensions. Les boutons de la barre d'outils se trouvent dans la barre d'outils principale du navigateur et contiennent une icône. Lorsque l'utilisateur·ice clique sur l'icône, une des deux choses peut arriver&nbsp;:

- Si vous avez défini une fenêtre intrusive (<i lang="en">popup</i> en anglais) pour l'icône, la fenêtre intrusive s'affiche. Les fenêtres intrusives sont des boîtes de dialogue transitoires définies à l'aide de HTML, CSS et JavaScript.
- Si vous n'avez pas défini de fenêtre intrusive, un évènement de clic est généré, que vous pouvez écouter dans votre code et effectuer un autre type d'action en réponse à.

Avec les API WebExtension, ce type de bouton est appelé «&nbsp;action du navigateur&nbsp;» et est configuré comme suit&nbsp;:

- La clé de manifeste [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) est utilisée pour définir le bouton.
- L'API JavaScript [`browserAction`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) est utilisée pour écouter les clics et modifier le bouton ou effectuer des actions dans votre code.

## Un bouton simple

Dans cette section, nous créons une extension qui ajoute un bouton à la barre d'outils. Lorsque l'utilisateur·ice clique sur le bouton, nous ouvrons <https://developer.mozilla.org> dans un nouveau onglet.

Tout d'abord, créez un nouveau dossier, «&nbsp;bouton&nbsp;», et créez un fichier appelé «&nbsp;manifest.json&nbsp;» à l'intérieur avec le contenu suivant&nbsp;:

```json
{
  "description": "Démonstration des boutons de la barre d'outils",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

Cela définit que nous avons un script en [arrière‐plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#scripts_darrière-plan) nommé «&nbsp;background.js&nbsp;», et une action du navigateur (bouton) et une action du navigateur (bouton) dont les icônes vont vivre dans le répertoire «&nbsp;icônes&nbsp;».

Ensuite, créez le répertoire «&nbsp;icônes&nbsp;» à l'intérieur du répertoire «&nbsp;bouton&nbsp;», et enregistrez-y les deux icônes ci-dessous&nbsp;:

**«&nbsp;page-16.png&nbsp;»&nbsp;:**

![« Icône de 16 pixels d'une feuille de papier lignées »](page-16.png)

**«&nbsp;page-32.png&nbsp;»&nbsp;:**

![« Icône de 32 pixels d'une feuille de papier lignées »](page-32.png)

> [!NOTE]
> Ces icônes proviennent de l'ensemble d'icônes «&nbsp;bitsies!&nbsp;» sur iconfinder.com créé par Recep Kütük.

Nous avons deux icônes afin de pouvoir utiliser la plus grande sur les écrans haute densité. Le navigateur se charge de sélectionner la meilleure icône pour l'affichage actuel.

Ensuite, créer «&nbsp;background.js&nbsp;» dans le dossier racine de votre extension, puis donnez lui le contenu suivant&nbsp;:

```js
function ouvrirPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(ouvrirPage);
```

Cela écoute l'évènement de clic de l'action du navigateur&nbsp;; Lorsque l'évènement se déclenche, la fonction `ouvrirPage()` est exécutée, ce qui ouvre la page définie à l'aide de l'API [`tabs`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs).

A ce point, l'extension complète doit ressembler à ceci&nbsp;:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Maintenant [installer la WebExtension <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) et cliquez sur le bouton&nbsp;:

![Le bouton de la barre d'outils ajouté par l'extension](toolbar_button.png)

## Ajout d'une fenêtre intrusive

Essayons d'ajouter une fenêtre intrusive au bouton. Remplacez le contenu du `manifest.json` par ceci&nbsp;:

```json
{
  "description": "Démonstration des boutons de la barre d'outils",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "browser_action": {
    "browser_style": true,
    "default_popup": "popup/choose_page.html",
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

Nous avons apporté deux modifications par rapport à la version d'origine&nbsp;:

- nous avons supprimé la référence à «&nbsp;background.js&nbsp;», car nous allons désormais gérer la logique de l'extension dans le script de la fenêtre intrusive (vous pouvez utiliser à la fois background.js et une fenêtre intrusive, mais nous n'en avons pas besoin dans ce cas précis).
- ajouté `"default_popup": "popup/choose_page.html"`, ce qui indique au navigateur que cette action va désormais afficher une fenêtre intrusive lorsqu'on clique dessus, dont le document se trouve à l'emplacement «&nbsp;popup/choose_page.html&nbsp;».

Il nous faut donc maintenant créer cette fenêtre contextuelle. Créez un répertoire nommé «&nbsp;popup&nbsp;», puis créez-y un fichier nommé «&nbsp;choose_page.html&nbsp;». Donnez-lui le contenu suivant&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_page.css" />
  </head>
  <body>
    <div class="choix-page">developer.mozilla.org</div>
    <div class="choix-page">support.mozilla.org</div>
    <div class="choix-page">addons.mozilla.org</div>
    <script src="choose_page.js"></script>
  </body>
</html>
```

Vous pouvez voir qu'il s'agit d'une page HTML normale contenant trois éléments HTML {{HTMLElement ("div")}}, chacun avec le nom d'un site Mozilla à l'intérieur. Il comprend également un fichier CSS et un fichier JavaScript, que nous ajoutons ensuite.

Créez un fichier appelé «&nbsp;choose_page.css&nbsp;» dans le répertoire «&nbsp;popup&nbsp;» et donnez‐lui ce contenu&nbsp;:

```css
html,
body {
  width: 300px;
}

.choix-page {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
}

.choix-page:hover {
  background-color: #cff2f2;
}
```

C'est juste un peu d'habillage pour notre fenêtre intrusive.

Ensuite, créez un fichier «&nbsp;choose_page.js&nbsp;» dans le répertoire «&nbsp;popup&nbsp;» et donnez‐le à ces contenus&nbsp;:

```js
document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("choix-page")) {
    return;
  }

  const pageChoisie = `https://${event.target.textContent}`;
  browser.tabs.create({
    url: pageChoisie,
  });
});
```

Dans notre JavaScript, nous écoutons les clics sur les choix contextuels. Nous vérifions d'abord si le clic a atterri sur l'un des choix de la page&nbsp;; Sinon, nous ne faisons rien d'autre. Si le clic atterrit sur un choix de page, nous construisons une URL à partir de celui‐ci, et ouvrons un nouvel onglet contenant la page correspondante. Notez que nous pouvons utiliser les API WebExtension dans les scripts contextuels, tout comme nous le pouvons dans les scripts en arrière‐plan.

La structure finale de l'extension doit ressembler à ceci&nbsp;:

```plain
button/
    icons/
        page-16.png
        page-32.png
    popup/
        choose_page.css
        choose_page.html
        choose_page.js
    manifest.json
```

Maintenant [rechargez l'extension <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading-a-temporary-extension), cliquez à nouveau sur le bouton, puis essayez de cliquer sur les options proposées dans la fenêtre intrusive&nbsp;:

![Le bouton de la barre d'outils ajouté par l'extension, avec une fenêtre intrusive](toolbar_button_with_popup.png)

## Actions de page

Les [actions de page](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) sont comme les actions du navigateur, mais qui ne sont pertinentes que pour les pages particulières, plutôt que sur le navigateur dans son ensemble.

Alors que les actions du navigateur sont toujours affichées, les actions de la page ne sont affichées que dans les onglets où elles sont pertinentes. Les boutons d'action de la page sont affichés dans la barre d'URL, plutôt que dans la barre d'outils du navigateur.

## En apprendre plus

- La clé de manifeste [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- L'API [`browserAction`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)
- Exemples d'action de navigateur&nbsp;:
  - [beastify <sup>(angl.)</sup>](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it! <sup>(angl.)</sup>](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour <sup>(angl.)</sup>](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [open-my-page-button <sup>(angl.)</sup>](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

<!---->

- La clé de manifeste [`page_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- L'API [`pageAction`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)
- Exemples d'action de page&nbsp;:
  - [chill-out <sup>(angl.)</sup>](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
