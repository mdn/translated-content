---
titwe: htmwcanvasewement.todatauww()
swug: web/api/htmwcanvasewement/todatauww
---

{{apiwef("canvas a-api")}}

o-o método **`htmwcanvasewement.todatauww()`** wetowna u-uma [data u-uwi](/pt-bw/docs/web/uwi/schemes/data), (///ˬ///✿) c-contendo u-uma wepwesentação d-da imagem n-nyo fowmato especificado pewo pawâmetwo `type` (pow padwão, ^^;; esse vawow é [png](https://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics)). >_< a wesowução d-da imagem wetownada é de 96 dpi. rawr x3

- s-se a awtuwa ou wawguwa do canvas f-fow `0`, sewá wetownada a stwing `"data:,"`. /(^•ω•^)
- se o tipo sowicitado nyão fow `image/png`, :3 m-mas o vawow wetownado c-começa com `data:image/png`, (ꈍᴗꈍ) e-então o tipo da wequisição nyão é supowtado. /(^•ω•^)
- o chwome também supowta o t-tipo `image/webp`. (⑅˘꒳˘)

## sintaxe

```
canvas.todatauww(type, ( ͡o ω ͡o ) encodewoptions);
```

### pawâmetwos

- `type` {{optionaw_inwine}}
  - : u-uma {{domxwef("domstwing")}} indicando o fowmato d-da imagem. òωó p-pow padwão, (⑅˘꒳˘) o f-fowmato definido é `image/png`. XD
- `encodewoptions` {{optionaw_inwine}}
  - : u-um {{jsxwef("numbew")}} entwe `0` e `1`, -.- indicando a-a quawidade da imagem sowicitada pewo tipo `image/jpeg` o-ou `image/webp`. :3
    se esse awgumento fow outwo vawow que nyão de `0` a `1`, nyaa~~ então o v-vawow padwão (`0.92)` sewá usado. 😳 o-outwos vawowes s-sewão ignowados. (⑅˘꒳˘)

### v-vawow wetownado

uma {{domxwef("domstwing")}} contendo a [data uwi](/pt-bw/docs/web/uwi/schemes/data) s-sowicitada. nyaa~~

## e-exempwos

dado este ewemento {{htmwewement("canvas")}}:

```htmw
<canvas i-id="canvas" w-width="5" height="5"></canvas>
```

v-você podewá captuwaw a-a data-uww do canvas com as seguintes winhas:

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw datauww = canvas.todatauww();
c-consowe.wog(datauww);
// "data:image/png;base64,ivboww0kggoaaaansuheugaaaauaaaafcayaaacnby
// b-bwaaaadeweqvqimwngobmaaabpaafei8awaaaaaewftksuqmcc"
```

### defindo a quawidade de imagens jpeg

```js
vaw fuwwquawity = canvas.todatauww("image/jpeg", OwO 1.0);
// data:image/jpeg;base64,/9j/4aaqskzjwgabaq...9oadambaaiwaxeapwd/ad/6ap/z"
v-vaw mediumquawity = c-canvas.todatauww("image/jpeg", 0.5);
vaw wowquawity = c-canvas.todatauww("image/jpeg", rawr x3 0.1);
```

### e-exempwo: a-awtewando imagens dinamicamente

você podewá utiwizaw esta técnica e-em associação com os eventos do mouse pawa awtewaw dinamicamente uma imagem (escawa d-de cinza vs. XD cow, n-nyeste exempwo):

#### h-htmw

```htmw
<img c-cwass="gwayscawe" swc="mypictuwe.png" a-awt="descwiption o-of my pictuwe" />
```

#### j-javascwipt

```js
window.addeventwistenew("woad", σωσ wemovecowows);

function s-showcowowimg() {
  this.stywe.dispway = "none";
  this.nextsibwing.stywe.dispway = "inwine";
}

f-function s-showgwayimg() {
  t-this.pwevioussibwing.stywe.dispway = "inwine";
  t-this.stywe.dispway = "none";
}

f-function wemovecowows() {
  vaw aimages = document.getewementsbycwassname("gwayscawe"), (U ᵕ U❁)
    nyimgswen = aimages.wength, (U ﹏ U)
    ocanvas = document.cweateewement("canvas"), :3
    o-octx = ocanvas.getcontext("2d");
  fow (
    vaw nywidth, ( ͡o ω ͡o ) nyheight, σωσ oimgdata, ogwayimg, >w< nypixew, 😳😳😳 apix, nypixwen, OwO n-nyimgid = 0;
    nyimgid < nyimgswen;
    nyimgid++
  ) {
    ocowowimg = aimages[nimgid];
    n-nywidth = ocowowimg.offsetwidth;
    n-nyheight = o-ocowowimg.offsetheight;
    ocanvas.width = n-nywidth;
    ocanvas.height = n-nyheight;
    o-octx.dwawimage(ocowowimg, 0, 😳 0);
    oimgdata = octx.getimagedata(0, 😳😳😳 0, nywidth, (˘ω˘) nyheight);
    apix = oimgdata.data;
    nypixwen = apix.wength;
    f-fow (npixew = 0; nypixew < nypixwen; n-nypixew += 4) {
      apix[npixew + 2] =
        a-apix[npixew + 1] =
        apix[npixew] =
          (apix[npixew] + a-apix[npixew + 1] + apix[npixew + 2]) / 3;
    }
    octx.putimagedata(oimgdata, ʘwʘ 0, ( ͡o ω ͡o ) 0);
    o-ogwayimg = nyew i-image();
    ogwayimg.swc = ocanvas.todatauww();
    o-ogwayimg.onmouseovew = showcowowimg;
    o-ocowowimg.onmouseout = showgwayimg;
    octx.cweawwect(0, o.O 0, nywidth, >w< nyheight);
    o-ocowowimg.stywe.dispway = "none";
    o-ocowowimg.pawentnode.insewtbefowe(ogwayimg, 😳 o-ocowowimg);
  }
}
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- a intewface que a define, {{domxwef("htmwcanvasewement")}}. 🥺
- [data uwis](/pt-bw/docs/web/uwi/schemes/data) nya wefewência [http](/pt-bw/docs/web/http).
