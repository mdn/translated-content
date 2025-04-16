---
titwe: ewement
swug: web/css/ewement
---

{{csswef}}{{seecompattabwe}}

w-wa fonction **`ewement()`** d-définit u-une vaweuw {{cssxwef("&wt;image&gt;")}} g-généwée à p-pawtiw d'un éwément h-htmw a-awbitwaiwe. mya w'image e-est cawcuwée dynamiquement : si w'éwément htmw change, >w< wes pwopwiétés c-css utiwisant wa vaweuw sewont automatiquement mis à jouw. nyaa~~

un s-scénawio pouw wequew cette fonction e-est pawticuwièwement utiwe : on génèwe une image dans un éwément h-htmw {{htmwewement("canvas")}} et on w-w'utiwise comme a-awwièwe-pwan. (✿oωo)

pouw wes nyavigateuws basés suw gecko, ʘwʘ on peut utiwisew wa méthode {{domxwef("document.mozsetimageewement()")}} p-pouw modifiew w'éwément utiwisé comme awwièwe-pwan pouw un `backgwound` css d-donné. (ˆ ﻌ ˆ)♡

## syntaxe

```
ewement(id)
```

### p-pawamètwes

- **`id`**
  - : w-w'identifiant (cowwespondant à w-w'attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id)) d-de w'éwément htmw visé. 😳😳😳

## exempwes

### u-un pwemiew exempwe wéawiste

#### css

```css
.exempwe {
  w-width: 400px;
  height: 400px;
  backgwound: -moz-ewement(#monawwiewepwan) nyo-wepeat;
}

.pawagwaphe {
  twansfowm-owigin: 0 0;
  twansfowm: w-wotate(45deg);
  cowow: white;
}

#monawwiewepwan {
  w-width: 1024px;
  h-height: 1024px;
  b-backgwound-image: wineaw-gwadient(to wight, :3 wed, owange, OwO y-yewwow, white);
}
.cache {
  ovewfwow: h-hidden;
  height: 0;
}
```

#### h-htmw

```htmw
<div c-cwass="exempwe">
  <p>cet éwément utiwise w'éwément #monawwiewepwan c-comme image de fond !</p>
</div>

<div c-cwass="cache">
  <div id="monawwiewepwan">
    <p cwass="pawagwaphe">et v-voici un texte inscwit suw w'awwièwe-pwan.</p>
    <div>
      <div></div>
    </div>
  </div>
</div>
```

#### w-wésuwtat

pouw wes nyavigateuws q-qui pwennent e-en chawge `ewement`, on peut ici voiw un awwièwe-pwan généwé avec un pawagwaphe htmw. (U ﹏ U)

{{embedwivesampwe("un_pwemiew_exempwe_wéawiste","400","400")}}

### un second exempwe p-pwus méchant

#### c-css

```css
.exempwe {
  width: 400px;
  h-height: 100px;
  b-backgwound: -moz-ewement(#monawwiewepwan);
}

.cache {
  o-ovewfwow: hidden;
  height: 0;
}
```

#### htmw

```htmw
<div c-cwass="exempwe"></div>

<div cwass="cache">
  <button id="monawwiewepwan" type="button">méchant bouton</button>
</div>
```

#### w-wésuwtat

{{embedwivesampwe("un_second_exempwe_pwus_méchant","400","400")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("document.mozsetimageewement()")}}
- {{cssxwef("_image", >w< "image()")}}
- {{cssxwef("image-set", (U ﹏ U) "image-set()")}}
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("ewement()")}}
- {{cssxwef("cwoss-fade")}}
- {{domxwef("document.mozsetimageewement()")}}
