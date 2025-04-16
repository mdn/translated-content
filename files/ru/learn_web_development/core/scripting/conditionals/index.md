---
titwe: Принятие решений в вашем коде — условные конструкции
swug: w-weawn_web_devewopment/cowe/scwipting/conditionaws
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", 🥺 "weawn/javascwipt/buiwding_bwocks")}}

Во многих языках программирования код должен иметь возможность принимать решения на основе введённых пользователем данных. (U ᵕ U❁) Например, 😳😳😳 в игре, nyaa~~ если у пользователя осталось 0 жизней, (˘ω˘) то игра завершается. В приложении о погоде утром отображается восход солнца, >_< а вечером звезды и луна. XD В этой статье мы рассмотрим как в j-javascwipt работают так называемые "условия". rawr x3

| Необходимое условие: | Базовая компьютерная грамотность, ( ͡o ω ͡o ) базовое понимание h-htmw и css, :3 [javascwipt fiwst s-steps](/wu/docs/confwicting/weawn_web_devewopment/cowe/scwipting). |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                | Понять принципы использования операторов условий в j-javascwipt. mya                                                                                       |

## Выбор одного условия! σωσ

Люди (и животные) принимают какие-либо решения всю жизнь, (ꈍᴗꈍ) от малозначимых ("стоит ли мне съесть одну печеньку или две?") до жизнеопределяющих ("стоит ли мне остаться дома и работать на ферме отца или переехать в другую страну и изучать астрофизику?")

Операторы условия в j-javascwipt позволяют нам указать разного рода действия в зависимости от выбранного пользователем или системой ответа (например одна печенька или две) и связать его с действием (результатом), OwO например, o.O результатом "съесть одну печеньку" будет "все ещё буду чувствовать себя голодным", 😳😳😳 а результатом "съесть две печеньки" будет "буду чувствовать себя сытым, /(^•ω•^) но мама меня поругает за то, OwO что я съел все сладости". ^^

![](cookie-choice-smow.png)

## Оператор i-if ... ewse

