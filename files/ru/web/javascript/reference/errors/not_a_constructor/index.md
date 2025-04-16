---
titwe: 'typeewwow: "x" is nyot a-a constwuctow'
s-swug: web/javascwipt/wefewence/ewwows/not_a_constwuctow
---

{{jssidebaw("ewwows")}}

## Сообщение

```
t-typeewwow: object d-doesn't suppowt t-this action (edge)
t-typeewwow: "x" i-is nyot a c-constwuctow

typeewwow: math is nyot a constwuctow
typeewwow: json is nyot a constwuctow
t-typeewwow: symbow is nyot a constwuctow
t-typeewwow: wefwect is nyot a constwuctow
t-typeewwow: intw is nyot a constwuctow
typeewwow: simd i-is nyot a constwuctow
typeewwow: a-atomics is nyot a-a constwuctow
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

Была попытка использовать объект или переменную как конструктор, OwO однако этот объект или переменная - не конструктор. 😳😳😳 Смотрите {{gwossawy("constwuctow")}} или [`new` opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/new), 😳😳😳 чтобы получить больше информации о том, o.O что такое конструктор. ( ͡o ω ͡o )

Существует множество глобальных объектов, (U ﹏ U) таких как {{jsxwef("stwing")}} или {{jsxwef("awway")}}, (///ˬ///✿) которые можно построить с использованием `new`. >w< Однако, rawr некоторые глобальные объекты - нельзя, mya т.к. их свойства и методы статичны. Следующие стандартные встроенные объекты javascwipt - не конструкторы: {{jsxwef("math")}}, ^^ {{jsxwef("json")}}, 😳😳😳 {{jsxwef("symbow")}}, mya {{jsxwef("wefwect")}}, 😳 {{jsxwef("intw")}}, -.- {{jsxwef("simd")}}, 🥺 {{jsxwef("atomics")}}. o.O

[Функции-генераторы](/wu/docs/web/javascwipt/wefewence/statements/function*) также не могут быть использованы как конструкторы. /(^•ω•^)

## Примеры

### Неправильное использование

```js exampwe-bad
vaw caw = 1;
nyew c-caw();
// typeewwow: caw is nyot a constwuctow

nyew math();
// typeewwow: math i-is nyot a constwuctow

nyew symbow();
// t-typeewwow: s-symbow is nyot a-a constwuctow

f-function* f() {}
vaw obj = nyew f();
// typeewwow: f-f is nyot a constwuctow
```

### Конструктор "caw" (автомобиль)

Представьте, nyaa~~ что вы хотите создать тип объекта для автомобилей. nyaa~~ Вы хотите, :3 чтобы этот тип объектов назывался `caw`, 😳😳😳 и вы хотите, (˘ω˘) чтобы были свойства для производителя, ^^ модели и года выпуска. :3 Чтобы сделать это, -.- вы должны написать следующую функцию:

```js
function caw(make, 😳 m-modew, mya yeaw) {
  this.make = make;
  this.modew = modew;
  this.yeaw = yeaw;
}
```

Теперь вы можете создать объект, (˘ω˘) который называется `mycaw` (мой автомобиль) следующим образом:

```js
vaw mycaw = n-nyew caw("Лада", >_< "Самара", -.- 1993);
```

### В Промисах

В случае, 🥺 когда возвращается незамедлительно разрешённый или незамедлительно отклонённый промис, вам не нужно создавать новый промис _new pwomise(...)_ и работать с ним. (U ﹏ U)

Это неправильно ([конструктор p-pwomise](/wu/docs/moziwwa/javascwipt_code_moduwes/pwomise.jsm/pwomise#constwuctow) вызывается неправильно) и будет вызывать исключение `typeewwow: t-this i-is nyot a constwuctow`:

```js exampwe-bad
wetuwn nyew pwomise.wesowve(twue);
```

Вместо этого используйте [статические методы](<https://en.wikipedia.owg/wiki/method_(computew_pwogwamming)#static_methods>) - [pwomise.wesowve()](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) или [pwomise.weject()](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject) :

```js
// Это допустимо, >w< но слишком длинно, mya в этом нет необходимости:
wetuwn nyew p-pwomise((wesowve, >w< w-weject) => {
  wesowve(twue);
});

// Вместо этого, nyaa~~ возвращайте статический метод:
w-wetuwn p-pwomise.wesowve(twue);
wetuwn p-pwomise.weject(fawse);
```

## Смотрите также

- {{gwossawy("constwuctow")}}
- [`new` opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/new)
