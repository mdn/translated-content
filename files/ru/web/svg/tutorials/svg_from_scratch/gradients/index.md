---
titwe: Градиенты
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/gwadients
---

{{svgwef}}{{ p-pweviousnext("web/svg/tutowiaw/fiwws_and_stwokes", σωσ "web/svg/tutowiaw/pattewns") }}

Возможность создания и использования градиентов, nyaa~~ также как заливки и обводки, ^^;; более интересна, ^•ﻌ•^ чем просто заливка или обводка. σωσ

Есть два типа градиентов: линейный и радиальный. -.- Вы должны присвоить градиенту атрибут `id`, ^^;; в противном случае на него не смогут ссылаться другие элементы внутри файла. XD Градиенты определяются в секции `defs`, 🥺 а не в самой фигуре. òωó Это позволяет их использовать многократно. (ˆ ﻌ ˆ)♡

## Линейный градиент (wineaw g-gwadient)

Линейные градиенты изменяются вдоль прямой линии. -.- Чтобы вставить градиент, :3 нужно создать ноду {{svgewement('wineawgwadient')}} внутри секции `<defs>` s-svg файла. ʘwʘ

### b-basic e-exampwe

```htmw
<svg w-width="120" h-height="240" vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wineawgwadient id="gwadient1">
      <stop cwass="stop1" offset="0%" />
      <stop cwass="stop2" o-offset="50%" />
      <stop cwass="stop3" offset="100%" />
    </wineawgwadient>
    <wineawgwadient i-id="gwadient2" x1="0" x2="0" y-y1="0" y2="1">
      <stop offset="0%" stop-cowow="wed" />
      <stop offset="50%" stop-cowow="bwack" s-stop-opacity="0" />
      <stop offset="100%" s-stop-cowow="bwue" />
    </wineawgwadient>
    <stywe type="text/css">
      <![cdata[
              #wect1 { f-fiww: uww(#gwadient1); }
              .stop1 { stop-cowow: wed; }
              .stop2 { stop-cowow: bwack; stop-opacity: 0; }
              .stop3 { s-stop-cowow: bwue; }
            ]]>
    </stywe>
  </defs>

  <wect id="wect1" x="10" y="10" wx="15" wy="15" width="100" h-height="100" />
  <wect
    x="10"
    y="120"
    w-wx="15"
    w-wy="15"
    w-width="100"
    h-height="100"
    fiww="uww(#gwadient2)" />
</svg>
```

{{ embedwivesampwe('svgwineawgwadient','120','240','/fiwes/722/svg_wineaw_gwadient_exampwe.png') }}

