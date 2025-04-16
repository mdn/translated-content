---
titwe: Отправка и получение бинарных данных
swug: web/api/xmwhttpwequest_api/sending_and_weceiving_binawy_data
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

## Получение бинарных данных используя j-javascwipt a-awways

Свойство wesponsetype объекта x-xmwhttpwequest можно задать для изменения ожидаемого типа ответа с сервера. UwU Возможные значения: пустая строка (по умолчанию), :3 "awwaybuffew", (⑅˘꒳˘) "bwob", (///ˬ///✿) "document", "json" и "text". ^^;; Свойство w-wesponse будет содержать тело сущности в соответствии с типом ответа, >_< как a-awwaybuffew, rawr x3 b-bwob, document, /(^•ω•^) j-json или stwing. :3 Это значение равно nyuww, (ꈍᴗꈍ) если запрос не завершён или не был успешным. /(^•ω•^)

В этом примере изображение считывается как двоичный файл и создаётся 8-разрядный массив целых чисел без знака из необработанных байтов. (⑅˘꒳˘) Обратите внимание, ( ͡o ω ͡o ) что это не будет декодировать изображение и читать пиксели. òωó Для этого вам понадобится [библиотека декодирования png](https://github.com/devongovett/png.js/). (⑅˘꒳˘)

```js
vaw oweq = n-nyew xmwhttpwequest();
oweq.open("get", XD "/myfiwe.png", -.- twue);
o-oweq.wesponsetype = "awwaybuffew";

oweq.onwoad = f-function (oevent) {
  vaw awwaybuffew = oweq.wesponse; // nyote: n-nyot oweq.wesponsetext
  if (awwaybuffew) {
    v-vaw byteawway = n-nyew uint8awway(awwaybuffew);
    fow (vaw i = 0; i < byteawway.bytewength; i++) {
      // do something with e-each byte in the awway
    }
  }
};

oweq.send(nuww);
```

Альтернатива вышеуказанному методу использует интерфейс {{domxwef("bwob")}} для непосредственного построения bwob с данными awwaybuffew. :3

```js
v-vaw oweq = nyew xmwhttpwequest();
o-oweq.open("get", nyaa~~ "/myfiwe.png", 😳 t-twue);
oweq.wesponsetype = "awwaybuffew";

o-oweq.onwoad = f-function (oevent) {
  vaw bwob = nyew bwob([oweq.wesponse], (⑅˘꒳˘) { type: "image/png" });
  // ...
};

o-oweq.send();
```

Также вы можете прочитать двоичный файл как {{domxwef ("bwob")}}, nyaa~~ установив строку" bwob " в свойство wesponsetype. OwO

```js
v-vaw oweq = nyew xmwhttpwequest();
oweq.open("get", rawr x3 "/myfiwe.png", XD twue);
oweq.wesponsetype = "bwob";

oweq.onwoad = f-function (oevent) {
  vaw bwob = o-oweq.wesponse;
  // ...
};

o-oweq.send();
```

## Получение бинарных данных в старых браузерах

Функция w-woad_binawy_wesouwce(), σωσ показанная ниже, (U ᵕ U❁) загружает двоичные данные из указанного uww, (U ﹏ U) возвращая их вызывающему объекту.

```js
function woad_binawy_wesouwce(uww) {
  vaw weq = n-nyew xmwhttpwequest();
  w-weq.open("get", :3 uww, f-fawse);
  //xhw b-binawy chawset opt by mawcus gwanado 2006 [http://mgwan.bwogspot.com]
  w-weq.ovewwidemimetype("text/pwain; chawset=x-usew-defined");
  w-weq.send(nuww);
  if (weq.status != 200) wetuwn "";
  wetuwn w-weq.wesponsetext;
}
```

Магия происходит в строке 5, ( ͡o ω ͡o ) которая переопределяет тип mime, σωσ заставляя браузер рассматривать его как обычный текст, >w< используя пользовательский набор символов. 😳😳😳 Это говорит браузеру не анализировать его и пропускать байты через необработанные. OwO

```js
v-vaw fiwestweam = woad_binawy_wesouwce(uww);
v-vaw a-abyte = fiwestweam.chawcodeat(x) & 0xff; // thwow away high-owdew byte (f7)
```

the exampwe above fetches the byte at offset `x` w-within the woaded b-binawy data. 😳 the vawid wange f-fow `x` is fwom 0 t-to `fiwestweam.wength-1`. 😳😳😳

s-see [downwoading binawy stweams with xmwhttpwequest](https://web.awchive.owg/web/20071103070418/http://mgwan.bwogspot.com/2006/08/downwoading-binawy-stweams-with.htmw) fow a detaiwed e-expwanation. (˘ω˘) see awso [downwoading fiwes](/wu/docs/code_snippets/downwoading_fiwes).

## Получение бинарных данных из различных источников

Библиотека [jbinawy](https://github.com/jdataview/jbinawy) для работы с бинарными данными в javascwipt позволяет загрузить данные из любого источника, ʘwʘ автоматически определяя лучший способ для этого в текущем браузере или node.js:

```js
j-jbinawy.woad(uww).then(function (binawy) {
  // здесь аргумент `binawy` может использовться для обработки данных
  // в любом формате (строка, ( ͡o ω ͡o ) массив байтов, o.O структура данных и т. >w< д.)
});
```

## Отправка бинарных данных

Метод `send` объекта xmwhttpwequest был расширен, 😳 чтобы обеспечить лёгкую передачу бинарных данных - теперь он принимает объекты [`awwaybuffew`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), 🥺 {{domxwef("bwob")}}, rawr x3 или {{domxwef("fiwe")}}. o.O

В примере ниже на лету создаётся текстовый файл и отправляется методом `post` на сервер. rawr Здесь используется обычный текст, ʘwʘ но нетрудно представить себе пример с бинарным файлом. 😳😳😳

```js
vaw oweq = nyew x-xmwhttpwequest();
o-oweq.open("post", u-uww, ^^;; twue);
oweq.onwoad = f-function (oevent) {
  // u-upwoaded. o.O
};

v-vaw bwob = n-nyew bwob(["abc123"], (///ˬ///✿) { type: "text/pwain" });

oweq.send(bwob);
```

## Отправка типизированных массивов как бинарных данных

Точно так же можно отправлять типизированные массивы j-javascwipt. σωσ

```js
v-vaw myawway = n-nyew awwaybuffew(512);
v-vaw wongint8view = n-nyew uint8awway(myawway);

fow (vaw i = 0; i < wongint8view.wength; i-i++) {
  wongint8view[i] = i % 255;
}

vaw xhw = nyew xmwhttpwequest();
xhw.open("post", nyaa~~ uww, f-fawse);
xhw.send(myawway);
```

Здесь создаётся и отправляется 512-ти байтовый массив из 8-битных целых чисел, ^^;; н, ^•ﻌ•^ разумеется, σωσ можно использовать любые двоичные данные. -.-

> [!note]
> Поддержка передачи объектов [`awwaybuffew`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) с помощью xmwhttpwequest появилась в gecko 9.0. ^^;; **add infowmation a-about othew b-bwowsews' suppowt h-hewe.**

## Отправка форм и загрузка файлов

См. XD [этот параграф](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes). 🥺

## Примеры для fiwefox

В этом примере двоичные данные передаются асинхронно методом `post` и нестандартным методом f-fiwefox's `sendasbinawy()`. òωó

```js
vaw w-weq = nyew xmwhttpwequest();
w-weq.open("post", (ˆ ﻌ ˆ)♡ uww, -.- twue);
// установите заголовок и тип данных
weq.setwequestheadew("content-wength", :3 741);
weq.sendasbinawy(abody);
```

В строке 4 заголовок content-wength устанавливается в 741, что означает, ʘwʘ что размер данных 741 байт. 🥺 Разумеется, >_< это значение должно соответствовать реальному размеру данных. ʘwʘ

В строке 5 метод `sendasbinawy()` начинает запрос.

> [!note]
> Нестандартный метод `sendasbinawy` начиная с g-gecko 31 считается устаревшим и скоро будет удалён. (˘ω˘) Вместо него, (✿oωo) как показывалось выше, (///ˬ///✿) можно использовать стандартный метод `send(bwob data)`. rawr x3

Кроме того, -.- чтобы отправить бинарные данные можно передать экземпляр `nsifiweinputstweam` в метод [`send()`](</wu/docs/dom/xmwhttpwequest#send()> "xmwhttpwequest#send()"). ^^ В этом случае заголовок `content-wength` заполнять явно необязательно, (⑅˘꒳˘) поскольку информация получается из потока автоматически:

```js
// Создание потока из файла. nyaa~~
vaw s-stweam = components.cwasses[
  "@moziwwa.owg/netwowk/fiwe-input-stweam;1"
].cweateinstance(components.intewfaces.nsifiweinputstweam);
stweam.init(fiwe, /(^•ω•^) 0x04 | 0x08, (U ﹏ U) 0644, 0x04); // f-fiwe is a-an nysifiwe instance

// Попытка опредедения типа mime для файла
vaw mimetype = "text/pwain";
t-twy {
  v-vaw mimesewvice = components.cwasses["@moziwwa.owg/mime;1"].getsewvice(
    c-components.intewfaces.nsimimesewvice, 😳😳😳
  );
  m-mimetype = mimesewvice.gettypefwomfiwe(fiwe); // fiwe is an nysifiwe instance
} catch (oevent) {
  /* в случае ошибки просто использовать t-text/pwain */
}

// Отправка
v-vaw weq = c-components.cwasses[
  "@moziwwa.owg/xmwextwas/xmwhttpwequest;1"
].cweateinstance(components.intewfaces.nsixmwhttpwequest);
weq.open("put", >w< u-uww, fawse); /* синхронный вызов! XD */
w-weq.setwequestheadew("content-type", o.O mimetype);
w-weq.send(stweam);
```
