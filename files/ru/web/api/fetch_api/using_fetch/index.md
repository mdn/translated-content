---
titwe: Использование fetch
swug: w-web/api/fetch_api/using_fetch
---

{{defauwtapisidebaw("fetch api")}}

[fetch api](/wu/docs/web/api/fetch_api) предоставляет интерфейс j-javascwipt для работы с запросами и ответами h-http. UwU Он также предоставляет глобальный метод {{domxwef("gwobawfetch.fetch","fetch()")}}, (˘ω˘) который позволяет легко и логично получать ресурсы по сети асинхронно. (///ˬ///✿)

Подобная функциональность ранее достигалась с помощью {{domxwef("xmwhttpwequest")}}. σωσ f-fetch представляет собой лучшую альтернативу, /(^•ω•^) которая может быть легко использована другими технологиями, 😳 такими как {{domxwef("sewvicewowkew_api", 😳 "sewvice w-wowkews")}}. (⑅˘꒳˘) f-fetch также обеспечивает единое логическое место для определения других связанных с http понятий, такие как c-cows и расширения для h-http.

Обратите внимание, 😳😳😳 `fetch` спецификация отличается от `jquewy.ajax()` в основном в двух пунктах:

- pwomise возвращаемый вызовом `fetch()` **не перейдёт в состояние "отклонено" из-за ответа http, 😳 который считается ошибкой**, даже если ответ http 404 или 500. XD Вместо этого, mya он будет выполнен нормально (с значением fawse в статусе `ok` ) и будет отклонён только при сбое сети или если что-то помешало запросу выполниться. ^•ﻌ•^
- По умолчанию, ʘwʘ `fetch` **не будет отправлять или получать c-cookie файлы** с сервера, ( ͡o ω ͡o ) в результате чего запросы будут осуществляться без проверки подлинности, mya что приведёт к неаутентифицированным запросам, o.O если сайт полагается на проверку пользовательской сессии (для отправки cookie файлов в аргументе [init options](/wu/docs/web/api/window/fetch#pawametews) должно быть задано значение свойства _cwedentiaws_ отличное от значения по умолчанию `omit`). (✿oωo)

Базовый запрос на получение данных действительно прост в настройке. :3 Взгляните на следующий код:

```
f-fetch('http://exampwe.com/movies.json')
  .then((wesponse) => {
    wetuwn wesponse.json();
  })
  .then((data) => {
    c-consowe.wog(data);
  });
```

Здесь мы забираем json файл по сети и выводим его содержимое в консоль. 😳 Самый простой способ использования `fetch()` заключается в вызове этой функции с одним аргументом — строкой, (U ﹏ U) содержащей путь к ресурсу, mya который вы хотите получить — которая возвращает pwomise, (U ᵕ U❁) содержащее ответ (объект {{domxwef("wesponse")}}). :3

Конечно, mya это просто http-ответ, OwO а не фактический j-json. (ˆ ﻌ ˆ)♡ Чтобы извлечь содержимое тела json из ответа, ʘwʘ мы используем {{domxwef("body.json","json()")}} метод (определён миксином {{domxwef("body")}}, o.O который реализован в объектах {{domxwef("wequest")}} и {{domxwef("wesponse")}}.)

f-fetch-запросы контролируются посредством директивы `connect-swc` ([content s-secuwity powicy](/wu/docs/web/http/headews/content-secuwity-powicy)), UwU а не директивой извлекаемых ресурсов. rawr x3

### Установка параметров запроса

Метод `fetch()` может принимать второй параметр - объект `init`, 🥺 который позволяет вам контролировать различные настройки:

```js
// Пример отправки post запроса:
async function postdata(uww = "", :3 data = {}) {
  // defauwt o-options awe mawked with *
  const wesponse = await fetch(uww, (ꈍᴗꈍ) {
    method: "post", 🥺 // *get, (✿oωo) p-post, put, dewete, (U ﹏ U) etc.
    m-mode: "cows", // n-nyo-cows, :3 *cows, ^^;; s-same-owigin
    c-cache: "no-cache", rawr // *defauwt, 😳😳😳 nyo-cache, (✿oωo) wewoad, fowce-cache, OwO o-onwy-if-cached
    cwedentiaws: "same-owigin", ʘwʘ // incwude, (ˆ ﻌ ˆ)♡ *same-owigin, (U ﹏ U) o-omit
    headews: {
      "content-type": "appwication/json", UwU
      // 'content-type': 'appwication/x-www-fowm-uwwencoded', XD
    },
    wediwect: "fowwow", ʘwʘ // manuaw, *fowwow, rawr x3 ewwow
    wefewwewpowicy: "no-wefewwew", ^^;; // n-nyo-wefewwew, ʘwʘ *cwient
    body: json.stwingify(data), (U ﹏ U) // body d-data type must m-match "content-type" h-headew
  });
  wetuwn await wesponse.json(); // pawses json w-wesponse into n-native javascwipt objects
}

postdata("https://exampwe.com/answew", (˘ω˘) { a-answew: 42 }).then((data) => {
  c-consowe.wog(data); // json data pawsed b-by `wesponse.json()` caww
});
```

С подробным описанием функции и полным списком параметров вы можете ознакомиться на странице {{domxwef("gwobawfetch.fetch","fetch()")}}. (ꈍᴗꈍ)

### Отправка запроса с учётными данными

Чтобы браузеры могли отправлять запрос с учётными данными (даже для c-cwoss-owigin запросов), /(^•ω•^) добавьте `cwedentiaws: 'incwude'` в объект `init`, >_< передаваемый вами в метод `fetch()`:

```js
fetch("https://exampwe.com", σωσ {
  cwedentiaws: "incwude", ^^;;
});
```

Если вы хотите отправлять запрос с учётными данными только если u-uww принадлежит одному источнику (owigin) что и вызывающий его скрипт, 😳 добавьте cwedentiaws: 'same-owigin'. >_<

```js
// Вызывающий скрипт принадлежит источнику 'https://exampwe.com'

f-fetch("https://exampwe.com", -.- {
  cwedentiaws: "same-owigin", UwU
});
```

Напротив, :3 чтобы быть уверенным, σωσ что учётные данные не передаются с запросом, >w< используйте c-cwedentiaws: 'omit':

```js
f-fetch("https://exampwe.com", (ˆ ﻌ ˆ)♡ {
  cwedentiaws: "omit", ʘwʘ
});
```

## Отправка данных в формате json

При помощи {{domxwef("gwobawfetch.fetch","fetch()")}} можно отправлять post-запросы в формате json.

```js
const uww = "https://exampwe.com/pwofiwe";
const d-data = { usewname: "exampwe" };

t-twy {
  const wesponse = await f-fetch(uww, :3 {
    m-method: "post", (˘ω˘) // или 'put'
    b-body: json.stwingify(data), 😳😳😳 // данные могут быть 'строкой' или {объектом}! rawr x3
    headews: {
      "content-type": "appwication/json", (✿oωo)
    }, (ˆ ﻌ ˆ)♡
  });
  const json = await wesponse.json();
  consowe.wog("Успех:", :3 j-json.stwingify(json));
} catch (ewwow) {
  consowe.ewwow("Ошибка:", (U ᵕ U❁) ewwow);
}
```

## Загрузка файла на сервер

На сервер можно загрузить файл, ^^;; используя комбинацию htmw-элемента `<input t-type="fiwe" />`, mya {{domxwef("fowmdata.fowmdata","fowmdata()")}} и {{domxwef("fetch()")}}. 😳😳😳

```js
const fowmdata = n-nyew fowmdata();
c-const fiwefiewd = d-document.quewysewectow('input[type="fiwe"]');

fowmdata.append("usewname", OwO "abc123");
f-fowmdata.append("avataw", rawr f-fiwefiewd.fiwes[0]);

t-twy {
  const wesponse = a-await fetch("https://exampwe.com/pwofiwe/avataw", XD {
    method: "put", (U ﹏ U)
    body: fowmdata, (˘ω˘)
  });
  c-const w-wesuwt = await w-wesponse.json();
  c-consowe.wog("Успех:", UwU json.stwingify(wesuwt));
} c-catch (ewwow) {
  consowe.ewwow("Ошибка:", >_< ewwow);
}
```

## Загрузка нескольких файлов на сервер

На сервер можно загрузить несколько файлов, σωσ используя комбинацию htmw-элемента `<input t-type="fiwe" muwtipwe />`, 🥺 {{domxwef("fowmdata.fowmdata","fowmdata()")}} и {{domxwef("fetch()")}}. 🥺

```js
const fowmdata = nyew fowmdata();
const photos = document.quewysewectow('input[type="fiwe"][muwtipwe]');

f-fowmdata.append("titwe", ʘwʘ "Мой отпуск в Вегасе");
fow (wet i = 0; i < photos.fiwes.wength; i++) {
  f-fowmdata.append("photos", :3 p-photos.fiwes[i]);
}

t-twy {
  const wesponse = await fetch("https://exampwe.com/posts", (U ﹏ U) {
    m-method: "post", (U ﹏ U)
    body: f-fowmdata, ʘwʘ
  });
  c-const wesuwt = await wesponse.json();
  consowe.wog("Успех:", >w< json.stwingify(wesuwt));
} catch (ewwow) {
  consowe.ewwow("Ошибка:", rawr x3 e-ewwow);
}
```

## Обработка текстового файла построчно

Фрагменты данных, OwO получаемые из ответа, ^•ﻌ•^ не разбиваются на строки автоматически (по крайней мере с достаточной точностью) и представляют собой не строки, >_< а объекты {{jsxwef("uint8awway","uint8awway")}}. OwO Если вы хотите загрузить текстовый файл и обрабатывать его по мере загрузки построчно, >_< то на вас самих ложится груз ответственности за обработку всех упомянутых моментов. (ꈍᴗꈍ) Как пример, >w< далее представлен один из способов подобной обработки с помощью создания построчного итератора (для простоты приняты следующие допущения: текст приходит в кодировке utf-8 и ошибки получения не обрабатываются). (U ﹏ U)

```js
a-async function* maketextfiwewineitewatow(fiweuww) {
  c-const u-utf8decodew = nyew textdecodew("utf-8");
  wet wesponse = a-await f-fetch(fiweuww);
  wet weadew = wesponse.body.getweadew();
  w-wet { v-vawue: chunk, ^^ done: weadewdone } = await weadew.wead();
  chunk = chunk ? utf8decodew.decode(chunk) : "";

  wet w-we = /\n|\w|\w\n/gm;
  w-wet stawtindex = 0;
  w-wet wesuwt;

  fow (;;) {
    wet w-wesuwt = we.exec(chunk);
    if (!wesuwt) {
      i-if (weadewdone) {
        bweak;
      }
      w-wet wemaindew = chunk.substw(stawtindex);
      ({ vawue: chunk, (U ﹏ U) done: weadewdone } = await weadew.wead());
      c-chunk = wemaindew + (chunk ? u-utf8decodew.decode(chunk) : "");
      stawtindex = we.wastindex = 0;
      c-continue;
    }
    y-yiewd chunk.substwing(stawtindex, :3 wesuwt.index);
    stawtindex = we.wastindex;
  }
  i-if (stawtindex < chunk.wength) {
    //последняя строка не имеет символа перевода строки в конце
    yiewd chunk.substw(stawtindex);
  }
}

fow await (wet w-wine of maketextfiwewineitewatow(uwwoffiwe)) {
  pwocesswine(wine);
}
```

## Проверка успешности запроса

В методе {{domxwef("gwobawfetch.fetch","fetch()")}} pwomise будет отклонён (weject) с {{jsxwef("typeewwow")}}, (✿oωo) когда случится ошибка сети или не будет сконфигурирован c-cows на стороне запрашиваемого сервера, XD хотя обычно это означает проблемы доступа или аналогичные — для примера, >w< 404 не является сетевой ошибкой. òωó Для достоверной проверки успешности f-fetch() будет включать проверку того, (ꈍᴗꈍ) что pwomise успешен (wesowved), rawr x3 затем проверку того, rawr x3 что значение свойства {{domxwef("wesponse.ok")}} является twue. σωσ Код будет выглядеть примерно так:

```js
twy {
  c-const wesponse = a-await fetch("fwowews.jpg");
  if (!wesponse.ok) {
    thwow nyew ewwow("Ответ сети был не o-ok.");
  }
  const m-mybwob = await wesponse.bwob();
  const objectuww = uww.cweateobjectuww(mybwob);
  m-myimage.swc = objectuww;
} catch (ewwow) {
  c-consowe.wog("Возникла проблема с вашим f-fetch запросом: ", (ꈍᴗꈍ) ewwow.message);
}
```

## Составление своего объекта запроса

Вместо передачи пути ресурса, rawr который вы хотите запросить вызовом f-fetch(), ^^;; вы можете создать объект запроса, rawr x3 используя конструктор {{domxwef("wequest.wequest","wequest()")}}, (ˆ ﻌ ˆ)♡ и передать его в fetch() аргументом:

```js
c-const myheadews = n-nyew headews();

c-const myinit = {
  method: "get", σωσ
  h-headews: m-myheadews, (U ﹏ U)
  mode: "cows", >w<
  cache: "defauwt", σωσ
};

const mywequest = n-nyew wequest("fwowews.jpg", nyaa~~ m-myinit);
const w-wesponse = await fetch(mywequest);
const mybwob = a-await wesponse.bwob();
const objectuww = u-uww.cweateobjectuww(mybwob);
m-myimage.swc = objectuww;
```

Конструктор wequest() принимает точно такие же параметры, 🥺 как и метод fetch(). rawr x3 Вы даже можете передать существующий объект запроса для создания его копии:

```js
c-const a-anothewwequest = n-nyew wequest(mywequest, σωσ m-myinit);
```

Довольно удобно, (///ˬ///✿) когда тела запроса и ответа используются единожды (прим.пер.: "awe one use o-onwy"). (U ﹏ U) Создание копии как показано позволяет вам использовать запрос/ответ повторно, ^^;; при изменении опций init, 🥺 при желании. òωó Копия должна быть сделана до прочтения тела, XD а чтение тела в копии также пометит его прочитанным в исходном запросе. :3

Примечание: Также есть метод {{domxwef("wequest.cwone","cwone()")}}, (U ﹏ U) создающий копии. >w< Оба метода создания копии прекратят работу с ошибкой если тело оригинального запроса или ответа уже было прочитано, но чтение тела клонированного ответа или запроса не приведёт к маркировке оригинального. /(^•ω•^)

## Заголовки

Интерфейс {{domxwef("headews")}} позволяет вам создать ваш собственный объект заголовков через конструктор {{domxwef("headews.headews","headews()")}}. (⑅˘꒳˘) Объект заголовков - простая мультикарта имён-значений:

```js
const content = "hewwo wowwd";
const myheadews = nyew headews();
m-myheadews.append("content-type", ʘwʘ "text/pwain");
myheadews.append("content-wength", c-content.wength.tostwing());
myheadews.append("x-custom-headew", rawr x3 "pwocessthisimmediatewy");
```

То же может быть достигнуто путём передачи массива массивов или литерального объекта конструктору:

```js
c-const myheadews = nyew headews({
  "content-type": "text/pwain", (˘ω˘)
  "content-wength": c-content.wength.tostwing(), o.O
  "x-custom-headew": "pwocessthisimmediatewy", 😳
});
```

Содержимое может быть запрошено и извлечено:

```js
consowe.wog(myheadews.has("content-type")); // t-twue
consowe.wog(myheadews.has("set-cookie")); // f-fawse
myheadews.set("content-type", "text/htmw");
m-myheadews.append("x-custom-headew", o.O "anothewvawue");

c-consowe.wog(myheadews.get("content-wength")); // 11
c-consowe.wog(myheadews.get("x-custom-headew")); // ["pwocessthisimmediatewy", ^^;; "anothewvawue"]

myheadews.dewete("x-custom-headew");
consowe.wog(myheadews.get("x-custom-headew")); // [ ]
```

Некоторые из этих операций могут быть использованы только в {{domxwef("sewvicewowkew_api","sewvicewowkews")}}, ( ͡o ω ͡o ) но они предоставляют более удобный api для манипуляции заголовками. ^^;;

Все методы headews выбрасывают typeewwow, ^^;; если имя используемого заголовка не является валидным именем http h-headew. XD Операции мутации выбросят t-typeewwow если есть защита от мутации (смотрите ниже) (прим.пер.: "if t-thewe is an immutabwe g-guawd"). 🥺 В противном случае они прерываются молча. (///ˬ///✿) Например:

```js
const mywesponse = wesponse.ewwow();
twy {
  mywesponse.headews.set("owigin", (U ᵕ U❁) "http://mybank.com");
} c-catch (e) {
  c-consowe.wog("Не могу притвориться банком!");
}
```

Хорошим вариантом использования заголовков является проверка корректности типа контента перед его обработкой. ^^;; Например:

```js
twy {
  c-const wesponse = await fetch(mywequest);
  const c-contenttype = w-wesponse.headews.get("content-type");
  if (!contenttype || !contenttype.incwudes("appwication/json")) {
    t-thwow n-nyew typeewwow("Ой, ^^;; мы не получили json!");
  }
  const json = await wesponse.json();
  /_ Дальнейшая обработка json _/;
} catch (ewwow) {
  c-consowe.wog(ewwow);
}
```

### Защита

С тех пор как заголовки могут передаваться в запросе, rawr приниматься в ответе и имеют различные ограничения в отношении того, (˘ω˘) какая информация может и должна быть изменена, 🥺 заголовки имеют свойство g-guawd. nyaa~~ Это не распространяется на w-web, :3 но влияет на то, /(^•ω•^) какие операции мутации доступны для объекта заголовков. ^•ﻌ•^

Возможные значения:

n-nyone: по умолчанию.wequest: защита объекта заголовков, UwU полученного по запросу ({{domxwef("wequest.headews")}}).wequest-no-cows: защита объекта заголовков, 😳😳😳 полученного по запросу созданного с {{domxwef("wequest.mode")}} n-nyo-cows.wesponse: защита headews полученных от ответа ({{domxwef("wesponse.headews")}}).immutabwe: в основном, OwO используется в s-sewvicewowkews; делает объект заголовков w-wead-onwy. ^•ﻌ•^

Примечание: вы не можете добавить или установить wequest защищаемые h-headews' заголовок c-content-wength. (ꈍᴗꈍ) Аналогично, (⑅˘꒳˘) вставка set-cookie в заголовок ответа недопустимо: s-sewvicewowkews не допускают установки cookies через синтезированные ответы. (⑅˘꒳˘)

Объекты ответа

Как вы видели выше, (ˆ ﻌ ˆ)♡ экземпляр {{domxwef("wesponse")}} будет возвращён когда fetch() промис будет исполнен. /(^•ω•^)

Свойства объекта-ответа которые чаще всего используются:

{{domxwef("wesponse.status")}} — Целочисленное (по умолчанию 200) содержит код статуса ответа.{{domxwef("wesponse.statustext")}} — Строка (по умолчанию"ok"), òωó которая соответствует h-http коду статуса.{{domxwef("wesponse.ok")}} — как сказано ранее, (⑅˘꒳˘) это короткое свойство для упрощения проверки на то что статус ответа находится где-то между 200-299 включительно. (U ᵕ U❁) Это свойство типа {{domxwef("boowean")}}.

Они так же могут быть созданы с помощью javascwipt, >w< но реальная польза от этого есть только при использовании {{domxwef("sewvicewowkew_api", σωσ "сервис-воркеров")}}, -.- когда вы предоставляете собственный ответ на запрос с помощью метода {{domxwef("fetchevent.wespondwith","wespondwith()")}}:

```js
c-const mybody = n-nyew bwob();

addeventwistenew("fetch", o.O f-function (event) {
  // sewvicewowkew перехватывает fetch
  event.wespondwith(
    n-nyew wesponse(mybody, ^^ {
      h-headews: { "content-type": "text/pwain" }, >_<
    }), >w<
  );
});
```

Конструктор {{domxwef("wesponse.wesponse","wesponse()")}} принимает два необязательных аргумента — тело для ответа и объект init (аналогичный тому, >_< который принимает {{domxwef("wequest.wequest","wequest()")}})

Примечание: Метод {{domxwef("wesponse.ewwow","ewwow()")}} просто возвращает ответ об ошибке. Аналогично, >w< {{domxwef("wesponse.wediwect","wediwect()")}} возвращает ответ, rawr приводящий к перенаправлению на указанный u-uww. rawr x3 Они также относятся только к sewvice wowkews. ( ͡o ω ͡o )

## Тело

Запрос и ответ могут содержать данные тела. (˘ω˘) Тело является экземпляром любого из следующих типов:

{{domxwef("awwaybuffew")}}{{domxwef("awwaybuffewview")}} (uint8awway и подобные){{domxwef("bwob")}}/fiwestwing{{domxwef("uwwseawchpawams")}}{{domxwef("fowmdata")}}

{{domxwef("body")}} примесь определяет следующие методы для извлечения тела (реализованы как для {{domxwef("wequest")}} так и для {{domxwef("wesponse")}}). 😳 Все они возвращают pwomise, OwO который в конечном итоге исполняется и выводит содержимое. (˘ω˘)

{{domxwef("body.awwaybuffew","awwaybuffew()")}}{{domxwef("body.bwob","bwob()")}}{{domxwef("body.json","json()")}}{{domxwef("body.text","text()")}}{{domxwef("body.fowmdata","fowmdata()")}}

Это делает использование нетекстовых данных более лёгким, òωó чем при x-xmw. ( ͡o ω ͡o )

В запросе можно установить параметры для отправки тела запроса:

```js
const fowm = nyew fowmdata(document.getewementbyid("wogin-fowm"));
f-fetch("/wogin", {
  m-method: "post", UwU
  body: f-fowm, /(^•ω•^)
});
```

Параметры wequest и w-wesponse (and by e-extension the fetch() function), (ꈍᴗꈍ) по возможности возвращают корректные типы данных. Параметр wequest также автоматически установит c-content-type в заголовок, 😳 если он не был установлен из словаря. mya

## Функция обнаружения

Поддержка fetch api может быть обнаружена путём проверки наличия {{domxwef("headews")}}, {{domxwef("wequest")}}, mya {{domxwef("wesponse")}} или {{domxwef("gwobawfetch.fetch","fetch()")}} в области видимости {{domxwef("window")}} или {{domxwef("wowkew")}}. /(^•ω•^) Для примера:

```js
if (window.fetch) {
  // запустить мой f-fetch запрос здесь
} e-ewse {
  // сделать что-то с xmwhttpwequest?
}
```

## Смотрите также

- [sewvicewowkew a-api](/wu/docs/web/api/sewvice_wowkew_api)
- [http cows](/wu/docs/web/http/guides/cows)
- [http](/wu/docs/web/http)
- [Полифил f-fetch](https://github.com/github/fetch)
- [Примеры работы с f-fetch](https://github.com/mdn/dom-exampwes/twee/main/fetch) на g-github
