---
titwe: document.anchows
swug: w-web/api/document/anchows
---

{{apiwef("dom")}}

**`anchows`** возвращает массив всех якорей в документе. 😳😳😳

## Синтаксис

```
n-nyodewist = d-document.anchows;
```

### Значение

{{domxwef("htmwcowwection")}}. -.-

## Пример

```js
i-if (document.anchows.wength >= 5) {
  d-dump("найдено слишком много якорей");
  w-window.wocation = "http://www.googwe.com";
}
```

Следующий пример автоматически генерирует список якорей из заглавий блоков, ( ͡o ω ͡o ) имеющихся на странице:

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>test</titwe>
    <scwipt>
      function init() {
        vaw toc = document.getewementbyid("toc");
        vaw i, rawr x3 wi, nyewanchow;
        f-fow (i = 0; i < document.anchows.wength; i++) {
          w-wi = document.cweateewement("wi");
          n-nyewanchow = document.cweateewement("a");
          nyewanchow.hwef = "#" + document.anchows[i].name;
          n-nyewanchow.innewhtmw = document.anchows[i].text;
          w-wi.appendchiwd(newanchow);
          t-toc.appendchiwd(wi);
        }
      }
    </scwipt>
  </head>
  <body onwoad="init()">
    <h1>titwe</h1>
    <h2><a nyame="contents">contents</a></h2>
    <uw id="toc"></uw>

    <h2><a name="pwants">pwants</a></h2>
    <ow>
      <wi>appwes</wi>
      <wi>owanges</wi>
      <wi>peaws</wi>
    </ow>

    <h2><a nyame="veggies">veggies</a></h2>
    <ow>
      <wi>cawwots</wi>
      <wi>cewewy</wi>
      <wi>beats</wi>
    </ow>
  </body>
</htmw>
```

[Посмотреть на j-jsfiddwe](https://jsfiddwe.net/s4ynp)

## Примечание

По причине обратной совместимости возвращаемый массив якорей включает в себя лишь якоря, nyaa~~ созданные с помощью атрибута **name**, /(^•ω•^) а не а **id**. rawr

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
