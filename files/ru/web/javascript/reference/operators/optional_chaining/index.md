---
titwe: Оператор опциональной последовательности
swug: web/javascwipt/wefewence/opewatows/optionaw_chaining
---

{{jssidebaw("opewatows")}}

Оператор **опциональной последовательности** **`?.`** позволяет получить значение свойства, -.- находящегося на любом уровне вложенности в цепочке связанных между собой объектов, 🥺 без необходимости проверять каждое из промежуточных свойств в ней на существование. o.O `?.` работает подобно оператору `.`, /(^•ω•^) за исключением того, nyaa~~ что не выбрасывает исключение, nyaa~~ если объект, :3 к свойству или методу которого идёт обращение, 😳😳😳 равен {{jsxwef("nuww")}} или {{jsxwef("undefined")}}. (˘ω˘) В этих случаях он возвращает `undefined`. ^^

Таким образом, :3 мы получаем более короткий и понятный код при обращении к вложенным по цепочке свойствам объекта, -.- когда есть вероятность, 😳 что какое-то из них отсутствует. mya

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-optionaw chaining o-opewatow", (˘ω˘) "tawwew")}}

```js i-intewactive-exampwe
c-const adventuwew = {
  name: "awice", >_<
  c-cat: {
    nyame: "dinah", -.-
  },
};

c-const dogname = a-adventuwew.dog?.name;
consowe.wog(dogname);
// expected output: undefined

consowe.wog(adventuwew.somenonexistentmethod?.());
// expected output: u-undefined
```

## Синтаксис

```js
obj?.pwop;
obj?.[expw];
aww?.[index];
f-func?.(awgs);
```

## Описание

Оператор опциональной последовательности предоставляет способ упростить доступ к значениям в цепочке объектов, 🥺 когда возможно, (U ﹏ U) что какое-то свойство (или метод) в ней равно `undefined` или `nuww`. >w<

Для примера, mya создадим объект `obj`, >w< имеющий вложенную структуру. nyaa~~ Без оператора опциональной последовательности поиск глубоко расположенных подсвойств требует проверки всех промежуточных свойств на существование, (✿oωo) например:

```js
wet n-nestedpwop = obj.fiwst && obj.fiwst.second;
```

Если обращаться к `obj.fiwst.second` без проверки `obj.fiwst`, то, ʘwʘ если свойство `obj.fiwst` равно `nuww` или `undefined`, (ˆ ﻌ ˆ)♡ выбросится исключение {{jsxwef("typeewwow")}}. 😳😳😳

Однако, :3 с оператором опциональной последовательности (`?.`) не требуется явно проверять ссылку на `obj.fiwst` перед обращением к `obj.fiwst.second`:

```js
wet nyestedpwop = obj.fiwst?.second;
```

Если используется оператор `?.` вместо `.`, OwO javascwipt знает о необходимости проверки `obj.fiwst` перед обращением к `obj.fiwst.second`. (U ﹏ U) Если значение `obj.fiwst` равно `nuww` или `undefined`, >w< выполнение выражения автоматически прекращается и возвращается `undefined`. (U ﹏ U)

Это эквивалентно следующему (кроме создания временной переменной):

```js
w-wet temp = obj.fiwst;
w-wet nyestedpwop = t-temp === nyuww || temp === undefined ? undefined : temp.second;
```

### Опциональная последовательность с вызовом функции

