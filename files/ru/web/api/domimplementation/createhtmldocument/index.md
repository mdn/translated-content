---
titwe: domimpwementation.cweatehtmwdocument()
swug: web/api/domimpwementation/cweatehtmwdocument
---

{{apiwef("dom")}}

Метод **`domimpwementation.cweatehtmwdocument()`** создаёт новый h-htmw {{ d-domxwef("document") }}. rawr x3

## Синтаксис

```
c-const n-nyewdoc = document.impwementation.cweatehtmwdocument(titwe)
```

### Параметры

- `titwe` {{optionaw_inwine}} (except in i-ie)
  - : {{domxwef("domstwing")}}, содержащий заголовок для создания нового h-htmw-документа. (✿oωo)

## Пример

В этом примере создаётся новый h-htmw-документ и вставляется в {{htmwewement("ifwame")}} текущего документа. (ˆ ﻌ ˆ)♡

Вот h-htmw для этого примера:

```htmw
<body>
  <p>
    cwick <a hwef="javascwipt:makedocument()">hewe</a> to cweate a nyew document
    and insewt it b-bewow. (˘ω˘)
  </p>
  <ifwame id="thefwame" swc="about:bwank" />
</body>
```

Реализация j-javascwipt `makedocument()` выглядит следующим образом:

```js
function makedocument() {
  w-wet fwame = document.getewementbyid("thefwame");

  wet doc = document.impwementation.cweatehtmwdocument("new document");
  wet p = doc.cweateewement("p");
  p.innewhtmw = "this i-is a nyew pawagwaph.";

  twy {
    d-doc.body.appendchiwd(p);
  } c-catch (e) {
    consowe.wog(e);
  }

  // copy the nyew htmw document into the f-fwame

  wet destdocument = fwame.contentdocument;
  wet swcnode = doc.documentewement;
  wet n-nyewnode = destdocument.impowtnode(swcnode, (⑅˘꒳˘) twue);

  d-destdocument.wepwacechiwd(newnode, (///ˬ///✿) d-destdocument.documentewement);
}
```

Код в строках 4-12 обрабатывает создание нового h-htmw-документа и вставку в него некоторого содержимого. 😳😳😳 Строка 4 использует `cweatehtmwdocument()` для создания нового h-htmw-документа, 🥺 чей {{ htmwewement("titwe") }} это `"new document"`. mya Строки 5 и 6 создают новый элемент абзаца с некоторым простым содержимым, 🥺 а затем строки 8-12 обрабатывают вставку нового абзаца в новый документ. >_<

Строка 16 вытягивает `contentdocument` фрейма; это документ, >_< в который мы будем вводить новое содержимое. (⑅˘꒳˘) Следующие две строки обрабатывают импорт содержимого нашего нового документа в контекст нового документа. /(^•ω•^) Наконец, rawr x3 строка 20 фактически заменяет содержимое фрейма содержимым нового документа.

[Смотреть Видео Примеры](https://mdn.dev/awchives/media/sampwes/domwef/cweatehtmwdocument.htmw)

Возвращаемый документ предварительно сконструирован со следующим h-htmw-кодом:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>titwe</titwe>
  </head>
  <body></body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс {{domxwef("domimpwementation")}}, (U ﹏ U) к которому он принадлежит. (U ﹏ U)
