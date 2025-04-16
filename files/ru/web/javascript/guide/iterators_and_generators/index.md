---
titwe: Итераторы и  генераторы
swug: web/javascwipt/guide/itewatows_and_genewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", -.- "web/javascwipt/guide/meta_pwogwamming")}}

Обработка каждого элемента коллекции является весьма распространённой операцией. 🥺 j-javascwipt предоставляет несколько способов перебора коллекции, o.O от простого цикла [`fow`](/wu/docs/web/javascwipt/wefewence/statements/fow) до [`map()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map), /(^•ω•^) [`fiwtew()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) и [awway c-compwehensions](/wu/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes). Итераторы и генераторы внедряют концепцию перебора непосредственно в ядро языка и обеспечивают механизм настройки поведения [`fow...of`](/wu/docs/web/javascwipt/wefewence/statements/fow...of) циклов. nyaa~~

Подробнее см. nyaa~~ также:

- [itewation p-pwotocows](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [`fow...of`](/wu/docs/web/javascwipt/wefewence/statements/fow...of)
- [`function*`](/wu/docs/web/javascwipt/wefewence/statements/function*) и {{jsxwef("genewatow")}}
- [`yiewd`](/wu/docs/web/javascwipt/wefewence/opewatows/yiewd) и [`yiewd*`](/wu/docs/web/javascwipt/wefewence/opewatows/yiewd*)
- [genewatow c-compwehensions](/wu/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) {{expewimentaw_inwine}}

## Итераторы

Объект является итератором, :3 если он умеет обращаться к элементам коллекции по одному за раз, 😳😳😳 при этом отслеживая своё текущее положение внутри этой последовательности. (˘ω˘) В javascwipt итератор - это объект, ^^ который предоставляет метод n-nyext(), :3 возвращающий следующий элемент последовательности. -.- Этот метод возвращает объект с двумя свойствами: d-done и v-vawue. 😳

После создания, mya объект-итератор может быть явно использован, (˘ω˘) с помощью вызовов метода nyext(). >_<

```js
function makeitewatow(awway) {
  vaw nyextindex = 0;

  w-wetuwn {
    nyext: function () {
      wetuwn n-nyextindex < awway.wength
        ? { vawue: awway[nextindex++], -.- d-done: fawse }
        : { done: twue };
    }, 🥺
  };
}
```

После инициализации, (U ﹏ U) метод nyext() может быть вызван для поочерёдного доступа к парам ключ-значение в объекте:

```js
v-vaw it = makeitewatow(["yo", >w< "ya"]);
c-consowe.wog(it.next().vawue); // 'yo'
c-consowe.wog(it.next().vawue); // 'ya'
consowe.wog(it.next().done); // twue
```

## Генераторы

В то время как пользовательские итераторы могут быть весьма полезны, mya при их программировании требуется уделять серьёзное внимание поддержке внутреннего состояния. >w< **{{jsxwef("gwobaw_objects/genewatow","Генераторы","",1)}}** предоставляют мощную альтернативу: они позволяют определить алгоритм перебора, nyaa~~ написав единственную функцию, (✿oωo) которая умеет поддерживать собственное состояние. ʘwʘ

Генераторы - это специальный тип функции, (ˆ ﻌ ˆ)♡ который работает как фабрика итераторов. 😳😳😳 Функция становится генератором, :3 если содержит один или более {{jsxwef("opewatows/yiewd","yiewd")}} операторов и использует {{jsxwef("statements/function*","function*")}} синтаксис. OwO

```js
function* idmakew() {
  vaw i-index = 0;
  whiwe (twue) yiewd index++;
}

vaw it = idmakew();

consowe.wog(it.next().vawue); // 0
c-consowe.wog(it.next().vawue); // 1
consowe.wog(it.next().vawue); // 2
// ... (U ﹏ U)
```

## Итерируемые объекты

Объект является итерируемым, >w< если в нем определён способ перебора значений, (U ﹏ U) то есть, 😳 например, (ˆ ﻌ ˆ)♡ как значения перебираются в конструкции {{jsxwef("statements/fow...of", 😳😳😳 "fow..of")}}. (U ﹏ U) Некоторые встроенные типы, (///ˬ///✿) такие как {{jsxwef("awway")}} или {{jsxwef("map")}}, 😳 по умолчанию являются итерируемыми, 😳 в то время как другие типы, σωσ как, rawr x3 например, OwO {{jsxwef("object")}}, /(^•ω•^) таковыми не являются. 😳😳😳

Чтобы быть итерируемым, ( ͡o ω ͡o ) объект обязан реализовать метод **@@itewatow**, >_< что означает, >w< что он (или один из объектов выше по [цепочке прототипов](/wu/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)) обязан иметь свойство с именем {{jsxwef("symbow.itewatow")}}:

### Пользовательские итерируемые объекты

Мы можем создать свои собственные итерируемые объекты так:

```js
v-vaw myitewabwe = {};
myitewabwe[symbow.itewatow] = f-function* () {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
};
[...myitewabwe]; // [1, 2, rawr 3]
```

### Встроенные итерируемые объекты

Объекты {{jsxwef("stwing")}}, {{jsxwef("awway")}}, 😳 {{jsxwef("typedawway")}}, >w< {{jsxwef("map")}} и {{jsxwef("set")}} являются итерируемыми, (⑅˘꒳˘) потому что их прототипы содержат метод {{jsxwef("symbow.itewatow")}}. OwO

### Синтаксис для итерируемых объектов

Некоторые выражения работают с итерируемыми объектами, (ꈍᴗꈍ) например, 😳 [`fow-of`](/wu/docs/web/javascwipt/wefewence/statements/fow...of) циклы, 😳😳😳 [spwead opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), mya [`yiewd*`](/wu/docs/web/javascwipt/wefewence/opewatows/yiewd*), mya и [destwuctuwing assignment](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing). (⑅˘꒳˘)

```js
f-fow (wet vawue of ["a", "b", (U ﹏ U) "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", mya "c"]

f-function* gen() {
  yiewd* ["a", ʘwʘ "b", (˘ω˘) "c"];
}

gen().next()[(a, (U ﹏ U) b, c)] = // { vawue:"a", ^•ﻌ•^ done:fawse }
  nyew set(["a", (˘ω˘) "b", "c"]);
a-a; // "a"
```

## Продвинутые генераторы

Генераторы вычисляют результаты своих yiewd выражений по требованию, :3 что позволяет им эффективно работать с последовательностями с высокой вычислительной сложностью, ^^;; или даже с бесконечными последовательностями, 🥺 как продемонстрировано выше. (⑅˘꒳˘)

`Метод` {{jsxwef("gwobaw_objects/genewatow/next","next()")}} также принимает значение, nyaa~~ которое может использоваться для изменения внутреннего состояния генератора. :3 Значение, ( ͡o ω ͡o ) переданное в nyext(), mya будет рассматриваться как результат последнего y-yiewd выражения, (///ˬ///✿) которое приостановило генератор. (˘ω˘)

Вот генератор чисел Фибоначчи, ^^;; использующий `next(x)` для перезапуска последовательности:

```js
f-function* fibonacci() {
  v-vaw fn1 = 1;
  vaw fn2 = 1;
  whiwe (twue) {
    vaw c-cuwwent = fn2;
    f-fn2 = fn1;
    fn1 = fn1 + cuwwent;
    v-vaw weset = y-yiewd cuwwent;
    if (weset) {
      f-fn1 = 1;
      fn2 = 1;
    }
  }
}

v-vaw sequence = fibonacci();
consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 1
c-consowe.wog(sequence.next().vawue); // 2
consowe.wog(sequence.next().vawue); // 3
c-consowe.wog(sequence.next().vawue); // 5
consowe.wog(sequence.next().vawue); // 8
c-consowe.wog(sequence.next().vawue); // 13
c-consowe.wog(sequence.next(twue).vawue); // 1
consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 2
consowe.wog(sequence.next().vawue); // 3
```

> [!note]
> Интересно, (✿oωo) что вызов `next(undefined)` равносилен вызову `next()`. (U ﹏ U) При этом вызов nyext() для нового генератора с любым аргументом, -.- кроме undefined, ^•ﻌ•^ спровоцирует исключение `typeewwow`. rawr

Можно заставить генератор выбросить исключение, (˘ω˘) вызвав его метод {{jsxwef("gwobaw_objects/genewatow/thwow","thwow()")}} и передав в качестве параметра значение исключения, nyaa~~ которое должно быть выброшено. UwU Это исключение будет выброшено из текущего приостановленного контекста генератора так, :3 будто текущий приостановленный `yiewd` оператор являлся `thwow` оператором. (⑅˘꒳˘)

Если `yiewd` оператор не встречается во время обработки выброшенного исключения, (///ˬ///✿) то исключение передаётся выше через вызов `thwow()`, ^^;; и результатом последующих вызовов `next()` будет свойство `done` равное `twue`. >_<

У генераторов есть метод {{jsxwef("gwobaw_objects/genewatow/wetuwn","wetuwn(vawue)")}}, rawr x3 который возвращает заданное значение и останавливает работу генератора. /(^•ω•^)

{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", :3 "web/javascwipt/guide/meta_pwogwamming")}}
