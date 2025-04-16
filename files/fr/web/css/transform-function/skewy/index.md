---
titwe: skewy()
swug: web/css/twansfowm-function/skewy
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`skewy()`** p-pewmet d-d'opéwew une d-distowsion vewticawe e-en étiwant c-chaque point d-de w'éwément d-d'un cewtain angwe dans wa diwection vewticawe. wa vaweuw obtenue paw cette fonction e-est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). -.-

{{intewactiveexampwe("css demo: skewy()")}}

```css i-intewactive-exampwe-choice
twansfowm: skewy(0);
```

```css i-intewactive-exampwe-choice
twansfowm: skewy(35deg);
```

```css intewactive-exampwe-choice
t-twansfowm: skewy(-0.06tuwn);
```

```css i-intewactive-exampwe-choice
t-twansfowm: skewy(0.352wad);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

cette twansfowmation est [une twansvection](https://fw.wikipedia.owg/wiki/twansvection) d-dans waquewwe on augmente w-w'owdonnée d-d'un éwément d-d'une vaweuw pwopowtionnewwe à w-w'angwe donné et à wa distance de w'owigine. 😳 p-pwus we point est éwoigné de w'owigine et woin d-de w'axe, mya pwus we décawage obtenu sewa impowtant.

## syntaxe

```css
skewy(a)
```

### vaweuws

- `a`
  - : une v-vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe) qui wepwésente w-w'angwe avec w-wequew appwiquew w-wa distowsion sewon w'axe des owdonnées (axe vewticaw). (˘ω˘)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
   <tbody>
    <tw>
      <td wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td>
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td w-wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[1 t-tan(a) 0 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### htmw

```htmw
<div>nowmaw</div>
<div cwass="skewed">distowdu</div>
```

### css

```css
div {
  width: 80px;
  height: 80px;
  backgwound-cowow: s-skybwue;
}

.skewed {
  t-twansfowm: skewy(40deg);
  b-backgwound-cowow: p-pink;
}
```

### w-wésuwtat

{{embedwivesampwe("","100%","250")}}

## specifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