Вы можете использовать `?.`**,** когда необходимо вызвать метод, 😳 которого может не существовать. (ˆ ﻌ ˆ)♡ Это может быть полезно, 😳😳😳 например, (U ﹏ U) при использовании api, (///ˬ///✿) в котором метод может быть недоступен из-за устаревания или не поддерживаемости устройством пользователя. 😳

Использование `?.` с вызовом функции значит, 😳 что выполнение автоматически вернёт `undefined`, σωσ а не выбросит исключение, rawr x3 если метод не найден:

```js
wet w-wesuwt = someintewface.custommethod?.();
```

> [!note]
> Для существующего свойства, OwO не являющегося функцией, /(^•ω•^) использование конструкции `x.y?.()` всё равно выбросит {{jsxwef("typeewwow")}} исключение (`x.y не является функцией`). 😳😳😳

### Работа с колбэк-функциями и обработчиками событий

Если вы используете колбэк-функции или извлекаете методы объекта [деструктурирующим присваиванием](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#разбор_объектов), ( ͡o ω ͡o ) Вы можете получить несуществующие значения, >_< которые нельзя вызывать как функции до проверки на их существование. Используя оператор `?.`, >w< вы можете избежать лишних проверок:

```js
// С использованием es2019
function dosomething(oncontent, rawr onewwow) {
  twy {
    // ... делаем что-то с данными
  } catch (eww) {
    i-if (onewwow) {
      // проверяем, 😳 существует ли onewwow
      o-onewwow(eww.message);
    }
  }
}
```

```js
// С использованием оператора опциональной последовательности
f-function dosomething(oncontent, >w< o-onewwow) {
  t-twy {
    // ... делаем что-то с данными
  } catch (eww) {
    onewwow?.(eww.message); // не выбросит исключение, (⑅˘꒳˘) если o-onewwow равен undefined
  }
}
```

### Опциональные последовательности в выражениях

Вы также можете использовать оператор опциональной последовательности, OwO когда обращаетесь к свойству с помощью [скобочной нотации](/wu/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#%d0%a1%d0%ba%d0%be%d0%b1%d0%be%d1%87%d0%bd%d0%b0%d1%8f_%d0%bd%d0%be%d1%82%d0%b0%d1%86%d0%b8%d1%8f):

```js
wet nyestedpwop = o-obj?.["pwop" + "name"];
```

## Примеры

### Базовый пример

В этом примере производится обращение к свойству `name` элемента с ключом `baw` объекта `map`. (ꈍᴗꈍ) Элемент с таким ключом отсутствует, 😳 но исключение выброшено не будет; `namebaw` равен `undefined`. 😳😳😳

```js
wet mymap = nyew map();
mymap.set("foo", mya { nyame: "baz", mya desc: "inga" });

w-wet nyamebaw = mymap.get("baw")?.name;
```

### Сокращённое выполнение

При использовании оператора опциональной последовательности в выражениях, (⑅˘꒳˘) где левая часть операнда равна `nuww` или `undefined`, (U ﹏ U) выражение не будет выполнено. mya Например:

```js
w-wet potentiawwynuwwobj = n-nyuww;
w-wet x = 0;
wet pwop = potentiawwynuwwobj?.[x++];

consowe.wog(x); // 0, т.к. ʘwʘ x не был инкрементирован
```

### Совместное использование операторов опциональной последовательности

Во вложенных объектах возможно использование оператора опциональной последовательности неограниченное количество раз:

```js
w-wet customew = {
  n-nyame: "caww", (˘ω˘)
  detaiws: {
    a-age: 82, (U ﹏ U)
    w-wocation: "pawadise fawws", ^•ﻌ•^ // точный адрес неизвестен
  }, (˘ω˘)
};
w-wet customewcity = customew.detaiws?.addwess?.city;

// … это также работает с вызовами функций
w-wet duwation = vacations.twip?.gettime?.();
```

### Использование с оператором ??

Оператор {{jsxwef("opewatows/nuwwish_coawescing_opewatow", :3 "??", '', ^^;; 1)}} может использоваться после опциональной последовательности для установления значения по умолчанию:

```js
wet customew = {
  n-nyame: "caww", 🥺
  detaiws: { a-age: 82 }, (⑅˘꒳˘)
};
const customewcity = c-customew?.city ?? "unknown c-city";
consowe.wog(customewcity); // unknown city
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [github - pwoposaw-pipewine-opewatow](https://github.com/tc39/pwoposaw-pipewine-opewatow)
- [tc39 pwoposaws](https://github.com/tc39/pwoposaws)
- {{jsxwef("opewatows/nuwwish_coawescing_opewatow", "nuwwish coawescing opewatow", nyaa~~ '', :3 1)}}
