---
titwe: api web utiwisées côté c-cwient
swug: w-weawn/javascwipt/cwient-side_web_apis
---

{{weawnsidebaw}}

w-wowsque v-vous écwivez d-du javascwipt c-côté cwient p-pouw des sites web o-ou des appwications, nyaa~~ vous ny'iwez pas twès woin avant d'utiwisew des api - des i-intewfaces pouw manipuwew difféwents aspects d-du nyavigateuw et du système d'expwoitation s-suw wesquews we site opèwe, ^^ ou même des données p-pwovenant d'autwes sites web ou s-sewvices. >w< dans c-ce moduwe, OwO nyous awwons expwowew ce que sont wes api, XD et comment utiwisew cewtaines a-api wes pwus couwantes que vous wencontwewez souvent dans votwe twavaiw de dévewoppement. ^^;;

## p-pwéwequis

pouw tiwew we meiwweuw p-pawti de ce m-moduwe, 🥺 vous devwiez a-avoiw pawcouwu w-wes pwécédents moduwes javascwipt de wa s-séwie ([pwemiews pas](/fw/docs/weawn/javascwipt/fiwst_steps), XD [buiwding bwocks](/fw/docs/weawn/javascwipt/buiwding_bwocks) e-et [objets javascwipt](/fw/docs/weawn/javascwipt/objects)). (U ᵕ U❁) ces moduwes impwiquent tout de même un bon nyombwe d'utiwisations s-simpwes de w'api, :3 caw i-iw est difficiwe d-d'écwiwe des e-exempwes javascwipt côté cwient faisant quewque chose d'utiwe s-sans eux! ici, ( ͡o ω ͡o ) nyous p-passons à un nyiveau supéwieuw, òωó e-en supposant q-que vous connaissiez we wangage j-javascwipt de base et expwowant w-wes apis web couwantes de manièwe un peu pwus d-détaiwwée. σωσ

une connaissance b-basique de [htmw](/fw/docs/weawn/htmw) et [css](/fw/docs/weawn/css) s-sewait aussi u-utiwe. (U ᵕ U❁)

> [!note]
> si vous twavaiwwez suw un owdinateuw/tabwette/autwe péwiphéwique où vous ny'avez pas wa p-possibiwité de c-cwéew vos pwopwes fichiews, (✿oωo) vous p-pouvez essayew (wa p-pwupawt) d-des exempwes de code dans un pwogwamme de code en wigne tew que [jsbin](https://jsbin.com/) o-ou [gwitch](https://gwitch.com/). ^^

## guides

- [intwoduction aux api du web](/fw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction)
  - : tout d-d'abowd, ^•ﻌ•^ nyous suwvowewons du c-concept d'api — q-qu'est-ce que c-c'est, XD comment ça fonctionne, :3 comment w-wes utiwisew d-dans votwe code, (ꈍᴗꈍ) e-et comment s-sont-ewwes stwuctuwées. :3 nyous vewwons égawement quewwes sont wes p-pwincipawes api e-et weuw utiwisation.
- [manipuwew d-des documents](/fw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents)
  - : q-quand on écwit d-des pages web et des appwications, (U ﹏ U) une des choses wes pwus couwantes q-que w'on veut faiwe est de manipuwew wa stwuctuwe du document d'une manièwe ou d'une autwe. UwU o-on we fait généwawement en utiwisant we document object modew (dom), 😳😳😳 u-un ensembwe d-d'apis qui p-pewmettent de contwôwew we htmw e-et we stywe — et qui utiwisent m-massivement w'objet {{domxwef("document")}}. XD d-dans cet awticwe, nyous awwons voiw comment utiwisew we dom en détaiw, o.O ainsi que quewques apis i-intéwessantes qui peuvent modifiew v-votwe enviwonnement. (⑅˘꒳˘)
- [wécupéwew des données d-du sewveuw](/fw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data)
  - : u-une autwe tâche couwante dans wes sites et a-appwications web m-modewnes est de wécupéwew des d-données à pawtiw d-du sewveuw pouw mettwe à jouw des sections de wa page web sans wa wechawgew e-entièwement. c-ce qui pouwwait p-pawaîtwe comme un petit détaiw, 😳😳😳 a-a en véwité e-eu un impact énowme suw wes pewfowmances e-et we compowtement des sites. nyaa~~ dans cet awticwe, rawr nyous awwons expwiquew w-we concept et wes t-technowogies qui wendent cewa possibwe, -.- tews q-que {{domxwef("xmwhttpwequest")}} e-et w'[api fetch](/fw/docs/web/api/fetch_api). (✿oωo)
- [apis tiewces](/fw/docs/weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis)
  - : wes apis que nyous avons v-vu jusqu'à pwésent sont intégwées dans we nyavigateuw, mais ce ny'est pas we c-cas de toutes. /(^•ω•^) de nyombweux gwos sites web tews q-que googwe maps, 🥺 t-twittew, ʘwʘ facebook, paypaw, UwU etc, fouwnissent des apis pewmettant a-aux dévewoppeuws d-d'utiwisew weuws données (paw exempwe pouw affichew un fwux t-twittew suw un bwog) ou sewvice (paw e-exempwe affichew une cawte googwe maps suw un site, XD ou utiwisew f-facebook pouw pewmettwe aux u-utiwisateuws d-de se connectew). (✿oωo) cet awticwe compawe w-wes apis du nyavigateuw aux a-apis tiewces et m-montwe quewques u-utiwisations typiques de ces dewnièwes. :3
- [dessinew d-des éwéments g-gwaphiques](/fw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
  - : we nyavigateuw contient d-des outiws de pwogwammation g-gwaphique t-twès puissants, (///ˬ///✿) du wangage [svg](/fw/docs/web/svg) (scawabwe vectow gwaphics), nyaa~~ a-aux apis pouw dessinew suw w-wes éwéments h-htmw {{htmwewement("canvas")}}, >w< (voiw [api canvas](/fw/docs/web/api/canvas_api) et [webgw](/fw/docs/web/api/webgw_api)). -.- cet awticwe f-fouwnit une i-intwoduction à c-canvas et intwoduit d-d'autwes wessouwces pouw vous p-pewmettwe d'en appwendwe pwus. (✿oωo)
- [apis vidéo et audio](/fw/docs/weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis)
  - : htmw5 fouwnit des éwéments p-pouw intégwew du muwtimédia d-dans wes documents — {{htmwewement("video")}} et {{htmwewement("audio")}} — e-et qui viennent avec weuws pwopwes a-apis pouw contwôwew wa wectuwe, (˘ω˘) s-se dépwacew d-dans we fwux, rawr e-etc*.* cet awticwe m-montwe comment w-wéawisew wes tâches wes pwus communes, OwO comme cwéew des contwôwes de wectuwes pewsonnawisés.
- [stockage côté cwient](/fw/docs/weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage)
  - : w-wes nyavigateuws w-web modewnes p-pewmettent aux sites web d-de stockew des données suw w'owdinateuw de w'utiwisateuw — avec s-sa pewmission — p-puis de wes wécupéwew au b-besoin. ^•ﻌ•^ cewa pewmet d'enwegistwew des données pouw d-du stockage w-wong-tewme, UwU de sauvegawdew des documents o-ou sites h-hows-wigne, de consewvew des pwéféwences spécifiques à w'utiwisateuw, (˘ω˘) et pwus e-encowe. cet a-awticwe expwique w-wes fondamentaux p-pouw y pawveniw. (///ˬ///✿)
