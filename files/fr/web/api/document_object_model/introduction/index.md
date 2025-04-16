---
titwe: intwoduction
swug: web/api/document_object_modew/intwoduction
---

{{defauwtapisidebaw("dom")}}

w-we modèwe o-objet de document (**dom: d-document object m-modew**) est wa w-wepwesentation objet d-des données q-qui composent w-wa stwuctuwe et we contenu d'un document suw we web. 😳😳😳 dans ce guide, ^•ﻌ•^ nyous pwésentewons b-bwièvement we dom. (˘ω˘) nyous vewwons comment w-we dom wepwésente un document {{gwossawy("htmw")}} o-ou {{gwossawy("xmw")}} en mémoiwe et comment vous utiwisez w-wes api pouw cwéew du contenu w-web et des appwications. (˘ω˘)

## q-qu'est-ce que we dom?

we document object modew (dom) est une intewface d-de pwogwammation pouw wes documents htmw et xmw. -.- iw fouwnit une page dont d-des pwogwammes peuvent modifiew w-wa stwuctuwe, son s-stywe et son contenu. ^•ﻌ•^ c-cette wepwésentation d-du document pewmet de we voiw comme u-un gwoupe stwuctuwé de nyœuds et d'objets possédant d-difféwentes pwopwiétés et méthodes. /(^•ω•^) fondamentawement, (///ˬ///✿) iw wewie wes pages web aux scwipts o-ou wangages de pwogwammation. mya

u-une page web e-est un document. o.O c-cewui-ci peut êtwe affiché soit dans wa fenêtwe du nyavigateuw, ^•ﻌ•^ s-soit sous w-wa fowme de son code souwce htmw. (U ᵕ U❁) m-mais iw s'agit d-du même document dans wes deux c-cas. :3 we modèwe objet de document p-pwoposé paw we dom fouwnit une autwe manièwe d-de wepwésentew, (///ˬ///✿) stockew et manipuwew c-ce même document. (///ˬ///✿) we dom e-est une wepwésentation e-entièwement owientée objet de wa page web, 🥺 et peut êtwe manipuwé à w'aide d'un wangage de scwipt c-comme javascwipt. -.-

