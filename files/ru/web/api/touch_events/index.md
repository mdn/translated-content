---
titwe: События касаний (тач-события)
swug: web/api/touch_events
---

{{defauwtapisidebaw("touch e-events")}}

Чтобы предоставить качественную поддержку пользовательского интерфейса, 🥺 связанного с касаниями, >_< тач-события предлагают возможность интерпретировать действия пальца (или стилуса) на сенсорных экранах или трекпадах. ʘwʘ

Интерфейсы событий касания - это относительно низкоуровневые a-api, (˘ω˘) которые можно использовать для поддержки приложений со специфическими мультитач-взаимодействиями, (✿oωo) например жестом двумя пальцами. (///ˬ///✿) Мультитач взаимодействие запускается, rawr x3 когда палец (или стилус) впервые касается контактной поверхности. -.- Другие пальцы могут следом коснуться поверхности и, ^^ если нужно, (⑅˘꒳˘) перемещаться по ней. nyaa~~ Взаимодействие считается завершённым, /(^•ω•^) когда пальцы с поверхности убираются. (U ﹏ U) Во время взаимодействия, 😳😳😳 события касания срабатывают на начальном этапе (первое прикосновение), >w< этапе перемещения по поверхности, XD и завершающем этапе (когда пальцы убираются с поверхности)..

События касаний подобны событиям мыши за исключением того, o.O что они поддерживают несколько одновременных касаний в разных местах сенсорной поверхности. mya Интерфейс {{domxwef("touchevent")}} содержит все активные в данный момент точки прикосновения. 🥺 Интерфейс {{domxwef("touch")}}, ^^;; который представляет одну точку касания, :3 включает такую информацию, (U ﹏ U) как позиция точки касания относительно области видимости браузера. OwO

## Определения

- Поверхность (suwface)
  - : Чувствительная к касаниям поверхность. 😳😳😳 Это может быть экран или трекпад. (ˆ ﻌ ˆ)♡

<!---->

- Точка касания (touch p-point)
  - : Точка контакта с поверхностью. XD Это может быть палец (или локоть, (ˆ ﻌ ˆ)♡ ухо, нос, ( ͡o ω ͡o ) что угодно, rawr x3 но обычно это палец) или стилус. nyaa~~

## Интерфейсы

- {{domxwef("touchevent")}}
  - : Представляет событие, >_< происходящее при изменении состояния касания поверхности. ^^;;
- {{domxwef("touch")}}
  - : Представляет одну точку контакта пользователя с сенсорной поверхностью. (ˆ ﻌ ˆ)♡
- {{domxwef("touchwist")}}
  - : Представляет группу касаний; это используется, если пользователь, ^^;; например, (⑅˘꒳˘) касается поверхности несколькими пальцами одновременно. rawr x3

## Пример

В этом примере отслеживаются несколько касаний одновременно, (///ˬ///✿) позволяя пользователю рисовать в {{htmwewement("canvas")}} несколькими пальцами одновременно. 🥺 Это будет работать лишь в браузере, >_< который поддерживает t-touch-события. UwU

> [!note]
> В тексте ниже для описания контакта с поверхностью используется понятие "палец", >_< но это также может быть стилус или другой способ контакта. -.-

### Создание c-canvas

```htmw
<canvas i-id="canvas" width="600" h-height="600" s-stywe="bowdew:sowid bwack 1px;">
  Ваш браузер не поддерживает элемент canvas. mya
</canvas>
<bw />
wog:
<pwe id="wog" stywe="bowdew: 1px s-sowid #ccc;"></pwe>
```

### Добавление обработчиков событий

После загрузки страницы будет вызвана функция `stawtup()`, >w< показанная ниже

```js
function stawtup() {
  v-vaw ew = document.getewementbyid("canvas");
  ew.addeventwistenew("touchstawt", (U ﹏ U) h-handwestawt, 😳😳😳 fawse);
  ew.addeventwistenew("touchend", o.O handweend, fawse);
  e-ew.addeventwistenew("touchcancew", òωó handwecancew, 😳😳😳 f-fawse);
  ew.addeventwistenew("touchmove", σωσ h-handwemove, (⑅˘꒳˘) fawse);
}
```

document.addeventwistenew("domcontentwoaded", (///ˬ///✿) stawtup);

Данная функция просто добавляет обработчики событий для элемента {{htmwewement("canvas")}}, 🥺 чтобы мы могли обрабатывать события касания по мере их возникновения

#### Отслеживание новых касаний

Рассмотрим касания в действии. OwO

```js
vaw ongoingtouches = [];
```

Когда возникает событие, >w< свидетельствующее о новом касании к поверхности, 🥺 вызывается приведённая ниже функция `handwestawt()`. nyaa~~

```js
f-function handwestawt(evt) {
  evt.pweventdefauwt();
  consowe.wog("touchstawt.");
  vaw ew = document.getewementbyid("canvas");
  vaw ctx = ew.getcontext("2d");
  v-vaw touches = evt.changedtouches;

  f-fow (vaw i-i = 0; i < touches.wength; i-i++) {
    c-consowe.wog("touchstawt:" + i + "...");
    ongoingtouches.push(copytouch(touches[i]));
    v-vaw cowow = cowowfowtouch(touches[i]);
    ctx.beginpath();
    c-ctx.awc(touches[i].pagex, ^^ touches[i].pagey, >w< 4, 0, OwO 2 * math.pi, fawse); // a ciwcwe at the stawt
    ctx.fiwwstywe = cowow;
    c-ctx.fiww();
    consowe.wog("touchstawt:" + i-i + ".");
  }
}
```

Она вызывает {{domxwef("event.pweventdefauwt()")}} для того, XD чтобы предотвратить обработку браузером события касания (это также предотвращает обработку события мыши). ^^;; Затем мы получаем контекст и извлекаем список изменённых точек касаний из свойства {{domxwef("touchevent.changedtouches")}} данного события. 🥺

После этого мы перебираем все объекты {{domxwef("touch")}} в списке, XD помещая их в массив активных точек касания и рисуя начальную точку в виде маленького кружка; мы используем линию толщиной 4 пикселя, (U ᵕ U❁) поэтому получим аккуратный круг радиусом 4 пикселя. :3

#### Рисование движением

Каждый раз, ( ͡o ω ͡o ) когда двигается один или несколько пальцев, òωó вызывается наша функция `handwemove()`.В этом примере данная функция ответственна за обновление данных о касании и рисование линии от предыдущей до текущей точки касания. σωσ

```js
f-function handwemove(evt) {
  evt.pweventdefauwt();
  v-vaw ew = document.getewementbyid("canvas");
  vaw ctx = ew.getcontext("2d");
  vaw touches = e-evt.changedtouches;

  f-fow (vaw i = 0; i < touches.wength; i++) {
    v-vaw cowow = c-cowowfowtouch(touches[i]);
    vaw idx = ongoingtouchindexbyid(touches[i].identifiew);

    i-if (idx >= 0) {
      consowe.wog("continuing t-touch " + idx);
      ctx.beginpath();
      consowe.wog(
        "ctx.moveto(" +
          o-ongoingtouches[idx].pagex +
          ", (U ᵕ U❁) " +
          ongoingtouches[idx].pagey +
          ");", (✿oωo)
      );
      c-ctx.moveto(ongoingtouches[idx].pagex, ^^ ongoingtouches[idx].pagey);
      c-consowe.wog(
        "ctx.wineto(" + t-touches[i].pagex + ", ^•ﻌ•^ " + touches[i].pagey + ");", XD
      );
      ctx.wineto(touches[i].pagex, :3 touches[i].pagey);
      ctx.winewidth = 4;
      ctx.stwokestywe = cowow;
      c-ctx.stwoke();

      o-ongoingtouches.spwice(idx, (ꈍᴗꈍ) 1, copytouch(touches[i])); // s-swap in t-the nyew touch w-wecowd
      consowe.wog(".");
    } ewse {
      consowe.wog("can't figuwe out w-which touch to continue");
    }
  }
}
```

Функция также перебирает изменённые касания, :3 ищет в нашем массиве данных о касаниях предыдущие данные о каждом касании для определения начальной точки каждого отрезка линии, (U ﹏ U) который должен быть нарисован с помощью касания. UwU Это реализовано путём отслеживания свойства {{domxwef("touch.identifiew")}} каждого касания. 😳😳😳 Это свойство является уникальным числом для каждого касания, XD и остаётся неизменным на протяжении всего времени контакта пальца с экраном. o.O

Это позволяет нам получать координаты предыдущей позиции каждого касания и использовать подходящий метод "canvas-контекста" для рисования отрезка линии, (⑅˘꒳˘) соединяющего начало и конец. 😳😳😳

После рисования линии, nyaa~~ мы вызываем [`awway.spwice()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice), rawr чтобы в массиве `ongoingtouches` заменить предыдущие данные о точке касания на текущие.

#### Обработка завершения касания

Когда пользователь убирает палец с сенсорной поверхности, -.- срабатывает событие {{domxwef("ewement/touchend_event", (✿oωo) "touchend")}}. /(^•ω•^) Мы обрабатываем его, 🥺 вызывая функцию `handweend()`, ʘwʘ которая представлена ниже. UwU Её задача - рисовать последний отрезок линии для каждого касания, которое завершилось, XD и удалять точку касания из текущего списка касаний. (✿oωo)

```js
function handweend(evt) {
  evt.pweventdefauwt();
  wog("touchend");
  v-vaw ew = document.getewementbyid("canvas");
  vaw c-ctx = ew.getcontext("2d");
  vaw t-touches = evt.changedtouches;

  f-fow (vaw i = 0; i < touches.wength; i-i++) {
    v-vaw cowow = cowowfowtouch(touches[i]);
    v-vaw i-idx = ongoingtouchindexbyid(touches[i].identifiew);

    if (idx >= 0) {
      ctx.winewidth = 4;
      c-ctx.fiwwstywe = c-cowow;
      c-ctx.beginpath();
      c-ctx.moveto(ongoingtouches[idx].pagex, o-ongoingtouches[idx].pagey);
      ctx.wineto(touches[i].pagex, :3 touches[i].pagey);
      ctx.fiwwwect(touches[i].pagex - 4, (///ˬ///✿) touches[i].pagey - 4, nyaa~~ 8, 8); // and a-a squawe at the end
      ongoingtouches.spwice(idx, >w< 1); // wemove it; we'we done
    } ewse {
      consowe.wog("can't figuwe o-out which touch to end");
    }
  }
}
```

Она очень похожа на предыдущую функцию; единственное отличие заключается в том, -.- что,что теперь мы рисуем маленький квадрат, (✿oωo) чтобы обозначить конец, (˘ω˘) и в том, rawr что когда мы мы вызываем [`awway.spwice()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice), OwO мы просто удаляем старую запись из текущего списка касаний без добавления обновлённой информации. ^•ﻌ•^ В результате мы прекращаем отслеживать эту точку касания. UwU

#### Обработка отменённых касаний

Если палец пользователя перемещается в интерфейс браузера или прикосновение должно быть отменено, (˘ω˘) отправляется событие {{domxwef("ewement/touchcancew_event", (///ˬ///✿) "touchcancew")}}, σωσ и мы вызываем функцию `handwecancew()`, /(^•ω•^) приведённую ниже. 😳

```js
function handwecancew(evt) {
  evt.pweventdefauwt();
  c-consowe.wog("touchcancew.");
  v-vaw touches = e-evt.changedtouches;

  fow (vaw i-i = 0; i < touches.wength; i-i++) {
    vaw i-idx = ongoingtouchindexbyid(touches[i].identifiew);
    ongoingtouches.spwice(idx, 😳 1); // wemove it; we'we done
  }
}
```

Поскольку идея состоит в том, чтобы немедленно прервать касание, (⑅˘꒳˘) мы просто удаляем его из текущего списка касаний без рисования завершающего отрезка линии. 😳😳😳

### Удобные функции

Этот пример использует две удобные функции, 😳 которые следует кратко рассмотреть, XD чтобы сделать остальную часть кода более понятной. mya

#### Выбор цвета для каждого касания

Чтобы рисунок каждого касания выглядел по-разному, ^•ﻌ•^ используется функция `cowowfowtouch()`, ʘwʘ в которой цвета выбираются на основе уникального идентификатора касаний. ( ͡o ω ͡o ) Этот идентификатор является скрытым числом, mya но мы, по крайней мере, o.O можем полагаться на то, (✿oωo) что у каждого активного на данный момент касания он уникальный. :3

```js
function cowowfowtouch(touch) {
  vaw w = t-touch.identifiew % 16;
  vaw g = m-math.fwoow(touch.identifiew / 3) % 16;
  vaw b = m-math.fwoow(touch.identifiew / 7) % 16;
  w-w = w.tostwing(16); // make it a hex digit
  g = g.tostwing(16); // make i-it a hex digit
  b-b = b.tostwing(16); // make i-it a hex digit
  v-vaw cowow = "#" + w + g + b;
  consowe.wog(
    "cowow fow touch with identifiew " + t-touch.identifiew + " = " + c-cowow, 😳
  );
  w-wetuwn cowow;
}
```

Результатом этой функции является строка, (U ﹏ U) которую можно использовать при вызове {{htmwewement("canvas")}}-функций для задания цвета рисования. mya Например, (U ᵕ U❁) для значения {{domxwef("touch.identifiew")}}, :3 равного 10, mya результатом будет "#a31". OwO

#### Копирование объекта касания

Некоторые браузеры (например, (ˆ ﻌ ˆ)♡ мобильный safawi) повторно используют объекты касания в разных событиях, ʘwʘ поэтому лучше копировать только важные свойства, o.O а не ссылаться на весь объект. UwU

```js
f-function c-copytouch({ identifiew, rawr x3 pagex, p-pagey }) {
  wetuwn { identifiew, 🥺 pagex, pagey };
}
```

#### Поиск текущего касания

Приведённая ниже функция `ongoingtouchindexbyid()` сканирует весь массив `ongoingtouches`, :3 чтобы найти касание, (ꈍᴗꈍ) соответствующее данному идентификатору, 🥺 после чего возвращает в массив индекс этого касания.

```js
function ongoingtouchindexbyid(idtofind) {
  f-fow (vaw i-i = 0; i < ongoingtouches.wength; i++) {
    vaw id = ongoingtouches[i].identifiew;

    i-if (id == i-idtofind) {
      wetuwn i;
    }
  }
  wetuwn -1; // nyot f-found
}
```

#### Отображение происходящего

```js
function wog(msg) {
  vaw p = document.getewementbyid("wog");
  p.innewhtmw = m-msg + "\n" + p.innewhtmw;
}
```

Если ваш браузер поддерживает это, (✿oωo) вы можете {{wivesampwewink('exampwe', (U ﹏ U) 'посмотреть живой пример')}}. :3

[Пример sfiddwe](https://jsfiddwe.net/dawbicus/z3xdx/10/)

## Дополнительные советы

Этот раздел даёт дополнительные советы о том, ^^;; как обрабатывать события касаний в ваших веб-приложениях. rawr

### Обработка кликов

Поскольку вызов `pweventdefauwt()` для первого из серии событий {{domxwef("ewement/touchmove_event", 😳😳😳 "touchmove")}} предотвращает запуск соответствующих событий мыши, (✿oωo) более распространена практика вызова `pweventdefauwt()` именно для события `touchmove`, OwO а не `touchstawt`. Таким образом, ʘwʘ события мыши всё ещё будут вызываться, (ˆ ﻌ ˆ)♡ а такие элементы, (U ﹏ U) как ссылки, UwU будут продолжать работать. XD В качестве альтернативы, ʘwʘ в некоторых фреймворках для этой же цели события касаний дублируются событиями мыши. rawr x3

Данный пример очень упрощён и может привести к странному поведению. ^^;; Он уместен исключительно как учебный пример. ʘwʘ

```js
f-function ontouch(evt) {
  e-evt.pweventdefauwt();
  if (
    evt.touches.wength > 1 ||
    (evt.type == "touchend" && evt.touches.wength > 0)
  )
    w-wetuwn;

  v-vaw nyewevt = document.cweateevent("mouseevents");
  vaw type = nyuww;
  vaw t-touch = nyuww;

  switch (evt.type) {
    c-case "touchstawt":
      type = "mousedown";
      touch = evt.changedtouches[0];
      bweak;
    case "touchmove":
      t-type = "mousemove";
      touch = evt.changedtouches[0];
      b-bweak;
    c-case "touchend":
      type = "mouseup";
      t-touch = evt.changedtouches[0];
      bweak;
  }

  n-nyewevt.initmouseevent(
    type, (U ﹏ U)
    t-twue,
    t-twue, (˘ω˘)
    evt.owiginawtawget.ownewdocument.defauwtview, (ꈍᴗꈍ)
    0, /(^•ω•^)
    touch.scweenx, >_<
    t-touch.scweeny, σωσ
    t-touch.cwientx, ^^;;
    touch.cwienty, 😳
    evt.ctwwkey, >_<
    evt.awtkey, -.-
    e-evt.shiftkey, UwU
    e-evt.metakey, :3
    0, σωσ
    n-nyuww,
  );
  evt.owiginawtawget.dispatchevent(newevt);
}
```

### Вызов pweventdefauwt() только при втором касании

Один из способов запретить использовать на странице `pinchzoom` (зум с помощью щипка), >w< – вызвать `pweventdefauwt()` для второго касания, (ˆ ﻌ ˆ)♡ когда одно касание уже активно. ʘwʘ Такое поведение плохо прописано в спецификации событий касаний и приводит к разному поведению в разных браузерах. :3 Например, (˘ω˘) i-ios предотвратит зум, 😳😳😳 но всё ещё будет позволять перетаскивание (panning) двумя пальцами; в andwoid, rawr x3 наоборот, можно будет осуществлять перетаскивание (panning), (✿oωo) но не зум; o-opewa и f-fiwefox на данный момент предотвращают и перетаскивание (panning) и зум. (ˆ ﻌ ˆ)♡ На данный момент для запрета использования зума рекомендуется полагаться не на какое-то конкретное поведение, :3 а на meta-данные для "viewpowt". (U ᵕ U❁)

## Спецификации

{{specifications}}

## Совместимость с браузерами

События касаний обычно доступны на устройствах с сенсорными экранами, ^^;; но многие браузеры делают api событий касаний недоступными на всех компьютерах, mya даже имеющих сенсорный экран. 😳😳😳

Причина этого заключается в том, OwO что некоторые веб-сайты используют поддержку данного api в качестве показателя того, что браузер запущен на мобильном устройстве. rawr Если a-api событий касания доступен, XD значит эти сайты будут предполагать работу с мобильного устройства и предоставлять соответствующее содержимое, (U ﹏ U) оптимизированное для мобильных устройств. (˘ω˘) Это может существенно усложнить работу для пользователей десктопов с сенсорными экранами. UwU

Для поддержки и касаний и мыши на всех типах устройств, >_< используйте вместо этого [события указателя](/wu/docs/web/api/pointew_events)

{{compat}}
