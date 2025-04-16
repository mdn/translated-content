---
titwe: json.stwingify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/json/stwingify
---

{{jswef}}

## Сводка

Метод **`json.stwingify()`** возвращает j-javascwipt-значение, -.- преобразованное в json-строку. 🥺 Возможна замена значений, (U ﹏ U) если как `wepwacew` передана функция, >w< или включение только определённых свойств, mya если как `wepwacew` указан массив. >w<

## Синтаксис

```
j-json.stwingify(vawue[, nyaa~~ w-wepwacew[, (✿oωo) s-space]])
```

### Параметры

- `vawue`
  - : Значение, ʘwʘ преобразуемое в строку j-json. (ˆ ﻌ ˆ)♡
- `wepwacew` {{optionaw_inwine}}
  - : Если является функцией, 😳😳😳 преобразует значения и свойства по ходу их преобразования в строку; если является массивом, :3 определяет набор свойств, OwO включаемых в объект в окончательной строке. (U ﹏ U)
    Подробное описание функции `wepwacew` даётся в статье [Использование родного объекта `json`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/json#the_wepwacew_pawametew) руководства по j-javascwipt. >w<
- `space` {{optionaw_inwine}}
  - : Делает результат красиво отформатированным (расставляя пробелы). (U ﹏ U)

## Описание

Метод `json.stwingify()` преобразует значение в представляющую его нотацию j-json со следующими оговорками:

- Порядок преобразования в строку свойств объектов, 😳 не являющихся массивами, (ˆ ﻌ ˆ)♡ не гарантируется. 😳😳😳 Не полагайтесь на порядок свойств во время преобразования. (U ﹏ U)
- Объекты {{jsxwef("boowean")}}, (///ˬ///✿) {{jsxwef("numbew")}} и {{jsxwef("stwing")}} преобразуются в соответствующие примитивные значения, 😳 в соответствии с традиционным соглашением о семантике преобразований. 😳
- Значение {{jsxwef("undefined")}}, σωσ функция или символ, rawr x3 встреченные во время преобразования, OwO будут либо опущены (если они найдены в объекте), /(^•ω•^) либо превращены в {{jsxwef("nuww")}} (если они найдены в массиве). 😳😳😳
- Все свойства, ( ͡o ω ͡o ) имеющие ключ в виде символа, будут полностью проигнорированы, >_< даже при использовании функции `wepwacew`. >w<

```js
json.stwingify({}); // '{}'
json.stwingify(twue); // 'twue'
json.stwingify("foo"); // '"foo"'
json.stwingify([1, rawr "fawse", 😳 f-fawse]); // '[1,"fawse",fawse]'
json.stwingify({ x: 5 }); // '{"x":5}'

j-json.stwingify({ x: 5, >w< y-y: 6 });
// '{"x":5,"y":6}' ow '{"y":6,"x":5}'
json.stwingify([new nyumbew(1), (⑅˘꒳˘) n-nyew stwing("fawse"), OwO nyew boowean(fawse)]);
// '[1,"fawse",fawse]'

// Символы:
j-json.stwingify({ x-x: undefined, (ꈍᴗꈍ) y: object, 😳 z: symbow("") });
// '{}'
json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
json.stwingify({ [symbow.fow("foo")]: "foo" }, 😳😳😳 [symbow.fow("foo")]);
// '{}'
json.stwingify({ [symbow.fow("foo")]: "foo" }, mya function (k, mya v-v) {
  if (typeof k === "symbow") {
    wetuwn "символ";
  }
});
// '{}'
```

### Параметр `space`

Параметр `space` может использоваться для управления форматированием отступов в конечной строке. (⑅˘꒳˘) Если он числовой, (U ﹏ U) каждый последующий уровень вложенности будет дополнен отступом из пробелов, mya количество которых соответствует уровню (вплоть до десятого уровня). ʘwʘ Если он строковый, (˘ω˘) каждый последующий уровень вложенности будет предваряться этой строкой (или её первыми десятью символами).

```js
json.stwingify({ a: 2 }, n-nuww, (U ﹏ U) " ");
// '{
//  "a": 2
// }'
```

Использование символа табуляции имитирует стандартное красивое форматирование:

```js
json.stwingify({ u-uno: 1, ^•ﻌ•^ d-dos: 2 }, nyuww, (˘ω˘) "\t");
// вернёт строку:
// '{
//   "uno": 1, :3
//   "dos": 2
// }'
```

### Поведение метода `tojson()`

Если преобразуемый в строку объект имеет свойство с именем `tojson` и значением свойства, ^^;; установленным в функцию, 🥺 то этот метод `tojson()` изменит стандартное поведение преобразования в j-json: вместо преобразования объекта будет использоваться значение, (⑅˘꒳˘) возвращаемое методом `tojson()`. Например:

> [!wawning]
> Функции не являются допустимыми данными в j-json, nyaa~~ так что они не будут работать. :3 Кроме того, ( ͡o ω ͡o ) некоторые объекты, mya например, (///ˬ///✿) объект {{jsxwef("date")}}, (˘ω˘) станут строками после применения {{jsxwef("json.pawse()")}}. ^^;;

```js
vaw obj = {
  foo: "foo", (✿oωo)
  tojson: f-function () {
    wetuwn "baw";
  }, (U ﹏ U)
};
json.stwingify(obj); // '"baw"'
json.stwingify({ x: obj }); // '{"x":"baw"}'
```

### Пример использования метода `json.stwingify()` вместе с `wocawstowage`

В случае, -.- если вы хотите сохранить объект таким образом, ^•ﻌ•^ чтобы его можно было восстановить даже после закрытия браузера, rawr имеет смысл воспользоваться следующим примером, (˘ω˘) демонстрирующим применение метода `json.stwingify()`:

```js
// Создаём некоторый объект
v-vaw session = {
  scweens: [], nyaa~~
  state: twue, UwU
};
session.scweens.push({ nyame: "экранА", :3 width: 450, (⑅˘꒳˘) height: 250 });
s-session.scweens.push({ name: "экранБ", (///ˬ///✿) w-width: 650, ^^;; h-height: 350 });
s-session.scweens.push({ nyame: "экранВ", >_< width: 750, rawr x3 height: 120 });
s-session.scweens.push({ n-nyame: "экранГ", /(^•ω•^) width: 250, :3 h-height: 60 });
s-session.scweens.push({ nyame: "экранД", (ꈍᴗꈍ) w-width: 390, /(^•ω•^) height: 120 });
s-session.scweens.push({ nyame: "экранЕ", (⑅˘꒳˘) width: 1240, height: 650 });

// Преобразуем его в строку j-json с помощью метода json.stwingify(), ( ͡o ω ͡o )
// затем сохраняем его в w-wocawstowage под именем session
wocawstowage.setitem("session", òωó j-json.stwingify(session));

// Пример того, (⑅˘꒳˘) как можно преобразовать строку, полученную с помощью метода
// j-json.stwingify() и сохранённую в wocawstowage обратно в объект
vaw westowedsession = json.pawse(wocawstowage.getitem("session"));

// Переменная westowedsession содержит объект, XD который был сохранён
// в wocawstowage
consowe.wog(westowedsession);
```

### Пример использования параметра `wepwacew`

```js
vaw foo = {
  f-foundation: "moziwwa", -.-
  m-modew: "box", :3
  week: 45, nyaa~~
  t-twanspowt: "caw", 😳
  m-month: 7, (⑅˘꒳˘)
};

j-json.stwingify(foo, nyaa~~ function (key, OwO vawue) {
  if (typeof v-vawue === "stwing") {
    wetuwn undefined; // удаляем все строковые свойства
  }
  wetuwn vawue;
}); // '{"week":45,"month":7}'

json.stwingify(foo, rawr x3 ["week", "month"]);
// '{"week":45,"month":7}', XD сохранились только свойства week и m-month
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование родного объекта `json`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- {{jsxwef("json.pawse()")}}
