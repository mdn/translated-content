---
title: Trucs et astuces pour les animations CSS
slug: Web/CSS/CSS_Animations/Tips
tags:
  - Animations CSS
  - CSS
  - Exemple
  - Guide
  - Tutoriel
translation_of: Web/CSS/CSS_Animations/Tips
original_slug: Web/CSS/Animations_CSS/Conseils
---
{{CSSRef}}

Les animations CSS permettent de réaliser réaliser des effets incroyables en mainpulant les éléments de vos documents et applications.. Cependant, il est parfois compliqué d'obtenir l'effet désiré. Dans cet article, on explorera différents conseils visant à simplifier la réalisation d'animations.

## Relancer une animation

La spécifications des [animations CSS](/en-US/docs/Web/CSS/CSS_Animations) ne permet pas de relancer une animation. Il n'existe pas de méthode `resetAnimation()` qui puisse être appelée sur les éléments et on ne peut pas utiliser la propriété {{cssxref("animation-play-state")}} pour la redéfinir sur `"running"`. Pour obtenir cet effet qui permette de relancer une animation terminée, on utilisera cette astuce.

### CSS

Tout d'abord, on définit l'animation avec des règles CSS (certaines règles superflues sont masquées ici à des fins de concision).

```css hidden
.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font: 14px "Open Sans", "Arial", sans-serif;
}
```

```css
@keyframes colorchange {
  0% { background: yellow }
  100% { background: blue }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}
```

On a deux classes qui sont définies. La classe `box` qui décrit l'apparence de la boîte, sans aucune information relative à l'animation. Les détails de l'animation sont inclus dans la classe `changing` qui indique que les {{cssxref("@keyframes")}} intitulées `colorchange` doivent être utilisées sur une période de deux secondes afin d'animer la boîte.

Si on n'utilise que ces règles, la boîte n'est pas animée lorsqu'elle s'affiche.

### HTML

Voici le fragment de HTML où on utilise un élément {{HTMLElement("div")}} qu'on veut animer et un bouton pour lancer (ou relancer) l'animation.

```html
<div class="box">
</div>

<div class="runButton" onclick="play()">Cliquer pour lancer l'animation</div>
```

### JavaScript

Enfin, voyons le JavaScript qui sera utilisé. Cette technique repose principalement sur la fonction `play()` qui est appelée lorsque l'utilisateur clique sur le bouton.

```js
function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}
```

Cela paraît un peu étrange. Mais afin que l'animation soit lancée à nouveau, il faut : retirer l'effet d'animation, lancer le recalcul des styles dans le document pour que cette action soit enregistrée puis ajouter l'animation à nouveau sur l'élément.

Voici ce qui se produit lorsque la fonction `play()` est appelée :

1.  On réinitialise la liste des classes CSS de la boîte avec uniquement `box`. Ce faisant, on retire toutes les autres classes qui s'appliquaient à la boîte, y compris la classe `changing` en charge de l'animation. Autrement dit, on retire l'effet d'animation. Toutefois, ces modifications de classes n'auront pas d'effet tant que les styles ne sont pas recalculés et qu'un rafraîchissement est réalisé pour appliquer ces modifications.
2.  Afin de s'assurer que les styles sont recalculés, on utilise {{domxref("window.requestAnimationFrame()")}} en définissant une fonction de rappel (_callback_). La fonction de rappel est exécutée juste avant le prochain rafraîchissement du document. Seul problème : avant le rafraîchissement, le recalcul des styles n'a pas encore eu lieu. Aussi…
3.  Notre fonction de rappel invoque à nouveau `requestAnimationFrame()` ! Cette fois, la fonction de rappel est lancée avant le prochain rafraîchissement qui aura lieu après le recalcul des styles. Dans cette nouvelle fonction de rappel, on ajoute la classe `changing` à la boîte afin que l'animation soit lancée lors du rafraîchissement.

Bien entendu, on ajoutera également un gestion d'événement au bouton pour que l'ensemble soit bien branché :

```js
document.querySelector(".runButton").addEventListener("click", play, false);
```

### Résultat

{{EmbedLiveSample('Relancer_une_animation', 320, 160)}}

## Arrêter une animation

Si on retire la propriété {{cssxref("animation-name")}} appliquée à un élément, l'animation s'arrêtera au prochain état défini. Si on souhaite plutôt que l'animation se termine et parvienne à un point d'arrêt, il faudra utiliser une autre approche. Voici quelques pistes :

1.  L'animation doit être la plus isolée possible et on ne doit pas reposer sur  `animation-direction: alternate`. Il faut une animation explicitement séquencée qui parcourt l'ensemble de l'animation en un cycle.
2.  Utiliser JavaScript pour retirer l'animation lorsque l'évènement `animationiteration` se déclenche.

Ces pistes sont utilisées dans la démonstration suivante :

### CSS

```css
.slidein {
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}

.stopped {
  animation-name: none;
}

@keyframes slidein {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 50%;
  }
  100% {
    margin-left: 0%;
  }
}
```

### HTML

```html
<h1 id="watchme">Cliquer pour arrêter</h1>
```

### JavaScript

```js
let watchme = document.getElementById('watchme')

watchme.className = 'slidein'
const listener = (e) => {
  watchme.className = 'slidein stopped'
}
watchme.addEventListener('click', () =>
  watchme.addEventListener('animationiteration', listener, false)
)
```

### Résultat

{{EmbedLiveSample("Arrêter_une_animation")}}

[Voir cette démo](https://jsfiddle.net/morenoh149/5ty5a4oy/)

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS)
- [Les animations CSS](/fr/docs/Web/CSS/Animations_CSS)
- {{domxref("Window.requestAnimationFrame()")}}
