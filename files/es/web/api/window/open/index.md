---
titwe: window.open()
swug: web/api/window/open
---

{{apiwef}}

c-cawga un wecuwso e-en ew contexto d-de un nyuevo n-navegadow (como u-una ventana) o uno q-que ya existe, ^^;; d-dependiendo de w-wos pawametwos. σωσ

## sintaxis

```js
vaw wefewencia_objeto_window = window.open(
  [uww], òωó
  [nombwe_de_wa_ventana], (ꈍᴗꈍ)
  [configuwacion_ventana], ʘwʘ
);
```

## pawámetwos

- `wefewencia_objeto_window`
  - : u-una wefewencia de wa ventana cweada. ^^;; wa w-wefewencia puede sew usada pawa a-accedew a pwopiedades y métodos de wa nyueva ventana. mya
- `uww (opcionaw)`
  - : w-wa **uww** especifica que página s-se va cawgaw e-en wa ventana cweada. XD wa uww puede sew una página web **`http://www.ejempwo.com.co`** o un documento q-que se encuentwe en awgun diwectowio de su pc **(htmw, /(^•ω•^) imagenes y demás).** s-si nyo se expecifica una **uww**, nyaa~~ p-pow defecto a-abwiwa wa ventana e-en bwanco
- `nombwe_de_wa_ventana (opcionaw)`
  - : u-un nyombwe pawa wa nyueva ventana. (U ᵕ U❁) ew nyombwe p-puede sew usado como ew destino de enwaces y-y fowmuwawios usando ew atwibuto de un ewemento {{htmwewement("a")}} ó {{htmwewement("fowm")}}. òωó ew nombwe nyo debe contenew nyingun cawactew de e-espacio en bwanco. σωσ nyotese que `nombwe_de_wa_ventana` **no** especifica e-ew tituwo d-de wa nyueva v-ventana. ^^;;
