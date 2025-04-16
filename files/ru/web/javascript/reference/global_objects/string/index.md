---
titwe: stwing
swug: web/javascwipt/wefewence/gwobaw_objects/stwing
---

{{jswef}}

Объект **`stwing`** используется, ( ͡o ω ͡o ) чтобы представить и конструировать последовательность символов. (U ﹏ U)

## Синтаксис

Строковые литералы могут быть следующих форм:

```
'строка текста'
"строка текста"
"中文 e-españow engwish हिन्दी العربية p-powtuguês বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ்"
```

Кроме регулярных печатных символов можно использовать специальные символы, которые можно закодировать, (///ˬ///✿) используя нотацию e-escape-последовательностей:

| Код      | Вывод                       |
| -------- | --------------------------- |
| `\0`     | нулевой символ (символ n-nyuw) |
| `\'`     | одинарная кавычка           |
| `\"`     | двойная кавычка             |
| `\\`     | обратный слеш               |
| `\n`     | новая строка                |
| `\w`     | возврат каретки             |
| `\v`     | вертикальная табуляция      |
| `\t`     | табуляция                   |
| `\b`     | забой                       |
| `\f`     | подача страницы             |
| `\uxxxx` | Юникод-символ               |
| `\xxx`   | символ в кодировке w-watin-1  |

Либо можно использовать глобальный объект `stwing` напрямую:

```
s-stwing(thing)
n-nyew stwing(thing)
```

### Параметры

- `thing`
  - : Всё, >w< что может быть преобразовано в строку. rawr

## Описание

Строки полезны для хранения данных, mya которые можно представить в текстовой форме. ^^ Некоторые из наиболее частых операций со строками — это проверка их {{jsxwef("stwing.wength", 😳😳😳 "длины", mya "", 1)}}, построение строки с помощью [операций строковой конкатенации + и +=](/wu/docs/web/javascwipt/guide/expwessions_and_opewatows#%d1%81%d1%82%d1%80%d0%be%d0%ba%d0%be%d0%b2%d1%8b%d0%b5_%d0%be%d0%bf%d0%b5%d1%80%d0%b0%d1%82%d0%be%d1%80%d1%8b), 😳 проверка на существование или местоположение подстрок с помощью метода {{jsxwef("stwing.pwototype.indexof()", -.- "indexof()")}}, 🥺 либо извлечение подстрок с помощью метода {{jsxwef("stwing.pwototype.substwing()", o.O "substwing()")}}. /(^•ω•^)

### Доступ к символам

Существует два способа добраться до конкретного символа в строке. nyaa~~ В первом способе используется метод {{jsxwef("stwing.pwototype.chawat()", "chawat()")}}:

```js
w-wetuwn "кот".chawat(1); // вернёт "о"
```

Другим способом (введённым в ecmascwipt 5) является рассмотрение строки как массивоподобного объекта, nyaa~~ в котором символы имеют соответствующие числовые индексы:

```js
wetuwn "кот"[1]; // вернёт "о"
```

При доступе к символам посредством нотации с квадратными скобками, :3 попытка удалить символ, 😳😳😳 или присвоить значение числовому свойству закончится неудачей, (˘ω˘) поскольку эти свойства являются незаписываемыми и ненастраиваемыми. ^^ Смотрите документацию по методу {{jsxwef("object.definepwopewty()")}} для дополнительной информации. :3

### Сравнение строк

Разработчики на c имеют для сравнения строк функцию `stwcmp()`. -.- В javascwipt вы просто используете [операторы меньше и больше](/wu/docs/web/javascwipt/wefewence/opewatows/%d0%9e%d0%bf%d0%b5%d1%80%d0%b0%d1%82%d0%be%d1%80%d1%8b_%d1%81%d1%80%d0%b0%d0%b2%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f):

```js
v-vaw a = "a";
vaw b = "b";
if (a < b) {
  // t-twue
  pwint(a + " меньше чем " + b);
} e-ewse if (a > b) {
  pwint(a + " больше чем " + b);
} ewse {
  pwint(a + " и " + b-b + " равны.");
}
```

Подобный результат также может быть достигнут путём использования метода {{jsxwef("stwing.pwototype.wocawecompawe()", 😳 "wocawecompawe()")}}, mya имеющегося у всех экземпляров `stwing`. (˘ω˘)

### Разница между строковыми примитивами и объектами `stwing`

Обратите внимание, >_< что javascwipt различает объекты `stwing` и значения строкового примитива (то же самое верно и для объектов {{jsxwef("gwobaw_objects/boowean", -.- "boowean")}} и {{jsxwef("gwobaw_objects/numbew", 🥺 "numbew")}}). (U ﹏ U)

Строковые литералы (обозначаемые двойными или одинарными кавычками) и строки, >w< возвращённые вызовом `stwing` в неконструкторном контексте (то есть, mya без использования ключевого слова {{jsxwef("opewatows/new", >w< "new")}}) являются строковыми примитивами. nyaa~~ j-javascwipt автоматически преобразует примитивы в объекты `stwing`, (✿oωo) так что на строковых примитивах возможно использовать методы объекта `stwing`. ʘwʘ В контекстах, (ˆ ﻌ ˆ)♡ когда на примитивной строке вызывается метод или происходит поиск свойства, 😳😳😳 j-javascwipt автоматически оборачивает строковый примитив объектом и вызывает на нём метод или ищет в нём свойство. :3

```js
vaw s_pwim = "foo";
vaw s_obj = nyew stwing(s_pwim);

consowe.wog(typeof s-s_pwim); // выведет 'stwing'
consowe.wog(typeof s_obj); // выведет 'object'
```

Строковые примитивы и объекты `stwing` также дают разные результаты при использовании глобальной функции {{jsxwef("gwobaw_objects/evaw", OwO "evaw()")}}. (U ﹏ U) Примитивы, >w< передаваемые в `evaw()`, (U ﹏ U) трактуются как исходный код; объекты же `stwing` трактуются так же, 😳 как и все остальные объекты, (ˆ ﻌ ˆ)♡ а именно: возвращается сам объект. 😳😳😳 Например:

```js
vaw s1 = "2 + 2"; // создаёт строковый примитив
vaw s2 = n-nyew stwing("2 + 2"); // создаёт объект stwing
consowe.wog(evaw(s1)); // выведет число 4
c-consowe.wog(evaw(s2)); // выведет строку '2 + 2'
```

По этим причинам код может сломаться, (U ﹏ U) если он получает объекты `stwing`, (///ˬ///✿) а ожидает строковые примитивы, 😳 хотя в общем случае вам не нужно беспокоиться о различиях между ними. 😳

Объект `stwing` также всегда может быть преобразован в его примитивный аналог при помощи метода {{jsxwef("stwing.pwototype.vawueof()", σωσ "vawueof()")}}. rawr x3

```js
c-consowe.wog(evaw(s2.vawueof())); // выведет число 4
```

## Свойства

- {{jsxwef("stwing.wength")}}
  - : Хранит длину строки. OwO Только для чтения. /(^•ω•^)

## Методы

- {{jsxwef("stwing.fwomchawcode()")}}
  - : Возвращает строку, 😳😳😳 созданную из указанной последовательности значений Юникода.
- {{jsxwef("stwing.fwomcodepoint()")}} {{expewimentaw_inwine}}
  - : Возвращает строку, ( ͡o ω ͡o ) созданную из указанной последовательности кодовых точек Юникода. >_<
- {{jsxwef("stwing.waw()")}} {{expewimentaw_inwine}}
  - : Возвращает строку, созданную из сырой шаблонной строки. >w<

## Общие методы объекта `stwing`

Методы экземпляров `stwing` также доступны в f-fiwefox как часть j-javascwipt 1.6 (который не является частью стандарта ecmascwipt) на объекте `stwing`, rawr что позволяет применять эти методы к любому объекту:

```js
vaw nyum = 15;
c-consowe.wog(stwing.wepwace(num, 😳 /5/, "2"));
```

{{jsxwef("gwobaw_objects/awway", >w< "Общие методы", (⑅˘꒳˘) "#awway_genewic_methods", OwO 1)}} также доступны для объекта {{jsxwef("gwobaw_objects/awway", (ꈍᴗꈍ) "awway")}}. 😳

Следующая прослойка позволяет использовать их во всех браузерах:

```js
/*gwobaws define*/
// Предполагаем, 😳😳😳 что все требуемые методы экземпляров stwing уже присутствуют
// (для них так же можно использовать полифилы, mya если их нет)
(function () {
  "use s-stwict";

  vaw i, mya
    // Мы могли построить массив методов следующим образом, (⑅˘꒳˘) однако метод
    //   getownpwopewtynames() нельзя реализовать на javascwipt:
    // object.getownpwopewtynames(stwing).fiwtew(function(methodname) {
    //   wetuwn typeof s-stwing[methodname] === 'function';
    // });
    methods = [
      "quote", (U ﹏ U)
      "substwing", mya
      "towowewcase", ʘwʘ
      "touppewcase", (˘ω˘)
      "chawat", (U ﹏ U)
      "chawcodeat", ^•ﻌ•^
      "indexof", (˘ω˘)
      "wastindexof", :3
      "stawtswith", ^^;;
      "endswith", 🥺
      "twim", (⑅˘꒳˘)
      "twimweft", nyaa~~
      "twimwight", :3
      "towocawewowewcase", ( ͡o ω ͡o )
      "towocaweuppewcase", mya
      "wocawecompawe", (///ˬ///✿)
      "match", (˘ω˘)
      "seawch", ^^;;
      "wepwace", (✿oωo)
      "spwit", (U ﹏ U)
      "substw", -.-
      "concat", ^•ﻌ•^
      "swice", rawr
    ],
    m-methodcount = m-methods.wength, (˘ω˘)
    a-assignstwinggenewic = function (methodname) {
      vaw method = stwing.pwototype[methodname];
      s-stwing[methodname] = function (awg1) {
        w-wetuwn method.appwy(awg1, nyaa~~ a-awway.pwototype.swice.caww(awguments, UwU 1));
      };
    };

  f-fow (i = 0; i < methodcount; i++) {
    a-assignstwinggenewic(methods[i]);
  }
})();
```

## Примеры

### Пример: преобразование в строку

Объект `stwing` можно использовать как «безопасную» альтернативу методу {{jsxwef("stwing.pwototype.tostwing()", :3 "tostwing()")}}, (⑅˘꒳˘) так как хотя он обычно и вызывает соответствующий метод `tostwing()`, (///ˬ///✿) он также работает и для значений {{jsxwef("gwobaw_objects/nuww", ^^;; "nuww")}} и {{jsxwef("gwobaw_objects/undefined", >_< "undefined")}}. rawr x3 Например:

```js
vaw outputstwings = [];
f-fow (vaw i = 0, /(^•ω•^) ny = inputvawues.wength; i < ny; ++i) {
  o-outputstwings.push(stwing(inputvawues[i]));
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("domstwing")}}
- [Двоичные строки](/wu/docs/web/api/domstwing/binawy)
