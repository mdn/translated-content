---
title: Utiliser le mode plein écran
slug: Web/API/Fullscreen_API
tags:
  - API
  - DOM
  - Plein écran
  - Tutoriel
translation_of: Web/API/Fullscreen_API
original_slug: Web/Guide/DOM/Using_full_screen_mode
---
{{DefaultAPISidebar("Fullscreen API")}}

L'**API Fullscreen** _(plein écran)_ fournit un moyen simple de présenter du contenu web en utilisant l'ensemble de l'écran de l'utilisateur. L'API vous permet de diriger facilement le navigateur pour faire en sorte qu'un élément et ses enfants, le cas échéant, occupent entièrement l'écran, éliminant toute l'interface utilisateur du navigateur et les autres applications de l'écran pendant ce temps.

> **Note :** Pour le moment, tous les navigateurs n'utilisent pas la version non préfixée de cet API. Consultez le tableau récapitulant les [préfixes](#Préfixes) et les différences de noms entre eux (vous pouvez également utiliser [Fscreen](https://github.com/rafrex/fscreen) pour l'accès du fournisseur à l'API).

## Activation du mode plein écran

En partant d'un élément que vous aimeriez afficher en plein écran ({{ HTMLElement("video") }}, par exemple), vous pouvez le passer en mode plein écran simplement en appelant sa méthode {{ domxref("Element.requestFullscreen()") }} .

Prenons cet élément {{ HTMLElement("video") }} :

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

Nous pouvons mettre cet élément video en plein écran avec un script de cette façon :

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

### Différences de présentation

Il est important de savoir qu'il y a une différence clef entre les implémentations de Gecko et WebKit : Gecko ajoute automatiquement des règles CSS à l'élément afin qu'il remplisse l'écran : "`width: 100%; height: 100%`". WebKit ne fait pas ça ; à la place, il centre l'élément sans le redimensionner au milieu d'un écran noir. Pour obtenir le même comportement que Gecko dans WebKit, vous devez ajouter votre propre règle "`width: 100%; height: 100%;`" à l'élément :

```css
#myvideo:-webkit-full-screen  {
  width: 100%;
  height: 100%;
}
```

Dans l'autre sens, si vous essayez d'émuler le comportement de WebKit sur Gecko, vous devez placer l'élément que vous souhaitez présenter dans un autre élément, que vous mettrez en plein écran, et utiliser des règles CSS pour ajuster l'apparence de l'élément interne.

### Notification

Quand le mode plein écran est activé, le document qui contient l'élément reçoit un événement de type {{ event("fullscreenchange") }} . Lors de la sortie du mode plein écran, le document reçoit à nouveau l'événement  {{ event("fullscreenchange") }} . Notez que l'événement en lui-même {{ event("fullscreenchange") }} ne fournit aucune information si le document est en train d'entrer ou de sortir du mode plein écran, mais si le document a une valeur non nulle {{ domxref("document.fullscreenElement", "fullscreenElement") }} , vous savez que vous êtes en mode plein écran.

### Lorsqu'une demande de plein écran échoue

Il n'est pas garanti que vous soyez capable de passer en mode plein écran. Par exemple, les élements {{ HTMLElement("iframe") }} possèdent l'attribut  {{ HTMLAttrXRef("allowfullscreen", "iframe") }} pour permettre à leur contenu d'être affiché en mode plein écran. Certains contenus comme les greffons fenêtrés ne peuvent être représentés en plein écran. Essayer de placer un élément qui ne peut être affiché en mode plein écran (ou le parent ou le descendant d'un tel élément) ne marchera pas. A la place, l'élément qui a demandé le mode plein écran recevra un événement  `mozfullscreenerror` . Quand une demande de plein écran échoue, Firefox écrit un message d'erreur dans la console Web expliquant pourquoi la demande n'a pas pu aboutir. Dans Chrome et les versions plus récentes d'Opera, aucun avertissement de ce type n'est généré.

> **Note :** Les requêtes de Fullscreen doivent être appelées depuis un gestionnaire d'évènements ou sinon, elles seront refusées.

## Sortie du mode plein écran

L'utilisateur peut toujours sortir du mode plein écran quand il le désire ; voir [Choses que vos utilisateurs doivent savoir](#choses_que_vos_utilisateurs_doivent_savoir). Vous pouvez également le faire en appelant la méthode {{domxref("Document.exitFullscreen()")}} .

## Autres informations

Le {{ domxref("document") }} fournit des informations supplémentaires pouvant être utiles lorsque vous développez des applications web en plein écran :

- {{ domxref("document.fullscreenElement", "fullscreenElement") }}
  - : L'attribut `fullscreenElement` vous indique l'{{ domxref("element") }} qui est actuellement affiché en plein écran. S'il est non nul, le document est en mode plein écran. S'il est nul, le document n'est pas en mode plein écran.
- {{ domxref("document.fullscreenEnabled", "fullscreenEnabled") }}
  - : L'attribut `fullscreenEnabled` vous indique si le document est actuellement dans un état qui permettrait d'activer le mode plein écran ou non.

