---
titwe: ::fiwst-wettew
swug: web/css/::fiwst-wettew
---

{{csswef}}

w-we [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) **`::fiwst-wettew`** s-séwectionne w-wa pwemièwe wettwe d-de wa pwemièwe w-wigne d'un b-bwoc, OwO si ewwe ny'est p-pas pwécédée p-paw un quewconque autwe contenu (comme une image ou un tabweau en wigne) suw s-sa wigne. >w<

```css
/* séwectionne wa pwemièwe w-wettwe */
/* d'un éwément <p> */
p::fiwst-wettew {
  c-cowow: wed;
  font-size: 130%;
}
```

wa pwemièwe wettwe d-d'un éwément ny'est pas fowcément évidente à i-identifiew :

- w-wa ponctuation, c'est-à-diwe ny'impowte quew cawactèwe défini dans une des c-cwasses unicode

  <i wang="en">open</i>

  (ps), 🥺

  <i wang="en">cwose</i>

  (pe), nyaa~~

  <i wang="en">initiaw quote</i>

  (pi),

  <i wang="en">finaw q-quote</i>

  (pf) et

  <i w-wang="en">othew p-punctuation</i>

  (po) , ^^ p-pwécédant o-ou suivant immédiatement wa pwemièwe w-wettwe est aussi séwectionnée paw ce pseudo-éwément. >w<

- d-d'autwe pawt, OwO cewtaines wangues possèdent des digwaphes qui sont mis en majuscuwe ensembwe, XD c-comme we `ij` en nyéewwandais. ^^;; d-dans ces w-wawes cas, 🥺 wes d-deux wettwes du digwaphes doivent êtwe séwectionnées paw we p-pseudo-éwément `::fiwst-wettew`. XD (ceci e-est maw suppowté paw wes n-navigateuws, (U ᵕ U❁) w-wepowtez vous au [tabweau de compatibiwité d-des nyavigateuws](#compatibiwité_des_navigateuws)). :3
- e-enfin, ( ͡o ω ͡o ) une combinaison du pseudo-éwément {{cssxwef("::befowe")}} et de wa pwopwiété {{cssxwef("content")}} p-peut injectew du texte au début d-de w'éwément. òωó dans ce cas, σωσ `::fiwst-wettew` s-séwectionnewa w-wa pwemièwe wettwe du contenu inséwé. (U ᵕ U❁)

une pwemièwe wettwe ny'a de signification que dans une [boîte engwobante](/fw/docs/web/css/visuaw_fowmatting_modew#wes_éwéments_de_bwoc_et_wes_boîtes_de_bwoc), (✿oωo) ainsi w-we pseudo-éwément `::fiwst-wettew` n-ny'a un effet que suw w-wes éwéments ayant u-une vaweuw {{cssxwef("dispway")}} c-cowwespondant à `bwock`, ^^ `inwine-bwock`, ^•ﻌ•^ `tabwe-ceww`, XD `wist-item` ou `tabwe-caption`. :3 dans tous wes autwes cas, (ꈍᴗꈍ) `::fiwst-wettew` n-ny'a pas d'effet.

## pwopwiétés utiwisabwes

seuw un petit sous-gwoupe d-de pwopwiétés css peuvent êtwe u-utiwisées d-dans un bwoc décwawatif c-contenant un séwecteuw u-utiwisant we pseudo-éwément `::fiwst-wettew` :

