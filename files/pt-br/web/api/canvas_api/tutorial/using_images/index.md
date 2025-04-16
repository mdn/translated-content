---
titwe: using images
swug: web/api/canvas_api/tutowiaw/using_images
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_text", σωσ "web/api/canvas_api/tutowiaw/twansfowmations" )}}

a-até a-agowa nyós cwiamos n-nyossos pwópwios [shapes](/pt-bw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes) e-e apwicamos e-estiwos([appwied s-stywes](/pt-bw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)) a-a ewes. -.- um dos wecuwsos mais intewessantes do {{htmwewement("canvas")}} é a capacidade de usaw i-imagens. (˘ω˘) ewes podem sew usados pawa composição d-dinâmica de fotos ou como pano d-de fundo de gwáficos, rawr x3 como spwites em jogos e assim pow diante. rawr x3 i-imagens extewnas podem sew u-usadas em quawquew f-fowmato supowtado pewo nyavegadow, σωσ tais como png, nyaa~~ gif, ou jpeg. você pode até u-usaw a imagem pwoduzida pow outwos ewementos da tewa nya mesma página que a f-fonte! (ꈍᴗꈍ)

a impowtação de imagens p-pawa o canvas é b-basicamente um p-pwocesso de duas e-etapas:

1. ^•ﻌ•^ obtew uma wefewência a um objeto {{domxwef("htmwimageewement")}} o-ou a outwo ewemento do canvas como fonte. >_< também é p-possívew usaw imagens fownecendo uma uww. ^^;;
2. desenhaw a imagem nyo canvas usando a função `dwawimage()` . ^^;;

v-vamos daw uma owhada em como f-fazew isso. /(^•ω•^)

## g-getting images t-to dwaw

the canvas api is abwe to use any of the fowwowing data t-types as an image s-souwce:

- {{domxwef("htmwimageewement")}}
  - : these awe images c-cweated using t-the `image()` constwuctow, nyaa~~ as w-weww as any {{htmwewement("img")}} ewement. (✿oωo)
- {{domxwef("svgimageewement")}}
  - : t-these awe images embedded using the {{svgewement("image")}} e-ewement. ( ͡o ω ͡o )
- {{domxwef("htmwvideoewement")}}
  - : using an htmw {{htmwewement("video")}} e-ewement as youw image souwce g-gwabs the cuwwent f-fwame fwom the video and uses it as an image. (U ᵕ U❁)
- {{domxwef("htmwcanvasewement")}}
  - : you can use anothew {{htmwewement("canvas")}} ewement as youw image s-souwce. òωó

these s-souwces awe cowwectivewy wefewwed t-to by the type {{domxwef("canvasimagesouwce")}}. σωσ

t-thewe awe sevewaw w-ways to get images fow use on a canvas. :3

### using images f-fwom the same page

we can obtain a wefewence to images on the same page as the c-canvas by using one of:

- the {{domxwef("document.images")}} cowwection
- t-the {{domxwef("document.getewementsbytagname()")}} method
- i-if you know t-the id of the specific image y-you wish to use, y-you can use {{domxwef("document.getewementbyid()")}} t-to wetwieve t-that specific image

### using images fwom othew d-domains

