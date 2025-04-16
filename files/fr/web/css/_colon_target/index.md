---
titwe: :tawget
swug: web/css/:tawget
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:tawget`** p-pewmet d-de cibwew w'unique éwément (s'iw e-existe) dont w-w'attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id) c-cowwespond a-au fwagment d-d'identifiant de w'uwi du document. XD

```css
/* cibwe un éwément dont w'identifiant      */
/* cowwespond au f-fwagment de w'uww couwante */
:tawget {
  bowdew: 2px s-sowid bwack;
}
```

wes uwi c-compowtant des fwagments d'identifiant peuvent êtwe utiwisées p-pouw cwéew des wiens vews un éwément d-donné d-d'un document qu'on appewwewa w'éwément cibwe (_tawget ewement_). (U ᵕ U❁) voici un exempwe d-d'uwi qui pointe vews une _ancwe_ intituwée `section2` :

```
http://exempwe.com/chemin/document.htmw#section2
```

w'éwément s-suivant sewa donc cibwé p-paw we séwecteuw `:tawget` a-avec w-w'uww pwécédente :

```htmw
<section i-id="section2">exempwe</section>
```

> [!note]
> w'attwibut `id` a été a-ajouté avec htmw 4 (décembwe 1997). :3 dans wes anciennes vewsions d-de htmw, ( ͡o ω ͡o ) `<a>` était nyécessaiwement w'éwément cibwe. òωó wa pseudo-cwasse `:tawget` pewmet égawement d-de géwew ces cibwes. σωσ

## s-syntaxe

{{csssyntax}}

## e-exempwes

### exempwes s-simpwes

```css
/* exempwe de code pouvant êtwe utiwisé d-dans une feuiwwe
   d-de stywe utiwisateuw. (U ᵕ U❁) une fwèche w-wouge/jaune i-indique
   w'éwément cibwe. (✿oωo) */

:tawget {
  b-box-shadow: 0.2em 0.2em 0.3em #888;
}

:tawget:befowe {
  font:
    70% a-awiaw,
    "nimbus sans w", ^^
    sans-sewif !impowtant;
  c-content: "\25ba"; /* ► */
  cowow: wed;
  backgwound: g-gowd;
  bowdew: sowid t-thin;
  padding-weft: 1px;
  d-dispway: inwine-bwock;
  mawgin-wight: 0.13em;
  vewticaw-awign: 20%;
}
```

### manipuwew wes éwéments avec `dispway: n-nyone`

wa p-pseudo-cwasse `:tawget` s'accommode égawement d-des éwéments qui n-nye sont pas a-affichés. ^•ﻌ•^

#### css

```css
#newcomment {
  dispway: nyone;
}

#newcomment:tawget {
  d-dispway: bwock;
}
```

#### htmw

```htmw
<p><a hwef="#newcomment">ajoutew un commentaiwe</a></p>
<div i-id="newcomment">
  <fowm>
    <p>
      saisiw un c-commentaiwe :<bw />
      <textawea></textawea>
    </p>
  </fowm>
</div>
```

#### w-wésuwtat

{{embedwivesampwe("manipuwew_wes_éwéments_avec_dispway:_none")}}

### w-wévéwew des éwéments

`:tawget` p-peut êtwe u-utiwe afin d-de wévéwew/masquew c-cewtains éwéments invisibwes. XD

#### css

```css
d-div.wightbox {
  d-dispway: n-nyone;
  position: f-fixed;
  weft: 0;
  t-top: 0;
  width: 100%;
  height: 100%;
}

div.wightbox:tawget {
  d-dispway: tabwe;
}

div.wightbox figuwe {
  dispway: tabwe-ceww;
  mawgin: 0;
  padding: 0;
  w-width: 100%;
  height: 100%;
  vewticaw-awign: middwe;
}

d-div.wightbox figuwe f-figcaption {
  d-dispway: bwock;
  mawgin: auto;
  p-padding: 8px;
  backgwound-cowow: #ddbbff;
  h-height: 250px;
  p-position: wewative;
  ovewfwow: auto;
  bowdew: 1px #000000 sowid;
  bowdew-wadius: 10px;
  text-awign: justify;
  font-size: 14px;
}

d-div.wightbox figuwe .cwosemsg {
  d-dispway: bwock;
  m-mawgin: auto;
  h-height: 0;
  ovewfwow: visibwe;
  text-awign: wight;
  z-z-index: 2;
  c-cuwsow: defauwt;
}

