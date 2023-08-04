---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`overflow-wrap`** применяется к строковым элементам, устанавливая должен ли браузер расставлять переносы строк внутри неразрывной строки, чтобы избежать выхода текста за границы элемента.

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

> **Примечание:** В отличие от {{cssxref("word-break")}}, `overflow-wrap` создаёт перенос только, если целое слово не может быть размещено на своей линии без переполнения

Изначально свойство `word-wrap` не было стандартом, хотя и было реализовано большинством браузеров. Впоследствии оно было переименовано в `overflow-wrap` c алиасом `word-wrap`.

## Syntax

```css
/* Keyword values */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;

/* Global values */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: unset;
```

Свойство `overflow-wrap` задаётся с помощью ключевого слова и выбирается из списка значений приведённых ниже:

### Values

- `normal`
  - : Разрыв строк происходит согласно обычным правилам разрыва (такими как пробел между двумя словами).
- `anywhere`
  - : Чтобы избежать выхода текста за границы элемента, таких как длинных слов или URL, неразрывная строка символов может быть разбита в любой точке, если в строке нет других допустимых точек разрыва. Тире не вставляется. Возможность мягкого переноса, представленная разрывом слов, рассматривается, когда вычисляется минимальный контент внутренних размеров.
- `break-word`
  - : Так же как и со значением `anywhere`, слова, которые обычно нельзя перенести по слогам, могут быть разбиты в произвольных точках, если нет других допустимых разрывов в строке, но возможность мягкого переноса, представленная разрывом слов не рассматривается, когда вычисляется минимальный контент внутренних размеров.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Сравнение overflow-wrap, word-break, и hyphens

Этот пример сравнивает результаты применения `overflow-wrap`, `word-break`, и `hyphens`, когда разбивается длинное слово.

#### HTML

```html
<p>
  They say the fishing is excellent at Lake
  <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>normal</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: anywhere</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: break-word</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>word-break</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, without
  <code>lang</code> attribute)
</p>
<p lang="en">
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, English rules)
</p>
<p class="hyphens" lang="de">
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, German rules)
</p>
```

#### CSS

```css
p {
  width: 13em;
  margin: 2px;
  background: gold;
}

.ow-anywhere {
  overflow-wrap: anywhere;
}

.ow-break-word {
  overflow-wrap: break-word;
}

.word-break {
  word-break: break-all;
}

.hyphens {
  hyphens: auto;
}
```

#### Result

{{ EmbedLiveSample('Сравнение_overflow-wrap_word-break_и_hyphens', '100%', 260) }}

## Specifications

| Specification                                                          | Status                   | Comment            |
| ---------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{ SpecName('CSS3 Text', '#propdef-overflow-wrap', 'overflow-wrap') }} | {{ Spec2('CSS3 Text') }} | Initial definition |

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{cssxref("text-overflow")}}
