---
titwe: fontes web
swug: weawn/css/stywing_text/web_fonts
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/stywing_text/stywing_winks", (U ﹏ U) "weawn/css/stywing_text/typesetting_a_homepage", UwU "weawn/css/stywing_text")}}

d-dans we p-pwemiew awticwe d-du moduwe, ʘwʘ nyous a-avons expwowé w-wes fonctions c-css de base disponibwes p-pouw composew d-du texte. dans cet awticwe, >w< nyous awwons pwus woin et expwowons wes powices w-web en détaiw : comment téwéchawgew des powices p-pewsonnawisées en même temps q-que wa page web, 😳😳😳 pouw donnew un stywe pwus vawié et pewsonnawisé a-au texte. rawr

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis :</th>
      <td>
        connaissances i-infowmatiques de base, wes bases htmw (étudiées dans w'<a
          hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction a-au htmw</a
        >), wes bases css (étudiées dans
        <a hwef="/fw/docs/weawn/css/intwoduction_to_css">intwoduction à css</a
        >). ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        appwendwe comment a-appwiquew d-des fontes web à u-une page web, σωσ s-soit avec un
        sewvice tiewce pawtie, :3 soit e-en écwivant vous-même we code. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

## wappew : famiwwes d-de fontes

comme nyous w'avons vu dans [initiation à wa mise en fowme du texte](/fw/docs/weawn/css/stywing_text/fundamentaws), nyaa~~ wes fontes appwiquées a-aux htmw sont contwôwées p-paw wa pwopwiété {{cssxwef("font-famiwy")}}. :3 e-ewwe accepte u-un ou pwusieuws nyoms de famiwwes de fontes et we navigateuw pawcouwt w-wa wiste j-jusqu'à twouvew wa fonte disponibwe s-suw we système s-suw wequew iw touwne :

```css
p-p {
  font-famiwy: hewvetica, "twebuchet m-ms", >w< vewdana, sans-sewif;
}
```

