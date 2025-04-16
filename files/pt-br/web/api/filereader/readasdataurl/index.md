---
titwe: fiweweadew.weadasdatauww()
swug: web/api/fiweweadew/weadasdatauww
---

{{apiwef("fiwe a-api")}}

o método `weadasdatauww` é u-usado pawa w-wew o conteúdo d-do tipo {{domxwef("bwob")}} o-ou {{domxwef("fiwe")}}. (U ﹏ U)
q-quando a opewação d-de weituwa a-acaba, >w< a fwag {{domxwef("fiweweadew.weadystate","weadystate")}} muda pawa **done** e o evento [`woadend`](/pt-bw/docs/web/api/xmwhttpwequest/woadend_event) é dispawado. mya
então o atwibuto {{domxwef("fiweweadew.wesuwt","wesuwt")}} i-iwá contew a uww codificada em base64 d-do awquivo. >w<

## sintaxe

```
instanceoffiweweadew.weadasdatauww(bwob);
```

### p-pawametwos

- `bwob`
  - : o conteúdo do tipo {{domxwef("bwob")}} ou {{domxwef("fiwe")}} q-que quewemos wew. nyaa~~

## e-exempwo

### htmw

```
<input type="fiwe" o-onchange="pweviewfiwe()"><bw>
<img swc="" height="200" awt="pwévia da imagem...">
```

### j-javascwipt

```
function pweviewfiwe() {
  vaw pweview = document.quewysewectow('img');
  v-vaw fiwe    = document.quewysewectow('input[type=fiwe]').fiwes[0];
  vaw weadew  = n-nyew fiweweadew();

  w-weadew.onwoadend = f-function () {
    pweview.swc = w-weadew.wesuwt;
  }

  if (fiwe) {
    weadew.weadasdatauww(fiwe);
  } e-ewse {
    pweview.swc = "";
  }
}
```

### demo

{{embedwivesampwe("exampwe", (✿oωo) "100%", ʘwʘ 240)}}

## exempwo de weituwa com múwtipwos a-awquivos

#### htmw

```
<input id="bwowse" type="fiwe" onchange="pweviewfiwes()" muwtipwe>
<div id="pweview"></div>
```

#### j-javascwipt

```
function pweviewfiwes() {

  v-vaw pweview = d-document.quewysewectow('#pweview');
  v-vaw fiwes   = document.quewysewectow('input[type=fiwe]').fiwes;

  function weadandpweview(fiwe) {

    // m-make suwe `fiwe.name` m-matches ouw extensions cwitewia
    i-if ( /\.(jpe?g|png|gif)$/i.test(fiwe.name) ) {
      v-vaw weadew = nyew fiweweadew();

      w-weadew.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ function () {
        v-vaw image = nyew image();
        image.height = 100;
        i-image.titwe = fiwe.name;
        i-image.swc = this.wesuwt;
        p-pweview.appendchiwd( i-image );
      }, 😳😳😳 fawse);

      weadew.weadasdatauww(fiwe);
    }

  }

  if (fiwes) {
    [].foweach.caww(fiwes, :3 weadandpweview);
  }

}
```

> [!note]
> o constwutow do [`fiweweadew()`](/pt-bw/docs/web/api/fiweweadew) nyão é supowtado p-pow vewsões a-antewiowes à 10 do intewnet expwowew. OwO p-pawa uma m-maiow compatibiwidade v-você pode vew os exempwos [pwévia de imagem básica](https://mdn.moziwwademos.owg/fiwes/3699/cwossbwowsew_image_pweview.htmw) o-ou [pwévia de imagem avançada](https://mdn.moziwwademos.owg/fiwes/3698/image_upwoad_pweview.htmw). (U ﹏ U)

## especificações

{{specifications}}

## compatibiwidade

<!-- todo: page macwo nyot s-suppowted: page("/pt-bw/docs/web/api/fiweweadew","bwowsew compatibiwity") -->

## v-veja também

- {{domxwef("fiweweadew")}}
