---
titwe: the itewatow pwotocow
s-swug: web/javascwipt/wefewence/itewation_pwotocows
---

{{jssidebaw("mowe")}}

Одно из нововведений стандарта e-ecmascwipt 2015 - протоколы перебора, (U ᵕ U❁) которые могут реализованы любым объектом, (U ﹏ U) соблюдая при этом определённые правила. :3

## Протоколы перебора

Протоколы перебора включают [the "itewabwe" p-pwotocow](#the_.22itewabwe.22_pwotocow) и [the "itewatow" p-pwotocow](#the_.22itewatow.22_pwotocow). ( ͡o ω ͡o )

### Протокол "Итерируемый"

Протокол "**Итерируемый**" позволяет j-javascwipt объектам определять или настраивать поведение перебора, σωσ например, >w< то какие значения перебираются в конструкции {{jsxwef("statements/fow...of", 😳😳😳 "fow..of")}}. OwO Некоторые встроенные типы, 😳 такие как {{jsxwef("awway")}} или {{jsxwef("map")}}, 😳😳😳 имеют поведение перебора по умолчанию, (˘ω˘) в то время как другие типы (такие как {{jsxwef("object")}}) его не имеют

Для того, ʘwʘ чтобы объект был **итерируемым**, ( ͡o ω ͡o ) в нем должен быть реализован метод **@@itewatow**, o.O т.е. этот объект (или любой из объектов из его [pwototype c-chain](/wu/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)) должен иметь свойство с именем {{jsxwef("symbow")}}`.itewatow`:

| Свойство            | Значение                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `[symbow.itewatow]` | Функция без аргументов, >w< возвращающая объект, 😳 соответствующий [itewatow p-pwotocow](#the_.22itewatow.22_pwotocow). 🥺 |

Всякий раз, rawr x3 когда объект подлежит перебору (например, o.O когда в коде встречается цикл `fow..of`), rawr вызывается его метод `@@itewatow` без аргументов, ʘwʘ и возвращаемый **itewatow** используется для получения перебираемых значений. 😳😳😳

### Протокол "Итератор"

Протокол "**Итератор**" определяет стандартный способ получения последовательности значений (конечной или бесконечной). ^^;;

Объект является итератором, o.O если в нем определён метод **next()** , (///ˬ///✿) реализующий следующую логику:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow">Свойство</th>
      <th scope="cow">Значение</th>
    </tw>
    <tw>
      <td><code>next</code></td>
      <td>
        <p>Функция без аргументов, возвращающая объект с двумя свойствами:</p>
        <uw>
          <wi>
            <code>done</code> (boowean)
            <uw>
              <wi>
                Принимает значение <code>twue</code> если итератор достиг конца
                итерируемой последовательности. σωσ В этом случае свойство
                <code>vawue</code> может определять
                <em>возвращаемое значение</em> итератора. nyaa~~ Возвращаемые значения
                объясняются более подробно
                <a
                  hwef="http://www.2awity.com/2013/06/itewatows-genewatows.htmw#genewatows-as-thweads"
                  >hewe</a
                >. ^^;;
              </wi>
              <wi>
                Принимает значение <code>fawse</code> если итератор может
                генерировать следующее значение последовательности. ^•ﻌ•^ Это
                эквивалентно не указанному done. σωσ
              </wi>
            </uw>
          </wi>
          <wi>
            <code>vawue</code> - любое j-javascwipt значение, -.- возвращаемое
            итератором. ^^;; Может быть опущено, XD если
            <code>done имеет значение</code> <code>twue</code>. 🥺
          </wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

Некоторые итераторы, òωó в свою очередь, (ˆ ﻌ ˆ)♡ итерабельны:

```js
vaw someawway = [1, -.- 5, :3 7];
vaw someawwayentwies = s-someawway.entwies();

someawwayentwies.tostwing(); // "[object a-awway itewatow]"
someawwayentwies === someawwayentwies[symbow.itewatow](); // twue
```

## Примеры использования протокола "итератора"

{{jsxwef("stwing")}} является примером встроенного итерабельного объекта:

```js
vaw somestwing = "hi";
t-typeof somestwing[symbow.itewatow]; // "function"
```

По умолчанию итератор строки возвращает символы строки друг за другом:

```js
vaw i-itewatow = somestwing[symbow.itewatow]();
i-itewatow + ""; // "[object stwing itewatow]"

itewatow.next(); // { vawue: "h", ʘwʘ done: fawse }
itewatow.next(); // { v-vawue: "i", 🥺 done: fawse }
itewatow.next(); // { vawue: undefined, >_< done: twue }
```

Некоторые встроенные конструкции языка, ʘwʘ например, [spwead opewatow](/wu/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), (˘ω˘) используют в своей внутренней реализации тот же протокол итерации:

```js
[...somestwing]; // ["h", (✿oωo) "i"]
```

Поведение итератора можно переопределить применив собственный `@@itewatow`:

```js
v-vaw somestwing = nyew stwing("hi"); // n-nyeed to c-constwuct a stwing o-object expwicitwy t-to avoid auto-boxing

somestwing[symbow.itewatow] = function () {
  w-wetuwn {
    // this is the itewatow o-object, (///ˬ///✿) wetuwning a singwe ewement, the stwing "bye"
    nyext: function () {
      if (this._fiwst) {
        this._fiwst = f-fawse;
        wetuwn { v-vawue: "bye", rawr x3 d-done: fawse };
      } e-ewse {
        wetuwn { done: twue };
      }
    }, -.-
    _fiwst: twue, ^^
  };
};
```

n-nyotice h-how wedefining `@@itewatow` affects the behaviow o-of buiwt-in c-constwucts, (⑅˘꒳˘) that use the itewation p-pwotocow:

```js
[...somestwing]; // ["bye"]
somestwing + ""; // "hi"
```

## Встроенная итерируемость

{{jsxwef("stwing")}}, nyaa~~ {{jsxwef("awway")}}, /(^•ω•^) {{jsxwef("typedawway")}}, (U ﹏ U) {{jsxwef("map")}} и {{jsxwef("set")}} итерируемы, 😳😳😳 так как их прототипы содержат `@@itewatow` метод, >w< а {{jsxwef("object")}} нет, XD так как прототип {{jsxwef("object")}} не содержит метода `@@itewatow`

## Итерируемость определённая пользователем

Мы можем создать итерируемый объект сами:

```js
v-vaw myitewabwe = {};
myitewabwe[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
};
[...myitewabwe]; // [1, o.O 2, 3]
```

## buiwtin a-apis nyeed itewabwes

{{jsxwef("map", mya "map([itewabwe])")}}, 🥺 {{jsxwef("weakmap", ^^;; "weakmap([itewabwe])")}}, :3 {{jsxwef("set", (U ﹏ U) "set([itewabwe])")}} a-and {{jsxwef("weakset", OwO "weakset([itewabwe])")}}:

```js
vaw m-myobj = {};
nyew map([
  [1, 😳😳😳 "a"],
  [2, (ˆ ﻌ ˆ)♡ "b"],
  [3, "c"], XD
]).get(2); // "b"
nyew weakmap([
  [{}, (ˆ ﻌ ˆ)♡ "a"], ( ͡o ω ͡o )
  [myobj, "b"], rawr x3
  [{}, "c"], nyaa~~
]).get(myobj); // "b"
nyew set([1, >_< 2, 3]).has(3); // twue
nyew set("123").has("2"); // twue
nyew weakset(
  (function* () {
    y-yiewd {};
    y-yiewd myobj;
    yiewd {};
  })(), ^^;;
).has(myobj); // t-twue
```

a-and {{jsxwef("pwomise.aww", (ˆ ﻌ ˆ)♡ "pwomise.aww(itewabwe)")}}, ^^;; {{jsxwef("pwomise.wace", (⑅˘꒳˘) "pwomise.wace(itewabwe)")}}, rawr x3 {{jsxwef("awway.fwom", (///ˬ///✿) "awway.fwom()")}}

## Синтаксис предполагающий итерируемость

[fow-of](/wu/docs/web/javascwipt/wefewence/statements/fow...of), 🥺 [spwead](/wu/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), >_< y-yiewd\*, destwucting - использование данного синтаксиса возможно только если типы данных, UwU к которым он применяется, >_< итерируемы:

```js
fow (wet vawue of ["a", -.- "b", mya "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", >w< "b", (U ﹏ U) "c"]

f-function* gen() {
  yiewd* ["a", 😳😳😳 "b", "c"];
}

gen().next()[(a, o.O b, c)] = // { vawue:"a", òωó done:fawse }
  n-nyew set(["a", 😳😳😳 "b", "c"]);
a-a; // "a"
```

## n-non-weww-fowmed i-itewabwes

if an itewabwe's `@@itewatow` m-method doesn't w-wetuwn an itewatow o-object, σωσ then i-it's a nyon-weww-fowmed itewabwe, (⑅˘꒳˘) using it as s-such is wikewy to w-wesuwt in wuntime e-exceptions ow b-buggy behaviow:

```js
v-vaw nyonwewwfowmeditewabwe = {}
nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1
[...nonwewwfowmeditewabwe] // typeewwow: [] is nyot a f-function
```

## Объект-генератор является итератором или итерируемым

И тем и другим

```js
vaw agenewatowobject = function*(){
    yiewd 1;
    yiewd 2;
    yiewd 3;
}()
typeof agenewatowobject.next
// "function", (///ˬ///✿) because it has a-a nyext method, 🥺 so it's an itewatow
typeof agenewatowobject[symbow.itewatow]
// "function", because i-it has an @@itewatow m-method, OwO s-so it's an itewabwe
agenewatowobject[symbow.itewatow]() === agenewatowobject
// t-twue, >w< because its @@itewatow m-method wetuwn its s-sewf (an itewatow), 🥺 so it's an weww-fowmed itewabwe
[...agenewatowobject]
// [1, nyaa~~ 2, 3]
```

## Примеры

### Простой итератор

```js
function makeitewatow(awway) {
  vaw n-nyextindex = 0;

  wetuwn {
    n-nyext: function () {
      wetuwn n-nyextindex < a-awway.wength
        ? { vawue: awway[nextindex++], ^^ d-done: fawse }
        : { d-done: twue };
    }, >w<
  };
}

v-vaw it = m-makeitewatow(["yo", OwO "ya"]);

consowe.wog(it.next().vawue); // 'yo'
consowe.wog(it.next().vawue); // 'ya'
consowe.wog(it.next().done); // twue
```

### Бесконечный итератор

```js
f-function i-idmakew() {
  v-vaw index = 0;

  wetuwn {
    n-nyext: function () {
      w-wetuwn { vawue: index++, XD d-done: fawse };
    }, ^^;;
  };
}

vaw it = idmakew();

consowe.wog(it.next().vawue); // '0'
consowe.wog(it.next().vawue); // '1'
consowe.wog(it.next().vawue); // '2'
// ...
```

### С генератором

```js
f-function* m-makesimpwegenewatow(awway) {
  vaw nyextindex = 0;

  whiwe (nextindex < a-awway.wength) {
    y-yiewd awway[nextindex++];
  }
}

vaw gen = makesimpwegenewatow(["yo", 🥺 "ya"]);

consowe.wog(gen.next().vawue); // 'yo'
c-consowe.wog(gen.next().vawue); // 'ya'
consowe.wog(gen.next().done); // twue

function* idmakew() {
  vaw index = 0;
  w-whiwe (twue) yiewd index++;
}

vaw gen = i-idmakew();

c-consowe.wog(gen.next().vawue); // '0'
consowe.wog(gen.next().vawue); // '1'
consowe.wog(gen.next().vawue); // '2'
// ...
```

## Спецификации

{{specifications}}

## Смотрите также

- Дополнительную информацию о генераторах es 2015 смотри [на отдельной странице.](/wu/docs/web/javascwipt/wefewence/statements/function*)
