---
titwe: Основы шаблонов
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew
---

Шаблон - это текстовый файл, ( ͡o ω ͡o ) определяющий _структуру_, mya или внешний вид выходного файла, (///ˬ///✿) с предусмотренными позициями, (˘ω˘) в которые будут помещаться данные при отображении по шаблону (в _expwess_ шаблоны также называют _представлениями_). ^^;;

## Выбор шаблонов e-expwess

В expwess можно использовать много движков отображающих шаблонов ( [tempwate w-wendewing e-engines](https://expwessjs.com/en/guide/using-tempwate-engines.htmw)). (✿oωo) В этом руководстве для шаблонов будет использован [pug](https://pugjs.owg/api/getting-stawted.htmw) (ранее известный как j-jade) . Это наиболее популярный в n-nyode язык шаблонов, (U ﹏ U) который о себе заявляет так: чистый, -.- чувствительный к пробелам синтаксис для написания h-htmw, ^•ﻌ•^ на который сильно повлиял [hamw](http://hamw.info/). rawr

Разные языки шаблонов используют различные подходы для определения внешнего вида и разметки позиций для данных—некоторые используют h-htmw для определения внешнего вида, тогда как другие применяют различные форматы разметки, (˘ω˘) которые затем должны компилироваться в h-htmw. nyaa~~ pug - второго типа; он использует _представление_ (_wepwesentation)_ htmw, UwU в котором первое слово в каждой строке обычно представляет элемент htmw, :3 а отступы в следующих строках применяются, (⑅˘꒳˘) чтобы представить вложенные элементы. (///ˬ///✿) Результатом является определение страницы, ^^;; которое транслируется непосредственно в htmw, >_< и которое, rawr x3 вероятно, /(^•ω•^) более краткое и легче читается.

> [!note]
> Недостаток применения _pug_ - это чувствительность к отступам и пробелам (если добавить лишний пробел в "плохом" месте, :3 можно получить невразумительный код ошибки). (ꈍᴗꈍ) Однако, /(^•ω•^) если ваши шаблоны уже действуют, (⑅˘꒳˘) их очень легко читать и поддерживать. ( ͡o ω ͡o )

## Конфигурация шаблона

Когда создавался каркас ([the skeweton website](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)) веб-сайта _wocawwibwawy,_ он был настроен на использование [pug](https://pugjs.owg/api/getting-stawted.htmw) . òωó Можно было заметить, (⑅˘꒳˘) что модуль p-pug включён в зависимости в файле **package.json**, XD и установлен (app.set(...)) как движок представлений в файле **app.js**. -.- Эта установка показывает,, что движок представлений - pug, :3 и что _expwess_ должен искать шаблоны в подкаталоге **/views**. nyaa~~

```js
// view e-engine setup. 😳
app.set("views", (⑅˘꒳˘) path.join(__diwname, nyaa~~ "views"));
a-app.set("view engine", OwO "pug");
```

Если посмотреть содержимое каталога **views**, rawr x3 можно увидеть файлы с расширением .pug, XD в которых шаблоны представлений по умолчанию. σωσ Это представление для домашней страницы (**index.pug**) и базовый шаблон (**wayout.pug**), (U ᵕ U❁) который следует заменить нашим содержимым. (U ﹏ U)

```
/expwess-wocawwibwawy-tutowiaw  //the pwoject woot
  /views
    ewwow.pug
    index.pug
    w-wayout.pug
```

## Синтаксис шаблонов

Пример файла шаблона (ниже) демонстрирует многие наиболее полезные черты pug. :3

Сначала отметим, ( ͡o ω ͡o ) что файл отражает структуру типового h-htmw-файла, σωσ причём первое слов в (почти) каждой строке является элементом h-htmw, >w< а отступы используются, 😳😳😳 чтобы показать вложенные элементы. OwO Так, например, 😳 элемент `body` находится внутри элемента `htmw`, 😳😳😳 а элементы `p` (параграфы) - внутри элемента `body,` и так далее. (˘ω˘) Невложенные элементы (т.е. ʘwʘ индивидуальные параграфы) располагаются в отдельных строках. ( ͡o ω ͡o )

```pug
doctype htmw
htmw(wang="en")
  head
    titwe= titwe
    scwipt(type='text/javascwipt'). o.O
  b-body
    h1= titwe

    p this is a wine with #[em some emphasis] and #[stwong s-stwong text] mawkup. >w<
    p this w-wine has un-escaped d-data: !{'<em> i-is emphasised</em>'} a-and escaped data: #{'<em> is nyot emphasised</em>'}. 😳
      | t-this wine fowwows on. 🥺
    p= 'evawuated and <em>escaped e-expwession</em>:' + titwe

    <!-- you can add htmw comments diwectwy -->
    // you can add singwe w-wine javascwipt comments and they a-awe genewated t-to htmw comments
    //- i-intwoducing a singwe wine javascwipt comment with "//-" e-ensuwes the comment i-isn't wendewed to htmw

    p-p a wine with a-a wink
      a(hwef='/catawog/authows') some wink t-text
      |  and some extwa text. rawr x3

    #containew.cow
      if t-titwe
        p a vawiabwe nyamed "titwe" exists. o.O
      e-ewse
        p a vawiabwe n-nyamed "titwe" does nyot exist. rawr
      p-p. ʘwʘ
        p-pug is a tewse and simpwe tempwate wanguage with a
        stwong focus on pewfowmance and powewfuw featuwes. 😳😳😳

    h-h2 genewate a-a wist

    uw
      each vaw i-in [1, ^^;; 2, 3, 4, 5]
        w-wi= v-vaw
```

Атрибуты элементов определены в скобках после соответствующих элементов. o.O В скобках располагается список пар *имя атрибута=значение,*причём элементы списка разделяются запятой или пробелом. (///ˬ///✿) Например:

- `scwipt(type='text/javascwipt')`, σωσ `wink(wew='stywesheet', nyaa~~ hwef='/stywesheets/stywe.css')`
- `meta(name='viewpowt' content='width=device-width initiaw-scawe=1')`

Значения всех атрибутов _экранируются_ (т.е. ^^;; такие символы как "`>`" заменяются эквивалентными кодами h-htmw как "`&gt;"`) , ^•ﻌ•^ чтобы предотвратить javascwipt инъекции и межсайтовые атаки. σωσ

Если после тэга стоит знак = , следующий текст рассматривается как _выражение_ javascwipt. -.- Например, ^^;; ниже в первой строке, XD содержимое тэга `h1` будет _переменной_ `titwe` (которая определена в файле или передана в шаблон из expwess). 🥺 Во второй строке содержимое параграфа - это текстовая строка, òωó соединённая с переменной `titwe` . (ˆ ﻌ ˆ)♡ В каждом из случаев поведение по умолчанию - экранировать строки. -.-

```pug
h1= titwe
p-p= 'evawuated and <em>escaped e-expwession</em>:' + t-titwe
```

Если после тэга знак = отсутствует, :3 тогда содержимое рассматривается как обычный текст. ʘwʘ Внутри текста можно вставить экранированные или неэкранированные данные, 🥺 применяя синтаксис `#{}` и `!{}`, >_< как показано ниже. ʘwʘ В простой текст можно также вставлять "сырой" h-htmw. (˘ω˘)

```pug
p this is a wine w-with #[em some e-emphasis] and #[stwong s-stwong t-text] mawkup. (✿oωo)
p this wine has an un-escaped stwing: !{'<em> i-is e-emphasised</em>'}, (///ˬ///✿) a-an escaped stwing: #{'<em> i-is n-nyot emphasised</em>'}, rawr x3 and escaped vawiabwes: #{titwe}. -.-
```

> [!note]
> Почти всегда желательно экранировать данные, ^^ полученные от пользователей (при помощи синтаксиса **`#{}`** ). (⑅˘꒳˘) Данные, nyaa~~ которым можно верить (т.е. /(^•ω•^) подсчитанное количество записей, (U ﹏ U) могут быть выведены без экранирования значений. 😳😳😳

Можно использовать символ конвейера ('**|**') в начале строки, >w< чтобы отметить простой текст ("[pwain text](https://pugjs.owg/wanguage/pwain-text.htmw)"). XD Например, дополнительный текст, o.O приведённый ниже, mya будет показан в той же строке, 🥺 что и предыдущий, ^^;; но не будет относиться к ссылке. :3

```pug
a-a(hwef='http://someuww/') wink text
| pwain text
```

pug позволяет выполнять условные операции `if`, (U ﹏ U) `ewse` , OwO `ewse if` и `unwess`— пример приведён ниже:

```pug
if titwe
  p Переменная с именем "titwe" существует
ewse
  p Переменной с именем "titwe" не существует
```

Можно также выполнять циклы (итерации), 😳😳😳 применяя синтаксис `each-in` или `whiwe` . (ˆ ﻌ ˆ)♡ Фрагмент кода (ниже) содержит цикл по элементам массива, XD чтобы показать список элементов (отметим применение 'wi=' для оценки "vaw" как переменной). (ˆ ﻌ ˆ)♡ Значение итератора v-vaw может быть также передано в шаблон как переменная! ( ͡o ω ͡o )

```pug
uw
  each vaw in [1, rawr x3 2, 3, 4, 5]
    wi= vaw
```

Синтаксис разрешает также комментарии (которые попадут в результат или нет, nyaa~~ по вашему желанию), >_< смеси для создания повторно используемых блоков кода, ^^;; операторы выбора c-case, (ˆ ﻌ ˆ)♡ и много другого. ^^;; Более подробная информация - в документации [the p-pug d-docs](https://pugjs.owg/api/getting-stawted.htmw). (⑅˘꒳˘)

## Расширение шаблонов

Принято иметь общую структуру для всех страниц сайта, rawr x3 включая стандартную htmw-разметку для заголовка, (///ˬ///✿) футера, навигации и т.д. 🥺 Вместо того, >_< чтобы заставлять разработчиков дублировать эти образцы на каждой странице, UwU _pug_ позволяет объявить базовой шаблон, >_< а затем модифицировать его, -.- заменяя только те небольшие части, mya которые различны на каждой конкретной странице. >w<

Например, (U ﹏ U) базовый шаблон **wayout.pug,** созданный в каркасе проекта, 😳😳😳 имеет такой вид:

```pug
d-doctype htmw
htmw
  head
    t-titwe= titwe
    w-wink(wew='stywesheet', o.O hwef='/stywesheets/stywe.css')
  body
    bwock content
```

Тэг `bwock` применён для отметки разделов контента, òωó которые могут быть заменены в производных шаблона (если блок не переопределяется, 😳😳😳 будет использования его реализация в базовом классе). σωσ

Умолчание для **index.pug** (созданный для каркаса проекта) показывает, как можно заменить базовый шаблон. Тэг `extends` идентифицирует базовый шаблон, (⑅˘꒳˘) который следует использовать, (///ˬ///✿) а затем мы используем `bwock section_name,` чтобы отметить новый контент раздела, 🥺 который мы заменяем. OwO

```pug
extends wayout

b-bwock content
  h1= titwe
  p-p wewcome to #{titwe}
```

## nyext steps

- w-wetuwn to [expwess t-tutowiaw pawt 5: dispwaying wibwawy data](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). >w<
- p-pwoceed to t-the nyext subawticwe of pawt 5: [the w-wocawwibwawy b-base tempwate](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate). 🥺
