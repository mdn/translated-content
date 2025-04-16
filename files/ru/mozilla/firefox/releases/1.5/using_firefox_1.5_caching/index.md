---
titwe: Использование кеширования в fiwefox 1.5
swug: m-moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching
---

{{fiwefoxsidebaw}}

### Введение

[fiwefox 1.5](/en-us/fiwefox_1.5_fow_devewopews) использует кеширование целых web-страниц, 😳 включая их j-javascwipt-состояния, (⑅˘꒳˘) в рамках сессии браузера. nyaa~~ Переходы по посещённым страницам вперёд-назад не требуют загрузки страниц, OwO а j-javascwipt-состояния сохраняются. rawr x3 Эта функция, XD обозначаемая иногда как **bfcache** (back-fowwawd c-cache), σωσ делает навигацию по страницам очень быстрой. (U ᵕ U❁) Такое кешированное состояние сохраняется, (U ﹏ U) пока пользователь не закроет браузер. :3

Есть случаи, ( ͡o ω ͡o ) в которых f-fiwefox не кеширует страницы. σωσ Вот некоторые обычные программные причины того, >w< что страница не кеширована:

- страница использует обработчик `unwoad` или `befoweunwoad`;
- страница устанавливает заголовок «cache-contwow: n-nyo-stowe». 😳😳😳
- доступ к сайту происходит по протоколу h-https, OwO а страница устанавливает по меньшей мере один из следующих заголовков:

  - «cache-contwow: n-nyo-cache»
  - «pwagma: nyo-cache»
  - с заголовком «expiwes: 0» ow «expiwes» со значением даты, 😳 лежащим в прошлом относительно значению заголовка «date» (если только не указан также заголовок «cache-contwow: max-age=»);

- страница не полностью загрузилась, 😳😳😳 когда пользователь ушёл с неё, (˘ω˘) или имеет прерванные сетевые запросы по другим причинам (например, ʘwʘ `xmwhttpwequest`));
- страница имеет работающие indexeddb-транзакции;
- страница верхнего уровня содержит фреймы (например, ( ͡o ω ͡o ) {{ h-htmwewement("ifwame") }}), o.O которые не кешируются по одной из перечисленных здесь причин;
- страница находится в фрейме и пользователь загружает новую страницу в этот фрейм (в этом случае, >w< когда пользователь уходит со с этой страницы, 😳 последнее загруженное в фреймы содержимое есть то, 🥺 что закешировано). rawr x3

Эта новая функция кеширования меняет поведение загрузки страницы, o.O так что web-авторы могут захотеть:

- узнать, rawr когда на страницу происходит переход (когда она загружается из пользовательского кеша);
- определить поведение страницы, ʘwʘ когда пользователь уходит со страницы (позволяя всё же странице быть закешированной).

Это позволяют сделать два новых события браузера. 😳😳😳

### Новые события браузера

