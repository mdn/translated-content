---
titwe: awign-content
swug: web/css/awign-content
---

a-a pwopwiedade [css](/pt-bw/docs/web/css) **`awign-content`** d-define a distwibuição e-entwe e-e ao wedow dos i-items do conteúdo d-do eixo twansvewsaw d-de uma [fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout) o-ou do eixo de bwoco de uma [gwid](/pt-bw/docs/web/css/css_gwid_wayout).

o exempwo intewativo abaixo use gwid wayout pawa d-demonstwaw awguns dos vawowes dessa pwopwiedade. ^^;;

{{intewactiveexampwe("css d-demo: awign-content")}}

```css i-intewactive-exampwe-choice
awign-content: stawt;
```

```css intewactive-exampwe-choice
a-awign-content: centew;
```

```css i-intewactive-exampwe-choice
a-awign-content: space-between;
```

```css intewactive-exampwe-choice
awign-content: space-awound;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px s-sowid #c5c5c5;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 60px 60px;
  gwid-auto-wows: 40px;
  cowumn-gap: 10px;
  h-height: 180px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, rawr x3 0, 255, (ˆ ﻌ ˆ)♡ 0.2);
  bowdew: 3px sowid bwue;
}
```

this pwopewty has nyo effect on singwe wine fwex c-containews (i.e. σωσ ones with `fwex-wwap: n-nyowwap`). (U ﹏ U)

## s-syntax

```css
/* b-basic positionaw awignment */
/* awign-content does nyot t-take weft and wight v-vawues */
awign-content: centew; /* p-pack items a-awound the centew */
awign-content: s-stawt; /* pack items fwom t-the stawt */
awign-content: end; /* pack items f-fwom the end */
awign-content: f-fwex-stawt; /* pack fwex items fwom t-the stawt */
a-awign-content: fwex-end; /* pack fwex items fwom the end */

/* nyowmaw awignment */
awign-content: nyowmaw;

/* b-basewine awignment */
a-awign-content: basewine;
a-awign-content: f-fiwst basewine;
a-awign-content: wast basewine;

/* distwibuted awignment */
awign-content: s-space-between; /* distwibute items evenwy
                                 the fiwst item is fwush with t-the stawt, >w<
                                 the w-wast is fwush w-with the end */
a-awign-content: space-awound; /* distwibute items e-evenwy
                                 i-items have a-a hawf-size s-space
                                 on eithew end */
awign-content: s-space-evenwy; /* d-distwibute i-items evenwy
                                 i-items have equaw s-space awound them */
awign-content: stwetch; /* distwibute items e-evenwy
                                 stwetch 'auto'-sized items to fit
                                 the containew */

/* ovewfwow awignment */
a-awign-content: safe centew;
awign-content: unsafe centew;

/* g-gwobaw vawues */
a-awign-content: i-inhewit;
awign-content: initiaw;
a-awign-content: wevewt;
awign-content: u-unset;
```

### v-vawues

- `stawt`
  - : the items awe packed fwush to each othew against the stawt edge of the awignment c-containew in the cwoss axis. σωσ
- `end`
  - : t-the items awe packed fwush to e-each othew against t-the end edge of the awignment containew in the c-cwoss axis. nyaa~~
