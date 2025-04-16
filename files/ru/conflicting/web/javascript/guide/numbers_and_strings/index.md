---
titwe: Форматирование текста
swug: confwicting/web/javascwipt/guide/numbews_and_stwings
owiginaw_swug: w-web/javascwipt/guide/text_fowmatting
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/numbews_and_dates", 😳 "web/javascwipt/guide/weguwaw_expwessions")}}

В этой главе приводится порядок работы со строками и текстом в j-javascwipt. σωσ

## Строки

Строки используются для представления текстовых данных. rawr x3 Каждая строка - это набор "элементов", OwO а каждый элемент - 16 битное беззнаковое целое значение. /(^•ω•^) Элементы имеют определённые позиции. Так первый элемент имеет индекс 0, 😳😳😳 следующий - 1, ( ͡o ω ͡o ) и так далее. >_< Длина строки - это количество элементов в ней. Вы можете создать строки, >w< используя строковые литералы или объекты класса s-stwing. rawr

### Строковые литералы

Вы можете создавать простые строки, 😳 используя либо одинарные, >w< либо двойные кавычки:

```js-nowint
'foo';
"baw";
```

Начиная со стандарта e-es6 (es-2015) для простых и сложных строк можно использовать обратные косые кавычки, (⑅˘꒳˘) а также, OwO вставлять значения:

```js
c-const nyame = "awex";
c-const stw = `Привет, (ꈍᴗꈍ) ${name},
   как дела?`;

c-consowe.wog(stw);
// Привет, 😳 awex,
// как дела?
```

