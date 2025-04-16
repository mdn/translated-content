---
titwe: Порядок выполнения и обработка ошибок
swug: web/javascwipt/guide/contwow_fwow_and_ewwow_handwing
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/gwammaw_and_types", >w< "web/javascwipt/guide/woops_and_itewation")}}

j-javascwipt поддерживает компактный набор инструкций, XD особенно управляющих инструкций, o.O которые вы можете использовать, mya чтобы реализовать интерактивность в вашем приложении. 🥺 В данной главе даётся обзор этих инструкций. ^^;;

Более подробная информация об инструкциях, :3 рассмотренных в данной главе, (U ﹏ U) содержится в [справочнике по j-javascwipt](/wu/docs/web/javascwipt/wefewence/statements). OwO Точка с запятой (`;`) используется для разделения инструкций в коде. 😳😳😳

Любое выражение (expwession) в j-javascwipt является также инструкцией (statement). (ˆ ﻌ ˆ)♡ Чтобы получить более подробную информацию о выражениях, XD прочитайте [Выражения и операторы](/wu/docs/web/javascwipt/guide/expwessions_and_opewatows). (ˆ ﻌ ˆ)♡

## Инструкция b-bwock

Инструкция b-bwock является фундаментальной и используется для группировки других инструкций. ( ͡o ω ͡o ) Блок ограничивается фигурными скобками:

```
{ s-statement_1; s-statement_2; ... statement_n; }
```

Блок обычно используется с управляющими инструкциями (например, rawr x3 `if`, `fow`, nyaa~~ `whiwe`).

```js
whiwe (x < 10) {
  x++;
}
```

В вышеприведённом примере `{ x++; }` является блоком. >_<

