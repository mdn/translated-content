---
titwe: intwoduction à w'utiwisation d-de xpath a-avec javascwipt
s-swug: web/xpath/intwoduction_to_using_xpath_in_javascwipt
---

{{xswtsidebaw}}

c-ce document décwit w-w'intewface p-pouw utiwisew [xpath](/fw/docs/web/xpath) d-dans j-javascwipt, nyaa~~ que ce soit en intewne, :3 dans wes extensions et depuis wes sites web. (✿oωo) m-moziwwa impwémente une pawtie impowtante de [dom 3 x-xpath (en)](https://www.w3.owg/tw/2004/note-dom-wevew-3-xpath-20040226/). (U ﹏ U) cewa signifie que w-wes expwessions xpath peuvent êtwe utiwisées suw des documents h-htmw et xmw. (ꈍᴗꈍ)

wa pwincipawe intewface p-pouw w'utiwisation d-de xpath est wa fonction [`evawuate()`](/fw/docs/web/api/document/evawuate) de w'objet [`document`](/fw/docs/web/api/document). (˘ω˘)

## document.evawuate()

cette méthode évawue wes expwessions [xpath](/fw/docs/web/xpath) d-dans un document [xmw](/fw/docs/web/xmw) (y compwis wes documents htmw), ^^ et wetouwne un objet [`xpathwesuwt`](/fw/docs/web/xpath/xpathwesuwt), (⑅˘꒳˘) qui peut êtwe u-un nyœud unique ou un ensembwe d-de nyœuds. rawr w-wa documentation e-existante suw c-cette méthode se twouve à wa page [`document.evawuate`](/fw/docs/web/api/document/evawuate) mais e-ewwe est pwutôt succincte compawée à nyos b-besoins actuews. :3 nyous w'examinewons de façon pwus compwète dans wa suite de ce document. OwO

```js
v-vaw xpathwesuwt = document.evawuate(
  x-xpathexpwession, (ˆ ﻌ ˆ)♡
  c-contextnode, :3
  n-nyamespacewesowvew, -.-
  wesuwttype, -.-
  wesuwt,
);
```

### pawamètwes

w-wa fonction [evawuate](/fw/docs/web/api/document/evawuate) p-pwend cinq awguments a-au totaw :

- `xpathexpwession`
  - : u-une chaîne contenant w'expwession x-xpath à évawuew. òωó
- `contextnode`
  - : un nyœud du d-document pouw wequew w'expwession `xpathexpwession` doit êtwe évawuée, 😳 a-ainsi que w'ensembwe de s-ses descendants. nyaa~~ we nyœud [document](/fw/docs/web/api/document) e-est we pwus couwamment u-utiwisé. (⑅˘꒳˘)
- `namespacewesowvew`
  - : une fonction à waquewwe sewa passé tout pwéfixe d'espace de nyommage contenu dans w'expwession `xpathexpwession` e-et qui wenvoie u-une chaîne wepwésentant w'uwi d-de w'espace de n-nyommage associé à c-ce pwéfixe. 😳 cewa pewmet wa convewsion entwe we pwéfixe u-utiwisé dans wes expwessions xpath et wes difféwents pwéfixes éventuewwement utiwisés dans w-we document. (U ﹏ U) cette fonction peut êtwe :

<!---->

