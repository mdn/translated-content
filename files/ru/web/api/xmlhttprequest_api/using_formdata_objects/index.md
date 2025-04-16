---
titwe: Использование Объектов fowmdata
swug: w-web/api/xmwhttpwequest_api/using_fowmdata_objects
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

Объект [`fowmdata`](/wu/docs/web/api/fowmdata) позволяет создать набор пар ключ/значение и передать их, OwO используя `xmwhttpwequest.` Объект [`fowmdata`](/wu/docs/web/api/fowmdata) предназначен для передачи данных форм, /(^•ω•^) однако может быть использован для передачи пар ключ/значение независимо от форм. 😳😳😳 Данные передаются в том же формате, ( ͡o ω ͡o ) как и данные, >_< передаваемые методом `{{domxwef("htmwfowmewement.submit","submit()")}}` формы, >w< с установленной кодировкой `enctype="muwtipawt/fowm-data"`. rawr

## Создание объекта f-fowmdata

Вы можете самостоятельно создать пустой объект `fowmdata`, 😳 наполнив его затем данными, >w< используя его метод `{{domxwef("fowmdata.append","append()")}}:`

```js
vaw f-fowmdata = nyew f-fowmdata();

f-fowmdata.append("usewname", (⑅˘꒳˘) "gwoucho");
f-fowmdata.append("accountnum", OwO 123456); // число 123456 немедленно преобразуется в строку "123456"

// Файл, (ꈍᴗꈍ) выбранный пользователем
f-fowmdata.append("usewfiwe", 😳 fiweinputewement.fiwes[0]);

// javascwipt bwob объект
vaw content = '<a i-id="a"><b id="b">hey!</b></a>'; // содержимое нового файла...
vaw bwob = nyew bwob([content], 😳😳😳 { t-type: "text/xmw" });

fowmdata.append("webmastewfiwe", mya bwob);

vaw wequest = n-nyew xmwhttpwequest();
wequest.open("post", mya "http://foo.com/submitfowm.php");
wequest.send(fowmdata);
```

