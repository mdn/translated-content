---
title: '<u>: Элемент слабой аннотации (подчёркивание)'
slug: Web/HTML/Element/u
translation_of: Web/HTML/Element/u
---

{{HTMLSidebar}}

The HTML **Unarticulated Annotation Element** (**`<u>`**) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.

> **Предупреждение:** This element used to be called the "Underline" element in older versions of HTML, and is still sometimes misused in this way. To underline text, you should instead apply a style that includes the CSS {{cssxref("text-decoration")}} property set to `underline`.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

See the [Usage notes](#usage_notes) section for further details on when it's appropriate to use `<u>` and when it isn't.

| [Content categories](/ru/docs/Web/HTML/Content_categories) | [Flow content](/ru/docs/Web/HTML/Content_categories#Flow_content), [phrasing content](/ru/docs/Web/HTML/Content_categories#Phrasing_content), palpable content. |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | [Phrasing content](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                                                      |
| Tag omission                                               | {{no_tag_omission}}                                                                                                                                        |
| Permitted parents                                          | Any element that accepts [phrasing content](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                             |
| Permitted ARIA roles                                       | Any                                                                                                                                                             |
| DOM interface                                              | {{domxref("HTMLElement")}}                                                                                                                            |

## Атрибуты

This element only includes the [global attributes](/ru/docs/Web/HTML/Global_attributes).

## Использование

Along with other pure styling elements, the original HTML Underline (`<u>`) element was deprecated in HTML 4; however, `<u>` was restored in HTML 5 with a new, semantic, meaning: to mark text as having some form of non-textual annotation applied.

> **Примечание:** Be careful to avoid using the `<u>` element with its default styling (of underlined text) in such a way as to be confused with a hyperlink, which is also underlined by default.

### Use cases

Valid use cases for the `<u>` element include annotating spelling errors, applying a proper name mark to denote proper names in Chinese text, and other forms of annotation.

You should _not_ use `<u>` to simply underline text for presentation purposes, or to denote titles of books.

### Other elements to consider using

In most cases, you should use an element other than `<u>`, such as:

- {{HTMLElement("em")}} to denote stress emphasis
- {{HTMLElement("b")}} to draw attention to text
- {{HTMLElement("mark")}} to mark key words or phrases
- {{HTMLElement("strong")}} to indicate that text has strong importance
- {{HTMLElement("cite")}} to mark the titles of books or other publications
- {{HTMLElement("i")}} to denote technical terms, transliterations, thoughts, or names of vessels in Western texts

To provide textual annotations (as opposed to the non-textual annotations created with `<u>`), use the {{HTMLElement("ruby")}} element.

To apply an underlined appearance without any semantic meaning, use the {{cssxref("text-decoration")}} property's value `underline`.

## Примеры

### Indicating a spelling error

This example uses the `<u>` element and some CSS to display a paragraph which includes a misspelled error, with the error indicated in the red wavy underline style which is fairly commonly used for this purpose.

#### HTML

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u>
spelled word.</p>
```

In the HTML, we see the use of `<u>` with a class, `spelling`, which is used to indicate the misspelling of the word "wrongly".

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

This CSS indicates that when the `<u>` element is styled with the class `spelling`, it should have a red wavy underline underneath its text. This is a common styling for spelling errors. Another common style can be presented using `red dashed underline`.

#### Result

The result should be familiar to anyone who has used any of the more popular word processors available today.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Avoiding \<u>

Most of the time, you actually don't want to use `<u>`. Here are some examples that show what you should do instead in several cases.

#### Non-semantic underlines

To underline text without implying any semantic meaning, use a {{HTMLElement("span")}} element with the {{cssxref("text-decoration")}} property set to `"underline"`, as shown below.

##### HTML

```html
<span class="underline">Today's Special</span>
<br>
Chicken Noodle Soup With Carrots
```

##### CSS

```css
.underline {
  text-decoration: underline;
}
```

##### Result

{{EmbedLiveSample("Non-semantic_underlines", 650, 80)}}

#### Presenting a book title

Book titles should be presented using the {{HTMLElement("cite")}} element instead of `<u>` or even `<i>`.

##### HTML

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

##### Result with default style

{{EmbedLiveSample("example-unstyled-cite", 650, 80)}}

Note that the default styling for the `<cite>` element renders the text in italics. You can, if you wish, override that using CSS:

```css
cite {
  font-style: normal;
  text-decoration: underline;
}
```

##### Result with custom style

{{EmbedLiveSample("Presenting_a_book_title", 650, 80)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- The {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, and {{HTMLElement("cite")}} elements should usuallly be used instead.
- The CSS {{cssxref("text-decoration")}} property should be used for non-semantic underlining.
