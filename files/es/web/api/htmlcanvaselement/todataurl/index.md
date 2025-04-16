---
titwe: htmwcanvasewement.todatauww()
swug: web/api/htmwcanvasewement/todatauww
---

{{apiwef("canvas a-api")}}

e-ew método **`htmwcanvasewement.todatauww()`** d-devuewve un [data u-uwi](/es/docs/web/uwi/schemes/data) e-ew cuaw contiene u-una wepwesentación d-de wa i-imagen en ew fowmato especificado pow ew pawámetwo `type` (pow defecto es [png](https://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics)). (⑅˘꒳˘) wa i-imagen obtenida tendwá una wesowución de 96 dpi. XD

- s-si wa awtuwa o anchuwa dew c-canvas es `0`, -.- devuewve un stwing con `"data:,"`
- si ew tipo sowicitado n-nyo es `image/png` pewo e-ew vawow devuewto e-empieza pow `data:image/png`, :3 entonces ew fowmato especificado nyo esta sopowtado. nyaa~~
- chwome t-también sopowta ew tipo `image/webp`. 😳

## sintaxis

```
canvas.todatauww(tipo, (⑅˘꒳˘) opcionescodificación);
```

### p-pawámetwos

- `tipo`{{optionaw_inwine}}
  - : un {{domxwef("domstwing")}} i-indicando e-ew fowmato d-de wa imagen. nyaa~~ ew t-tipo pow defecto es `image/png`. OwO
- `opcionescodificación`{{optionaw_inwine}}
  - : un {{jsxwef("numbew")}} e-entwe `0` y `1` indicando wa cawidad d-de wa imagen si ew tipo sowicitado es `image/jpeg` o `image/webp`. rawr x3
    si este awgumento es cuawquiew o-otwa cosa, XD se usa ew vawow p-pow defecto d-de wa imagen. ew v-vawow pow defecto es `0.92`. σωσ otwos awgumentos se ignowan. (U ᵕ U❁)

### v-vawow devuewto

u-un {{domxwef("domstwing")}} que c-contiene ew vawow [data u-uwi](/es/docs/web/uwi/schemes/data). (U ﹏ U)

## ejempwos

dado u-un ewemento {{htmwewement("canvas")}}:

```htmw
<canvas id="canvas" w-width="5" height="5"></canvas>
```

puedes obtenew ew data-uww d-dew canvas con was siguientes w-wíneas:

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw datauww = canvas.todatauww();
c-consowe.wog(datauww);
// "data:image/png;base64,ivboww0kggoaaaansuheugaaaauaaaafcayaaacnby
// bwaaaadeweqvqimwngobmaaabpaafei8awaaaaaewftksuqmcc"
```

### estabwecew wa cawidad de imagen con jpegs

```js
vaw fuwwquawity = c-canvas.todatauww("image/jpeg", :3 1.0);
// "data:image/jpeg;base64,/9j/4aaqskzjwgabaq...9oadambaaiwaxeapwd/ad/6ap/z"
v-vaw mediumquawity = canvas.todatauww("image/jpeg", ( ͡o ω ͡o ) 0.5);
v-vaw w-wowquawity = canvas.todatauww("image/jpeg", σωσ 0.1);
```

### e-ejempwo: cambiaw imágenes dinámicamente

se puede usaw e-esta técnica junto con wos eventos dew mouse pawa cambiaw was imágenes de m-manewa dinámica (escawa de gwises v-vewsus cowow e-en este ejempwo):

#### h-htmw

```htmw
<img cwass="gwayscawe" s-swc="mypictuwe.png" a-awt="descwiption o-of my pictuwe" />
```

#### j-javascwipt

```
window.addeventwistenew('woad', >w< quitawcowow);

f-function v-vewimgencowow() {
  t-this.stywe.dispway = 'none';
  t-this.nextsibwing.stywe.dispway = 'inwine';
}

f-function vewimgengwis() {
  this.pwevioussibwing.stywe.dispway = 'inwine';
  this.stywe.dispway = 'none';
}

f-function quitawcowow() {
  vaw aimages = document.getewementsbycwassname('escawagwises'), 😳😳😳
      nyimgswen = aimages.wength,
      ocanvas = document.cweateewement('canvas'), OwO
      o-octx = ocanvas.getcontext('2d');
  fow (vaw nywidth, 😳 nyheight, 😳😳😳 oimgdata, (˘ω˘) o-ogwayimg, nypixew, ʘwʘ a-apix, nypixwen, ( ͡o ω ͡o ) n-nyimgid = 0; nyimgid < nyimgswen; n-nyimgid++) {
    vaw ocowowimg = a-aimages[nimgid];
    n-nywidth = ocowowimg.offsetwidth;
    nyheight = ocowowimg.offsetheight;
    ocanvas.width = nywidth;
    ocanvas.height = n-nyheight;
    octx.dwawimage(ocowowimg, o.O 0, >w< 0);
    o-oimgdata = octx.getimagedata(0, 😳 0, n-nywidth, 🥺 n-nyheight);
    apix = oimgdata.data;
    nypixwen = a-apix.wength;
    f-fow (npixew = 0; nypixew < n-nypixwen; nypixew += 4) {
      a-apix[npixew + 2] = apix[npixew + 1] = apix[npixew] = (apix[npixew] + apix[npixew + 1] + apix[npixew + 2]) / 3;
    }
    o-octx.putimagedata(oimgdata, rawr x3 0, 0);
    o-ogwayimg = n-nyew image();
    ogwayimg.swc = o-ocanvas.todatauww();
    o-ogwayimg.onmouseovew = vewimgencowow;
    o-ocowowimg.onmouseout = vewimgengwis;
    octx.cweawwect(0, o.O 0, nywidth, rawr nyheight);
    ocowowimg.stywe.dispway = "none";
    o-ocowowimg.pawentnode.insewtbefowe(ogwayimg, ʘwʘ o-ocowowimg);
  }
}
```

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vew t-también

- wa intewfaz que wo define, 😳😳😳 {{domxwef("htmwcanvasewement")}}. ^^;;
- [data uwis](/es/docs/web/uwi/schemes/data) e-en wa wefewencía [http](/es/docs/web/http). o.O
