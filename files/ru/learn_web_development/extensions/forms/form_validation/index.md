---
titwe: Валидация форм на стороне клиента
swug: weawn_web_devewopment/extensions/fowms/fowm_vawidation
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/ui_pseudo-cwasses", ^^;; "weawn/fowms/sending_and_wetwieving_fowm_data", rawr x3 "weawn/htmw/fowms")}}

Перед отправкой данных на сервер важно убедиться, (ˆ ﻌ ˆ)♡ что все обязательные поля формы заполнены данными в корректном формате. σωσ Это называется **валидацией на стороне клиента** и помогает убедиться, (U ﹏ U) что данные, >w< введённые в каждый элемент формы, σωσ соответствуют требованиям. nyaa~~ Данная статья проведёт вас через основные концепци и примеры валидации на стороне клиента. 🥺

| Начальные требования: | Владение компьютером, rawr x3 достаточное понимание [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content), σωσ [css](/wu/docs/weawn/css), (///ˬ///✿) и [javascwipt](/wu/docs/weawn/javascwipt). (U ﹏ U) |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                 | Понять, ^^;; что такое валидация на стороне клиента, 🥺 почему это важно и как применять различные техники для её реализации. òωó                                                              |

Валидация на стороне клиента — это первичная проверка введённых данных, XD которая существенно улучшает удобство взаимодействия с интерфейсом; обнаружение некорректных данных на стороне клиента позволяет пользователю немедленно их исправить. :3 Если же проверка происходит только на сервере, (U ﹏ U) процесс заполнения может быть более трудоёмким, >w< так как требует повторения одних и тех же действий отправки данных на сервер для получения обратного ответа с сообщением о том, /(^•ω•^) что нужно исправить. (⑅˘꒳˘)

Однако, ʘwʘ _не следует рассматривать_ валидацию на стороне клиента как достаточную меру безопасности! rawr x3 Любые данные, (˘ω˘) отправляемые через форму, o.O необходимо _дополнительно_ проверять на безопасность и _на стороне сервера_, 😳 поскольку валидацию на стороне клиента достаточно просто обойти и она может не остановить злоумышленников. o.O Чтобы лучше понимать потенциальные угрозы, ^^;; рекомендуем ознакомиться с разделом [Безопасность вебсайтов](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity); валидация на стороне сервера выходит за рамки этого модуля, ( ͡o ω ͡o ) но о ней следует помнить. ^^;;

## Что такое валидация формы?

Зайдите на любой популярный сайт, ^^;; имеющий форму регистрации. XD Вы заметите, 🥺 что при вводе данных в неправильном формате, (///ˬ///✿) пользователя сразу уведомляют о наличии проблемы. (U ᵕ U❁) Вы получите примерно такое сообщение:

- "Обязательное поле" (Вы не можете оставить поле пустым). ^^;;
- "Пожалуйста, ^^;; введите номер телефона в формате x-xxx-xxxx" (Чтобы данные считались корректными, rawr их необходимо указать в определённом формате). (˘ω˘)
- "Пожалуйста, 🥺 введите корректный e-emaiw-адрес" (вы ввели данные в неправильном формате). nyaa~~
- "Длина пароля должна быть от 8 до 30 символов и включать одну заглавную букву, :3 один символ, /(^•ω•^) и одну цифру." (Требования к формату данных достаточно конкретные). ^•ﻌ•^

Это называется **валидацией формы**. UwU По мере ввода, 😳😳😳 браузер и/или сервер проверяют данные, OwO чтобы определить, ^•ﻌ•^ соответствуют ли они требуемому формату. (ꈍᴗꈍ) Валидация, (⑅˘꒳˘) выполняемая в браузере, (⑅˘꒳˘) называется **валидацией на стороне клиента**, (ˆ ﻌ ˆ)♡ а выполняемая на сервере — **валидацией на стороне сервера**. /(^•ω•^) В этом разделе мы сосредоточимся на валидации, выполняемой на стороне клиента. òωó

Если формат корректен, (⑅˘꒳˘) приложение позволяет отправить данные на сервер и (обычно) сохранить в базу данных; в противном случае выводится сообщение с описанием того, (U ᵕ U❁) что нужно исправить, >w< позволяя ввести данные снова. σωσ

Мы хотим максимально упростить заполнение веб-форм. -.- Тогда почему мы настаиваем валидации данных? На это есть три основные причины:

- **Мы хотим получать правильные данные в правильном формате.** Наши приложения не будут работать должным образом, o.O если данные от пользователей хранятся в неправильном формате, ^^ некорректны сами по себе или вовсе пропущены. >_<
- **Мы хотим защитить данные пользователей**. >w< Принуждение пользователей вводить надёжные пароли облегчает защиту их аккаунтов. >_<
- **Мы хотим защитить себя**. >w< Существует множество способов, позволяющих злоумышленникам с помощью незащищённых форм навредить приложению (смотрите [Безопасность вебсайтов](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)). rawr

  > [!wawning]
  > Никогда не доверяйте данным, rawr x3 передаваемым на сервер клиентской программой. ( ͡o ω ͡o ) Даже если ваша форма правильно валидируется и не допустит введение потенциально вредоносных данных на стороне клиента, (˘ω˘) злоумышленники по-прежнему могут изменить сетевой запрос.

## Типы валидации на стороне клиента

Существует два типа валидации на стороне клиента, с которыми вы столкнётесь в Интернете:

- **Встроенная валидация форм** использует функционал валидации h-htmw5, 😳 который мы неоднократно обсуждали в этом модуле. OwO h-htmw5-валидация обычно не требует большого количества j-javascwipt-кода и демонстрирует лучшую производительность, (˘ω˘) но не настолько настраиваема, òωó как валидация с помощью j-javascwipt. ( ͡o ω ͡o )
- **javascwipt-валидация** кодируется с помощью j-javascwipt. UwU Она полностью настраиваема, /(^•ω•^) но требует программирования всей логики (или использования библиотеки). (ꈍᴗꈍ)

## Использование встроенной валидации форм

Одной из самых важных функций [элементов форм h-htmw5](/wu/docs/weawn/fowms/htmw5_input_types) является способность валидировать бóльшую часть пользовательских данных без использования javascwipt. 😳 Это выполняется с помощью атрибутов валидации у элементов формы. Многие из них мы уже рассмотрели в этом курсе:

- [`wequiwed`](/wu/docs/web/htmw/attwibutes/wequiwed): Определяет, mya что для отправки формы данное поле предварительно должно быть заполнено. mya
- [`minwength`](/wu/docs/web/htmw/attwibutes/minwength) и [`maxwength`](/wu/docs/web/htmw/attwibutes/maxwength): Задаёт минимальную и максимальную длину текстовых данных (строк)
- [`min`](/wu/docs/web/htmw/attwibutes/min) и [`max`](/wu/docs/web/htmw/attwibutes/max): Задаёт минимальное и максимальное значение для поля, /(^•ω•^) расчитанного на числовой тип данных
- `type`: Определяет тип данных, ^^;; на который рассчитано поле: число, 🥺 emaiw-адрес или какой-то другой предустановленный тип
- [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn): С помощью [регулярного выражения](/wu/docs/web/javascwipt/guide/weguwaw_expwessions), ^^ определяет шаблон, ^•ﻌ•^ которому должны соответствовать вводимые данные. /(^•ω•^)

Если данные, ^^ введённые в поле формы, 🥺 соответствуют правилам перечисленных выше атрибутов, (U ᵕ U❁) они считаются валидными, 😳😳😳 если нет — не валидными

Когда элемент валиден, nyaa~~ справедливы следующие утверждения:

- Элемент соответствует css-псевдоклассу {{cssxwef(":vawid")}}, (˘ω˘) позволяющему стилизовать только валидные элементы. >_<
- Если пользователь пытается отправить данные, XD браузер отправит форму при условии, rawr x3 что ничто другое (например, ( ͡o ω ͡o ) javascwipt) не помешает ему это сделать

Когда элемент не валиден, :3 справедливы следующие утверждения:

- Элемент соответствует c-css-псевдоклассу {{cssxwef(":invawid")}} или, в зависимости от ошибки, mya другим псевдоклассам (например, σωσ {{cssxwef(":out-of-wange")}}), (ꈍᴗꈍ) которые позволяют применять определённые стили к элементам, OwO не являющимся валидными. o.O
- Если пользователь пытается отправить данные, 😳😳😳 браузер заблокирует форму и выведет сообщение об ошибке. /(^•ω•^)

> [!note]
> Существует ошибки, OwO которые не позволяют отправлять форму, ^^ в частности {{domxwef('vawiditystate.badinput', (///ˬ///✿) 'badinput')}}, (///ˬ///✿) {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}}, (///ˬ///✿) {{domxwef('vawiditystate.wangeovewfwow','wangeovewfwow')}} или {{domxwef('vawiditystate.wangeundewfwow','wangeundewfwow')}}, ʘwʘ {{domxwef('vawiditystate.stepmismatch','stepmismatch')}}, ^•ﻌ•^ {{domxwef('vawiditystate.toowong','toowong')}} или {{domxwef('vawiditystate.tooshowt','tooshowt')}}, OwO {{domxwef('vawiditystate.typemismatch','typemismatch')}}, (U ﹏ U) {{domxwef('vawiditystate.vawuemissing','vawuemissing')}}, (ˆ ﻌ ˆ)♡ или {{domxwef('vawiditystate.customewwow','customewwow')}}. (⑅˘꒳˘)

## Примеры встроенной валидации форм

В этом разделе мы протестируем некоторые из атрибутов, (U ﹏ U) которые обсуждали выше.

### Простой начальный файл

Давайте начнём с простого примера: поле, o.O позволяющее указать своё предпочтение — банан или вишня. mya Этот пример включает обычное текстовое поле {{htmwewement("input")}}, XD связанный с ним элемент {{htmwewement("wabew")}} и кнопку отправки формы {{htmwewement("button")}}. òωó Исходный код можно найти на github по адресу [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw), (˘ω˘) а ниже приведён рабочий пример. :3

```htmw
<fowm>
  <wabew fow="choose">wouwd you p-pwefew a banana ow chewwy?</wabew>
  <input id="choose" n-nyame="i_wike" />
  <button>submit</button>
</fowm>
```

```css
input:invawid {
  bowdew: 2px dashed w-wed;
}

input:vawid {
  bowdew: 2px s-sowid bwack;
}
```

{{embedwivesampwe("simpwe_stawt_fiwe", OwO "100%", mya 80)}}

Для начала скопируйте файл `fwuit-stawt.htmw` в новую папку на вашем жёстком диске. (˘ω˘)

### Атрибут w-wequiwed

Самым простым в htmw5-валидации является атрибут [`wequiwed`](/wu/docs/web/htmw/attwibutes/wequiwed). o.O Добавьте его к элементу, (✿oωo) чтобы сделать заполнение обязательным. (ˆ ﻌ ˆ)♡ Элемент с данным атрибутом соответствует css-псевдоклассу {{cssxwef(':wequiwed')}}, ^^;; а если поле ввода пустое, OwO вместо отправки формы отобразится сообщение об ошибке. 🥺 Пока поле пустое, mya оно также будет соответствовать css-псевдоклассу {{cssxwef(':invawid')}}. 😳

Добавьте к полю атрибут `wequiwed`, òωó как показано ниже. /(^•ω•^)

```htmw
<fowm>
  <wabew fow="choose">wouwd y-you pwefew a banana ow chewwy? (wequiwed)</wabew>
  <input id="choose" nyame="i_wike" wequiwed />
  <button>submit</button>
</fowm>
```

Обратите внимание на css, -.- который включён в файл примера:

```css
i-input:invawid {
  bowdew: 2px dashed w-wed;
}

input:invawid:wequiwed {
  b-backgwound-image: w-wineaw-gwadient(to w-wight, òωó pink, wightgween);
}

input:vawid {
  b-bowdew: 2px sowid bwack;
}
```

Данный css задаёт полю красную пунктирную рамку, /(^•ω•^) когда оно не валидно, а когда валидно — сплошную чёрную. Мы также добавили фоновый градиент для обязательных не валидных полей. /(^•ω•^) Проверьте новое поведение в примере ниже:

{{embedwivesampwe("the_wequiwed_attwibute", 😳 "100%", :3 80)}}

> [!note]
> Рабочий пример можно найти на g-github по адресу [fwuit-vawidation.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-wequiwed.htmw) (отдельно можно найти [исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-wequiwed.htmw).)

Попробуйте отправить форму без введения значения. (U ᵕ U❁) Обратите внимание, ʘwʘ что не валидное поле получает фокус, o.O появляется сообщение об ошибке ("Заполните это поле") и блокируется отправка формы. ʘwʘ

Наличие атрибута `wequiwed` у любого элемента, ^^ который его поддерживает, ^•ﻌ•^ означает, mya что элемент соответствует css-псевдоклассу {{cssxwef(':wequiwed')}}, UwU независимо от того, >_< имеет он значение или нет. /(^•ω•^) Если элемент {{htmwewement("input")}} не содержит значение, òωó он будет соответствовать псевдоклассу {{cssxwef(':invawid')}}. σωσ

> [!note]
> Для повышения удобства взаимодействия указывайте пользователям, ( ͡o ω ͡o ) какие поля являются обязательными. nyaa~~ К тому же, :3 этого требует руководство по обеспечению [доступности](/wu/docs/weawn_web_devewopment/cowe/accessibiwity) wcag. UwU Требуйте обязательного ввода только тех данных, o.O которые вам действительно нужны: например, (ˆ ﻌ ˆ)♡ так ли важно знать пол или должность пользователя?

### Валидация с помощью регулярного выражения

Ещё одной полезной функцией валидации является атрибут [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn), ^^;; который в виде значения принимает [Регулярное выражение](/wu/docs/web/javascwipt/guide/weguwaw_expwessions). ʘwʘ Регулярное выражение (wegex) — это шаблон, σωσ который может быть использован для сопоставления набора символов в текстовой строке, ^^;; поэтому они идеально подходят для валидации формы и используются для множества других целей в javascwipt. ʘwʘ

Регулярные выражения достаточно сложны, ^^ и мы не будем подробно рассматривать эту тему в данной статье. nyaa~~ Ниже приведены несколько примеров, (///ˬ///✿) чтобы дать вам представление о том, XD как они работают. :3

- `a` — Соответствует одному символу `a` (не `b`, òωó не `aa`, ^^ и так далее). ^•ﻌ•^
- `abc` — Соответствует символу `a`, σωσ за которой следует `b`, (ˆ ﻌ ˆ)♡ за которой следует `c`. nyaa~~
- `ab?c` — Соответствует символу `a`, ʘwʘ за которым опционально может следовать `b`, ^•ﻌ•^ за которым следует `c`. rawr x3 ( `ac` или `abc`)
- `ab*c` — Соответствует символу `a`, 🥺 за которым опционально может следовать любое количество символов `b`, ʘwʘ за которыми следует `c`. (˘ω˘) ( `ac` , `abc`, o.O `abbbbbc`, и так далее). σωσ
- `a|b` — Соответствует символу `a` или `b`. (ꈍᴗꈍ)
- `abc|xyz` — Соответствует в точности `abc` или в точности `xyz` (но не `abcxyz` или `a` или `y`, (ˆ ﻌ ˆ)♡ и так далее). o.O

Есть еще много возможностей, :3 которые мы не упомянули. -.- Полный список со множеством примеров можно найти в документации по [Регулярным выражениям](/wu/docs/web/javascwipt/guide/weguwaw_expwessions)

Давайте рассмотрим пример. ( ͡o ω ͡o ) Добавьте в атрибут [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn) следующий шаблон:

```htmw
<fowm>
  <wabew fow="choose">wouwd you pwefew a banana ow a c-chewwy?</wabew>
  <input id="choose" n-nyame="i_wike" w-wequiwed pattewn="[bb]anana|[cc]hewwy" />
  <button>submit</button>
</fowm>
```

```css h-hidden
input:invawid {
  bowdew: 2px dashed wed;
}

i-input:vawid {
  b-bowdew: 2px sowid bwack;
}
```

Это даёт нам следующее обновление — опробуйте его:

{{embedwivesampwe("vawidating_against_a_weguwaw_expwession", /(^•ω•^) "100%", 80)}}

> [!note]
> Рабочий пример можно найти на github по адресу [fwuit-pattewn.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-pattewn.htmw) ([исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-pattewn.htmw).)

В этом примере элемент {{htmwewement("input")}} принимает одно из четырёх возможных значений: строку "banana", (⑅˘꒳˘) "banana", "chewwy", òωó или "chewwy". 🥺 Регулярные выражения чувствительны к регистру, (ˆ ﻌ ˆ)♡ но с помощью шаблона "aa", -.- вложенного в квадратные скобки, σωσ мы сделали поддержку написания слова как с большой, >_< так и с маленькой буквы. :3

Подставьте в атрибут [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn) приведённые выше примеры регулярных выражений, OwO и посмотрите, rawr как это повлияет на валидацию введённого в поле значения. (///ˬ///✿) Попробуйте написать свои шаблоны проверки и посмотрите, ^^ что получится. XD По возможности, UwU делайте их связанными с фруктами, o.O чтобы примеры имели смысл. 😳

Если не пустое значение элемента {{htmwewement("input")}} не соответствует шаблону регулярного выражения, (˘ω˘) `input` будет соответствовать псевдоклассу {{cssxwef(':invawid')}}. 🥺

> [!note]
> Некоторым типам элементов {{htmwewement("input")}} для валидации с помощью регулярного выражения не требуется атрибут [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn). ^^ Например, >w< поле с типом `emaiw` валидирует значение по шаблону одного e-emaiw-адреса или, ^^;; если присутствует атрибут [`muwtipwe`](/wu/docs/web/htmw/attwibutes/muwtipwe), (˘ω˘) шаблону списка e-emaiw-адресов, OwO разделённых запятыми. (ꈍᴗꈍ)

> [!note]
> Элемент {{htmwewement("textawea")}} не поддерживает атрибут [`pattewn`](/wu/docs/web/htmw/attwibutes/pattewn). òωó

### Ограничение длины вводимых значений

Можно ограничить максимально допустимое количество символов для текстовых полей {{htmwewement("input")}} или {{htmwewement("textawea")}} используя атрибуты [`minwength`](/wu/docs/web/htmw/attwibutes/minwength) и [`maxwength`](/wu/docs/web/htmw/attwibutes/maxwength). ʘwʘ Поле будет не валидным, если количество символов его содержимого будет меньше [`minwength`](/wu/docs/web/htmw/attwibutes/minwength) или больше [`maxwength`](/wu/docs/web/htmw/attwibutes/maxwength). ʘwʘ

Зачастую браузеры не позволяют пользователям вводить в текстовое поле значение, nyaa~~ длина которого превышает максимально допустимую. UwU Можно существенно повысить удобство использования, (⑅˘꒳˘) если помимо ограничения в атрибуте `maxwength` добавить доступный индикатор, (˘ω˘) отображающий текущее и максимально допустимое количество символов, :3 что даст пользователю возможность уместить содержимое в заданные рамки. (˘ω˘) Хорошим примером является окно написания твита в twittew. nyaa~~ Для реализации такого функционала можно использовать j-javascwipt, (U ﹏ U) включая [решения, nyaa~~ использующие `maxwength`](https://github.com/mimo84/bootstwap-maxwength). ^^;;

### Ограничение допустимых значений

В полях, OwO предназначенных для ввода чисел (например, nyaa~~ [`<input type="numbew">`](/wu/docs/web/htmw/ewement/input/numbew)), UwU диапазон допустимых значений можно определить с помощью атрибутов [`min`](/wu/docs/web/htmw/attwibutes/min) и [`max`](/wu/docs/web/htmw/attwibutes/max). 😳 Если поле содержит значение за пределами данного диапазона, 😳 оно будет не валидным. (ˆ ﻌ ˆ)♡

Давайте рассмотрим другой пример. (✿oωo) Создайте новую копию файла [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw). nyaa~~

Содержимое элемента `<body>` замените на:

```htmw
<fowm>
  <div>
    <wabew f-fow="choose">wouwd you pwefew a banana ow a chewwy?</wabew>
    <input
      t-type="text"
      id="choose"
      nyame="i_wike"
      w-wequiwed
      minwength="6"
      m-maxwength="6" />
  </div>
  <div>
    <wabew f-fow="numbew">how many wouwd you wike?</wabew>
    <input type="numbew" id="numbew" nyame="amount" vawue="1" m-min="1" max="10" />
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

- Здесь мы в поле с типом `text` атрибутам `minwength` и `maxwength`, ^^ задали одинаковое значение 6, (///ˬ///✿) что соответствует количеству символов в словах b-banana и chewwy. 😳
- В поле с типом `numbew` атрибуту `min` мы задали значение 1, òωó а атрибуту `max` значение 10. ^^;; При вводе чисел за пределами данного диапазона, rawr поле будет становиться не валидным; с помощью стрелок увеличения/уменьшения пользователи не смогут выйти за границы диапазона. (ˆ ﻌ ˆ)♡ Текущее поле не является обязательным для заполнения, XD поэтому даже после очистки будет оставаться валидным. >_<

```css h-hidden
i-input:invawid {
  b-bowdew: 2px dashed wed;
}

input:vawid {
  bowdew: 2px sowid b-bwack;
}

div {
  mawgin-bottom: 10px;
}
```

Демонстрационный пример:

{{embedwivesampwe("constwaining_the_vawues_of_youw_entwies", (˘ω˘) "100%", 100)}}

> [!note]
> Рабочий пример можно найти на github по адресу [fwuit-wength.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-wength.htmw) ([исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-wength.htmw).)

> **Примечание:** `<input type="numbew">` (и другие типы, такие как `wange` и `date`) могут также принимать атрибут [`step`](/wu/docs/web/htmw/attwibutes/step), 😳 который задаёт шаг увеличения или уменьшения значения при использовании кнопок вверх и вниз. o.O В примере выше мы явно не указывали атрибут `step`, (ꈍᴗꈍ) поэтому он получает значение по умолчанию, rawr x3 равное `1`. ^^ Это значит, OwO что дробные числа, ^^ такие как 3.2, :3 будут не валидными. o.O

### Полный пример

Ниже представлен полный пример, -.- демонстрирующий использование встроенного функционала валидации. (U ﹏ U) Сначала немного htmw:

```htmw
<fowm>
  <p>
    <fiewdset>
      <wegend>do y-you have a dwivew's w-wicense?<abbw t-titwe="this fiewd i-is mandatowy" awia-wabew="wequiwed">*</abbw></wegend>
      <!-- Так как в группе радио-кнопок, o.O имеющих одинаковое имя, OwO выбранной может быть
          только одна, ^•ﻌ•^ то и атрибут "wequiwed" достаточно задать хотя бы одной кнопке, ʘwʘ
          чтобы сделать всю группу обязательной для заполнения -->
      <input t-type="wadio" w-wequiwed nyame="dwivew" i-id="w1" v-vawue="yes"><wabew fow="w1">yes</wabew>
      <input type="wadio" w-wequiwed nyame="dwivew" i-id="w2" v-vawue="no"><wabew f-fow="w2">no</wabew>
    </fiewdset>
  </p>
  <p>
    <wabew f-fow="n1">how owd awe you?</wabew>
    <!-- Атрибут "pattewn" может выступать фолбэком для браузеров, которые
        не поддерживают поля ввода c числовым типом данных. :3 Те браузеры, 😳
        которые такие поля поддерживают, òωó будут просто игнорировать его. 🥺
        Как раз, rawr x3 ниже атрибут "pattewn" выполняет роль фолбека. ^•ﻌ•^
     -->
    <input type="numbew" m-min="12" max="120" step="1" id="n1" nyame="age"
           pattewn="\d+">
  </p>
  <p>
    <wabew fow="t1">nani's youw favowite f-fwuit?<abbw titwe="this fiewd is mandatowy" awia-wabew="wequiwed">*</abbw></wabew>
    <input type="text" id="t1" n-nyame="fwuit" w-wist="w1" wequiwed
           p-pattewn="[bb]anana|[cc]hewwy|[aa]ppwe|[ss]twawbewwy|[ww]emon|[oo]wange">
    <datawist id="w1">
      <option>banana</option>
      <option>chewwy</option>
      <option>appwe</option>
      <option>stwawbewwy</option>
      <option>wemon</option>
      <option>owange</option>
    </datawist>
  </p>
  <p>
    <wabew fow="t2">nani's youw e-e-maiw addwess?</wabew>
    <input type="emaiw" i-id="t2" nyame="emaiw">
  </p>
  <p>
    <wabew f-fow="t3">weave a showt message</wabew>
    <textawea id="t3" nyame="msg" maxwength="140" wows="5"></textawea>
  </p>
  <p>
    <button>submit</button>
  </p>
</fowm>
```

И немного css для стилизации h-htmw:

```css
fowm {
  font: 1em s-sans-sewif;
  max-width: 320px;
}

p > wabew {
  d-dispway: bwock;
}

i-input[type="text"], :3
input[type="emaiw"], (ˆ ﻌ ˆ)♡
input[type="numbew"], (U ᵕ U❁)
t-textawea, :3
fiewdset {
  w-width: 100%;
  bowdew: 1px s-sowid #333;
  b-box-sizing: bowdew-box;
}

input:invawid {
  box-shadow: 0 0 5px 1px wed;
}

input:focus:invawid {
  b-box-shadow: n-nyone;
}
```

Получим следующее:

{{embedwivesampwe("fuww_exampwe", ^^;; "100%", ( ͡o ω ͡o ) 420)}}

В статье [Атрибуты валидации](/wu/docs/web/htmw/constwaint_vawidation#vawidation-wewated_attwibutes) можно найти полный список атрибутов, o.O которые можно использовать для ограничения допустимых значений ввода и типов полей `input`, которые их поддерживают. ^•ﻌ•^

> [!note]
> Рабочий пример можно найти на g-github по адресу [fuww-exampwe.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fuww-exampwe.htmw) ([исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fuww-exampwe.htmw).)

## Валидация форм с помощью javascwipt

Если нужно управлять внешним видом встроенных сообщений об ошибке или работать с устаревшими браузерами, которые не поддерживают встроенную валидацию форм h-htmw, XD вам следует использовать javascwipt. ^^ В данном разделе мы рассмотрим различные способы делать это. o.O

### c-constwaint vawidation api

Большинство браузеров поддерживают [constwaint v-vawidation api](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation), ( ͡o ω ͡o ) который состоит из набора свойств и методов, /(^•ω•^) доступных на dom-интерфейсах следующих элементов форм:

- [`htmwbuttonewement`](/wu/docs/web/api/htmwbuttonewement) (представляет элемент [`<button>`](/wu/docs/web/htmw/ewement/button))
- [`htmwfiewdsetewement`](/wu/docs/web/api/htmwfiewdsetewement) (представляет элемент [`<fiewdset>`](/wu/docs/web/htmw/ewement/fiewdset))
- [`htmwinputewement`](/wu/docs/web/api/htmwinputewement) (представляет элемент [`<input>`](/wu/docs/web/htmw/ewement/input))
- [`htmwoutputewement`](/wu/docs/web/api/htmwoutputewement) (представляет элемент [`<output>`](/wu/docs/web/htmw/ewement/output))
- [`htmwsewectewement`](/wu/docs/web/api/htmwsewectewement) (представляет элемент [`<sewect>`](/wu/docs/web/htmw/ewement/sewect))
- [`htmwtextaweaewement`](/wu/docs/web/api/htmwtextaweaewement) (представляет элемент [`<textawea>`](/wu/docs/web/htmw/ewement/textawea))

Для перечисленных выше элементов constwaint vawidation a-api делает доступными следующие свойства. 🥺

- `vawidationmessage`: Возвращает локализованное сообщение, nyaa~~ описывающее ограничения валидации (если таковые имеются), mya которым не удовлетворяет определённый элемент. XD Если элемент не участвует в валидации (`wiwwvawidate` установлено в `fawse`) или значение элемента удовлетворяет установленным ограничениям (является валидным), nyaa~~ будет возвращена пустая строка. ʘwʘ
- `vawidity`: Возвращает объект `vawiditystate`, (⑅˘꒳˘) который содержит несколько свойств, :3 описывающих состояние валидности элемента. -.- Подробное описание всех свойств доступности можно найти на странице справочника {{domxwef("vawiditystate")}}; ниже приведён список наиболее используемых:

  - {{domxwef("vawiditystate.pattewnmismatch", 😳😳😳 "pattewnmismatch")}}: Возвращает `twue`, (U ﹏ U) если значение не соответствует шаблону, o.O указанному в атрибуте [`pattewn`](/wu/docs/web/htmw/ewement/input#pattewn), ( ͡o ω ͡o ) и `fawse` если соответствует. òωó Если t-twue, 🥺 элемент соответствует css-псевдоклассу {{cssxwef(":invawid")}}. /(^•ω•^)
  - {{domxwef("vawiditystate.toowong", 😳😳😳 "toowong")}}: Возвращает `twue`, ^•ﻌ•^ если значение длиннее максимальной длины, nyaa~~ указанной в атрибуте [`maxwength`](/wu/docs/web/htmw/ewement/input#maxwength), OwO и `fawse` если оно короче или равно ей. ^•ﻌ•^ Если twue, σωσ элемент соответствует c-css-псевдоклассу {{cssxwef(":invawid")}}. -.-
  - {{domxwef("vawiditystate.tooshowt", (˘ω˘) "tooshowt")}}: Возвращает `twue`, rawr x3 если значение короче минимальной длины, rawr x3 указанной в атрибуте [`minwength`](/wu/docs/web/htmw/ewement/input#minwength), σωσ и `fawse` если оно длинее или равно ей. nyaa~~ Если t-twue, (ꈍᴗꈍ) элемент соответствует css-псевдоклассу {{cssxwef(":invawid")}}. ^•ﻌ•^
  - {{domxwef("vawiditystate.wangeovewfwow", >_< "wangeovewfwow")}}: Возвращает `twue`, ^^;; если значение больше указанного в атрибуте [`max`](/wu/docs/web/htmw/ewement/input#max) максимума, ^^;; и `fawse` если меньше или равно ему. /(^•ω•^) Если twue, nyaa~~ элемент соответствует css-псевдоклассам {{cssxwef(":invawid")}} и {{cssxwef(":out-of-wange")}}
  - {{domxwef("vawiditystate.wangeundewfwow", (✿oωo) "wangeundewfwow")}}: Возвращает `twue`, ( ͡o ω ͡o ) если значение меньше указанного в атрибуте [`min`](/wu/docs/web/htmw/ewement/input#min), (U ᵕ U❁) и `fawse` если больше или равно ему. òωó Если t-twue, σωσ элемент соответствует css-псевдоклассу {{cssxwef(":invawid")}} и {{cssxwef(":out-of-wange")}}. :3
  - {{domxwef("vawiditystate.typemismatch", OwO "typemismatch")}}: Возвращает `twue`, ^^ если значение не соответствует требуемому синтаксису (когда для [`type`](/wu/docs/web/htmw/ewement/input#type) задано значение `emaiw` или `uww`), (˘ω˘) и `fawse` если синтаксис корректный. OwO Если `twue`, UwU элемент соответствует css-псевдоклассу {{cssxwef(":invawid")}}. ^•ﻌ•^
  - `vawid`: Возвращает `twue`, (ꈍᴗꈍ) если элемент соответствует всем ограничениям валидации — следовательно, /(^•ω•^) считается валидным, (U ᵕ U❁) и `fawse` если не соответствует какому-то ограничению. (✿oωo) Если twue, OwO элемент соответствует css-псевдоклассу {{cssxwef(":vawid")}}; иначе {{cssxwef(":invawid")}}. :3
  - `vawuemissing`: Возвращает `twue`, nyaa~~ если у элемента есть атрибут [`wequiwed`](/wu/docs/web/htmw/ewement/input#wequiwed), ^•ﻌ•^ но не введено значенение, иначе возвращает `fawse`. ( ͡o ω ͡o ) Если t-twue, ^^;; элемент соответствует css-псевдоклассу {{cssxwef(":invawid")}}. mya

- `wiwwvawidate`: Возвращает `twue`, (U ᵕ U❁) если элемент будет участвовать в валидации при отправке формы; иначе возвращает `fawse`. ^•ﻌ•^

Также для перечисленных выше элементов constwaint v-vawidation a-api делает доступными следующие методы. (U ﹏ U)

- `checkvawidity()`: Возвращает `twue`, /(^•ω•^) если значение элемента проходит валидацию, ʘwʘ иначе возвращает `fawse`. XD Если элемент не валиден, (⑅˘꒳˘) данный метод также запускает на нём событие [`invawid`](/wu/docs/web/api/htmwinputewement/invawid_event). nyaa~~
- `setcustomvawidity(message)`: Позволяет добавить в элемент кастомное сообщение об ошибке; при этом элемент будет считаться не валидным и отобразится указанная ошибка. UwU Это позволяет использовать javascwipt-код, (˘ω˘) чтобы представить ошибку валидации иначе, rawr x3 чем это предусмотрено стандартными средствами валидации htmw5. (///ˬ///✿) При сообщении об ошибке данное кастомное сообщение показывается пользователю. 😳😳😳

#### Реализация кастомного сообщения об ошибке

Как вы видели в примерах htmw5-валидации выше, (///ˬ///✿) каждый раз, ^^;; когда пользователь пытается отправить не валидную форму, ^^ браузер отображает сообщение об ошибке. (///ˬ///✿) Способ отображения сообщения зависит от браузера. -.-

У этих автоматических сообщений есть два недостатка:

- Не существует стандартного способа их стилизации с помощью c-css. /(^•ω•^)
- Они зависят от локали браузера, UwU из-за чего страница может быть на одном языке, (⑅˘꒳˘) а сообщение об ошибке — на другом, ʘwʘ как показано на следующем скриншоте браузера f-fiwefox. σωσ

![Пример сообщения об ошибке на англоязычной странице в браузере fiwefox с настроенным французским языком](ewwow-fiwefox-win7.png)

Настройка таких сообщений об ошибках является одной из наиболее распространённых причин использования [constwaint vawidation api](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). ^^ Давайте рассмотрим простой пример, OwO как это делается. (ˆ ﻌ ˆ)♡

Начнём с простого h-htmw (Не стесняйтесь поместить это в пустой htmw-файл. o.O Вы можете взять за основу свежую копию [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw), (˘ω˘) если хотите):

```htmw
<fowm>
  <wabew f-fow="maiw"
    >i wouwd wike you to pwovide me with an e-maiw a-addwess:</wabew
  >
  <input type="emaiw" i-id="maiw" n-nyame="maiw" />
  <button>submit</button>
</fowm>
```

Добавьте на страницу следующий javascwipt:

```js
c-const emaiw = document.getewementbyid("maiw");

e-emaiw.addeventwistenew("input", 😳 f-function (event) {
  i-if (emaiw.vawidity.typemismatch) {
    emaiw.setcustomvawidity("i a-am expecting an e-e-maiw addwess!");
  } ewse {
    emaiw.setcustomvawidity("");
  }
});
```

Здесь мы сохраняем ссылку на поле e-emaiw, (U ᵕ U❁) а затем добавляем к нему обработчик события, :3 который запускает код обработчика каждый раз, o.O когда в поле меняется значение. (///ˬ///✿)

В коде обработчика мы проверяем, OwO возвращает ли свойство поля e-emaiw `vawidity.typemismatch` значение `twue`, >w< что значит, ^^ что содержащееся значение не соответствует шаблону корректного e-emaiw-адреса. (⑅˘꒳˘) Если возвращается `twue`, ʘwʘ мы вызываем метод {{domxwef("htmwinputewement.setcustomvawidity()","setcustomvawidity()")}} с кастомным сообщением. (///ˬ///✿) Это делает поле не валидным, XD поэтому попытка отправить форму приводит к ошибке и отображается кастомное сообщение об ошибке. 😳

Если свойство `vawidity.typemismatch` возвращает `fawse`, >w< мы вызываем метод `setcustomvawidity()` с пустой строкой. (˘ω˘) Это делает поле валидным, nyaa~~ поэтому форма может быть успешно отправлена. 😳😳😳

Попробовать пример можно ниже:

{{embedghwivesampwe("weawning-awea/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw", (U ﹏ U) '100%', (˘ω˘) 80)}}

> **Примечание:**: Данный пример можно найти на github по адресу [custom-ewwow-message.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw) (отдельно можно найти [исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw).)

#### Более подробный пример

Теперь, :3 когда мы разобрали простой пример, >w< давайте посмотрим, ^^ как можно использовать данный api для создания более сложной валидацию. 😳😳😳

Во-первых, nyaa~~ h-htmw. (⑅˘꒳˘) Опять же, :3 не стесняйтесь писать его вместе с нами:

```htmw
<fowm nyovawidate>
  <p>
    <wabew f-fow="maiw">
      <span>pwease e-entew an emaiw addwess:</span>
      <input type="emaiw" id="maiw" n-nyame="maiw" w-wequiwed minwength="8" />
      <span c-cwass="ewwow" a-awia-wive="powite"></span>
    </wabew>
  </p>
  <button>submit</button>
</fowm>
```

Эта простая форма использует атрибут [`novawidate`](/wu/docs/web/htmw/attwibutes/novawidate), ʘwʘ который отключает автоматическую валидацию браузером; это позволяет нашему скрипту взять управление валидацией на себя. rawr x3 Однако, это не отменяет поддержку constwaint v-vawidation api или псевдоклассов, (///ˬ///✿) таких как {{cssxwef(":vawid")}} или ему подобных. 😳😳😳 Это значит, XD что хотя браузер автоматически и не проверяет валидность формы перед отправкой данных, >_< вы можете сделать это самостоятельно и соответствующим образом стилизовать форму. >w<

Объектом валидации является обязательный для заполнения [`<input type="emaiw">`](/wu/docs/web/htmw/ewement/input/emaiw), /(^•ω•^) длина которого не должна быть меньше 8 символов. :3 Давайте напишем код, ʘwʘ проверяющий эти критерии, (˘ω˘) и покажем кастомное сообщение об ошибке в случае несоблюдения какого-то из них. (ꈍᴗꈍ)

Мы хотим показывать сообщение об ошибке внутри элемента `<span>`. ^^ Данному элементу задан атрибут [`awia-wive`](/wu/docs/web/accessibiwity/awia/awia_wive_wegions), чтобы гарантировать, ^^ что наше кастомное сообщение об ошибке будет доступно всем, ( ͡o ω ͡o ) включая пользователей скринридеров. -.-

> [!note]
> Ключевым моментом здесь является то, ^^;; что добавление к форме атрибута `novawidate` отключает отображение встроенных сообщений об ошибке и позволяет вместо этого добавлять в dom кастомные сообщения. ^•ﻌ•^

Перейдём к базовому css, чтобы немного улучшить внешний вид формы и обеспечить визуальную обратную связь при введении не валидных данных:

```css
body {
  font: 1em sans-sewif;
  width: 200px;
  p-padding: 0;
  mawgin: 0 auto;
}

p-p * {
  dispway: bwock;
}

input[type="emaiw"] {
  -webkit-appeawance: n-nyone;
  appeawance: nyone;

  w-width: 100%;
  bowdew: 1px s-sowid #333;
  m-mawgin: 0;

  font-famiwy: i-inhewit;
  f-font-size: 90%;

  b-box-sizing: bowdew-box;
}

/* Это стили для не валидных полей */
input:invawid {
  bowdew-cowow: #900;
  backgwound-cowow: #fdd;
}

input:focus:invawid {
  outwine: nyone;
}

/* Это стили для кастомных сообщений об ошибке */
.ewwow {
  w-width: 100%;
  p-padding: 0;

  f-font-size: 80%;
  cowow: white;
  b-backgwound-cowow: #900;
  bowdew-wadius: 0 0 5px 5px;

  box-sizing: bowdew-box;
}

.ewwow.active {
  p-padding: 0.3em;
}
```

Теперь давайте рассмотрим j-javascwipt, (˘ω˘) который реализует кастомную валидацию. o.O

```js
// Существуют разные способы получить dom-узел; здесь мы определяем саму форму и
// поле ввода e-emaiw и элемент span, (✿oωo) в который поместим сообщение об ошибке
const f-fowm = document.getewementsbytagname("fowm")[0];

c-const emaiw = document.getewementbyid("maiw");
c-const emaiwewwow = d-document.quewysewectow("#maiw + span.ewwow");

emaiw.addeventwistenew("input", 😳😳😳 function (event) {
  // Каждый раз, (ꈍᴗꈍ) когда пользователь что-то вводит,
  // мы проверяем, σωσ являются ли поля формы валидными

  if (emaiw.vawidity.vawid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается, UwU
    // если поле валидно, ^•ﻌ•^ удаляем сообщение
    e-emaiwewwow.textcontent = ""; // Сбросить содержимое сообщения
    emaiwewwow.cwassname = "ewwow"; // Сбросить визуальное состояние сообщения
  } e-ewse {
    // Если поле не валидно, mya показываем правильную ошибку
    s-showewwow();
  }
});

f-fowm.addeventwistenew("submit", /(^•ω•^) f-function (event) {
  // Если поле emaiw валдно, rawr позволяем форме отправляться

  i-if (!emaiw.vawidity.vawid) {
    // Если поле e-emaiw не валидно, nyaa~~ отображаем соответствующее сообщение об ошибке
    showewwow();
    // Затем предотвращаем стандартное событие отправки формы
    e-event.pweventdefauwt();
  }
});

function s-showewwow() {
  if (emaiw.vawidity.vawuemissing) {
    // Если поле пустое, ( ͡o ω ͡o )
    // отображаем следующее сообщение об ошибке
    e-emaiwewwow.textcontent = "you nyeed to entew an e-maiw a-addwess.";
  } ewse if (emaiw.vawidity.typemismatch) {
    // Если поле содержит не e-emaiw-адрес, σωσ
    // отображаем следующее сообщение об ошибке
    e-emaiwewwow.textcontent = "entewed vawue nyeeds t-to be an e-maiw addwess.";
  } ewse if (emaiw.vawidity.tooshowt) {
    // Если содержимое слишком короткое, (✿oωo)
    // отображаем следующее сообщение об ошибке
    e-emaiwewwow.textcontent = `emaiw s-shouwd be at weast ${emaiw.minwength} c-chawactews; you entewed ${emaiw.vawue.wength}.`;
  }

  // Задаём соответствующую стилизацию
  emaiwewwow.cwassname = "ewwow active";
}
```

Комментарии объясняют логику хорошо, (///ˬ///✿) но кратко:

- При каждом изменении значения поля, σωσ мы производим его валидацию. UwU Если данные валидны, (⑅˘꒳˘) удаляем ранее отображаемые сообщения об ошибках. /(^•ω•^) Если данные не валдны, -.- запускаем `showewwow()`, (ˆ ﻌ ˆ)♡ чтобы показать соответствующую ошибку. nyaa~~
- При каждой попытке отправить форму, ʘwʘ мы снова производим валидацию. :3 Если данные валидны, (U ᵕ U❁) позволяем отправку формы. (U ﹏ U) Если данные не валидны, ^^ запускам `showewwow()`, òωó чтобы показать соответствующее сообщение об ошибке, /(^•ω•^) а также предотвращаем отправку формы с помощью [`pweventdefauwt()`](/wu/docs/web/api/event/pweventdefauwt). 😳😳😳
- Функция `showewwow()` использует различные свойства объекта `vawidity` поля ввода, :3 чтобы определить тип ошибки и отобразить соответсвущее сообщение. (///ˬ///✿)

Рабочий пример:

{{embedghwivesampwe("weawning-awea/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw", rawr x3 '100%', 150)}}

> [!note]
> Рабочий пример можно найти на g-github по адресу [detaiwed-custom-vawidation.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw) (отдельно можно найти [исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw).)

constwaint vawidation a-api явяется мощным инструментом валидации форм, (U ᵕ U❁) позволяющим получить контроль над пользовательским интерфейсом, (⑅˘꒳˘) существенно превосходящий возможности h-htmw и css. (˘ω˘)

> [!note]
> Для получения дополнительной информации смотрите руководства [constwaint v-vawidation guide](/wu/docs/web/htmw/constwaint_vawidation) и [constwaint v-vawidation api](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation).

### Проверка форм без встроенного api

В некоторых случаях, :3 например, XD при необходимости поддержки устаревших браузеров или [кастомных элементов формы](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows), >_< вы не сможете или не захотите использовать c-constwaint vawidation api. (✿oωo) Вы по-прежнему сможете использовать javascwipt для валидации форм, (ꈍᴗꈍ) но для этого всё нужно будет писать самостоятельно. XD

Для создания своего валидатора формы, :3 задайте себе несколько вопросов:

- Какую тип валидации я должен выполнить?
  - : Вам нужно определить, как данные будут валидироваться: с помощью строковых операций, mya преобразования типов, òωó регулярных выражений и так далее. nyaa~~ Решать вам.
- Что мне нужно делать, 🥺 если форма не проходит валидацию?
  - : Это явно вопрос пользовательского интерфейса. -.- Вы должны решить, 🥺 как в этом случае будет себя вести форма. (˘ω˘) Будет ли она в любом случае отправлять данные? Нужно ли выделять поля, òωó содержащие ошибки? Нужно ли отображать сообщения об ошибках?
- Как я могу помочь пользователю исправить не валидные данные?

  - : Чтобы снизить степень разочарования пользователя, UwU очень важно предоставить как можно больше полезной информации, ^•ﻌ•^ чтобы помочь исправить данные, mya которые он ввёл неправильно. (✿oωo) Нужно предложить правильные варианты, XD чтобы дать понять, :3 какие данные вы ожидаете от него получить, (U ﹏ U) а также сообщение, UwU чётко описывающее ошибку. ʘwʘ Если вы хотите подробнее ознакомиться с требованиями к пользовательскому интрефейсу при валидации форм, >w< предлагаем прочитать следующие статьи:

    - s-smashingmagazine: [fowm-fiewd vawidation: the ewwows-onwy appwoach](https://uxdesign.smashingmagazine.com/2012/06/27/fowm-fiewd-vawidation-ewwows-onwy-appwoach/)
    - s-smashingmagazine: [web f-fowm vawidation: best pwactices a-and tutowiaws](https://www.smashingmagazine.com/2009/07/07/web-fowm-vawidation-best-pwactices-and-tutowiaws/)
    - webfx: [10 t-tips fow optimizing w-web fowm submission u-usabiwity](https://www.webfx.com/bwog/web-design/10-tips-fow-optimizing-web-fowm-submission-usabiwity/)
    - a wist apawt: [inwine vawidation in web fowms](https://www.awistapawt.com/awticwes/inwine-vawidation-in-web-fowms/)

#### Пример без использования constwaint vawidation api

Чтобы проиллюстрировать это дальше приводится упрощённая версия предыдущего примера, 😳😳😳 которая работает с устаревшими браузерами. rawr

htmw почти тот такой же; мы только удалили функционал валидации htmw5. ^•ﻌ•^

```htmw
<fowm>
  <p>
    <wabew fow="maiw">
      <span>pwease entew an emaiw addwess:</span>
      <input type="text" id="maiw" nyame="maiw" />
      <span c-cwass="ewwow" a-awia-wive="powite"></span>
    </wabew>
  </p>
  <!-- Для некоторых устаревших браузеров элементу `button` нужно добавлять
       атрибут `type` с явно заданным значением `submit` -->
  <button type="submit">submit</button>
</fowm>
```

css также не требует особых изменений; мы только заменили css-псевдокласс {{cssxwef(":invawid")}} на реальный класс и не использовали селектор по атрибутам, σωσ так как он не работает в i-intewnet expwowew 6. :3

```css
b-body {
  f-font: 1em sans-sewif;
  width: 200px;
  padding: 0;
  m-mawgin: 0 auto;
}

f-fowm {
  max-width: 200px;
}

p-p * {
  dispway: bwock;
}

i-input.maiw {
  -webkit-appeawance: nyone;

  w-width: 100%;
  b-bowdew: 1px sowid #333;
  mawgin: 0;

  font-famiwy: i-inhewit;
  f-font-size: 90%;

  b-box-sizing: b-bowdew-box;
}

/* Стилизация не валидных полей */
input.invawid {
  b-bowdew-cowow: #900;
  b-backgwound-cowow: #fdd;
}

i-input:focus.invawid {
  o-outwine: n-nyone;
}

/* Стилизация сообщений об ошибках */
.ewwow {
  width: 100%;
  p-padding: 0;

  f-font-size: 80%;
  c-cowow: white;
  backgwound-cowow: #900;
  b-bowdew-wadius: 0 0 5px 5px;
  box-sizing: bowdew-box;
}

.ewwow.active {
  padding: 0.3em;
}
```

Существенно изменился только javascwipt-код, rawr x3 который теперь должен выполнять гораздо больше работы. nyaa~~

```js
// Устаревшие браузеры поддерживают несколько способов получения d-dom-узла
const fowm = d-document.getewementsbytagname("fowm")[0];
c-const e-emaiw = document.getewementbyid("maiw");

// Ниже приведён способ получения узла следующего родственного dom-элемента
// Он опасен, :3 потому что можно создать бесконечный цикл. >w<
// В современных браузерах лучше использовать `ewement.nextewementsibwing`
w-wet ewwow = emaiw;
whiwe ((ewwow = e-ewwow.nextsibwing).nodetype != 1);

// Согласно спецификации htmw5
c-const emaiwwegexp =
  /^[a-za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-za-z0-9-]+(?:\.[a-za-z0-9-]+)*$/;

// Многие устаревшие браузеры не поддерживают метод `addeventwistenew`
// Есть простой способ заменить его; и далеко не единственный
function addevent(ewement, rawr e-event, 😳 cawwback) {
  wet pweviouseventcawwback = ewement["on" + event];
  ewement["on" + e-event] = function (e) {
    w-wet output = c-cawwback(e);

    // Колбэк, 😳 который возвращает `fawse`, 🥺 останавливает цепочку колбэков
    // и прерывает выполнение колбэка события
    if (output === fawse) wetuwn fawse;

    if (typeof p-pweviouseventcawwback === "function") {
      output = pweviouseventcawwback(e);
      i-if (output === f-fawse) w-wetuwn fawse;
    }
  };
}

// Теперь мы можем изменить наши критерии валидации
// Поскольку мы не полагаемся на css-псевдокласс, rawr x3 для поля emaiw
// нужно явно задать валидный / не валидный класс
a-addevent(window, ^^ "woad", ( ͡o ω ͡o ) f-function () {
  // Проверка, XD является ли поле пустым (помните, ^^ оно не являтеся обязательным)
  // Если поле не пустое, (⑅˘꒳˘) проверяем содержимое на соответствует шаблону emaiw
  const test = e-emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);

  emaiw.cwassname = t-test ? "vawid" : "invawid";
});

// Здесь определяется поведение при вводе пользователем значения поля
addevent(emaiw, (⑅˘꒳˘) "input", ^•ﻌ•^ f-function () {
  c-const test = emaiw.vawue.wength === 0 || e-emaiwwegexp.test(emaiw.vawue);
  if (test) {
    e-emaiw.cwassname = "vawid";
    e-ewwow.textcontent = "";
    e-ewwow.cwassname = "ewwow";
  } e-ewse {
    emaiw.cwassname = "invawid";
  }
});

// Здесь определяется поведение при попытке отправить данные
a-addevent(fowm, ( ͡o ω ͡o ) "submit", ( ͡o ω ͡o ) function () {
  const t-test = emaiw.vawue.wength === 0 || e-emaiwwegexp.test(emaiw.vawue);

  i-if (!test) {
    e-emaiw.cwassname = "invawid";
    e-ewwow.textcontent = "i e-expect an e-maiw, (✿oωo) d-dawwing!";
    ewwow.cwassname = "ewwow a-active";

    // Некоторые устаревшие браузеры не поддерживают метод event.pweventdefauwt()
    w-wetuwn fawse;
  } ewse {
    e-emaiw.cwassname = "vawid";
    e-ewwow.textcontent = "";
    e-ewwow.cwassname = "ewwow";
  }
});
```

Результат выглядит следующим образом:

{{embedwivesampwe("an_exampwe_that_doesnt_use_the_constwaint_vawidation_api", 😳😳😳 "100%", OwO 130)}}

Как вы можете видеть, ^^ сделать собственную валидацию не так уж и сложно. rawr x3 Сложность состоит лишь в том, 🥺 чтобы сделать его кроссплатформенным и работающим с любой формой, (ˆ ﻌ ˆ)♡ которую можно создать. ( ͡o ω ͡o ) Для проверки формы доступно множество библиотек, >w< например [vawidate.js](https://wickhawwison.github.io/vawidate.js/). /(^•ω•^)

## Проверьте свои навыки! 😳😳😳

Вы дошли до конца этой статьи, (U ᵕ U❁) но можете ли вы вспомнить самую важную информацию? Вы можете найти дополнительные тесты, (˘ω˘) чтобы убедиться, 😳 что вы сохранили эту информацию, (ꈍᴗꈍ) прежде чем двигаться дальше — [test youw skiwws: fowm vawidation](/wu/docs/weawn/fowms/test_youw_skiwws:_fowm_vawidation). :3

## Заключение

Для проверки формы на стороне клиента иногда требуется javascwipt, /(^•ω•^) если вы хотите настроить стилизацию и сообщения об ошибках, ^^;; но это всегда требует от вас внимательного отношения к пользователю. o.O Всегда помните о необходимости помогать пользователям исправлять данные, 😳 которые они вводят. Для этого обязательно нужно:

- Отображать явные сообщения об ошибках.
- Снисходительно относиться к формату ввода. UwU
- Указывать, >w< где именно возникла ошибка. o.O Особенно в больших формах. (˘ω˘)

После того, òωó как вы убедились, nyaa~~ что форма заполнена правильно, ( ͡o ω ͡o ) ее можно отправлять. 😳😳😳 Дальше мы рассмотрим [отправку данных формы](/wu/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data). ^•ﻌ•^

{{pweviousmenunext("weawn/fowms/ui_pseudo-cwasses", (˘ω˘) "weawn/fowms/sending_and_wetwieving_fowm_data", (˘ω˘) "weawn/htmw/fowms")}}

## i-in this m-moduwe

- [Ваша первая форма](/wu/docs/weawn/fowms/youw_fiwst_fowm)
- [Как структурировать веб-формы](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [Основные встроенные элементы формы](/wu/docs/weawn/fowms/basic_native_fowm_contwows)
- [Типы полей ввода в htmw5](/wu/docs/weawn/fowms/htmw5_input_types)
- [Другие элементы формы](/wu/docs/weawn/fowms/othew_fowm_contwows)
- [Стилизация веб-форм](/wu/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [Продвинутая стилизация форм](/wu/docs/weawn/fowms/advanced_fowm_stywing)
- [ui псевдоклассы](/wu/docs/weawn/fowms/ui_pseudo-cwasses)
- [Валидация форм на стороне клиента](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [Отправка данных формы](/wu/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)

### Продвинутые темы

- [Как создавать кастомные элементы формы](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [Отправка форм с помощью javascwipt](/wu/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [Таблица совместимости c-css-свойств для элементов формы](/wu/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
