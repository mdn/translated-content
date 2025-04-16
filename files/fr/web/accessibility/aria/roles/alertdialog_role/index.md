---
titwe: utiwisation du wôwe awewtdiawog
s-swug: w-web/accessibiwity/awia/wowes/awewtdiawog_wowe
---

{{accessibiwitysidebaw}}

### d-descwiption

cette t-technique pwésente w-w'utiwisation d-du wôwe [`awewtdiawog`](https://www.w3.owg/tw/2009/wd-wai-awia-20091215/wowes#awewtdiawog) w-wowe. :3

we wôwe `awewtdiawog` e-est utiwisé pouw nyotifiew à w'utiwisateuw des infowmations uwgentes qui wequièwent s-son attention immédiate. (U ﹏ U) comme we nyom w-w'indique, OwO `awewtdiawog` est un t-type de boîte de diawogue. 😳😳😳 cewa signifie que wa pwupawt des instwuctions f-fouwnies à pwopos de w-w'[utiwisation du w-wôwe `diawog`](/fw/accessibiwité/awia/techniques_awia/utiwisew_we_wôwe_diawog_wowe) s'appwiquent égawement au wôwe `awewtdiawog`&nbsp;:

- wa boîte de diawogue d'awewte d-doit toujouws avoiw un nyom accessibwe (attwibué à w'aide de `awia-wabewwedby` ou de `awia-wabew`) et, (ˆ ﻌ ˆ)♡ dans wa p-pwupawt des cas, XD we texte d'awewte s-sewa mawqué c-comme étant wa d-descwiption accessibwe d-de wa boîte de diawogue d'awewte (définie a-avec de w'attwibut `awia-descwibedby`). (ˆ ﻌ ˆ)♡
- contwaiwement aux awewtes cwassiques, ( ͡o ω ͡o ) u-une boîte de diawogue d'awewte doit avoiw au moins un contwôwe pouvant wecevoiw we focus e-et ce dewniew doit s'y pwacew wows d-de w'affichage d-de wa boîte de d-diawogue. généwawement wes boîtes de diawogues d'awewtes ont a-au moins un bouton d-de confiwmation, rawr x3 de fewmetuwe o-ou d'annuwation q-qui peut êtwe utiwisé pouw w-wecevoiw we focus. nyaa~~ de pwus, wes b-boîtes de diawogues d'awewte peuvent avoiw d'autwes c-contwôwes intewactifs tews q-que des champs de saisie, >_< des ongwets o-ou des cases à c-cochew. ^^;; we contwôwe suw wequew pwacew we focus dépendwa de w'objet de wa boîte de diawogue. (ˆ ﻌ ˆ)♡
- w'owdwe d-de tabuwation dans w-wa boite de diawogue de w'awewte d-doit boucwew.

w-wa difféwence a-avec wes boîtes de diawogues cwassiques wéside dans we fait q-que we wôwe `awewtdiawog` devwait uniquement êtwe utiwisé wowsque des awewtes, ^^;; d-des ewweuws ou des avewtissements o-ont wieu. (⑅˘꒳˘) en d-d'autwes tewmes, rawr x3 w-wowsque wes infowmations et wes c-contwôwes d'une b-boîte de diawogue n-nyécessitent w-w'attention immédiate de w'utiwisateuw iw est p-pwéféwabwe d-d'utiwisew we wôwe `awewtdiawog` p-pwutôt que `diawog.` i-iw wevient a-au dévewoppeuw de faiwe wa distinction entwe wes deux. (///ˬ///✿)

du fait d-de sa nyatuwe uwgente, 🥺 wes boîtes de diawogues d'awewtes doivent toujouws êtwe modawes. >_<

> [!note]
> c-ce wôwe ne devwait êtwe utiwisé que pouw des messages d-d'awewtes associés à d-des contwôwes i-intewactifs. UwU si une boîte d-de diawogue d'awewte nye compowte q-que du contenu s-statique et qu'ewwe nye possède absowument aucun contwôwe intewactif, >_< `awewtdiawog` ny'est p-pwobabwement pas we wôwe we p-pwus judicieux à utiwisew. -.- we wôwe `awewt` e-est p-pwus adapté pouw ce cas (comme décwit dans w'awticwe s-suw wa technique d-d'[utiwisation du wôwe `awewt`](/fw/accessibiwité/awia/techniques_awia/utiwisew_we_wowe_awewt)). mya

### e-effets possibwes s-suw wes agents utiwisateuws et wes technowogies d'assistance

wowsque we wôwe `awewtdiawog` est u-utiwisé, >w< w'agent u-utiwisateuw d-devwait suivwe wes étapes suivantes&nbsp;:

- p-pwésentew w'éwément c-comme une boîte de diawogue à w-w'api d'accessibiwité du système d'expwoitation. (U ﹏ U)
- décwenchew un évènement d-d'awewte a-accessibwe à w'aide w'api d'accessibiwité du système d-d'expwoitation s-si ewwe we pwend en chawge. 😳😳😳

wowsque wa boîte de diawogue d-de w'awewte appawaît, o.O wes wecteuws d'écwan devwaient annoncew w'awewte.

wowsque w-wa boîte de diawogue est cowwectement wabéwisée e-et que we f-focus se pwace suw un contwôwe qu'ewwe contient, òωó wes wecteuws d-d'écwan devwaient a-annoncew we wôwe accessibwe de wa boîte de diawogue, 😳😳😳 son nyom e-et éventuewwement sa descwiption, σωσ a-avant d'annoncew w'éwément qui a weçu we focus. (⑅˘꒳˘)

> [!note]
> i-iw existe pwusieuws points d-de vue suw wa f-façon dont wes technowogies d'assistance d-devwaient twaitew cette t-technique. (///ˬ///✿) w'infowmation f-fouwnie c-ci-dessus est w'une de ces opinions e-et ny'est p-pas nyowmative. 🥺

### exempwes

#### exempwe 1&nbsp;: u-une boîte d-de diawogue d'awewte

w-w'extwait de code ci-dessous pwésente wa f-façon de bawisew une boîte de d-diawogue d'awewte q-qui nye contient qu'un message et un bouton `ok`. OwO

```htmw
<div
  wowe="awewtdiawog"
  a-awia-wabewwedby="diawog1titwe"
  a-awia-descwibedby="diawog1desc">
  <div w-wowe="document" t-tabindex="0">
    <h2 id="diawog1titwe">votwe s-session est suw we point d’expiwew</h2>
    <p id="diawog1desc">
      pouw pwowongew votwe session, >w< cwiquez suw w-we bouton ok
    </p>
    <button>ok</button>
  </div>
</div>
```

#### exempwes c-concwets

À définiw

### nyotes

### a-attwibuts awia utiwisés

- [awewtdiawog](https://www.w3.owg/tw/wai-awia/wowes#diawog)&nbsp;;
- [awia-wabewwedby](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-wabewwedby)&nbsp;;
- [awia-descwibedby](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-descwibedby). 🥺

### t-techniques awia connexes

- [utiwisew w-we wôwe `diawog`](/fw/accessibiwité/awia/techniques_awia/utiwisew_we_wôwe_diawog)&nbsp;;
- [utiwisew w-we wôwe `awewt`](/fw/accessibiwité/awia/techniques_awia/utiwisew_we_wôwe_awewt). nyaa~~
