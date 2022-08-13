---
title: text-justify
slug: Web/CSS/text-justify
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Text
  - Referenz
translation_of: Web/CSS/text-justify
---
{{CSSRef}}

Die CSS Eigenschaft **`text-justify`** legt fest, wie der Blocksatz ausgeführt werden soll, wenn ein Element auf {{cssxref("text-align")}}`: justify;` gesetzt ist.

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Deprecated value */
```

{{cssinfo}}

## Syntax

Die Eigenschaft `text-justify` wird mit einem der Schlüsselwörter aus der folgenden Liste definiert.

### Values

- `none`
  - : Der Blocksatz ist abgeschaltet. Dies hat den gleichen Effekt wie wenn {{cssxref("text-align")}} überhaupt nicht definiert ist. Diese Einstellung is nützlich, wenn man den Blocksatz dynamisch ein- und ausschalten möchte.
- `auto`
  - : Der Browser entscheidet, wie der Blocksatz ausgeführt wird, abhängig von Performance und Qualität, aber auch, was angemessen ist für die Sprache des Textes (z.B. Deutsch, asiatische Sprachen). Dies ist die Standardeinstellung, wenn `text-justify` nicht definiert ist.
- `inter-word`
  - : Um den Blocksatz zu erreichen, wird Weißraum zwischen den _Wörtern_ eingefügt (also eine Variante zu {{cssxref("word-spacing")}}). Diese Form ist gebräuchlich für Sprachen, die Wörter mit Leerzeichen trennen, wie Deutsch oder Koreanisch.
- `inter-character`
  - : Um den Blocksatz zu erreichen, wird Weißraum zwischen den _Zeichen_ eingefügt (also eine Variante zu {{cssxref("letter-spacing")}}). Diese Form ist gebräuchlich für Sprachen wie Japanisch.
- `distribute` {{deprecated_inline}}
  - : Zeigt das gleiche Verhalten wie `inter-character`; dieser Wert wird beibehalten, um Abwärtskompatibilität zu gewährleisten.

### Formal syntax

{{csssyntax}}

## Beispiele

```html hidden
<p class="none"><code>text-justify: none</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="auto"><code>text-justify: auto</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="dist"><code>text-justify: distribute</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="word"><code>text-justify: inter-word</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
<p class="char"><code>text-justify: inter-character</code> —<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.</p>
```

```css
p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}
```

{{EmbedLiveSample("Examples","100%",400)}}

## Spezifikationen

| Specification                                                                            | Status                       | Comment |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('CSS3 Text', '#text-justify-property', 'text-justify')}} | {{Spec2('CSS3 Text')}} |         |

## Browserkompatibilität

{{Compat("css.properties.text-justify")}}

## Siehe auch

- {{cssxref("text-align")}}