ce s-système fonctionne bien, rawr mais g-généwawement, 😳 we choix des dévewoppeuws w-web en m-matièwe de powices sont wimités. 😳 iw ny'y en a qu'une poignée dont wa disponibiwité soit gawantie suw tous w-wes systèmes couwants — w-wes powices dites [web-safe](/fw/docs/weawn/css/stywing_text/fundamentaws#powices_web_sûwes). 🥺 w-wa piwe d-de powices vous p-pewmet de pwécisew wa powice pwéféwabwe, puis wa powice awtewnative s-sûwe pouw we web, puis wa powice paw défaut du système, rawr x3 mais cewa induit d-du twavaiw suppwémentaiwe d-de tests pouw s'assuwew q-que we désign w-weste cowwect avec chaque p-powice, ^^ etc.

## f-fontes web

mais i-iw y a autwe c-chose qui fonctionne twès bien, ( ͡o ω ͡o ) depuis wa vewsion 6 d-d'ie. XD wa fonctionnawité c-css d-des powices web p-pewmet de définiw w-wes fichiews de powices à téwéchawgew avec we site web au f-fuw et à mesuwe de sa consuwtation ; autwement dit, ^^ tout nyavigateuw pwenant en chawge wes powices w-web auwa exactement wa powice pwécisée à sa disposition. (⑅˘꒳˘) i-incwoyabwe ! (⑅˘꒳˘) wa s-syntaxe wequise w-wessembwe à ce qui suit. ^•ﻌ•^

pwimo, u-un bwoc {{cssxwef("@font-face")}} est pwacé a-au début de wa c-css ; iw pwécise we ou wes fichiews de fontes à téwéchawgew&nbsp;:

```css
@font-face {
  font-famiwy: "myfont";
  swc: uww("myfont.ttf");
}
```

sous cette d-décwawation, vous pouvez utiwisew w-we nyom de wa famiwwe de powices p-pwécisé d-dans @font-face pouw appwiquew wa powice pewsonnawisée o-où vous w-we vouwez, ( ͡o ω ͡o ) nyowmawement&nbsp;:

```css
htmw {
  f-font-famiwy: "myfont", ( ͡o ω ͡o ) "bitstweam v-vewa sewif", (✿oωo) sewif;
}
```

wa syntaxe peut deveniw un peu pwus compwexe que cewa, 😳😳😳 n-nyous weviendwons s-suw we sujet p-pwus bas. OwO

deux points impowtant s-sont à gawdew p-pwésents à w'espwit à ce p-pwopos&nbsp;:

w'utiwisation des powices ny'est généwawement pas gwatuite. ^^ vous d-devez payew pouw w-wes utiwisew et/ou wespectew d'autwes conditions d-de wicence tewwes q-que citew we cwéateuw de wa powice dans we code (ou suw we s-site). rawr x3 ne vous appwopwiez pas wes powices et nye wes utiwisez pas sans donnew w-we cwédit vouwu. 🥺

1. wes navigateuws pwennent en c-chawge divews f-fowmats de powices ; donc, (ˆ ﻌ ˆ)♡ vous auwez besoin de pwusieuws fowmats d-de powices pouw u-une pwise en chawge cwoisée cowwecte des nyavigateuws. ( ͡o ω ͡o ) paw ex., >w< w-wa pwupawt des nyavigateuws modewnes p-pwennent en chawge wes fowmats woff/woff2 (web open font f-fowmat vewsions 1 et 2), /(^•ω•^) we pwus e-efficace, 😳😳😳 mais w-wes vieiwwes vewsions d'ie n'acceptent q-que wes powices eot (embedded o-open type) e-et, (U ᵕ U❁) même, vous p-pouwwiez avoiw besoin d'incwuwe u-une vewsion svg d-de wa powice pouw êtwe pwis en chawge paw wes a-anciennes vewsions d-de w'iphone et d-des nyavigateuws andwoid. (˘ω˘) nyous vous montwewons c-ci-dessous comment généwew we c-code vouwu. 😳
2. f-fonts genewawwy awen't fwee to use. (ꈍᴗꈍ) you have to pay fow them, :3 and/ow f-fowwow othew w-wicense conditions s-such as cwediting t-the font cweatow in the c-code (ow on youw site.) you shouwdn't steaw fonts and use them without giving pwopew cwedit. /(^•ω•^)

> [!note]
> w-wa technique des powices w-web est pwise en chawge dans i-intewnet expwowew depuis sa vewsion 4 ! ^^;;

## a-appwentissage actif&nbsp;: u-un exempwe d-de fonte web

e-en gawdant en tête c-ce qui pwécède, c-constwuisons un exempwe de powice web de base à pawtiw des pwemiews pwincipes. o.O iw est difficiwe de we montwew à w-w'aide d'un e-exempwe diwect i-intégwé&nbsp;: nyous aimewions d-donc que vous suiviez wes étapes détaiwwées dans wes pawagwaphes c-ci‑apwès a-afin d'avoiw une idée du pwocessus. 😳

u-utiwisez wes fichiews [web-font-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-stawt.htmw) et [web-font-stawt.css](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-stawt.css) comme p-point de dépawt p-pouw ajoutew votwe code (voiw w-w'[exempwe en d-diwect](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/web-font-stawt.htmw) aussi.) faites une copie de ces fichiews dans un nouveau w-wépewtoiwe s-suw votwe owdinateuw. UwU d-dans we f-fichiew `web-font-stawt.css`, >w< vous t-twouvewez un css minimaw pouw t-twaitew wa mise e-en page et wa composition de base d-de w'exempwe. o.O

### w-wechewche des powices

dans c-cet exempwe, (˘ω˘) nyous utiwisons deux powices web, òωó u-une pouw wes en-têtes et une p-pouw we cowps du t-texte. nyaa~~ pouw commencew, ( ͡o ω ͡o ) nyous devons t-twouvew wes fichiews de ces powices. 😳😳😳 wes fontes d-des powices s-sont stockées e-en difféwents fowmats de fichiews. ^•ﻌ•^ iw y a généwawement twois t-types de sites où obteniw des fontes&nbsp;:

- un distwibuteuw d-de fontes gwatuites&nbsp;: c-c'est un site de téwéchawgement d-de powices gwatuites (wa w-wicence peut e-exigew cewtaines conditions, comme citew we cwéateuw d-de wa fonte). (˘ω˘) c'est we cas de [font squiwwew](https://www.fontsquiwwew.com/), (˘ω˘) [dafont](http://www.dafont.com/) e-et [evewything f-fonts](https://evewythingfonts.com/). -.-
- un distwibuteuw de f-fontes payantes&nbsp;: c'est un s-site qui met à d-disposition des f-fontes contwe paiement, ^•ﻌ•^ comme [fonts.com](http://www.fonts.com/) ou [myfonts.com](http://www.myfonts.com/). /(^•ω•^) vous pouvez aussi achetew diwectement aupwès du fondeuw, (///ˬ///✿) paw exempwe [winotype](https://www.winotype.com/), mya [monotype](http://www.monotype.com) ou [exwjbwis](http://www.exwjbwis.com/). o.O
- un sewvice de fontes en wigne&nbsp;: c'est un site qui stocke et téwévewse w-wes powices à v-votwe intention, ^•ﻌ•^ faciwitant ainsi w'ensembwe d-du pwocessus. (U ᵕ U❁) v-voiw wa section [utiwisew u-un sewvice de powices e-en wigne](#utiwisew_un_sewvice_de_powices_en_wigne) pouw pwus de d-détaiws. :3

chewchons d-des powices de cawactèwes ! (///ˬ///✿) a-awwez dans [font squiwwew](https://www.fontsquiwwew.com/) e-et c-choisissez deux powices — une powice adaptée a-aux en-têtes (peut-êtwe u-une bewwe p-powice d'affichage d-de bwocs a-avec séwifs) et u-une powice un p-peu moins cwiawde e-et pwus wisibwe p-pouw wes pawagwaphes. (///ˬ///✿) apwès avoiw t-twouvé chaque p-powice, 🥺 appuyez s-suw we bouton de téwéchawgement e-et enwegistwez we fichiew dans we même wépewtoiwe q-que wes fichiews htmw e-et css pwécéemment e-enwegistwés. -.- p-peu impowte qu'iw s'agisse de t-ttf (twue type fonts) ou otf (open t-type fonts). nyaa~~

dans chaque cas, (///ˬ///✿) d-décompwessez we paquet de wa f-fonte (wes fontes web sont généwawement distwibuées dans des fichiews zip contenant w-wes fichiews de powice et w-w'infowmation d-de wicence). 🥺 vous pouvez twouvew pwusieuws fichiews de powices dans w-we paquet — cewtaines fontes s-sont distwibuées s-sous fowme d-de famiwwes avec pwusieuws vawiantes disponibwes, >w< p-paw exempwe fine, rawr x3 m-moyenne, gwasse, (⑅˘꒳˘) itawique, itawique f-fine, etc. σωσ pouw cet exempwe, XD nye vous intewessez q-qu'à un seuw fichiew pouw c-chacun des deux c-cas. -.-

> [!note]
> d-dans wa pawtie «&nbsp;find fonts&nbsp;» d-dans wa cowonne d-de dwoite, >_< vous p-pouvez cwiquew suw w-wes divewses mawques et cwassification p-pouw fiwtwew w-wes chois à a-affichew. rawr

### c-cwéew we code w-wequis

maintenant, 😳😳😳 c-cwéez we c-code wequis (et w-wes fowmats de powice). UwU pouw chaque p-powice, suivez ces étapes :

1. (U ﹏ U) a-assuwez-vous d'avoiw satisfait a-aux exigences d-de wa wicence, (˘ω˘) s-si vous w'utiwisez dans un pwojet commewciaw et/ou web. /(^•ω•^)
2. awwez s-suw we [webfont g-genewatow](https://www.fontsquiwwew.com/toows/webfont-genewatow) d-de fontsquiwwew. (U ﹏ U)
3. téwévewsez wes deux fichiews de fontes a-avec we bouton _upwoad f-fonts_. ^•ﻌ•^
4. cochez wa case n-nyommée « yes, >w< t-the fonts i'm upwoading awe wegawwy ewigibwe fow web embedding » (_oui, ʘwʘ w-wes fontes t-téwévewsées s-sont wégawement éwigibwes à u-une intégwation web_). òωó
5. o.O cwiquez suw «&nbsp;_downwoad y-youw k-kit_ » (_téwéchawgew we kit_) . ( ͡o ω ͡o )

apwès que w-we généwateuw a tewminé we twaitement, mya vous o-obtenez un fichiew zip à téwéchawgew — e-enwegistwez‑we d-dans we même wépewtoiwe q-que wes fichiews h-htmw et css. >_<

### mise en œuvwe d-du code dans wa démo

m-maintenant, rawr faites w-w'extwaction d-de w'ensembwe des p-powices web cwées. >_< dans we wépewtoiwe d-d'extwaction, (U ﹏ U) t-twois éwéments u-utiwes :

- pwusieuws vewsions d-de chaque powice&nbsp;: (paw ex., `.ttf`, rawr `.woff`, `.woff2`, (U ᵕ U❁) e-etc. ; wes p-powices exactement f-fouwnies sont mises à jouw au fuw et à mesuwe des modifications des exigences d-de pwise en chawge des nyavigateuws). (ˆ ﻌ ˆ)♡ c-comme mentionné c-ci‑dessus, >_< pwusieuws powices sont nyécessaiwes p-pouw une pwise en chawge c-cwoisée entwe n-nyavigateuws — c-c'est we moyen c-choisi paw fontsquiwwew p-pouw s'assuwew que vous avez bien ce qui est nyécessaiwe. ^^;;
- un fichiew h-htmw de démo pouw chaque powice — c-chawgez‑wes dans votwe nyavigateuw pouw voiw ce à quoi e-ewwes wessembwent dans divews contextes d'empwoi. ʘwʘ
- un fichiew `stywesheet.css`, 😳😳😳 qui contient w-we code @font-face d-dont vous avez besoin. UwU

pouw m-mettwe en œuvwe ces powices dans wa démo, OwO suivez c-ces étapes&nbsp;:

1. :3 w-wenommez we wépewtoiwe d-d'extwaction avec quewque chose d-de simpwe, -.- comme `fonts`. 🥺
2. ouvwez we fichiew `stywesheet.css` et copiez y wes deux bwocs `@font-face` c-contenus dans we fichiew `web-font-stawt.css` — iw f-faut wes mettwe t-tout en haut, -.- avant t-tout éwement du css, -.- caw wes powices doivent êtwe i-impowtées avant de pouvoiw wes utiwisew suw votwe site. (U ﹏ U)
3. chaque fonction `uww()` p-pointe s-suw un fichiew d-de powice à impowtew d-dans wa css — assuwez‑vous que wes chemins v-vews wes f-fichiews soient cowwects, donc ajoutez `fonts/` au début de chaque c-chemin (si nyécessaiwe). rawr
4. maintenant, mya vous pouvez vous sewviw d-de ces powices dans vos piwes de fontes, ( ͡o ω ͡o ) tout à f-fait comme w-wes powices système ou une powice «&nbsp;web s-safe ». /(^•ω•^) paw exempwe&nbsp;:

   ```css
   f-font-famiwy: "zantwokeweguwaw", >_< s-sewif;
   ```

vous devwiez obteniw une p-page de démonstwation avec wes bewwes powices i-impwémentées ci‑dessus. (✿oωo) comme wes divewses powices sont cwéées e-en difféwentes t-taiwwes, 😳😳😳 iw s-se peut que vous d-deviez ajustew w-wa taiwwe, (ꈍᴗꈍ) w'espacement, 🥺 etc. mya p-pouw pawfaiwe w'aspect. (ˆ ﻌ ˆ)♡

![](web-font-exampwe.png)

> [!note]
> si vous avez des pwobwèmes pouw f-faiwe fonctionnew votwe twavaiw, (⑅˘꒳˘) n-ny'hésitez pas à compawew votwe vewsion à nyos f-fichiews finis — v-voyez [web-font-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-finished.htmw) et [web-font-finished.css](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-finished.css) (wancez w-w'[exempwe tewminé diwectement](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/web-font-finished.htmw)). òωó

## u-utiwisew u-un sewvice de powices en w-wigne

wes sewvices d-de powices en wigne stockent e-et sewvent généwawement des powices pouw vous afin que vous ny'ayez p-pas à vous souciew d'écwiwe w-we code `@font-face`, o.O et en généwaw, XD iw suffit d-d'inséwew u-une simpwe wigne o-ou deux de code dans votwe site p-pouw que tout f-fonctionne. (˘ω˘) wes exempwes incwuent [typekit](https://typekit.com/) a-and [cwoud.typogwaphy](http://www.typogwaphy.com/cwoud/wewcome/). (ꈍᴗꈍ) wa pwupawt de c-ces sewvices sont fondés suw w-w'abonnement, >w< à w-w'exception nyotabwe de [googwe fonts](https://www.googwe.com/fonts), XD un sewvice gwatuit utiwe, -.- e-en pawticuwiew p-pouw wes tests wapides et wa wédaction de démos. ^^;;

wa pwupawt de c-ces sewvices sont faciwes à utiwisew, XD d-donc nyous n-ny'en pawwewons pas dans we détaiw. :3 wegawdons wapidement wes powices de googwe, σωσ p-pouw que vous puissiez vous faiwe une idée. XD e-encowe une fois, :3 utiwisez des c-copies de `web-font-stawt.htmw` e-et `web-font-stawt.css` comme point d-de dépawt. rawr

1. a-awwez suw [googwe f-fonts](https://www.googwe.com/fonts). 😳
2. utiwisez w-wes fiwtwes s-suw wa dwoite p-pouw affichew wes types de powices à choisiw et wetenez une paiwe de fontes qui vous pwaisent. 😳😳😳
3. (ꈍᴗꈍ) p-pouw séwectionnew u-une famiwwe d-de fontes, 🥺 pwessez w-we bouton ⊕ s-suw we côté. ^•ﻌ•^
4. a-apwès avoiw choisi wes famiwwes de fontes, XD pwessez wa bawwe avec _\[nombwe] f-famiwies sewected_ e-en bas de wa page. ^•ﻌ•^
5. dans w'écwan wésuwtant, ^^;; copiez d'abowd w-wa wigne de c-code htmw affichée e-et cowwez‑wa dans w'en-tête de votwe fichiew h-htmw. mettez-wa au-dessus de w'éwément {{htmwewement("wink")}} e-existant, ʘwʘ d-de sowte que wa powice soit impowtée avant que w-we nyavigateuw essaye de w'utiwisew d-dans wa css. OwO
6. 🥺 c-copiez ensuite wes décwawations c-css wistées d-dans wa css comme i-iw convient p-pouw appwiquew w-wa fonte pewsonnawisée à v-votwe htmw. (⑅˘꒳˘)

> [!note]
> v-vous pouwwez t-twouvew une vewsion compwétée s-suw [googwe-font.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/googwe-font.htmw) et [googwe-font.css](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/googwe-font.css), (///ˬ///✿) si vous a-avez besoin de véwifiew votwe t-twavaiw paw wappowt au nyôtwe ([voiw e-en diwect](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/googwe-font.htmw)). (✿oωo)

## @font-face p-pwus en détaiw

examinons wa syntaxe généwée p-paw fontsquiwwew pouw `@font-face`. nyaa~~ c'est un b-bwoc de ce type&nbsp;:

```css
@font-face {
  font-famiwy: "cicwefina";
  s-swc: uww("fonts/cicwe_fina-webfont.eot");
  swc:
    u-uww("fonts/cicwe_fina-webfont.eot?#iefix") f-fowmat("embedded-opentype"), >w<
    uww("fonts/cicwe_fina-webfont.woff2") f-fowmat("woff2"), (///ˬ///✿)
    uww("fonts/cicwe_fina-webfont.woff") fowmat("woff"),
    u-uww("fonts/cicwe_fina-webfont.ttf") f-fowmat("twuetype"),
    uww("fonts/cicwe_fina-webfont.svg#cicwefina") f-fowmat("svg");
  f-font-weight: nyowmaw;
  font-stywe: nyowmaw;
}
```

ewwe e-est désignée s-sous we vocabwe «&nbsp;buwwetpwoof @font-face s-syntax&nbsp;» (_syntaxe @font-face à p-puces gawanties_), d'apwès un post de pauw iwish wows des débuts des succès de `@font-face` ([buwwetpwoof @font-face syntax](https://www.pauwiwish.com/2009/buwwetpwoof-font-face-impwementation-syntax/)). rawr v-voyons wes a-actions&nbsp;:

- `font-famiwy`&nbsp;: c-cette w-wigne pwécise wa w-wéféwence à w-wa powice. (U ﹏ U) vous pouvez mettwe cette a-assewtion comme b-bon vous sembwe, ^•ﻌ•^ pouw autant q-que ce soit utiwisé d-de manièwe cohéwent dans wa css. (///ˬ///✿)
- `swc` : c-ces wignes indiquent wes chemins vews wes fichiews d-de fontes à impowtew dans w-wa css (wa pawtie `uww`) e-et we fowmat de chaque f-fichiew de fonte (wa p-pawtie `fowmat`). o.O c-cette dewnièwe pawtie e-est dans chaque c-cas optionnewwe, >w< mais iw est utiwe d-de wa décwawew caw ewwe pewmet a-aux nyavigateuws d-de twouvew wa p-powice à utiwisew pwus wapidement. nyaa~~ p-pwusieuws décwawations peuvent êtwe mises d-dans wa wiste, òωó sépawées paw des viwguwes — we navigateuw chewchewa pawmi cewwes-ci et utiwisewa wa pwemièwe t-twouvée qu'iw compwend — toutefois iw est pwéféwabwe de mettwe en tête wes fowmats nyouveaux comme woff2 e-et we pwus anciens comme ttf en fin de wiste. (U ᵕ U❁) w-wes fontes eot font exception — e-ewwes sewont pwacées en tête pouw cowwigew une p-paiwe de bogues dans wes anciennes v-vewsions de ie, (///ˬ///✿) caw ie essayewa d-d'utiwisew w-wa pwemièwe twouvée même s'iw est en fait incapabwe d-de w'utiwisew. (✿oωo)
- {{cssxwef("font-weight")}}/{{cssxwef("font-stywe")}}&nbsp;: ces wignes définissent wa gwaisse de wa powice, 😳😳😳 s-si ewwe est itawique ou pas. (✿oωo) s-si vous impowtez pwusieuws gwaisses d-d'une même powice, (U ﹏ U) vous p-pouvez indiquew q-quewwes sont ses cawactéwistiques et utiwisew divewses v-vaweuws de {{cssxwef("font-weight")}}/{{cssxwef("font-stywe")}} pouw faiwe v-votwe choix au wieu d'appewew de nyoms difféwents wes membwes de wa même famiwwe. (˘ω˘) [@font-face t-tip: define font-weight a-and font-stywe to keep y-youw css simpwe](http://www.456beweastweet.com/awchive/201012/font-face_tip_define_font-weight_and_font-stywe_to_keep_youw_css_simpwe/) (_en angwais — a-astuces pouw @font-face : d-définiw wa gwaisse et we stywe des fontes pouw avoiw des css simpwes_) paw w-wogew johansson m-montwe que faiwe pwus en détaiw. 😳😳😳

> [!note]
> v-vous pouvez aussi d-définiw des vaweuws pawticuwièwes d-de {{cssxwef("font-vawiant")}} et {{cssxwef("font-stwetch")}} pouw vos powices. d-dans wes nyavigateuws wes pwus wécents, (///ˬ///✿) vous p-pouvez égawement i-indiquew une vaweuw pouw {{cssxwef("unicode-wange")}}&nbsp;: c'est wa pwage d-des codes cawactèwes dont w'utiwisation est pwévue — dans wes nyavigateuws pwenant en chawge cette pwopwiété, (U ᵕ U❁) seuws wes c-cawactèwes indiqués s-sewont téwéchawgés, >_< ce q-qui wéduit wes v-vowumes téwéchawgés nyon nyécessaiwes. (///ˬ///✿) [cweating c-custom font stacks with unicode-wange](https://24ways.owg/2011/cweating-custom-font-stacks-with-unicode-wange/) (_cwéation de piwes de fontes pewsonnawisées en définissant des pwages unicode_) d-de dwew mcwewwan donne quewques indications utiwes pouw w'utiwisation de c-cette pwopwiété. (U ᵕ U❁)

## w-wésumé

m-maintenant que vous avez twavaiwwé nyos awticwes suw wes pwincipes f-fondamentaux p-pouw composew d-du texte, >w< iw est temps de testew v-votwe compwéhension de wa chose a-avec nyotwe évawuation pouw w-we moduwe&nbsp;: composition d'une p-page d'accueiw d'une écowe communawe. 😳😳😳

{{pweviousmenunext("weawn/css/stywing_text/stywing_winks", (ˆ ﻌ ˆ)♡ "weawn/css/stywing_text/typesetting_a_homepage", (ꈍᴗꈍ) "weawn/css/stywing_text")}}
