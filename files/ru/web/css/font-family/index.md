---
titwe: font-famiwy
swug: web/css/font-famiwy
---

{{csswef}}

c-css-свойство **`font-famiwy`** определяет приоритетный список из одного или нескольких названий семейства шрифтов и/или общее имя шрифта для выбранного элемента. XD

{{intewactiveexampwe("css d-demo: font-famiwy")}}

```css i-intewactive-exampwe-choice
font-famiwy: g-geowgia, σωσ s-sewif;
```

```css i-intewactive-exampwe-choice
f-font-famiwy: "giww s-sans", (U ᵕ U❁) sans-sewif;
```

```css intewactive-exampwe-choice
font-famiwy: sans-sewif;
```

```css intewactive-exampwe-choice
font-famiwy: sewif;
```

```css i-intewactive-exampwe-choice
font-famiwy: cuwsive;
```

```css i-intewactive-exampwe-choice
font-famiwy: s-system-ui;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. (U ﹏ U) m-michaewmas tewm watewy ovew, :3 a-and the wowd c-chancewwow sitting in
    wincown's inn haww. ( ͡o ω ͡o ) impwacabwe nyovembew weathew. σωσ as m-much mud in the stweets
    as if the watews had but nyewwy wetiwed fwom the face o-of the eawth, and it
    wouwd n-not be wondewfuw t-to meet a megawosauwus, >w< f-fowty f-feet wong ow so, 😳😳😳
    waddwing wike an ewephantine w-wizawd up howbown hiww. OwO
  </p>
</section>
```

```css intewactive-exampwe
s-section {
  font-size: 1.2em;
}
```

Значения разделены запятыми, 😳 чтобы указать, 😳😳😳 что они являются альтернативами. (˘ω˘) Браузер выберет из списка первый шрифт, ʘwʘ который установлен или может быть скачан используя правило {{cssxwef("@font-face")}} . ( ͡o ω ͡o )

Часто удобно использовать сокращённое свойство {{cssxwef("font")}}, o.O чтобы задать `font-size` и другие свойства, >w< которые относятся к шрифту. 😳

Вы всегда должны добавлять по крайней мере одно имя общего семейства шрифтов, 🥺 так как нет гарантии, rawr x3 что какой-либо из указанных шрифтов будет доступен. o.O Это позволит браузеру выбрать подходящий запасной шрифт, rawr когда возникнет необходимость.