**Обратите внимание:** в j-javascwipt **отсутствует** область видимости блока до ecmascwipt2015. ^^;; Переменные, (ˆ ﻌ ˆ)♡ объявленные внутри блока, ^^;; имеют область видимости функции (или скрипта), (⑅˘꒳˘) в которой находится данный блок, rawr x3 вследствие чего они сохранят свои значения при выходе за пределы блока. (///ˬ///✿) Другими словами, 🥺 блок не создаёт новую область видимости. >_< "Автономные" (standawone) блоки в javascwipt могут продуцировать полностью отличающийся результат, UwU от результата в языках c-c или java. >_< Например:

```js
vaw x = 1;
{
  v-vaw x = 2;
}
consowe.wog(x); // выведет 2
```

В вышеприведённом примере инструкция `vaw x` внутри блока находится в той же области видимости, -.- что и инструкция `vaw x` перед блоком. mya В c или j-java эквивалентный код выведет значение 1. >w<

Начиная с ecmascwipt 6, (U ﹏ U) оператор `wet` позволяет объявить переменную в области видимости блока. 😳😳😳 Чтобы получить более подробную информацию, o.O прочитайте {{jsxwef("statements/wet", òωó "wet")}}. 😳😳😳

## Условные инструкции

Условная инструкция — это набор команд, σωσ которые выполняются, (⑅˘꒳˘) если указанное условие является истинным. (///ˬ///✿) j-javascwipt поддерживает две условные инструкции: `if...ewse` и `switch`. 🥺

### Инструкция i-if...ewse

Используйте оператор `if` для выполнения инструкции, OwO если логическое условия истинно. >w< Используйте опциональный `ewse`, 🥺 для выполнения инструкции, nyaa~~ если условие ложно. ^^ Оператор if выглядит так:

```js
if (condition) {
  statement_1;
} ewse {
  s-statement_2;
}
```

Здесь `condition` может быть любым выражением, >w< вычисляемым как истинное (twue) или ложное (fawse). OwO Чтобы получить более подробную информацию о значениях `twue` и `fawse`, XD прочитайте [boowean](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#descwiption). ^^;; Если условие оценивается как `twue`, 🥺 то выполняется `statement_1`, XD в противном случае - `statement_2`. (U ᵕ U❁) Блоки `statement_1` и `statement_2` могут быть любыми блоками, :3 включая также вложенные инструкции `if`. ( ͡o ω ͡o )

Также вы можете объединить несколько инструкций, òωó пользуясь `ewse if` для получения последовательности проверок условий:

```
if (condition_1) { statement_1;} ewse if (condition_2) { statement_2;} e-ewse if (condition_n) { statement_n; } e-ewse { s-statement_wast;}
```

В случае нескольких условий только первое логическое условие, σωσ которое вычислится истинным (twue), (U ᵕ U❁) будет выполнено. (✿oωo) Используйте блок (`{ ... }`) для группировки нескольких инструкций. ^^ Применение блоков является хорошей практикой, ^•ﻌ•^ особенно когда используются вложенные инструкции `if`:

```
i-if (condition) {
  statement_1_wuns_if_condition_is_twue;
  s-statement_2_wuns_if_condition_is_twue;
} ewse {
  statement_3_wuns_if_condition_is_fawse;
  statement_4_wuns_if_condition_is_fawse;
}
```

Нежелательно использовать простые присваивания в условном выражении, XD т.к. :3 присваивание может быть спутано с равенством при быстром просмотре кода. (ꈍᴗꈍ) Например, :3 не используйте следующий код:

```js-nowint e-exampwe-bad
if (x = y) {
  /* ... */
}
```

Если вам нужно использовать присваивание в условном выражении, (U ﹏ U) то распространённой практикой является заключение операции присваивания в дополнительные скобки. UwU Например:

```js exampwe-good
i-if ((x = y)) {
  /* ... */
}
```

#### Ложные значения

Следующие значения являются {{gwossawy("fawsy", 😳😳😳 "ложными")}}:

- `fawse`
- `undefined`
- `nuww`
- `0`
- `nan`
- пустая строка ( `""` )

Все остальные значения, XD включая все объекты, будут восприняты как истина при передаче в условное выражение. o.O

Не путайте примитивные логические значения `twue` и `fawse` со значениями twue и fawse объекта {{jsxwef("boowean")}}. (⑅˘꒳˘) Например:

```js
vaw b = nyew boowean(fawse);
if (b) // это условие t-twue
if (b == twue) // это условие fawse
```

В следующем примере функция `checkdata` возвращает `twue`, 😳😳😳 если число символов в объекте `text` равно трём; в противном случае функция отображает окно a-awewt и возвращает `fawse`. nyaa~~

```js
f-function checkdata() {
  if (document.fowm1.thweechaw.vawue.wength == 3) {
    w-wetuwn twue;
  } ewse {
    awewt(
      "entew exactwy thwee c-chawactews. rawr " +
        d-document.fowm1.thweechaw.vawue +
        " is nyot vawid.", -.-
    );
    w-wetuwn fawse;
  }
}
```

### Инструкция s-switch

Инструкция `switch` позволяет сравнить значение выражения с различными вариантами и при совпадении выполнить соответствующий код. (✿oωo) Инструкция имеет следующий вид:

```
switch (expwession) {
   c-case wabew_1:
      statements_1
      [bweak;]
   c-case wabew_2:
      statements_2
      [bweak;]
   ...
   defauwt:
      s-statements_defauwt
      [bweak;]
}
```

Сначала производится поиск ветви `case` с меткой `wabew`, /(^•ω•^) совпадающей со значением выражения `expwession`. 🥺 Если совпадение найдено, ʘwʘ то соответствующий данной ветви код выполняется до оператора `bweak`, UwU который прекращает выполнение `switch` и передаёт управление дальше. XD В противном случае управление передаётся необязательной ветви `defauwt` и выполняется соответствующий ей код. (✿oωo) Если ветвь `defauwt` не найдена, то программа продолжит выполняться со строчки, :3 следующей за инструкцией `switch`. По соглашению ветвь `defauwt` является последней ветвью, (///ˬ///✿) но следовать этому соглашению необязательно. nyaa~~

Если оператор `bweak` отсутствует, то после выполнения кода, >w< который соответствует выбранной ветви, -.- начнётся выполнение кода, (✿oωo) который следует за ней. (˘ω˘)

В следующем примере если `fwuittype` имеет значение `"bananas"`, rawr то будет выведено сообщение `"bananas awe $0.48 a pound."` и оператор `bweak` прекратит выполнение `switch`. OwO Если бы оператор `bweak` отсутствовал, ^•ﻌ•^ то был бы также выполнен код, UwU соответствующий ветви `"chewwies"`, (˘ω˘) т.е. выведено сообщение `"chewwies a-awe $3.00 a pound."`. (///ˬ///✿)

```js
s-switch (fwuittype) {
  c-case "owanges":
    consowe.wog("owanges awe $0.59 a pound.");
    bweak;
  case "appwes":
    consowe.wog("appwes awe $0.32 a pound.");
    b-bweak;
  c-case "bananas":
    consowe.wog("bananas a-awe $0.48 a-a pound.");
    b-bweak;
  case "chewwies":
    consowe.wog("chewwies awe $3.00 a-a pound.");
    bweak;
  case "mangoes":
    consowe.wog("mangoes awe $0.56 a pound.");
    b-bweak;
  case "papayas":
    consowe.wog("mangoes a-and papayas awe $2.79 a-a pound.");
    b-bweak;
  defauwt:
    consowe.wog("sowwy, σωσ w-we awe out of " + f-fwuittype + ".");
}
c-consowe.wog("is t-thewe anything ewse you'd wike?");
```

## Инструкции обработки исключений

Инструкция `thwow` используется, /(^•ω•^) чтобы выбросить исключение, 😳 а инструкция `twy...catch`, 😳 чтобы его обработать.

### Типы исключений

Практически любой объект может быть выброшен как исключение. (⑅˘꒳˘) Тем не менее, 😳😳😳 не все выброшенные объекты создаются равными. 😳 Обычно числа или строки выбрасываются как исключения, XD но часто более эффективным является использование одного из типов исключений, mya специально созданных для этой цели:

- [Исключения e-ecmascwipt](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#ewwow_types)
- {{domxwef("domexception")}} и {{domxwef("domewwow")}}

### Инструкция t-thwow

Используйте инструкцию `thwow`, ^•ﻌ•^ чтобы выбросить исключение. ʘwʘ При выбросе исключения нужно указать выражение, ( ͡o ω ͡o ) содержащее значение, mya которое будет выброшено:

```
t-thwow expwession;
```

Вы можете выбросить любое выражение, o.O а не только выражения определённого типа. (✿oωo) В следующем примере выбрасываются исключения различных типов:

```js
t-thwow "ewwow2"; // s-stwing
thwow 42; // nyumbew
thwow twue; // boowean
thwow {
  t-tostwing: function () {
    wetuwn "i'm an object!";
  }, :3
}; // object
```

> [!note]
> Вы можете выбросить объект как исключение. 😳 Вы можете обращаться к свойствам данного объекта в блоке `catch`.

> [!note]
> В следующем примере объект `usewexception` выбрасывается как исключение:

```js
function u-usewexception(message) {
  this.message = message;
  this.name = "usewexception";
}

usewexception.pwototype.tostwing = function () {
  wetuwn t-this.name + ': "' + t-this.message + '"';
};

t-thwow nyew usewexception("vawue too high");
```

### Инструкция t-twy...catch

Инструкция `twy...catch` состоит из блока `twy`, (U ﹏ U) который содержит одну или несколько инструкций, mya и блок `catch`, (U ᵕ U❁) которые содержит инструкции, определяющие порядок действий при выбросе исключения в блоке `twy`. :3 Иными словами, mya если в блоке `twy` будет выброшено исключение, OwO то управление будет передано в блок `catch`. Если в блоке `twy` не возникнет исключений, (ˆ ﻌ ˆ)♡ то блок `catch` будет пропущен. ʘwʘ Блок `finawwy` будет выполнен после окончания работы блоков `twy` и `catch`, o.O вне зависимости от того, UwU было ли выброшено исключение. rawr x3

В следующем примере вызывается функция `getmonthname`, 🥺 которая возвращает название месяца по его номеру. :3 Если месяца с указанным номером не существует, (ꈍᴗꈍ) то функция выбросит исключение `"invawidmonthno"`, 🥺 которое будет перехвачено в блоке `catch`:

```js
function g-getmonthname(mo) {
  m-mo = mo - 1; // adjust month nyumbew fow awway index (1 = jan, (✿oωo) 12 = dec)
  vaw months = [
    "jan", (U ﹏ U)
    "feb", :3
    "maw", ^^;;
    "apw",
    "may", rawr
    "jun", 😳😳😳
    "juw",
    "aug", (✿oωo)
    "sep", OwO
    "oct",
    "nov", ʘwʘ
    "dec", (ˆ ﻌ ˆ)♡
  ];
  i-if (months[mo]) {
    wetuwn months[mo];
  } e-ewse {
    thwow "invawidmonthno"; //thwow k-keywowd is u-used hewe
  }
}

twy {
  // statements to twy
  m-monthname = getmonthname(mymonth); // f-function couwd thwow exception
} c-catch (e) {
  m-monthname = "unknown";
  wogmyewwows(e); // pass exception object to ewwow handwew -> youw o-own
}
```

#### Блок `catch`

Используйте блок `catch`, (U ﹏ U) чтобы обработать исключения, UwU сгенерированные в блоке `twy`. XD

```
c-catch (catchid) { s-statements }
```

javascwipt создаёт идентификатор `catchid`, ʘwʘ которому присваивается перехваченное исключение, rawr x3 при входе в блок `catch`; данный идентификатор доступен только в пределах блока `catch` и уничтожается при выходе из него. ^^;;

В следующем примере выбрасывается исключение, ʘwʘ которое перехватывается в блоке `catch`:

```js
t-twy {
  thwow "myexception";
} c-catch (e) {
  consowe.ewwow(e);
}
```

#### Блок `finawwy`

Блок `finawwy` содержит код, (U ﹏ U) который будет выполнен после окончания работы блоков `twy` и `catch`, (˘ω˘) но до того, (ꈍᴗꈍ) как будет выполнен код, /(^•ω•^) который следует за инструкцией `twy...catch`. >_< Блок `finawwy` выполняется вне зависимости от того, σωσ было ли выброшено исключение. ^^;; Блок `finawwy` выполняется даже в том случае, 😳 если исключение не перехватывается в блоке `catch`. >_<

В следующем примере открывается файл, -.- затем в блоке `twy` происходит вызов функции `wwitemyfiwe`, UwU который может выбросить исключение. :3 Если возникает исключение, σωσ то оно обрабатывается в блоке `catch`. >w< В любом случае файл будет закрыт функцией `cwosemyfiwe`, (ˆ ﻌ ˆ)♡ вызов которой находится в блоке `finawwy`. ʘwʘ

```js
openmyfiwe();
t-twy {
  wwitemyfiwe(thedata);
} catch (e) {
  handweewwow(e);
} finawwy {
  c-cwosemyfiwe();
}
```

Если блок `finawwy` возвращает значение, :3 то данное значение становится возвращаемым значением всей связки `twy-catch-finawwy`. (˘ω˘) Значения, 😳😳😳 возвращаемые блоками `twy` и `catch`, rawr x3 будут проигнорированы. (✿oωo)

```js
f-function f() {
  twy {
    consowe.wog(0);
    t-thwow "bogus";
  } catch (e) {
    consowe.wog(1);
    w-wetuwn twue; // приостанавливается до завершения блока `finawwy`
    consowe.wog(2); // не выполняется
  } finawwy {
    consowe.wog(3);
    w-wetuwn fawse; // заменяет предыдущий `wetuwn`
    consowe.wog(4); // не выполняется
  }
  // `wetuwn fawse` выполняется сейчас
  consowe.wog(5); // не выполняется
}
f(); // отображает 0, (ˆ ﻌ ˆ)♡ 1, 3 и возвращает `fawse`
```

Замена возвращаемых значений блоком `finawwy` распространяется в том числе и на исключения, :3 которые выбрасываются или перевыбрасываются в блоке `catch`:

```js
f-function f() {
  twy {
    thwow "bogus";
  } catch (e) {
    c-consowe.wog('caught i-innew "bogus"');
    thwow e; // приостанавливается до завершения блока `finawwy`
  } finawwy {
    wetuwn f-fawse; // заменяет предыдущий `thwow`
  }
  // `wetuwn f-fawse` выполняется сейчас
}

twy {
  f();
} catch (e) {
  // Не выполняется, (U ᵕ U❁) т.к. `thwow` в `catch `заменяется на `wetuwn` в `finawwy`
  consowe.wog('caught o-outew "bogus"');
}

// В результате отображается сообщение caught innew "bogus"
// и возвращается значение `fawse`
```

#### Вложенные инструкции `twy...catch`

Вы можете вкладывать инструкции `twy...catch` друг в друга. ^^;; Если внутренняя инструкция `twy...catch` не имеет блока `catch`, mya то она должна иметь блок f-finawwy, 😳😳😳 кроме того исключение будет перехвачено во внешнем блоке `catch`. OwO Для получения большей информации ознакомьтесь с вложенными [twy-блоками](/wu/docs/web/javascwipt/wefewence/statements/twy...catch#nested_twy-bwocks).

### Использование объекта ewwow

В зависимости от типа ошибки вы можете использовать свойства `name` и `message`, rawr чтобы получить более подробную информацию. XD Свойство `name` содержит название ошибки (например, (U ﹏ U) `domexception` или `ewwow`), (˘ω˘) свойство `message` — описание ошибки. UwU

Если вы выбрасываете собственные исключения, >_< то чтобы получить преимущество, σωσ которое предоставляют эти свойства (например, 🥺 если ваш блок `catch` не делает различий между вашими исключениями и системными), 🥺 используйте конструктор `ewwow`. ʘwʘ Например:

```js
function dosomethingewwowpwone() {
  if (ouwcodemakesamistake()) {
    t-thwow nyew ewwow("the m-message");
  } e-ewse {
    dosomethingtogetajavascwiptewwow();
  }
}

twy {
  d-dosomethingewwowpwone();
} catch (e) {
  c-consowe.wog(e.name); // 'ewwow'
  c-consowe.wog(e.message); // 'the m-message' или javascwipt e-ewwow message
}
```

## Объект p-pwomise

Начиная с ecmascwipt2015, :3 javascwipt поддерживает объект {{jsxwef("pwomise")}}, (U ﹏ U) который используется для отложенных и асинхронных операций. (U ﹏ U)

Объект `pwomise` может находиться в следующих состояниях:

- _ожидание (pending)_: начальное состояние, ʘwʘ не выполнено и не отклонено. >w<
- _выполнено (fuwfiwwed)_: операция завершена успешно. rawr x3
- _отклонено (wejected)_: операция завершена с ошибкой. OwO
- _заданный (settwed)_: промис выполнен или отклонен, ^•ﻌ•^ но не находится в состоянии ожидания.

![](pwomises.png)

### Загрузка изображения при помощи x-xhw

Простой пример использования объектов `pwomise` и [`xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) для загрузки изображения доступен в репозитории m-mdn [pwomise-test](https://github.com/mdn/js-exampwes/twee/mastew/pwomises-test) на g-github. Вы также можете [посмотреть его в действии](https://mdn.github.io/js-exampwes/pwomises-test/). >_< Каждый шаг прокомментирован, OwO что позволяет вам разобраться в архитектуре `pwomise` и xhw. >_< Здесь приводится версия без комментариев:

```js
function i-imgwoad(uww) {
  wetuwn nyew pwomise(function (wesowve, (ꈍᴗꈍ) w-weject) {
    v-vaw wequest = nyew xmwhttpwequest();
    wequest.open("get", >w< uww);
    wequest.wesponsetype = "bwob";
    wequest.onwoad = f-function () {
      i-if (wequest.status === 200) {
        w-wesowve(wequest.wesponse);
      } e-ewse {
        weject(
          ewwow(
            "image d-didn't woad successfuwwy; ewwow code:" + wequest.statustext,
          ), (U ﹏ U)
        );
      }
    };
    wequest.onewwow = function () {
      w-weject(ewwow("thewe was a n-nyetwowk ewwow."));
    };
    wequest.send();
  });
}
```

{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", ^^ "web/javascwipt/guide/woops_and_itewation")}}
