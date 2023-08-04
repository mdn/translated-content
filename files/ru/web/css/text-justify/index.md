---
title: text-justify
slug: Web/CSS/text-justify
---

{{CSSRef}}

CSS-свойство **`text-justify`** определяет какой тип выравнивания следует применить к тексту, когда {{cssxref("text-align")}}`: justify;` применяется к элементу.

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Устаревшее значение */
```

{{cssinfo}}

## Синтаксис

Свойство `text-justify` указывается как одно ключевое слово, выбранное из нижеследующего списка значений.

### Значения

- `none`
  - : Выравнивание текста отключено. Оно имеет такой же эффект как отсутствие применение свойства {{cssxref("text-align")}}, хотя оно полезно, если вам нужно включать и выключать выравнивание.
- `auto`
  - : Браузер выбирает лучший тип выравнивания в текущей ситуации, основываясь на балансе между производительностью и качеством, а также на том, что более подходит для языка текста (например, английского, иероглифных языков, и т.п.). Оно используется по умолчанию, если `text-justify` не установлен.
- `inter-word`
  - : Выравнивание текста по средствам добавления пробелов между словами (эффективно варьируя {{cssxref("word-spacing")}}), что наиболее подходит для языков, которые используют разделение слов пробелами, таких как английский или корейский.
- `inter-character`
  - : Выравнивание текста по средствам добавления пробелов между символами (effectively varying {{cssxref("letter-spacing")}}), что наиболее подходит для таких языков как японский.
- `distribute` {{deprecated_inline}}
  - : Показывает тоже поведение, что и `inter-character`; это значение сохранилось для обратной совместимости.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```html hidden
<p class="none">
  <code>text-justify: none</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="auto">
  <code>text-justify: auto</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="dist">
  <code>text-justify: distribute</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="word">
  <code>text-justify: inter-word</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="char">
  <code>text-justify: inter-character</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
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

{{EmbedLiveSample("Примеры","100%",400)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref("text-align")}}