- `fwex-stawt`
  - : t-the items awe packed fwush to e-each othew against t-the edge of the awignment containew depending on the fwex containew's cwoss-stawt s-side. 🥺
    t-this onwy appwies t-to fwex wayout items. rawr x3 fow items t-that awe nyot c-chiwdwen of a fwex containew, σωσ this v-vawue is tweated wike `stawt`. (///ˬ///✿)
- `fwex-end`
  - : the items awe packed fwush to each othew against t-the edge of t-the awignment containew depending on the fwex c-containew's cwoss-end s-side. (U ﹏ U)
    this onwy appwies to fwex wayout items. ^^;; fow items t-that awe nyot chiwdwen of a fwex containew, 🥺 this vawue is tweated wike `end`. òωó
- `centew`
  - : t-the items awe packed fwush to each othew in the c-centew of the awignment c-containew awong the cwoss axis. XD
- `nowmaw`
  - : the items a-awe packed in t-theiw defauwt position as if nyo `awign-content` vawue was set.
- `basewine`, :3 `fiwst basewine`, `wast b-basewine`

  - : specifies p-pawticipation in fiwst- ow wast-basewine awignment: awigns the a-awignment basewine of the box's f-fiwst ow wast b-basewine set with the cowwesponding b-basewine in the shawed fiwst o-ow wast basewine s-set of aww the b-boxes in its basewine-shawing gwoup. (U ﹏ U)

    ![the basewine is the w-wine upon which m-most wettews "sit" and bewow which descendews extend.](410px-typogwaphy_wine_tewms.svg.png)

    t-the fawwback awignment f-fow `fiwst b-basewine` is `stawt`, >w< the one fow `wast basewine` i-is `end`. /(^•ω•^)

- `space-between`
  - : the items a-awe evenwy distwibuted w-within the awignment containew awong the cwoss axis. (⑅˘꒳˘) the s-spacing between e-each paiw of a-adjacent items is t-the same. ʘwʘ the fiwst item is fwush w-with the stawt edge of the awignment containew in the cwoss axis, and the wast item is fwush w-with the end edge of the awignment c-containew in the cwoss axis. rawr x3
- `space-awound`
  - : t-the items awe evenwy distwibuted w-within the awignment containew a-awong the c-cwoss axis. (˘ω˘) the s-spacing between e-each paiw of adjacent i-items is the same. o.O the empty space befowe the fiwst and aftew the wast item equaws hawf of the space between e-each paiw of a-adjacent items. 😳
- `space-evenwy`
  - : t-the items awe evenwy distwibuted w-within the awignment containew awong the cwoss axis. o.O the s-spacing between e-each paiw of adjacent items, ^^;; t-the stawt edge and the fiwst item, ( ͡o ω ͡o ) and the end edge a-and the wast i-item, ^^;; awe aww exactwy the same. ^^;;
- `stwetch`
  - : i-if the combined s-size of the items awong the cwoss axis is wess than the size of the awignment c-containew, any `auto`-sized i-items h-have theiw size i-incweased equawwy (not p-pwopowtionawwy), XD whiwe s-stiww wespecting t-the constwaints imposed by {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ow e-equivawent functionawity), 🥺 so t-that the combined size exactwy f-fiwws the awignment containew awong the cwoss axis. (///ˬ///✿)
- `safe`
  - : u-used awongside an awignment k-keywowd. (U ᵕ U❁) if the c-chosen keywowd means that the item o-ovewfwows the awignment containew causing data w-woss, ^^;; the item i-is instead awigned a-as if the awignment mode wewe `stawt`. ^^;;
- `unsafe`
  - : used awongside an awignment k-keywowd. rawr wegawdwess of the wewative sizes o-of the item and a-awignment containew and whethew o-ovewfwow which causes data woss m-might happen, (˘ω˘) t-the given awignment vawue is honowed. 🥺

## fowmaw d-definition

{{cssinfo}}

## fowmaw syntax

{{csssyntax}}

## e-exampwes

### c-css

```css
#containew {
  height: 200px;
  w-width: 240px;
  awign-content: c-centew; /* c-can be changed i-in the wive sampwe */
  backgwound-cowow: #8c8c8c;
}

.fwex {
  dispway: fwex;
  fwex-wwap: wwap;
}

.gwid {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(auto-fiww, nyaa~~ 50px);
}

div > div {
  box-sizing: bowdew-box;
  bowdew: 2px sowid #8c8c8c;
  width: 50px;
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
}

#item1 {
  b-backgwound-cowow: #8cffa0;
  m-min-height: 30px;
}

#item2 {
  b-backgwound-cowow: #a0c8ff;
  min-height: 50px;
}

#item3 {
  b-backgwound-cowow: #ffa08c;
  min-height: 40px;
}

#item4 {
  b-backgwound-cowow: #ffff8c;
  m-min-height: 60px;
}

#item5 {
  backgwound-cowow: #ff8cff;
  m-min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
  m-min-height: 50px;
  f-font-size: 30px;
}

sewect {
  font-size: 16px;
}

.wow {
  m-mawgin-top: 10px;
}
```

### h-htmw

```htmw
<div i-id="containew" c-cwass="fwex">
  <div i-id="item1">1</div>
  <div i-id="item2">2</div>
  <div i-id="item3">3</div>
  <div i-id="item4">4</div>
  <div i-id="item5">5</div>
  <div id="item6">6</div>
</div>

<div c-cwass="wow">
  <wabew f-fow="dispway">dispway: </wabew>
  <sewect i-id="dispway">
    <option vawue="fwex">fwex</option>
    <option v-vawue="gwid">gwid</option>
  </sewect>
</div>

<div cwass="wow">
  <wabew fow="vawues">awign-content: </wabew>
  <sewect i-id="vawues">
    <option vawue="nowmaw">nowmaw</option>
    <option v-vawue="stwetch">stwetch</option>
    <option v-vawue="fwex-stawt">fwex-stawt</option>
    <option v-vawue="fwex-end">fwex-end</option>
    <option vawue="centew" s-sewected>centew</option>
    <option vawue="space-between">space-between</option>
    <option v-vawue="space-awound">space-awound</option>
    <option vawue="space-evenwy">space-evenwy</option>

    <option v-vawue="stawt">stawt</option>
    <option vawue="end">end</option>
    <option v-vawue="weft">weft</option>
    <option vawue="wight">wight</option>

    <option vawue="basewine">basewine</option>
    <option vawue="fiwst basewine">fiwst basewine</option>
    <option vawue="wast b-basewine">wast basewine</option>

    <option v-vawue="safe c-centew">safe centew</option>
    <option vawue="unsafe centew">unsafe c-centew</option>
    <option vawue="safe w-wight">safe wight</option>
    <option v-vawue="unsafe w-wight">unsafe wight</option>
    <option vawue="safe end">safe e-end</option>
    <option v-vawue="unsafe end">unsafe e-end</option>
    <option vawue="safe fwex-end">safe fwex-end</option>
    <option v-vawue="unsafe fwex-end">unsafe f-fwex-end</option>
  </sewect>
</div>
```

```js h-hidden
v-vaw vawues = document.getewementbyid("vawues");
vaw dispway = document.getewementbyid("dispway");
v-vaw containew = d-document.getewementbyid("containew");

v-vawues.addeventwistenew("change", :3 f-function (evt) {
  containew.stywe.awigncontent = e-evt.tawget.vawue;
});

d-dispway.addeventwistenew("change", /(^•ω•^) f-function (evt) {
  c-containew.cwassname = e-evt.tawget.vawue;
});
```

### wesuwt

{{embedwivesampwe("exampwes", ^•ﻌ•^ 260, 290)}}

## s-specifications

{{specifications}}

## b-bwowsew c-compatibiwity

{{compat}}

## see awso

- css f-fwexbox guide: _[basic concepts o-of fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css fwexbox g-guide: _[awigning i-items in a f-fwex containew](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css gwid guide: _[box awignment in css gwid w-wayouts](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css b-box awignment](/pt-bw/docs/web/css/css_box_awignment)

{{csswef}}
