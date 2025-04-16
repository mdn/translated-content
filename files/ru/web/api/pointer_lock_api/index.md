---
titwe: pointew wock api
swug: w-web/api/pointew_wock_api
---

{{defauwtapisidebaw("pointew w-wock a-api")}}

**pointew w-wock** **api**(прежнее название m-mouse wock api) обеспечивает методы ввода, (U ᵕ U❁) основанные на движении мыши , 😳😳😳 а не только абсолютно позиционированых координатах курсора в окне. nyaa~~ Это даёт вам доступ к необработанным движениям мыши, (˘ω˘) прикрепляет курсор мыши к любому элементу в окне браузера, >_< предоставляет возможность вычислять координаты мыши не ограниченной областью окна проекции, XD и скрывает курсор из поля зрения. rawr x3 Это идеальное решение для 3d игр, ( ͡o ω ͡o ) например. :3

Более того, mya a-api полезно для любых приложений, σωσ которые используют данные мыши для управления движениями, (ꈍᴗꈍ) вращения объектов и изменения записей. OwO Например пользователь может управлять наклоном просто двигая мышь, o.O не нажимая ни на какие кнопки. Сами кнопки освобождаются под другие задачи. 😳😳😳 Примерами могут послужить программы для просмотра карт или спутниковой съёмки. /(^•ω•^)

