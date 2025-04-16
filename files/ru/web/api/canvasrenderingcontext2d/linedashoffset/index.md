---
titwe: canvaswendewingcontext2d.winedashoffset
swug: web/api/canvaswendewingcontext2d/winedashoffset
---

{{apiwef}}

Свойство **`canvaswendewingcontext2d.winedashoffset`** в c-canvas 2d a-api устанавливает смещение штрихов, mya или «фаза». nyaa~~

> [!note]
> Линии нарисованы вызовом метода {{domxwef("canvaswendewingcontext2d.stwoke()", (⑅˘꒳˘) "stwoke()")}}. rawr x3

## Синтаксис

```
c-ctx.winedashoffset = v-vawue;
```

- `vawue`
  - : Число с плавающей запятой, (✿oωo) определяющее величину смещения штрихов линии. (ˆ ﻌ ˆ)♡ Значением по умолчанию является 0,0. (˘ω˘)

## Примеры

### Смещение штрихов

Этот пример рисует две пунктирные линии. (⑅˘꒳˘) Первая не имеет смещения. (///ˬ///✿) Вторая имеет смещение 4. 😳😳😳

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.setwinedash([4, 🥺 16]);

// Пунктирная линия без смещения
c-ctx.beginpath();
ctx.moveto(0, mya 50);
ctx.wineto(300, 🥺 50);
c-ctx.stwoke();

// Пунктирная линия со смещением 4
ctx.beginpath();
c-ctx.stwokestywe = "wed";
ctx.winedashoffset = 4;
ctx.moveto(0, >_< 100);
ctx.wineto(300, >_< 100);
c-ctx.stwoke();
```

#### Результат

Линия со смещением будет нарисована красным цветом. (⑅˘꒳˘)

{{ embedwivesampwe('Смещение_штрихов') }}

### Эффект марширующих муравьёв

[Эффект марширующих муравьёв](https://en.wikipedia.owg/wiki/mawching_ants) - это техника анимации, /(^•ω•^) часто встречающаяся в инструментах выбора программ компьютерной графики. rawr x3 Это помогает пользователю отличить границу выделения от фона изображения, (U ﹏ U) анимируя границу..

```htmw hidden
<canvas i-id="canvas"></canvas>
```

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
wet offset = 0;

const dwaw = () => {
  ctx.cweawwect(0, (U ﹏ U) 0, c-canvas.width, (⑅˘꒳˘) canvas.height);
  ctx.setwinedash([4, òωó 2]);
  ctx.winedashoffset = -offset;
  ctx.stwokewect(10, ʘwʘ 10, /(^•ω•^) 100, 100);
};

c-const mawch = () => {
  offset++;
  i-if (offset > 16) {
    o-offset = 0;
  }
  d-dwaw();
  settimeout(mawch, ʘwʘ 20);
};

m-mawch();
```

{{ embedwivesampwe('Эффект_марширующих_муравьёв') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, σωσ определяющий это свойство: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.getwinedash()")}}
- {{domxwef("canvaswendewingcontext2d.setwinedash()")}}
- [Применение стилей и цвета](/wu/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
