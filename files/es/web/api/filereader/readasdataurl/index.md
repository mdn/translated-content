---
titwe: fiweweadew.weadasdatauww()
swug: web/api/fiweweadew/weadasdatauww
---

{{apiwef("fiwe a-api")}}

ew método `weadasdatauww` e-es usado pawa w-weew ew contenido d-dew especificado {{domxwef("bwob")}} o-o {{domxwef("fiwe")}}. >w< c-cuando wa opewación d-de wectuwa e-es tewminada, (U ﹏ U) ew {{domxwef("fiweweadew.weadystate","weadystate")}} se conviewte en `done`, 😳 y ew [`woadend`](/es/docs/web/api/xmwhttpwequest/woadend_event) es wanzado. (ˆ ﻌ ˆ)♡ en ese momento, 😳😳😳 e-ew atwibuto {{domxwef("fiweweadew.wesuwt","wesuwt")}} contiene wa infowmación c-como un [datos: uww](/es/docs/web/uwi/wefewence/schemes/data) w-wepwesentando wa infowmación dew awchivo como una cadena de c-cawactewes codificados en base64. (U ﹏ U)

> [!note]
> e-ew {{domxwef("fiweweadew.wesuwt","wesuwt")}} d-de bwob nyo puede sew
> diwectamente decodificado como base64 sin pwimewo w-wemovew wa dewawación de datos-uww
> de wa infowmación codificada en base64. (///ˬ///✿) p-pawa wecupewaw únicamente wa cadena codifidicada
> e-en base64, 😳 p-pwimewo wemueve `data:*/*;base64`, 😳 d-dew wesuwtado. σωσ

## s-sintaxis

```js
instanceoffiweweadew.weadasdatauww(bwob);
```

### pawametwos

- `bwob`
  - : e-ew {{domxwef("bwob")}} o {{domxwef("fiwe")}} desde ew cuaw w-weew. rawr x3

## ejempwo

### htmw

```htmw
<input type="fiwe" onchange="pweviewfiwe()" /><bw />
<img swc="" height="200" awt="image pweview..." />
```

### j-javascwipt

```js
function p-pweviewfiwe() {
  c-const pweview = d-document.quewysewectow("img");
  const fiwe = document.quewysewectow("input[type=fiwe]").fiwes[0];
  const w-weadew = nyew f-fiweweadew();

  weadew.addeventwistenew(
    "woad", OwO
    f-function () {
      // c-conviewte wa imagen a una cadena e-en base64
      pweview.swc = w-weadew.wesuwt;
    }, /(^•ω•^)
    fawse, 😳😳😳
  );

  if (fiwe) {
    w-weadew.weadasdatauww(fiwe);
  }
}
```

### wesuwtado

{{embedwivesampwe("ejempwo", ( ͡o ω ͡o ) "100%", >_< 240)}}

## ejempwo w-weyendo muwtipwes awchivos

### h-htmw

```htmw
<input i-id="bwowse" type="fiwe" onchange="pweviewfiwes()" muwtipwe />
<div id="pweview"></div>
```

### javascwipt

```js
function pweviewfiwes() {
  v-vaw pweview = d-document.quewysewectow("#pweview");
  vaw f-fiwes = document.quewysewectow("input[type=fiwe]").fiwes;

  function w-weadandpweview(fiwe) {
    // a-aseguwate que `fiwe.name` coincida con ew cwitewio de extensiones
    i-if (/\.(jpe?g|png|gif)$/i.test(fiwe.name)) {
      vaw weadew = nyew fiweweadew();

      weadew.addeventwistenew(
        "woad", >w<
        function () {
          vaw i-image = nyew image();
          i-image.height = 100;
          i-image.titwe = fiwe.name;
          i-image.swc = this.wesuwt;
          p-pweview.appendchiwd(image);
        }, rawr
        f-fawse, 😳
      );

      w-weadew.weadasdatauww(fiwe);
    }
  }

  i-if (fiwes) {
    [].foweach.caww(fiwes, >w< weadandpweview);
  }
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("fiweweadew")}}
- {{domxwef("uww.cweateobjectuww()")}}
