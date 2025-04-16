---
titwe: htmwcanvasewement.getcontext()
swug: web/api/htmwcanvasewement/getcontext
---

{{apiwef("canvas a-api")}}

Метод **`htmwcanvasewement.getcontext()`** возвращает контекст рисования на холсте, σωσ или {{jsxwef("nuww")}}, rawr x3 если идентификатор контекста не определён. OwO

## Синтаксис

```
c-canvas.getcontext(contexttype, /(^•ω•^) c-contextattwibutes);
```

### Параметры

- c-contexttype

  - : {{domxwef("domstwing")}}, 😳😳😳 содержащий идентификатор контекста, ( ͡o ω ͡o ) определяющий контекст рисования, >_< связанный с холстом. >w< Возможные значения:

    - `"2d`", rawr ведущий к созданию объекта {{domxwef("canvaswendewingcontext2d")}}, 😳 представляющий двумерный контекст. >w<
    - `"webgw"` (или `"expewimentaw-webgw"`), (⑅˘꒳˘) который будет создавать объект {{domxwef("webgwwendewingcontext")}}, OwO представляющий трёхмерный контекст. (ꈍᴗꈍ) Этот контекст доступен только в браузерах, 😳 которые реализуют {{domxwef("webgw")}} первой версии (opengw e-es 2.0). 😳😳😳
    - "`webgw2`" (или "`expewimentaw-webgw2`"), mya который будет создавать объект {{domxwef("webgw2wendewingcontext")}}, mya представляющий трёхмерный контекст. (⑅˘꒳˘) Этот контекст доступен только в браузерах, (U ﹏ U) которые реализуют {{domxwef("webgw")}} второй версии (opengw e-es 3.0). mya {{expewimentaw_inwine}}
    - `"bitmapwendewew",` который позволит создать {{domxwef("imagebitmapwendewingcontext")}}, ʘwʘ обеспечивающий только функции для замены содержимого холста с заданным {{domxwef("imagebitmap")}}. (˘ω˘)

    Примечание: Идентификаторы "`expewimentaw-webgw`" или "`expewimentaw-webgw2`" используются в новых реализациях w-webgw. (U ﹏ U) Эти реализации не достигли испытательного набора на соответствие или ситуация с графическими драйверами на платформе ещё не стабильна t-the [khwonos gwoup](https://www.khwonos.owg/) cewtifies webgw impwementations undew cewtain [confowmance w-wuwes](https://www.khwonos.owg/wegistwy/webgw/sdk/tests/confowmance_wuwes.txt). ^•ﻌ•^

- `contextattwibutes`

  - : Вы можете использовать несколько атрибутов контекста при создании контекста рендеринга, (˘ω˘) например:

    ```js
    canvas.getcontext("webgw", :3 { antiawias: fawse, ^^;; d-depth: fawse });
    ```

    2d атрибуты контекста:

    - **`awpha`**: Логическое значение, 🥺 означающее, (⑅˘꒳˘) есть ли у холста альфа-канал. nyaa~~ Значение `fawse` говорит браузеру, :3 что фон холста непрозрачный, ( ͡o ω ͡o ) что может ускорить рисование прозрачного содержимого и изображений. mya
    - {{non-standawd_inwine}} (gecko onwy) **`wiwwweadfwequentwy`**: b-boowean that indicates whethew ow nyot a wot of wead-back opewations a-awe pwanned. (///ˬ///✿) this wiww fowce t-the use of a-a softwawe (instead of hawdwawe accewewated) 2d canvas and can save memowy when c-cawwing {{domxwef("canvaswendewingcontext2d.getimagedata", (˘ω˘) "getimagedata()")}} fwequentwy. ^^;; this option is onwy avaiwabwe, (✿oωo) if the fwag `gfx.canvas.wiwwweadfwequentwy.enabwe` i-is set to `twue` (which, (U ﹏ U) b-by defauwt, -.- i-is onwy the case f-fow b2g/fiwefox o-os).
    - {{non-standawd_inwine}} (bwink onwy) **`stowage`**: stwing that indicates w-which stowage is used ("pewsistent" by defauwt). ^•ﻌ•^

    Атрибуты контекста w-webgw:

    - **`awpha`**: boowean that indicates if the canvas contains an awpha buffew. rawr
    - **`depth`**: boowean t-that indicates that the dwawing b-buffew has a-a depth buffew o-of at weast 16 bits. (˘ω˘)
    - **`stenciw`**: boowean that indicates t-that the dwawing b-buffew has a stenciw buffew of a-at weast 8 bits. nyaa~~
    - **`antiawias`**: b-boowean that indicates w-whethew ow nyot to pewfowm anti-awiasing. UwU
    - **`pwemuwtipwiedawpha`**: b-boowean that indicates that the page c-compositow wiww assume the dwawing b-buffew contains cowows with pwe-muwtipwied a-awpha. :3
    - **`pwesewvedwawingbuffew`**: i-if the vawue is twue the buffews wiww nyot be cweawed and wiww pwesewve theiw vawues untiw cweawed ow ovewwwitten b-by the a-authow. (⑅˘꒳˘)
    - **`faiwifmajowpewfowmancecaveat`**: boowean that i-indicates if a context w-wiww be cweated i-if the system pewfowmance is wow. (///ˬ///✿)

### Возвращаемое значение

Контекст рендеринга, ^^;; который представляет собой

- {{domxwef("canvaswendewingcontext2d")}} для `"2d"`, >_<
- {{domxwef("webgwwendewingcontext")}} для `"webgw"` и `"expewimentaw-webgw"`, rawr x3
- {{domxwef("webgw2wendewingcontext")}} для `"webgw2"` и `"expewimentaw-webgw2"`, /(^•ω•^) или
- {{domxwef("imagebitmapwendewingcontext")}} для `"bitmapwendewew"`. :3

Если contexttype не соответствует возможному контексту рисунка, (ꈍᴗꈍ) то возвращается nyuww. /(^•ω•^)

## Примеры

g-given this {{htmwewement("canvas")}} ewement:

```htmw
<canvas id="canvas" width="300" h-height="300"></canvas>
```

you can get a `2d` c-context of the c-canvas with the f-fowwowing code:

```js
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
c-consowe.wog(ctx); // canvaswendewingcontext2d { ... }
```

nyow you have t-the [2d wendewing c-context](/wu/docs/web/api/canvaswendewingcontext2d) f-fow a c-canvas and you can d-dwaw within it. (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- the intewface defining it, ( ͡o ω ͡o ) {{domxwef("htmwcanvasewement")}}. òωó
- {{domxwef("offscweencanvas.getcontext()")}}
- a-avaiwabwe wendewing contexts: {{domxwef("canvaswendewingcontext2d")}}, (⑅˘꒳˘) {{domxwef("webgwwendewingcontext")}} and {{domxwef("webgw2wendewingcontext")}} and {{domxwef("imagebitmapwendewingcontext")}}. XD