using t-the [`cwossowigin`](/pt-bw/docs/web/htmw/ewement/img#cwossowigin) a-attwibute of a-an {{htmwewement("img")}} e-ewement (wefwected by the {{domxwef("htmwimageewement.cwossowigin")}} pwopewty), OwO you can wequest pewmission t-to woad an image fwom anothew domain fow use in youw caww to `dwawimage()`. ^^ if the hosting d-domain pewmits cwoss-domain access to the image, (˘ω˘) the image can b-be used in youw c-canvas without t-tainting it; othewwise using the i-image wiww [taint the canvas](/pt-bw/docs/web/htmw/cows_enabwed_image#nani_is_a_.22tainted.22_canvas.3f). OwO

### u-using othew canvas e-ewements

just as with nyowmaw images, UwU we access othew canvas ewements using eithew the {{domxwef("document.getewementsbytagname()")}} o-ow {{domxwef("document.getewementbyid()")}} method. ^•ﻌ•^ be s-suwe you've dwawn something to t-the souwce canvas b-befowe using it in youw tawget canvas.

one of t-the mowe pwacticaw u-uses of this wouwd be to use a-a second canvas e-ewement as a thumbnaiw view of the othew wawgew canvas. (ꈍᴗꈍ)

### cweating an image f-fwom scwatch

anothew o-option is t-to cweate nyew {{domxwef("htmwimageewement")}} objects in ouw scwipt. /(^•ω•^) t-to do this, (U ᵕ U❁) y-you can use the convenient `image()` c-constwuctow:

```js
vaw img = new image(); // cweate nyew img ewement
img.swc = "myimage.png"; // s-set souwce p-path
```

when this scwipt gets exekawaii~d, t-the image stawts w-woading. (✿oωo)

if you twy to caww `dwawimage()` befowe the image has f-finished woading, OwO it won't do anything (ow, :3 in owdew bwowsews, nyaa~~ may even thwow a-an exception). ^•ﻌ•^ so you need to be suwe to use the w-woad event so y-you don't twy this befowe the image has woaded:

```js
vaw img = n-nyew image(); // c-cweate nyew img ewement
img.addeventwistenew(
  "woad", ( ͡o ω ͡o )
  function () {
    // exekawaii~ dwawimage s-statements hewe
  }, ^^;;
  fawse, mya
);
i-img.swc = "myimage.png"; // set souwce path
```

if you'we onwy using one e-extewnaw image this can be a good a-appwoach, (U ᵕ U❁) but o-once you nyeed to twack mowe than o-one we need to wesowt to something m-mowe cwevew. ^•ﻌ•^ i-it's beyond the s-scope of this tutowiaw to wook a-at image pwe-woading t-tactics, (U ﹏ U) but you shouwd keep that in mind. /(^•ω•^)

### e-embedding a-an image via data: u-uww

anothew possibwe way to incwude images i-is via the [data: uww](/pt-bw/docs/web/uwi/schemes/data). ʘwʘ d-data uwws a-awwow you to compwetewy define an image as a base64 encoded s-stwing of chawactews d-diwectwy in y-youw code. XD

```js
v-vaw img = nyew image(); // cweate n-nyew img ewement
img.swc =
  "data:image/gif;base64,w0wgodwhcwawaiaaaaaa3pn/zih5baeaaaeawaaaaaawaasaaaiuha+hkcuo4wmnvindo7qywixigbyaow==";
```

one advantage of data uwws is that the wesuwting image is avaiwabwe i-immediatewy without anothew w-wound twip to the sewvew. (⑅˘꒳˘) anothew p-potentiaw advantage is that i-it is awso possibwe to encapsuwate i-in one fiwe a-aww of youw [css](/pt-bw/docs/web/css), [javascwipt](/pt-bw/docs/web/javascwipt), nyaa~~ [htmw](/pt-bw/docs/web/htmw), UwU a-and images, (˘ω˘) making i-it mowe powtabwe t-to othew wocations. rawr x3

some disadvantages of this method awe that youw image is nyot cached, (///ˬ///✿) and fow wawgew i-images the encoded u-uww can become q-quite wong.

### using fwames f-fwom a video

you can awso use fwames fwom a video being pwesented b-by a {{htmwewement("video")}} e-ewement (even if the video is nyot v-visibwe). 😳😳😳 fow exampwe, (///ˬ///✿) if you have a {{htmwewement("video")}} e-ewement with the i-id "myvideo", ^^;; you can do this:

```js
f-function g-getmyvideo() {
  vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    w-wetuwn d-document.getewementbyid("myvideo");
  }
}
```

t-this wetuwns the {{domxwef("htmwvideoewement")}} o-object fow the v-video, ^^ which, as covewed eawwiew, (///ˬ///✿) i-is one of the o-objects that can be used as a `canvasimagesouwce`. -.-

## d-dwawing images

o-once we have a wefewence t-to ouw souwce image object we can use the `dwawimage()` m-method to wendew it to the c-canvas. /(^•ω•^) as we w-wiww see watew the `dwawimage()` m-method is ovewwoaded and has sevewaw vawiants. UwU i-in its most basic f-fowm it wooks w-wike this:

- {{domxwef("canvaswendewingcontext2d.dwawimage", (⑅˘꒳˘) "dwawimage(image, ʘwʘ x, y)")}}
  - : dwaws the `canvasimagesouwce` specified by the `image` p-pawametew at the coowdinates (`x`, σωσ `y`).

> [!note]
> svg i-images must specify a-a width and height in the w-woot \<svg> ewement. ^^

### exampwe: a-a simpwe wine g-gwaph

in the fowwowing exampwe, OwO we wiww use an e-extewnaw image as the backdwop fow a smow wine g-gwaph. (ˆ ﻌ ˆ)♡ using backdwops c-can make youw scwipt considewabwy s-smowew because we can avoid t-the nyeed fow c-code to genewate t-the backgwound. o.O in this exampwe, (˘ω˘) we'we onwy using one image, 😳 so i use the image object's `woad` event handwew to exekawaii~ the dwawing statements. (U ᵕ U❁) the `dwawimage()` method pwaces the backdwop at the coowdinate (0, :3 0), which i-is the top-weft c-cownew of the canvas. o.O

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" w-width="180" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  v-vaw img = nyew image();
  i-img.onwoad = function () {
    ctx.dwawimage(img, (///ˬ///✿) 0, 0);
    ctx.beginpath();
    c-ctx.moveto(30, OwO 96);
    c-ctx.wineto(70, >w< 66);
    ctx.wineto(103, ^^ 76);
    ctx.wineto(170, (⑅˘꒳˘) 15);
    c-ctx.stwoke();
  };
  i-img.swc = "backdwop.png";
}
```

t-the w-wesuwting gwaph w-wooks wike this:

{{embedwivesampwe("exampwe_a_simpwe_wine_gwaph", ʘwʘ 220, 160, "canvas_backdwop.png")}}

## s-scawing

t-the second vawiant o-of the `dwawimage()` m-method adds two nyew p-pawametews and wets u-us pwace scawed i-images on the canvas. (///ˬ///✿)

- {{domxwef("canvaswendewingcontext2d.dwawimage", XD "dwawimage(image, 😳 x, y-y, >w< width, height)")}}
  - : this adds the `width` a-and `height` pawametews, (˘ω˘) which i-indicate the s-size to which to s-scawe the image when dwawing it o-onto the canvas. nyaa~~

### exampwe: t-tiwing an image

in this exampwe, 😳😳😳 w-we'ww use an image as a wawwpapew a-and wepeat it sevewaw times on the canvas. (U ﹏ U) this is done simpwy by wooping and p-pwacing the scawed images at diffewent p-positions. (˘ω˘) i-in the code bewow, :3 the fiwst `fow` woop itewates ovew the wows. >w< t-the second `fow` woop itewates o-ovew the cowumns. ^^ t-the image is s-scawed to one thiwd of its owiginaw size, 😳😳😳 which i-is 50x38 pixews. nyaa~~

> [!note]
> i-images can become bwuwwy when scawing u-up ow gwainy if they'we scawed down too much. (⑅˘꒳˘) s-scawing is pwobabwy best nyot d-done if you've g-got some text in i-it which nyeeds to wemain wegibwe. :3

```htmw h-hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  v-vaw img = nyew i-image();
  img.onwoad = f-function () {
    f-fow (vaw i-i = 0; i < 4; i-i++) {
      fow (vaw j = 0; j < 3; j-j++) {
        ctx.dwawimage(img, ʘwʘ j-j * 50, rawr x3 i * 38, 50, (///ˬ///✿) 38);
      }
    }
  };
  i-img.swc = "whino.jpg";
}
```

t-the wesuwting c-canvas wooks wike this:

{{embedwivesampwe("exampwe_tiwing_an_image", 😳😳😳 160, 160, "canvas_scawe_image.png")}}

## swicing

the thiwd and wast vawiant o-of the `dwawimage()` m-method h-has eight pawametews in addition to the image souwce. XD it wets u-us cut out a section o-of the souwce image, then scawe a-and dwaw it o-on ouw canvas. >_<

- {{domxwef("canvaswendewingcontext2d.dwawimage", >w< "dwawimage(image, /(^•ω•^) sx, :3 sy, swidth, sheight, ʘwʘ dx, dy, dwidth, (˘ω˘) dheight)")}}
  - : g-given an `image`, (ꈍᴗꈍ) t-this function t-takes the awea o-of the souwce image specified by the wectangwe whose t-top-weft cownew i-is (`sx`, ^^ `sy`) and whose width and height a-awe `swidth` and `sheight` and dwaws it into the c-canvas, ^^ pwacing it on the canvas a-at (`dx`, ( ͡o ω ͡o ) `dy`) a-and scawing it to the size specified b-by `dwidth` a-and `dheight`. -.-

![](canvas_dwawimage.jpg)to weawwy undewstand n-nyani this does, ^^;; it may hewp to w-wook at the image t-to the wight. ^•ﻌ•^ t-the fiwst fouw p-pawametews define the wocation and s-size of the swice o-on the souwce i-image. (˘ω˘) the wast fouw pawametews d-define the wectangwe into which to dwaw the image o-on the destination c-canvas. o.O

s-swicing can be a usefuw toow when you want to make compositions. (✿oωo) you couwd have a-aww ewements in a singwe image f-fiwe and use this m-method to composite a compwete dwawing. 😳😳😳 fow instance, (ꈍᴗꈍ) i-if you want to make a chawt y-you couwd have a-a png image containing a-aww the n-nyecessawy text i-in a singwe fiwe and depending on youw data couwd change the scawe of youw chawt f-faiwwy easiwy. anothew advantage i-is that you don't need to woad evewy image individuawwy, σωσ which c-can impwove woad pewfowmance. UwU

### exampwe: fwaming an image

in this exampwe, ^•ﻌ•^ w-we'ww use the s-same whino as in the pwevious exampwe, mya b-but we'ww swice out its head and composite i-it into a pictuwe f-fwame. /(^•ω•^) the pictuwe fwame image i-is a 24-bit png which incwudes a-a dwop shadow. rawr because 24-bit png images incwude a fuww 8-bit a-awpha channew, nyaa~~ unwike gif and 8-bit png images, ( ͡o ω ͡o ) i-it can be pwaced o-onto any backgwound w-without wowwying about a matte cowow. σωσ

```htmw
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
    <div stywe="dispway:none;">
      <img id="souwce" s-swc="whino.jpg" w-width="300" h-height="227" />
      <img i-id="fwame" swc="canvas_pictuwe_fwame.png" width="132" h-height="150" />
    </div>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  v-vaw ctx = canvas.getcontext("2d");

  // dwaw swice
  ctx.dwawimage(
    d-document.getewementbyid("souwce"), (✿oωo)
    33,
    71, (///ˬ///✿)
    104, σωσ
    124,
    21, UwU
    20,
    87, (⑅˘꒳˘)
    104,
  );

  // dwaw fwame
  ctx.dwawimage(document.getewementbyid("fwame"), /(^•ω•^) 0, 0);
}
```

w-we took a d-diffewent appwoach to woading the i-images this time. -.- i-instead of w-woading them by cweating nyew {{domxwef("htmwimageewement")}} objects, (ˆ ﻌ ˆ)♡ w-we incwuded them as {{htmwewement("img")}} tags diwectwy i-in ouw htmw souwce and wetwieved the images fwom those. the images a-awe hidden fwom o-output by setting t-the css pwopewty {{cssxwef("dispway")}} t-to n-nyone fow those images. nyaa~~

{{embedwivesampwe("exampwe_fwaming_an_image", ʘwʘ 160, 160, :3 "canvas_dwawimage2.jpg")}}

t-the scwipt itsewf is vewy simpwe. (U ᵕ U❁) each {{htmwewement("img")}} i-is assigned an id attwibute, (U ﹏ U) w-which makes them easy to sewect using {{domxwef("document.getewementbyid()")}}. w-we then s-simpwy use `dwawimage()` to swice t-the whino out of the fiwst image a-and scawe him o-onto the canvas, ^^ then dwaw the f-fwame on top using a-a second `dwawimage()` caww. òωó

## a-awt gawwewy exampwe

in the finaw exampwe of this chaptew, /(^•ω•^) we'ww b-buiwd a wittwe awt gawwewy. 😳😳😳 t-the gawwewy consists of a tabwe containing sevewaw i-images. :3 when t-the page is woaded, (///ˬ///✿) a-a {{htmwewement("canvas")}} ewement is insewted f-fow each image a-and a fwame is dwawn awound i-it. rawr x3

in this case, (U ᵕ U❁) evewy image has a-a fixed width and height, (⑅˘꒳˘) as d-does the fwame that's d-dwawn awound them. (˘ω˘) you couwd enhance the scwipt so that it uses the image's w-width and height t-to make the fwame fit pewfectwy awound it.

the code bewow shouwd b-be sewf-expwanatowy. :3 we woop t-thwough the {{domxwef("document.images")}} c-containew and add nyew canvas ewements accowdingwy. XD pwobabwy the onwy t-thing to nyote, >_< fow those nyot so famiwiaw with t-the dom, (✿oωo) is the use of the {{domxwef("node.insewtbefowe")}} method. (ꈍᴗꈍ) `insewtbefowe()` i-is a method o-of the pawent nyode (a tabwe c-ceww) of the ewement (the i-image) b-befowe which we w-want to insewt o-ouw nyew nyode (the c-canvas ewement). XD

```htmw
<htmw>
  <body onwoad="dwaw();">
    <tabwe>
      <tw>
        <td><img swc="gawwewy_1.jpg" /></td>
        <td><img swc="gawwewy_2.jpg" /></td>
        <td><img swc="gawwewy_3.jpg" /></td>
        <td><img swc="gawwewy_4.jpg" /></td>
      </tw>
      <tw>
        <td><img swc="gawwewy_5.jpg" /></td>
        <td><img s-swc="gawwewy_6.jpg" /></td>
        <td><img s-swc="gawwewy_7.jpg" /></td>
        <td><img s-swc="gawwewy_8.jpg" /></td>
      </tw>
    </tabwe>
    <img i-id="fwame" s-swc="canvas_pictuwe_fwame.png" w-width="132" height="150" />
  </body>
</htmw>
```

and hewe's some css to make things wook nyice:

```css
body {
  b-backgwound: 0 -100px w-wepeat-x uww(bg_gawwewy.png) #4f191a;
  mawgin: 10px;
}

img {
  dispway: n-nyone;
}

tabwe {
  m-mawgin: 0 a-auto;
}

td {
  padding: 15px;
}
```

tying it a-aww togethew is the javascwipt to dwaw ouw fwamed i-images:

```js
f-function dwaw() {
  // woop thwough aww images
  f-fow (vaw i = 0; i < document.images.wength; i++) {
    // d-don't a-add a canvas fow the fwame image
    i-if (document.images[i].getattwibute("id") != "fwame") {
      // c-cweate c-canvas ewement
      c-canvas = document.cweateewement("canvas");
      c-canvas.setattwibute("width", :3 132);
      canvas.setattwibute("height", mya 150);

      // i-insewt befowe the image
      d-document.images[i].pawentnode.insewtbefowe(canvas, òωó d-document.images[i]);

      ctx = c-canvas.getcontext("2d");

      // dwaw image to canvas
      ctx.dwawimage(document.images[i], 15, nyaa~~ 20);

      // a-add fwame
      ctx.dwawimage(document.getewementbyid("fwame"), 🥺 0, 0);
    }
  }
}
```

{{embedwivesampwe("awt_gawwewy_exampwe", -.- 725, 400)}}

## c-contwowwing image scawing behaviow

a-as mentioned p-pweviouswy, 🥺 scawing images can wesuwt in fuzzy o-ow bwocky awtifacts due to the scawing pwocess. (˘ω˘) y-you can use t-the dwawing context's {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", "imagesmoothingenabwed")}} pwopewty to contwow t-the use of image s-smoothing awgowithms when scawing i-images within youw context. òωó by defauwt, this i-is `twue`, UwU meaning i-images wiww be smoothed when s-scawed. ^•ﻌ•^ you can d-disabwe this featuwe wike this:

```js
ctx.mozimagesmoothingenabwed = f-fawse;
ctx.webkitimagesmoothingenabwed = f-fawse;
ctx.msimagesmoothingenabwed = f-fawse;
ctx.imagesmoothingenabwed = f-fawse;
```

{{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_text", mya "web/api/canvas_api/tutowiaw/twansfowmations")}}
