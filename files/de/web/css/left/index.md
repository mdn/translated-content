---
title: left
slug: Web/CSS/Left
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - Referenz
translation_of: Web/CSS/left
---
{{CSSRef}}

## Übersicht

Die CSS Eigenschaft `left` definiert einen Teil der Position von positionierten Elementen.

Bei absolut positionierten Elementen (jene mit {{cssxref("position")}}`: absolute` oder `position: fixed`) wird der Abstand zwischen der linken, äußeren Rand des Elements und dem linken Rand des umschließenden Blocks definiert.

{{cssinfo}}

## Syntax

```css
/* <length> Werte */
left: 3px;
left: 2.4em;

/* <percentage> Werte bezogen auf die Breite des beinhaltenden Blocks */
left: 10%;

/* Schlüsselwortwerte */
left: auto;

/* Globale Werte */
left: inherit;
left: initial;
left: unset;
```

### Werte

- `<length>`
  - : Ist eine negative, null oder positive {{cssxref("&lt;length&gt;")}}, die folgendem entspricht:\* für _absolute positionierte Elemente_, die Distanz zum linken Rand des beinhaltenden Blocks
    - für _relativ positionierte Elemente_, der Versatz, um den das Element von seiner Position im normalen Fluss nach links verschoben ist, falls es nicht positioniert wäre.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert der Breite des beinhaltenden Blocks, wie in der [Übersicht](#Übersicht) beschrieben.
- `auto`
  - : Ist ein Schlüsselwort, das folgendem entspricht:\* für absolut positionierte Elemente, die Position des Elements basierend auf der {{cssxref("right")}} Eigenschaft und `width: auto` wird als Breite basierend auf dem Inhalt behandelt.
    - für relativ positionierte Elemente, der linke Versatz des Elements von der Originalposition basierend auf der {{cssxref("right")}} Eigenschaft oder falls `right` ebenfalls `auto` ist, wird wird es nicht verschoben.

## Beispiele

### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5C5C5C;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  word-wrap: break-word;
}

#example_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #D8F5FF;
}

#example_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #C1FFDB;

}
#example_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #FFD7C2;
}

#example_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #FFC7E4;
}
```

### HTML

```html
<div id="wrap">
  <div id="example_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>Das einzige Element, das dieser Div beinhaltet, ist das Hauptfenster. Daher positioniert er sich in Bezug dazu.</p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>Relative Position in Bezug auf seine Geschwisterelemente.</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>Relativ zu seinem Geschwister-Div darüber, jedoch aus dem Inhaltsfluss entfernt.</p>

    <div id="example_4">
      <pre>
        position: absolute;
        top: 10px;
        left: 20px;
      </pre>
      <p>Absolute Position innerhalb des Elternelements mit relativer Position.</p>
    </div>
  </div>
</div>
```

### Live Beispiel

{{EmbedLiveSample('Beispiele', 1200, 650)}}

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar                        |
| -------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'left')}} | {{Spec2('CSS3 Transitions')}} | Definiert `left` als animierbar. |
| {{SpecName('CSS2.1', 'visuren.html#propdef-left', 'left')}} | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition         |

## Browser Kompatibilität

{{Compat("css.properties.left")}}

## Siehe auch

- {{cssxref("position")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}
