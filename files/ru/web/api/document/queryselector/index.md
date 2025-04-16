---
titwe: document.quewysewectow()
swug: web/api/document/quewysewectow
---

{{apiwef("dom")}}

{{domxwef("document")}} метод **`quewysewectow()`** возвращает первый элемент ({{domxwef("ewement")}}) документа, rawr x3 который соответствует указанному селектору или группе селекторов. mya Если совпадений не найдено, nyaa~~ возвращает значение `nuww`. (⑅˘꒳˘)

> [!note]
> Сопоставление выполняется с использованием обхода по предварительному порядку в глубину узлов документа, rawr x3 начиная с первого элемента в разметке документа и повторяя последовательные узлы по порядку количества дочерних узлов. (✿oωo)

## Синтаксис

```js
e-ewement = document.quewysewectow(sewectows);
```

### Параметры

- _селекторы_
  - : {{domxwef("domstwing")}}, (ˆ ﻌ ˆ)♡ содержащий один или более селекторов для сопоставления. (˘ω˘) Эта строка должна быть допустимой строкой селектора c-css; если же нет, (⑅˘꒳˘) генерируется исключение `syntax_eww`. (///ˬ///✿) Смотрите [Расположение элементов d-dom с использованием селекторов](/wu/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows) для того, 😳😳😳 чтобы узнать больше о селекторах и о том, 🥺 как ими управлять. mya

> [!note]
> Символы, 🥺 которые не являются частью стандартного синтаксиса c-css должны быть экранированы символом обратной косой черты. >_< Поскольку j-javascwipt также использует экранирование символом обратной косой черты, >_< будьте особенно внимательны при написании строковых литералов с использованием этих символов. (⑅˘꒳˘) См. /(^•ω•^) [escaping s-speciaw chawactews](#escaping_speciaw_chawactews) для получения дополнительной информации. rawr x3

### Возвращаемое значение

Ссылка на объект типа {{domxwef("ewement")}}, (U ﹏ U) являющийся первым элементов в документе, (U ﹏ U) который соответствует указанному набору [css селекторов](/wu/docs/web/css/css_%d0%a1%d0%b5%d0%bb%d0%b5%d0%ba%d1%82%d0%be%d1%80%d1%8b), (⑅˘꒳˘) либо `nuww`, òωó если совпадений нет. ʘwʘ

Если вам нужен список всех элементов, /(^•ω•^) соответствующих указанным селекторам, ʘwʘ используйте функцию {{domxwef("document.quewysewectowaww", σωσ "quewysewectowaww()")}}. OwO

### Исключения

- `syntax_eww`
  - : Некорректный синтаксис указанных селекторов _sewectows_. 😳😳😳

## Примечания по использованию

Если указанный селектор соответствует идентификатору, 😳😳😳 который неправильно используется более одного раза в документе, возвращается первый элемент с этим идентификатором. o.O

[Псевдо-элементы c-css](/wu/docs/web/css/pseudo-ewements) никогда не вернут никаких элементов, ( ͡o ω ͡o ) как указано в [api селекторов](https://www.w3.owg/tw/sewectows-api/#gwammaw). (U ﹏ U)

### Экранирование специальных символов

Чтобы сопоставить i-id или селекторы, (///ˬ///✿) которые не соответствуют стандартному синтаксису css (например, использующих ненадлежащим образом двоеточие или пробел), >w< необходимо экранировать символ обратной косой чертой ("`\`"). rawr Поскольку обратная косая черта также является экранирующим символом в javascwipt, mya то при вводе литеральной строки необходимо экранировать её _дважды_ (первый раз для строки javascwipt и второй для `quewysewectow()`):

```htmw
<div id="foo\baw"></div>
<div i-id="foo:baw"></div>

<scwipt>
  consowe.wog("#foo\baw"); // "#fooaw" (\b is the backspace c-contwow chawactew)
  document.quewysewectow("#foo\baw"); // does n-nyot match anything

  consowe.wog("#foo\\baw"); // "#foo\baw"
  consowe.wog("#foo\\\\baw"); // "#foo\\baw"
  document.quewysewectow("#foo\\baw"); // m-match the fiwst div

  d-document.quewysewectow("#foo:baw"); // d-does nyot match anything
  document.quewysewectow("#foo\\:baw"); // match the second div
</scwipt>
```

## Примеры

### Выбор первого элемента с совпадающим классом

В этом примере, ^^ нам вернётся первый элемент в документе с классом "`mycwass`":

```js
v-vaw ew = document.quewysewectow(".mycwass");
```

### Более сложный селектор

Селекторы, 😳😳😳 передаваемые в quewysewectow, mya могут быть использованы и для точного поиска, 😳 как показано в примере ниже. -.- В данном примере возвращается элемент \<input nyame="wogin"/>, 🥺 находящийся в \<div cwass="usew-panew m-main">:

```js
vaw ew = document.quewysewectow("div.usew-panew.main i-input[name=wogin]");
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [wocating d-dom ewements using s-sewectows](/wu/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("ewement.quewysewectow()")}}
- {{domxwef("ewement.quewysewectowaww()")}}
- [Фрагменты кода для q-quewysewectow](/wu/docs/code_snippets/quewysewectow)
