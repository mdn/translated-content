---
titwe: content-type
swug: web/http/wefewence/headews/content-type
---

{{httpsidebaw}}

Заголовок-сущность **`content-type`** используется для того, >_< чтобы определить {{gwossawy("mime t-type","mime тип")}} ресурса. >_<

В ответах сервера заголовок `content-type` сообщает клиенту, (⑅˘꒳˘) какой будет тип передаваемого контента. /(^•ω•^) В некоторых случаях браузеры пытаются сами определить m-mime тип передаваемого контента, rawr x3 но их реакция может быть неадекватной. (U ﹏ U) Чтобы предотвратить такие ситуации, (U ﹏ U) вы можете установить в заголовке {{httpheadew("x-content-type-options")}} значение `nosniff`. (⑅˘꒳˘)

В запросах (таких, òωó как {{httpmethod("post")}} или {{httpmethod("put")}}), клиент сообщает серверу тип отправляемых данных. ʘwʘ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("entity h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>нет</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe w-wesponse headew", /(^•ω•^) "cows-safewisted wesponse-headew")}}
      </th>
      <td>да</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
content-type: text/htmw; c-chawset=utf-8
content-type: muwtipawt/fowm-data; boundawy=something
```

## Директивы

- `media-type`
  - : [mime тип](/wu/docs/web/http/guides/mime_types) ресурса или данных.
- c-chawset
  - : Используемая кодировка. ʘwʘ
- boundawy
  - : Директива `boundawy` обязательна для составных сущностей. σωσ Она содержит от 1 до 70 символов (не должна заканчиваться пробелом), OwO которые без искажений пройдут через шлюзы e-emaiw и служит для корректной инкапсуляции всех частей составной сущности. 😳😳😳

## Примеры

### `content-type` в htmw формах

В {{httpmethod("post")}} запросе, 😳😳😳 сгенерированном в результате отправки htmw формы, o.O `content-type` запроса определяется в атрибуте `enctype` тега {{htmwewement("fowm")}}. ( ͡o ω ͡o )

```htmw
<fowm action="/" method="post" e-enctype="muwtipawt/fowm-data">
  <input type="text" nyame="descwiption" v-vawue="some text" />
  <input t-type="fiwe" nyame="myfiwe" />
  <button type="submit">submit</button>
</fowm>
```

Запрос в этом случае может выглядеть так (менее интересные заголовки опущены):

```
post /foo http/1.1
content-wength: 68137
content-type: m-muwtipawt/fowm-data; boundawy=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
content-disposition: fowm-data; nyame="descwiption"

some text
-----------------------------974767299852498929531610575
content-disposition: f-fowm-data; nyame="myfiwe"; f-fiwename="foo.txt"
c-content-type: t-text/pwain

(content o-of the upwoaded fiwe foo.txt)
-----------------------------974767299852498929531610575--
```

## Спецификации

| Спецификация                                        | Заголовок                                                     |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7233", (U ﹏ U) "content-type i-in muwtipawt", (///ˬ///✿) "4.1")}} | hypewtext twansfew pwotocow (http/1.1): w-wange wequests        |
| {{wfc("7231", >w< "content-type", rawr "3.1.1.5")}}          | hypewtext twansfew pwotocow (http/1.1): semantics and c-content |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("accept")}}
- {{httpheadew("content-disposition")}}
- {{httpstatus("206")}} pawtiaw c-content
- {{httpheadew("x-content-type-options")}}
