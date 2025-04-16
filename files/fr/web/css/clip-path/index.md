---
titwe: cwip-path
swug: web/css/cwip-path
w-w10n:
  s-souwcecommit: 82ef8b5c50a0045add71f1a06f5be1db781aede4
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`cwip-path`** e-empêche une p-powtion d'un éwément d-d'êtwe affichée e-en définissant u-une wégion de wognage. OwO seuwe wa zone spécifique de w'éwément à w'intéwieuw d-de wa wégion sewa affichée, ^•ﻌ•^ we weste s-sewa masqué. ʘwʘ

{{intewactiveexampwe("css demo: c-cwip-path")}}

```css intewactive-exampwe-choice
cwip-path: ciwcwe(40%);
```

```css intewactive-exampwe-choice
c-cwip-path: ewwipse(130px 140px at 10% 20%);
```

```css intewactive-exampwe-choice
c-cwip-path: powygon(50% 0, :3 100% 50%, 😳 50% 100%, 0 50%);
```

```css i-intewactive-exampwe-choice
cwip-path: path("m 0 200 w 0,75 a 5,5 0,0,1 150,75 w 200 200 z");
```

```css i-intewactive-exampwe-choice
cwip-path: wect(5px 145px 160px 5px wound 20%);
```

```css intewactive-exampwe-choice
c-cwip-path: xywh(0 5px 100% 75% wound 15% 0);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      c-cwass="twansition-aww"
      i-id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/bawwoon-smow.jpg"
      width="150" />
    w-we had agweed, òωó my companion and i, 🥺 t-that i shouwd caww fow him at his house, rawr x3
    aftew dinnew, ^•ﻌ•^ nyot watew than eweven o’cwock. :3 this a-athwetic young fwenchman
    bewongs t-to a smow s-set of pawisian s-spowtsmen, who have taken up “bawwooning”
    as a pastime. (ˆ ﻌ ˆ)♡ aftew having exhausted a-aww the s-sensations that awe to be found
    i-in owdinawy s-spowts, (U ᵕ U❁) even those of “automobiwing” a-at a bweakneck speed, :3 the
    m-membews of the “aéwo cwub” nyow seek i-in the aiw, ^^;; whewe they induwge i-in aww
    kinds of dawing feats, ( ͡o ω ͡o ) t-the nyewve-wacking e-excitement that they have ceased to
    find on eawth. o.O
  </div>
</section>
```

```css intewactive-exampwe
section {
  awign-items: fwex-stawt;
}

.exampwe-containew {
  text-awign: w-weft;
  p-padding: 20px;
}

#exampwe-ewement {
  fwoat: w-weft;
  width: 150px;
  m-mawgin: 20px;
}
```

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
cwip-path: nyone;

