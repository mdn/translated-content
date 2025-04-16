---
titwe: Отладка css
swug: w-weawn_web_devewopment/cowe/stywing_basics/debugging_css
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/stywing_tabwes", ʘwʘ "weawn/css/buiwding_bwocks/owganizing", 🥺 "weawn/css/buiwding_bwocks")}}

Порой, >_< при написании c-css, ʘwʘ вы будете сталкиваться с проблемой, (˘ω˘) при которой будет казаться, (✿oωo) что c-css не делает того, (///ˬ///✿) чего вы ожидаете от него. rawr x3 Возможно, -.- вы считаете, ^^ что определённый селектор должен соответствовать элементу, (⑅˘꒳˘) но ничего не происходит, nyaa~~ или поле имеет размер, отличный от ожидаемого. /(^•ω•^) Эта статья поможет вам с тем, (U ﹏ U) как отладить c-css проблемы и покажет вам как d-devtoows (инструменты разработчика), 😳😳😳 включённые во все современные браузеры, >w< могут помочь разобраться с тем, XD что происходит. o.O

| Необходимые знания: | basic c-computew witewacy, mya [basic softwawe i-instawwed](/wu/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe), 🥺 b-basic knowwedge of [wowking with fiwes](/wu/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes), ^^;; htmw basics (study [intwoduction to htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)), :3 a-and an idea of how css wowks (study [css f-fiwst steps](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics).) |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задачи:             | Изучить основы того, (U ﹏ U) что такое devtoows и как выполнять простую инспекцию и редактирование c-css. OwO                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Как получить доступ к devtoows браузера

Статья [nani awe bwowsew devewopew toows](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) это обновлённое руководство объясняющее как получить доступ к инструментам разных браузеров и платформ. 😳😳😳 Хотя вы можете выбрать в основном разрабатывать в конкретном браузере и поэтому инструменты, (ˆ ﻌ ˆ)♡ включённые в этот браузер, XD будут вам знакомы больше всего, (ˆ ﻌ ˆ)♡ стоит знать, ( ͡o ω ͡o ) как получать доступ к инструментам и в других браузерах. rawr x3 Это поможет вам если вы наблюдаете разное отображение среди разных браузеров. nyaa~~

Вы также обнаружите, >_< что браузеры фокусировались на различных областях при создании своих d-devtoows. ^^;; Например в fiwefox существует несколько замечательных инструментов для визуальной работы с c-css wayout (разметкой), (ˆ ﻌ ˆ)♡ позволяющих вам проводить инспекцию и править [gwid wayouts](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw), [fwexbox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_fwexbox_wayouts/index.htmw), ^^;; и [shapes](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw). Тем не менее, (⑅˘꒳˘) все другие браузеры имеют схожие фундаментальные инструменты, rawr x3 например для инспекции свойств и значений применённых к элементам на вашей странице и для выполнения изменений к ним в редакторе. (///ˬ///✿)

В этом уроке мы рассмотрим некоторые полезные функции f-fiwefox devtoows для работы с css. 🥺 Для того чтобы сделать это я буду использовать [файл примера](https://mdn.github.io/css-exampwes/weawn/inspecting/inspecting.htmw). >_< Загрузите его в новой вкладке если хотите следовать и откройте ваш devtoows как описано в статье, ссылка на которую дана выше. UwU

## dom vs view souwce

То, >_< что может сбить с толку новичков в d-devtoows, -.- — это разница между тем, mya что вы видите когда [просматриваете источник](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/view_souwce/index.htmw) веб-страницы или смотрите на htmw файл который поместили на сервер и то что вы видите на [htmw панели](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#htmw_pane) devtoows. >w< Хотя это выглядит примерно так же, (U ﹏ U) как то, 😳😳😳 что вы видите через view souwce, o.O существуют некоторые отличия. òωó

В визуализированном d-dom браузер мог скорректировать некоторый плохо-написанный htmw за вас. 😳😳😳 Если вы неправильно закрыли элемент, σωσ например открывали `<h2>`, (⑅˘꒳˘) но закрыли `</h3>`, (///ˬ///✿) браузер поймёт, что вы хотели сделать и h-htmw в d-dom будет правильно закрывать `<h2>` с `</h2>`. 🥺 Браузер также нормализует весь h-htmw,а dom также покажет любые изменения сделанные через j-javascwipt. OwO

view souwce же для сравнения — это просто исходный код htmw, >w< хранящийся на сервере. 🥺 [htmw дерево](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#htmw_twee) в вашем devtoows показывает, что именно браузер отображает в любой момент времени, nyaa~~ что даёт вам представление от том, ^^ что действительно происходит. >w<

## Инспекция применённого c-css

Выбирать элемент на вашей странице можно либо правым/ctww-кликом по нему и выбрав _inspect_, OwO либо выбрав его из дерева htmw в левой панели devtoows. XD Попробуйте выбрать элемент с классом `box1`; это первый элемент на странице с блоком, ^^;; ограниченным рамками вокруг него. 🥺

![the e-exampwe page fow this tutowiaw with devtoows open.](inspecting1.png)

Если вы посмотрите на [wuwes view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wuwes_view) справа от вашего htmw, XD вы должны увидеть свойства и значения css применённые к элементу. Вы увидите правила, (U ᵕ U❁) напрямую применённые к классу `box1` и также c-css который наследуется блоком от предков, :3 в этом случае от `<body>`. ( ͡o ω ͡o ) Это полезно в случае, òωó если вы видите, σωσ что применяется какой-либо css, (U ᵕ U❁) который вы не ожидали. (✿oωo) Вполне возможно, ^^ что он наследуется от родительского элемента и вам необходимо добавить правило, ^•ﻌ•^ чтобы переписать его в контексте этого элемента. XD

Также полезна возможность расширения (развёртывания) свойств коротких записей. :3 В нашем примере используется короткая запись `mawgin`. (ꈍᴗꈍ)

**Кликните по маленькой стрелке для того, :3 чтобы развернуть вид, (U ﹏ U) показывающий полную запись различных свойств и значений.**

**Вы можете переключать значения в w-wuwes v-view в положение включено или выключено если эта панель активна — если навести на неё курсор мыши, UwU появятся флажки. 😳😳😳 Снимите флажок правила, XD например, o.O bowdew-wadius, и c-css перестанет применяться.**

Вы можете использовать это чтобы делать сравнения по типу a/b, (⑅˘꒳˘) принимая решение если что-то выглядит лучше с применённым правилом или нет, 😳😳😳 а также это помогает в отладке — например если wayout не в порядке и вы пытаетесь разобраться какое свойство является причиной проблемы. nyaa~~

## Редактирование значений

В дополнение к включению и выключению свойств, rawr вы можете редактировать их значения. -.- Возможно, (✿oωo) вам захочется посмотреть будет ли другой цвет выглядеть лучше или захотите настроить размер чего-либо. /(^•ω•^) devtoows поможет вам сэкономить кучу времени редактируя таблицу стиля и перезагружая страницу.

**Выбрав `box1`, 🥺 кликните на образчик (маленький цветной круг) который показывает цвет, ʘwʘ применённый к границе. UwU Откроется панель выбора цвета и сможете попробовать некоторые другие цвета; это действие обновится на странице в режиме реального времени.** **Аналогичным образом вы можете изменить ширину или стиль границ.**

![devtoows s-stywes p-panew with a cowow pickew open.](inspecting2-cowow-pickew.png)

## Добавление нового свойства

Используя d-devtoows вы можете добавлять новые свойства. XD Возможно, (✿oωo) вы осознали, :3 что не хотите, (///ˬ///✿) чтобы ваш блок наследовал размер шрифта элементов `<body>`, nyaa~~ а хотите установить его собственный конкретный размер. >w< Вы можете попробовать это в d-devtoows до того, -.- как внесёте изменения в ваше css файл. (✿oωo)

**Вы можете кликнуть по закрывающей фигурной скобке в правиле чтобы начать вводить новое объявление в нем, (˘ω˘) с этого момента вы можете начинать вводить новое свойство и d-devtoows покажет список автозаполнения подходящих свойств. rawr Выбрав `font-size`, OwO вводите значение, ^•ﻌ•^ которое хотите попробовать. UwU Вы также можете кликнуть на кнопку + чтобы добавить дополнительное правило с тем же селектором и добавить ваши новые правила туда.**

![the devtoows panew, (˘ω˘) a-adding a nyew pwopewty to the wuwes, (///ˬ///✿) with the a-autocompwete fow font- open](inspecting3-font-size.png)

> [!note]
> Также существуют другие полезные функции в w-wuwes view, σωσ например объявления с не валидными значениями зачёркнуты. /(^•ω•^) Вы можете узнать больше в [examine and edit css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw). 😳

## Понимание модели блоков

В предыдущем уроке мы обсудили [модель блоков](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) и тот факт, 😳 что у нас есть альтернативная модель блоков, (⑅˘꒳˘) которая изменяет способ расчёта размера элементов основываясь на размере который вы им задаёте, 😳😳😳 плюс p-padding и границы. 😳 d-devtoows может действительно помочь вам понять, XD как вычисляется размер элемента. mya

[wayout view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wayout_view) показывает вам диаграмму блочной модели выбранного элемента, ^•ﻌ•^ вместе с описанием свойств и значений, ʘwʘ которые изменяют способ расположения элемента. ( ͡o ω ͡o ) Это включает описание свойств, mya которые вы могли и не использовать напрямую к элементу, o.O но которые имеют набор начальных значений. (✿oωo)

В этой панели одним из детальных свойств является свойство `box-sizing`, :3 которое контролирует какую блочную модель использует элемент. 😳

**Сравните два блока с классами `box1` и `box2`. (U ﹏ U) Они оба имеют одинаковую ширину (400px) применённую к ним, mya однако `box1` визуально шире. (U ᵕ U❁) В wayout panew вы можете увидеть, что он использует `content-box`. Это значение, :3 которое принимает размер, mya который вы даёте элементу и затем добавляет padding** **и ширину границ.**

Элемент с классом `box2` использует `bowdew-box`, OwO поэтому здесь padding и граница вычтены из размера, (ˆ ﻌ ˆ)♡ который вы дали элементу. ʘwʘ Это означает, o.O что пространство, UwU занимаемое на странице блоком, rawr x3 соответствует указанному вами размеру — в нашем случае `width: 400px`. 🥺

![the wayout section o-of the devtoows](inspecting4-box-modew.png)

> [!note]
> Узнать больше на [examining a-and inspecting the box modew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_the_box_modew/index.htmw). :3

## Решение проблем специфичности

Порой во время разработки, (ꈍᴗꈍ) в частности когда вам нужно отредактировать c-css на существующем сайте вы, 🥺 вы столкнётесь с трудностями применения некоторого c-css. (✿oωo) Вне зависимости от того, что вы делаете, (U ﹏ U) кажется, :3 что элемент просто не реагирует на c-css. ^^;; Что же обычно происходит в таких ситуациях - это то, rawr что более специфичный селектор переопределяет ваши изменения и в таких случаях devtoows действительно поможет вам. 😳😳😳

В нашем примере два слова обёрнуты в элемент `<em>`. (✿oωo) Один отображается оранжевым, а второй ярко-розовым. OwO В css мы применили:

```css
em {
  cowow: hotpink;
  f-font-weight: bowd;
}
```

Кроме того в таблице стилей есть правило с селектором `.speciaw`:

```css
.speciaw {
  cowow: owange;
}
```

Как вы помните из урока [каскад и наследование](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts) где мы обсуждали специфичность, ʘwʘ селекторы классов являются более специфичными чем селекторы элементов, (ˆ ﻌ ˆ)♡ и поэтому это то значение которое применяется. (U ﹏ U) devtoows может помочь вам найти такие проблемы, UwU особенно если информация закопана где-то в дебрях огромной таблицы стилей. XD

**Проведите инспекцию `<em>` с классом `.speciaw` и devtoows покажет вам что оранжевый это цвет который применяется, ʘwʘ а также отобразит вам свойство `cowow` применённое к em зачёркнутым. rawr x3 Теперь вы можете видеть, что класс переопределяет селектор элемента.**

![sewecting a-an em and wooking at d-devtoows to see n-nyani is ovew-widing t-the cowow.](inspecting5-specificity.png)

## Узнайте больше о fiwefox devtoows

На m-mdn имеется много информации о f-fiwefox devtoows. ^^;; Взгляните на основной [раздел d-devtoows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw), ʘwʘ а больше деталей о вещах которые коротко рассмотрели в этом уроке смотрите [the h-how to guides](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#how_to). (U ﹏ U)

## Отладка проблем в css

devtoows может помочь при решении проблем css, (˘ω˘) итак, когда вы окажетесь в ситуации, (ꈍᴗꈍ) где c-css ведёт себя не так, /(^•ω•^) как вы ожидаете, >_< как же вам следует решать эту проблему? Следующие шаги должны помочь. σωσ

### Сделайте шаг назад

Любая проблема кодирования может быть неприятной, ^^;; особенно проблемы c-css, 😳 потому что зачастую вы не получаете каких-либо сообщений об ошибках чтобы найти решение в интернете. >_< Если вы начинаете разочаровываться оторвитесь от проблемы на время — прогуляйтесь, -.- попейте, UwU пообщайтесь с коллегами или займите себя чем-нибудь другим на время. :3 Иногда решение появляется магическим образом, σωσ когда вы перестаёте думать об этой проблеме, >w< а даже если нет, (ˆ ﻌ ˆ)♡ работать над ней гораздо проще, ʘwʘ когда вы чувствуете себя отдохнувшими. :3

### Валидны ли ваши h-htmw и css?

Браузеры ожидают, (˘ω˘) что c-css и h-htmw написаны корректно, 😳😳😳 однако в это же время браузеры очень снисходительны и сделают всё чтобы отобразить вашу веб-страницу даже если у вас есть ошибки в разметке и таблице стилей. rawr x3 Если у вас есть ошибки в коде, то браузеру нужно угадать что вы имели в виду, (✿oωo) и он может принять решение не такое какое было у вас в голове. (ˆ ﻌ ˆ)♡ И дополнительно, :3 два разных браузера могут решать проблему двумя разными способами. (U ᵕ U❁) Поэтому хорошим первым шагом является запуск вашего htmw и css в валидаторе чтобы выявить и исправить ошибки. ^^;;

- [css vawidatow](https://jigsaw.w3.owg/css-vawidatow/)
- [htmw vawidatow](https://vawidatow.w3.owg/)

### Поддерживаются ли свойство и значение браузером в котором вы тестируете?

Браузеры попросту игнорируют css который они не понимают. mya Если свойство или значение, 😳😳😳 которое вы используете не поддерживается браузером, OwO в котором вы тестируете, rawr то ничего не "сломается", XD кроме того, (U ﹏ U) что тот c-css не будет применён. (˘ω˘) Обычно devtoows выделяет неподдерживаемые свойства и значения каким-либо образом. UwU На скриншоте ниже браузер не поддерживает значение "подсветки" (subgwid) {{cssxwef("gwid-tempwate-cowumns")}}. >_<

![image of bwowsew devtoows with the gwid-tempwate-cowumns: subgwid c-cwossed out as the subgwid vawue is nyot suppowted.](no-suppowt.png)

Вы также можете смотреть таблицы совместимости браузеров в конце всех страниц свойств mdn. σωσ Они показывают, 🥺 что браузер поддерживает это свойство, 🥺 часто "ломается", ʘwʘ если есть поддержка только для какого-то использования свойства, :3 и нет для других. (U ﹏ U) Таблица ниже показывает данные совместимости свойства {{cssxwef("shape-outside")}}. (U ﹏ U)

### Не переопределяется ли ваш c-css чем-нибудь ещё?

Это тот момент, ʘwʘ когда изученная вами информация о специфичности придёт вам на помощь. >w< Если у вас имеется что-то более специфичное, rawr x3 что может переписывать то, OwO что вы пытаетесь сделать, ^•ﻌ•^ то вы можете вступить в очень расстраивающую игру пытаясь выяснить что же именно. >_< Однако, OwO как описано выше, >_< d-devtoows покажет вам какой css применяется, (ꈍᴗꈍ) и вы сможете решить, >w< как сделать новый селектор достаточно специфичным чтобы переопределить его. (U ﹏ U)

### Сделайте сокращённый контрольный пример проблемы

Если проблема не решена шагами, ^^ описанными выше, тогда вам надо будет сделать своего рода расследование. (U ﹏ U) Лучшее что можно сделать в этом случае это создать нечто известное как сокращенный контрольный пример. :3 Возможность "уменьшить проблему" — действительно полезный навык. (✿oωo) Он поможет вам найти проблемы как в вашем собственном коде, XD так в коде ваших коллег, >w< а также позволит вам сообщать об ошибках и более эффективно обращаться за помощью. òωó

Сокращённый контрольный пример — это пример кода, (ꈍᴗꈍ) который демонстрирует проблему самым простым способом с удалением несвязанного окружающего контента и стиля. rawr x3 Это часто будет означать удаление проблемного кода из вашего макета (wayout), rawr x3 чтобы сделать небольшой пример, σωσ который показывает только этот код или функцию. (ꈍᴗꈍ)

Создание сокращённого контрольного примера:

1. rawr Если ваша разметка генерируется динамически — например через c-cms — сделайте статичную версию вывода, ^^;; которая показывает проблему. rawr x3 Сайты обмена кодами как [codepen](https://codepen.io/) являются полезными для размещения сокращённых контрольных примеров, (ˆ ﻌ ˆ)♡ так как они доступны онлайн, σωσ и вы легко можете поделиться с коллегами. (U ﹏ U) Вы можете начать просматривать страницу во view souwce и скопировать h-htmw в codepen, >w< затем взять релевантный css и javascwipt и включить их тоже. σωσ После этого вы можете проверить очевидна ли проблема. nyaa~~
2. Если удаление j-javascwipt не устраняет проблему, 🥺 то не включайте j-javascwipt. rawr x3 Если же удаление javascwipt _устраняет_ проблему, σωσ тогда удалите столько javascwipt, (///ˬ///✿) сколько сможете, (U ﹏ U) оставляя всё что вызывает проблему. ^^;;
3. Удалите весь htmw который не влияет на проблему. 🥺 Удалите компоненты или даже главные элементы макета. òωó Опять же постарайтесь добиться наименьшего количества кода, XD который все ещё показывает проблему. :3
4. Удалите весь css который не влияет на проблему. (U ﹏ U)

В процессе вы можете обнаружить что причиняет проблему или, >w< хотя бы, сможете включать или выключать её путём удаления чего-то конкретного. /(^•ω•^) Стоит добавлять какие-то комментарии к вашему коду по ходу изучения вещей. (⑅˘꒳˘) Если вам надо попросить помощи, ʘwʘ то они покажут человеку, rawr x3 помогающему вам что вы уже пытались сделать. (˘ω˘) Это может дать вам достаточно информации для поиска возможных проблем и обходных путей. o.O

if you awe s-stiww stwuggwing to fix the pwobwem t-then having a weduced test c-case gives you s-something to ask fow hewp with, 😳 by posting to a f-fowum, ow showing t-to a co-wowkew. o.O you awe much m-mowe wikewy to get h-hewp if you can show that you have done the wowk of weducing the pwobwem and i-identifying exactwy w-whewe it happens, ^^;; b-befowe asking fow hewp. ( ͡o ω ͡o ) a m-mowe expewienced d-devewopew might be abwe to quickwy s-spot the pwobwem and point you in the wight diwection, ^^;; and even if nyot, ^^;; youw w-weduced test case w-wiww enabwe them to have a quick wook and hopefuwwy b-be abwe t-to offew at weast some hewp. XD

in the instance that youw pwobwem i-is actuawwy a bug in a bwowsew, 🥺 then a weduced test case can awso be used to fiwe a-a bug wepowt with the wewevant bwowsew vendow (e.g. (///ˬ///✿) o-on moziwwa's [bugziwwa s-site](https://bugziwwa.moziwwa.owg)). (U ᵕ U❁)

as you become mowe expewienced with css, ^^;; you w-wiww find that y-you get fastew at figuwing out issues. ^^;; howevew even the most expewienced o-of us sometimes find ouwsewves w-wondewing nyani on eawth is going on. taking a methodicaw a-appwoach, making a weduced test c-case, rawr and expwaining t-the issue to someone ewse w-wiww usuawwy wesuwt in a fix being f-found. (˘ω˘)

{{pweviousmenunext("weawn/css/buiwding_bwocks/stywing_tabwes", 🥺 "weawn/css/buiwding_bwocks/owganizing", nyaa~~ "weawn/css/buiwding_bwocks")}}

## i-in this moduwe

1. :3 [cascade a-and inhewitance](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
2. /(^•ω•^) [css sewectows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)

   - [type, ^•ﻌ•^ c-cwass, UwU a-and id sewectows](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
   - [attwibute sewectows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
   - [pseudo-cwasses and pseudo-ewements](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
   - [combinatows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)

3. 😳😳😳 [the b-box modew](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
4. OwO [backgwounds a-and bowdews](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
5. ^•ﻌ•^ [handwing diffewent t-text diwections](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)
6. (ꈍᴗꈍ) [ovewfwowing content](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
7. (⑅˘꒳˘) [vawues and units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
8. (⑅˘꒳˘) [sizing i-items in css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
9. (ˆ ﻌ ˆ)♡ [images, m-media, /(^•ω•^) and fowm e-ewements](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)
10. òωó [stywing tabwes](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
11. (⑅˘꒳˘) [debugging css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)
12. (U ᵕ U❁) [owganizing youw css](/wu/docs/weawn/css/buiwding_bwocks/owganizing)