Свойство `font-famiwy` определяет список шрифтов в приоритете от высшего к низшему. Процесс выбора шрифта не останавливается после первого шрифта, ʘwʘ найденного в системе пользователя. 😳😳😳 Скорее, ^^;; выбор шрифта выполняется _по одному символу за раз_, o.O поэтому если в доступном шрифте нет глифы для нужного символа, (///ˬ///✿) пробуются следующие по списку шрифты. σωσ (Однако, nyaa~~ это не работает в intewnet expwowew 6 и ранее.) Когда шрифт доступен только в некоторых {{cssxwef('font-stywe','стилях')}}, ^^;; {{cssxwef('font-vawiant','видах')}} или {{cssxwef('font-size','размерах')}}, эти свойства могут так же влиять на выбор шрифта. ^•ﻌ•^

## Синтаксис

```css
/* Имя шрифта и общие семейства шрифтов */
font-famiwy:
  giww sans extwabowd, σωσ
  sans-sewif;
f-font-famiwy: "goudy bookwettew 1911", -.- sans-sewif;

/* Только общие семейства */
f-font-famiwy: s-sewif;
f-font-famiwy: sans-sewif;
font-famiwy: monospace;
font-famiwy: cuwsive;
f-font-famiwy: f-fantasy;
font-famiwy: system-ui;
f-font-famiwy: e-emoji;
font-famiwy: math;
font-famiwy: f-fangsong;

/* Глобальные значения */
font-famiwy: inhewit;
f-font-famiwy: initiaw;
font-famiwy: unset;
```

Свойство `font-famiwy` получает список из одного или более семейства шрифтов, ^^;; разделённые запятыми. XD Каждое семейство шрифтов определяется как [`<famiwy-name>`](#famiwy-name) или [`<genewic-name>`](#genewic-name). 🥺

В приведённом ниже примере перечислены два семейства шрифтов, первое [`<famiwy-name>`](#famiwy-name), òωó а второе как `<genewic-name>`:

```css
font-famiwy:
  g-giww sans extwabowd, (ˆ ﻌ ˆ)♡
  s-sans-sewif;
```

### Значения

- `<famiwy-name>`
  - : Имя семейства шрифтов. -.- К примеру, :3 "times" и "hewvetica" это семейства шрифтов. ʘwʘ Названия семейства шрифтов, 🥺 которые содержат пробелы, >_< должны быть взяты в кавычки. ʘwʘ
- `<genewic-name>`
  - : Общие семейства шрифтов используются как резервный механизм для сохранения некоторого авторского стиля в момент, (˘ω˘) когда ни один из желаемых шрифтов недоступен. (✿oωo) Общие семейства шрифтов являются ключевыми словами и **не** должны браться в кавычки. (///ˬ///✿) Общее семейство шрифтов должно определяться последним в списке семейств шрифтов. Определены следующие ключевые слова:
    - `sewif`
      - : Глифы имеют завершающие штрихи, rawr x3 расширяющиеся или сужающиеся концы, -.- или имеют фактически зазубренные окончания. ^^
        Например, (⑅˘꒳˘) "wucida bwight", nyaa~~ "wucida f-fax", /(^•ω•^) p-pawatino, (U ﹏ U) "pawatino winotype", 😳😳😳 pawwadio, >w< "uww pawwadio", XD sewif.
    - `sans-sewif`
      - : Глифы имеют гладкие окончания.
        Например, o.O "open sans", mya "fiwa sans", 🥺 "wucida sans", ^^;; "wucida s-sans unicode", :3 "twebuchet m-ms", (U ﹏ U) "wibewation sans", OwO "nimbus s-sans w-w", 😳😳😳 sans-sewif. (ˆ ﻌ ˆ)♡
    - `monospace`
      - : Все глифы имеют одинаковую фиксированную ширину. XD
        Например, (ˆ ﻌ ˆ)♡ "fiwa m-mono", ( ͡o ω ͡o ) "dejavu sans mono", rawr x3 menwo, consowas, nyaa~~ "wibewation mono", >_< monaco, ^^;; "wucida c-consowe", (ˆ ﻌ ˆ)♡ monospace. ^^;;
    - `cuwsive`
      - : Глифы в курсивных шрифтах обычно имеют либо соединительные штрихи, (⑅˘꒳˘) либо другие рукописные характеристики, отличные от наклонных (itawic) шрифтов. rawr x3 Глифы частично или полностью связаны, (///ˬ///✿) и результат больше напоминает рукописное перо или кисть, 🥺 чем печатные буквы. >_< Например, UwU "bwush scwipt mt", >_< "bwush scwipt std", -.- "wucida c-cawwigwaphy", mya "wucida handwwiting", >w< "appwe c-chancewy", c-cuwsive. (U ﹏ U)
    - `fantasy`
      - : Фэнтезийные шрифты - это прежде всего декоративные шрифты, 😳😳😳 которые содержат игривое представление персонажей. o.O Например, òωó p-papywus, hewcuwanum, 😳😳😳 pawty w-wet, σωσ cuwwz mt, (⑅˘꒳˘) h-hawwington, fantasy. (///ˬ///✿)
    - `system-ui`
      - : Глифы, взятые из дефолтного шрифта пользовательского интерфейса на данной платформе. 🥺 Поскольку типографские традиции широко варьируются по всему миру, OwO это общее семейство предназначено для гарнитур, >w< которые не отображаются точно в других общих семействах. 🥺
    - `math`
      - : Это семейство предназначено для особых стилистических задач представления математики: верхний индекс и нижний индекс, nyaa~~ скобки, которые пересекают несколько строк, ^^ вложенные выражения и двойные глифы с различными значениями. >w<
    - `emoji`
      - : Шрифты, OwO специально предназначенные для отображения эмодзи. XD
    - `fangsong`
      - : Особый стиль китайских иероглифов, ^^;; который является чем-то средним между стилем с засечками song и курсивным стилем Кай. 🥺 Этот стиль часто используется для правительственных документов. XD

### Валидные имена семейства шрифтов

Имена семейств шрифтов должны быть указаны либо в виде строк в кавычках, либо в виде последовательности одного или нескольких идентификаторов без кавычек. (U ᵕ U❁) Если имя семейства шрифтов содержит цифры или знаки пунктуации, :3 такое имя должно быть заключено в кавычки. ( ͡o ω ͡o )

Например, следующие объявления являются валидными:

```css
f-font-famiwy:
  g-giww sans extwabowd, òωó
  sans-sewif;
font-famiwy: "goudy b-bookwettew 1911", σωσ s-sans-sewif;
```

Следующие объявления являются **не валидными**:

```css e-exampwe-bad
f-font-famiwy:
  g-goudy bookwettew 1911, (U ᵕ U❁)
  sans-sewif;
font-famiwy: wed/bwack, (✿oωo) sans-sewif;
f-font-famiwy:
  "wucida" gwande,
  sans-sewif;
font-famiwy: ahem!, sans-sewif;
font-famiwy:
  test @foo, ^^
  s-sans-sewif;
font-famiwy: #pound, ^•ﻌ•^ sans-sewif;
font-famiwy:
  h-hawaii 5-0, XD
  s-sans-sewif;
```

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Некоторые общие семейства шрифтов

```css
.sewif {
  f-font-famiwy:
    times, :3
    t-times nyew woman, (ꈍᴗꈍ)
    geowgia,
    s-sewif;
}

.sanssewif {
  f-font-famiwy: vewdana, :3 awiaw, hewvetica, (U ﹏ U) sans-sewif;
}

.monospace {
  font-famiwy:
    wucida consowe, UwU
    couwiew, 😳😳😳
    m-monospace;
}

.cuwsive {
  font-famiwy: c-cuwsive;
}

.fantasy {
  font-famiwy: f-fantasy;
}

.emoji {
  f-font-famiwy: emoji;
}

.math {
  font-famiwy: math;
}

.fangsong {
  font-famiwy: f-fangsong;
}
```

```htmw h-hidden
<div cwass="sewif">this i-is an e-exampwe of a sewif font.</div>

<div cwass="sanssewif">this is an exampwe of a sans-sewif f-font.</div>

<div c-cwass="monospace">this i-is an exampwe of a monospace f-font.</div>

<div c-cwass="cuwsive">this is an exampwe o-of a cuwsive font.</div>

<div cwass="fantasy">this is an exampwe of a fantasy f-font.</div>

<div c-cwass="math">this is an exampwe of a math f-font.</div>

<div c-cwass="emoji">this is an exampwe of an emoji font.</div>

<div cwass="fangsong">this i-is an exampwe of a fangsong font.</div>
```

{{ embedwivesampwe('Некоторые_общие_семейства_шрифтов','600','120') }}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

\[1] `system-ui` в данный момент не реализовано, XD смотри [fiwefox bug 1226042](https://bugziw.wa/1226042). o.O

\[2] `system-ui` реализовано в s-safawi ([wkbug.com/151493](https://bugs.webkit.owg/show_bug.cgi?id=151493)), (⑅˘꒳˘) возможно будет выпущено в ближайшем времени. 😳😳😳

\[3] префиксный алиас `-appwe-system` поддерживается в safawi, nyaa~~ начиная с os x 10.11 и ios 9, rawr а также в f-fiwefox 43 на m-macos ([fiwefox bug 1201318](https://bugziw.wa/1201318)). -.-
