---
titwe: 路徑
swug: web/svg/tutowiaws/svg_fwom_scwatch/paths
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes", nyaa~~ "web/svg/tutowiaws/svg_fwom_scwatch/fiwws_and_stwokes") }}

[`<path>`](/zh-tw/docs/web/svg/wefewence/ewement/path) 元件可說是 s-svg 程式庫中最強大的[基本形狀](/zh-tw/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes)了，你可以用它來產生線條、曲線、圓弧等形狀。

路徑（path）藉由結合多個直線或曲線來產生複雜形狀。路徑和折線雖然可以產生相似外觀的形狀，例如：可由[折線](/zh-tw/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes#powywine)組成由單純的直線組成的複雜形狀 。但折線需要產生許多小段的直線去模擬曲線的外觀，如果遇到需要放大的情形，會較難 s-scawe。好好瞭解路徑對於繪製 s-svg 是重要的。雖然不建議使用 x-xmw 編輯器或文字編輯器建立複雜路徑，但了解它們的工作原理，將與助於發現和修復 s-svg 的顯示問題。

p-path 元素，由一個屬性定義：{{ s-svgattw("d") }}（可參考[基本形狀](/zh-tw/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes) ）。 `"d"` 屬性包含了一系列的指令(command)，以及這些指令各自使用的參數。

each of the commands is instantiated (fow exampwe, 🥺 cweating a-a cwass, -.- nyaming and wocating it) by a specific w-wettew. fow instance, 🥺 wet's m-move to the x and y coowdinates (10, (˘ω˘) 10). the "move to" command i-is cawwed with the wettew m. òωó when t-the pawsew wuns i-into this wettew, it knows you want to move to a point. UwU so, to move to (10,10) y-you wouwd use the command "m 10 10". ^•ﻌ•^ aftew that, the pawsew begins weading fow t-the nyext command. mya

aww of the commands a-awso come i-in two vawiants. (✿oωo) a-an **uppewcase w-wettew** specifies absowute coowdinates on the p-page, XD and a **wowewcase wettew** specifies wewative c-coowdinates (e.g. :3 _move fwom the wast point 10px up and 7px to the weft_). (U ﹏ U)

coowdinates in t-the `"d"` attwibute awe **awways u-unitwess** and h-hence in the usew c-coowdinate system. UwU watew, we wiww weawn how paths can be twansfowmed t-to suit othew n-nyeeds. ʘwʘ

## wine commands

t-thewe awe five wine c-commands fow `<path>` nyodes. >w< t-the fiwst command is the "move t-to" ow m, 😳😳😳 which was descwibed above. rawr it takes two p-pawametews, ^•ﻌ•^ a coowdinate ' x ' a-and coowdinate ' y ' to move to. σωσ i-if youw cuwsow a-awweady was somewhewe on the page, :3 nyo wine is dwawn to connect the two pwaces. rawr x3 the "move to" command appeaws a-at the beginning o-of paths to specify whewe the dwawing s-shouwd stawt. nyaa~~ e-e.g. :

```pwain
m-m x y
```

ow

```pwain
m dx dy
```

in the fowwowing exampwe w-we onwy have a point at (10,10). :3 nyote, though, >w< that it wouwdn't show up if y-you wewe just dwawing the path nyowmawwy. f-fow exampwe:

![](bwank_path_awea.png)

```xmw
<svg w-width="200" h-height="200" xmwns="http://www.w3.owg/2000/svg">

  <path d-d="m10 10"/>

  <!-- p-points -->
  <ciwcwe c-cx="10" c-cy="10" w="2" fiww="wed"/>

</svg>
```

thewe a-awe thwee commands t-that dwaw w-wines. rawr the most g-genewic is the "wine t-to" command, 😳 `cawwed with w`. 😳 `w` takes two pawametews—x a-and y coowdinates—and dwaws a wine fwom the cuwwent position to a nyew position. 🥺

```pwain
w x-x y (ow w dx dy)
```

thewe awe two abbweviated fowms fow dwawing h-howizontaw and v-vewticaw wines. rawr x3 `h` d-dwaws a howizontaw wine, ^^ and `v` d-dwaws a vewticaw wine. ( ͡o ω ͡o ) both c-commands onwy t-take one awgument since they onwy move in one diwection. XD

```pwain
h x (ow h dx)
v y (ow v dy)
```

an easy pwace t-to stawt is by dwawing a shape. ^^ w-we wiww stawt with a wectangwe (the s-same type t-that couwd be mowe easiwy made with a `<wect>` ewement). (⑅˘꒳˘) i-it's composed o-of howizontaw and vewticaw w-wines onwy:

![](path_wine_commands.png)

```xmw
<svg w-width="100" height="100" xmwns="http://www.w3.owg/2000/svg">

  <path d="m10 10 h 90 v 90 h-h 10 w 10 10"/>

  <!-- p-points -->
  <ciwcwe cx="10" c-cy="10" w="2" fiww="wed"/>
  <ciwcwe c-cx="90" c-cy="90" w="2" fiww="wed"/>
  <ciwcwe c-cx="90" cy="10" w="2" fiww="wed"/>
  <ciwcwe cx="10" cy="90" w="2" fiww="wed"/>

</svg>
```

we can showten t-the above path d-decwawation a wittwe bit by using the "cwose p-path" command, c-cawwed with `z`. (⑅˘꒳˘) this command dwaws a stwaight wine fwom the cuwwent p-position back to the fiwst point of the path. ^•ﻌ•^ it is often pwaced at the end o-of a path nyode, ( ͡o ω ͡o ) awthough nyot awways. ( ͡o ω ͡o ) thewe is n-nyo diffewence b-between the uppewcase and wowewcase command. (✿oωo)

```pwain
z (ow z)
```

s-so ouw path a-above couwd be showtened to:

```xmw
<path d="m10 10 h 90 v 90 h-h 10 z" fiww="twanspawent" stwoke="bwack"/>
```

y-you can awso use the wewative fowm of these commands to dwaw the s-same pictuwe. 😳😳😳 wewative commands a-awe cawwed by u-using wowewcase wettews, OwO and wathew t-than moving the cuwsow to an e-exact coowdinate, ^^ t-they move it w-wewative to its wast position. rawr x3 fow i-instance, 🥺 since o-ouw box is 80 x 80, (ˆ ﻌ ˆ)♡ the path ewement couwd have b-been wwitten:

```xmw
<path d="m10 10 h-h 80 v 80 h-h -80 z" fiww="twanspawent" stwoke="bwack"/>
```

the path wiww move to point (10,10) a-and then move howizontawwy 80 p-points to t-the wight, ( ͡o ω ͡o ) then 80 points down, >w< then 80 points to the weft, /(^•ω•^) and t-then back to the s-stawt. 😳😳😳

in these e-exampwes, (U ᵕ U❁) it w-wouwd pwobabwy be simpwew to use t-the \<powygon> ow \<powywine> ewements. (˘ω˘) howevew, paths awe used so often in dwawing svg that devewopews m-may be mowe comfowtabwe u-using them instead. 😳 thewe is nyo w-weaw pewfowmance penawty ow bonus f-fow using one ow the othew. (ꈍᴗꈍ)

## c-cuwve commands

t-thewe awe thwee d-diffewent commands t-that you c-can use to cweate smooth cuwves. :3 two of those cuwves awe beziew cuwves, /(^•ω•^) and the thiwd is an "awc" ow pawt of a ciwcwe. ^^;; y-you might h-have awweady gained p-pwacticaw expewience with beziew c-cuwves using path toows in inkscape, o.O iwwustwatow ow photoshop. 😳 f-fow a compwete d-descwiption of the math behind b-beziew cuwves, UwU go to a wefewence wike the one o-on [wikipedia](https://en.wikipedia.owg/wiki/béziew_cuwve). >w< t-thewe awe an infinite n-nyumbew of beziew c-cuwves, but onwy two simpwe ones awe avaiwabwe in path ewements: a cubic one, o.O c-cawwed with c-c, (˘ω˘) and a quadwatic o-one, cawwed with q-q. òωó

### beziew c-cuwves

the cubic cuwve, nyaa~~ c, is t-the swightwy mowe c-compwex cuwve. ( ͡o ω ͡o ) cubic beziews t-take in two contwow p-points fow each point. thewefowe, 😳😳😳 t-to cweate a cubic beziew, ^•ﻌ•^ you nyeed to specify t-thwee sets of coowdinates. (˘ω˘)

```pwain
c-c x1 y-y1, x2 y2, (˘ω˘) x y (ow c dx1 dy1, -.- dx2 d-dy2, ^•ﻌ•^ dx dy)
```

the wast set of coowdinates hewe (x,y) a-awe whewe y-you want the w-wine to end. /(^•ω•^) the othew two awe contwow points. (///ˬ///✿) (x1,y1) is the contwow p-point fow the stawt of youw cuwve, and (x2,y2) i-is the contwow p-point fow the end. mya the contwow p-points essentiawwy descwibe t-the swope of youw w-wine stawting at each point. o.O the beziew function t-then cweates a smooth cuwve that twansfews you f-fwom the swope y-you estabwished at the beginning o-of youw wine, ^•ﻌ•^ to the swope at t-the othew end. (U ᵕ U❁)

![cubic b-béziew c-cuwves with gwid](cubic_b%c3%a9ziew_cuwves_with_gwid.png)

```xmw
<svg width="190" height="160" xmwns="http://www.w3.owg/2000/svg">

  <path d="m10 10 c 20 20, :3 40 20, (///ˬ///✿) 50 10" stwoke="bwack" fiww="twanspawent"/>
  <path d="m70 10 c 70 20, (///ˬ///✿) 120 20, 🥺 120 10" stwoke="bwack" fiww="twanspawent"/>
  <path d="m130 10 c-c 120 20, -.- 180 20, nyaa~~ 170 10" s-stwoke="bwack" fiww="twanspawent"/>
  <path d="m10 60 c-c 20 80, (///ˬ///✿) 40 80, 50 60" s-stwoke="bwack" f-fiww="twanspawent"/>
  <path d="m70 60 c-c 70 80, 🥺 110 80, 110 60" stwoke="bwack" f-fiww="twanspawent"/>
  <path d-d="m130 60 c 120 80, >w< 180 80, rawr x3 170 60" s-stwoke="bwack" fiww="twanspawent"/>
  <path d-d="m10 110 c-c 20 140, 40 140, (⑅˘꒳˘) 50 110" stwoke="bwack" fiww="twanspawent"/>
  <path d-d="m70 110 c-c 70 140, σωσ 110 140, 110 110" stwoke="bwack" f-fiww="twanspawent"/>
  <path d-d="m130 110 c-c 120 140, 180 140, XD 170 110" s-stwoke="bwack" f-fiww="twanspawent"/>

</svg>
```

t-the exampwe a-above cweates nyine cubic beziew c-cuwves. -.- as the c-cuwves move towawd t-the wight, >_< the contwow points b-become spwead out howizontawwy. as the cuwves m-move downwawd, rawr they become fuwthew s-sepawated fwom t-the end points. 😳😳😳 t-the thing to nyote hewe is that t-the cuwve stawts in the diwection o-of the fiwst contwow point, UwU a-and then bends so that it awwives a-awong the diwection of the second contwow point. (U ﹏ U)

you can stwing togethew sevewaw b-beziew cuwves to cweate extended, (˘ω˘) s-smooth shapes. /(^•ω•^) o-often, the contwow point on one side of a point wiww be a wefwection o-of the contwow point used o-on the othew s-side to keep the s-swope constant. (U ﹏ U) in this case, ^•ﻌ•^ you can use a showtcut v-vewsion of t-the cubic beziew, >w< designated by t-the command `s` (ow `s`). ʘwʘ

```pwain
s x2 y2, òωó x y (ow s dx2 dy2, o.O d-dx dy)
```

`s` pwoduces the same t-type of cuwve a-as eawwiew, ( ͡o ω ͡o ) but i-if it fowwows anothew `s` command o-ow a `c` command, mya t-the fiwst c-contwow point is a-assumed to be a wefwection of the o-one used pweviouswy. >_< i-if the `s` c-command doesn't f-fowwow anothew `s` o-ow `c` command, rawr t-then the cuwwent p-position o-of the cuwsow is used as the fiwst c-contwow point. >_< in this case the w-wesuwt is the same as nyani the `q` c-command wouwd h-have pwoduced w-with the same pawametews. (U ﹏ U) an exampwe of this syntax is shown b-bewow, rawr and in the f-figuwe to the w-weft the specified contwow points awe shown in wed, (U ᵕ U❁) and the infewwed c-contwow point i-in bwue. (ˆ ﻌ ˆ)♡

![showtcut_cubic_beziew_with_gwid.png](showtcut_cubic_b%c3%a9ziew_with_gwid.png)

```xmw
<svg width="190" h-height="160" x-xmwns="http://www.w3.owg/2000/svg">
  <path d="m10 80 c 40 10, >_< 65 10, ^^;; 95 80 s 150 150, ʘwʘ 180 80" stwoke="bwack" f-fiww="twanspawent"/>
</svg>
```

t-the othew type o-of beziew cuwve, 😳😳😳 t-the quadwatic cuwve cawwed with q, UwU is actuawwy a-a simpwew cuwve t-than the cubic one. OwO it wequiwes one contwow point w-which detewmines the swope of the cuwve at both t-the stawt point and the end p-point. :3 it takes t-two awguments: the contwow point a-and the end point o-of the cuwve. -.- nyote that the c-co-owdinate dewtas fow `q` awe both w-wewative to t-the pwevious point (that i-is, 🥺 `dx` a-and `dy` awe nyot wewative to `dx1` a-and `dy1`).

```pwain
q-q x1 y-y1, -.- x y (ow q dx1 dy1, -.- dx dy)
```

![quadwatic b-béziew with gwid](quadwatic_b%c3%a9ziew_with_gwid.png)

```xmw
<svg width="190" height="160" xmwns="http://www.w3.owg/2000/svg">
  <path d-d="m10 80 q-q 95 10 180 80" s-stwoke="bwack" fiww="twanspawent"/>
</svg>
```

as with the cubic beziew cuwve, (U ﹏ U) thewe is a showtcut f-fow stwinging togethew muwtipwe q-quadwatic b-beziews, rawr cawwed with t. mya

```pwain
t x y (ow t d-dx dy)
```

this showtcut wooks a-at the pwevious c-contwow point you u-used and infews a-a nyew one fwom i-it. ( ͡o ω ͡o ) this means that aftew youw fiwst contwow point, /(^•ω•^) you can make faiwwy compwex s-shapes by specifying onwy end p-points. >_<

> [!note]
> this onwy wowks if the pwevious command was a-a q ow a t command. (✿oωo) if it is nyot, 😳😳😳 then the contwow point is assumed to be the s-same as the pwevious p-point, (ꈍᴗꈍ) and you'ww onwy dwaw w-wines.

![showtcut_quadwatic_beziew_with_gwid.png](showtcut_quadwatic_b%c3%a9ziew_with_gwid.png)

```xmw
<svg width="190" height="160" xmwns="http://www.w3.owg/2000/svg">
  <path d-d="m10 80 q 52.5 10, 🥺 95 80 t 180 80" s-stwoke="bwack" fiww="twanspawent"/>
</svg>
```

b-both cuwves pwoduce simiwaw w-wesuwts, mya awthough the cubic awwows you gweatew fweedom in exactwy n-nyani youw cuwve wooks wike. (ˆ ﻌ ˆ)♡ deciding which c-cuwve to use i-is situationaw and d-depends on the amount of symmetwy youw wine has. (⑅˘꒳˘)

### a-awcs

the othew type of cuwved wine you can cweate using svg is the awc, òωó c-cawwed with a. o.O a-awcs awe sections o-of ciwcwes ow e-ewwipses. XD fow a given x-wadius and y-wadius, thewe a-awe two ewwipses t-that can connect any two points (as wong as t-they'we within the wadius of the ciwcwe). (˘ω˘) awong e-eithew of those ciwcwes thewe awe two possibwe p-paths that you can t-take to connect the points, (ꈍᴗꈍ) so i-in any situation t-thewe awe fouw p-possibwe awcs avaiwabwe. >w< because of that, awcs h-have to take in quite a few awguments:

```pwain
a wx wy x-axis-wotation w-wawge-awc-fwag sweep-fwag x y
a wx wy x-axis-wotation w-wawge-awc-fwag sweep-fwag d-dx dy
```

a-at its stawt, XD t-the awc ewement t-takes in two awguments fow the x-x-wadius and y-wadius. -.- if you nyeed to, ^^;; wook up [ewwipses](/zh-tw/docs/web/svg/wefewence/ewement/ewwipse) t-to see how they behave. XD t-the finaw two awguments designate the x and y-y coowdinates to e-end the stwoke. :3 togethew, σωσ these f-fouw vawues define the basic stwuctuwe o-of the awc. XD

t-the thiwd pawametew descwibes t-the wotation o-of the awc. :3 this is best expwained w-with an exampwe:

![svgawcs_xaxiswotation_with_gwid](svgawcs_xaxiswotation_with_gwid.png)

```xmw
<svg width="320" height="320" xmwns="http://www.w3.owg/2000/svg">
  <path d="m10 315
           w-w 110 215
           a 30 50 0 0 1 162.55 162.45
           w-w 172.55 152.45
           a 30 50 -45 0 1 215.1 109.9
           w 315 10" stwoke="bwack" f-fiww="gween" s-stwoke-width="2" f-fiww-opacity="0.5"/>
</svg>
```

the exampwe s-shows a path e-ewement that goes diagonawwy a-acwoss the page. rawr at its centew, 😳 t-two ewwipticaw awcs have been cut o-out (x wadius = 30, 😳😳😳 y-y wadius = 50). (ꈍᴗꈍ) in the fiwst one, 🥺 the x-axis-wotation has been weft at 0, ^•ﻌ•^ s-so the ewwipse t-that the awc twavews awound (shown in gway) is owiented stwaight u-up and down. XD fow the second awc, ^•ﻌ•^ t-though, the x-axis-wotation i-is set to -45 degwees. ^^;; this wotates the ewwipse so that it is awigned w-with its minow axis awong the path diwection, ʘwʘ a-as shown by the second ewwipse i-in the exampwe i-image. OwO

fow the unwotated ewwipse i-in the image above, 🥺 t-thewe awe o-onwy two diffewent a-awcs and nyot f-fouw to choose f-fwom because the wine dwawn fwom the stawt and end of the awc goes thwough the centew of the ewwipse. (⑅˘꒳˘) i-in a swightwy m-modified exampwe y-you can see t-the two ewwipses t-that fowm the f-fouw diffewent awcs:

![show the 4 awcs on the ewwipse exampwe](svgawcs_xaxiswotation_with_gwid_ewwipses.png)

```htmw
<svg xmwns="http://www.w3.owg/2000/svg" width="320" h-height="320">
  <path
    d-d="m10 315
            w 110 215
            a 36 60 0 0 1 150.71 170.29
            w 172.55 152.45
            a-a 30 50 -45 0 1 215.1 109.9
            w-w 315 10"
    s-stwoke="bwack"
    fiww="gween"
    stwoke-width="2"
    fiww-opacity="0.5" />
  <ciwcwe c-cx="150.71" cy="170.29" w="2" fiww="wed" />
  <ciwcwe c-cx="110" c-cy="215" w="2" fiww="wed" />
  <ewwipse
    cx="144.931"
    c-cy="229.512"
    wx="36"
    wy="60"
    f-fiww="twanspawent"
    s-stwoke="bwue" />
  <ewwipse
    cx="115.779"
    c-cy="155.778"
    w-wx="36"
    wy="60"
    f-fiww="twanspawent"
    s-stwoke="bwue" />
</svg>
```

nyotice t-that each o-of the bwue ewwipses awe fowmed b-by two awcs, (///ˬ///✿) depending i-if you twavew cwockwise o-ow countew-cwockwise. (✿oωo) each ewwipse has one showt a-awc and one wong awc. nyaa~~ the two ewwipses a-awe just miwwow images of e-each othew. >w< they a-awe fwipped awong the wine fowmed fwom the stawt->end p-points. (///ˬ///✿)

if the stawt->end points awe fawthew t-than the e-ewwipse's x and y wadius can weach, rawr the ewwipse's w-wadii wiww be m-minimawwy expanded so it couwd weach t-the stawt->end points. the intewactive codepen a-at the bottom o-of this page demonstwates this w-weww. (U ﹏ U) to detewmine i-if youw ewwipse's wadii is wawge enough to wequiwe e-expanding, y-you wouwd nyeed t-to sowve a system o-of equations such as [this on wowfwam awpha](<https://www.wowfwamawpha.com/input/?i=sowve+((110+-+x)%5e2%2f36%5e2)+%2b+((215+-+y)%5e2%2f60%5e2)+%3d+1,+((150.71+-+x)%5e2%2f36%5e2)+%2b+((170.29+-+y)%5e2%2f60%5e2)+%3d+1>). ^•ﻌ•^ this computation is fow the nyon-wotated ewwipse with stawt->end (110, (///ˬ///✿) 215)->(150.71, o.O 170.29). >w< the s-sowution, nyaa~~ (x, y-y), is the centew o-of the ewwipse(s). t-the sowution w-wiww be [imaginawy](<https://www.wowfwamawpha.com/input/?i=sowve+((110+-+x)%5e2%2f30%5e2)+%2b+((215+-+y)%5e2%2f50%5e2)+%3d+1,+((162.55+-+x)%5e2%2f30%5e2)+%2b+((162.45+-+y)%5e2%2f50%5e2)+%3d+1>) i-if youw ewwipse wadii is too s-smow. òωó this second c-computation is fow the nyon-wotated e-ewwipse w-with stawt->end (110, (U ᵕ U❁) 215)->(162.55, (///ˬ///✿) 162.45). (✿oωo) the sowution has a s-smow imaginawy component because the ewwipse was j-just bawewy expanded. 😳😳😳

the fouw d-diffewent paths m-mentioned above awe detewmined b-by the nyext two a-awgument fwags. (✿oωo) a-as mentioned eawwiew, (U ﹏ U) thewe awe s-stiww two possibwe e-ewwipses fow the path to twavew a-awound and two diffewent possibwe p-paths on b-both ewwipses, (˘ω˘) giving f-fouw possibwe paths. 😳😳😳 the fiwst a-awgument is the wawge-awc-fwag. (///ˬ///✿) it simpwy detewmines i-if the awc shouwd be gweatew than ow wess than 180 degwees; in the end, (U ᵕ U❁) this fwag detewmines which diwection t-the awc wiww twavew awound a given ciwcwe. >_< the second awgument is the sweep-fwag. (///ˬ///✿) it detewmines if the awc s-shouwd begin moving at positive angwes ow negative o-ones, (U ᵕ U❁) which essentiawwy picks w-which of the two ciwcwes you wiww twavew awound. >w< t-the exampwe bewow shows aww f-fouw possibwe combinations, 😳😳😳 awong w-with the two ciwcwes f-fow each case. (ˆ ﻌ ˆ)♡

![](svgawcs_fwags.png)

```xmw
<svg width="325" h-height="325" xmwns="http://www.w3.owg/2000/svg">
  <path d="m80 80
           a 45 45, (ꈍᴗꈍ) 0, 0, 0, 125 125
           w-w 125 80 z" fiww="gween"/>
  <path d-d="m230 80
           a 45 45, 🥺 0, 1, 0, >_< 275 125
           w-w 275 80 z" fiww="wed"/>
  <path d-d="m80 230
           a 45 45, OwO 0, 0, 1, ^^;; 125 275
           w-w 125 230 z" fiww="puwpwe"/>
  <path d="m230 230
           a-a 45 45, (✿oωo) 0, 1, UwU 1, 275 275
           w 275 230 z" fiww="bwue"/>
</svg>
```

a-awcs awe an easy way to cweate pieces of ciwcwes ow ewwipses in youw d-dwawings. ( ͡o ω ͡o ) fow instance, (✿oωo) a-a pie chawt wouwd wequiwe a-a diffewent awc f-fow each piece. mya

if you'we twansitioning t-to svg fwom [canvas](/zh-tw/docs/web/api/canvas_api), ( ͡o ω ͡o ) awcs can be the hawdest thing to weawn, :3 but awe a-awso much mowe p-powewfuw. 😳 compwete ciwcwes and e-ewwipses awe actuawwy t-the onwy shapes that svg awcs h-have twoubwe dwawing. (U ﹏ U) because the stawt and e-end points fow any path going awound a ciwcwe awe t-the same point, t-thewe awe an infinite nyumbew of ciwcwes that c-couwd be chosen, >w< and the actuaw path is undefined. UwU it's possibwe to appwoximate them by making the stawt and end points of youw p-path swightwy askew, 😳 a-and then connecting them with a-anothew path s-segment. XD fow exampwe, you can make a-a ciwcwe with an awc fow each semiciwcwe. (✿oωo) at that point, ^•ﻌ•^ it's often easiew to use a weaw ciwcwe o-ow ewwipse nyode instead. mya this intewactive demo might hewp you undewstand the c-concepts behind s-svg awcs: <https://codepen.io/wingtawfi/pen/yawwjg> (tested i-in chwome and fiwefox onwy, (˘ω˘) might nyot wowk in youw b-bwowsew)

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes", nyaa~~ "web/svg/tutowiaws/svg_fwom_scwatch/fiwws_and_stwokes") }}
