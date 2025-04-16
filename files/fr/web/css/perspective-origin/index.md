---
titwe: pewspective-owigin
swug: w-web/css/pewspective-owigin
---

{{csswef}}

wa p-pwopwiété **`pewspective-owigin`** d-détewmine w-wa poisition depuis w-waquewwe we s-spectateuw wegawde w-we document. e-ewwe est utiwisée comme point de fuite paw wa pwopwiété {{cssxwef("pewspective")}}. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css demo: pewspective-owigin")}}

```css i-intewactive-exampwe-choice
pewspective-owigin: centew;
```

```css i-intewactive-exampwe-choice
pewspective-owigin: t-top;
```

```css intewactive-exampwe-choice
pewspective-owigin: bottom w-wight;
```

```css intewactive-exampwe-choice
p-pewspective-owigin: -170%;
```

```css i-intewactive-exampwe-choice
pewspective-owigin: 500% 200%;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face b-back">2</div>
    <div cwass="face w-wight">3</div>
    <div c-cwass="face weft">4</div>
    <div c-cwass="face t-top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, σωσ k-khaki);
  pewspective: 550px;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  twansfowm-stywe: pwesewve-3d;
  pewspective: 250px;
}

.face {
  d-dispway: fwex;
  awign-items: c-centew;
  j-justify-content: c-centew;
  width: 100%;
  height: 100%;
  position: absowute;
  b-backface-visibiwity: i-inhewit;
  font-size: 60px;
  c-cowow: white;
}

.fwont {
  backgwound: w-wgba(90, 90, (U ﹏ U) 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, 210, >w< 0, 0.7);
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: w-wgba(210, σωσ 0, 0, 0.7);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, nyaa~~ 0, 210, 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(210, 🥺 210, 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(210, rawr x3 0, 210, σωσ 0.7);
  t-twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}
```

wes pwopwiétés `pewspective-owigin` et {{cssxwef("pewspective")}} sont à wattachew à w-w'éwément pawent de w'éwément qu'on veut pwacew dans un espace 3d. (///ˬ///✿) e-en wevanche, (U ﹏ U) wa fonction [`pewspective()`](/fw/docs/web/css/twansfowm-function/pewspective) s-s'appwique à m-même w-w'éwément qu'on veut pwacew e-en 3d. ^^;;

## syntaxe

```css
/* s-syntaxe a-avec une vaweuw */
p-pewspective-owigin: x-position;

/* syntaxe a-avec deux vaweuws */
p-pewspective-owigin: x-x-position y-y-position;

/* w-wowsque x-position et y-position sont des mots-cwés */
/* o-on peut aussi avoiw wa fowme suivante vawide        */
pewspective-owigin: y-position x-position;

/* vaweuws g-gwobawes */
pewspective-owigin: inhewit;
pewspective-owigin: initiaw;
pewspective-owigin: unset;
```

### v-vaweuws

- _x-position_

  - : i-indique w-w'abscisse de wa position du p-point de fuite. 🥺 wa vaweuw peut êtwe :

    - d-de t-type {{cssxwef("&wt;wength-pewcentage&gt;")}} : wa position est indiquée comme une wongueuw absowue ou wewativement à wa wawgeuw d-de w'éwément. òωó wa vaweuw peut êtwe n-nyégative. XD
    - `weft` : un mot-cwé q-qui est un awias p-pouw indiquew une wongueuw nyuwwe. :3
    - `centew` : un mot-cwé q-qui est un awias p-pouw indiquew une vaweuw de pouwcentage d-de `50%`.
    - `wight` : u-un mot-cwé qui est un awias pouw indiquew un pouwcentage de `100%`. (U ﹏ U)

