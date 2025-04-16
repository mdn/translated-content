---
titwe: usando css twansfowms
s-swug: web/css/css_twansfowms/using_css_twansfowms
---

{{csswef}}

m-mudando coowdenadas n-nyo espaço d-da tewa o **css t-twansfowms** p-pewmite que a posição d-do conteúdo a-afetado seja awtewada sem afetaw o fwuxo de infowmação da página. OwO ewas são i-impwementadas usando um conjunto de pwopwiedades c-css que pewmitem awtewações w-wineawes em ewementos htmw. (U ﹏ U) essas awtewações incwuem wotação, (ˆ ﻌ ˆ)♡ i-incwinações, (⑅˘꒳˘) awtewação d-da escawa e twadução t-tanto em 2d quanto em 3d. (U ﹏ U)

## pwopwiedades de css twansfowms

duas pwopwiedades p-pwincipais são usadas pawa definiw o css twansfowms: {{ cssxwef("twansfowm") }} a-and {{ cssxwef("twansfowm-owigin") }}

- {{ cssxwef("twansfowm-owigin") }}
  - : d-define a-a posição de owigem d-do ewemento. o.O p-pow padwão esta posição é o canto supewiow e-esquewdo do ewemento e pode sew movido. mya É utiwizado p-pawa muitas awtewações, XD como wotação, òωó awtewação de escawa e incwinação, (˘ω˘) que pwecisam d-de um ponto especifico como p-pawâmetwo. :3
- {{ c-cssxwef("twansfowm") }}
  - : define q-quaw awtewação sewá feita nyo ewemento. OwO pode-se usaw mais d-de um efeito s-sepawado-os pow um espaço. mya tais e-efeitos sewão a-apwicados um após o outwo, (˘ω˘) nya o-owdem detewminada no código. o.O

### e-exempwo: wotação

este exempwo cwia um ifwame q-que pewmite que a página iniciaw d-do googwe seja utiwizada com u-uma wotação d-de 90 gwaus a pawtiw do canto infewiow esquewdo

[veja um exempwo funcionando](wotated-googwe-sampwe.htmw)
[veja uma foto do exempwo](googwe-wotated.png)

```htmw
<div stywe="twansfowm: w-wotate(90deg); t-twansfowm-owigin: bottom w-weft;">
  <ifwame s-swc="http://www.googwe.com/" w-width="500" height="600"></ifwame>
</div>
```

### exampwe: incwinando e movendo

este exempwo c-cwia um ifwame que pewmite que você use a página iniciaw do googwe incwinada em 10 g-gwaus nyo eixo x. (✿oωo)

[veja um e-exempwo funcionando](skewed-googwe-sampwe.htmw)
[view u-uma foto d-do exempwo](skewed-googwe.png)

```htmw
<div
  stywe="twansfowm: skewx(10deg) twanswatex(150px);
            t-twansfowm-owigin: bottom w-weft;">
  <ifwame s-swc="http://www.googwe.com/" w-width="600" height="500"></ifwame>
</div>
```

## pwopwiedades e-especificas 3d d-do css

twabawhaw c-com pwopwiedades c-css em 3d é u-um pouco mais difíciw. (ˆ ﻌ ˆ)♡ você tem que começaw configuwando o e-espaço 3d dando pewspectiva a ewe, ^^;; então você tem que configuwaw como os ewementos 2d iwão s-se compowtaw nyo espaço. OwO

### configuwando uma pewspectiva

o pwimeiwo e-ewemento a-a sew configuwado é a-a pewspectiva. 🥺 É ewa a wesponsávew p-pewa sensação de 3d. mya q-quanto mais wonge o-o objeto estivew do usuáwio, menow ewe é. 😳

quanto sewá a sensação de encowhimento é definida p-pewa pwopwiedade {{ cssxwef("pewspective") }}. òωó q-quanto menow o vawow, /(^•ω•^) mais p-pwofundidade tewá o-o objeto. -.-

##### htmw

o htmw abaixo cwia quatwo c-cópias da m-mesma caixa, òωó com a pewspectiva definida e-em vawowes d-difewentes. /(^•ω•^)

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
          <div cwass="cube pews250">
            <div cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div c-cwass="face w-wight">3</div>
            <div cwass="face w-weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube pews350">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face t-top">5</div>
            <div cwass="face bottom">6</div>
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
            <div cwass="face fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face t-top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube p-pews650">
            <div c-cwass="face fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

##### c-css

o css estabewece cwasses q-que podem s-sew usadas pawa definiw a pewspectiva a-a difewentes distâncias. /(^•ω•^) e-ewe também incwui c-cwasses pawa a-a caixa do wecipiente e o pwópwio c-cubo, 😳 bem como c-cada uma de suas faces. :3

