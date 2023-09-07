---
title: itemid
slug: Web/HTML/Global_attributes/itemid
---

{{HTMLSidebar("Global_attributes")}}

[Глобальный атрибут](/ru/docs/Web/HTML/Global_attributes) **`itemid`** предоставляет микроданные в форме уникального глобального идентификатора элемента. Атрибут `itemid` может быть указан только для элемента, который имеет оба атрибута [`itemscope`](/ru/docs/Web/HTML/Global_attributes#itemscope) и [`itemtype`](/ru/docs/Web/HTML/Global_attributes#itemtype). Также, `itemid` может быть указан только для элементов, обладающих атрибутом `itemscope`, соответствующий ссылке `itemtype` или определяющий словарь, поддерживающий глобальные идентификаторы.

Точное значение глобального идентификатора `itemtype` обеспечивается определением этого идентификатора в пределах указанного словаря. Словарь определяет, могут ли сосуществовать несколько элементов с одним и тем же глобальным идентификатором, и, если да, то как обрабатываются элементы с одним и тем же идентификатором.

> **Примечание:** Определение Whatwg.org указывает, что `itemid` должен быть URL. Однако, следующий пример правильно иллюстрирует, что URN, также может быть использован. Это несоответствие может отражать неполную природу спецификации микроданных.

## Пример

### HTML

```html
<dl
  itemscope
  itemtype="http://vocab.example.net/book"
  itemid="urn:isbn:0-330-34032-8">
  <dt>Title</dt>
  <dd itemprop="title">The Reality Dysfunction</dd>
  <dt>Author</dt>
  <dd itemprop="author">Peter F. Hamilton</dd>
  <dt>Publication date</dt>
  <dd><time itemprop="pubdate" datetime="1996-01-26">26 January 1996</time></dd>
</dl>
```

### Структура данных

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2" rowspan="1">
        http://vocab.example.net/book: urn:isbn:0-330-34032-8
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>The Reality Dysfunction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Peter F. Hamilton</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tr>
  </tbody>
</table>

### Результат

{{EmbedLiveSample('Пример')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Другие различные глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes)
- Другие глобальные атрибуты, связанные с микроданными

  - [`itemprop`](/ru/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/ru/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/ru/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/ru/docs/Web/HTML/Global_attributes#itemtype)