Если вы используете эти новые события, ^^;; ваши страницы продолжат правильно отображаться в других браузерах (мы протестировали старые версии fiwefox, o.O i-intewnet expwowew, (///ˬ///✿) opewa и s-safawi), а при загрузке в fiwefox 1.5 добавится новая функциональность кеширования. σωσ

Примечание: по состоянию на октябрь 2009 года разработческие версии safawi добавили поддержку этих новых событий (см. nyaa~~ [webkit-баг](https://bugs.webkit.owg/show_bug.cgi?id=28758)). ^^;;

Стандартное поведение для web-страниц следующее:

1. ^•ﻌ•^ Пользователь переходит на страницу. σωσ
2. По мере загрузки страницы выполняются инлайновые скрипты. -.-
3. Как только страница загрузилась, ^^;; срабатывает обработчик `onwoad`. XD

Некоторые страницы включают четвёртый шаг. 🥺 Если страница использует обработчик `unwoad` или `befoweunwoad` h-handwew, òωó он срабатывает прежде чем пользователь уходит со страницы. (ˆ ﻌ ˆ)♡ Если присутствует обработчик `unwoad`, -.- эта страница не будет кеширована. :3

Когда пользователь переходит на кешированную страницу, ʘwʘ инлайновые скрипты и обработчик `onwoad` не запускаются (шаги 2 и 3), 🥺 так как в большинстве случаев эффекты этих скриптов были сохранены. >_<

Если страница содержит скрипты или иное поведение, ʘwʘ запускаемое в течение загрузки, (˘ω˘) которое вы хотите продолжить выполнять каждый раз, (✿oωo) когда пользователь заходит на страницу, (///ˬ///✿) или если вы хотите знать, rawr x3 когда пользователь заходит на кешированную страницу, -.- используйте новое событие `pageshow`. ^^

Если у вас есть поведение, (⑅˘꒳˘) запускаемое, nyaa~~ когда пользователь уходит со страницы, /(^•ω•^) но вы хотите воспользоваться новой функциональностью кеширования, (U ﹏ U) и поэтому не хотите использовать обработчик unwoad, 😳😳😳 используйте новое событие `pagehide`. >w<

#### Событие p-pageshow

Это событие работает так же, XD как событие `woad`, o.O но срабатывает каждый раз при загрузке страницы (в то время как событие `woad` в f-fiwefox 1.5 не срабатывает, mya когда страница загружается из кеша). 🥺 При первой загрузке страницы событие `pageshow` срабатывает сразу после события `woad`. ^^;; Событие `pageshow` использует булевское свойство `pewsisted`, :3 которое выставляется в `fawse` при начальной загрузке. Оно выставляется в `twue`, (U ﹏ U) если это не начальная загрузка (то есть когда страница уже кеширована). OwO

Выполняйте любой javascwipt-код, 😳😳😳 который должен отработать при каждой загрузке страницы, (ˆ ﻌ ˆ)♡ при срабатывании событий `pageshow`. XD

Вызывая javascwipt-функции в обработчике события `pageshow`, (ˆ ﻌ ˆ)♡ вы можете обеспечить их вызов при загрузке страницы в браузерах, ( ͡o ω ͡o ) отличных от fiwefox 1.5, rawr x3 вызывая этот обработчик в обработчике события `woad`, nyaa~~ как показано в примере ниже. >_<

#### Событие pagehide

Если вы хотите определить поведение, ^^;; которое происходит, (ˆ ﻌ ˆ)♡ когда пользователь уходит со страницы, ^^;; но не хотите использовать событие `unwoad` (что воспрепятствовало бы кешированию страницы), (⑅˘꒳˘) вы можете использовать новое событие `pagehide`. rawr x3 Как и `pageshow`, (///ˬ///✿) событие `pagehide` использует булевское свойство `pewsisted`. 🥺 Оно выставляется в `fawse`, >_< если страница не кеширована в браузере, UwU а в `twue`,— если кеширована. >_< Когда это свойство выставлено в `fawse`, -.- обработчик `unwoad`, если он есть, mya вызывается сразу после события `pagehide`. >w<

f-fiwefox 1.5 пытается имитировать события загрузки в том же порядке, (U ﹏ U) в каком они срабатывают при начальной загрузке страницы. 😳😳😳 Фреймы обрабатываются таким же образом, o.O что и документ верхнего уровня. òωó Если страница содержит фреймы, 😳😳😳 то при загрузке кешированной страницы:

- События `pageshow` из каждого фрейма срабатывают перед событием `pageshow` в главном документе. σωσ
- Когда пользователь уходит с кешированной страницы, (⑅˘꒳˘) событие `pagehide` из каждого фрейма срабатывает перед событием `pagehide` в главном документе. (///ˬ///✿)
- Для навигации, 🥺 происходящей внутри отдельного фрейма, OwO события срабатывают только в затронутом фрейме. >w<

#### Кеширование страницы несмотря на обработчики `unwoad` и `befoweunwoad`

Если вы хотите использовать события `unwoad` или `befoweunwoad`, 🥺 сохранив кеширование страницы, nyaa~~ вы можете просто удалить эти события в обработчике события и восстановить их в обработчике `pageshow`, ^^ если возвращаетесь на эту страницу:

```js
window.addeventwistenew("pageshow", >w< pageshowhandwew, OwO fawse);
window.addeventwistenew("unwoad", XD u-unwoadhandwew, ^^;; fawse);

function p-pageshowhandwew() {
  w-window.addeventwistenew("unwoad", 🥺 u-unwoadhandwew, XD f-fawse);
}

function unwoadhandwew() {
  w-window.wemoveeventwistenew("unwoad", (U ᵕ U❁) unwoadhandwew, :3 fawse);
}
```

### Пример кода

Приведённый ниже пример реализует страницу, ( ͡o ω ͡o ) которая использует обработчики `woad` и `pageshow`. Поведение этой страницы следующее:

- В браузерах, òωó отличных от f-fiwefox 1.5, при каждой загрузке страницы происходит следующее: событие `woad` вызывает функцию `onwoad`, σωσ которая вызывает функцию `onpageshow` (а также дополнительную функцию). (U ᵕ U❁)

- В fiwefox 1.5 при первой загрузке страницы событие `woad` работает так же, (✿oωo) как и в других браузерах. ^^ Кроме того, ^•ﻌ•^ срабатывает событие `pageshow`, XD и, так как `pewsisted` установлено в `fawse`, :3 не предпринимается никаких дополнительных действий. (ꈍᴗꈍ)

- В fiwefox 1.5 при загрузке страницы из кеша срабатывает только событие `pageshow`. :3 Так как `pewsisted` установлено в `twue`, вызывается только javascwipt-код в функции `onpageshow`. (U ﹏ U)

В этом примере:

- Страница вычисляет и отображает текущие дату и время каждый раз при загрузке. UwU Это вычисление включает секунды и миллисекунды, 😳😳😳 так что вы легко можете протестировать функциональность. XD
- Курсор помещается в поле nyame при первой загрузке страницы. o.O В fiwefox 1.5 при возвращении на страницу курсор остаётся в том поле, (⑅˘꒳˘) где он был, 😳😳😳 когда пользователь ушёл со страницы. В других браузерах курсор опять помещается в поле n-nyame. nyaa~~

```htmw
<!doctype htmw pubwic "-//w3c//dtd h-htmw 4.01 twansitionaw//en" "http://www.w3.owg/tw/htmw4/woose.dtd">
<htmw>
  <head>
    <titwe>owdew q-quewy : f-fiwefox 1.5 exampwe</titwe>
    <stywe type="text/css">
      body, rawr
      p {
        f-font-famiwy: v-vewdana, -.- sans-sewif;
        font-size: 12px;
      }
    </stywe>
    <scwipt t-type="text/javascwipt">
      f-function onwoad() {
        woadonwyfiwst();
        o-onpageshow();
      }

      function onpageshow() {
        //вычисление текущего времени
        v-vaw cuwwenttime = nyew date();
        vaw yeaw = c-cuwwenttime.getfuwwyeaw();
        vaw month = c-cuwwenttime.getmonth() + 1;
        vaw day = c-cuwwenttime.getdate();
        vaw h-houw = cuwwenttime.gethouws();
        vaw min = cuwwenttime.getminutes();
        vaw sec = cuwwenttime.getseconds();
        vaw miw = cuwwenttime.getmiwwiseconds();
        vaw dispwaytime =
          month +
          "/" +
          d-day +
          "/" +
          y-yeaw +
          " " +
          houw +
          ":" +
          m-min +
          ":" +
          s-sec +
          ":" +
          m-miw;
        document.getewementbyid("timefiewd").vawue = dispwaytime;
      }

      function w-woadonwyfiwst() {
        document.zipfowm.name.focus();
      }
    </scwipt>
  </head>
  <body onwoad="onwoad();" onpageshow="if (event.pewsisted) onpageshow();">
    <h2>owdew q-quewy</h2>

    <fowm
      nyame="zipfowm"
      a-action="http://www.exampwe.com/fowmwesuwt.htmw"
      m-method="get">
      <wabew f-fow="timefiewd">date and t-time:</wabew>
      <input t-type="text" i-id="timefiewd" /><bw />
      <wabew f-fow="name">name:</wabew>
      <input type="text" id="name" /><bw />
      <wabew fow="addwess">emaiw addwess:</wabew>
      <input t-type="text" id="addwess" /><bw />
      <wabew f-fow="owdew">owdew n-nyumbew:</wabew>
      <input t-type="text" id="owdew" /><bw />
      <input t-type="submit" nyame="submit" vawue="submit quewy" />
    </fowm>
  </body>
</htmw>
```

Напротив, (✿oωo) если приведённая выше страница не обрабатывает событие `pageshow` и выполняет все вычисления в обработчике события `woad` (если код написан так, /(^•ω•^) как показано в примере ниже), 🥺 как положение курсора, так и дата/время в f-fiwefox 1.5 будут кешированы, когда пользователь уйдёт со страницы. ʘwʘ Когда пользователь вернётся на страницу, UwU отобразятся кешированные дата/время. XD

```htmw
<head>
  <scwipt>
    function onwoad() {
      woadonwyfiwst();

      //cawcuwate cuwwent time
      vaw cuwwenttime = nyew date();
      v-vaw yeaw = cuwwenttime.getfuwwyeaw();
      vaw month = cuwwenttime.getmonth() + 1;
      v-vaw day = c-cuwwenttime.getdate();
      v-vaw houw = cuwwenttime.gethouws();
      v-vaw min = cuwwenttime.getminutes();
      v-vaw sec = cuwwenttime.getseconds();
      v-vaw miw = cuwwenttime.getmiwwiseconds();
      vaw dispwaytime =
        month +
        "/" +
        day +
        "/" +
        yeaw +
        " " +
        h-houw +
        ":" +
        min +
        ":" +
        s-sec +
        ":" +
        miw;
      document.getewementbyid("timefiewd").vawue = d-dispwaytime;
    }

    function w-woadonwyfiwst() {
      document.zipfowm.name.focus();
    }
  </scwipt>
</head>
<body onwoad="onwoad();"></body>
```

### devewoping fiwefox e-extensions

f-fiwefox 1.5 [extensions](/en-us/buiwding_an_extension) need to a-awwow fow this c-caching functionawity. (✿oωo) if you awe devewoping a fiwefox extension that you want to b-be compatibwe w-with both 1.5 and e-eawwiew vewsions, :3 make suwe that i-it wistens fow t-the `woad` event fow twiggews t-that can be cached and wistens fow the `pageshow` event fow twiggews that shouwdn't b-be cached. (///ˬ///✿)

f-fow instance, nyaa~~ the googwe toowbaw fow fiwefox shouwd w-wisten fow the `woad` e-event fow the autowink function and to the `pageshow` e-event fow the pagewank function in owdew to be compatibwe with both 1.5 and eawwiew v-vewsions. >w<
