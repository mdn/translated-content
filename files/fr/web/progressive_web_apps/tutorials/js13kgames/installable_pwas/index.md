---
title: Comment rendre les PWA installables
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Dans l'article précédent, nous avons vu comment [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) fonctionne en mode hors connexion grâce à son [service worker](/fr/docs/Web/API/Service_Worker_API), mais nous pouvons aller encore plus loin et permettre aux utilisateurs d'installer l'application Web sur leur appareil. L'application Web installée peut ensuite être lancée par les utilisateurs comme s'il s'agissait d'une application native du système d'exploitation. Cet article explique comment y parvenir à l'aide du manifeste de l'application Web.

Ces technologies permettent à l'application d'être directement lancée depuis l'écran d'accueil, la barre de tâche, ou le dock de l'appareil, plutôt que d'ouvrir le navigateur, puis accéder au site en utilisant un marque-page ou en tapant l'URL. Votre application Web peut être placée à côté d'applications natives, ce qui facilite l'accès des utilisateurs. De plus, vous pouvez spécifier que l'application soit lancée en mode plein écran ou autonome, supprimant ainsi l'interface utilisateur du navigateur par défaut qui serait autrement présente, créant ainsi une sensation encore plus transparente et native.

Pour en savoir plus, consultez [Rendre les PWA installables](/fr/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Prérequis

Pour rendre notre exemple d'application installable, les éléments suivants sont nécessaires&nbsp;:

- Un manifeste de l'application web, avec les [bons champs renseignés](/fr/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#Manifest).
- Le site web à servir depuis un domaine sécurisé (HTTPS).
- Un icone représentant l'application sur l'appareil.
- Un [service worker](fr/docs/Web/API/Service_Worker_API) enregistré pour permettre à l'application de fonctionner en mode hors connexion.

### Le fichier manifeste

L'élément clef est un fichier manifeste web qui liste toutes les informations concernant le site web au format JSON.

Il se trouve habituellement dans le dossier racine de l'application web. Il contient des informations utiles, telles que le titre de l'application, des chemins d'accès vers des icônes de différentes tailles pouvant être utilisées pour représenter l'application sur un système d'exploitation (comme une icône sur l'écran d'accueil, une entrée dans le menu Démarrer ou une icône sur le bureau) et une couleur d'arrière-plan à utiliser dans les écrans de chargement ou de démarrage. Ces informations sont nécessaires au navigateur pour présenter correctement l'application Web pendant le processus d'installation, ainsi que dans l'interface de lancement de l'application de l'appareil, comme l'écran d'accueil d'un appareil mobile.

Le fichier `js13kpwa.webmanifest` de l'application web [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) est inclus dans la section [`<head>`](/fr/docs/Web/HTML/Element/head) du fichier `index.html` via la ligne de code suivante:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> **Note :** beaucoup utilisent `manifest.json` pour les manifestes d'applications Web, car le contenu est organisé dans une structure JSON. Cependant, le format de fichier `.webmanifest` est explicitement mentionné dans la spécification [W3C relative au manifeste](https://w3c.github.io/manifest/), c'est donc ce que nous utiliserons ici.

Le contenu d'un fichier ressemble à ceci:

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

La plupart des champs sont explicites, mais décortiquons le document et expliquons-le en détail&nbsp;:

- `name`&nbsp;: Le nom complet de l'application.
- `short_name`&nbsp;: Nom résumé à afficher sur l'écran d'accueil.
- `description`&nbsp;: Une phrase ou deux expliquant ce que fait l'application.
- `icons`&nbsp;: Un paquet d'informations relatives aux icones — URL sources, tailles et types. Assurez-vous d'en indiquer au moins quelques unes de façon à ce que celle qui est la mieux adaptée soit choisie pour l'appareil de l'utilisateur. Voir [Définir les icônes de votre application](/fr/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`&nbsp;: Le document en index à lancer au démarrage de l'application.
- `display`&nbsp;: Comment l'application est affichée&nbsp;; cela peut être `fullscreen`, `standalone`, `minimal-ui`, ou `browser`.
- `theme_color`&nbsp;: Une couleur primaire pour l'interface utilisateur, qui sera utilisée par le système d'exploitation.
- `background_color`&nbsp;: Une couleur de fond utilisée lors de l'installation et pour l'écran de chargement.

Il y a encore plus de paramètres que vous pouvez utiliser que ceux répertoriés ci-dessus — assurez-vous de consulter [la réference du Manifeste des Web Apps](/fr/docs/Web/Manifest) pour plus de détails.

## Installer une PWA

À l'aide des informations trouvées dans le manifeste de notre application Web, les navigateurs pris en charge peuvent afficher une invite d'installation à l'utilisateur. Lorsque l'utilisateur visite la PWA, il peut être invité à l'installer sur son appareil. Lorsque vous acceptez l'invite, la PWA est installée comme les autres applications natives du système d'exploitation et l'utilisateur peut lancer et utiliser l'application Web normalement.

Pour en savoir plus sur la manière dont les utilisateurs peuvent installer des PWA, consultez [Installation et désinstallation d'applications Web](/fr/docs/Web/Progressive_web_apps/Guides/Installing).

### Écran de démarrage

À l'aide des informations trouvées dans le manifeste de notre application Web, les navigateurs pris en charge peuvent afficher une invite d'installation à l'utilisateur. Lorsque l'utilisateur visite la PWA, il peut être invité à l'installer sur son appareil. Lorsque vous acceptez l'invite, la PWA est installée comme les autres applications natives du système d'exploitation et l'utilisateur peut lancer et utiliser l'application Web normalement.

![Capture d'écran de l'écran de démarrage de l'application sur un téléphone mobile. Il s'agit d'une page entièrement rouge avec le logo de l'application au milieu et son nom en dessous : « js13kGames Progressive Web App »](js13kpwa-splash.png)

L'icone et les couleurs du thème et du fond sont utilisés pour créer cet écran.

## Résumé

Dans cet article, nous avons appris comment rendre les PWA installables avec un manifeste d'application Web correctement configuré, et comment l'utilisateur peut ensuite installer la PWA sur ses appareils.

Passons maintenant à la dernière étape de notre tutoriel sur les PWAs : utiliser les notifications push pour partager des annonces avec l'utilisateur et pour aider l'utilisateur à se réengager avec notre application.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}