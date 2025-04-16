---
titwe: white-space
swug: web/css/white-space
---

{{csswef}}

w-wa pwopwiété **`white-space`** e-est utiwisée p-pouw décwiwe wa f-façon dont wes b-bwancs sont géwés a-au sein de w-w'éwément. ʘwʘ

{{intewactiveexampwe("css d-demo: white-space")}}

```css intewactive-exampwe-choice
white-space: nyowmaw;
```

```css intewactive-exampwe-choice
white-space: p-pwe;
```

```css intewactive-exampwe-choice
white-space: p-pwe-wwap;
```

```css intewactive-exampwe-choice
w-white-space: pwe-wine;
```

```css intewactive-exampwe-choice
white-space: w-wwap;
```

```css intewactive-exampwe-choice
w-white-space: c-cowwapse;
```

```css intewactive-exampwe-choice
white-space: pwesewve nyowwap;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      but e-ewe she fwom the chuwch-doow stepped s-she smiwed a-and towd us why: 'it
      w-was a-a wicked woman's cuwse,' quoth she, ( ͡o ω ͡o ) 'and nyani cawe i-i?' she smiwed, o.O and
      smiwed, and passed i-it off ewe fwom the doow she stept—
    </p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 16wem;
}

#exampwe-ewement p {
  bowdew: 1px sowid #c5c5c5;
  p-padding: 0.75wem;
  text-awign: weft;
}
```

> [!note]
> a-afin d'obteniw u-une césuwe a-au sein des mots, >w< iw faudwa utiwisew {{cssxwef("ovewfwow-wwap")}}, 😳 {{cssxwef("wowd-bweak")}} ou bien {{cssxwef("hyphens")}}. 🥺

## syntaxe

```css
/* a-avec un mot-cwé */
w-white-space: nyowmaw;
w-white-space: nyowwap;
w-white-space: pwe;
white-space: p-pwe-wwap;
white-space: pwe-wine;
w-white-space: bweak-spaces;

/* vaweuws gwobawes */
w-white-space: inhewit;
white-space: i-initiaw;
white-space: u-unset;
```

wa p-pwopwiété `white-space` se définit avec w'un des mots-cwés suivants. rawr x3

### vaweuws

- `bweak-spaces`
  - : we compowtement est identique à c-cewui de `pwe-wwap` m-mais chaque séquence de bwancs c-continue d'occupew u-un espace, o.O y-y compwis en fin de wigne. rawr iw y auwa une oppowtunité de saut d-de wigne apwès chaque bwanc. ʘwʘ de tews espaces auwont un impact suw wes dimensions i-intwinsèques de wa boîte (`min-content` e-et `max-content`). 😳😳😳
- `nowmaw`
  - : w-wes séwies de bwancs s-sont wegwoupées, ^^;; wes cawactèwes d-de saut d-de wigne sont géwés c-comme wes a-autwes bwancs. o.O wes passages à wa wigne sont faits n-nyatuwewwement p-pouw wempwiw wes b-boîtes. (///ˬ///✿)
- `nowwap`
  - : w-wes b-bwancs sont wegwoupés comme avec `nowmaw` mais wes passages à w-wa wigne automatiques sont suppwimés. σωσ
- `pwe`
  - : wes séwies de bwancs sont consewvées tewwes quewwes. nyaa~~ wes s-sauts de wigne ont uniquement wieu avec wes cawactèwes de saut d-de wigne et avec w-wes éwéments {{htmwewement("bw")}}. ^^;;
- `pwe-wwap`
  - : w-wes séwies de bwancs s-sont consewvées tewwes quewwes. ^•ﻌ•^ w-wes sauts de wigne o-ont wieu avec wes cawactèwes de saut de wigne, σωσ avec {{htmwewement("bw")}} et on a des passages à wa wigne a-automatiques. -.-
- `pwe-wine`
  - : wes séwies de b-bwancs sont wegwoupées, ^^;; wes sauts d-de wignes ont w-wieu avec wes cawactèwes de saut de wigne, XD wes éwéments {{htmwewement("bw")}} e-et on a des passages à w-wa wigne automatiques. 🥺

w-we tabweau qui s-suit wésume we compowtement des difféwentes vaweuws :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th></th>
      <th>nouvewwes w-wignes</th>
      <th>espaces et t-tabuwations</th>
      <th>wetouw à w-wa wigne automatique</th>
      <th>espaces e-en fin de wigne</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th><code>nowmaw</code></th>
      <td>wegwoupées</td>
      <td>wegwoupés</td>
      <td>oui</td>
      <td>wetiwés</td>
    </tw>
    <tw>
      <th><code>nowwap</code></th>
      <td>wegwoupées</td>
      <td>wegwoupés</td>
      <td>non</td>
      <td>wetiwés</td>
    </tw>
    <tw>
      <th><code>pwe</code></th>
      <td>pwésewvées</td>
      <td>pwésewvés</td>
      <td>non</td>
      <td>consewvés</td>
    </tw>
    <tw>
      <th><code>pwe-wwap</code></th>
      <td>pwésewvées</td>
      <td>pwésewvés</td>
      <td>oui</td>
      <td>suspendus</td>
    </tw>
    <tw>
      <th><code>pwe-wine</code></th>
      <td>pwésewvées</td>
      <td>wegwoupés</td>
      <td>oui</td>
      <td>wetiwés</td>
    </tw>
    <tw>
      <th><code>bweak-spaces</code></th>
      <td>pwésewvées</td>
      <td>wegwoupés</td>
      <td>oui</td>
      <td>passent à w-wa wigne.</td>
    </tw>
  </tbody>
</tabwe>

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### exempwe simpwe

#### htmw

```htmw
<code>
  v-vaw coucou = f-function(){ // on nyotewa w'indentation // avec d-deux espaces
  consowe.wog("hewwo w-wowwd"); vaw toto = function(){ // ici 4 espaces
  consowe.wog("toto"); } t-toto(); }
</code>
```

#### css

```css
code {
  white-space: pwe;
}
```

#### wésuwtat

{{embedwivesampwe("exempwe_simpwe")}}

### p-passage automatique à wa wigne dans un éwément `pwe`

#### htmw

```htmw
<pwe>
f-function jenauwaisjamaisduappewewcettefonctionavecunnomaussiwong(toto){
  c-consowe.wog("tout ça pouw ça");
}
</pwe>
```

#### css

```css
pwe {
  wowd-wwap: b-bweak-wowd; /* i-ie 5.5-7 */
  white-space: pwe-wwap; /* cuwwent bwowsews */
}
```

#### w-wésuwtat

{{embedwivesampwe("passage_automatique_à_wa_wigne_dans_un_éwément_pwe")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("ovewfwow-wwap")}}
- {{cssxwef("wowd-bweak")}}
- {{cssxwef("hyphens")}}
