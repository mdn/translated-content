---
title: text-overflow
slug: Web/CSS/text-overflow
tags:
  - CSS
  - CSS Eigenschaft
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/text-overflow
---
{{CSSRef}}

## Übersicht

Die **`text-overflow`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie überlaufende Inhalte die nicht angezeigt werden (Siehe {{cssxref("overflow")}}) dem Nutzer signalisiert werden. Sie können abgeschnitten (clipped) oder durch ein Auslassungszeichen ('`…`', `U+2026 Horizontal Ellipsis`) beziehungsweise eine vom Webautor definierte Zeichenfolge markiert sein.

![text-overflow.png](/@api/deki/files/5846/=text-overflow.png)

Das Abschneiden des überlaufenden Textes findet exakt am Rand des Inhaltselements statt. Um erst nach einem vollen Zeichen abzuschneiden, kann eine leere benutzerdefinierte Zeichenfolge angegeben werden (' ').

Diese Eigenschaft beeinflusst nur Inhalte, welche aus einem Blockelement in dessen _inline_-Richtung überlaufen (beispielsweise wird Text der am unteren Ende eines Kastens überläuft nicht beeinflusst). Ein Textüberlauf kann auftreten, wenn ein Text-wrapping verhindert wird (z.B., durch ‘`white-space:nowrap`’) oder wenn ein einzelnes Wort zu lang ist.

Diese CSS Eigenschaft erzwingt keinen Textüberlauf; um dies zu erreichen und somit die `text-overflow`-Eigenschaft anzuwenden, muss der Autor dem Element weitere Eigenschaften zuweisen, u. a. den {{cssxref("overflow")}} auf `hidden` setzen.

{{cssinfo}}

## Syntax

```css
/* Überlaufverhalten am Zeilenende
   Rechtes Ende, falls links nach rechts, linkes Ende, falls rechts nach links */
text-overflow: clip;
text-overflow: ellipsis;
text-overflow: "…";

/* Überlaufverhalten am linken/rechten Ende
   Richtung hat keinen Einfluss */
text-overflow: clip ellipsis;
text-overflow: "…" "…";

/* Globale Werte */
text-overflow: inherit;
text-overflow: initial;
text-overflow: unset;
```

### Werte

- `clip`
  - : Dieses Schlüsselwort führt dazu, dass Text genau am Ende des [Inhaltsbereichs](/de/docs/Web/CSS/Boxmodell) abgeschnitten wird. Daher kann der Schnitt auch innerhalb eines Zeichens geschehen. Um am Übergang zwischen zwei Zeichen abzuschneiden, muss eine leere Zeichenfolge (`''`) verwendet werden. Der Wert `clip` ist der Standardwert für diese Eigenschaft.
- `ellipsis`
  - : Dieses Schlüsselwort führt dazu, dass ein Auslassungszeichen (`'…'`, `U+2026 Horizontal Ellipsis`) an der Schnittstelle angezeigt wird, um abgeschnittenen Text zu repräsentieren. Das Auslassungszeichen wird innerhalb des [Inhaltsbereichs angezeigt, wodurch die Menge des angezeigten Texts verringert wird. Wenn nicht genug Platz für das Auslassungszeichen selbst zur Verfügung steht, wird es abgeschnitten.](/de/docs/Web/CSS/Boxmodell)
- [`<string>` {{experimental_inline}}](/de/docs/Web/CSS/Boxmodell)
  - : [Der](/de/docs/Web/CSS/Boxmodell){{cssxref("&lt;string&gt;")}}[, welcher zur Anzeige des abgeschnittenen Texts genutzt werden soll. Diese Zeichenfolge wird innerhalb des Inhaltsbereichs](/de/docs/Web/CSS/Boxmodell) angezeigt und führt dazu, dass die Menge des angezeigten Texts verringert wird. Wenn nicht genug Platz für die Zeichenfolge selbst zur Verfügung steht, wird sie abgeschnitten.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
