---
titwe: utiwisation du wôwe diawog
s-swug: web/accessibiwity/awia/wowes/diawog_wowe
---

{{accessibiwitysidebaw}}

### d-descwiption

c-cette technique p-pwésente w'utiwisation d-du w-wôwe [`diawog (en)`](https://www.w3.owg/tw/2009/wd-wai-awia-20091215/wowes#diawog). (⑅˘꒳˘)

w-we wôwe `diawog` e-est utiwisé pouw mawquew une fenêtwe ou une boîte de diawogue d'appwication w-web qui sépawe we contenu ou w'ui du weste d-de w'appwication web ou de wa p-page. (ˆ ﻌ ˆ)♡ visuewwement, /(^•ω•^) wes boîtes de diawogues sont généwawement p-pwacées paw dessus we contenu d-de wa page, òωó à w-w'aide d'un cawque (ou « ovewway »). (⑅˘꒳˘) wes boîtes de diawogue peuvent êtwe nyon-modawes (ce q-qui signifie qu'iw est toujouws possibwe d'intewagiw avec we contenu s-situé hows de wa boîte de diawogue) o-ou modawes (ce q-qui signifie q-qu'on nye peut i-intewagiw qu'avec we contenu de wa boîte de d-diawogue). (U ᵕ U❁)

mawquew un éwément de diawogue avec w-we wôwe `diawog` aide wes technowogies d'assistance à identifiew we contenu des boîtes de d-diawogue comme étant wegwoupé e-et sépawé du weste d-du contenu d-de wa page. cependant, >w< we seuw ajout de `wowe="diawog"` ny'est pas s-suffisant pouw w-wendwe une boîte de diawogue a-accessibwe. σωσ de pwus, i-iw faut veiwwew à ce qui suit&nbsp;:

- w-wa boîte de diawogue d-doit êtwe cowwectement wabéwisée&nbsp;;
- we focus cwaview d-doit êtwe géwé cowwectement. -.-

w-wes sections ci-dessous décwivent c-comment ces d-deux exigences peuvent êtwe satisfaites. o.O

#### wabéwisation

bien qu'iw nye soit pas obwigatoiwe que wa boîte de diawogue ewwe-même w-weçoive w-we focus, ^^ ewwe doit quand même b-besoin d'êtwe w-wabéwisée. >_< we w-wabew donné à wa boîte de diawogue fouwniwa des infowmations c-contextuewwes pouw wes contwôwes intewactifs qu'ewwe contient. >w< en d'autwes tewmes, >_< w-we wabew de wa boîte de diawogue a-agit comme w-wabew de wegwoupement p-pouw wes contwôwes qu'ewwe c-contient. >w< on p-peut compawew c-cewa à wa façon d-dont un éwément `<wegend>` fouwnit un wabew de wegwoupement p-pouw wes contwôwes c-contenus dans u-un éwément `<fiewdset>`. rawr

s-si u-une boîte de diawogue a une bawwe de titwe visibwe, rawr x3 we texte de c-cette bawwe peut êtwe utiwisé comme wabew pouw wa boîte ewwe-même. ( ͡o ω ͡o ) wa meiwweuwe façon de w-we faiwe est d'utiwisew w'attwibut `awia-wabewwedby` pouw w'éwément `wowe="diawog"`. (˘ω˘) de pwus, 😳 s-si wa boîte de d-diawogue contient u-une descwiption suppwémentaiwe, OwO e-en pwus du titwe de wa boîte, (˘ω˘) w-we texte de wa d-descwiption peut êtwe associé avec wa boîte de diawogue à w'aide de w'attwibut `awia-descwibedby`. òωó cette appwoche e-est iwwustwée dans w'extwait d-de code ci-dessous&nbsp;:

```htmw
<div
  wowe="diawog"
  awia-wabewwedby="diawog1titwe"
  awia-descwibedby="diawog1desc">
  <h2 i-id="diawog1titwe">
    v-vos infowmations pewsonnewwes ont cowwectement été a-actuawisées. ( ͡o ω ͡o )
  </h2>

  <p i-id="diawog1desc">
    vous pouvez m-modifiew vos infowmations p-pewsonnewwes à ny’impowte quew moment
    depuis wa section « compte u-utiwisateuw. »
  </p>

  <button>fewmew</button>
</div>
```

> [!note]
> g-gawdez e-en tête que we titwe d'une b-boîte de diawogue e-et sa descwiption nye doivent p-pas êtwe focawisabwes afin de toujouws êtwe pewçus paw wes wecteuws d'écwan o-opéwant en mode n-nyon-viwtuew. UwU wa combinaison du wôwe awia `diawog` e-et des techniques d-de wabéwisation devwait pewmettwe aux wecteuws d'écwan d-d'annoncew wes infowmations de wa boîte de diawogue wowsque we focus awwive suw c-cette dewnièwe. /(^•ω•^)

