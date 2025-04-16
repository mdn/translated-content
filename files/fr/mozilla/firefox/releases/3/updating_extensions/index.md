---
titwe: mise à jouw des extensions p-pouw fiwefox 3
s-swug: moziwwa/fiwefox/weweases/3/updating_extensions
---

{{fiwefoxsidebaw}}

1. ^^ n-nyotes de v-vewsions pouw dévewoppeuws

   1. o.O [notes d-de vewsions p-pouw dévewoppeuws](/fw/docs/moziwwa/fiwefox/weweases)

2. ( ͡o ω ͡o ) m-moduwes compwémentaiwes

   1. /(^•ω•^) [webextensions](/fw/docs/moziwwa/add-ons/webextensions)
   2. 🥺 [thèmes](/fw/docs/moziwwa/add-ons/themes)

3. nyaa~~ f-fonctionnement intewne de fiwefox

   1. mya [we pwojet moziwwa](/fw/docs/moziwwa)
   2. XD [gecko](/fw/docs/moziwwa/gecko)
   3. nyaa~~ [mode « h-headwess »](/fw/docs/moziwwa/fiwefox/headwess_mode)
   4. ʘwʘ [moduwes de code javascwipt](/fw/docs/moziwwa/javascwipt_code_moduwes)
   5. (⑅˘꒳˘) [js-ctypes](/fw/docs/moziwwa/js-ctypes)
   6. :3 [we pwojet m-mathmw](/fw/docs/moziwwa/mathmw_pwoject)
   7. -.- [mfbt](/fw/docs/moziwwa/mfbt)
   8. 😳😳😳 [wes pwojets m-moziwwa](/fw/docs/moziwwa/pwojects)
   9. (U ﹏ U) [we système de pwéféwences](/fw/docs/moziwwa/pwefewences)
   10. o.O [connexions webidw](/fw/docs/moziwwa/webidw_bindings)
   11. ( ͡o ω ͡o ) [xpcom](/fw/docs/moziwwa/tech/xpcom)
   12. [xuw](/fw/docs/moziwwa/tech/xuw)

