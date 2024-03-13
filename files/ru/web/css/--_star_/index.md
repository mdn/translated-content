---
title: "Кастомные свойства (--*): CSS переменные"
slug: Web/CSS/--*
---

{{CSSRef}}

Имена свойств с префиксом `--`, например `--example-name`, представляют собой _кастомные свойства_, содержащие значения, которые можно переиспользовать в прочих декларациях, при помощи функции ({{cssxref("var()")}}).

Область действия кастомного свойства ограничена элементом, для которого оно объявлено. Кастомные свойства также могут менять свои значения согласно правилам каскадирования.

{{CSSInfo}}

## Синтаксис

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- `<declaration-value>`
  - : Это значение соответствует любой последовательности из одного или нескольких токенов, если последовательность не содержит запрещенных токенов. Оно представляет собой все, что действительное объявление может иметь в качестве значения.

> **Примечание:** Имена кастомных свойств чувствительны к регистру — таким образом `--my-color` и `--My-color` будут определены, как два различных кастомных свойства.

### Синтаксис

{{CSSSyntax}}

## Пример

### HTML

```html
<p id="firstParagraph">Этот параграф должен иметь синий фон и жёлтый текст.</p>
<p id="secondParagraph">Этот параграф должен иметь жёлтый фон и синий текст.</p>
<div id="container">
  <p id="thirdParagraph">
    Этот параграф должен иметь зелёный фон и жёлтый текст.
  </p>
</div>
```

### CSS

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #290;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### Результат

{{EmbedLiveSample('Example', 500, 130)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование переменных в CSS](/ru/docs/Web/CSS/Using_CSS_custom_properties)
- Функция {{cssxref("var", "var()")}}