## Choses que vos utilisateurs doivent savoir

Vous voulez faire savoir à vos utilisateurs qu'il peuvent utiliser la touche <kbd>ECHAP</kbd>  (ou  <kbd>F11</kbd>) pour sortir du mode plein écran.

En même temps, naviguer sur une autre page, changer d'onglet, ou changer d'application (en utilisant, par exemple, <kbd>Alt</kbd>-<kbd>Tab</kbd> ) pendant le mode plein écran, implique la sortie du mode plein écran de toute façon.

## Exemple

Dans cet exemple, une vidéo est affichée dans une page web. Taper sur l'une des touches  <kbd>Retour</kbd>  ou <kbd>Entrée</kbd>, permet à l'utilisateur de passer d'une présentation dans une fenêtre à une présentation en mode plein écran de la vidéo.

[Voir l'exemple sur une page](/samples/domref/fullscreen.html)

### Action sur la touche <kbd>Entrée</kbd>

Quand la page est chargée, ce code est exécuté pour mettre en place un évènement "listener" permettant de surveiller la moindre action sur la touche  <kbd>Entrée</kbd> .

```js
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);
```

### Passer en mode plein écran

Ce code est appelé lorsque l'utilisateur appuie sur la touche <kbd>Entrée</kbd>, comme vu plus haut.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

Dans un premier temps, la valeur de l'attribut `fullscreenElement` est analysée dans le {{ domxref("document") }} (en contrôlant s'il est préfixé par `moz-, ms-` ou `webkit-`). Si la valeur est nulle, le document est actuellement en mode normal, donc nous devons passer en mode plein écran. Le passage en mode plein écran est assuré en appelant {{ domxref("element.requestFullscreen()") }}.

Si le mode plein écran est déjà activé (`fullscreenElement` est non nul), nous appelons  {{ domxref("document.exitFullscreen()") }}.

## Préfixes

Pour le moment, tous les navigateurs n'ont pas implémenté la version sans préfixe de l'API (pour l'accès du fournisseur de l'API, vous pouvez utiliser [Fscreen](https://github.com/rafrex/fscreen)) . Voici le tableau résumant les préfixes et les différences de noms entre eux :

| Standard                                                 | Blink (Chrome & Opera)      | Gecko (Firefox)          | Internet Explorer 11    | Edge                        | Safari (WebKit)             |
| -------------------------------------------------------- | --------------------------- | ------------------------ | ----------------------- | --------------------------- | --------------------------- |
| {{domxref("Document.fullscreen")}}             | `webkitIsFullScreen`        | `mozFullScreen`          | _-_                     | `webkitIsFullScreen`        | `webkitIsFullScreen`        |
| {{domxref("Document.fullscreenEnabled")}} | `webkitFullscreenEnabled`   | `mozFullScreenEnabled`   | `msFullscreenEnabled`   | `webkitFullscreenEnabled`   | `webkitFullscreenEnabled`   |
| {{domxref("Document.fullscreenElement")}} | `webkitFullscreenElement`   | `mozFullScreenElement`   | `msFullscreenElement`   | `webkitFullscreenElement`   | `webkitFullscreenElement`   |
| {{domxref("Document.onfullscreenchange")}} | `onwebkitfullscreenchange`  | `onmozfullscreenchange`  | `MSFullscreenChange`    | `onwebkitfullscreenchange`  | `onwebkitfullscreenchange`  |
| {{domxref("Document.onfullscreenerror")}} | `onwebkitfullscreenerror`   | `onmozfullscreenerror`   | `MSFullscreenError`     | `onwebkitfullscreenerror`   | `onwebkitfullscreenerror`   |
| {{domxref("Document.exitFullscreen()")}}     | `webkitExitFullscreen()`    | `mozCancelFullScreen()`  | `msExitFullscreen()`    | `webkitExitFullscreen()`    | `webkitExitFullscreen()`    |
| {{domxref("Element.requestFullscreen()")}} | `webkitRequestFullscreen()` | `mozRequestFullScreen()` | `msRequestFullscreen()` | `webkitRequestFullscreen()` | `webkitRequestFullscreen()` |

## Spécifications

| Specification                        | Statut                           | Commentaire          |
| ------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("Fullscreen")}} | {{Spec2("Fullscreen")}} | Définition initiale. |

## Compatibilité des navigateurs

### `Document.fullscreen`

{{Compat("api.Document.fullscreen")}}

### `Document.fullscreenElement`

{{Compat("api.Document.fullscreenElement")}}

### `Document.fullscreenEnabled`

{{Compat("api.Document.fullscreenEnabled")}}

### `Document.exitFullscreen`

{{Compat("api.Document.exitFullscreen")}}

### `Element.requestFullscreen`

{{Compat("api.Element.requestFullscreen")}}

## Voir aussi

- [Utiliser le mode plein écran](/fr/docs/Web/Guide/DOM/Using_full_screen_mode)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}, {{cssxref("::backdrop")}}
- {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
