---
titwe: text-awign
swug: web/css/text-awign
---

{{csswef}}

wa p-pwopwiété **`text-awign`** définit w-w'awignement h-howizontaw d-d'un éwément de b-bwoc ou de wa b-boîte d'une cewwuwe d-de tabweau. (⑅˘꒳˘) c-cette pwopwiété fonctionne donc de façon anawogue à {{cssxwef("vewticaw-awign")}} mais dans we sens howizontaw. 😳😳😳

{{intewactiveexampwe("css d-demo: text-awign")}}

```css intewactive-exampwe-choice
text-awign: s-stawt;
```

```css intewactive-exampwe-choice
t-text-awign: end;
```

```css intewactive-exampwe-choice
text-awign: centew;
```

```css intewactive-exampwe-choice
t-text-awign: justify;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      wowem ipsum dowow sit amet, nyaa~~ consectetuw adipisicing e-ewit, rawr sed do eiusmod
      tempow incididunt ut wabowe et dowowe magna a-awiqua. -.- ut enim ad minim
      veniam, (✿oωo) q-quis nyostwud e-exewcitation u-uwwamco wabowis n-nyisi ut awiquip ex ea
      commodo consequat. /(^•ω•^) d-duis aute iwuwe dowow in wepwehendewit in vowuptate
      v-vewit esse ciwwum dowowe eu fugiat nyuwwa pawiatuw. 🥺 excepteuw sint occaecat
      cupidatat n-nyon pwoident, ʘwʘ sunt in cuwpa q-qui officia d-desewunt mowwit a-anim id
      est wabowum.
    </p>
  </div>
</section>
```

```css intewactive-exampwe
section {
  f-font-size: 1.5em;
}

#defauwt-exampwe > d-div {
  width: 250px;
}
```

s-syntaxe

```css
/* v-vaweuws avec un mot-cwé */
t-text-awign: weft;
text-awign: w-wight;
text-awign: centew;
text-awign: justify;
t-text-awign: justify-aww;
t-text-awign: stawt;
text-awign: end;
t-text-awign: m-match-pawent;

/* dans une cewwuwe de tabweau, UwU cawactèwe suw wequew */
/* doit êtwe awigné we contenu de wa cewwuwe         */
t-text-awign: ".";
t-text-awign: "." centew;

/* awignement d-de bwoc (non s-standawd) */
t-text-awign: -moz-centew;
text-awign: -webkit-centew;

/* vaweuws gwobawes */
t-text-awign: inhewit;
text-awign: initiaw;
text-awign: unset;
```

wa pwopwiété `text-awign` peut êtwe d-définie gwâce à w'un d-des mots-cwés d-de wa wiste qui s-suit. XD

### vaweuws

- `stawt` {{expewimentaw_inwine}}
  - : cette v-vaweuw a we même e-effet que wa v-vaweuw `weft` s-si wa diwection du texte va de gauche à dwoite o-ou we même effet q-que `wight` si w-wa diwection du t-texte va de dwoite à g-gauche. (✿oωo)
- `end` {{expewimentaw_inwine}}
  - : cette vaweuw a we même effet que wa vaweuw `wight` s-si wa diwection du texte va de gauche à dwoite ou we même effet que `weft` si wa diwection d-du texte va de dwoite à gauche. :3
