---
title: "::placeholder"
slug: Web/CSS/::placeholder
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [псевдоэлемент](/ru/docs/Web/CSS/Pseudo-elements) **`::placeholder`** представляет собой [текст placeholder](/ru/docs/Web/HTML/Forms_in_HTML#The_placeholder_attribute) в {{HTMLElement("input")}} или {{HTMLElement("textarea")}} элементах.

```css
::placeholder {
  color: blue;
  font-size: 1.5em;
}
```

В `::placeholder` можно использовать только те CSS-свойства, которые разрешены в псевдоэлементе {{cssxref("::first-line")}}.

> **Примечание:** В большинстве браузеров по умолчанию placeholder выглядит как полупрозрачный или светло-серый текст.

## Синтаксис

{{csssyntax}}

## Примеры

### Красный текст

#### HTML

```html
<input placeholder="Введите что-нибудь!" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
```

#### Результат

{{EmbedLiveSample("Красный_текст", 200, 60)}}

### Зелёный текст

#### HTML

```html
<input placeholder="Введите что-нибудь..." />
```

#### CSS

```css
input::placeholder {
  color: green;
}
```

#### Результат

{{EmbedLiveSample("Зелёный_текст", 200, 60)}}

## Проблемы доступности

### Цветовой контраст

#### Контрастность

Текст placeholder обычно имеет более светлую расцветку и содержит информацию о том, какие введённые данные будут допустимы, но при этом не является текущими введёнными данными.

Важно обеспечить достаточный цветовой контраст между placeholder и фоном, чтобы люди со слабым зрением могли его прочитать, но при этом должна быть достаточная разница между введённым текстом и текстом placeholder, чтобы пользователь не путал их.

Коэффициент цветового контраста определяется путём сравнения яркости текста placeholder и цветом фона формы ввода. Чтобы соответствовать рекомендациям [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), требуется соотношение 4.5:1 для основного текста и 3:1 для более крупного текста, например, заголовков. Крупный текст определяется как 18.66px и больше с жирным начертанием или 24px и больше с обычным начертанием.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Использование

Текст placeholder с высоким цветовым контрастом может быть воспринят как введённые данные. Текст placeholder исчезает, когда пользователь вводит что-либо в {{htmlelement("input")}} элемент. Эти обстоятельства могут помешать заполнить правильно форму, особенно людям с когнитивными проблемами.

Другой подход к представлению информации placeholder заключается в том, чтобы расположить её вне формы ввода в непосредственной близости от неё, а затем использовать [`aria-describedby`](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) для программного связывания {{HTMLElement("input")}} элемента с подсказкой.

В таком случае содержимое подсказки будет доступно даже в том случае, если что-то введено в форму. Большинство скринридеров используют `aria-describedby` для чтения подсказок после того, как будет прочитан текст метки формы. Пользователь может отключить эту функцию, если дополнительная информация окажется ему ненужной.

```html
<label for="user-email">Ваш email адрес</label>
<span id="user-email-hint" class="input-hint">Пример: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Режим высокой контрастности Windows

Текст placeholder будет отображаться с теми же стилями, что и введённый пользователем текст при работе в [режиме высокой контрастности Windows](/ru/docs/Web/CSS/-ms-high-contrast). Это вызовет затруднения с определением того какой текст был введён, а какой является placeholder.

- [Greg Whitworth — How to use -ms-high-contrast](http://www.gwhitworth.com/blog/2017/04/how-to-use-ms-high-contrast)

### Метки

Placeholder не является заменой элемента {{htmlelement("label")}}. Без метки, которая программно связывается с формой с помощью [`for`](/ru/docs/Web/HTML/Element/label#for) и [`id`](/ru/docs/Web/HTML/Global_attributes#id) атрибутов, такие программы, как скринридеры не смогут анализировать элементы {{htmlelement("input")}}.

- [MDN Basic form hints](/ru/docs/Web/Accessibility/ARIA/forms/Basic_form_hints)
- [Placeholders in Form Fields Are Harmful — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Псевдокласс {{cssxref(":placeholder-shown")}}, который позволяет применять стили к элементу с **активным** placeholder.
- Связанные HTML-элементы: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML-формы](/ru/docs/Learn/HTML/Forms)