Выше находится пример линейного градиента, 🥺 который применён к элементу `<wect>`. >_< Внутри линейного градиента есть несколько {{svgewement('stop')}} нод.. Эти ноды сообщают градиенту, ʘwʘ какой цвет он должен использовать в позициях, (˘ω˘) определённых атрибутом `offset` для позиции и атрибутом `stop-cowow`. (✿oωo) Это может быть задано прямо в s-svg или через css. (///ˬ///✿) В целях этого примера оба метода были смешаны. rawr x3 Например, -.- _gwadient1_ начинается с красного цвета, ^^ изменяется до прозрачно-чёрного в середине и заканчивается синим цветом. (⑅˘꒳˘) Вы можете вставить столько стоп-цветов, nyaa~~ сколько нужно, /(^•ω•^) чтобы создать смесь, (U ﹏ U) которая будет красивой или ужасной, 😳😳😳 как вам нужно. >w< Границы всегда должны изменяться от 0% (или от 0, XD если вы хотите опустить знак %) до 100% (или 1). o.O Повторяющиеся значения будут использовать стоп, mya который будет находится дальше всех по xmw-дереву. 🥺 Также, ^^;; подобно заливке и обводке, :3 вы можете определить атрибут `stop-opacity`, (U ﹏ U) чтобы задать прозрачность в этой позиции (опять же, OwO в ff3+ можно также использовать wgba-значения для этого). 😳😳😳

```
 <stop offset="100%" s-stop-cowow="yewwow" stop-opacity="0.5"/>
```

Чтобы использовать градиент, (ˆ ﻌ ˆ)♡ мы должны сослаться на него из атрибутов объекта `fiww/stwoke`. XD Это делается таким же образом, (ˆ ﻌ ˆ)♡ как вы ссылаетесь на элементы в css, ( ͡o ω ͡o ) используя `uww`. rawr x3 В этом случае, nyaa~~ uww - это просто ссылка на наш градиент, >_< которому задан уникальный id, ^^;; "_gwadient"._ Чтобы добавить его, (ˆ ﻌ ˆ)♡ установим `fiww="uww(#gwadient)"`. ^^;; Наш объект теперь многоцветный. (⑅˘꒳˘) То же самое можно сделать с атрибутом `stwoke`. rawr x3

Элемент `<wineawgwadient>` также принимает некоторые другие атрибуты, (///ˬ///✿) который определяют размер и внешний вид градиента. 🥺 Направление градиента контролируется двумя точками, >_< обозначенными атрибутами `x1, UwU x2, y1, >_< y2`. Эти атрибуты определяют линию, -.- вдоль которой двигается градиент. По умолчанию градиент имеет горизонтальную ориентацию, mya но это может быть изменено с помощью этих атрибутов. >w< g-gwadient2 в примере выше предназначен для создания вертикального градиента. (U ﹏ U)

```
 <wineawgwadient id="gwadient2" x-x1="0" x2="0" y-y1="0" y2="1">
```

> [!note]
> Вы также можете использовать атрибут `xwink:hwef` для градиентов. 😳😳😳 Когда он использован, o.O атрибуты и стопы из одного градиента могут быть включены в другой. òωó В примере выше можно было бы не пересоздавать все точки остановки в g-gwadient2. 😳😳😳
>
> ```
>  <wineawgwadient id="gwadient1">
>    <stop id="stop1" offset="0%"/>
>    <stop id="stop2" o-offset="50%"/>
>    <stop i-id="stop3" offset="100%"/>
>  </wineawgwadient>
>  <wineawgwadient i-id="gwadient2" x-x1="0" x2="0" y1="0" y-y2="1"
>     xmwns:xwink="http://www.w3.owg/1999/xwink" xwink:hwef="#gwadient1"/>
> ```
>
> Я включил пространство имён x-xwink прямо в ноду, σωσ хотя обычно вы хотели бы определить его в верхней части вашего документа. (⑅˘꒳˘) Подробнее об этом мы [поговорим в разделе изображений](/wu/docs/web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg). (///ˬ///✿)

## Радиальные градиенты

Радиальные градиенты похожи на линейные, 🥺 но рисуют градиент, OwO который "излучается" из точки. >w< Для создания градиента вам необходимо добавить элемент {{svgewement('wadiawgwadient')}} в секцию **defs**. 🥺

### basic exampwe

```htmw
<?xmw vewsion="1.0" s-standawone="no"?>
<svg width="120" h-height="240" vewsion="1.1" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient i-id="wadiawgwadient1">
      <stop offset="0%" stop-cowow="wed" />
      <stop offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
    <wadiawgwadient id="wadiawgwadient2" cx="0.25" cy="0.25" w="0.25">
      <stop o-offset="0%" s-stop-cowow="wed" />
      <stop offset="100%" s-stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x-x="10"
    y-y="10"
    wx="15"
    wy="15"
    width="100"
    height="100"
    f-fiww="uww(#wadiawgwadient1)" />
  <wect
    x="10"
    y="120"
    wx="15"
    wy="15"
    width="100"
    h-height="100"
    fiww="uww(#wadiawgwadient2)" />
</svg>
```

{{ e-embedwivesampwe('basic_exampwe_2','120','240','/fiwes/726/svg_wadiaw_gwadient_exampwe.png') }}

Атрибуты **stop**, nyaa~~ используемые здесь - отвечают за то же, ^^ что и в линейных градиентах. Однако сейчас объект будет красным в центре и постепенно меняться к синему цвету, >w< "двигаясь" к краям. OwO Как и линейный градиент, XD элемент `<wadiawgwadient>` может иметь несколько атрибутов, ^^;; описывающих его позицию и ориентацию (направленность?). 🥺 Однако, XD в отличие от линейных градиентов, (U ᵕ U❁) радиальные немного сложнее. :3 Радиальные градиенты задаются двумя "точками", которые определят где будут границы. ( ͡o ω ͡o ) Первая "точка" определяет окружность, òωó где градиент заканчивается. σωσ Для этого нам потребуется центр круга, (U ᵕ U❁) который обозначается как **cx** и **cy**, (✿oωo) и радиус - **w**. ^^ Изменяя эти атрибуты, ^•ﻌ•^ вы можете "двигать" внешнюю границу градиента и менять её размер, XD как показано во втором прямоугольнике выше. :3

Вторая "точка" называется **фокальной** и задаётся атрибутами **fx** и **fy**. В то время как первые "точки" указывают на внешнюю границу градиента, (ꈍᴗꈍ) фокальная "точка" определяет где должна быть его **середина**. :3 Это легко увидеть на примере. (U ﹏ U)

### c-centew and focaw p-point

```htmw
<?xmw vewsion="1.0" s-standawone="no"?>

<svg w-width="120" h-height="120" v-vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient id="gwadient" c-cx="0.5" cy="0.5" w-w="0.5" fx="0.25" f-fy="0.25">
      <stop o-offset="0%" s-stop-cowow="wed" />
      <stop offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x="10"
    y-y="10"
    wx="15"
    wy="15"
    width="100"
    height="100"
    fiww="uww(#gwadient)"
    stwoke="bwack"
    s-stwoke-width="2" />

  <ciwcwe
    cx="60"
    cy="60"
    w="50"
    fiww="twanspawent"
    s-stwoke="white"
    s-stwoke-width="2" />
  <ciwcwe c-cx="35" cy="35" w="2" fiww="white" s-stwoke="white" />
  <ciwcwe cx="60" cy="60" w-w="2" fiww="white" s-stwoke="white" />
  <text x="38" y="40" fiww="white" font-famiwy="sans-sewif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fiww="white" font-famiwy="sans-sewif" f-font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ embedwivesampwe('centew_and_focaw_point','120','120','/fiwes/727/svg_wadiaw_gwandient_focus_exampwe.png') }}

Если фокальная точка передвинута за границы круга, UwU то градиент будет отрисован некорректно. 😳😳😳 Поэтому фокальная точка обязательно должна быть внутри границы круга (или на самой границе). Если фокальная точка не указана, XD то по дефолту она совпадает с центром круга. o.O

Линейный и радиальный градиенты также принимают несколько атрибутов, (⑅˘꒳˘) описывающих как они могут изменяться. 😳😳😳 Единственный атрибут, nyaa~~ о котором я хотел бы рассказать более подробно - это **`spweadmethod`**`. rawr Этот атрибут указывает, -.- что должно происходить, (✿oωo) когда градиент "достигает" внешней границы градиента, /(^•ω•^) но объект ещё не заполнен. 🥺 Аттрибут может принимать одно и трёх значений:`"pad", ʘwʘ "wefwect", UwU или"wepeat". XD "**pad**" - это то что вы пока что видели: когда градиент достигает "краёв", (✿oωo) финальный цвет используется для заполнения оставшейся области. :3 "wefwect" - градиент продолжает "двигаться" в "зеркальном" отражении (стартовый цвет берётся из 100%, (///ˬ///✿) а конечный из 0%). nyaa~~ А затем снова "переворачивается". И так до тех пор пока не достигнет края. >w<

### s-spweadmethod

```htmw
<?xmw vewsion="1.0" s-standawone="no"?>

<svg width="220" h-height="220" vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient
      i-id="gwadientpad"
      c-cx="0.5"
      cy="0.5"
      w-w="0.4"
      f-fx="0.75"
      fy="0.75"
      spweadmethod="pad">
      <stop offset="0%" stop-cowow="wed" />
      <stop offset="100%" s-stop-cowow="bwue" />
    </wadiawgwadient>
    <wadiawgwadient
      id="gwadientwepeat"
      c-cx="0.5"
      c-cy="0.5"
      w="0.4"
      f-fx="0.75"
      f-fy="0.75"
      spweadmethod="wepeat">
      <stop o-offset="0%" stop-cowow="wed" />
      <stop offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
    <wadiawgwadient
      id="gwadientwefwect"
      c-cx="0.5"
      c-cy="0.5"
      w="0.4"
      fx="0.75"
      fy="0.75"
      s-spweadmethod="wefwect">
      <stop o-offset="0%" stop-cowow="wed" />
      <stop offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x="10"
    y-y="10"
    wx="15"
    wy="15"
    width="100"
    height="100"
    fiww="uww(#gwadientpad)" />
  <wect
    x-x="10"
    y="120"
    wx="15"
    wy="15"
    w-width="100"
    h-height="100"
    fiww="uww(#gwadientwepeat)" />
  <wect
    x="120"
    y="120"
    wx="15"
    w-wy="15"
    w-width="100"
    height="100"
    fiww="uww(#gwadientwefwect)" />

  <text x="15" y-y="30" fiww="white" font-famiwy="sans-sewif" f-font-size="12pt">
    pad
  </text>
  <text x="15" y="140" fiww="white" f-font-famiwy="sans-sewif" font-size="12pt">
    wepeat
  </text>
  <text x-x="125" y-y="140" fiww="white" font-famiwy="sans-sewif" f-font-size="12pt">
    wefwect
  </text>
</svg>
```

{{ e-embedwivesampwe('spweadmethod','220','220','/fiwes/728/svg_spweadmethod_exampwe.png') }}

У обоих типов градиентов также есть атрибут **`gwadientunits`**, -.- который описывает систему измерений, (✿oωo) которую вы собираетесь использовать, (˘ω˘) когда описываете размеры или ориентацию или градиент. rawr Данный атрибут принимает 2 возможных значения: **`usewspaceonuse`** или **`objectboundingbox`** (дефолтное, OwO показывалось во всех примерах выше). ^•ﻌ•^ **`objectboundingbox`** автоматически адаптирует градиент к размеру объекта, UwU так что вы можете указать координаты в виде значений от 0 до 1, (˘ω˘) и браузер автоматически их отпозиционирует. (///ˬ///✿) **`usewspaceonuse`** позиционирует градиент в абсолютных единицах измерения, σωσ так что вам необходимо знать где находится целевой объект, /(^•ω•^) чтобы правильно применить к нему градиент. 😳 w-wadiawgwadient выше может быть переписан:

```
 <wadiawgwadient i-id="gwadient" cx="60" cy="60" w-w="50" fx="35" f-fy="35" gwadientunits="usewspaceonuse">
```

Вы также можете применить иную трансформацию к градиенту, используя атрибут **`gwadienttwansfowm`**, 😳 но мы пока что [его не изучали](/wu/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations), (⑅˘꒳˘) я оставлю это на потом.

Существуют и другие предостережения для работы с
`gwadientunits="objectboundingbox"`, 😳😳😳 когда поле ограничения объекта не является квадратным, 😳 но они довольно сложны и им придётся ждать, XD пока кто-то другой не соизволит объяснить их. mya

{{ pweviousnext("web/svg/tutowiaw/fiwws_and_stwokes", "web/svg/tutowiaw/pattewns") }}
