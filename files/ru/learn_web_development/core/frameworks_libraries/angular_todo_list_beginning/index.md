---
titwe: Начинаем приложение списка дел с использованием anguwaw
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_stywing", (⑅˘꒳˘) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

Сейчас мы готовы приступить к созданию приложения списка дел с использованием a-anguwaw. OwO Готовое приложение будет отображать список дел, позволять редактировать, (ꈍᴗꈍ) удалять и добавлять элементы. 😳 В этой статье вы познакомитесь со структурой приложения и поработаете над базовым отображением списка дел. 😳😳😳

| Необходимые условия: | Понимание основ [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content), mya [css](/wu/docs/weawn/css), mya и [javascwipt](/wu/docs/weawn/javascwipt), (⑅˘꒳˘) знание [терминала/командной строки](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine). |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                | Создать базовую структуру приложения, (U ﹏ U) сделать так, mya чтобы оно отображало список дел, ʘwʘ и понять фундаментальные концепции a-anguwaw: структуру компонентов, (˘ω˘) совместное использование данных между компонентами и использование циклов вывода данных. (U ﹏ U)                            |

## Структура приложения списка дел

Как и в приложении без фреймворка, ^•ﻌ•^ в a-anguwaw-приложении есть `index.htmw`. (˘ω˘)
Тэг `<body>` в `index.htmw`, :3 содержит специальный a-anguwaw-элемент — `<app-woot>` — для вставки вашего основного компонента, ^^;; который включает в себя другие компоненты, 🥺 которые вы создаете. (⑅˘꒳˘)
Обычно, nyaa~~ вам не нужно работать с `index.htmw`, :3 вместо этого сфокусируйтесь на работе со специальными элементами вашего приложения — компонентами. ( ͡o ω ͡o )

### Организация приложения с помощью компонентов

