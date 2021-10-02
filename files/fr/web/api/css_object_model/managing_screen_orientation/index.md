---
title: Gérer l'orientation de l'écran
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
tags:
  - Avancé
  - CSSOM View
  - Guide
  - Screen Orientation
translation_of: Web/API/CSS_Object_Model/Managing_screen_orientation
---
{{SeeCompatTable}}{{APIRef}}

## Sommaire

L'orientation de l'écran est quelque chose de légèrement différent de [l'orientation de l'appareil](/fr/docs/WebAPI/Detecting_device_orientation). Même si un appareil n'a pas la capacité de détecter sa propre orientation, un écran en possède toujours une. Et si on est capable de connaître son orientation, il est bon d'avoir la possibilité de contrôler l'orientation de l'écran afin de préserver ou d'adapter l'interface d'une application web.

Il y a plusieurs manières de gérer l'orientation de l'écran, à la fois avec CSS et JavaScript:

- La première est la [media query orientation](/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries#orientation). Cela permet au contenu d'ajuster sa mise en forme à l'aide de CSS, selon que la fenêtre soit en mode paysage (c'est à dire que la largeur est plus grande que la hauteur) ou en mode portrait (que sa hauteur est plus grande que sa largeur).
- La deuxième est l'API JavaScript d'orientation d'écran, qui peut être utilisée pour récupérer l'orientation en cours de l'écran et éventuellement de la verrouiller.

## Ajuster la mise en page selon l'orientation

Un des cas d'utilisation les plus courants pour les changements d'orientation est quand vous souhaitez modifier la mise en page de votre contenu selon l'orientation de l'appareil. Par exemple, peut-être que vous voudriez qu'une barre d'outils s'étende le long de la dimension la plus longue de l'appareil. En utilisant une media query, vous pouvez le faire facilement et automatiquement.

Prenons pour exemple le code HTML suivant:

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut interdum tristique dapibus. Nullam quis malesuada est.</p>
```

Le CSS s'appuie sur une media query `orientation` pour gérer les styles spécifiques liés à l'orientation de l'écran.

```css
/* D'abord, on définit les styles communs */

html, body {
  width : 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font   : 1em sans-serif;
  margin : 0;
  padding: .5em;
}

ul {
  list-style: none;

  font   : 1em monospace;
  margin : 0;
  padding: .5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin : 0;
  padding: 0.5em;
  background: white;
}
```

Une fois qu'on a définit les styles communs, on peut définir des cas spéciaux selon l'orientation.

```css
/* En mode portrait, on veut la barre d'outils en haut */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* En mode paysage, on veut la barre d'outils à gauche */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: .5em;
  }
}
```

Et voici le résultat:

| Portrait                                                                                                 | Landscape                                                                                                |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| {{ EmbedLiveSample("Ajuster_la_mise_en_page_selon_l'orientation", 180, 350) }} | {{ EmbedLiveSample("Ajuster_la_mise_en_page_selon_l'orientation", 350, 180) }} |

> **Note :** La media query orientation s'applique en vérité selon l'orientation de la fenêtre du navigateur (ou iframe) et non l'orientation de l'appareil.

## Verrouiller l'orientation de l'écran

> **Attention :** Cette API est expérimentale et est actuellement disponible sur [Firefox OS](/en-US/docs/Mozilla/Firefox_OS) et [Firefox pour Android](/en-US/docs/Mozilla/Firefox_for_Android) avec le préfixe `moz`, et sur Internet Explorer pour Windows 8.1 et plus avec le préfixe `ms`.

Certains appareils (principalement les appareils mobiles) peuvent changer dynamiquement d'orientation d'écran selon leur propre orientation, garantissant que l'utilisateur sera toujours capable de lire ce qu'il y a sur l'écran. Bien que ce comportement soit parfaitement adapté au contenu texte, certains contenus peuvent être affectés négativement par ce changement. Par exemple, les jeux basés sur l'orientation de l'appareil être gachés par un tel changement.

L'API Screen Orientation (orientation de l'écran) est faite pour empêcher ou gérer un tel changement.

### Écouter les changements d'orientation

L'événement {{event("orientationchange")}} est déclenché chaque fois que l'appareil change l'orientation de l'écran et l'orientation peut elle-même être lue avec la propriété {{domxref("Screen.orientation")}}.

```js
screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + screen.orientation);
});
```

### Empêcher le changement d'orientation

Toute application web peut verrouiller l'écran dans une orientation pour répondre à ses besoins. L'écran est verrouillé en utilisant la méthode {{domxref("Screen.lockOrientation()")}} et dévérouillé en utilisant {{domxref("Screen.unlockOrientation()")}}.

{{domxref("Screen.lockOrientation()")}} accepte une chaîne de caractères (ou une série de chaînes de caractères) pour définir le type de verrouillage à appliquer. Les valeurs acceptées sont: `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait`, `landscape` (Voir {{domxref("Screen.lockOrientation")}}  pour en savoir plus sur ces valeurs).

```js
screen.lockOrientation('landscape');
```

> **Note :** Un verrouillage d'écran est dépendant de l'application web. Si une a application A est verrouillée à `landscape` et l'application B est verrouillée à `portrait`, passer de l'application A à B ou à A ne va pas déclencher un événement {{event("orientationchange")}} parce que les deux applications gardent l'orientation qu'elles avaient.
>
> En revanche, verrouiller l'orientation peut décléncher l'événement {{event("orientationchange")}} si l'orientation a dû être changée pour satisfaire aux critères du verrouillage.

## Firefox OS et Android: Verrouiller l'orientation avec le manifeste

Pour Firefox OS et Firefox Android (bientôt pour la version bureau de Firefox également), vous pouvez le champ [orientation](/en-US/Apps/Build/Manifest#orientation) dans le fichier manifeste de votre application, par exemple:

```json
"orientation": "portrait"
```

## Voir aussi

- {{domxref("Screen.orientation")}}
- {{domxref("Screen.lockOrientation()")}}
- {{domxref("Screen.unlockOrientation()")}}
- {{domxref("Screen.onorientationchange")}}
- [Media query orientation](/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries#orientation)
- [A short introduction to media queries in Firefox 3.5](http://hacks.mozilla.org/2009/06/media-queries/)
