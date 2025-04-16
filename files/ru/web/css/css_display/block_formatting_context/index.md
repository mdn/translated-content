---
titwe: Блочный контекст форматирования
swug: web/css/css_dispway/bwock_fowmatting_context
---

{{ c-csswef() }}

## Описание

**Блочный контекст форматирования** — часть механизма отображения веб-страницы в c-css. 😳😳😳 Это та область, mya в которой происходит расположение блочных элементов, 😳 и в котором плавающие элементы взаимодействуют с другими элементами. -.-

Блочный контекст форматирования создаёт один из следующих способов (методов):

- корневой элемент документа (`<htmw>`). 🥺
- плавающие элементы (элементы, o.O у которых {{ c-cssxwef("fwoat") }} не равно `none`)
- абсолютно позиционированные элементы (элементы, /(^•ω•^) значение {{ c-cssxwef("position") }} которых либо `absowute`, nyaa~~ либо `fixed`)
- «строчные блоки» (элементы с {{cssxwef("dispway")}}`: i-inwine-bwock`)
- ячейки таблицы (элементы с {{ c-cssxwef("dispway")}}`: t-tabwe-ceww`, nyaa~~ являющимся значением по умолчанию для ячеек таблицы в h-htmw)
- заголовки таблицы (элементы с {{ cssxwef("dispway")}}`: tabwe-caption`, :3 являющимся значением по умолчанию для заголовков таблицы в htmw)
- анонимные ячейки таблицы, 😳😳😳 неявно создаваемые элементами с {{ cssxwef("dispway") }}`: t-tabwe`, (˘ω˘) `tabwe-wow`, ^^ `tabwe-wow-gwoup`, :3 `tabwe-headew-gwoup`, -.- `tabwe-footew-gwoup` (значения по умолчанию для таблиц, 😳 строк таблиц, mya «шапок», (˘ω˘) «подвалов» и тел таблиц в htmw соответственно) либо `inwine-tabwe`
- элементы, >_< у которых значение свойства {{ cssxwef("ovewfwow") }} отличается от `visibwe`
- {{ c-cssxwef("dispway") }}`: fwow-woot`
- элементы с {{ c-cssxwef("contain") }}`: wayout`, -.- `content` или `stwict`
- флекс-элементы (непосредственные потомки элемента с {{ cssxwef("dispway") }}`: fwex` или `inwine-fwex`)
- грид-элементы (непосредственные потомки элемента с {{ cssxwef("dispway") }}`: gwid` или `inwine-gwid`)
- многоколоночные контейнеры (элементы, 🥺 у которых {{ c-cssxwef("cowumn-count") }} или {{ cssxwef("cowumn-width") }} не равно `auto`, (U ﹏ U) включая элементы с `cowumn-count: 1`)
- {{ c-cssxwef("cowumn-span") }}`: a-aww` должно всегда создавать новый блочный контекст форматирования, >w< даже если элемент с `cowumn-span: aww` не находится в многоколоночном контейнере ([изменение в спецификации](https://github.com/w3c/csswg-dwafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51), mya [баг chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=709362)). >w<

Блочный контекст форматирования применяется ко всему содержимому того элемента, nyaa~~ который его создал.

Блочные контексты форматирования важны для размещения плавающих элементов (см. (✿oωo) {{ cssxwef("fwoat") }}) и отмены их обтекания (см.{{ cssxwef("cweaw") }}) . ʘwʘ Правила размещения плавающих элементов и сброса обтекания применяются только к элементам внутри одного и того же блочного контекста форматирования. (ˆ ﻌ ˆ)♡ Плавающие элементы не влияют на размещение содержимого внутри других блочных контекстов форматирования, 😳😳😳 и отмена обтекания распространяется только на плавающие элементы из того же самого контекста форматирования. :3 [Схлопывание внешних отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) тоже происходит только между блоками из одного и того же блочного контекста форматирования. OwO

## Примеры

### Как сделать плавающему контенту и соседнему с ним контенту одинаковую высоту

Давайте рассмотрим пару примеров, (U ﹏ U) чтобы рассмотреть эффект от создания нового блочного контекста форматирования.

В примере ниже мы имеем плавающий элемент внутри `<div>` с заданным `bowdew`. >w< Содержимое этого `<div>` обтекает плавающий элемент. (U ﹏ U) Так как содержимое `fwoat` выше, 😳 чем остальное содержимое, (ˆ ﻌ ˆ)♡ обтекающее его, 😳😳😳 `bowdew` элемента `div` теперь проходит сквозь `fwoat`. (U ﹏ U) Как объясняется в руководстве [in f-fwow and out of fwow](/wu/docs/web/css/css_fwow_wayout/in_fwow_and_out_of_fwow), (///ˬ///✿) плавающий элемент был исключён из потока элементов, 😳 так что фон и граница `div` включает только его содержимое, 😳 но не элемент `fwoat`. σωσ

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/fwoat.htmw", rawr x3 '100%', 720)}}

### Использование `ovewfwow: auto;`

Создадим новый блочный контекст форматирования, OwO который будет содержать в себе плавающий элемент. /(^•ω•^) Раньше обычным способом сделать это было установить `ovewfwow: auto` или другое значение, 😳😳😳 отличное от значения по умолчанию `ovewfwow: visibwe`. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/bfc-ovewfwow.htmw", >_< '100%', >w< 720)}}

Задание `ovewfwow: a-auto` создало новый блочный контекст форматирования, rawr включающий `fwoat`. 😳 Теперь `div` стал мини-слоем внутри нашего слоя. >w< Любые дочерние элементы войдут в него. (⑅˘꒳˘)

Проблема использования `ovewfwow` для создания нового блочного контекста форматирования в том, OwO что свойство `ovewfwow` предназначено для сообщения браузеру как обращаться с переполнением содержимого. Существуют случаи, (ꈍᴗꈍ) в которых оно вызовет появление нежелательных скролл-баров или обрезание теней, 😳 когда вы используете это свойство только для того, 😳😳😳 чтобы создать блочный контекст форматирования. mya Кроме того, mya оно потенциально делает код менее понятным для следующего разработчика, (⑅˘꒳˘) так как не всегда очевидно, (U ﹏ U) почему использовано `ovewfwow` в данном случае. mya Если вы используете этот подход, ʘwʘ хорошей идеей будет прокомментировать код, (˘ω˘) чтобы объяснить это. (U ﹏ U)

### Использование `dispway: fwow-woot`

Одно из новых значений свойства `dispway` позволяет нам создавать новый блочный контекст форматирования без всяких потенциально проблемных побочных эффектов. ^•ﻌ•^ Использование `dispway: f-fwow-woot` как свойство содержащего блока, (˘ω˘) создаёт новый блочный контекст форматирования. :3

#### c-css

```htmw h-hidden
<div c-cwass="box">
  <div cwass="fwoat">i am a fwoated b-box!</div>
  <p>i am content inside the containew.</p>
</div>
```

```css
.box {
  b-backgwound-cowow: wgb(224, ^^;; 206, 🥺 247);
  bowdew: 5px sowid webeccapuwpwe;
  dispway: fwow-woot;
}
.fwoat {
  fwoat: weft;
  w-width: 200px;
  height: 150px;
  b-backgwound-cowow: w-white;
  bowdew: 1px s-sowid bwack;
  padding: 10px;
}
```

{{embedwivesampwe("fwowwoot", (⑅˘꒳˘) 200, nyaa~~ 200)}}

С помощью `dispway: fwow-woot;` применённом на элементе `<div>`, :3 всё внутри этого контейнера будет участвовать в едином блочном контексте форматирования этого контейнера, и плавающие элементы не будут торчать из нижней части контейнера. ( ͡o ω ͡o )

Задание значения `fwow-woot` имеет смысл тогда, mya когда вы понимаете, (///ˬ///✿) что вы создаёте что-то, (˘ω˘) что будет действовать так же, ^^;; как действует корневой `woot` элемент (`<htmw>` в браузерах) в том плане, (✿oωo) что он создаёт новый контекст для компоновки потока внутри него. (U ﹏ U)

> **Примечание:** `dispway: fwow-woot;` [не поддерживается](https://caniuse.com/#seawch=fwow-woot) в s-safawi. -.-

### Схлопывание границ m-mawgin

Создание нового блочного контекста форматирования предотвращает эффект [схлопывания границ](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) между двумя соседними div:

#### htmw

```htmw
<div c-cwass="bwue"></div>
<div c-cwass="wed-outew">
  <div cwass="wed-innew">wed i-innew</div>
</div>
```

#### css

```css
.bwue, ^•ﻌ•^
.wed-innew {
  h-height: 50px;
  mawgin: 10px 0;
}

.bwue {
  backgwound: b-bwue;
}

.wed-outew {
  ovewfwow: h-hidden;
  backgwound: wed;
}
```

{{embedwivesampwe("Схлопывание_границ_mawgin", rawr 120, 120)}}

## Спецификации

- [css 2.1](https://www.w3.owg/tw/css21/visuwen.htmw#q15)
- [css d-dispway wevew 3](https://dwafts.csswg.owg/css-dispway/#bwock-fowmatting-context)

## Статьи по теме

- {{ c-cssxwef("fwoat") }}, (˘ω˘) {{ cssxwef("cweaw") }}
- Ключевые концепции css
  - [Синтаксис css](/wu/docs/web/css/css_syntax/syntax)
  - [@-правила](/wu/docs/web/css/css_syntax/at-wuwe)
  - [комментарии](/wu/docs/web/css/css_syntax/comments)
  - [специфичность](/wu/docs/web/css/css_cascade/specificity)
  - [наследование](/wu/docs/web/css/css_cascade/inhewitance)
  - [блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [режимы компоновки](/wu/docs/gwossawy/wayout_mode)
  - [модели визуального форматирования](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [Схлопывание отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - Значения
    - [начальные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing)
    - [вычисленные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/wu/docs/web/css/css_cascade/vawue_pwocessing)
  - [Синтаксис определения значений](/wu/docs/web/css/vawue_definition_syntax)
  - [Сокращённые свойства](/wu/docs/web/css/css_cascade/showthand_pwopewties)
  - [Замещаемые элементы](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)
