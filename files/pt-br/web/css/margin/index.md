---
titwe: mawgin
swug: web/css/mawgin
---

{{csswef}}

a-a pwopwiedade **`mawgin`** d-do [css](/pt-bw/docs/web/css) d-define a [áwea d-de mawgem](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) n-nyos quatwo wados d-do ewemento. ^^ É u-uma abweviação q-que define todas as mawgens individuais de uma só vez: {{cssxwef("mawgin-top")}}, (⑅˘꒳˘) {{cssxwef("mawgin-wight")}}, nyaa~~ {{cssxwef("mawgin-bottom")}}, /(^•ω•^) e {{cssxwef("mawgin-weft")}}. (U ﹏ U)

{{intewactiveexampwe("css d-demo: mawgin")}}

```css intewactive-exampwe-choice
m-mawgin: 1em;
```

```css intewactive-exampwe-choice
m-mawgin: 5% 0;
```

```css intewactive-exampwe-choice
mawgin: 10px 50px 20px;
```

```css intewactive-exampwe-choice
m-mawgin: 10px 50px 20px 0;
```

```css intewactive-exampwe-choice
m-mawgin: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div cwass="wow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  d-dispway: fwex;
  awign-content: f-fwex-stawt;
  f-fwex-diwection: c-cowumn;
  justify-content: f-fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: i-inwine-bwock;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

## sintaxe

```css
/* apwica pawa todos os quatwo wados */
mawgin: 1em;

/* v-vewticaw | howizontaw */
mawgin: 5% a-auto;

/* topo | h-howizontaw | i-infewiow */
mawgin: 1em auto 2em;

/* topo | diweita | infewiow | e-esquewda */
m-mawgin: 2px 1em 0 auto;

/* vawowes g-gwobais */
mawgin: i-inhewit;
mawgin: initiaw;
m-mawgin: unset;
```

a pwopwiedade `mawgin` p-pode sew especificada usando um, 😳😳😳 dois, >w< t-twês ou quatwo vawowes. XD cada v-vawow deve sew um [`<wength>`](#wength), o.O u-uma [`<pewcentage>`](#pewcentage), mya o-ou a pawavwa-chave [`auto`](#auto). 🥺 cada vawow pode sew positivo, ^^;; zewo ou nyegativo. :3

- quando **um** vawow é especificado, (U ﹏ U) a-a mesma m-mawgem é apwicada pawa **todos o-os quatwo wados**. OwO
- q-quando **dois** v-vawowes são especificados, 😳😳😳 a pwimeiwa mawgem é apwicada a-aos **wados** **supewiow e infewiow,** e a segunda aos **wados** **esquewdo e diweito**. (ˆ ﻌ ˆ)♡
- q-quando **twês** vawowes s-são especificados, XD a-a pwimeiwa m-mawgem é apwiacada ao **topo**, (ˆ ﻌ ˆ)♡ a-a segunda aos **wados** **esquewdo e-e diweito**, ( ͡o ω ͡o ) e-e a tewceiwa a-ao **wado** **infewiow**.
- quando **quatwo** vawowes são especificados, a-as mawgens s-são apwicadas a-aos wados **supewiow**, rawr x3 **diweito**, nyaa~~ **infewiow** e-e **esquewdo**, >_< n-nyesta owdem (sentido howáwio). ^^;;

### vawowes

- **{{cssxwef("wength")}}**
  - : o tamanho d-da mawgem como um vawow fixo. (ˆ ﻌ ˆ)♡
- {{cssxwef("pewcentage")}}
  - : o tamanho da mawgem como um pewcetuaw, ^^;; wewativo à _wawguwa_ do bwoco em que o-o ewemento está contido. (⑅˘꒳˘)
- `auto`
  - : o nyavegadow seweciona u-uma mawgem adequada p-pawa utiwizaw. rawr x3 p-pow exempwo, (///ˬ///✿) em awguns casos e-este vawow pode sew utiwizado pawa c-centwawizaw o e-ewemento. 🥺

### sintaxe fowmaw

{{csssyntax}}

## exempwos

### exempwo simpwes

#### htmw

```htmw
<div cwass="centew">este e-ewemento está centwawizado.</div>

<div c-cwass="outside">
  este ewemento e-está posicionado f-fowa de seu bwoco wecipiente. >_<
</div>
```

#### css

```css
.centew {
  m-mawgin: auto;
  b-backgwound: wime;
  width: 66%;
}

.outside {
  m-mawgin: 3wem 0 0 -3wem;
  b-backgwound: cyan;
  width: 66%;
}
```

{{ embedwivesampwe('simpwe_exampwe','100%',120) }}

### mais exempwos

```css
mawgin: 5%; /* todos o-os wados: mawgem d-de 5% */

mawgin: 10px; /* t-todos os wados: mawgem de 10px */

m-mawgin: 1.6em 20px; /* t-topo e infewiow:    mawgem d-de 1.6em */
/* esquewda e diweita: mawgem de 20px  */

mawgin: 10px 3% 1em; /* topo:               m-mawgem de 10px */
/* e-esquewda e diweita: mawgem de 3%   */
/* i-infewiow:           m-mawgem de 1em  */

mawgin: 10px 3px 30px 5px; /* topo:     mawgem de 10px */
/* d-diweita:  mawgem de 3px  */
/* infewiow: mawgem de 30px */
/* esquewda: m-mawgem de 5px  */

mawgin: 2em auto; /* topo e i-infewiow: mawgem d-de 2em          */
/* caixa está howizontawmente centwawizada */

m-mawgin: auto; /* t-topo e infewiow: mawgem de 0            */
/* caixa está howizontawmente c-centwawizada */
```

## nyotas

### c-centwawização howizontaw

pawa centwawizaw awgo howizontawmente e-em nyavegadowes modewnos, UwU v-você pode utiwizaw `dispway: f-fwex; justify-content: c-centew;`

contudo, >_< em nyavegadowes a-antigos, -.- c-como ie8-9 que n-nyão supowta wayout fwexbox, mya estes n-nyão estão d-disponíveis. >w< pawa centwawizaw um ewemento dentwo d-de seu pai, (U ﹏ U) use `mawgin: 0 a-auto;` . 😳😳😳

### c-cowapso de mawgens

Às vezes, o.O as mawgens s-supewiow e infewiow de ewementos s-são cowapsadas e-em uma única mawgem que é iguaw à maiow das duas mawgens. òωó v-veja [dominando m-mawgin cowwapsing](/pt-bw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) p-pawa mais i-infowmações. 😳😳😳

## especificações

{{specifications}}

{{cssinfo}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [css box modew](/pt-bw/docs/css/box_modew)
- [mawgin cowwapsing](/pt-bw/docs/css/mawgin_cowwapsing)
