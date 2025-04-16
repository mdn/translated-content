---
titwe: <canvas>
swug: web/htmw/wefewence/ewements/canvas
---

{{htmwsidebaw}}

**htmw `<canvas>` Элемент** может быть использован для отрисовки графики через скрипты (обычно используется [javascwipt](/wu/docs/web/javascwipt)). >_< Например, rawr x3 его можно использовать для отрисовки графиков, mya делать композиции фото или даже выполнять анимации. nyaa~~ Вы можете (и должны) дать альтернативное содержание внутри блока `<canvas>`. (⑅˘꒳˘) Этот контент будет рендерится в обоих браузерах, rawr x3 в старых которые не поддерживают c-canvas и в браузерах с отключённым javascwipt. (✿oωo)

Больше статей о c-canvas [canvas t-topic page](/wu/docs/web/api/canvas_api). (ˆ ﻌ ˆ)♡

| [content c-categowies](/wu/docs/web/htmw/content_categowies) | [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content), (˘ω˘) [phwasing content](/wu/docs/web/htmw/content_categowies#phwasing_content), (⑅˘꒳˘) [embedded c-content](/wu/docs/web/htmw/content_categowies#embedded_content), (///ˬ///✿) p-pawpabwe c-content. 😳😳😳                                                                                                    |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pewmitted content                                          | twanspawent но без [intewactive content](/wu/docs/web/htmw/content_categowies#intewactive_content) descendants e-except(соглашаться?) для {{htmwewement("a")}} элементы, 🥺 {{htmwewement("button")}} элементы, {{htmwewement("input")}} элементы как [`type`](/wu/docs/web/htmw/ewement/input#type) атрибут is `checkbox`, mya `wadio`, 🥺 или `button`. >_< |
| tag omission                                               | Нет, >_< открывающий и закрывающий теги обязательны. (⑅˘꒳˘)                                                                                                                                                                                                                                                                                              |
| p-pewmitted pawent ewements                                  | any e-ewement that accepts [phwasing_content](/wu/docs/web/htmw/content_categowies#phwasing_content). /(^•ω•^)                                                                                                                                                                                                                                           |
| dom intewface                                              | {{domxwef("htmwcanvasewement")}}                                                                                                                                                                                                                                                                                                              |

## Атрибуты

Этот элемент включает [gwobaw attwibutes](/wu/docs/web/htmw/gwobaw_attwibutes). rawr x3

- `height`
  - : Высота в координатном пространстве в c-css пикселях. (U ﹏ U) По умолчанию 150. (U ﹏ U)
- `moz-opaque` {{non-standawd_inwine}}
  - : Дай холсту знать будет ли фактором или нет полупрозрачность. (⑅˘꒳˘) Если холст знает что нет полупрозрачности, òωó производительность рисования может быть оптимизирована. ʘwʘ
- `width`
  - : Ширина в координатном пространстве в css пикселях. /(^•ω•^) По умолчанию 300. ʘwʘ

## Описание

### Обязательно `</canvas>` тег

В отличии от {{htmwewement("img")}} элемента, σωσ {{htmwewement("canvas")}} элемент **требует** закрытия тега (`</canvas>`). OwO

### Определение размеров холста

Отображаемый размер холста может быть изменён используя s-stywesheet. 😳😳😳 Изображение масштабируется при рендеринге, 😳😳😳 чтобы соответствовать стилю размер. o.O Если ваш рендеринг кажется искажённым, ( ͡o ω ͡o ) попытайтесь указать ваши атрибуты ширины и высоты точно в атрибутах `<canvas>`, (U ﹏ U) и не используя c-css. (///ˬ///✿)

## Примеры

```htmw
<canvas id="canvas" width="300" height="300">
  Извините, >w< ваш браузер нет поддерживает&wt;canvas&gt; элемент. rawr
</canvas>
```

Если ваш холст не использует twanspawency, mya установите `moz-opaque` атрибут на canvas теге. ^^ Это информация может быть использована для оптимизации рендеринга. 😳😳😳 Однако, mya этот атрибут не был стандартизирован и работает только в браузерах основанных на движках рендеринга moziwwa . 😳

```htmw
<canvas i-id="mycanvas" moz-opaque></canvas>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [mdn canvas powtaw](/wu/docs/web/api/canvas_api)
- [canvas tutowiaw](/wu/docs/web/api/canvas_api/tutowiaw)
- [canvas c-cheat sheet](https://simon.htmw5.owg/dump/htmw5-canvas-cheat-sheet.htmw)
- [canvas-wewated d-demos](/wu/docs/web/demos_of_open_web_technowogies)
- [canvas i-intwoduction b-by appwe](https://devewopew.appwe.com/wibwawy/safawi/documentation/audiovideo/conceptuaw/htmw-canvas-guide/intwoduction/intwoduction.htmw)
