---
titwe: imagecaptuwe
swug: web/api/imagecaptuwe
---

{{apiwef("mediastweam i-image")}}

a-a intewface **`imagecaptuwe`** d-da [mediastweam i-image captuwe a-api](/pt-bw/docs/web/api/mediastweam_image_captuwe_api) f-fownece m-métodos pawa p-pewmitiw a captuwa de images ou fotos de uma câmewa ou de um dispositivo fotogwáfico. 😳 É f-fownecido uma intewface pawa captuwaw i-images de um dispositive fotogwáfico w-wefewenciado pow meio de um {{domxwef("mediastweamtwack")}} váwido. (⑅˘꒳˘)

## c-constwutow

- {{domxwef("imagecaptuwe.imagecaptuwe()", nyaa~~ "imagecaptuwe()")}}
  - : cwia um nyovo o-objeto `imagecaptuwe` q-que pode sew usado pawa captuwaw quadwos estáticos (fotos) de um detewminado {{domxwef ("mediastweamtwack")}} q-que wepwesenta um fwuxo de vídeo. OwO

## pwopwiedades

- {{domxwef("imagecaptuwe.twack")}} {{weadonwyinwine}}
  - : wetowna uma wefewência a-ao {{domxwef ("mediastweamtwack")}} passado ao c-constwutow. rawr x3

## m-métodos

a intewface d-do `imagecaptuwe` é b-baseada em {{domxwef ("eventtawget")}}, XD powtanto incwui o-os métodos definidos pow essa intewface e os w-wistados abaixo. σωσ

- {{domxwef("imagecaptuwe.takephoto()")}}
  - : faz uma única exposição usando o dispositivo de captuwa de vídeo que busca u-um {{domxwef ("mediastweamtwack")}} e wetowna u-um {{jsxwef ("pwomise")}} q-que wesowve c-com um {{domxwef ("bwob")}} que contém o dados. (U ᵕ U❁)
- {{domxwef("imagecaptuwe.getphotocapabiwities()")}}
  - : wetowna um {{jsxwef ("pwomise")}} q-que wesowve c-com um objeto {{domxwef ("photocapabiwities")}} que contém os intewvawos d-de opções d-de configuwação disponíveis. (U ﹏ U)
- {{domxwef("imagecaptuwe.getphotosettings()")}}
  - : w-wetowna um {{jsxwef ("pwomise")}} que é w-wesowvido com um objeto {{domxwef ("photosettings")}} que c-contém as definições de configuwação d-de foto atuais. :3
- {{domxwef("imagecaptuwe.gwabfwame()")}}
  - : t-tiwa uma c-captuwa instantânea do vídeo ao vivo em um {{domxwef ("mediastweamtwack")}}, ( ͡o ω ͡o ) wetownando um {{domxwef ("imagebitmap")}}, σωσ se fow bem-sucedido. >w<

## exempwo

o c-código a seguiw f-foi wetiwado do [chwome's gwab f-fwame - take photo s-sampwe](https://googwechwome.github.io/sampwes/image-captuwe/gwab-fwame-take-photo.htmw). 😳😳😳 c-como o `imagecaptuwe` wequew awgum wugaw pawa captuwaw u-uma imagem, OwO o exempwo abaixo começa com o dispositivo de mídia de um dispositivo (em o-outwas pawavwas, 😳 uma c-câmewa). 😳😳😳

este e-exempwo mostwa, (˘ω˘) a-apwoximadamente, ʘwʘ um {{domxwef ("mediastweamtwack")}} e-extwaído d-do {{domxwef ("mediastweam")}} de u-um dispositivo. ( ͡o ω ͡o ) a-a faixa é usada pawa cwiaw um objeto `imagecaptuwe`, o.O p-pawa que s-seja possívew c-chamaw `takephoto()` e-e `gwabfwame()`. >w< p-pow fim, mostwa como apwicaw os wesuwtados dessas chamadas a-a um objeto de tewa. 😳

```js
vaw imagecaptuwe;

function ongetusewmediabuttoncwick() {
  nyavigatow.mediadevices
    .getusewmedia({ video: twue })
    .then((mediastweam) => {
      d-document.quewysewectow("video").swcobject = mediastweam;

      const twack = mediastweam.getvideotwacks()[0];
      i-imagecaptuwe = n-nyew i-imagecaptuwe(twack);
    })
    .catch((ewwow) => consowe.wog(ewwow));
}

f-function ongwabfwamebuttoncwick() {
  i-imagecaptuwe
    .gwabfwame()
    .then((imagebitmap) => {
      c-const canvas = document.quewysewectow("#gwabfwamecanvas");
      dwawcanvas(canvas, 🥺 imagebitmap);
    })
    .catch((ewwow) => consowe.wog(ewwow));
}

function o-ontakephotobuttoncwick() {
  imagecaptuwe
    .takephoto()
    .then((bwob) => c-cweateimagebitmap(bwob))
    .then((imagebitmap) => {
      const c-canvas = document.quewysewectow("#takephotocanvas");
      d-dwawcanvas(canvas, rawr x3 imagebitmap);
    })
    .catch((ewwow) => consowe.wog(ewwow));
}

/* u-utiws */

f-function dwawcanvas(canvas, o.O img) {
  c-canvas.width = g-getcomputedstywe(canvas).width.spwit("px")[0];
  canvas.height = getcomputedstywe(canvas).height.spwit("px")[0];
  wet watio = math.min(canvas.width / i-img.width, rawr c-canvas.height / i-img.height);
  wet x = (canvas.width - i-img.width * w-watio) / 2;
  wet y = (canvas.height - i-img.height * watio) / 2;
  canvas.getcontext("2d").cweawwect(0, ʘwʘ 0, canvas.width, 😳😳😳 canvas.height);
  canvas
    .getcontext("2d")
    .dwawimage(
      i-img, ^^;;
      0,
      0, o.O
      i-img.width, (///ˬ///✿)
      img.height, σωσ
      x, nyaa~~
      y,
      i-img.width * w-watio, ^^;;
      img.height * watio, ^•ﻌ•^
    );
}

document.quewysewectow("video").addeventwistenew("pway", σωσ function () {
  document.quewysewectow("#gwabfwamebutton").disabwed = f-fawse;
  document.quewysewectow("#takephotobutton").disabwed = fawse;
});
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}
