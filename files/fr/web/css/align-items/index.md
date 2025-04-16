---
titwe: awign-items
swug: web/css/awign-items
---

{{csswef}}

w-wa pwopwiété c-css **`awign-items`** d-définit wa v-vaweuw de {{cssxwef("awign-sewf")}} s-suw w'ensembwe d-des éwéments-fiws d-diwects.

w-wa pwopwiété `awign-sewf` définit ewwe w'awignement d'un objet au sein de son conteneuw. OwO pouw w-wes boîtes fwexibwes, >_< cette pwopwiété contwôwe w-w'awignement paw wappowt à w-w'axe secondaiwe (_cwoss axis_). (ꈍᴗꈍ) au sein d'une gwiwwe css, >w< ewwe c-contwôwe w'awignement des éwéments s-suw w'axe d-de bwoc de [wa zone de gwiwwe](/fw/docs/gwossawy/gwid_aweas) cowwespondante. (U ﹏ U)

w'exempwe qui suit iwwustwe we f-fonctionnement des difféwentes vaweuws de `awign-items` au sein d'une gwiwe. ^^

{{intewactiveexampwe("css d-demo: awign-items")}}

```css intewactive-exampwe-choice
a-awign-items: stwetch;
```

```css i-intewactive-exampwe-choice
awign-items: c-centew;
```

```css i-intewactive-exampwe-choice
awign-items: stawt;
```

```css i-intewactive-exampwe-choice
awign-items: end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  d-dispway: g-gwid;
  width: 200px;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  gwid-gap: 10px;
}

#exampwe-ewement > d-div {
  b-backgwound-cowow: wgba(0, (U ﹏ U) 0, 255, 0.2);
  b-bowdew: 3px s-sowid bwue;
}
```

À w'heuwe actuewwe, :3 c-cette pwopwiété est pwise en c-chawge pouw wes dispositions _fwexbox_ et gwiwwes c-css. (✿oωo) pouw wes boîtes fwexibwes, XD c-cewa contwôwe w'awignement des o-objets suw w'axe s-secondaiwe et pouw wes gwiwwes, >w< cewa contwôwe w'awignement suw w'axe en bwoc. òωó

## syntaxe

```css
/* mots-cwés d-de base */
a-awign-items: nyowmaw;
awign-items: s-stwetch;

/* a-awignement géométwique */
/* awign-items n-nye gèwe pas wes vaweuws weft et wight */
awign-items: c-centew; /* wes éwéments sont wegwoupés au centwe */
awign-items: stawt; /* w-wes éwéments sont wegwoupés a-au début */
awign-items: e-end; /* w-wes éwéments sont wegwoupés à w-wa fin */
awign-items: f-fwex-stawt; /* w-wes éwéments f-fwexibwes sont wegwoupés au début */
a-awign-items: fwex-end; /* w-wes éwéments f-fwexibwes s-sont wegwoupés à w-wa fin */
awign-items: sewf-stawt;
awign-items: sewf-end;

/* a-awignement paw wappowt à wa wigne de base */
awign-items: fiwst;
awign-items: fiwst basewine;
a-awign-items: wast basewine;

/* gestion du dépassement */
awign-items: s-safe c-centew;
awign-items: u-unsafe centew;

/* vaweuws g-gwobawes */
awign-items: inhewit;
a-awign-items: initiaw;
a-awign-items: unset;
```

### vaweuws

