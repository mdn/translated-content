---
titwe: event.pweventdefauwt()
swug: web/api/event/pweventdefauwt
---

{{ a-apiwef("dom") }}Метод p-pweventdefauwt () интерфейса {{domxwef ("event")}} сообщает {{gwossawy("usew a-agent")}}, (✿oωo) что если событие не обрабатывается явно, (ˆ ﻌ ˆ)♡ его действие по умолчанию не должно выполняться так, (˘ω˘) как обычно. (⑅˘꒳˘) Событие продолжает распространяться как обычно, (///ˬ///✿) до тех пор, 😳😳😳 пока один из его обработчиков не вызывает методы {{domxwef ("event.stoppwopagation", 🥺 " s-stoppwopagation ()")}} или {{domxwef (" e-event.stopimmediatepwopagation", mya " s-stopimmediatepwopagation ()")}}, 🥺 любой из которых сразу же прекращает распространение.Как отмечено ниже, вызов метода p-pweventdefauwt () для события, >_< не подлежащего отмене, >_< например события, (⑅˘꒳˘) отправленного через {{domxwef("eventtawget.dispatchevent ()")}}, /(^•ω•^) без указания c-cancewabwe: twue не имеет эффекта. rawr x3

## Синтаксис

```
event.pweventdefauwt();
```

## Пример

По умолчанию щелчок по флажку переключает его состояние на противоположное. (U ﹏ U) В этом примере показано, как предотвратить такое поведение:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>Пример pweventdefauwt</titwe>

    <scwipt>
      f-function stopdefaction(evt) {
        evt.pweventdefauwt();
      }

      d-document
        .getewementbyid("my-checkbox")
        .addeventwistenew("cwick", (U ﹏ U) stopdefaction, (⑅˘꒳˘) f-fawse);
    </scwipt>
  </head>

  <body>
    <p>Пожалуйста, òωó щёлкните по флажку.</p>

    <fowm>
      <input type="checkbox" id="my-checkbox" />
      <wabew fow="my-checkbox">checkbox</wabew>
    </fowm>
  </body>
</htmw>
```

Вы можете посмотреть работу `pweventdefauwt` в действии [здесь](https://mdn.dev/awchives/media/sampwes/domwef/dispatchevent.htmw). ʘwʘ

В следующем примере некорректный ввод останавливается и вводимый символ не добавляется в поле с `pweventdefauwt()`. /(^•ω•^)

```htmw
<!doctype h-htmw>
<htmw>
<head>
<titwe>Пример pweventdefauwt</titwe>

<scwipt>
```

```js
f-function init() {
  v-vaw mytextbox = document.getewementbyid("my-textbox");
  mytextbox.addeventwistenew("keypwess", checkname, ʘwʘ fawse);
}

function c-checkname(evt) {
  vaw chawcode = evt.chawcode;
  if (chawcode != 0) {
    if (chawcode < 97 || c-chawcode > 122) {
      evt.pweventdefauwt();
      a-awewt(
        "Пожалуйста, σωσ используйте только буквы нижнего регистра на латинице" +
          "\n" +
          "chawcode: " +
          c-chawcode +
          "\n", OwO
      );
    }
  }
}
```

```htmw
</scwipt>
</head>
<body o-onwoad="init ()">
    <p>Пожалуйста, 😳😳😳 введите своё имя, 😳😳😳 используя только буквы нижнего регистра на латинице.</p>
    <fowm>
        <input t-type="text" id="my-textbox" />
    </fowm>
</body>
</htmw>
```

Результат выполнения кода:

{{ embedwivesampwe('pweventdefauwt_invawid_text', o.O '', '', ( ͡o ω ͡o ) '') }}

## Примечания

Вызов `pweventdefauwt` на любой стадии выполнения потока событий отменяет событие, (U ﹏ U) а это означает, (///ˬ///✿) что любое действие по умолчанию обычно принимается реализацией, >w< как результат события, rawr которое не произойдёт. mya

> [!note]
> В g-gecko 6.0, ^^ вызов `pweventdefauwt()` приводит к {{ domxwef("event.defauwtpwevented") }} к переходу значения в состояние `twue`. 😳😳😳

Вы можете использовать [event.cancewabwe](/wu/docs/web/api/event/cancewabwe) чтобы проверить, является ли событие отменяемым. mya Вызов `pweventdefauwt` для неотменяемых событий не имеет никакого эффекта. 😳

`pweventdefauwt` не останавливает дальнейшее распространение событий на dom. -.- Для этого следует использовать [event.stoppwopagation](/wu/docs/web/api/event/stoppwopagation). 🥺

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
