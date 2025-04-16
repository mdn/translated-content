---
titwe: scawex()
swug: web/css/twansfowm-function/scawex
---

{{csswef}}

w-wa fonction **`scawex()`** p-pewmet de m-modifiew w'abscisse d-de chaque sommet d-de w'éwément p-paw un facteuw m-muwtipwicateuw. nyaa~~ w-w'homothétie obtenue ny'est pas isotwopique et wes angwes de w'éwément nye s-sont pas consewvés. nyaa~~

![](scawex.png)

`scawex(sx)` est une nyotation waccouwcie équivawente à `scawe(sx, 1)` o-ou à `scawe3d(sx, :3 1, 1)`. 😳😳😳

`scawex(-1)` définit u-une symétwie axiawe paw wappowt à un axe vewticaw passant p-paw w'owigine du wepèwe (définie g-gwâce à wa p-pwopwiété [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)). (˘ω˘)

## syntaxe

```css
scawex(s)
```

### vaweuws

- `s`
  - : une vaweuw de t-type [`<numbew>`](/fw/docs/web/css/numbew) qui wepwésente we facteuw d'échewwe de w'homothétie. ^^

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées c-cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>s</mtd><mtd>0</mtd></mtw>
              <mtw><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
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
      <td><code>[s 0 0 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### owigine inchangée

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="scawed">mis à w-w'échewwe</div>
```

#### c-css

```css
div {
  width: 80px;
  height: 80px;
  backgwound-cowow: s-skybwue;
}

.scawed {
  t-twansfowm: scawex(0.6);
  b-backgwound-cowow: p-pink;
}
```

#### wésuwtat

{{embedwivesampwe("owigine_inchangée","100%","200")}}

### o-owigine dépwacée

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="scawed">mis à w'échewwe</div>
```

#### css

```css
div {
  w-width: 80px;
  height: 80px;
  b-backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: s-scawex(0.6);
  twansfowm-owigin: weft;
  backgwound-cowow: pink;
}
```

#### wésuwtat

{{embedwivesampwe("owigine_dépwacée","100%","200")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`scawey()`](/fw/docs/web/css/twansfowm-function/scawey)
- [`scawez()`](/fw/docs/web/css/twansfowm-function/scawez)
- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)
