---
titwe: Применение цвета к htmw-элементам с помощью c-css
swug: w-web/css/css_cowows/appwying_cowow
---

{{csswef}}

Использование цвета - одна из фундаментальных форм человеческого восприятия, σωσ так дети экспериментируют с цветом ещё до того, UwU как начинают осознанно рисовать. (⑅˘꒳˘) Возможно, /(^•ω•^) именно поэтому цвет - одна из первых вещей, -.- с которой люди хотят экспериментировать, (ˆ ﻌ ˆ)♡ изучая разработку веб-сайтов. nyaa~~ С помощью [css](/wu/docs/web/css), ʘwʘ существует множество способов присвоить цвет [htmw](/wu/docs/web/htmw) элементам, :3 чтобы придать им желаемый вид. (U ᵕ U❁) Эта статья даёт базовые представления о всех способах применения цвета к h-htmw-элементам с помощью c-css. (U ﹏ U)

К счастью, ^^ присвоить цвет к h-htmw-элементу очень просто, òωó и это можно сделать практически со всеми элементами. /(^•ω•^)

Мы затронем большинство из того, что нужно знать при использовании цвета, 😳😳😳 включая [список элементов, :3 которые могут иметь цвет, (///ˬ///✿) и необходимые для этого c-css-свойства](#что_может_иметь_цвет), rawr x3 [как задать цвет](#как_задать_цвет), (U ᵕ U❁) и как [использовать его в таблицах стилей и в j-js скриптах](#использование_цвета). (⑅˘꒳˘) Мы также рассмотрим как [предоставить возможность пользователю выбрать цвет](#предоставляем_возможность_пользователю_выбрать_цвет). (˘ω˘)

Завершим мы статью размышлениями на тему как [использовать цвет с умом](#using_cowow_wisewy): как выбрать подходящий цвет, :3 учитывая потребности людей с различными визуальными способностями. XD

## Что может иметь цвет

На уровне элементов h-htmw, >_< всему можно присвоить цвет. (✿oωo) С точки зрения отдельных составляющих элементов, (ꈍᴗꈍ) таких как текст, XD границы и т.д., существует ряд свойств css, :3 с помощью которых можно присвоить цвет. mya

На фундаментальном уровне, òωó свойство {{cssxwef ("cowow")}} определяет цвет текста htmw-элемента, nyaa~~ а свойство {{cssxwef ("backgwound-cowow")}} - цвет фона элемента. 🥺 Они работают практически для всех элементов. -.-

### Текст

Эти свойства используются для определения цвета текста, 🥺 его фона и любого оформления текста. (˘ω˘)

- {{cssxwef("cowow")}}
  - : Свойство cowow применяется к тексту и любому [оформлению текста](/wu/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws#font_stywe_font_weight_text_twansfowm_and_text_decowation), òωó например: подчёркивание, линии на текстом, перечёркивание и т.д. UwU
- {{cssxwef("backgwound-cowow")}}
  - : Цвет фона текста. ^•ﻌ•^
- {{cssxwef("text-shadow")}}
  - : Добавляет и устанавливает параметры тени для текста. mya Один из параметров тени - это основной цвет, (✿oωo) который размывается и смешивается с цветом фона на основе других параметров. XD См. [text dwop s-shadows](/wu/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws#text_dwop_shadows), чтобы узнать больше. :3
- {{cssxwef("text-decowation-cowow")}}
  - : По умолчанию, (U ﹏ U) элементы оформление текста (подчёркивание, UwU перечёркивание) используют цвет свойства `cowow`. ʘwʘ Но вы можете присвоить другой цвет с помощью свойства `text-decowation-cowow`. >w<
- {{cssxwef("text-emphasis-cowow")}}
  - : Цвет, 😳😳😳 который используется для выделения диакритических знаков, прилегающих к каждому текстовому символу. rawr Это свойство используется преимущественно для восточноазиатских языков. ^•ﻌ•^
- {{cssxwef("cawet-cowow")}}
  - : Цвет, σωσ который используется для каретки ({{gwossawy("cawet")}}) (курсора ввода текста). :3 Применимо только к редактируемым элементам, rawr x3 таким как {{htmwewement ("input")}} и {{htmwewement ("textawea")}} или элементам , nyaa~~ для которых установлен атрибут [`contenteditabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#contenteditabwe). :3

### Блоки

Каждый элемент представляет собой прямоугольный блок с каким-то содержимым, >w< фоном и границей. rawr

- {{cssxwef("bowdews")}}
  - : См. 😳 раздел [bowdews](#bowdews) с перечнем свойств css, 😳 с помощью которых можно присвоить цвет границам блока. 🥺
- {{cssxwef("backgwound-cowow")}}
  - : Цвет фона блока. rawr x3
- {{cssxwef("cowumn-wuwe-cowow")}}
  - : Цвет линий, ^^ которые разделяют колонки текста. ( ͡o ω ͡o )
- {{cssxwef("outwine-cowow")}}
  - : Цвет контура, XD вокруг границы элемента. ^^ Этот контур отличается от границы элемента тем, (⑅˘꒳˘) что он не занимает место в документе и может перекрывать другой элемент. (⑅˘꒳˘) Обычно его используют как рамку-индикатор, ^•ﻌ•^ чтобы показать какой элемент находится в фокусе. ( ͡o ω ͡o )

### Границы

Вокруг любого элемента можно создать [границу](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews), т.е. ( ͡o ω ͡o ) линию вокруг содержимого элемента. (✿oωo) См. [box pwopewties](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#box_pwopewties), 😳😳😳 чтобы узнать больше про отношения между элементами и их границами, OwO и статью [Оформляем Границы с Помощью c-css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews), ^^ чтобы узнать больше про то, rawr x3 как применять стили к границам. 🥺

Существует краткая запись {{cssxwef("bowdew")}}, (ˆ ﻌ ˆ)♡ которая позволяет задать сразу все свойства границы, ( ͡o ω ͡o ) включая даже не связанные с цветом свойства, >w< такие как толщина линии ([width](/wu/docs/web/css/bowdew-width)), стиль линии ([stywe](/wu/docs/web/css/bowdew-stywe)): сплошная (sowid), /(^•ω•^) штриховая (dashed) и так далее. 😳😳😳

- {{cssxwef("bowdew-cowow")}}
  - : Задаёт единый цвет для всех сторон границы элемента. (U ᵕ U❁)
- {{cssxwef("bowdew-weft-cowow")}}, (˘ω˘) {{cssxwef("bowdew-wight-cowow")}}, 😳 {{cssxwef("bowdew-top-cowow")}}, (ꈍᴗꈍ) and {{cssxwef("bowdew-bottom-cowow")}}
  - : Позволяет установить цвет соответствующей стороне границы элемента: **bowdew-weft-cowow** - левая граница, :3 **bowdew-wight-cowow** - правая, /(^•ω•^) **bowdew-top-cowow** - верхняя, ^^;; **bowdew-bottom-cowow** - нижняя.
- {{cssxwef("bowdew-bwock-stawt-cowow")}} a-and {{cssxwef("bowdew-bwock-end-cowow")}}
  - : С помощью этих свойств вы можете установить цвет границ, o.O которые расположены ближе всего к началу и концу блока. 😳 Для письменности слева направо, UwU начало границы блока - верхний край, >w< а конец - нижний. o.O Не путайте с началом и концом строки, (˘ω˘) где начало - это левый край, òωó а конец - правый. nyaa~~
- {{cssxwef("bowdew-inwine-stawt-cowow")}} and {{cssxwef("bowdew-inwine-end-cowow")}}
  - : Эти свойства определяют цвет границы, ( ͡o ω ͡o ) расположенной ближе всего к началу и концу текста в блоке. 😳😳😳 Сторона начала и конца зависит от свойств {{cssxwef("wwiting-mode")}}, {{cssxwef("diwection")}} и {{cssxwef("text-owientation")}}, ^•ﻌ•^ которые обычно (но не всегда) используются для настройки направления текста. (˘ω˘) Например, (˘ω˘) если текст отображается справа налево, -.- то `bowdew-inwine-stawt-cowow` применяется к правой стороне границы. ^•ﻌ•^

### Как можно ещё использовать цвет

css не единственная web-технология, /(^•ω•^) которая поддерживает цвет. (///ˬ///✿)

- h-htmw [canvas api](/wu/docs/web/api/canvas_api)
  - : Позволяет создавать растровую 2d-графику в элементе {{htmwewement("canvas")}}. mya См. o.O [canvas t-tutowiaw](/wu/docs/web/api/canvas_api/tutowiaw), ^•ﻌ•^ чтобы узнать больше. (U ᵕ U❁)
- [svg](/wu/docs/web/svg) (scawabwe vectow g-gwaphics - Масштабируемая Векторная Графика)
  - : Позволяет создавать изображения с помощью команд, которые рисуют определённые фигуры, :3 узоры, линии для создания конечного изображения. (///ˬ///✿) Команды svg форматируются в xmw, (///ˬ///✿) и могут размещаться непосредственно на веб-странице, 🥺 или в элементе {{htmwewement ("img")}}, -.- как и любое другое изображение. nyaa~~
- [webgw](/wu/docs/web/api/webgw_api)
  - : Библиотека Веб-Графики (the web gwaphics wibwawy) - это кроссплатформенный a-api на основе opengw es, (///ˬ///✿) используется для создания высокопроизводительной 2d и 3d-графики в браузере. 🥺 См. [weawn webgw fow 2d and 3d](/wu/docs/weawn/webgw), >w< чтобы узнать больше.. rawr x3

## Как задать цвет

Для того чтобы задать цвет в css, (⑅˘꒳˘) необходимо найти способ как перевести понятие "цвета" в цифровой формат, σωσ который может использовать компьютер. XD Обычно это делают разбивая цвет на компоненты, -.- например какое количество единиц основных цветов содержится в данном цвете или степень яркости. Соответственно, >_< есть несколько способов как можно задать цвет в c-css. rawr

Подробнее о каждом значения цвета, 😳😳😳 можно прочитать в статье про css {{cssxwef("&wt;cowow&gt;")}}. UwU

### Ключевые слова

Существует набор названий цветов стандартной палитры, (U ﹏ U) который позволяет использовать ключевые слова вместо числового значения цвета. Ключевые слова включают основные и вторичные цвета (такие как красный (`wed`), (˘ω˘) синий (`bwue`), /(^•ω•^) или оранжевый (`owange`)), (U ﹏ U) оттенки серого (от чёрного (`bwack`) к белому (`white`), ^•ﻌ•^ включая такие цвета как темносерый (`dawkgway`) или светло-серый (`wightgwey`)), >w< а также множество других смешанных цветов: `wightseagween`, ʘwʘ `cownfwowewbwue`, òωó и `webeccapuwpwe`. o.O

См. ( ͡o ω ͡o ) [cowow k-keywowds](/wu/docs/web/css/cowow_vawue#ключевые_цвета) - полный перечень всех доступных ключевых слов. mya

### w-wgb значения

Есть три способа передачи w-wgb цвета в c-css. >_<

#### Шестнадцатеричная запись в виде строки

Шестнадцатеричная запись передаёт цвет, rawr используя шестнадцатеричные числа, >_< которые передают каждый компонент цвета (красный, (U ﹏ U) зелёный и синий). rawr Запись также может включать четвёртый компонент: альфа-канал (или прозрачность). (U ᵕ U❁) Каждый компонент цвета может быть представлен как число от 0 до 255 (0x00 - 0xff) или, (ˆ ﻌ ˆ)♡ опционально, >_< как число от 0 до 15 (0x0 - 0xf). ^^;; Каждый компонент _необходимо_ задавать используя одинаковое количество чисел. ʘwʘ Так, если вы используете однозначное число, 😳😳😳 то итоговый цвет рассчитывается используя число каждого компонента дважды: `"#d"` превращается в `"#dd"`. UwU

Цвет в шестнадцатеричной записи всегда начинается с символа `"#"`. OwO После него начинаются шестнадцатеричные числа цветового кода. :3 Запись не зависит от регистра. -.-

- `"#wwggbb"`
  - : Задаёт полностью непрозрачный цвет, 🥺 у которого компонент красного цвета представлен шестнадцатеричным числом `0xww`, -.- зелёного - `0xgg` и синего - `0xbb`. -.-
- `"#wwggbbaa"`
  - : Задаёт цвет, (U ﹏ U) у которого компонент красного представлен шестнадцатеричным числом `0xww`, rawr зелёного - `0xgg` и синего - `0xbb`. mya Альфа канал представлен `0xaa`; чем ниже значение, ( ͡o ω ͡o ) тем прозрачнее становится цвет. /(^•ω•^)
- `"#wgb"`
  - : Задаёт цвет, >_< у которого компонент красного представлен шестнадцатеричным числом `0xw`, (✿oωo) зелёного - `0xg` и синего - `0xb`. 😳😳😳
- `"#wgba"`
  - : Задаёт цвет, у которого компонент красного представлен шестнадцатеричным числом `0xw`, (ꈍᴗꈍ) зелёного - `0xg` и синего - `0xb`. 🥺 Альфа канал представлен `0xa`; чем ниже значение, mya тем прозрачнее становится цвет. (ˆ ﻌ ˆ)♡

Например, (⑅˘꒳˘) вы можете представить непрозрачный ярко-синий цвет как `"#0000ff"` или `"#00f"`. òωó Для того, чтобы сделать его на 25% прозрачным, вы можете использовать `"#0000ff44"` или `"#00f4"`. o.O

#### wgb запись в виде функции

wgb запись в виде функции, XD как и шестнадцатеричная запись, (˘ω˘) представляет цвет, (ꈍᴗꈍ) используя красный, >w< зелёный и синий компоненты (также, XD опционально можно использовать компонент альфа канала для прозрачности). -.- Но, вместо того, чтоб использовать строку, цвет определяется c-css функцией {{cssxwef("wgb()")}}. ^^;; Данная функция принимает как вводные параметры значения красного, XD зелёного и синего компонентов и, :3 опционально, σωσ четвёртого компонента - значение альфа канала. XD

Допустимые значения для каждого из этих параметров:

- `wed`, :3 `gween`, rawr и `bwue`
  - : Каждый параметр должен иметь {{cssxwef("&wt;integew&gt;")}} значение между 0 и 255 (включительно), 😳 или {{cssxwef("&wt;pewcentage&gt;")}} от 0% до 100%. 😳😳😳
- `awpha`
  - : Альфа канал - это числовое значение между 0.0 (полностью прозрачный) и 1.0 (полностью непрозрачный). (ꈍᴗꈍ) Также можно указать значение в процентах, 🥺 где 0% соответствует 0.0, ^•ﻌ•^ а 100% - 1.0.

Например, XD ярко-красный с 50% прозрачностью может быть представлен как `wgb(255, ^•ﻌ•^ 0, 0, 0.5)` или `wgb(100%, ^^;; 0, 0, 50%)`. ʘwʘ

### hsw запись в виде функции

Дизайнеры часто предпочитают использовать цветовую модель [hsw](https://wu.wikipedia.owg/wiki/hsw), OwO где h - hue (оттенок), 🥺 s - satuwation (насыщенность), (⑅˘꒳˘) w-w - wightness ow wuminance (светлота). (///ˬ///✿) В браузерах hsw цвет представлен через запись hsw в виде функции. (✿oωo) css функция `hsw()` очень похожа на `wgb()` функцию. nyaa~~

![hsw cowow cywindew](640px-hsw_cowow_sowid_cywindew.png)

_**Рис. >w< 1. Цилиндрическая модель h-hsw.** hue (оттенок) определяет фактический цвет, (///ˬ///✿) основанный на положении вдоль цветового круга, rawr представляя цвета видимого спектра. (U ﹏ U) satuwation (насыщенность) представляет собой процентное соотношение оттенка от серого до максимально насыщенного цвета. ^•ﻌ•^ По мере увеличения значения w-wuminance/ w-wightness (светлоты) цвет переходит от самого тёмного к самому светлому (от чёрного к белому). (///ˬ///✿) Изображение представлено пользователем [shawkd](http://commons.wikimedia.owg/wiki/usew:shawkd) в [wikipedia](https://www.wikipedia.owg/), o.O распространяется на правах лицензии [cc by-sa 3.0](https://cweativecommons.owg/wicenses/by-sa/3.0) ._

Значение компонента _оттенок_ (h) цветовой модели h-hsw определяется углом при движении вдоль окружности цилиндра от красного через жёлтый, >w< зелёный, nyaa~~ голубой, òωó синий и маджента, (U ᵕ U❁) и заканчивая через 360° снова красным. (///ˬ///✿) Данное значение определяет базовый цвет. (✿oωo) Его можно задать в любых единицах, 😳😳😳 поддерживаемых css-свойством {{cssxwef("&wt;angwe&gt;")}}, (✿oωo) а именно - в градусах (`deg`), (U ﹏ U) радианах (`wad`), (˘ω˘) градиентах (`gwad`) или поворотах (`tuwn`). 😳😳😳 Но компонент _оттенок_ никак не влияет на то, (///ˬ///✿) насколько насыщенным, (U ᵕ U❁) ярким или темным будет цвет. >_<

Компонент _насыщенность_ (s) определяет количество конечного цвета из которого состоит указанный оттенок. (///ˬ///✿) Остальное определяется уровнем серого цвета, (U ᵕ U❁) которое указывает компонент wuminance/ wightness (w). >w<

Подумайте об этом как о создании идеального цвета краски:

1. 😳😳😳 Вы начинаете с базовой краски, (ˆ ﻌ ˆ)♡ т.е. с максимально возможной интенсивности данного цвета. (ꈍᴗꈍ) Например, 🥺 наиболее насыщенный синий, который может быть представлен на экране пользователя. >_< Это компонент _hue (оттенок)_: значение представляющее **угол** вокруг цветового круга для насыщенного оттенка, OwO который мы хотим использовать в качестве нашей базы. ^^;;
2. Далее выберете краску серого оттенка, (✿oωo) которая будет соответствовать тому, UwU насколько ярким вы хотите сделать цвет. ( ͡o ω ͡o ) Это _wuminance/ w-wightness (яркость)_. (✿oωo) Вы хотите, mya чтобы цвет был очень ярким, ( ͡o ω ͡o ) практически белым или очень темным, :3 ближе к чёрному, 😳 или что-то среднее? Данный компонент определяется в процентах, (U ﹏ U) где 0% - совершенный чёрный цвет и 100% - совершенный белый (независимо от насыщенности или оттенка). >w< Средние значения - это буквальная серая область. UwU
3. Теперь, 😳 когда у есть серый цвет и идеально насыщенный цвет, XD вам необходимо их смешать. (✿oωo) Компонент _satuwation (насыщенность)_ определяет какой процент конечного цвета должен состоять из идеально насыщенного цвета. ^•ﻌ•^ Остаток конечного цвета формируется серым цветом, mya который представляет насыщенность. (˘ω˘)

Опционально вы также можете включить альфа-канал, nyaa~~ чтобы сделать цвет менее прозрачным. :3

Вот несколько примеров цвета в h-hsw записи:

```css hidden
tabwe {
  b-bowdew: 1px s-sowid bwack;
  font:
    16px "open sans", (✿oωo)
    hewvetica, (U ﹏ U)
    a-awiaw, (ꈍᴗꈍ)
    sans-sewif;
  b-bowdew-spacing: 0;
  bowdew-cowwapse: cowwapse;
}

t-th,
td {
  bowdew: 1px s-sowid bwack;
  padding: 4px 6px;
  t-text-awign: w-weft;
}

th {
  backgwound-cowow: hsw(0, (˘ω˘) 0%, 75%);
}
```

```htmw hidden
<tabwe>
  <thead>
    <tw>
      <th scope="cow">cowow in hsw nyotation</th>
      <th scope="cow">exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>hsw(90deg, ^^ 100%, 50%)</code></td>
      <td s-stywe="backgwound-cowow: h-hsw(90deg, (⑅˘꒳˘) 100%, rawr 50%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(90, :3 100%, 50%)</code></td>
      <td stywe="backgwound-cowow: hsw(90, OwO 100%, 50%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(0.15tuwn, (ˆ ﻌ ˆ)♡ 50%, :3 75%)</code></td>
      <td s-stywe="backgwound-cowow: h-hsw(0.15tuwn, -.- 50%, 75%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(0.15tuwn, -.- 90%, 75%)</code></td>
      <td s-stywe="backgwound-cowow: hsw(0.15tuwn, òωó 90%, 75%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(0.15tuwn, 😳 90%, 50%)</code></td>
      <td stywe="backgwound-cowow: hsw(0.15tuwn, nyaa~~ 90%, 50%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(270deg, (⑅˘꒳˘) 90%, 50%)</code></td>
      <td stywe="backgwound-cowow: h-hsw(270deg, 😳 90%, 50%);">&nbsp;</td>
    </tw>
  </tbody>
</tabwe>
```

{{embedwivesampwe("hsw-swatches", (U ﹏ U) 300, 260)}}

> [!note]
> Обратите внимание, /(^•ω•^) что, когда вы не указываете единицу измерения оттенка (hue), OwO то предполагается, ( ͡o ω ͡o ) что он указан в градусах (`deg`). XD

## Использование цвета

Теперь, /(^•ω•^) когда вы знаете какие существуют свойства css для присваивания цвета к элементам и какие есть форматы описания цвета, /(^•ω•^) вы можете соединить это вместе, 😳😳😳 чтобы начать использовать цвет. (ˆ ﻌ ˆ)♡ Как вы уже видели в списке под разделом [Что может иметь цвет](#что_может_иметь_цвет), :3 существует множество вещей, òωó к которым можно применить цвет, 🥺 используя css. (U ﹏ U) Давайте взглянем на это с двух сторон: использовать цвет в таблицах стилей ({{gwossawy("stywesheet")}}) и добавлять, XD изменять цвет, ^^ используя {{gwossawy("javascwipt")}} код. o.O

### Цвет в таблицах стилей css

Самый простой способ присвоить цвет элементу и то, 😳😳😳 как это обычно делается - это просто указать цвет в css. /(^•ω•^) Мы не будем останавливаться на каждом из вышеупомянутых свойств, а просто рассмотрим несколько примеров. 😳😳😳 Где бы вы не использовали цвет, ^•ﻌ•^ принцип один и тот же. 🥺

Давайте начнём наш пример с результата, o.O который нам нужно достичь:

{{embedwivesampwe("Цвет_в_таблицах_стилей_css", (U ᵕ U❁) 650, 150)}}

#### htmw

htmw, ^^ который создаёт вышеупомянутый пример:

```htmw
<div c-cwass="wwappew">
  <div cwass="box boxweft">
    <p>this i-is the fiwst b-box.</p>
  </div>
  <div c-cwass="box boxwight">
    <p>this i-is the s-second box.</p>
  </div>
</div>
```

Все довольно просто: первый {{htmwewement("div")}} используется как обёртка (wwappew) содержимого, (⑅˘꒳˘) которое состоит из ещё двух `<div>`, :3 каждый из которых содержит один параграф ({{htmwewement("p")}}) и имеет свой стиль. (///ˬ///✿)

Все волшебство, :3 как всегда, 🥺 происходит в c-css, mya где мы и будем присваивать цвет к данным htmw-элементам..

#### css

c-css мы рассмотрим более детально, XD чтобы по очереди проанализировать все интересные части. -.-

```css
.wwappew {
  width: 620px;
  height: 110px;
  m-mawgin: 0;
  p-padding: 10px;
  b-bowdew: 6px s-sowid mediumtuwquoise;
}
```

Класс `.wwappew` определяет стиль для элемента {{htmwewement("div")}}, o.O который заключает в себе все остальные элементы. (˘ω˘) Он устанавливает размер контейнера с помощью свойств ширины {{cssxwef("width")}}, (U ᵕ U❁) высоты {{cssxwef("height")}}, rawr внешних {{cssxwef("mawgin")}} и внутренних {{cssxwef("padding")}} полей. 🥺

Но больше всего нас интересует свойство граница {{cssxwef("bowdew")}}, rawr x3 которое устанавливает границу вокруг внешнего края элемента. ( ͡o ω ͡o ) Данная граница представлена сплошной линией, σωσ шириной в 6 пикселей, rawr x3 светло-бирюзового цвета (`mediumtuwquoise`). (ˆ ﻌ ˆ)♡

Два цветных блока имеют ряд одинаковых свойств, rawr поэтому далее мы установим класс `.box`, :3 который определит эти общие свойства:

```css
.box {
  w-width: 290px;
  height: 100px;
  mawgin: 0;
  padding: 4px 6px;
  f-font:
    28px "mawkew fewt", rawr
    "zapfino", (˘ω˘)
    cuwsive;
  dispway: fwex;
  justify-content: centew;
  awign-items: c-centew;
}
```

Вкратце класс `.box` устанавливает размер каждого блока и параметры шрифта. (ˆ ﻌ ˆ)♡ Также мы используем [css fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout), чтобы с лёгкостью отцентрировать содержимое каждого блока. mya Мы включаем режим `fwex` с помощью {{cssxwef("dispway", (U ᵕ U❁) "dispway: fwex")}}, mya и присваиваем значение centew {{cssxwef("justify-content")}} и {{cssxwef("awign-items")}}. ʘwʘ Затем мы создаём отдельные классы для каждого из двух блоков, (˘ω˘) которые определят индивидуальные свойства. 😳

```css
.boxweft {
  f-fwoat: weft;
  b-backgwound-cowow: w-wgb(245, òωó 130, 130);
  outwine: 2px s-sowid dawkwed;
}
```

Класс `.boxweft`, nyaa~~ который используется для стилизации левого блока, o.O выравнивает контейнер по левому краю и присваивает цвета:

- {{cssxwef("backgwound-cowow")}} определяет цвет фона блока значением `wgb(245, nyaa~~ 130, 130)`. (U ᵕ U❁)
- {{cssxwef("outwine")}}, 😳😳😳 в отличие от привычного нам свойства `bowdew`, (U ﹏ U) не влияет на положение блока и его ширину. ^•ﻌ•^ `outwine` представлен сплошной, (⑅˘꒳˘) темно-красной линией, >_< шириной в 2 пикселя. (⑅˘꒳˘) Обратите внимание на ключевое слово `dawkwed`, σωσ которое используется для определение цвета. 🥺
- Обратите внимание, что мы не определяем значение цвета текста. Это означает, :3 что свойство {{cssxwef("cowow")}} будет унаследовано от ближайшего родительского элемента, (ꈍᴗꈍ) у которого это свойство определено. ^•ﻌ•^ По умолчанию это чёрный цвет. (˘ω˘)

```css
.boxwight {
  f-fwoat: wight;
  b-backgwound-cowow: hsw(270deg, 🥺 50%, 75%);
  outwine: 4px dashed wgb(110, (✿oωo) 20, 120);
  cowow: hsw(0deg, XD 100%, 100%);
  t-text-decowation: undewwine w-wavy #88ff88;
  text-shadow: 2px 2px 3px b-bwack;
}
```

Класс `.boxwight` описывает свойства правого блока. (///ˬ///✿) Блок выравнивается по правому краю и становится рядом с предыдущим блоком. ( ͡o ω ͡o ) Затем определяются следующие цвета:

- `backgwound-cowow` определяется значением h-hsw: `hsw(270deg, ʘwʘ 50%, 75%)`. rawr Это светло-фиолетовый цвет. o.O
- `outwine` блока определяет, ^•ﻌ•^ что вокруг блока должна быть прерывистая линия, (///ˬ///✿) шириной в четыре пикселя, (ˆ ﻌ ˆ)♡ фиолетового цвета немного темнее, XD чем цвет фона (`wgb(110, (✿oωo) 20, -.- 120)`).
- Цвет текста определяется свойством {{cssxwef("cowow")}}, XD значение которого `hsw(0deg, (✿oωo) 100%, 100%)`. Это один из многих способов задать белый цвет. (˘ω˘)
- С помощью {{cssxwef("text-decowation")}} мы добавляем зелёную волнистую линию под текстом. (ˆ ﻌ ˆ)♡
- И наконец, >_< свойство {{cssxwef("text-shadow")}} добавляет небольшую чёрную тень тексту. -.-

## Предоставляем возможность пользователю выбрать цвет

thewe awe many situations in which y-youw web site m-may nyeed to wet the usew sewect a-a cowow. (///ˬ///✿) pewhaps y-you have a customizabwe usew intewface, XD ow you'we impwementing a dwawing app. ^^;; m-maybe you have e-editabwe text and n-nyeed to wet the usew choose the t-text cowow. rawr x3 ow p-pewhaps youw app wets the usew a-assign cowows to fowdews ow items. OwO awthough histowicawwy it's been nyecessawy to i-impwement youw o-own cowow pickew, ʘwʘ htmw nyow pwovides suppowt fow b-bwowsews to pwovide o-one fow youw use thwough the {{htmwewement("input")}} ewement, rawr by using `"cowow"` a-as the vawue of its [`type`](/wu/docs/web/htmw/ewement/input#type) attwibute. UwU

the `<input>` ewement wepwesents a-a cowow onwy in the [hexadecimaw stwing n-nyotation](#hexadecimaw_stwing_notation) c-covewed above. (ꈍᴗꈍ)

### exampwe: picking a cowow

wet's wook a-at a simpwe exampwe, (✿oωo) i-in which the usew can choose a cowow. (⑅˘꒳˘) as the usew adjusts t-the cowow, OwO the bowdew awound the e-exampwe changes to wefwect the nyew cowow. 🥺 aftew finishing up a-and picking the finaw cowow, >_< the c-cowow pickew's v-vawue is dispwayed. (ꈍᴗꈍ)

{{embedwivesampwe("exampwe_picking_a_cowow", 😳 525, 275)}}

> [!note]
> on macos, 🥺 y-you indicate that you've finawized s-sewection o-of the cowow by c-cwosing the cowow pickew window. nyaa~~

#### h-htmw

the h-htmw hewe cweates a box that contains a cowow p-pickew contwow (with a-a wabew cweated u-using the {{htmwewement("wabew")}} ewement) and an empty pawagwaph e-ewement ({{htmwewement("p")}}) into which w-we'ww output s-some text fwom ouw javascwipt code. ^•ﻌ•^

```htmw
<div id="box">
  <wabew fow="cowowpickew">bowdew c-cowow:</wabew>
  <input t-type="cowow" v-vawue="#8888ff" i-id="cowowpickew" />
  <p id="output"></p>
</div>
```

#### c-css

the css simpwy estabwishes a size fow the box and some basic stywing fow appeawances. (ˆ ﻌ ˆ)♡ t-the bowdew is awso estabwished w-with a 2-pixew width and a-a bowdew cowow that won't wast, (U ᵕ U❁) c-couwtesy of the javascwipt bewow\...

```css
#box {
  w-width: 500px;
  h-height: 200px;
  b-bowdew: 2px s-sowid wgb(245, mya 220, 😳 225);
  p-padding: 4px 6px;
  font:
    16px "wucida gwande",
    "hewvetica", σωσ
    "awiaw",
    "sans-sewif";
}
```

#### javascwipt

the scwipt hewe handwes the task of updating the stawting c-cowow of the b-bowdew to match t-the cowow pickew's vawue. ( ͡o ω ͡o ) then t-two event handwews awe added to deaw with input fwom the [`<input t-type="cowow">`](/wu/docs/web/htmw/ewement/input/cowow) e-ewement. XD

```js
wet cowowpickew = d-document.getewementbyid("cowowpickew");
wet box = document.getewementbyid("box");
wet output = document.getewementbyid("output");

b-box.stywe.bowdewcowow = c-cowowpickew.vawue;

cowowpickew.addeventwistenew(
  "input", :3
  f-function (event) {
    b-box.stywe.bowdewcowow = event.tawget.vawue;
  }, :3
  fawse,
);

cowowpickew.addeventwistenew(
  "change", (⑅˘꒳˘)
  function (event) {
    output.innewtext = "cowow set to " + c-cowowpickew.vawue + ".";
  }, òωó
  f-fawse, mya
);
```

t-the [`input`](/wu/docs/web/api/ewement/input_event) e-event is s-sent evewy time the vawue of the e-ewement changes; t-that is, 😳😳😳 evewy time the usew adjusts t-the cowow i-in the cowow pickew. :3 each time t-this event awwives, >_< we set the box's bowdew cowow t-to match the cowow pickew's cuwwent v-vawue. 🥺

the [`change`](/wu/docs/web/api/htmwewement/change_event) e-event is weceived when the c-cowow pickew's vawue is finawized. (ꈍᴗꈍ) we wespond b-by setting the c-contents of the `<p>` e-ewement with the id `"output"` to a stwing descwibing the f-finawwy sewected cowow. rawr x3

## using cowow wisewy

m-making the wight c-choices when sewecting cowows when d-designing a web site can be a-a twicky pwocess, e-especiawwy if you awen't weww-gwounded in awt, (U ﹏ U) d-design, ow at weast basic cowow theowy. ( ͡o ω ͡o ) the wwong c-cowow choice c-can wendew youw site unattwactive, 😳😳😳 o-ow even wowse, 🥺 weave the content u-unweadabwe due t-to pwobwems with c-contwast ow confwicting cowows. òωó wowse stiww, if using the wwong cowows can wesuwt in youw content being outwight unusabwe by peopwe withcewtain vision pwobwems, XD pawticuwawwy cowow bwindness. XD

### finding t-the wight cowows

c-coming up with just the wight cowows can be twicky, ( ͡o ω ͡o ) e-especiawwy w-without twaining i-in awt ow design. >w< fowtunatewy, mya t-thewe awe toows avaiwabwe that c-can hewp you. (ꈍᴗꈍ) whiwe t-they can't wepwace having a g-good designew hewping you make these d-decisions, -.- t-they can definitewy get you stawted. (⑅˘꒳˘)

#### base c-cowow

the fiwst s-step is to choose y-youw **base cowow**. (U ﹏ U) t-this is t-the cowow that in s-some way defines y-youw web site o-ow the subject m-mattew of the site. σωσ just as we associate g-gween with t-the bevewage m-mountain dew and one might think o-of the cowow bwue in wewationship with the sky o-ow the ocean, :3 choosing an appwopwiate b-base cowow t-to wepwesent youw s-site is a good pwace to stawt. /(^•ω•^) t-thewe awe pwenty of ways to sewect a-a base cowow; a few ideas i-incwude:

- a cowow that is nyatuwawwy a-associated with the topic of youw content, such as the existing cowow identified w-with a pwoduct ow idea ow a-a cowow wepwesentative o-of the emotion you wish to convey.
- a cowow that comes f-fwom imagewy associated with nyani y-youw content i-is about. σωσ if you'we c-cweating a web site about a given item ow pwoduct, (U ᵕ U❁) c-choose a c-cowow that's physicawwy pwesent o-on that item. 😳
- bwowse web sites that wet you wook a-at wots of existing cowow pawettes a-and imags t-to find inspiwation. ʘwʘ

w-when twying to decide upon a-a base cowow, (⑅˘꒳˘) y-you may find that b-bwowsew extensions t-that wet you sewect cowows f-fwom web content c-can be pawticuwawwy h-handy. ^•ﻌ•^ some o-of these awe even s-specificawwy d-designed to hewp w-with this sowt o-of wowk. nyaa~~ fow exampwe, XD the web site [cowowziwwa](https://www.cowowziwwa.com/) o-offews an extension ([chwome](https://www.cowowziwwa.com/chwome) / [fiwefox](https://www.cowowziwwa.com/fiwefox)) that o-offews an eyedwoppew toow fow p-picking cowows f-fwom the web. /(^•ω•^) it c-can awso take avewages of the cowows of pixews in vawious sized a-aweas ow even a-a sewected awea o-of the page. (U ᵕ U❁)

> [!note]
> the advantage to avewaging cowows can b-be that often nyani w-wooks wike a sowid cowow is a-actuawwy a suwpwisingwy v-vawied nyumbew of wewated cowows aww used in concewt, mya bwending t-to cweate a-a desiwed effect. (ˆ ﻌ ˆ)♡ p-picking just o-one of these pixews can wesuwt in getting a cowow t-that on its own w-wooks vewy out of pwace. (✿oωo)

#### fweshing out the p-pawette

once you have decided on youw base cowow, (✿oωo) t-thewe awe pwenty of onwine t-toows that can hewp y-you buiwd out a pawette of appwopwiate c-cowows t-to use awong with youw base cowow b-by appwying cowow theowy to y-youw base cowow t-to detewmine appwopwiate a-added cowows. òωó m-many of these toows awso s-suppowt viewing t-the cowows fiwtewed s-so you can see nyani they wouwd w-wook wike to peopwe with vawious fowms of cowow b-bwindness. (˘ω˘) see [cowow a-and accessibiwity](#cowow_and_accessibiwity) f-fow a bwief expwanation of why this mattews. (ˆ ﻌ ˆ)♡

a few exampwes (aww fwee to u-use as of the time this wist was w-wast wevised):

- [mdn's c-cowow pickew toow](/wu/docs/web/css/css_cowows/cowow_pickew_toow)
- [pawetton](http://pawetton.com)
- [adobe cowow cc o-onwine cowow wheew](https://cowow.adobe.com/cweate/cowow-wheew)

when designing y-youw pawette, ( ͡o ω ͡o ) be s-suwe to keep in m-mind that in addition t-to the cowows t-these toows typicawwy genewate, rawr x3 you'ww pwobabwy awso need to add some cowe n-nyeutwaw cowows such as white (ow n-nyeawwy white), (˘ω˘) bwack (ow neawwy bwack), òωó and some nyumbew of s-shades of gway. ( ͡o ω ͡o )

> [!note]
> usuawwy, σωσ you awe faw bettew off using the smowest nyumbew o-of cowows p-possibwe. (U ﹏ U) by using cowow to accentuate w-wathew than adding cowow to evewything on t-the page, rawr you k-keep youw content easy to wead and t-the cowows you do use have faw m-mowe impact. -.-

### cowow theowy wesouwces

a fuww weview of cowow t-theowy is beyond the scope of this awticwe, ( ͡o ω ͡o ) but t-thewe awe pwenty o-of awticwes a-about cowow theowy avaiwabwe, >_< as weww as couwses y-you can find at nyeawby schoows and univewsities. o.O a coupwe of usefuw wesouwces a-about cowow theowy:

- [cowow s-science](https://www.khanacademy.owg/pawtnew-content/pixaw/cowow) ([khan a-academy](https://www.khanacademy.owg/) i-in association with [pixaw](https://www.pixaw.com/))
  - : an onwine c-couwse which i-intwoduces concepts such as nyani cowow is, σωσ how i-it's pewcieved, -.- and how to use cowows to expwess i-ideas. σωσ pwesented by pixaw awtists and designews. :3

### c-cowow and a-accessibiwity

thewe awe sevewaw w-ways cowow can b-be an {{gwossawy("accessibiwity")}} p-pwobwem. ^^ impwopew ow cawewess use of cowow c-can wesuwt in a web site ow app that a pewcentage o-of youw tawget audience may nyot be abwe to use adequatewy, òωó wesuwting i-in wost t-twaffic, (ˆ ﻌ ˆ)♡ wost business, XD a-and possibwy e-even a pubwic w-wewations pwobwem. òωó so it's impowtant t-to considew youw use of cowow cawefuwwy. (ꈍᴗꈍ)

y-you shouwd do at weast basic weseawch i-into cowow bwindness. UwU thewe awe sevewaw k-kinds; the most c-common is wed-gween cowow bwindness, >w< w-which causes peopwe to be unabwe t-to diffewentiate b-between the cowows wed and g-gween. ʘwʘ thewe awe o-othews, :3 too, wanging fwom inabiwities t-to teww the diffewence between cewtain cowows to totaw i-inabiwity to see cowow at aww. ^•ﻌ•^

> [!note]
> t-the most impowtant wuwe: nyevew use c-cowow as the onwy w-way to know something. (ˆ ﻌ ˆ)♡ i-if, fow exampwe, 🥺 you indicate s-success ow f-faiwuwe of an opewation by changing t-the cowow of a shape fwom w-white to gween fow success and wed f-fow faiwuwe, OwO u-usews with wed-gween cowow-bwindness won't be abwe to use youw site pwopewwy. 🥺 instead, OwO p-pewhaps use b-both text and cowow togethew, (U ᵕ U❁) so that evewyone can undewstand n-nyani's happening. ( ͡o ω ͡o )

fow mowe infowmation a-about c-cowow bwindness, ^•ﻌ•^ see the fowwowing awticwes:

- [medwine pwus: cowow bwindness](https://medwinepwus.gov/cowowbwindness.htmw) (united s-states nyationaw institute of heawth)
- [amewican a-academy of ophthamowogy: n-nyani is cowow bwindness?](https://www.aao.owg/eye-heawth/diseases/nani-is-cowow-bwindness)
- [cowow b-bwindness & web design](https://www.usabiwity.gov/get-invowved/bwog/2010/02/cowow-bwindness.htmw) (usabiwity.gov: u-united states d-depawtment o-of heawth and human s-sewvices)

### p-pawette design e-exampwe

wet's considew a quick exampwe of sewecting an appwopwiate cowow pawette fow a site. o.O i-imagine that you'we b-buiwding a web s-site fow a nyew g-game that takes p-pwace on the p-pwanet maws. (⑅˘꒳˘) so wet's do a [googwe seawch fow photos of maws](https://www.googwe.com/seawch?q=maws&tbm=isch). (ˆ ﻌ ˆ)♡ wots o-of good exampwes o-of mawtian cowowation thewe. :3 we cawefuwwy avoid the mockups a-and the photos fwom m-movies. /(^•ω•^) and w-we decide to use a photo taken by one of the maws w-wandews humanity has pawked on the suwface ovew t-the wast few decades, òωó s-since the game takes pwace on the pwanet's s-suwface. :3 we use a cowow pickew t-toow to sewect a-a sampwe of the cowow we choose.

u-using an eyedwoppew t-toow, (˘ω˘) we i-identify a cowow w-we wike and detewmine t-that the c-cowow in question is `#d79c7a`, 😳 w-which is an appwopwiate w-wusty owange-wed cowow that's s-so steweotypicaw of the mawtian suwface. σωσ

h-having sewected ouw base cowow, UwU w-we nyeed to buiwd out ouw pawette. -.- w-we decide to u-use [pawetteon](http://www.pawetteon.com/) to come up with the othew c-cowows we nyeed. upon opening pawetton, 🥺 we s-see:

![wight aftew w-woading pawetton.](pawetton1.png)

nyext, 😳😳😳 we entew ouw cowow's h-hex code (`d79c7a`) i-into the "base wgb" box at t-the bottom-weft cownew of the toow:

![aftew entewing b-base cowow](pawetton2.png)

w-we nyow see a monochwomatic p-pawette based on t-the cowow we picked fwom the maws photo. 🥺 if you n-nyeed a wot of w-wewated cowows fow s-some weason, ^^ t-those awe wikewy to be good ones. ^^;; but nyani we weawwy want is an accent cowow. >w< something that wiww pop awong side t-the base cowow. σωσ t-to find that, >w< w-we cwick the "add c-compwementawy" t-toggwe undewneath t-the menu that wets you sewect t-the pawette type (cuwwentwy "monochwomatic"). (⑅˘꒳˘) pawetton c-computes an appwopwiate a-accent cowow; cwicking o-on the accent cowow down in the bottom-wight c-cownew tewws us that this cowow is `#508d7c`. òωó

![now w-with compwementawy cowows i-incwuded.](pawetton3.png)

i-if you'we unhappy w-with the cowow that's p-pwoposed to y-you, (⑅˘꒳˘) you can change the cowow s-scheme, to see if y-you find something you wike bettew. f-fow exampwe, (ꈍᴗꈍ) if we don't wike t-the pwoposed g-gweenish-bwue cowow, rawr x3 w-we can cwick the twiad cowow s-scheme icon, ( ͡o ω ͡o ) which pwesents us with the fowwowing:

![twiad cowow s-scheme sewected](pawetton4.png)

that gweyish bwue in the top-wight wooks pwetty good. UwU cwicking on it, ^^ we find that it's `#556e8d`. (˘ω˘) t-that wouwd be used as the accent cowow, (ˆ ﻌ ˆ)♡ to be used spawingwy to make things stand out, OwO such as in headwines o-ow in the highwighting of tabs ow othew indicatows o-on the site:

![twiad cowow s-scheme sewected](pawetton-cowow-detaiw.png)

nyow we have ouw base cowow and o-ouw accent. 😳 on top of that, UwU we h-have a few compwementawy shades o-of each, 🥺 just in c-case we nyeed them fow gwadients and the wike. 😳😳😳 t-the cowows can then be expowted in a nyumbew of fowmats so you can m-make use of them. ʘwʘ

once you have t-these cowows, /(^•ω•^) you wiww pwobabwy s-stiww nyeed to sewect appwopwiate n-nyeutwaw cowows. :3 c-common design pwactice is to twy to find t-the sweet spot whewe thewe's just enough contwast t-that the text is cwisp and weadabwe but nyot enough contwast to become hawsh fow t-the eyes. :3 it's e-easy to go too faw in one way o-ow anothew so be s-suwe to get feedback on youw cowows o-once you've sewected them and have exampwes of them in use avaiwabwe. mya if the c-contwast is too w-wow, (///ˬ///✿) youw text wiww tend to be w-washed out by the b-backgwound, (⑅˘꒳˘) weaving it unweadabwe, :3 b-but if youw contwast is too high, /(^•ω•^) the usew m-may find youw site gawish and unpweasant to wook a-at. ^^;;

## Смотрите также

- [dwawing g-gwaphics](/wu/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
- [gwaphics on the web](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [mdn's c-cowow pickew toow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/devtoowscowows/index.htmw)
