---
title: Отладка CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}

Порой, при написании CSS, вы будете сталкиваться с проблемой, при которой будет казаться, что CSS не делает того, чего вы ожидаете от него. Возможно, вы считаете, что определённый селектор должен соответствовать элементу, но ничего не происходит, или поле имеет размер, отличный от ожидаемого. Эта статья поможет вам с тем, как отладить CSS проблемы и покажет вам как DevTools (инструменты разработчика), включённые во все современные браузеры, могут помочь разобраться с тем, что происходит.

| Необходимые знания: | Basic computer literacy, [basic software installed](/ru/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software), basic knowledge of [working with files](/ru/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files), HTML basics (study [Introduction to HTML](/ru/docs/conflicting/Learn_web_development/Core/Structuring_content)), and an idea of how CSS works (study [CSS first steps](/ru/docs/conflicting/Learn_web_development/Core/Styling_basics).) |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задачи:             | Изучить основы того, что такое DevTools и как выполнять простую инспекцию и редактирование CSS.                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Как получить доступ к DevTools браузера

Статья [What are browser developer tools](/ru/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) это обновлённое руководство объясняющее как получить доступ к инструментам разных браузеров и платформ. Хотя вы можете выбрать в основном разрабатывать в конкретном браузере и поэтому инструменты, включённые в этот браузер, будут вам знакомы больше всего, стоит знать, как получать доступ к инструментам и в других браузерах. Это поможет вам если вы наблюдаете разное отображение среди разных браузеров.

Вы также обнаружите, что браузеры фокусировались на различных областях при создании своих DevTools. Например в Firefox существует несколько замечательных инструментов для визуальной работы с CSS Layout (разметкой), позволяющих вам проводить инспекцию и править [Grid Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html), [Flexbox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html), и [Shapes](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html). Тем не менее, все другие браузеры имеют схожие фундаментальные инструменты, например для инспекции свойств и значений применённых к элементам на вашей странице и для выполнения изменений к ним в редакторе.

