---
title: word-break
slug: Web/CSS/word-break
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`word-break`** определяет, где будет установлен перевод на новую строку в случае превышения текстом границ блока.

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## Синтаксис

```css
/* Значения ключевых слов */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* не включено в стандарт */

/* Глобальные значения */
word-break: inherit;
word-break: initial;
word-break: unset;
```

Свойство `word-break` определяется одним из описанных ниже ключевых слов.

### Значения

- `normal`
  - : Поведение по умолчанию для расстановки перевода строк.
- `break-all`
  - : При превышении границ блока, перевод строки будет вставлен между любыми двумя символами (за исключением текста на китайском/японском/корейском языке).
- `keep-all`
  - : Перевод строки не будет использован в тексте на китайском/японском/корейском языке. Для текста на других языках будет применено поведение по умолчанию (`normal`).
- `break-word` {{Non-standard_Inline}}
  - : При превышении границ блока, обычно остающиеся целыми слова, могут быть разбиты в произвольном месте, если не будет найдено более подходящее для переноса строки место.

> **Примечание:** В отличие от `word-break: break-word` и `overflow-wrap: break-word` (смотри {{cssxref("overflow-wrap")}}), `word-break: break-all` вставит перевод строки в том месте, где текст будет превышать занимаемый им блок (даже в том случае, когда текст можно перенести по словам).

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.narrow {
  padding: 5px;
  border: 1px solid;
  display: table;
  max-width: 100%;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample('Примеры', '100%', 600)}}

## Спецификации

| Specification                                                   | Status                 | Comment            |
| --------------------------------------------------------------- | ---------------------- | ------------------ |
| {{SpecName('CSS3 Text', '#word-break-property', 'word-break')}} | {{Spec2('CSS3 Text')}} | Initial definition |

{{cssinfo}}

## Браузерная совместимость

{{Compat}}

## See also

- {{cssxref("overflow-wrap")}}