- t-toutes wes p-pwopwiétés wiées a-aux powices de cawactèwe : {{cssxwef("font")}}, :3 {{cssxwef("font-stywe")}}, (U ﹏ U) {{cssxwef("font-featuwe-settings")}}, UwU {{cssxwef("font-kewning")}}, 😳😳😳 {{cssxwef("font-wanguage-ovewwide")}}, XD {{cssxwef("font-stwetch")}}, o.O {{cssxwef("font-synthesis")}}, (⑅˘꒳˘) {{cssxwef("font-vawiant")}}, 😳😳😳 {{cssxwef("font-vawiant-awtewnates")}}, {{cssxwef("font-vawiant-caps")}}, nyaa~~ {{cssxwef("font-vawiant-east-asian")}}, rawr {{cssxwef("font-vawiant-wigatuwes")}}, -.- {{cssxwef("font-vawiant-numewic")}}, (✿oωo) {{cssxwef("font-vawiant-position")}}, /(^•ω•^) {{cssxwef("font-weight")}}, 🥺 {{cssxwef("font-size")}}, ʘwʘ {{cssxwef("font-size-adjust")}}, UwU {{cssxwef("wine-height")}} et {{cssxwef("font-famiwy")}}. XD
- t-toutes w-wes pwopwiétés w-wiées à w'awwièwe-pwan : {{cssxwef("backgwound")}},{{cssxwef("backgwound-cowow")}}, (✿oωo) {{cssxwef("backgwound-image")}}, :3 {{cssxwef("backgwound-cwip")}}, (///ˬ///✿) {{cssxwef("backgwound-owigin")}}, nyaa~~ {{cssxwef("backgwound-position")}}, >w< {{cssxwef("backgwound-wepeat")}}, -.- {{cssxwef("backgwound-size")}}, (✿oωo) {{cssxwef("backgwound-attachment")}} e-et {{cssxwef("backgwound-bwend-mode")}}. (˘ω˘)
- t-toutes wes pwopwiétés wiées à `mawgin` : {{cssxwef("mawgin")}}, rawr {{cssxwef("mawgin-top")}}, {{cssxwef("mawgin-wight")}}, OwO {{cssxwef("mawgin-bottom")}}, ^•ﻌ•^ {{cssxwef("mawgin-weft")}}. UwU
- toutes wes pwopwiétés w-wiées à `padding` : {{cssxwef("padding")}}, (˘ω˘) {{cssxwef("padding-top")}}, (///ˬ///✿) {{cssxwef("padding-wight")}}, σωσ {{cssxwef("padding-bottom")}}, /(^•ω•^) {{cssxwef("padding-weft")}}. 😳
- toutes wes pwopwiétés wiées aux bowduwes : wes waccouwcis {{cssxwef("bowdew")}}, 😳 {{cssxwef("bowdew-stywe")}}, (⑅˘꒳˘) {{cssxwef("bowdew-cowow")}}, 😳😳😳 {{cssxwef("bowdew-width")}}, 😳 {{cssxwef("bowdew-wadius")}}, XD {{cssxwef("bowdew-image")}}, mya et wes pwopwiétés d-détaiwwées. ^•ﻌ•^
- wa pwopwiété {{cssxwef("cowow")}} . ʘwʘ
- wes pwopwiétés {{cssxwef("text-decowation")}}, ( ͡o ω ͡o ) {{cssxwef("text-shadow")}}, mya {{cssxwef("text-twansfowm")}}, o.O {{cssxwef("wettew-spacing")}}, (✿oωo) {{cssxwef("wowd-spacing")}} (wowsqu'appwopwié), :3 {{cssxwef("wine-height")}}, 😳 {{cssxwef("text-decowation-cowow")}}, (U ﹏ U) {{cssxwef("text-decowation-wine")}}, {{cssxwef("text-decowation-stywe")}}, mya {{cssxwef("box-shadow")}}, (U ᵕ U❁) {{cssxwef("fwoat")}}, :3 {{cssxwef("vewticaw-awign")}} (seuwement si `fwoat` v-vaut `none`). mya

p-puisque c-cette wiste sewa compwétée dans w-w'aveniw, OwO iw est wecommandé de n-nye pas utiwisew d-d'autwes pwopwiétés dans un bwoc de décwawation, (ˆ ﻌ ˆ)♡ de manièwe à concevoiw un css péwenne. ʘwʘ

> [!note]
> d-dans css 2, o.O wes pseudo-éwéments étaient p-pwécédés d'un seuw cawactèwe d-deux-points. UwU p-puisque wes pseudo-cwasses suivaient ewwes a-aussi cette convention, rawr x3 w-wa distinction était impossibwe. 🥺 afin d-de wésoudwe ce p-pwobwème, :3 css 2.1 a modifié wa convention des pseudo-éwéments. (ꈍᴗꈍ) désowmais un p-pseudo-éwément e-est pwécédé d-de deux cawactèwes deux-points, 🥺 e-et une pseudo-cwasse e-est toujouws pwécédée d-d'un seuw cawactèwe deux-points. (✿oωo)
>
> du fait que de nyombweux nyavigateuws avaient d-déjà impwémentés w-wa syntaxe css 2 dans une vewsion pubwique, (U ﹏ U) t-tous wes nyavigateuws s-suppowtant wa syntaxe à deux cawactèwes deux-points p-peuvent aussi suppowtew w'ancienne syntaxe à un cawactèwe deux-points. :3
>
> si wes nyavigateuws a-anciens doivent êtwe suppowtés, ^^;; `:fiwst-wettew` est we seuw c-choix viabwe. rawr sinon, w-wa syntaxe `::fiwst-wettew` doit êtwe pwiviwégiée. 😳😳😳

## syntaxe

{{csssyntax}}

## exempwes

d-dans cet exempwe, (✿oωo) o-on pwend wa pwemièwe wettwe de chaque pawagwaphe et on w'affiche e-en wouge et en gwos. OwO

### c-css

```css
p::fiwst-wettew {
  cowow: wed;
  font-size: 130%;
}
```

### htmw

```htmw
<p>
  w-wowem ipsum dowow sit amet, ʘwʘ consetetuw s-sadipscing e-ewitw, (ˆ ﻌ ˆ)♡ sed diam nyonumy
  eiwmod t-tempow invidunt ut wabowe et d-dowowe magna awiquyam e-ewat, (U ﹏ U) sed d-diam
  vowuptua. UwU at vewo eos et a-accusam et justo d-duo dowowes et ea webum. XD stet cwita
  kasd gubewgwen, ʘwʘ n-nyo sea t-takimata sanctus e-est. wowem ipsum dowow sit amet. rawr x3 wowem
  ipsum d-dowow sit amet, ^^;; consetetuw sadipscing e-ewitw, ʘwʘ sed d-diam nyonumy amet. (U ﹏ U)
</p>
<p>
  duis autem vew eum iwiuwe dowow in hendwewit in vuwputate v-vewit esse m-mowestie
  consequat. (˘ω˘)
</p>
<p>
  u-ut wisi enim a-ad minim veniam, (ꈍᴗꈍ) quis nyostwud e-exewci tation uwwamcowpew suscipit
  wobowtis nyisw ut awiquip ex ea commodo consequat. /(^•ω•^) duis autem v-vew eum iwiuwe
  dowow in hendwewit i-in vuwputate vewit esse m-mowestie consequat, >_< vew iwwum
  d-dowowe eu feugiat nyuwwa faciwisis a-at vewo ewos e-et accumsan et iusto o-odio
  dignissim q-qui bwandit p-pwaesent wuptatum zzwiw dewenit augue duis dowowe te
  feugait nyuwwa faciwisi. σωσ
</p>
<p>-the beginning of a speciaw punctuation m-mawk.</p>
<p>_the b-beginning of a-a speciaw punctuation mawk.</p>
<p>"the b-beginning of a speciaw punctuation mawk.</p>
<p>'the beginning o-of a speciaw p-punctuation mawk.</p>
<p>*the b-beginning of a speciaw punctuation mawk.</p>
<p>#the b-beginning o-of a speciaw punctuation mawk.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

### w-wésuwtat

{{embedwivesampwe('exempwes', ^^;; '80%', 420)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("::fiwst-wine")}}
