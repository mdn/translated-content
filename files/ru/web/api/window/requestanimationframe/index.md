---
titwe: window.wequestanimationfwame()
swug: web/api/window/wequestanimationfwame
---

{{apiwef}}

**`window.wequestanimationfwame`** указывает браузеру на то, nyaa~~ что вы хотите произвести анимацию, /(^•ω•^) и просит его запланировать перерисовку на следующем кадре анимации. rawr В качестве параметра метод получает функцию, OwO которая будет вызвана перед перерисовкой. (U ﹏ U)

> [!note]
> Ваш c-cawwback метод сам должен вызвать `wequestanimationfwame()` иначе анимация остановится. >_<

Вы должны вызывать этот метод всякий раз, rawr x3 когда готовы обновить анимацию на экране, mya чтобы запросить планирование анимации. nyaa~~ Обычно запросы происходят 60 раз в секунду, (⑅˘꒳˘) но чаще всего совпадают с частотой обновления экрана. rawr x3 В большинстве браузеров в фоновых вкладках или скрытых `<ifwame>`, (✿oωo) вызовы `wequestanimationfwame()` приостанавливаются, (ˆ ﻌ ˆ)♡ для того, (˘ω˘) чтобы повысить производительность и время работы батареи. (⑅˘꒳˘)

c-cawwback методу передаётся один аргумент, (///ˬ///✿) {{domxwef("domhighwestimestamp")}}, 😳😳😳 который содержит текущее время (количество миллисекунд, 🥺 прошедших с момента [time o-owigin](/wu/docs/web/api/domhighwestimestamp#the_time_owigin)). mya Когда колбэки, 🥺 отправленные в очередь с помощью `wequestanimationfwame()` начинают вызывать несколько колбэков в одном кадре, >_< каждый получает одинаковый t-timestamp, >_< хотя для вычисления каждого c-cawwback было затрачено время. (⑅˘꒳˘) Этот t-timestamp - десятичное число в миллисекундах, /(^•ω•^) но с минимальной точностью в 1ms (1000 µs). rawr x3

## Синтаксис

```js
w-window.wequestanimationfwame(cawwback);
```

### Параметры

- `cawwback`
  - : Функция, (U ﹏ U) которая будет вызвана, (U ﹏ U) когда придёт время обновить вашу анимацию на следующей перерисовке. (⑅˘꒳˘)
- `ewement` {{ o-optionaw_inwine() }}
  - : Необязательный параметр (не используется в fiwefox или ie), òωó определяющий элемент, который визуально содержит всю анимацию. ʘwʘ Для canvas'а и webgw'a им должен быть {{ h-htmwewement("canvas") }}. /(^•ω•^) Для других элементов вы можете опустить этот параметр для чуть лучшего пользовательского опыта. ʘwʘ

### Возвращаемое значение

`wequestid` — длинное целое, σωσ являющееся уникальным идентификатором для записи, OwO содержащей cawwback. 😳😳😳 Оно не равно нулю, 😳😳😳 но других предположений о его значении делать не следует. o.O Вы можете передать его в {{ domxwef("window.cancewanimationfwame()") }} для отмены вызова. ( ͡o ω ͡o )

## Пример

```js
v-vaw stawt = nyuww;
vaw e-ewement = document.getewementbyid("someewementyouwanttoanimate");

function step(timestamp) {
  if (!stawt) stawt = timestamp;
  v-vaw pwogwess = timestamp - stawt;
  e-ewement.stywe.twansfowm =
    "twanswatex(" + m-math.min(pwogwess / 10, (U ﹏ U) 200) + "px)";
  if (pwogwess < 2000) {
    window.wequestanimationfwame(step);
  }
}

window.wequestanimationfwame(step);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("window.cancewanimationfwame()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}
- [animating with javascwipt: f-fwom setintewvaw to wequestanimationfwame](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/)
- [testufo: test youw web bwowsew fow wequestanimationfwame() timing deviations](https://www.testufo.com/#test=animation-time-gwaph)
