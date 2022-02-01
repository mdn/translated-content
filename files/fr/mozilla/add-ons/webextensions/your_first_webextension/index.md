---
title: Votre première WebExtension
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
tags:
  - Add-ons
  - Extensions
  - Guide
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---
{{AddonSidebar}}

> **Note :** Si vous connaissez déjà les concepts de base des extensions de navigateur, vous pouvez directement consulter [afin de voir comment les fichiers d'extension sont assemblés](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Ensuite, utilisez la [documentation de référence](/fr/docs/Mozilla/Add-ons/WebExtensions#reference) pour commencer la construction de votre extension. Visitez l'[atelier sur les extensions de Firefox](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension) pour en savoir plus sur le processus de test et de publication des WebExtensions pour Firefox.

Cet article vous montre comment créer une extension Firefox, du début à la fin. L'extension ajoute une bordure de couleur rouge sur toutes les pages chargées depuis le site "mozilla.org" ou n'importe lequel de ses sous-domaines.

Le code source de cet exemple est disponible sur GitHub : <https://github.com/mdn/webextensions-examples/tree/master/borderify>.

Pour commencer, il vous faut Firefox (dans la version 45 ou avec une version supérieure).

## Écriture de l'extension

Créez un nouveau répertoire et déplacez vous à l'intérieur. Par exemple, dans votre ligne de commande/terminal vous pourriez le faire comme ceci :

```bash
mkdir borderify
cd borderify
```

### manifest.json

Créez un nouveau fichier nommé `manifest.json` directement dans le répertoire `borderify` et tapez-y le contenu suivant :

```json
{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Ajoute une bordure rouge pleine sur l'ensemble des pages web mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}
```

- Les trois premières clés : [`manifest_version`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), et [`version`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) sont obligatoires et contiennent des métadonnées fondamentales nécessaires au module.
- [`description`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) est optionnelle, mais recommandée : elle s'affiche dans le gestionnaire de module.
- [`icons`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) est optionnelle, mais recommandée : elle permet d'établir l'icône du module qui s'affichera dans le gestionnaire de module.

La clé la plus intéressante ici est [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), qui demande à Firefox de charger un script dans toutes les pages dont l'URL correspond à un motif de correspondance de domaines spécifique. Dans notre cas, nous demandons à Firefox de charger un script appelé `borderify.js` dans toutes les pages HTTP ou HTTPS du domaine "mozilla.org" et tous ses sous-domaines.

- [En savoir plus sur les scripts de contenu.](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [En savoir plus sur les motifs de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> **Attention :** [Dans certaines situations, vous devez établir un identifiant pour votre extension](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Si vous avez besoin d'établir un identifiant pour votre extension, incluez la clé [`browser_specific_settings`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) dans `manifest.json` et définissez sa propriété `gecko.id` :
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Le module doit posséder une icône qui sera affichée dans le gestionnaire de modules du navigateur. Le fichier `manifest.json` utilisé ici fournit une icône `icons/border-48.png`.

Créons le répertoire `icons` directement sous le répertoire `borderify`. Fournissez une icône nommée `border-48.png`. Vous pouvez utiliser [celle-ci](https://raw.githubusercontent.com/mdn/webextensions-examples/master/borderify/icons/border-48.png), qui est tirée du repértoire d'icônes Google Material Design, et est utilisable à condition de respecter les termes de la licence [Creative Commons Attribution-ShareAlike](http://creativecommons.org/licenses/by-sa/3.0/).

Si vous décidez de fournir votre propre icône, sa taille devra être de 48x48 pixels. Il est aussi possible de fournir une icône de 96x96 pixels, adaptée à l'affichage en haute résolution et, dans ce cas, elle devra être spécifiée par la propriété `96` de l'objet icon dans le fichier `manifest.json` :

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Une alternative est de fournir un fichier SVG qui sera automatiquement mis à la bonne échelle.

- [En savoir plus sur la spécification d'icône.](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Enfin, créez un fichier nommé `borderify.js` directement dans le répertoire `borderify` et insérez-y ceci :

```js
document.body.style.border = "5px solid red";
```

Ce script sera chargé dans chaque page où le domaine correspond au motif fourni par la clé `content_scripts` du manifeste. Ce script a un accès direct au document contrairement à des scripts chargés par la page elle-même.

- [Pour en savoir plus sur les scripts de contenu.](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Essai

D'abord, vérifiez de nouveau que les bons fichiers sont au bon endroit :

    borderify/
        icons/
            border-48.png
        borderify.js
        manifest.json

### Installation

Dans Firefox : Ouvrez la page [about:debugging](/fr/docs/Tools/about:debugging), cliquez sur "Firefox" (dans les versions plus récentes de Firefox), cliquez sur « Chargez un module complémentaire temporaire… », puis sélectionnez n'importe quel fichier dans le répertoire de votre extension.

{{EmbedYouTube("cer9EUKegG4")}}

Le module complémentaire est dorénavant installé et persistera jusqu’à ce que vous redémarriez Firefox.

Une autre alternative est d’exécuter l'extension depuis la ligne de commande à l'aide de l'outil [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).

### Test

Rendez-vous sur une page web du domaine "mozilla.org". Vous devriez y voir une bordure rouge qui entoure la page :

{{EmbedYouTube("rxBQl2Z9IBQ")}}

> **Note :** Toutefois, n'essayez pas ce module sur addons.mozilla.org ! Les scripts de contenu sont bloqués sur ce domaine.

Expérimentez un peu en modifiant le contenu du script, en changeant par exemple la couleur de la bordure ou en altérant le contenu de la page. Puis sauvegardez le content script, rechargez les fichiers du module en cliquant sur le bouton « Recharger » dans about:debugging. Les changements sont immédiats :

{{EmbedYouTube("NuajE60jfGY")}}

- [En savoir plus sur le chargement des extensions](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Empaqueter et publier

Afin que d'autres personnes puissent utiliser votre module, il vous faut l'empaqueter et le soumettre à la signature de Mozilla. Pour en apprendre plus, voir ["Publier votre extension"](/fr/docs/orphaned/Mozilla/Add-ons/WebExtensions/Package_your_extension_).

## Et ensuite ?

Maintenant que vous avez eu une introduction au processus de développement d'une WebExtension pour Firefox, voici quelques suggestions pour la suite :

- [Rédiger une extension plus complexe](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [En lire d'avantage sur l'anatomie d'une WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Explorer les exemples d'extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Découvrir ce dont vous avez besoin pour développer, tester et publier votre extension](/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_)
- [Poursuivre votre apprentissage](/fr/docs/Mozilla/Add-ons/WebExtensions/What_next_#continuez_votre_exp%c3%a9rience_d'apprentissage).
