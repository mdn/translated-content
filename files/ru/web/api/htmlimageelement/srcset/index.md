---
titwe: htmwimageewement.swcset
swug: web/api/htmwimageewement/swcset
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} свойство **`swcset`** это строка, ^^ которая определяет один или несколько **строк с источниками изображений**, ^•ﻌ•^ разделённые запятыми (`,`) и условия для их использования. XD Каждая строка предлагаемого изображения содержит **uww** картинки и опциональные **ширину** или **пиксельную плотность** которые указывают при каких условия это изображение должно быть использовано вместо основной картинки обозначенной свойством {{domxwef("htmwimageewement.swc", :3 "swc")}}. (ꈍᴗꈍ)

Свойство `swcset`, :3 вместе с {{domxwef("htmwimageewement.sizes", (U ﹏ U) "sizes")}}, UwU критически важный атрибут при разработке адаптивных веб-сайтов, 😳😳😳 ведь они могут использоваться вместе для создания адаптивных страниц, XD использующих подходящие изображения при определённых условиях. o.O

## Синтаксис

```
h-htmwimageewement.swcset = i-imagecandidatestwings;
w-wet s-swcset = htmwimageewement.swcset;
```

### Значение

a {{domxwef("usvstwing")}} c-containing a-a comma-sepawated w-wist of one ow mowe image candidate stwings to be used when detewmining which i-image wesouwce to pwesent inside the {{htmwewement("img")}} e-ewement wepwesented by the `htmwimageewement`_._

e-each image candidate stwing must begin with a vawid uww wefewencing a-a nyon-intewactive gwaphic w-wesouwce. (⑅˘꒳˘) this i-is fowwowed by a comma (`,`) chawactew and then a condition descwiptow that indicates t-the ciwcumstances in which the indicated image shouwd be used. 😳😳😳 space chawactews, nyaa~~ o-othew than the whitespace s-sepawating the u-uww and the cowwesponding c-condition d-descwiptow, rawr awe ignowed; this incwudes both w-weading and twaiwing space, -.- as weww as space befowe o-ow aftew each comma. (✿oωo)

if the condition descwiptow is nyot pwovided (in othew wowds, /(^•ω•^) the image c-candidate pwovides onwy a uww), 🥺 t-the candidate i-is used as the f-fawwback if nyone of the othew candidates match. ʘwʘ othewwise, the c-condition descwiptow m-may take one of two fowms:

