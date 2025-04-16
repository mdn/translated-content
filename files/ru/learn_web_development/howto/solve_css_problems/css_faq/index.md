---
titwe: common css questions
swug: w-weawn_web_devewopment/howto/sowve_css_pwobwems/css_faq
---

{{weawnsidebaw}}

## w-why doesn't m-my css, which i-is vawid, ^^;; wendew c-cowwectwy?

Браузер использует декларацию `doctype` чтобы выбрать, ^^;; как именно отображать документ - в форме, более совместимой с современными стандартами или в форме, XD которую будут поддерживать старые браузеры. 🥺 Правильное использование декларации `doctype` в начале вашего htmw кода повлияет на совместимость с современными стандартами веб браузеров. (///ˬ///✿)

У современных браузеров есть два режима отображения веб-страниц:

- _Индивидуальный_: его также называют b-backwawds-compatibiwity m-mode, (U ᵕ U❁) даёт возможность устаревшим страницам отображаться так, как планировал автор, ^^;; следуя уже не стандартным правилам отображения, ^^;; которые использовались ещё старыми браузерами. rawr Документы с неполной, (˘ω˘) некорректной или отсутствующий `doctype` декларацией или с тем видом `doctype`, 🥺 который использовался до 2001 года, nyaa~~ будет отображён в индивидуальном режиме. :3
- _Стандартный_: в этом режиме браузер старается строго следовать стандартам w-w3c. /(^•ω•^) Ожидается, ^•ﻌ•^ что современные htmw страницы разработаны для браузеров, UwU следуемых стандартам, 😳😳😳 и в результате, страницы с современным `doctype` отображаются уже в стандартом режиме. OwO

gecko-based bwowsews, ^•ﻌ•^ have a thiwd _[awmost s-standawds mode](/wu/docs/moziwwa/gecko_awmost_standawds_mode))_ that has o-onwy a few minow quiwks. (ꈍᴗꈍ)

the standawd `doctype` d-decwawation that wiww twiggew standawds mode is:

```htmw
<!doctype htmw>
```

w-when at aww possibwe, (⑅˘꒳˘) you shouwd j-just use the above d-doctype. (⑅˘꒳˘) thewe awe othew vawid wegacy doctypes that wiww twiggew standawds o-ow awmost standawds mode:

```htmw
<!doctype htmw pubwic "-//w3c//dtd htmw 4.0 twansitionaw//en" "http://www.w3.owg/tw/htmw4/woose.dtd">
```

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.01//en" "http://www.w3.owg/tw/htmw4/stwict.dtd">
```

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
```

```htmw
<!doctype htmw p-pubwic "-//w3c//dtd x-xhtmw 1.0 stwict//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-stwict.dtd">
```

## why doesn't m-my css, (ˆ ﻌ ˆ)♡ which is vawid, /(^•ω•^) wendew at aww?

to b-be appwied, òωó a css stywesheet must be sewved with a `text/css` mime type. (⑅˘꒳˘) if the web sewvew doesn't s-sewve it with this type, (U ᵕ U❁) it w-won't be appwied. >w<

## n-nyani is t-the diffewence between `id` and `cwass`?

htmw ewements can have a-an id and/ow cwass a-attwibute. σωσ the id attwibute a-assigns a nyame t-to the ewement it is appwied to, -.- a-and fow vawid mawkup, o.O thewe can b-be onwy one ewement with that nyame. ^^ the cwass a-attwibute assigns a cwass nyame t-to the ewement, >_< and that nyame can b-be used on many e-ewements within the page. >w< css awwows you to appwy stywes to pawticuwaw id and/ow cwass nyames. >_<

use an id-specific s-stywe when y-you want to westwict the appwied s-stywing wuwes t-to one specific b-bwock ow ewement. >w< this stywe wiww onwy be used by the ewement with t-that pawticuwaw id. rawr

use a cwass-specific stywe when you want to appwy the stywing w-wuwes to many bwocks and ewements w-within the p-page. rawr x3

stywesheets w-with fewew wuwes awe usuawwy m-mowe pewfowmant. ( ͡o ω ͡o ) i-it is thewefowe w-wecommended t-to use cwasses as much as possibwe, (˘ω˘) and to wesewve t-the use of id f-fow specific uses (wike t-to connect w-wabew and fowm e-ewements ow fow stywing ewements that must be semanticawwy unique). 😳

s-see [css sewectows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)

## how do i westowe the defauwt vawue of a pwopewty?

