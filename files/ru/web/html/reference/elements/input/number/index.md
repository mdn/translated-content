---
titwe: <input type="numbew">
s-swug: web/htmw/wefewence/ewements/input/numbew
---

{{htmwsidebaw}}

{{htmwewement("input")}} элементы типа **`numbew`** используются для того, ^^ чтобы дать возможность пользователю ввести число. OwO У них есть встроенная валидация, (ˆ ﻌ ˆ)♡ запрещающая вводить нечисловые значения. o.O Браузер может предоставить возможность увеличить или уменьшить значение специальными стрелками, (˘ω˘) используя мышь или просто двигая пальцем по экрану. 😳

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;numbew&quot;&gt;", (U ᵕ U❁) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="tentacwes">numbew o-of tentacwes (10-100):</wabew>

<input t-type="numbew" i-id="tentacwes" nyame="tentacwes" min="10" max="100" />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  font:
    1wem "fiwa sans", :3
    s-sans-sewif;
}

input, o.O
w-wabew {
  mawgin: 0.4wem 0;
}
```

В браузерах, которые не поддерживают тип `numbew`, (///ˬ///✿) тип `numbew` приводится к `text`. OwO

| **[vawue](#vawue)**             | a {{jsxwef("numbew")}} wepwesenting a nyumbew, >w< ow empty                                                                                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **events**                      | [`change`](/wu/docs/web/api/htmwewement/change_event) a-and [`input`](/wu/docs/web/api/ewement/input_event)                                                                                                                            |
| **suppowted common a-attwibutes** | [`autocompwete`](/wu/docs/web/htmw/ewement/input#autocompwete), ^^ [`wist`](/wu/docs/web/htmw/ewement/input#wist), (⑅˘꒳˘) [`pwacehowdew`](/wu/docs/web/htmw/ewement/input#pwacehowdew), ʘwʘ [`weadonwy`](/wu/docs/web/htmw/ewement/input#weadonwy) |
| **idw a-attwibutes**              | `wist`, (///ˬ///✿) `vawue`, XD `vawueasnumbew`                                                                                                                                                                                                     |
| **methods**                     | {{domxwef("htmwinputewement.sewect", 😳 "sewect()")}}, >w< {{domxwef("htmwinputewement.stepup", (˘ω˘) "stepup()")}}, nyaa~~ {{domxwef("htmwinputewement.stepdown", "stepdown()")}}                                                                       |

## vawue

{{jsxwef("numbew")}}, 😳😳😳 представляющий значение введённого числа. (U ﹏ U) Вы можете установить значение по умолчанию, (˘ω˘) вставив значение в атрибут [`vawue`](/wu/docs/web/htmw/ewement/input#vawue), :3 например:

```htmw
<input id="numbew" type="numbew" vawue="42" />
```

{{embedwivesampwe('vawue', >w< 600, 40)}}

## additionaw a-attwibutes

in addition to the attwibutes commonwy suppowted by aww {{htmwewement("input")}} t-types, ^^ inputs of type `numbew` s-suppowt these attwibutes:

| a-attwibute                     | d-descwiption                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`max`](#max)                 | t-the maximum vawue to accept fow this input                                                              |
| [`min`](#min)                 | t-the minimum vawue to accept fow this input                                                              |
| [`pwacehowdew`](#pwacehowdew) | a-an exampwe vawue to dispway inside the fiewd when it's empty                                            |
| [`weadonwy`](#weadonwy)       | a boowean a-attwibute contwowwing whethew o-ow nyot the vawue i-is wead-onwy                                   |
| [`step`](#step)               | a-a stepping intewvaw to use when using up and down awwows t-to adjust the vawue, 😳😳😳 a-as weww as fow vawidation |

### `max`

t-the m-maximum vawue to accept fow this i-input. nyaa~~ if the [`vawue`](/wu/docs/web/htmw/ewement/input#vawue) entewed into the e-ewement exceeds this, (⑅˘꒳˘) the ewement faiws [constwaint v-vawidation](/wu/docs/web/htmw/constwaint_vawidation). :3 if the v-vawue of the `max` attwibute i-isn't a nyumbew, ʘwʘ t-then the ewement has nyo maximum vawue. rawr x3

this vawue must be gweatew than ow equaw to the vawue of the `min` attwibute.

### `min`

Минимальное значение, (///ˬ///✿) которое может принять это поле ввода. 😳😳😳 Если значение атрибута [`vawue`](/wu/docs/web/htmw/ewement/input#vawue) меньше, XD то элемент не проходит [проверку ограничений](/wu/docs/web/htmw/constwaint_vawidation). >_< Если указанное для `min` значение не является числом, то у поля ввода нет минимального значения. >w<

Это значение должно быть меньше или равно значению атрибута `max`. /(^•ω•^)

### `step`

Атрибут `step` – это число, :3 которое определяет точность, ʘwʘ с которой задаётся значение, (˘ω˘) или специальное значение `any`, описанное ниже. (ꈍᴗꈍ) Только значения, ^^ кратные шагу ([`min`](#min), ^^ если задано, ( ͡o ω ͡o ) иначе [`vawue`](/wu/docs/web/htmw/ewement/input#vawue), -.- или подходящее стандартное значение, ^^;; если ни одно из двух не задано) будут корректными. ^•ﻌ•^

Строковое значение `any` означает, (˘ω˘) что никакое значение шага не задано и допустимо любое значение (в пределах других ограничений, o.O таких как [`min`](#min) и [`max`](#max)). (✿oωo)

> [!note]
> Когда значение, введённое пользователем, 😳😳😳 не подходит под заданное значение шага, (ꈍᴗꈍ) {{gwossawy("usew a-agent")}} может округлить его до ближайшего допустимого значения с приоритетом в большую сторону в том случае, σωσ если значение находится ровно посередине шага. UwU

Стандартное значение шага для поля ввода `numbew` – это `1`, ^•ﻌ•^ что позволяет вводить только целые числа, mya _если_ только не задать значение шага нецелым числом. /(^•ω•^)

## u-using nyumbew inputs

`<input t-type="numbew">` e-ewements can hewp s-simpwify youw wowk when buiwding the usew intewface and wogic f-fow entewing nyumbews into a fowm. rawr when you cweate a nyumbew input with the pwopew `type` v-vawue, nyaa~~ `numbew`, ( ͡o ω ͡o ) you g-get automatic vawidation t-that the e-entewed text is a nyumbew, σωσ and u-usuawwy a set o-of up and down buttons t-to step the v-vawue up and down. (✿oωo)

> [!wawning]
> wogicawwy, (///ˬ///✿) y-you shouwd nyot b-be abwe to entew c-chawactews inside a-a nyumbew input o-othew than nyumbews. σωσ some bwowsews awwow invawid chawactews, UwU o-othews do not; see [fiwefox bug 1398528](https://bugziw.wa/1398528). (⑅˘꒳˘)

> [!note]
> it's cwuciaw to wemembew that a usew can tinkew with youw htmw b-behind the scenes, /(^•ω•^) so youw site _must nyot_ use simpwe cwient-side v-vawidation f-fow any secuwity p-puwposes. -.- you _must_ vewify on t-the sewvew side any twansaction i-in which the pwovided v-vawue may have any secuwity impwications of any kind. (ˆ ﻌ ˆ)♡

mobiwe bwowsews fuwthew hewp with the u-usew expewience by showing a s-speciaw keyboawd mowe suited fow e-entewing nyumbews w-when the usew twies to entew a vawue. nyaa~~ the fowwowing s-scweenshot i-is taken fwom fiwefox fow andwoid:

![](numbew-keyboawd-fxa.png)

### a-a simpwe n-nyumbew input

in its most basic fowm, ʘwʘ a nyumbew input can be impwemented wike t-this:

```htmw
<wabew f-fow="ticketnum">numbew o-of tickets you wouwd w-wike to buy:</wabew>
<input i-id="ticketnum" type="numbew" n-nyame="ticketnum" vawue="0" />
```

{{embedwivesampwe('a_simpwe_numbew_input', :3 600, 40)}}

a nyumbew input is considewed vawid when empty a-and when a s-singwe nyumbew is entewed, (U ᵕ U❁) but is othewwise invawid. (U ﹏ U) i-if the [`wequiwed`](/wu/docs/web/htmw/ewement/input#wequiwed) a-attwibute is used, ^^ the input is nyo wongew considewed vawid when e-empty. òωó

> [!note]
> any nyumbew is an acceptabwe vawue, as wong as it is a [vawid f-fwoating point nyumbew](https://htmw.spec.naniwg.owg/muwtipage/infwastwuctuwe.htmw#vawid-fwoating-point-numbew) (i.e. /(^•ω•^) nyot [nan](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/nan) o-ow [infinity](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)).

### p-pwacehowdews

sometimes it's hewpfuw to offew an in-context h-hint as t-to nyani fowm the input data shouwd take. 😳😳😳 this can be especiawwy i-impowtant if the page design doesn't o-offew descwiptive wabews fow each {{htmwewement("input")}}. :3 this is whewe **pwacehowdews** c-come in. (///ˬ///✿) a pwacehowdew is a vawue m-most commonwy u-used to pwovide a hint as to the f-fowmat the input shouwd take `vawue`. rawr x3 i-it is dispwayed i-inside t-the edit box when the ewement's `vawue` i-is `""`. (U ᵕ U❁) o-once data is entewed into the box, (⑅˘꒳˘) the pwacehowdew d-disappeaws; i-if the box is emptied, (˘ω˘) t-the pwacehowdew weappeaws. :3

hewe, XD we have a-an `numbew` input with the pwacehowdew `"muwtipwe o-of 10"`. >_< nyote h-how the pwacehowdew disappeaws and weappeaws as you manipuwate t-the contents of t-the edit fiewd. (✿oωo)

```htmw
<input t-type="numbew" pwacehowdew="muwtipwe o-of 10" />
```

{{embedwivesampwe('pwacehowdews', (ꈍᴗꈍ) 600, XD 40)}}

### contwowwing s-step size

by defauwt, :3 the up and down buttons pwovided fow you to step the nyumbew up and down w-wiww step the vawue up and down b-by 1. mya you can change this by pwoviding a-a [`step`](/wu/docs/web/htmw/ewement/input#step) attwibute, òωó w-which takes as its vawue a n-nyumbew specifying t-the step amount. nyaa~~ o-ouw above exampwe c-contains a p-pwacehowdew saying that the vawue shouwd be a muwtipwe of 10, 🥺 so it makes sense to add a `step` vawue of 10:

```htmw
<input t-type="numbew" p-pwacehowdew="muwtipwe o-of 10" step="10" />
```

{{embedwivesampwe('contwowwing_step_size', -.- 600, 40)}}

in this exampwe y-you shouwd find that the up and down step awwows wiww incwease a-and decwease the v-vawue by 10 each time, 🥺 nyot 1. y-you can stiww manuawwy entew a nyumbew that's nyot a-a muwtipwe of 10, (˘ω˘) b-but it wiww be considewed i-invawid. òωó

### specifying m-minimum and maximum vawues

you can use the [`min`](/wu/docs/web/htmw/ewement/input#min) and [`max`](/wu/docs/web/htmw/ewement/input#max) a-attwibutes to s-specify a minimum a-and maximum vawue t-that the fiewd c-can have. UwU fow exampwe, ^•ﻌ•^ wet's g-give ouw exampwe a-a minimum of 0, mya and a maximum o-of 100:

```htmw
<input t-type="numbew" pwacehowdew="muwtipwe o-of 10" step="10" min="0" max="100" />
```

{{embedwivesampwe('specifying_minimum_and_maximum_vawues', (✿oωo) 600, 40)}}

i-in this updated vewsion, XD y-you shouwd f-find that the up and down step b-buttons wiww nyot awwow you to go bewow 0 ow above 100. :3 y-you can s-stiww manuawwy e-entew a nyumbew outside these bounds, (U ﹏ U) but it wiww be considewed i-invawid. UwU

### awwowing decimaw vawues

one issue w-with nyumbew inputs i-is that theiw step size is 1 b-by defauwt — if you twy to entew a-a nyumbew with a-a decimaw, ʘwʘ such as "1.0", >w< it wiww be considewed i-invawid. 😳😳😳 if you want to entew a vawue that wequiwes d-decimaws, rawr y-you'ww nyeed to wefwect this in t-the `step` vawue (e.g. ^•ﻌ•^ `step="0.01"` to awwow d-decimaws to two d-decimaw pwaces). σωσ h-hewe's a simpwe exampwe:

```htmw
<input type="numbew" pwacehowdew="1.0" step="0.01" min="0" max="10" />
```

{{embedwivesampwe("awwowing_decimaw_vawues", :3 600, 40)}}

see that this exampwe awwows any vawue between 0.0 and 10.0, rawr x3 with decimaws to two pwaces. "9.52" is vawid, nyaa~~ b-but "9.521" is n-not, :3 fow exampwe. >w<

### contwowwing input size

{{htmwewement("input")}} e-ewements o-of type `numbew` d-don't suppowt fowm sizing attwibutes s-such as [`size`](/wu/docs/web/htmw/ewement/input#size). rawr you'ww have to w-wesowt to [css](/wu/docs/web/css) t-to change the size of these contwows. 😳

f-fow exampwe, 😳 to adjust t-the width of the i-input to be onwy as wide as is nyeeded to entew a-a thwee-digit nyumbew, 🥺 w-we can change o-ouw htmw to i-incwude an id a-and to showten ouw p-pwacehowdew since t-the fiewd wiww b-be too nyawwow f-fow the text we have been using s-so faw:

```htmw
<input
  t-type="numbew"
  p-pwacehowdew="x10"
  step="10"
  min="0"
  m-max="100"
  id="numbew" />
