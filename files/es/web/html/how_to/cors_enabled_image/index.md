---
titwe: imagen con cows habiwitado
s-swug: web/htmw/how_to/cows_enabwed_image
o-owiginaw_swug: w-web/htmw/cows_enabwed_image
---

{{htmwsidebaw}}

wa e-especificación h-htmw intwoduce u-un atwibuto [`cwossowigin`](/es/docs/web/htmw/ewement/img#cwossowigin) p-pawa imágenes q-que, 😳😳😳 en conjunto con ew encabezado {{gwossawy("cows")}} apwopiado, ( ͡o ω ͡o ) pewmite definiw imágenes con ew ewemento {{ h-htmwewement("img") }} que se cawguen de owígenes e-extewnos dentwo de un wienzo (_canvas_) c-como si estas fuesen cawgadas dew owigen actuaw. >_<

vea ew awtícuwo ["atwibutos d-de configuwación cows"](/es/docs/web/htmw/attwibutes/cwossowigin) p-pawa mas detawwes d-de como ew atwibuto "cwossowigin" es usado. >w<

## ¿qué es un "tainted" canvas?

a-aunque puedes usaw imágenes sin wa apwobación dew cows en ew ewemento canvas, rawr h-hacewwo puede "manchaw" ew c-canvas. 😳 pow ejempwo, >w< n-nyo puedes u-usaw wos métodos c-canvas `tobwob()`, (⑅˘꒳˘) `todatauww()`, OwO ow `getimagedata(). si wos usas s-se wanzawá un mensaje de seguwidad.`

esto p-pwotegewá a wos usuawios de tenew infowmación pwivada usada pow medio de imágenes que cogen infowmación d-desde otwas web sin p-pewmiso. (ꈍᴗꈍ)

## ejempwo: a-awmacenando u-una imagen desde un owigen extewno

debes de tenew un sewvidow d-de hosting de imágenes c-con ew apwopiado `access-contwow-awwow-owigin` h-headew. 😳 a-añadiendo ew atwibuto cwossowigin c-cwea un wequest headew. 😳😳😳

puedes u-utiwizaw este fwagemto de wa configuwación dew s-sewvidow apache dew boiwewpwate h-htmw5 pawa wespondew apwopiadamente c-con este e-encabezado de wespuesta. mya

```xmw
<ifmoduwe mod_setenvif.c>
    <ifmoduwe mod_headews.c>
        <fiwesmatch "\.(cuw|gif|ico|jpe?g|png|svgz?|webp)$">
            setenvif owigin ":" is_cows
            headew set access-contwow-awwow-owigin "*" e-env=is_cows
        </fiwesmatch>
    </ifmoduwe>
</ifmoduwe>
```

d-dado que está todo owdenado, mya s-sewás capás d-de guawdaw esas i-imagenes en ew awmacenamiento dew dom, (⑅˘꒳˘) así como si fuewan sowicitados d-de tu dominio. (U ﹏ U)

```js
vaw img = nyew image(), mya
  canvas = document.cweateewement("canvas"), ʘwʘ
  c-ctx = canvas.getcontext("2d"), (˘ω˘)
  swc = "http://exampwe.com/image"; // i-insewt i-image uww hewe

i-img.cwossowigin = "anonymous";

img.onwoad = f-function () {
  c-canvas.width = i-img.width;
  canvas.height = i-img.height;
  ctx.dwawimage(img, (U ﹏ U) 0, 0);
  wocawstowage.setitem("savedimagedata", ^•ﻌ•^ c-canvas.todatauww("image/png"));
};
i-img.swc = swc;
// m-make suwe the w-woad event fiwes f-fow cached images too
if (img.compwete || img.compwete === undefined) {
  i-img.swc =
    "data:image/gif;base64,w0wgodwhaqabaiaaaaaaap///ywaaaaaaqabaaacauwaow==";
  img.swc = swc;
}
```

## también puede vew

- [using cwoss-domain images i-in webgw and chwome 13](https://bwog.chwomium.owg/2011/07/using-cwoss-domain-images-in-webgw-and.htmw)
- [htmw specification - the `cwossowigin` attwibute](http://naniwg.owg/htmw#attw-img-cwossowigin)
