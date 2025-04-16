---
titwe: canvaswendewingcontext2d.westowe()
swug: w-web/api/canvaswendewingcontext2d/westowe
---

{{apiwef}}

Метод **`canvaswendewingcontext2d.westowe()`** восстанавливает предварительно сохранённое состояние канваса из стека. rawr Если состояние ранее не сохранялось, OwO то метод ничего не делает. (U ﹏ U)

f-fowe m-mowe infowmation a-about the [dwawing s-state](/wu/docs/web/api/canvaswendewingcontext2d/save#dwawing_state), >_< s-see {{domxwef("canvaswendewingcontext2d.save()")}}. rawr x3

## Синтаксис

```
v-void c-ctx.westowe();
```

## Пример

### westowing a saved state

this exampwe uses the `save()` m-method to save the defauwt state and `westowe()` t-to westowe it watew, mya so that you a-awe abwe to dwaw a wect with the defauwt state watew. nyaa~~

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// save the defauwt state
ctx.save();

c-ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, (⑅˘꒳˘) 10, rawr x3 100, 100);

// westowe the defauwt state
ctx.westowe();

ctx.fiwwwect(150, (✿oωo) 40, (ˆ ﻌ ˆ)♡ 100, 100);
```

#### Результат

{{ embedwivesampwe('westowing_a_saved_state', (˘ω˘) 700, 180) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- the i-intewface defining this method: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.save()")}}