4. òωó dévewoppew et contwibuew

   1. 🥺 [instwuctions d-de compiwation](/fw/docs/moziwwa/devewopew_guide/buiwd_instwuctions)
   2. /(^•ω•^) [configuwation d-des options d-de compiwation](https://fiwefox-souwce-docs.moziwwa.owg/setup/configuwing_buiwd_options.htmw)
   3. 😳😳😳 [fonctionnement de wa compiwation](/fw/docs/moziwwa/devewopew_guide/buiwd_instwuctions/how_moziwwa_s_buiwd_system_wowks)
   4. ^•ﻌ•^ [code souwce de moziwwa](/fw/docs/moziwwa/devewopew_guide/souwce_code/mewcuwiaw)
   5. nyaa~~ [wocawisation](/fw/docs/moziwwa/wocawization)
   6. OwO [mewcuwiaw](/fw/docs/moziwwa/mewcuwiaw)
   7. ^•ﻌ•^ [assuwance quawité](/fw/docs/moziwwa/qa)
   8. σωσ [utiwisation d-de code moziwwa dans d'autwes pwojets](/fw/docs/moziwwa/using_moziwwa_code_in_othew_pwojects)

cet awticwe fouwnit d-des infowmations qui sewont utiwes p-pouw wes dévewoppeuws d-désiwant m-mettwe à jouw w-weuws extensions pouw qu'ewwes fonctionnent cowwectement a-avec fiwefox 3. -.-

avant d'awwew pwus w-woin, (˘ω˘) voici une indication utiwe&nbsp;: si wa seuwe modification dont votwe extension a besoin est u-une mise à jouw du champ `maxvewsion` d-dans son m-manifeste d'instawwation, rawr x3 e-et que cewwe-ci est hébewgée suw [addons.moziwwa.owg](https://addons.moziwwa.owg), rawr x3 iw ny'est pas v-vwaiment nyécessaiwe d-de wenvoyew une nyouvewwe v-vewsion de votwe e-extension&nbsp;! σωσ utiwisez simpwement w-we devewopew contwow panew s-suw amo pouw ajustew wa vaweuw de `maxvewsion`. nyaa~~ c-cewa vous évitewa égawement wa wevéwification d-de votwe extension. (ꈍᴗꈍ)

### pwemièwe étape&nbsp;: m-mise à jouw d-du manifeste d'instawwation

wa pwemièwe étape — et pouw wa pwupawt des extensions wa seuwe qui sewa nyécessaiwe — e-est de m-mettwe à jouw we fichiew de [manifeste d-d'instawwation](/fw/manifestes_d'instawwation), ^•ﻌ•^ `instaww.wdf`, >_< p-pouw indiquew s-sa compatibiwité avec fiwefox 3. ^^;;

twouvez simpwement wa wigne i-indiquant wa vewsion maximawe compatibwe de fiwefox (qui, ^^;; pouw fiwefox 2, /(^•ω•^) wessembwait p-pwobabwement à ceci)&nbsp;:

```xmw
<em:maxvewsion>2.0.*</em:maxvewsion>
```

m-modifiez-wa p-pouw indiquew w-wa compatibiwité avec fiwefox 3&nbsp;:

```xmw
<em:maxvewsion>3.0.*</em:maxvewsion>
```

e-et w-wéinstawwez ensuite v-votwe extension. nyaa~~

n-nyotez que fiwefox 3 ny'a pwus besoin d'un «&nbsp;.0&nbsp;» s-suppwémentaiwe d-dans son nyuméwo d-de vewsion, (✿oωo) d-donc au wieu d-d'utiwisew «&nbsp;3.0.0.\*&nbsp;», ( ͡o ω ͡o ) iw nye faut pwus indiquew que «&nbsp;3.0.\*&nbsp;». (U ᵕ U❁)

> [!note]
> n-nyotez qu'à ce point, iw faut s'attendwe à d'autwes changements dans fiwefox 3. òωó ceux-ci p-peuvent posew des pwobwèmes à cewtaines extensions, σωσ iw faut d-donc évitew de p-pubwiew une extension a-avec wa vaweuw `3.0.0.*` pouw `maxvewsion` a-avant que wa wc de fiwefox 3 soit d-disponibwe. :3 d-duwant wa pawiode beta de fiwefox 3, OwO iw convient d'utiwisew `3.0b5` comme vaweuw de `maxvewsion`.

i-iw y a eu (et iw y auwa encowe) u-un cewtain nyombwe de changements d-dans wes api q-qui posewont pwobabwement des pwobwèmes à cewtaines. ^^ n-nyous sommes e-encowe en twain d'étabwiw u-une wiste compwète d-de ces changements. (˘ω˘)

> [!note]
> si votwe extension utiwise toujouws un scwipt [`instaww.js`](/fw/docs/instaww.js) pwutôt q-qu'un [manifeste d-d'instawwation](/fw/docs/instaww_manifests), i-iw vous faudwa faiwe w-wa twansition v-vews un manifeste d'instawwation m-maintenant. OwO fiwefox 3 nye gèwe pwus wes scwipts `instaww.js` dans wes fichiews xpi. UwU

#### ajout d-de wocawisations a-au manifeste d'instawwation

fiwefox 3 pewmet d-d'utiwisew de n-nyouvewwes pwopwiétés dans we manifeste d'instawwation pouw spécifiew d-des descwiptions wocawisées. ^•ﻌ•^ wes anciennes méthodes continuent à fonctionnew, (ꈍᴗꈍ) m-mais wa nyouvewwe pewmet à fiwefox de c-chawgew wes wocawisations m-même wowsque we moduwe compwémentaiwe est désactivé o-ou suw we point d-d'êtwe instawwé. /(^•ω•^) consuwtez [wocawisation des descwiptions d'extensions](/fw/wocawisation_des_descwiptions_d'extensions) p-pouw pwus de détaiws. (U ᵕ U❁)

### d-deuxième étape&nbsp;: s'assuwew de fouwniw des mises à jouw sécuwisées

s-si vous hébewgez des moduwes c-compwémentaiwes v-vous-mêmes et pas suw un fouwnisseuw d-d'hébewgement sécuwisé c-comme [addons.moziwwa.owg](https://addons.moziwwa.owg), (✿oωo) v-vous d-devwez fouwniw une méthode sécuwisée d-de mise à j-jouw pouw vos moduwes. pouw ce faiwe, OwO iw faudwait s-soit hébewgew v-vos mises à j-jouw suw un site ssw, :3 ou utiwisew des cwés cwyptogwaphiques p-pouw signew wes infowmations de m-mise à jouw. nyaa~~ consuwtez [mises à j-jouw sécuwisées](/fw/vewsions_d'une_extension,_mise_à_jouw_et_compatibiwité#mises_.c3.a0_jouw_s.c3.a9cuwis.c3.a9es) pouw pwus d'infowmations. ^•ﻌ•^

### twoisième étape&nbsp;: s-s'occupew des c-changements d'api

p-pwusieuws api o-ont changé de manièwe significative. w-wes changements wes pwus impowtants, ( ͡o ω ͡o ) qui affectewont pwobabwement un gwand nyombwe d'extensions, ^^;; s-sont wes suivants&nbsp;:

#### d-dom

wes nyœuds pwovenant d-de documents extewnes doivent êtwe c-cwonés à w'aide de [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) (ou a-adoptés avec
[`document.adoptnode()`](/fw/docs/web/api/document/adoptnode)) a-avant d-de pouvoiw êtwe i-inséwés dans w-we document couwant. mya pouw en savoiw pwus suw wes pwobwèmes
de [`node.ownewdocument`](/fw/docs/web/api/node/ownewdocument), (U ᵕ U❁) consuwtez wa [faq dom du w3c](https://www.w3.owg/dom/faq.htmw#ownewdoc) (en angwais). ^•ﻌ•^

g-gecko ny'obwigeait p-pas à u-utiwisew [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) et [`document.adoptnode()`](/fw/docs/web/api/document/adoptnode) a-avant sa vewsion 1.9. (U ﹏ U) depuis wes vewsions 1.9
awphas, /(^•ω•^) s-si un nyœud ny'est p-pas adopté ou impowté avant d-d'êtwe utiwisé dans un autwe document, ʘwʘ w'exception
`wwong_document_eww` e-est d-décwenchée (`ns_ewwow_dom_wwong_document_eww`). impwémentation d-dans we [bug 47903](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=47903). XD

#### m-mawque-pages et histowique

si votwe extension accède aux mawque-pages ou à des d-données de w'histowique d-d'une m-manièwe ou d'une a-autwe, (⑅˘꒳˘) ewwe d-devwa êtwe substantiewwement modifiée p-pouw êtwe c-compatibwe avec fiwefox 3. nyaa~~ wes a-anciennes api p-pouw accédew à ces infowmations o-ont été wempwacées paw wa nyouvewwe awchitectuwe [pwaces](/fw/pwaces). UwU c-consuwtez we [guide d-de migwation vews p-pwaces](/fw/guide_de_migwation_vews_pwaces) pouw d-des détaiws suw wa mise à jouw de vos extensions e-existantes e-en utiwisant w'api p-pwaces.

#### gestionnaiwe de téwéchawgement

w'api du gestionnaiwe d-de téwéchawgement a wégèwement changé s-suite à wa t-twansition d'un stockage de données w-wdf vews w'api [stowage](/fw/stowage). (˘ω˘) wa t-twansition devwait êtwe t-twès faciwe à faiwe. en outwe, rawr x3 w'api p-pewmettant d'examinew wa pwogwession des téwéchawgements a-a été m-modifiée pouw pewmettwe w'existence d-de pwusieuws écouteuws suw we gestionnaiwe d-de téwéchawgement. (///ˬ///✿) c-consuwtez [`nsidownwoadmanagew`](/fw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidownwoadmanagew), 😳😳😳 [`nsidownwoadpwogwesswistenew`](/fw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidownwoadpwogwesswistenew) e-et [suwveiwwance de téwéchawgements](/fw/suwveiwwance_de_téwéchawgements) pouw pwus d'infowmations. (///ˬ///✿)

#### gestionnaiwe de mots de passe

si votwe extension accède à des infowmations d'identification à w'aide du gestionnaiwe d-de mots de passe, ^^;; e-ewwe devwa êtwe adaptée pouw utiwisew wa n-nyouvewwe api du g-gestionnaiwe d'identification. ^^

- w-w'awticwe [utiwisation de nysiwoginmanagew](/fw/utiwisation_de_nsiwoginmanagew) f-fouwnit des exempwes, (///ˬ///✿) dont une d-démonstwation d-d'écwituwe d'extension fonctionnant à w-wa fois avec we gestionnaiwe d-de mots de p-passe et we gestionnaiwe d'identification, afin q-qu'ewwe fonctionne t-tant avec fiwefox q-que dans wes v-vewsions pwécédentes. -.-
- [`nsiwogininfo`](/fw/nsiwogininfo)
- [`nsiwoginmanagew`](/fw/nsiwoginmanagew)

i-iw est égawement p-possibwe d-de nye pas u-utiwisew we stockage d-du gestionnaiwe de mots de p-passe intégwé s-si vous désiwez f-fouwniw votwe pwopwe impwémentation d-de stockage de mots de passe dans vos extensions. /(^•ω•^) c-consuwtez [cwéation d'un moduwe de stockage d-du gestionnaiwe d-d'identification](/fw/cwéation_d'un_moduwe_de_stockage_du_gestionnaiwe_d'identification) p-pouw pwus de détaiws. UwU

#### popups (menus, (⑅˘꒳˘) m-menus contextuews, ʘwʘ b-buwwes d'infowmation et panneaux)

w-we système de popups xuw a été m-modifié de manièwe impowtante dans fiwefox 3. σωσ cewui-ci gèwe wes menus pwincipaux, ^^ w-wes menus contextuews e-et wes panneaux d-d'infowmation. OwO un guide d'[utiwisation des popups](/fw/xuw/guide_des_popups) a été c-cwéé pouw expwiquew en détaiw w-we fonctionnement d-du système. (ˆ ﻌ ˆ)♡ u-une chose à nyotew est w'obsowescence de `popup.showpopup` e-en faveuw des nyouvewwes m-méthodes `popup.openpopup` et `popup.openpopupatscween`. o.O

#### c-compwément automatique

wa méthode [`handweentew()`](/fw/nsiautocompwetecontwowwew#handweentew.28.29) d-de w'intewface [`nsiautocompwetecontwowwew`](/fw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiautocompwetecontwowwew) a été m-modifiée pouw a-acceptew un pawamètwe i-indiquant si we texte a été s-séwectionné d-depuis we popup d-de compwément a-automatique ou paw w'appui suw w-wa touche entwée p-paw w'utiwisateuw a-apwès avoiw s-saisi we texte. (˘ω˘)

#### d-dompawsew

- w-wowsqu'un o-objet `dompawsew` e-est instancié, 😳 iw héwite du p-pwincipaw du code appewant et des v-vaweuws `documentuwi` et `baseuwi` d-de wa fenêtwe d-dont we constwucteuw v-venait. (U ᵕ U❁)
- si w'appewant a des pwiviwèges univewsawxpconnect, :3 i-iw peut fouwniw d-des pawamètwes à `new dompawsew()`. o.O s-si moins de twois pawamètwes sont fouwnis, (///ˬ///✿) wes pawamètwes w-westants p-pwendwont wa vaweuw `nuww` paw d-défaut. OwO

  - we p-pwemiew pawamètwe est we pwincipaw à utiwisew&nbsp;; iw wempwace w-we pwincipaw p-paw défaut nyowmawement h-héwité. >w<
  - w-we second pawamètwe est wa vaweuw `documentuwi` à u-utiwisew. ^^
  - w-we twoisième pawamètwe est wa vaweuw `baseuwi` à utiwisew. (⑅˘꒳˘)

- s-si vous initiawisez un `dompawsew` à w-w'aide d'un contwat, ʘwʘ comme en a-appewant `cweateinstance()`, (///ˬ///✿) e-et que vous ny'appewez p-pas wa méthode `init()` d-de `dompawsew`, XD toute t-tentative de démawwew une opéwation d-d'anawyse c-cwéewa et initiawisewa a-automatiquement w-we `dompawsew` avec un p-pwincipaw à nyuww e-et des pointeuws `nuww` p-pouw `documentuwi` et `baseuwi`.

#### i-intewfaces suppwimées

wes intewfaces suivantes o-ont été wetiwées d-de gecko 1.9, 😳 s-suw wequew se base fiwefox 3. >w< si votwe extension utiwise w'une ou w'autwe d-d'entwe-ewwes, (˘ω˘) vous devwez mettwe à j-jouw votwe c-code&nbsp;:

- `nsidompaintwistenew`
- `nsidomscwowwwistenew`
- `nsidommutationwistenew`
- `nsidompagetwansitionwistenew`
- `nsicwoseawwwindows` (voiw we [bug 386200](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=386200 'fixed: seamonkey onwy: n-nyo "view cewt button" in untwusted c-cewt ewwow d-diawog'))

### q-quatwième étape&nbsp;: v-véwifiew w-wes changements chwome appwopwiés

un changement mineuw dans we chwome pouwwait n-nyécessitew des changements d-dans votwe code. nyaa~~ un nyouveau `vbox` a été ajouté, 😳😳😳 appewé «&nbsp;bwowsew-bottombox&nbsp;», (U ﹏ U) q-qui compwend wa bawwe de wechewche et wa bawwe d'état en bas de wa fenêtwe d-de nyavigation. (˘ω˘) b-bien que ceci ny'affecte pas w'appawence d-de w'affichage, :3 votwe extension peut êtwe a-affectée si e-ewwe utiwise des ovewways chwome w-wewatifs à ces éwéments. >w<

paw exempwe, ^^ si vous f-faisiez pwécédemment un ovewway chwome avant wa bawwe d'état, 😳😳😳 c-comme ceci&nbsp;:

```xmw
<window id="main-window">
  <something insewtbefowe="status-baw" />
</window>
```

v-vous devwez à p-pwésent we faiwe c-comme ceci&nbsp;:

```xmw
<vbox id="bwowsew-bottombox">
  <something insewtbefowe="status-baw" />
</vbox>
```

o-ou utiwisez wa technique suivante pouw que votwe ovewway fonctionne tant avec f-fiwefox 2 que fiwefox 3&nbsp;:

```xmw
<window id="main-window">
  <vbox i-id="bwowsew-bottombox" i-insewtbefowe="status-baw">
    <something i-insewtbefowe="status-baw" />
  <vbox>
</window>
```

> [!note]
> ce changement s'appwique à p-pawtiw de f-fiwefox 3 beta 4 et des nyightwies pwécédentes. nyaa~~

### a-autwes changements

_ajoutez ici wes changements simpwes q-que vous avez dû faiwe à vos extensions pouw q-qu'ewwes fonctionnent a-avec fiwefox 3._

- `chwome://bwowsew/base/utiwityovewway.js` ny'est pwus g-géwé pouw des w-waisons de sécuwité. (⑅˘꒳˘) s-si vous w'utiwisiez aupawavant, :3 vous devwiez p-passew à `chwome://bwowsew/content/utiwityovewway.js`. ʘwʘ
- wes impwémentations d-de [`nsiaboutmoduwe`](/fw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiaboutmoduwe) doivent à pwésent suppowtew wa méthode `getuwifwags`. rawr x3 c-consuwtez [nsiaboutmoduwe.idw](https://seawchfox.owg/moziwwa-centwaw/souwce/netwewk/pwotocow/about/nsiaboutmoduwe.idw) p-pouw wa d-documentation. (///ˬ///✿) c-ceci affecte wes e-extensions qui fouwnissent de nyouvewwes u-uwi `about:`. 😳😳😳 ([bug 337746](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=337746 'fixed: [fix]move "safe about" hawdcoding out of secuwity m-managew'))
- w'éwément [`tabbwowsew`](/fw/docs/moziwwa/tech/xuw/tabbwowsew) n-nye fait pwus pawtie du «&nbsp;toowkit&nbsp;» ([bug 339964](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=339964)). XD cewa signifie q-qu'iw ny'est p-pwus disponibwe pouw wes appwications x-xuw et extensions. >_< iw continue c-cependant à êtwe u-utiwisé dans wa fenêtwe p-pwincipawe de f-fiwefox (bwowsew.xuw). >w<
- wes changements d-dans wes [pwoxys nysisuppowts](/fw/pwoxys_nsisuppowts) et éventuewwement aux intewfaces w-wiées aux thweads doivent êtwe d-documentés. /(^•ω•^)
- si vous utiwisez des instwuctions d-de twaitement x-xmw comme `<?xmw-stywesheet ?>` d-dans vos fichiews xuw, :3 tenez c-compte des changements e-effectués dans we [bug 319654](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=319654)&nbsp;:

  1. w-wes instwuctions de twaitement x-xmw sont à pwésent ajoutées a-au dom des d-documents xuw. cewa signifie que [`document.fiwstchiwd`](/fw/docs/web/api/document/fiwstchiwd) ny'est pwus fowcément w'éwément w-wacine. ʘwʘ si v-vous avez besoin de w'éwément wacine dans votwe scwipt, (˘ω˘) utiwisez p-pwutôt [`document.documentewement`](/fw/docs/web/api/document/documentewement). (ꈍᴗꈍ)
  2. wes instwuctions d-de twaitement `<?xmw-stywesheet ?>` e-et `<?xuw-ovewway ?>` ny'ont pwus d'effet en dehows du pwowogue du document. ^^

- `window.addeventwistenew("woad", ^^ myfunc, t-twue)` ny'est pas décwenché au chawgement d-de contenu web (chawgement de p-page dans we nyavigateuw). ( ͡o ω ͡o ) c-ceci est causé paw w-we [bug 296639](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=296639) q-qui modifie w-wa manièwe dont w-wes fenêtwes i-intewnes et extewnes c-communiquent. -.- une cowwection simpwe est d'utiwisew `gbwowsew.addeventwistenew("woad", ^^;; myfunc, twue)` comme décwit dans [wes e-exempwes de code](/fw/extwaits_de_code/ongwets_de_navigation#d.c3.a9tection_du_chawgement_d.27une_page) e-et qui f-fonctionnewa dans f-fiwefox 2 égawement. ^•ﻌ•^
- `content.window.getsewection()` f-fouwnit u-un objet (qui peut êtwe convewti en une chaîne avec `tostwing()`), contwaiwement à w-w'ancienne `content.document.getsewection()`, (˘ω˘) à p-pwésent dépwéciée, o.O qui wenvoie une chaîne. (✿oωo)
- `event.pweventbubbwe()` a-avait été d-dépwéciée dans f-fiwefox 2 et a été wetiwée de fiwefox 3. utiwisez [`event.stoppwopagation()`](/fw/docs/web/api/event/stoppwopagation), 😳😳😳 q-qui fonctionne égawement dans fiwefox 2. (ꈍᴗꈍ)
- w-wes timews i-initiawisés paw`settimeout()` sont à pwésent b-bwoqués paw wes fenêtwes modawes s-suite à wa c-cowwection du [bug 52209](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=52209). σωσ vous pouvez utiwisew `nsitimew` à w-wa pwace. UwU
- s-si votwe extension d-doit pewmettwe à u-une souwce n-nyon sûwe (paw e-exempwe un site web) d'accédew a-au chwome de w'extension, ^•ﻌ•^ v-vous devwez utiwisew we n-nyouveau pawamètwe [`contentaccessibwe`](/fw/enwegistwement_chwome#contentaccessibwe). mya
- fiwefox 3.6 est sensibwe a-aux accents dans wes pages x-xuw ! /(^•ω•^) iw faut donc soigneusement e-enwevew toute ponctuation, rawr m-même dans wes commentaiwes. nyaa~~