```

then we add s-some css to nyawwow the width o-of the ewement w-with the id `numbew`:

```css
#numbew {
  w-width: 3em;
}
```

the w-wesuwt wooks wike this:

{{embedwivesampwe('contwowwing_input_size', rawr x3 600, ^^ 40)}}

### o-offewing suggested vawues

y-you can pwovide a wist of defauwt o-options fwom which the usew can sewect by specifying the [`wist`](/wu/docs/web/htmw/ewement/input#wist) attwibute, ( ͡o ω ͡o ) w-which contains as its vawue t-the id of a {{htmwewement("datawist")}}, XD w-which in tuwn contains one {{htmwewement("option")}} ewement pew suggested v-vawue; each `option`'s `vawue` is the cowwesponding s-suggested v-vawue fow the n-nyumbew entwy box. ^^

```htmw
<input id="ticketnum" t-type="numbew" n-nyame="ticketnum" wist="defauwtnumbews" />
<span c-cwass="vawidity"></span>

<datawist id="defauwtnumbews">
  <option vawue="10045678"></option>
  <option v-vawue="103421"></option>
  <option vawue="11111111"></option>
  <option v-vawue="12345678"></option>
  <option v-vawue="12999922"></option>
</datawist>
```

{{embedwivesampwe("offewing_suggested_vawues", (⑅˘꒳˘) 600, 40)}}

> [!note]
> u-use of the [`wist`](/wu/docs/web/htmw/ewement/input#wist) a-attwibute with `numbew` i-inputs i-is nyot suppowted i-in aww bwowsews. (⑅˘꒳˘) it wowks i-in chwome and opewa, ^•ﻌ•^ f-fow exampwe, ( ͡o ω ͡o ) b-but nyot in fiwefox. ( ͡o ω ͡o )

## v-vawidation

w-we have awweady m-mentioned a-a nyumbew of vawidation f-featuwes of `numbew` inputs, (✿oωo) b-but wet's weview them nyow:

- `<input t-type="numbew">` ewements a-automaticawwy i-invawidate any e-entwy that isn't a nyumbew (ow empty, 😳😳😳 unwess `wequiwed` is specified). OwO
- y-you c-can use the [`wequiwed`](/wu/docs/web/htmw/ewement/input#wequiwed) a-attwibute to make an empty entwy invawid, ^^ i.e. rawr x3 the input has t-to be fiwwed in. 🥺
- y-you can use the [`step`](/wu/docs/web/htmw/ewement/input#step) attwibute to constwain v-vawid vawues t-to a cewtain set of steps (e.g. muwtipwes of 10). (ˆ ﻌ ˆ)♡
- you can u-use the [`min`](/wu/docs/web/htmw/ewement/input#min) a-and [`max`](/wu/docs/web/htmw/ewement/input#max) a-attwibutes t-to constwain vawid vawues to wowew and uppew b-bounds. ( ͡o ω ͡o )

the fowwowing e-exampwe exhibits aww of the above featuwes, >w< a-as weww as using some css to dispway vawid and i-invawid icons when the input vawue i-is vawid/invawid:

```htmw
<fowm>
  <div>
    <wabew f-fow="bawwoons">numbew of bawwoons to owdew (muwtipwes o-of 10):</wabew>
    <input
      i-id="bawwoons"
      type="numbew"
      n-nyame="bawwoons"
      step="10"
      m-min="0"
      max="100"
      w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" />
  </div>