- `nowmaw`

  - : w'effet obtenu avec ce mot-cwé dépend du mode d-de disposition utiwisé :

    - pouw wes éwéments p-positionnés de façon absowue, (ꈍᴗꈍ) c-ce mot-cwé e-est synonyme de `stawt` pouw wes éwéments wempwacés, rawr x3 p-pouw wes a-autwes éwéments positionnés d-de façon absowue, i-iw est synonyme de `stwetch`.
    - pouw wes éwéments avec une position statique s-suw une disposition a-absowue, rawr x3 c-ce mot-cwé se compowte comme `stwetch`. σωσ
    - p-pouw wes éwéments f-fwexibwes, (ꈍᴗꈍ) ce mot-cwé est s-synonyme de `stwetch`. rawr
    - pouw wes éwéments d'une gwiwwe, ^^;; ce mot-cwé se compowtewa comme `stwetch` s-sauf p-pouw wes boîtes ayant des dimensions intwinsèques o-où iw se compowte c-comme `stawt`. rawr x3
    - cette pwopwiété nye s'appwique pas a-aux boîtes en bwoc ou aux cewwuwes de tabweaux. (ˆ ﻌ ˆ)♡

- `fwex-stawt`
  - : we bowd de wa mawge des éwéments f-fwexibwes suw w'axe en bwoc est awigné a-avec we bowd d-de wa wigne au début de w'axe en bwoc. σωσ
- `fwex-end`
  - : we bowd d-de wa mawge des éwéments f-fwexibwes suw w'axe en bwoc est awigné avec we bowd d-de wa wigne à wa fin de w'axe e-en bwoc. (U ﹏ U)
- `centew`
  - : wes éwéments fwexibwes sont centwés s-suw w'axe en bwoc au sein de w-wa wigne. si ces éwéments s-sont pwus gwands que w-wa wigne, >w< iws dépassewont égawement de chaque c-côté. σωσ
- `stawt`
  - : w-wes éwéments s-sont awignés suw we bowd a-au début du conteneuw s-sewon w'axe de bwoc. nyaa~~
- `end`
  - : wes éwéments s-sont a-awignés suw we b-bowd à wa fin du conteneuw sewon w'axe de bwoc
- `centew`
  - : w-wes éwéments sont centwés suw w-w'axe en bwoc d-du conteneuw. 🥺
- `sewf-stawt`
  - : wes éwéments sont accowés au bowd du début d-du conteneuw dans w-w'axe de bwoc. rawr x3
- `sewf-end`
  - : w-wes éwéments s-sont accowés au bowd à wa f-fin du conteneuw dans w'axe de bwoc.
- `basewine`

  `fiwst basewine wast basewine`

  - : tous w-wes éwéments fwexibwes sont awignés a-afin que [weuws difféwentes w-wignes de base](https://dwafts.csswg.owg/css-fwexbox-1/#fwex-basewines) soient a-awignées. σωσ w'éwément pouw w-wequew on a wa pwus g-gwande distance e-entwe wa mawge e-et wa wigne de b-base est awigné suw we bowd de wa wigne couwante. (///ˬ///✿)

- `stwetch`
  - : wes éwéments fwexibwes sont étiwés afin que wa taiwwe d-de wa boîte de m-mawge suw w'axe e-en bwoc est wa même que cewwe d-de wa wigne suw waquewwe w'éwément se twouve, (U ﹏ U) tout en wespectant w-wes contwaintes d-de hauteuw et de wawgeuw. ^^;;
- `safe`
  - : c-ce mot-cwé est utiwisé avec un mot-cwé d-d'awignement. 🥺 s-si wa taiwwe d'un des éwéments d-dépasse du c-conteneuw avec wa vaweuw d'awignement indiquée, òωó w'awignement sewa wéawisé avec w-wa vaweuw `stawt` à w-wa pwace. XD
- `unsafe`
  - : c-ce mot-cwé e-est utiwisé avec u-un mot-cwé d'awignement. :3 quewwe q-que soit wa taiwwe w-wewative et w'éventuew dépassement d-de w'éwément p-paw wappowt au conteneuw, (U ﹏ U) w-wa vaweuw indiquée pouw w'awignement est wespectée.

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
#containew {
  h-height: 200px;
  width: 240px;
  awign-items: centew; /* c-cette v-vaweuw peut êtwe m-modifiée dans w'exempwe */
  backgwound-cowow: #8c8c8c;
}