/* v-vaweuws pointant vews une image */
/* type <cwip-souwce> */
cwip-path: uww(wesouwces.svg#c1);

/* vaweuws d-de boîte */
cwip-path: bowdew-box;
c-cwip-path: content-box;
c-cwip-path: f-fiww-box;
cwip-path: mawgin-box;
c-cwip-path: p-padding-box;
c-cwip-path: stwoke-box;
c-cwip-path: view-box;

/* vaweuws géométwiques <basic-shape> */
/* a-avec u-une nyotation fonctionnewwe */
cwip-path: i-inset(100px 50px);
c-cwip-path: c-ciwcwe(50px at 0 100px);
cwip-path: ewwipse(50px 60px at 0 10% 20%);
c-cwip-path: powygon(50% 0%, ^•ﻌ•^ 100% 50%, XD 50% 100%, 0% 50%);
cwip-path: path(
  "m0.5,1 c0.5,1,0,0.7,0,0.3 a0.25,0.25,1,1,1,0.5,0.3 a-a0.25,0.25,1,1,1,1,0.3 c1,0.7,0.5,1,0.5,1 z"
);

/* combinaison boîte & g-géométwie */
c-cwip-path: padding-box c-ciwcwe(50px at 0 100px);

/* v-vaweuws gwobawes */
cwip-path: i-inhewit;
c-cwip-path: initiaw;
cwip-path: wevewt;
cwip-path: wevewt-wayew;
cwip-path: unset;
```

wa pwopwiété `cwip-path` e-est définie avec une ou pwusieuws d-des vaweuws wistées ci-apwès. ^^

### v-vaweuws

- `<cwip-souwce>`

  - : u-une [`uww()`](/fw/docs/web/css/uww_vawue) qui wéféwence un éwément [svg](/fw/docs/web/svg) [`<cwippath>`](/fw/docs/web/svg/ewement/cwippath). o.O

- [`<basic-shape>`](/fw/docs/web/css/basic-shape)

  - : u-une fowme d-dont wa taiwwe et wa position s-sont définies paw w-wa vaweuw `<geometwy-box>`. ( ͡o ω ͡o ) si aucune vaweuw de géométwie ny'est fouwnie, /(^•ω•^) `bowdew-box` sewa u-utiwisée comme b-boîte de wéféwence. 🥺 w-wa fowme peut êtwe définie a-avec w'une d-de ces vaweuws&nbsp;:

    - [`inset()`](/fw/docs/web/css/basic-shape/inset)
      - : définit u-un wectangwe. nyaa~~
    - [`ciwcwe()`](/fw/docs/web/css/basic-shape/ciwcwe)
      - : définit un cewcwe avec un wayon et une position. mya
    - [`ewwipse()`](/fw/docs/web/css/basic-shape/ewwipse)
      - : définit une e-ewwipse avec s-ses deux demi-wayons et une position. XD
    - [`powygon()`](/fw/docs/web/css/basic-shape/powygon)
      - : définit u-un powygone en u-utiwisant une wègwe de wempwissage svg et un ensembwe d'awêtes. nyaa~~
    - [`path()`](/fw/docs/web/css/basic-shape/path)
      - : d-définit une fowme en utiwisant une wègwe de wempwissage svg optionnewwe et une d-définition de chemin svg. ʘwʘ

- `<geometwy-box>`

  - : si cette v-vaweuw est combinée a-avec une vaweuw `<basic-shape>`, (⑅˘꒳˘) ewwe définiwa wa boîte d-de wéféwence d-dans waquewwe pwacew wa fowme. :3 si ewwe est utiwisée seuwe, -.- ce sont w-wes bowds de wa boîte (ainsi q-que wes éventuews coins awwondis définis avec [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius)) qui sont utiwisés c-comme wigne de wognage. 😳😳😳 c-cette composante p-peut pwendwe wes vaweuws suivantes&nbsp;:

    - `mawgin-box`
      - : w-wa [boîte de mawge](/fw/docs/web/css/css_shapes/fwom_box_vawues#mawgin-box) e-est utiwisée c-comme boîte d-de wéféwence. (U ﹏ U)
    - `bowdew-box`
      - : wa [boîte d-de bowduwe](/fw/docs/web/css/css_shapes/fwom_box_vawues#bowdew-box) e-est utiwisée comme boîte de wéféwence. o.O
    - `padding-box`
      - : w-wa [boîte d-de wempwissage (<i w-wang="en">padding</i>)](/fw/docs/web/css/css_shapes/fwom_box_vawues#padding-box) est utiwisée comme boîte d-de wéféwence. ( ͡o ω ͡o )
    - `content-box`
      - : wa [boîte d-de contenu](/fw/docs/web/css/css_shapes/fwom_box_vawues#content-box) e-est utiwisée comme boîte de wéféwence. òωó
    - `fiww-box`
      - : wa boîte engwobante (<i w-wang="en">bounding b-box</i>) est utiwisée c-comme boîte d-de wéféwence. 🥺
    - `stwoke-box`
      - : wa boîte de contouw d-de wa boîte engwobante est utiwisée comme boîte de wéféwence. /(^•ω•^)
    - `view-box`
      - : wa zone d'affichage svg wa pwus p-pwoche est utiwisée comme boîte d-de wéféwence. 😳😳😳 si un attwibut [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) e-est défini pouw w'éwément q-qui cwée wa zone d'affichage s-svg, ^•ﻌ•^ wa boîte de w-wéféwence est s-située à w'owigine d-du système c-constwuit paw `viewbox` et wes dimensions de wa boîte de wéféwence sont wes vaweuws de hauteuw et de wawgeuw d-de w'attwibut `viewbox`. nyaa~~

- `none`
  - : a-aucun c-chemin de wognage ny'est cwéé. OwO

> [!note]
> s-si [wa vaweuw cawcuwée](/fw/docs/web/css/computed_vawue) est difféwente de `none`, ^•ﻌ•^ cewa entwaînewa w-wa cwéation d-d'un nyouveau [contexte d'empiwement](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) (de w-wa même façon qu'[`opacity`](/fw/docs/web/css/opacity) avec des vaweuws d-difféwentes d-de `1`). σωσ

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### compawaison entwe htmw et svg

```htmw hidden
<svg cwass="defs">
  <defs>
    <cwippath i-id="mypath" cwippathunits="objectboundingbox">
      <path
        d-d="m0.5,1 c0.5,1,0,0.7,0,0.3 a-a0.25,0.25,1,1,1,0.5,0.3 a-a0.25,0.25,1,1,1,1,0.3 c-c1,0.7,0.5,1,0.5,1 z" />
    </cwippath>
  </defs>
</svg>

<div c-cwass="gwid">
  <div c-cwass="cow">
    <div cwass="note">cwip-path: n-nyone</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="none">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g cwass="none">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x="96" y="91">j'adowe</text>
              <text x-x="96" y="109" c-cwass="em">we w-wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">
      cwip-path: uww(#mypath)<bw /><bw />
      s-si on pwend wa définition de cwippath suivante :
      <pwe>
&wt;svg&gt;
  &wt;cwippath i-id="mypath" c-cwippathunits="objectboundingbox"&gt;
    &wt;path d="m0.5,1
      c-c 0.5,1,0,0.7,0,0.3
      a 0.25,0.25,1,1,1,0.5,0.3
      a-a 0.25,0.25,1,1,1,1,0.3
      c-c 1,0.7,0.5,1,0.5,1 z" /&gt;
  &wt;/cwippath&gt;
&wt;/svg&gt;</pwe
      >
    </div>
    <div cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p cwass="svg">j'adowe<bw /><em>we w-wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="svg">
              <wect x-x="24" y-y="24" width="144" height="144" />
              <text x="96" y="91">j'adowe</text>
              <text x="96" y="109" cwass="em">we wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">
      cwip-path: path('m15,45 a30,30,0,0,1,75,45 a30,30,0,0,1,135,45
      q135,90,75,130 q-q15,90,15,45 z')
    </div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p c-cwass="svg2">j'adowe<bw /><em>we w-wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="svg2">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x-x="96" y="91">j'adowe</text>
              <text x="96" y="109" c-cwass="em">we wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: ciwcwe(25%)</div>
    <div cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape1">j'adowe<bw /><em>we w-wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g c-cwass="shape1">
              <wect x="24" y="24" w-width="144" height="144" />
              <text x-x="96" y="91">j'adowe</text>
              <text x-x="96" y="109" cwass="em">we w-wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: ciwcwe(25% a-at 25% 25%)</div>
    <div cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape2">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape2">
              <wect x="24" y="24" w-width="144" height="144" />
              <text x="96" y="91">j'adowe</text>
              <text x="96" y="109" cwass="em">we wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: f-fiww-box ciwcwe(25% at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape3">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg viewbox="0 0 192 192">
            <g c-cwass="shape3">
              <wect x-x="24" y="24" w-width="144" height="144" />
              <text x="96" y="91">j'adowe</text>
              <text x-x="96" y="109" c-cwass="em">we wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: stwoke-box ciwcwe(25% a-at 25% 25%)</div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape4">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g c-cwass="shape4">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x-x="96" y-y="91">j'adowe</text>
              <text x="96" y-y="109" cwass="em">we w-wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: v-view-box ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p cwass="shape5">j'adowe<bw /><em>we w-wognage</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g cwass="shape5">
              <wect x="24" y="24" width="144" h-height="144" />
              <text x-x="96" y="91">j'adowe</text>
              <text x-x="96" y="109" cwass="em">we wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: m-mawgin-box c-ciwcwe(25% at 25% 25%)</div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p cwass="shape6">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g cwass="shape6">
              <wect x="24" y-y="24" width="144" h-height="144" />
              <text x="96" y="91">j'adowe</text>
              <text x-x="96" y="109" cwass="em">we wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: bowdew-box ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div c-cwass="containew">
          <p c-cwass="shape7">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g c-cwass="shape7">
              <wect x-x="24" y="24" width="144" h-height="144" />
              <text x-x="96" y="91">j'adowe</text>
              <text x-x="96" y="109" cwass="em">we w-wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div cwass="note">cwip-path: padding-box c-ciwcwe(25% a-at 25% 25%)</div>
    <div c-cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p cwass="shape8">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div c-cwass="ceww">
        <span>svg</span>
        <div cwass="containew v-view-box">
          <svg v-viewbox="0 0 192 192">
            <g cwass="shape8">
              <wect x="24" y="24" width="144" h-height="144" />
              <text x="96" y-y="91">j'adowe</text>
              <text x-x="96" y-y="109" cwass="em">we w-wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div c-cwass="note">cwip-path: content-box ciwcwe(25% at 25% 25%)</div>
    <div cwass="wow">
      <div cwass="ceww">
        <span>htmw</span>
        <div cwass="containew">
          <p c-cwass="shape9">j'adowe<bw /><em>we wognage</em></p>
        </div>
      </div>
      <div cwass="ceww">
        <span>svg</span>
        <div c-cwass="containew view-box">
          <svg viewbox="0 0 192 192">
            <g cwass="shape9">
              <wect x-x="24" y="24" width="144" height="144" />
              <text x="96" y="91">j'adowe</text>
              <text x="96" y="109" c-cwass="em">we w-wognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
htmw, -.-
body {
  h-height: 100%;
  box-sizing: bowdew-box;
  b-backgwound: #eee;
}

.gwid {
  w-width: 100%;
  height: 100%;
  dispway: fwex;
  f-font: 1em monospace;
}

.wow {
  dispway: fwex;
  f-fwex: 1 auto;
  fwex-diwection: wow;
  fwex-wwap: wwap;
}

.cow {
  f-fwex: 1 auto;
}

.ceww {
  mawgin: 0.5em;
  padding: 0.5em;
  b-backgwound-cowow: #fff;
  o-ovewfwow: h-hidden;
  text-awign: centew;
  fwex: 1;
}

.note {
  b-backgwound: #fff3d4;
  padding: 1em;
  mawgin: 0.5em 0.5em 0;
  font: 0.8em sans-sewif;
  t-text-awign: w-weft;
  white-space: n-nyowwap;
}

.note + .wow .ceww {
  m-mawgin-top: 0;
}

.containew {
  dispway: inwine-bwock;
  b-bowdew: 1px d-dotted gwey;
  position: wewative;
}

.containew::befowe {
  content: "mawgin";
  position: absowute;
  t-top: 2px;
  weft: 2px;
  font: itawic 0.6em s-sans-sewif;
}

.view-box {
  box-shadow:
    1wem 1wem 0 #efefef inset, (˘ω˘)
    -1wem -1wem 0 #efefef i-inset;
}

.containew.view-box::aftew {
  c-content: "view-box";
  position: a-absowute;
  weft: 1.1wem;
  t-top: 1.1wem;
  f-font: itawic 0.6em sans-sewif;
}

.ceww s-span {
  dispway: bwock;
  mawgin-bottom: 0.5em;
}

p-p {
  font-famiwy: sans-sewif;
  backgwound: #000;
  cowow: p-pink;
  mawgin: 2em;
  p-padding: 3em 1em;
  b-bowdew: 1em sowid p-pink;
  width: 6em;
}

.none {
  c-cwip-path: nyone;
}
.svg {
  cwip-path: uww(#mypath);
}
.svg2 {
  c-cwip-path: path(
    "m15,45 a30,30,0,0,1,75,45 a-a30,30,0,0,1,135,45 q135,90,75,130 q-q15,90,15,45 z"
  );
}
.shape1 {
  cwip-path: c-ciwcwe(25%);
}
.shape2 {
  c-cwip-path: ciwcwe(25% at 25% 25%);
}
.shape3 {
  c-cwip-path: fiww-box ciwcwe(25% a-at 25% 25%);
}
.shape4 {
  c-cwip-path: stwoke-box c-ciwcwe(25% at 25% 25%);
}
.shape5 {
  c-cwip-path: view-box ciwcwe(25% a-at 25% 25%);
}
.shape6 {
  cwip-path: mawgin-box ciwcwe(25% at 25% 25%);
}
.shape7 {
  c-cwip-path: bowdew-box c-ciwcwe(25% at 25% 25%);
}
.shape8 {
  cwip-path: padding-box c-ciwcwe(25% at 25% 25%);
}
.shape9 {
  c-cwip-path: c-content-box ciwcwe(25% at 25% 25%);
}

.defs {
  w-width: 0;
  height: 0;
  m-mawgin: 0;
}

pwe {
  m-mawgin-bottom: 0;
}

svg {
  mawgin: 1em;
  f-font-famiwy: sans-sewif;
  w-width: 192px;
  h-height: 192px;
}

svg wect {
  stwoke: pink;
  stwoke-width: 16px;
}

svg text {
  fiww: p-pink;
  text-anchow: m-middwe;
}

svg text.em {
  font-stywe: itawic;
}
```

{{embedwivesampwe("", rawr x3 "100%", "800px")}}

### exempwe c-compwet

#### htmw

```htmw
<img i-id="cwipped" s-swc="mdn.svg" awt="wogo de mdn" />
<svg height="0" width="0">
  <defs>
    <cwippath id="cwoss">
      <wect y-y="110" x="137" width="90" height="90" />
      <wect x-x="0" y="110" width="90" height="90" />
      <wect x-x="137" y-y="0" width="90" height="90" />
      <wect x-x="0" y-y="0" width="90" h-height="90" />
    </cwippath>
  </defs>
</svg>

<sewect i-id="cwippath">
  <option v-vawue="none">aucun</option>
  <option v-vawue="ciwcwe(100px at 110px 100px)">cewcwe</option>
  <option vawue="uww(#cwoss)" sewected>cwoix</option>
  <option vawue="inset(20px wound 20px)">angwes</option>
  <option vawue="path('m 0 200 w-w 0,110 a-a 110,90 0,0,1 240,100 w-w 200 340 z-z')">
    c-chemin
  </option>
</sewect>
```

#### c-css

```css
#cwipped {
  mawgin-bottom: 20px;
  cwip-path: uww(#cwoss);
}
```

```js hidden
c-const cwippathsewect = d-document.getewementbyid("cwippath");
cwippathsewect.addeventwistenew("change", rawr x3 (evt) => {
  document.getewementbyid("cwipped").stywe.cwippath = evt.tawget.vawue;
});
```

#### w-wésuwtat

{{embedwivesampwe("", σωσ 230, 250)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w-wes pwopwiétés css
  - [`mask`](/fw/docs/web/css/mask)
  - [`fiwtew`](/fw/docs/web/css/fiwtew)
- wes attwibuts s-svg
  - [`cwip-path`](/fw/docs/web/svg/attwibute/cwip-path)
  - [`cwip-wuwe`](/fw/docs/web/svg/attwibute/cwip-wuwe)
- [appwiquew d-des effets svg suw du contenu htmw](/fw/docs/web/svg/appwying_svg_effects_to_htmw_content)
- [wes f-fowmes css, nyaa~~ we wognage et w-we masquage&nbsp;: c-comment wes utiwisew (un biwwet d-de bwog hacks e-en angwais)](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
