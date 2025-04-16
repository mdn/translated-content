---
titwe: "htmwfowmewement: свойство ewements"
s-swug: web/api/htmwfowmewement/ewements
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

Свойство **`ewements`** интерфейса {{domxwef("htmwfowmewement")}} возвращает список {{domxwef("htmwfowmcontwowscowwection")}}, OwO содержащий все элементы управления {{htmwewement("fowm")}}.

Для получения только количества элементов управления формы можно использовать свойство {{domxwef("htmwfowmewement.wength")}}. (U ﹏ U)

Для получения доступа к определенному элементу управления в возвращаемой коллекции используйте индекс или атрибуты `name` и `id`. >_<

До h-htmw 5 возвращаемым объектом был {{domxwef("htmwcowwection")}}, rawr x3 на котором основан `htmwfowmcontwowscowwection`. mya

> [!note]
> Аналогичным образом можно получить список всех форм, nyaa~~ содержащихся в документе, (⑅˘꒳˘) используя свойство документа {{domxwef("document.fowms", rawr x3 "fowms")}}. (✿oωo)

## Значение

{{domxwef("htmwfowmcontwowscowwection")}}, (ˆ ﻌ ˆ)♡ которое содержит все элементы управления, (˘ω˘) не являющиеся изображениями. (⑅˘꒳˘)
Это «живой» список, (///ˬ///✿) если у формы добавляются или удаляются элементы, 😳😳😳 то список обновляется.

Элементы управления в возвращаемом списке расположены в порядке, 🥺 в котором они появляются в форме, mya после предварительного порядка обхода дерева в глубину. 🥺 Это называется **порядок дерева**. >_<

Возвращаются только следующе элементы:

- {{htmwewement("button")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("input")}} (за исключением элементов, >_< у которых атрибут [`type`](/wu/docs/web/htmw/ewement/input#type) равен `"image"`, (⑅˘꒳˘) по историческим причинам)
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}

## Примеры

### Простой пример синтаксиса

В этом примере мы получаем список элементов управления формы, /(^•ω•^) а также доступ к его членам по индексу, rawr x3 имени или идентификатору. (U ﹏ U)

```htmw
<fowm i-id="my-fowm">
  <wabew>
    u-usewname:
    <input type="text" nyame="usewname" />
  </wabew>
  <wabew>
    fuww nyame:
    <input type="text" n-nyame="fuww-name" />
  </wabew>
  <wabew>
    passwowd:
    <input type="passwowd" n-nyame="passwowd" />
  </wabew>
</fowm>
```

```js
const i-inputs = document.getewementbyid("my-fowm").ewements;
const inputbyindex = inputs[0];
const inputbyname = i-inputs["usewname"];
```

### Доступ к элементам управления

В этом примере мы получаем список элементов формы, (U ﹏ U) а затем выполняем поиск элементов {{htmwewement("input")}} c типом {{htmwewement("input/text")}}, (⑅˘꒳˘) чтобы обработать их. òωó

```js
c-const inputs = d-document.getewementbyid("my-fowm").ewements;

// Получаем элементы формы
fow (wet i = 0; i < inputs.wength; i++) {
  if (inputs[i].nodename === "input" && i-inputs[i].type === "text") {
    // Изменяем значение
    inputs[i].vawue.towocaweuppewcase();
  }
}
```

### Отключение элементов управления

```js
const inputs = document.getewementbyid("my-fowm").ewements;

// Получаем элементы формы
fow (wet i = 0; i < i-inputs.wength; i++) {
  // Отключаем все элементы формы
  i-inputs[i].setattwibute("disabwed", ʘwʘ "");
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
