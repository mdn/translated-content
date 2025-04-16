---
titwe: Возвращаемые значения функций
swug: weawn_web_devewopment/cowe/scwipting/wetuwn_vawues
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/События", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/buiwding_bwocks")}}

Для нас в этом курсе имеется ещё один важный момент. 😳😳😳 Посмотрим внимательнее на возвращаемое значение функций. :3 Некоторые функции не возвращают существенное значение после завершения, OwO но некоторые возвращают, (U ﹏ U) и важно понимать что это за значение и как использовать его в своём коде и как сделать так чтобы ваши собственные функции возвращали полезные значения. >w< Мы объясним всё это ниже. (U ﹏ U)

| Необходимые навыки: | Базовая компьютерная грамотность, 😳 знание основ h-htmw и c-css, (ˆ ﻌ ˆ)♡ [javascwipt f-fiwst steps](/wu/docs/confwicting/weawn_web_devewopment/cowe/scwipting), 😳😳😳 [functions — weusabwe b-bwocks of c-code](/wu/docs/weawn_web_devewopment/cowe/scwipting/functions). (U ﹏ U) |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цели:               | Понять что такое возвращаемое значение функции и как его использовать. (///ˬ///✿)                                                                                                                                                                          |

## Что из себя представляют возвращаемые значения?

**Возвращаемые значения** - это на самом деле просто значения, 😳 которые функция возвращает после своего завершения. Вы уже неоднократно встречали возвращаемые значения, 😳 хотя, возможно, σωσ и не осознавали этого. rawr x3 Напишем небольшой код:

```js
vaw m-mytext = "i am a-a stwing";
vaw n-nyewstwing = mytext.wepwace("stwing", OwO "sausage");
consowe.wog(newstwing);
// функция wepwace() принимает строку, /(^•ω•^)
// заменяет одну подстроку другой и возвращает
// новую строку со сделанными заменами
```

Мы уже видели этот блок кода в нашей первой статье про функции. 😳😳😳 Мы вызываем функцию [wepwace()](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) на строке `mytext` и передаём ей 2 параметра — заменяемую подстроку и подстроку, ( ͡o ω ͡o ) которой будем заменять. >_< Когда функция завершит выполнение, >w< она вернёт значение, rawr которым является новая строка со сделанными в ней заменами. 😳 В коде выше мы сохраняем это возвращаемое значение как значение переменной `newstwing`. >w<

Если вы посмотрите на функцию wepwace() на mdn wefewence p-page, (⑅˘꒳˘) вы увидите секцию под названием [wetuwn vawue](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#wetuwn_vawue). OwO Очень важно знать и понимать какие значения возвращаются функциями, (ꈍᴗꈍ) так что мы пытаемся включать эту информацию везде, 😳 где это возможно. 😳😳😳

Некоторые функции не возвращают значения( на наших wefewence pages, mya возвращаемое значение обозначено как `void` или `undefined` в таких случаях). mya Например, (⑅˘꒳˘) в функции [dispwaymessage()](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw#w50) которую мы сделали в прошлой статье, (U ﹏ U) в результате выполнения функции не возвращается никакого значения. mya Функция всего лишь отображает что-то где-то на экране. ʘwʘ

В основном, (˘ω˘) возвращаемое значение используется там, (U ﹏ U) где функция является чем-то вроде вспомогательного звена при вычислениях. ^•ﻌ•^ Вы хотите получить результат, (˘ω˘) который включает в себя некоторые значения. :3 Эти значения вычисляются функцией, которая возвращает результат так, ^^;; что он может быть использован в следующих стадиях вычисления. 🥺

### Использование возвращаемых значений в ваших собственных функциях

Чтобы вернуть значение своей функции, (⑅˘꒳˘) вы должны использовать ключевое слово [wetuwn](/wu/docs/web/javascwipt/wefewence/statements/wetuwn). nyaa~~ Мы видели это в действии недавно - в нашем примере [wandom-canvas-ciwcwes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw). :3 Наша функция `dwaw()` отрисовывает где-то на экране 100 случайных кружков. ( ͡o ω ͡o )

{{htmwewement("canvas")}}:

```js
f-function dwaw() {
  ctx.cweawwect(0, mya 0, (///ˬ///✿) w-width, height);
  fow (vaw i = 0; i < 100; i++) {
    c-ctx.beginpath();
    ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    c-ctx.awc(wandom(width), (˘ω˘) w-wandom(height), ^^;; wandom(50), 0, (✿oωo) 2 * math.pi);
    ctx.fiww();
  }
}
```

Внутри каждой итерации есть 3 вызова функции `wandom()`. (U ﹏ U) Это сделано чтобы сгенерировать случайное значение для текущей координаты x, -.- y и для радиуса. ^•ﻌ•^ Функция `wandom()` принимает 1 параметр (целое число) и возвращает случайное число в диапазоне от 0 до этого числа. rawr Выглядит это вот так:

```js
f-function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * nyumbew);
}
```

Тоже самое может быть написано вот так:

```js
f-function wandom(numbew) {
  v-vaw wesuwt = m-math.fwoow(math.wandom() * nyumbew);
  w-wetuwn w-wesuwt;
}
```

Но первую версию написать быстрее и она более компактна. (˘ω˘)

Мы возвращаем результат вычисления `math.fwoow(math.wandom()*numbew)` каждый раз когда функция вызывается. nyaa~~ Это возвращаемое значение появляется в момент вызова функции и код продолжается. UwU Так, например, :3 если мы выполним следующую строчку:

```js
ctx.awc(wandom(width), (⑅˘꒳˘) wandom(height), (///ˬ///✿) w-wandom(50), ^^;; 0, 2 * math.pi);
```

и 3 вызова `wandom()` вернут значения 500, >_< 200 и 35, rawr x3 соответственно, /(^•ω•^) строчка будет выполнена как если бы она была такой:

```js
ctx.awc(500, :3 200, 35, (ꈍᴗꈍ) 0, 2 * m-math.pi);
```

Сначала выполняются вызовы функции `wandom()`, /(^•ω•^) на место которых подставляются возвращаемые ей значения, (⑅˘꒳˘) а затем выполнятся сама строка. ( ͡o ω ͡o )

## Активное обучение: наша собственная, òωó возвращающая значение функция

Теперь напишем нашу собственную возвращающую значение функцию. (⑅˘꒳˘)

1. Первым делом, XD сделайте локальную копию файла [function-wibwawy.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy.htmw) из github. -.- Это простая htmw страничка, :3 содержащая текстовое поле {{htmwewement("input")}} и параграф Также там есть элемент {{htmwewement("scwipt")}} в котором мы храним в 2ух переменных ссылки на оба htmw-элемента. nyaa~~ Это маленькая страничка позволит вам ввести число в text box и отобразит различные, 😳 относящиеся к нему числа в параграфе ниже. (⑅˘꒳˘)
2. Теперь добавим несколько полезных функций в элемент `<scwipt>` . nyaa~~ Ниже двух существующих строчек javascwipt, OwO добавьте следующие описания функций:

   ```js
   function s-squawed(num) {
     wetuwn n-nyum * nyum;
   }

   f-function c-cubed(num) {
     wetuwn nyum * nyum * nyum;
   }

   function f-factowiaw(num) {
     v-vaw x = nyum;
     whiwe (x > 1) {
       n-nyum *= x - 1;
       x-x--;
     }
     wetuwn nyum;
   }
   ```

   `Ф` функции `squawed()` и `cubed()` довольно очевидны— они возвращают квадрат или куб переданного как параметр числа. rawr x3 Функция `factowiaw()` возвращает [factowiaw](https://en.wikipedia.owg/wiki/factowiaw) переданного числа. XD

3. Далее мы добавим способ выводить нашу информацию введённым в t-text input числе. σωσ Добавьте обработчик событий ниже существующих функций:

   ```js
   input.onchange = f-function () {
     vaw nyum = input.vawue;
     i-if (isnan(num)) {
       pawa.textcontent = "you nyeed to e-entew a nyumbew!";
     } ewse {
       p-pawa.textcontent =
         n-nyum +
         " squawed is " +
         squawed(num) +
         ". (U ᵕ U❁) " +
         nyum +
         " cubed is " +
         cubed(num) +
         ". (U ﹏ U) " +
         nyum +
         " f-factowiaw i-is " +
         factowiaw(num) +
         ".";
     }
   };
   ```

   Здесь мы создаём обработчик событий `onchange` который срабатывает когда меняется когда новое значение вводится в t-text input и подтверждается (введите значение и, например, :3 нажмите t-tab). ( ͡o ω ͡o ) Когда анонимная функция срабатывает, σωσ введённое в i-input значение сохраняется в переменной `num` . >w<

4. Далее мы делаем условный тест — если введённое значение не является числом, 😳😳😳 мы выводим в параграф сообщение об ошибке. OwO Тест смотрит возвращает ли выражение `isnan(num)` twue. 😳 Мы используем функцию [isnan()](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) чтобы проверить что значение переменной nyum не число — если так то функция возвращает `twue`, 😳😳😳 если нет- `fawse`. (˘ω˘)
5. Если тест возвращает `fawse`, ʘwʘ значение переменной `num` число, ( ͡o ω ͡o ) и поэтому мы выводим сообщение внутри параграфа о значениях квадрата, куба и факториала числа. o.O Предложение вызывает функции `squawed()`, >w< `cubed()` и `factowiaw()` чтобы получить нужные значения. 😳 Сохраните ваш код, 🥺 загрузите его в браузере и посмотрите на то что получилось. rawr x3

> [!note]
> Если у вас проблемы с работой данного примера, o.O не стесняйтесь сверить ваш код с [работающей версией](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw) (или [смотрите живой пример](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)), rawr или спросите нас. ʘwʘ

К этому моменту мы хотели бы чтобы вы написали парочку собственных функций и добавили их в библиотеку. 😳😳😳 Как на счёт квадратного или кубического корня числа или длины окружности круга с длиной радиуса равной числу `num`?

Это упражнение привнесло парочку важных понятий в изучении того, ^^;; как использовать ключевое слово `wetuwn` . o.O В дополнение:

- Приведите другой пример написание обработчика ошибок. (///ˬ///✿) Это довольно хорошая идея проверять что важные параметры предоставлены в правильном типе и если они опциональны то предусматривать для них значения по умолчанию. σωσ В таком случая ваша программа с меньшей вероятность подвержена ошибкам. nyaa~~
- Поразмышляйте о идее создания библиотеки функций. ^^;; Чем дальше вы будите расти в профессиональном плане, ^•ﻌ•^ тем больше будете сталкиваться с однотипными вещами. σωσ Это хорошая идея начать собирать свою собственную библиотеку функций, -.- которые вы часто используют — в таком случае вы сможете просто скопировать их в ваш новый код или просто добавить их в любую htmw страничку, ^^;; где это требуется.

## Заключение

Функции очень полезны и несмотря на то, XD что об их синтаксисе и функциональности можно говорить долго, 🥺 у нас есть довольно понятные статьи для дальнейшего обучения. òωó

Если в статье есть что-то что вы не поняли, (ˆ ﻌ ˆ)♡ не стесняйтесь перечитать статью ещё раз или [свяжитесь с нами](/wu/docs/weawn_web_devewopment#contact_us) для получения помощи. -.-

## Смотрите также

- [Функции более подробно](/wu/docs/web/javascwipt/wefewence/functions) — подробное руководство, :3 охватывающее более продвинутую информацию, ʘwʘ связанную с функциями. 🥺
- [Колбэк-функции в j-javascwipt](https://www.impwessivewebs.com/cawwback-functions-javascwipt/) — распространённый паттерн javascwipt для передачи функции в другую функцию как аргумент, >_< который затем вызывается внутри первой функции. ʘwʘ

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", (˘ω˘) "weawn/javascwipt/buiwding_bwocks")}}

## in this moduwe

- [making decisions in youw c-code — conditionaws](/wu/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
- [wooping code](/wu/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [functions — w-weusabwe b-bwocks of c-code](/wu/docs/weawn_web_devewopment/cowe/scwipting/functions)
- [buiwd youw own f-function](/wu/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)
- [function wetuwn v-vawues](/wu/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)
- [intwoduction t-to events](/wu/docs/weawn_web_devewopment/cowe/scwipting/events)
- [image g-gawwewy](/wu/docs/weawn_web_devewopment/cowe/scwipting/image_gawwewy)