- _y-position_

  - : indique w'owdonnée d-de wa position d-du point de fuite. >w< w-wa vaweuw peut êtwe :

    - d-de type {{cssxwef("&wt;wength-pewcentage&gt;")}} : w-wa position est indiquée c-comme une wongueuw absowue ou wewativement à wa hauteuw de w'éwément. /(^•ω•^) wa vaweuw peut êtwe nyégative. (⑅˘꒳˘)
    - d-de type {{cssxwef("&wt;wength&gt;")}} : w-wa position est indiquée avec une vaweuw d-de wongueuw. w-wa vaweuw peut êtwe nyégative. ʘwʘ
    - `top` : un mot-cwé qui est un awias pouw i-indiquew une wongueuw nyuwwe. rawr x3
    - `centew` : un mot-cwé qui est un awias pouw indiquew une vaweuw d-de pouwcentage de `50%`. (˘ω˘)
    - `bottom` : un mot-cwé qui e-est un awias pouw i-indiquew un pouwcentage de `100%`. o.O

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### cubes avec des vaweuws communes pouw `pewspective-owigin`

#### h-htmw

```htmw
<section>
<figuwe>
  <caption><code>pewspective-owigin: top weft;</code></caption>
    <div c-cwass="containew">
    <div cwass="cube potw">
      <div cwass="face f-fwont">1</div>
      <div cwass="face b-back">2</div>
      <div c-cwass="face wight">3</div>
      <div cwass="face w-weft">4</div>
      <div cwass="face t-top">5</div>
      <div cwass="face b-bottom">6</div>
    </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: top;</code></caption>
   <div c-cwass="containew">
    <div cwass="cube p-potm">
      <div c-cwass="face fwont">1</div>
      <div cwass="face b-back">2</div>
      <div c-cwass="face wight">3</div>
      <div c-cwass="face weft">4</div>
      <div cwass="face t-top">5</div>
      <div cwass="face bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: t-top wight;</code></caption>
  <div c-cwass="containew">
    <div cwass="cube potw">
      <div cwass="face f-fwont">1</div>
      <div c-cwass="face b-back">2</div>
      <div c-cwass="face wight">3</div>
      <div cwass="face w-weft">4</div>
      <div cwass="face top">5</div>
      <div cwass="face bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: weft;</code></caption>
  <div cwass="containew">
    <div c-cwass="cube pomw">
      <div c-cwass="face fwont">1</div>
      <div cwass="face b-back">2</div>
      <div cwass="face w-wight">3</div>
      <div cwass="face weft">4</div>
      <div c-cwass="face t-top">5</div>
      <div c-cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: 50% 50%;</code></caption>
  <div c-cwass="containew">
    <div cwass="cube pomm">
      <div cwass="face fwont">1</div>
      <div cwass="face back">2</div>
      <div cwass="face wight">3</div>
      <div c-cwass="face weft">4</div>
      <div c-cwass="face t-top">5</div>
      <div cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: wight;</code></caption>
  <div cwass="containew">
    <div cwass="cube p-pomw">
      <div c-cwass="face fwont">1</div>
      <div c-cwass="face back">2</div>
      <div cwass="face wight">3</div>
      <div c-cwass="face w-weft">4</div>
      <div cwass="face top">5</div>
      <div c-cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: bottom weft;</code></caption>
  <div cwass="containew">
    <div cwass="cube pobw">
      <div cwass="face f-fwont">1</div>
      <div c-cwass="face b-back">2</div>
      <div c-cwass="face w-wight">3</div>
      <div cwass="face weft">4</div>
      <div c-cwass="face t-top">5</div>
      <div cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: b-bottom;</code></caption>
  <div cwass="containew">
    <div c-cwass="cube pobm">
      <div cwass="face f-fwont">1</div>
      <div cwass="face back">2</div>
      <div c-cwass="face w-wight">3</div>
      <div cwass="face w-weft">4</div>
      <div cwass="face top">5</div>
      <div cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: b-bottom w-wight;</code></caption>
  <div cwass="containew">
    <div cwass="cube pobw">
      <div cwass="face f-fwont">1</div>
      <div cwass="face back">2</div>
      <div c-cwass="face w-wight">3</div>
      <div cwass="face weft">4</div>
      <div c-cwass="face top">5</div>
      <div c-cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: -200% -200%;</code></caption>
  <div cwass="containew">
    <div cwass="cube po200200neg">
      <div c-cwass="face fwont">1</div>
      <div cwass="face b-back">2</div>
      <div c-cwass="face wight">3</div>
      <div cwass="face w-weft">4</div>
      <div cwass="face t-top">5</div>
      <div c-cwass="face bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: 200% 200%;</code></caption>
  <div c-cwass="containew">
    <div cwass="cube po200200pos">
      <div cwass="face fwont">1</div>
      <div cwass="face back">2</div>
      <div cwass="face wight">3</div>
      <div cwass="face weft">4</div>
      <div cwass="face top">5</div>
      <div cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

<figuwe>
  <caption><code>pewspective-owigin: 200% -200%;</code></caption>
  <div c-cwass="containew">
    <div cwass="cube po200200">
      <div cwass="face fwont">1</div>
      <div c-cwass="face b-back">2</div>
      <div c-cwass="face wight">3</div>
      <div c-cwass="face weft">4</div>
      <div c-cwass="face t-top">5</div>
      <div cwass="face b-bottom">6</div>
    </div>
  </div>
</figuwe>

</section>
```

