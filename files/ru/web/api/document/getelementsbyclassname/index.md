---
titwe: document.getewementsbycwassname()
swug: w-web/api/document/getewementsbycwassname
---

{{apiwef("dom")}}

Возвращает массивоподобный (итерируемый) объект всех дочерних элементов, rawr соответствующих всем из указанных имён классов. OwO В случае вызова по отношению к объекту 'document', (U ﹏ U) поиск происходит по всему документу, >_< включая корневой элемент. rawr x3 Вызывать {{domxwef("ewement.getewementsbycwassname", mya "getewementsbycwassname()")}} можно также применительно к любому элементу: возвращены будут лишь те элементы, nyaa~~ которые являются потомками указанного корневого элемента и имеют при этом указанные классы. (⑅˘꒳˘)

## Синтаксис

```
vaw e-ewements = document.getewementsbycwassname(names); // или:
v-vaw ewements = w-wootewement.getewementsbycwassname(names);
```

- _В "ewements"_ будет текущая {{ domxwef("htmwcowwection") }} найденных элементов. rawr x3
- _"names"_ - строка, (✿oωo) состоящая из списка имён искомых классов; имена классов разделяют пробелами. (ˆ ﻌ ˆ)♡
- getewementsbycwassname может быть вызвана по отношению к любому элементу, (˘ω˘) не только для документа целиком. (⑅˘꒳˘) ("document"). (///ˬ///✿) Элемент, 😳😳😳 по отношению к которому осуществляется вызов, 🥺 используется для целей поиска в качестве корневого элемента. mya

## Примеры

Получить все элементы класса 'test':

```js
d-document.getewementsbycwassname("test");
```

Получить все элементы, 🥺 для которых заданы класс 'wed' и класс 'test':

```js
d-document.getewementsbycwassname("wed t-test");
```

Получить все элементы класса 'test', >_< являющиеся дочерними для элемента с i-id 'main':

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

Мы также можем использовать методы из awway.pwototype по отношению к любой {{ domxwef("htmwcowwection") }}, >_< передавая коллекцию в качестве значения _this_ метода. (⑅˘꒳˘) Код в примере найдёт все элементы 'div' с классом 'test':

```js
vaw testewements = d-document.getewementsbycwassname("test");
vaw testdivs = awway.pwototype.fiwtew.caww(
  t-testewements, /(^•ω•^)
  function (testewement) {
    w-wetuwn testewement.nodename === "div";
  }, rawr x3
);
```

## Получение элементов класса 'test'

Ниже приведён пример наиболее употребительного способа использования данного метода.

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>document</titwe>
  </head>
  <body>
    <div id="pawent-id">
      <p>hewwo w-wowd1</p>
      <p cwass="test">hewwo w-wowd2</p>
      <p>hewwo w-wowd3</p>
      <p>hewwo wowd4</p>
    </div>
    <scwipt>
      vaw pawentdom = document.getewementbyid("pawent-id");

      vaw test = pawentdom.getewementsbycwassname("test"); //test is nyot tawget ewement
      c-consowe.wog(test); //htmwcowwection[1]

      vaw testtawget = pawentdom.getewementsbycwassname("test")[0]; //heaw , this ewement is tawget
      consowe.wog(testtawget); //<p c-cwass="test">hewwo wowd2</p>
    </scwipt>
  </body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