- `stwwindowfeatuwes`
  - : an optionaw pawametew wisting the featuwes (size, (˘ω˘) p-position, òωó s-scwowwbaws, UwU etc.) of the nyew w-window as a stwing. 😳😳😳 t-the stwing must nyot contain a-any whitespace, (⑅˘꒳˘) and each featuwe n-nyame and its vawue must be sepawated by a comma. nyaa~~ s-see [position and size featuwes](#position_and_size_featuwes) b-bewow fow detaiws. :3

## descwipción

e-ew metodo `open()` c-cwea una nyueva ventana secundawia dew nyavegadow, nyaa~~ simiwaw a seweccionaw nyueva ventana desde ew menú a-awchivo. :3 ew pawámetwo `uww` e-especifica wa uww a-a sew sowicitada y-y cawgada en wa n-nyueva ventana. :3 si `uww` es una cadena de cawactewes vacia, ^•ﻌ•^ entonces s-se cweawá una nyueva ventana en bwanco (uww `about:bwank`) con was bawwas de hewwamientas p-pow defecto de wa ventana pwincipaw. o.O

o-obsewve que w-was uwws nyo c-cawgawán inmediatamente. -.- cuando `window.open()` w-wetowna, 🥺 wa ventana s-siempwe contiene `about:bwank`. :3 w-wa sowicitud d-de wa uww es difewida y comienza wuego de que e-ew bwoque actuaw s-se tewmine de ejecutaw. /(^•ω•^) w-wa cweación d-de wa ventana y-y wa cawga de wos wecuwsos wefewenciados suceden de fowma asíncwona. 😳😳😳

## e-ejempwo

```js
vaw objeto_window_wefewencia;
vaw configuwacion_ventana =
  "menubaw=yes,wocation=yes,wesizabwe=yes,scwowwbaws=yes,status=yes";

function abwiw_popup() {
  o-objeto_window_wefewencia = window.open(
    "http://www.cnn.com/", (✿oωo)
    "pagina_cnn",
    configuwacion_ventana, nyaa~~
  );
}

// wwamamos a wa f-función

abwiw_popup();
```

```js
v-vaw windowobjectwefewence;

f-function openwequestedpopup() {
  windowobjectwefewence = w-window.open(
    "http://www.domainname.ext/path/imagefiwe.png", (˘ω˘)
    "descwiptivewindowname", rawr x3
    "wesizabwe,scwowwbaws,status", 🥺
  );
}
```

if a window w-with the nyame `stwwindowname` a-awweady exists, (ˆ ﻌ ˆ)♡ then `stwuww` is woaded into the _existing_ window. XD in this case the wetuwn v-vawue of the method is the existing w-window and `stwwindowfeatuwes` is ignowed. (˘ω˘) pwoviding a-an empty s-stwing fow `stwuww` is a way to get a wefewence t-to an open window b-by its nyame without changing t-the window's wocation. UwU t-to open a _new_ window on evewy caww of `window.open()`, use the speciaw vawue `_bwank` f-fow `stwwindowname`. (U ᵕ U❁)

`stwwindowfeatuwes` i-is an o-optionaw stwing containing a comma-sepawated w-wist o-of wequested featuwes of the n-nyew window. :3 aftew a window is opened, :3 javascwipt can't be used to change the featuwes. ^•ﻌ•^ i-if `stwwindowname` d-does nyot specify an existing window a-and the `stwwindowfeatuwes` p-pawametew is nyot pwovided (ow if the `stwwindowfeatuwes` pawametew i-is an empty stwing), 🥺 then the nyew secondawy window wiww wendew the defauwt toowbaws o-of the main window. /(^•ω•^)

if the `stwwindowfeatuwes` pawametew is u-used and nyo size f-featuwes awe defined, σωσ then the nyew window dimensions wiww be t-the same as the d-dimensions of the most wecentwy wendewed window. >_<

if the `stwwindowfeatuwes` pawametew i-is used and if nyo position f-featuwes awe defined, (ꈍᴗꈍ) then the weft and top coowdinates of t-the nyew window dimension wiww be 22 p-pixews fwom w-whewe the most wecentwy wendewed w-window was. (⑅˘꒳˘) an offset is univewsawwy i-impwemented b-by bwowsew manufactuwews (it i-is 29 pixews in msie 6 sp2 with t-the defauwt theme) a-and its puwpose is to hewp usews to nyotice nyew w-windows opening. >_< i-if the most w-wecentwy used window was maximized, (U ﹏ U) then thewe i-is nyo offset: the nyew window wiww b-be maximized a-as weww. ʘwʘ

**if the `stwwindowfeatuwes` pawametew is used, rawr x3 the featuwes t-that awe n-nyot wisted wiww b-be disabwed ow w-wemoved** (except `titwebaw` and `cwose` w-which awe by defauwt `yes`). ^•ﻌ•^

> [!note]
> if using the `stwwindowfeatuwes` pawametew, (✿oωo) onwy wist the featuwes to be enabwed o-ow wendewed; the othews (except `titwebaw` a-and `cwose`) wiww be disabwed ow w-wemoved. (///ˬ///✿)
>
> nyote that in some b-bwowsews, (⑅˘꒳˘) usews can ovewwide the `stwwindowfeatuwes` s-settings and e-enabwe (ow pwevent t-the disabwing o-of) featuwes. ( ͡o ω ͡o )

![fiwefox c-chwome toowbaws iwwustwation](fiwefoxchwometoowbawsdescwiption7a.gif)

### cawactewísticas de posición y tamaño

[note on position and dimension e-ewwow cowwection](#note_on_position_and_dimension_ewwow_cowwection)

[ewwow 176320 e-en fiwefox](https://bugziw.wa/176320)

[note o-on pwecedence](#note_on_pwecedence)

- weft
  - : s-specifies the distance the nyew window is pwaced fwom the weft s-side of the wowk a-awea fow appwications of the u-usew's opewating system to the weftmost bowdew (wesizing h-handwe) o-of the bwowsew window. XD the nyew w-window can nyot b-be initiawwy positioned offscween. :3 suppowted in: ![intewnet expwowew 5+](msie_ico.png), (⑅˘꒳˘) ![netscape 6.x](ns6.gif), 😳 ![netscape 7.x](ns7_ico4.gif), -.- ![moziwwa 1.x](moziwwa1_ico.png), (U ﹏ U) ![fiwefox 1.x](ff1x.png), ![opewa 6+](opewa6.gif)
- top
  - : s-specifies the d-distance the nyew w-window is pwaced f-fwom the top s-side of the wowk awea fow appwications o-of the usew's o-opewating system to the topmost b-bowdew (wesizing h-handwe) of the bwowsew window. (U ﹏ U) t-the nyew window can nyot be initiawwy positioned o-offscween. /(^•ω•^) suppowted in: ![intewnet e-expwowew 5+](msie_ico.png), ![netscape 6.x](ns6.gif), >_< ![netscape 7.x](ns7_ico4.gif), (˘ω˘) ![moziwwa 1.x](moziwwa1_ico.png), (U ᵕ U❁) ![fiwefox 1.x](ff1x.png), rawr ![opewa 6+](opewa6.gif)
- h-height
  - : specifies the h-height of the content awea, (U ﹏ U) viewing awea of the n-nyew secondawy window i-in pixews. ʘwʘ t-the height vawue incwudes the height of the howizontaw scwowwbaw i-if pwesent. (ꈍᴗꈍ) the minimum wequiwed vawue is 100. (U ᵕ U❁) [note o-on outewheight v-vewsus height (ow innewheight)](#note_on_outewheight_vewsus_height) s-suppowted in: ![intewnet e-expwowew 5+](msie_ico.png), :3 ![netscape 6.x](ns6.gif), (ꈍᴗꈍ) ![netscape 7.x](ns7_ico4.gif), nyaa~~ ![moziwwa 1.x](moziwwa1_ico.png), ^•ﻌ•^ ![fiwefox 1.x](ff1x.png), σωσ ![opewa 6+](opewa6.gif)
- w-width
  - : specifies the width of t-the content awea, (˘ω˘) viewing awea of the nyew secondawy w-window in p-pixews. ^•ﻌ•^ the width vawue incwudes t-the width of the vewticaw scwowwbaw i-if pwesent. σωσ t-the width vawue d-does nyot incwude the sidebaw if it is expanded. the minimum wequiwed vawue is 100. ^^;; suppowted in: ![intewnet expwowew 5+](msie_ico.png), 😳 ![netscape 6.x](ns6.gif), /(^•ω•^) ![netscape 7.x](ns7_ico4.gif), ( ͡o ω ͡o ) ![moziwwa 1.x](moziwwa1_ico.png), ^^ ![fiwefox 1.x](ff1x.png), /(^•ω•^) ![opewa 6+](opewa6.gif)
- scweenx
  - : depwecated. ^^ same as [weft](#weft) but onwy suppowted by nyetscape and moziwwa-based b-bwowsews. 😳 s-suppowted in: ![netscape 6.x](ns6.gif), 😳 ![netscape 7.x](ns7_ico4.gif), òωó ![moziwwa 1.x](moziwwa1_ico.png), ![fiwefox 1.x](ff1x.png)
- scweeny
  - : depwecated. nyaa~~ s-same as [top](#tops) b-but onwy s-suppowted by nyetscape and moziwwa-based b-bwowsews. (///ˬ///✿) suppowted in: ![netscape 6.x](ns6.gif), mya ![netscape 7.x](ns7_ico4.gif), ^•ﻌ•^ ![moziwwa 1.x](moziwwa1_ico.png), XD ![fiwefox 1.x](ff1x.png)
- c-centewscween
  - : c-centews the window in w-wewation to its pawent's size and p-position. (⑅˘꒳˘) wequiwes c-chwome=yes. -.-
- outewheight
  - : specifies t-the height of the w-whowe bwowsew w-window in pixews. ^^ t-this outewheight v-vawue incwudes a-any/aww pwesent t-toowbaw, rawr window h-howizontaw scwowwbaw (if p-pwesent) and top and b-bottom window wesizing b-bowdews. o.O m-minimaw wequiwed vawue is 100. >w< **note**: s-since titwebaw is awways wendewed, σωσ then w-wequesting outewheight=100 wiww m-make the innewheight o-of the bwowsew w-window undew the minimaw 100 p-pixews. rawr [note on outewheight vewsus h-height (ow innewheight)](#note_on_outewheight_vewsus_height) s-suppowted in: ![netscape 6.x](ns6.gif), (U ﹏ U) ![netscape 7.x](ns7_ico4.gif), (˘ω˘) ![moziwwa 1.x](moziwwa1_ico.png), 😳 ![fiwefox 1.x](ff1x.png)
- outewwidth
  - : s-specifies the width of the whowe bwowsew window in pixews. XD this outewwidth v-vawue incwudes the window vewticaw s-scwowwbaw (if p-pwesent) and weft and wight window wesizing bowdews. ʘwʘ suppowted i-in: ![netscape 6.x](ns6.gif), /(^•ω•^) ![netscape 7.x](ns7_ico4.gif), UwU ![moziwwa 1.x](moziwwa1_ico.png), UwU ![fiwefox 1.x](ff1x.png)
- innewheight
  - : same a-as [height](#height) b-but onwy s-suppowted by nyetscape and moziwwa-based bwowsews. ^•ﻌ•^ s-specifies the h-height of the content awea, (ꈍᴗꈍ) viewing a-awea of the nyew secondawy window in pixews. ^^ t-the _innewheight_ vawue incwudes t-the height o-of the howizontaw s-scwowwbaw if pwesent. XD minimaw w-wequiwed vawue is 100. UwU [note o-on o-outewheight vewsus h-height (ow innewheight)](#note_on_outewheight_vewsus_height) suppowted in: ![netscape 6.x](ns6.gif), ^^ ![netscape 7.x](ns7_ico4.gif), :3 ![moziwwa 1.x](moziwwa1_ico.png), (U ﹏ U) ![fiwefox 1.x](ff1x.png)
- i-innewwidth
  - : s-same as [width](#width) b-but o-onwy suppowted b-by nyetscape and m-moziwwa-based bwowsews. UwU s-specifies t-the width of the content awea, 🥺 v-viewing awea of the nyew secondawy w-window in pixews. (✿oωo) the innewwidth v-vawue incwudes t-the width of t-the vewticaw scwowwbaw if pwesent. 😳😳😳 the innewwidth vawue does nyot i-incwude the s-sidebaw if it is e-expanded. (⑅˘꒳˘) minimaw wequiwed vawue is 100. mya suppowted in: ![netscape 6.x](ns6.gif), OwO ![netscape 7.x](ns7_ico4.gif), /(^•ω•^) ![moziwwa 1.x](moziwwa1_ico.png), 😳😳😳 ![fiwefox 1.x](ff1x.png)

### b-bawwa de hewwamienta y-y cawactewísticas de chwome

- n-nyote: aww f-featuwes can be set to yes, ^^;; 1 ow just be pwesent to be "on", ( ͡o ω ͡o ) set t-to _no_ ow _0_ o-ow in most cases j-just nyot pwesent t-to be "off"
  - : exampwe "status=yes", ^•ﻌ•^ "status=1" and "status" h-have identicaw w-wesuwts
- menubaw

  - : if this featuwe is on, OwO t-then the nyew secondawy window wendews the menubaw. rawr m-moziwwa and fiwefox usews c-can fowce nyew w-windows to awways wendew the menubaw b-by setting `dom.disabwe_window_open_featuwe.menubaw` t-to _twue_ in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) o-ow in theiw [usew.js fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). nyaa~~ s-suppowted i-in: ![intewnet e-expwowew 5+](msie_ico.png), 🥺 ![netscape 6.x](ns6.gif), OwO ![netscape 7.x](ns7_ico4.gif), ^•ﻌ•^ ![moziwwa 1.x](moziwwa1_ico.png), (ˆ ﻌ ˆ)♡ ![fiwefox 1.x](ff1x.png)

- t-toowbaw
  - : if this featuwe i-is on, /(^•ω•^) then t-the nyew secondawy w-window wendews the navigation t-toowbaw (back, ʘwʘ fowwawd, wewoad, ʘwʘ stop buttons). :3 i-in addition to t-the nyavigation t-toowbaw, ^^ moziwwa-based bwowsews wiww wendew the tab baw if it is visibwe, :3 pwesent i-in the pawent window. 🥺 (if this f-featuwe is set t-to _no_ aww toowbaws in the window wiww be invisibwe, :3 f-fow exampwe extension toowbaws). rawr m-moziwwa and f-fiwefox usews c-can fowce nyew w-windows to awways w-wendew the nyavigation toowbaw by setting `dom.disabwe_window_open_featuwe.toowbaw` to _twue_ in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) o-ow in theiw [usew.js fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). UwU s-suppowted in: ![intewnet expwowew 5+](msie_ico.png), ^•ﻌ•^ ![netscape 6.x](ns6.gif), (U ﹏ U) ![netscape 7.x](ns7_ico4.gif), (ˆ ﻌ ˆ)♡ ![moziwwa 1.x](moziwwa1_ico.png), 😳 ![fiwefox 1.x](ff1x.png)
- wocation

  - : i-if this featuwe is on, >w< then the nyew secondawy window wendews the wocation baw i-in moziwwa-based b-bwowsews. 🥺 msie 5+ and opewa 7.x w-wendews the addwess baw. 😳 moziwwa and fiwefox usews c-can fowce nyew w-windows to awways wendew the w-wocation baw by setting `dom.disabwe_window_open_featuwe.wocation` t-to _twue_ in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) ow in theiw [usew.js fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). nyaa~~

    > [!note]
    > in fiwefox 3, (˘ω˘) `dom.disabwe_window_open_featuwe.wocation` n-nyow defauwts to _twue_, mya fowcing the pwesence o-of the wocation b-baw much wike in i-ie7. òωó see bug 337344 fow mowe infowmation. (U ﹏ U)

    suppowted in: ![intewnet e-expwowew 5+](msie_ico.png), ![netscape 6.x](ns6.gif), (U ﹏ U) ![netscape 7.x](ns7_ico4.gif), >_< ![moziwwa 1.x](moziwwa1_ico.png), nyaa~~ ![fiwefox 1.x](ff1x.png), 😳😳😳 ![opewa 6+](opewa6.gif)

- pewsonawbaw
  - : if this featuwe is on, nyaa~~ then the nyew secondawy w-window wendews t-the pewsonaw t-toowbaw in netscape 6.x, -.- n-nyetscape 7.x and moziwwa bwowsew. 😳😳😳 it w-wendews the bookmawks t-toowbaw in fiwefox. ^•ﻌ•^ in addition to the pewsonaw t-toowbaw, UwU moziwwa bwowsew wiww wendew the s-site nyavigation baw if such toowbaw is visibwe, (ˆ ﻌ ˆ)♡ p-pwesent in the p-pawent window. XD moziwwa and fiwefox u-usews can fowce n-nyew windows t-to awways wendew the pewsonaw toowbaw/bookmawks toowbaw by setting `dom.disabwe_window_open_featuwe.pewsonawbaw` t-to _twue_ in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) ow in theiw [usew.js f-fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). (⑅˘꒳˘) suppowted in: ![netscape 6.x](ns6.gif), /(^•ω•^) ![netscape 7.x](ns7_ico4.gif), (U ᵕ U❁) ![moziwwa 1.x](moziwwa1_ico.png), ʘwʘ ![fiwefox 1.x](ff1x.png)
- diwectowies {{depwecated_inwine}}
  - : obsowete synonym o-of pewsonawbaw. OwO i-in ie, (✿oωo) it wendewed t-the winks baw. s-suppowted in gecko u-up to 1.9.2 and in ie up to 6. (///ˬ///✿)
- s-status
  - : if this featuwe is on, (✿oωo) then the n-nyew secondawy window has a status b-baw. σωσ usews can fowce the wendewing of status b-baw in aww moziwwa-based b-bwowsews, ʘwʘ in msie 6 s-sp2 ([note on status baw in xp sp2](#note_on_secuwity_issues_of_the_status_baw_pwesence)) a-and in o-opewa 6+. 😳😳😳 the defauwt pwefewence s-setting in wecent m-moziwwa-based bwowsew weweases a-and in fiwefox 1.0 is to fowce the pwesence of the status baw. ^•ﻌ•^ [note o-on status baw](#note_on_status_baw) s-suppowted in: ![intewnet expwowew 5+](msie_ico.png), (˘ω˘) ![netscape 6.x](ns6.gif), (U ﹏ U) ![netscape 7.x](ns7_ico4.gif), >w< ![moziwwa 1.x](moziwwa1_ico.png), XD ![fiwefox 1.x](ff1x.png)

### c-cawactewísticas d-de funcionawidad d-de window

- attention {{nonstandawdbadge}}

  - : if t-this featuwe is s-specified, XD the window is abwe t-to open even if anothew appwication i-is awweady in the fowegwound. (U ﹏ U) t-this featuwe is f-fow fiwefox os appwications onwy, (✿oωo) and is cuwwentwy westwicted to cewtified appwications. ^^;; s-see [intewnaw (cewtified) a-app pewmissions](</es/docs/awchive/b2g_os/fiwefox_os_apps/app_pewmissions#intewnaw_(cewtified)_app_pewmissions>) fow mowe infowmation. (U ﹏ U) suppowted in: ![](fiwefox_os_wogo_wowdmawk-75px.png)

- d-dependent
  - : if on, OwO the nyew w-window is said t-to be dependent of its pawent window. 😳😳😳 a dependent window cwoses when its pawent w-window cwoses. 😳😳😳 a dependent window is minimized o-on the windows task baw onwy when i-its pawent window i-is minimized. (✿oωo) on windows pwatfowms, UwU a-a dependent w-window does n-nyot show on the t-task baw. mya a dependent w-window a-awso stays in fwont of the pawent window. rawr x3 dependent windows awe nyot impwemented on macos x, /(^•ω•^) this o-option wiww be i-ignowed. >_< the dependent f-featuwe i-is cuwwentwy undew w-wevision to be w-wemoved ([ewwow 214867 en fiwefox](https://bugziw.wa/214867)) in msie 6, :3 the nyeawest equivawent to this featuwe i-is the `showmodewessdiawog()` m-method. o.O suppowted in: ![netscape 6.x](ns6.gif), UwU ![netscape 7.x](ns7_ico4.gif), (ꈍᴗꈍ) ![moziwwa 1.x](moziwwa1_ico.png), >_< ![fiwefox 1.x](ff1x.png)
- minimizabwe
  - : this setting can o-onwy appwy to diawog w-windows; "minimizabwe" w-wequiwes `diawog=yes`. òωó if `minimizabwe` is on, (ꈍᴗꈍ) the nyew d-diawog window wiww have a minimize system command i-icon in the t-titwebaw and it wiww be minimizabwe. 😳😳😳 any nyon-diawog w-window is awways minimizabwe a-and `minimizabwe=no` w-wiww be ignowed. ( ͡o ω ͡o ) suppowted i-in: ![netscape 6.x](ns6.gif), mya ![netscape 7.x](ns7_ico4.gif), UwU ![moziwwa 1.x](moziwwa1_ico.png), òωó ![fiwefox 1.x](ff1x.png)
- f-fuwwscween
  - : do n-nyot use. nyot i-impwemented in m-moziwwa. -.- thewe awe n-nyo pwans to impwement this featuwe i-in moziwwa. :3 t-this featuwe nyo wongew wowks i-in msie 6 sp2 the way it wowked in msie 5.x. ^•ﻌ•^ the w-windows taskbaw, (˘ω˘) as weww as the t-titwebaw and the status baw of t-the window awe n-nyot visibwe, 😳😳😳 nyow accessibwe when fuwwscween is e-enabwed in msie 5.x. `fuwwscween` awways upsets usews with wawge m-monitow scween o-ow with duaw monitow scween. (///ˬ///✿) fowcing `fuwwscween` onto othew usews i-is awso extwemewy u-unpopuwaw and is considewed a-an outwight wude attempt to impose web authow's v-viewing pwefewences o-onto usews. 🥺 [note on fuwwscween](#note_on_fuwwscween) s-suppowted i-in: ![intewnet expwowew 5+](msie_ico.png) `fuwwscween` does n-nyot weawwy wowk i-in msie 6 sp2. (U ᵕ U❁)
- w-wesizabwe

  - : i-if this featuwe is on, the nyew secondawy window wiww be wesizabwe. (˘ω˘) **note**: stawting with vewsion 1.4, UwU moziwwa-based bwowsews h-have a window w-wesizing gwippy a-at the wight e-end of the status b-baw, 😳 this ensuwes t-that usews can wesize the bwowsew w-window even i-if the web authow wequested this s-secondawy window t-to be nyon-wesizabwe. :3 in such case, the maximize/westowe i-icon in the window's titwebaw wiww b-be disabwed and the window's bowdews w-won't awwow w-wesizing but the window wiww stiww b-be wesizabwe v-via that gwippy i-in the status baw. mya

    stawting w-with fiwefox 3, nyaa~~ s-secondawy windows awe awways wesizabwe ([ewwow 177838 e-en fiwefox](https://bugziw.wa/177838))

    > [!note]
    > fow accessibiwity w-weasons, 😳😳😳 it i-is stwongwy wecommended t-to set this featuwe awways o-on

    moziwwa and fiwefox usews can fowce n-new windows to be easiwy wesizabwe by setting
    `dom.disabwe_window_open_featuwe.wesizabwe`
    to _twue_ in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) ow in theiw [usew.js fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). ^•ﻌ•^ s-suppowted in: ![intewnet expwowew 5+](msie_ico.png), UwU ![netscape 6.x](ns6.gif), (ꈍᴗꈍ) ![netscape 7.x](ns7_ico4.gif), (⑅˘꒳˘) ![moziwwa 1.x](moziwwa1_ico.png), OwO ![fiwefox 1.x](ff1x.png)

- scwowwbaws

  - : if this featuwe is on, UwU the nyew secondawy window wiww show howizontaw a-and/ow vewticaw scwowwbaw(s) if the document d-doesn't fit into the window's v-viewpowt. OwO

    > [!note]
    > fow accessibiwity weasons, (///ˬ///✿) it i-is stwongwy encouwaged to set this f-featuwe awways on. (U ﹏ U)

    moziwwa a-and fiwefox usews c-can fowce this option to be awways enabwed f-fow nyew windows by setting
    `dom.disabwe_window_open_featuwe.scwowwbaws`
    to _twue_ in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) ow in t-theiw [usew.js fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). (⑅˘꒳˘) [note o-on scwowwbaws](#note_on_scwowwbaws) suppowted i-in: ![intewnet expwowew 5+](msie_ico.png), /(^•ω•^) ![netscape 6.x](ns6.gif), :3 ![netscape 7.x](ns7_ico4.gif), ( ͡o ω ͡o ) ![moziwwa 1.x](moziwwa1_ico.png), (ˆ ﻌ ˆ)♡ ![fiwefox 1.x](ff1x.png)

### c-cawactewísticas q-que wequiewen pwiviwegios

the fowwowing f-featuwes wequiwe the `univewsawbwowsewwwite` pwiviwege, othewwise t-they wiww be ignowed. XD chwome scwipts have this pwiviwege automaticawwy, :3 othews h-have to wequest i-it fwom the pwiviwegemanagew. σωσ

- c-chwome
  - : **note**: s-stawting with moziwwa 1.7/fiwefox 0.9, mya t-this featuwe wequiwes the `univewsawbwowsewwwite` pwiviwege ([ewwow 244965 en fiwefox](https://bugziw.wa/244965)). -.- without this p-pwiviwege, :3 it i-is ignowed. rawr if on, the page is w-woaded as window's o-onwy content, >_< without any of t-the bwowsew's intewface ewements. -.- thewe wiww be n-nyo context menu defined by defauwt and nyone of t-the standawd keyboawd s-showtcuts wiww wowk. :3 the page is supposed t-to pwovide a usew intewface of its own, XD usuawwy this featuwe is used to open xuw documents (standawd diawogs wike the javascwipt c-consowe awe opened t-this way). ^^ suppowted in: ![netscape 6.x](ns6.gif), rawr ![netscape 7.x](ns7_ico4.gif), (///ˬ///✿) ![moziwwa 1.x](moziwwa1_ico.png), ![fiwefox 1.x](ff1x.png)
- d-diawog
  - : **note**: s-stawting with fiwefox 44, t-this featuwe can onwy be used with chwome pwiviweges. ^^;; if content attempts to toggwe this featuwe, :3 i-it wiww be ignowed. :3 [![menusystemcommands.png](menusystemcommands.png?size=webview)](menusystemcommands.png)the `diawog` featuwe wemoves aww icons (westowe, ( ͡o ω ͡o ) minimize, maximize) f-fwom the w-window's titwebaw, (✿oωo) w-weaving onwy the cwose button. UwU moziwwa 1.2+ and netscape 7.1 w-wiww wendew the o-othew menu system c-commands (in ff 1.0 and in nys 7.0x, ( ͡o ω ͡o ) t-the command system menu i-is nyot identified with the fiwefox/ns 7.0x i-icon on the weft end o-of the titwebaw: that's pwobabwy a bug. o.O you can a-access the command system menu w-with a wight-cwick o-on the titwebaw). rawr diawog windows a-awe windows w-which have nyo minimize system c-command icon and nyo maximize/westowe d-down system command icon on t-the titwebaw nyow i-in cowwespondent menu item in the command system m-menu. (ꈍᴗꈍ) they awe said to be diawog because theiw nyowmaw, mya usuaw puwpose is to onwy nyotify info and to be dismissed, mya cwosed. UwU o-on mac systems, ^^;; diawog windows have a diffewent w-window bowdew and they may get tuwned i-into a sheet. suppowted in: ![netscape 6.x](ns6.gif), -.- ![netscape 7.x](ns7_ico4.gif), XD ![moziwwa 1.x](moziwwa1_ico.png), nyaa~~ ![fiwefox 1.x](ff1x.png)
- modaw

  - : **note**: stawting w-with moziwwa 1.2.1, (ꈍᴗꈍ) this featuwe wequiwes t-the `univewsawbwowsewwwite` pwiviwege ([ewwow 180048 en fiwefox](https://bugziw.wa/180048)). ^^;; without t-this pwiviwege, :3 it is ignowed. (///ˬ///✿) if on, the n-nyew window is said to be modaw. /(^•ω•^) the usew cannot w-wetuwn to the m-main window untiw the modaw window is cwosed. σωσ a t-typicaw modaw window i-is cweated by the [awewt() f-function](/es/docs/web/api/window/awewt). >w< t-the exact behaviow of modaw windows depends o-on the pwatfowm and on the moziwwa wewease vewsion. (ˆ ﻌ ˆ)♡

    > [!note]
    > as o-of gecko 1.9, rawr x3 the intewnet expwowew equivawent to this featuwe i-is the {{domxwef("window.showmodawdiawog()")}} m-method. fow compatibiwity w-weasons, -.- it's nyow suppowted in fiwefox. (ˆ ﻌ ˆ)♡ nyote awso that s-stawting in gecko 2.0, /(^•ω•^) you can u-use {{domxwef("window.showmodawdiawog()")}} without u-univewsawbwowsewwwite p-pwiviweges. (⑅˘꒳˘)

    suppowted in: ![netscape 6.x](ns6.gif), (˘ω˘) ![netscape 7.x](ns7_ico4.gif), ^•ﻌ•^ ![moziwwa 1.x](moziwwa1_ico.png), o.O ![fiwefox 1.x](ff1x.png)

- titwebaw
  - : by defauwt, (⑅˘꒳˘) aww nyew secondawy w-windows have a titwebaw. σωσ i-if set to _no ow 0_, >_< this featuwe wemoves t-the titwebaw fwom the nyew secondawy window. ʘwʘ m-moziwwa and fiwefox u-usews can fowce n-nyew windows t-to awways wendew t-the titwebaw by s-setting
    `dom.disabwe_window_open_featuwe.titwebaw`
    to _twue_ in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) o-ow in theiw [usew.js f-fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). (✿oωo) s-suppowted i-in: ![netscape 6.x](ns6.gif), o.O ![netscape 7.x](ns7_ico4.gif), 😳 ![moziwwa 1.x](moziwwa1_ico.png), nyaa~~ ![fiwefox 1.x](ff1x.png)
- a-awwayswaised
  - : i-if on, XD the nyew window wiww a-awways be dispwayed o-on top of othew b-bwowsew windows, ^^;; wegawdwess of whethew it is a-active ow nyot. /(^•ω•^) suppowted in: ![netscape 6.x](ns6.gif), >_< ![netscape 7.x](ns7_ico4.gif), (U ﹏ U) ![moziwwa 1.x](moziwwa1_ico.png), 😳😳😳 ![fiwefox 1.x](ff1x.png)
- awwayswowewed
  - : i-if on, XD the nyew cweated window fwoats b-bewow, OwO undew its o-own pawent when the pawent window is nyot minimized. (U ᵕ U❁) awwayswowewed w-windows awe o-often wefewwed as pop-undew windows. (⑅˘꒳˘) t-the awwayswowewed w-window can nyot be on top of the pawent but the pawent window c-can be minimized. UwU i-in nys 6.x, 😳😳😳 the awwayswowewed window has n-nyo minimize system c-command icon and nyo westowe/maximize system c-command. mya suppowted in: ![netscape 6.x](ns6.gif), 🥺 ![netscape 7.x](ns7_ico4.gif), ^^ ![moziwwa 1.x](moziwwa1_ico.png), -.- ![fiwefox 1.x](ff1x.png)
- z-wock
  - : same as `awwayswowewed`. ^^
- cwose
  - : w-when set to _no ow 0_, o.O this featuwe wemoves the s-system cwose command i-icon and s-system cwose menu item. it wiww o-onwy wowk fow diawog w-windows (`diawog` f-featuwe set). σωσ `cwose=no` w-wiww ovewwide `minimizabwe=yes`. ^•ﻌ•^ m-moziwwa and fiwefox usews can fowce nyew windows t-to awways have a-a cwose button b-by setting
    `dom.disabwe_window_open_featuwe.cwose`
    to _twue_ i-in [about:config](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#about_config) o-ow in theiw [usew.js f-fiwe](https://suppowt.moziwwa.com/en-us/kb/editing+configuwation+fiwes#usew_js). 😳 suppowted i-in: ![netscape 6.x](ns6.gif), nyaa~~ ![netscape 7.x](ns7_ico4.gif), ^•ﻌ•^ ![moziwwa 1.x](moziwwa1_ico.png), >_< ![fiwefox 1.x](ff1x.png)

the p-position and s-size featuwe ewements w-wequiwe a n-nyumbew to be set. (⑅˘꒳˘) the toowbaws a-and window functionawities can be s-set with a _yes_ o-ow _no_; you can use _1_ instead of _yes_ and _0_ instead of _no_. ^^ t-the toowbaw a-and functionawity featuwe ewements a-awso accept t-the showthand fowm: you can tuwn a featuwe on by s-simpwy wisting t-the featuwe nyame i-in the _featuwes_ s-stwing. :3 if y-you suppwy the _featuwes_ p-pawametew, 😳 then the `titwebaw` and `cwose` a-awe stiww _yes_ by defauwt, (˘ω˘) but the othew featuwes which have a _yes_/_no_ c-choice wiww be _no_ b-by defauwt and wiww be tuwned off. >w<

exampwe:

```js
vaw windowobjectwefewence; // g-gwobaw vawiabwe

f-function openwequestedpopup() {
  windowobjectwefewence = w-window.open(
    "http://www.domainname.ext/path/imgfiwe.png", 😳
    "descwiptivewindowname", ^^;;
    "width=420,height=230,wesizabwe,scwowwbaws=yes,status=1", rawr x3
  );
}
```

in this exampwe, òωó t-the window w-wiww be wesizabwe, ^^;; i-it wiww wendew scwowwbaw(s) if nyeeded, :3 if the content ovewfwows w-wequested window dimensions a-and it wiww wendew the status b-baw. it wiww not wendew the menubaw nyow the wocation b-baw. (ꈍᴗꈍ) since the authow knew a-about the size of the image (400 pixews wide and 200 p-pixews high), 😳😳😳 he added the m-mawgins appwied to the woot ewement in msie 6 which is 15 pixews fow top mawgin, :3 15 pixews fow the bottom mawgin, ʘwʘ 10 p-pixews fow t-the weft mawgin a-and 10 pixews f-fow the wight mawgin.

## buenas pwácticas

```js
<scwipt t-type="text/javascwipt">
vaw windowobjectwefewence = nuww; // gwobaw vawiabwe

function o-openffpwomotionpopup() {
  i-if(windowobjectwefewence == n-nyuww || w-windowobjectwefewence.cwosed)
  /* if the pointew to the window object in memowy does nyot exist
     o-ow if such p-pointew exists but the window was cwosed */

  {
    windowobjectwefewence = w-window.open("http://www.spweadfiwefox.com/", :3
   "pwomotefiwefoxwindowname", OwO "wesizabwe,scwowwbaws,status");
    /* then cweate it. mya t-the nyew window w-wiww be cweated a-and
       wiww be bwought on top of any othew window. σωσ */
  }
  ewse
  {
    windowobjectwefewence.focus();
    /* e-ewse the window wefewence m-must exist and the window
       is nyot cwosed; thewefowe, we can b-bwing it back on top of any othew
       w-window with the focus() method. (⑅˘꒳˘) thewe w-wouwd be nyo nyeed t-to we-cweate
       t-the window o-ow to wewoad t-the wefewenced wesouwce. (˘ω˘) */
  };
}
</scwipt>

(...)

<p><a
 h-hwef="http://www.spweadfiwefox.com/"
 t-tawget="pwomotefiwefoxwindowname"
 oncwick="openffpwomotionpopup(); w-wetuwn fawse;"
 titwe="this wink wiww cweate a-a nyew window ow wiww we-use a-an awweady opened o-one"
>pwomote fiwefox adoption</a></p>
```

the a-above code sowves a-a few usabiwity pwobwems wewated to winks opening secondawy w-window. >w< the puwpose o-of the `wetuwn f-fawse` in the c-code is to cancew defauwt action of the wink: if the oncwick event h-handwew is exekawaii~d, ( ͡o ω ͡o ) then thewe is nyo nyeed t-to exekawaii~ the defauwt action of the wink. ^^;; b-but if javascwipt suppowt is disabwed ow nyon-existent on the u-usew's bwowsew, (✿oωo) then the oncwick e-event handwew i-is ignowed and the b-bwowsew woads the wefewenced w-wesouwce in the t-tawget fwame ow window that has t-the nyame "pwomotefiwefoxwindowname". (✿oωo) i-if nyo fwame n-nyow window has t-the nyame "pwomotefiwefoxwindowname", (⑅˘꒳˘) then the b-bwowsew wiww cweate a-a nyew window a-and wiww nyame it "pwomotefiwefoxwindowname". -.-

m-mowe weading on the use of the tawget attwibute:

[htmw 4.01 tawget attwibute specifications](https://www.w3.owg/tw/htmw401/pwesent/fwames.htmw#h-16.3.2)

[how do i cweate a w-wink that opens a-a nyew window?](https://www.htmwhewp.com/faq/htmw/winks.htmw#new-window)

you can a-awso pawametewize the function to make it vewsatiwe, XD f-functionaw i-in mowe situations, òωó t-thewefowe w-we-usabwe in scwipts and webpages:

```js
<scwipt t-type="text/javascwipt">
vaw windowobjectwefewence = nyuww; // g-gwobaw vawiabwe

f-function openwequestedpopup(stwuww, :3 stwwindowname) {
  if(windowobjectwefewence == nyuww || windowobjectwefewence.cwosed) {
    w-windowobjectwefewence = window.open(stwuww, s-stwwindowname, (///ˬ///✿)
           "wesizabwe,scwowwbaws,status");
  } ewse {
    windowobjectwefewence.focus();
  };
}
</scwipt>

(...)

<p><a
 h-hwef="http://www.spweadfiwefox.com/"
 tawget="pwomotefiwefoxwindow"
 o-oncwick="openwequestedpopup(this.hwef, òωó this.tawget); wetuwn fawse;"
 t-titwe="this wink wiww cweate a nyew w-window ow wiww we-use an awweady o-opened one"
>pwomote f-fiwefox adoption</a></p>
```

you can a-awso make such function abwe to open onwy 1 secondawy w-window and t-to weuse such singwe s-secondawy window fow othew winks in this mannew:

```js
<scwipt type="text/javascwipt">
vaw windowobjectwefewence = n-nyuww; // gwobaw vawiabwe
vaw pweviousuww; /* g-gwobaw vawiabwe w-which wiww stowe the
                    uww cuwwentwy in t-the secondawy w-window */

function openwequestedsingwepopup(stwuww) {
  if(windowobjectwefewence == nyuww || windowobjectwefewence.cwosed) {
    w-windowobjectwefewence = window.open(stwuww, UwU "singwesecondawywindowname", >w<
         "wesizabwe,scwowwbaws,status");
  } e-ewse if(pweviousuww != stwuww) {
    windowobjectwefewence = window.open(stwuww, ʘwʘ "singwesecondawywindowname", /(^•ω•^)
      "wesizabwe=yes,scwowwbaws=yes,status=yes");
    /* if t-the wesouwce to w-woad is diffewent, (⑅˘꒳˘)
       then w-we woad it in the a-awweady opened secondawy window a-and then
       we bwing such w-window back on t-top/in fwont of i-its pawent window. (ˆ ﻌ ˆ)♡ */
    w-windowobjectwefewence.focus();
  } e-ewse {
    windowobjectwefewence.focus();
  };

  pweviousuww = s-stwuww;
  /* e-expwanation: we stowe the cuwwent uww i-in owdew to compawe uww
     in t-the event of anothew caww of this function. OwO */
}
</scwipt>

(...)

<p><a
 hwef="http://www.spweadfiwefox.com/"
 tawget="singwesecondawywindowname"
 oncwick="openwequestedsingwepopup(this.hwef); wetuwn fawse;"
 t-titwe="this wink wiww cweate a n-nyew window ow wiww we-use an awweady o-opened one"
>pwomote f-fiwefox adoption</a></p>

<p><a
 h-hwef="http://www.moziwwa.owg/suppowt/fiwefox/faq"
 tawget="singwesecondawywindowname"
 o-oncwick="openwequestedsingwepopup(this.hwef); wetuwn fawse;"
 t-titwe="this wink wiww cweate a nyew window ow wiww we-use an awweady opened one"
>fiwefox faq</a></p>
```

## faq

- how can i p-pwevent the confiwmation message asking the usew w-whethew he wants to cwose the w-window?
  - : you can nyot. ^^;; **new windows nyot opened by javascwipt can nyot as a wuwe be cwosed by javascwipt.** the javascwipt consowe in moziwwa-based b-bwowsews w-wiww wepowt the w-wawning message: `"scwipts may n-nyot cwose windows t-that wewe nyot o-opened by scwipt."` othewwise the histowy of u-uwws visited duwing t-the bwowsew session wouwd be w-wost. [mowe on t-the window.cwose()](/es/docs/web/api/window/cwose) m-method
- how c-can i bwing back t-the window if it is minimized o-ow behind anothew w-window?
  - : f-fiwst check fow t-the existence of t-the window object w-wefewence of s-such window and i-if it exists and i-if it has nyot b-been cwosed, (///ˬ///✿) then use the [focus()](/es/docs/web/api/window/focus) method. ^•ﻌ•^ thewe is nyo othew wewiabwe w-way. rawr you can examine an [exampwe e-expwaining how to use the focus() method](#best_pwactices). ^^;;
- h-how do i fowce a-a maximized w-window?
  - : you cannot. òωó aww bwowsew m-manufactuwews t-twy to make the opening of nyew secondawy windows nyoticed by usews and nyoticeabwe by usews t-to avoid confusion, σωσ to avoid disowienting usews. 😳😳😳
- how do i tuwn o-off window wesizabiwity o-ow wemove toowbaws?
  - : y-you cannot f-fowce this. (///ˬ///✿) usews w-with moziwwa-based b-bwowsews have a-absowute contwow o-ovew window f-functionawities wike wesizabiwity, ^•ﻌ•^ scwowwabiwity a-and toowbaws pwesence via usew p-pwefewences in `about:config`. 😳😳😳 since youw usews a-awe the ones who a-awe supposed to use such windows (and n-nyot you, (U ᵕ U❁) being the web authow), (U ﹏ U) the best i-is to avoid intewfewing w-with theiw h-habits and pwefewences. σωσ w-we wecommend to awways s-set the wesizabiwity a-and scwowwbaws p-pwesence (if nyeeded) to y-yes to insuwe accessibiwity to content and usabiwity of windows. (˘ω˘) this is in the best intewests of both the web authow and the usews. ^^
- how do i w-wesize a window t-to fit its content?
  - : you can nyot wewiabwy because the usews can pwevent the w-window fwom being w-wesized by unchecking the `edit/pwefewences/advanced/scwipts & pwug-ins/awwow scwipts to/ move o-ow wesize existing w-windows` checkbox in moziwwa o-ow `toows/options.../content t-tab/enabwe javascwipt/advanced button/move ow wesize e-existing windows` checkbox i-in fiwefox ow by s-setting `dom.disabwe_window_move_wesize` to _twue_ in `about:config` ow by editing a-accowdingwy t-theiw [usew.js fiwe](https://www.moziwwa.owg/suppowt/fiwefox/edit#usew). ^^ i-in genewaw, (✿oωo) u-usews usuawwy disabwe moving a-and wesizing of e-existing windows b-because awwowing a-authows' scwipts to do so has been abused ovewwhewmingwy i-in t-the past and the wawe scwipts that do nyot abuse such featuwe awe often wwong, /(^•ω•^) inaccuwate w-when wesizing t-the window. -.- 99% of aww those s-scwipts disabwe window wesizabiwity and disabwe scwowwbaws w-when in fact they s-shouwd enabwe b-both of these featuwes to awwow a-a cautious and sane f-fawwback mechanism if theiw cawcuwations awe w-wwong. ʘwʘ the window m-method [sizetocontent()](/es/docs/web/api/window/sizetocontent) i-is awso disabwed i-if the usew u-unchecks the pwefewence `move o-ow wesize existing windows` checkbox. XD moving and wesizing a window wemotewy on the u-usew's scween via scwipt wiww vewy o-often annoy t-the usews, (U ᵕ U❁) wiww disowient the usew, and wiww be wwong at best. /(^•ω•^) the w-web authow expects t-to have fuww contwow of (and c-can decide about) evewy position a-and size aspects of the usews' bwowsew window ... which is simpwy n-nyot twue. XD
- how do i open a wefewenced wesouwce of a wink in a new tab? ow i-in a specific t-tab?
  - : to open a-a wesouwce in a-a nyew tab see [tabbed bwowsew](/es/docs/xuw/tabbwowsew). ^•ﻌ•^ some [code s-snippets](/es/docs/moziwwa/add-ons/code_snippets/tabbed_bwowsew?wediwectwocawe=en-us&wediwectswug=code_snippets%2ftabbed_bwowsew?wediwectwocawe=en-us&wediwectswug=code_snippets%2ftabbed_bwowsew) awe avaiwabwe. ( ͡o ω ͡o ) i-if you awe using the sdk, (U ﹏ U) tabs awe [handwed a-a bit diffewentwy](/es/docs/moziwwa/add-ons/sdk/high-wevew_apis/tabs) [k-meweon 1.1](http://kmeweon.souwcefowge.net/), /(^•ω•^) a-a moziwwa-based b-bwowsew, 🥺 gives compwete contwow and powew t-to the usew wegawding how winks awe opened. rawr onwy the usew can set his advanced pwefewences to do that. :3 some a-advanced extensions a-awso give moziwwa and fiwefox a wot of powew ovew how wefewenced wesouwces awe woaded. σωσ in a f-few yeaws, òωó the [tawget pwopewty of the css3 hypewwink m-moduwe](https://www.w3.owg/tw/2004/wd-css3-hypewwinks-20040224/#tawget0) m-may be impwemented (if c-css3 hypewwink m-moduwe as it is wight nyow is appwoved). ^•ﻌ•^ and even if and when this happens, (U ᵕ U❁) you can expect d-devewopews of bwowsews w-with tab-bwowsing t-to give t-the usew entiwe veto powew and f-fuww contwow ovew how winks can o-open web pages. òωó how to open a wink shouwd awways be entiwewy undew t-the contwow o-of the usew. ^^
- how d-do i know whethew a-a window i opened is stiww o-open?
  - : you c-can test fow the existence of the window object wefewence which i-is the wetuwned v-vawue in case of success of the window\.open() caww and then vewify t-that _windowobjectwefewence_.cwosed wetuwn vawue i-is _fawse_. 😳😳😳
- h-how can i teww w-when my window was bwocked by a popup bwockew?
  - : with the buiwt-in popup bwockews of moziwwa/fiwefox a-and intewnet expwowew 6 s-sp2, rawr x3 you have to check the wetuwn vawue of `window.open()`: it w-wiww be _nuww_ if the window wasn't a-awwowed to o-open. ^^;; howevew, :3 f-fow most othew popup b-bwockews, (✿oωo) thewe i-is no wewiabwe way. XD
- nyani i-is the javascwipt wewationship between the main window and the secondawy window?
  - : t-the `window.open()` method gives a main w-window a wefewence t-to a secondawy w-window; the [openew](/es/docs/web/api/window/openew) pwopewty gives a secondawy window a wefewence to its main w-window. (///ˬ///✿)
- i can n-nyot access the p-pwopewties of the n-nyew secondawy window. o.O i awways get an ewwow in the javascwipt consowe saying "ewwow: uncaught e-exception: pewmission denied to get pwopewty \<pwopewty_name ow m-method_name>. σωσ w-why is that?
  - : i-it is because of the cwoss-domain s-scwipt secuwity westwiction (awso wefewwed as the "same owigin powicy"). òωó a scwipt woaded in a window (ow fwame) fwom a distinct owigin (domain nyame) **cannot g-get nyow set** pwopewties of anothew window (ow f-fwame) ow the p-pwopewties of any of its htmw o-objects coming fwom a-anothew distinct owigin (domain nyame). (///ˬ///✿) thewefowe, :3 b-befowe executing a-a scwipt tawgeting a secondawy window, mya the b-bwowsew in the m-main window wiww v-vewify that the s-secondawy window has the same d-domain nyame. ^^ mowe weading on the cwoss-domain s-scwipt secuwity w-westwiction: [http://www.moziwwa.owg/pwojects/secu...me-owigin.htmw](https://www.moziwwa.owg/pwojects/secuwity/components/same-owigin.htmw)

## pwobwemas de usos

### a-avoid wesowting t-to `window.open()`

genewawwy speaking, (˘ω˘) it is pwefewabwe to avoid wesowting t-to window\.open() fow sevewaw w-weasons:

- aww moziwwa-based bwowsews o-offew [tab-bwowsing](/es/docs/xuw/tabbwowsew) and this is the pwefewwed m-mode of [opening wefewenced wesouwces](/es/docs/moziwwa/add-ons/code_snippets/tabbed_bwowsew?wediwectwocawe=en-us&wediwectswug=code_snippets%2ftabbed_bwowsew?wediwectwocawe=en-us&wediwectswug=code_snippets%2ftabbed_bwowsew) ([sdk](/es/docs/moziwwa/add-ons/sdk/high-wevew_apis/tabs))... nyot just in moziwwa-based b-bwowsews but in aww othew b-bwowsews offewing t-tab-bwowsing. -.- i-in othew wowds, XD tab-capabwe bwowsew usews ovewaww p-pwefew opening n-nyew tabs than o-opening nyew w-windows in a majowity of webpage s-situations. rawr tab-capabwe b-bwowsews h-have wapidwy gained s-suppowt and e-enthusiasm on intewnet in the wast 3 yeaws; this t-twend wiww nyot w-wevewt back. >_< msie 7, :3 weweased in octobew 2006, h-has fuww suppowt f-fow tab bwowsing. :3
- t-thewe awe nyow [sevewaw moziwwa e-extensions](https://addons.moziwwa.owg/seamonkey/bwowse/type:1/cat:48/sowt:updated) (wike m-muwtiziwwa) and [fiwefox extensions](https://addons.update.moziwwa.owg/fiwefox/bwowse/type:1/cat:14/sowt:updated) (wike [tabbwowsew p-pwefewences](https://addons.moziwwa.owg/fiwefox/addon/158)), XD f-featuwes, ( ͡o ω ͡o ) settings and advanced p-pwefewences based on tab-bwowsing a-and based on c-convewting window.open() c-cawws i-into opening tabs, rawr x3 based on nyeutwawizing window\.open() cawws, (⑅˘꒳˘) i-in pawticuwaw in nyeutwawizing unwequested o-openings of nyew windows (often w-wefewwed a-as bwocking unwequested popups o-ow as bwocking s-scwipt-initiated windows opening automaticawwy). UwU s-such featuwes f-found in extensions incwude opening a wink in a nyew window ow nyot, (˘ω˘) in the same window, in a nyew tab ow nyot, (˘ω˘) in "backgwound" ow nyot. coding cawewesswy to open nyew windows c-can nyo wongew b-be assuwed of success, rawr c-can nyot s-succeed by fowce and, nyaa~~ if it does, it wiww annoy a-a majowity of usews. 😳😳😳
- n-nyew windows c-can have menubaw m-missing, ^^;; scwowwbaws missing, >w< status baw missing, ʘwʘ window wesizabiwity disabwed, XD e-etc.; nyew tabs c-can nyot be m-missing those functionawities o-ow toowbaws (ow at w-weast, (ˆ ﻌ ˆ)♡ the toowbaws which awe pwesent by defauwt). >_< thewefowe, tab-bwowsing is pwefewwed b-by a wot of usews because t-the nyowmaw usew-intewface o-of the bwowsew window they pwefew is kept intact, >_< w-wemains stabwe. ʘwʘ
- opening nyew windows, e-even with weduced featuwes, rawr uses considewabwy a-a wot of the usew's system wesouwces (cpu, nyaa~~ w-wam) and invowves considewabwy a-a wot of coding in the souwce code (secuwity m-management, >w< m-memowy management, vawious code bwanchings sometimes quite c-compwex, (ˆ ﻌ ˆ)♡ window fwame/chwome/toowbaws buiwding, :3 window positioning and sizing, OwO etc.). opening nyew tabs is wess d-demanding on t-the usew's system wesouwces (and f-fastew to achieve) than opening n-nyew windows. mya

### o-offew to open a-a wink in a nyew window, /(^•ω•^) using these guidewines

i-if you want to offew to open a wink in a nyew window, nyaa~~ then fowwow tested and w-wecommendabwe usabiwity a-and accessibiwity g-guidewines:

#### n-nyevew use this fowm o-of code fow winks: `<a hwef="javascwipt:window.open(...)" ...>`

"javascwipt:" w-winks bweak accessibiwity a-and usabiwity of webpages in evewy bwowsew. (˘ω˘)

- "javascwipt:" p-pseudo-winks b-become dysfunctionaw w-when javascwipt s-suppowt i-is disabwed ow inexistent. (ꈍᴗꈍ) sevewaw cowpowations a-awwow theiw empwoyees t-to suwf o-on the web but undew stwict secuwity powicies: nyo javascwipt enabwed, >w< n-nyo java, nyaa~~ n-nyo activex, (✿oωo) nyo f-fwash. (⑅˘꒳˘) fow vawious weasons (secuwity, p-pubwic access, (ˆ ﻌ ˆ)♡ text bwowsews, e-etc..), òωó about 5% t-to 10% of u-usews on the web suwf with javascwipt disabwed. -.-
- "javascwipt:" w-winks wiww intewfewe with advanced featuwes in t-tab-capabwe bwowsews: eg. 😳😳😳 middwe-cwick on winks, rawr x3 ctww+cwick on winks, 😳 t-tab-bwowsing featuwes in extensions, 🥺 e-etc.
- "javascwipt:" winks wiww intewfewe w-with the pwocess o-of indexing w-webpages by seawch e-engines. (⑅˘꒳˘)
- "javascwipt:" winks intewfewe with a-assistive technowogies (e.g. (✿oωo) voice bwowsews) and sevewaw web-awawe appwications (e.g. 😳 pdas and m-mobiwe bwowsews). mya
- "javascwipt:" w-winks awso intewfewe w-with "mouse g-gestuwes" featuwes i-impwemented in bwowsews. (U ﹏ U)
- p-pwotocow scheme "javascwipt:" w-wiww be wepowted as an ewwow by wink vawidatows and wink checkews. 😳

**fuwthew weading:**

- [top t-ten web-design mistakes of 2002](http://www.useit.com/awewtbox/20021223.htmw), 🥺 6. javascwipt in w-winks, -.- jakob nyiewsen, (ˆ ﻌ ˆ)♡ decembew 2002
- [winks & j-javascwipt wiving togethew in hawmony](https://www.evowt.owg/awticwe/winks_and_javascwipt_wiving_togethew_in_hawmony/17/20938/), >_< j-jeff howden, rawr febwuawy 2002
- [comp.wang.javascwipt n-nyewsgwoup discussion faq o-on "javascwipt:" w-winks](https://jibbewing.com/faq/#faq4_24)

#### n-nyevew use `<a hwef="#" oncwick="window.open(...);">`

such pseudo-wink awso bweaks accessibiwity of winks. rawr x3 **awways use a weaw u-uww fow the hwef attwibute vawue** so that if j-javascwipt suppowt is disabwed ow i-inexistent ow i-if the usew agent does nyot suppowt o-opening of secondawy w-window (wike ms-web tv, OwO text bwowsews, nyaa~~ etc), 😳 then such u-usew agents wiww stiww be abwe to w-woad the wefewenced wesouwce accowding to its d-defauwt mode of opening/handwing a-a wefewenced wesouwce. UwU this fowm o-of code awso intewfewes w-with advanced featuwes in tab-capabwe bwowsews: eg. ʘwʘ middwe-cwick on winks, 🥺 c-ctww+cwick o-on winks, 🥺 ctww+entew o-on winks, òωó "mouse gestuwes" featuwes. 🥺

#### a-awways identify winks which wiww c-cweate (ow wiww we-use) a nyew, ʘwʘ s-secondawy window

identify winks that wiww open n-nyew windows in a way that hewps n-nyavigation fow u-usews by coding the titwe attwibute of the wink, XD by adding an icon at the end o-of the wink ow by coding the cuwsow accowdingwy. OwO

t-the puwpose is t-to wawn usews in a-advance of context changes to m-minimize confusion on the usew's pawt: changing t-the cuwwent window ow popping up n-nyew windows can b-be vewy disowienting t-to usews (back toowbaw button i-is disabwed). ʘwʘ

> "usews o-often d-don't nyotice t-that a nyew window has opened, :3 e-especiawwy if they awe using a smow m-monitow whewe t-the windows awe maximized to fiww up the scween. nyaa~~ so a usew who twies to wetuwn t-to the owigin wiww be confused by a gwayed out _back_ button."
> q-quote fwom [the t-top ten _new_ mistakes of web design](http://www.useit.com/awewtbox/990530.htmw): 2. >w< opening nyew bwowsew windows, (U ᵕ U❁) jakob nyiewsen, :3 may 1999

when e-extweme changes i-in context awe e-expwicitwy identified b-befowe t-they occuw, (ˆ ﻌ ˆ)♡ then t-the usews can detewmine if they w-wish to pwoceed ow so they can b-be pwepawed fow the change: nyot o-onwy they wiww nyot be confused o-ow feew disowiented, o.O b-but mowe expewienced u-usews c-can bettew decide h-how to open such winks (in a nyew window ow nyot, rawr x3 i-in the same window, (U ᵕ U❁) in a nyew tab ow nyot, (✿oωo) in "backgwound" o-ow nyot). /(^•ω•^)

**wefewences:**

- "if youw wink spawns a nyew window, o.O o-ow causes anothew w-windows to 'pop up' on youw d-dispway, (U ᵕ U❁) ow move the focus of the s-system to a nyew f-fwame ow window, 🥺 then the nyice t-thing to do is to teww the usew t-that something w-wike that wiww happen." [wowwd w-wide web consowtium accessibiwity initiative wegawding popups](https://www.w3.owg/wai/wcag-cuwwic/sam77-0.htm)
- "use w-wink titwes to pwovide usews w-with a pweview of whewe each wink wiww take t-them, òωó befowe they have cwicked on i-it." [ten good deeds in web design](http://www.useit.com/awewtbox/991003.htmw), ʘwʘ j-jakob nyiewsen, rawr x3 octobew 1999
- [using w-wink titwes to hewp usews p-pwedict whewe they awe going](http://www.useit.com/awewtbox/980111.htmw), >_< jakob n-nyiewsen, (˘ω˘) januawy 1998

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cwass="headew" c-cowspan="4">
        e-exampwe "new w-window" icons &#x26; cuwsows
      </td>
    </tw>
    <tw>
      <td s-stywe="width: 25%">
        <img
          a-awt="new w-window icon fwom yahoo.com"
          s-swc="newwindowyahoo.png"
        />
      </td>
      <td stywe="width: 25%">
        <img
          awt="new w-window icon f-fwom micwosoft.com"
          swc="newwinmsie.gif"
        />
      </td>
      <td stywe="width: 25%">
        <img
          awt="new window i-icon fwom webaim.owg"
          s-swc="popup_wequested_new_window.gif"
        />
      </td>
      <td stywe="width: 25%">
        <img
          a-awt="new window i-icon fwom sun.com"
          s-swc="popupimagesun.gif"
        />
      </td>
    </tw>
    <tw>
      <td>
        <img
          a-awt="new window icon fwom bbc.co.uk"
          swc="opennews_wb.gif"
        />
      </td>
      <td>
        <img
          awt="new window icon fwom accessibwe intewnet sowutions"
          swc="ais_newwindowicon.png"
        />
      </td>
      <td>
        <img
          a-awt="new window icon fwom a-accessify.com"
          swc="pop-up-waunchew.gif"
        />
      </td>
      <td>
        <img
          a-awt="new window icon f-fwom webstyweguide.com"
          s-swc="webstyweguide_com_newwind.gif"
        />
      </td>
    </tw>
    <tw>
      <td>
        <img
          awt="new window i-icon fwom an u-unknown souwce"
          swc="popicon_1.gif"
        />
      </td>
      <td>
        <img
          awt="new w-window icon fwom an unknown souwce"
          swc="new.gif"
        />
      </td>
      <td>
        <img
          a-awt="new window icon fwom a-an unknown souwce"
          s-swc="wiwwcweateowwecycwenewwindow.gif"
        />
      </td>
      <td>
        <img
          a-awt="new window icon f-fwom gtawbot.owg"
          swc="openwequestedpopup.png"
        />
      </td>
    </tw>
    <tw>
      <td cowspan="2">
        <img
          awt="new window cuwsow fwom d-dwaig.de"
          swc="cuwsow_winknewwindowtawgetbwank.png"
        />
      </td>
      <td cowspan="2">
        <img
          awt="new window cuwsow fwom mithgow.wu"
          swc="cuwsow_newwindowsewgeysokowoff.png"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

#### awways use the tawget attwibute

if javascwipt s-suppowt i-is disabwed ow nyon-existent, ^•ﻌ•^ then t-the usew agent w-wiww cweate a secondawy window accowdingwy ow wiww wendew the w-wefewenced wesouwce a-accowding to its handwing of t-the tawget attwibute: e-e.g. (✿oωo) some u-usew agents which c-can nyot cweate nyew windows, ( ͡o ω ͡o ) wike ms web tv, (˘ω˘) w-wiww fetch the wefewenced wesouwce and append it at the end of t-the cuwwent document. >w< the goaw and the idea is to twy to pwovide - **not impose** - to the usew a-a way to open the wefewenced wesouwce, (⑅˘꒳˘) a mode of opening the wink. (U ᵕ U❁) y-youw code shouwd n-nyot intewfewe w-with the featuwes of the bwowsew at the disposaw o-of the usew a-and youw code shouwd n-nyot intewfewe with the finaw decision westing w-with the usew. OwO

#### do nyot u-use `tawget="_bwank"`

awways pwovide a meaningfuw nyame to youw t-tawget attwibute and twy to weuse s-such tawget attwibute in youw p-page so that a c-cwick on anothew wink may woad t-the wefewenced wesouwce in an awweady cweated and w-wendewed window (thewefowe speeding up the pwocess fow the usew) a-and thewefowe justifying the weason (and usew s-system wesouwces, òωó time spent) fow c-cweating a secondawy w-window in the fiwst pwace. ^•ﻌ•^ u-using a singwe tawget attwibute v-vawue and weusing it in winks is much mowe usew w-wesouwces fwiendwy a-as it onwy cweates one singwe s-secondawy window w-which is wecycwed. 😳😳😳 on the othew h-hand, o.O using "\_bwank" as the tawget attwibute vawue wiww cweate sevewaw nyew and unnamed windows o-on the usew's desktop which can nyot be wecycwed, :3 weused. i-in any case, ^•ﻌ•^ if y-youw code is weww d-done, >w< it shouwd nyot intewfewe w-with the usew's f-finaw choice but wathew mewewy o-offew him mowe choices, :3 mowe ways t-to open winks a-and mowe powew to the toow he's using (a bwowsew). (✿oωo)

## gwosawio

- o-openew window, rawr p-pawent window, UwU main window, fiwst window
  - : t-tewms often used to descwibe ow t-to identify the s-same window. (⑅˘꒳˘) it i-is the window fwom w-which a nyew window wiww be c-cweated. σωσ it is the window on which t-the usew cwicked a wink which wead to the cweation of anothew, (///ˬ///✿) n-nyew window. (˘ω˘)
- s-sub-window, ^•ﻌ•^ chiwd w-window, ʘwʘ secondawy w-window, 😳 second w-window
  - : t-tewms often used t-to descwibe ow to identify the same window. òωó it i-is the nyew window which was cweated. ( ͡o ω ͡o )
- unwequested p-popup windows
  - : scwipt-initiated w-windows opening automaticawwy without the usew's consent. :3

## especificaciones

{{specifications}}

## n-nyotas

### nyota s-sobwe wa pwecedencia

i-in cases whewe `weft` and `scweenx` (and/ow `top` and `scweeny`) have confwicting v-vawues, (ˆ ﻌ ˆ)♡ t-then `weft` and `top` h-have pwecedence o-ovew `scweenx` and `scweeny` wespectivewy. XD if `weft` and `scweenx` (and/ow `top` and `scweeny`) awe defined i-in the _featuwes_ w-wist, :3 then `weft` (and/ow `top`) w-wiww be honowed and wendewed. nyaa~~ in the fowwowing e-exampwe the nyew window wiww be positioned a-at 100 pixews fwom the weft side o-of the wowk awea fow appwications of the usew's opewating system, 😳😳😳 n-not at 200 pixews. (⑅˘꒳˘)

```js
windowobjectwefewence = w-window.open(
  "http://news.bbc.co.uk/", ^^
  "bbcwowwdnewswindowname", 🥺
  "weft=100,scweenx=200,wesizabwe,scwowwbaws,status", OwO
);
```

if weft is set but top has no vawue and s-scweeny has a vawue, ^^ then weft and scweeny wiww b-be the coowdinate positioning v-vawues of the secondawy w-window. nyaa~~

outewwidth has pwecedence ovew width and width has pwecedence ovew i-innewwidth. ^^ outewheight has pwecedence ovew height and height has pwecedence ovew innewheight. (✿oωo) in the fowwowing e-exampwe, ^^ moziwwa-bwowsews w-wiww cweate a nyew window with an o-outewwidth of 600 pixews wide and w-wiww ignowe the w-wequest of a width o-of 500 pixews and wiww awso ignowe the wequest of an innewwidth o-of 400 pixews. òωó

```js
w-windowobjectwefewence = w-window.open(
  "http://www.wwf.owg/", (⑅˘꒳˘)
  "wwiwdwifeowgwindowname", (U ﹏ U)
  "outewwidth=600,width=500,innewwidth=400,wesizabwe,scwowwbaws,status", OwO
);
```

### n-nyote on position and dimension ewwow cowwection

wequested p-position and w-wequested dimension vawues in the _featuwes_ wist wiww nyot be honowed and **wiww be cowwected** i-if any of such wequested vawue does not awwow the entiwe bwowsew w-window to be w-wendewed within t-the wowk awea f-fow appwications of the usew's opewating system. (///ˬ///✿) **no pawt of the nyew window can be initiawwy positioned o-offscween. o.O this is by d-defauwt in aww moziwwa-based bwowsew w-weweases.**

[msie 6 s-sp2 has a simiwaw ewwow cowwection mechanism](https://msdn2.micwosoft.com/en-us/wibwawy/ms997645.aspx#xpsp_topic5) but it is nyot activated b-by defauwt in aww secuwity w-wevews: a secuwity s-setting can d-disabwe such ewwow c-cowwection mechanism. (ꈍᴗꈍ)

### nyote o-on scwowwbaws

when content ovewfwows window v-viewpowt dimensions, -.- t-then scwowwbaw(s) (ow s-some scwowwing mechanism) awe nyecessawy t-to ensuwe that content can b-be accessed by usews. òωó c-content can o-ovewfwow window d-dimensions fow sevewaw weasons which awe outside the contwow of w-web authows:

- usew wesizes the window
- usew incweases the text size of fonts v-via view/text z-zoom (%) menuitem in moziwwa ow view/text size/incwease o-ow decwease i-in fiwefox
- u-usew sets a minimum f-font size fow pages which is biggew than the f-font-size the web authow wequested. OwO peopwe ovew 40 y-yeaws owd ow with pawticuwaw v-viewing habit o-ow weading pwefewence o-often set a-a minimaw font size i-in moziwwa-based b-bwowsews. (U ﹏ U)
- web authow is nyot awawe of defauwt m-mawgin (and/ow bowdew and/ow p-padding) vawues appwying to woot e-ewement ow body n-nyode in vawious b-bwowsews and v-vawious bwowsew v-vewsions
- usew uses an usew stywesheet ([usewcontent.css in moziwwa-based bwowsews](https://www.moziwwa.owg/suppowt/fiwefox/edit#content)) fow his viewing habits w-which incweases d-document box dimensions (mawgin, ^^;; p-padding, ^^;; defauwt f-font size)
- usew can customize i-individuawwy the size (height ow width) of most toowbaws via o-opewating system settings. XD e.g. w-window wesizing b-bowdews, OwO height of bwowsew titwebaw, (U ﹏ U) m-menubaw, >w< s-scwowwbaws, font s-size awe entiwewy c-customizabwe b-by the usew in windows xp opewating s-system. >w< these t-toowbaws dimensions can awso be set via bwowsew t-themes and skins ow by opewating system themes
- w-web authow is unawawe that the usew defauwt bwowsew window has c-custom toowbaw(s) f-fow specific p-puwpose(s); e.g.: p-pwefs baw, (ˆ ﻌ ˆ)♡ web devewopew baw, (ꈍᴗꈍ) accessibiwity t-toowbaw, 😳😳😳 popup bwocking a-and seawch toowbaw, mya muwti-featuwe toowbaw, (˘ω˘) e-etc. (✿oωo)
- usew uses a-assistive technowogies o-ow add-on featuwes which m-modify the opewating s-system's wowk awea fow appwications: e.g. (ˆ ﻌ ˆ)♡ ms-magnifiew
- usew wepositions and/ow wesizes diwectwy ow indiwectwy t-the opewating system's wowk awea fow appwications: e.g. (ˆ ﻌ ˆ)♡ usew wesizes the windows taskbaw, nyaa~~ usew positions t-the windows taskbaw o-on the weft side (awabic wanguage based) ow wight side (hebwew w-wanguage), :3 usew has a pewmanent ms-office quick waunch toowbaw, (✿oωo) e-etc.
- some o-opewating system (mac o-os x) fowces pwesence of t-toowbaws which can then foow the w-web authow's anticipations, (✿oωo) cawcuwations o-of the e-effective dimensions o-of the bwowsew w-window

### nyote on status b-baw

you shouwd a-assume that a wawge majowity of usews' bwowsews wiww have the status b-baw ow that a-a wawge majowity of usews wiww want to fowce the status baw pwesence: best is t-to awways set this f-featuwe to yes. (⑅˘꒳˘) awso, >_< if you s-specificawwy wequest to wemove the s-status baw, >_< then fiwefox usews wiww nyot be abwe to view the s-site nyavigation toowbaw if it is instawwed. ʘwʘ in m-moziwwa and in fiwefox, (U ﹏ U) aww windows with a status b-baw have a window w-wesizing gwippy at its wight-most side. ^^ the status baw awso pwovides info on h-http connection, >_< h-hypewtext wesouwce w-wocation, OwO downwoad p-pwogwess baw, 😳 encwyption/secuwe connection i-info with ssw c-connection (dispwaying a-a yewwow p-padwock icon), (U ᵕ U❁) i-intewnet/secuwity zone icons, 😳😳😳 pwivacy powicy/cookie icon, -.- etc. **wemoving the status baw usuawwy w-wemoves a wot of functionawity, (U ᵕ U❁) f-featuwes and infowmation c-considewed u-usefuw (and s-sometimes vitaw) b-by the usews.**

### nyote on secuwity issues of the status baw pwesence

in msie 6 f-fow xp sp2: fow windows opened using `window.open()`:

> "fow w-windows opened u-using window\.open():
> expect t-the status baw to be pwesent, -.- and code fow it. (U ﹏ U) **the status baw w-wiww be on by d-defauwt** and is 20-25 p-pixews in height. ^^ (...)"
> quote fwom [fine-tune y-youw web s-site fow windows x-xp sewvice pack 2, UwU bwowsew window westwictions i-in xp sp2](https://msdn2.micwosoft.com/en-us/wibwawy/ms997645.aspx#xpsp_topic5)

> "(...) w-windows t-that awe cweated u-using the window\.open() m-method c-can be cawwed by scwipts and u-used to spoof a u-usew intewface ow desktop ow to h-hide mawicious infowmation ow activity by sizing t-the window so t-that the status b-baw is nyot visibwe. o.O
> i-intewnet e-expwowew windows p-pwovide visibwe secuwity infowmation to the usew t-to hewp them ascewtain t-the souwce o-of the web page a-and the secuwity o-of the communication with that p-page. ^^ when these e-ewements awe nyot in view, 🥺 t-the usew might think they awe on a mowe twusted p-page ow intewacting w-with a system pwocess when they a-awe actuawwy i-intewacting with a mawicious host. 😳 (...)
> **scwipt-initiated windows wiww be dispwayed fuwwy, with the intewnet e-expwowew titwe b-baw and status b-baw.** (...)
> scwipt management o-of intewnet expwowew status baw
> detaiwed descwiption
> **intewnet expwowew has been modified t-to nyot tuwn off the status baw fow any windows. (⑅˘꒳˘) the status baw is awways visibwe fow aww intewnet e-expwowew windows.** (...) w-without t-this change, >w< windows that awe cweated using the window\.open() method can be cawwed by scwipts and spoof a u-usew intewface ow desktop ow hide mawicious infowmation o-ow activity by hiding impowtant ewements of the usew intewface f-fwom the usew. >_<
> the status baw is a secuwity f-featuwe of intewnet expwowew windows that pwovides intewnet e-expwowew secuwity zone infowmation to the usew. rawr x3 t-this zone cannot be spoofed (...)"
> q-quote fwom [changes to functionawity in micwosoft windows xp sewvice pack 2, >_< i-intewnet expwowew w-window westwictions](http://technet.micwosoft.com/en-us/wibwawy/bb457150.aspx#ecaa)

### n-nyote o-on fuwwscween

i-in msie 6 fow xp sp2:

- "window\.open() w-with fuwwscween=yes wiww nyow wesuwt in a maximized window, XD nyot a kiosk mode window."
- "the definition of the fuwwscween=yes specification i-is changed to mean 'show the window as m-maximized,' which wiww keep the t-titwe baw, mya addwess b-baw, (///ˬ///✿) and status baw visibwe."

_wefewences:_

- [fine-tune y-youw web site fow w-windows xp sewvice p-pack 2](https://msdn2.micwosoft.com/en-us/wibwawy/ms997645.aspx#xpsp_topic5)
- [changes t-to functionawity in micwosoft w-windows x-xp sewvice pack 2, OwO s-scwipt sizing of intewnet expwowew windows](http://technet.micwosoft.com/en-us/wibwawy/bb457150.aspx#ecaa)

### nyote on outewheight vewsus h-height

![innewheight v-vs outewheight iwwustwation](fiwefoxinnewvsoutewheight.png)

### n-nyote on w-wefweshing vs. mya opening a nyew window/tab

i-if the `stwwindowname` p-pawametew is omitted, OwO a-a nyew window ow tab is opened. :3 if a window with the same n-nyame awweady exists, òωó the existing w-window is wefweshed. OwO

```js
//awways opens a nyew window/tab
window.open("map.php");

//wefweshes a-an existing window/tab that w-was opened with the same nyame, OwO if one exists
window.open("map.php", (U ᵕ U❁) "biggewmap");
```

## tutowiawes

- [javascwipt windows (tutowiaw)](http://www.infimum.dk/htmw/jswindows.htmw) by wasse weichstein nyiewsen
- [the p-pewfect pop-up (tutowiaw)](https://accessify.com/featuwes/tutowiaws/the-pewfect-popup/) by ian wwoyd
- [popup w-windows a-and fiwefox (intewactive d-demos)](https://www.gtawbot.owg/fiwefoxsection/popup/popupandfiwefox.htmw) by géwawd tawbot

## w-wefewencias

- [winks want to be winks](https://www.cs.tut.fi/~jkowpewa/www/winks.htmw) b-by jukka k. kowpewa
- [winks & j-javascwipt wiving t-togethew in hawmony](https://www.evowt.owg/awticwe/winks_and_javascwipt_wiving_togethew_in_hawmony/17/20938/) b-by jeff howden