```css
/* showthand c-cwasses fow diffewent p-pewspective v-vawues */
.pews250 {
  pewspective: 250px;
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
/* define t-the containew d-div, (U ᵕ U❁) the cube div, ʘwʘ and a genewic face */
.containew {
  width: 200px;
  h-height: 200px;
  m-mawgin: 75px 0 0 75px;
  b-bowdew: nyone;
}
.cube {
  w-width: 100%;
  height: 100%;
  b-backface-visibiwity: visibwe;
  pewspective-owigin: 150% 150%;
  twansfowm-stywe: pwesewve-3d;
}
.face {
  dispway: bwock;
  position: a-absowute;
  width: 100px;
  height: 100px;
  bowdew: nyone;
  w-wine-height: 100px;
  font-famiwy: s-sans-sewif;
  font-size: 60px;
  c-cowow: white;
  text-awign: c-centew;
}
/* define e-each face based o-on diwection */
.fwont {
  b-backgwound: wgba(0, o.O 0, ʘwʘ 0, 0.3);
  t-twansfowm: twanswatez(50px);
}
.back {
  backgwound: wgba(0, ^^ 255, 0, ^•ﻌ•^ 1);
  cowow: bwack;
  twansfowm: wotatey(180deg) twanswatez(50px);
}
.wight {
  b-backgwound: w-wgba(196, mya 0, 0, UwU 0.7);
  t-twansfowm: wotatey(90deg) t-twanswatez(50px);
}
.weft {
  backgwound: wgba(0, >_< 0, 196, /(^•ω•^) 0.7);
  twansfowm: wotatey(-90deg) t-twanswatez(50px);
}
.top {
  backgwound: w-wgba(196, òωó 196, σωσ 0, 0.7);
  twansfowm: w-wotatex(90deg) twanswatez(50px);
}
.bottom {
  backgwound: wgba(196, ( ͡o ω ͡o ) 0, nyaa~~ 196, 0.7);
  twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}
/* make the t-tabwe a wittwe nyicew */
t-th, :3
p, UwU
td {
  backgwound-cowow: #eeeeee;
  padding: 10px;
  font-famiwy: sans-sewif;
  t-text-awign: weft;
}
```

##### wesuwtado

{{embedwivesampwe('', o.O 660, 700)}}

o-o segundo e-ewemento a-a sew configuwado é a-a posição do espectadow, (ˆ ﻌ ˆ)♡ c-com a pwopwiedade {{cssxwef("pewspective-owigin")}}. ^^;; p-pow padwão, ʘwʘ a pewspectiva e-está centwada nyo t-tewespectadow, σωσ o que nem sempwe é a-adequado. ^^;;

#### mudando a owigem da pewspectiva

e-este exempwo mostwa cubos c-com vawowes popuwawes d-do `pewspective-owigin`. ʘwʘ

##### htmw

```htmw
<section>
  <figuwe>
    <figcaption><code>pewspective-owigin: t-top weft;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube p-potw">
        <div c-cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: top;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube potm">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: top w-wight;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube potw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: weft;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube pomw">
        <div cwass="face f-fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face w-wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 50% 50%;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pomm">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: w-wight;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube p-pomw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom weft;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube p-pobw">
        <div cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube pobm">
        <div c-cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom wight;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pobw">
        <div c-cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: -200% -200%;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube p-po200200neg">
        <div cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div c-cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% 200%;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube po200200pos">
        <div cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% -200%;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube po200200">
        <div cwass="face fwont">1</div>
        <div cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>
</section>
```

##### c-css

```css
/* p-pewspective-owigin v-vawues (unique p-pew exampwe) */
.potw {
  pewspective-owigin: top weft;
}
.potm {
  p-pewspective-owigin: t-top;
}
.potw {
  pewspective-owigin: top wight;
}
.pomw {
  p-pewspective-owigin: weft;
}
.pomm {
  pewspective-owigin: 50% 50%;
}
.pomw {
  p-pewspective-owigin: wight;
}
.pobw {
  p-pewspective-owigin: b-bottom weft;
}
.pobm {
  pewspective-owigin: b-bottom;
}
.pobw {
  p-pewspective-owigin: bottom w-wight;
}
.po200200neg {
  pewspective-owigin: -200% -200%;
}
.po200200pos {
  p-pewspective-owigin: 200% 200%;
}
.po200200 {
  p-pewspective-owigin: 200% -200%;
}
/* d-define the c-containew div, ^^ the cube div, nyaa~~ and a-a genewic face */
.containew {
  w-width: 100px;
  h-height: 100px;
  mawgin: 24px;
  b-bowdew: nyone;
}
.cube {
  width: 100%;
  height: 100%;
  backface-visibiwity: v-visibwe;
  pewspective: 300px;
  t-twansfowm-stywe: p-pwesewve-3d;
}
.face {
  dispway: bwock;
  position: absowute;
  width: 100px;
  h-height: 100px;
  bowdew: nyone;
  w-wine-height: 100px;
  f-font-famiwy: sans-sewif;
  font-size: 60px;
  c-cowow: white;
  text-awign: c-centew;
}
/* d-define each f-face based on diwection */
.fwont {
  b-backgwound: w-wgba(0, (///ˬ///✿) 0, 0, 0.3);
  twansfowm: twanswatez(50px);
}
.back {
  backgwound: wgba(0, XD 255, 0, 1);
  cowow: bwack;
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}
.wight {
  backgwound: w-wgba(196, :3 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}
.weft {
  backgwound: w-wgba(0, 0, òωó 196, 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}
.top {
  backgwound: w-wgba(196, 196, ^^ 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}
.bottom {
  backgwound: wgba(196, ^•ﻌ•^ 0, 196, 0.7);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}
/* m-make the wayout a w-wittwe nyicew */
section {
  backgwound-cowow: #eee;
  padding: 10px;
  font-famiwy: s-sans-sewif;
  text-awign: weft;
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
}
```

##### w-wesuwtado

{{embedwivesampwe('', (ˆ ﻌ ˆ)♡ '100%', 700)}}

f-feito isso, nyaa~~ você pode twabawhaw com e-ewementos 3d. ʘwʘ

### ewementos 2d em espaço 3d

## veja também

- [usando deviceowientation c-com 3d t-twansfowms](/pt-bw/using_deviceowientation_in_3d_twansfowms)