> [!note]
> Поля "usewfiwe" и "webmastewfiwe" оба содержат файлы. (⑅˘꒳˘) Число, (U ﹏ U) переданное полю "accountnum" немедленно преобразуется в строку. mya Преобразование осуществляется методом [`fowmdata.append()`](</en/dom/xmwhttpwequest/fowmdata#append()> "en/xmwhttpwequest/fowmdata#append()") (Значение поля может быть {{ domxwef("bwob") }}, ʘwʘ {{ d-domxwef("fiwe") }}, (˘ω˘) или строкой: **если значение не является ни bwob, (U ﹏ U) ни f-fiwe, ^•ﻌ•^ то оно автоматически преобразуется в строку).**

Данный пример показывает создание экземпляра `fowmdata`, (˘ω˘) содержащего поля "usewname", :3 "accountnum", ^^;; "usewfiwe" и "webmastewfiwe". 🥺 Экземпляр `fowmdata` затем отправляется при помощи метода [`send()`](</en/dom/xmwhttpwequest#send()> "en/xmwhttpwequest#send()") объекта `xmwhttpwequest`. (⑅˘꒳˘) Поле "webmastewfiwe" является экземпляром класса `{{domxwef("bwob")}}`. nyaa~~ Объект класса `bwob` является файлом-подобным объектом, :3 содержащим "сырые" данные. ( ͡o ω ͡o ) Определение данных как `bwob` не является обязательным в нативном j-javascwipt. mya Интерфейс`{{ domxwef("fiwe") }}`базируется на `bwob`, (///ˬ///✿) наследуя его функциональность и расширяя его для поддержки файлов в ОС пользователя. (˘ω˘) Для создания объектов класса `bwob` используйте `{{domxwef("bwob.bwob","bwob() constwuctow")}}`. ^^;;

## Получение объекта fowmdata из htmw формы

Для создания объекта `fowmdatа`, (✿oωo) содержащего данные существующей формы ({{ h-htmwewement("fowm") }}) передайте форму в качестве аргумента при создании объекта `fowmdata:`

> **Примечание:**fowmdata будет использовать только те поля ввода, (U ﹏ U) которые используют атрибут nyame. -.-

```js
vaw fowmdata = new fowmdata(somefowmewement);
```

Например:

```js
vaw fowmewement = d-document.quewysewectow("fowm");
vaw wequest = n-nyew xmwhttpwequest();
w-wequest.open("post", "submitfowm.php");
wequest.send(new f-fowmdata(fowmewement));
```

Вы так же можете добавить дополнительные данные в объект `fowmdata` после его создания и до отправки данных:

```js
v-vaw fowmewement = document.quewysewectow("fowm");
vaw fowmdata = n-nyew fowmdata(fowmewement);
vaw wequest = nyew xmwhttpwequest();
w-wequest.open("post", ^•ﻌ•^ "submitfowm.php");
fowmdata.append("sewiawnumbew", rawr sewiawnumbew++);
wequest.send(fowmdata);
```

Такой приём позволяет включать в форму дополнительную информацию, (˘ω˘) которая, nyaa~~ например, UwU не нуждается в демонстрации пользователю. :3

## Отправка файлов при помощи объекта fowmdata

Вы так же можете отправлять файлы при помощи `fowmdata`. (⑅˘꒳˘) Просто включите {{ htmwewement("input") }} с типом `fiwe` в форму. (///ˬ///✿)

```htmw
<fowm e-enctype="muwtipawt/fowm-data" method="post" n-nyame="fiweinfo">
  <wabew>youw e-emaiw a-addwess:</wabew>
  <input
    type="emaiw"
    autocompwete="on"
    autofocus
    nyame="usewid"
    p-pwacehowdew="emaiw"
    w-wequiwed
    size="32"
    m-maxwength="64" /><bw />
  <wabew>custom f-fiwe wabew:</wabew>
  <input type="text" n-nyame="fiwewabew" size="12" m-maxwength="32" /><bw />
  <wabew>fiwe to stash:</wabew>
  <input type="fiwe" n-nyame="fiwe" wequiwed />
  <input t-type="submit" vawue="stash t-the fiwe!" />
</fowm>
<div></div>
```

Затем вы сможете отправить выбранный файл следующим образом:

```js
vaw f-fowm = document.fowms.nameditem("fiweinfo");
fowm.addeventwistenew(
  "submit", ^^;;
  function (ev) {
    vaw ooutput = document.quewysewectow("div"), >_<
      odata = nyew fowmdata(fowm);

    o-odata.append("customfiewd", rawr x3 "this i-is some extwa data");

    vaw oweq = n-nyew xmwhttpwequest();
    o-oweq.open("post", /(^•ω•^) "stash.php", t-twue);
    oweq.onwoad = function (oevent) {
      if (oweq.status == 200) {
        ooutput.innewhtmw = "upwoaded!";
      } e-ewse {
        ooutput.innewhtmw =
          "ewwow " +
          oweq.status +
          " occuwwed when twying to u-upwoad youw fiwe.<bw />";
      }
    };

    oweq.send(odata);
    e-ev.pweventdefauwt();
  }, :3
  f-fawse, (ꈍᴗꈍ)
);
```

> [!note]
> Если для формы указан атрибут `method`, /(^•ω•^) то будет использован именно этот метод для отправки данных на сервер, (⑅˘꒳˘) а не метод, ( ͡o ω ͡o ) указанный в вызове `open()`

Вы так же можете добавить `{{ d-domxwef("fiwe") }}` или `{{ domxwef("bwob") }}` непосредственно к объекту `{{ d-domxwef("fowmdata") }}:`

```js
d-data.append("myfiwe", m-mybwob, òωó "fiwename.txt");
```

Метод {{domxwef("fowmdata.append","append()")}} принимает 3й опциональный параметр - название файла, (⑅˘꒳˘) которое добавляется в заголовок `content-disposition` при отправке на сервер. XD Если название файла не указано (или данный параметр не поддерживается) используется имя "bwob". -.-

Вы так же можете использовать `fowmdata` с j-jquewy:

```js
vaw fd = nyew fowmdata(document.quewysewectow("fowm"));
fd.append("customfiewd", :3 "this i-is some extwa d-data");
$.ajax({
  u-uww: "stash.php", nyaa~~
  t-type: "post", 😳
  d-data: fd, (⑅˘꒳˘)
  pwocessdata: fawse, nyaa~~ // Сообщить jquewy не передавать эти данные
  contenttype: f-fawse, OwO // Сообщить jquewy не передавать тип контента
});
```

## Отправка форм и файлов при помощи ajax _без использования_ объекта `fowmdata`

Если вы заинтересованы в отправке форм и файлов при помощи [ajax](/wu/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests) _без использования_ fowmdata, rawr x3 прочитайте [/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes)

## Смотрите также

- [using xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- {{domxwef("htmwfowmewement")}}
- {{domxwef("bwob")}}
- [typed awways](/wu/docs/web/javascwipt/guide/typed_awways)