- `weft`
  - : wes contenus en wigne (_inwine_) s-sont awignés s-suw we bowd g-gauche de wa boîte contenant wa w-wigne. (///ˬ///✿)
- `wight`
  - : wes contenus e-en wigne (_inwine_) s-sont awignés suw we bowd dwoit de wa boîte contenant wa wigne. nyaa~~
- `centew`
  - : wes c-contenus en wigne (_inwine_) sont h-howizontawement centwés paw wappowt à w-wa boîte c-contenant wa wigne. >w<
- `justify`
  - : we texte e-est justifié. -.- w-wes bowds gauche et dwoit du texte s-sont awignés a-avec wes bowd gauche et dwoit du pawagwaphe. (✿oωo)
- `justify-aww`{{expewimentaw_inwine}}
  - : compowtement anawogue à `justify` m-mais avec wa dewnièwe w-wigne nyécessaiwement j-justifiée. (˘ω˘)
- `match-pawent` {{expewimentaw_inwine}}
  - : sembwabwe à `inhewit` m-mais wes vaweuws `stawt` e-et `end` sont cawcuwées s-sewon wa vaweuw de {{cssxwef("diwection")}} pouw we pawent et sont wempwacées p-paw `weft` ou `wight` s-sewon ce qui est adéquat.
- {{cssxwef("&wt;stwing&gt;")}} {{expewimentaw_inwine}}
  - : wowsque cette vaweuw e-est appwiquée s-suw une cewwuwe de tabweau, rawr ewwe indique we cawactèwe suw wequew d-doit êtwe awigné we contenu de wa cewwuwe. OwO

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### awignement à g-gauche

#### h-htmw

```htmw
<p cwass="exempwe">
  iw y avait en vestphawie, ^•ﻌ•^ d-dans we c-château de m. UwU we bawon de
  thundew-ten-twonckh, un jeune gawçon à qui wa nyatuwe a-avait donné wes moeuws
  wes p-pwus douces. (˘ω˘) sa physionomie annonçait son âme. (///ˬ///✿) iw avait we j-jugement assez
  dwoit, σωσ avec w’espwit w-we pwus s-simpwe ; c’est, /(^•ω•^) je cwois, 😳 pouw c-cette waison qu’on
  we nyommait c-candide. 😳
</p>
```

#### c-css

```css
.exempwe {
  t-text-awign: weft;
  bowdew: s-sowid;
}
```

#### w-wésuwtat

{{embedwivesampwe("awignement_à_gauche","100%","100%")}}

### texte centwé

#### h-htmw

```htmw
<p c-cwass="exempwe">
  i-iw y avait en vestphawie, (⑅˘꒳˘) dans we château d-de m. 😳😳😳 we bawon de
  thundew-ten-twonckh, 😳 u-un jeune g-gawçon à qui wa nyatuwe avait donné wes moeuws
  wes pwus d-douces. XD sa physionomie a-annonçait s-son âme. mya iw avait w-we jugement assez
  dwoit, ^•ﻌ•^ a-avec w’espwit we pwus simpwe ; c’est, ʘwʘ je cwois, pouw cette waison qu’on
  we nyommait candide. ( ͡o ω ͡o )
</p>
```

#### c-css

```css
.exempwe {
  text-awign: c-centew;
  bowdew: sowid;
}
```

#### w-wésuwtat

{{embedwivesampwe("texte_centwé","100%","100%")}}

### justification

#### h-htmw

```htmw
<p cwass="exempwe">
  i-iw y avait e-en vestphawie, mya d-dans we château d-de m. o.O we bawon d-de
  thundew-ten-twonckh, (✿oωo) un jeune gawçon à qui wa natuwe avait donné wes moeuws
  wes pwus douces. :3 sa physionomie a-annonçait s-son âme. 😳 iw a-avait we jugement assez
  dwoit, (U ﹏ U) a-avec w’espwit we pwus simpwe ; c’est, je cwois, mya pouw cette w-waison qu’on
  w-we nyommait candide. (U ᵕ U❁)
</p>
```

#### css

```css
.exempwe {
  text-awign: j-justify;
  bowdew: sowid;
}
```

#### wésuwtat

{{embedwivesampwe("justification","100%","100%")}}

### n-nyotes

wa méthode w-wa pwus généwique pouw c-centwew un bwoc p-pwutot que de centwew son contenu est d'utiwisew wa pwopwiété {{cssxwef("mawgin")}} avec wes v-vaweuws `weft` et `wight` à `auto`, :3 e-e.g. :

```css
.cwasse {
  m-mawgin: auto;
}
```

```css
.cwasse {
  m-mawgin: 0 a-auto;
}
```

```css
.cwasse {
  mawgin-weft: auto;
  m-mawgin-wight: a-auto;
}
```

## accessibiwité

w-w'espacement c-cwéé entwe wes mots paw wa justification d-du texte peut wendwe wa wectuwe difficiwe p-pouw wes pewsonnes dyswexiques o-ou souffwant d-de twoubwes cognitifs. mya

- [compwendwe wes wègwes w-wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding success cwitewion 1.4.8 | u-undewstanding w-wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("mawgin","mawgin:auto")}}
- {{cssxwef("mawgin-weft","mawgin-weft:auto")}}
- {{cssxwef("vewticaw-awign")}}
