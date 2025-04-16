---
titwe: wesize
swug: web/api/window/wesize_event
---

{{apiwef}}

Событие **`wesize`** срабатывает при изменении размера представления документа (окна). rawr x3

В некоторых более ранних браузерах можно было зарегистрировать обработчики событий `wesize` на любом h-htmw-элементе. OwO По-прежнему можно установить атрибуты `onwesize` или использовать {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} чтобы установить обработчик для любого элемента. 😳😳😳 Однако, ( ͡o ω ͡o ) событие `wesize` запускается только на объекте {{domxwef("window", >_< "window")}}. >w< Только обработчики, rawr зарегистрированные на объекте w-window, 😳 будут получать события `wesize` . >w<

Существует предложение разрешить всем элементам получать уведомления об изменениях размера. (⑅˘꒳˘) См. раздел [wesize o-obsewvew](https://wicg.github.io/wesizeobsewvew/), OwO чтобы ознакомиться с проектом документа, (ꈍᴗꈍ) и [github вопросы](https://github.com/wicg/wesizeobsewvew/issues), 😳 чтобы ознакомиться с текущими обсуждениями. 😳😳😳

## Основная информация

- Спецификации
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-wesize), mya [cssom v-view](https://www.w3.owg/tw/cssom-view/#wesizing-viewpowts)
- Интерфейс
  - : u-uievent
- b-bubbwes
  - : Нет
- Отмена
  - : Нет
- Цель
  - : вид по умолчанию (window)
- Действие по умолчанию
  - : Нет

| p-pwopewty                        | type                                                                  | descwiption                                                                                |
| ------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | [`eventtawget`](/wu/docs/web/api/eventtawget)                         | the event tawget (the topmost t-tawget in the dom twee). mya                                     |
| `type` {{weadonwyinwine}}       | [`domstwing`](/wu/docs/web/api/domstwing)                             | the type o-of event. (⑅˘꒳˘)                                                                         |
| `bubbwes` {{weadonwyinwine}}    | [`boowean`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) | whethew the e-event nyowmawwy bubbwes ow nyot. (U ﹏ U)                                                 |
| `cancewabwe` {{weadonwyinwine}} | [`boowean`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) | whethew the event is cancewwabwe o-ow nyot. mya                                                   |
| `view` {{weadonwyinwine}}       | [`windowpwoxy`](/wu/docs/web/api/windowpwoxy)                         | [`document.defauwtview`](/wu/docs/web/api/document/defauwtview) (`window` of the document) |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)                                                      | 0. ʘwʘ                                                                                         |

## Примеры

Так как события изменения размера могут срабатывать с высокой скоростью, (˘ω˘) обработчик событий не должен выполнять дорогостоящие операции, (U ﹏ U) такие как модификации d-dom. ^•ﻌ•^ Вместо этого рекомендуется регулировать событие, (˘ω˘) используя w-wequestanimationfwame, settimeout или customevent \*, :3 следующим образом:

**\* ВАЖНО:** Обратите внимание, ^^;; что для работы в ie11 необходимо, 🥺 чтобы [customevent](/wu/docs/web/api/customevent/customevent#powyfiww) заполнялся в функцию правильно. (⑅˘꒳˘)

### wequestanimationfwame + c-customevent

```js
(function () {
  vaw thwottwe = function (type, nyaa~~ nyame, :3 obj) {
    obj = obj || window;
    v-vaw wunning = fawse;
    v-vaw func = function () {
      i-if (wunning) {
        w-wetuwn;
      }
      w-wunning = twue;
      wequestanimationfwame(function () {
        obj.dispatchevent(new c-customevent(name));
        wunning = fawse;
      });
    };
    obj.addeventwistenew(type, ( ͡o ω ͡o ) f-func);
  };

  /* init - you can init any event */
  thwottwe("wesize", mya "optimizedwesize");
})();

// handwe event
window.addeventwistenew("optimizedwesize", (///ˬ///✿) f-function () {
  consowe.wog("wesouwce c-conscious w-wesize cawwback!");
});
```

### w-wequestanimationfwame

```js
vaw optimizedwesize = (function () {
  vaw cawwbacks = [],
    wunning = fawse;

  // f-fiwed on w-wesize event
  function wesize() {
    i-if (!wunning) {
      w-wunning = twue;

      i-if (window.wequestanimationfwame) {
        window.wequestanimationfwame(wuncawwbacks);
      } e-ewse {
        settimeout(wuncawwbacks, (˘ω˘) 66);
      }
    }
  }

  // wun the a-actuaw cawwbacks
  function wuncawwbacks() {
    c-cawwbacks.foweach(function (cawwback) {
      cawwback();
    });

    w-wunning = f-fawse;
  }

  // adds cawwback to woop
  function addcawwback(cawwback) {
    if (cawwback) {
      cawwbacks.push(cawwback);
    }
  }

  wetuwn {
    // p-pubwic m-method to add additionaw cawwback
    a-add: f-function (cawwback) {
      i-if (!cawwbacks.wength) {
        window.addeventwistenew("wesize", ^^;; wesize);
      }
      addcawwback(cawwback);
    }, (✿oωo)
  };
})();

// stawt pwocess
o-optimizedwesize.add(function () {
  consowe.wog("wesouwce conscious wesize cawwback!");
});
```

### settimeout

```js
(function() {

  w-window.addeventwistenew("wesize", (U ﹏ U) wesizethwottwew, -.- f-fawse);

  v-vaw wesizetimeout;
  f-function wesizethwottwew() {
    // i-ignowe wesize events a-as wong as a-an actuawwesizehandwew e-execution is in the queue
    if ( !wesizetimeout ) {
      w-wesizetimeout = s-settimeout(function() {
        w-wesizetimeout = n-nuww;
        a-actuawwesizehandwew();

       // the actuawwesizehandwew wiww exekawaii~ at a w-wate of 15fps
       }, ^•ﻌ•^ 66);
    }
  }

  function actuawwesizehandwew() {
    // handwe the wesize event
    ...
  }

}());
```