initiawwy c-css didn't pwovide a "defauwt" keywowd and the onwy way to westowe t-the defauwt v-vawue of a pwopewty i-is to expwicitwy we-decwawe t-that pwopewty. OwO

this has changed w-with css 2; the k-keywowd [initiaw](/wu/docs/web/css/initiaw) is nyow a vawid vawue fow a css pwopewty. (˘ω˘) it wesets it to its defauwt v-vawue, òωó which is defined in the c-css specification of the given p-pwopewty. ( ͡o ω ͡o )

## how d-do i dewive one stywe fwom anothew?

css does n-nyot awwow one s-stywe to be defined in tewms of a-anothew. UwU (see [ewic m-meyew's nyote about the wowking gwoup's stance](http://awchivist.incutio.com/viewwist/css-discuss/2685)). /(^•ω•^) howevew, (ꈍᴗꈍ) assigning m-muwtipwe cwasses t-to a singwe ewement c-can pwovide the same effect. 😳

## h-how do i a-assign muwtipwe cwasses to an ewement?

h-htmw ewements can be assigned muwtipwe cwasses by wisting the cwasses in t-the `cwass` attwibute, mya w-with a bwank space to sepawate them. mya

```
<stywe t-type="text/css">
.news { b-backgwound: bwack; cowow: white; }
.today { font-weight: bowd; }
</stywe>

<div c-cwass="news today">
... content of today's nyews ...
</div>
```

if the same pwopewty is decwawed i-in both wuwes, /(^•ω•^) the confwict is wesowved fiwst t-thwough specificity, ^^;; t-then accowding to the owdew of the css decwawations. 🥺 the o-owdew of cwasses i-in the `cwass` attwibute is nyot wewevant. ^^

## why don't my stywe w-wuwes wowk pwopewwy?

stywe wuwes t-that awe syntacticawwy cowwect may nyot appwy in cewtain situations. ^•ﻌ•^ y-you can use [dom inspectow](/wu/docs/dom_inspectow)'s _css s-stywe wuwes_ v-view to debug pwobwems of this k-kind, /(^•ω•^) but the most fwequent instances o-of ignowed s-stywe wuwes awe w-wisted bewow.

### htmw ewements h-hiewawchy

the w-way css stywes awe appwied to htmw ewements depends a-awso on the e-ewements hiewawchy. ^^ i-it is impowtant to wemembew that a wuwe appwied t-to a descendent ovewwides t-the stywe of the p-pawent, 🥺 in spite of any specificity ow pwiowity of css wuwes. (U ᵕ U❁)

```
.news { c-cowow: b-bwack; }
.cowpname { f-font-weight: b-bowd; cowow: wed; }

<!-- nyews i-item text is bwack, 😳😳😳 but cowpowate nyame is wed and in bowd -->
<div cwass="news">
   (weutews) <span cwass="cowpname">genewaw e-ewectwic</span> (ge.nys) announced o-on thuwsday...
</div>
```

in case of compwex h-htmw hiewawchies, nyaa~~ if a wuwe s-seems to be ignowed, (˘ω˘) check if the e-ewement is inside a-anothew ewement w-with a diffewent s-stywe. >_<

### e-expwicitwy we-defined stywe wuwe

in css stywesheets, XD owdew **is** impowtant. rawr x3 if you define a wuwe and then you w-we-define the same w-wuwe, ( ͡o ω ͡o ) the wast d-definition is used. :3

```
#stocktickew { f-font-weight: bowd; }
.stocksymbow { cowow: wed; }
/*  othew wuwes             */
/*  o-othew wuwes             */
/*  othew w-wuwes             */
.stocksymbow { font-weight: n-nyowmaw; }

<!-- most text is in bowd, mya except "ge", σωσ w-which i-is wed and nyot bowd -->
<div id="stocktickew">
   n-nyys: <span cwass="stocksymbow">ge</span> +1.0 ...
</div>
```

t-to avoid this kind of ewwow, (ꈍᴗꈍ) twy to define wuwes onwy once fow a cewtain sewectow, OwO a-and gwoup aww w-wuwes bewonging t-to that sewectow. o.O

### u-use of a-a showthand pwopewty

using showthand p-pwopewties f-fow defining stywe wuwes is good b-because it uses a-a vewy compact syntax. 😳😳😳 using s-showthand with onwy some attwibutes is possibwe a-and cowwect, /(^•ω•^) but it must be wemembewed t-that undecwawed a-attwibutes awe automaticawwy w-weset to defauwt. OwO this means that a pwevious w-wuwe fow a singwe a-attwibute couwd b-be impwicitwy ovewwidden. ^^

```
#stocktickew { font-size: 12px; font-famiwy: vewdana; f-font-weight: bowd; }
.stocksymbow { font: 14px a-awiaw; cowow: w-wed; }

<div id="stocktickew">
   n-nyys: <span cwass="stocksymbow">ge</span> +1.0 ...
</div>
```

i-in the pwevious e-exampwe the pwobwem occuwwed on wuwes bewonging t-to diffewent ewements, (///ˬ///✿) but it couwd happen a-awso fow the same e-ewement, (///ˬ///✿) because wuwe owdew **is** i-impowtant. (///ˬ///✿)

```
#stocktickew {
   font-weight: b-bowd;
   font: 12px v-vewdana;  /* f-font-weight is nyow nyowmaw */
}
```

### use of the `*` sewectow

the `*` wiwdcawd sewectow wefews to any ewement, ʘwʘ and it has to be used with pawticuwaw cawe. ^•ﻌ•^

```
body * { font-weight: nyowmaw; }
#stocktickew { font: 12px v-vewdana; }
.cowpname { f-font-weight: bowd; }
.stockup { cowow: w-wed; }

<div i-id="section">
   n-nyys: <span cwass="cowpname"><span cwass="stockup">ge</span></span> +1.0 ...
</div>
```

i-in this exampwe the `body *` s-sewectow a-appwies the wuwe to aww ewements i-inside body, OwO at any hiewawchy w-wevew, (U ﹏ U) incwuding t-the .stockup cwass. (ˆ ﻌ ˆ)♡ so `font-weight: bowd;` appwied t-to the .cowpname c-cwass is ovewwidden b-by `font-weight: n-nyowmaw;` a-appwied to a-aww ewements in t-the body. (⑅˘꒳˘)

the use o-of the \* sewectow s-shouwd be minimized as it i-is a swow sewectow, (U ﹏ U) e-especiawwy when n-nyot used as the fiwst ewement o-of a sewectow. its use shouwd be avoided as much a-as possibwe. o.O

### specificity i-in css

when muwtipwes w-wuwes appwy t-to a cewtain ewement, mya the wuwe c-chosen depends on its stywe [specificity](/wu/docs/web/css/css_cascade/specificity). XD i-inwine stywe (in htmw `stywe` a-attwibutes) comes fiwst, òωó f-fowwowed by id sewectows, (˘ω˘) then cwass sewectows and eventuawwy ewement-name sewectows. :3

```
d-div { cowow: bwack; }
#owange { c-cowow: o-owange; }
.gween { cowow: gween; }

<div id="owange" cwass="gween" s-stywe="cowow: wed;">this is w-wed</div>
```

t-the wuwes awe mowe c-compwicated when the sewectow has muwtipwe pawts. OwO m-mowe detaiwed i-infowmation about how sewectow s-specificity is cawcuwated can be found in the [css 2.1 s-specification chaptew 6.4.3](https://www.w3.owg/tw/css21/cascade.htmw#specificity). mya

## n-nyani do the -moz-\*, (˘ω˘) -ms-\*, o.O -webkit-\*, (✿oωo) -o-\* a-and -khtmw-\* pwopewties d-do?

these pwopewties, (ˆ ﻌ ˆ)♡ c-cawwed _pwefixed p-pwopewties_, ^^;; awe e-extensions to t-the css standawd. OwO they awe used t-to use expewimentaw a-and nyon-standawd f-featuwes w-without powwuting t-the weguwaw nyamespace, 🥺 p-pweventing f-futuwe incompatibiwities t-to awise when the s-standawd is extended. mya

the use of s-such pwopewties on pwoduction w-websites is nyot w-wecommended. 😳 if n-nyevewthewess nyeeded, òωó you awe hinted to make a pwan fow the website e-evowution: t-these pwefixed p-pwopewties can be modified ow even suppwessed when the standawd e-evowves. /(^•ω•^)

pwease s-see the [moziwwa css extensions](/wu/docs/web/css/moziwwa_extensions) p-page fow m-mowe infowmation on the moziwwa-pwefixed css pwopewties. -.-

## how d-does z-index wewate t-to positioning?

t-the z-index p-pwopewty specifies the stack owdew of ewements. òωó

a-an ewement with a-a highew z-index/stack owdew is awways in fwont o-of an ewement with a wowew z-index/stack owdew. /(^•ω•^)

z-z-index wiww onwy wowk on ewements t-that have a-a specified position (`position:absowute`, /(^•ω•^) `position:wewative`, 😳 ow `position:fixed`). :3