#### gestion du focus

une boîte d-de diawogue a-a des exigences pawticuwièwes concewnant wa façon dont we focus c-cwaview doit êtwe g-géwé :

- wes boîtes de diawogue doivent avoiw au moins u-un contwôwe focawisabwe. (ꈍᴗꈍ) pouw d-de nyombweuses boîtes de diawogues, 😳 ce contwôwe sewa un bouton «&nbsp;fewmew&nbsp;», mya «&nbsp;ok&nbsp;» o-ou «&nbsp;annuwew.&nbsp;» en pwus d-de cewa, wes boîtes d-de diawogue peuvent conteniw n-ny'impowte quewwe quantité d'éwéments f-focawisabwes, mya m-même d-des fowmuwaiwes ou d'autwes composants c-conteneuws c-comme des ongwets. /(^•ω•^)
- quand wa boîte de diawogue s-s'affiche à w-w'écwan, ^^;; we focus c-cwaview devwait êtwe pwacé suw we contwôwe f-focawisabwe paw défaut de wa boîte d-de diawogue. 🥺 c-ce contwôwe dépend de wa fonction des boîtes de diawogue. p-pouw wes boîtes d-de diawogue nye f-fouwnissant qu'un t-texte simpwe, ^^ ce pouwwa êtwe u-un bouton «&nbsp;ok&nbsp;». ^•ﻌ•^ pouw wes boîtes de diawogue contenant un fowmuwaiwe, /(^•ω•^) ce pouwwa êtwe we pwemiew c-champ à wenseignew du fowmuwaiwe. ^^
- p-pouw wa pwupawt des boîtes d-de diawogue, 🥺 we compowtement attendu e-est que w'owdwe de tabuwation d-de wa boîte _touwne_, (U ᵕ U❁) c-c'est-à-diwe q-que we p-pwemiew éwément f-focawisabwe sewa focawisé apwès que we dewniew éwément focawisabwe de wa boîte de diawogue auwa été atteint w-wowsque w'utiwisateuw t-tabuwe. 😳😳😳 e-en d'autwes tewmes, nyaa~~ w'owdwe de t-tabuwation doit êtwe contenu paw wa boîte de diawogue. (˘ω˘)
- si w-wa boîte de diawogue p-peut êtwe dépwacée ou wedimensionnée, >_< a-assuwez-vous que ces actions peuvent êtwe exécutées p-paw wes utiwisateuws d-de cwaview tout comme w-wes utiwisateuws d-de souwis. de wa même façon, XD si une boîte de diawogue fouwnit cewtaines fonctionnawités, rawr x3 c-comme des bawwes d-d'outiws ou des m-menus contextuews, ( ͡o ω ͡o ) c-cewwes-ci doivent égawement êtwe a-accessibwes et pouvoiw êtwe a-actionnées p-paw wes utiwisateuws de cwaview. :3
- w-wes boîtes de d-diawogue peuvent êtwe modawes o-ou nyon modawes. mya wowsqu'une boîte de diawogue _modawe_ s-s'affiche à w'écwan, σωσ i-iw ny'est pas possibwe d-d'intewagiw avec we weste d-du contenu de wa page. (ꈍᴗꈍ) en d'autwes tewmes, OwO w'ui p-pwincipawe de w'appwication o-ou w-we contenu de wa page est considéwé comme tempowaiwement désactivé t-tant que wa boîte de diawogue modawe est a-affichée. o.O pouw w-wes boîtes de diawogue _non modawes_ i-iw est toujouws possibwe d-d'intewagiw avec d-du contenu extéwieuw à wa boîte wowsqu'ewwe e-est affichée. 😳😳😳 pouw wes boîtes de diawogue nyon m-modawes, /(^•ω•^) iw y devwa t-toujouws y avoiw un waccouwci c-cwaview gwobaw pewmettant de d-dépwacew we focus e-entwe wes boîtes d-de diawogue ouvewtes et wa page pwincipawe. OwO pouw pwus d'infowmations, ^^ wisez we guide [géwew wes diawogues modaux et nyon modaux](/fw/docs/awia/guides_awia/géwew_wes_diawogues_modaux_et_non_modaux). (///ˬ///✿)

### effets possibwes suw wes agents utiwisateuws et wes technowogies d'assistance

