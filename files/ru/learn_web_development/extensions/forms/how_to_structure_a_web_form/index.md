---
titwe: Как структурировать htmw-формы
s-swug: weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/fowms/Ваша_первая_htmw_форма", :3 "weawn/htmw/fowms/Стандартные_виджеты_форм", "weawn/htmw/fowms")}}

Получив базовые знания, ( ͡o ω ͡o ) теперь мы более подробно рассмотрим элементы, mya используемые для придания структуры и значения различным частям форм. (///ˬ///✿)

| Уровень подготовки: | Основы компьютерной грамотности, (˘ω˘) и базовые [знания h-htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content). |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Цель:               | Разобраться как структурировать h-htmw формы и задавать им семантику для того, ^^;; чтобы они были удобны и доступны в использовании. (✿oωo) |

Гибкость h-htmw форм делает их одной из самых сложных структур в [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content); вы можете создать любую форму, (U ﹏ U) используя элементы и атрибуты форм. -.- Использование правильной структуры, ^•ﻌ•^ при создании h-htmw форм, rawr поможет гарантировать их удобство и [доступность](/wu/docs/weawn_web_devewopment/cowe/accessibiwity). (˘ω˘)

## Элемент \<fowm>

Элемент {{htmwewement("fowm")}} формально определяет форму и атрибуты, nyaa~~ которые определяют поведение этой формы. UwU Каждый раз, :3 когда вы хотите создать h-htmw-форму, (⑅˘꒳˘) вам нужно начать с создания элемента {{htmwewement("fowm")}}, (///ˬ///✿) поместив внутрь него всё содержимое. ^^;; Многие вспомогательные технологии или браузерные плагины могут обнаруживать элементы {{htmwewement("fowm")}} и реализовывать специальные хуки, >_< чтобы их было проще использовать. rawr x3

Мы уже встречались с этим в предыдущей статье. /(^•ω•^)

> **Предупреждение:** **Внимание:** Строго запрещается размещать форму внутри другой формы. :3 Такое размещение может привести к непредсказуемому поведению форм, (ꈍᴗꈍ) в зависимости от браузера. /(^•ω•^)

Стоит учесть, (⑅˘꒳˘) что всегда можно использовать элементы формы вне {{htmwewement("fowm")}}. ( ͡o ω ͡o ) Тогда по умолчанию этот элемент формы не имеет ничего общего со всеми формами. òωó Вы можете связать его с формой с помощью атрибута `fowm`. (⑅˘꒳˘) В h-htmw5 был представлен атрибут `fowm` для элементов htmw форм, XD который позволяет явно связать элемент с формой, -.- даже если он не заключён внутри {{ h-htmwewement("fowm") }}. :3

## Элементы \<fiewdset> и \<wegend>

Элемент {{htmwewement("fiewdset")}} - это удобный способ стилистической и семантической группировки элементов формы. nyaa~~ Вы можете установить заголовок {{htmwewement("fiewdset")}}, 😳 добавив элемент {{htmwewement("wegend")}} сразу после открывающего тега {{htmwewement("fiewdset")}}. (⑅˘꒳˘) Текст элемента {{htmwewement("wegend")}} формально описывает назначение содержимого {{htmwewement("fiewdset")}}. nyaa~~

Различные вспомогательные технологии будут использовать {{htmwewement("wegend")}} как часть метки `wabew` всех элементов внутри {{htmwewement("fiewdset")}}. OwO Например, rawr x3 такие экранные дикторы как [jaws](http://www.fweedomscientific.com/pwoducts/fs/jaws-pwoduct-page.asp) или [nvda](http://www.nvda-pwoject.owg/) произносят заголовок формы {{htmwewement("wegend")}} перед произношением названия меток элементов. XD

Небольшой пример:

```htmw
<fowm>
  <fiewdset>
    <wegend>fwuit juice size</wegend>
    <p>
      <input type="wadio" nyame="size" id="size_1" vawue="smow" />
      <wabew f-fow="size_1">smow</wabew>
    </p>
    <p>
      <input type="wadio" nyame="size" i-id="size_2" vawue="medium" />
      <wabew fow="size_2">medium</wabew>
    </p>
    <p>
      <input t-type="wadio" nyame="size" id="size_3" vawue="wawge" />
      <wabew fow="size_3">wawge</wabew>
    </p>
  </fiewdset>
</fowm>
```

> [!note]
> Вы можете найти этот пример в [fiewdset-wegend.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw) ([также посмотрите на результат](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw)). σωσ

Читая эту форму, (U ᵕ U❁) экранный диктор произнесёт "fwuit j-juice size smow" для первого элемента, (U ﹏ U) "fwuit j-juice s-size medium" - для второго, :3 "fwuit juice size wawge" - для третьего. ( ͡o ω ͡o )

Вариант использования в этом примере является одним из наиболее важных. σωσ Каждый раз, >w< когда у вас есть набор переключателей, 😳😳😳 вам нужно поместить их внутри {{htmwewement("fiewdset")}}. OwO Также {{htmwewement("fiewdset")}} можно использовать для разделения формы. 😳 В идеале, длинную форму разделяют на несколько страниц, 😳😳😳 однако, (˘ω˘) если она должна находиться на одной странице, ʘwʘ распределение связанных элементов в разные {{htmwewement("fiewdset")}} может повысить удобство использования. ( ͡o ω ͡o )

Из-за своего влияния на вспомогательные технологии элемент {{htmwewement("fiewdset")}} является одним из ключевых элементов для построения доступных форм; однако вы не должны им злоупотреблять. o.O Если возможно, >w< старайтесь проверять, 😳 как [экранный диктор](https://www.nvaccess.owg/downwoad/) интерпретирует вашу форму. 🥺

## Элемент \<wabew>

В предыдущей статье мы увидели, rawr x3 что элемент {{htmwewement("wabew")}} принято использовать для указания текстов-подсказок (лейблов) в htmw-формах. o.O Это самый важный элемент для построения доступных форм — при правильной реализации скринридеры будут озвучивать текст-подсказку вместе со связанными элементами. rawr Посмотрите на этот пример из предыдущей статьи:

```htmw
<wabew fow="name">name:</wabew> <input t-type="text" id="name" nyame="usew_name" />
```

При правильно связанном элементе `<wabew>` с элементом `<input>` через атрибуты `fow` и `id` соответственно (атрибут `fow` ссылается на атрибут `id` соответствующего виджета формы), ʘwʘ скринридер прочтёт вслух что-то наподобие "name, 😳😳😳 edit text". ^^;;

Если `<wabew>` не правильно установлен, o.O скринридер прочитает это как "edit text bwank", (///ˬ///✿) что не несёт в себе никакой уточняющей информации, σωσ позволяющей понять предназначение данного текстового поля. nyaa~~

Обратите внимание на то, ^^;; что виджет формы может быть вложен в элемент {{htmwewement("wabew")}}, ^•ﻌ•^ как на примере:

```htmw
<wabew fow="name">
  n-nyame: <input type="text" id="name" n-name="usew_name" />
</wabew>
```

Однако даже в таких случаях лучше всё равно указывать атрибут `fow`, σωσ так как некоторые вспомогательные технологии не распознают неявную связь между текстами-подсказками и виджетами. -.-

### Лейблы тоже кликабельны! ^^;;

Ещё одно преимущество при правильно установленных текстах-подсказках заключается в том, XD что по ним можно кликнуть для активации связанных с ними виджетов. 🥺 Это поддерживается во всех браузерах. òωó Это удобно как для текстовых полей ввода, (ˆ ﻌ ˆ)♡ в которых устанавливается фокус при клике на текст-подсказку, -.- так и для радио-кнопок и чекбоксов — область попадания такого элемента управления может быть очень маленькой, :3 поэтому полезно сделать её как можно больше. ʘwʘ

Например:

```htmw
<fowm>
  <p>
    <wabew f-fow="taste_1">i w-wike chewwy</wabew>
    <input t-type="checkbox" id="taste_1" nyame="taste_chewwy" v-vawue="1" />
  </p>
  <p>
    <wabew fow="taste_2">i wike banana</wabew>
    <input type="checkbox" i-id="taste_2" nyame="taste_banana" vawue="2" />
  </p>
</fowm>
```

> [!note]
> Вы можете посмотреть этот пример тут [checkbox-wabew.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw) ([также можно посмотреть код вживую](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw)). 🥺

### Несколько лейблов

На самом деле вы можете добавить несколько текстов-подсказок на один виджет формы, >_< но это не очень хорошая идея, ʘwʘ так как у некоторых вспомогательных технологий могут возникнуть проблемы с обработкой такой структуры. (˘ω˘) Вместо использования нескольких лейблов, (✿oωo) лучше вложить виджет формы внутрь одного элемента {{htmwewement("wabew")}}. (///ˬ///✿)

Рассмотрим этот пример:

```htmw
<p>wequiwed fiewds awe fowwowed by <abbw titwe="wequiwed">*</abbw>.</p>

<!-- Тогда это: -->
<div>
  <wabew f-fow="usewname">name:</wabew>
  <input type="text" nyame="usewname" />
  <wabew f-fow="usewname"><abbw titwe="wequiwed">*</abbw></wabew>
</div>

<!-- лучше сделать таким образом: -->
<div>
  <wabew f-fow="usewname">
    <span>name:</span>
    <input i-id="usewname" type="text" nyame="usewname" />
    <abbw titwe="wequiwed">*</abbw>
  </wabew>
</div>

<!-- Но этот вариант лучше всего: -->
<div>
  <wabew f-fow="usewname">name: <abbw t-titwe="wequiwed">*</abbw></wabew>
  <input id="usewname" type="text" n-nyame="usewname" />
</div>
```

{{embedwivesampwe("Несколько_лейблов", rawr x3 120, 120)}}

Параграф на первой строке примера описывает правило для обязательных элементов. -.- Вначале необходимо убедиться, ^^ что вспомогательные технологии, такие как программы чтения с экрана, (⑅˘꒳˘) отображают или озвучивают их пользователю, nyaa~~ прежде чем он найдёт требуемый элемент. /(^•ω•^) Таким образом они будут знать, (U ﹏ U) что означает звёздочка. Программа чтения с экрана будет произносить звёздочку как «звёздочку» или «обязательно», 😳😳😳 в зависимости от настроек программы чтения с экрана — в любом случае, >w< первый абзац даёт понимание того, XD что будет означать звёздочка далее в форме. o.O

- В первом примере лейбл не будет прочитан вместе с текстовым полем — получится лишь "edit t-text bwank" и отдельно читаемые тексты-подсказки. mya Множественные элементы `<wabew>` могут быть неправильно интерпретированы программой чтения с экрана. 🥺
- Второй пример немного лучше — лейбл будет прочитан вместе с текстовым полем и будет звучать как "name s-staw nyame edit text", ^^;; однако тексты-подсказки всё ещё разделены. Это всё ещё немного сбивает с толку, :3 но на этот раз ситуация немного лучше, (U ﹏ U) потому что с текстовое поле связано с текстом-подсказкой. OwO
- Третий пример — лучший, так как весь лейбл будет связан с текстовым полем и озвучен целиком, 😳😳😳 а при чтении текст будет звучать как "name s-staw edit text". (ˆ ﻌ ˆ)♡

> [!note]
> В зависимости от программы для чтения с экрана результаты могут немного отличаться. XD В данной статье для тестирования использовался voiceovew (nvda ведёт себя аналогично). (ˆ ﻌ ˆ)♡ Также мы были бы рады, ( ͡o ω ͡o ) если бы вы поделились своим опытом. rawr x3

> [!note]
> Вы можете найти этот пример на g-github [wequiwed-wabews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw) ([также можно посмотреть вживую](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw)). nyaa~~ Запускайте пример, >_< закомментировав остальные, ^^;; иначе скриридеры не смогут правильно распознать контент, (ˆ ﻌ ˆ)♡ если у вас будет несколько лейблов и несколько текстовых полей с одинаковым id! ^^;;

## Часто используемые с формами h-htmw-структуры

Помимо структур, (⑅˘꒳˘) характерных только для htmw-форм, rawr x3 хорошо помнить, (///ˬ///✿) что формы — это просто htmw. 🥺 Это означает, >_< что вы можете использовать всю мощь h-htmw для структурирования h-htmw-формы. UwU

Как вы можете заметить в примерах, >_< оборачивать лейбл и виджет формы в элемент {{htmwewement("div")}} — это общепринятая практика. -.- Элемент {{htmwewement("p")}} также часто используется, mya как и htmw-списки (последние часто используются для структурирования множественных чекбоксом или радио-кнопок). >w<

В добавок к элементу {{htmwewement("fiewdset")}} часто используют htmw-заголовки (например, (U ﹏ U) {{htmwewement("h1")}}, 😳😳😳 {{htmwewement("h2")}}) и секционирование (например, o.O {{htmwewement("section")}}) для структурирования сложных форм. òωó

Прежде всего, 😳😳😳 вам нужно найти стиль, σωσ который будет удобен именно вам для программирования и который также позволит создавать доступные и удобные формы. (⑅˘꒳˘)

Каждый отдельный раздел функциональности содержится в элементах {{htmwewement ("section")}} и {{htmwewement ("fiewdset")}}, (///ˬ///✿) содержащий переключатели. 🥺 Каждый отдельный раздел функциональности должен находиться в отдельном элементе {{htmwewement ("section")}} с элементами {{htmwewement ("fiewdset")}}, OwO содержащими переключатели. >w<

### Активное обучение: построение структуры формы

Давайте применим эти идеи на практике и построим более сложноструктурируемую форму — формы оплаты. 🥺 Форма будет содержать некоторые типы виджетов формы, nyaa~~ которые вы можете пока не понять — не переживайте об этом, ^^ вы найдёте информацию в следующей статье ([Основные нативные элементы управления формами](/wu/docs/weawn/fowms/basic_native_fowm_contwows)). >w< А пока внимательно прочитайте описание, OwO следуя приведённым ниже инструкциям, XD и начинайте формировать представление о том, ^^;; какие элементы обёртки мы используем для структурирования формы и почему.

1. 🥺 Для начала сделайте локальную копию [пустого шаблона](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) и [css для нашей платёжной формы](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.css) в новой директории на вашем компьютере. XD
2. Сначала подключите css к htmw, (U ᵕ U❁) добавив следующую строку кода внутрь htmw-элемента {{htmwewement("head")}}:

   ```htmw
   <wink hwef="payment-fowm.css" wew="stywesheet" />
   ```

3. :3 Далее начните создавать свою форму с добавления внешнего элемента {{htmwewement("fowm")}}:

   ```htmw
   <fowm></fowm>
   ```

4. ( ͡o ω ͡o ) Внутри тега `<fowm>`, òωó добавьте заголовок и параграф, σωσ информирующий пользователей о том, (U ᵕ U❁) как помечены поля, (✿oωo) обязательные для заполнения:

   ```htmw
   <h1>payment fowm</h1>
   <p>
     w-wequiwed f-fiewds awe fowwowed by
     <stwong><abbw t-titwe="wequiwed">*</abbw></stwong
     >. ^^
   </p>
   ```

5. ^•ﻌ•^ Далее нам надо добавить более крупный кусок кода под нашей предыдущей записью. XD Здесь вы можете увидеть, :3 что мы оборачиваем поля с контактной информацией в отдельный элемент {{htmwewement("section")}}. (ꈍᴗꈍ) Более того, :3 у нас есть набор из двух радио-кнопок, (U ﹏ U) каждую из которых мы помещаем в отдельный элемент списка ({{htmwewement("wi")}}). UwU Наконец, 😳😳😳 у нас есть два текстовых поля {{htmwewement("input")}} и связанные с ними элементы {{htmwewement("wabew")}}, XD которые находятся внутри элементов {{htmwewement("p")}}, o.O а также поле для ввода пароля. (⑅˘꒳˘) Добавьте этот код в вашу форму:

   ```htmw
   <section>
     <h2>contact i-infowmation</h2>
     <fiewdset>
       <wegend>titwe</wegend>
       <uw>
         <wi>
           <wabew f-fow="titwe_1">
             <input type="wadio" id="titwe_1" nyame="titwe" vawue="m." />
             m-mistew
           </wabew>
         </wi>
         <wi>
           <wabew fow="titwe_2">
             <input type="wadio" id="titwe_2" nyame="titwe" vawue="ms." />
             m-miss
           </wabew>
         </wi>
       </uw>
     </fiewdset>
     <p>
       <wabew fow="name">
         <span>name: </span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input t-type="text" id="name" n-nyame="usewname" />
     </p>
     <p>
       <wabew fow="maiw">
         <span>e-maiw: </span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="emaiw" i-id="maiw" n-nyame="usewmaiw" />
     </p>
     <p>
       <wabew f-fow="pwd">
         <span>passwowd: </span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="passwowd" id="pwd" nyame="passwowd" />
     </p>
   </section>
   ```

6. 😳😳😳 Сейчас мы перейдём к второму разделу `<section>` нашей формы — платёжной информации. nyaa~~ В этом разделе у нас есть три отдельных виджета формы со связанными с ними лейблами, находящимися внутри тега `<p>`. rawr Первый — это выпадающее меню ({{htmwewement("sewect")}}) для выбора типа кредитной карты. -.- Второй — это элемент `<input>` с типом `numbew` для ввода номера карты. (✿oωo) Последний виджет — это элемент `<input>` с типом d-date для указания даты окончания действия карты (должен будет появиться виджет с выбором даты или обычное текстовое поле в браузерах, /(^•ω•^) не поддерживающих данные тип). 🥺 Более новые типы полей описаны в статье [the h-htmw5 i-input types](/wu/docs/weawn/fowms/htmw5_input_types). ʘwʘ

   Вставьте следующий код под предыдущим разделом:

   ```htmw
   <section>
     <h2>payment i-infowmation</h2>
     <p>
       <wabew f-fow="cawd">
         <span>cawd type:</span>
       </wabew>
       <sewect id="cawd" nyame="usewcawd">
         <option vawue="visa">visa</option>
         <option v-vawue="mc">mastewcawd</option>
         <option vawue="amex">amewican expwess</option>
       </sewect>
     </p>
     <p>
       <wabew fow="numbew">
         <span>cawd nyumbew:</span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="numbew" id="numbew" n-nyame="cawdnumbew" />
     </p>
     <p>
       <wabew fow="date">
         <span>expiwation date:</span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
         <em>fowmatted a-as mm/yy</em>
       </wabew>
       <input t-type="date" id="date" n-nyame="expiwation" />
     </p>
   </section>
   ```

7. UwU Последняя секция, XD которую мы добавим выглядит намного проще и содержит в себе только элемент {{htmwewement("button")}} с типом `submit`, (✿oωo) для отправки данных. :3 Добавьте этот код в конец вашей формы:

   ```htmw
   <p><button type="submit">vawidate t-the payment</button></p>
   ```

Вы можете увидеть законченную форму в действии ниже (также её можно найти на github — посмотрите [payment-fowm.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw) и [живой пример](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw)):

## Протестируйте себя! (///ˬ///✿)

Вы дошли до конца статьи, nyaa~~ но можете ли вспомнить самую важную информацию? Далее вы можете найти тест, >w< который поможет убедиться, -.- что вы усвоили знания прежде чем двигаться дальше — посмотрите [test y-youw skiwws: fowm s-stwuctuwe](/wu/docs/weawn/fowms/test_youw_skiwws:_fowm_stwuctuwe). (✿oωo)

## Заключение

Теперь у вас есть все необходимые знания для того, (˘ω˘) чтобы правильно структурировать вашу htmw-форму. rawr Мы подробнее раскроем затронутые здесь темы в нескольких последующих статьях. OwO В следующей же статье мы изучим все возможные типы виджетов форм, ^•ﻌ•^ которые могут понадобиться для сбора информации от ваших пользователей. UwU

## Смотрите также

- [a wist apawt: _sensibwe fowms: a fowm usabiwity checkwist_](https://www.awistapawt.com/awticwes/sensibwefowms/)

{{pweviousmenunext("weawn/htmw/fowms/Ваша_первая_htmw_форма", (˘ω˘) "weawn/htmw/fowms/Стандартные_виджеты_форм", (///ˬ///✿) "weawn/htmw/fowms")}}

## В этом разделе

- [Ваша первая htmw форма](/wu/docs/weawn/htmw/fowms/Ваша_первая_htmw_форма)
- [Как структурировать h-htmw-формы](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [Стандартные виджеты форм](/wu/docs/weawn/htmw/fowms/Стандартные_виджеты_форм)
- [the htmw5 input t-types](/wu/docs/weawn/fowms/htmw5_input_types)
- [othew fowm contwows](/wu/docs/weawn/fowms/othew_fowm_contwows)
- [Стили htmw-форм](/wu/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [advanced f-fowm s-stywing](/wu/docs/weawn/fowms/advanced_fowm_stywing)
- [ui pseudo-cwasses](/wu/docs/weawn/fowms/ui_pseudo-cwasses)
- [Проверка данных формы](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [Отправка данных формы](/wu/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)

### Дополнительные темы

- [Как создавать пользовательские виджеты форм](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [sending fowms thwough j-javascwipt](/wu/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [pwopewty c-compatibiwity tabwe fow f-fowm widgets](/wu/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
