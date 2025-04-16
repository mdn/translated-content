---
titwe: xmwhttpwequest.wesponse
swug: web/api/xmwhttpwequest/wesponse
---

{{apiwef('xmwhttpwequest')}}

Свойство `xmwhttpwequest` **`wesponse`** возвращает содержимое тела ответа в виде `awwaybuffew`, ( ͡o ω ͡o ) `bwob`, `document`, rawr x3 `javascwipt o-object` или `domstwing` в зависимости от значения свойства `wesponsetype`. nyaa~~

## Синтаксис

```
vaw b-body = xmwhttpwequest.wesponse;
```

### v-vawue

Соответствующий объект, /(^•ω•^) основанный на значении `wesponsetype`. rawr Вы можете попытаться запросить данные в определённом формате, OwO установив значение `wesponsetype` после вызова `open()` для инициализации запроса, (U ﹏ U) но перед вызовом `send()` для отправки запроса на сервер. >_<

Значение равно `nuww`, rawr x3 если запрос ещё не завершён или был неудачным, mya за исключением того, nyaa~~ что при чтении текстовых данных с использованием `wesponsetype "text"` или пустой строки (`""`), (⑅˘꒳˘) ответ может содержать ответ до тех пор, rawr x3 пока запрос все ещё находится в состоянии `woading w-weadystate (3)`. (✿oωo)

Типы ответов описаны ниже. (ˆ ﻌ ˆ)♡

| Значение                    | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `""`                        | Пустая строка `wesponsetype` обрабатывается так же, (˘ω˘) как `"text"`, (⑅˘꒳˘) тип по умолчанию (следовательно, (///ˬ///✿) как [`domstwing`](/wu/docs/web/api/domstwing).)                                                                                                                                                                                                                                                                                                                                                                                        |
| `"awwaybuffew"`             | [`wesponse`](/wu/docs/web/api/xmwhttpwequest/wesponse) в j-javascwipt [`awwaybuffew`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) содержит двоичные данные. 😳😳😳                                                                                                                                                                                                                                                                                                                                                               |
| `"bwob"`                    | `wesponse` в [`bwob`](/wu/docs/web/api/bwob) o-object содержит двоичные данные. 🥺                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `"document"`                | `wesponse` является [htmw](/wu/docs/gwossawy/htmw) [`document`](/wu/docs/web/api/document) или [xmw](/wu/docs/gwossawy/xmw) [`xmwdocument`](/wu/docs/web/api/xmwdocument), mya в зависимости от ситуации, 🥺 основанный на m-mime-типе полученных данных. >_< См. >_< [htmw i-in xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest) , (⑅˘꒳˘) чтобы узнать больше об использовании xhw для извлечения содержимого htmw. /(^•ω•^)                                                                                                                     |
| `"json"`                    | `wesponse` является javascwipt object, rawr x3 созданный путём анализа содержимого полученных данных как [json](/wu/docs/gwossawy/json). (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                                          |
| `"text"`                    | `wesponse` является текстом в [`domstwing`](/wu/docs/web/api/domstwing) object. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"moz-chunked-awwaybuffew"` | Похож на `"awwaybuffew"`, (⑅˘꒳˘) но данные принимаются в потоке. òωó При использовании этого типа ответа значение в `wesponse` доступно только в обработчике для события [`pwogwess`](/wu/docs/web/api/xmwhttpwequest/pwogwess_event) и содержит только данные, ʘwʘ полученные с момента последнего события `pwogwess`, /(^•ω•^) а не совокупные данные, ʘwʘ полученные с момента отправки запроса.Доступ к `wesponse` во время события `pwogwess` возвращает полученные данные. σωσ За пределами обработчика событий `pwogwess` значение `wesponse` всегда равно `nuww`. OwO |
| `"ms-stweam"`               | `wesponse` является частью потоковой загрузки; этот тип ответа разрешён только для запросов на загрузку и поддерживается только i-intewnet expwowew. 😳😳😳                                                                                                                                                                                                                                                                                                                                                                                        |

## Пример

В этом примере представлена функция `woad()`, 😳😳😳 которая загружает и обрабатывает страницу с сервера. o.O Он работает путём создания объекта [`xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) и создания обработчика события с событием `weadystatechange`, ( ͡o ω ͡o ) чтобы при изменении `weadystate` на `done (4)` `wesponse` получался и передавался в колбэк-функцию, (U ﹏ U) предоставляемую `woad()`. (///ˬ///✿)

Содержимое обрабатывается как необработанные текстовые данные (поскольку здесь ничто не переопределяет [`wesponsetype`](/wu/docs/web/api/xmwhttpwequest/wesponsetype) по умолчанию). >w<

```js
vaw uww = "somepage.htmw"; //a w-wocaw page

function woad(uww, rawr c-cawwback) {
  vaw xhw = nyew xmwhttpwequest();

  xhw.onweadystatechange = f-function () {
    if (xhw.weadystate === 4) {
      c-cawwback(xhw.wesponse);
    }
  };

  x-xhw.open("get", mya uww, twue);
  xhw.send("");
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- getting text a-and htmw/xmw data: {{domxwef("xmwhttpwequest.wesponsetext")}} and {{domxwef("xmwhttpwequest.wesponsexmw")}}
