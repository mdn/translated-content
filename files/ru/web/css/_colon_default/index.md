---
title: ":default"
slug: Web/CSS/:default
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) **`:default`** находит элемент формы, установленный по умолчанию для группы связанных элементов.

Этот селектор используется для элементов: {{htmlelement("button")}}, [`<input type="checkbox">`](/ru/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/ru/docs/Web/HTML/Element/input/radio), и {{htmlelement("option")}} .

```css
/* Выбрать установленный по умолчанию среди <input> */
input:default {
  background-color: lime;
}
```

Сгруппированные элементы, поддерживающие множественный выбор, также могут иметь несколько элементов, выбранных по умолчанию. В этом случае псевдокласс `:default` найдёт _все_ эти элементы. Например, можно стилизовать чекбоксы по умолчанию в группе чекбоксов.

## Синтаксис

```
:default
```

## Пример

### HTML

```html
<input type="radio" name="season" id="spring" />
<label for="spring">Spring</label>

<input type="radio" name="season" id="summer" checked />
<label for="summer">Summer</label>

<input type="radio" name="season" id="fall" />
<label for="fall">Fall</label>

<input type="radio" name="season" id="winter" />
<label for="winter">Winter</label>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### Результат

{{EmbedLiveSample("Пример")}}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
