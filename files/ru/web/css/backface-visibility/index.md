---
title: backface-visibility
slug: Web/CSS/backface-visibility
---

{{CSSRef}}{{SeeCompatTable}}

Свойство **`backface-visibility`** определяет, видно ли заднюю грань элемента, когда он повёрнут к пользователю.

{{EmbedInteractiveExample("pages/css/backface-visibility.html")}}

Задняя поверхность элемента является зеркальным отражением его передней поверхности. Однако невидимая в 2D, задняя грань может быть видимой, когда преобразование вызывает вращение элемента в 3D пространстве. (Это свойство не влияет на 2D-преобразования, которые не имеют перспективы.)

## Синтаксис

```css
/* Значения ключевых слов */
backface-visibility: visible;
backface-visibility: hidden;

/* Глобальные значения */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: unset;
```

Свойство `backface-visibility` указывается в качестве одного из ключевых слов, перечисленных ниже.

### Значения

- `visible`
  - : Задняя сторона видна, когда повёрнута к пользователю.
- `hidden`
  - : Задняя поверхность скрыта, что делает элемент невидимым, когда он повёрнутый от пользователя.

### Официальный синтаксис

{{csssyntax}}

## Пример

В этом примере показан куб с прозрачными гранями.

### HTML

```html
<table>
  <tr>
    <th><code>backface-visibility: visible;</code></th>
    <th><code>backface-visibility: hidden;</code></th>
  </tr>
  <tr>
    <td>
      <div class="container">
        <div class="cube showbf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>
        Since all faces are partially transparent, the back faces (2, 4, 5) are
        visible through the front faces (1, 3, 6).
      </p>
    </td>
    <td>
      <div class="container">
        <div class="cube hidebf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>The three back faces (2, 4, 5) are hidden.</p>
    </td>
  </tr>
</table>
```

### CSS

```css
/* Классы, которые будут показывать или скрывать
   три задние грани "куба" */
.showbf div {
  backface-visibility: visible;
}

.hidebf div {
  backface-visibility: hidden;
}

/* Определяет контейнер div, кубический div и общую грань */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Определяет каждое лицо на основе направления */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Сделает стол немного лучше */
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

### Результат

{{EmbedLiveSample('Пример', '100%', 360)}}

## Спецификации

| Спецификация                                                                            | Статус                        | Комментарий                 |
| --------------------------------------------------------------------------------------- | ----------------------------- | --------------------------- |
| {{SpecName('CSS Transforms 2', '#propdef-backface-visibility', 'backface-visibility')}} | {{Spec2('CSS Transforms 2')}} | Первоначальное определение. |

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS преобразований](/ru/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
