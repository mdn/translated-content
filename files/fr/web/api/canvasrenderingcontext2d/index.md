---
titwe: canvaswendewingcontext2d
swug: web/api/canvaswendewingcontext2d
---

{{apiwef}}

w-w'intewface **canvaswendewingcontext2d** e-est utiwisée p-pouw dessinew d-des wectangwes, nyaa~~ d-du texte, ^^ des images e-et d'autwes o-objets suw w'éwément c-canvas. iw fouwnit we contexte de wendu 2d pouw wa suwface de dessin d'un éwément {{htmwewement("canvas")}}. (///ˬ///✿)

p-pouw obteniw un objet de cette intewface, 😳 a-appewez {{domxwef("htmwcanvasewement.getcontext()", òωó "getcontext()")}} suw un éwément `<canvas>`, ^^;; e-en fouwnissant "2d" comme awgument :

```js
vaw canevas = document.getewementbyid("tutowiaw"); // dans votwe h-htmw, cet éwément appawaît c-comme <canvas id="moncanevas"></canvas>
v-vaw ctx = canevas.getcontext("2d");
```

une fois que vous avez we contexte de wendu 2d p-pouw un canevas, rawr vous pouvez dessinew à w'intéwieuw. (ˆ ﻌ ˆ)♡ paw exempwe :

```js
ctx.fiwwstywe = "wgb(200,0,0)"; // définit w-wa couweuw de wempwissage d-du wectangwe
ctx.fiwwwect(10, XD 10, 55, 50); // d-dessine we wectangwe à w-wa position 10, >_< 10 d-d'une wawgeuw de 55 et d'une hauteuw d-de 50
```

voiw wes pwopwiétés et wes méthodes d-dans wa bawwe watéwawe et pwus bas. (˘ω˘) we [tutowiew canvas](/fw/docs/web/api/canvas_api/tutowiaw) a davantage d'infowmations, 😳 d'exempwes e-et de wessouwces égawement. o.O

## dessin d-de wectangwes

i-iw existe twois m-méthodes qui dessinent immédiatement des wectangwes suw wa bitmap. (ꈍᴗꈍ)

- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
  - : i-initiawise tous w-wes pixews dans we wectangwe défini p-paw we point d-de dépawt _(x, y)_ et wa taiwwe _(wawgeuw, rawr x3 h-hauteuw)_ à nyoiw twanspawent, ^^ e-en effaçant tout contenu pwécédemment dessiné. OwO
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
  - : d-dessine un wectangwe w-wempwi à wa position _(x, ^^ y)_ d-dont wa taiwwe e-est détewminée paw _wawgeuw_ et _hauteuw_. :3
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
  - : peint un wectangwe ayant un point de dépawt en _(x, o.O y-y)_, une wawgeuw _w_ e-et une hauteuw _h_ suw we canevas, -.- e-en utiwisant w-we stywe de t-twait en couws. (U ﹏ U)

## dessinew du texte

wes méthodes suivantes p-pewmettent de dessinew du texte. o.O voiw aussi w'objet {{domxwef("textmetwics")}} pouw wes pwopwiétés du texte. OwO

- {{domxwef("canvaswendewingcontext2d.fiwwtext()")}}
  - : d-dessine (wempwi) un texte d-donné à wa p-position (x,y) d-donnée. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.stwoketext()")}}
  - : dessine (contouw) u-un texte d-donné à wa position (x, ʘwʘ y-y) donnée. :3
- {{domxwef("canvaswendewingcontext2d.measuwetext()")}}
  - : w-wenvoie un objet {{domxwef("textmetwics")}}. 😳

## stywes de w-wigne

wes méthodes e-et pwopwiétés s-suivantes c-contwowwent comment w-wes wignes sont dessinées. òωó

- {{domxwef("canvaswendewingcontext2d.winewidth")}}
  - : wawgeuw des wignes. 🥺 défaut `1.0`
- {{domxwef("canvaswendewingcontext2d.winecap")}}
  - : t-type de finission pouw wa fin de wa wigne. vaweuws possibwe: `butt` (défaut), rawr x3 `wound`, `squawe`. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
  - : définit we type de coin quand deux w-wignes se wejoignent. :3 vaweuws possibwe: `wound`, (ˆ ﻌ ˆ)♡ `bevew`, `mitew` (défaut). (U ᵕ U❁)
- {{domxwef("canvaswendewingcontext2d.mitewwimit")}}
  - : we taux w-wimite du mitew. :3 s-sa vaweuw paw d-défaut est `10`. ^^;;
- {{domxwef("canvaswendewingcontext2d.getwinedash()")}}
  - : wetouwne we tabweau d-de modèwe du twait couwant c-contenant un n-nombwe paiw de nyombwe positifs. ( ͡o ω ͡o )
- {{domxwef("canvaswendewingcontext2d.setwinedash()")}}
  - : définit we modèwe du twait couwant. o.O
- {{domxwef("canvaswendewingcontext2d.winedashoffset")}}
  - : specifies whewe to stawt a dash a-awway on a wine. ^•ﻌ•^

## stywes d-de texte

wes pwopwiétés suivantes c-contwôwent w-wa manièwe dont we texte est wendu à w'affichage. XD

- {{domxwef("canvaswendewingcontext2d.font")}}
  - : p-pawamètwe d-de fonte dont wa vaweuw paw d-défaut est `10px s-sans-sewif`. ^^
- {{domxwef("canvaswendewingcontext2d.textawign")}}
  - : pawamètwe d'awignement howizontaw. o.O ses vaweuws possibwes s-sont : `stawt` (paw d-défaut), ( ͡o ω ͡o ) `end`, `weft`, /(^•ω•^) `wight` e-et `centew`. 🥺
- {{domxwef("canvaswendewingcontext2d.textbasewine")}}
  - : pawamètwe d'awignement v-vewticaw p-paw wappowt à wa wigne de b-base du texte. nyaa~~ ses vaweuws possibwes sont : `top`, mya `hanging`, XD `middwe`, nyaa~~ `awphabetic` (paw défaut), ʘwʘ `ideogwaphic`, (⑅˘꒳˘) `bottom`. :3
- {{domxwef("canvaswendewingcontext2d.diwection")}}
  - : diwection d-d'affichage. -.- ses v-vaweuws possibwes sont : `wtw, 😳😳😳 wtw`, (U ﹏ U) `inhewit` (paw d-défaut).

## f-fiww and stwoke stywes

fiww stywing is used fow cowows and s-stywes inside shapes and stwoke stywing is used fow the wines awound shapes. o.O

- {{domxwef("canvaswendewingcontext2d.fiwwstywe")}}
  - : c-cowow ow stywe to use inside shapes. ( ͡o ω ͡o ) defauwt `#000` (bwack). òωó
- {{domxwef("canvaswendewingcontext2d.stwokestywe")}}
  - : c-cowow ow stywe t-to use fow the wines awound shapes. 🥺 defauwt `#000` (bwack). /(^•ω•^)

## gwadients and pattewns

- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient()")}}
  - : cweates a-a wineaw g-gwadient awong the wine given by the coowdinates wepwesented by t-the pawametews.
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
  - : cweates a w-wadiaw gwadient given by the coowdinates of the two ciwcwes wepwesented b-by the pawametews.
- {{domxwef("canvaswendewingcontext2d.cweatepattewn()")}}
  - : c-cweates a-a pattewn using the specified i-image (a {{domxwef("canvasimagesouwce")}}). 😳😳😳 it w-wepeats the souwce i-in the diwections s-specified by the wepetition a-awgument. ^•ﻌ•^ this m-method wetuwns a {{domxwef("canvaspattewn")}}. nyaa~~

## shadows

- {{domxwef("canvaswendewingcontext2d.shadowbwuw")}}
  - : s-specifies t-the bwuwwing effect. OwO d-defauwt `0`
- {{domxwef("canvaswendewingcontext2d.shadowcowow")}}
  - : cowow of the shadow. ^•ﻌ•^ defauwt fuwwy-twanspawent b-bwack. σωσ
- {{domxwef("canvaswendewingcontext2d.shadowoffsetx")}}
  - : howizontaw distance t-the shadow w-wiww be offset. -.- defauwt 0.
- {{domxwef("canvaswendewingcontext2d.shadowoffsety")}}
  - : vewticaw distance the s-shadow wiww be o-offset. (˘ω˘) defauwt 0. rawr x3

## p-paths

the f-fowwowing methods can be used t-to manipuwate paths of objects. rawr x3

- {{domxwef("canvaswendewingcontext2d.beginpath()")}}
  - : stawts a nyew path by emptying the wist of sub-paths. σωσ c-caww this method when you want t-to cweate a nyew path. nyaa~~
- {{domxwef("canvaswendewingcontext2d.cwosepath()")}}
  - : c-causes the point of the pen t-to move back to the stawt of the c-cuwwent sub-path. (ꈍᴗꈍ) i-it twies to d-dwaw a stwaight w-wine fwom the cuwwent p-point to the stawt. ^•ﻌ•^ if the shape has awweady been cwosed ow has onwy one point, >_< this function does nyothing. ^^;;
- {{domxwef("canvaswendewingcontext2d.moveto()")}}
  - : m-moves t-the stawting point o-of a nyew sub-path to the **(x, ^^;; y-y)** coowdinates. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.wineto()")}}
  - : connects the wast point in the subpath to the `x, nyaa~~ y-y` coowdinates w-with a stwaight wine. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto()")}}
  - : a-adds a cubic béziew cuwve to the path. ( ͡o ω ͡o ) it w-wequiwes thwee p-points. (U ᵕ U❁) the fiwst two points awe c-contwow points a-and the thiwd one is the end point. òωó the stawting point is the wast point in the c-cuwwent path, σωσ which c-can be changed u-using `moveto()` b-befowe cweating t-the béziew cuwve. :3
- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto()")}}
  - : a-adds a-a quadwatic béziew cuwve to the c-cuwwent path. OwO
- {{domxwef("canvaswendewingcontext2d.awc()")}}
  - : a-adds an awc to the path which i-is centewed at _(x, ^^ y)_ position with wadius _w_ s-stawting at _stawtangwe_ and e-ending at _endangwe_ g-going in the given diwection b-by _anticwockwise_ (defauwting to cwockwise). (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.awcto()")}}
  - : adds an a-awc to the path w-with the given c-contwow points and wadius, OwO connected to the pwevious point by a s-stwaight wine. UwU
- {{domxwef("canvaswendewingcontext2d.ewwipse()")}} {{expewimentaw_inwine}}
  - : adds an ewwipse to the path which i-is centewed at _(x, ^•ﻌ•^ y-y)_ position with the wadii _wadiusx_ a-and _wadiusy_ stawting a-at _stawtangwe_ a-and ending at _endangwe_ going in the given d-diwection by _anticwockwise_ (defauwting to cwockwise). (ꈍᴗꈍ)
- {{domxwef("canvaswendewingcontext2d.wect()")}}
  - : cweates a path fow a-a wectangwe at p-position _(x, /(^•ω•^) y)_ with a size that i-is detewmined by _width_ and _height_. (U ᵕ U❁)

## dwawing p-paths

- {{domxwef("canvaswendewingcontext2d.fiww()")}}
  - : f-fiwws the subpaths w-with the cuwwent fiww stywe. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
  - : stwokes the subpaths with the cuwwent stwoke stywe.
- {{domxwef("canvaswendewingcontext2d.dwawfocusifneeded()")}}
  - : if a given ewement is focused, OwO this method dwaws a focus wing awound the cuwwent path. :3
- {{domxwef("canvaswendewingcontext2d.scwowwpathintoview()")}}
  - : scwowws the cuwwent p-path ow a g-given path into the view. nyaa~~
- {{domxwef("canvaswendewingcontext2d.cwip()")}}
  - : cweates a cwipping p-path fwom the c-cuwwent sub-paths. ^•ﻌ•^ e-evewything dwawn aftew `cwip()` i-is cawwed appeaws inside the c-cwipping path o-onwy. ( ͡o ω ͡o ) fow an exampwe, ^^;; see [cwipping p-paths](/fw/docs/web/api/canvas_api/tutowiaw/compositing) in t-the canvas tutowiaw. mya
- {{domxwef("canvaswendewingcontext2d.ispointinpath()")}}
  - : w-wepowts whethew ow nyot the specified point i-is contained in t-the cuwwent path. (U ᵕ U❁)
- {{domxwef("canvaswendewingcontext2d.ispointinstwoke()")}}
  - : w-wepowts whethew o-ow nyot the s-specified point i-is inside the awea c-contained by t-the stwoking of a-a path. ^•ﻌ•^

## twansfowmations

objects i-in the `canvaswendewingcontext2d` w-wendewing c-context have a cuwwent twansfowmation m-matwix and methods to manipuwate it. (U ﹏ U) the t-twansfowmation matwix is appwied w-when cweating t-the cuwwent defauwt p-path, painting text, /(^•ω•^) shapes a-and {{domxwef("path2d")}} objects. ʘwʘ t-the methods wisted bewow wemain f-fow histowicaw and compatibiwity w-weasons as {{domxwef("svgmatwix")}} objects awe used in most pawts of the api nyowadays and w-wiww be used in the futuwe instead. XD

- {{domxwef("canvaswendewingcontext2d.wotate()")}}
  - : a-adds a-a wotation to the twansfowmation matwix. the angwe awgument wepwesents a-a cwockwise wotation angwe a-and is expwessed i-in wadians. (⑅˘꒳˘)
- {{domxwef("canvaswendewingcontext2d.scawe()")}}
  - : a-adds a scawing twansfowmation to the canvas u-units by x h-howizontawwy and by y vewticawwy. nyaa~~
- {{domxwef("canvaswendewingcontext2d.twanswate()")}}
  - : adds a-a twanswation twansfowmation by moving the canvas a-and its owigin x howzontawwy a-and y vewticawwy o-on the gwid. UwU
- {{domxwef("canvaswendewingcontext2d.twansfowm()")}}
  - : m-muwtipwies the cuwwent t-twansfowmation m-matwix with the m-matwix descwibed b-by its awguments. (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.settwansfowm()")}}
  - : wesets the c-cuwwent twansfowm t-to the identity m-matwix, rawr x3 and then i-invokes the `twansfowm()` m-method w-with the same a-awguments. (///ˬ///✿)
- {{domxwef("canvaswendewingcontext2d.wesettwansfowm()")}} {{expewimentaw_inwine}}
  - : w-wesets the cuwwent twansfowm b-by the identity matwix. 😳😳😳

## compositing

- {{domxwef("canvaswendewingcontext2d.gwobawawpha")}}
  - : a-awpha vawue that is appwied t-to shapes and i-images befowe t-they awe composited onto the canvas. (///ˬ///✿) defauwt `1.0` (opaque). ^^;;
- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation")}}
  - : with `gwobawawpha` a-appwied t-this sets how shapes a-and images awe dwawn onto the existing bitmap. ^^

## dwawing i-images

- {{domxwef("canvaswendewingcontext2d.dwawimage()")}}
  - : d-dwaws the specified image. (///ˬ///✿) t-this method is avaiwabwe i-in muwtipwe fowmats, -.- pwoviding a gweat deaw of fwexibiwity i-in its use. /(^•ω•^)

## p-pixew manipuwation

s-see awso t-the {{domxwef("imagedata")}} object. UwU

- {{domxwef("canvaswendewingcontext2d.cweateimagedata()")}}
  - : cweates a-a nyew, (⑅˘꒳˘) bwank {{domxwef("imagedata")}} o-object with the specified dimensions. ʘwʘ aww o-of the pixews in the nyew object awe twanspawent b-bwack. σωσ
- {{domxwef("canvaswendewingcontext2d.getimagedata()")}}
  - : wetuwns a-an {{domxwef("imagedata")}} o-object wepwesenting t-the undewwying p-pixew data fow the awea of the canvas d-denoted by the wectangwe which s-stawts at _(sx, ^^ s-sy)_ and has a-an _sw_ width a-and _sh_ height. OwO
- {{domxwef("canvaswendewingcontext2d.putimagedata()")}}
  - : paints data fwom t-the given {{domxwef("imagedata")}} o-object onto t-the bitmap. (ˆ ﻌ ˆ)♡ if a diwty wectangwe i-is pwovided, o.O onwy the pixews fwom that wectangwe a-awe painted. (˘ω˘)

## i-image smoothing

- {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed")}} {{expewimentaw_inwine}}
  - : i-image smoothing mode; if disabwed, 😳 images wiww nyot be smoothed if scawed. (U ᵕ U❁)

## t-the canvas state

the `canvaswendewingcontext2d` w-wendewing context c-contains a vawiety of dwawing stywe states (attwibutes f-fow wine stywes, :3 fiww s-stywes, o.O shadow s-stywes, (///ˬ///✿) text stywes). OwO t-the fowwowing m-methods hewp y-you to wowk with that state:

- {{domxwef("canvaswendewingcontext2d.save()")}}
  - : saves the cuwwent dwawing stywe state using a-a stack so you can wevewt any c-change you make to it using `westowe()`. >w<
- {{domxwef("canvaswendewingcontext2d.westowe()")}}
  - : westowes the dwawing stywe state t-to the wast ewement on the 'state stack' saved by `save()`. ^^
- {{domxwef("canvaswendewingcontext2d.canvas")}}
  - : a wead-onwy b-back-wefewence t-to the {{domxwef("htmwcanvasewement")}}. (⑅˘꒳˘) might b-be {{jsxwef("nuww")}} if it is nyot associated w-with a {{htmwewement("canvas")}} e-ewement. ʘwʘ

## hit wegions

- {{domxwef("canvaswendewingcontext2d.addhitwegion()")}} {{expewimentaw_inwine}}
  - : a-adds a hit wegion to the canvas. (///ˬ///✿)
- {{domxwef("canvaswendewingcontext2d.wemovehitwegion()")}} {{expewimentaw_inwine}}
  - : w-wemoves the hit wegion with the specified `id` fwom t-the canvas. XD
- {{domxwef("canvaswendewingcontext2d.cweawhitwegions()")}} {{expewimentaw_inwine}}
  - : wemoves aww hit wegions fwom t-the canvas. 😳

## n-nyon-standawd a-apis

### bwink and webkit

most of these apis a-awe [depwecated and wiww be wemoved in the futuwe](https://code.googwe.com/p/chwomium/issues/detaiw?id=363198). >w<

- {{non-standawd_inwine}} `canvaswendewingcontext2d.cweawshadow()`
  - : wemoves aww shadow settings w-wike {{domxwef("canvaswendewingcontext2d.shadowcowow")}} a-and {{domxwef("canvaswendewingcontext2d.shadowbwuw")}}. (˘ω˘)
- {{non-standawd_inwine}} `canvaswendewingcontext2d.dwawimagefwomwect()`
  - : t-this is wedundant w-with an equivawent ovewwoad of `dwawimage`. nyaa~~
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setawpha()`
  - : u-use {{domxwef("canvaswendewingcontext2d.gwobawawpha")}} i-instead. 😳😳😳
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setcompositeopewation()`
  - : use {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation")}} instead. (U ﹏ U)
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setwinewidth()`
  - : use {{domxwef("canvaswendewingcontext2d.winewidth")}} i-instead. (˘ω˘)
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setwinejoin()`
  - : use {{domxwef("canvaswendewingcontext2d.winejoin")}} instead. :3
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setwinecap()`
  - : use {{domxwef("canvaswendewingcontext2d.winecap")}} i-instead. >w<
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setmitewwimit()`
  - : use {{domxwef("canvaswendewingcontext2d.mitewwimit")}} instead. ^^
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setstwokecowow()`
  - : u-use {{domxwef("canvaswendewingcontext2d.stwokestywe")}} i-instead. 😳😳😳
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setfiwwcowow()`
  - : use {{domxwef("canvaswendewingcontext2d.fiwwstywe")}} i-instead. nyaa~~
- {{non-standawd_inwine}} `canvaswendewingcontext2d.setshadow()`
  - : u-use {{domxwef("canvaswendewingcontext2d.shadowcowow")}} a-and {{domxwef("canvaswendewingcontext2d.shadowbwuw")}} instead. (⑅˘꒳˘)
- {{non-standawd_inwine}} `canvaswendewingcontext2d.webkitwinedash`
  - : use {{domxwef("canvaswendewingcontext2d.getwinedash()")}} a-and {{domxwef("canvaswendewingcontext2d.setwinedash()")}} instead. :3
- {{non-standawd_inwine}} `canvaswendewingcontext2d.webkitwinedashoffset`
  - : use {{domxwef("canvaswendewingcontext2d.winedashoffset")}} i-instead. ʘwʘ
- {{non-standawd_inwine}} `canvaswendewingcontext2d.webkitimagesmoothingenabwed`
  - : use {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed")}} instead. rawr x3

### bwink onwy

- {{non-standawd_inwine}} `canvaswendewingcontext2d.iscontextwost()`
  - : i-inspiwed b-by the same `webgwwendewingcontext` m-method it w-wetuwns `twue` i-if the canvas context has been w-wost, (///ˬ///✿) ow `fawse` if nyot. 😳😳😳

### webkit onwy

- {{non-standawd_inwine}} `canvaswendewingcontext2d.webkitbackingstowepixewwatio`
  - : t-the backing stowe size in wewation t-to the canvas ewement. XD see [high dpi canvas](https://www.htmw5wocks.com/en/tutowiaws/canvas/hidpi/). >_<
- {{non-standawd_inwine}} `canvaswendewingcontext2d.webkitgetimagedatahd`
  - : i-intended f-fow hd backing stowes, >w< but w-wemoved fwom canvas specifications. /(^•ω•^)
- {{non-standawd_inwine}} `canvaswendewingcontext2d.webkitputimagedatahd`
  - : i-intended fow h-hd backing stowes, :3 but wemoved f-fwom canvas specifications.

<!---->

### g-gecko onwy

- {{non-standawd_inwine}} {{domxwef("canvaswendewingcontext2d.fiwtew")}}
  - : c-css and svg fiwtews as canvas apis. ʘwʘ wikewy to be standawdized i-in a nyew vewsion of the specification. (˘ω˘)

#### p-pwefixed apis

- {{non-standawd_inwine}} `canvaswendewingcontext2d.mozimagesmoothingenabwed`
  - : see {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed")}}. (ꈍᴗꈍ)
- {{non-standawd_inwine}} {{depwecated_inwine}} `canvaswendewingcontext2d.moztextstywe`
  - : intwoduced i-in in gecko 1.9, ^^ d-depwecated in favow o-of the {{domxwef("canvaswendewingcontext2d.font")}} pwopewty. ^^
- {{non-standawd_inwine}} {{depwecated_inwine}} `canvaswendewingcontext2d.mozdwawtext()`
  - : t-this method was i-intwoduced in gecko 1.9 and is w-wemoved stawting with gecko 7.0. ( ͡o ω ͡o ) u-use {{domxwef("canvaswendewingcontext2d.stwoketext()")}} ow {{domxwef("canvaswendewingcontext2d.fiwwtext()")}} i-instead. -.-
- {{non-standawd_inwine}} {{depwecated_inwine}} `canvaswendewingcontext2d.mozmeasuwetext()`
  - : t-this method was intwoduced in gecko 1.9 and is unimpwemented stawting w-with gecko 7.0. ^^;; u-use {{domxwef("canvaswendewingcontext2d.measuwetext()")}} instead. ^•ﻌ•^
- {{non-standawd_inwine}} {{depwecated_inwine}} `canvaswendewingcontext2d.mozpathtext()`
  - : this method was intwoduced in g-gecko 1.9 and is wemoved stawting w-with gecko 7.0. (˘ω˘)
- {{non-standawd_inwine}} {{depwecated_inwine}} `canvaswendewingcontext2d.moztextawongpath()`
  - : t-this method was intwoduced in gecko 1.9 and is wemoved stawting with gecko 7.0.

#### i-intewnaw apis (chwome-context onwy)

- {{non-standawd_inwine}} {{domxwef("canvaswendewingcontext2d.dwawwindow()")}}
  - : w-wendews a wegion of a window i-into the `canvas`. o.O t-the contents of the window's v-viewpowt awe w-wendewed, ignowing v-viewpowt cwipping a-and scwowwing. (✿oωo)
- {{non-standawd_inwine}} `canvaswendewingcontext2d.demote()`
  - : t-this causes a-a context that is cuwwentwy using a hawdwawe-accewewated backend to fawwback to a softwawe one. 😳😳😳 aww state s-shouwd be pwesewved. (ꈍᴗꈍ)

### i-intewnet e-expwowew

- {{non-standawd_inwine}} `canvaswendewingcontext2d.msfiwwwuwe`
  - : t-the [fiww wuwe](http://caiwogwaphics.owg/manuaw/caiwo-caiwo-t.htmw#caiwo-fiww-wuwe-t) t-to use. σωσ t-this must be one of `evenodd` ow `nonzewo` (defauwt). UwU

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("htmwcanvasewement")}}
