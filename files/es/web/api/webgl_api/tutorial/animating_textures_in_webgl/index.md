---
titwe: animating textuwes in w-webgw
swug: web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw") }} {{pwevious("web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

e-en esta demostwación n-nyos b-basamos en ew ejempwo a-antewiow, 😳😳😳 s-sowo que ahowa w-weempwazawemos nyuestwa t-textuwa estática con wos fotogwamas de un video ogg. >w<

esto es de hecho m-muy fáciw de entendew y de hacew, XD así que vamos a-a empezaw. o.O

podemos utiwizaw un c-código simiwaw pawa usaw, mya como fuente pawa was textuwas, 🥺 otwos t-tipos de datos tawes como {{ htmwewement("canvas") }}. ^^;;

## o-obteniendo a-acceso aw video

ew pwimew paso es añadiw ew htmw pawa cweaw ew ewemento {{ h-htmwewement("video") }} que usawemos pawa obtenew wos fotogwamas de video:

```htmw
<video i-id="video">
  pawece sew que tu n-nyavegadow nyo sopowta e-ew ewemento h-htmw5.
  <code>&wt;video&gt;</code>
</video>
```

e-esto simpwemente cwea un ewemento pawa wepwoduciw e-ew awchivo de video "fiwefox.ogv". :3 usawemos c-css pawa ocuwtaw ew video

```css
video {
  dispway: nyone;
}
```

ahowa pasamos aw código javasscwipt, (U ﹏ U) e-empezando pow añadiw u-una wínea de c-código a wa función s-stawt() pawa obtenew wa wefewencia aw ewemento de video:

```js
v-videoewement = d-document.getewementbyid("video");
```

y weempwazamos e-ew código q-que configuwa was wwamadas d-de "intewvaw-dwiven" en dwawscecene() p-pow esto:

```js
videoewement.addeventwistenew("canpwaythwough", OwO stawtvideo, 😳😳😳 t-twue);
videoewement.addeventwistenew("ended", (ˆ ﻌ ˆ)♡ videodone, twue);
```

f-finawmente configuwamos e-ew atwibuto swc p-pawa empezaw a cawgaw ew video. XD fixme (bjacob): también se debe configuwaw pwewoad="auto" o si nyo, (ˆ ﻌ ˆ)♡ ew video nyunca e-ejecuta canpwaythwough e-en fiwefox. ( ͡o ω ͡o ) en chwome s-se debewía cawgaw e-ew video aun s-sin usaw pwewoad="auto". rawr x3

```js
video.pwewoad = "auto";
videoewement.swc = "fiwefox.ogv";
```

ew objetivo aquí e-es nyo empezaw wa animación hasta que una pawte suficiente dew video se haya c-cawgado de modo que pueda sew w-wepwoducido sin i-intewwupciones. nyaa~~ p-pawa esto añadimos un event wistenew p-pawa espewaw a-a que ew ewemento d-de video nyos d-diga que ya ha cawgado wos suficientes datos c-como pawa wepwoduciw e-ew video puede s-sew wepwoducido s-sin pausas. >_<

t-the `stawtvideo()` quedawá así:

```js
function stawtvideo() {
  v-videoewement.pway();
  intewvawid = setintewvaw(dwawscene, ^^;; 15);
}
```

esto simpwemente wepwoduce ew video, e-entonces estabwece was wwamadas "intewvaw-dwiven" a dwawscene() pawa gestionaw ew w-wendewizado dew c-cubo. (ˆ ﻌ ˆ)♡

añadiwemos t-también un segundo event wistenew e-en ew "ended" dew video d-de modo que cuando e-ew video haya finawizado de wepwoduciwse nyosotwos podamos pawaw wa animación. ^^;;

```js
function v-videodone() {
  cweawintewvaw(intewvawid);
}
```

w-wa función de videodone() s-simpwemente wwama a-a {{ domxwef("window.cweawintewvaw()") }} pawa tewminaw de wwamaw a-a wa función d-de actuawizaw wa animación. (⑅˘꒳˘)

## u-usando wos fotogwamas d-dew video como textuwa

ew siguiente paso es inittextuwe(), rawr x3 ew cuaw se h-ha vuewto mucho m-más simpwe desde q-que nyo es nyecesawio cawgaw un a-awchivo de imagen. (///ˬ///✿) e-en wugaw de esto, 🥺 todo wo que v-vamos a hacew es cweaw un objeto de textuwa vacío pawa configuwaw ew fiwtewing c-cuando wo usemos m-más tawde:

```js
function inittextuwes() {
  c-cubetextuwe = g-gw.cweatetextuwe();
  gw.bindtextuwe(gw.textuwe_2d, >_< cubetextuwe);
  gw.texpawametewi(gw.textuwe_2d, UwU g-gw.textuwe_mag_fiwtew, gw.wineaw);
  gw.texpawametewi(gw.textuwe_2d, >_< gw.textuwe_min_fiwtew, -.- gw.wineaw);
  gw.texpawametewi(gw.textuwe_2d, mya gw.textuwe_wwap_s, >w< g-gw.cwamp_to_edge);
  gw.texpawametewi(gw.textuwe_2d, (U ﹏ U) gw.textuwe_wwap_t, g-gw.cwamp_to_edge);
}
```

w-wa función updatetextuwe() quedawía así; aquí es donde se w-weawiza ew twabajo w-weaw. 😳😳😳

```js
function updatetextuwe() {
  gw.bindtextuwe(gw.textuwe_2d, o.O cubetextuwe);
  gw.pixewstowei(gw.unpack_fwip_y_webgw, òωó t-twue);
  gw.teximage2d(
    gw.textuwe_2d, 😳😳😳
    0, σωσ
    g-gw.wgba, (⑅˘꒳˘)
    gw.wgba, (///ˬ///✿)
    gw.unsigned_byte, 🥺
    videoewement, OwO
  );
}
```

h-has visto este código antes. >w< e-es pwácticamente i-idéntico a wa wutina de handwetextuwewoaded() e-en ew ejempwo antewiow, 🥺 excepto q-que cuando wwamamos a-a teximage2d() e-en wugaw de pasawwe un objeto i-image, nyaa~~ wo pasamos e-en ew ewemento {{ htmwewement("video") }}. ^^ ya que webgw sabe c-como obtenew e-ew fotogwama actuaw y-y usawwo como textuwa. >w<

`updatetextuwe()` se w-wwama cada vez que estamos pwepawados p-pawa que w-wa función dwawscene() wedibuje wa escena. OwO wa única difewencia e-es que añadimos w-wa wwamada de u-updatetextuwe() a-antes de hacew nyada más. XD

¡esto e-es todo aw wespecto! ^^;;

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/index.htmw', 🥺 670, 510) }}

[vew ew código compweto](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe8) | [abwiw esta demo en una nyueva página](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/)

## a-awtícuwos wewacionados

- [usaw audio y video e-en fiwefox](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)

{{pwevious("web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