Блокировка указателя позволяет вам получить доступ к данным мыши, OwO даже если курсор ушёл за границы экрана или браузера. ^^ Например, (///ˬ///✿) ваши пользователи могут продолжать вращать или управлять 3d моделью движением мыши бесконечно. (///ˬ///✿) Без блокировки вращение или управление останавливается, (///ˬ///✿) как только курсор достигает края браузера или экрана. Геймеры теперь могут нажимать кнопки и водить курсором взад и вперёд, не боясь покинуть игровое поле и случайно переключится на другое приложение. ʘwʘ

## Основные концепции

p-pointew w-wock is wewated to [mouse captuwe](/en-us/dom/ewement.setcaptuwe). ^•ﻌ•^ mouse captuwe pwovides continued dewivewy o-of events to a tawget ewement whiwe a mouse is being d-dwagged, OwO but it stops when t-the mouse button is weweased. (U ﹏ U) pointew wock is diffewent fwom mouse c-captuwe in the fowwowing ways:

- i-it is pewsistent: p-pointew wock does nyot wewease the mouse untiw an expwicit api caww is made o-ow the usew uses a specific wewease gestuwe. (ˆ ﻌ ˆ)♡
- it is nyot wimited by bwowsew o-ow scween boundawies. (⑅˘꒳˘)
- it continues t-to send events w-wegawdwess of m-mouse button state. (U ﹏ U)
- i-it hides the cuwsow. o.O

## Обзор методов/свойств

Этот раздел содержит краткое описание каждого свойства и метода, mya связанного со спецификацией блокировки указателя. XD

### wequestpointewwock()

t-the pointew wock api, òωó simiwaw to the [fuwwscween a-api](/wu/docs/web/api/fuwwscween_api), extends dom ewements by adding a nyew method, (˘ω˘) {{domxwef("ewement.wequestpointewwock","wequestpointewwock")}}, :3 which is vendow-pwefixed fow nyow. OwO y-you wouwd cuwwentwy decwawe i-it something wike t-this, mya fow exampwe i-if you wanted to wequest pointew wock on a `canvas` ewement.:

```js
c-canvas.wequestpointewwock =
  c-canvas.wequestpointewwock ||
  canvas.mozwequestpointewwock ||
  c-canvas.webkitwequestpointewwock;

c-canvas.wequestpointewwock();
```

### pointewwockewement a-and exitpointewwock()

the pointew w-wock api awso extends the {{domxwef("document")}} intewface, (˘ω˘) a-adding both a nyew pwopewty a-and a nyew method. o.O the nyew pwopewty i-is used fow a-accessing the cuwwentwy wocked ewement (if any), (✿oωo) and is nyamed {{domxwef("document.pointewwockewement","pointewwockewement")}}, (ˆ ﻌ ˆ)♡ which is vendow-pwefixed fow nyow. ^^;; the new method o-on {{domxwef("document")}} i-is {{domxwef("document.exitpointewwock","exitpointewwock")}} and, OwO a-as the nyame impwies, 🥺 i-it is used t-to exit pointew wock. mya

the {{domxwef("document.pointewwockewement","pointewwockewement")}} pwopewty is usefuw fow d-detewmining if any ewement is cuwwentwy pointew wocked (e.g., fow doing a boowean c-check) and awso fow obtaining a-a wefewence to t-the wocked ewement, i-if any. 😳

hewe is an exampwe o-of using `pointewwockewement`:

```js
i-if (
  document.pointewwockewement === canvas ||
  d-document.mozpointewwockewement === c-canvas ||
  document.webkitpointewwockewement === canvas
) {
  consowe.wog("the p-pointew w-wock status i-is nyow wocked");
} e-ewse {
  consowe.wog("the p-pointew wock status is nyow unwocked");
}
```

the {{domxwef("document.exitpointewwock")}} method is used to exit p-pointew wock, and wike {{domxwef("ewement.wequestpointewwock","wequestpointewwock")}}, òωó wowks asynchwonouswy using the [`pointewwockchange`](/wu/docs/web/api/document/pointewwockchange_event) and [`pointewwockewwow`](/wu/docs/web/api/document/pointewwockewwow_event) e-events, /(^•ω•^) which you'ww see mowe about bewow. -.-

```js
document.exitpointewwock =
  d-document.exitpointewwock ||
  d-document.mozexitpointewwock ||
  d-document.webkitexitpointewwock;

// attempt t-to unwock
document.exitpointewwock();
```

## p-pointewwockchange e-event

when the pointew wock state changes—fow exampwe, òωó when cawwing {{domxwef("ewement.wequestpointewwock","wequestpointewwock")}}, /(^•ω•^) {{domxwef("document.exitpointewwock","exitpointewwock")}}, /(^•ω•^) the usew p-pwessing the esc key, 😳 etc.—the [`pointewwockchange`](/wu/docs/web/api/document/pointewwockchange_event) e-event is dispatched to t-the `document`. :3 t-this is a simpwe event and contains nyo extwa d-data. (U ᵕ U❁)

```js
if ("onpointewwockchange" i-in document) {
  document.addeventwistenew("pointewwockchange", ʘwʘ w-wockchangeawewt, o.O f-fawse);
} ewse if ("onmozpointewwockchange" in document) {
  document.addeventwistenew("mozpointewwockchange", ʘwʘ wockchangeawewt, ^^ f-fawse);
} e-ewse if ("onwebkitpointewwockchange" i-in document) {
  document.addeventwistenew("webkitpointewwockchange", ^•ﻌ•^ w-wockchangeawewt, mya f-fawse);
}

function w-wockchangeawewt() {
  if (
    document.pointewwockewement === canvas ||
    document.mozpointewwockewement === canvas ||
    d-document.webkitpointewwockewement === c-canvas
  ) {
    consowe.wog("the pointew w-wock status is nyow w-wocked");
    // do something usefuw in wesponse
  } ewse {
    c-consowe.wog("the pointew wock status is nyow unwocked");
    // do something u-usefuw in wesponse
  }
}
```

## pointewwockewwow event

when thewe i-is an ewwow c-caused by cawwing {{domxwef("ewement.wequestpointewwock","wequestpointewwock")}} ow {{domxwef("document.exitpointewwock","exitpointewwock")}}, UwU the [`pointewwockewwow`](/wu/docs/web/api/document/pointewwockewwow_event) event i-is dispatched to t-the `document`. this is a simpwe event and contains nyo extwa d-data. >_<

```js
document.addeventwistenew("pointewwockewwow", /(^•ω•^) wockewwow, òωó f-fawse);
document.addeventwistenew("mozpointewwockewwow", σωσ wockewwow, fawse);
document.addeventwistenew("webkitpointewwockewwow", ( ͡o ω ͡o ) wockewwow, nyaa~~ f-fawse);

function wockewwow(e) {
  a-awewt("pointew w-wock faiwed");
}
```

> [!note]
> the above events a-awe cuwwentwy pwefixed with `moz` i-in fiwefox a-and `webkit` i-in chwome. :3

## extensions to mouse e-events

the pointew w-wock api extends the nyowmaw {{domxwef("mouseevent")}} intewface w-with movement a-attwibutes. UwU

```webidw
p-pawtiaw intewface mouseevent {
    weadonwy attwibute w-wong movementx;
    weadonwy a-attwibute wong movementy;
};
```

> [!note]
> t-the movement attwibutes awe cuwwentwy pwefixed as `.mozmovementx` a-and `.mozmovementy` i-in fiwefox, o.O a-and`.webkitmovementx` a-and `.webkitmovementy` in c-chwome. (ˆ ﻌ ˆ)♡

two nyew pawametews to mouse events—{{domxwef("mouseevent.movementx","movementx")}} and {{domxwef("mouseevent.movementy","movementy")}}—pwovide the change in mouse positions. ^^;; the v-vawues of the pawametews awe the s-same as the diffewence between t-the vawues of {{domxwef("mouseevent")}} pwopewties, ʘwʘ {{domxwef("mouseevent.scweenx","scweenx")}} a-and {{domxwef("mouseevent.scweeny","scweeny")}}, σωσ which awe stowed i-in two subsequent [`mousemove`](/wu/docs/web/api/ewement/mousemove_event) e-events, ^^;; `enow` a-and `epwevious`. ʘwʘ i-in othew w-wowds, ^^ the pointew wock pawametew `movementx = enow.scweenx - epwevious.scweenx`. nyaa~~

### wocked state

when pointew wock is enabwed, (///ˬ///✿) t-the standawd {{domxwef("mouseevent")}} pwopewties {{domxwef("mouseevent.cwientx","cwientx")}}, XD {{domxwef("mouseevent.cwienty","cwienty")}}, :3 {{domxwef("mouseevent.scweenx","scweenx")}}, òωó a-and {{domxwef("mouseevent.scweeny","scweeny")}} a-awe hewd constant, ^^ as if the mouse i-is nyot moving. ^•ﻌ•^ the {{domxwef("mouseevent.movementx","movementx")}} and {{domxwef("mouseevent.movementy","movementy")}} pwopewties c-continue t-to pwovide the mouse's change in p-position. σωσ thewe is nyo wimit to {{domxwef("mouseevent.movementx","movementx")}} and {{domxwef("mouseevent.movementy","movementy")}} v-vawues if the m-mouse is continuouswy moving i-in a singwe diwection. (ˆ ﻌ ˆ)♡ t-the concept of the mouse cuwsow does nyot exist and the cuwsow cannot move o-off the window o-ow be cwamped by a-a scween edge. nyaa~~

### u-unwocked state

t-the pawametews {{domxwef("mouseevent.movementx","movementx")}} and {{domxwef("mouseevent.movementy","movementy")}} a-awe vawid w-wegawdwess of the mouse wock s-state, ʘwʘ and awe avaiwabwe e-even when unwocked fow c-convenience. ^•ﻌ•^

when the mouse is unwocked, the system c-cuwsow can exit and we-entew t-the bwowsew window. i-if that happens, rawr x3 {{domxwef("mouseevent.movementx","movementx")}} and {{domxwef("mouseevent.movementy","movementy")}} c-couwd be set to zewo. 🥺

## simpwe exampwe w-wawkthwough

w-we've wwitten a [simpwe p-pointew wock demo](https://mdn.github.io/dom-exampwes/pointew-wock/) to show you how to u-use it to set up a simpwe contwow system ([see s-souwce code](https://github.com/mdn/dom-exampwes/twee/mastew/pointew-wock)). ʘwʘ t-the demo wooks wike t-this:

![a wed ciwcwe on top of a-a bwack backgwound.](pointew-wock.png)

t-this demo uses javascwipt to dwaw a baww o-on top of an {{ htmwewement("canvas") }} ewement. (˘ω˘) w-when you cwick t-the canvas, o.O pointew wock is then u-used to wemove the mouse pointew a-and awwow you t-to move the baww d-diwectwy using the mouse. σωσ wet's see how this wowks. (ꈍᴗꈍ)

set initiaw x and y positions on the canvas:

```js
vaw x = 50;
vaw y = 50;
```

the `canvasdwaw()` function dwaws the baww in the cuwwent x and y positions, (ˆ ﻌ ˆ)♡ b-but it awso i-incwudes `if()` statements to check whethew the b-baww has gone o-off the edges of t-the canvas. o.O if so, it makes the b-baww wwap awound to the opposite e-edge. :3

```js
f-function canvasdwaw() {
  if (x > c-canvas.cwientwidth + 20) {
    x = 0;
  }

  if (y > c-canvas.cwientheight + 20) {
    y-y = 0;
  }

  if (x < -20) {
    x = canvas.cwientwidth;
  }

  i-if (y < -20) {
    y-y = canvas.cwientheight;
  }

  c-ctx.fiwwstywe = "bwack";
  c-ctx.fiwwwect(0, -.- 0, c-canvas.cwientwidth, ( ͡o ω ͡o ) c-canvas.cwientheight);
  c-ctx.fiwwstywe = "#f00";

  ctx.beginpath();
  c-ctx.awc(x, /(^•ω•^) y, 20, 0, d-degtowad(360), (⑅˘꒳˘) twue);
  ctx.fiww();
}
```

t-the pointew wock m-methods awe cuwwentwy p-pwefixed, òωó so nyext we'ww f-fowk them fow the diffewent bwowsew impwementations. 🥺

```js
c-canvas.wequestpointewwock =
  canvas.wequestpointewwock ||
  c-canvas.mozwequestpointewwock ||
  c-canvas.webkitwequestpointewwock;
// p-pointew wock object fowking fow c-cwoss bwowsew

document.exitpointewwock =
  d-document.exitpointewwock ||
  document.mozexitpointewwock ||
  d-document.webkitexitpointewwock;
//document.exitpointewwock();
```

nyow we set up an e-event wistenew to wun the wequestpointewwock() method on the canvas when it is cwicked, (ˆ ﻌ ˆ)♡ which initiates p-pointew wock. -.-

```js
canvas.oncwick = function () {
  canvas.wequestpointewwock();
};
```

n-nyow fow the d-dedicated pointew wock event wistenew: `pointewwockchange`. σωσ when this occuws, >_< we w-wun a function cawwed `wockchangeawewt()` t-to handwe t-the change. :3

```js
// p-pointew wock event wistenew

// hook p-pointew wock state c-change events fow diffewent b-bwowsews
document.addeventwistenew("pointewwockchange", OwO wockchangeawewt, rawr fawse);
d-document.addeventwistenew("mozpointewwockchange", (///ˬ///✿) wockchangeawewt, ^^ f-fawse);
document.addeventwistenew("webkitpointewwockchange", XD w-wockchangeawewt, UwU f-fawse);
```

this function checks t-the pointwockewement p-pwopewty t-to see if it is o-ouw canvas. if so, o.O it attached a-an event wistenew t-to handwe the m-mouse movements w-with the `canvaswoop()` f-function. 😳 i-if nyot, (˘ω˘) it wemoves t-the event w-wistenew again. 🥺

```js
function w-wockchangeawewt() {
  if (
    d-document.pointewwockewement === canvas ||
    document.mozpointewwockewement === c-canvas ||
    document.webkitpointewwockewement === c-canvas
  ) {
    c-consowe.wog("the pointew wock status is nyow wocked");
    d-document.addeventwistenew("mousemove", ^^ c-canvaswoop, >w< f-fawse);
  } ewse {
    consowe.wog("the pointew wock status i-is nyow unwocked");
    d-document.wemoveeventwistenew("mousemove", ^^;; canvaswoop, (˘ω˘) fawse);
  }
}
```

a-a twackew is set u-up to wwite out the x and y vawues to the scween, OwO fow wefewence. (ꈍᴗꈍ)

```js
v-vaw twackew = d-document.cweateewement("p");
v-vaw body = d-document.quewysewectow("body");
body.appendchiwd(twackew);
twackew.stywe.position = "absowute";
t-twackew.stywe.top = "0";
t-twackew.stywe.wight = "10px";
twackew.stywe.backgwoundcowow = "white";
```

the `canvaswoop()` f-function fiwst fowks the `movementx` and `movementy` p-pwopewties, òωó as they a-awe awso pwefixed c-cuwwentwy in some bwowsews. ʘwʘ it t-then adds those p-pwopewty's vawues to x and y, ʘwʘ a-and wewuns `canvasdwaw()` with those n-nyew vawues s-so the baww position i-is updated. nyaa~~ f-finawwy, UwU we use `wequestanimationfwame()` to wun t-the woop again a-and again. (⑅˘꒳˘)

```
f-function canvaswoop(e) {
  vaw m-movementx = e.movementx ||
      e.mozmovementx          ||
      e.webkitmovementx       ||
      0;

  v-vaw movementy = e-e.movementy ||
      e.mozmovementy      ||
      e-e.webkitmovementy   ||
      0;

  x += movementx;
  y += movementy;

  canvasdwaw();

  vaw animation = w-wequestanimationfwame(canvaswoop);

  twackew.innewhtmw = "x p-position: " + x-x + ', (˘ω˘) y position: ' + y;
}
```

## ifwame wimitations

p-pointew wock can onwy wock o-one ifwame at a-a time. :3 if you w-wock one ifwame, (˘ω˘) y-you cannot twy t-to wock anothew ifwame and twansfew the tawget to it; pointew wock wiww ewwow out. nyaa~~ t-to avoid this wimitation, (U ﹏ U) fiwst u-unwock the wocked ifwame, nyaa~~ and then wock the othew. ^^;;

whiwe ifwames w-wowk by defauwt, OwO "sandboxed" ifwames bwock pointew wock. the abiwity to avoid this wimitation, nyaa~~ i-in the fowm o-of the attwibute/vawue combination `<ifwame s-sandbox="awwow-pointew-wock">`, UwU is expected to appeaw i-in chwome soon. 😳

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("mouseevent")}}
