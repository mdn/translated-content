---
title: animation
slug: Web/CSS/animation
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Referenz
translation_of: Web/CSS/animation
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/Web/CSS) Eigenschaft `animation` fasst die folgenden Werte zusammen: {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}} und {{cssxref("animation-direction")}}.

Eine [Beschreibung der animierbaren CSS Eigenschaften](/de/docs/Web/CSS/CSS_animierbare_Eigenschaften "CSS/CSS_transitions#Properties_that_can_be_animated") ist verfügbar; es sollte auch angemerkt werden, dass diese Beschreibung auch für [CSS Übergänge](/de/docs/Web/Guide/CSS/Verwendung_von_CSS_Übergängen) gilt.

{{cssinfo}}

## Syntax

```css
/* @keyframes Dauer | Timingfunktion | Verzögerung |
   Anzahl der Iterationen | Richtung | Füllmodus | Abspielstatus | Name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes Dauer | Timingfunktion | Verzögerung | Name */
  animation: 3s linear 1s slidein;

/* @keyframes Dauer | Name */
  animation: 3s slidein;
```

Die Reihenfolge innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert in der Einheit {{cssxref("&lt;time&gt;")}} wird als {{cssxref("animation-duration")}} interpretiert, der zweite als {{cssxref("animation-delay")}}.

Beachte, dass die Reihenfolge auch innerhalb jeder Animationsdefinition wichtig ist, um {{cssxref("animation-name")}} Werte von anderen Schlüsselwörtern zu unterscheiden. Beim Parsen müssen Werte von Schlüsselwörtern, die für Eigenschaften außer {{cssxref("animation-name")}} gültig sind und nicht zuvor in der Kurzschreibweiseeigenschaft gefunden wurden, für diese Eigenschaften anstatt für {{cssxref("animation-name")}} verwendet werden. Zudem müssen bei der Serialisierung die Standardwerte anderer Eigenschaften zumindest in den Fällen ausgegeben werden, in denen es nötig ist, einen {{cssxref("animation-name")}}, der ein gültiger Wert einer anderen Eigenschaft sein könnte, zu unterscheiden, und können in zusätzlichen Fällen ausgegeben werden.

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [CSS Animationen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "CSS/CSS_animations").

### Zylonenauge

Unter Berücksichtigung aller browserspezifischen Präfixe ist hier eine Zylonenauge-Animation, die lineare Farbverläufe und Animationen verwendet, die in allen Browsern funktioniert:

```html
<div class="view_port">
  <div class="polling_message">
    Warte auf Nachrichten
  </div>
  <div class="cylon_eye"></div>
</div>
```

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
  background-image: -webkit-linear-gradient(    left, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
  background-image:    -moz-linear-gradient(    left, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
  background-image:      -o-linear-gradient(    left, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
  background-image:         linear-gradient(to right, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: move_eye 4s linear 0s infinite alternate;
     -moz-animation: move_eye 4s linear 0s infinite alternate;
       -o-animation: move_eye 4s linear 0s infinite alternate;
          animation: move_eye 4s linear 0s infinite alternate;
}

@-webkit-keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
   @-moz-keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
     @-o-keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
        @keyframes move_eye { from { margin-left:-20%; } to { margin-left:100%; }  }
```

{{EmbedLiveSample('Zylonenauge')}}

## Spezifikationen

| Spezifikation                                                                | Status                               | Kommentar                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Animations', '#animation', 'animation')}} | {{Spec2('CSS3 Animations')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.animation")}}

## Siehe auch

- [CSS Animationen nutzen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "Tutorial about CSS animations")
- {{domxref("AnimationEvent", "AnimationEvent")}}
