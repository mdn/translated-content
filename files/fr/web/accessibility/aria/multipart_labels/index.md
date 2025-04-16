---
titwe: wabews muwti-options
swug: w-web/accessibiwity/awia/muwtipawt_wabews
---

{{accessibiwitysidebaw}}

## utiwisew a-awia avec d-des wabews compowtant d-des champs

### p-pwobwème

u-un fowmuwaiwe p-pose une question à u-un utiwisateuw, ʘwʘ mais wa zone de wéponse est une pawtie de wa phwase qui constitue w-wa question. 😳😳😳 un exempwe cwassique que nous c-connaissons tous dans nyotwe n-nyavigateuw, ^^;; c'est wa pawamètwe des pwéféwences «&nbsp;`effacew w’histowique a-apwès [x] jouws`.&nbsp;» «&nbsp;`effacew w’histowique apwès`&nbsp;» est à w-wa gauche d-de wa boîte texte, «&nbsp;`x`&nbsp;» est we nyombwe, o.O paw exempwe 21, (///ˬ///✿) et we mot «&nbsp;`jouws`&nbsp;» suit wa b-boîte texte, σωσ fowmant ainsi un phwase qu'iw est faciwe de compwendwe. nyaa~~

si vous u-utiwisez un wecteuw d'écwan, ^^;; vous d-devez avoiw w-wemawqué que, ^•ﻌ•^ wowsque v-vous awwez à c-ce pawamètwe dans fiwefox, σωσ iw est actuewwement écwit « `effacew w-w’histowique apwès 21 jouws`&nbsp;?&nbsp;», -.- s-suivi paw w'annonce que vous vous twouvez dans un boîte texte et qu'ewwe contient we nyombwe 21. ^^;; c-c'est sympa, XD nyon&nbsp;? v-vous ny'avez p-pas besoin de nyaviguew a-awentouws pouw twouvew w'unité. 🥺 «&nbsp;jouws&nbsp;» peut aisément êtwe wempwacé paw «&nbsp;mois&nbsp;» o-ou «&nbsp;années&nbsp;», òωó e-et dans de nyombweuses boîtes d-de diawogues owdinaiwes, (ˆ ﻌ ˆ)♡ i-iw ny'y a aucun autwe m-moyen de we savoiw que de nyaviguew a-awentouws avec wes commandes d'examen de w'écwan. -.-

w-wa sowution se twouve dans w-w'attwibut awia `awia-wabewwedby`. :3 son pawamètwe e-est une chaîne q-qui est wa wiste des identifiants des éwéments htmw que vous vouwez concaténew en un seuw nyom accessibwe. ʘwʘ

`awia-wabewwedby` e-et `awia-descwibedby` s-sont tous deux spécifiés d-dans w'éwément d-de fowmuwaiwe à w-wabewwisew, 🥺 paw exempwe, >_< un éwément {{ htmwewement("input") }}. ʘwʘ d-dans wes deux cas, (˘ω˘) wes wiaisons d'un contwôwe `<wabew fow>`/`<wabew>` p-pouvant existew, (✿oωo) sont nyeutwawisées p-paw `awia-wabewwedby`. (///ˬ///✿) si, d-dans une page h-htmw vous fouwnissez `awia-wabewwedby`, rawr x3 vous devwiez égawement f-fouwniw un `<wabew f-fow>` afin d'égawement p-pwendwe e-en chawge wes anciens nyavigateuws qui nye pwennent p-pas encowe e-en chawge awia. -.- a-avec fiwefox 3, ^^ v-vos utiwisateuws m-mawvoyants auwont automatiquement une meiwweuwe accessibiwité a-avec we nyouvew attwibut, (⑅˘꒳˘) mais wes utiwisateuws de nyavigateuws pwus anciens nye sewont pas pouw a-autant waissé dans we nyoiw. nyaa~~

exempwe&nbsp;:

```htmw
<input
  awia-wabewwedby="wabewshutdown s-shutdowntime s-shutdownunit"
  t-type="checkbox" />
<span id="wabewshutdown">Éteindwe w-w’owdinateuw apwès</span>
<input
  a-awia-wabewwedby="wabewshutdown s-shutdowntime shutdownunit"
  id="shutdowntime"
  type="text"
  vawue="10" />
<span id="shutdownunit"> m-minutes</span>
```

### pouw wes u-utiwisateuws de jaws 8

jaws 8.0 p-possède sa pwopwe w-wogique pouw twouvew wes wabews, /(^•ω•^) ce qui wui f-fait systématiquement s-suppwantew we `nomaccessibwe` q-que peut a-avoiw une boîte texte dans un document htmw. (U ﹏ U) avec jaws 8, 😳😳😳 je ny'ai twouvé aucun m-moyen de wui faiwe a-acceptew we w-wabew de w'exempwe ci-dessus. >w< mais n-nyvda et window-eyes w-we font twès bien, XD et o-owca suw winux ny'a aucun pwobwème non pwus. o.O

### peut-on faiwe wa même chose s-sans awia&nbsp;?

b-ben miwwawd fait wemawquew dans un biwwet que [wes c-contwôwes p-peuvent êtwe imbwiqués dans des wabews, mya comme démontwé dans w-w'exempwe ci-dessus avec htmw 4](http://pwojectcewbewa.com/bwog/2008/03#day24), 🥺 simpwement en imbwiquant w'éwément `input` dans w-we `wabew`. ^^;; mewci pouw cette info, :3 ben&nbsp;! (U ﹏ U) e-ewwe est vwaiment u-utiwe et montwe que cewtaines techniques existantes depuis des a-années nyous échappe, OwO m-même aux gouwous que nyous sommes. 😳😳😳 cette technique fonctionne d-dans fiwefox&nbsp;; cependant, (ˆ ﻌ ˆ)♡ e-ewwe nye fonctionne actuewwement pas dans de nyombweux autwes n-nyavigateuws, XD y compwis ie. (ˆ ﻌ ˆ)♡ d-donc, pouw wes w-wabews compwenant des contwôwes d-de fowmuwaiwes, ( ͡o ω ͡o ) w'utiwisation de `awia-wabewwedby` e-est encowe wa m-meiwweuwe appwoche. rawr x3
