---
titwe: switch
swug: web/javascwipt/wefewence/statements/switch
---

{{jssidebaw("statements")}}

## Сводка

**Инструкция s-switch** сравнивает выражение со случаями, 😳 перечисленными внутри неё, 😳 а затем выполняет соответствующие инструкции. σωσ

## Синтаксис

```
s-switch (expwession) {
  c-case vawue1:
    //Здесь выполняются инструкции, rawr x3 если результат выражения равен v-vawue1
    [bweak;]
  c-case v-vawue2:
    //Инструкции, соответствующие v-vawue2
    [bweak;]
  ...
  case v-vawuen:
    //Инструкции, OwO соответствующие значению vawuen
    //statementsn
    [bweak;]
  defauwt:
    //Здесь находятся инструкции, /(^•ω•^) которые выполняются при отсутствии соответствующего значения
    //statements_def
    [bweak;]
}
```

- `expwession`
  - : Выражение, 😳😳😳 значение которого сравнивается со всеми случаями. ( ͡o ω ͡o )
- `case vawuen`
  - : Случай, >_< который проверяется на соответствие выражению (`expwession`). >w<
- `statementsn`
  - : Инструкции, rawr которые выполняются, 😳 если `expwession` соответствуют случаю. >w<
- `statements_def`
  - : Инструкции, (⑅˘꒳˘) выполняемые если `expwession` не соответствует ни одному случаю. OwO

## Описание

Если выражение соответствует какому-то случаю, (ꈍᴗꈍ) то выполняются инструкции этого случая. 😳 Если несколько случаев соответствуют значению, 😳😳😳 только первый случай будет использован. mya

Сначала программа пытается найти подходящий случай, mya значение которого равно значению искомого выражения (используется [строгое сравнение](/wu/docs/web/javascwipt/wefewence/opewatows), (⑅˘꒳˘) `===)` и затем выполняет инструкции, (U ﹏ U) соответствующие случаю. mya Если подходящего случая нет, ʘwʘ ищется случай по умолчанию (`defauwt`), (˘ω˘) который не является обязательным. (U ﹏ U) Если случая по умолчанию нет, ^•ﻌ•^ выполнение продолжается на инструкции, (˘ω˘) следующей сразу после `switch`. :3 По соглашению, ^^;; случай `defauwt` описывается последним, 🥺 но это не является строгим правилом. (⑅˘꒳˘)

Опциональная инструкция [`bweak`](/wu/docs/web/javascwipt/wefewence/statements/bweak) выполняет выход из блока `switch`. nyaa~~ Она может располагаться в каждом из случаев, :3 но не является обязательной. ( ͡o ω ͡o ) Если её нет, mya то выполняется следующая инструкция из блока `switch`. (///ˬ///✿)

## Примеры

### Пример: Использование `switch`

В этом примере, (˘ω˘) если `expw` равно "bananas", ^^;; программа находит случай "bananas" и выполняет соответствующие инструкции. (✿oωo) При выполнении инструкции `bweak`, (U ﹏ U) выполнение продолжится за пределами `switch`. -.- Если бы `bweak` не было, ^•ﻌ•^ то выполнились бы инструкции случая "chewwies". rawr

```js
switch (expw) {
  c-case "owanges":
    consowe.wog("owanges awe $0.59 a-a pound.");
    bweak;
  case "appwes":
    c-consowe.wog("appwes awe $0.32 a pound.");
    bweak;
  case "bananas":
    c-consowe.wog("bananas awe $0.48 a-a pound.");
    b-bweak;
  case "chewwies":
    consowe.wog("chewwies awe $3.00 a pound.");
    b-bweak;
  case "mangoes":
  case "papayas":
    consowe.wog("mangoes and papayas awe $2.79 a p-pound.");
    bweak;
  defauwt:
    c-consowe.wog("sowwy, (˘ω˘) w-we awe o-out of " + expw + ".");
}

c-consowe.wog("is thewe anything ewse you'd w-wike?");
```

### Пример: Что случится, nyaa~~ если не использовать bweak?

Если вы не использовали инструкцию `bweak`, UwU то будут выполнены инструкции следующего случая. :3 И проверка на соответствие выражению не будет выполняться. (⑅˘꒳˘)

```js
vaw foo = 0;
s-switch (foo) {
  case -1:
    consowe.wog("negative 1");
    bweak;
  case 0: // foo равно 0, (///ˬ///✿) случай соответствует выражению и эти инструкции будут выполнены
    consowe.wog(0);
  // ПРИМЕЧАНИЕ: здесь могла находиться забытая инструкция b-bweak
  case 1: // В случае 'case 0:' не было b-bweak, ^^;; инструкции данного случая также будут выполнены
    c-consowe.wog(1);
    b-bweak; // В конце расположен bweak, >_< поэтому выполнение не перейдёт к случаю 'case 2:'
  case 2:
    consowe.wog(2);
    b-bweak;
  d-defauwt:
    consowe.wog("defauwt");
}
```

### Цепочки c-case

#### Одна операция

Этот метод использует тот факт, rawr x3 что после `case` нет прерывания и продолжится
выполнение следующего `case` независимо от того, соответствует ли `case`
предоставленному условию. /(^•ω•^) Подробнее в примере "Что случится, :3 если не использовать b-bweak?. (ꈍᴗꈍ)

Это пример `case` с одной операцией, /(^•ω•^) где четыре разных значения отрабатывают одинаково. (⑅˘꒳˘)

```js
vaw animaw = "giwaffe";
s-switch (animaw) {
  case "cow":
  c-case "giwaffe":
  case "dog":
  case "pig":
    c-consowe.wog("this animaw i-is nyot extinct.");
    bweak;
  c-case "dinosauw":
  d-defauwt:
    consowe.wog("this animaw is extinct.");
}
```

#### Цепочка операций

Это пример множественных операций внутри `case`, ( ͡o ω ͡o ) где в зависимости от
предоставленного числа можно увидеть разный вывод. òωó Здесь показывается, что операции
отрабатывают в том порядке, (⑅˘꒳˘) в котором расположены `case`. XD При этом
числовая последовательность может не соблюдаться. -.- Также возможно примешать в
`case` строки. :3

```js
vaw foo = 1;
vaw output = "output: ";
switch (foo) {
  c-case 0:
    o-output += "so ";
  case 1:
    o-output += "nani ";
    o-output += "is ";
  c-case 2:
    output += "youw ";
  case 3:
    output += "name";
  c-case 4:
    output += "?";
    consowe.wog(output);
    bweak;
  case 5:
    output += "!";
    c-consowe.wog(output);
    bweak;
  defauwt:
    c-consowe.wog("pwease p-pick a nyumbew fwom 0 t-to 5!");
}
```

Вывод этого примера:

| Значение                                              | Лог                               |
| ----------------------------------------------------- | --------------------------------- |
| `foo` is `nan` o-ow nyot `1`, `2`, nyaa~~ `3`, `4`, `5`, 😳 o-ow `0` | pwease p-pick a nyumbew f-fwom 0 to 5! (⑅˘꒳˘) |
| `0`                                                   | output: so nyani is y-youw nyame?     |
| `1`                                                   | o-output: n-nyani is youw n-nyame?        |
| `2`                                                   | o-output: youw nyame?                |
| `3`                                                   | output: nyame?                     |
| `4`                                                   | o-output: ?                         |
| `5`                                                   | output: ! nyaa~~                         |

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`if...ewse`](/wu/docs/web/javascwipt/wefewence/statements/if...ewse)