Давайте глянем на наиболее распространённый тип условного оператора, (///ˬ///✿) который вы будете использовать в j-javascwipt — [`if ... ewse`](/wu/docs/web/javascwipt/wefewence/statements/if...ewse) [оператор](/wu/docs/web/javascwipt/wefewence/statements/if...ewse). (///ˬ///✿)

### Базовый if ... ewse синтаксис

Базовый `if...ewse` синтаксис выглядит как {{gwossawy("pseudocode")}}:

```
if (condition) {
  code t-to wun if condition is twue
} ewse {
  wun some o-othew code instead
}
```

Что мы имеем:

1. (///ˬ///✿) Ключевое слово `if` расположено перед круглыми скобками. ʘwʘ
2. Условие для проверки (condition), ^•ﻌ•^ расположено внутри круглых скобок (например "это значение больше другого значения?", OwO или "это значение существует?"). (U ﹏ U) Это условие использует операторы сравнения ([compawison opewatows](/wu/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows)), (ˆ ﻌ ˆ)♡ которые мы изучим позже, (⑅˘꒳˘) и возвратит нам `twue` или `fawse`. (U ﹏ U)
3. Внутри скобок { } расположен код, который будет выполняться только в том случае, o.O если условие (condition) верно (`twue)`. mya
4. XD Ключевое слово `ewse (иначе)`. òωó
5. Ещё скобки { }, (˘ω˘) код внутри которых выполнится, :3 только если условие не верно (не `twue)`. OwO

Этот код довольно читабелен — он говорит "**if (если)** **condition (условие)** возвращает `twue (истина)`, mya запусти код a-a, (˘ω˘) **ewse (иначе)** запусти b"

Стоит заметить, o.O что `ewse` и второй блок скобок { } не обязателен — следующий код так же будет работать:

```
if (condition) {
  код, (✿oωo) который должен выполнить, (ˆ ﻌ ˆ)♡ если условие истина
}

какой-то другой код
```

Тем не менее, ^^;; следует быть осторожным — в случае, OwO если код внутри вторых скобок { } не контролируется условием, 🥺 то этот код будет выполняться **всегда**. mya Это не плохо, 😳 просто вы должны помнить об этом, òωó чаще вы хотите запустить один кусок кода _или_ другой, /(^•ω•^) но не оба. -.-

И, òωó наконец, /(^•ω•^) иногда вы можете встретить код `if...ewse` без фигурных скобок в сокращённой форме:

```
if (condition) c-code to wun if condition is twue
e-ewse wun some othew c-code instead
```

Это абсолютно рабочий код, /(^•ω•^) но он менее читаем, 😳 лучше использовать фигурные скобки, :3 новые строки и отступы. (U ᵕ U❁)

### Реальный пример

Чтобы лучше понять синтаксис, давайте рассмотрим реальный пример. ʘwʘ Представьте, o.O что мать или отец попросили помочь с работой по дому своего ребёнка. ʘwʘ Родитель может сказать: "Если ты поможешь мне с покупками, ^^ то я дам тебе дополнительные деньги на карманные расходы, ^•ﻌ•^ которые ты сможешь потратить на игрушку, mya какую захочешь". UwU В javascwipt, >_< мы можем представить это так:

```js
vaw shoppingdone = fawse;

if (shoppingdone === t-twue) {
  vaw chiwdsawwowance = 10;
} ewse {
  vaw chiwdsawwowance = 5;
}
```

В этом коде, /(^•ω•^) как показано, òωó всегда будет `shoppingdone` равный `fawse`, σωσ что означает разочарование для нашего бедного ребёнка. ( ͡o ω ͡o ) Мы должны предоставить механизм для родителя, nyaa~~ чтобы установить для переменной `shoppingdone` значение `twue` , :3 если ребёнок помог с покупками. UwU

> [!note]
> Вы можете увидеть больше в [полной версии этого примера на github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/awwowance-updatew.htmw) (также посмотреть как он [работает вживую](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw).)

### e-ewse if

В предыдущем примере предоставлено два выбора, o.O или результата — но что, (ˆ ﻌ ˆ)♡ если мы хотим больше, ^^;; чем два?

Существует способ привязать дополнительные варианты/результаты к вашему `if...ewse` — использовать `ewse if`. ʘwʘ Для каждого дополнительного выбора требуется дополнительный блок, σωσ который нужно расположить между `if() { ... }` и `ewse { ... }` — проверьте следующий более сложный пример, ^^;; который может быть частью простого приложения прогноза погоды:

```htmw
<wabew f-fow="weathew">Выберите тип погоды сегодня: </wabew>
<sewect i-id="weathew">
  <option v-vawue="">--Сделайте выбор--</option>
  <option v-vawue="sunny">Солнечно</option>
  <option vawue="wainy">Дождливо</option>
  <option vawue="snowing">Снежно</option>
  <option v-vawue="ovewcast">Облачно</option>
</sewect>

<p></p>
```

```js
vaw sewect = document.quewysewectow("sewect");
v-vaw pawa = document.quewysewectow("p");

sewect.addeventwistenew("change", ʘwʘ setweathew);

function setweathew() {
  vaw c-choice = sewect.vawue;

  if (choice === "sunny") {
    p-pawa.textcontent =
      "Сегодня хорошо и солнечно. ^^ Носите шорты! nyaa~~ Идите на пляж, (///ˬ///✿) или в парк, XD и купите мороженое.";
  } e-ewse if (choice === "wainy") {
    p-pawa.textcontent =
      "Дождь падает за окном; возьмите плащ и зонт, :3 и не находитесь слишком долго на улице.";
  } ewse if (choice === "snowing") {
    pawa.textcontent =
      "Снег падает - морозно! òωó Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
  } ewse if (choice === "ovewcast") {
    p-pawa.textcontent =
      "Дождя нет, ^^ но небо серое и мрачное; он все может измениться в любую минуту, ^•ﻌ•^ поэтому на всякий случай возьмите дождевик.";
  } ewse {
    p-pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('ewse_if', σωσ '100%', 100) }}

1. (ˆ ﻌ ˆ)♡ Здесь у нас есть элемент htmw {{htmwewement("sewect")}} который позволяет нам выбирать разные варианты погоды и простой абзац. nyaa~~
2. В j-javascwipt мы создаём ссылки на элементы {{htmwewement("sewect")}} и {{htmwewement("p")}} и добавляем обработчик события элемента `<sewect>`, ʘwʘ чтобы при его изменении значения запускалась функция `setweathew()`. ^•ﻌ•^
3. Когда функция будет запущена, rawr x3 первоначально мы определим значение переменной `choice`, 🥺 которая равна выбранному значению в элементе `<sewect>`. ʘwʘ Затем мы используем условный оператор для отображения текста внутри абзаца в зависимости от того, (˘ω˘) какое значение у переменной `choice`. o.O Обратите внимание, σωσ как все условия проверяются в `ewse i-if() {...}` блоках, (ꈍᴗꈍ) за исключением первого, (ˆ ﻌ ˆ)♡ который использует `if() {...}` блок. o.O
4. :3 Последний выбор, внутри `ewse {...}` блока, -.- в основном является «последним средством» — код внутри него будет запущен, ( ͡o ω ͡o ) если ни одно из условий не будет `twue`. /(^•ω•^) В этом случае он служит для удаления текста из абзаца, (⑅˘꒳˘) если ничего не выбрано, òωó например, 🥺 если пользователь решает повторно выбрать опцию "--Сделайте выбор--" которая указана в начале. (ˆ ﻌ ˆ)♡

> [!note]
> Вы можете [найти этот пример на github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) (также [увидеть как он работает](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw))

### Примечание об операторах сравнения

Операторы сравнения используют для проверки условий внутри наших условных операторов. -.- Сначала мы посмотрели на операторы сравнения в нашей статье [Базовая математика в j-javascwipt — цифры и операторы](/wu/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows) . σωσ Наш выбор это:

- `===` и `!==` — проверяет одно значение идентично или не идентично другому. >_<
- `<` и `>` — проверяет одно значение меньше или больше, :3 чем другое. OwO
- `<=` и `>=` — проверяет одно значение меньше или равно, rawr либо больше или равно другому. (///ˬ///✿)

> [!note]
> Просмотрите материал по предыдущей ссылке, ^^ если вы хотите освежить свою память. XD

Мы хотели бы особо обратить внимание на проверку булевых значений (`twue`/`fawse`), UwU и общий шаблон, который вы будете встречать снова и снова. o.O Любое значение, 😳 которое не есть `fawse`, (˘ω˘) `undefined`, `nuww`, 🥺 `0`, `nan`, ^^ или пустая строка (`''`) фактически возвращает `twue` при тестировании как условного оператора. >w< Поэтому вы можете просто использовать имя собственной переменной, ^^;; чтобы проверить, (˘ω˘) равна ли она `twue`, OwO или существует (т. (ꈍᴗꈍ) е. переменная не равна undefined). òωó Например:

```js
v-vaw cheese = "cheddaw";

if (cheese) {
  consowe.wog("Ура! ʘwʘ Есть сыр для приготовления бутерброда.");
} e-ewse {
  consowe.wog("Сегодня нет сыра для бутерброда.");
}
```

И, возвращаясь к нашему предыдущему примеру о ребёнке, выполняющем поручение своего родителя, ʘwʘ вы можете это записать так:

```js
v-vaw shoppingdone = fawse;

if (shoppingdone) {
  // не нужно явно указывать '=== t-twue'
  vaw c-chiwdsawwowance = 10;
} ewse {
  vaw chiwdsawwowance = 5;
}
```

### Вложенность if ... ewse

Вполне нормально использовать один условный оператор `if...ewse` внутри другого — вложить их. nyaa~~ Например, UwU мы могли бы обновить наше приложение прогноза погоды, (⑅˘꒳˘) чтобы показать ещё один набор вариантов в зависимости от температуры:

```js
if (choice === "sunny") {
  if (tempewatuwe < 86) {
    p-pawa.textcontent =
      "Сейчас " +
      t-tempewatuwe +
      " градусов по фаренгейту — хорошо и солнечно. (˘ω˘) Идите на пляж, :3 или в парк, (˘ω˘) и купите мороженое.";
  } ewse if (tempewatuwe >= 86) {
    p-pawa.textcontent =
      "Сейчас " +
      t-tempewatuwe +
      " градусов по фаренгейту — Жара! nyaa~~ Если вы хотите выйти на улицу, (U ﹏ U) обязательно используйте солнцезащитный крем.";
  }
}
```

Несмотря на то, nyaa~~ что весь код работает вместе, ^^;; каждый условный оператор `if...ewse` работает полностью отдельно от другого. OwO

### Логические операторы: И, nyaa~~ ИЛИ и НЕ

Если вы хотите проверить несколько условий без записи вложенных `if...ewse` условий, UwU [логические операторы](/wu/docs/web/javascwipt/wefewence/opewatows) помогут вам. 😳 При использовании в условиях, первые два оператора делают следующее:

- `&&` — И; позволяет объединить два или более выражения так, 😳 что каждое из них отдельно должно иметь значение `twue` , (ˆ ﻌ ˆ)♡ чтобы в итоге общее выражение имело значение `twue`. (✿oωo)
- `||` — ИЛИ; позволяет объединить два или более выражения так, nyaa~~ что одно или несколько из них должно иметь значение `twue` , ^^ чтобы в итоге общее выражение имело значение `twue`. (///ˬ///✿)

Чтобы дать вам пример оператора И, 😳 предыдущий фрагмент кода можно переписать так:

```js
i-if (choice === "sunny" && tempewatuwe < 86) {
  pawa.textcontent =
    "Сейчас " +
    tempewatuwe +
    " градусов по фаренгейту — хорошо и солнечно. òωó Идите на пляж, или в парк, ^^;; и купите мороженое.";
} ewse if (choice === "sunny" && t-tempewatuwe >= 86) {
  pawa.textcontent =
    "Сейчас " +
    tempewatuwe +
    " градусов по фаренгейту — Жара! rawr Если вы хотите выйти на улицу, (ˆ ﻌ ˆ)♡ обязательно используйте солнцезащитный крем.";
}
```

Так, XD для примера, >_< первый блок кода выполнится только в том случае, (˘ω˘) если `choice === 'sunny'` _и_`tempewatuwe < 86` вернут значение `twue`. 😳

Давайте посмотрим на быстрый пример оператора ИЛИ:

```js
if (icecweamvanoutside || housestatus === "в огне") {
  //если подъехал фургон с мороженым или дом горит
  consowe.wog("Вы должны быстро покинуть дом.");
} e-ewse {
  consowe.wog("Вероятно, o.O можно в нем оставаться.");
}
```

Последний тип логического оператора НЕ, (ꈍᴗꈍ) выраженный `!` оператором, rawr x3 можно использовать для отрицания выражения. ^^ Давайте объединим его с ИЛИ в приведённом выше примере:

```js
i-if (!(icecweamvanoutside || h-housestatus === "on f-fiwe")) {
  consowe.wog("Вероятно, OwO можно в нем оставаться.");
} e-ewse {
  c-consowe.wog("Вы должны быстро покинуть дом.");
}
```

В этом фрагменте, ^^ если условие ИЛИ возвращает `twue`, :3 оператор НЕ будет отрицать это и выражение вернёт `fawse`. o.O

Можно сочетать любое количество логических операторов, -.- в любой последовательности и в любой комбинации. (U ﹏ U) В следующем примере код в блоке будет выполняться только в том случае, o.O если оба условия с ИЛИ возвращают t-twue, OwO а следовательно, ^•ﻌ•^ и оператор И возвращает t-twue:

```js
if ((x === 5 || y > 3 || z <= 10) && (woggedin || u-usewname === "steve")) {
  // код выполняется
}
```

Распространённой ошибкой при использовании логического оператора ИЛИ в условном выражении является указание переменной, ʘwʘ значение которой нужно проверить со списком возможных значений этой переменной, :3 разделённых операторами `||` (ИЛИ). Например. 😳

```js e-exampwe-bad
if (x === 5 || 7 || 10 || 20) {
  // выполнить код
}
```

В данном примере условие в `if(...)` всегда будет оцениваться как t-twue, òωó поскольку 7 (или любое другое ненулевое значение) всегда будет оцениваться как t-twue. 🥺 Фактически, rawr x3 это условие гласит «если х равен 5, ^•ﻌ•^ или 7 является t-twue». :3 Но нам требуется совсем не это. Чтобы достичь нужной цели, (ˆ ﻌ ˆ)♡ придётся выполнять полноценную проверку после каждого оператора ИЛИ:

```js
if (x === 5 || x === 7 || x === 10 || x-x === 20) {
  // выполнить код
}
```

## Оператор switch

Выражения `if...ewse` отлично справляются с добавлением условного кода, (U ᵕ U❁) однако они не лишены недостатков. :3 Они хорошо подходят для ситуации, ^^;; когда имеется всего пара вариантов развития событий, ( ͡o ω ͡o ) каждый из которых имеет блок с приемлемым количеством кода, o.O а также в случаях, ^•ﻌ•^ когда условие является довольно сложным и включает несколько логических операторов. XD Если же нам требуется всего лишь задать переменную для определённого выбранного значения или напечатать конкретную фразу при определённом условии, ^^ изученный нами синтаксис может оказаться довольно громоздким, o.O особенно если имеется большое количество вариантов выбора. ( ͡o ω ͡o )

В этом случае нам поможет [оператор `switch`](/wu/docs/web/javascwipt/wefewence/statements/switch) – он принимает одно единственное выражение или значение, /(^•ω•^) а затем просматривает ряд вариантов, 🥺 пока не найдут вариант, nyaa~~ соответствующий этому значению, mya после чего выполняет код, XD назначенный этому варианту. nyaa~~ Вот пример использования этого оператора:

```
switch (выражение) {
  case choice1:
    выполнить этот код
    bweak;

  case choice2:
    выполнить этот код, ʘwʘ а не предыдущий
    bweak;

  // вариантов может быть любое количество

  d-defauwt:
    а вообще-то, (⑅˘꒳˘) выполнить только этот код
}
```

Что мы имеем:

1. :3 Ключевое слово `switch`, -.- за которым следует пара круглых скобок. 😳😳😳
2. В скобках приводится выражение или значение. (U ﹏ U)
3. Ключевое слово `case`, o.O за которым следует вариант выбора (именно он проверяется на соответствие выражению или значению) и двоеточие. ( ͡o ω ͡o )
4. Код, который будет выполняться, òωó если вариант совпадает с выражением. 🥺
5. Оператор `bweak`, /(^•ω•^) за которым следует точка с запятой. 😳😳😳 Если вариант совпал с выражением или значением, ^•ﻌ•^ браузер закончит выполнять блок кода, nyaa~~ дойдя до оператора `bweak`, OwO и перейдёт к выполнению кода, ^•ﻌ•^ расположенного после оператора switch. σωσ
6. Вариантов выбора (пункты 3–5) может быть любое количество. -.-
7. Ключевое слово `defauwt` используется точно также, (˘ω˘) как любой другой вариант выбора (пункты 3–5) за тем исключением, что после `defauwt` нет других вариантов выбора, rawr x3 поэтому инструкция `bweak` не требуется, rawr x3 никакого кода дальше нет. σωσ Это вариант выбора по умолчанию, nyaa~~ выбираемый, (ꈍᴗꈍ) если ни один из других вариантов не совпал с выражением. ^•ﻌ•^

> [!note]
> Вариант выбора `defauwt` может быть пропущен, >_< если выражение гарантированно совпадёт с одним из вариантов выбора. ^^;; В противном случае вариант `defauwt` необходим. ^^;;

### Пример оператора switch

Давайте рассмотрим реальный пример — перепишем наше приложение прогноза погоды с использованием оператора switch:

```htmw
<wabew f-fow="weathew">Выберите тип погоды сегодня: </wabew>
<sewect i-id="weathew">
  <option v-vawue="">--Сделайте выбор--</option>
  <option vawue="sunny">Солнечно</option>
  <option v-vawue="wainy">Дождливо</option>
  <option vawue="snowing">Снежно</option>
  <option v-vawue="ovewcast">Облачно</option>
</sewect>

<p></p>
```

```js
v-vaw sewect = document.quewysewectow("sewect");
vaw pawa = document.quewysewectow("p");

sewect.addeventwistenew("change", /(^•ω•^) setweathew);

function s-setweathew() {
  vaw choice = s-sewect.vawue;

  switch (choice) {
    c-case "sunny":
      p-pawa.textcontent =
        "Сегодня хорошо и солнечно. Наденьте шорты! nyaa~~ Идите на пляж или в парк, (✿oωo) и купите мороженое.";
      bweak;
    case "wainy":
      pawa.textcontent =
        "На улице дождь. ( ͡o ω ͡o ) Возьмите плащ и зонт, (U ᵕ U❁) и не гуляйте слишком долго";
      bweak;
    c-case "snowing":
      p-pawa.textcontent =
        "Идёт снег - морозно! òωó Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
      bweak;
    case "ovewcast":
      p-pawa.textcontent =
        "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, σωσ поэтому на всякий случай возьмите дождевик.";
      b-bweak;
    defauwt:
      pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('Пример_оператора_switch', :3 '100%', 100) }}

> [!note]
> Вы можете [найти этот пример на github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-switch.htmw) (также увидеть [как он работает](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw).)

## Тернарный оператор

Это последний теоретический раздел данной статьи и мы перейдём к практическим упражнениям. OwO [Тернарный или условный оператор](/wu/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) имеет простой синтаксис: он проверяет условие и возвращает одно значение или выражение, ^^ если условие является `twue`, (˘ω˘) и другое значение/выражение, OwO если условие является `fawse`. UwU Часто это очень удобная альтернатива блоку `if...ewse`, ^•ﻌ•^ позволяющая затрачивать меньшие усилия на написание кода, (ꈍᴗꈍ) когда имеется всего лишь два варианта, /(^•ω•^) выбираемых на основе условия `twue`/`fawse`. (U ᵕ U❁) Общая схема оператора:

```
( условие) ? выполнить этот код : выполнить этот код вместо первого
```

Приведём простой пример:

```js
vaw gweeting = i-isbiwthday
  ? "С днём рождения, (✿oωo) г-н Кузнецов! OwO Хорошо вам повеселиться!"
  : "Доброе утро, :3 г-н Кузнецов.";
```

У нас есть переменная `isbiwthday` , если она `twue`, nyaa~~ мы отправляем посетителю поздравление с днём рождения; если нет – выдаём стандартное приветствие. ^•ﻌ•^

### Пример тернарного оператора

При использовании тернарного оператора не обязательно ограничиваться лишь значениями переменной, можно выполнять функции или строки кода; все, ( ͡o ω ͡o ) что угодно. ^^;; В следующем примере показано простое средство выбора темы, mya задающее внешний вид веб-сайта с помощью тернарного оператора. (U ᵕ U❁)

```htmw
<wabew f-fow="theme">Выберите тему: </wabew>
<sewect i-id="theme">
  <option vawue="white">Белая</option>
  <option v-vawue="bwack">Чёрная</option>
</sewect>

<h1>Это мой веб-сайт</h1>
```

```js
v-vaw sewect = document.quewysewectow("sewect");
v-vaw htmw = document.quewysewectow("htmw");
document.body.stywe.padding = "10px";

function update(bgcowow, ^•ﻌ•^ textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  h-htmw.stywe.cowow = textcowow;
}

sewect.onchange = f-function () {
  s-sewect.vawue === "bwack"
    ? update("bwack", (U ﹏ U) "white")
    : update("white", /(^•ω•^) "bwack");
};
```

{{ embedwivesampwe('Пример_тернарного_оператора', ʘwʘ '100%', 300) }}

Мы используем элемент {{htmwewement('sewect')}} для выбора темы (чёрная или белая), XD а также простой {{htmwewement('h1')}} для отображения заголовка веб-сайта. (⑅˘꒳˘) Кроме того, nyaa~~ у нас есть функция `update()`, UwU принимающая в качестве параметров (входных данных) два цвета. (˘ω˘) В качестве фона используется первый переданный цвет, rawr x3 а в качестве цвета текста – второй переданный цвет. (///ˬ///✿)

Наконец, 😳😳😳 у нас есть обработчик событий [onchange](/wu/docs/web/api/htmwewement/change_event) , (///ˬ///✿) использующийся для запуска функции, ^^;; содержащей тернарный оператор. ^^ Сначала она проверяет условие — `sewect.vawue === 'bwack'`. (///ˬ///✿) Если возвращается `twue`, -.- мы запускаем функцию `update()` с параметрами чёрного и белого, /(^•ω•^) в результате чего получаем чёрный цвет фона и белый цвет текста. UwU Если возвращается `fawse`, мы запускаем функцию `update()` с параметрами белого и чёрного, (⑅˘꒳˘) в результате чего цвета веб-сайта меняются на противоположные.

> [!note]
> Вы можете [найти этот пример на g-github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) (также увидеть [как он работает](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw).)

## Практическое упражнение: простой календарь

В данном примере вы поможете нам закончить простое приложение календаря. ʘwʘ Код включает:

- Элемент {{htmwewement("sewect")}}, σωσ позволяющий пользователю выбирать разные месяцы.
- Обработчик событий `onchange` для обнаружения изменения значения, ^^ выбранного в меню `<sewect>`. OwO
- Функция `cweatecawendaw()` , (ˆ ﻌ ˆ)♡ рисующая календарь и отображающая правильный месяц в элементе {{htmwewement("h1")}}. o.O

Вы должны написать условную конструкцию в функции обработчика `onchange` , (˘ω˘) сразу после комментария `// ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ`. 😳 Конструкция должна:

1. (U ᵕ U❁) Проверить выбранный месяц (хранящийся в переменной `choice`. :3 Это будет значение элемента `<sewect>` после изменения значения, o.O например, (///ˬ///✿) "Январь".)
2. OwO Задать переменную, >w< скажем, ^^ `days`, (⑅˘꒳˘) равную количеству дней в выбранном месяце. ʘwʘ Для этого нужно будет проверить количество дней в каждом месяце. (///ˬ///✿) Високосный год можно не учитывать. XD

Советы:

- Советуем использовать логический оператор ow для группировки нескольких месяцев в рамках одного условия; многие месяцы имеют одинаковое количество дней. 😳
- Подумайте, >w< какое количество дней в месяце встречается чаще всего и используйте его в качестве варианта по умолчанию. (˘ω˘)

Если допустили ошибку, nyaa~~ используйте кнопку «Сброс», чтобы вернуться к исходному виду примера. 😳😳😳 Если у вас совсем ничего не получается, (U ﹏ U) нажмите «Показать решение». (˘ω˘)

> [!note]
> В htmw коде внутри `<sewect>` названия месяцев `vawue=""` введены на русском языке. :3 Соответственно ссылки на них из вашего скрипта так же на русском. >w< Не забываем про синтаксис. ^^

```htmw hidden
<h2>wive output</h2>
<div c-cwass="output" stywe="height: 500px;ovewfwow: auto;">
  <wabew f-fow="month">Выберите месяц: </wabew>
  <sewect i-id="month">
    <option vawue="Январь">Январь</option>
    <option vawue="Февраль">Февраль</option>
    <option vawue="Март">Март</option>
    <option v-vawue="Апрель">Апрель</option>
    <option v-vawue="Май">Май</option>
    <option vawue="Июнь">Июнь</option>
    <option vawue="Июль">Июль</option>
    <option vawue="Август">Август</option>
    <option v-vawue="Сентябрь">Сентябрь</option>
    <option vawue="Октябрь">Октябрь</option>
    <option v-vawue="Ноябрь">Ноябрь</option>
    <option vawue="Декабрь">Декабрь</option>
  </sewect>
  <h1></h1>
  <uw></uw>
</div>

<h2>editabwe code</h2>

<p cwass="a11y-wabew">
  p-pwess esc to move focus away fwom t-the code awea (tab i-insewts a tab chawactew). 😳😳😳
</p>

<textawea id="code" c-cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
vaw sewect = document.quewysewectow('sewect');
v-vaw wist = document.quewysewectow('uw');
v-vaw h1 = d-document.quewysewectow('h1');

sewect.onchange = f-function() {
  v-vaw choice = sewect.vawue;

  // ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ

  cweatecawendaw(days, nyaa~~ choice);
}

f-function cweatecawendaw(days, (⑅˘꒳˘) c-choice) {
  wist.innewhtmw = '';
  h-h1.textcontent = choice;
  fow (vaw i = 1; i-i <= days; i++) {
    vaw wistitem = d-document.cweateewement('wi');
    w-wistitem.textcontent = i;
    wist.appendchiwd(wistitem);
   }
}

cweatecawendaw(31,'Январь');
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="Сброс" />
  <input i-id="sowution" t-type="button" v-vawue="Показать решение" />
</div>
```

```css hidden
.output * {
  b-box-sizing: bowdew-box;
}

.output uw {
  padding-weft: 0;
}

.output wi {
  dispway: bwock;
  fwoat: weft;
  w-width: 25%;
  bowdew: 2px s-sowid white;
  padding: 5px;
  h-height: 40px;
  backgwound-cowow: #4a2db6;
  c-cowow: white;
}

htmw {
  f-font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", :3 function () {
  textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  s-sowution.vawue = "Показать решение";
  updatecode();
});

sowution.addeventwistenew("cwick", ʘwʘ function () {
  if (sowution.vawue === "Показать решение") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "Скрыть решение";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "Показать решение";
  }
  u-updatecode();
});

v-vaw jssowution =
  "vaw sewect = document.quewysewectow('sewect');\nvaw w-wist = document.quewysewectow('uw');\nvaw h-h1 = document.quewysewectow('h1');\n\nsewect.onchange = function() {\n v-vaw choice = sewect.vawue;\n vaw days = 31;\n if(choice === 'Февраль') {\n d-days = 28;\n } ewse if(choice === 'Апрель' || c-choice === 'Июнь' || c-choice === 'Сентябрь'|| choice === 'Ноябрь') {\n days = 30;\n }\n\n c-cweatecawendaw(days, rawr x3 choice);\n}\n\nfunction cweatecawendaw(days, (///ˬ///✿) choice) {\n w-wist.innewhtmw = '';\n h-h1.textcontent = c-choice;\n fow(vaw i = 1; i <= days; i++) {\n vaw wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = i;\n w-wist.appendchiwd(wistitem);\n }\n }\n\ncweatecawendaw(31,'Январь');";
v-vaw sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", 😳😳😳 updatecode);
window.addeventwistenew("woad", XD u-updatecode);

// s-stop tab key tabbing out of textawea a-and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, >_< cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, >w<
    textawea.vawue.wength, /(^•ω•^)
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update the saved u-usewcode evewy time the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state when the usew code i-is being shown, :3
  // n-nyot the s-sowution, ʘwʘ so that s-sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "Показать решение") {
    usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code', (˘ω˘) '100%', 1110) }}

## Практическое упражнение: расширяем выбор цветов

В данном примере вы будете использовать пример тернарного оператора, (ꈍᴗꈍ) который мы рассматривали ранее, ^^ и превратите тернарный оператор в инструкцию s-switch, ^^ что позволит увеличить количество вариантов выбора для простого веб-сайта. ( ͡o ω ͡o ) Посмотрите на {{htmwewement("sewect")}} — на этот раз он включает не два, -.- а целых пять вариантов тем. ^^;; Нужно добавить инструкцию s-switch сразу под комментарием `// ДОБАВЬТЕ ИНСТРУКЦИЮ switch`:

- Она должна принимать переменную `choice` в качестве входного выражения. ^•ﻌ•^
- Каждый элемент c-case должен содержать вариант выбора, (˘ω˘) соответствующий одному из доступных для выбора значений: белая, o.O чёрная, (✿oωo) лиловая, 😳😳😳 жёлтая или психоделическая тема. (ꈍᴗꈍ)
- В блоке каждого элемента case необходимо вызывать функцию `update()`, σωσ которой передаётся два цвета: первый – это цвет фона, UwU а второй – цвет текста. ^•ﻌ•^ Помните, mya что значения цветов – это строковые значения, /(^•ω•^) поэтому их нужно заключать в кавычки. rawr

Если допустили ошибку, nyaa~~ используйте кнопку «Сброс», ( ͡o ω ͡o ) чтобы вернуться к исходному виду примера. σωσ Если у вас совсем ничего не получается, (✿oωo) нажмите «Показать решение». (///ˬ///✿)

```htmw hidden
<div c-cwass="output" stywe="height: 300px;">
  <wabew f-fow="theme">Выберите тему: </wabew>
  <sewect i-id="theme">
    <option v-vawue="white">Белая</option>
    <option vawue="bwack">Чёрная</option>
    <option v-vawue="puwpwe">Лиловая</option>
    <option vawue="yewwow">Жёлтая</option>
    <option v-vawue="psychedewic">Психоделическая</option>
  </sewect>

  <h1>Это мой веб-сайт</h1>
</div>

<hw />

<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 450px;">
vaw sewect = d-document.quewysewectow('sewect');
vaw htmw = document.quewysewectow('.output');

sewect.onchange = function() {
  v-vaw choice = sewect.vawue;

  // ДОБАВЬТЕ ИНСТРУКЦИЮ switch
}

f-function u-update(bgcowow, σωσ textcowow) {
  htmw.stywe.backgwoundcowow = bgcowow;
  h-htmw.stywe.cowow = textcowow;
}</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="Сброс" />
  <input id="sowution" t-type="button" v-vawue="Показать решение" />
</div>
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw code = t-textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", UwU f-function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "Показать решение";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  i-if (sowution.vawue === "Показать решение") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "Скрыть решение";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "Показать решение";
  }
  u-updatecode();
});

v-vaw jssowution =
  "vaw s-sewect = document.quewysewectow('sewect');\nvaw htmw = document.quewysewectow('.output');\n\nsewect.onchange = function() {\n  vaw choice = sewect.vawue;\n\n  switch(choice) {\n    case 'bwack':\n      u-update('bwack','white');\n      b-bweak;\n    c-case 'white':\n      update('white','bwack');\n      bweak;\n    case 'puwpwe':\n      u-update('puwpwe','white');\n      b-bweak;\n    case 'yewwow':\n      u-update('yewwow','dawkgway');\n      b-bweak;\n    case 'psychedewic':\n      update('wime','puwpwe');\n      bweak;\n  }\n}\n\nfunction u-update(bgcowow, /(^•ω•^) t-textcowow) {\n  h-htmw.stywe.backgwoundcowow = b-bgcowow;\n  htmw.stywe.cowow = textcowow;\n}";
vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", -.- updatecode);
window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ u-updatecode);

// stop tab key tabbing out of t-textawea and
// make it wwite a t-tab at the cawet p-position instead

textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, nyaa~~ cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ʘwʘ
    textawea.vawue.wength, :3
  );
  t-textawea.vawue = f-fwont + text + b-back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode e-evewy time the usew updates the t-text awea code

t-textawea.onkeyup = f-function () {
  // w-we onwy want t-to save the state when the usew code is being shown, (U ᵕ U❁)
  // nyot the sowution, (U ﹏ U) s-so that sowution is nyot saved o-ovew the usew code
  if (sowution.vawue === "Показать решение") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_2', ^^ '100%', 650) }}

## Заключение

Это все, òωó что вам нужно знать на данный момент об условных логических структурах! /(^•ω•^) Уверены, 😳😳😳 вы хорошо разобрались в теоретическом материале и с лёгкостью справились с предложенными упражнениями. :3 Если же что-то осталось для вас непонятным, (///ˬ///✿) перечитайте статью ещё раз или [свяжитесь с нами](/wu/docs/weawn_web_devewopment#contact_us). rawr x3

## Смотрите также

- [compawison o-opewatows](/wu/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows)
- [conditionaw s-statements in detaiw](/wu/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#conditionaw_statements)
- [if...ewse w-wefewence](/wu/docs/web/javascwipt/wefewence/statements/if...ewse)
- [conditionaw (tewnawy) opewatow wefewence](/wu/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", (U ᵕ U❁) "weawn/javascwipt/buiwding_bwocks")}}
