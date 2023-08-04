---
title: Anatomie d'une WebExtension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---

{{AddonSidebar}}

Une extension se compose de plusieurs fichiers, packagés pour la distribution et l'installation. Dans cet article, nous allons rapidement passer par les fichiers qui pourraient être présents dans une extension.

## manifest.json

Il s'agit du seul fichier qui doit être présent dans chaque extension. Il contient des métadonnées de base sur l'extension telles que son nom, sa version et les autorisations requises. Il fournit également des pointeurs vers d'autres fichiers dans l'extension.

Ce manifeste peut également contenir des pointeurs vers plusieurs autres types de fichiers :

- [page d'arrière-plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)&nbsp;: implémentez une logique à longue durée.
- Icônes pour l'extension et tous les boutons qu'elle peut définir.
- [Sidebars, popups, et options pages](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Sidebars_popups_options_pages): Documents HTML qui fournissent du contenu pour divers composants de l'interface utilisateur.
- [Script de contenu](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts) : interagissez avec les pages Web (Notez que ce n'est pas le même que javaScript dans un élément {{HTMLElement("script")}} au sein d'une page).
- [Web-accessible resources](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Web_accessible_resources) : Rendez le contenu packagé accessible aux pages Web et aux scripts de contenu.

![](webextension-anatomy.png)

Voir la page référence [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) pour tous les détails.

En plus de celles déjà listées dans le manifeste, une extension peut également inclure des pages d'extensions supplémentaires et des fichiers de support.

## Scripts d'arrière-plan

Les extensions doivent souvent conserver un état à long terme ou effectuer des opérations à long terme indépendamment de la durée de vie d'une page Web ou d'une fenêtre de navigateur. C'est le rôle des scripts d'arrière-plan.

Les scripts en arrière-plan sont chargés dès que l'extension est chargée et restent chargés jusqu'à ce que l'extension soit désactivée ou désinstallée. Vous pouvez utiliser n'importe laquelle des [WebExtension APIs](/fr/Add-ons/WebExtensions/API) dans le script, tant que vous avez demandé les [permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) nécessaires.

### Spécifier les scripts d'arrière-plan

Vous pouvez inclure un script d'arrière-plan à l'aide de la clé `background` dans "manifest.json" :

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

Vous pouvez spécifier plusieurs scripts en arrière-plan : si vous le faites, ils s'exécutent dans le même contexte, tout comme plusieurs scripts chargés dans une seule page Web.

Au lieu de spécifier des scripts d'arrière-plan, vous pouvez spécifier une page d'arrière-plan qui a l'avantage supplémentaire de supporter les modules ES6 :

**manifest.json**

```json
// manifest.json

"background": {
  "page": "background-page.html"
}
```

**background-page.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script type="module" src="background-script.js"></script>
  </head>
</html>
```

### Environnement des scripts d'arrière-plan

#### APIs DOM

Les scripts d'arrière-plan s'exécutent dans le contexte de pages spéciales appelées pages d'arrière-plan. Cela leur donne une [`fenêtre`](/fr/docs/Web/API/Window) globale, ainsi que toutes les API DOM standard fournies par cet objet.

> **Attention :** Dans Firefox, les pages d'arrière-plan ne supportent pas l'utilisation de [`alert()`](/fr/docs/Web/API/Window/alert), [`confirm()`](/fr/docs/Web/API/Window/confirm), ou [`prompt()`](/fr/docs/Web/API/Window/prompt).

#### APIs des WebExtensions

Les scripts d'arrière-plan peuvent utiliser l'une des [APIs des WebExtensions](/fr/Add-ons/WebExtensions/API) dans le script, à condition que leur extension dispose des [permissions](/fr-FR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) nécessaires.

#### Cross-origin access

Les scripts d'arrière-plan peuvent faire des requêtes XHR à tous les hôtes pour lesquels ils ont des [permissions d'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

#### Contenu Web

Les scripts d'arrière-plan n'obtiennent pas un accès direct aux pages Web. Toutefois, ils peuvent charger des [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) dans les pages Web et peuvent [communiquer avec ces scripts de contenu à l'aide d'une API de communication](/fr/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts).

#### Politique de sécurité du contenu

Les scripts d'arrière-plan sont restreints à certaines opérations pour lutter contre d'autres potentiellement dangereuses, comme l'utilisation de la fonction [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval), par le biais d'une politique de sécurité du contenu. Pour plus de détails, consultez la [politique de sécurité du contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Sidebars, popups, pages options

Votre extension peut inclure divers composants d'interface utilisateur dont le contenu est défini à l'aide d'un document HTML :

- Une [barre latérale](/fr/Add-ons/WebExtensions/user_interface/Sidebars) est un volet qui s'affiche dans la partie gauche de la fenêtre du navigateur, à côté de la page Web.
- Un [popup](/fr/Add-ons/WebExtensions/user_interface/Popups) est une boîte de dialogue que vous pouvez afficher lorsque l'utilisateur clique sur un [bouton de la barre d'outils](/fr/Add-ons/WebExtensions/user_interface/Browser_action) ou de la [barre d'adresse](/fr/Add-ons/WebExtensions/user_interface/Page_actions)
- Une [page d'options](/fr/Add-ons/WebExtensions/user_interface/Options_pages) est une page qui s'affiche lorsque l'utilisateur accède aux préférences de votre module complémentaire dans le gestionnaire d'add-ons natif du navigateur.

Pour chacun de ces composants, vous créez un fichier HTML et pointez vers lui en utilisant une propriété spécifique dans [manifest.json](/fr/Add-ons/WebExtensions/manifest.json). Le fichier HTML peut inclure des fichiers CSS et JavaScript, tout comme une page Web normale.

Toutes ces pages sont un type de [pages d'extension](/fr/Add-ons/WebExtensions/user_interface/Extension_pages),et contrairement à une page Web normale, votre JavaScript peut utiliser les mêmes API d'extension Web privilégiées que votre script de fond. Ils peuvent même accéder directement aux variables de la page d'arrière-plan en utilisant {{WebExtAPIRef("runtime.getBackgroundPage()")}}.

## Page d'extension

Vous pouvez également inclure dans votre extension des documents HTML qui ne sont pas attachés à un composant d'interface utilisateur prédéfini. Contrairement aux documents que vous pouvez fournir pour les sidebars, les popups ou les pages d'options, ceux-ci n'ont pas d'entrée dans manifest.json. Cependant, ils ont également accès aux mêmes API WebExtension privilégiées que votre script d'arrière-plan.

Vous chargerez typiquement une page comme celle-ci en utilisant {{WebExtAPIRef("windows.create()")}} ou {{WebExtAPIRef("tabs.create()")}}.

Voir les [pages d'extension](/fr/Add-ons/WebExtensions/user_interface/Extension_pages) pour en savoir plus.

## Scripts de contenu

Utilisez les scripts de contenu pour accéder et manipuler des pages Web. Les scripts de contenu sont chargés dans des pages Web et lancés dans le contexte de cette page particulière.

Les scripts de contenu sont des scripts fournis par les extensions qui s'exécutent dans le contexte d'une page Web ; cela diffère des scripts qui sont chargés par la page elle-même, y compris ceux qui sont fournis dans les éléments {{HTMLElement ("script")}} dans la page.

Les scripts de contenu peuvent voir et manipuler le DOM de la page, tout comme les scripts normaux chargés par la page.

Contrairement aux scripts de pages normales, ils peuvent :

- Effectuer des requêtes XHR entre domaines.
- Utiliser un petit sous-ensemble de l'[APIs des WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/API).
- [Echanger des messages avec leurs scripts d'arrière-plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communication_avec_les_scripts_darrière-plan) et peuvent ainsi accéder indirectement à toutes les API des WebExtensions.

Les scripts de contenu ne peuvent pas directement accéder normalement aux scripts de page, mais peuvent échanger des messages avec eux à l'aide de l'API standard [`window.postMessage()`](/fr-FR/docs/Web/API/Window/postMessage).

Habituellement, quand nous parlons de scripts de contenu, nous parlons de JavaScript, mais vous pouvez injecter du CSS dans des pages Web en utilisant le même mécanisme.

Voir l'article de [scripts de contenu](/fr-FR/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) pour en savoir plus.

## Rendre accessible des ressources web

Les ressources web sont des fichiers tels que des images, des fichiers HTML, CSS ou JavaScript qui sont inclus dans l'extension afin d'être utilisés par les scripts de contenu et les scripts d'arrière-plan. Les ressources web mises à disposition peuvent être référencées depuis les scripts grâce à un schéma d'URI spécifique.

Ainsi, si un script de contenu souhaite insérer des images sur une page web, on pourra insérer ces images dans l'extension et les rendre accessible. Ensuite, le script de contenu pourra créer et ajouter une balise {{HTMLElement("img")}} faisant référence à l'image via l'attribut `src` ciblant le fichier via le schéma spécifique.

Pour en savoir plus, se référer à la documentation de la clé [`web_accessible_resources`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) du fichier `manifest.json`.