В этом уроке мы рассмотрим некоторые полезные функции Firefox DevTools для работы с CSS. Для того чтобы сделать это я буду использовать [файл примера](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Загрузите его в новой вкладке если хотите следовать и откройте ваш DevTools как описано в статье, ссылка на которую дана выше.

## DOM vs View Source

То, что может сбить с толку новичков в DevTools, — это разница между тем, что вы видите когда [просматриваете источник](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) веб-страницы или смотрите на HTML файл который поместили на сервер и то что вы видите на [HTML панели](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html_pane) DevTools. Хотя это выглядит примерно так же, как то, что вы видите через View Source, существуют некоторые отличия.

В визуализированном DOM браузер мог скорректировать некоторый плохо-написанный HTML за вас. Если вы неправильно закрыли элемент, например открывали `<h2>`, но закрыли `</h3>`, браузер поймёт, что вы хотели сделать и HTML в DOM будет правильно закрывать `<h2>` с `</h2>`. Браузер также нормализует весь HTML,а DOM также покажет любые изменения сделанные через JavaScript.

View Source же для сравнения — это просто исходный код HTML, хранящийся на сервере. [HTML дерево](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html_tree) в вашем DevTools показывает, что именно браузер отображает в любой момент времени, что даёт вам представление от том, что действительно происходит.

## Инспекция применённого CSS

Выбирать элемент на вашей странице можно либо правым/ctrl-кликом по нему и выбрав _Inspect_, либо выбрав его из дерева HTML в левой панели DevTools. Попробуйте выбрать элемент с классом `box1`; это первый элемент на странице с блоком, ограниченным рамками вокруг него.

![The example page for this tutorial with DevTools open.](inspecting1.png)

Если вы посмотрите на [Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules_view) справа от вашего HTML, вы должны увидеть свойства и значения CSS применённые к элементу. Вы увидите правила, напрямую применённые к классу `box1` и также CSS который наследуется блоком от предков, в этом случае от `<body>`. Это полезно в случае, если вы видите, что применяется какой-либо CSS, который вы не ожидали. Вполне возможно, что он наследуется от родительского элемента и вам необходимо добавить правило, чтобы переписать его в контексте этого элемента.

Также полезна возможность расширения (развёртывания) свойств коротких записей. В нашем примере используется короткая запись `margin`.

**Кликните по маленькой стрелке для того, чтобы развернуть вид, показывающий полную запись различных свойств и значений.**

**Вы можете переключать значения в Rules view в положение включено или выключено если эта панель активна — если навести на неё курсор мыши, появятся флажки. Снимите флажок правила, например, border-radius, и CSS перестанет применяться.**

Вы можете использовать это чтобы делать сравнения по типу A/B, принимая решение если что-то выглядит лучше с применённым правилом или нет, а также это помогает в отладке — например если layout не в порядке и вы пытаетесь разобраться какое свойство является причиной проблемы.

## Редактирование значений

В дополнение к включению и выключению свойств, вы можете редактировать их значения. Возможно, вам захочется посмотреть будет ли другой цвет выглядеть лучше или захотите настроить размер чего-либо. DevTools поможет вам сэкономить кучу времени редактируя таблицу стиля и перезагружая страницу.

**Выбрав `box1`, кликните на образчик (маленький цветной круг) который показывает цвет, применённый к границе. Откроется панель выбора цвета и сможете попробовать некоторые другие цвета; это действие обновится на странице в режиме реального времени.** **Аналогичным образом вы можете изменить ширину или стиль границ.**

![DevTools Styles Panel with a color picker open.](inspecting2-color-picker.png)

## Добавление нового свойства

Используя DevTools вы можете добавлять новые свойства. Возможно, вы осознали, что не хотите, чтобы ваш блок наследовал размер шрифта элементов `<body>`, а хотите установить его собственный конкретный размер. Вы можете попробовать это в DevTools до того, как внесёте изменения в ваше CSS файл.

**Вы можете кликнуть по закрывающей фигурной скобке в правиле чтобы начать вводить новое объявление в нем, с этого момента вы можете начинать вводить новое свойство и DevTools покажет список автозаполнения подходящих свойств. Выбрав `font-size`, вводите значение, которое хотите попробовать. Вы также можете кликнуть на кнопку + чтобы добавить дополнительное правило с тем же селектором и добавить ваши новые правила туда.**

![The DevTools Panel, adding a new property to the rules, with the autocomplete for font- open](inspecting3-font-size.png)

> [!NOTE]
> Также существуют другие полезные функции в Rules view, например объявления с не валидными значениями зачёркнуты. Вы можете узнать больше в [Examine and edit CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Понимание модели блоков

В предыдущем уроке мы обсудили [модель блоков](/ru/docs/Learn_web_development/Core/Styling_basics/Box_model) и тот факт, что у нас есть альтернативная модель блоков, которая изменяет способ расчёта размера элементов основываясь на размере который вы им задаёте, плюс padding и границы. DevTools может действительно помочь вам понять, как вычисляется размер элемента.

[Layout view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout_view) показывает вам диаграмму блочной модели выбранного элемента, вместе с описанием свойств и значений, которые изменяют способ расположения элемента. Это включает описание свойств, которые вы могли и не использовать напрямую к элементу, но которые имеют набор начальных значений.

В этой панели одним из детальных свойств является свойство `box-sizing`, которое контролирует какую блочную модель использует элемент.

**Сравните два блока с классами `box1` и `box2`. Они оба имеют одинаковую ширину (400px) применённую к ним, однако `box1` визуально шире. В layout panel вы можете увидеть, что он использует `content-box`. Это значение, которое принимает размер, который вы даёте элементу и затем добавляет padding** **и ширину границ.**

Элемент с классом `box2` использует `border-box`, поэтому здесь padding и граница вычтены из размера, который вы дали элементу. Это означает, что пространство, занимаемое на странице блоком, соответствует указанному вами размеру — в нашем случае `width: 400px`.

![The Layout section of the DevTools](inspecting4-box-model.png)

> [!NOTE]
> Узнать больше на [Examining and Inspecting the Box Model](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Решение проблем специфичности

Порой во время разработки, в частности когда вам нужно отредактировать CSS на существующем сайте вы, вы столкнётесь с трудностями применения некоторого CSS. Вне зависимости от того, что вы делаете, кажется, что элемент просто не реагирует на CSS. Что же обычно происходит в таких ситуациях - это то, что более специфичный селектор переопределяет ваши изменения и в таких случаях DevTools действительно поможет вам.

В нашем примере два слова обёрнуты в элемент `<em>`. Один отображается оранжевым, а второй ярко-розовым. В CSS мы применили:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Кроме того в таблице стилей есть правило с селектором `.special`:

```css
.special {
  color: orange;
}
```

Как вы помните из урока [каскад и наследование](/ru/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) где мы обсуждали специфичность, селекторы классов являются более специфичными чем селекторы элементов, и поэтому это то значение которое применяется. DevTools может помочь вам найти такие проблемы, особенно если информация закопана где-то в дебрях огромной таблицы стилей.

**Проведите инспекцию `<em>` с классом `.special` и DevTools покажет вам что оранжевый это цвет который применяется, а также отобразит вам свойство `color` применённое к em зачёркнутым. Теперь вы можете видеть, что класс переопределяет селектор элемента.**

![Selecting an em and looking at DevTools to see what is over-riding the color.](inspecting5-specificity.png)

## Узнайте больше о Firefox DevTools

На MDN имеется много информации о Firefox DevTools. Взгляните на основной [раздел DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), а больше деталей о вещах которые коротко рассмотрели в этом уроке смотрите [The How To Guides](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#how_to).

## Отладка проблем в CSS

DevTools может помочь при решении проблем CSS, итак, когда вы окажетесь в ситуации, где CSS ведёт себя не так, как вы ожидаете, как же вам следует решать эту проблему? Следующие шаги должны помочь.

### Сделайте шаг назад

Любая проблема кодирования может быть неприятной, особенно проблемы CSS, потому что зачастую вы не получаете каких-либо сообщений об ошибках чтобы найти решение в интернете. Если вы начинаете разочаровываться оторвитесь от проблемы на время — прогуляйтесь, попейте, пообщайтесь с коллегами или займите себя чем-нибудь другим на время. Иногда решение появляется магическим образом, когда вы перестаёте думать об этой проблеме, а даже если нет, работать над ней гораздо проще, когда вы чувствуете себя отдохнувшими.

### Валидны ли ваши HTML и CSS?

Браузеры ожидают, что CSS и HTML написаны корректно, однако в это же время браузеры очень снисходительны и сделают всё чтобы отобразить вашу веб-страницу даже если у вас есть ошибки в разметке и таблице стилей. Если у вас есть ошибки в коде, то браузеру нужно угадать что вы имели в виду, и он может принять решение не такое какое было у вас в голове. И дополнительно, два разных браузера могут решать проблему двумя разными способами. Поэтому хорошим первым шагом является запуск вашего HTML и CSS в валидаторе чтобы выявить и исправить ошибки.

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML validator](https://validator.w3.org/)

### Поддерживаются ли свойство и значение браузером в котором вы тестируете?

Браузеры попросту игнорируют CSS который они не понимают. Если свойство или значение, которое вы используете не поддерживается браузером, в котором вы тестируете, то ничего не "сломается", кроме того, что тот CSS не будет применён. Обычно DevTools выделяет неподдерживаемые свойства и значения каким-либо образом. На скриншоте ниже браузер не поддерживает значение "подсветки" (subgrid) {{cssxref("grid-template-columns")}}.

![Image of browser DevTools with the grid-template-columns: subgrid crossed out as the subgrid value is not supported.](no-support.png)

Вы также можете смотреть таблицы совместимости браузеров в конце всех страниц свойств MDN. Они показывают, что браузер поддерживает это свойство, часто "ломается", если есть поддержка только для какого-то использования свойства, и нет для других. Таблица ниже показывает данные совместимости свойства {{cssxref("shape-outside")}}.

### Не переопределяется ли ваш CSS чем-нибудь ещё?

Это тот момент, когда изученная вами информация о специфичности придёт вам на помощь. Если у вас имеется что-то более специфичное, что может переписывать то, что вы пытаетесь сделать, то вы можете вступить в очень расстраивающую игру пытаясь выяснить что же именно. Однако, как описано выше, DevTools покажет вам какой CSS применяется, и вы сможете решить, как сделать новый селектор достаточно специфичным чтобы переопределить его.

### Сделайте сокращённый контрольный пример проблемы

Если проблема не решена шагами, описанными выше, тогда вам надо будет сделать своего рода расследование. Лучшее что можно сделать в этом случае это создать нечто известное как сокращенный контрольный пример. Возможность "уменьшить проблему" — действительно полезный навык. Он поможет вам найти проблемы как в вашем собственном коде, так в коде ваших коллег, а также позволит вам сообщать об ошибках и более эффективно обращаться за помощью.

Сокращённый контрольный пример — это пример кода, который демонстрирует проблему самым простым способом с удалением несвязанного окружающего контента и стиля. Это часто будет означать удаление проблемного кода из вашего макета (layout), чтобы сделать небольшой пример, который показывает только этот код или функцию.

Создание сокращённого контрольного примера:

1. Если ваша разметка генерируется динамически — например через CMS — сделайте статичную версию вывода, которая показывает проблему. Сайты обмена кодами как [CodePen](https://codepen.io/) являются полезными для размещения сокращённых контрольных примеров, так как они доступны онлайн, и вы легко можете поделиться с коллегами. Вы можете начать просматривать страницу во View Source и скопировать HTML в CodePen, затем взять релевантный CSS и JavaScript и включить их тоже. После этого вы можете проверить очевидна ли проблема.
2. Если удаление JavaScript не устраняет проблему, то не включайте JavaScript. Если же удаление JavaScript _устраняет_ проблему, тогда удалите столько JavaScript, сколько сможете, оставляя всё что вызывает проблему.
3. Удалите весь HTML который не влияет на проблему. Удалите компоненты или даже главные элементы макета. Опять же постарайтесь добиться наименьшего количества кода, который все ещё показывает проблему.
4. Удалите весь CSS который не влияет на проблему.

В процессе вы можете обнаружить что причиняет проблему или, хотя бы, сможете включать или выключать её путём удаления чего-то конкретного. Стоит добавлять какие-то комментарии к вашему коду по ходу изучения вещей. Если вам надо попросить помощи, то они покажут человеку, помогающему вам что вы уже пытались сделать. Это может дать вам достаточно информации для поиска возможных проблем и обходных путей.

If you are still struggling to fix the problem then having a reduced test case gives you something to ask for help with, by posting to a forum, or showing to a co-worker. You are much more likely to get help if you can show that you have done the work of reducing the problem and identifying exactly where it happens, before asking for help. A more experienced developer might be able to quickly spot the problem and point you in the right direction, and even if not, your reduced test case will enable them to have a quick look and hopefully be able to offer at least some help.

In the instance that your problem is actually a bug in a browser, then a reduced test case can also be used to file a bug report with the relevant browser vendor (e.g. on Mozilla's [bugzilla site](https://bugzilla.mozilla.org)).

As you become more experienced with CSS, you will find that you get faster at figuring out issues. However even the most experienced of us sometimes find ourselves wondering what on earth is going on. Taking a methodical approach, making a reduced test case, and explaining the issue to someone else will usually result in a fix being found.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}

## In this module

1. [Cascade and inheritance](/ru/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
2. [CSS selectors](/ru/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
   - [Type, class, and ID selectors](/ru/docs/conflicting/Learn_web_development/Core/Styling_basics/Basic_selectors)
   - [Attribute selectors](/ru/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
   - [Pseudo-classes and pseudo-elements](/ru/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
   - [Combinators](/ru/docs/Learn_web_development/Core/Styling_basics/Combinators)

3. [The box model](/ru/docs/Learn_web_development/Core/Styling_basics/Box_model)
4. [Backgrounds and borders](/ru/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
5. [Handling different text directions](/ru/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
6. [Overflowing content](/ru/docs/Learn_web_development/Core/Styling_basics/Overflow)
7. [Values and units](/ru/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
8. [Sizing items in CSS](/ru/docs/Learn_web_development/Core/Styling_basics/Sizing)
9. [Images, media, and form elements](/ru/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
10. [Styling tables](/ru/docs/Learn_web_development/Core/Styling_basics/Tables)
11. [Debugging CSS](/ru/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
12. [Organizing your CSS](/ru/docs/Learn/CSS/Building_blocks/Organizing)
