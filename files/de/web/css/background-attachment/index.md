---
title: background-attachment
slug: Web/CSS/background-attachment
tags:
  - CSS
  - CSS Background
  - CSS Eigenschaft
  - CSS Hintergrund
  - CSS Referenz
  - Referenz
translation_of: Web/CSS/background-attachment
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`background-attachment`**legt fest, ob die Position eines Hintergrundbildes innerhalb des {{glossary("viewport")}} fixiert ist, oder ob es mit seinem enthaltenden Block scrollt.

{{EmbedInteractiveExample("pages/css/background-attachment.html")}}

## Syntax

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

Die Eigenschaft `background-attachment` wird als einer der Schlüsselwortwerte aus der folgenden Liste angegeben.

### Werte

- `fixed`
  - : Der Hintergrund ist relativ zum Ansichtsfenster fixiert. Selbst wenn ein Element über einen Bildlaufmechanismus verfügt, bewegt sich der Hintergrund nicht mit dem Element. (Dies ist nicht kompatibel mit {{cssxref("background-clip", "background-clip: text", "#text")}}.)
- `local`
  - : Der Hintergrund ist relativ zum Inhalt des Elements fixiert. Wenn das Element über einen Bildlaufmechanismus verfügt, wird der Hintergrund mit dem Inhalt des Elements gescrollt, und der Hintergrundmalbereich und der Hintergrundpositionierungsbereich sind relativ zum scrollbaren Bereich des Elements und nicht zum Rand, der sie umrahmt.
- `scroll`
  - : Der Hintergrund ist relativ zum Element selbst fixiert und scrollt nicht mit seinem Inhalt. (Er ist effektiv an den Rand des Elements gebunden).
- {{cssxref("&lt;initial&gt;")}}
  - : Setzt den Standardwert für diese Eigenschaft
- {{cssxref("&lt;inherit&gt;")}}
  - : Diese Eigenschaft erbt den Wert von seinem Elternelement.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.
</p>
```

#### CSS

```css
p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif");
  background-attachment: fixed;
}
```

#### Ergebnis

{{EmbedLiveSample("Simple_example")}}

### Mehrere Hintergründe

Diese Eigenschaft unterstützt mehrere Hintergrundbilder. Sie können für jeden Hintergrund ein anderes `<attachment>` , durch Kommata getrennt, angeben. Jedes Bild, vom ersten bis zum letzten, wird dem entsprechenden `<attachment>` Typ zugeordnet.

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.

  Suddenly she came upon a little three-legged table, all made of solid
  glass; there was nothing on it except a tiny golden key, and Alice's
  first thought was that it might belong to one of the doors of the hall;
  but, alas! either the locks were too large, or the key was too small,
  but at any rate it would not open any of them. However, on the second
  time round, she came upon a low curtain she had not noticed before, and
  behind it was a little door about fifteen inches high: she tried the
  little golden key in the lock, and to her great delight it fitted!
</p>
```

#### CSS

```css
p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif"),
      url("https://mdn.mozillademos.org/files/12059/startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### Ergebnis

{{EmbedLiveSample("Multiple_background_images")}}

## Spezifikationen

| Spezifikation                                                                                                                | Status                                   | Kommentar                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-attachment', 'background-attachment')}}         | {{Spec2('CSS3 Backgrounds')}} | Das Kurzformat-Eigenschaft wurde erweitert, um mehrere Hintergründe und den `local` Wert zu unterstützen. |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-attachment', 'background-attachment')}} | {{Spec2('CSS2.1')}}                 | Keine wesentliche Änderung.                                                                               |
| {{SpecName('CSS1', '#background-attachment', 'background-attachment')}}                             | {{Spec2('CSS1')}}                 | Keine wesentliche Änderung.                                                                               |

## Browser-Kompatibilität

{{Compat("css.properties.background-attachment")}}

## Siehe auch

- [`background`](/de/CSS/background "de/CSS/background"), [`background-clip`](/de/CSS/background-clip "de/CSS/background-clip"), [`background-color`](/de/CSS/background-color "de/CSS/background-color"), [`background-image`](/de/CSS/background-image "de/CSS/background-image"), [`background-origin`](/de/CSS/background-origin "de/CSS/background-origin"), [`background-position`](/de/CSS/background-position "de/CSS/background-position"), [`background-repeat`](/de/CSS/background-repeat "de/CSS/background-repeat"), [`background-size`](/de/CSS/background-size "de/CSS/background-size")
- [`-moz-background-inline-policy`](/de/CSS/-moz-background-inline-policy "de/CSS/-moz-background-inline-policy")
