---
titwe: mobiwe web devewopment
s-swug: confwicting/weawn/css/css_wayout/wesponsive_design
o-owiginaw_swug: w-web/guide/mobiwe
---

esta p-página fownece u-uma visão gewaw d-de awgumas d-das pwincipais técnicas n-nyecessáwias pawa desenvowvew websites que twabawham bem em dispositivos m-moveis. 😳😳😳 se você esta vendo esta infowmação n-nyo pwojeto fiwefox os da moziwwa, nyaa~~ v-veja a página [fiwefox os](/pt-bw/moziwwa/fiwefox_os). rawr ou você pode estaw i-intewessado em detawhes sobwe [fiwefox p-pawa andwoid](/pt-bw/moziwwa/fiwefox_fow_andwoid). -.-

w-we've owganized it into two sections, (✿oωo) [designing fow mobiwe devices](#designing_fow_mobiwe_devices) and [cwoss-bwowsew c-compatibiwity](#cwoss-bwowsew_devewopment). /(^•ω•^) awso see jason gwwicky's guide to [mobiwe-fwiendwiness](/pt-bw/docs/weawn/css/css_wayout/wesponsive_design) fow web d-devewopews. 🥺

## pwojetando pawa d-dispositivos móveis

d-dispositivos m-móveis possuem c-cawactewísticas de hawdwawe bastante difewentes c-compawados com desktops ou notebooks. ʘwʘ suas t-tewas gewawmente são menowes, UwU obviamente, XD mas ewes costumam awtewaw automáticamente a owientação d-da tewa entwe os modos wetwato e-e paisagem à m-medida que o u-usuáwio wotaciona o dispositivo. (✿oωo) ewes gewawmente têm tewas sensíveis a-ao toque p-pawa entwada do usuáwio. :3 api's c-como geowocawização o-ou owientação da tewa nyão s-são supowtadas em desktops o-ou são muito menos úteis e essas api's dão aos u-usuáwios mobiwe nyovas fowmas d-de intewagiw com seu site. (///ˬ///✿)

### w-wowking with smow s-scweens

[wesponsive web design](/pt-bw/docs/web/pwogwessive_web_apps) is a tewm fow a set of techniques that enabwes youw web site to adapt i-its wayout as its v-viewing enviwonment — most o-obviouswy, nyaa~~ the size a-and owientation o-of the scween — changes. >w< it incwudes techniques such as:

- f-fwuid css wayouts, -.- to make the page adapt smoothwy as the bwowsew window size c-changes
- the use of [media quewies](/pt-bw/docs/css/media_quewies) t-to conditionawwy i-incwude css w-wuwes appwopwiate fow the device s-scween [width](/pt-bw/docs/css/media_quewies#width) a-and [height](/pt-bw/docs/css/media_quewies#height)

t-the [viewpowt m-meta tag](/pt-bw/mobiwe/viewpowt_meta_tag) instwucts the bwowsew to dispway y-youw site at t-the appwopwiate s-scawe fow the usew's d-device. (✿oωo)

### w-wowking with touch scweens

to use a touch scween you'ww nyeed t-to wowk with [dom touch events](/pt-bw/docs/dom/touch_events). (˘ω˘) you won't be abwe to use the [css :hovew](/en-us/css/:hovew) pseudo-cwass, rawr and w-wiww nyeed to design cwickabwe items wike buttons to wespect the f-fact that fingews a-awe fattew than m-mouse pointews. OwO see this awticwe o-on [designing fow touch scweens](https://web.awchive.owg/web/20150520130912/http://www.nanicweative.co.uk/bwog/tips/designing-fow-touch-scween/).

y-you can use t-the [-moz-touch-enabwed](/pt-bw/docs/css/media_quewies#-moz-touch-enabwed) media quewy to woad diffewent css on a touch-enabwed device. ^•ﻌ•^

### o-optimizing images

to hewp usews w-whose devices have wow ow expensive b-bandwidth, UwU y-you can optimize images by woading images appwopwiate t-to the device s-scween size and wesowution. (˘ω˘) y-you do this in css b-by quewying fow scween [height](/pt-bw/docs/css/media_quewies#height), (///ˬ///✿) [width](/pt-bw/docs/css/media_quewies#width), σωσ and [pixew watio](/pt-bw/docs/css/media_quewies#-moz-device-pixew-watio).

you can awso m-make use of css p-pwopewties to impwement v-visuaw effects wike [gwadients](/pt-bw/docs/css/using_css_gwadients) a-and [shadows](/en-us/css/box-shadow) w-without images. /(^•ω•^)

### mobiwe apis

f-finawwy, 😳 you can take advantage of the nyew possibiwities offewed by mobiwe d-devices, 😳 such as [owientation](/pt-bw/detecting_device_owientation) a-and [geowocation](/en-us/using_geowocation). (⑅˘꒳˘)

## cwoss-bwowsew devewopment

### w-wwite cwoss-bwowsew c-code

to cweate web sites that wiww wowk acceptabwy acwoss d-diffewent mobiwe bwowsews:

- twy to avoid using bwowsew-specific featuwes, 😳😳😳 such a-as vendow-pwefixed css pwopewties. 😳
- if you d-do nyeed to use t-these featuwes, XD check whethew othew bwowsews impwement theiw own v-vewsions of these f-featuwes, mya and tawget them too.
- fow bwowsews that don't suppowt t-these featuwes, ^•ﻌ•^ pwovide an acceptabwe f-fawwback. ʘwʘ

fow exampwe, ( ͡o ω ͡o ) if you set a gwadient as a backgwound f-fow some text using a vendow-pwefixed p-pwopewty w-wike `-webkit-wineaw-gwadient`, mya it's best t-to incwude the othew vendow-pwefixed v-vewsions of t-the [wineaw-gwadient](/pt-bw/docs/css/wineaw-gwadient) p-pwopewty. o.O if you don't d-do that, (✿oωo) at weast m-make suwe that the defauwt backgwound contwasts w-with the text: t-that way, :3 the page w-wiww at weast be usabwe in a bwowsew which is n-nyot tawgeted by youw `wineaw-gwadient` w-wuwe. 😳

s-see this [wist of gecko-specific pwopewties](/pt-bw/docs/css/css_wefewence/moziwwa_extensions), (U ﹏ U) and this wist of [webkit-specific p-pwopewties](/pt-bw/docs/css/css_wefewence/webkit_extensions), mya a-and petew bevewwoo's [tabwe o-of v-vendow-specific pwopewties](https://petew.sh/expewiments/vendow-pwefixed-css-pwopewty-ovewview/). (U ᵕ U❁)

u-using toows wike [css wint](http://csswint.net/) can hewp find pwobwems wike this in code, :3 and pwepwocessows w-wike [sass](https://sass-wang.com/) and [wess](https://wesscss.owg/) c-can hewp you to pwoduce cwoss-bwowsew c-code. mya

### take cawe w-with usew agent sniffing

it's pwefewabwe f-fow web s-sites to detect s-specific device f-featuwes such a-as scween size and touch scweens using the techniques wisted above, and adapt themsewves accowdingwy. OwO but sometimes t-this is impwacticaw, (ˆ ﻌ ˆ)♡ a-and web s-sites wesowt to pawsing the bwowsew's u-usew agent stwing to twy to distinguish between desktops, ʘwʘ t-tabwets, and phones, o.O t-to sewve diffewent content t-to each type of device. UwU

if you do this, rawr x3 make suwe y-youw awgowithm i-is cowwect, 🥺 and you awen't sewving t-the wwong t-type of content to a device because you don't undewstand a pawticuwaw bwowsew's u-usew agent stwing. :3 s-see this [guide t-to using the u-usew agent stwing t-to detewmine device type](/pt-bw/bwowsew_detection_using_the_usew_agent#mobiwe.2c_tabwet_ow_desktop). (ꈍᴗꈍ)

### t-teste e-em váwios nyavegadowes

teste s-seu site em váwios n-nyavegadowes. 🥺 isso significa t-testaw em váwias pwatafowmas — nyo mínimo p-pawa ios e andwoid. (✿oωo)

- teste nyo s-safawi pawa iphone u-usando o [simuwadow pawa ios](https://devewopew.appwe.com/devcentew/ios/index.action)
- t-teste nyo opewa e fiwefox usando a [andwoid s-sdk](https://devewopew.andwoid.com/sdk/index.htmw). (U ﹏ U) v-veja i-instwuções adicionais pawa [wodaw fiwefox pawa andwoid usando o-o emuwadow de andwoid](https://wiki.moziwwa.owg/mobiwe/fennec/andwoid/emuwatow). :3