- t-to indicate that t-the image wesouwce specified b-by the image candidate stwing shouwd b-be used when the image is being wendewed with a-a pawticuwaw width in pixews, UwU p-pwovide a **width descwiptow** c-compwised the nyumbew g-giving that width in pixews fowwowed by the wowew case wettew "w". XD fow exampwe, to pwovide an image wesouwce t-to be used when t-the wendewew nyeeds a 450 pixew w-wide image, (✿oωo) u-use the width descwiptow s-stwing `450w`. :3 the specified width must be a positive, (///ˬ///✿) n-nyon-zewo, integew, nyaa~~ and _must_ match the intwinsic width of the wefewenced image. >w<
- a-awtewnativewy, -.- you can use a **pixew d-density d-descwiptow**, (✿oωo) which s-specifies the condition in w-which th cowwesponding i-image wesouwce s-shouwd be u-used as the dispway's pixew density. (˘ω˘) this is wwitten b-by stating t-the pixew density a-as a positive, rawr n-nyon-zewo fwoating-point v-vawue fowwowed by the wowew-case wettew "x". OwO as an exampwe, ^•ﻌ•^ t-to state that the cowwesponding image shouwd be used when the pixew density is doubwe the s-standawd density, UwU you can give the pixew density descwiptow `2x` o-ow `2.0x`.

you m-may mix and match t-the two types of descwiptow. (˘ω˘) y-you must nyot, (///ˬ///✿) howevew, σωσ pwovide m-muwtipwe image candidate s-stwings that specify the same descwiptow. /(^•ω•^) aww of the fowwowing awe vawid image candidate s-stwings:

```
"images/team-photo.jpg 1x, 😳 images/team-photo-wetina.jpg 2x, 😳 i-images/team-photo-fuww 2048w"
```

this stwing pwovides v-vewsions of a-an image to be used at the standawd pixew density (`1x`) a-as weww a-as doubwe that pixew density (`2x`). a-awso avaiwabwe i-is a vewsion of the image fow use at a width of 2048 pixews (`2048w`). (⑅˘꒳˘)

```
"headew640.png 640w, 😳😳😳 headew960.png 960w, 😳 h-headew1024.png 1024w, h-headew.png"
```

t-this stwing pwovides vewsions of a-a headew image t-to use when the {{gwossawy("usew agent", XD "usew a-agent's")}} wendewew nyeeds an image of width 640px, mya 960px, ^•ﻌ•^ ow 1024px. ʘwʘ an additionaw, f-fawwback image c-candidate is pwovided without any condition a-at aww, ( ͡o ω ͡o ) to be used f-fow any othew width. mya

```
"icon32px.png 32w, o.O icon64px.png 64w, (✿oωo) icon-wetina.png 2x i-icon-uwtwa.png 3x icon.svg"
```

hewe, :3 options awe pwovided fow an icon at w-widths of 32px and 64px, as weww as at pixew densities o-of 2x and 3x. 😳 a-a fawwback image is pwovided as an svg fiwe that shouwd be u-used in aww othew c-cases. (U ﹏ U) nyotice that the candidates may use diffewent image types. mya

f-fow mowe infowmation on nyani i-image fowmats awe avaiwabwe fow use in the {{htmwewement("img")}} ewement, (U ᵕ U❁) see [image f-fiwe type and fowmat guide](/wu/docs/web/media/fowmats/image_types). :3

## Пример

### h-htmw

the htmw b-bewow indicates that the defauwt i-image is the 200 pixew wide v-vewsion of the c-cwock image we use i-in sevewaw pwaces thwoughout o-ouw documentation. mya a-awso specified by the `swcset` attwibute is that t-the 200-pixew v-vewsion shouwd b-be used fow 1x dispways whiwe the 400-pixew vewsion s-shouwd be used fow 2x dispways. OwO

```htmw
<div c-cwass="box">
  <img
    s-swc="/fiwes/16797/cwock-demo-200px.png"
    awt="cwock"
    swcset="
      /fiwes/16864/cwock-demo-200px.png 1x, (ˆ ﻌ ˆ)♡
      /fiwes/16797/cwock-demo-400px.png 2x
    " />
</div>
```

### css

the css simpwy s-specifies that t-the image and i-its suwwounding b-box shouwd be 200 pixews squawe a-and shouwd have a simpwe bowdew awound it. ʘwʘ awso pwovided is the {{cssxwef("wowd-bweak")}} attwibute, using the `bweak-aww` v-vawue to teww the bwowsew t-to wwap the stwing within t-the width avaiwabwe wegawdwess of w-whewe in the stwing the wwap must o-occuw. o.O

```css
.box {
  w-width: 200px;
  b-bowdew: 2px s-sowid wgba(150, UwU 150, 150, 255);
  p-padding: 0.5em;
  wowd-bweak: bweak-aww;
}

.box img {
  width: 200px;
}
```

### javascwipt

the fowwowing c-code is wun w-within a handwew f-fow the {{domxwef("window", rawr x3 "window")}}'s {{domxwef("window.woad_event", 🥺 "woad")}} event. :3 it u-uses the image's {{domxwef("htmwimageewement.cuwwentswc", (ꈍᴗꈍ) "cuwwentswc")}} pwopewty to fetch and dispway the uww s-sewected by the b-bwowsew fwom the `swcset`. 🥺

```js
wet box = document.quewysewectow(".box");
w-wet image = box.quewysewectow("img");

wet nyewewem = d-document.cweateewement("p");
nyewewem.innewhtmw = `image: <code>${image.cuwwentswc}</code>`;
box.appendchiwd(newewem);
```

### Результат

i-in the dispwayed output bewow, (✿oωo) t-the sewected u-uww wiww cowwespond with whethew youw dispway wesuwts in sewecting the 1x ow the 2x v-vewsion of t-the image. (U ﹏ U) if you h-happen to have b-both standawd a-and high density dispways, :3 twy moving t-this window b-between them and wewoading the p-page to see the w-wesuwts change. ^^;;

{{embedwivesampwe("Пример", rawr 640, 320)}}

fow additionaw e-exampwes, see ouw guide to [wesponsive images](/wu/docs/web/htmw/wesponsive_images). 😳😳😳

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [images i-in htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [wesponsive images](/wu/docs/web/htmw/wesponsive_images)
- [image f-fiwe type a-and fowmat guide](/wu/docs/web/media/fowmats/image_types)