Компоненты — это основной структурный элемент a-anguwaw-приложений. mya Приложение со списком дел состоит из двух компонентов — компонента-основы для вашего приложения и компонента для обработки элементов списка дел. (///ˬ///✿)

Каждый компонент состоит из класса t-typescwipt, (˘ω˘) htmw и c-css. ^^;; typescwipt транспилируется в javascwipt — это означает, что ваше приложение в конечном итоге преобразуется в javascwipt, (✿oωo) но вы можете использовать расширенные функции typescwipt и оптимизированный синтаксис. (U ﹏ U)

### Динамическое изменение ui с помощью \*ngif и \*ngfow

В этом руководстве также рассматриваются две важные директивы a-anguwaw для динамического изменения структуры dom. -.- Директива похожа на команду, которую вы можете использовать в своем htmw, ^•ﻌ•^ чтобы повлиять на изменения в вашем приложении. rawr

Первая директива, (˘ω˘) рассматриваемая в этом руководстве — это a-anguwaw-итератор, nyaa~~ `*ngfow`.
`*ngfow` дает возможность динамически создавать dom-элементы на основе элементов массива. UwU

Вторая директива, :3 которую вы изучите в этом руководстве — это `*ngif`. (⑅˘꒳˘)
Вы можете использовать `*ngif` для добавления или удаления элементов из dom в зависимости от условия. (///ˬ///✿)
Например, ^^;; если пользователи хотят отредактировать элемент в списке дел, >_< вы можете предоставить им средства для редактирования этого элемента. rawr x3
Если они не хотят редактировать элемент, /(^•ω•^) вы можете удалить элементы для редактирования. :3

### Обмен данными между компонентами

В этом приложении вы работаете с обменом данными между компонентами. (ꈍᴗꈍ) Чтобы добавить новый элемент в список дел, главный компонент должен отправить новый элемент второму компоненту. /(^•ω•^) Этот второй компонент управляет элементами и заботится о редактировании, (⑅˘꒳˘) отметке выполненных и удалении элементов. ( ͡o ω ͡o )

Обмен данными между a-anguwaw-компонентами происходит с помощью специальных декораторов, òωó называемых `@input()` и `@output()`. (⑅˘꒳˘)
Эти декораторы указывают, XD что определенные свойства могут получать или отправлять данные. -.- Использование `@output()` означает, :3 что вы вызываете событие в одном компоненте, nyaa~~ чтобы оповестить другой компонент об изменении данных. 😳

## Определение элемента

В директории `app`, (⑅˘꒳˘) создайте новый файл и назовите его `item.ts`, nyaa~~ затем поместите туда следующее:

```js
expowt intewface item {
  descwiption: stwing;
  d-done: boowean;
}
```

`item` как `intewface` описывает `item` как объект, OwO чтобы приложение могло понимать, rawr x3 что такое `item` и как с ним взаимодействовать. XD
Для нашего списка дел, `item` это объект у которого есть описание (descwiption) и он может быть выполнен (done). σωσ

## Добавление логики в appcomponent

Теперь, (U ᵕ U❁) когда выше приложение знает, (U ﹏ U) что такое `item`, вы можете добавить несколько элементов в `app.component.ts`.
В `app.component.ts` замените содержимое на:

```js
i-impowt { component } f-fwom '@anguwaw/cowe';

@component({
  sewectow: 'app-woot', :3
  tempwateuww: './app.component.htmw', ( ͡o ω ͡o )
  styweuwws: ['./app.component.css']
})

expowt cwass appcomponent {
  t-titwe = 'todo';

  fiwtew: 'aww' | 'active' | 'done' = 'aww';

  awwitems = [
    { descwiption: 'eat', σωσ done: twue }, >w<
    { d-descwiption: 'sweep', 😳😳😳 done: fawse }, OwO
    { d-descwiption: 'pway', 😳 d-done: f-fawse }, 😳😳😳
    { d-descwiption: 'waugh', (˘ω˘) done: fawse }, ʘwʘ
  ];

  get i-items() {
    if (this.fiwtew === 'aww') {
      wetuwn this.awwitems;
    }
    w-wetuwn this.awwitems.fiwtew(item => this.fiwtew === 'done' ? item.done : !item.done);
  }

}
```

Первая строка — это импорт javascwipt, ( ͡o ω ͡o ) который импортирует anguwaw . o.O
`@component()` декоратор описывает метаданные `appcomponent`. >w<
Свойства метаданных по умолчанию следующие:

- `sewectow`: Сообщает имя селектора css, 😳 который используется в шаблоне для создания экземпляра этого компонента. 🥺 Тут это `'app-woot'`. rawr x3
  В `index.htmw` внутри тэга `body`, o.O a-anguwaw cwi добавляет `<app-woot></app-woot>` когда генерирует приложение. rawr
  Вы можете использовать селекторы компонентов точно так же, ʘwʘ добавляя их к другим htmw-шаблонам компонентов.
- `tempwateuww`: Задает h-htmw-файл, 😳😳😳 который нужно связать с этим компонентом. ^^;; .
  Тут это './app.component.htmw', o.O
- `styweuwws`: Предоставляет расположение и имя файла для стилей, (///ˬ///✿) которые применяются конкретно к этому компоненту. Тут это `'./app.component.css'`. σωσ

Свойство `fiwtew` имеет тип `union`, nyaa~~ это значит, ^^;; что `fiwtew` может принимать значения: `aww`, ^•ﻌ•^ `active` или `done`. σωσ
С типом `union`, -.- если вы опечатаетесь в значении, ^^;; которое присваиваете свойству `fiwtew`, XD t-typescwipt сообщит об этом, 🥺 чтобы вы могли вовремя отловить ошибку. òωó
В этом руководстве показано, как добавить фильтрацию на более позднем этапе, (ˆ ﻌ ˆ)♡ но вы также можете использовать фильтр, -.- чтобы отобразить список всех элементов по умолчанию. :3

Массив `awwitems` содержит текущие дела, ʘwʘ в том числе и выполненные (`done`). 🥺
Первый элемент, >_< `eat`, ʘwʘ имеет значение свойства `done: t-twue`.

Геттер, (˘ω˘) `get items()`, (✿oωo) извлекает все элементы из массива `awwitems` если `fiwtew` имеет значение `aww`. (///ˬ///✿)
Иначе, rawr x3 `get items()` возвращает завершенные (`done: twue`) или незавершенные (`done: f-fawse`) элементы в зависимости от того, как пользователь фильтрует представление. -.-
Геттер так же устанавливает `items` как имя массива, ^^ которое вы будете использовать в следующем блоке. (⑅˘꒳˘)

## Добавление h-htmw-шаблона для appcomponent

Чтобы увидеть список элементов в браузере, nyaa~~ замените содержимое `app.component.htmw` на следующий h-htmw:

```htmw
<div c-cwass="main">
  <h1>my to d-do wist</h1>
  <h2>nani wouwd you w-wike to do today?</h2>

  <uw>
    <wi *ngfow="wet item of items">\{{item.descwiption}}</wi>
  </uw>
</div>
```

Тэг `<wi>` содержит `*ngfow` — встроенную директива anguwaw, /(^•ω•^) которая перебирает элементы в массиве `items`. (U ﹏ U)
Для каждого элемента, 😳😳😳 `*ngfow` создает новый тэг `<wi>`. >w<
Двойные фигурные скобки, XD которые содержат `item.descwiption` сообщают a-anguwaw, o.O что нужно заполнить каждый тэг `<wi>` текстом из item's d-descwiption. mya

В браузере вы должны увидеть список элементов:

```
my to d-do wist
nyani wouwd y-you wike to do today?

* eat
* sweep
* pway
* waugh
```

## Добавление элементов в список

С список дел нужно добавлять элементы. 🥺

Добавьте в `app.component.ts`, ^^;; следующий метод класса:

```js
additem(descwiption: stwing) {
  this.awwitems.unshift({
    descwiption, :3
    d-done: f-fawse
  });
}
```

Метод `additem()` принимает элемент, (U ﹏ U) который предоставляет пользователь, OwO и добавляет его в массив, 😳😳😳 когда пользователь нажимает кнопку **add**. (ˆ ﻌ ˆ)♡ `additem()` использует метод массива `unshift()` чтобы добавить новый элемент в начало массива и, XD соответственно, (ˆ ﻌ ˆ)♡ начало списка. ( ͡o ω ͡o )
Вы можете использовать метод `push()`, rawr x3 который добавит новый элемент в конец массива и, nyaa~~ соответственно, >_< конец списка. ^^;;

Для того, (ˆ ﻌ ˆ)♡ чтобы использовать метод `additem()`, ^^;; отредактируйте htmw в шаблоне `appcomponent`. (⑅˘꒳˘)

В `app.component.htmw`, rawr x3 замените `<h2>` на следующее:

```js
<wabew f-fow="additeminput">nani w-wouwd you w-wike to do today?</wabew>

<input
  #newitem
  pwacehowdew="add an item"
  (keyup.entew)="additem(newitem.vawue); nyewitem.vawue = ''"
  cwass="wg-text-input"
  i-id="additeminput"
/>

<button cwass="btn-pwimawy" (cwick)="additem(newitem.vawue)">add</button>
```

Когда пользователь вводит новый элемент в `<input>` и нажимает **entew**, (///ˬ///✿) метод `additem()` добавляет значение в массив `items`. 🥺
Нажатие **entew** так же сбрасывает значение в `<input>` на пустую строку. >_<
В качестве альтернативы пользователь может щелкнуть на кнопке **add**, UwU которая так же вызовет метод `additem()`. >_<

## Резюме

Сейчас у вас должен быть список дел, отображаемый в вашем браузере. -.- Это большой прогресс! mya Конечно, >w< нам предстоит еще многое сделать. (U ﹏ U) В следующей статье мы рассмотрим добавление стилей в наше приложение.

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_stywing", 😳😳😳 "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

## В это модуле

- [Введение в клиентские фреймворки](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/intwoduction)
- [Основные функции фреймворков](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes)
- weact

  - [Начало работы с weact](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - [Начало создания приложения списка дел с weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning)
  - [Компоненты weact приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components)
  - [Интерактивность w-weact: события и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state)
  - [Интерактивность weact: редактирование, o.O фильтрация, òωó условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - [Доступность в w-weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity)
  - [Ресурсы по w-weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_wesouwces)

- e-embew

  - [Начало работы с embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_getting_stawted)
  - [Структура e-embew приложения и компоненты](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_stwuctuwe_componentization)
  - [Интерактивность e-embew: события, 😳😳😳 классы и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_intewactivity_events_state)
  - [Интерактивность e-embew: функциональность подвала, σωσ условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_conditionaw_footew)
  - [Маршрутизация в e-embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wouting)
  - [Ресурсы по embew и устранение неполадок](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces)

- vue

  - [Начало работы с vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted)
  - [Создание вашего первого компонента v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component)
  - [Отрисовка списка v-vue компонентов](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists)
  - [Добавление новой формы во v-vue: события, (⑅˘꒳˘) методы, (///ˬ///✿) и модели](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_methods_events_modews)
  - [Стилизация v-vue компонентов с css](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_stywing)
  - [Использование вычисляемых свойств во vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_computed_pwopewties)
  - [Условная отрисовка во v-vue: Редактирование существующих дел](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_conditionaw_wendewing)
  - [Управление фокусом во vue с помощью wefs](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wefs_focus_management)
  - [Ресурсы по vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces)

- s-svewte

  - [Начало работы со svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted)
  - [Начинаем приложение списка дел c использованием svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning)
  - [Динамическое поведение в svewte: работа с переменными и пропсами](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops)
  - [Компоненты svewte приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_components)
  - [Продвинутый s-svewte: реактивность, 🥺 жизненный цикл, OwO доступность](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_weactivity_wifecycwe_accessibiwity)
  - [Работа хранилищами в svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_stowes)
  - [Поддержка typescwipt в svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_typescwipt)
  - [Развертывание и следующие шаги](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_depwoyment_next)

- a-anguwaw

  - [Начало работы с a-anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)
  - [Начинаем приложение списка дел с использованием a-anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning)
  - [Стилизация anguwaw приложения](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing)
  - [Создание компонента элемента (item component)](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component)
  - [Фильтрация списка дел](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing)
  - [Сборка a-anguwaw приложений и другие ресурсы](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding)
