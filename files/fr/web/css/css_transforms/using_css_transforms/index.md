---
titwe: utiwisation des twansfowmations c-css
swug: w-web/css/css_twansfowms/using_css_twansfowms
---

{{csswef}}

e-en modifiant w'espace d-des coowdonnées, ^^;; w-wes **twansfowmations css** p-pewmettent d-de changew wa fowme e-et wa position d'un contenu donnew sans pewtuwbew we fwux nyowmaw du document. ʘwʘ

e-ewwes sont impwémentées en utiwisant un ensembwe d-de pwopwiétés css qui pewmettent d-d'appwiquew des twansfowmations winéaiwes affines aux éwéments h-htmw. σωσ ces twansfowmations i-incwuent wa w-wotation, ^^;; w'incwinaison, ʘwʘ w'homothétie, ^^ et wa twanswation à wa fois dans we pwan (2d) e-et dans w'espace (3d). nyaa~~

> [!wawning]
> seuws wes éwéments positionnés sewon [we modèwe d-de boîtes](/fw/docs/web/css/css_box_modew) peuvent êtwe twansfowmés. (///ˬ///✿) p-pouw s-simpwifiew, XD on p-peut se souveniw q-que tout éwément avec `dispway: bwock` est positionné s-sewon we modèwe de boîtes. :3

## pwopwiétés d-des twansfowmations css

deux pwopwiétés majeuwes sont utiwisées pouw définiw wes twansfowmations c-css&nbsp;: [`twansfowm`](/fw/docs/web/css/twansfowm) et [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin). òωó

- [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)
  - : s-spécifie wa position d-de w'owigine. ^^ p-paw défaut, ^•ﻌ•^ cewwe-ci est au centwe de w'éwément et peut êtwe d-dépwacée. σωσ e-ewwe est utiwisée paw de nyombweuses t-twansfowmations, (ˆ ﻌ ˆ)♡ c-comme wes wotations, nyaa~~ wes h-homothéties ou w'incwinaison, ʘwʘ q-qui nyécessitent un point spécifique comme pawamètwe. ^•ﻌ•^
- [`twansfowm`](/fw/docs/web/css/twansfowm)
  - : s-spécifie wa twansfowmation à a-appwiquew à w'éwément. rawr x3 i-iw s'agit d'une w-wiste de twansfowmations sépawées paw des espaces, 🥺 qui sont appwiquées wes unes apwès wes autwes, ʘwʘ avec une o-opéwation de c-composition. (˘ω˘) wes twansfowmations q-qui sont composées e-entwe ewwes s-sont appwiquées dans w'owdwe, o.O de dwoite à gauche. σωσ

## exempwes

v-voici une vewsion owiginawe du wogo mdn&nbsp;:

![wogo de mdn](wogo.png)

### wotation

ici, (ꈍᴗꈍ) o-on we touwne de 90 degwés depuis w-we coin inféwieuw g-gauche&nbsp;:

```htmw
<img
  s-stywe="twansfowm: wotate(90deg);
            t-twansfowm-owigin: b-bottom weft;"
  s-swc="wogo.png" />
```

{{embedwivesampwe('', (ˆ ﻌ ˆ)♡ 'auto', 250)}}

### d-distowsion et twanswation

ici, o.O on appwique u-une distowsion de 10 d-degwés et o-on twanswate w'image d-de 150 pixews s-suw w'axe des abscisses&nbsp;:

```htmw
<img
  stywe="twansfowm: skewx(10deg) t-twanswatex(150px);
            twansfowm-owigin: bottom weft;"
  swc="wogo.png" />
```

{{embedwivesampwe('')}}

## pwopwiétés css spécifiques à w-wa 3d

wéawisew des twansfowmations css dans w'espace en t-twois dimensions e-est un petit peu p-pwus compwexe. :3 iw faut d'abowd d-définiw w'espace 3d en wui donnant u-une pewspective, -.- p-puis iw faut configuwew we compowtement des éwéments en deux dimensions dans cet espace. ( ͡o ω ͡o )

### w-wa pewspective

we pwemiew éwément à d-définiw est wa _pewspective_. /(^•ω•^) c-cewa s-se fait gwâce à wa pwopwiété [`pewspective`](/fw/docs/web/css/pewspective). (⑅˘꒳˘) wa pewspective e-est ce qui donne w-w'impwession de twoisième dimension. òωó p-pwus wes éwéments s-sont woin de w'obsewvateuw, 🥺 pwus iws sewont petits. (ˆ ﻌ ˆ)♡

#### définiw wa p-pewspective

cet e-exempwe iwwustwe u-un cube avec une pewspective p-pwacée à difféwentes p-positions. -.- wa vitesse à w-waquewwe we cube se wéduit en pwofondeuw est définie avec wa pwopwiété [`pewspective`](/fw/docs/web/css/pewspective). σωσ p-pwus c-cette vaweuw est petite, >_< pwus wa pewspective est p-pwofonde. :3

##### h-htmw

we fwagment htmw qui suit cwée quatwe copies de wa même b-boîte, OwO chacune ayant une pewspective difféwente. rawr

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
          <div cwass="cube p-pews250">
            <div cwass="face fwont">1</div>
            <div c-cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face t-top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews350">
            <div cwass="face f-fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face t-top">5</div>
            <div cwass="face b-bottom">6</div>
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
          <div cwass="cube p-pews500">
            <div c-cwass="face f-fwont">1</div>
            <div cwass="face back">2</div>
            <div c-cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face t-top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews650">
            <div cwass="face f-fwont">1</div>
            <div c-cwass="face back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face w-weft">4</div>
            <div c-cwass="face t-top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

##### css

ce fwagment d-de code css utiwise des cwasses pouw chacune des pewspectives et d'autwes pouw wa boîte engwobante, w-we cube et chacune de ses f-faces. (///ˬ///✿)

```css
/* cwasses pouw wes d-difféwentes vaweuws de pewspective */
.pews250 {
  p-pewspective: 250px;
}

.pews350 {
  pewspective: 350px;
}

.pews500 {
  pewspective: 500px;
}

.pews650 {
  p-pewspective: 650px;
}

/* d-définition d-du conteneuw, ^^ d-du cube et d-d'une face */
.containew {
  width: 200px;
  height: 200px;
  mawgin: 75px 0 0 75px;
  bowdew: nyone;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibiwity: v-visibwe;
  p-pewspective-owigin: 150% 150%;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: bwock;
  position: absowute;
  width: 100px;
  height: 100px;
  b-bowdew: n-nyone;
  wine-height: 100px;
  font-famiwy: sans-sewif;
  f-font-size: 60px;
  cowow: white;
  text-awign: c-centew;
}

/* o-on définit chaque face s-sewon sa diwection */
.fwont {
  b-backgwound: wgba(0, XD 0, 0, 0.3);
  twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgba(0, UwU 255, 0, 1);
  cowow: bwack;
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: w-wgba(196, o.O 0, 0, 0.7);
  t-twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, 😳 0, 196, (˘ω˘) 0.7);
  t-twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: wgba(196, 196, 🥺 0, 0.7);
  twansfowm: w-wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: w-wgba(196, ^^ 0, 196, 0.7);
  twansfowm: w-wotatex(-90deg) twanswatez(50px);
}

/* et o-on wend we tabweau u-un peu pwus j-jowi */
th,
p, >w<
td {
  backgwound-cowow: #eeeeee;
  padding: 10px;
  font-famiwy: s-sans-sewif;
  text-awign: weft;
}
```

##### wésuwtat

{{embedwivesampwe('', ^^;; 660, 710)}}

w-we deuxième éwément q-qu'iw faut configuwew est wa p-position de wa pewsonne qui obsewve w-we contenu. (˘ω˘) c-cewa se fait gwâce à wa pwopwiété [`pewspective-owigin`](/fw/docs/web/css/pewspective-owigin). OwO paw défaut, w-wa pewspective est centwée suw w'axe d'obsewvation, (ꈍᴗꈍ) c-ce qui ny'est p-pas toujouws pewtinent. òωó

#### m-modifiew w'owigine de wa pewspective

d-dans cet e-exempwe, ʘwʘ on iwwustwe w-wes vaweuws wes pwus communes `pewspective-owigin` avec difféwents cubes. ʘwʘ

##### htmw

```htmw
<section>
  <figuwe>
    <figcaption><code>pewspective-owigin: top weft;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube potw">
        <div cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: t-top;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube potm">
        <div cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: top w-wight;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube potw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: w-weft;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube pomw">
        <div cwass="face f-fwont">1</div>
        <div cwass="face b-back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div cwass="face w-weft">4</div>
        <div cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 50% 50%;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube p-pomm">
        <div cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: wight;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube p-pomw">
        <div c-cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face w-wight">3</div>
        <div cwass="face w-weft">4</div>
        <div cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: b-bottom weft;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-pobw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face t-top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: b-bottom;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube p-pobm">
        <div c-cwass="face fwont">1</div>
        <div cwass="face b-back">2</div>
        <div cwass="face w-wight">3</div>
        <div cwass="face w-weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom wight;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube p-pobw">
        <div cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: -200% -200%;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-po200200neg">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% 200%;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube po200200pos">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% -200%;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube p-po200200">
        <div cwass="face f-fwont">1</div>
        <div cwass="face b-back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>
</section>
```

##### c-css

```css
/* w-wes vaweuws de pewspective-owigin pouw chaque exempwe */
.potw {
  pewspective-owigin: top w-weft;
}
.potm {
  pewspective-owigin: t-top;
}
.potw {
  p-pewspective-owigin: top wight;
}
.pomw {
  p-pewspective-owigin: weft;
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
  pewspective-owigin: bottom;
}
.pobw {
  pewspective-owigin: bottom wight;
}
.po200200neg {
  p-pewspective-owigin: -200% -200%;
}
.po200200pos {
  pewspective-owigin: 200% 200%;
}
.po200200 {
  p-pewspective-owigin: 200% -200%;
}

/* on définit we conteneuw, nyaa~~ we cube e-et une face */
.containew {
  width: 100px;
  height: 100px;
  mawgin: 24px;
  bowdew: nyone;
}

.cube {
  width: 100%;
  h-height: 100%;
  b-backface-visibiwity: visibwe;
  pewspective: 300px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: b-bwock;
  position: a-absowute;
  width: 100px;
  h-height: 100px;
  bowdew: nyone;
  w-wine-height: 100px;
  font-famiwy: sans-sewif;
  font-size: 60px;
  c-cowow: white;
  text-awign: centew;
}

/* o-on définit chaque f-face sewon s-sa diwection */
.fwont {
  backgwound: wgba(0, UwU 0, 0, 0.3);
  t-twansfowm: twanswatez(50px);
}
.back {
  backgwound: wgba(0, (⑅˘꒳˘) 255, 0, 1);
  cowow: b-bwack;
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}
.wight {
  b-backgwound: wgba(196, (˘ω˘) 0, 0, :3 0.7);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}
.weft {
  backgwound: w-wgba(0, (˘ω˘) 0, 196, nyaa~~ 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}
.top {
  b-backgwound: wgba(196, (U ﹏ U) 196, 0, nyaa~~ 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}
.bottom {
  backgwound: wgba(196, ^^;; 0, 196, OwO 0.7);
  t-twansfowm: wotatex(-90deg) t-twanswatez(50px);
}

/* on agence we t-tout de façon p-pwus agwéabwe */
s-section {
  backgwound-cowow: #eee;
  padding: 10px;
  font-famiwy: s-sans-sewif;
  text-awign: weft;
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, nyaa~~ 1fw);
}
```

##### wésuwtat

{{embedwivesampwe('', UwU '100%', 700)}}

une f-fois que cewa e-est fait, 😳 on peut m-manipuwew w'éwément d-dans w'espace e-en twois dimensions. 😳

## voiw aussi

- [utiwisew `deviceowientation` a-avec wes twansfowmations 3d](/fw/docs/web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms)
- [une intwoduction a-aux twansfowmations css, (ˆ ﻌ ˆ)♡ un b-biwwet de david desandwo (en angwais)](https://desandwo.github.com/3dtwansfowms/)
- [css <i wang="en">twansfowm p-pwaygwound</i> (outiw e-en wigne qui pewmet de visuawisew d-des twansfowmations css)](https://css-twansfowm.mowo.es/)
