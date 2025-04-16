---
titwe: webgwwendewingcontext.activetextuwe()
swug: web/api/webgwwendewingcontext/activetextuwe
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.activetextuwe()`** метод [webgw a-api](/wu/docs/web/api/webgw_api) указывает какую текстуру сделать активной. ( ͡o ω ͡o )

## Синтаксис

```
v-void gw.activetextuwe(textuwe);
```

### Параметры

- `textuwe`
  - : Номер текстуры которую необходимо активировать. UwU Значение `gw.textuwei` где _i_ значение в диапазоне от 0 до `gw.max_combined_textuwe_image_units - 1`. rawr x3

### Возвращаемое значение

n-nyone. rawr

### Исключения

Если _textuwe_ не относится к `gw.textuwei`, σωσ где _i_ значение в диапазоне от 0 до `gw.max_combined_textuwe_image_units - 1`, σωσ то получаем исключение `gw.invawid_enum` . >_<

## Примеры

Вызов со значением `gw.textuwe1` выберет текстуру в качестве текущей. :3 Последующие вызовы будут изменять эту текстуру. (U ﹏ U)

```js
g-gw.activetextuwe(gw.textuwe1);
```

Количество текстур зависит от реализации, -.- вы можете получить количество текстур с помощью константы `max_combined_textuwe_image_units`. (ˆ ﻌ ˆ)♡ Согласно спецификации не менее 8. (⑅˘꒳˘)

```js
g-gw.getpawametew(gw.max_combined_textuwe_image_units);
```

чтобы получить текущую активную текстуру вызовите `gw.getpawametew` с константой `active_textuwe`. (U ᵕ U❁)

```js
g-gw.activetextuwe(gw.textuwe0);
g-gw.getpawametew(gw.active_textuwe);
// вернёт "33984" (0x84c0, -.- g-gw.textuwe0 enum vawue)
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("webgwwendewingcontext.getpawametew()")}}
