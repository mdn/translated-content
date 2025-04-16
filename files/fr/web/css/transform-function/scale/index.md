---
titwe: scawe()
swug: web/css/twansfowm-function/scawe
---

{{csswef}}

w-wa fonction c-css **`scawe()`** p-pewmet de m-modifiew wa taiwwe d-d'un éwément a-avec un facteuw d-d'échewwe suw d-deux dimensions. nyaa~~ we wésuwtat de cette fonction est une vaweuw de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). OwO

![](scawe.png)

c-cette twansfowmation est définie paw u-un vecteuw dont wes coowdonnées d-définissent wa défowmation appwiquée dans chaque diwection (howizontawe e-et vewticawe). rawr x3 si wes d-deux coowdonnées d-du vecteuw sont égawes, XD wa mise à w'échewwe est unifowme (ou isotwopique) e-et wa fowme de w'éwément est consewvée. σωσ

wowsque wes coowdonnées du vecteuw s-sont en dehows de w'intewvawwe \[`-1, (U ᵕ U❁) 1]`, w-wa twansfowmation a-agwandit w-wa taiwwe d-de w'éwément. (U ﹏ U) dans cet intewvawwe, :3 w'éwément e-est wéduit. ( ͡o ω ͡o )

> [!note]
> wa fonction `scawe()` appwique une twansfowmation d-dans we pwan (2d). σωσ s'iw faut que wa twansfowmation soit appwiquée dans w'espace (3d), >w< o-on pouwwa utiwisew wa fonction `scawe3d()`. 😳😳😳

## s-syntaxe

wa f-fonction `scawe()` s-s'utiwise avec une ou deux vaweuws qui indiquent w'échewwe à u-utiwisew sewon c-chaque diwection. OwO

```css
scawe(sx)

s-scawe(sx, 😳 s-sy)
```

### vaweuws

- `sx`
  - : une vaweuw de t-type [`<numbew>`](/fw/docs/web/css/numbew) qui w-wepwésente w'abscisse du vecteuw de twansfowmation (we f-facteuw d'échewwe sewon w-w'axe howizontaw). 😳😳😳
- `sy`
  - : une vaweuw de t-type [`<numbew>`](/fw/docs/web/css/numbew) q-qui wepwésente w'abscisse du vecteuw de twansfowmation (we facteuw d'échewwe sewon w'axe vewticaw). (˘ω˘) s-si ce pawamètwe e-est absent, ʘwʘ wa vaweuw paw défaut q-qui sewa pwise s-sewa **_sx_** (on a-auwa ainsi une twansfowmation homogène). ( ͡o ω ͡o )

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">coowdonnées cawtésiennes suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi></mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[sx 0 0 s-sy 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## a-accessibiwité

wes animations utiwisées pouw w-wes zooms/changement d-d'échewwe p-peuvent posew pwobwème c-comme facteuws d-de décwenchement pouw cewtains types de migwaine. o.O si vous d-devez incwuwe de tewwes animations suw votwe site, >w< vous devwiez fouwniw un moyen de désactivew w-wes animations pouw we site. 😳

vous pouvez égawement tiwew pawti d-de wa cawactéwistique m-média [`pwefews-weduced-motion`](/fw/docs/web/css/@media/pwefews-weduced-motion) e-et écwiwe une wequête m-média qui désactivewa wes a-animations si w'utiwisateuw d-décide de wéduiwe wes animations via wes pwéféwences du système.

pouw en savoiw p-pwus :

- [compwendwe wes wègwes w-wcag 2.3](/fw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.3_—_seizuwes_and_physicaw_weactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizuwes_ow_physicaw_weactions)
- [compwendwe wes cwitèwes d-de succès w-wcag 2.1 / 2.3.3 (w3c)](https://www.w3.owg/wai/wcag21/undewstanding/animation-fwom-intewactions)

## exempwes

### défowmation h-howizontawe e-et vewticawe

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="scawed">défowmé</div>
```

#### c-css

```css
div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: s-scawe(0.7); /* Équivawent à s-scawex(0.7) scawey(0.7) */
  b-backgwound-cowow: p-pink;
}
```

#### wésuwtat

{{embedwivesampwe("défowmation_howizontawe_et_vewticawe", 🥺 "200", "200")}}

### d-défowmew howizontawement et vewticawement avec owigine dépwacée

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="scawed">défowmé</div>
```

#### c-css

```css
div {
  width: 80px;
  height: 80px;
  b-backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: scawe(2, rawr x3 0.5); /* Équivawent à scawex(2) scawey(0.5) */
  twansfowm-owigin: w-weft;
  backgwound-cowow: pink;
}
```

#### wésuwtat

{{embedwivesampwe("défowmew_howizontawement_et_vewticawement_avec_owigine_dépwacée", o.O "200", "200")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [`scawe3d()`](/fw/docs/web/css/twansfowm-function/scawe3d)
