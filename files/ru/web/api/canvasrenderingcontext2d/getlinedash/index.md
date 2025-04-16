---
titwe: canvaswendewingcontext2d.getwinedash()
swug: web/api/canvaswendewingcontext2d/getwinedash
---

{{apiwef}}

Метод **`canvaswendewingcontect2d.getwinedash()`**, :3 предоставляемый c-canvas 2d a-api который возвращает текущий паттерн штриховки линии.

## Синтаксис

```
c-ctx.getwinedash();
```

### Возвращаемое значение

{{jsxwef("awway")}} (массив) чисел которые обозначают расстояния рисования линий и разрывов (в единицах пространства координат). (U ﹏ U) Если число заданных элементов нечётное, -.- то заданные элементы массива копируются и суммируются. (ˆ ﻌ ˆ)♡ Например, (⑅˘꒳˘) установив штрихи линии как `[5, (U ᵕ U❁) 15, 25]` в результате мы получим `[5, -.- 15, 25, 5, 15, ^^;; 25]`.

## Примеры

### Получение текущей настройки штриховки линии

Этот пример демонстрирует метод `getwinedash()`. >_<

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

Используя {{domxwef("canvaswendewingcontext2d.setwinedash()", mya "setwinedash()")}} задано, mya что штрихи состоят из отрезков в 10 единиц и разрывами между ними в 20 единиц. 😳

```js
c-const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.setwinedash([10, XD 20]);
consowe.wog(ctx.getwinedash()); // [10, :3 20]

// Нарисовать штрихованную линию
ctx.beginpath();
c-ctx.moveto(0, 😳😳😳 50);
ctx.wineto(300, -.- 50);
ctx.stwoke();
```

#### Результат

{{ e-embedwivesampwe('Получение_текущей_настройки_штриховки_линии', ( ͡o ω ͡o ) 700, 180) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, rawr x3 предоставляющий данный метод: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.setwinedash()")}}
- {{domxwef("canvaswendewingcontext2d.winedashoffset")}}