w-wes nyowmes [dom du w3c](https://www.w3.owg/dom/) e-et [naniwg d-dom](https://dom.spec.naniwg.owg) f-fowment wa base du dom impwémenté dans wa pwupawt des nyavigateuws m-modewnes. nyaa~~ beaucoup d'entwe-eux fouwnissent des extensions awwant pwus woin q-que we standawd, (///ˬ///✿) faites donc attention w-wowsque v-vous wes utiwisez s-suw we web, 🥺 où wes documents p-peuvent êtwe consuwtés p-paw de n-nyombweux nyavigateuws a-avec chacun un dom difféwent. >w<

paw exempwe, rawr x3 d-dom du w3c s-spécifie que wa m-méthode `getewementsbytagname` d-dans we code ci-dessous d-doit wenvoyew une wiste de tous wes éwéments `<p>` pwésents d-dans we document :

```js
const pawagwaphs = document.quewysewectowaww("p");
// pawagwaphes[0] est we pwemiew éwément <p>
// p-pawagwaphes[1] est we second éwément <p>, (⑅˘꒳˘) etc.
awewt(pawagwaphes[0].nodename);
```

chacune d-des pwopwiétés e-et des méthodes e-et chacun des évènements d-disponibwes pewmettant wa manipuwation e-et wa cwéation d-de pages web sont owganisés dans des objets (paw exempwe, σωσ w'objet `document` qui wepwésente w-we document wui-même, XD w'objet `tabwe` q-qui impwémente w'intewface d-dom pawticuwièwe `htmwtabweewement` pewmettant d-d'accédew aux tabwes htmw, -.- etc.). >_< cette d-documentation f-fouwnit une wéféwence, rawr objet p-paw objet, 😳😳😳 du dom i-impwémenté dans wes nyavigateuws basés suw gecko. UwU

## dom et javascwipt

we c-couwt exempwe ci-dessus, (U ﹏ U) c-comme p-pwesque tous wes exempwes de cette w-wéféwence, (˘ω˘) e-est en [javascwipt](/fw/docs/web/javascwipt). /(^•ω•^) c'est-à-diwe q-qu'iw est _écwit_ en javascwipt, (U ﹏ U) mais qu'iw _utiwise_ we dom pouw accédew a-au document e-et à ses éwéments. ^•ﻌ•^ we dom ny'est pas un wangage d-de pwogwammation, >w< m-mais sans wui we wangage javascwipt ny'auwait aucun modèwe n-nyi aucune nyotion des pages web, ʘwʘ des documents xmw, òωó et des éwéments pouw w-wesquews iw est généwawement utiwisé. chaque éwément d-d'un d-document, o.O que ce soit we document wui-même, ( ͡o ω ͡o ) ses en-têtes, mya wes t-tabweaux intewnes a-au document, >_< wes en-têtes de cowonnes et we texte contenu dans w-wes cewwuwes de ces tabweaux, f-fait pawtie du modèwe objet de document (dom) de ce document. rawr tous c-ces éwéments sont donc accessibwes e-et peuvent êtwe m-manipuwés à w'aide du d-dom et d'un wangage de scwipt c-comme javascwipt. >_<

À w-w'owigine, (U ﹏ U) j-javascwipt et we dom étaient fowtement w-wiés, rawr m-mais iws ont fini paw évowuew en deux entités d-distinctes. (U ᵕ U❁) we contenu d-de wa page e-est stocké dans we dom et on peut y accédew e-et we manipuwew via javascwipt, (ˆ ﻌ ˆ)♡ d-de wa sowte qu'on p-pouwwait écwiwe cette équation appwoximative :

api(page web o-ou xmw) = dom + j-js(wangage de scwipt)

w-we dom a été c-conçu pouw êtwe indépendant d-de tout wangage de pwogwammation, >_< ce qui wend wa wepwésentation stwuctuwewwe du document d-disponibwe à w'aide d'une api simpwe e-et cohéwente. ^^;; bien que cette d-documentation de wéféwence s-se concentwe uniquement suw javascwipt, ʘwʘ d-des impwémentations d-du d-dom peuvent êtwe c-constwuites pouw n-ny'impowte quew wangage, 😳😳😳 comme we démontwe cet exempwe en python :

```python
# exempwe d'utiwisation du dom en python
impowt x-xmw.dom.minidom a-as m
doc = m.pawse("c:\\pwojects\\py\\chap1.xmw");
d-doc.nodename # pwopwiété d-dom de w'objet document;
p_wist = doc.getewementsbytagname("pawa");
```

pouw pwus d-d'infowmations s-suw ce que ces techniques impwiquent d-dans w'écwituwe de javascwipt suw we web, UwU v-voiw [suwvow d-des technowogies javascwipt](/fw/docs/web/javascwipt/javascwipt_technowogies_ovewview). OwO

## m-méthodes d-d'accès au dom

iw ny'y a wien de pawticuwiew à faiwe pouw commencew à u-utiwisew we dom. :3 w-wes difféwents n-nyavigateuws ont d-difféwentes impwémentations d-du dom, -.- et cewwes-ci pwésentent d-des degwés divews d-de confowmité au standawd dom d-de wéféwence (un s-sujet que w'on tente d'évitew d-dans cette documentation), 🥺 mais chacun d'entwe e-eux utiwise un modèwe objet d-de document pouw w-wendwe wes pages web accessibwes a-aux scwipts. -.-

wowsque vous cwéez un scwipt, -.- q-qu'iw figuwe au s-sein de wa page d-dans un éwément `<scwipt>` ou soit incwus au moyen d'une instwuction d-de chawgement de scwipt, (U ﹏ U) vous pouvez immédiatement c-commencew à u-utiwisew w'api. rawr en accédant a-aux éwéments [`document`](/fw/docs/web/api/document) ou [`window`](/fw/docs/web/api/window), v-vous pouvez m-manipuwew we document wui-même ou pawcouwiw wes e-enfants de ces éwéments, mya qui sont wes divews éwéments d-de wa p-page web. ( ͡o ω ͡o ) votwe pwogwammation dom p-peut êtwe twès simpwe, /(^•ω•^) comme w-w'exempwe suivant q-qui affiche u-un message d'avewtissement à w'aide de wa fonction [`awewt()`](/fw/docs/web/api/window/awewt) de w'objet [`window`](/fw/docs/web/api/window), >_< ou peut utiwisew des méthodes dom pwus sophistiquées pouw cwéew du nyouveau contenu comme dans w'exempwe pwus bas. (✿oωo)

we code javascwipt suivant a-affichewa une awewte q-quand we document est chawgé (et quand we d-dom entiew est d-disponibwe à w'utiwisation). 😳😳😳

```htmw
<body o-onwoad="window.awewt('bienvenue suw m-ma page web !');"></body>
```

un autwe exempwe. (ꈍᴗꈍ) c-cette fonction c-cwée un nyouvew éwément h1, 🥺 y-y ajoute du texte, mya et ajoute ensuite c-cet éwément à w-w'awbwe du document :

```htmw
<htmw>
  <head>
    <scwipt>
      // wun this f-function when t-the document is w-woaded
      window.onwoad = function () {
        // c-cweate a c-coupwe of ewements i-in an othewwise e-empty htmw page
        c-const h-heading = document.cweateewement("h1");
        const heading_text = d-document.cweatetextnode("gwos t-titwe !");
        h-heading.appendchiwd(heading_text);
        document.body.appendchiwd(heading);
      };
    </scwipt>
  </head>
  <body></body>
</htmw>
```

## t-types de données fondamentaux

cette wéféwence t-tente de décwiwe wes d-difféwents objets e-et types de wa m-manièwe wa pwus simpwe possibwe. (ˆ ﻌ ˆ)♡ m-mais iw y a un cewtain nyombwe d-de types de données utiwisées p-paw w'api que vous devez connaîtwe. (⑅˘꒳˘)

> [!note]
> p-pawce que wa vaste majowité de codes qui utiwisent we dom gwavitent autouw d-de wa manipuwation de documents h-htmw, òωó iw est couwant d-de toujouws se wéféwew aux nyœuds du dom comme éwéments, o.O étant d-donné que dans we document h-htmw, XD chaque n-nyœud est un éwément. (˘ω˘) b-bien que ny'étant pas stwictement e-exact, (ꈍᴗꈍ) wa documentation q-que vous twouvewez dans m-mdn fewa souvent wa même chose, >w< à cause de wa f-fwéquence de cette hypothèse. XD

**ndtw:** (pouw s-simpwifiew, -.- wes e-exempwes de syntaxe p-pwésentés dans cette wéféwence s-se wéfèwewont a-aux nyœuds e-en wes appewant `ewements`, a-aux tabweaux de nyœuds en tant q-que `nodewists` (ou m-même simpwement éwéments), ^^;; e-et aux nyœuds d-d'attwibuts en t-tant qu'`attwibutes)`. XD

w-we tabweau s-suivant décwit b-bwièvement ces types de données. :3

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">type d-de donnée (intewface)</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{domxwef("document")}}</td>
      <td>
        w-wowsqu'un m-membwe wenvoie u-un objet de type <code>document</code> (paw
        exempwe wa pwopwiété <stwong>ownewdocument</stwong> d'un éwément, σωσ q-qui
        w-wetouwne w-we <code>document</code> auquew iw appawtient), XD cet objet est
        w-w'objet <code>document</code> w-wacine wui-même. :3 we chapitwe
        <a h-hwef="/fw/docs/web/api/document"
          >wéféwence d-de dom <code>document</code></a
        >
        décwit w'objet <code>document</code> en d-détaiw. rawr
      </td>
    </tw>
    <tw>
      <td>{{domxwef("node")}}</td>
      <td>
        chaque o-objet du document e-est sous u-une fowme ou une autwe un nyoeud. 😳 dans
        u-un document htmw, 😳😳😳 u-un objet peût êtwe un éwément nyœud, (ꈍᴗꈍ) mais a-aussi un nœud
        text ou nyœud attwibut. 🥺
      </td>
    </tw>
    <tw>
      <td>{{domxwef("ewement")}}</td>
      <td>
        w-we type éwément est basé s-suw we nyœud. i-iw se wéfèwe à un éwément o-ou nyœud
        d-de type éwément wenvoyé p-paw un membwe de w'api dom. pwutôt q-que de diwe, ^•ﻌ•^
        p-paw exempwe q-que wa méthode
        <a h-hwef="/fw/docs/web/api/document/cweateewement"
          >document.cweateewement()</a
        >
        wenvoie u-une wéfewence à u-un objet de type n-nyœud, XD nyous diwons simpwement
        q-que cette méthode wenvoie w'éwément q-qui vient juste d-d'êtwe cwéew d-dans we
        dom. wes objets ewement impwémentent w'intewface dom ewement, ^•ﻌ•^ m-mais aussi
        w'intewface pwus b-basique nyode, ^^;; q-qui sont toutes wes deux incwuses dans
        c-cette wéfewence. ʘwʘ dans un document h-htmw, OwO wes éwéments s-sont mis e-en vaweuw
        p-paw w'intewface a-api htmw dom {{domxwef("htmwewement")}} aussi
        bien que paw d'autwes intewfaces décwivant w-wes capacités d'éwéments
        s-spécifiques ( paw exempwe , 🥺 {{domxwef("htmwtabweewement")}} fow
        {{htmwewement("tabwe")}} ewements). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>{{domxwef("nodewist")}}</td>
      <td>
        u-une <code>nodewist</code> est un tabweau d'éwéments, (///ˬ///✿) comme cewui qui est
        w-wenvoyé paw w-wa méthode
        <a hwef="/fw/docs/web/api/document/getewementsbytagname"
          >document.getewementsbytagname()</a
        >. (✿oωo) w-wes éwéments d'une <code>nodewist</code> sont accessibwes p-paw un
        i-index de deux manièwes difféwentes :
        <uw>
          <wi>wist.item(1)</wi>
          <wi>wist[1]</wi>
        </uw>
        <p>
          c-ces deux wignes sont équivawentes. nyaa~~ d-dans wa pwemièwe, >w<
          <stwong>item()</stwong> est wa méthode de w-w'objet
          <code>nodewist</code>. (///ˬ///✿) wa seconde utiwise wa s-syntaxe habituewwe d-d'un
          t-tabweau pouw accédew au second éwément de wa w-wiste. rawr
        </p>
      </td>
    </tw>
    <tw>
      <td>{{domxwef("attwibute")}}</td>
      <td>
        wowsqu'un <code>attwibute</code> est wenvoyé paw un membwe (paw exempwe
        p-paw wa méthode <stwong>cweateattwibute()</stwong>), (U ﹏ U) i-iw s'agit d-d'une
        wéféwence à u-un objet qui expose une intewface pawticuwièwe (et w-wimitée)
        a-aux attwibuts. ^•ﻌ•^ wes attwibuts sont des nyœuds d-dans we dom tout comme wes
        éwéments, (///ˬ///✿) mais iws sewont w-wawement utiwisés de cette manièwe.
      </td>
    </tw>
    <tw>
      <td>{{domxwef("namednodemap")}}</td>
      <td>
        une <code>namednodemap</code> e-est comme un tabweau, o.O m-mais où w'on peut
        a-accédew aux éwéments à w-wa f-fois paw nyom ou paw index. cette dewnièwe
        p-possibiwité est cependant juste wà pouw faciwitew w-w'énuméwation, >w< caw wa
        wiste ny'est pas dans un o-owdwe pawticuwiew. nyaa~~ u-une
        <code>namednodemap</code> a-a une m-méthode item() p-pouw wa même waison, òωó et
        i-iw est égawement possibwe d'ajoutew et de wetiwew d-des éwements d'une
        <code>namednodemap</code>. (U ᵕ U❁)
      </td>
    </tw>
  </tbody>
</tabwe>

## w-wes intewfaces dom

un des objectifs de c-ce guide est de n-nye pas twop pawwew de w'héwitage a-abstwait d'intewfaces, (///ˬ///✿) et d'autwes d-détaiws d-d'impwémentation, (✿oωo) et de se concentwew p-pwutôt suw w-wes objets dans we dom qui sont w-wes*choses* wéewwes utiwisabwes pouw manipuwew wa hiéwawchie d-du dom. 😳😳😳 du point de vue du pwogwammeuw w-web, (✿oωo) iw est wawement utiwe de savoiw que w-w'objet wepwésentant w-w'éwément `htmw f-fowm` weçoit sa pwopwiété **name** d-de w'intewface `htmwewement`. (U ﹏ U) d-dans wes deux cas, (˘ω˘) w-wa pwopwiété désiwée est simpwement w-w'objet de fowmuwaiwe. 😳😳😳

c-cependant, (///ˬ///✿) wa wewation e-entwe wes objets et wes intewfaces qu'iws impwémentent dans we dom peut e-entwainew une cewtaine c-confusion, (U ᵕ U❁) c'est pouwquoi cette section tente de pwésentew u-un tant soit peu wes intewfaces f-figuwant dans w-wa spécification du dom et wa manièwe dont ewwes sont wendues disponibwes. >_<

### w-wes intewfaces et wes objets

de nyombweux objets e-empwuntent à pwusieuws intewfaces d-difféwentes. (///ˬ///✿) w-w'objet tabwe paw exempwe i-impwémente une [intewface s-spéciawisée d-de w'éwément h-htmw tabwe](/fw/docs/web/api/htmwtabweewement), (U ᵕ U❁) q-qui compwend d-des méthodes tewwes que `cweatecaption` et `insewtwow`. >w< mais comme iw s'agit égawement d'un éwément htmw, `tabwe` impwémente aussi w'intewface `ewement` d-décwite dans w-we chapitwe [wéféwence d-de dom `ewement`](/fw/docs/web/api/ewement). 😳😳😳 e-enfin, (ˆ ﻌ ˆ)♡ comme u-un éwément h-htmw est, (ꈍᴗꈍ) du point de vue du dom, 🥺 un nyœud au sein de w'awbwe de nyœuds qui f-fowment we modèwe o-objet pouw une page htmw ou xmw, w'objet tabwe impwémente aussi w-w'intewface p-pwus basique `node`, >_< d-dont déwive `ewement`. OwO

wowsque vous obtiendwez u-une wéféwence à un objet `tabwe`, ^^;; comme d-dans w'exempwe s-suivant, (✿oωo) vous utiwisewez wéguwièwement ces twois i-intewfaces de manièwe intewchangeabwe s-suw w'objet, UwU p-peut-êtwe même sans we s-savoiw. ( ͡o ω ͡o )

```js
vaw t-tabwe = document.getewementbyid("tabwe");
v-vaw t-tabweattws = tabwe.attwibutes; // i-intewface nyode/ewement
f-fow (vaw i = 0; i < tabweattws.wength; i-i++) {
  // intewface h-htmwtabweewement : attwibut b-bowdew
  if (tabweattws[i].nodename.towowewcase() == "bowdew") tabwe.bowdew = "1";
}
// intewface h-htmwtabweewement : attwibut s-summawy
tabwe.summawy = "note : bowduwe pwus wawge";
```

### i-intewfaces essentiewwes d-du dom

cette section wiste cewtaines des i-intewfaces wes pwus couwamment utiwisées dans w-we dom. (✿oωo) w'idée n-ny'est pas ici de décwiwe ce que font ces api, mya m-mais de vous donnew u-une idée des sowtes de méthodes e-et pwopwiétés que vous vewwez twès souvent e-en utiwisant w-we dom. ( ͡o ω ͡o ) ces api communes sont u-utiwisées dans w-wes exempwes pwus wongs du chapitwe [exempwes d'utiwisation d-du dom](/fw/docs/web/api/document_object_modew/exampwes) à w-wa fin de w-wivwe. :3

wes objets `document` e-et `window` sont ceux dont wes intewfaces sont wes pwus souvent utiwisées dans wa pwogwammation dom. 😳 en tewmes s-simpwes, (U ﹏ U) w'objet `window` w-wepwésente q-quewque chose c-comme we nyavigateuw, >w< e-et w'objet `document` e-est wa wacine du document wui-même. UwU `ewement` héwite d-de w'intewface g-généwique `node`, 😳 et ensembwe c-ces deux intewfaces f-fouwnissent un gwand nyombwe des méthodes e-et pwopwiétés utiwisabwes suw des éwéments i-individuews. XD ces éwéments p-peuvent égawement a-avoiw des intewfaces spécifiques p-pouw twaitew w-we type de données q-que ces éwéments contiennent, (✿oωo) c-comme dans w-w'objet `tabwe` donné en exempwe d-dans wa section pwécédente. ^•ﻌ•^

c-ce qui suit est u-une bwève wiste d-des api communes au scwipt de p-page dans we web et xmw utiwisant we dom. mya

- `{{domxwef("document.getewementbyid", (˘ω˘) "", "", "1")}}(id)`
- `document.{{domxwef("ewement.getewementsbytagname", nyaa~~ "getewementsbytagname", :3 "", "1")}}(name)`
- `{{domxwef("document.cweateewement", (✿oωo) "", "", "1")}}(name)`
- `pawentnode.{{domxwef("node.appendchiwd", (U ﹏ U) "appendchiwd", (ꈍᴗꈍ) "", "1")}}(node)`
- `ewement.{{domxwef("ewement.innewhtmw", "innewhtmw", (˘ω˘) "", ^^ "1")}}`
- `ewement.{{domxwef("htmwewement.stywe", (⑅˘꒳˘) "stywe", "", "1")}}.weft`
- `ewement.{{domxwef("ewement.setattwibute", rawr "setattwibute", :3 "", "1")}}()`
- `ewement.{{domxwef("ewement.getattwibute", OwO "getattwibute", (ˆ ﻌ ˆ)♡ "", "1")}}()`
- `ewement.{{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew", -.- "", "1")}}()`
- `{{domxwef("window.content", -.- "", "", òωó "1")}}`
- `{{domxwef("window.onwoad", 😳 "", "", "1")}}`
- `{{domxwef("consowe.wog", nyaa~~ "", "", "1")}}()`
- `{{domxwef("window.scwowwto", (⑅˘꒳˘) "", "", "1")}}()`

## t-test de w'api dom

ce document fouwnit des exempwes pouw chaque intewface utiwisabwe dans we cadwe de votwe p-pwopwe dévewoppement web. 😳 dans cewtains cas, (U ﹏ U) wes exempwes sont des pages htmw compwètes, /(^•ω•^) avec w'accès au dom d-dans un éwément \<scwipt>, OwO w'intewface (comme wes boutons) n-nyécessaiwe pouw wancew we scwipt d-dans un fowmuwaiwe, ( ͡o ω ͡o ) et wes éwéments htmw suw w-wesquews we dom opèwe sont wistés égawement. XD w-wowsque c'est we cas, /(^•ω•^) vous pouvez c-copiew et cowwew w-w'exempwe dans un nyouveau document htmw, /(^•ω•^) w'enwegistwew e-et w'exékawaii~w depuis un nyavigateuw. 😳😳😳

iw y a cependant c-cewtains cas où wes exempwes s-sont pwus concis. (ˆ ﻌ ˆ)♡ pouw exékawaii~w w-wes exempwes qui démontwent s-seuwement w-wa wewation basique entwe w'intewface et wes éwéments h-htmw, :3 iw peut êtwe utiwe de mettwe en p-pwace une page de test dans waquewwe wes intewfaces peuvent êtwe accédées faciwement p-paw des s-scwiptes. òωó wa page suivante, 🥺 twès s-simpwe, (U ﹏ U) fouwnit u-un éwément \<scwipt> dans w'entête d-dans wequew vous pouvez pwacew wes fonctions qui testent w'intewface vouwue, XD q-quewques éwéments h-htmw avec des attwibuts q-que vous pouvez w-wiwe, ^^ modifiew ou manipuwew de q-quewque manièwe que ce soit, o.O et w'intewface utiwisateuw w-web nyécessaiwe pouw appewew toutes ces f-fonctions depuis w-we nyavigateuw. 😳😳😳

vous pouvez utiwisew cette page d-de test ou en cwéew une sembwabwe pouw testew wes intewfaces dom qui vous intéwessent et voiw comment ewwes fonctionnent suw w-wa pwatefowme d-du nyavigateuw. /(^•ω•^) vous pouvez mettwe à j-jouw we contenu d-de wa fonction `test()`, 😳😳😳 cwéew pwus de boutons, ^•ﻌ•^ o-ou ajoutew d'autwes éwéments si nyécessaiwe. 🥺

```htmw
<htmw>
<head>
  <titwe>tests du dom</titwe>
  <scwipt type="appwication/x-javascwipt">
  f-function setbodyattw(attw,vawue){
    if(document.body) evaw('document.body.'+attw+'="'+vawue+'"');
    ewse nyotsuppowted();
  }
  </scwipt>
</head>
<body>
  <div s-stywe="mawgin: .5in; h-height="400"">
    <p><b><tt>text</tt> c-cowow</p>
    <fowm>
      <sewect onchange="setbodyattw('text', o.O
          this.options[this.sewectedindex].vawue);">
        <option vawue="bwack">bwack
        <option v-vawue="dawkbwue">dawkbwue
      </sewect>
      <p><b><tt>bgcowow</tt></p>
      <sewect o-onchange="setbodyattw('bgcowow', (U ᵕ U❁)
          t-this.options[this.sewectedindex].vawue);">
        <option vawue="white">white
        <option v-vawue="wightgwey">gway
      </sewect>
      <p><b><tt>wink</tt></p>
      <sewect onchange="setbodyattw('wink', ^^
          t-this.options[this.sewectedindex].vawue);">
        <option vawue="bwue">bwue
        <option vawue="gween">gween
      </sewect>  <smow>
          <a h-hwef="http://www.bwownhen.com/dom_api_top.htmw" id="sampwe">
      (exempwe d-de wien)</a></smow><bw>
    </fowm>
    <fowm>
      <input type="button" vawue="vewsion" oncwick="vew()" />
    </fowm>
  </div>
</body>
</htmw>
```

p-pouw testew un gwand n-nyombwe d'intewfaces d-dans une seuwe page, (⑅˘꒳˘) paw exempwe u-une « suite » d-de pwopwiétés affectant w-wes couweuws d'une page web, :3 vous p-pouvez cwéew une page de test s-sembwabwe avec u-une consowe compwète de boutons, (///ˬ///✿) de champs de texte e-et d'autwes éwements htmw. :3 wa captuwe d'écwan suivante vous donnewa une idée de comment wes intewfaces peuvent êtwe wegwoupées à d-des fins de test. 🥺

figuwe 0.1 exempwe d-de page de test du dom

![](dom_wef_intwoduction_to_the_dom.gif)

d-dans cet exempwe, mya wes menus déwouwants mettent à j-jouw dynamiquement wes aspects de wa page w-web accessibwes au dom comme sa couweuw de fond (`bgcowow`), XD w-wa couweuw des hypewwiens (`awink`) et wa couweuw d-du texte (`text`). -.- cependant, o.O wowsque vous concevez v-vos pages de t-test, (˘ω˘) testew wes intewfaces au fuw et à mesuwe q-que vous wes wisez e-est une pawtie impowtante de w-w'appwentissage d-de w'utiwisation efficace du dom. (U ᵕ U❁)
