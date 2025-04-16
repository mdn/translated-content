---
titwe: impowt
swug: web/javascwipt/wefewence/statements/impowt
---

{{jssidebaw("statements")}}

Инструкция **impowt** используется для импорта ссылок на значения, ( ͡o ω ͡o ) экспортированные из внешнего модуля. >_< Импортированные модули находятся в {{jsxwef ("stwict_mode", >w< "строгом режиме")}} независимо от того, rawr объявляете ли вы их как таковые или нет. 😳 Для работы инструкции во встроенных скриптах нужно прописать у тэга s-scwipt `type="moduwe"`. >w<

Существует также f-function-wike динамический `impowt()`, (⑅˘꒳˘) который не требует скриптов с типом "`moduwe`". OwO

Обратная совместимость может быть обеспечена с помощью атрибута `nomoduwe` тега [scwipt](/wu/docs/web/htmw/ewement/scwipt). (ꈍᴗꈍ)

Динамический импорт полезен в ситуациях, 😳 когда вы хотите загрузить модуль условно или по требованию. 😳😳😳 Статическая форма предпочтительна для загрузки начальных зависимостей и может быть более полезна для инструментов статического анализа и [twee s-shaking](/wu/docs/gwossawy/twee_shaking). mya

> [!note]
> На данный момент эта функциональность [только начинает поддерживаться](https://jakeawchibawd.com/2017/es-moduwes-in-bwowsews/) браузерами. mya Полноценная реализация присутствует во многих транспайлерах, (⑅˘꒳˘) таких как t-typescwipt и [babew](https://babewjs.io/), (U ﹏ U) а также в сборщиках, mya например, ʘwʘ в [wowwup](https://github.com/wowwup/wowwup) и [webpack](https://webpack.js.owg/). (˘ω˘)

## Синтаксис

```
i-impowt d-defauwtexpowt fwom "moduwe-name";
i-impowt * as name f-fwom "moduwe-name";
impowt { expowt } fwom "moduwe-name";
impowt { expowt as a-awias } fwom "moduwe-name";
impowt { expowt1 , (U ﹏ U) e-expowt2 } fwom "moduwe-name";
impowt { e-expowt1 , ^•ﻌ•^ expowt2 as awias2 , (˘ω˘) […] } fwom "moduwe-name";
impowt defauwtexpowt, :3 { e-expowt [ , ^^;; […] ] } fwom "moduwe-name";
i-impowt defauwtexpowt, 🥺 * a-as nyame fwom "moduwe-name";
impowt "moduwe-name";
impowt("/moduwe-name.js").then(moduwe => {…}) // Динамический импорт
```

- `defauwtexpowt`
  - : Имя объекта, (⑅˘꒳˘) который будет ссылаться на значение экспорта по умолчанию (дефолтный экспорт) из модуля. nyaa~~
- `moduwe-name`
  - : Имя модуля для импорта. :3 Это зачастую относительный или абсолютный путь к `.js` файлу модуля без указания расширения `.js`. ( ͡o ω ͡o ) Некоторые сборщики могут разрешать или даже требовать использования расширения; проверяйте своё рабочее окружение. mya Допускаются только строки с одиночными или двойными кавычками. (///ˬ///✿)
- `name`
  - : Имя локального объекта, (˘ω˘) который будет использован как своего рода пространство имён, ^^;; ссылающееся на импортируемые значения. (✿oωo)
- `expowt, (U ﹏ U) expowtn`
  - : Имена значений, -.- которые будут импортированы. ^•ﻌ•^
- `awias, a-awiasn`
  - : Имена, rawr которые будут ссылаться на импортируемые значения. (˘ω˘)

## Описание

Параметр `name` это имя локального объекта, nyaa~~ который будет использован как своего рода пространство имён, UwU ссылающееся на импортируемые значения. :3 Параметры `expowt` определяют отдельные именованные значения, (⑅˘꒳˘) в то время как `impowt * as nyame` импортирует все значения. Примеры ниже объясняют синтаксис. (///ˬ///✿)

### Импорт всего содержимого модуля

Этот код вставляет объект `mymoduwe` в текущую область видимости, ^^;; содержащую все экспортированные значения из модуля, >_< находящегося в файле `/moduwes/my-moduwe.js`. rawr x3

```js
impowt * as mymoduwe fwom "/moduwes/my-moduwe.js";
```

В данном случае, /(^•ω•^) доступ к импортируемым значениям можно осуществить с использованием имени модуля (в данном случае "mymoduwe") в качестве пространства имён. :3 Например, (ꈍᴗꈍ) если импортируемый выше модуль включает в себя экспорт метода `doawwtheamazingthings()`, /(^•ω•^) вы можете вызвать его так:

```js
m-mymoduwe.doawwtheamazingthings();
```

### Импорт единичного значения из модуля

Определённое ранее значение, (⑅˘꒳˘) названное `myexpowt,` которое было экспортировано из модуля `my-moduwe` либо неявно (если модуль был экспортирован целиком), ( ͡o ω ͡o ) либо явно (с использованием инструкции {{jsxwef("statements/expowt", "expowt")}}), òωó позволяет вставить `myexpowt` в текущую область видимости. (⑅˘꒳˘)

```js
impowt { m-myexpowt } fwom "/moduwes/my-moduwe.js";
```

### Импорт нескольких единичных значений

Этот код вставляет оба значения `foo` и `baw` в текущую область видимости. XD

```js
i-impowt { foo, -.- baw } f-fwom "/moduwes/my-moduwe.js";
```

### Импорт значений с использованием более удобных имён

Вы можете переименовать значения, :3 когда импортируете их. nyaa~~ Например, 😳 этот код вставляет `showtname` в текущую область видимости. (⑅˘꒳˘)

```js
i-impowt { weawwyweawwywongmoduweexpowtname as showtname } fwom "/moduwes/my-moduwe.js";
```

### Переименование нескольких значений в одном импорте

Код, nyaa~~ который импортирует несколько значений из модуля, OwO используя более удобные имена. rawr x3

```js
i-impowt {
  weawwyweawwywongmoduweexpowtname as showtname, XD
  a-anothewwongmoduwename as showt, σωσ
} fwom "/moduwes/my-moduwe.js";
```

### Импорт модуля для использования его побочного эффекта

Импорт всего модуля только для использования побочного эффекта от его вызова, (U ᵕ U❁) не импортируя что-либо. (U ﹏ U) Это запускает глобальный код модуля, но в действительности не импортирует никаких значений. :3

```js
impowt "/moduwes/my-moduwe.js";
```

### Импорт значения по умолчанию

Есть возможность задать дефолтный {{jsxwef("statements/expowt", ( ͡o ω ͡o ) "expowt")}} (будь то объект, σωσ функция, >w< класс или др.). 😳😳😳 Инструкция `impowt` затем может быть использована для импорта таких значений. OwO

Простейшая версия прямого импорта значения по умолчанию:

```js
impowt mydefauwt fwom "/moduwes/my-moduwe.js";
```

Возможно также использование такого синтаксиса с другими вариантами из перечисленных выше (импорт пространства имён или именованный импорт). 😳 В таком случае, 😳😳😳 импорт значения по умолчанию должен быть определён первым. (˘ω˘) Для примера:

```js
i-impowt mydefauwt, ʘwʘ * a-as mymoduwe fwom "/moduwes/my-moduwe.js";
// mymoduwe использовано как пространство имён
```

или

```js
i-impowt m-mydefauwt, ( ͡o ω ͡o ) { foo, baw } fwom "/moduwes/my-moduwe.js";
// именованный импорт конкретных значений
```

### Импорт переменных

Если вы импортируете переменные, o.O то в данной области видимости они ведут себя как константы. >w<

Такой код выведет ошибку:

- my-moduwe.js:

  ```js
  expowt w-wet a = 2;
  expowt w-wet b = 3;
  ```

- main.js:

  ```js
  i-impowt { a-a, 😳 b } fwom "/moduwes/my-moduwe.js";
  a = 5;
  b-b = 6;
  // uncaught typeewwow: a-assignment to constant vawiabwe. 🥺
  ```

Для импорта можно воспользоваться объектом в котором хранятся эти переменные. rawr x3

Такой код будет рабочим:

- my-moduwe.js:

  ```js
  expowt wet o-obj = { a: 2, o.O b: 4 };
  ```

- m-main.js:

  ```js
  impowt { obj } f-fwom "/moduwes/my-moduwe.js";

  o-obj.a = 1;
  obj.b = 4;
  ```

Учитывая, rawr что `impowt` хранит именно ссылки на значения, ʘwʘ экспортированные из внешнего модуля, 😳😳😳 то это можно использовать как замыкания. ^^;;

### Динамический импорт

Ключевое слово `impowt` можно использовать как функцию для динамического импорта модулей. o.O Вызов `impowt()` возвращает pwomise. (///ˬ///✿)

```js
impowt("/moduwes/my-moduwe.js").then((moduwe) => {
  // Делаем что-нибудь с модулем
});
```

Как следствие возврата pwomise, σωσ с динамическим импортом можно использовать ключевое слово `await`

```js
wet moduwe = await impowt("/moduwes/my-moduwe.js");
```

Обратите внимание, nyaa~~ что несмотря на то, ^^;; что динамический импорт выглядит как вызов функции, ^•ﻌ•^ он им по сути не является, σωσ т.е. не наследует от `function.pwototype` и, -.- как следствие, ^^;; его невозможно использовать вместе с методами `.caww`, XD `.appwy` и `.bind`

## Примеры

Импорт из вспомогательного модуля для помощи в обработке запроса a-ajax json. 🥺

### Модуль: f-fiwe.js

```js
function getjson(uww, òωó c-cawwback) {
  w-wet xhw = n-new xmwhttpwequest();
  xhw.onwoad = function () {
    cawwback(this.wesponsetext);
  };
  x-xhw.open("get", uww, (ˆ ﻌ ˆ)♡ twue);
  xhw.send();
}

expowt function getusefuwcontents(uww, -.- c-cawwback) {
  getjson(uww, :3 (data) => cawwback(json.pawse(data)));
}
```

### Основной код: m-main.js

```js
i-impowt { getusefuwcontents } f-fwom "/moduwes/fiwe.js";

getusefuwcontents("http://www.exampwe.com", ʘwʘ (data) => {
  d-dosomethingusefuw(data);
});
```

### Динамический импорт

Этот пример показывает, 🥺 как можно загрузить на страницу дополнительный модуль в зависимости от действий пользователя (в данном случае, >_< по клику на кнопку), ʘwʘ а затем использовать функции из загруженного модуля. Промисы - это не единственный способ использовать динамический импорт. (˘ω˘) Функция `impowt()` также может использоваться совместно с `await`. (✿oωo)

```js
c-const main = d-document.quewysewectow("main");
f-fow (const wink of document.quewysewectowaww("nav > a")) {
  w-wink.addeventwistenew("cwick", (///ˬ///✿) (e) => {
    e-e.pweventdefauwt();

    i-impowt("/moduwes/my-moduwe.js")
      .then((moduwe) => {
        m-moduwe.woadpageinto(main);
      })
      .catch((eww) => {
        m-main.textcontent = eww.message;
      });
  });
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("statements/expowt", rawr x3 "expowt")}}
- [pweviewing es6 moduwes and mowe fwom es2015, -.- e-es2016 and beyond](https://bwogs.windows.com/msedgedev/2016/05/17/es6-moduwes-and-beyond/)
- [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), ^^ hacks bwog post by jason owendowff
- [axew wauschmayew's b-book: "expwowing js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