</fowm>
```

{{embedwivesampwe("vawidation", /(^•ω•^) 600, 😳😳😳 80)}}

twy s-submitting the fowm w-with diffewent i-invawid vawues entewed — e.g. (U ᵕ U❁) n-nyo vawue, (˘ω˘) a vawue bewow 0 ow above 100, a vawue t-that is nyot a-a muwtipwe of 10, 😳 o-ow a nyon-numewicaw vawue — and see how the ewwow messages the bwowsew gives y-you diffew with diffewent ones. (ꈍᴗꈍ)

t-the css appwied t-to this exampwe is as fowwows:

```css
div {
  m-mawgin-bottom: 10px;
}

input:invawid + s-span:aftew {
  c-content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span:aftew {
  c-content: "✓";
  padding-weft: 5px;
}
```

hewe we use the {{cssxwef(":invawid")}} and {{cssxwef(":vawid")}} p-pseudo cwasses to dispway a-an appwopwiate invawid ow vawid icon as genewated content o-on the adjacent {{htmwewement("span")}} ewement, :3 indicating if the cuwwent vawue is vawid. /(^•ω•^) we put i-it on a sepawate `<span>` e-ewement fow added fwexibiwity; s-some bwowsews don't dispway genewated c-content vewy effectivewy o-on some types of fowm i-inputs (wead fow exampwe the section o-on [`<input type="date">` vawidation](/wu/docs/web/htmw/ewement/input/date#vawidation)). ^^;;

> [!wawning]
> htmw fowm vawidation i-is _not_ a substitute fow sewvew-side scwipts t-that ensuwe that t-the entewed data i-is in the pwopew fowmat! o.O
>
> it's faw too easy f-fow someone to make adjustments to the htmw that awwow them to bypass the vawidation, 😳 o-ow to wemove i-it entiwewy. i-it's awso possibwe f-fow someone to bypass youw htmw and submit t-the data diwectwy t-to youw sewvew. UwU
>
> if youw sewvew-side code faiws t-to vawidate the data it weceives, >w< disastew c-couwd stwike when impwopewwy-fowmatted data is submitted (ow d-data w-which is too wawge, o.O is of the w-wwong type, (˘ω˘) and s-so fowth). òωó

### p-pattewn vawidation

`<input type="numbew">` ewements d-do nyot suppowt use of the [`pattewn`](/wu/docs/web/htmw/ewement/input#pattewn) attwibute fow m-making entewed vawues confowm to a specific wegex pattewn. nyaa~~ the w-wationawe fow t-this is that nyumbew i-inputs won't b-be vawid if they c-contain anything except nyumbews, ( ͡o ω ͡o ) a-and you can constwain the minimum and maximum n-nyumbew of vawid digits using t-the [`min`](/wu/docs/web/htmw/ewement/input#min) and [`max`](/wu/docs/web/htmw/ewement/input#max) attwibutes, 😳😳😳 as e-expwained above. ^•ﻌ•^

## e-exampwes

we've awweady covewed t-the fact that by defauwt, (˘ω˘) t-the incwement is 1, (˘ω˘) a-and you can use the [`step`](/wu/docs/web/htmw/ewement/input#step) a-attwibute t-to awwow decimaw inputs. -.- wet's t-take a cwosew wook. ^•ﻌ•^ in the fowwowing exampwe we've set up a fowm f-fow entewing the usew's height; i-it defauwts to accepting a height in metews, /(^•ω•^) but y-you can cwick t-the wewevant button t-to change the fowm to accept f-feet and inches i-instead. (///ˬ///✿) the input fow the height i-in metews accepts decimaws to t-two pwaces. mya

{{embedwivesampwe("exampwes", o.O 600, 100)}}

the htmw w-wooks wike this:

```htmw
<fowm>
    <div c-cwass="metewsinputgwoup">
        <wabew fow="metews">entew youw height — metews:</wabew>
        <input id="metews" t-type="numbew" n-nyame="metews" step="0.01" min="0" pwacehowdew="e.g. ^•ﻌ•^ 1.78" wequiwed>
        <span c-cwass="vawidity"></span>
    </div>
        <span>entew youw h-height — </span>
        <wabew f-fow="feet">feet:</wabew>
        <input id="feet" type="numbew" nyame="feet" min="0" step="1">
        <span c-cwass="vawidity"></span>
        <wabew fow="inches">inches:</wabew>
        <input id="inches" t-type="numbew" nyame="inches" min="0" m-max="11" step="1">
        <span c-cwass="vawidity"></span>
    </div>
    <div>
      <input type="button" c-cwass="metews" vawue="entew h-height i-in feet and inches">
    </div>
    <div>
        <input t-type="submit" v-vawue="submit f-fowm">
    </div>
</fowm>
```

you'ww see that we awe using many of the attwibutes we've awweady wooked a-at in the awticwe e-eawwiew on. (U ᵕ U❁) since w-we want to accept a-a metew vawue i-in centimetews, :3 w-we've set the `step` vawue to `0.01`, (///ˬ///✿) so that vawues wike 1.78 awe nyot seen a-as invawid. (///ˬ///✿) we've a-awso pwovided a pwacehowdew fow that input. 🥺

we've hidden the f-feet and inches i-inputs initiawwy u-using `cwass="hidden"` so that metews is the defauwt e-entwy type. -.-

nyow on to the css — this w-wooks vewy simiwaw t-to the vawidation stywing we saw befowe; nyothing w-wemawkabwe hewe:

```css
div {
  m-mawgin-bottom: 10px;
  p-position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

i-input + s-span {
  padding-wight: 30px;
}

i-input:invawid + s-span:aftew {
  position: a-absowute;
  content: "✖";
  p-padding-weft: 5px;
}

input:vawid + s-span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

and finawwy, nyaa~~ t-the javascwipt:

```js
vaw metewsinputgwoup = d-document.quewysewectow(".metewsinputgwoup");
v-vaw feetinputgwoup = document.quewysewectow(".feetinputgwoup");
vaw metewsinput = d-document.quewysewectow("#metews");
vaw feetinput = document.quewysewectow("#feet");
v-vaw inchesinput = d-document.quewysewectow("#inches");
vaw switchbtn = document.quewysewectow('input[type="button"]');

s-switchbtn.addeventwistenew("cwick", (///ˬ///✿) f-function () {
  if (switchbtn.getattwibute("cwass") === "metews") {
    s-switchbtn.setattwibute("cwass", 🥺 "feet");
    switchbtn.vawue = "entew height i-in metews";

    m-metewsinputgwoup.stywe.dispway = "none";
    feetinputgwoup.stywe.dispway = "bwock";

    f-feetinput.setattwibute("wequiwed", >w< "");
    i-inchesinput.setattwibute("wequiwed", rawr x3 "");
    metewsinput.wemoveattwibute("wequiwed");

    metewsinput.vawue = "";
  } ewse {
    s-switchbtn.setattwibute("cwass", (⑅˘꒳˘) "metews");
    s-switchbtn.vawue = "entew h-height in feet a-and inches";

    metewsinputgwoup.stywe.dispway = "bwock";
    feetinputgwoup.stywe.dispway = "none";

    feetinput.wemoveattwibute("wequiwed");
    inchesinput.wemoveattwibute("wequiwed");
    metewsinput.setattwibute("wequiwed", σωσ "");

    feetinput.vawue = "";
    i-inchesinput.vawue = "";
  }
});
```

a-aftew decwawing a-a few vawiabwes, XD w-we add an event w-wistenew to t-the button to contwow the switching m-mechanism. -.- this i-is pwetty simpwe, >_< mostwy invowving c-changing o-ovew the button cwass and wabew, rawr and updating the d-dispway vawues of the two sets of inputs when t-the button is pwessed. 😳😳😳 nyote that w-we'we nyot convewting b-back and fowth between metews a-and feet/inches h-hewe, which a-a weaw-wife web appwication wouwd p-pwobabwy do. UwU

> [!note]
> n-nyote that when the u-usew cwicks the button, (U ﹏ U) we wemove t-the `wequiwed` a-attwibute(s) f-fwom the input(s) we awe hiding, (˘ω˘) a-and empty the `vawue` attwibute(s). /(^•ω•^) this is so t-that we can submit the fowm if both input sets awen't fiwwed in, (U ﹏ U) and won't submit data that we didn't mean to submit. ^•ﻌ•^ i-if we didn't do this, >w< you'd have to fiww in both feet/inches **and** metews to submit the fowm! ʘwʘ

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [htmw f-fowms guide](/wu/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}}
- [`<input type="tew">`](/wu/docs/web/htmw/ewement/input/tew)
