---
title: La barre d'extentions
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 4 supprime la barre d'état située au bas de la fenêtre du navigateur au profit d'une nouvelle barre d'outils placée en bas de la fenêtre. Cette nouvelle barre d'outils, dont l'identifiant est `"addon-bar"`, est une `<toolbar>` XUL standard&nbsp;; les modules complémentaires peuvent y insérer du contenu, et l'utilisateur·ice peut y glisser des boutons lors de la personnalisation de ses barres d'outils. C'est la principale différence entre la barre d'extensions et l'ancienne barre d'état&nbsp;; on peut maintenant y placer n'importe quel élément XUL, puisqu'il s'agit d'une barre d'outils standard.

> [!NOTE]
> Pour le moment, une couche de compatibilité pour la barre d'état est incluse afin que les modules complémentaires qui s'attendent à la présence de la barre d'état continuent de fonctionner.

## Ajouter un élément à la barre d'extensions

La barre d'extensions est une barre d'outils XUL dont l'identifiant est `"addon-bar"`. Le code ci‑dessous localise la fenêtre la plus récemment utilisée et ajoute un nouvel élément à la barre d'extensions qui affiche le texte «&nbsp;Bonjour le monde&nbsp;!&nbsp;» à l'aide d'un élément XUL `<label>`.

```js
// Rechercher la fenêtre la plus récemment utilisée
const mediateur = Components.classes[
  "@mozilla.org/appshell/window-mediator;1"
].getService(Components.interfaces.nsIWindowMediator);
const doc = mediateur.getMostRecentWindow("navigator:browser").document;

// Récupérer la barre d'extensions pour cette fenêtre
const barreExtension = doc.getElementById("addon-bar");

// Construire le nouvel élément de la barre d'outils
const nouvelObjet = doc.createElement("toolbaritem");
const etiquetteObjet = doc.createElement("label");

// Ajouter l'élément à la barre d'outils et définir son étiquette
nouvelObjet.appendChild(etiquetteObjet);
barreExtension.appendChild(nouvelObjet);
etiquetteObjet.value = "Bonjour le monde !";
```

Pour n'ajouter le bouton qu'une seule fois, créez une préférence booléenne pour vérifier s'il s'agit de la première exécution. [Par exemple <sup>(angl.)</sup>](https://stackoverflow.com/questions/4978188/how-do-i-detect-a-first-run-in-firefox-a-addon/4978512#4978512)&nbsp;:

```js
const premiereExecution = Services.prefs.getBoolPref(
  "extensions.YOUREXT.firstRun",
);

const versionActuelle = "0.0.0";

if (premiereExecution) {
  Services.prefs.setBoolPref("extensions.YOUREXT.firstRun", false);
  Services.prefs.setCharPref(
    "extensions.YOUREXT.installedVersion",
    versionActuelle,
  );
  /* Code lié à la première exécution */
} else {
  try {
    const versionInstallee = Services.prefs.getCharPref(
      "extensions.YOUREXT.installedVersion",
    );
    if (versionActuelle > versionInstallee) {
      Services.prefs.setCharPref(
        "extensions.YOUREXT.installedVersion",
        versionActuelle,
      );
      /* Code lié à la mise à jour */
    }
  } catch (ex) {
    /* Code lié à une réinstallation */
  }
}
```

## Utiliser une surcouche par version de Firefox

La prise en charge de la barre d'extensions tout en restant compatible avec Firefox 3.6 et les versions antérieures nécessite l'utilisation de deux surcouches. Le fichier [`chrome.manifest` <sup>(angl.)</sup>](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration) peut définir quel fichier est utilisé par quelle version de Firefox en utilisant des [indicateurs de manifeste <sup>(angl.)</sup>](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration#Manifest_Flags)&nbsp;:

```plain
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay-old.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion<4.0
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion>=4.0
```

Note&nbsp;: la valeur `appversion` doit comporter au moins deux chiffres, sinon cela ne fonctionne pas avec les versions de Gecko antérieures à 1.8.0.13 et 1.8.1.5.

### Ajouter un bouton par défaut

Voir&nbsp;: [Ajouter un bouton par défaut <sup>(angl.)</sup>](https://web.archive.org/web/20191010115941/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Code_snippets/Toolbar#Adding_button_by_default)

## Différences d'apparence

- Puisque le navigateur n'occupe plus une large partie de la barre avec des informations d'état, l'intégralité de la zone est disponible pour les modules complémentaires.
- La barre d'extensions est vide et cachée par défaut&nbsp;; l'utilisateur·ice doit choisir de l'afficher.
- Si un module complémentaire sans redémarrage s'installe directement dans la barre d'extensions alors que la barre n'est pas déjà visible, la barre devient visible automatiquement.
- Si la désinstallation d'un module complémentaire sans redémarrage réduit à zéro le nombre d'éléments dans la barre d'extensions, la barre est automatiquement masquée.

## Voir aussi

- La [barre d'extension de Firefox 4 pour les développeuses et développeurs <sup>(angl.)</sup>](https://web.archive.org/web/20110129042912/https://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers), par Mike Kaply