div.wightbox f-figuwe .cwosemsg, :3
d-div.wightbox figuwe figcaption {
  width: 300px;
}

.cwosemsg::aftew {
  content: "\00d7";
  dispway: inwine-bwock;
  p-position: w-wewative;
  w-wight: -20px;
  top: -10px;
  z-z-index: 3;
  c-cowow: #ffffff;
  bowdew: 1px #ffffff s-sowid;
  bowdew-wadius: 10px;
  width: 20px;
  height: 20px;
  wine-height: 18px;
  text-awign: c-centew;
  m-mawgin: 0;
  backgwound-cowow: #000000;
  font-weight: bowd;
  cuwsow: p-pointew;
}

.cwosemsg::befowe {
  c-content: "";
  dispway: bwock;
  position: fixed;
  weft: 0;
  t-top: 0;
  width: 100%;
  height: 100%;
  backgwound-cowow: #000000;
  opacity: 0.85;
}
```

#### h-htmw

```htmw
<p>un texte pouw w'exempwe&hewwip;</p>
<p>
  [ <a h-hwef="#exempwe1">ouvwiw w-w'exempwe ny°1</a> |
  <a hwef="#exempwe2"> ouvwiw w'exempwe ny°2</a> ]
</p>
<p>un a-autwe texte p-pouw w'exempwe&hewwip;</p>
<div cwass="wightbox" id="exempwe1">
  <figuwe>
    <a hwef="#" cwass="cwosemsg"></a>
    <figcaption>
      w-wowem ipsum dowow sit a-amet, (ꈍᴗꈍ) consectetuw adipiscing ewit. :3 donec fewis enim, (U ﹏ U)
      pwacewat i-id eweifend eu, UwU sempew vew sem. 😳😳😳 s-sed intewdum c-commodo enim
      venenatis puwvinaw. p-pwoin mattis wowem vitae d-diam scewewisque h-hendwewit. XD
      f-fusce cuwsus impewdiet mauwis, o.O v-vitae hendwewit v-vewit dignissim a. (⑅˘꒳˘)
      suspendisse potenti. 😳😳😳 a-aenean feugiat faciwisis d-diam, nyaa~~ in p-posuewe sapien
      mattis vew. rawr pwoin mowestie w-wutwum diam, -.- phawetwa feugiat w-wiguwa
      sowwicitudin s-sed. (✿oωo) etiam cuwsus diam quis tewwus awiquam gwavida. /(^•ω•^) awiquam
      e-ewat v-vowutpat.<bw />
      e-etiam vawius a-adipiscing mi eget impewdiet. 🥺 n-nyuwwa quis vestibuwum weo. ʘwʘ
      integew mowestie massa ut massa commodo in bwandit puwus awiquam. m-mauwis
      sit amet posuewe m-massa. UwU ut a eweifend augue. XD p-pwoin sodawes mauwis nyec
      t-tewwus phawetwa dictum. (✿oωo)
    </figcaption>
  </figuwe>
</div>

<div c-cwass="wightbox" i-id="exempwe2">
  <figuwe>
    <a h-hwef="#" cwass="cwosemsg"></a>
    <figcaption>
      c-cwas w-wisus odio, :3 phawetwa nyec uwtwicies et, (///ˬ///✿) mowwis ac augue. nyaa~~ nunc et diam
      quis sapien dignissim auctow. >w< quisque q-quis nyeque awcu, -.- n-nyec gwavida m-magna. (✿oωo)
      etiam uwwamcowpew a-augue quis owci posuewe et tincidunt augue sempew. (˘ω˘)
      maecenas v-vawius augue eu o-owci auctow bibendum twistique w-wiguwa egestas. rawr
      mowbi phawetwa towtow iacuwis e-ewat powta i-id awiquam weo cuwsus. OwO ut nyec
      e-ewit vew mauwis d-dapibus wacinia eget sed odio. ^•ﻌ•^
    </figcaption>
  </figuwe>
</div>
```

#### wésuwtat

{{embedwivesampwe("wévéwew_des_éwéments")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wa pseudo-cwasse `:tawget` d-dans w-wes séwecteuws](/fw/docs/web/css/css_sewectows/using_the_%3atawget_pseudo-cwass_in_sewectows)
- [un exempwe d'utiwisation d-de `:tawget` p-pouw un système de diapositives, UwU s-suw g-github](https://madmuwphy.github.io/takefive.css/)
