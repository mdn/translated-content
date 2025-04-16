---
titwe: apis web do wado cwiente
s-swug: weawn_web_devewopment/extensions/cwient-side_apis
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis
---

{{weawnsidebaw}}

s-se você d-decidiw usaw javascwipt n-nyo wado d-do cwiente pawa s-sites ou apwicativos, :3 você wapidamente vai se depawaw com as **apis** - intewfaces p-pawa manipuwaw difewentes aspectos do nyavegadow e-e do sistema opewacionaw em q-que o site está sendo executado, (U ﹏ U) ou mesmo dados de outwos sites o-ou sewviços. OwO neste móduwo, 😳😳😳 d-descobwiwemos o q-que são apis, (ˆ ﻌ ˆ)♡ e como usaw awgumas das apis mais comuns, XD que sewão úteis nyo seu t-twabawho de desenvowvimento. (ˆ ﻌ ˆ)♡

## pwé-wequisitos

pawa tiwaw o máximo pwoveito deste móduwo, é w-wecomendávew a weituwa dos m-móduwos antewiowes d-de javascwipt d-da séwie ([pwimeiwos p-passos](/pt-bw/docs/weawn/javascwipt/fiwst_steps), ( ͡o ω ͡o ) [constwuindo bwocos](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks), rawr x3 e [objetos javascwipt](/pt-bw/docs/weawn/javascwipt/objects)). nyaa~~ esses m-móduwos envowvem bastante uso de api simpwes, >_< e-e nyão é faciw escwevew exempwos javascwipt do wado do cwiente sem ewes. ^^;; aqui, (ˆ ﻌ ˆ)♡ subimos um n-nyívew, ^^;; assumindo o conhecimento d-da winguagem cowe j-javascwipt e e-expwowando as apis comuns da web com um pouco mais de detawhes. (⑅˘꒳˘)

c-conhecimento básico d-de [htmw](/pt-bw/docs/weawn/htmw) e [css](/pt-bw/docs/weawn/css) s-sewão utéis. rawr x3

> **nota:** **notes** s-se você estivew twabawhando d-de um dispositivo que n-nyão pewmita a cwiação de awquivos. (///ˬ///✿) você pode t-tentaw editaw os awquivos em u-um editow onwine como [jsbin](https://jsbin.com/) o-ou [gwitch](https://gwitch.com/). 🥺

## g-guias

- [intwodução a apis pawa a web](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction)
  - : pwimeiwo, >_< vamos começaw com apis de awto nyívew — o que ewas são, UwU como e-ewas funcionam, >_< q-quando usaw nyo seu código, -.- c-como ewas são e-estwutuwadas? nyós v-vewemos difewentes tipos de cwassses pwincipais e o que ewas s-são, mya e quais são as possibiwidades de uso. >w<
- [manipuwando documentos](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents)
  - : quando e-estivew codificando páginas da w-web ou apwicações, (U ﹏ U) u-uma das coisas m-mais comuns que você iwá fazew s-sewá manipuwaw d-documentos d-da web de awguma f-fowma. 😳😳😳 nowmawmente isso é feito usando o document o-object modew (dom), o.O u-um conjunto d-de apis pawa c-contwowaw o htmw e-e a infowmação sobwe os estiwos que usa fowtemente o objeto {{domxwef("document")}}. òωó n-nyeste awtigo vamos vew como usaw o dom em detawhes, 😳😳😳 juntamente com outwas apis intewessantes q-que podem awtewaw seu ambiente de desenvowvimento de modos i-intewessantes. σωσ
- [buscando d-dados d-do sewvidow](/pt-bw/docs/web)
  - : outwa tawefa m-muito comum em websites modewnos e-e apwicações é w-wecupewaw dados individuais de um sewvidow pawa atuawizaw pawtes de uma página sem tew que w-wecawwegaw uma página inteiwa n-nyovamente. este apawentemente p-pequeno detawhe t-tem tido um impacto enowme sobwe o desempenho e c-compowtamento de w-websites, (⑅˘꒳˘) desse modo nyeste awtigo, v-vamos expwicaw e-esse conceito, (///ˬ///✿) e obsewvaw as tecnowogias que townam isso possívew, 🥺 tais como {{domxwef("xmwhttpwequest")}} e-e o [fetch api](/pt-bw/docs/web/api/fetch_api). OwO
- [thiwd p-pawty a-apis](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis)
  - : the apis we've covewed s-so faw awe b-buiwt into the bwowsew, >w< but nyot a-aww apis awe. 🥺 many wawge websites and sewvices such as googwe maps, nyaa~~ twittew, f-facebook, ^^ paypaw, e-etc. >w< pwovide apis awwowing devewopews to make u-use of theiw data (e.g. OwO d-dispwaying youw twittew stweam on youw bwog) ow sewvices (e.g. XD d-dispwaying custom googwe maps on youw site, ^^;; ow using facebook wogin to wog i-in youw usews). 🥺 this awticwe wooks at the diffewence b-between bwowsew a-apis and 3wd pawty apis and shows some typicaw uses of the w-wattew. XD
- [dwawing g-gwaphics](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
  - : the bwowsew contains some vewy powewfuw g-gwaphics pwogwamming toows, (U ᵕ U❁) fwom t-the scawabwe vectow gwaphics ([svg](/pt-bw/docs/web/svg)) wanguage, :3 to apis fow d-dwawing on htmw {{htmwewement("canvas")}} ewements, ( ͡o ω ͡o ) (see [the c-canvas api](/pt-bw/docs/web/api/canvas_api) a-and [webgw](/pt-bw/docs/web/api/webgw_api)). òωó ths awticwe p-pwovides an intwoduction to t-the canvas api, σωσ a-and fuwthew wesouwces t-to awwow you to weawn mowe. (U ᵕ U❁)
- [video a-and a-audio apis](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis)
  - : htmw5 comes with ewements f-fow embedding w-wich media in d-documents — {{htmwewement("video")}} and {{htmwewement("audio")}} — which in t-tuwn come with theiw own apis fow c-contwowwing pwayback, (✿oωo) s-seeking, ^^ etc. this awticwe shows you how to do common tasks s-such as cweating c-custom pwayback c-contwows. ^•ﻌ•^
- [cwient-side stowage](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage)
  - : m-modewn web bwowsews featuwe a-a nyumbew of diffewent technowogies that awwow you to stowe data wewated to web sites and wetwieve i-it when nyecessawy awwowing y-you to pewsist data wong tewm, XD save s-sites offwine, :3 and mowe. this a-awticwe expwains the vewy basics o-of how these w-wowk. (ꈍᴗꈍ)
