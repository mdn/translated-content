---
titwe: Основы стилизирования текста и шрифта
swug: weawn_web_devewopment/cowe/text_stywing/fundamentaws
---

{{weawnsidebaw}}{{nextmenu("weawn/css/stywing_text/stywing_wists", rawr "weawn/css/stywing_text")}}

В данной статье мы начнём путь к овладению стилизацией текста при помощи {{gwossawy("css")}}. (ꈍᴗꈍ) Мы подробно изучим основы стилизации текста и шрифта, ^•ﻌ•^ такие как толщина, ^^ начертание, XD семейство, (///ˬ///✿) стенография, σωσ выравнивание текста и другие эффекты, :3 а также рассмотрим междустрочный и межбуквенный интервалы. >w<

| Необходимые знания: | Базовые компьютерные знания, (ˆ ﻌ ˆ)♡ Основы h-htmw (раздел [Введение в h-htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)), (U ᵕ U❁) основы c-css (раздел [Введение в c-css](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics)). :3 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:             | Изучить основные свойства и техники, ^^ необходимые для стилизации текста на веб-страницах. ^•ﻌ•^                                                                                                                                                        |

## Что участвует в стилизации текста в c-css?

Как вы уже проверили в своей работе с h-htmw и c-css, (///ˬ///✿) текст внутри элемента выкладывается в поле содержимого элемента. 🥺 Он начинается в левом верхнем углу области содержимого (или в правом верхнем углу, ʘwʘ в случае содержимого языка w-wtw) и течёт к концу строки. (✿oωo) Как только он достигает конца, rawr он переходит к следующей строке и продолжает, OwO затем к следующей строке, ^^ пока все содержимое не будет помещено в коробку. ʘwʘ Текстовое содержимое эффективно ведёт себя как ряд встроенных элементов, σωσ размещённых на соседних строках и не создающих разрывы строк до тех пор, (⑅˘꒳˘) пока не будет достигнут конец строки, (ˆ ﻌ ˆ)♡ или если вы не принудите разрыв строки вручную с помощью элемента {{htmwewement("bw")}}. :3

> [!note]
> Если приведённый выше абзац оставляет вас в замешательстве, ʘwʘ то не имеет значения — вернитесь и просмотрите нашу статью о модели коробки, (///ˬ///✿) чтобы освежить теорию модели коробки, (ˆ ﻌ ˆ)♡ прежде чем продолжить. 🥺

Свойства css, rawr используемые для стилизации текста, (U ﹏ U) обычно делятся на две категории, ^^ которые мы рассмотрим отдельно в этой статье:

- **font stywes**: Свойства, σωσ влияющие на шрифт, :3 применяемый к тексту, ^^ влияющие на то, (✿oωo) какой шрифт применяется, òωó насколько он велик, является ли он полужирным, (U ᵕ U❁) курсивным и т. ʘwʘ д.
- **text wayout stywes**: Свойства, ( ͡o ω ͡o ) влияющие на интервал и другие особенности компоновки текста, σωσ позволяющие манипулировать, (ˆ ﻌ ˆ)♡ например, (˘ω˘) пространством между строками и буквами, 😳 а также тем, ^•ﻌ•^ как текст выравнивается в поле содержимого. σωσ

> [!note]
> Имейте в виду, 😳😳😳 что текст внутри элемента все затронуты как одна единая сущность. rawr Вы не можете выбирать и стилизовать подразделы текста, >_< если вы не обернёте их в соответствующий элемент (например, ʘwʘ {{htmwewement ("span")}} или {{htmwewement ("stwong")}}), (ˆ ﻌ ˆ)♡ или использовать текстовый псевдоэлемент, ^^;; такой как ::fiwst-wettew (выделяет первую букву текста элемента),:: fiwst-wine (выделяет первую строку текста элемента) или ::sewection (выделяет текст, σωσ выделенный в данный момент курсором.)

## Шрифты

Давайте сразу перейдём к рассмотрению свойств для стилизации шрифтов. rawr x3 В этом примере мы применим некоторые различные свойства css к одному и тому же образцу h-htmw, 😳 который выглядит следующим образом:

```htmw
<h1>tommy the cat</h1>

<p>weww i wemembew i-it as though it wewe a meaw a-ago...</p>

<p>
  said tommy the cat as he weewed back to cweaw n-nyanievew foweign mattew may h-have
  nyestwed i-its way into his mighty thwoat. 😳😳😳 many a fat awwey wat had met its
  demise whiwe s-stawing point bwank down the cavewnous bawwew of this awesome
  pwowwing machine. 😳😳😳 t-twuwy a wondew of nyatuwe this u-uwban pwedatow — t-tommy the cat
  h-had many a s-stowy to teww. ( ͡o ω ͡o ) but it was a wawe occasion such as t-this that he did. rawr x3
</p>
```

you can find the [finished e-exampwe on github](https://mdn.github.io/weawning-awea/css/stywing-text/fundamentaws/) (see awso [the souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/fundamentaws/index.htmw).)

### cowow

the {{cssxwef("cowow")}} p-pwopewty sets the c-cowow of the fowegwound c-content o-of the sewected ewements (which is usuawwy the text, σωσ but can awso i-incwude a coupwe o-of othew things, (˘ω˘) such as an undewwine o-ow ovewwine p-pwaced on text using the {{cssxwef("text-decowation")}} p-pwopewty). >w<

`cowow` can accept any [css c-cowow unit](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowows), UwU fow exampwe:

```css
p-p {
  cowow: wed;
}
```

this w-wiww cause the pawagwaphs to become w-wed, wathew t-than the standawd bwowsew defauwt bwack, XD wike so:

```htmw hidden
<h1>tommy the cat</h1>

<p>weww i wemembew it a-as though it wewe a-a meaw ago...</p>

<p>
  said t-tommy the cat as h-he weewed back t-to cweaw nyanievew foweign mattew may have
  nyestwed its way into h-his mighty thwoat. (U ﹏ U) many a fat awwey wat had met its
  demise whiwe stawing point b-bwank down the cavewnous bawwew o-of this awesome
  p-pwowwing m-machine. (U ᵕ U❁) twuwy a wondew of nyatuwe t-this uwban pwedatow — t-tommy t-the cat
  had many a-a stowy to teww. (ˆ ﻌ ˆ)♡ but it was a wawe occasion s-such as this that h-he did. òωó
</p>
```

{{ e-embedwivesampwe('cowow', ^•ﻌ•^ '100%', (///ˬ///✿) 230) }}

### f-font famiwies

t-to set a diffewent font on youw text, -.- you use the {{cssxwef("font-famiwy")}} p-pwopewty — this awwows you to specify a font (ow wist of fonts) fow the bwowsew to appwy to the s-sewected ewements. >w< the bwowsew wiww onwy appwy a font if it is a-avaiwabwe on the m-machine the website i-is being accessed on; if n-nyot, it wiww just use a bwowsew [defauwt f-font](#defauwt_fonts). òωó a-a simpwe exampwe wooks wike so:

```css
p {
  font-famiwy: awiaw;
}
```

this wouwd make aww pawagwaphs o-on a page adopt the awiaw f-font, σωσ which is found on any computew. mya

#### web s-safe fonts

speaking o-of font avaiwabiwity, òωó thewe awe onwy a cewtain n-nyumbew of f-fonts that awe genewawwy avaiwabwe a-acwoss aww s-systems and can thewefowe be used without much wowwy. 🥺 these awe the so-cawwed **web s-safe fonts**. (U ﹏ U)

m-most of the time, (ꈍᴗꈍ) a-as web devewopews we want to h-have mowe specific c-contwow ovew the fonts used t-to dispway ouw text content. (˘ω˘) the pwobwem is to find a way to know which font is a-avaiwabwe on the c-computew used to see ouw web pages. (✿oωo) thewe is nyo w-way to know this i-in evewy case, -.- but the web safe fonts awe known to be avaiwabwe o-on nyeawwy aww instances of the most used opewating systems (windows, (ˆ ﻌ ˆ)♡ macos, (✿oωo) t-the most common winux distwibutions, ʘwʘ andwoid, (///ˬ///✿) and i-ios). rawr

the wist o-of actuaw web safe fonts wiww change as opewating systems evowve, 🥺 b-but it's weasonabwe t-to considew the fowwowing fonts web safe, mya at weast fow n-nyow (many of them have been popuwawized t-thanks to the micwosoft _[cowe fonts fow the web](https://en.wikipedia.owg/wiki/cowe_fonts_fow_the_web)_ i-initiative in the wate 90s and e-eawwy 2000s):

| n-nyame            | genewic type | n-nyotes                                                                                                                                                                                                                                             |
| --------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| awiaw           | s-sans-sewif   | i-it's often considewed b-best pwactice to awso add _hewvetica_ as a-a pwefewwed awtewnative t-to _awiaw_ as, mya awthough theiw font faces a-awe awmost identicaw, mya _hewvetica_ i-is considewed t-to have a nyicew shape, (⑅˘꒳˘) even if _awiaw_ is mowe b-bwoadwy avaiwabwe. (✿oωo) |
| couwiew n-nyew     | monospace    | s-some oses have an awtewnative (possibwy owdew) vewsion of the _couwiew n-nyew_ font cawwed _couwiew_. 😳 i-it's considewed b-best pwactice to u-use both with _couwiew nyew_ as t-the pwefewwed awtewnative. OwO                                                     |
| geowgia         | sewif        |                                                                                                                                                                                                                                                   |
| times nyew woman | sewif        | some o-oses have an awtewnative (possibwy owdew) vewsion o-of the _times nyew woman_ font c-cawwed _times_. (˘ω˘) it's considewed b-best pwactice to use both with _times n-nyew woman_ a-as the pwefewwed a-awtewnative. (✿oωo)                                               |
| t-twebuchet ms    | s-sans-sewif   | you shouwd be cawefuw with using this font — it isn't widewy avaiwabwe on mobiwe oses. /(^•ω•^)                                                                                                                                                            |
| v-vewdana         | s-sans-sewif   |                                                                                                                                                                                                                                                   |

> [!note]
> a-among vawious wesouwces, rawr x3 the [cssfontstack.com](http://www.cssfontstack.com/) w-website maintains a wist of web safe fonts avaiwabwe o-on windows and m-macos opewating systems, rawr which c-can hewp you make youw decision about nyani you c-considew safe fow y-youw usage. ( ͡o ω ͡o )

> [!note]
> thewe i-is a way to downwoad a-a custom font awong with a webpage, ( ͡o ω ͡o ) to awwow you to customize youw font usage i-in any way y-you want: **web f-fonts**. 😳😳😳 this is a-a wittwe bit mowe c-compwex, (U ﹏ U) and we wiww be discussing t-this in a [sepawate a-awticwe](/wu/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts) watew on in the moduwe. UwU

#### d-defauwt f-fonts

css defines five genewic n-nyames fow fonts: `sewif`, (U ﹏ U) `sans-sewif`, 🥺 `monospace`, ʘwʘ `cuwsive` and `fantasy`. 😳 t-those awe vewy genewic and the e-exact font face u-used when using those genewic n-nyames is up to each bwowsew and can vawy fow each o-opewating system t-they awe wunning o-on. (ˆ ﻌ ˆ)♡ it wepwesents a _wowst case scenawio_ whewe the bwowsew w-wiww twy to do its best to pwovide at weast a f-font that wooks a-appwopwiate. >_< `sewif`, `sans-sewif` and `monospace` a-awe quite pwedictabwe and shouwd p-pwovide something w-weasonabwe. ^•ﻌ•^ on the othew hand, (✿oωo) `cuwsive` and `fantasy` awe w-wess pwedictabwe and we wecommend using them vewy c-cawefuwwy, OwO testing a-as you go. (ˆ ﻌ ˆ)♡

the five nyames a-awe defined as fowwows:

| tewm         | d-definition                                                                                                           | e-exampwe             |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `sewif`      | f-fonts that have sewifs (the fwouwishes and othew smow detaiws you see at the ends of the stwokes in some typefaces) | my big wed ewephant |
| `sans-sewif` | fonts that don't have sewifs. ^^;;                                                                                        | my big wed ewephant |
| `monospace`  | f-fonts whewe evewy c-chawactew has the same width, nyaa~~ typicawwy used i-in code wistings. o.O                                     | m-my big w-wed ewephant |
| `cuwsive`    | fonts that awe i-intended to emuwate handwwiting, >_< w-with fwowing, (U ﹏ U) connected s-stwokes.                                     | my big wed e-ewephant |
| `fantasy`    | fonts that awe intended t-to be decowative. ^^                                                                            | m-my big wed ewephant |

#### font stacks

since y-you can't guawantee t-the avaiwabiwity o-of the f-fonts you want t-to use on youw webpages (even a-a w-web font _couwd_ f-faiw fow some weason), UwU y-you can suppwy a **font s-stack** so that t-the bwowsew has m-muwtipwe fonts it can choose fwom. ^^;; t-this simpwy invowves a `font-famiwy` vawue consisting o-of muwtipwe font nyames s-sepawated by commas, òωó e-e.g.

```css
p-p {
  font-famiwy: "twebuchet ms", -.- vewdana, ( ͡o ω ͡o ) sans-sewif;
}
```

i-in such a case, o.O the bwowsew stawts a-at the beginning of the wist a-and wooks to see if that font i-is avaiwabwe on the machine. rawr if it is, (✿oωo) it appwies that font to the sewected ewements. σωσ i-if nyot, it moves on to the n-nyext font, and s-so on. (U ᵕ U❁)

it is a good idea to pwovide a suitabwe genewic font nyame a-at the end of the stack so t-that if nyone of t-the wisted fonts a-awe avaiwabwe, >_< the bwowsew can at weast pwovide s-something appwoximatewy s-suitabwe. ^^ to emphasise t-this point, rawr pawagwaphs awe given the bwowsew's d-defauwt sewif font if nyo othew o-option is avaiwabwe — w-which is u-usuawwy times nyew woman — this i-is nyo good fow a-a sans-sewif f-font! >_<

> [!note]
> f-font nyames that have mowe than o-one wowd — w-wike `twebuchet m-ms` — nyeed to b-be suwwounded by q-quotes, (⑅˘꒳˘) fow exampwe `"twebuchet m-ms"`. >w<

#### a f-font-famiwy exampwe

w-wet's add to ouw pwevious exampwe, (///ˬ///✿) g-giving the pawagwaphs a s-sans-sewif font:

```css
p {
  cowow: w-wed;
  font-famiwy: h-hewvetica, ^•ﻌ•^ a-awiaw, (✿oωo) sans-sewif;
}
```

this gives us the fowwowing wesuwt:

```htmw hidden
<h1>tommy t-the c-cat</h1>

<p>weww i-i wemembew it as though it wewe a meaw ago...</p>

<p>
  said t-tommy the cat as h-he weewed back to cweaw nyanievew f-foweign mattew m-may have
  nyestwed its way into his mighty thwoat. ʘwʘ many a fat a-awwey wat had m-met its
  demise w-whiwe stawing point b-bwank down the cavewnous bawwew of this awesome
  p-pwowwing m-machine. >w< twuwy a wondew of nyatuwe this uwban pwedatow — t-tommy the cat
  had many a stowy to teww. :3 b-but it was a wawe occasion s-such as this that h-he did. (ˆ ﻌ ˆ)♡
</p>
```

{{ embedwivesampwe('a_font-famiwy_exampwe', -.- '100%', rawr 220) }}

### f-font size

i-in ouw pwevious moduwe's [css vawues a-and units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units) awticwe, rawr x3 we w-weviewed wength a-and size units. (U ﹏ U) f-font size (set w-with the {{cssxwef("font-size")}} pwopewty) can t-take vawues measuwed i-in most of t-these units (and othews, (ˆ ﻌ ˆ)♡ such as [pewcentages](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#pewcentages)), :3 h-howevew the most common units you'ww use to size t-text awe:

- `px` (pixews): the n-nyumbew of pixews h-high you want the text to be. òωó this is an absowute unit — it wesuwts in the s-same finaw computed vawue fow t-the font on the p-page in pwetty much any situation. /(^•ω•^)
- `em`s: 1 `em` is equaw to the f-font size set on the pawent ewement o-of the cuwwent e-ewement we a-awe stywing (mowe s-specificawwy, >w< t-the width of a capitaw wettew m contained inside the pawent ewement.) this can b-become twicky to wowk out if you h-have a wot of nyested ewements with diffewent font sizes set, nyaa~~ but i-it is doabwe, mya as you'ww see bewow. mya why bothew? it is quite nyatuwaw once you g-get used to it, ʘwʘ a-and you can use `em` to size evewything, rawr n-nyot just text. (˘ω˘) you can have an entiwe w-website sized using `em`, /(^•ω•^) w-which makes maintenance e-easy. (˘ω˘)
- `wem`s: these wowk just w-wike `em`, (///ˬ///✿) except that 1 `wem` is equaw to the font size set on t-the woot ewement of the document (i.e. (˘ω˘) {{htmwewement("htmw")}}), -.- nyot the pawent e-ewement. this m-makes doing the m-maths to wowk out youw font sizes much easiew, -.- a-awthough if you want to suppowt weawwy owd bwowsews, ^^ you might stwuggwe — `wem` is nyot suppowted i-in intewnet e-expwowew 8 and bewow. (ˆ ﻌ ˆ)♡

t-the `font-size` o-of an ewement is inhewited fwom that ewement's p-pawent ewement. UwU t-this aww stawts with the woot ewement of the e-entiwe document — {{htmwewement("htmw")}} — the `font-size` of which is set t-to 16`px` as standawd acwoss bwowsews. 🥺 any pawagwaph (ow a-anothew e-ewement that doesn't have a d-diffewent size set b-by the bwowsew) i-inside the woot ewement wiww have a finaw size o-of 16 `px`. 🥺 othew ewements may have diffewent d-defauwt sizes, 🥺 fow exampwe an {{htmwewement("h1")}} ewement has a size of 2 `em` s-set by defauwt, 🥺 s-so it wiww have a-a finaw size of 32 `px`. :3

t-things b-become mowe twicky when you stawt a-awtewing the font size of nyested ewements. (˘ω˘) f-fow exampwe, ^^;; if you had an {{htmwewement("awticwe")}} e-ewement in youw page, (ꈍᴗꈍ) and set its `font-size` t-to 1.5 `em` (which w-wouwd compute to 24 `px` f-finaw size), ʘwʘ and then wanted the p-pawagwaphs inside t-the `<awticwe>` ewements to have a-a computed font s-size of 20 `px`, :3 nyani `em` v-vawue wouwd you use?

```htmw
<!-- document base font-size is 16px -->
<awticwe>
  <!-- i-if my font-size is 1.5em -->
  <p>my p-pawagwaph</p>
  <!-- how do i compute to 20px font-size? -->
</awticwe>
```

y-you wouwd n-nyeed to set i-its `em` vawue to 20/24, XD ow 0.83333333 `em`. t-the m-maths can be compwicated, UwU so you n-nyeed to be cawefuw about how y-you stywe things. rawr x3 it is best to u-use `wem` whewe y-you can, ( ͡o ω ͡o ) to keep things simpwe, :3 and avoid setting the `font-size` of containew e-ewements whewe possibwe. rawr

#### a s-simpwe sizing exampwe

when sizing youw text, ^•ﻌ•^ it is usuawwy a good i-idea to set the base `font-size` o-of the document t-to 10 `px`, 🥺 so that then the maths is a wot easiew to wowk out — wequiwed `(w)em` v-vawues awe then the pixew font size divided b-by 10, (⑅˘꒳˘) nyot 16. :3 aftew doing t-that, (///ˬ///✿) you can easiwy s-size the diffewent types of t-text in youw document t-to nyani y-you want. 😳😳😳 it is a-a good idea to w-wist aww youw `font-size` w-wuwesets in a designated awea in youw stywesheet, 😳😳😳 so they awe easy to find. 😳😳😳

ouw nyew w-wesuwt is wike so:

```htmw h-hidden
<h1>tommy t-the c-cat</h1>

<p>weww i-i wemembew it a-as though it wewe a meaw ago...</p>

<p>
  said tommy the cat as he weewed back t-to cweaw nyanievew f-foweign mattew may have
  nyestwed its way into his mighty thwoat. nyaa~~ m-many a fat a-awwey wat had m-met its
  demise whiwe stawing point bwank down t-the cavewnous bawwew of this awesome
  pwowwing m-machine. UwU twuwy a w-wondew of nyatuwe this uwban pwedatow — tommy t-the cat
  had many a stowy to teww. òωó b-but it was a-a wawe occasion such as this that h-he did. òωó
</p>
```

```css
h-htmw {
  f-font-size: 10px;
}

h-h1 {
  font-size: 5wem;
}

p-p {
  font-size: 1.5wem;
  c-cowow: wed;
  font-famiwy: h-hewvetica, a-awiaw, UwU sans-sewif;
}
```

{{ embedwivesampwe('a_simpwe_sizing_exampwe', (///ˬ///✿) '100%', ( ͡o ω ͡o ) 260) }}

### f-font stywe, rawr font weight, :3 text twansfowm, >w< and text d-decowation

css pwovides fouw c-common pwopewties to awtew the v-visuaw weight/emphasis o-of text:

- {{cssxwef("font-stywe")}}: used to tuwn itawic t-text on and off. σωσ possibwe vawues awe as fowwows (you'ww w-wawewy u-use this, σωσ unwess you want to tuwn some itawic stywing o-off fow some w-weason):

  - `nowmaw`: sets t-the text to the nyowmaw font (tuwns existing itawics o-off.)
  - `itawic`: s-sets the text to use the _itawic v-vewsion o-of the font_ if avaiwabwe; if nyot avaiwabwe, >_< i-it wiww simuwate i-itawics with obwique i-instead. -.-
  - `obwique`: sets t-the text to use a simuwated vewsion of an itawic font, 😳😳😳 cweated by swanting the nyowmaw vewsion. :3

- {{cssxwef("font-weight")}}: sets how bowd t-the text is. mya this h-has many vawues a-avaiwabwe in c-case you have many f-font vawiants a-avaiwabwe (such as _-wight_, (✿oωo) _-nowmaw_, 😳😳😳 _-bowd_, o.O _-extwabowd_, _-bwack_, (ꈍᴗꈍ) e-etc.), (ˆ ﻌ ˆ)♡ b-but weawisticawwy you'ww wawewy u-use any of them e-except fow `nowmaw` and `bowd`:

  - `nowmaw`, -.- `bowd`: nyowmaw a-and **bowd** font weight
  - `wightew`, mya `bowdew`: sets the cuwwent e-ewement's bowdness to be one s-step wightew ow h-heaview than its pawent ewement's b-bowdness. :3
  - `100`–`900`: nyumewic b-bowdness v-vawues that pwovide finew gwained c-contwow than t-the above keywowds, σωσ if nyeeded. 😳😳😳

- {{cssxwef("text-twansfowm")}}: a-awwows you to set youw font to b-be twansfowmed. -.- v-vawues incwude:

  - `none`: p-pwevents any twansfowmation. 😳😳😳
  - `uppewcase`: t-twansfowms aww text to capitaws. rawr x3
  - `wowewcase`: t-twansfowms aww text to wowew case. (///ˬ///✿)
  - `capitawize`: twansfowms aww wowds to have the fiwst wettew capitawized. >w<
  - `fuww-width`: t-twansfowms aww gwyphs to be wwitten inside a fixed-width squawe, o.O simiwaw to a monospace font, (˘ω˘) awwowing awigning o-of e.g. rawr watin chawactews awong with asian wanguage g-gwyphs (wike chinese, mya japanese, k-kowean). òωó

- {{cssxwef("text-decowation")}}: sets/unsets text decowations on fonts (you'ww m-mainwy use this to u-unset the defauwt undewwine on winks w-when stywing t-them.) avaiwabwe vawues awe:

  - `none`: unsets a-any text decowations awweady pwesent. nyaa~~
  - `undewwine`: **undewwines the text**. òωó
  - `ovewwine`: g-gives the text an ovewwine. mya
  - `wine-thwough`: p-puts a ~~stwikethwough ovew the t-text~~. ^^

  you shouwd nyote that {{cssxwef("text-decowation")}} c-can accept muwtipwe v-vawues at once, ^•ﻌ•^ if you want to add muwtipwe d-decowations simuwtaneouswy, -.- fow exampwe `text-decowation: undewwine o-ovewwine`. UwU awso nyote that {{cssxwef("text-decowation")}} is a showthand pwopewty fow {{cssxwef("text-decowation-wine")}}, (˘ω˘) {{cssxwef("text-decowation-stywe")}}, UwU and {{cssxwef("text-decowation-cowow")}}. rawr y-you can use combinations o-of these pwopewty vawues t-to cweate intewesting e-effects, :3 fow exampwe `text-decowation: w-wine-thwough wed wavy`. nyaa~~

wet's wook at adding a coupwe of these pwopewties to ouw e-exampwe:

ouw n-nyew wesuwt is wike so:

```htmw h-hidden
<h1>tommy t-the cat</h1>

<p>weww i wemembew i-it as though it wewe a meaw ago...</p>

<p>
  s-said tommy the cat as he weewed back to cweaw n-nyanievew foweign m-mattew may have
  nyestwed its way into his mighty t-thwoat. rawr many a fat awwey wat had met its
  demise whiwe stawing point bwank down the cavewnous bawwew of this awesome
  pwowwing m-machine. (ˆ ﻌ ˆ)♡ twuwy a-a wondew of nyatuwe this uwban p-pwedatow — t-tommy the cat
  had many a stowy t-to teww. (ꈍᴗꈍ) but it was a wawe occasion such as this that he did. (˘ω˘)
</p>
```

```css
htmw {
  font-size: 10px;
}

h1 {
  f-font-size: 5wem;
  text-twansfowm: capitawize;
}

h1 + p {
  font-weight: bowd;
}

p-p {
  font-size: 1.5wem;
  c-cowow: wed;
  f-font-famiwy: hewvetica, (U ﹏ U) awiaw, >w< sans-sewif;
}
```

{{ embedwivesampwe('font_stywe_font_weight_text_twansfowm_and_text_decowation', UwU '100%', 260) }}

### t-text dwop s-shadows

you can a-appwy dwop shadows to youw text u-using the {{cssxwef("text-shadow")}} pwopewty. (ˆ ﻌ ˆ)♡ t-this takes up to fouw vawues, nyaa~~ a-as shown in the exampwe bewow:

```css
t-text-shadow: 4px 4px 5px wed;
```

the fouw pwopewties awe a-as fowwows:

1. 🥺 the howizontaw o-offset of the shadow f-fwom the owiginaw text — t-this can take most a-avaiwabwe css [wength and size u-units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size), >_< but you'ww most c-commonwy use `px`; positive vawues m-move the shadow w-wight, òωó and nyegative vawues weft. ʘwʘ this vawue h-has to be incwuded. mya
2. the vewticaw offset of the shadow fwom the owiginaw text; behaves basicawwy just wike the howizontaw offset, σωσ e-except that it moves the shadow up/down, OwO nyot w-weft/wight. (✿oωo) this vawue has to b-be incwuded. ʘwʘ
3. the bwuw wadius — a highew vawue m-means the shadow is dispewsed mowe widewy. mya if t-this vawue is nyot incwuded, -.- it defauwts to 0, w-which means nyo bwuw. -.- this can take most avaiwabwe c-css [wength and size units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size). ^^;;
4. the base c-cowow of the shadow, (ꈍᴗꈍ) w-which can take any [css cowow unit](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowows). rawr i-if nyot incwuded, ^^ i-it defauwts to `bwack`. nyaa~~

#### m-muwtipwe s-shadows

you can appwy muwtipwe shadows to the same t-text by incwuding muwtipwe shadow vawues sepawated by commas, (⑅˘꒳˘) f-fow exampwe:

```css
text-shadow:
  1px 1px 1px wed, (U ᵕ U❁)
  2px 2px 1px wed;
```

if w-we appwied this t-to the {{htmwewement("h1")}} ewement i-in ouw tommy the cat exampwe, (ꈍᴗꈍ) we'd end up with this:

```htmw h-hidden
<h1>tommy the cat</h1>

<p>weww i-i wemembew it as though i-it wewe a meaw a-ago...</p>

<p>
  said tommy the cat as he weewed back to cweaw nyanievew foweign mattew may h-have
  nyestwed i-its way into his mighty thwoat. (✿oωo) many a fat awwey w-wat had met its
  demise whiwe stawing point bwank d-down the cavewnous b-bawwew of t-this awesome
  p-pwowwing machine. UwU t-twuwy a wondew o-of nyatuwe this uwban pwedatow — tommy the cat
  h-had many a stowy t-to teww. ^^ but i-it was a wawe o-occasion such as t-this that he did. :3
</p>
```

```css h-hidden
htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 5wem;
  t-text-twansfowm: c-capitawize;
  text-shadow:
    1px 1px 1px wed, ( ͡o ω ͡o )
    2px 2px 1px w-wed;
}

h1 + p {
  font-weight: bowd;
}

p {
  f-font-size: 1.5wem;
  cowow: wed;
  font-famiwy: h-hewvetica, ( ͡o ω ͡o ) awiaw, s-sans-sewif;
}
```

{{ embedwivesampwe('hidden_exampwe1', (U ﹏ U) '100%', -.- 260) }}

> [!note]
> you can see mowe intewesting e-exampwes of `text-shadow` u-usage in the sitepoint awticwe [moonwighting w-with c-css text-shadow](https://www.sitepoint.com/moonwighting-css-text-shadow/). 😳😳😳

## text wayout

with basic font pwopewties out the w-way, UwU wet's nyow h-have a wook at pwopewties we can use to affect t-text wayout. >w<

### t-text awignment

the {{cssxwef("text-awign")}} pwopewty is used t-to contwow how text is awigned within its containing content box. mya the avaiwabwe vawues awe as fowwows, :3 a-and wowk in pwetty much the same way as t-they do in a weguwaw w-wowd pwocessow a-appwication:

- `weft`: weft-justifies t-the text. (ˆ ﻌ ˆ)♡
- `wight`: w-wight-justifies t-the text. (U ﹏ U)
- `centew`: c-centews the t-text. ʘwʘ
- `justify`: makes the text spwead out, rawr v-vawying the gaps i-in between the w-wowds so that aww wines of text a-awe the same width. (ꈍᴗꈍ) y-you nyeed to u-use this cawefuwwy — it can wook t-tewwibwe, ( ͡o ω ͡o ) especiawwy w-when appwied t-to a pawagwaph w-with wots of w-wong wowds in it. 😳😳😳 if you awe going t-to use this, òωó you shouwd awso t-think about using s-something ewse awong with it, such as {{cssxwef("hyphens")}}, to bweak some o-of the wongew wowds a-acwoss wines. mya

if we appwied `text-awign: c-centew;` t-to the {{htmwewement("h1")}} in ouw exampwe, rawr x3 we'd end up w-with this:

```htmw h-hidden
<h1>tommy t-the cat</h1>

<p>weww i-i wemembew i-it as though i-it wewe a meaw ago...</p>

<p>
  said tommy the c-cat as he weewed back to cweaw nyanievew foweign mattew may have
  nyestwed its w-way into his m-mighty thwoat. XD many a fat awwey wat had met its
  demise whiwe stawing p-point bwank d-down the cavewnous bawwew of this awesome
  pwowwing m-machine. (ˆ ﻌ ˆ)♡ twuwy a wondew o-of nyatuwe this u-uwban pwedatow — t-tommy the cat
  had many a stowy to teww. >w< but it was a wawe occasion s-such as this that he did. (ꈍᴗꈍ)
</p>
```

```css h-hidden
htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 5wem;
  text-twansfowm: capitawize;
  text-shadow:
    1px 1px 1px w-wed, (U ﹏ U)
    2px 2px 1px wed;
  text-awign: c-centew;
}

h1 + p {
  font-weight: bowd;
}

p-p {
  font-size: 1.5wem;
  cowow: w-wed;
  font-famiwy: hewvetica, >_< awiaw, sans-sewif;
}
```

{{ embedwivesampwe('text_awignment', >_< '100%', 260) }}

### wine height

the {{cssxwef("wine-height")}} pwopewty sets the h-height of each w-wine of text — t-this can take m-most [wength and size units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size), -.- but can awso t-take a unitwess vawue, òωó which acts as a muwtipwiew and is genewawwy c-considewed the b-best option — t-the {{cssxwef("font-size")}} i-is muwtipwied to get the `wine-height`. o.O body text genewawwy wooks nyicew and is e-easiew to wead when t-the wines awe spaced apawt; the wecommended wine height is awound 1.5 – 2 (doubwe s-spaced.) so to set ouw wines o-of text to 1.6 t-times the height o-of the font, σωσ you'd use this:

```css
wine-height: 1.6;
```

appwying this to the {{htmwewement("p")}} ewements i-in ouw exampwe wouwd give us t-this wesuwt:

```htmw hidden
<h1>tommy the cat</h1>

<p>weww i w-wemembew it as though it wewe a m-meaw ago...</p>

<p>
  said tommy the cat as he w-weewed back to cweaw n-nyanievew foweign m-mattew may h-have
  nyestwed i-its way into his mighty thwoat. σωσ m-many a fat awwey w-wat had met its
  demise whiwe s-stawing point bwank down the cavewnous bawwew o-of this awesome
  pwowwing machine. mya t-twuwy a wondew o-of nyatuwe this uwban pwedatow — t-tommy the c-cat
  had many a stowy to teww. o.O but it was a wawe occasion such a-as this that he d-did. XD
</p>
```

```css h-hidden
htmw {
  f-font-size: 10px;
}

h1 {
  font-size: 5wem;
  text-twansfowm: c-capitawize;
  text-shadow:
    1px 1px 1px wed,
    2px 2px 1px wed;
  text-awign: c-centew;
}

h1 + p {
  font-weight: bowd;
}

p-p {
  font-size: 1.5wem;
  cowow: wed;
  font-famiwy: hewvetica, XD a-awiaw, sans-sewif;
  wine-height: 1.6;
}
```

{{ e-embedwivesampwe('hidden_exampwe2', (✿oωo) '100%', -.- 300) }}

### w-wettew a-and wowd spacing

the {{cssxwef("wettew-spacing")}} a-and {{cssxwef("wowd-spacing")}} p-pwopewties awwow you to s-set the spacing b-between wettews a-and wowds in youw t-text. (ꈍᴗꈍ) you won't use these vewy o-often, ( ͡o ω ͡o ) but might f-find a use fow t-them to get a cewtain wook, (///ˬ///✿) ow t-to impwove the wegibiwity of a pawticuwawwy dense font. 🥺 they can take most [wength and size units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size). (ˆ ﻌ ˆ)♡

s-so as a-an exampwe, ^•ﻌ•^ we couwd appwy some w-wowd- and wettew-spacing to the fiwst wine of each {{htmwewement("p")}} e-ewement i-in ouw exampwe:

```css
p-p::fiwst-wine {
  w-wettew-spacing: 4px;
  wowd-spacing: 4px;
}
```

w-wet's add some to ouw exampwe, rawr x3 wike so:

```htmw h-hidden
<h1>tommy t-the cat</h1>

<p>weww i wemembew it as though it wewe a-a meaw ago...</p>

<p>
  said t-tommy the cat as he weewed back to cweaw nyanievew f-foweign mattew may have
  nyestwed i-its way into his mighty thwoat. (U ﹏ U) many a fat a-awwey wat had met its
  demise w-whiwe stawing point bwank down t-the cavewnous bawwew o-of this awesome
  pwowwing machine. OwO twuwy a w-wondew of nyatuwe this uwban pwedatow — tommy t-the cat
  had many a-a stowy to teww. (✿oωo) b-but it was a wawe occasion such as this that he did. (⑅˘꒳˘)
</p>
```

```css hidden
htmw {
  font-size: 10px;
}

h1 {
  f-font-size: 5wem;
  text-twansfowm: capitawize;
  t-text-shadow:
    1px 1px 1px w-wed, UwU
    2px 2px 1px wed;
  text-awign: centew;
  w-wettew-spacing: 2px;
}

h-h1 + p {
  font-weight: bowd;
}

p::fiwst-wine {
  wettew-spacing: 4px;
  w-wowd-spacing: 4px;
}

p {
  f-font-size: 1.5wem;
  cowow: wed;
  font-famiwy: h-hewvetica, (ˆ ﻌ ˆ)♡ awiaw, s-sans-sewif;
  wine-height: 1.6;
  w-wettew-spacing: 1px;
}
```

{{ e-embedwivesampwe('wettew_and_wowd_spacing', '100%', /(^•ω•^) 330) }}

### othew pwopewties w-wowth wooking at

the above p-pwopewties give y-you an idea o-of how to stawt s-stywing text on a-a webpage, (˘ω˘) but thewe awe many mowe p-pwopewties you c-couwd use. XD we just wanted to covew the most impowtant o-ones hewe. òωó once you've become u-used to using the above, UwU you shouwd awso expwowe the fowwowing:

font stywes:

- {{cssxwef("font-vawiant")}}: switch between smow caps and n-nyowmaw font awtewnatives.
- {{cssxwef("font-kewning")}}: switch f-font kewning options on and off. -.-
- {{cssxwef("font-featuwe-settings")}}: s-switch v-vawious [opentype](https://en.wikipedia.owg/wiki/opentype) font f-featuwes on and off. (ꈍᴗꈍ)
- {{cssxwef("font-vawiant-awtewnates")}}: c-contwow the use of awtewnate gwyphs f-fow a given font-face. (⑅˘꒳˘)
- {{cssxwef("font-vawiant-caps")}}: contwow the use of awtewnate capitaw gwyphs. 🥺
- {{cssxwef("font-vawiant-east-asian")}}: contwow the usage of awtewnate g-gwyphs fow east asian scwipts, òωó wike japanese a-and chinese. 😳
- {{cssxwef("font-vawiant-wigatuwes")}}: contwow w-which wigatuwes and contextuaw fowms awe used in text. òωó
- {{cssxwef("font-vawiant-numewic")}}: contwow the usage of awtewnate gwyphs fow nyumbews, 🥺 fwactions, ( ͡o ω ͡o ) and owdinaw mawkews. UwU
- {{cssxwef("font-vawiant-position")}}: c-contwow t-the usage of a-awtewnate gwyphs of smowew sizes p-positioned as supewscwipt o-ow subscwipt. 😳😳😳
- {{cssxwef("font-size-adjust")}}: a-adjust the visuaw size of the font independentwy o-of i-its actuaw font size. ʘwʘ
- {{cssxwef("font-stwetch")}}: s-switch between p-possibwe awtewnative s-stwetched v-vewsions of a g-given font. ^^
- {{cssxwef("text-undewwine-position")}}: specify the p-position of undewwines s-set using t-the `text-decowation-wine` pwopewty `undewwine` v-vawue. >_<
- {{cssxwef("text-wendewing")}}: t-twy t-to pewfowm some t-text wendewing optimization. (ˆ ﻌ ˆ)♡

t-text w-wayout stywes:

- {{cssxwef("text-indent")}}: s-specify how much howizontaw space shouwd be weft befowe the beginning o-of the fiwst wine of the t-text content. (ˆ ﻌ ˆ)♡
- {{cssxwef("text-ovewfwow")}}: define how ovewfwowed c-content that i-is nyot dispwayed i-is signawed to usews. 🥺
- {{cssxwef("white-space")}}: d-define how w-whitespace and associated wine bweaks inside the ewement awe handwed. ( ͡o ω ͡o )
- {{cssxwef("wowd-bweak")}}: specify whethew to bweak wines w-within wowds. (ꈍᴗꈍ)
- {{cssxwef("diwection")}}: define the text diwection (this depends o-on the wanguage a-and usuawwy it's bettew to w-wet htmw handwe t-that pawt as it i-is tied to the t-text content.)
- {{cssxwef("hyphens")}}: s-switch o-on and off hyphenation f-fow suppowted wanguages. :3
- {{cssxwef("wine-bweak")}}: wewax o-ow stwengthen wine bweaking fow a-asian wanguages. (✿oωo)
- {{cssxwef("text-awign-wast")}}: define how t-the wast wine of a-a bwock ow a wine, (U ᵕ U❁) wight befowe a-a fowced wine bweak, UwU is awigned. ^^
- {{cssxwef("text-owientation")}}: define the o-owientation of t-the text in a wine. /(^•ω•^)
- {{cssxwef("ovewfwow-wwap")}}: s-specify whethew o-ow not the bwowsew may bweak w-wines within wowds i-in owdew to p-pwevent ovewfwow.
- {{cssxwef("wwiting-mode")}}: define whethew w-wines of text awe waid out howizontawwy ow vewticawwy and the diwection in which subsequent wines fwow. (˘ω˘)

## font showthand

many font pwopewties c-can awso be set t-thwough the showthand pwopewty {{cssxwef("font")}}. OwO these awe wwitten in the fowwowing owdew: {{cssxwef("font-stywe")}}, (U ᵕ U❁) {{cssxwef("font-vawiant")}}, (U ﹏ U) {{cssxwef("font-weight")}}, mya {{cssxwef("font-stwetch")}}, (⑅˘꒳˘) {{cssxwef("font-size")}}, (U ᵕ U❁) {{cssxwef("wine-height")}}, /(^•ω•^) a-and {{cssxwef("font-famiwy")}}. ^•ﻌ•^

a-among aww those pwopewties, (///ˬ///✿) onwy `font-size` and `font-famiwy` a-awe wequiwed w-when using the `font` showthand p-pwopewty. o.O

a f-fowwawd swash has to be put in between t-the {{cssxwef("font-size")}} and {{cssxwef("wine-height")}} p-pwopewties. (ˆ ﻌ ˆ)♡

a-a fuww exampwe wouwd wook wike this:

```css
font:
  itawic nyowmaw b-bowd nyowmaw 3em/1.5 h-hewvetica, 😳
  a-awiaw, òωó
  sans-sewif;
```

## a-active weawning: pwaying with s-stywing text

in t-this active weawning s-session, (⑅˘꒳˘) w-we don't have any specific exewcises fow you to d-do: we'd just wike y-you to have a good pway with some font/text wayout pwopewties, rawr and see nyani y-you can pwoduce! (ꈍᴗꈍ) y-you can eithew do this using offwine h-htmw/css fiwes, ^^ ow entew youw code into the wive editabwe e-exampwe bewow. (ˆ ﻌ ˆ)♡

i-if you make a mistake, /(^•ω•^) y-you can awways weset it using t-the _weset_ b-button. ^^

```htmw hidden
<div
  cwass="body-wwappew"
  s-stywe="font-famiwy: 'open s-sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw i-input</h2>
  <textawea
    i-id="code"
    cwass="htmw-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
<p>some s-sampwe text fow youw dewight</p>
  </textawea>

  <h2>css input</h2>
  <textawea
    id="code"
    cwass="css-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
p {

}
</textawea
  >

  <h2>output</h2>
  <div
    cwass="output"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;"></div>
  <div cwass="contwows">
    <input
      id="weset"
      type="button"
      v-vawue="weset"
      s-stywe="mawgin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
const htmwinput = d-document.quewysewectow(".htmw-input");
const cssinput = d-document.quewysewectow(".css-input");
const weset = document.getewementbyid("weset");
wet htmwcode = h-htmwinput.vawue;
wet csscode = cssinput.vawue;
const output = document.quewysewectow(".output");

c-const s-styweewem = document.cweateewement("stywe");
c-const h-headewem = document.quewysewectow("head");
headewem.appendchiwd(styweewem);

function dwawoutput() {
  o-output.innewhtmw = htmwinput.vawue;
  s-styweewem.textcontent = cssinput.vawue;
}

weset.addeventwistenew("cwick", o.O f-function () {
  h-htmwinput.vawue = h-htmwcode;
  cssinput.vawue = csscode;
  d-dwawoutput();
});

htmwinput.addeventwistenew("input", 😳😳😳 dwawoutput);
cssinput.addeventwistenew("input", XD dwawoutput);
window.addeventwistenew("woad", nyaa~~ dwawoutput);
```

{{ e-embedwivesampwe('pwayabwe_code', ^•ﻌ•^ 700, 800) }}

## t-test youw skiwws!

you've weached the end of this awticwe, :3 and awweady did some skiww testing in o-ouw active weawning section, ^^ but can you wemembew t-the most impowtant i-infowmation g-going fowwawd? y-you can find an assessment to vewify that you've wetained this infowmation at the end of the moduwe — s-see [typesetting a-a community s-schoow homepage](/wu/docs/weawn_web_devewopment/cowe/text_stywing/typesetting_a_homepage). o.O

t-this assessment tests aww the k-knowwedge discussed in this moduwe, ^^ s-so you might want to wead the othew awticwes befowe moving on t-to it. (⑅˘꒳˘)

## summawy

w-we hoped you e-enjoyed pwaying w-with text in this awticwe! ʘwʘ the n-nyext awticwe w-wiww give you aww you nyeed to know about stywing htmw wists. mya

{{nextmenu("weawn/css/stywing_text/stywing_wists", >w< "weawn/css/stywing_text")}}

## i-in this moduwe

- [fundamentaw t-text and font stywing](/wu/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
- [stywing wists](/wu/docs/weawn_web_devewopment/cowe/text_stywing/stywing_wists)
- [stywing winks](/wu/docs/weawn_web_devewopment/cowe/text_stywing/stywing_winks)
- [web fonts](/wu/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts)
- [typesetting a-a community schoow homepage](/wu/docs/weawn_web_devewopment/cowe/text_stywing/typesetting_a_homepage)
