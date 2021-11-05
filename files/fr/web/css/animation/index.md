---
title: animation
slug: Web/CSS/animation
translation_of: Web/CSS/animation
---
{{CSSRef}}

La propriété **`animation`** est [une propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) qui permet de d'appliquer une animation entre des styles.

C'est une propriété qui synthétise les propriétés suivantes :

- {{cssxref("animation-name")}},
- {{cssxref("animation-duration")}},
- {{cssxref("animation-timing-function")}},
- {{cssxref("animation-delay")}},
- {{cssxref("animation-iteration-count")}},
- {{cssxref("animation-direction")}},
- {{cssxref("animation-fill-mode")}},
- {{cssxref("animation-play-state")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

```css
/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
  animation: 3s linear 1s slidein;

/* @keyframes duration | name */
  animation: 3s slidein;
```

## Exemple d'animation

```html hidden
<div class="grid">
  <div class="col">
    <div class="note">
      Avec l'animation suivante :
      <pre>@keyframes slidein {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}</pre>
    </div>
    <div class="row">
      <div class="cell">
        <button class="play" title="LECTURE"></button>
      </div>
      <div class="cell flx">
        <div class="overlay">animation: 3s ease-in 1s 2 reverse both paused slidein;</div>
        <div class="animation a1"></div>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <button class="pause" title="PAUSE"></button>
      </div>
      <div class="cell flx">
        <div class="overlay">animation: 3s linear 1s slidein;</div>
        <div class="animation a2"></div>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <button class="pause" title="PAUSE"></button>
      </div>
      <div class="cell flx">
        <div class="overlay">animation: 3s slidein;</div>
        <div class="animation a3"></div>
      </div>
    </div>
  </div>
</div>
```

```css hidden
html,body {
  height: 100%;
  box-sizing: border-box;
}

pre { margin-bottom: 0; }
svg { width: 1.5em; height: 1.5em; }

button {
  width: 27px;
  height: 27px;
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
}

button.play {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#play');
}

button.pause {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#pause');
}

button.restart {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#restart');
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #EEE;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  box-sizing: border-box;
  margin: .5em;
  padding: 0;
  background-color: #FFF;
  overflow: hidden;
  text-align: left;
}

.flx {
  flex: 1 0;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: .5em;
  font: .8em sans-serif;
  text-align: left;
  flex: none;
}

.overlay { padding: .5em; }

@keyframes slidein {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.a1 { animation: 3s ease-in 1s 2 reverse both paused slidein; }
.a2 { animation: 3s linear 1s slidein; }
.a3 { animation: 3s slidein; }

.animation {
  background: #3F87A6;
  width: 100%;
  height: calc(100% - 1.5em);
  transform-origin: left center;
}
```

```js hidden
window.addEventListener('load', function () {
  var ANIMATION = Array.from(document.querySelectorAll('.animation'));
  var BUTTON    = Array.from(document.querySelectorAll('button'));

  function toggleButton (btn, type) {
    btn.classList.remove('play', 'pause', 'restart');
    btn.classList.add(type);
    btn.title = type.toUpperCase(type);
  }

  function playPause (i) {
    var btn  = BUTTON[i];
    var anim = ANIMATION[i];

    if (btn.classList.contains('play')) {
      anim.style.animationPlayState = 'running';
      toggleButton(btn, 'pause');
    } else if (btn.classList.contains('pause')) {
      anim.style.animationPlayState = 'paused';
      toggleButton(btn, 'play');
    } else {
      anim.classList.remove('a' + (i + 1));
      setTimeout(function () {
        toggleButton(btn, i === 0 ? 'play' : 'pause');
        anim.style.animationPlayState = '';
        anim.classList.add('a' + (i + 1));
      }, 100)
    }
  }

  ANIMATION.forEach(function (node, index) {
    node.addEventListener('animationstart', function () { toggleButton(BUTTON[index], 'pause');   });
    node.addEventListener('animationend',   function () { toggleButton(BUTTON[index], 'restart'); });
  });

  BUTTON.forEach(function (btn, index) {
    btn.addEventListener('click', function () { playPause(index); });
  });
})
```

{{EmbedLiveSample("Exemple_danimation", "100%", 260, "", "", "example-outcome-frame")}}

[Une liste des propriétés qui peuvent être animées](/fr/docs/Web/CSS/Liste_propriétés_CSS_animées) est disponible. On notera que cette liste est également valable pour [les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Utiliser_transitions_CSS).

## Syntaxe

La propriété `animation` se définit grâce à une ou plusieurs animations, séparées par des virgules.

Chaque animation se définit comme :

- zéro ou une valeur du type :

  - {{cssxref("&lt;single-transition-timing-function&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#&lt;single-animation-iteration-count&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#&lt;single-animation-direction&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#&lt;single-animation-fill-mode&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#&lt;single-animation-play-state&gt;")}}

- un nom optionnel pour l'animation ; celui-ci peut être le mot-clé `none`, un identifiant ({{cssxref("&lt;custom-ident&gt;")}}) ou une chaîne de caractères ({{cssxref("&lt;string&gt;")}})
- zéro, une ou deux valeurs de type {{cssxref("&lt;time&gt;")}}

L'ordre des valeurs est important : la première valeur qui peut être analysée comme une valeur de type {{cssxref("&lt;time&gt;")}} sera affectée à {{cssxref("animation-duration")}} et la deuxième à {{cssxref("animation-delay")}}.

L'ordre des valeurs est également important pour chaque définition d'animation afin d'identifier la valeur de {{cssxref("animation-name")}} parmi les autres mots-clés. Lors de l'analyse de la déclaration, les mots-clés valides pour d'autres propriétés que {{cssxref("animation-name")}} et dont les valeurs n'ont pas été trouvées avant doivent être affectés à ces différentes propriétés et non à {{cssxref("animation-name")}}. De plus, lors de la sérialisation, les valeurs par défaut doivent être expliciter autant que nécessaire pour distinguer une valeur pour {{cssxref("animation-name")}} qui pourrait être une valeur pour une autre propriété.

### Valeurs

- `<single-animation-iteration-count>`
  - : Le nombre de fois où l'animation est jouée, cf.  {{cssxref("animation-iteration-count")}}.
- `<single-animation-direction>`
  - : La direction dans laquelle s'effectue l'animation, cf. {{cssxref("animation-direction")}}.
- `<single-animation-fill-mode>`
  - : La façon dont les styles sont appliquées à la cible de l'animation, avant et après son exécution, cf. {{cssxref("animation-fill-mode")}}.
- `<single-animation-play-state>`
  - : Si l'animation est lancée ou non, cf. {{cssxref("animation-play-state")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

> **Note :** D'autres exemples sont disponibles sur la page [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

### Vue laser

#### HTML

```html
<div class="view_port">
  <div class="polling_message">
    En attente
  </div>
  <div class="cylon_eye"></div>
</div>
```

#### CSS

```css
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}

.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: red;
  background-image:         linear-gradient(to right, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
          animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
        @keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
```

#### Résultat

{{EmbedLiveSample('Vue_laser')}}

## Accessibilité

Les animations qui clignotent ou scintillent sont problématiques et notamment pour les personnes souffrant de problèmes cognitifs. De plus, certains types de mouvement peuvent déclencher des désordres vestibulaires, des épilepsies, des migraines ou une sensibilité scotopique.

Veillez à fournir un mécanisme qui permette d'interrompre ou de désactiver l'animation ainsi qu'à utiliser [une requête média avec `prefers-reduced-motion`](/fr/docs/Web/CSS/@media/prefers-reduced-motion) pour les mouvements réduits afin d'obtenir une ergonomie complémentaire pour les personnes souhaitant ne pas avoir d'animations.

- [_Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article_ (en anglais)](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [_An Introduction to the Reduced Motion Media Query - CSS-Tricks_ (en anglais)](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [_Responsive Design for Motion - WebKit_ (en anglais)](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [Comprendre les règles WCAG 2.2](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- _[Understanding Success Criterion 2.2.2 - W3C Understanding WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)_

## Spécifications

| Spécification                                                                | État                                 | Commentaires         |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Animations', '#animation', 'animation')}} | {{Spec2('CSS3 Animations')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.animation")}}

### Notes relatives à Quantum (Firefox)

- Gecko possède un bug qui fait que lorsqu'on anime un élément en dehors de l'écran pour le faire apparaître à l'écran après une durée donnée, il n'effectue pas de _repaint_ sur certaines plateformes (par exemple Windows, cf. ({{bug(1383239)}})). Ce problème a été corrigé avec le nouveau moteur de rendu CSS, [Stylo](https://wiki.mozilla.org/Quantum/Stylo), prévu pour Firefox 57.
- Un autre bug empêche d'ouvrir les éléments {{htmlelement("details")}} par défaut avec l'attribut `open` si ceux-ci sont animés (cf. {{bug(1382124)}}). Cet autre point est également résolu avec Stylo.
- Un autre bug ne répercute pas les modifications de {{cssxref("font-size")}} sur les animations qui utilisent l'unité `em` pour l'élément parent (cf. {{bug(1254424)}}). Stylo règle ce problème.

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS)
- {{domxref("AnimationEvent", "AnimationEvent")}}