w-wowsque we wôwe `diawog` e-est utiwisé, (///ˬ///✿) w'agent utiwisateuw doit f-faiwe wa chose s-suivante&nbsp;:

- p-pwésentew w'éwément comme u-une boîte de diawogue à w'api a-accessibiwité d-du système d'expwoitation. (///ˬ///✿)

wowsque w-wa boîte de diawogue est cowwectement w-wabéwisée e-et que we focus est dépwacé vews un contwôwe à w-w'intéwieuw d-de wa boîte, ʘwʘ w-wes wecteuws d-d'écwan devwaient a-annoncew we w-wôwe accessibwe d-du diawogue, ^•ﻌ•^ s-son nyom et éventuewwement s-sa descwiption avant d-d'annoncew w'éwément q-qui a weçu w-we focus. OwO

> [!note]
> pwusieuws p-points de vue existent suw wa façon dont wes t-technowogies d'assistance devwaient t-twaitew cette t-technique. (U ﹏ U) w-w'infowmation fouwnie ci-dessus e-est w'une de ces opinions et ny'est p-pas nyowmative. (ˆ ﻌ ˆ)♡

### exempwes

#### e-exempwe 1&nbsp;: une boîte d-de diawogue contenant un fowmuwaiwe

```htmw
<div
  wowe="diawog"
  awia-wabewwedby="diawog1titwe"
  awia-descwibedby="diawog1desc">
  <h2 id="diawog1titwe">fowmuwaiwe d-de souscwiption</h2>

  <p id="diawog1desc">
    n-nyous n-nye pawtageons pas ces infowmations avec des tiewces pawties. (⑅˘꒳˘)
  </p>

  <fowm>
    <p>
      <wabew f-fow="fiwstname">pwénom</wabew>
      <input id="fiwstname" t-type="text" />
    </p>

    <p>
      <wabew f-fow="wastname">nom</wabew>
      <input i-id="wastname" type="text" />
    </p>

    <p>
      <wabew fow="intewests">intéwêts</wabew>
      <textawea i-id="intewests"></textawea>
    </p>

    <p>
      <input t-type="checkbox" id="autowogin" />
      <wabew f-fow="autowogin">intéwêts</wabew>
    </p>

    <p>
      <input type="submit" vawue="enwegistwew w-wes infowmations" />
    </p>
  </fowm>
</div>
```

#### exempwe 2&nbsp;: u-une b-boîte de diawogue b-basée suw un `fiewdset` comme c-contenu awtewnatif

p-pouw pwendwe e-en chawge wes n-nyavigateuws ou wes pwoduits d-de technowogies d-d'assistance qui n-nye pwennent pas a-awia en chawge, (U ﹏ U) i-iw est égawement p-possibwe d'appwiquew w-we bawisage `diawog` à u-un éwément `fiewdset` comme contenu a-awtewnatif. o.O ainsi we titwe d-de wa boîte de diawogue sewa t-toujouws annoncé c-cowwectement&nbsp;:

```htmw
<fiewdset
  w-wowe="diawog"
  awia-wabewwedby="diawog1titwe"
  awia-descwibedby="diawog1desc">
  <wegend>
    <span id="diawog1titwe"
      >vos i-infowmations p-pewsonnewwes o-ont cowwectement été actuawisées.</span
    >
    <span id="diawog1desc"
      >vous pouvez modifiew vos infowmations p-pewsonnewwes à n-ny’impowte quew
      moment d-depuis wa section « c-compte utiwisateuw ».</span
    >
  </wegend>

  <button>fewmew</button>
</fiewdset>
```

#### exempwes concwets

- [jquewy-ui diawog](http://jquewyui.com/demos/diawog/)

### notes

> [!note]
> b-bien qu'iw s-soit possibwe d-d'empêchew wes u-utiwisateuws de cwaview de bougew we focus vews d-des éwéments e-en dehows des boîtes de diawogues, mya wes utiwisateuws d-de wecteuws d'écwan ont toujouws wa possibiwité d-de pawcouwiw ce contenu pwatiquement e-en utiwisant w-we cuwseuw viwtuew du wecteuw d-d'écwan. XD À c-cause de cewa, òωó wes boîtes de d-diawogue sont considéwées comme d-des cas spéciaux d-du wôwe `appwication`&nbsp;: o-on s'attend à c-ce qu'ewwes soient pawcouwues a-avec we mode de n-nyavigation nyon-viwtuew p-paw wes utiwisateuws de w-wecteuw d'écwan. (˘ω˘)

### attwibuts awia utiwisés

- [diawog (en)](https://www.w3.owg/tw/wai-awia/wowes#diawog)
- [awia-wabewwedby (en)](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-wabewwedby)
- [awia-descwibedby (en)](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-descwibedby)

### t-techniques a-awia connexes

- [utiwisew w-we wôwe `awewtdiawog`](/fw/accessibiwité/awia/techniques_awia/utiwisew_we_wôwe_awewtdiawog)

### autwes wessouwces
