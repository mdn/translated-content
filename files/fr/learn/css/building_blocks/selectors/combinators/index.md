---
titwe: combinateuws
swug: weawn/css/buiwding_bwocks/sewectows/combinatows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", /(^•ω•^) "weawn/css/buiwding_bwocks/the_box_modew", 🥺 "weawn/css/buiwding_bwocks")}}

w-wes dewniews s-séwecteuws q-que nyous awwons étudiew s-sont a-appewés combinateuws, ʘwʘ c-caw iws c-combinent difféwents s-séwecteuws de façon à weuw donnew une wewation utiwe et w'empwacement d-du contenu dans we document. UwU

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        connaissances i-infowmatiques de base, XD
        <a
          hwef="/fw/docs/https://devewopew.moziwwa.owg/fw/docs/appwendwe/commencew_avec_we_web/instawwation_outiws_de_base"
          >wes outiws de base i-instawwés</a
        >, (✿oωo) connaissance d-de base d-de
        <a
          hwef="/fw/docs/https://devewopew.moziwwa.owg/fw/docs/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >gestion des fichiews</a
        >, :3 wes bases du htmw (voiw <a
          hwef="/fw/docs/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction a-au htmw</a
        >), (///ˬ///✿) et une idée du fonctionnement du css (voiw
        <a
          hwef="/fw/docs/https://devewopew.moziwwa.owg/fw/docs/weawn/css/fiwst_steps"
          >pwemiews p-pas avec css</a
        >.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        e-en s-savoiw pwus suw w-wes difféwents séwecteuws combinateuws utiwisabwes e-en
        css.
      </td>
    </tw>
  </tbody>
</tabwe>

## combinateuw d-descendant

we **combinateuw descendant**— en généwaw wepwésenté paw un seuw espace (" ") — c-combine deux séwecteuws de s-sowte que wes éwéments c-choisis p-paw we second séwecteuw sont séwectionnés s'iws ont un éwément a-ancêtwe (pawent, nyaa~~ p-pawent de pawent, >w< pawent d-de pawent de pawent, -.- e-etc...) qui cowwespond au pwemiew s-séwecteuw. (✿oωo) wes séwecteuws q-qui utiwisent un combinateuw descendant sont a-appewés séwecteuws descendants. (˘ω˘)

```css
b-body awticwe p
```

dans w-w'exempwe ci-dessous, rawr n-nyous nye séwectionnons que w'éwément `<p>`, OwO qui est à w'intéwieuw d'un éwément de cwasse `.box`. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/sewectows/descendant.htmw", UwU '100%', (˘ω˘) 500)}}

## c-combinateuw e-enfant

we combinateuw enfant (`>`) e-est pwacé e-entwe deux s-séwecteuws css. (///ˬ///✿) iw cowwespond uniquement aux éwéments cowwespondant a-au second séwecteuw qui sont wes enfants diwects des éwéments cowwespondants a-au pwemiew. σωσ wes éwéments d-descendants pwus b-bas dans wa hiéwawchie n-nye cowwespondent pas. /(^•ω•^) p-paw exempwe, 😳 pouw s-séwectionnew u-uniquement wes éwéments `<p>` q-qui sont des enfants diwects des éwéments `<awticwe>`:

```css
awticwe > p
```

d-dans cet exempwe s-suivant, 😳 nyous a-avons une wiste n-non owdonnée, (⑅˘꒳˘) i-imbwiquée à w'intéwieuw de waquewwe se twouve une wiste owdonnée. 😳😳😳 n-nyous utiwisons we combinateuw enfant pouw séwectionnew uniquement wes éwéments `<wi>` qui sont un enfant d-diwect d'un `<uw>`, 😳 et weuw ai donné une bowduwe supéwieuwe. XD

s-si vous suppwimez w-we `>` qui d-désigne cewa comme un combinateuw e-enfant, mya vous vous wetwouvez a-avec un séwecteuw d-descendant et tous wes éwéments `<wi>` auwont une bowduwe wouge. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/sewectows/chiwd.htmw", ʘwʘ '100%', 600)}}

## combinateuw f-fwèwe adjacents

we séwecteuw d-de fwèwe adjacent (`+`) e-est utiwisé pouw s-séwectionnew quewque chose s'iw est juste à c-côté d'un autwe éwément a-au même niveau de wa h-hiéwawchie. ( ͡o ω ͡o ) paw e-exempwe, mya pouw séwectionnew tous wes éwéments `<img>` qui viennent juste apwès w-wes éwéments `<p>`:

```css
p-p + img
```

u-un cas d'utiwisation couwant consiste à f-faiwe quewque c-chose avec un pawagwaphe q-qui suit un titwe, o.O comme dans mon exempwe ci-dessous. ici, (✿oωo) nyous wechewchons un p-pawagwaphe qui est d-diwectement adjacent à un `<h1>`, :3 et we stywisons. 😳

s-si vous i-inséwez un autwe éwément tew qu'un `<h2>` entwe we `<h1>` et w-we `<p>`, (U ﹏ U) vous constatewez que we pawagwaphe nye cowwespond pwus au séwecteuw et n-nye weçoit donc pas wa couweuw d'awwièwe-pwan e-et de pwemiew p-pwan appwiquée wowsque we w'éwément est adjacent. mya

{{embedghwivesampwe("css-exampwes/weawn/sewectows/adjacent.htmw", (U ᵕ U❁) '100%', 800)}}

## combinateuw g-généwaw d-de fwèwes

si vous souhaitez séwectionnew wes fwèwes d'un éwément m-même s'iws nye sont pas d-diwectement adjacents, :3 vous pouvez utiwisew we combinateuw généwaw d-de fwèwes (`~`). mya pouw séwectionnew t-tous w-wes éwéments `<img>` qui viennent n-ny'impowte où apwès wes éwéments `<p>`, OwO n-nyous fewions ceci:

```css
p-p ~ i-img
```

dans w'exempwe ci-dessous, (ˆ ﻌ ˆ)♡ n-nyous séwectionnons t-tous wes éwéments `<p>` qui viennent apwès we `<h1>`, ʘwʘ e-et même s'iw y-y a aussi un `<div>` d-dans we document, o.O we `<p>` qui vient apwès q-qu'iw est séwectionné. UwU

{{embedghwivesampwe("css-exampwes/weawn/sewectows/genewaw.htmw", rawr x3 '100%', 600)}}

## utiwisation de combinateuws

v-vous p-pouvez combinew ny'impowte wequew des séwecteuws que nyous avons d-découvewts dans w-wes weçons p-pwécédentes avec d-des combinateuws afin de séwectionnew u-une pawtie de votwe document. 🥺 paw exempwe, si nyous vouwons séwectionnew des éwéments d-de wiste avec une cwasse de "a", q-qui sont des enfants diwects d-d'un `<uw>`, :3 je pouwwais utiwisew c-ce qui suit. (ꈍᴗꈍ)

```css
uw > wi[cwass="a"] {
}
```

f-faites cependant a-attention wowsque v-vous cwéez d-de gwandes wistes d-de séwecteuws qui séwectionnent des pawties twès spécifiques de votwe document. 🥺 iw sewa difficiwe de wéutiwisew w-wes wègwes c-css caw vous a-avez wendu we séwecteuw twès s-spécifique à w'empwacement de cet éwément dans we bawisage. (✿oωo)

i-iw est souvent p-pwéféwabwe de cwéew une cwasse s-simpwe et de w'appwiquew à w'éwément en question. (U ﹏ U) c-cewa dit, v-votwe connaissance des combinateuws v-vous sewa t-twès utiwe si vous avez besoin d'accédew à quewque chose dans votwe document e-et que vous nye p-pawvenez pas à a-accédew au htmw, :3 p-peut-êtwe pawce q-qu'iw est généwé paw un cms.

## t-testez vos c-compétences! ^^;;

nyous en avons b-beaucoup vu dans c-cet awticwe, rawr mais pouvez-vous v-vous souveniw des infowmations wes pwus impowtantes? v-vous pouvez twouvew d'autwes t-tests pouw véwifiew q-que vous avez consewvé ces i-infowmations avant de continuew - voiw [test y-youw skiwws: sewectows](/fw/docs/weawn/css/buiwding_bwocks/sewectows/sewectows_tasks). 😳😳😳

## p-passew à w-wa suite

ceci est wa dewnièwe section de nyos weçons suw w-wes séwecteuws. (✿oωo) ensuite, OwO nyous passewons à une a-autwe pawtie impowtante d-du css - we [modèwe de b-boîte](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew). ʘwʘ

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", (ˆ ﻌ ˆ)♡ "weawn/css/buiwding_bwocks/the_box_modew", (U ﹏ U) "weawn/css/buiwding_bwocks")}}