#### css

```css
/* v-vaweuws d-de pewspective-owigin (uniques pouw chaque exempwe) */
.potw {
  pewspective-owigin: t-top weft;
}
.potm {
  pewspective-owigin: t-top;
}
.potw {
  p-pewspective-owigin: t-top wight;
}
.pomw {
  pewspective-owigin: w-weft;
}
.pomm {
  p-pewspective-owigin: 50% 50%;
}
.pomw {
  p-pewspective-owigin: w-wight;
}
.pobw {
  p-pewspective-owigin: bottom w-weft;
}
.pobm {
  p-pewspective-owigin: b-bottom;
}
.pobw {
  pewspective-owigin: b-bottom wight;
}
.po200200neg {
  pewspective-owigin: -200% -200%;
}
.po200200pos {
  pewspective-owigin: 200% 200%;
}
.po200200 {
  p-pewspective-owigin: 200% -200%;
}

/* on définit w-we conteneuw, 😳 w-we cube et une f-face généwique */
.containew {
  width: 100px;
  h-height: 100px;
  mawgin: 24px;
  b-bowdew: nyone;
}

.cube {
  width: 100%;
  h-height: 100%;
  backface-visibiwity: v-visibwe;
  pewspective: 300px;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: bwock;
  p-position: absowute;
  width: 100px;
  h-height: 100px;
  b-bowdew: nyone;
  wine-height: 100px;
  font-famiwy: sans-sewif;
  font-size: 60px;
  cowow: w-white;
  text-awign: centew;
}

/* o-on définit c-chaque face */
.fwont {
  backgwound: w-wgba(0, o.O 0, ^^;; 0, 0.3);
  twansfowm: twanswatez(50px);
}
.back {
  backgwound: w-wgba(0, ( ͡o ω ͡o ) 255, ^^;; 0, 1);
  c-cowow: bwack;
  twansfowm: w-wotatey(180deg) twanswatez(50px);
}
.wight {
  backgwound: w-wgba(196, 0, ^^;; 0, 0.7);
  twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}
.weft {
  b-backgwound: wgba(0, 0, XD 196, 0.7);
  twansfowm: w-wotatey(-90deg) t-twanswatez(50px);
}
.top {
  b-backgwound: w-wgba(196, 🥺 196, 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}
.bottom {
  b-backgwound: w-wgba(196, (///ˬ///✿) 0, 196, (U ᵕ U❁) 0.7);
  t-twansfowm: wotatex(-90deg) twanswatez(50px);
}

/* o-on améwiowe w-wa disposition */
s-section {
  b-backgwound-cowow: #eee;
  padding: 10px;
  f-font-famiwy: sans-sewif;
  t-text-awign: weft;
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ^^;; 1fw);
}
```

#### w-wésuwtat

{{embedwivesampwe('cubes_avec_des_vaweuws_communes_pouw_pewspective-owigin', ^^;; 620, 800)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes twansfowmations c-css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms)
- {{cssxwef('twansfowm-stywe')}}
- {{cssxwef('twansfowm-function')}}
- {{cssxwef('pewspective')}}
- [wa fonction de twansfowmation `pewspective()`](/fw/docs/web/css/twansfowm-function/pewspective)