p {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;              /* "overflow"-Wert darf nicht "visible" sein */

  text-overflow: ellipsis;
}
```

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="col">CSS Wert</th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        <code>direction: ltr</code>
      </th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        <code>direction: rtl</code>
      </th>
    </tr>
    <tr>
      <th scope="col">Erwartetes Ergebnis</th>
      <th scope="col">Live-Ergebnis</th>
      <th scope="col">Erwartetes Ergebnis</th>
      <th scope="col">Live-Ergebnis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>visible overflow</em></td>
      <td style="font-family: monospace">1234567890</td>
      <td style="direction: ltr">
        <div
          style="
            float: left;
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: visible;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">0987654321</td>
      <td>
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: visible;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip</code></td>
      <td style="padding: 1px; font-family: monospace">
        <img
          alt="t-o_clip.png"
          class="default internal"
          src="/@api/deki/files/6056/=t-o_clip.png"
        />
      </td>
      <td style="direction: ltr">
        <div
          style="
            float: left;
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip;
          "
        >
          123456
        </div>
      </td>
      <td style="padding: 1px; font-family: monospace">
        <img
          alt="t-o_clip_rtl.png"
          class="default internal"
          src="/@api/deki/files/6057/=t-o_clip_rtl.png"
        />
      </td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ''</code></td>
      <td style="font-family: monospace">12345</td>
      <td style="direction: ltr">
        <div
          style="float: left; font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;&#x27;;"
        >
          123456
        </div>
      </td>
      <td style="font-family: monospace">54321</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;&#x27;;"
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis</code></td>
      <td style="font-family: monospace">1234…</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">…4321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: '.'</code></td>
      <td style="font-family: monospace">1234.</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: &#x27;
            .&#x27; ;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">.4321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: &#x27;
            .&#x27; ;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip clip</code></td>
      <td style="font-family: monospace">123456</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip clip;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">654321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip clip;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip ellipsis</code></td>
      <td style="font-family: monospace">1234…</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip ellipsis;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">6543…</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip ellipsis;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip '.'</code></td>
      <td style="font-family: monospace">1234.</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip &#x27;
            .&#x27; ;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">6543.</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip &#x27;
            .&#x27; ;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis clip</code></td>
      <td style="font-family: monospace">…3456</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis clip;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">…4321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis clip;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis ellipsis</code></td>
      <td style="font-family: monospace">…34…</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis ellipsis;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">…43…</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis ellipsis;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis '.'</code></td>
      <td style="font-family: monospace">…34.</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis &#x27;
            .&#x27; ;
          "
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">…43.</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis &#x27;
            .&#x27; ;
          "
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' clip</code></td>
      <td style="font-family: monospace">,3456</td>
      <td style="direction: ltr">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; clip;"
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">,4321</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; clip;"
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' ellipsis</code></td>
      <td style="font-family: monospace">,34…</td>
      <td style="direction: ltr">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27;ellipsis;"
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">,43…</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27;ellipsis;"
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' '.'</code></td>
      <td style="font-family: monospace">,34.</td>
      <td style="direction: ltr">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; &#x27;.&#x27;;"
        >
          <span
            style="direction: ltr; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
      <td style="font-family: monospace">,53.</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; &#x27;.&#x27;;"
        >
          <span
            style="direction: rtl; margin: 0 -2px; unicode-bidi: bidi-override"
            >1234567890</span
          >
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------ |
| {{SpecName('CSS3 UI', '#text-overflow', 'text-overflow')}} | {{Spec2('CSS3 UI')}} | Ursprüngliche Definition |

Eine vorherige Version dieser Schnittstelle erreichte den _Candidate Recommendation_-Status (CR). Da einige der nicht aufgeführten gefährdeten Eigenschaften entfernt werden mussten, wurde die Spezifikation auf _Working Draft_-Niveau herabgesetzt. Das erklärt, weshalb Browser diese Eigenschaft ohne Präfix, jedoch nicht im CR-Zustand, umgesetzt haben. Momentan hat die Spezifikation das _Editor's Draft_-Niveau erreicht.

## Browser Kompatibilität

{{Compat("css.properties.text-overflow")}}

## Siehe auch

- Verwandte CSS Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
