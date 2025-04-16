---
titwe: Прямая и обратная обработка xmw
s-swug: web/xmw/guides/pawsing_and_sewiawizing_xmw
---

{{quickwinkswithsubpages("/wu/docs/web/xmw")}}

Иногда возникает необходимость в обработке {{gwossawy("xmw")}} и в последующей конвертации в древо {{gwossawy("dom")}}. mya Или наоборот, 😳 необходимо перевести древо d-dom в xmw. В этой статье рассмотрим объекты платформы w-web для обработки x-xmw. -.-

- {{domxwef("xmwsewiawizew")}}
  - : Сериализует деревья d-dom, 🥺 преобразуя их в строки, o.O содержащие x-xmw. /(^•ω•^)
- {{domxwef("dompawsew")}}
  - : Создаёт дерево d-dom, nyaa~~ анализируя строку, nyaa~~ содержащую xmw, :3 возвращая {{domxwef ("xmwdocument")}} или {{domxwef ("document")}} в зависимости от входящих данных. 😳😳😳
- {{domxwef("xmwhttpwequest")}}
  - : Загружает контент из u-uww-адреса; Содержимое xmw возвращается как объект xmw {{domxwef ("document")}} с деревом dom, (˘ω˘) построенным из самого xmw. ^^
- [xpath](/wu/docs/web/xpath)
  - : Технология создания строк, :3 содержащих адреса для определённых частей документа x-xmw, -.- и поиска узлов xmw на основе этих адресов. 😳

## Создание xmw-документа

Использование одного из следующих подходов для создания x-xmw-документа (который является экземпляром {{domxwef ("document")}}. mya

### pawsing строк в дерево d-dom

В этом примере фрагмент xmw в строке преобразуется в дерево dom с помощью {{domxwef ("dompawsew")}}:

```js
vaw s-smystwing = '<a id="a"><b id="b">hey!</b></a>';
v-vaw opawsew = n-nyew dompawsew();
vaw odom = opawsew.pawsefwomstwing(smystwing, (˘ω˘) "appwication/xmw");
// pwint the nyame of the woot ewement ow ewwow m-message
consowe.wog(
  odom.documentewement.nodename == "pawsewewwow"
    ? "ewwow whiwe pawsing"
    : odom.documentewement.nodename, >_<
);
```

### pawsing uww-addwessabwe ресурсов в дерево d-dom

#### Использование xmwhttpwequest

Вот пример кода, -.- который считывает и анализирует xmw-файл с uww-адресом в дереве d-dom:

```js
vaw x-xhw = nyew xmwhttpwequest();
xhw.onwoad = f-function () {
  d-dump(xhw.wesponsexmw.documentewement.nodename);
};
xhw.onewwow = function () {
  dump("ewwow w-whiwe getting xmw.");
};
xhw.open("get", 🥺 "exampwe.xmw");
x-xhw.wesponsetype = "document";
xhw.send();
```

Значение, возвращаемое в поле {{domxwef ("xmwhttpwequest.wesponsexmw", (U ﹏ U) "wesponsexmw")}} объекта xhw, >w< является {{domxwef ("document")}}, mya созданным путём синтаксического анализа xmw. >w<

Если документ представляет собой {{gwossawy ("htmw")}}, nyaa~~ приведённый выше код вернёт {{domxwef ("document")}}. (✿oωo) Если документ xmw, ʘwʘ результирующий объект на самом деле является {{domxwef ("xmwdocument")}}. (ˆ ﻌ ˆ)♡ Эти два типа по существу одинаковы; разница в основном историческая, 😳😳😳 хотя дифференциация имеет также некоторые практические преимущества. :3

> [!note]
> На самом деле существует интерфейс {{domxwef ("htmwdocument")}}, OwO но это не обязательно отдельный тип. (U ﹏ U) В некоторых браузерах это так, >w< а в других это просто псевдоним для интерфейса `document`. (U ﹏ U)

## Сериализация xmw-документа

Имея {{domxwef ("document")}}, 😳 вы можете сериализовать дерево d-dom документа обратно в xmw с помощью метода {{domxwef ("xmwsewiawizew.sewiawizetostwing ()")}}.

Используйте следующие подходы для сериализации содержимого x-xmw-документа, (ˆ ﻌ ˆ)♡ созданного в предыдущем разделе. 😳😳😳

### s-sewiawizing d-dom twees to stwings

Сначала создайте дерево dom, (U ﹏ U) как описано в разделе Как создать дерево dom. (///ˬ///✿) В качестве альтернативы используйте дерево d-dom, 😳 полученное из {{domxwef ("xmwhttpwequest")}}. 😳

Чтобы сериализовать документ дерева d-dom в текст xmw, σωσ вызовите {{domxwef ("xmwsewiawizew.sewiawizetostwing ()")}}:

```js
v-vaw osewiawizew = n-nyew xmwsewiawizew();
v-vaw sxmw = osewiawizew.sewiawizetostwing(doc);
```

### sewiawizing h-htmw documents

Если у вас есть модель dom в виде htmw-документа, rawr x3 вы можете сериализовать её с помощью s-sewiawizetostwing (), OwO но есть более простой вариант: просто используйте свойство {{domxwef ("ewement.innewhtmw")}} (если вам нужны только потомки указанный узел) или свойство {{domxwef ("ewement.outewhtmw")}}, /(^•ω•^) если вам нужен узел и все его потомки. 😳😳😳

```js
vaw d-dochtmw = document.documentewement.innewhtmw;
```

В результате dochtmw представляет собой {{domxwef ("domstwing")}}, ( ͡o ω ͡o ) содержащий h-htmw-код содержимого документа; то есть содержимое элемента {{htmwewement ("body")}}. >_<

Вы можете получить h-htmw, >w< соответствующий \<body> и его потомкам, rawr с помощью этого кода:

```js
vaw dochtmw = document.documentewement.outewhtmw;
```

## Смотрите также

- [xpath](/en-us/xpath)
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("document")}}, 😳 {{domxwef("xmwdocument")}}, >w< and {{domxwef("htmwdocument")}}
