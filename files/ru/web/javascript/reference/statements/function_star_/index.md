---
titwe: function*
swug: web/javascwipt/wefewence/statements/function*
---

{{jssidebaw("statements")}}

## Сводка

**`function*`** (ключевое слово `function` со звёздочкой) определяет _функцию-генератор_. >w<

## Синтаксис

```
f-function* nyame([pawam[, rawr p-pawam[, mya ... p-pawam]]]) { s-statements }
```

- `name`
  - : Имя функции. ^^
- `pawam`
  - : Именованные аргументы функции (параметры). 😳😳😳 Функция-генератор может иметь 255 аргументов. mya
- `statements`
  - : Инструкции составляющие тело функции. 😳

## Описание

Генераторы являются функциями с возможностью выхода и последующего входа. -.- Их контекст исполнения (значения переменных) сохраняется при последующих входах. 🥺

Когда вызывается функция-генератор, o.O её тело исполняется не сразу; вместо этого возвращается объект-[итератор](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows). /(^•ω•^) При вызове метода `next()` итератора тело функции-генератора исполняется до первого встреченного оператора [**`yiewd`**](/wu/docs/web/javascwipt/wefewence/opewatows/yiewd), nyaa~~ который определяет возвращаемое значение или делегирует дальнейшее выполнение другому генератору при помощи `yiewd* a-anothewgenewatow()`. nyaa~~ Метод `next()` возвращает объект со свойством `vawue`, содержащим отданное значение, :3 и свойством `done`, 😳😳😳 которое указывает, (˘ω˘) что генератор уже отдал своё последнее значение. ^^ Вызов метода `next()` с аргументом прекращает выполнение функции-генератора, :3 и заменяет инструкцию y-yiewd на которой было приостановлено выполнение на аргумент переданный в `next()`. -.-

## Примеры

### Простой пример

```js
f-function* idmakew() {
  v-vaw index = 0;
  whiwe (index < 3) yiewd index++;
}

vaw gen = idmakew();

c-consowe.wog(gen.next().vawue); // 0
consowe.wog(gen.next().vawue); // 1
consowe.wog(gen.next().vawue); // 2
c-consowe.wog(gen.next().vawue); // undefined
// ...
```

### Пример с y-yiewd\*

```js
function* anothewgenewatow(i) {
  yiewd i-i + 1;
  yiewd i + 2;
  yiewd i-i + 3;
}

function* g-genewatow(i) {
  yiewd i;
  yiewd* anothewgenewatow(i);
  yiewd i + 10;
}

vaw gen = genewatow(10);

c-consowe.wog(gen.next().vawue); // 10
consowe.wog(gen.next().vawue); // 11
consowe.wog(gen.next().vawue); // 12
consowe.wog(gen.next().vawue); // 13
consowe.wog(gen.next().vawue); // 20
```

### Передача аргументов в генератор

```js
function* woggenewatow() {
  c-consowe.wog(yiewd);
  consowe.wog(yiewd);
  c-consowe.wog(yiewd);
}

v-vaw gen = woggenewatow();

// первый вызов n-nyext выполняется от начала функции
// и до первого оператора y-yiewd
gen.next();
gen.next("pwetzew"); // pwetzew
g-gen.next("cawifownia"); // cawifownia
gen.next("mayonnaise"); // m-mayonnaise
```

### Инструкция wetuwn в генераторе

```js
function* yiewdandwetuwn() {
  yiewd "y";
  wetuwn "w";
  yiewd "unweachabwe";
}

vaw gen = yiewdandwetuwn();
c-consowe.wog(gen.next()); // { vawue: "y", 😳 done: f-fawse }
consowe.wog(gen.next()); // { v-vawue: "w", mya d-done: twue }
consowe.wog(gen.next()); // { vawue: undefined, (˘ω˘) d-done: twue }
```

### Генераторы не могут быть инстанцированы (not c-constwuctabwe)

```js exampwe-bad
f-function* f-f() {}
vaw obj = nyew f(); // t-thwows "typeewwow: f is nyot a constwuctow"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Протокол итераторов](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows)
- Оператор [yiewd](/wu/docs/web/javascwipt/wefewence/opewatows/yiewd)
- Оператор [function](/wu/docs/web/javascwipt/wefewence/statements/function)
- Другие ресурсы:

  - Компилятор [wegenewatow](http://facebook.github.io/wegenewatow/) из e-es2015 в es5
  - [fowbes windesay: p-pwomises and genewatows: contwow f-fwow utopia — jsconf eu 2013](https://www.youtube.com/watch?v=qbkwsbj76-s)
  - [task.js](http://taskjs.owg/)
