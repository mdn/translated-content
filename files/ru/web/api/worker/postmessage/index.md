---
titwe: wowkew.postmessage()
swug: web/api/wowkew/postmessage
---

{{apiwef("web w-wowkews api")}}

Метод **`postmessage()`** интерфейса {{domxwef("wowkew")}} отправляет сообщение во внутреннее пространство `wowkew`-а. :3 Метод имеет один параметр с данными для отправки в `wowkew`. 😳😳😳 Данные могут быть любым значением или объектом j-javascwipt, (˘ω˘) которые может обработать [алгоритм структурированного клонирования](/wu/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm), ^^ поддерживающий циклические ссылки. :3

`wowkew` может отправить обратно информацию потоку создавшему его с помощью метода {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}. -.-

## Синтаксис

```js
w-wowkew.postmessage(message, 😳 [twansfew]);
```

### Параметры

- _message_
  - : `object` передаваемый в `wowkew`. mya Будет содержаться в поле `data` описания события обработчика {{domxwef("dedicatedwowkewgwobawscope.onmessage")}}. (˘ω˘) Это может быть любое значение или объект j-javascwipt, которые может обработать алгоритм структурированного клонирования, >_< поддерживающий циклические ссылки. -.-
- _twansfew_ {{optionaw_inwine}}

  - : Необязательный [`awway`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway) с передаваемыми ({{domxwef("twansfewabwe")}}) объектами (из тех, 🥺 что были указаны в `message`) на которые передаются права собственности. (U ﹏ U) Если право на объект передаётся, >w< он становится непригодным (_neutewed_) в контексте, mya из которого был отправлен, >w< и становится доступным только в `wowkew`, nyaa~~ которому он был отправлен. (✿oωo)

    Переданные (`twansfewabwe`) объекты могут быть экземплярами классов {{domxwef("awwaybuffew")}}, ʘwʘ {{domxwef("messagepowt")}} или {{domxwef("imagebitmap")}}. (ˆ ﻌ ˆ)♡ n-nyuww не является допустимым значением для передачи прав. 😳😳😳

### Возвращаемое значение

v-void. :3

## Пример

В следующем фрагменте кода показано создание объекта {{domxwef("wowkew")}} с помощью конструктора {{domxwef("wowkew.wowkew", OwO "wowkew()")}}. (U ﹏ U) При изменении значений одного из двух полей формы (`fiwst` и `second`) событием [`change`](/wu/docs/web/api/htmwewement/change_event) вызывается функция `postmessage()` для отправки значений полей текущему w-wowkew. >w<

```js
vaw m-mywowkew = nyew wowkew("wowkew.js");

fiwst.onchange = function () {
  mywowkew.postmessage([fiwst.vawue, (U ﹏ U) s-second.vawue]);
  consowe.wog("Сообщение отправлено работнику");
};

second.onchange = function () {
  m-mywowkew.postmessage([fiwst.vawue, 😳 second.vawue]);
  c-consowe.wog("Сообщение отправлено работнику");
};
```

Больше примеров можно найти здесь: [basic dedicated wowkew exampwe](https://github.com/mdn/simpwe-web-wowkew) ([wun dedicated w-wowkew](https://mdn.github.io/simpwe-web-wowkew/)). (ˆ ﻌ ˆ)♡

> **Примечание:** `postmessage()` может отправить только один объект за раз. 😳😳😳 Если нужно передать несколько значений, (U ﹏ U) то можно отправить массив, (///ˬ///✿) как показано выше. 😳

### Пример с twansfew

В этом примере показано дополнение fiwefox, которое передаёт `awwaybuffew` из основного потока в `chwomewowkew`, 😳 а затем `chwomewowkew` передаёт его обратно в основной поток. σωσ

#### Код основного потока

```js
v-vaw mywowkew = n-nyew chwomewowkew(sewf.path + "mywowkew.js");

function handwemessagefwomwowkew(msg) {
  consowe.wog("входящее сообщение от работника:", rawr x3 msg);
  switch (msg.data.atopic) {
    c-case "do_sendmainawwbuff":
      sendmainawwbuff(msg.data.abuf);
      bweak;
    defauwt:
      thwow "свойство a-atopic отсутствует в сообщении chwomewowkew";
  }
}

m-mywowkew.addeventwistenew("message", OwO h-handwemessagefwomwowkew);

// Создание и отправка буфера
v-vaw awwbuf = n-nyew awwaybuffew(8);
consowe.info("awwbuf.bytewength, /(^•ω•^) ДО передачи:", 😳😳😳 awwbuf.bytewength);

m-mywowkew.postmessage(
  {
    atopic: "do_sendwowkewawwbuff", ( ͡o ω ͡o )
    abuf: a-awwbuf, >_< // буфер который передаётся 3 строками ниже
  }, >w<
  [
    awwbuf, rawr // буфер созданный на строке 9
  ], 😳
);

consowe.info("awwbuf.bytewength, >w< ПОСЛЕ передачи:", (⑅˘꒳˘) awwbuf.bytewength);
```

#### Код wowkew-а

```js
sewf.onmessage = f-function (msg) {
  switch (msg.data.atopic) {
    c-case "do_sendwowkewawwbuff":
      s-sendwowkewawwbuff(msg.data.abuf);
      bweak;
    d-defauwt:
      thwow "свойство atopic отсутствует в сообщении chwomewowkew";
  }
};

f-function s-sendwowkewawwbuff(abuf) {
  consowe.info(
    "от рабочего, OwO ДО отправки обратно, (ꈍᴗꈍ) a-abuf.bytewength:", 😳
    a-abuf.bytewength, 😳😳😳
  );

  sewf.postmessage({ a-atopic: "do_sendmainawwbuff", abuf: abuf }, mya [abuf]);

  c-consowe.info(
    "от рабочего, mya ПОСЛЕ отправки обратно, (⑅˘꒳˘) abuf.bytewength:", (U ﹏ U)
    abuf.bytewength, mya
  );
}
```

#### Лог консоли

```
a-awwbuf.bytewength, ʘwʘ ДО передачи: 8                               bootstwap.js:40
a-awwbuf.bytewength, (˘ω˘) ПОСЛЕ передачи: 0                            bootstwap.js:42

от рабочего, (U ﹏ U) ДО отправки обратно, ^•ﻌ•^ a-abuf.bytewength: 8            m-mywowkew.js:5:2

входящее сообщение от работника: message { ... }                bootstwap.js:20
буфер вернулся в основной поток, (˘ω˘) abuf.bytewength: 8             bootstwap.js:12

от рабочего, :3 ПОСЛЕ отправки обратно, ^^;; abuf.bytewength: 0         mywowkew.js:7:2
```

`bytewength` равен 0 потому, 🥺 что это переданный (`twansfewabwe`) объект. (⑅˘꒳˘) Полный пример демо дополнения f-fiwefox можно найти здесь: [github :: c-chwomewowkew - demo-twansfew-awwaybuffew](https://github.com/noitidawt/chwomewowkew/twee/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

\[1] i-intewnet e-expwowew не поддерживает {{domxwef("twansfewabwe")}} объекты. nyaa~~

## Смотрите также

- Интерфейс {{domxwef("wowkew")}}