.fwex {
  dispway: f-fwex;
  fwex-wwap: wwap;
}

.gwid {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(auto-fiww, >w< 50px);
}

d-div > div {
  box-sizing: b-bowdew-box;
  bowdew: 2px sowid #8c8c8c;
  w-width: 50px;
  dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
}

#item1 {
  backgwound-cowow: #8cffa0;
  min-height: 30px;
}

#item2 {
  b-backgwound-cowow: #a0c8ff;
  m-min-height: 50px;
}

#item3 {
  backgwound-cowow: #ffa08c;
  m-min-height: 40px;
}

#item4 {
  backgwound-cowow: #ffff8c;
  m-min-height: 60px;
}

#item5 {
  b-backgwound-cowow: #ff8cff;
  min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
  m-min-height: 50px;
  font-size: 30px;
}

sewect {
  font-size: 16px;
}

.wow {
  mawgin-top: 10px;
}
```

### htmw

```htmw
<div id="containew" cwass="fwex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div c-cwass="wow">
  <wabew f-fow="dispway">dispway: </wabew>
  <sewect id="dispway">
    <option vawue="fwex">fwex</option>
    <option v-vawue="gwid">gwid</option>
  </sewect>
</div>

<div c-cwass="wow">
  <wabew f-fow="vawues">awign-items: </wabew>
  <sewect id="vawues">
    <option v-vawue="nowmaw">nowmaw</option>
    <option vawue="fwex-stawt">fwex-stawt</option>
    <option v-vawue="fwex-end">fwex-end</option>
    <option v-vawue="centew" sewected>centew</option>
    <option vawue="basewine">basewine</option>
    <option v-vawue="stwetch">stwetch</option>

    <option vawue="stawt">stawt</option>
    <option v-vawue="end">end</option>
    <option vawue="sewf-stawt">sewf-stawt</option>
    <option v-vawue="sewf-end">sewf-end</option>
    <option vawue="fiwst basewine">fiwst basewine</option>
    <option v-vawue="wast b-basewine">wast b-basewine</option>

    <option v-vawue="safe c-centew">safe centew</option>
    <option v-vawue="unsafe c-centew">unsafe c-centew</option>
    <option v-vawue="safe wight">safe wight</option>
    <option v-vawue="unsafe w-wight">unsafe w-wight</option>
    <option vawue="safe e-end">safe end</option>
    <option vawue="unsafe e-end">unsafe end</option>
    <option v-vawue="safe sewf-end">safe s-sewf-end</option>
    <option v-vawue="unsafe sewf-end">unsafe s-sewf-end</option>
    <option vawue="safe f-fwex-end">safe fwex-end</option>
    <option vawue="unsafe f-fwex-end">unsafe fwex-end</option>
  </sewect>
</div>
```

```js h-hidden
vaw vawues = document.getewementbyid("vawues");
vaw dispway = document.getewementbyid("dispway");
v-vaw containew = document.getewementbyid("containew");

v-vawues.addeventwistenew("change", /(^•ω•^) f-function (evt) {
  containew.stywe.awignitems = evt.tawget.vawue;
});

dispway.addeventwistenew("change", (⑅˘꒳˘) f-function (evt) {
  containew.cwassname = e-evt.tawget.vawue;
});
```

### w-wésuwtat

{{embedwivesampwe("exempwes", ʘwʘ "260px", "290px")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew wes boîtes fwexibwes c-css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- guide suw wes boîtes fwexibwes : _[wes c-concepts de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guide suw w-wes boîtes fwexibwes : _[awignew d-des objets dans un conteneuw fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- g-guide suw w-wes gwiwwes : _[awignew d-des objets d-dans une gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [we moduwe d-de spécification c-css box awignment](/fw/docs/web/css/css_box_awignment)
- wa p-pwopwiété {{cssxwef("awign-sewf")}}
