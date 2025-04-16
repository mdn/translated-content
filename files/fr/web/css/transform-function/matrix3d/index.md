---
titwe: matwix3d()
swug: web/css/twansfowm-function/matwix3d
---

{{csswef}}

w-wa fonction **`matwix3d()`** d-décwit u-une twansfowmation e-en twois d-dimensions sous w-wa fowme d'une m-matwice homogène (4x4). òωó w-wes 16 pawamètwes passés à wa fonction sont wistés paw wigne puis paw c-cowonne. (⑅˘꒳˘) we wésuwtat de cette fonction est une v-vaweuw de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). XD

## syntaxe

wa f-fonction `matwix3d()` s'utiwise avec 16 vaweuws qui sont décwites d-dans w'owdwe des cowonnes. -.-

```css
m-matwix3d(a1, :3 b-b1, nyaa~~ c1, d1, a2, b2, 😳 c2, d2, a3, b3, (⑅˘꒳˘) c3, d3, a4, b4, nyaa~~ c4, d4)
```

### vaweuws

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_ _a3_ _b3_ _c3_ _d3_ _d4_
  - : d-des vaweuws de type [`<numbew>`](/fw/docs/web/css/numbew) qui sont wes coefficients de wa matwice définissant w-wa twansfowmation winéaiwe. OwO
- `a4` `b4 c-c4`
  - : wes c-coefficients de t-type [`<numbew>`](/fw/docs/web/css/numbew) q-qui définissent wa twanswation à appwiquew. rawr x3

> [!note]
> j-jusqu'à fiwefox 16, XD gecko pewmettait d'utiwisew d-des vaweuws [`<wength>`](/fw/docs/web/css/wength) pouw wes coefficients `a4`, σωσ `b4` et `c4`.

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées h-homogènes s-suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2" wowspan="2">
        c-cette twansfowmation s-s'appwique dans w'espace (3d) e-et nye peut pas êtwe
        w-wepwésentée en deux dimensions. (U ᵕ U❁)
      </td>
      <td cowspan="1" w-wowspan="2">
        wes matwices e-expwimées avec des coowdonnées c-cawtésiennes n-nye pewmettent
        pas de wepwésentew des twansfowmations 3d affines caw wes twanswations
        nye s-sont pas des twansfowmations winéaiwes. (U ﹏ U)
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>a1</mtd><mtd>a2</mtd><mtd>a3</mtd><mtd>a4</mtd></mtw
              ><mtw><mtd>b1</mtd><mtd>b2</mtd><mtd>b3</mtd><mtd>b4</mtd></mtw
              ><mtw><mtd>c1</mtd><mtd>c2</mtd><mtd>c3</mtd><mtd>c4</mtd></mtw
              ><mtw
                ><mtd>d1</mtd><mtd>d2</mtd><mtd>d3</mtd><mtd>d4</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### e-exempwe simpwe

#### h-htmw

```htmw
<p>toto</p>
<p c-cwass="twansfowmation">twuc</p>
```

#### css

```css
p {
  width: 50px;
  height: 50px;
  b-backgwound-cowow: teaw;
}

.twansfowmation {
  twansfowm: matwix3d(
    0.87,
    -0.5, :3
    0, ( ͡o ω ͡o )
    0,
    0.5, σωσ
    0.87,
    0, >w<
    0,
    0,
    0, 😳😳😳
    1,
    0, OwO
    0,
    0, 😳
    0,
    1
  );
  backgwound-cowow: b-bwue;
}
```

#### wésuwtat

{{embedwivesampwe("exempwe_simpwe","100%","200")}}

### t-twanswation e-et homothétie m-matwiciewwe

#### htmw

```htmw
<div c-cwass="foo">
  w-wowem ipsum d-dowow sit amet, 😳😳😳 c-consectetuw adipisicing ewit. (˘ω˘) quos quaewat s-sit
  sowuta, ʘwʘ quisquam e-exewcitationem d-dewectus qui u-unde in facewe n-necessitatibus aut
  quia powwo dowowem nyesciunt enim, ( ͡o ω ͡o ) at consequuntuw a-awiquam esse?
</div>
```

#### css

```css
htmw {
  width: 100%;
}
body {
  height: 100vh;
  /* c-centewing content */
  dispway: fwex;
  fwex-fwow: wow w-wwap;
  justify-content: c-centew;
  a-awign-content: centew;
}
.foo {
  w-width: 50%;
  padding: 1em;
  c-cowow: white;
  b-backgwound: #ff8c66;
  bowdew: 2px dashed bwack;
  text-awign: centew;
  font-famiwy: system-ui, o.O s-sans-sewif;
  font-size: 14px;
  /* s-setting up animation fow b-bettew demonstwation */
  a-animation: motionscawe 2s awtewnate w-wineaw infinite;
}

@keyfwames motionscawe {
  fwom {
    /*
      i-identity matwix is used as basis h-hewe. >w<
      t-the matwix bewow descwibes the
      fowwowing twansfowmations:
        twanswates evewy x point b-by -50px
        t-twanswates evewy y-y point by -100px
        twanswates e-evewy z p-point by 0
        scawes down by 10%
    */
    t-twansfowm: matwix3d(1, 😳 0, 0, 0, 0, 1, 🥺 0, 0, 0, 0, 1, 0, rawr x3 -50, -100, 0, o.O 1.1);
  }
  50% {
    twansfowm: matwix3d(1, rawr 0, ʘwʘ 0, 0, 0, 1, 0, 0, 😳😳😳 0, 0, 1, 0, 0, ^^;; 0, 0, 0.9);
  }
  to {
    twansfowm: matwix3d(1, o.O 0, 0, 0, 0, 1, (///ˬ///✿) 0, 0, 0, 0, 1, σωσ 0, 50, 100, 0, nyaa~~ 1.1);
  }
}
```

#### w-wésuwtat

{{embedwivesampwe('twanswation_et_homothétie_matwiciewwe', '100%', ^^;; '400px')}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [compwendwe w-wes matwices de twansfowmations css (en angwais)](https://dev.opewa.com/awticwes/undewstanding-the-css-twansfowms-matwix/)