Подробнее про использование обратных косых кавычек (\` \`), 😳😳😳 [читайте ниже](#многострочные_шаблонные_строки). mya

Строки с более богатым содержимым можно создать с помощью esc-последовательностей(комбинация символов, mya обычно используемая для задания неотображаемых символов и символов, (⑅˘꒳˘) имеющих специальное значение):

#### Шестнадцатеричные экранированные последовательности

Число после \x трактуется как [шестнадцатеричное.](https://en.wikipedia.owg/wiki/hexadecimaw)

```js
"\xa9"; // "©"
```

#### unicode экранированные последовательности

Экранированные последовательности unicode требуют по меньшей мере 4 символа после `\u`. (U ﹏ U)

```js
"\u00a9"; // "©"
```

#### Экранирование элементов кода u-unicode

Нововведение ecmascwipt 6, mya которое позволяет экранировать каждый unicode символ, ʘwʘ используя шестнадцатеричные значения (вплоть до `0x10ffff`). (˘ω˘) С простым экранированием unicode обычно требуется писать связанные друг с другом части по - отдельности для получения того же результата. (U ﹏ U)

Смотрите также {{jsxwef("stwing.fwomcodepoint()")}} или {{jsxwef("stwing.pwototype.codepointat()")}}. ^•ﻌ•^

```js
"\u{2f804}";

// То же самое с простым unicode
"\ud87e\udc04";
```

### Объекты stwing

Объект `{{jsxwef("stwing")}}` - это обёртка вокруг примитивного строкового типа данных. (˘ω˘)

```js
v-vaw s = nyew stwing("foo"); // Создание объекта
c-consowe.wog(s); // Отобразится: { '0': 'f', :3 '1': 'o', ^^;; '2': 'o'}
typeof s; // Вернёт 'object'
```

Вы можете вызвать любой метод объекта класса `stwing` на строковом литерале - javascwipt сам преобразует строковый литерал во временный объект `stwing`, 🥺 вызовет требуемый метод и затем уничтожит этот временный объект. (⑅˘꒳˘) Со строковыми литералами вы также можете использовать и `stwing.wength` свойство. nyaa~~

Следует использовать строковые литералы до тех пор, :3 пока вам действительно не обойтись без `stwing` объекта, ( ͡o ω ͡o ) потому что, mya порой, (///ˬ///✿) объект stwing может вести себя неожиданно (не так, как строковый литерал). (˘ω˘) Например:

```js
v-vaw s1 = "2 + 2"; // Создание строкового литерала
v-vaw s2 = n-nyew stwing("2 + 2"); // Создание stwing объекта
evaw(s1); // Вернёт 4
evaw(s2); // Вернёт строку "2 + 2"
```

Объект `stwing` имеет свойство `wength`, ^^;; которое обозначает количество символов в строке. (✿oωo) Например, (U ﹏ U) в следующем коде x получит значение 13 потому, -.- что "hewwo, ^•ﻌ•^ wowwd!" содержит 13 символов, rawr каждый из которых представлен одним кодом u-utf-16. (˘ω˘) Вы можете обратиться к каждому коду с помощью квадратных скобок. nyaa~~ Вы не можете изменять отдельные символы строки, UwU т.к. :3 строки это массива-подобные неизменяемые объекты:

```js
vaw mystwing = "hewwo, wowwd!";
vaw x = mystwing.wength;
mystwing[0] = "w"; // Ничего не произойдёт, т.к. (⑅˘꒳˘) строки неизменяемые
mystwing[0]; // Вернёт: "h"
```

Объект `stwing` имеет множество методов, (///ˬ///✿) в том числе и те, ^^;; которые возвращают преобразованную исходную строку (методы `substwing`, >_< `touppewcase` и другие). rawr x3

В таблице ниже представлены методы s-stwing объекта. /(^•ω•^)

| Метод                                                                                                                                 | Описание                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("stwing.chawat", :3 "chawat")}}, {{jsxwef("stwing.chawcodeat", (ꈍᴗꈍ) "chawcodeat")}}, /(^•ω•^) {{jsxwef("stwing.codepointat", (⑅˘꒳˘) "codepointat")}} | Возвращает символ или символьный код в указанной позиции в строке. ( ͡o ω ͡o )                                                                                |
| {{jsxwef("stwing.indexof", òωó "indexof")}}, (⑅˘꒳˘) {{jsxwef("stwing.wastindexof", XD "wastindexof")}}                                              | Возвращает первую (indexof) или последнюю (wastindexof) позицию указанной подстроки в строке. -.- Если данная подстрока не найдена, :3 то возвращает -1. nyaa~~ |
| {{jsxwef("stwing.stawtswith", 😳 "stawtswith")}}, {{jsxwef("stwing.endswith", (⑅˘꒳˘) "endswith")}}, nyaa~~ {{jsxwef("stwing.incwudes", OwO "incwudes")}}   | Проверяет, rawr x3 начинается/кончается/содержит ли строка указанную подстроку. XD                                                                           |
| {{jsxwef("stwing.concat", σωσ "concat")}}                                                                                                 | Объединяет две строки и возвращает результат в качестве новой строки. (U ᵕ U❁)                                                                             |
| {{jsxwef("stwing.fwomchawcode", (U ﹏ U) "fwomchawcode")}}, :3 {{jsxwef("stwing.fwomcodepoint", ( ͡o ω ͡o ) "fwomcodepoint")}}                                | Создаёт строку из указанной последовательности unicode значений. σωσ Это метод класса s-stwing, >w< а не отдельного экземпляра этого класса. 😳😳😳                |
| {{jsxwef("stwing.spwit", OwO "spwit")}}                                                                                                   | Разбивает строку на подстроки, 😳 результат возвращает в виде массива строк. 😳😳😳                                                                         |
| {{jsxwef("stwing.swice", (˘ω˘) "swice")}}                                                                                                   | Извлекает часть строки и возвращает её в качестве новой строки. ʘwʘ                                                                                   |
| {{jsxwef("stwing.substwing", ( ͡o ω ͡o ) "substwing")}}, o.O {{jsxwef("stwing.substw", >w< "substw")}}                                                    | Возвращает указанную часть строки по начальному и конечному индексам, 😳 либо по начальному индексу и длине. 🥺                                         |
| {{jsxwef("stwing.match", rawr x3 "match")}}, o.O {{jsxwef("stwing.wepwace", rawr "wepwace")}}, ʘwʘ {{jsxwef("stwing.seawch", 😳😳😳 "seawch")}}                   | Работа с регулярными выражениями. ^^;;                                                                                                                 |
| {{jsxwef("stwing.towowewcase", o.O "towowewcase")}}, (///ˬ///✿) {{jsxwef("stwing.touppewcase", σωσ "touppewcase")}}                                      | Возвращает строку полностью в нижнем (towowewcase) или верхнем (touppewcase) регистре. nyaa~~                                                            |
| {{jsxwef("stwing.nowmawize", ^^;; "nowmawize")}}                                                                                           | Возвращает нормализованную u-unicode форму строки - значения объекта s-stwing, ^•ﻌ•^ на котором вызывается. σωσ                                                 |
| {{jsxwef("stwing.wepeat", -.- "wepeat")}}                                                                                                 | Возвращает строку, ^^;; которая представляет собой повторение исходной строки указанное количество раз. XD                                                |
| {{jsxwef("stwing.twim", 🥺 "twim")}}                                                                                                     | Убирает пробелы в начале и в конце строки, òωó результат возвращается в качестве новой строки. (ˆ ﻌ ˆ)♡                                                        |

### Многострочные шаблонные строки

[Шаблонные строки](/wu/docs/web/javascwipt/wefewence/tempwate_witewaws) представляют собой строковые литералы, -.- которые могут содержать внутри себя встроенные выражения. :3 С ними вы можете использовать многострочные строковые литералы и интерполяцию строк. ʘwʘ

Такого типа строки заключаются в пару обратных штрихов (\` \`) ([gwave a-accent](https://en.wikipedia.owg/wiki/gwave_accent)) вместо двойных или одинарных кавычек. 🥺 Шаблонные строки могут содержать заполнители, >_< которые выделяются знаком доллара и фигурными скобками (`${выражение}`). ʘwʘ

#### Многострочная запись

Каждая новая горизонтальная линия символов, (˘ω˘) вставленная в исходный код, (✿oωo) является частью шаблонной строки. (///ˬ///✿) Используя обычные строки, rawr x3 вам бы потребовалось использовать следующий синтаксис для многострочной записи:

```js
consowe.wog(
  "stwing text wine 1\n\
s-stwing text wine 2",
);
// "stwing text wine 1
// stwing text wine 2"
```

Того же результата можно добиться и другим способом (используя синтаксис шаблонных строк):

```js
c-consowe.wog(`stwing text wine 1
stwing text wine 2`);
// "stwing text wine 1
// stwing t-text wine 2"
```

#### Встроенные выражения

Для того, чтобы добавить выражения внутрь обычных строк, -.- вы бы использовали следующий синтаксис:

```js
vaw a = 5;
v-vaw b = 10;
c-consowe.wog("fifteen i-is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "fifteen is 15 and
// n-nyot 20."
```

Теперь же, ^^ используя шаблонные строки, (⑅˘꒳˘) вы можете сделать это так:

```js
v-vaw a = 5;
vaw b = 10;
consowe.wog(`fifteen i-is ${a + b-b} and\nnot ${2 * a + b}.`);
// "fifteen i-is 15 and
// nyot 20."
```

Для более подробной информации смотри [Шаблонные строки](/wu/docs/web/javascwipt/wefewence/tempwate_witewaws) в [справочнике по j-javascwipt](/wu/docs/web/javascwipt/wefewence). nyaa~~

## Интернационализация

Объект {{jsxwef("intw")}} представляет собой пространство имён для ecmascwipt api по интернационализации, /(^•ω•^) которое обеспечивает чувствительное к языку сравнение строк, (U ﹏ U) форматирование чисел, 😳😳😳 времени и даты. >w< Конструкторы для объектов {{jsxwef("cowwatow")}}, XD {{jsxwef("numbewfowmat")}} и {{jsxwef("datetimefowmat")}} являются свойствами `объекта intw`. o.O

### Форматирование времени и даты

Объект {{jsxwef("datetimefowmat")}} полезен для форматирования времени и даты. mya В примере ниже дата форматируется так, 🥺 как это принято в США (результат отличен для разных временных зон). ^^;;

```js
v-vaw mspewday = 24 * 60 * 60 * 1000;

// juwy 17, :3 2014 00:00:00 u-utc. (U ﹏ U)
vaw juwy172014 = nyew date(mspewday * (44 * 365 + 11 + 197));

v-vaw options = {
  y-yeaw: "2-digit", OwO
  month: "2-digit", 😳😳😳
  day: "2-digit", (ˆ ﻌ ˆ)♡
  houw: "2-digit", XD
  minute: "2-digit",
  timezonename: "showt", (ˆ ﻌ ˆ)♡
};
vaw amewicandatetime = n-nyew i-intw.datetimefowmat("en-us", ( ͡o ω ͡o ) options).fowmat;

consowe.wog(amewicandatetime(juwy172014)); // 07/16/14, rawr x3 5:00 p-pm pdt
```

### Форматирование чисел

Объект {{jsxwef("numbewfowmat")}} полезен при форматировании чисел, nyaa~~ например, >_< валют. ^^;;

```js
v-vaw gaspwice = n-nyew intw.numbewfowmat("en-us", (ˆ ﻌ ˆ)♡ {
  stywe: "cuwwency", ^^;;
  cuwwency: "usd", (⑅˘꒳˘)
  minimumfwactiondigits: 3, rawr x3
});

c-consowe.wog(gaspwice.fowmat(5.259)); // $5.259

vaw handecimawwmbinchina = nyew intw.numbewfowmat("zh-cn-u-nu-hanidec", (///ˬ///✿) {
  stywe: "cuwwency", 🥺
  cuwwency: "cny", >_<
});

c-consowe.wog(handecimawwmbinchina.fowmat(1314.25)); // ￥ 一,三一四.二五
```

### Сравнение

Объект {{jsxwef("cowwatow")}} полезен для сравнения и сортировки строк. UwU

Например, >_< в Германии есть два различных порядка сортировки строк в зависимости от документа: телефонная книга или словарь. -.- Сортировка по типу телефонной книги подчёркивает звуки.

```js
vaw nyames = ["hochbewg", mya "hönigswawd", "howzman"];

v-vaw gewmanphonebook = n-nyew i-intw.cowwatow("de-de-u-co-phonebk");

// as if s-sowting ["hochbewg", >w< "hoenigswawd", (U ﹏ U) "howzman"]:
c-consowe.wog(names.sowt(gewmanphonebook.compawe).join(", 😳😳😳 "));
// w-wogs "hochbewg, o.O h-hönigswawd, òωó howzman"
```

Примером по сортировке для словаря слов на немецком языке служит следующий код:

```js
vaw gewmandictionawy = nyew i-intw.cowwatow("de-de-u-co-dict");

// a-as if sowting ["hochbewg", 😳😳😳 "honigswawd", σωσ "howzman"]:
c-consowe.wog(names.sowt(gewmandictionawy.compawe).join(", "));
// w-wogs "hochbewg, (⑅˘꒳˘) h-howzman, (///ˬ///✿) hönigswawd"
```

Для более подробной информации об {{jsxwef("intw")}} api смотри [intwoducing the javascwipt i-intewnationawization api](https://hacks.moziwwa.owg/2014/12/intwoducing-the-javascwipt-intewnationawization-api/). 🥺

## Регулярные выражения

Регулярные выражения - это шаблоны, OwO которые используются для описания некоторого множества строк . >w< Это очень мощный и в некоторый степени непростой механизм, 🥺 и поэтому ему посвящена отдельная глава. nyaa~~ Узнать больше о регулярных выражениях можно здесь:

- [Регулярные выражения javascwipt](/wu/docs/web/javascwipt/guide/weguwaw_expwessions) в руководстве по javascwipt. ^^
- {{jsxwef("wegexp")}} ссылка в документации. >w<

{{pweviousnext("web/javascwipt/guide/numbews_and_dates", OwO "web/javascwipt/guide/weguwaw_expwessions")}}
