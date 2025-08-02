---
title: Comment rendre les PWA installables
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Dans l'article précédent, nous avons vu comment [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) fonctionne en mode hors connexion grâce à son [<i lang="en">service worker</i>](/fr/docs/Web/API/Service_Worker_API), mais nous pouvons aller encore plus loin et permettre aux utilisatrices et utilisateurs d'installer l'application web sur leur appareil. L'application web installée peut ensuite être lancée comme s'il s'agissait d'une application native du système d'exploitation. Cet article explique comment y parvenir à l'aide du manifeste de l'application web.

Ces technologies permettent à l'application d'être directement lancée depuis l'écran d'accueil, la barre de tâche, ou le dock de l'appareil, plutôt que d'ouvrir le navigateur, puis d'accéder au site en utilisant un marque-page ou en tapant l'URL. Votre application web peut être placée à côté d'applications natives, ce qui en facilite l'accès. De plus, vous pouvez spécifier que l'application soit lancée en mode plein écran ou autonome, supprimant ainsi l'interface utilisateur du navigateur par défaut qui serait autrement présente, créant ainsi une sensation encore plus transparente et native.

Pour en savoir plus, consultez [Rendre les PWA installables](/fr/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Prérequis

Pour rendre notre exemple d'application installable, les éléments suivants sont nécessaires&nbsp;:

- Un manifeste de l'application web, avec les [bons champs renseignés](/fr/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#manifest).
- Le site web à servir depuis un domaine sécurisé (HTTPS).
- Une icône représentant l'application sur l'appareil.
- Un [<i lang="en">service worker</i>](/fr/docs/Web/API/Service_Worker_API) enregistré pour permettre à l'application de fonctionner en mode hors connexion.

### Le manifeste de l'application web

L'élément clef est un fichier qui représente le manifeste de l'application web et qui liste toutes les informations concernant le site web au format JSON.

Il se trouve habituellement dans le dossier racine de l'application web. Il contient des informations utiles, telles que le titre de l'application, des chemins d'accès vers des icônes de différentes tailles pouvant être utilisées pour représenter l'application sur un système d'exploitation (comme une icône sur l'écran d'accueil, une entrée dans le menu Démarrer ou une icône sur le bureau) et une couleur d'arrière-plan à utiliser dans les écrans de chargement ou de démarrage. Ces informations sont nécessaires au navigateur pour présenter correctement l'application web pendant le processus d'installation, dans l'interface de lancement de l'application de l'appareil (par exemple l'écran d'accueil d'un appareil mobile).

Le fichier `js13kpwa.webmanifest` de l'application web [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) est inclus dans la section [`<head>`](/fr/docs/Web/HTML/Reference/Elements/head) du fichier `index.html` via la ligne de code suivante&nbsp;:

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> [!NOTE]
> Beaucoup utilisent `manifest.json` pour les manifestes d'applications web, car le contenu est organisé dans une structure JSON. Cependant, le format de fichier `.webmanifest` est explicitement mentionné dans la spécification [W3C relative au manifeste](https://w3c.github.io/manifest/), c'est donc ce que nous utiliserons ici.

Le contenu d'un manifeste ressemble à ceci&nbsp;:

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
    // …
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

- `name`
  - : Le nom complet de l'application.
- `short_name`
  - : Le nom court ou résumé à afficher sur l'écran d'accueil.
- `description`
  - : Une phrase ou deux qui explique(nt) ce que fait l'application.
- `icons`
  - : Un paquet d'informations relatives aux icônes dont les URL sources, tailles et types. Assurez-vous d'en indiquer au moins quelques-unes de façon à ce que celle qui est la mieux adaptée soit choisie pour l'appareil de la personne. Voir [Définir les icônes de votre application](/fr/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- `start_url`
  - : Le document à lancer au démarrage de l'application.
- `display`
  - : La façon dont l'application est affichée&nbsp;; cela peut être `fullscreen`, `standalone`, `minimal-ui`, ou `browser`.
- `theme_color`
  - : Une couleur primaire pour l'interface utilisateur, qui sera utilisée par le système d'exploitation.
- `background_color`
  - : Une couleur de fond utilisée lors de l'installation et pour l'écran de chargement.

Il existe de nombreux autres paramètres que vous pouvez utiliser. Référez-vous à [la référence sur les manifestes d'applications web](/fr/docs/Web/Progressive_web_apps/Manifest) pour plus de détails.

## Installer une PWA

À l'aide des informations trouvées dans le manifeste de notre application web, les navigateurs compatibles peuvent afficher une invite d'installation à l'utilisateur. Lorsque l'utilisatrice ou l'utilisateur visite la PWA, il peut être invité à l'installer sur son appareil. Lorsque la personne accepte l'invite, la PWA est installée comme les autres applications natives du système d'exploitation et on peut alors lancer et utiliser l'application web normalement.

Pour en savoir plus sur la manière dont on peut installer des PWA, consultez [Installation et désinstallation d'applications web](/fr/docs/Web/Progressive_web_apps/Guides/Installing).

### Écran de démarrage

Sur certains appareils, un écran de démarrage est également généré à partir des informations contenues dans le manifeste. Cet écran s'affiche quand on lance la PWA et que son chargement a lieu.

![Capture d'écran de l'écran de démarrage de l'application sur un téléphone mobile. Il s'agit d'une page entièrement rouge avec le logo de l'application au milieu et son nom en dessous : « js13kGames Progressive Web App »](js13kpwa-splash.png)

L'icône et les couleurs du thème et d'arrière-plan sont utilisés pour créer cet écran.

## Résumé

Dans cet article, nous avons appris comment rendre les PWA installables avec un manifeste d'application web correctement configuré, et comment toute personne peut ensuite installer la PWA sur ses appareils.

Passons maintenant à la dernière étape de notre tutoriel sur les PWA&nbsp;: utiliser les notifications push pour partager des annonces avec l'utilisatrice ou l'utilisateur et l'aider à revenir sur notre application lorsque c'est pertinent.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
