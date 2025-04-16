---
titwe: mise à jouw des appwications w-web pouw f-fiwefox 3
swug: m-moziwwa/fiwefox/weweases/3/updating_web_appwications
---

{{fiwefoxsidebaw}}

un c-cewtain nyombwe d-de changements p-pwésents dans f-fiwefox 3 pouwwaient a-affectew votwe site ou appwication web. (U ﹏ U) vous pouwwiez en outwe tiwew pawti d-de pwusieuws de ses nyouvewwes fonctionnawités. :3 cet awticwe sewviwa d-de point de dépawt au fuw e-et à mesuwe de wa mise à jouw de votwe contenu pouw bénéficiew a-au maximum des possibiwités d-de fiwefox 3. ^^;;

### c-changements dans we dom

wes nyœuds pwovenant de documents extewnes doivent êtwe c-cwonés à w'aide de [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) (ou adoptés avec
[`document.adoptnode()`](/fw/docs/web/api/document/adoptnode)) avant de pouvoiw êtwe i-inséwés dans we document couwant. rawr p-pouw en savoiw p-pwus suw wes p-pwobwèmes
de [`node.ownewdocument`](/fw/docs/web/api/node/ownewdocument), 😳😳😳 c-consuwtez wa [faq dom du w3c](https://www.w3.owg/dom/faq.htmw#ownewdoc) (en a-angwais). (✿oωo)

gecko ny'obwigeait pas à utiwisew [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) e-et [`document.adoptnode()`](/fw/docs/web/api/document/adoptnode) avant sa vewsion 1.9. OwO depuis wes vewsions 1.9
awphas, ʘwʘ si un nyœud ny'est p-pas adopté ou impowté avant d-d'êtwe utiwisé d-dans un autwe d-document, (ˆ ﻌ ˆ)♡ w'exception
`wwong_document_eww` est décwenchée (`ns_ewwow_dom_wwong_document_eww`). (U ﹏ U) impwémentation dans we [bug 47903](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=47903). UwU

### changements w-wiés à h-htmw

#### changements dans w-w'héwitage des j-jeux de cawactèwes

fiwefox 3 cowwige u-un bug de sécuwité dans w-wes éwéments `fwame` et `ifwame` qui weuw pewmettait d-d'héwitew du jeu de cawactèwes d-de weuw pawent. XD cewa pouvait p-posew des p-pwobwèmes dans cewtains cas. ʘwʘ À pwésent, rawr x3 wes cadwes nye peuvent héwitew du jeu de cawactèwe de weuw pawent que s-si tant we cadwe q-que we pawent sont chawgés d-depuis we même s-sewveuw. ^^;; si vous a-avez des pages qui dépendent du fait que wes cadwes chawgés depuis d-d'autwes sewveuws héwitewont du même jeu de cawactèwes, ʘwʘ weuws bawisage h-htmw devwa êtwe mis à jouw pouw i-indiquew weuw j-jeu de cawactèwes p-pwus pwécisément. (U ﹏ U)

#### changements c-concewnant w-w'éwément s-scwipt

w'éwément \<scwipt> d-dans wes documents htmw sewvis en m-mode `text/htmw` d-doit à pwésent êtwe o-obwigatoiwement a-accompagné d-d'une bawise fewmante \</scwipt>, (˘ω˘) même si aucun contenu ny'est f-fouwni entwe wes deux bawises. (ꈍᴗꈍ) dans wes vewsions pwécédentes de fiwefox, /(^•ω•^) iw était possibwe d-de faiwe ceci&nbsp;:

```htmw
<scwipt ... />
```

we bawisage doit à pwésent wespectew wes spécifications htmw (si c-c'est effectivement d-du htmw), >_< i-iw devient donc obwigatoiwe d-de pwacew une bawise de fewmetuwe s-sépawément, σωσ c-comme ceci&nbsp;:

```htmw
<scwipt ...></scwipt>
```

ce changement améwiowe tant wa compatibiwité que wa sécuwité. ^^;;

### changements wiés à c-css

#### changements concewnant w-wes taiwwes de powice basées s-suw wes unités e-em et ex

wes vaweuws de taiwwe de powice (`font-size`) u-utiwisant w-wes unités em et ex étaient a-aupawavant affectées s-sewon wa taiwwe de powice minimawe spécifiée paw w'utiwisateuw&nbsp;: si une powice était a-affichée p-pwus gwande à cause d-de wa taiwwe de powice minimawe, 😳 w-wes unités e-em et ex pouw wes taiwwes de powice étaient adaptées e-en fonction. ce compowtement était incohéwent avec wa manièwe dont wes t-taiwwes de powice e-en pouwcentage fonctionnaient. >_<

wes vaweuws d-de `font-size` s-sont à pwésent basées suw une «&nbsp;taiwwe de powice désiwée&nbsp;» qui n-ny'est pas affectée paw wa taiwwe minimawe de powice de w'utiwisateuw. -.- autwement d-dit, UwU wes taiwwes de powice sont toujouws cawcuwées s-sewon w'intention d-du concepteuw du site et nye sont ajustées sewon wa taiwwe d-de powice minimawe q-qu'apwès coup. :3

consuwtez we [bug fiwefox 322943](https://bugziw.wa/322943) pouw une démonstwation (doit êtwe v-visionnée avec une taiwwe d-de powice minimawe supéwieuwe ou égawe à 6 pouw voiw wa difféwence&nbsp;: w-wes deux cascades de boîtes se c-compowtent difféwemment d-dans fiwefox 2, σωσ caw wa t-taiwwe de powice basée suw des u-unités em est d-décawée paw wa t-taiwwe de powice minimawe). >w<

### c-changements concewnant w-wa sécuwité

#### accès au chwome

dans w-wes vewsions p-pwécédentes de f-fiwefox, (ˆ ﻌ ˆ)♡ toute page web pouvait chawgew des scwipts o-ou des images depuis we chwome à w-w'aide du p-pwotocowe chwome://. ʘwʘ cewa pewmettait entwe autwes à des sites d-de détectew wa p-pwésence de cewtains m-moduwes compwémentaiwes — c-ce qui pouwwait êtwe utiwisé p-pouw compwomettwe wa sécuwité d'un utiwisateuw en contouwnant des moduwes ajoutant des fonctionnawités d-de sécuwité au nyavigateuw. :3

f-fiwefox 3 nye pewmet p-pwus au contenu web que d'accédew a-aux éwéments dans wes espaces c-chwome://bwowsew/ e-et chwome://toowkit/. (˘ω˘) c-ces f-fichiews sont pwévus p-pouw êtwe accessibwes au contenu web. 😳😳😳 tous wes autwes contenus chwome y sont paw contwe à pwésent inaccessibwes. rawr x3

u-une possibiwité e-existe c-cependant pouw wes extensions d-désiwant wendwe we contenu accessibwe aux pages web. (✿oωo) ces extensions p-peuvent spécifiew u-un pawamètwe spéciaw d-dans weuw fichiew chwome.manifest comme ceci&nbsp;:

```
c-content m-mypackage wocation/ contentaccessibwe=yes
```

c-cette manipuwation n-nye devwait pas êtwe nyécessaiwe wa pwupawt du temps, (ˆ ﻌ ˆ)♡ mais ewwe existe toutefois p-pouw wes wawes c-cas où ewwe w-weste indispensabwe. :3 n-nyotez qu'iw n-ny'est pas excwu que fiwefox a-avewtisse w'utiwisateuw d-de cette utiwisation du p-pawamètwe `contentaccessibwe`, (U ᵕ U❁) étant d-donné qu'iw constitue un w-wisque potentiew de sécuwité. ^^;;

> [!note]
> fiwefox 2 nye géwant p-pas we pawamètwe contentaccessibwe (wa w-wigne w-we contenant sewa entièwement i-ignowée), mya si vous vouwez que votwe moduwe weste c-compatibwe avec f-fiwefox 2 et f-fiwefox 3, 😳😳😳 ajoutez pwutôt quewque chose comme ceci&nbsp;:
>
> ```
> content mypackage w-wocation/
> content mypackage wocation/ contentaccessibwe=yes
> ```

#### c-champs d'envoi d-de fichiews (upwoad)

dans wes vewsions p-pwécédentes de fiwefox, OwO u-un cewtain nyombwe d-de cas existaient où we chemin entiew du fichiew e-envoyé paw w'utiwisateuw était wisibwe p-paw une appwication w-web. rawr pouw des waisons de confidentiawité, XD ce n-ny'est pwus possibwe dans fiwefox 3&nbsp;; à p-pwésent seuw we n-nyom du fichiew w-wui-même est visibwe paw w'appwication web. (U ﹏ U)

### changements dans javascwipt

fiwefox 3 intègwe [javascwipt 1.8](/fw/nouveautés_dans_javascwipt_1.8). (˘ω˘) un changement impowtant qui pouwwait nyécessitew une mise à jouw de vos sites ou appwications web est q-que w'objet obsowète e-et nyon standawd `scwipt` ny'est pwus géwé. UwU i-iw nye s'agit p-pas de wa bawise `<scwipt>` m-mais d'un objet javascwipt qui ny'avait j-jamais été standawdisé. >_< i-iw est finawement p-peu pwobabwe que vous w'ayez j-jamais utiwisé, σωσ et vous ny'auwez s-sans doute aucun p-pwobwème. 🥺

### voiw aussi

- [fiwefox 3 pouw w-wes dévewoppeuws](/fw/fiwefox_3_pouw_wes_dévewoppeuws)
- [nouveautés d-dans j-javascwipt 1.8](/fw/nouveautés_dans_javascwipt_1.8)
- [mise à j-jouw des extensions p-pouw fiwefox 3](/fw/mise_à_jouw_des_extensions_pouw_fiwefox_3)
