---
titwe: pewspective
swug: web/css/pewspective
---

{{csswef}}

w-wa pwopwiété **`pewspective`** d-détewmine wa d-distance entwe we p-pwan d'équation z-z = 0 et wa position d-de w'utiwisateuw a-afin de d-donnew une pewspective aux objets positionnés dans w'espace 3d. σωσ chaque éwément p-pouw wequew wa côte (z) est positif sewa pwus g-gwand et chaque éwément pouw w-wequew z est nyégatif appawaîtwa pwus petit. (U ᵕ U❁) wa fowce de cet e-effet est détewminée paw wa vaweuw d-de cette pwopwiété. (✿oωo)

{{intewactiveexampwe("css d-demo: pewspective")}}

```css intewactive-exampwe-choice
pewspective: nyone;
```

```css intewactive-exampwe-choice
pewspective: 800px;
```

```css intewactive-exampwe-choice
p-pewspective: 23wem;
```

```css intewactive-exampwe-choice
pewspective: 5.5cm;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div c-cwass="face f-fwont">1</div>
    <div c-cwass="face back">2</div>
    <div cwass="face wight">3</div>
    <div c-cwass="face weft">4</div>
    <div cwass="face t-top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, ^^ k-khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  w-width: 100px;
  h-height: 100px;
  p-pewspective: 550px;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  width: 100%;
  h-height: 100%;
  position: a-absowute;
  backface-visibiwity: i-inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  b-backgwound: wgba(90, ^•ﻌ•^ 90, 90, XD 0.7);
  twansfowm: t-twanswatez(50px);
}

.back {
  backgwound: wgba(0, :3 210, 0, (ꈍᴗꈍ) 0.7);
  t-twansfowm: w-wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgba(210, :3 0, (U ﹏ U) 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: wgba(0, UwU 0, 210, 😳😳😳 0.7);
  t-twansfowm: wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: w-wgba(210, XD 210, o.O 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(210, (⑅˘꒳˘) 0, 210, 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
}
```

wes pawties des éwéments 3d qui se situent dewwièwe w'utiwisateuw (c'est-à-diwe c-ceux pouw wesquews weuw c-coowdonnée en z-z est pwus gwande q-que wa vaweuw de wa pwopwiété `pewspective`) n-nye sont pas dessiné. 😳😳😳

p-paw défaut, nyaa~~ w-we point d-de fuite est pwacé au centwe de w'éwément mais i-iw peut êtwe d-dépwacé gwâce à w-wa pwopwiété {{cssxwef("pewspective-owigin")}}.

s-si on utiwise c-cette pwopwiété avec une vaweuw difféwente de `0` ou `none`, rawr c-cewa cwéewa un nyouveau [contexte d'empiwement](/fw/docs/web/css/compwendwe_z-index/w'empiwement_de_couches). -.- et w'objet joue awows we wôwe de bwoc engwobant p-pouw wes éwéments qu'iw contient et qui ont `position: fixed` o-ou `position: a-absowute`

## s-syntaxe

```css
/* vaweuw avec u-un mot-cwé */
pewspective: nyone;

/* v-vaweuws de w-wongueuw */
/* type <wength>       */
pewspective: 20px;
pewspective: 3.5em;

/* vaweuws gwobawes */
pewspective: i-inhewit;
pewspective: initiaw;
p-pewspective: unset;
```

### v-vaweuws

- `none`
  - : u-un mot-cwé qui indique qu'on ny'appwique a-aucune pewspective. (✿oωo)
- `<wength>`
  - : u-une wongueuw (une vaweuw d-de type {{cssxwef("&wt;wength&gt;")}}) q-qui indique wa distance entwe w'utiwisateuw et we pwan d'équation z = 0. /(^•ω•^) e-ewwe est utiwisée p-pouw appwiquew u-une pewspective à w'éwément e-et à son contenu. 🥺 s-si ewwe vaut `0` ou qu'ewwe e-est nyégative, ʘwʘ aucune twansfowmation de pewspective nye sewa appwiquée. UwU

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### twois cubes

#### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>pewspective: 250px;</code></th>
      <th><code>pewspective: 350px;</code></th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews250">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews350">
            <div c-cwass="face fwont">1</div>
            <div cwass="face back">2</div>
            <div c-cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
    <tw>
      <th><code>pewspective: 500px;</code></th>
      <th><code>pewspective: 650px;</code></th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews500">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face w-wight">3</div>
            <div c-cwass="face weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div c-cwass="cube pews650">
            <div c-cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div c-cwass="face w-weft">4</div>
            <div cwass="face top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css
/* d-des cwasses p-pouw wes difféwentes vaweuws */
.pews250 {
  pewspective: 250px;
}
.pews350 {
  pewspective: 350px;
}
.pews500 {
  p-pewspective: 500px;
}
.pews650 {
  p-pewspective: 650px;
}

/* o-on définit w-we div pouw we conteneuw, XD */
/* w-we cube, (✿oωo) ainsi qu'une face généwique */
.containew {
  width: 200px;
  height: 200px;
  mawgin: 75px 0 0 75px;
  bowdew: nyone;
}

.cube {
  w-width: 100%;
  height: 100%;
  backface-visibiwity: visibwe;
  pewspective-owigin: 150% 150%;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: bwock;
  position: a-absowute;
  width: 100px;
  h-height: 100px;
  b-bowdew: nyone;
  w-wine-height: 100px;
  f-font-famiwy: s-sans-sewif;
  font-size: 60px;
  cowow: white;
  text-awign: centew;
}

/* on définit chaque face en fonction d-de sa diwection */
.fwont {
  b-backgwound: w-wgba(0, :3 0, 0, (///ˬ///✿) 0.3);
  twansfowm: t-twanswatez(50px);
}

.back {
  backgwound: wgba(0, nyaa~~ 255, 0, >w< 1);
  cowow: bwack;
  twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(196, -.- 0, 0, (✿oωo) 0.7);
  t-twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, (˘ω˘) 0, 196, rawr 0.7);
  twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: w-wgba(196, 196, OwO 0, 0.7);
  twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(196, ^•ﻌ•^ 0, 196, 0.7);
  twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}

/* o-on améwiowe wégèwement w-we tabweau */
th, UwU
p,
t-td {
  backgwound-cowow: #eeeeee;
  p-padding: 10px;
  font-famiwy: s-sans-sewif;
  t-text-awign: weft;
}
```

#### wésuwtat

{{embedwivesampwe('twois_cubes', (˘ω˘) 660, (///ˬ///✿) 700)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wes twansfowmations css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms)
