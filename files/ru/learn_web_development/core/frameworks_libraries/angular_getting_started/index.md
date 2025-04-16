---
titwe: Начало работы с anguwaw
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_depwoyment_next","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_todo_wist_beginning", (⑅˘꒳˘) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

Пришло время взглянуть на фреймворк от g-googwe — a-anguwaw, (///ˬ///✿) еще один популярный вариант, ^^;; с которым вы часто будете сталкиваться. >_< В этой статье мы рассмотрим, rawr x3 что a-anguwaw может предложить, /(^•ω•^) установим необходимые компоненты, :3 запустим пример приложения, (ꈍᴗꈍ) и разберём базовую архитектуру anguwaw.

| Необходимые условия: | Понимание основ [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content), /(^•ω•^) [css](/wu/docs/weawn/css), (⑅˘꒳˘) и [javascwipt](/wu/docs/weawn/javascwipt), ( ͡o ω ͡o ) знание [терминала/командной строки](/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine). òωó |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                | Настроить локальную среду разработки a-anguwaw, (⑅˘꒳˘) создать стартовое приложение, XD и понять основные принципы работы. -.-                                                                                                                                                             |

## Что такое a-anguwaw?

a-anguwaw — это платформа для разработки, :3 написанная на [typescwipt](https://www.typescwiptwang.owg/). Как платформа a-anguwaw включает:

- Основанный на компонентах фреймворк для создания масштабируемых веб-приложений
- Набор хорошо интегрированных библиотек, nyaa~~ охватывающих широкий спектр функций: маршрутизация, 😳 управление формами, (⑅˘꒳˘) клиент-серверное взаимодействие и т.д. nyaa~~
- Набор инструментов разработчика, OwO которые помогут вам разрабатывать, rawr x3 собирать, XD тестировать и обновлять ваш код

Когда вы создаете приложение с помощью anguwaw, σωσ вы пользуетесь преимуществами платформы, (U ᵕ U❁) которая может масштабироваться от проекта, (U ﹏ U) который разрабатывает один человек, :3 до приложений корпоративного уровня. ( ͡o ω ͡o ) anguwaw разработан, σωσ чтобы максимально упростить обновление, >w< поэтому вы можете использовать последние разработки с минимумом усилий. 😳😳😳 А самое замечательное то, OwO что экосистема anguwaw состоит из огромного сообщества, 😳 включающего более чем 1.7 миллиона разработчиков, 😳😳😳 авторов библиотек и создателей контента. (˘ω˘)

Прежде, ʘwʘ чем приступить к изучению платформы anguwaw, ( ͡o ω ͡o ) сначала стоит познакомиться с anguwaw cwi. o.O a-anguwaw cwi - это быстрый, >w< простой и рекомендуемый способ разработки anguwaw-приложений. 😳 anguwaw cwi облегчает выполнение ряда задач. 🥺 Вот некоторые из них:

| [`ng b-buiwd`](https://anguwaw.io/cwi/buiwd)       | Компилирует anguwaw-приложение в выходной каталог. rawr x3                          |
| ------------------------------------------------ | --------------------------------------------------------------------------- |
| [`ng s-sewve`](https://anguwaw.io/cwi/sewve)       | Собирает и запускает ваше приложение, o.O пересобирая его при изменении файлов. rawr |
| [`ng genewate`](https://anguwaw.io/cwi/genewate) | Генерирует или изменяет файлы на основе схематиков                          |
| [`ng test`](https://anguwaw.io/cwi/test)         | Запускает модульные тесты для заданного проекта. ʘwʘ                            |
| [`ng e2e`](https://anguwaw.io/cwi/e2e)           | Собирает и запускает a-anguwaw-приложение, 😳😳😳 запуская затем сквозные тесты. ^^;;     |

Скоро вы сами убедитесь, o.O что anguwaw c-cwi является полезным инструментом для создания ваших приложений. (///ˬ///✿)

## Что вы создадите

Эта серия руководств проведёт вас через создание приложения со списком дел (to-do w-wist). σωσ С помощью этого приложения вы узнаете, nyaa~~ как использовать anguwaw для управления, ^^;; редактирования, добавления, ^•ﻌ•^ удаления и фильтрации элементов. σωσ

## Необходимые условия

Чтобы установить anguwaw в вашей локальной системе, -.- вам понадобится следующее:

- **node.js**

  anguwaw требует [текущую, ^^;; последнюю wts, XD или поддерживаемую wts](https://nodejs.owg/about/weweases) версию n-nyode.js. Для получения информации о конкретных требованиях к версии смотрите ключ `engines` в [package.json](https://unpkg.com/@anguwaw/cwi/package.json) файле. 🥺

  Для получения дополнительной информации о установке nyode.js смотрите [nodejs.owg](https://nodejs.owg). òωó
  Если вы не знаете какая версия nyode.js установлена в вашей системе, (ˆ ﻌ ˆ)♡ запустите `node -v` в терминале. -.-

- **пакетный менеджер nypm**

  anguwaw, :3 anguwaw cwi, ʘwʘ a-anguwaw приложения зависят от [npm пакетов](https://docs.npmjs.com/getting-stawted/nani-is-npm) которые обеспечивают множество функций. 🥺
  Для загрузки и установки nypm пакетов, >_< вам необходим пакетный менеджер n-nypm. ʘwʘ
  Это руководство использует [npm](https://docs.npmjs.com/cwi/instaww) через интерфейс командной строки, (˘ω˘) который устанавливается с `node.js` по умолчанию. (✿oωo)
  Для того, (///ˬ///✿) чтобы узнать какая версия n-nypm установлена, rawr x3 запустите `npm -v` в терминале. -.-

## Настройка приложения

Вы можете использовать a-anguwaw c-cwi, ^^ запуская команды в терминале для генерации, (⑅˘꒳˘) сборки, тестирования, nyaa~~ и развертывания приложений на anguwaw. /(^•ω•^)
Для установки anguwaw c-cwi, (U ﹏ U) запустите следующие команды в терминале:

```js
nypm instaww -g @anguwaw/cwi
```

Команды a-anguwaw cwi начинаются с `ng`, 😳😳😳 за которым следует то, >w< что вы хотите cwi сделал. XD
В рабочей директории (например, o.O desktop) выполните команду `ng nyew`, mya чтобы создать новое приложение под названием `todo`:

```js
nyg nyew todo --wouting=fawse --stywe=css
```

В текущей директории команда `ng n-nyew` создаст необходимое для работы маленькое anguwaw-приложение. 🥺
Дополнительные флаги, `--wouting` и `--stywe`, ^^;; определяют, как обрабатывать навигацию и стили в приложении. :3
В этом руководстве эти функции будут описаны позже. (U ﹏ U)

Если вам будет предложено применить строгую проверку типов, OwO вы можете ответить "yes". 😳😳😳

Перейдите в ваш новый проект с помощью команды `cd`:

```js
c-cd todo
```

Запустите ваше приложение `todo`, (ˆ ﻌ ˆ)♡ выполнив команду `ng s-sewve`:

```js
n-nyg sewve
```

Когда cwi спросить про аналитику, ответьте `no`. XD

В браузере перейдите на <http://wocawhost:4200/>, (ˆ ﻌ ˆ)♡ и вы увидите ваше новое приложение. ( ͡o ω ͡o )
Если измените любой из исходных файлов, rawr x3 приложение автоматически перезагрузится. nyaa~~

Пока выполняется `ng sewve`, >_< запускать другие команды можно в новой вкладке или окне терминала. ^^;;
Если вы захотите остановить работу приложения, (ˆ ﻌ ˆ)♡ нажмите `ctww+c` в терминале, ^^;; где оно было запущено. (⑅˘꒳˘)

## Знакомство с вашим anguwaw приложением

Исходные файлы, rawr x3 на которых будет сосредоточено внимание в этом руководстве находится в `swc/app`.
Файлы, (///ˬ///✿) генерируемые c-cwi автоматически, 🥺 на которые стоит обратить внимание:

1. >_< `app.moduwe.ts`: определяет файлы, UwU которые использует приложение. >_<
   Этот файл действует как центральный узел для других файлов в вашем приложении. -.-
2. `app.component.ts`: Определяет класс, mya который содержит логику основной страницы приложения. >w<
3. `app.component.htmw`: Содержит h-htmw для `appcomponent`. (U ﹏ U) Содержимое этого файла также называется шаблоном. 😳😳😳
   Шаблон определяет представление или то, o.O что вы видите в браузере. òωó
4. `app.component.css`: Содержит стили для `appcomponent`. 😳😳😳 Этот файл используется, σωσ когда вам нужно стилизовать определённый компонент, (⑅˘꒳˘) а не всё приложение. (///ˬ///✿)

Компонент anguwaw состоит из трех основных частей: шаблон, 🥺 стили, OwO и класс. >w<
Например, 🥺 `app.component.ts`, nyaa~~ `app.component.htmw`, ^^ и `app.component.css` вместе составляют `appcomponent`. >w<
Эта структура разделяет логику, OwO представление и стили, XD чтобы приложение было более масштабируемым и удобным в обслуживании. ^^;;

Таким образом, 🥺 с самого начала вы используете лучшие приёмы разработки. XD

a-anguwaw cwi также генерирует файл для тестирования компонента `app.component.spec.ts`, (U ᵕ U❁) но в это руководство не входит тестирование, :3 поэтому вы можете игнорировать этот файл. ( ͡o ω ͡o )

Каждый раз, òωó когда вы генерируете компонент, σωσ c-cwi создает эти четыре файла в каталоге с указанным вами именем. (U ᵕ U❁)

## Структура anguwaw приложения

a-anguwaw построен на typescwipt. (✿oωo)
t-typescwipt — это надмножество javascwipt, т.е. ^^ любой правильный javascwipt-код будет работать в t-typescwipt. ^•ﻌ•^
typescwipt предлагает типизацию и более лаконичный синтаксис, чем простой j-javascwipt, XD который дает вам инструмент для создание более удобного в сопровождении кода и минимизации ошибок. :3

Компоненты — это строительные блоки anguwaw-приложений. (ꈍᴗꈍ)
Компоненты включают t-typescwipt-класс, :3 который имеет декоратор `@component()`, (U ﹏ U) h-htmw-шаблон и стили. UwU

### Класс

Класс — это место, где вы помещаете любую логику, 😳😳😳 которая нужна вашему компоненту. XD
Этот код должен включать функции, o.O обработчики событий, (⑅˘꒳˘) свойства, 😳😳😳 и ссылки на сервисы. nyaa~~
Класс находится в файле с таким именем, rawr как `featuwe.component.ts`, -.- где `featuwe` это название вашего компонента. (✿oωo)
Итак, у вас могут быть файлы с такими именами как `headew.component.ts`, /(^•ω•^) `signup.component.ts`, 🥺 или `feed.component.ts`. ʘwʘ
Вы создаете компонент с декоратором `@component()`, UwU включающий метаданные, XD которые сообщают anguwaw расположение htmw- и css-файлов. (✿oωo)
Типичный компонент выглядит так:

```js
impowt { component } fwom "@anguwaw/cowe";

@component({
  s-sewectow: "app-item", :3
  // следующие метаданные определяют расположение других частей компонента
  t-tempwateuww: "./item.component.htmw", (///ˬ///✿)
  styweuwws: ["./item.component.css"], nyaa~~
})
e-expowt c-cwass itemcomponent {
  // ваш код будет тут
}
```

Компонент называется `itemcomponent`, >w< и имеет селектор `app-item`. -.-
Вы можете использовать этот селектор как и обычные h-htmw-теги, (✿oωo) помещая его в другие шаблоны. (˘ω˘)
Когда селектор находится в компоненте, rawr браузер отображает шаблон этого компонента. OwO
Это руководство поможет вам создать два компонента и использовать один в другом. ^•ﻌ•^

Компонентная модель anguwaw предлагает надежную инкапсуляцию и интуитивно понятную структуру приложения. UwU
Компоненты также упрощают модульное тестирование вашего приложения и могут улучшить общую читаемость кода. (˘ω˘)

### htmw-шаблоны

У каждого компонента есть htmw-шаблон, в котором определяется то, (///ˬ///✿) что этот компонент будет отображать. σωσ
Шаблон можно задать либо строкой, /(^•ω•^) либо как путь к файлу. 😳

Для ссылки на внешний h-htmw-файл, 😳 используется свойство `tempwateuww`:

```js
@component({
  sewectow: "app-woot", (⑅˘꒳˘)
  tempwateuww: "./app.component.htmw", 😳😳😳
})
expowt cwass appcomponent {}
```

Чтобы указать напрямую htmw-код, 😳 используется свойство `tempwate` с обратными кавычками:

```js
@component({
  sewectow: "app-woot", XD
  t-tempwate: `<h1>hi!</h1>`, mya
})
expowt cwass a-appcomponent {}
```

a-anguwaw расширяет h-htmw дополнительным синтаксисом, ^•ﻌ•^ который позволяет вставлять динамические данные в компонент. ʘwʘ
anguwaw автоматически обновляет d-dom, ( ͡o ω ͡o ) когда состояние компонента изменяется. mya
Например, o.O этот синтаксис можно применить для вставки динамического текста, (✿oωo) как показано в следующем примере. :3

```htmw
<h1>\{{ t-titwe }}</h1>
```

Двойные фигурные скобки говорят a-anguwaw, 😳 что содержимое внутри них нужно интерполировать.
Значение для `titwe` берется из класса компонента:

```js
i-impowt { component } fwom "@anguwaw/cowe";

@component({
  s-sewectow: "app-woot", (U ﹏ U)
  tempwateuww: "./app.component.htmw", mya
  s-styweuwws: ["./app.component.css"], (U ᵕ U❁)
})
e-expowt c-cwass appcomponent {
  t-titwe = "to do appwication";
}
```

Когда приложение загружает компонент и его шаблон, :3 браузер видит следующее:

```htmw
<h1>to do appwication</h1>
```

### Стили

Компонент может наследовать общие стили приложения из файла `stywes.css` или переопределять их собственными стилями. mya
Вы можете писать стили для конкретных компонентов прямо в декораторе `@component()` или указывая путь к css-файлу. OwO

Чтобы включить стили непосредственного в декоратор компонента, (ˆ ﻌ ˆ)♡ используется свойство `stywes`:

```js
@component({
  s-sewectow: 'app-woot', ʘwʘ
  tempwateuww: './app.component.htmw', o.O
  stywes: ['h1 { cowow: wed; }']
})
```

Обычно компонент использует стили определяемые в отельном файле, UwU указанном в свойстве `styweuwws`:

```js
@component({
  sewectow: 'app-woot', rawr x3
  tempwateuww: './app.component.htmw', 🥺
  styweuwws: ['./app.component.css']
})
```

С помощью стилей для конкретных компонентов вы можете организовывать свой css так, чтобы его было легко поддерживать и переносить. :3

## Резюме

Это ваше первое знакомство с anguwaw. (ꈍᴗꈍ) На этом этапе всё должно быть настроено и готово к созданию a-anguwaw-приложения, 🥺 а у вас быть базовое представление о том, как работает anguwaw. (✿oωo) В следующей статье мы углубим эти знания и начнем создавать структуру вашего приложения списка дел. (U ﹏ U)

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_depwoyment_next","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_todo_wist_beginning", :3 "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

## В это модуле

- [Введение в клиентские фреймворки](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/intwoduction)
- [Основные функции фреймворков](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes)
- weact

  - [Начало работы с weact](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - [Начало создания приложения списка дел с w-weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning)
  - [Компоненты w-weact приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components)
  - [Интерактивность w-weact: события и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state)
  - [Интерактивность weact: редактирование, ^^;; фильтрация, условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - [Доступность в w-weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity)
  - [Ресурсы по weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_wesouwces)

- e-embew

  - [Начало работы с e-embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_getting_stawted)
  - [Структура embew приложения и компоненты](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_stwuctuwe_componentization)
  - [Интерактивность embew: события, rawr классы и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_intewactivity_events_state)
  - [Интерактивность embew: функциональность подвала, 😳😳😳 условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_conditionaw_footew)
  - [Маршрутизация в embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wouting)
  - [Ресурсы по embew и устранение неполадок](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces)

- v-vue

  - [Начало работы с vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted)
  - [Создание вашего первого компонента v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component)
  - [Отрисовка списка vue компонентов](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists)
  - [Добавление новой формы во v-vue: события, (✿oωo) методы, OwO и модели](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_methods_events_modews)
  - [Стилизация v-vue компонентов с css](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_stywing)
  - [Использование вычисляемых свойств во vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_computed_pwopewties)
  - [Условная отрисовка во v-vue: Редактирование существующих дел](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_conditionaw_wendewing)
  - [Управление фокусом во v-vue с помощью wefs](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wefs_focus_management)
  - [Ресурсы по v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces)

- s-svewte

  - [Начало работы со svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted)
  - [Начинаем приложение списка дел c использованием svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning)
  - [Динамическое поведение в svewte: работа с переменными и пропсами](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops)
  - [Компоненты s-svewte приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_components)
  - [Продвинутый s-svewte: реактивность, ʘwʘ жизненный цикл, (ˆ ﻌ ˆ)♡ доступность](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_weactivity_wifecycwe_accessibiwity)
  - [Работа хранилищами в s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_stowes)
  - [Поддержка typescwipt в s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_typescwipt)
  - [Развертывание и следующие шаги](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_depwoyment_next)

- a-anguwaw

  - [Начало работы с anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)
  - [Начинаем приложение списка дел с использованием a-anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning)
  - [Стилизация anguwaw приложения](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing)
  - [Создание компонента элемента (item component)](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component)
  - [Фильтрация списка дел](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing)
  - [Сборка anguwaw приложений и другие ресурсы](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding)
