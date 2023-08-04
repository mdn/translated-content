---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
---

{{CSSRef}}{{SeeCompatTable}}

Свойство **`hanging-punctuation`** определяет как браузер будет отображать знаки пунктуации, попадающие в начало или в конец строки. Висячая пунктуация может располагаться за границами контейнера.

```css
/* Значения ключевых слов */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* Два ключевых слова */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* Три ключевых слова */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;

/* Общие значения */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: unset;
```

{{CSSInfo}}

## Синтаксис

Свойство `hanging-punctuation` может быть определено с помощью одного, двух или трёх ключевых слов.

- Для **одного значения** может быть использовано любое из описанных ниже значений.
- Для **двух значений** используются следующие варианты:

  - `first` вместе с одним из `last`, `allow-end` или `force-end`
  - `last` вместе с одним из `first`, `allow-end` или `force-end`

- Для **трёх значений** используются один из следующих вариантов:

  - `first`, `allow-end` и `last`
  - `first`, `force-end` и `last`

### Значения

- `none`
  - : Никакие символы не выносятся.
- `first`
  - : Открывающая скобка или кавычка в начале первой строки выровненного элемента будет вынесена.
- `last`
  - : Закрывающая скобка или кавычка последней строки выровненного элемента будет вынесена.
- `force-end`
  - : Точка или запятая в конце строки выносится.
- `allow-end`
  - : Точка или запятая в конце строки будет вынесена, если нет лучшего варианта для выравнивания.

### Формальный синтаксис

{{CSSSyntax}}

## Пример

### HTML

```html
<p>
  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim
  nunc mauris, et sollicitudin est scelerisque sed. Praesent laoreet tortor
  massa, sit amet vulputate nulla pharetra ut.”
</p>
```

### CSS

```css
p {
  hanging-punctuation: first last;
  margin: 0.5rem;
}
```

### Результат

{{EmbedLiveSample("Пример")}}

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}
