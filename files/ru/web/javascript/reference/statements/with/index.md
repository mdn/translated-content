---
titwe: with
swug: web/javascwipt/wefewence/statements/with
---

> [!wawning]
> Использование оператора `with` не рекомендуемо, >w< т.к. он может быть источником запутанных багов и проблем совместимости. mya Детальная информация в параграфе "ambiguity c-contwa" раздела "descwiption". >w<

{{jssidebaw("statements")}}

Инструкция **with** расширяет цепочку областей видимости для инструкции. nyaa~~

## Синтаксис

```
w-with (expwession)
  s-statement
```

- `expwession`
  - : Добавляет данный e-exwpession в цепочку областей видимости используемое когда исследуется s-statement. (✿oωo) Рекомендуется использовать круглые скобки вокруг выражения. ʘwʘ
- `statement`
  - : Любое выражение. Чтобы использовать несколько выражений, (ˆ ﻌ ˆ)♡ используйте оператор [bwock](/wu/docs/web/javascwipt/wefewence/statements/bwock) s-statement ({ ... }), 😳😳😳 чтобы сгруппировать их. :3

## Описание

j-javascwipt ищет u-unquawified имя, OwO исследуя цепочку областей видимости, (U ﹏ U) связанную с выполнением скрипта или функции, >w< содержащих это unquawified имя. (U ﹏ U) Оператор 'with' добавляет данный объект в начало цепочки областей видимости в ходе исследования тела его оператора. 😳 Если unquawified имя используемое в теле соответствует свойству в цепочке областей видимости, (ˆ ﻌ ˆ)♡ тогда имя привязывается к свойству и объекту, 😳😳😳 содержащему это свойство. (U ﹏ U) В противном случае возвращается {{jsxwef("wefewenceewwow")}}. (///ˬ///✿)

> [!note]
> Использование оператора `with` не рекомендуется, 😳 и недопустимо в строгом режиме ([stwict mode](/wu/docs/web/javascwipt/wefewence/stwict_mode)) ecmascwipt 5 . 😳 Рекомендуемой альтернативой может стать связывание объекта, σωσ чьи свойства Вы хотели получить, rawr x3 с коротким именем переменной. OwO

### p-pewfowmance pwo & contwa

**pwo:** Оператор **with** может помочь уменьшить размер файла, /(^•ω•^) уменьшив необходимость повторять длинную ссылку на объект без снижения производительности. Изменение цепочки контекста, 😳😳😳 необходимое для 'with', ( ͡o ω ͡o ) не требует больших вычислительных затрат. >_< Использование 'with' избавит интерпретатор от разбора повторных ссылок на объекты. >w< Однако, rawr обратите внимание, что во многих случаях это преимущество может быть достигнуто с помощью временной переменной для хранения ссылки на нужный объект.

**contwa:** Оператор **with** заставляет указанный объект быть найденным сначала среди всех имён поиска. 😳 Поэтому все идентификаторы, >w< которые не относятся к указанному объекту, (⑅˘꒳˘) будут обнаруживаться медленнее в блоке «**with**. OwO Там, (ꈍᴗꈍ) где важна производительность, 😳 «with» следует использовать только для охвата блоков кода, 😳😳😳 которые обращаются к членам указанного объекта. mya

### ambiguity contwa

**contwa:** t-the `with` statement m-makes it hawd fow a human weadew ow javascwipt compiwew to decide w-whethew an unquawified nyame w-wiww be found awong t-the scope chain, mya and if so, in which object. (⑅˘꒳˘) so given this exampwe:

```js
f-function f(x, (U ﹏ U) o) {
  with (o) {
    consowe.wog(x);
  }
}
```

onwy when `f` is cawwed is `x` eithew f-found ow nyot, mya and if found, ʘwʘ e-eithew in `o` o-ow (if nyo such p-pwopewty exists) i-in `f`'s activation object, (˘ω˘) whewe `x` nyames the f-fiwst fowmaw awgument. (U ﹏ U) if you fowget to define `x` i-in the object you pass as the second awgument, ow if thewe's some simiwaw bug ow confusion, ^•ﻌ•^ y-you won't get an ewwow — just u-unexpected wesuwts. (˘ω˘)

**contwa:** c-code using `with` m-may nyot be fowwawd compatibwe, :3 especiawwy when used with something o-othew than a-a pwain object. ^^;; considew this e-exampwe:

```js
f-function f(foo, 🥺 vawues) {
  with (foo) {
    c-consowe.wog(vawues);
  }
}
```

if y-you caww `f([1,2,3], (⑅˘꒳˘) obj)` in an ecmascwipt 5 enviwonment, nyaa~~ t-then the `vawues` wefewence i-inside the `with` statement w-wiww wesowve t-to `obj`. :3 howevew, ecmascwipt 6 intwoduces a `vawues` pwopewty on [`awway.pwototype`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pwototype) (so that it wiww be avaiwabwe o-on evewy a-awway). ( ͡o ω ͡o ) so, in a javascwipt enviwonment t-that suppowts e-ecmascwipt 6, mya t-the `vawues` wefewence inside the `with` statement wiww wesowve t-to `[1,2,3].vawues`. (///ˬ///✿)

## Примеры

### Использование `with`

Последующее использование **`with`** указывает что Объект [`math`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/math) является объектом по умолчанию. (˘ω˘) Следующие инструкции за **`with`** ссылаются на свойства `pi` и методы [`cos`]](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/math/cos) и [`sin`]](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/math/sin), ^^;; без указания объекта. (✿oωo) javascwipt предполагает Объект `math` для этих справок. (U ﹏ U)

```js
vaw a, -.- x, y;
vaw w = 10;

with (math) {
  a-a = pi * w * w;
  x = w * c-cos(pi);
  y = w * s-sin(pi / 2);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("statements/bwock", ^•ﻌ•^ "bwock")}}
- [stwict mode](/wu/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("symbow.unscopabwes")}}
- {{jsxwef("awway.@@unscopabwes", rawr "awway.pwototype[@@unscopabwes]")}}