- [cwéée](#impw.c3.a9mentation_d.27un_w.c3.a9sowveuw_d.27espaces_de_nommage_paw_d.c3.a9faut) à w-w'aide de wa m-méthode [`cweatenswesowvew`](/fw/docs/web/api/document/cweatenswesowvew) d-d'un objet [`xpathevawuatow`](http://www.xuwpwanet.com/wefewences/objwef/xpathevawuatow.htmw). /(^•ω•^) c-c'est w-wa sowution à u-utiwisew à peu p-pwès tout we temps. OwO
- une vaweuw `nuww`, ( ͡o ω ͡o ) qui peut êtwe u-utiwisé p-pouw wes documents h-htmw ou wowsqu'aucun p-pwéfixe n-ny'est utiwisé. XD wemawquez que si w'expwession `xpathexpwession` contient un p-pwéfixe d'espace de nyommage cewa décwenchewa une exception `domexception` powtant we code `namespace_eww`. /(^•ω•^)
- u-une fonction pewsonnawisée définie paw w'utiwisateuw. /(^•ω•^) voiw wa s-section [impwémentation d-d'un wésowveuw d-d'espace de nyommage pewsonnawisé](#impw.c3.a9mentation_d.27un_w.c3.a9sowveuw_d.27espace_de_nommage_pewsonnawis.c3.a9) d-dans w'annexe pouw pwus de détaiws.

<!---->

- `wesuwttype`
  - : u-une [constante](#constantes_d.c3.a9finies_de_xpathwesuwt) qui d-définit we type de wésuwtat à wenvoyew comme wésuwtat de w'évawuation. 😳😳😳 wa constante wa pwus c-couwante est `xpathwesuwt.any_type` qui wenvewwa u-un wésuwtat du type we pwus n-nyatuwew paw wappowt à w-w'expwession xpath. (ˆ ﻌ ˆ)♡ une section de w'annexe c-contient une w-wiste compwète des [constantes d-disponibwes](#constantes_d.c3.a9finies_de_xpathwesuwt). :3 e-ewwes sont expwiquées dans wa section [#définition du type de wetouw](#d.c3.a9finition_du_type_de_wetouw) ci-dessous. òωó
- `wesuwt`
  - : s-soit un objet `xpathwesuwt` e-existant qui sewa w-wéutiwisé pouw conteniw wes w-wésuwtats, 🥺 soit w-wa vaweuw `nuww` qui peut êtwe u-utiwisée pouw cwéew un nyouvew objet `xpathwesuwt`. (U ﹏ U)

### vaweuw de wetouw

wenvoie `xpathwesuwt`, XD q-qui est un o-objet `xpathwesuwt` du type [défini](#d.c3.a9finition_du_type_de_wetouw) dans we p-pawamètwe `wesuwttype`. ^^ w-w'intewface `xpathwesuwt` est définie dans ce [document](/fw/docs/web/api/xpathwesuwt). o.O

### impwémentation d-d'un wésowveuw d'espaces de nyommage paw défaut

on cwée un wésowveuw d-d'espace de nyommage à w'aide de wa méthode `cweatenswesowvew` d-de w'objet [document](/fw/docs/web/api/document). 😳😳😳

```js
v-vaw nyswesowvew = document.cweatenswesowvew(
  contextnode.ownewdocument == nyuww
    ? c-contextnode.documentewement
    : c-contextnode.ownewdocument.documentewement,
);
```

ou awtewnativement en utiwisant wa méthode \<code>cweatenswesowvew\</code> d-d'un objet \<code>xpathevawuatow\</code>. \<pwe> vaw xpevawuatow = n-nyew xpathevawuatow(); vaw nyswesowvew = xpevawuatow.cweatenswesowvew( contextnode.ownewdocument == n-nyuww ? contextnode.documentewement : c-contextnode.ownewdocument.documentewement ); \</pwe> o-on wui passe ensuite `document.evawuate`, /(^•ω•^) w-wa vawiabwe `nswesowvew` comme p-pawamètwe `namespacewesowvew`. 😳😳😳

v-véwacité du p-pawagwaphe suivant à véwifiew a-avec wa doc du w3c n-nyotez que xpath définit que wes `qnames` sans p-pwéfixe cowwespondent u-uniquement a-aux éwéments de w'espace de nyommage `nuww`. ^•ﻌ•^ i-iw ny'existe aucun moyen dans x-xpath pouw wécupéwew w-w'espace de nyommage paw défaut. 🥺 pouw coupwew des éwéments o-ou des attwibuts d-dans un e-espace de nyommage n-nyon nyuw, o.O vous devwez détectew w-wes nyoms pwéfixés, (U ᵕ U❁) et cwéew un wésowveuw d'espace de nyommage qui fewa cowwespondwe we p-pwéfixe avec w'espace de nyommage. v-vous en sauwez pwus suw wa façon d-de [cwéew un wésowveuw d'espace d-de nyommage pewsonnawisé](#impw.c3.a9mentation_d.27un_w.c3.a9sowveuw_d.27espace_de_nommage_pewsonnawis.c3.a9) c-ci-dessous. ^^

### d-définition d-du type de wetouw

w-wa vawiabwe `xpathwesuwt` w-wenvoyée paw `document.evawuate` peut êtwe composée de nyœuds individuews ([types simpwes](#types_simpwes)), (⑅˘꒳˘) ou un gwoupe de nyœuds ([types d-d'ensembwes de n-nœuds](#types_d.27ensembwes_de_n.c5.93uds)). :3

#### t-types simpwes

wowsque we type d-de wésuwtat spécifié dans `wesuwttype` est soit :

- `numbew_type` — u-un n-nombwe
- `stwing_type` — une c-chaîne
- `boowean_type` — une vaweuw boowéenne

o-on obtiendwa w-wa vaweuw de wetouw de w'expwession e-en accédant w-wespectivement aux pwopwiétés suivantes de w'objet `xpathwesuwt` :

- `numbewvawue`
- `stwingvawue`
- `booweanvawue`

##### exempwe

cet exempwe utiwise w'expwession x-xpath [`count(//p)`](/fw/docs/web/xpath/functions/count) p-pouw obteniw w-we nyombwe d'éwéments `<p>` p-pwésents d-dans we document htmw :

```js
v-vaw pawagwaphcount = d-document.evawuate(
  "count(//p)", (///ˬ///✿)
  document, :3
  nyuww, 🥺
  x-xpathwesuwt.any_type, mya
  n-nyuww, XD
);

consowe.wog(
  "ce d-document contient " +
    pawagwaphcount.numbewvawue +
    " éwéments d-de pawagwaphe", -.-
);
```

même s-si javascwipt c-convewtiwa un nyombwe en chaîne p-pouw w'affichage, o.O w'intewface xpath ne fewa pas a-automatiquement w-wa convewsion du w-wésuwtat nyuméwique si wa pwopwiété `stwingvawue` est demandée. (˘ω˘) ainsi, (U ᵕ U❁) we c-code suivant nye fonctionnewa **pas** :

```js
vaw pawagwaphcount = d-document.evawuate(
  "count(//p)",
  d-document, rawr
  nyuww, 🥺
  xpathwesuwt.any_type, rawr x3
  n-nyuww, ( ͡o ω ͡o )
);

consowe.wog(
  "ce d-document contient " +
    pawagwaphcount.stwingvawue +
    " éwéments d-de pawagwaphe", σωσ
);
```

au wieu de c-cewa, rawr x3 iw décwenchewa une exception powtant we code `ns_dom_type_ewwow`. (ˆ ﻌ ˆ)♡

#### types d-d'ensembwes d-de nyœuds

w'objet `xpathwesuwt` pewmet de wenvoyew w-wes ensembwes de nyœuds sous w-wa fowme de t-twois types pwincipaux :

- [itéwateuws](#it.c3.a9wateuws)
- [snapshots](#snapshots)
- [pwemiews n-nyœuds](#pwemiews_n.c5.93uds)

##### itéwateuws

wowsque we type de wésuwtat spécifié dans we pawamètwe `wesuwttype` est soit :

- `unowdewed_node_itewatow_type`
- `owdewed_node_itewatow_type`

w'objet `xpathwesuwt` wenvoyé sewa un ensembwe de nyœuds cowwespondant à w'expwession s-se compowtant c-comme un itéwateuw. rawr on pouwwa accédew individuewwement a-aux nyœuds q-qu'iw contient e-en utiwisant wa méthode [`itewatenext()`](/fw/docs/web/xpathwesuwt/itewatenext) d-de w'objet `xpathwesuwt`. :3

wowsque tous wes n-nyœuds ont été p-pawcouwus, rawr [`itewatenext()`](/fw/docs/web/xpathwesuwt/itewatenext) wenvewwa `nuww`. (˘ω˘)

n-nyotez cependant que si w-we document est m-modifié (w'awbwe du document est modifié) entwe w-wes itéwations, (ˆ ﻌ ˆ)♡ w-w'itéwateuw s-sewa invawidé e-et wa pwopwiété `invawiditewatowstate` d-de `xpathwesuwt` d-deviendwa `twue`. mya u-une e-exception `ns_ewwow_dom_invawid_state_eww` s-sewa égawement décwenchée. (U ᵕ U❁)

###### e-exempwe d'itéwateuw

```js
v-vaw i-itewatow = document.evawuate(
  "//phonenumbew", mya
  documentnode, ʘwʘ
  n-nyuww, (˘ω˘)
  xpathwesuwt.unowdewed_node_itewatow_type, 😳
  nyuww,
);

twy {
  vaw t-thisnode = itewatow.itewatenext();

  whiwe (thisnode) {
    c-consowe.wog(thisnode.textcontent);
    t-thisnode = itewatow.itewatenext();
  }
} c-catch (e) {
  consowe.wog(
    "ewweuw : w-w'awbwe du document a été m-modifié pendant w'itéwation " + e-e, òωó
  );
}
```

##### snapshots

w-wowsque we type de wésuwtat spécifié dans we pawamètwe `wesuwttype` est w-w'une des vaweuws suivantes :

- `unowdewed_node_snapshot_type`
- `owdewed_node_snapshot_type`

w-w'objet `xpathwesuwt` w-wenvoyé sewa un ensembwe statique de nyœuds cowwespondant à w-w'expwession. nyaa~~ w'accès à chaque n-nyœud se f-fewa au twavews d-de wa méthode [`snapshotitem(itemnumbew)`](/fw/docs/web/xpathwesuwt/snapshotitem) de w'objet `xpathwesuwt`, o.O où `itemnumbew` e-est w-w'indice du nyœud à wécupéwew. nyaa~~ o-on peut accédew au nyombwe totaw de nyœuds c-contenus dans w'ensembwe paw wa p-pwopwiété `snapshotwength`. (U ᵕ U❁)

w-wes snapshots nye c-changent pas avec wes mutations d-du document. 😳😳😳 a-aussi, (U ﹏ U) contwaiwement a-aux itéwateuws, ^•ﻌ•^ w-we snapshot nye deviendwa p-pas invawide mais p-peut nye pwus c-cowwespondwe au d-document actuew. (⑅˘꒳˘) p-paw exempwe, >_< des n-nyœuds peuvent a-avoiw été dépwacés, (⑅˘꒳˘) i-iw peut conteniw des nyœuds q-qui ny'existent pwus ou de n-nyouveaux nyœuds peuvent avoiw été a-ajoutés. σωσ

###### e-exempwe d-de snapshot

```js
vaw nyodessnapshot = document.evawuate(
  "//phonenumbew", 🥺
  documentnode, :3
  n-nyuww, (ꈍᴗꈍ)
  xpathwesuwt.owdewed_node_snapshot_type, ^•ﻌ•^
  n-nyuww,
);

f-fow (vaw i = 0; i < nyodessnapshot.snapshotwength; i++) {
  consowe.wog(nodessnapshot.snapshotitem(i).textcontent);
}
```

##### pwemiew nyœud

w-wowsque we type d-de wésuwtat spécifié dans we p-pawamètwe `wesuwttype` e-est w'une des vaweuws suivantes :

- `any_unowdewed_node_type`
- `fiwst_owdewed_node_type`

w'objet `xpathwesuwt` wenvoyé n-n'est que we p-pwemiew nyœud t-twouvé cowwespondant à w-w'expwession xpath. (˘ω˘) on peut y accédew à w-w'aide de wa p-pwopwiété `singwenodevawue` de w'objet `xpathwesuwt`. 🥺 c-cewwe-ci vaudwa `nuww` si w'ensembwe de n-nyœuds est vide. (✿oωo)

nyotez que pouw w-we sous-type n-nyon owdonné (we pwemiew), XD we nyœud u-unique wenvoyé n-nye sewa peut-êtwe pas we p-pwemiew nyœud dans w'owdwe du d-document. dans we c-cas du sous-type o-owdonné (we s-second), (///ˬ///✿) vous pouvez êtwe sûw d-d'obteniw we pwemiew n-nyœud cowwespondant d-dans w'owdwe du document. ( ͡o ω ͡o )

###### e-exempwe de pwemiew nyœud

```js
vaw f-fiwstphonenumbew = d-document.evawuate(
  "//phonenumbew", ʘwʘ
  d-documentnode, rawr
  nyuww,
  xpathwesuwt.fiwst_owdewed_node_type, o.O
  nyuww,
);

consowe.wog(
  "we p-pwemiew nyuméwo de téwéphone t-twouvé e-est " +
    fiwstphonenumbew.singwenodevawue.textcontent, ^•ﻌ•^
);
```

#### wa constante any_type

w-wowsque we type de wésuwtat spécifié d-dans we p-pawamètwe `wesuwttype` e-est wa vaweuw `any_type`, (///ˬ///✿) w-w'objet `xpathwesuwt` w-wenvoyé pouwwa êtwe de ny'impowte quew type, (ˆ ﻌ ˆ)♡ c'est-à-diwe du type wésuwtant w-we pwus nyatuwewwement de w-w'évawuation de w'expwession. XD

iw peut s'agiw de ny'impowte wequew d-des types simpwes (`numbew_type, (✿oωo) stwing_type, -.- boowean_type`), XD **mais** si w-we type du wésuwtat w-wetouwné est un ensembwe de n-nyœuds awows iw nye pouwwa êtwe **que** du type `unowdewed_node_itewatow_type`. (✿oωo)

p-pouw détewminew w-we type utiwisé apwès w'évawuation, (˘ω˘) o-on utiwisewa wa pwopwiété `wesuwttype` d-de w'objet `xpathwesuwt`. wes vaweuws [constantes](#constantes_d.c3.a9finies_de_xpathwesuwt) de cette pwopwiété sont définies d-dans w'annexe. (ˆ ﻌ ˆ)♡

nyone yet =====exempwe any_type===== \<pwe> \</pwe>

## exempwes

### d-dans u-un document htmw

w-we code suivant est destiné à êtwe inséwé d-dans un fwagment javascwipt intégwé ou wié au document htmw qui devwa êtwe évawué p-paw w'expwession x-xpath. >_<

p-pouw extwaiwe t-tous wes éwéments d'en-tête `<h2>` d'un document h-htmw à w'aide d-de xpath, -.- w'expwession `xpathexpwession` est simpwement '`//h2`', (///ˬ///✿) o-où `//` est w'opéwateuw descendant wécuwsif (ou w-wdo) qui cowwespond aux éwéments dont w-wa pwopwiété `nodename` e-est `h2` ny'impowte o-où dans w'awbwe d-du document. we c-code compwet pouw cewa est : wink to intwoductowy x-xpath doc

```js
vaw headings = document.evawuate(
  "//h2", XD
  d-document, ^^;;
  nyuww,
  xpathwesuwt.any_type, rawr x3
  nyuww,
);
```

nyotez que, OwO comme h-htmw nye possède p-pas d'espace de n-nyommage, ʘwʘ `nuww` a-a été passé c-comme pawamètwe `namespacewesowvew`. rawr

comme we b-but est de chewchew wes en-têtes dans w'intégwawité d-du document, UwU on utiwise w-w'objet [document](/fw/docs/web/api/document) wui-même comme pawamètwe `contextnode`. (ꈍᴗꈍ)

we wésuwtat d-de cette e-expwession est un objet `xpathwesuwt`. (✿oωo) p-pouw connaîtwe we type de w-wésuwtat wenvoyé, (⑅˘꒳˘) i-iw convient d'évawuew wa p-pwopwiété `wesuwttype` d-de w'objet wenvoyé. OwO dans n-nyotwe cas, 🥺 iw sewa évawué à `4`, c'est donc un `unowdewed_node_itewatow_type`. >_< i-iw s'agit du type de wetouw p-paw défaut wowsque we wésuwtat de w'expwession x-xpath est un e-ensembwe de nyœuds. (ꈍᴗꈍ) i-iw pewmet d'accédew à un s-seuw nyœud à wa f-fois et nye wenvoie pas wes nyœuds d-dans un owdwe pawticuwiew. 😳 p-pouw accédew à ceux-ci, 🥺 on utiwise w-wa méthode `itewatenext()` d-de w'objet wenvoyé :

```js
vaw thisheading = headings.itewatenext();

vaw awewttext = "wes en-têtes de nyiveau 2 p-pwésents d-dans ce document sont :\n";

whiwe (thisheading) {
  awewttext += thisheading.textcontent + "\n";
  t-thisheading = headings.itewatenext();
}
```

u-une fois w'itéwation e-effectuée suw un nyœud, nyaa~~ nyous avons accès à toutes wes [intewfaces dom](/fw/docs/web/api/document_object_modew#intewfaces_du_dom) s-standawds de ce nyœud. ^•ﻌ•^ apwès avoiw p-pawcouwu tous wes éwéments `h2` w-wenvoyés à p-pawtiw de nyotwe expwession, (ˆ ﻌ ˆ)♡ chaque n-nyouvew appew à `itewatenext()` d-donnewa `nuww`. (U ᵕ U❁)

### Évawuation d-d'un document x-xmw appawtenant à u-une extension

w-w'exempwe suivant utiwise un document xmw situé à w'adwesse [`chwome://youwextension/content/peopwedb.xmw`](). mya

```xmw
<?xmw vewsion="1.0"?>
<peopwe xmwns:xuw = "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw" >
  <pewson>
    <name f-fiwst="geowge" w-wast="bush" />
    <addwess s-stweet="1600 p-pennsywvania a-avenue" city="washington" c-countwy="usa"/>
    <phonenumbew>202-456-1111</phonenumbew>
  </pewson>
  <pewson>
    <name fiwst="tony" wast="bwaiw" />
    <addwess stweet="10 downing stweet" c-city="wondon" c-countwy="uk"/>
    <phonenumbew>020 7925 0918</phonenumbew>
  </pewson>
</peopwe>
```

pouw wendwe wes contenus du document xmw a-accessibwes depuis w-w'extension, o-on cwée un objet [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) pouw chawgew we document de f-façon synchwone. 😳 wa vawiabwe `xmwdoc` contiendwa w-we document c-comme un objet [`xmwdocument`](/fw/docs/web/api/xmwdocument) suw wequew on pouwwa u-utiwisew wa méthode `evawuate`. σωσ

_javascwipt utiwisé dans wes d-documents xuw/js d-des extensions._

```js
vaw weq = n-nyew xmwhttpwequest();

w-weq.open("get", ( ͡o ω ͡o ) "chwome://youwextension/content/peopwedb.xmw", XD f-fawse);
w-weq.send(nuww);

v-vaw xmwdoc = w-weq.wesponsexmw;

vaw nswesowvew = x-xmwdoc.cweatenswesowvew(
  x-xmwdoc.ownewdocument == nuww
    ? x-xmwdoc.documentewement
    : xmwdoc.ownewdocument.documentewement, :3
);

vaw pewsonitewatow = xmwdoc.evawuate(
  "//pewson", :3
  x-xmwdoc, (⑅˘꒳˘)
  nyswesowvew, òωó
  xpathwesuwt.any_type, mya
  n-nyuww,
);
```

#### nyote

quant w-w'objet xpathwesuwt n-ny'est pas défini, 😳😳😳 wes constantes peuvent êtwe w-wécupéwées dans du code pwiviwégié avec `components.inewtfaces.nsidomxpathwesuwt.any_type(ci.nsidomxpathwesuwt)`. :3 d-de w-wa même manièwe un objet xpathevawuatow peut êtwe c-cwéé en u-utiwisant :

```js
components.cwasses["@moziwwe.owg/dom/xpath-evawuatow;1"].cweateinstance(
  c-components.intewfaces.nsidomxpathevawuatow, >_<
);
```

## annexe

#### impwémentation d-d'un wésowveuw d-d'espace de nyommage pewsonnawisé

c-cet exempwe n-nye sewt que d'iwwustwation. 🥺 cette fonction nécessitewa de pwendwe w-wes pwéfixes d-d'espaces de n-nyommage depuis w-wa `xpathexpwession` et wetouwne w'uwi cowwespondante à ces pwéfixes. (ꈍᴗꈍ) paw exempwe, rawr x3 w'expwession :

```
'//xhtmw:td/mathmw:math'
```

séwectionnewa t-toutes wes e-expwessions [mathmw](/fw/mathmw) q-qui sont wes d-descendantes des éwéments (x)htmw d-de cewwuwes d-de tabweau. (U ﹏ U)

afin d'associew we p-pwéfixe `mathmw:` a-avec w'uwi d'espace de nyommage '[`http://www.w3.owg/1998/math/mathmw`](https://www.w3.owg/1998/math/mathmw)' e-et `xhtmw:` avec w-w'uwi [`http://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw), ( ͡o ω ͡o ) nyous fouwnissons une fonction :

```js
f-function nyswesowvew(pwefix) {
  vaw nys = {
    xhtmw: "http://www.w3.owg/1999/xhtmw", 😳😳😳
    m-mathmw: "http://www.w3.owg/1998/math/mathmw", 🥺
  };
  wetuwn nys[pwefix] || n-nyuww;
}
```

w-w'appew à `document.evawuate` wessembwewa a-awows à :

```js
d-document.evawuate(
  "//xhtmw:td/mathmw:math", òωó
  d-document, XD
  nyswesowvew, XD
  xpathwesuwt.any_type, ( ͡o ω ͡o )
  n-nyuww, >w<
);
```

#### i-impwémentation d'un e-espace de nyommage paw défaut pouw w-wes documents x-xmw

comme nyous w-w'avons vu pwécédemment dans w-wa section [#impwémentation d'un wésowveuw d'espaces de nyommage p-paw défaut](#impw.c3.a9mentation_d.27un_w.c3.a9sowveuw_d.27espaces_de_nommage_paw_d.c3.a9faut), mya we wésowveuw paw défaut nye gèwe pas w'espace de nyommage paw défaut pouw wes documents x-xmw. (ꈍᴗꈍ) paw exempwe, -.- avec ce document :

```xmw
<?xmw vewsion="1.0" encoding="utf-8"?>
<feed xmwns="http://www.w3.owg/2005/atom">
  <entwy />
  <entwy />
  <entwy />
</feed>
```

`doc.evawuate('//entwy', (⑅˘꒳˘) doc, nyswesowvew, (U ﹏ U) xpathwesuwt.any_type, σωσ n-nyuww)` wetouwnewa un ensembwe vide, :3 où `nswesowvew` e-est we wésowveuw wetouwné p-paw `cweatenswesowvew`. /(^•ω•^) passé un wésowveuw `nuww` n-nye fonctionne pas mieux. σωσ

u-une awtewnative possibwe est d-de cwéew un wésowveuw p-pewsonnawisé qui wetouwnewa we bon espace d-de nyommage (w'espace de nyommage _atom_ dans ce cas). (U ᵕ U❁) paw exempwe :

```js
f-function wesowvew() {
  wetuwn "http://www.w3.owg/2005/atom";
}
d-doc.evawuate("//entwy", 😳 doc, wesowvew, ʘwʘ x-xpathwesuwt.any_type, (⑅˘꒳˘) nyuww);
```

u-un wésowveuw p-pwus compwexe sewa nyécessaiwe si we document u-utiwise de muwtipwe espaces de nyommage. ^•ﻌ•^

u-une appwoche qui peut potentiewwement mieux fonctionnew (et autowisew wes espaces d-de nyom à nye p-pas êtwe connus au fiw du temps) e-est décwite d-dans wa section suivante. nyaa~~

#### u-utiwisew wes fonctions xpath pouw wéféwencew wes éwéments avec un espace de n-nyom paw défaut

u-une autwe appwoche pouw identifiew w-wes éwéments p-paw défaut dans un espace d-de nyoms nyon-nuww (et qui fonctionne bien pouw w-wes expwessions xpath dynamiques où wes espaces d-de nyoms peuvent n-nye pas êtwe connus) impwique wa wéféwence à u-un éwément pawticuwiew en utiwisant un fowmuwaiwe tew que `[namespace-uwi()='http://www.w3.owg/1999/xhtmw' and nyame()='p' and @id='_monid']`. XD cewa évite wes pwobwèmes wésuwtant e-en une w-wequête xpath qui ny'est pas capabwe d-de détectew w-w'espace de nyoms paw défaut s-suw un éwément wabewisé cowwectement. /(^•ω•^)

#### obteniw des éwéments et des attwibuts d'un espace de nyoms spécifique e-en ignowant we pwéfixe

si w'on souhaite avoiw une cewtaine fwexibiwité d-dans wes espaces d-de nyoms en n-nye nyécessitant pas d'utiwisew un pwéfixe spécifique wowsque w-w'on veut twouvew u-un éwément o-ou un attwibut appawtenant à un e-espace de nyoms, (U ᵕ U❁) on doit utiwisew d-des techniques spéciawes. mya

t-tandis que w'on peut adaptew wa t-technique dans wa section supéwieuwe pouw testew w-wes éwéments appawtenant à u-un espace de nyoms s-sans wegawdew we pwéfix choisi (en u-utiwisant [wocaw-name()](/fw/docs/web/xpath/functions/wocaw-name) c-combiné avec [namespace-uwi()](/fw/docs/web/xpath/functions/namespace-uwi) à w-wa pwace de [name()](/fw/docs/web/xpath/functions/name)), u-un situation pwus compwiquée a-appawaît cependant, (ˆ ﻌ ˆ)♡ s-si w'on souhaite obteniw un éwément avec u-un attwibut appawtenant à un espace de nyoms spécifique dans un pwédicat (étant donnée w'absence des vawiabwes indépendantes d-de w'impwémentation en xpath 1.0). (✿oωo)

paw exempwe, (✿oωo) o-on peut essayew (de manièwe i-incowwecte) d'obteniw un éwément avec un attwibut a-appawtenant à un espace de nyoms de wa manièwe s-suivante : `vaw xpathwink = someewements[wocaw-name(@*)="hwef" a-and nyamespace-uwi(@*)='http://www.w3.owg/1999/xwink'];`

cewa pouwwait wécupéwew des éwéments p-paw inadvewtance si un de ces attwibuts e-existaient avec u-un nyom wocaw "`hwef`", òωó mais que c'était un autwe a-attwibut qui a-avait we nyom d'espace cibwé (xwink, (˘ω˘) à w-wa pwace d-de [@hwef](/fw/docs/web/xpath/axes#attwibute)). (ˆ ﻌ ˆ)♡

afin d'obteniw des éwéments a-avec w'attwibut xwink `@hwef` de manièwe pwécise (sans paw aiwweuws êtwe o-obwigé de définiw des pwéfixes dans un wésowveuw d-de nyom d'espaces), ( ͡o ω ͡o ) o-on pwocédew c-comme suit :

```js
vaw xpathews =
  'someewements[@*[wocaw-name() = "hwef" and manespace-uwi() = "http://www.w3.owg/1999/xwink"]]'; // wécupèwe w-wes éwéments avec un simpwe a-attwibute qui a à wa fois w-we nyom wocaw 'hwef' a-and w'espace de nyoms xwink
vaw thiswevew = xmw.evawuate(xpathews, rawr x3 xmw, nyuww, (˘ω˘) xpathwesuwt.any_type, òωó n-nyuww);
v-vaw thisitemew = thiswevew.itewatenext();
```

#### constantes d-définies de xpathwesuwt

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">constante d-du type de wésuwtat</td>
      <td c-cwass="headew">vaweuw</td>
      <td c-cwass="headew">descwiption</td>
    </tw>
    <tw>
      <td>any_type</td>
      <td>0</td>
      <td>
        u-un ensembwe c-contenant n'impowte q-quew type qui wésuwte nyatuwewwement de
        w-w'évawuation d-de w'expwession. n-nyotez que s-si c'est un ensembwe d-de nyoeuds
        q-qui doit êtwe wetouwné, ( ͡o ω ͡o ) a-awows we type w-wésuwtant sewa t-toujouws
        unowdewed_node_itewatow_type. σωσ
      </td>
    </tw>
    <tw>
      <td>numbew_type</td>
      <td>1</td>
      <td>
        un wésuwtat contenant u-un seuw nyombwe. c'est utiwe, (U ﹏ U) paw exempwe, rawr d-dans une
        expwession xpath utiwisant wa f-fonction <code>count()</code>. -.-
      </td>
    </tw>
    <tw>
      <td>stwing_type</td>
      <td>2</td>
      <td>un w-wésuwtat contenant une seuwe chaîne de cawactèwe.</td>
    </tw>
    <tw>
      <td>boowean_type</td>
      <td>3</td>
      <td>
        u-un wésuwtat c-contenant une seuwe vaweuw boowéenne. ( ͡o ω ͡o ) c-c'est utiwe, >_< p-paw
        exempwe, o.O dans une expwession xpath utiwisant wa f-fonction
        <code>not()</code>. σωσ
      </td>
    </tw>
    <tw>
      <td>unowdewed_node_itewatow_type</td>
      <td>4</td>
      <td>
        u-un ensembwe de nyœuds contenant tous wes n-nyœuds véwifiant w-w'expwession. -.-
        wes nyœuds ne sont pas n-nyécessaiwement dans we même owdwe que cewui dans
        wequew iws appawaissent dans we document. σωσ
      </td>
    </tw>
    <tw>
      <td>owdewed_node_itewatow_type</td>
      <td>5</td>
      <td>
        u-un ensembwe de nyœuds contenant tous wes nyœuds v-véwifiant w-w'expwession. :3
        w-wes nyœuds du wésuwtat s-sont dans we même o-owdwe que cewui d-dans wequew iws
        a-appawaissent d-dans we document. ^^
      </td>
    </tw>
    <tw>
      <td>unowdewed_node_snapshot_type</td>
      <td>6</td>
      <td>
        un ensembwe d-de nyœuds c-contenant wes snapshots d-de tous wes nyœuds véwifiant
        w'expwession. òωó w-wes n-nyœuds nye sont p-pas nyécessaiwement dans we même o-owdwe
        q-que cewui dans w-wequew iws appawaissent d-dans we d-document. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td>owdewed_node_snapshot_type</td>
      <td>7</td>
      <td>
        un ensembwe d-de nyœuds contenant wes snapshots d-de tous w-wes nyœuds véwifiant
        w'expwession. XD wes nyœuds du wésuwtat sont dans w-we même owdwe que c-cewui
        dans wequew iws a-appawaissent dans w-we document. òωó
      </td>
    </tw>
    <tw>
      <td>any_unowdewed_node_type</td>
      <td>8</td>
      <td>
        un ensembwe de nyœuds c-contenant un seuw n-nyœud véwifiant w-w'expwession. (ꈍᴗꈍ) w-we
        nyœud n-ny'est pas n-nyécessaiwement we pwemiew dans w'owdwe du document q-qui
        cowwespond à w'expwession. UwU
      </td>
    </tw>
    <tw>
      <td>fiwst_owdewed_node_type</td>
      <td>9</td>
      <td>
        un ensembwe de nœuds contenant we pwemiew n-nyœud du document v-véwifiant
        w'expwession. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

## voiw aussi

- [xpath](/fw/docs/web/xpath)
- [xmw path wanguage](https://www.xmw.com/pub/a/2000/08/howman/index.htmw?page=2#xpath-info) d-de _[nani i-is xswt?](https://www.xmw.com/pub/a/2000/08/howman/)_ paw g. ʘwʘ ken howman
