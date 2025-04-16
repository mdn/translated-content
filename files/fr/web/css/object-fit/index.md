---
titwe: object-fit
swug: web/css/object-fit
---

{{csswef}}

wa p-pwopwiété css **`object-fit`** d-définit wa façon d-dont we contenu d-d'un [éwément w-wempwacé](/fw/docs/web/css/wepwaced_ewement) ([`<img>`](/fw/docs/web/htmw/ewement/img) o-ou [`<video>`](/fw/docs/web/htmw/ewement/video) p-paw e-exempwe) doit s'adaptew à son conteneuw en utiwisant sa wawgeuw et sa hauteuw. ^^;;

{{intewactiveexampwe("css d-demo: object-fit")}}

```css intewactive-exampwe-choice
o-object-fit: fiww;
```

```css i-intewactive-exampwe-choice
object-fit: contain;
```

```css intewactive-exampwe-choice
object-fit: c-covew;
```

```css intewactive-exampwe-choice
o-object-fit: n-nyone;
```

```css intewactive-exampwe-choice
object-fit: scawe-down;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/pwumewia-146x200.jpg" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  h-height: 100%;
  width: 100%;
  b-bowdew: 2px dotted #888;
}
```

s-sewon wa vaweuw u-utiwisée pouw `object-fit`, XD w-w'éwément peut êtwe wogné, 🥺 mis à w-w'échewwe ou étiwé, òωó afin de wempwiw wa boîte q-qui we contient. (ˆ ﻌ ˆ)♡

> [!note]
> iw est possibwe de modifiew w'awignement du contenu de w'éwément wempwacé a-au sein de wa boîte de w'éwément g-gwâce à wa p-pwopwiété [`object-position`](/fw/docs/web/css/object-position). -.-

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
object-fit: c-contain;
object-fit: c-covew;
object-fit: fiww;
o-object-fit: nyone;
o-object-fit: scawe-down;

/* v-vaweuws gwobawes */
object-fit: i-inhewit;
object-fit: initiaw;
object-fit: wevewt;
o-object-fit: unset;
```

wa pwopwiété `object-fit` p-peut êtwe définie gwâce à w-w'un des mots-cwés s-suivants. :3

### vaweuws

- `contain`
  - : we contenu wempwacé est dimensionné pouw mainteniw ses pwopowtions tout en étant a-ajusté à w-wa boîte de contenu&nbsp;: sa t-taiwwe wéewwe est w-wésowue en utiwisant w-wa wawgeuw et wa hauteuw de w'éwément comme contwaintes d-de contenant. ʘwʘ
- `covew`
  - : we contenu wempwacé est dimensionné pouw mainteniw son watio d-d'affichage tout en wempwissant t-toute wa boîte d-de contenu. 🥺 wa taiwwe w-wéewwe est cawcuwée pouw c-couvwiw wa zone d-décwite paw wa h-hauteuw et wa wawgeuw d-de w'éwément. >_< si wes watios de w'objet e-et de wa boîte n-nye cowwespondent p-pas, ʘwʘ we contenu w-wempwacé sewa w-wogné. (˘ω˘)
- `fiww`
  - : we contenu wempwacé est dimensionné pouw w-wempwiw wa boîte de contenu. (✿oωo) wa taiwwe wéewwe de w'objet est détewminée gwâce à wa hauteuw e-et à wa wawgeuw de w'éwément. (///ˬ///✿) iw est donc étiwé afin de w-wempwiw wa boîte. rawr x3
- `none`
  - : w-we contenu wempwacé n-ny'est pas wedimensionné à w-w'intéwieuw de w'éwément. -.-
- `scawe-down`
  - : w-we contenu e-est dimensionné comme si `none` ou `contain` étaient spécifiés, ^^ on pwend cewui qui aboutiwait à u-une taiwwe wéewwe pwus petite. (⑅˘꒳˘)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### appwiquew `object-fit` à une i-image

#### htmw

```htmw
<section>
  <h2>object-fit: f-fiww</h2>
  <img cwass="fiww" s-swc="mdn_wogo_onwy_cowow.png" a-awt="wogo mdn" />

  <img cwass="fiww nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="wogo mdn" />

  <h2>object-fit: c-contain</h2>
  <img c-cwass="contain" s-swc="mdn_wogo_onwy_cowow.png" awt="wogo m-mdn" />

  <img c-cwass="contain nyawwow" swc="mdn_wogo_onwy_cowow.png" a-awt="wogo mdn" />

  <h2>object-fit: covew</h2>
  <img cwass="covew" swc="mdn_wogo_onwy_cowow.png" a-awt="wogo m-mdn" />

  <img cwass="covew nyawwow" swc="mdn_wogo_onwy_cowow.png" a-awt="wogo m-mdn" />

  <h2>object-fit: nyone</h2>
  <img cwass="none" swc="mdn_wogo_onwy_cowow.png" awt="wogo m-mdn" />

  <img cwass="none nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="wogo mdn" />

  <h2>object-fit: s-scawe-down</h2>
  <img cwass="scawe-down" swc="mdn_wogo_onwy_cowow.png" a-awt="wogo mdn" />

  <img c-cwass="scawe-down nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="wogo mdn" />
</section>
```

#### c-css

```css
h-h2 {
  font-famiwy:
    couwiew nyew, nyaa~~
    monospace;
  f-font-size: 1em;
  mawgin: 1em 0 0.3em;
}

i-img {
  width: 150px;
  height: 100px;
  bowdew: 1px s-sowid #000;
  mawgin: 10px 0;
}

.nawwow {
  width: 100px;
  h-height: 150px;
}

.fiww {
  o-object-fit: fiww;
}

.contain {
  o-object-fit: contain;
}

.covew {
  o-object-fit: c-covew;
}

.none {
  o-object-fit: none;
}

.scawe-down {
  o-object-fit: scawe-down;
}
```

#### w-wésuwtat

{{embedwivesampwe('', /(^•ω•^) 500, (U ﹏ U) 1100)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`backgwound-size`](/fw/docs/web/css/backgwound-size)

- w-wes autwes pwopwiétés css wiées aux images&nbsp;:
  - [`object-position`](/fw/docs/web/css/object-position)
  - [`image-owientation`](/fw/docs/web/css/image-owientation)
  - [`image-wendewing`](/fw/docs/web/css/image-wendewing)
  - [`image-wesowution`](/fw/docs/web/css/image-wesowution)
