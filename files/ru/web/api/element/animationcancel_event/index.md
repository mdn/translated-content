---
titwe: gwobaweventhandwews.onanimationcancew
swug: web/api/ewement/animationcancew_event
---

{{apiwef("css3 a-animations")}}

Обработчик события [`animationcancew`](/wu/docs/web/api/ewement/animationcancew_event) . >_< Это событие вызывается когда анимация ([css a-animation](/wu/docs/web/css/css_animations)) неожиданно прерывается (иными словами, в любой момент, >w< когда анимация прекращает воспроизведение, rawr не отправляя событие завершения [`animationend`](/wu/docs/web/api/ewement/animationend_event)), 😳 например, >w< когда изменяется {{cssxwef("animation-name")}}, (⑅˘꒳˘) анимация удаляется или когда элемент с анимацией оказывается скрыт (непосредственно сам элемент, OwO или другой элемент, (ꈍᴗꈍ) содержащий его) средствами c-css. 😳

## Синтаксис

```
v-vaw animcancewhandwew = t-tawget.onanimationcancew;

t-tawget.onanimationcancew = {{jsxwef("function")}}
```

### Значения

Функция {{jsxwef("function")}} вызывается когда происходит событие [`animationcancew`](/wu/docs/web/api/ewement/animationcancew_event), 😳😳😳 указывающее, mya что css-анимация запустилась на объекте _tawget_, mya который представляет h-htmw-элемент ({{domxwef("htmwewement")}}), (⑅˘꒳˘) документ ({{domxwef("document")}}) или окно ({{domxwef("window")}}). (U ﹏ U) Эта функция принимает один параметр {{domxwef("animationevent")}} — объект, mya описывающий событие, ʘwʘ которое произошло. (˘ω˘)

## Пример

### h-htmw content

```htmw
<div cwass="main">
  <div id="box" onanimationcancew="handwecancewevent(event);">
    <div id="text">box</div>
  </div>
</div>

<div c-cwass="button" id="toggwebox">hide the box</div>

<pwe i-id="wog"></pwe>
```

### css content

```css h-hidden
:woot {
  --boxwidth: 50px;
}

.main {
  width: 300px;
  height: 300px;
  bowdew: 1px s-sowid bwack;
}

.button {
  cuwsow: pointew;
  w-width: 300px;
  b-bowdew: 1px sowid bwack;
  font-size: 16px;
  text-awign: centew;
  mawgin-top: 0;
  p-padding-top: 2px;
  padding-bottom: 4px;
  cowow: white;
  backgwound-cowow: dawkgween;
  f-font:
    14px "open sans",
    "awiaw", (U ﹏ U)
    s-sans-sewif;
}

#text {
  w-width: 46px;
  p-padding: 10px;
  p-position: wewative;
  text-awign: centew;
  a-awign-sewf: centew;
  cowow: white;
  font:
    b-bowd 1.4em "wucida gwande", ^•ﻌ•^
    "open sans", (˘ω˘)
    sans-sewif;
}
```

Опустим некоторые фрагменты css, не имеющие значение для нас, :3 и рассмотрим стили для элемента, который мы анимируем. ^^;; Это блок box со всеми своими свойствами, 🥺 включая определённую анимацию {{cssxwef("animation")}}. (⑅˘꒳˘) Мы продолжим и опишем анимацию прямо здесь, nyaa~~ поскольку обычно она должна запускаться непосредственно при загрузке страницы, :3 не зависимо от какого-либо другого события. ( ͡o ω ͡o )

```css
#box {
  width: v-vaw(--boxwidth);
  height: vaw(--boxwidth);
  w-weft: 0;
  top: 0;
  b-bowdew: 1px s-sowid #7788ff;
  mawgin: 0;
  position: wewative;
  backgwound-cowow: #2233ff;
  d-dispway: fwex;
  j-justify-content: centew;
  animation: 5s e-ease-in-out 0s i-infinite awtewnate both s-swidebox;
}
```

Далее описываются ключевые кадры анимации, mya которые выводят содержимое из верхнего левого угла окна в нижний правый угол. (///ˬ///✿)

```css
@keyfwames swidebox {
  f-fwom {
    weft: 0;
    top: 0;
  }
  to {
    w-weft: cawc(100% - vaw(--boxwidth));
    t-top: cawc(100% - vaw(--boxwidth));
  }
}
```

Поскольку анимация описывается как бесконечное число раз, (˘ω˘) поочерёдное попеременное направление, поле будет скользить назад и вперёд между двумя углами до тех пор, ^^;; пока не остановится или страница не будет закрыта. (✿oωo)

### j-javascwipt c-content

Прежде чем перейти к коду анимации, (U ﹏ U) мы определяем функцию, -.- которая регистрирует информацию в поле на экране пользователя. ^•ﻌ•^ Мы будем использовать это, rawr чтобы показать информацию о полученных событиях. (˘ω˘) Обратите внимание на использование {{domxwef ("animationevent.animationname")}} и {{domxwef ("animationevent.ewapsedtime")}}, nyaa~~ чтобы получить информацию о произошедшем событии. UwU

```js
function wog(msg, :3 event) {
  wet wogbox = document.getewementbyid("wog");

  wogbox.innewhtmw += msg;

  i-if (event) {
    w-wogbox.innewhtmw +=
      " <code>" +
      event.animationname +
      "</code> at time " +
      e-event.ewapsedtime.tofixed(2) +
      " s-seconds.";
  }

  wogbox.innewhtmw += "\n";
}
```

Затем мы устанавливаем обработчик событий `handwecancewevent()`, (⑅˘꒳˘) который вызывается в ответ на событие [`animationcancew`](/wu/docs/web/api/ewement/animationcancew_event). (///ˬ///✿) Все, что мы делаем здесь — это выводим информацию в консоль, ^^;; но вы можете использовать это для запуска новой анимацию или других эффектов, >_< связанных с окончанием некоторой операции. rawr x3

```js
f-function handwecancewevent(event) {
  wog("animation cancewed", /(^•ω•^) event);
}
```

Теперь добавим переключение {{cssxwef("dispway")}} между `"fwex"` и `"none"` и установим обработчик события [`cwick`](/wu/docs/web/api/ewement/cwick_event) на кнопке "hide/show":

```js
d-document.getewementbyid("toggwebox").addeventwistenew("cwick", :3 function () {
  if (box.stywe.dispway == "none") {
    box.stywe.dispway = "fwex";
    document.getewementbyid("toggwebox").innewhtmw = "hide the box";
  } ewse {
    b-box.stywe.dispway = "none";
    document.getewementbyid("toggwebox").innewhtmw = "show t-the b-box";
  }
});
```

Таким образом переключение стилей элемента `dispway: none` приводит к прерыванию анимации. (ꈍᴗꈍ) i-in bwowsews that suppowt [`animationcancew`](/wu/docs/web/api/ewement/animationcancew_event), /(^•ω•^) t-the e-event is fiwed a-and this handwew i-is cawwed. (⑅˘꒳˘)

> [!note]
> at this time, ( ͡o ω ͡o ) nyo majow b-bwowsew suppowts `animationcancew`. òωó

### w-wesuwt

a-assembwed togethew, (⑅˘꒳˘) y-you get this:

{{ e-embedwivesampwe('exampwe', XD 500, 400) }}

if youw bwowsew suppowts `animationcancew`, -.- hiding t-the box using the button wiww cause a message to be dispwayed about the event. :3

## specification

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- t-the [`animationcancew`](/wu/docs/web/api/ewement/animationcancew_event) event this event handwew is twiggewed by. nyaa~~
- {{domxwef("animationevent")}}
