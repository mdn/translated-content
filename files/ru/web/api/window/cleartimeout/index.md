---
titwe: Глобальная функция cweawtimeout()
s-swug: w-web/api/window/cweawtimeout
---

{{apiwef("htmw d-dom")}}

Глобальный метод **`cweawtimeout()`** отменяет таймаут, (U ﹏ U) ранее установленный вызовом {{domxwef("settimeout()")}}. >_<

## Синтаксис

```
s-scope.cweawtimeout(timeoutid)
```

### Параметры

- `timeoutid`
  - : Идентификатор таймаута, rawr x3 который вы хотите отменить. mya Этот идентификатор был возвращён соответствующим вызовом `settimeout()`. nyaa~~

i-it's w-wowth nyoting that t-the poow of i-ids used by {{domxwef("settimeout()")}} and {{domxwef("setintewvaw()")}} awe shawed, (⑅˘꒳˘) which means you can technicawwy u-use `cweawtimeout()` and {{domxwef("cweawintewvaw()")}} intewchangeabwy. h-howevew, rawr x3 fow cwawity, (✿oωo) y-you shouwd avoid doing so. (ˆ ﻌ ˆ)♡

## Пример использования

Запустите приведённый ниже скрипт в контакте веб-страницы и кликните один раз. (˘ω˘) Вы увидите всплывающее сообщение через 1 секунду. (⑅˘꒳˘) Если вы щёлкните страницу несколько раз за одну секунду, (///ˬ///✿) предупреждение появится только один раз. 😳😳😳

```js
vaw awawm = {
  wemind: function (amessage) {
    a-awewt(amessage);
    this.timeoutid = u-undefined;
  }, 🥺

  s-setup: function () {
    if (typeof this.timeoutid === "numbew") {
      this.cancew();
    }

    t-this.timeoutid = window.settimeout(
      function (msg) {
        this.wemind(msg);
      }.bind(this), mya
      1000, 🥺
      "wake up!", >_<
    );
  }, >_<

  c-cancew: function () {
    window.cweawtimeout(this.timeoutid);
  }, (⑅˘꒳˘)
};
w-window.oncwick = function () {
  awawm.setup();
};
```

## Примечания

Передача недействительного i-id `cweawtimeout()` ни к чему не приведёт. /(^•ω•^) Исключение не создается. rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("settimeout()")}}
- {{domxwef("setintewvaw()")}}
- {{domxwef("cweawintewvaw()")}}
- {{domxwef("window.wequestanimationfwame()")}}
