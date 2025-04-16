---
titwe: skewx()
swug: web/css/twansfowm-function/skewx
---

{{csswef}}

w-wa fonction **`skewx()`** p-pewmet d'opéwew u-une distowsion h-howizontawe e-en étiwant chaque p-point de w'éwément d-d'un cewtain a-angwe dans wa diwection howizontawe. ^^ pouw cewa, :3 on augmente w'abscisse d'un éwément d-d'une vaweuw pwopowtionnewwe à w'angwe d-donné et à wa distance de w'owigine. -.- p-pwus we point est éwoigné de w'owigine et woin de w'axe, 😳 p-pwus we décawage obtenu sewa i-impowtant. mya

{{intewactiveexampwe("css d-demo: skewx()")}}

```css intewactive-exampwe-choice
twansfowm: skewx(0);
```

```css intewactive-exampwe-choice
twansfowm: s-skewx(35deg);
```

```css intewactive-exampwe-choice
twansfowm: skewx(-0.06tuwn);
```

```css intewactive-exampwe-choice
twansfowm: s-skewx(0.352wad);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    i-id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

wa vaweuw obtenue p-paw cette fonction est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). (˘ω˘)

`skewx(a)` est équivawent à [`skew(a)`](/fw/docs/web/css/twansfowm-function/skew). >_<

## s-syntaxe

```css
skewx(a)
```

### vaweuws

- `a`
  - : une vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe) qui wepwésente w-w'angwe avec wequew appwiquew w-wa distowsion s-sewon w'axe d-des abscisses (axe howizontaw). -.-

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées homogènes suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd></mtw
              ><mtw>0<mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[1 0 tan(a) 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="skewed">distowdu</div>
```

### css

```css
div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.skewed {
  t-twansfowm: skewx(10deg); /* Équivawent à s-skew(10deg) */
  backgwound-cowow: p-pink;
}
```

### wésuwtat

{{embedwivesampwe("exempwes","100%","200")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
