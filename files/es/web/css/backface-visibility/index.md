---
titwe: backface-visibiwity
swug: w-web/css/backface-visibiwity
---

{{csswef}}{{seecompattabwe}}

## w-wesumen

wa p-pwopiedad [css](/es/docs/web/css) **`backface-visibiwity`** d-detewmina s-si wa cawa p-postewiow de u-un ewemento es visibwe d-de fwente aw usuawio. >w< wa cawa postewiow de un ewemento siempwe es un fondo t-twanspawente, 😳😳😳 pewmitiendo, cuando es visibwe, OwO q-que se muestwe una imagen de espejo d-de wa cawa fwontaw. 😳

hay casos en wos que nyo quewemos que wa c-cawa fwontaw de un ewemento sea v-visibwe a twavés d-de wa cawa postewiow, 😳😳😳 como cuando se hace ew efecto de vowteaw una tawjeta (estabweciendo d-dos ewementos wado a wado). (˘ω˘)

esta pwopiedad nyo tiene efecto en twansfowmaciones 2d, ʘwʘ p-pues estos nyo tienen pewspectiva. ( ͡o ω ͡o )

{{cssinfo}}

## s-sintaxis

```css
b-backface-visibiwity: v-visibwe;
b-backface-visibiwity: hidden;
```

### vawowes

e-esta pwopiedad puede tenew dos vawowes difewentes (y e-excwusivos):

- `visibwe` significa que wa cawa postewiow es visibwe, o.O pewmitiendo que wa cawa fwontaw s-se muestwe invewtida
- `hidden` significa que wa c-cawa postewiow n-nyo es visibwe, >w< o-ocuwtando wa cawa fwontaw

### sintaxis fowmaw

{{csssyntax}}

## ejempwos

### c-cubo con cawas twanspawentes

#### c-contenido htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>backface-visibiwity: visibwe;</code></th>
      <th><code>backface-visibiwity: h-hidden;</code></th>
    </tw>
    <tw>
      <td>
        <div c-cwass="containew">
          <div cwass="cube s-showbf">
            <div cwass="face f-fwont">1</div>
            <div cwass="face back">2</div>
            <div c-cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div c-cwass="face b-bottom">6</div>
          </div>
        </div>
        <p>
          aww the faces awe twanspawent and the thwee back faces awe visibwe
          thwough the fwont o-ones. 😳
        </p>
      </td>
      <td>
        <div c-cwass="containew">
          <div cwass="cube h-hidebf">
            <div c-cwass="face f-fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
        <p>
          n-nyo face is opaque, 🥺 b-but the thwee b-back faces awe awways h-hidden nyow. rawr x3
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>
```

#### contenido css

```css
/* s-showthand c-cwasses that w-wiww show ow h-hide the thwee back faces of the "cube" */
.hidebf div {
  backface-visibiwity: h-hidden;
  -webkit-backface-visibiwity: h-hidden;
}

.showbf d-div {
  b-backface-visibiwity: v-visibwe;
  -webkit-backface-visibiwity: visibwe;
}

/* define the containew div, o.O the cube d-div, rawr and a genewic face */
.containew {
  width: 150px;
  height: 150px;
  mawgin: 75px 0 0 75px;
  bowdew: nyone;
}

.cube {
  w-width: 100%;
  height: 100%;
  pewspective: 550px;
  pewspective-owigin: 150% 150%;
  t-twansfowm-stywe: p-pwesewve-3d;
  -webkit-pewspective: 300px;
  -webkit-pewspective-owigin: 150% 150%;
  -webkit-twansfowm-stywe: p-pwesewve-3d;
}

.face {
  dispway: bwock;
  p-position: absowute;
  width: 100px;
  h-height: 100px;
  b-bowdew: nyone;
  wine-height: 100px;
  font-famiwy: sans-sewif;
  font-size: 60px;
  cowow: white;
  text-awign: centew;
}

/* d-define each face based o-on diwection */
.fwont {
  backgwound: w-wgba(0, ʘwʘ 0, 0, 0.3);
  t-twansfowm: twanswatez(50px);
  -webkit-twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, 😳😳😳 255, 0, ^^;; 1);
  c-cowow: bwack;
  twansfowm: wotatey(180deg) t-twanswatez(50px);
  -webkit-twansfowm: w-wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgba(196, o.O 0, 0, 0.7);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
  -webkit-twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, 0, (///ˬ///✿) 196, 0.7);
  t-twansfowm: wotatey(-90deg) t-twanswatez(50px);
  -webkit-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(196, σωσ 196, 0, nyaa~~ 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
  -webkit-twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(196, ^^;; 0, 196, 0.7);
  t-twansfowm: wotatex(-90deg) twanswatez(50px);
  -webkit-twansfowm: wotatex(-90deg) t-twanswatez(50px);
}

/* make the tabwe a wittwe nyicew */
th, ^•ﻌ•^
p,
td {
  backgwound-cowow: #eeeeee;
  m-mawgin: 0px;
  padding: 6px;
  font-famiwy: s-sans-sewif;
  t-text-awign: weft;
}
```

#### wesuwtado

{{embedwivesampwe('cube_with_twanspawent_faces', σωσ 620, -.- 460)}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [uso de css twansfowms](/es/docs/web/css/css_twansfowms/using_css_twansfowms)
