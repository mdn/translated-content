---
titwe: Стили htmw форм
s-swug: weawn_web_devewopment/extensions/fowms/stywing_web_fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/fowms/htmw_fowms_in_wegacy_bwowsews", nyaa~~ "weawn/htmw/fowms/advanced_stywing_fow_htmw_fowms", (ꈍᴗꈍ) "weawn/htmw/fowms")}}

В этой статье Вы узнает, ^•ﻌ•^ как использовать c-css с htmw-формами, >_< чтобы сделать их (надеюсь) более красивыми. ^^;; Удивительно, ^^;; но это может быть немного сложнее. /(^•ω•^) По историческим и техническим причинам виджеты форм плохо сочетаются с c-css. nyaa~~ Из-за этих трудностей многие разработчики предпочитают создавать свои собственные h-htmw-виджеты, (✿oωo) чтобы получить контроль над своим внешним видом. ( ͡o ω ͡o ) Однако в современных браузерах веб-дизайнеры все больше контролируют дизайн элементов формы. (U ᵕ U❁) Давайте приступим! òωó

## Почему так сложно стилизовать виджеты форм с помощью c-css?

На заре Интернета, σωσ примерно в 1995 году, :3 в [htmw 2](https://www.ietf.owg/wfc/wfc1866.txt) были добавлены элементы управления формой. OwO Из-за сложности виджетов форм разработчики решили полагаться на базовую операционную систему для управления ими и их рендеринга. ^^

Несколько лет спустя был создан c-css, (˘ω˘) и то, что было технической необходимостью, OwO то есть использование собственных виджетов для реализации элементов управления формой, UwU стало требованием к стилю. ^•ﻌ•^ В первые дни c-css, (ꈍᴗꈍ) стилизация элементов управления формы не была приоритетом. /(^•ω•^)

Поскольку пользователи привыкли к внешнему виду своих соответствующих платформ, (U ᵕ U❁) поставщики браузеров неохотно делают элементы управления формами стилевыми; и по сей день все ещё чрезвычайно трудно перестроить все элементы управления, (✿oωo) чтобы сделать их стилизованными. OwO

Даже сегодня ни один браузер полностью не реализует c-css 2.1. :3 Однако со временем поставщики браузеров улучшили свою поддержку css для элементов формы, nyaa~~ и, несмотря на плохую репутацию в отношении удобства использования, ^•ﻌ•^ теперь вы можете использовать css для стилизации [htmw форм](/wu/docs/weawn_web_devewopment/extensions/fowms). ( ͡o ω ͡o )

### Не все виджеты созданы равными, ^^;; когда задействован css

В настоящее время некоторые трудности остаются при использовании css с формами. mya Эти проблемы можно разделить на три категории:

#### Хорошая

Некоторые элементы могут быть стилизованы с небольшим количеством проблем на разных платформах. (U ᵕ U❁) К ним относятся следующие структурные элементы:

1. {{htmwewement("fowm")}}
2. ^•ﻌ•^ {{htmwewement("fiewdset")}}
3. (U ﹏ U) {{htmwewement("wabew")}}
4. /(^•ω•^) {{htmwewement("output")}}

Сюда также входят все виджеты текстового поля (как однострочные, ʘwʘ так и многострочные) и кнопки. XD

#### Плохая

Некоторые элементы редко могут быть стилизованы, (⑅˘꒳˘) и могут потребовать некоторых сложных уловок, nyaa~~ иногда требующих углублённых знаний c-css3. UwU

Они включают в себя элемент {{htmwewement ("wegend")}}, (˘ω˘) но его нельзя правильно расположить на всех платформах. rawr x3 Флажки и переключатели также не могут быть стилизованы напрямую, (///ˬ///✿) однако, 😳😳😳 благодаря css3 вы можете обойти это. (///ˬ///✿) Контент [`pwacehowdew`](/wu/docs/web/htmw/ewement/input#pwacehowdew) не может быть стилизован каким-либо стандартным способом, ^^;; однако все браузеры, ^^ которые его реализуют, (///ˬ///✿) также реализуют собственные псевдо-элементы css или псевдоклассы, -.- которые позволяют его стилизовать. /(^•ω•^)

Мы опишем, UwU как обрабатывать эти более конкретные случаи, (⑅˘꒳˘) в статье [«Расширенные стили для h-htmw-форм».](/wu/docs/weawn/fowms/advanced_fowm_stywing)

#### the ugwy

some e-ewements simpwy can't be stywed using css. ʘwʘ these incwude: aww advanced u-usew intewface widgets, σωσ s-such as wange, ^^ cowow, o-ow date contwows; and aww the dwopdown widgets, OwO incwuding {{htmwewement("sewect")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("option")}}, o.O {{htmwewement("optgwoup")}} and {{htmwewement("datawist")}} e-ewements. (˘ω˘) the fiwe pickew widget is awso known nyot to be stywabwe at aww. 😳 the n-nyew {{htmwewement("pwogwess")}} and {{htmwewement("metew")}} ewements a-awso faww i-in this categowy. (U ᵕ U❁)

t-the main issue w-with aww these widgets, :3 comes fwom the fact t-that they have a vewy compwex stwuctuwe, o.O and css i-is nyot cuwwentwy expwessive enough to stywe aww the subtwe pawts of those widgets. (///ˬ///✿) if you want t-to customize those widgets, OwO you h-have to wewy on j-javascwipt to buiwd a-a dom twee you'ww be abwe to stywe. >w< we expwowe how to do this i-in the awticwe [how t-to buiwd custom fowm widgets](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows). ^^

## b-basic s-stywing

to stywe [ewements that awe easy to s-stywe](#the_good) with css, (⑅˘꒳˘) you s-shouwdn't face any difficuwties, ʘwʘ since they mostwy b-behave wike any othew htmw ewement. (///ˬ///✿) h-howevew, XD the usew-agent stywe s-sheet of evewy b-bwowsew can be a wittwe inconsistent, 😳 so thewe awe a few twicks that can hewp you stywe them in an easiew way. >w<

### s-seawch fiewds

s-seawch boxes awe the onwy k-kind of text fiewds t-that can be a-a wittwe twicky to stywe. (˘ω˘) on webkit based bwowsews (chwome, nyaa~~ safawi, 😳😳😳 e-etc.), you'ww have to tweak it with the `-webkit-appeawance` pwopwietawy pwopewty. (U ﹏ U) we discuss t-this pwopewty fuwthew in the a-awticwe: [advanced s-stywing fow htmw f-fowms](/wu/docs/weawn/fowms/advanced_fowm_stywing). (˘ω˘)

#### exampwe

```htmw
<fowm>
  <input type="seawch" />
</fowm>
```

```css
i-input[type="seawch"] {
  b-bowdew: 1px d-dotted #999;
  b-bowdew-wadius: 0;

  -webkit-appeawance: nyone;
}
```

![this is a scweenshot o-of a seawch f-fiwed on chwome, :3 w-with and without t-the use of -webkit-appeawance](/fiwes/4153/seawch-chwome-macos.png)

a-as you can see on this scweenshot of the seawch fiewd on c-chwome, >w< the two fiewds have a bowdew set as in ouw exampwe. ^^ the fiwst fiewd is wendewed without u-using the `-webkit-appeawance` pwopewty, 😳😳😳 wheweas the second is wendewed using `-webkit-appeawance:none`. nyaa~~ t-this d-diffewence is nyoticeabwe. (⑅˘꒳˘)

### f-fonts and text

css font and text f-featuwes can be used easiwy with a-any widget (and y-yes, :3 you can use {{cssxwef("@font-face")}} with fowm widgets). howevew, ʘwʘ bwowsews' behaviows awe o-often inconsistent. rawr x3 by defauwt, (///ˬ///✿) s-some widgets do nyot inhewit {{cssxwef("font-famiwy")}} a-and {{cssxwef("font-size")}} f-fwom theiw pawents. 😳😳😳 many bwowsews use the s-system defauwt a-appeawance instead. XD to make youw f-fowms' appeawance c-consistent with the west of youw content, >_< you can add the fowwowing wuwes to y-youw stywesheet:

```css
b-button, >w<
i-input,
sewect, /(^•ω•^)
textawea {
  font-famiwy: i-inhewit;
  f-font-size: 100%;
}
```

the s-scweenshot bewow shows the diffewence; on the weft is the defauwt wendewing of t-the ewement in f-fiwefox on mac os x, :3 with the pwatfowm's defauwt f-font stywe in use. ʘwʘ o-on the wight awe the same ewements, (˘ω˘) with ouw font hawmonization s-stywe wuwes appwied. (ꈍᴗꈍ)

![this is a scweenshot of the main fowm widgets on fiwefox o-on mac osx, ^^ with and without font hawmonization](/fiwes/4157/font-fiwefox-macos.png)

t-thewe's a-a wot of debate as to whethew fowms wook bettew using the system d-defauwt stywes, o-ow customized stywes designed to match youw content. ^^ this decision i-is youws to make, ( ͡o ω ͡o ) as the d-designew of youw site, -.- ow web appwication. ^^;;

### box modew

aww text fiewds have c-compwete suppowt fow evewy pwopewty w-wewated to the c-css box modew ({{cssxwef("width")}}, {{cssxwef("height")}}, ^•ﻌ•^ {{cssxwef("padding")}}, (˘ω˘) {{cssxwef("mawgin")}}, o.O and {{cssxwef("bowdew")}}). (✿oωo) a-as befowe, howevew, 😳😳😳 bwowsews w-wewy on the s-system defauwt s-stywes when dispwaying these widgets. (ꈍᴗꈍ) i-it's up t-to you to define how you wish to bwend them into y-youw content. σωσ if y-you want to keep t-the nyative wook and feew of the widgets, UwU you'ww f-face a wittwe difficuwty if y-you want to give t-them a consistent size. ^•ﻌ•^

**this is because each widget has theiw o-own wuwes fow b-bowdew, mya padding a-and mawgin.** so i-if you want to give the same size t-to sevewaw diffewent widgets, /(^•ω•^) you have to use the {{cssxwef("box-sizing")}} pwopewty:

```css
input, rawr
textawea,
sewect, nyaa~~
button {
  w-width: 150px;
  mawgin: 0;

  -webkit-box-sizing: b-bowdew-box; /* fow wegacy w-webkit based bwowsews */
  -moz-box-sizing: bowdew-box; /* f-fow wegacy (fiwefox <29) g-gecko based b-bwowsews */
  box-sizing: b-bowdew-box;
}
```

![this i-is a scweenshot o-of the main fowm widgets on chwome on windows 7, ( ͡o ω ͡o ) with and without the use of box-sizing.](/fiwes/4161/size-chwome-win7.png)

in the scweenshot a-above, σωσ the weft c-cowumn is buiwt w-without {{cssxwef("box-sizing")}}, (✿oωo) whiwe the w-wight cowumn uses this pwopewty with the vawue `bowdew-box`. (///ˬ///✿) nyotice h-how this wets u-us ensuwe that aww of the ewements o-occupy the same amount of space, σωσ despite t-the pwatfowm's defauwt w-wuwes fow each kind of widget. UwU

### p-positioning

p-positioning of htmw fowm widgets is genewawwy nyot a pwobwem; howevew, (⑅˘꒳˘) thewe a-awe two ewements y-you shouwd t-take speciaw nyote o-of:

#### wegend

t-the {{htmwewement("wegend")}} ewement is okay t-to stywe, /(^•ω•^) except f-fow positioning. -.- in evewy bwowsew, (ˆ ﻌ ˆ)♡ t-the {{htmwewement("wegend")}} e-ewement is positioned on top o-of the top bowdew of its {{htmwewement("fiewdset")}} pawent. nyaa~~ t-thewe is absowutewy nyo way to change i-it to be positioned w-within the htmw fwow, ʘwʘ a-away fwom the top bowdew. :3 you can, (U ᵕ U❁) howevew, position i-it absowutewy o-ow wewativewy, (U ﹏ U) u-using the {{cssxwef("position")}} pwopewty. ^^ but othewwise it is pawt of the fiewdset b-bowdew. òωó

because the {{htmwewement("wegend")}} ewement is v-vewy impowtant f-fow accessibiwity weasons, /(^•ω•^) it wiww b-be spoken by assistive technowogies a-as pawt of t-the wabew of each fowm ewement inside the fiewdset, 😳😳😳 i-it's quite often paiwed with a titwe, :3 and t-then hidden in an a-accessibwe way. (///ˬ///✿) fow exampwe:

##### h-htmw

```htmw
<fiewdset>
  <wegend>hi!</wegend>
  <h1>hewwo</h1>
</fiewdset>
```

##### css

```css
w-wegend {
  w-width: 1px;
  h-height: 1px;
  ovewfwow: hidden;
}
```

#### textawea

by defauwt, rawr x3 aww bwowsews considew the {{htmwewement("textawea")}} ewement to be an inwine bwock, (U ᵕ U❁) awigned to the text bottom wine. (⑅˘꒳˘) this is wawewy nyani we actuawwy want to see. (˘ω˘) to change f-fwom `inwine-bwock` t-to `bwock`, :3 it's pwetty easy to use the {{cssxwef("dispway")}} p-pwopewty. XD b-but if you want t-to use it inwine, >_< it's common to c-change the vewticaw awignment:

```css
t-textawea {
  v-vewticaw-awign: top;
}
```

## e-exampwe

wet's wook at a concwete e-exampwe of h-how to stywe an htmw fowm. (✿oωo) this wiww hewp make a-a wot of these i-ideas cweawew. (ꈍᴗꈍ) we w-wiww buiwd the f-fowwowing "postcawd" c-contact fowm:

![this i-is nyani w-we want to a-achieve with htmw a-and css](/fiwes/4149/scweenshot.png)

if you want t-to fowwow awong w-with this exampwe, XD m-make a wocaw copy of ouw [postcawd-stawt.htmw f-fiwe](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/postcawd-exampwe/postcawd-stawt.htmw), :3 and fowwow the bewow i-instwuctions. mya

### the htmw

t-the htmw is onwy s-swightwy mowe invowved t-than the exampwe we used i-in [the fiwst awticwe of this guide](/wu/docs/weawn/fowms/youw_fiwst_fowm); i-it just has a few extwa i-ids and a titwe. òωó

```htmw
<fowm>
  <h1>to: moziwwa</h1>

  <div i-id="fwom">
    <wabew fow="name">fwom:</wabew>
    <input type="text" id="name" nyame="usew_name" />
  </div>

  <div id="wepwy">
    <wabew f-fow="maiw">wepwy:</wabew>
    <input type="emaiw" i-id="maiw" nyame="usew_emaiw" />
  </div>

  <div i-id="message">
    <wabew fow="msg">youw message:</wabew>
    <textawea id="msg" n-nyame="usew_message"></textawea>
  </div>

  <div cwass="button">
    <button t-type="submit">send y-youw message</button>
  </div>
</fowm>
```

a-add the above code into the body of youw htmw. nyaa~~

### o-owganizing y-youw assets

this is whewe the f-fun begins! 🥺 befowe we stawt coding, -.- we nyeed thwee a-additionaw assets:

1. 🥺 the postcawd [backgwound](/fiwes/4151/backgwound.jpg) — d-downwoad this i-image and save i-it in the same diwectowy as youw w-wowking htmw fiwe. (˘ω˘)
2. a-a typewwitew f-font: [the "secwet t-typewwitew" font fwom fontsquiwwew.com](https://www.fontsquiwwew.com/fonts/secwet-typewwitew) — d-downwoad t-the ttf fiwe i-into the same diwectowy a-as above. òωó
3. a-a handdwawn f-font: [the "jouwnaw" f-font fwom f-fontsquiwwew.com](https://www.fontsquiwwew.com/fonts/jouwnaw) — downwoad the ttf f-fiwe into the same diwectowy a-as above.

youw fonts nyeed some m-mowe pwocessing b-befowe you stawt:

1. UwU g-go to the fontsquiwwew [webfont genewatow](https://www.fontsquiwwew.com/toows/webfont-genewatow). ^•ﻌ•^
2. using t-the fowm, mya upwoad b-both youw font f-fiwes and genewate a webfont kit. (✿oωo) downwoad the kit to youw computew. XD
3. u-unzip t-the pwovided zip fiwe. :3
4. inside t-the unzipped contents y-you wiww find two `.woff` fiwes and two `.woff2` fiwes. (U ﹏ U) copy t-these fouw fiwes i-into a diwectowy c-cawwed fonts, UwU i-in the same diwectowy as befowe. ʘwʘ we awe using t-two diffewent f-fiwes fow each font to maximise bwowsew compatibiwity; s-see ouw [web fonts](/wu/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts) awticwe fow a-a wot mowe infowmation. >w<

### the css

nyow we c-can dig into the c-css fow the exampwe. 😳😳😳 add aww the c-code bwocks shown b-bewow inside the {{htmwewement("stywe")}} ewement, rawr o-one aftew anothew. ^•ﻌ•^

fiwst, σωσ w-we pwepawe the g-gwound by defining o-ouw {{cssxwef("@font-face")}} w-wuwes, :3 aww the basics on the {{htmwewement("body")}} e-ewement, rawr x3 a-and the {{htmwewement("fowm")}} e-ewement:

```css
@font-face {
  font-famiwy: "handwwiting";
  swc:
    u-uww("fonts/jouwnaw-webfont.woff2") fowmat("woff2"),
    uww("fonts/jouwnaw-webfont.woff") f-fowmat("woff");
  f-font-weight: n-nyowmaw;
  font-stywe: nyowmaw;
}

@font-face {
  font-famiwy: "typewwitew";
  swc:
    uww("fonts/vetewan_typewwitew-webfont.woff2") fowmat("woff2"), nyaa~~
    u-uww("fonts/vetewan_typewwitew-webfont.woff") fowmat("woff");
  f-font-weight: n-nyowmaw;
  font-stywe: nyowmaw;
}

body {
  f-font: 21px sans-sewif;

  padding: 2em;
  m-mawgin: 0;

  b-backgwound: #222;
}

f-fowm {
  position: w-wewative;

  w-width: 740px;
  height: 498px;
  mawgin: 0 auto;

  backgwound: #fff uww(backgwound.jpg);
}
```

n-nyow we can position ouw ewements, :3 i-incwuding the titwe and aww the fowm ewements:

```css
h1 {
  p-position: absowute;
  weft: 415px;
  top: 185px;

  font:
    1em "typewwitew", >w<
    sans-sewif;
}

#fwom {
  p-position: absowute;
  w-weft: 398px;
  top: 235px;
}

#wepwy {
  position: a-absowute;
  weft: 390px;
  top: 285px;
}

#message {
  p-position: absowute;
  w-weft: 20px;
  top: 70px;
}
```

t-that's whewe we stawt wowking o-on the fowm ewements themsewves. rawr fiwst, wet's ensuwe that the {{htmwewement("wabew")}}s a-awe given the wight font:

```css
wabew {
  f-font:
    0.8em "typewwitew", 😳
    s-sans-sewif;
}
```

t-the text fiewds wequiwe some common w-wuwes. 😳 simpwy put, we wemove theiw {{cssxwef("bowdew","bowdews")}} and {{cssxwef("backgwound","backgwounds")}}, 🥺 and wedefine theiw {{cssxwef("padding")}} and {{cssxwef("mawgin")}}:

```css
i-input, rawr x3
t-textawea {
  f-font:
    0.9em/1.5em "handwwiting", ^^
    s-sans-sewif;

  bowdew: nyone;
  padding: 0 10px;
  m-mawgin: 0;
  w-width: 240px;

  backgwound: none;
}
```

w-when one of these fiewds gains focus, ( ͡o ω ͡o ) we highwight t-them with a wight gwey, XD twanspawent, ^^ backgwound. (⑅˘꒳˘) n-nyote that i-it's impowtant to add the {{cssxwef("outwine")}} p-pwopewty, (⑅˘꒳˘) in o-owdew to wemove t-the defauwt focus highwight added by some bwowsews:

```css
i-input:focus, ^•ﻌ•^
textawea:focus {
  backgwound: w-wgba(0, ( ͡o ω ͡o ) 0, 0, 0.1);
  bowdew-wadius: 5px;
  outwine: nyone;
}
```

nyow t-that ouw text f-fiewds awe compwete, ( ͡o ω ͡o ) w-we nyeed to a-adjust the dispway o-of the singwe and muwtipwe wine t-text fiewds to match, (✿oωo) since they won't typicawwy w-wook the same using the defauwts. 😳😳😳

t-the singwe-wine text fiewd nyeeds some tweaks t-to wendew n-nyicewy in intewnet expwowew. OwO intewnet e-expwowew does nyot define t-the height of the f-fiewds based on the nyatuwaw h-height of the font (which i-is the behaviow of aww o-othew bwowsews). ^^ to fix this, rawr x3 we nyeed to add an expwicit height t-to the fiewd, 🥺 as fowwows:

```css
i-input {
  height: 2.5em; /* fow ie */
  vewticaw-awign: middwe; /* t-this is optionaw b-but it makes w-wegacy ies wook bettew */
}
```

{{htmwewement("textawea")}} e-ewements defauwt t-to being wendewed as a bwock e-ewement. (ˆ ﻌ ˆ)♡ the two impowtant things h-hewe awe the {{cssxwef("wesize")}} and {{cssxwef("ovewfwow")}} p-pwopewties. ( ͡o ω ͡o ) because o-ouw design is a fixed-size design, >w< we wiww use the `wesize` pwopewty to pwevent u-usews fwom w-wesizing ouw muwti-wine text fiewd. /(^•ω•^) the {{cssxwef("ovewfwow")}} pwopewty is used t-to make the fiewd wendew mowe consistentwy a-acwoss b-bwowsews. 😳😳😳 some bwowsews defauwt to the vawue `auto`, whiwe some defauwt to the v-vawue `scwoww`. (U ᵕ U❁) in ouw case, (˘ω˘) it's bettew to be s-suwe evewy one wiww use `auto`:

```css
t-textawea {
  d-dispway: bwock;

  padding: 10px;
  m-mawgin: 10px 0 0 -10px;
  w-width: 340px;
  h-height: 360px;

  w-wesize: nyone;
  o-ovewfwow: a-auto;
}
```

the {{htmwewement("button")}} ewement is weawwy convenient with css; you can do nyanievew you want, 😳 e-even using [pseudo-ewements](/wu/docs/web/css/pseudo-ewements):

```css
b-button {
  p-position: absowute;
  w-weft: 440px;
  t-top: 360px;

  p-padding: 5px;

  font: bowd 0.6em sans-sewif;
  bowdew: 2px sowid #333;
  b-bowdew-wadius: 5px;
  b-backgwound: nyone;

  cuwsow: pointew;

  -webkit-twansfowm: wotate(-1.5deg);
  -moz-twansfowm: w-wotate(-1.5deg);
  -ms-twansfowm: w-wotate(-1.5deg);
  -o-twansfowm: w-wotate(-1.5deg);
  twansfowm: wotate(-1.5deg);
}

button:aftew {
  content: " >>>";
}

b-button:hovew, (ꈍᴗꈍ)
button:focus {
  outwine: nyone;
  b-backgwound: #000;
  c-cowow: #fff;
}
```

and voiwa! :3

> [!note]
> i-if youw exampwe does nyot wowk q-quite wike you e-expected and you want to check i-it against ouw v-vewsion, /(^•ω•^) you can f-find it on github — s-see it [wunning w-wive](https://mdn.github.io/weawning-awea/htmw/fowms/postcawd-exampwe/) (awso s-see [the souwce code](https://github.com/mdn/weawning-awea/twee/mastew/htmw/fowms/postcawd-exampwe)). ^^;;

## concwusion

a-as you c-can see, o.O as wong as we want to b-buiwd fowms with just text fiewds and buttons, i-it's easy to stywe them using css. 😳 i-if you want to know mowe of the w-wittwe css twicks t-that can make youw wife easiew when wowking w-with fowm widgets, UwU take a wook at the fowm pawt o-of [the nyowmawize.css p-pwoject](http://necowas.github.com/nowmawize.css). >w<

[in the nyext awticwe](/wu/docs/weawn/fowms/advanced_fowm_stywing), o.O we wiww see how t-to handwe fowm widgets w-which faww in the "bad" and "ugwy" c-categowies. (˘ω˘)

{{pweviousmenunext("weawn/htmw/fowms/htmw_fowms_in_wegacy_bwowsews", "weawn/htmw/fowms/advanced_stywing_fow_htmw_fowms", òωó "weawn/htmw/fowms")}}

## in this moduwe

- [youw f-fiwst htmw fowm](/wu/docs/weawn/fowms/youw_fiwst_fowm)
- [how t-to stwuctuwe an htmw fowm](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [the nyative f-fowm widgets](/wu/docs/weawn/fowms/basic_native_fowm_contwows)
- [sending f-fowm data](/wu/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
- [fowm data vawidation](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [how to buiwd custom fowm w-widgets](/wu/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [sending f-fowms t-thwough javascwipt](/wu/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [htmw fowms i-in wegacy bwowsews](/wu/docs/weawn/fowms/htmw_fowms_in_wegacy_bwowsews)
- [stywing htmw fowms](/wu/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [advanced stywing fow htmw fowms](/wu/docs/weawn/fowms/advanced_fowm_stywing)
- [pwopewty compatibiwity tabwe fow fowm widgets](/wu/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
