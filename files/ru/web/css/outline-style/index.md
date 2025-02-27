---
title: outline-style
slug: Web/CSS/outline-style
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

[CSS-свойство](/ru/docs/Web/CSS) **`outline-style`** задаёт стиль обводки элемента. Обводка — линия вокруг элемента за пределами рамки ({{cssxref("border")}}).

{{EmbedInteractiveExample("pages/css/outline-style.html")}}

При определении внешнего вида обводки зачастую удобнее всего воспользоваться сокращённым свойством {{cssxref("outline")}}.

## Синтаксис

```css
/* Ключевые слова */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* Глобальные значения */
outline-style: inherit;
outline-style: initial;
outline-style: revert;
outline-style: revert-layer;
outline-style: unset;
```

Свойство `outline-style` может быть иметь одно из перечисленных ниже значений.

### Значения

- `auto`
  - : Оставляет стиль обводки на усмотрение браузера.
- `none`
  - : Отсутствие обводки. Значение {{cssxref("outline-width")}} в таком случае будет `0`.
- `dotted`
  - : Обводка в виде линии из точек.
- `dashed`
  - : Обводка в виде пунктирной линии.
- `solid`
  - : Обводка в виде сплошной линии.
- `double`
  - : Обводка из двух сплошных линий. Значение {{cssxref("outline-width")}} — это сумма двух линий и расстояния между ними.
- `groove`
  - : Обводка выглядит так, словно она выгравирована на странице.
- `ridge`
  - : Противоположность `groove`: обводка полностью объёмная, словно выдавлена из страницы.
- `inset`
  - : Обводка выглядит так, словно блок погружается в страницу.
- `outset`
  - : Противоположность `inset`: обводка выглядит так, словно приподнимает блок на странице.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### с

Значение `auto` стилизует обводку согласно [спецификации](https://www.w3.org/TR/css-ui-3/#outline-style): "как правило, это либо стандартный стиль для данной платформы, либо что-то более разнообразное, как например, яркая обводка с закруглёнными краями".

#### HTML

```html
<div>
  <p class="auto">Демонстрация обводки</p>
</div>
```

#### CSS

```css
.auto {
  outline-style: auto; /* То же самое, что и "outline: auto" */
}

/* Для большей наглядности примера */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Результат

{{ EmbedLiveSample('Применение стиля по умолчанию') }}

### Стиль обводки из линий в виде штрихов и точек

#### HTML

```html
<div>
  <div class="dotted">
    <p class="dashed">Демонстрация обводки</p>
  </div>
</div>
```

#### CSS

```css
.dotted {
  outline-style: dotted; /* То же самое, что и "outline: dotted" */
}
.dashed {
  outline-style: dashed;
}

/* Для большей наглядности примера */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Результат

{{ EmbedLiveSample('Стиль обводки из линий в виде штрихов и точек') }}

### Стиль обводки из сплошной и двойной линий

#### HTML

```html
<div>
  <div class="solid">
    <p class="double">Демонстрация обводки</p>
  </div>
</div>
```

#### CSS

```css
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* Для большей наглядности примера */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Результат

{{ EmbedLiveSample('Стиль обводки из сплошной и двойной линий') }}

### Применение стилей обводки groove и ridge

#### HTML

```html
<div>
  <div class="groove">
    <p class="ridge">Демонстрация обводки</p>
  </div>
</div>
```

#### CSS

```css
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* Для большей наглядности примера */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Результат

{{ EmbedLiveSample('Применение стилей обводки groove и ridge') }}

### Применение стилей обводки inset и outset

#### HTML

```html
<div>
  <div class="inset">
    <p class="outset">Демонстрация обводки</p>
  </div>
</div>
```

#### CSS

```css
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* Для большей наглядности примера */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Результат

{{ EmbedLiveSample('Применение стилей обводки inset и outset') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-width")}}
