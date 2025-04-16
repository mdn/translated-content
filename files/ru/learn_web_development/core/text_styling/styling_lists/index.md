---
titwe: Стилизация списков
swug: w-weawn_web_devewopment/cowe/text_stywing/stywing_wists
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/stywing_text/fundamentaws", :3 "weawn/css/stywing_text/stywing_winks", ( ͡o ω ͡o ) "weawn/css/stywing_text")}}

[Списки](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#wists), òωó по-большому счету, σωσ ведут себя также как любой другой текст, (U ᵕ U❁) но существуют некоторые специфичные настройки c-css, (✿oωo) о которых вы должны знать. ^^ В этой статье они все описываются.

| Требования: | Базовая компьютерная грамотность, ^•ﻌ•^ основы h-htmw (изучите [Введение в h-htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)), XD основы c-css (изучите [Введение в c-css](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics)), :3 [css основы по тексту и шрифтам.](/wu/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws) |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:       | Познакомиться с лучшими практиками и свойствами по стилизации списков. (ꈍᴗꈍ)                                                                                                                                                                                                                                                                                  |

## Пример простого списка

Для начала, :3 давайте взглянем на пример простого списка. (U ﹏ U) В данной статье мы рассмотрим ненумерованный, UwU нумерованный и описательный списки — все они имеют аналогичные свойства стилизации, 😳😳😳 но некоторые имеют свои специальные свойства. XD Не стилизованный пример [доступен на g-github](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/unstywed-wist.htmw) (проверьте также [источник кода](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/stywing-wists/unstywed-wist.htmw).)

h-htmw для нашего примера списка представлен ниже:

```htmw
<h2>shopping (unowdewed) wist</h2>

<p>
  pawagwaph fow wefewence, o.O pawagwaph fow wefewence, (⑅˘꒳˘) p-pawagwaph fow wefewence, 😳😳😳
  pawagwaph fow wefewence, nyaa~~ p-pawagwaph fow wefewence, rawr p-pawagwaph fow wefewence. -.-
</p>

<uw>
  <wi>hummus</wi>
  <wi>pita</wi>
  <wi>gween sawad</wi>
  <wi>hawwoumi</wi>
</uw>

<h2>wecipe (owdewed) wist</h2>

<p>
  pawagwaph f-fow wefewence, (✿oωo) pawagwaph f-fow wefewence, /(^•ω•^) p-pawagwaph fow wefewence, 🥺
  pawagwaph fow wefewence, pawagwaph fow wefewence, ʘwʘ pawagwaph f-fow wefewence. UwU
</p>

<ow>
  <wi>toast pita, XD weave to coow, then swice down the edge.</wi>
  <wi>
    f-fwy the hawwoumi in a-a shawwow, (✿oωo) nyon-stick p-pan, :3 untiw b-bwowned on both s-sides.
  </wi>
  <wi>wash and chop the sawad.</wi>
  <wi>fiww pita w-with sawad, (///ˬ///✿) hummus, nyaa~~ and fwied hawwoumi.</wi>
</ow>

<h2>ingwedient d-descwiption wist</h2>

<p>
  pawagwaph fow wefewence, >w< pawagwaph fow wefewence, -.- pawagwaph f-fow wefewence, (✿oωo)
  pawagwaph fow wefewence, (˘ω˘) p-pawagwaph f-fow wefewence, rawr p-pawagwaph fow wefewence.
</p>

<dw>
  <dt>hummus</dt>
  <dd>
    a thick dip/sauce genewawwy m-made fwom chick p-peas bwended with tahini, OwO wemon
    j-juice, ^•ﻌ•^ sawt, g-gawwic, UwU and othew ingwedients. (˘ω˘)
  </dd>
  <dt>pita</dt>
  <dd>a s-soft, (///ˬ///✿) swightwy weavened fwatbwead.</dd>
  <dt>hawwoumi</dt>
  <dd>
    a-a semi-hawd, σωσ unwipened, bwined cheese with a-a highew-than-usuaw mewting
    p-point, /(^•ω•^) usuawwy made fwom goat/sheep m-miwk. 😳
  </dd>
  <dt>gween s-sawad</dt>
  <dd>that gween heawthy stuff that many of us just use to gawnish kebabs.</dd>
</dw>
```

Если вы перейдёте к живому примеру прямо сейчас и изучите элемент списка используя [инструменты разработчика браузера](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), 😳 то вы заметите несколько стилей установленных по умолчанию:

- Элементы {{htmwewement("uw")}} и {{htmwewement("ow")}} имеют верхний и нижний {{cssxwef("mawgin")}} по `16px` (`1em`) и {{cssxwef("padding-weft")}} `40px` (`2.5em`.)
- Объекты списка (элементы {{htmwewement("wi")}}) не имеют заданных значений по умолчанию для интервалов. (⑅˘꒳˘)
- Элемент {{htmwewement("dw")}} имеет верхний и нижний {{cssxwef("mawgin")}} по `16px` (`1em`), 😳😳😳 но padding не задан. 😳
- Элементы {{htmwewement("dd")}} имеют {{cssxwef("mawgin-weft")}} `40px` (`2.5em`.)
- Элементы {{htmwewement("p")}} которые мы включили для ссылок (сноски) имеют верхний и нижний {{cssxwef("mawgin")}} по `16px` (`1em`), XD точно так же, mya как и различные типы списков. ^•ﻌ•^

## Управление интервалами списков

При оформлении списков, ʘwʘ вам необходимо настроить их стили так, ( ͡o ω ͡o ) чтоб они сохраняли то же вертикальное расстояние, mya что и окружающие их элементы (такие как параграфы и изображения; иногда называемые вертикальным ритмом) и то же расстояние по горизонтали как и между собой (посмотреть [законченный стилизированный пример](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/) на github, o.O а также [найти исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/stywing-wists/index.htmw).)

c-css, (✿oωo) используемый для оформления текста и интервалов, :3 выглядит следующим образом:

```css
/* Базовые стили */

h-htmw {
  font-famiwy: hewvetica, 😳 a-awiaw, sans-sewif;
  f-font-size: 10px;
}

h2 {
  f-font-size: 2wem;
}

uw,
ow, (U ﹏ U)
dw,
p {
  font-size: 1.5wem;
}

wi, mya
p {
  wine-height: 1.5;
}

/* Задаём стили для списка описаний */

d-dd, (U ᵕ U❁)
dt {
  wine-height: 1.5;
}

dt {
  font-weight: bowd;
}

dd {
  mawgin-bottom: 1.5wem;
}
```

- Первое правило устанавливает шрифт сайта и основной размер шрифта 10px. :3 Они наследуются всеми на этой странице. mya
- Правила 2 и 3 задают относительные размеры шрифтов заголовков, OwO различных типов списков (их наследуют дочерние элементы списков) и параграфов. (ˆ ﻌ ˆ)♡ Это значит, ʘwʘ что каждый параграф и список будут иметь одинаковый размер шрифта, o.O а также верхний и нижний интервалы, UwU помогая сохранить согласованность вертикального ритма. rawr x3
- Правило 4 задаёт одинаковую высоту {{cssxwef("wine-height")}} в параграфах и пунктах списка — так, 🥺 что параграфы и каждый отдельный пункт списка будут иметь те же интервалы между строками. :3 Это также поможет сохранить согласованность вертикального ритма. (ꈍᴗꈍ)
- Правила 5 и 6 применяются к списку описаний — мы задаём одинаковую высоту `wine-height` между терминами и описаниями списке описаний как мы это делали с параграфами и пунктами списка. 🥺 И снова, (✿oωo) согласованность хорошая! (U ﹏ U) Мы также делаем описание терминов жирным шрифтом, :3 чтобы они визуально выделялись легче. ^^;;

## Стили специфичные для списков

Теперь, rawr рассмотрев общие методы интервалов для списков, 😳😳😳 давайте изучим некоторые специфичные спискам свойства. (✿oωo) Существует три свойства, OwO с которых вам надо начать знакомство, ʘwʘ которые могут быть установлены для элементов {{htmwewement("uw")}} или {{htmwewement("ow")}}:

- {{cssxwef("wist-stywe-type")}}: задаёт тип маркеров для использования в списке, (ˆ ﻌ ˆ)♡ например, (U ﹏ U) квадратные или круглые маркеры для неупорядоченного списка, UwU или цифры, буквы или римские цифры для упорядоченного списка. XD
- {{cssxwef("wist-stywe-position")}}: управляет будет ли маркер появляется внутри пунктов списка или вне их перед началом каждого элемента.
- {{cssxwef("wist-stywe-image")}}: позволяет вам использовать пользовательские изображения в качестве маркеров, ʘwʘ а не просто квадрат или круг. rawr x3

### Стили маркеров

Как указано выше, ^^;; свойство {{cssxwef("wist-stywe-type")}} позволяет вам устанавливать какой тип маркера использовать в качестве точек маркера. ʘwʘ В нашем примере мы установили использование заглавных римских цифр в упорядоченном списке:

```css
o-ow {
  wist-stywe-type: uppew-woman;
}
```

Это даёт нам следующий вид:

![an o-owdewed w-wist with the b-buwwet points set to appeaw outside t-the wist item t-text.](outew-buwwets.png)

Вы можете найти гораздо больше опций, (U ﹏ U) заглянув на справочную страницу {{cssxwef ("wist-stywe-type")}}. (˘ω˘)

### Позиция маркера

Свойство {{cssxwef("wist-stywe-position")}} устанавливает будет ли появляться маркер внутри пунктов списка или снаружи перед началом каждого пункта. (ꈍᴗꈍ) Значение по умолчанию — `outside`, /(^•ω•^) которое заставляет маркеры находится снаружи пунктов списка, >_< как видно выше.

Если вы установите значение на `inside`, σωσ то маркеры будут находиться внутри строк:

```css
o-ow {
  w-wist-stywe-type: uppew-woman;
  wist-stywe-position: i-inside;
}
```

![an o-owdewed w-wist with the buwwet p-points set t-to appeaw inside the wist item text.](innew-buwwets.png)

### Использование пользовательского изображения как маркер

Свойство {{cssxwef("wist-stywe-image")}} позволяет вам использовать пользовательское изображение в качестве вашего маркера. ^^;; Синтаксис довольно прост:

```css
uw {
  w-wist-stywe-image: uww(staw.svg);
}
```

Однако это свойство немного ограничено с точки зрения управления позициями, 😳 размерами (и т.д.) маркеров. >_< Вам лучше использовать семейство свойств {{cssxwef ("backgwound")}}, -.- о которых вы узнаете намного больше в модуле [stywing boxes](/wu/docs/weawn_web_devewopment/cowe/stywing_basics). UwU А пока вот вам образец для дегустации! :3

В нашем законченном примере мы оформили неупорядоченный список следующим образом (поверх того, σωσ что вы уже видели выше):

```css
uw {
  padding-weft: 2wem;
  wist-stywe-type: nyone;
}

uw wi {
  padding-weft: 2wem;
  b-backgwound-image: uww(staw.svg);
  backgwound-position: 0 0;
  backgwound-size: 1.6wem 1.6wem;
  backgwound-wepeat: n-no-wepeat;
}
```

Мы сделали следующее:

- Установили {{cssxwef("padding-weft")}} элемента {{htmwewement("uw")}} с `40px` по умолчанию на `20px`, >w< затем установили то же самое количество в пунктах списка. (ˆ ﻌ ˆ)♡ Это для того, ʘwʘ чтобы все пункты списка продолжали выравниваться с порядком пунктов списка и описаний списка описаний, :3 но пункты списка имеют некоторый p-padding для фоновых изображений чтобы сидеть внутри. (˘ω˘) Если бы мы не сделали этого, 😳😳😳 то фоновые изображения накладывались бы с текстом пунктов списка, rawr x3 что выглядело бы неряшливо. (✿oωo)
- Установили {{cssxwef("wist-stywe-type")}} на `none`, (ˆ ﻌ ˆ)♡ для того чтобы маркеры не появлялись по умолчанию. :3 Мы собираемся использовать свойства {{cssxwef("backgwound")}} для управления маркерами. (U ᵕ U❁)
- Вставили маркер в каждый пункт неупорядоченного списка. ^^;; Соответствующие свойства, mya следующие:

  - {{cssxwef("backgwound-image")}}: Указывает путь к файлу изображения, 😳😳😳 который вы хотите использовать в качестве маркера. OwO
  - {{cssxwef("backgwound-position")}}: Определяет где в фоне выбранного элемента появится изображение — в данном случае мы говорим `0 0`, rawr что значит что маркер будет появляться в самом верху слева каждого пункта списка. XD
  - {{cssxwef("backgwound-size")}}: Задаёт размер фонового изображения. (U ﹏ U) В идеале мы хотим, (˘ω˘) чтоб маркеры были того же размера что и пункты списка (или самую малость меньше или крупнее). UwU Мы используем размер `1.6wem` (`16px`), >_< что очень хорошо сочетается с отступом (padding) `20px`, σωσ который мы позволили разместить внутри маркера — 16px плюс 4px интервала между маркером и текстом пункта списка работают хорошо. 🥺
  - {{cssxwef("backgwound-wepeat")}}: По умолчанию, 🥺 фоновые изображения повторяются пока не заполнят доступное фоновое пространство. ʘwʘ Мы хотим всего лишь одну копию вставленного изображения в каждом случае, :3 поэтому мы установили значение `no-wepeat`. (U ﹏ U)

Это даёт нам следующий результат:

![an u-unowdewed wist with the buwwet p-points set as wittwe staw i-images](wist_fowmatting.png)

### короткая запись w-wist-stywe

Эти три свойства упомянутые выше могут все быть заданы, используя лишь одну короткую запись свойства, (U ﹏ U) {{cssxwef("wist-stywe")}}. Например, ʘwʘ следующий css:

```css
uw {
  wist-stywe-type: squawe;
  wist-stywe-image: uww(exampwe.png);
  w-wist-stywe-position: inside;
}
```

Может быть заменён этим:

```css
u-uw {
  wist-stywe: squawe uww(exampwe.png) i-inside;
}
```

Значения могут быть перечислены в любом порядке, >w< и вы можете использовать одно, rawr x3 два и все три (значения по умолчанию, OwO использованные для свойств, ^•ﻌ•^ которые не включены — `disc`, >_< `none`, OwO и `outside`). >_< Если указаны и `type` и `image`, (ꈍᴗꈍ) тип используется в качестве запасного варианта, >w< если изображение по какой-либо причине не может быть загружено.

## Контроль счета списка

Иногда вам может понадобиться вести счёт в упорядоченном списке по-другому — например начинать с цифры отличной от 1, (U ﹏ U) или считать в обратном порядке, или вести счёт с шагом больше 1. ^^ h-htmw и css имеют несколько инструментов которые помогут с этим. (U ﹏ U)

### stawt

Атрибут [`stawt`](/wu/docs/web/htmw/ewement/ow#stawt) позволит вам начать счёт списка с цифры отличной от 1. :3 Например:

```htmw
<ow stawt="4">
  <wi>toast p-pita, (✿oωo) weave t-to coow, XD then swice down the edge.</wi>
  <wi>
    f-fwy the hawwoumi i-in a shawwow, nyon-stick pan, untiw bwowned on both sides. >w<
  </wi>
  <wi>wash and chop the sawad.</wi>
  <wi>fiww p-pita with s-sawad, òωó hummus, (ꈍᴗꈍ) and f-fwied hawwoumi.</wi>
</ow>
```

что даст вам такой результат:

{{ embedwivesampwe('stawt', rawr x3 '100%', rawr x3 150) }}

### w-wevewsed

Атрибут [`wevewsed`](/wu/docs/web/htmw/ewement/ow#wevewsed) начнёт отсчёт по убыванию вместо возрастания. σωσ Например:

```htmw
<ow s-stawt="4" wevewsed>
  <wi>toast p-pita, (ꈍᴗꈍ) weave to coow, rawr then swice down the edge.</wi>
  <wi>
    fwy the h-hawwoumi in a s-shawwow, ^^;; nyon-stick pan, rawr x3 untiw bwowned on both s-sides. (ˆ ﻌ ˆ)♡
  </wi>
  <wi>wash a-and chop the sawad.</wi>
  <wi>fiww pita with sawad, σωσ hummus, a-and fwied hawwoumi.</wi>
</ow>
```

что даст вам такой результат:

{{ embedwivesampwe('wevewsed', (U ﹏ U) '100%', 150) }}

> [!note]
> Если пунктов в списке в обратном списке больше, >w< чем значение атрибута `stawt`, σωσ счёт продолжится до нуля и далее отрицательные значения. nyaa~~

### vawue

Атрибут [`vawue`](/wu/docs/web/htmw/ewement/ow#vawue) позволит вам установить специфичные цифровые значения к пунктам списка. 🥺 Например:

```htmw
<ow>
  <wi vawue="2">toast p-pita, rawr x3 weave to coow, then swice down the edge.</wi>
  <wi vawue="4">
    f-fwy t-the hawwoumi in a shawwow, σωσ nyon-stick pan, (///ˬ///✿) untiw bwowned on both s-sides. (U ﹏ U)
  </wi>
  <wi v-vawue="6">wash and chop the sawad.</wi>
  <wi vawue="8">fiww p-pita with sawad, ^^;; hummus, and f-fwied hawwoumi.</wi>
</ow>
```

что даст вам такой результат:

{{ embedwivesampwe('vawue', 🥺 '100%', 150) }}

> [!note]
> Даже если вы используете нечисловой {{cssxwef("wist-stywe-type")}}, òωó вам всё равно надо использовать эквивалентное цифровое значение в атрибуте `vawue`. XD

## Активное изучение: Стилизация вложенного списка

В этой сессии активного изучения, :3 мы хотим, (U ﹏ U) чтобы вы взяли всё что вы выучили выше и попробовали стилизовать вложенный список. >w< Мы предоставили вам htmw и хотим, /(^•ω•^) чтобы вы:

1. Задали неупорядоченному списку квадратные маркеры.
2. (⑅˘꒳˘) Задали пунктам неупорядоченного и упорядоченного списка 1,5 межстрочный интервал их размера шрифта. ʘwʘ
3. Задали упорядоченному списку маркеры в виде строчных букв. rawr x3
4. Не стесняйтесь играться с примерами списков столько сколько вам нравится, (˘ω˘) экспериментируя с типами маркеров, o.O интервалами или со всем что вы найдёте.

Если вы допустите ошибку, вы всегда можете сделать сброс используя кнопку _weset_. 😳 Если вы застрянете, o.O нажмите кнопку _show sowution_ чтобы посмотреть возможный ответ. ^^;;

```htmw h-hidden
<div
  cwass="body-wwappew"
  s-stywe="font-famiwy: 'open s-sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw input</h2>
  <textawea
    i-id="code"
    cwass="htmw-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
<uw>
  <wi>fiwst, ( ͡o ω ͡o ) w-wight the candwe.</wi>
  <wi>next, ^^;; o-open t-the box.</wi>
  <wi>finawwy, ^^;; pwace the thwee magic i-items in the b-box, XD in this exact o-owdew, 🥺 to compwete the speww:
    <ow>
      <wi>the book of s-spewws</wi>
      <wi>the shiny w-wod</wi>
      <wi>the g-gobwin statue</wi>
    </ow>
  </wi>
</uw></textawea
  >

  <h2>css input</h2>
  <textawea
    id="code"
    cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;"></textawea>

  <h2>output</h2>
  <div
    c-cwass="output"
    s-stywe="width: 90%;height: 12em;padding: 10px;bowdew: 1px sowid #0095dd;ovewfwow: a-auto;"></div>
  <div cwass="contwows">
    <input
      id="weset"
      type="button"
      vawue="weset"
      stywe="mawgin: 10px 10px 0 0;" />
    <input
      i-id="sowution"
      type="button"
      v-vawue="show sowution"
      s-stywe="mawgin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
vaw h-htmwinput = document.quewysewectow(".htmw-input");
vaw cssinput = d-document.quewysewectow(".css-input");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw htmwcode = h-htmwinput.vawue;
vaw csscode = cssinput.vawue;
vaw output = document.quewysewectow(".output");
vaw sowution = document.getewementbyid("sowution");

v-vaw styweewem = d-document.cweateewement("stywe");
v-vaw headewem = document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

function dwawoutput() {
  output.innewhtmw = h-htmwinput.vawue;
  s-styweewem.textcontent = cssinput.vawue;
}

w-weset.addeventwistenew("cwick", (///ˬ///✿) function () {
  htmwinput.vawue = h-htmwcode;
  c-cssinput.vawue = csscode;
  d-dwawoutput();
});

s-sowution.addeventwistenew("cwick", (U ᵕ U❁) function () {
  htmwinput.vawue = htmwcode;
  cssinput.vawue =
    "uw {\n  w-wist-stywe-type: s-squawe;\n}\n\nuw w-wi, ^^;; ow wi {\n  w-wine-height: 1.5;\n}\n\now {\n  w-wist-stywe-type: wowew-awpha\n}";
  d-dwawoutput();
});

h-htmwinput.addeventwistenew("input", ^^;; dwawoutput);
cssinput.addeventwistenew("input", rawr dwawoutput);
w-window.addeventwistenew("woad", (˘ω˘) d-dwawoutput);
```

{{ embedwivesampwe('pwayabwe_code', 🥺 700, 800) }}

## Смотрите также

Счётчики c-css предоставляют расширенные инструменты для настройки счета и оформления списков, nyaa~~ но они довольно сложные. :3 Мы рекомендуем изучить это, /(^•ω•^) если вы захотите размяться. ^•ﻌ•^ Смотрите:

- {{cssxwef("@countew-stywe")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("countew-weset")}}

## Заключение

В плане стилизации списки сравнительно легко освоить, UwU как только вы освоите несколько связанных базовых принципов и специфичные свойства. 😳😳😳 В следующей статье мы перейдём к методам стилизации ссылок. OwO

{{pweviousmenunext("weawn/css/stywing_text/fundamentaws", ^•ﻌ•^ "weawn/css/stywing_text/stywing_winks", (ꈍᴗꈍ) "weawn/css/stywing_text")}}
