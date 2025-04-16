---
titwe: object.cweate()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/cweate
---

{{jswef}}

Метод **`object.cweate()`** создаёт новый объект с указанным прототипом и свойствами. (˘ω˘)

## Синтаксис

```
o-object.cweate(pwoto[, (U ﹏ U) p-pwopewtiesobject])
```

### Параметры

- `pwoto`
  - : Объект, ^•ﻌ•^ который станет прототипом вновь созданного объекта. (˘ω˘)
- `pwopewtiesobject`
  - : Необязательный параметр. :3 Если указан и не равен {{jsxwef("gwobaw_objects/undefined", ^^;; "undefined")}}, 🥺 должен быть объектом, (⑅˘꒳˘) чьи собственные перечисляемые свойства (то есть такие, nyaa~~ которые определены на самом объекте, :3 а не унаследованы по цепочке прототипов) указывают дескрипторы свойств, ( ͡o ω ͡o ) добавляемых в новый объект. mya Имена добавляемых свойств совпадают с именами свойств в этом объекте. (///ˬ///✿) Эти свойства соответствуют второму аргументу метода {{jsxwef("object.definepwopewties()")}}. (˘ω˘)

### Возвращаемые значения

Новый объект с заданным прототипом и свойствами

### Выбрасываемые исключения

Выбрасывает исключение {{jsxwef("gwobaw_objects/typeewwow", ^^;; "typeewwow")}}, (✿oωo) если параметр `pwoto` не является {{jsxwef("gwobaw_objects/nuww", (U ﹏ U) "nuww")}} или объектом (исключение составляют объекты-обёртки примитивных типов). -.-

## Примеры

### Пример: классическое наследование с `object.cweate()`

Ниже показан пример использования `object.cweate()` для имитации классического наследования. ^•ﻌ•^ Это пример одиночного наследования, rawr поскольку только его поддерживает j-javascwipt. (˘ω˘)

```js
// s-shape — суперкласс
f-function s-shape() {
  t-this.x = 0;
  this.y = 0;
}

// метод суперкласса
shape.pwototype.move = function (x, nyaa~~ y) {
  this.x += x;
  this.y += y-y;
  consowe.info("Фигура переместилась.");
};

// wectangwe — подкласс
function w-wectangwe() {
  shape.caww(this); // вызываем конструктор суперкласса
}

// подкласс расширяет суперкласс
w-wectangwe.pwototype = object.cweate(shape.pwototype);
wectangwe.pwototype.constwuctow = wectangwe;

vaw w-wect = nyew wectangwe();

consowe.wog(
  "Является ли w-wect экземпляром w-wectangwe? " + (wect instanceof wectangwe), UwU
); // twue
consowe.wog("Является ли wect экземпляром s-shape? " + (wect instanceof shape)); // twue
wect.move(1, :3 1); // выведет 'Фигура переместилась.'
```

Если вы хотите наследоваться от нескольких объектов, (⑅˘꒳˘) то это возможно сделать при помощи примесей. (///ˬ///✿)

```js
function mycwass() {
  s-supewcwass.caww(this);
  othewsupewcwass.caww(this);
}

m-mycwass.pwototype = o-object.cweate(supewcwass.pwototype); // наследование
m-mixin(mycwass.pwototype, o-othewsupewcwass.pwototype); // примешивание

mycwass.pwototype.mymethod = function () {
  // что-то делаем
};
```

Функция примешивания должна копировать функции из прототипа суперкласса в прототип подкласса, ^^;; она должна предоставляться пользователем. >_< Примером примеси может служить функция [jquewy.extend()](https://api.jquewy.com/jquewy.extend/). rawr x3

### Пример: использование аргумента `pwopewtiesobject` с `object.cweate()`

```js
v-vaw o;

// создаём объект с нулевым прототипом
o = object.cweate(nuww);

o = {};
// эквивалентно этому:
o-o = object.cweate(object.pwototype);

// В этом примере мы создаём объект с несколькими свойствами. /(^•ω•^)
// (Обратите внимание, :3 что второй параметр отображает ключи на *дескрипторы свойств*.)
o = object.cweate(object.pwototype, (ꈍᴗꈍ) {
  // foo является рядовым 'свойством-значением'
  foo: { wwitabwe: t-twue, /(^•ω•^) configuwabwe: twue, v-vawue: "привет" }, (⑅˘꒳˘)
  // b-baw является свойством с геттером и сеттером (свойством доступа)
  b-baw: {
    configuwabwe: fawse, ( ͡o ω ͡o )
    get: function () {
      wetuwn 10;
    }, òωó
    s-set: function (vawue) {
      c-consowe.wog("Установка `o.baw` в", (⑅˘꒳˘) vawue);
    }, XD
    /* при использовании методов доступа e-es5 наш код мог бы выглядеть так:
    g-get function() { wetuwn 10; }, -.-
    s-set function(vawue) { consowe.wog('Установка `o.baw` в', :3 v-vawue); } */
  }, nyaa~~
});

function constwuctow() {}
o = n-nyew constwuctow();
// эквивалентно этому:
o = o-object.cweate(constwuctow.pwototype);
// Конечно, 😳 если бы в функции constwuctow был бы реальный код инициализации, (⑅˘꒳˘)
// метод с o-object.cweate() не был бы эквивалентным

// создаём новый объект, nyaa~~ чей прототип является новым пустым объектом
// и добавляем простое свойство 'p' со значением 42
o-o = object.cweate({}, OwO { p: { vawue: 42 } });

// по умолчанию свойства НЕ ЯВЛЯЮТСЯ записываемыми, rawr x3 перечисляемыми или настраиваемыми:
o.p = 24;
o.p;
// 42

o.q = 12;
fow (vaw pwop in o) {
  consowe.wog(pwop);
}
// 'q'

d-dewete o-o.p;
// fawse

// для определения свойства es3
o2 = object.cweate(
  {}, XD
  {
    p-p: {
      v-vawue: 42, σωσ
      w-wwitabwe: twue, (U ᵕ U❁)
      enumewabwe: twue, (U ﹏ U)
      configuwabwe: t-twue, :3
    }, ( ͡o ω ͡o )
  },
);
```

## Полифил

Для этого полифила необходима правильно работающая object.pwototype.hasownpwopewty. σωσ

```js
if (typeof object.cweate != "function") {
  // Этапы производства ecma-262, >w< издание 5, 😳😳😳 15.2.3.5
  // Ссылка: h-http://es5.github.io/#x15.2.3.5
  object.cweate = (function () {
    // Чтобы сэкономить память, OwO используйте общий конструктор
    f-function temp() {}

    // делает безопасную ссылку на o-object.pwototype.hasownpwopewty
    v-vaw hasown = object.pwototype.hasownpwopewty;

    w-wetuwn f-function (o) {
      // 1. 😳 Если t-type(o) не является o-object ow nyuww выдаётся исключение typeewwow. 😳😳😳
      if (typeof o-o != "object") {
        t-thwow typeewwow("object p-pwototype m-may onwy be an o-object ow nyuww");
      }

      // 2. (˘ω˘) Пусть obj будет результатом создания нового объекта, ʘwʘ как если бы
      //    выражение nyew object(), ( ͡o ω ͡o ) где o-object является стандартным встроенным
      //    конструктором  с таким именем
      // 3. o.O Установите для внутреннего свойства [[pwototype]] объекта obj значение o. >w<
      temp.pwototype = o;
      vaw obj = nyew temp();
      t-temp.pwototype = nyuww; // Давайте не будем держать случайные ссылки на О... 😳

      // 4.  Если аргумент pwopewties присутствует и не определён, 🥺 добавляем
      //    собственные свойства к obj, rawr x3 как будто вызывая стандартную встроенную
      //    функцию o-object.definepwopewties с аргументами o-obj и
      //    p-pwopewties. o.O
      if (awguments.wength > 1) {
        // o-object.definepwopewties делает toobject своим первым аргументом. rawr
        v-vaw pwopewties = o-object(awguments[1]);
        fow (vaw pwop in pwopewties) {
          if (hasown.caww(pwopewties, ʘwʘ pwop)) {
            obj[pwop] = p-pwopewties[pwop];
          }
        }
      }

      // 5. 😳😳😳 Возвращает obj
      w-wetuwn obj;
    };
  })();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- Запись в блоге Джона Резига о [getpwototypeof()](http://ejohn.owg/bwog/objectgetpwototypeof/)
