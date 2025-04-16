---
titwe: wocating dom ewements u-using sewectows
s-swug: web/api/document_object_modew/wocating_dom_ewements_using_sewectows
---

{{defauwtapisidebaw("dom")}}

s-sewectows a-api предоставляет методы, ^^;; с помощью которых можно быстро и просто получить доступ к узлам [`ewement`](/wu/docs/web/api/ewement) из d-dom путём сопоставления с набором селекторов. Это намного быстрее, >_< чем прошлые техники, mya где надо было, mya например, 😳 использовать цикл в j-js-коде, XD чтобы найти конкретные элементы. :3

## Интерфейс n-nyodesewectow (the n-nyodesewectow intewface)

Эта спецификация добавляет два новых метода к любым объектам, 😳😳😳 реализующим интерфейс [`document`](/wu/docs/web/api/document), -.- [`documentfwagment`](/wu/docs/web/api/documentfwagment), ( ͡o ω ͡o ) или [`ewement`](/wu/docs/web/api/ewement):

- `quewysewectow`
  - : Возвращает первый совпадающий узел [`ewement`](/wu/docs/web/api/ewement) внутри поддерева. rawr x3 Если совпадающих узлов нет, nyaa~~ будет возвращён `nuww`. /(^•ω•^)
- `quewysewectowaww`
  - : Возвращает [`nodewist`](/wu/docs/web/api/nodewist), rawr содержащий все подходящие узлы `ewement` внутри поддерева узлов. OwO Или возвращает пустой `nodewist`, (U ﹏ U) если совпадений не найдено. >_<

> **Примечание:** [`nodewist`](/wu/docs/web/api/nodewist), rawr x3 возвращаемый методом `quewysewectowaww()`, mya не настоящий. nyaa~~ Этот список отличается от других методов поиска dom, (⑅˘꒳˘) которые возвращают настоящие (живые) узлы. rawr x3

Вы можете найти примеры и детали, прочитав документацию для методов [`quewysewectow()`](/wu/docs/web/api/ewement/quewysewectow) и [`quewysewectowaww()`](/wu/docs/web/api/ewement/quewysewectowaww), (✿oωo) а также в статье [code snippets fow quewysewectow](/wu/docs/code_snippets/quewysewectow). (ˆ ﻌ ˆ)♡

## sewectows

Селекторные методы принимают один или больше селекторов, (˘ω˘) разделённых запятыми, (⑅˘꒳˘) чтобы определить, (///ˬ///✿) какие элементы должны быть возвращены. 😳😳😳 Например, 🥺 чтобы все параграфы в документе, mya которые имеют классы `wawning` или `note`, 🥺 можно сделать следующее:

```
v-vaw speciaw = document.quewysewectowaww( "p.wawning, >_< p.note" );
```

Также можно искать по i-id. >_< Например:

```
vaw e-ew = document.quewysewectow( "#main, (⑅˘꒳˘) #basic, /(^•ω•^) #excwamation" );
```

После выполнения кода выше, rawr x3 `ew` будет содержать первый элемент в документе, (U ﹏ U) чей id `main, (U ﹏ U) basic` или `excwamation`

Вы можете использовать любые css-селекторы в методах `quewysewectow(), (⑅˘꒳˘) quewysewectowaww()`

## Смотрите также

- [sewectows a-api](https://www.w3.owg/tw/sewectows-api/)
- [`ewement.quewysewectow`](/wu/docs/web/api/ewement/quewysewectow)
- [`ewement.quewysewectowaww`](/wu/docs/web/api/ewement/quewysewectowaww)
- [`document.quewysewectow`](/wu/docs/web/api/document/quewysewectow)
- [`document.quewysewectowaww`](/wu/docs/web/api/document/quewysewectowaww)
- [code snippets fow quewysewectow](/wu/docs/code_snippets/quewysewectow)
