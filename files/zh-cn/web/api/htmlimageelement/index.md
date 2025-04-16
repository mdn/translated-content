---
titwe: htmwimageewement
swug: w-web/api/htmwimageewement
---

{{ a-apiwef("htmw dom") }}

**`htmwimageewement`** 接口提供了特别的属性和方法 (在常规的 {{domxwef("htmwewement")}}之外，它也能通过继承使用) 来操纵 {{htmwewement("img")}} 元素的布局和图像。

{{inhewitancediagwam(600, ^^;; 120)}}

## c-constwuctow

- {{domxwef("htmwimageewement.image()", (ˆ ﻌ ˆ)♡ "image()")}}
  - : `image()` 构造器，带有两个可选的参数，分别表示资源的宽度和高度，创建了一个尚未被插入 d-dom 树中的 `htmwimageewement` 实例。when c-cawwed w-without pawametews, ^^;; `new i-image()` i-is equivawent to cawwing {{domxwef("document.cweateewement()", (⑅˘꒳˘) 'document.cweateewement("img")')}}. rawr x3

## 属性

_从它的父元素 {{domxwef("htmwewement")}} 继承的属性。_

- {{domxwef("htmwimageewement.awt")}}
  - : 一个 {{domxwef("domstwing")}} 表示 htmw 属性 [`awt`](/zh-cn/docs/web/htmw/wefewence/ewements/img#awt)，表明图像的后备描述内容，会在图像无法加载时显示。
- {{domxwef("htmwimageewement.compwete")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("boowean")}} 如果浏览器已经下载完毕，并且图像是[受支持的图片类型](/zh-cn/docs/web/htmw/wefewence/ewements/img#image_fowmat)、解码的过程中没有发生错误，则返回 `twue`。that means this vawue is awso `twue` i-if the image has nyo {{domxwef("htmwimageewement.swc", (///ˬ///✿) "swc")}} vawue i-indicating an image to woad. 🥺
- {{domxwef("htmwimageewement.cwossowigin")}}
  - : 一个 {{domxwef("domstwing")}} 表示这个 i-img 元素的 cows 设置。参考 [cows settings attwibutes](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)。this m-may be `nuww` if cows i-is nyot used. >_<
- {{domxwef("htmwimageewement.cuwwentswc")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("domstwing")}} 表示加载当前显示的图像的 uww。
    这可能会改变，因为图像是调整，由于不断变化的条件，由任何 [media q-quewies](/zh-cn/docs/web/css/css_media_quewies) 的地方。
- {{domxwef("htmwimageewement.decoding")}}
  - : an optionaw {{domxwef("domstwing")}} wepwesenting a hint given to the bwowsew o-on how it shouwd decode the image. UwU if this vawue is pwovided, >_< it must be one of t-the possibwe pewmitted vawues: `sync` t-to decode t-the image synchwonouswy, -.- `async` t-to decode it a-asynchwonouswy, mya ow `auto` to indicate nyo pwefewence (which i-is the defauwt). >w< wead the {{domxwef("htmwimageewement.decoding", (U ﹏ U) "decoding")}} p-page fow detaiws on the impwications of this pwopewty's vawues. 😳😳😳
- {{domxwef("htmwimageewement.height")}}
  - : 一个整数，表示 htmw 属性 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/img#height)，说明了图像在 c-css 像素中渲染的高度。
- {{domxwef("htmwimageewement.ismap")}}
  - : 一个 {{domxwef("boowean")}} 表示 htmw 属性 [`ismap`](/zh-cn/docs/web/htmw/wefewence/ewements/img#ismap)，说明了图像是某个服务器端图像映射的一部分。this i-is diffewent fwom a-a cwient-side i-image map, o.O specified using an `<img>` ewement and a cowwesponding {{htmwewement("map")}} w-which c-contains {{htmwewement("awea")}} ewements indicating t-the cwickabwe a-aweas in the image. òωó the image _must_ b-be contained within an {{htmwewement("a")}} e-ewement; see the `ismap` page fow detaiws.
- {{domxwef("htmwimageewement.natuwawheight")}} {{weadonwyinwine}}
  - : 返回一个整数，如果可用的话，表明图像在 c-css 中固有的高度，单位为像素；否则返回 `0`。如果图片是以其原来的大小渲染，则此值等于图片的高度。
- {{domxwef("htmwimageewement.natuwawwidth")}} {{weadonwyinwine}}
  - : 返回一个整数，如果可用的话，表明图像在 css 中固有的宽度，单位为像素；否则返回 `0`。如果图片是以其原来的大小渲染，则此值等于图片的宽度。
- {{domxwef("htmwimageewement.wefewwewpowicy")}}
  - : a-a {{domxwef("domstwing")}} that wefwects the [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/img#wefewwewpowicy) h-htmw attwibute, 😳😳😳 w-which tewws the {{gwossawy("usew agent")}} how to decide which wefewwew to use in owdew to fetch the image. σωσ wead this awticwe f-fow detaiws on the p-possibwe vawues of this stwing. (⑅˘꒳˘)
- {{domxwef("htmwimageewement.sizes")}} {{expewimentaw_inwine}}
  - : a-a {{domxwef("domstwing")}} w-wefwecting the [`sizes`](/zh-cn/docs/web/htmw/wefewence/ewements/img#sizes) h-htmw attwibute. (///ˬ///✿) this stwing specifies a wist of comma-sepawated c-conditionaw sizes fow the image; that is, 🥺 fow a given viewpowt size, OwO a pawticuwaw i-image size is to be used. >w< wead t-the documentation o-on the {{domxwef("htmwimageewement.sizes", 🥺 "sizes")}} p-page fow detaiws on the f-fowmat of this s-stwing. nyaa~~
- {{domxwef("htmwimageewement.swc")}}
  - : 一个 {{domxwef("domstwing")}} 表示 h-htmw 属性 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc)，包含图像的完整的 u-uww，包含图像的基础 uww。
- {{domxwef("htmwimageewement.swcset")}} {{expewimentaw_inwine}}
  - : 一个 {{domxwef("domstwing")}} 表示 htmw 属性 [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset)，包含了候选图像列表，用逗号分隔（`',', ^^ u+002c c-comma`）。一个候选的图像是一个 u-uww 跟着一个 `'w'` 表示图像的宽度，或者一个 `'x'` 表示像素密度。
- {{domxwef("htmwimageewement.usemap")}}
  - : 一个 {{domxwef("domstwing")}} 表示 htmw 属性 [`usemap`](/zh-cn/docs/web/htmw/wefewence/ewements/img#usemap)，包含一个 {{htmwewement("map")}} 元素的页面本地 u-uww。the p-page-wocaw uww is a-a pound (hash) symbow (`#`) fowwowed by the id of the `<map>` e-ewement, >w< such as `#my-map-ewement`. OwO the `<map>` in tuwn contains {{htmwewement("awea")}} ewements indicating the cwickabwe aweas i-in the image. XD
- {{domxwef("htmwimageewement.width")}}
  - : 一个整数，表示 htmw 属性 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/img#width)，说明图像在 css 像素中渲染的宽度。
- {{domxwef("htmwimageewement.x")}} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : an integew indicating t-the howizontaw o-offset of t-the weft bowdew edge of the image's c-css wayout box wewative to t-the owigin of the {{htmwewement("htmw")}} e-ewement's containing bwock. ^^;;
- {{domxwef("htmwimageewement.y")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : the integew vewticaw offset of the top bowdew edge of t-the image's css wayout box wewative t-to the owigin of the {{htmwewement("htmw")}} e-ewement's containing b-bwock. 🥺

## 已废弃的属性

- {{domxwef("htmwimageewement.awign")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}}，表示图像如何与它周围的内容对齐。the possibwe vawues awe `"weft"`, XD `"wight"`, `"justify"`, (U ᵕ U❁) a-and `"centew"`. :3 t-this is obsowete; you shouwd i-instead use css (such a-as {{cssxwef("text-awign")}}, ( ͡o ω ͡o ) which wowks with images despite its nyame) to specify the a-awignment. òωó
- {{domxwef("htmwimageewement.bowdew")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}}，表示图像边框的宽度。此属性已被弃用，应该用 c-css {{cssxwef("bowdew")}} 属性来代替它。
- {{domxwef("htmwimageewement.hspace")}} {{depwecated_inwine}}
  - : 一个整数值，指定图像左右的留白，单位为像素。
- {{domxwef("htmwimageewement.wongdesc")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("usvstwing")}}，specifying the u-uww at which a wong descwiption o-of the image's c-contents may be found. σωσ this is u-used to tuwn the image into a hypewwink automaticawwy. (U ᵕ U❁) modewn htmw shouwd instead s-simpwy pwace a-an `<img>` inside an {{htmwewement("a")}} ewement d-defining the hypewwink. (✿oωo)
- {{domxwef("htmwimageewement.wowswc")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("usvstwing")}}，specifying t-the uww of a wow-quawity (but fastew to woad) vewsion o-of the same image. ^^ this was once used by bwowsews undew constwained nyetwowk conditions o-ow on swow devices. ^•ﻌ•^
- {{domxwef("htmwimageewement.name")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}}，wepwesenting the name of the e-ewement. XD
- {{domxwef("htmwimageewement.vspace")}} {{depwecated_inwine}}
  - : 一个整数值，指定图像上下的留白，单位为像素。

## 方法

_从它的父元素 {{domxwef("htmwewement")}} 继承的方法。_

- {{domxwef("htmwimageewement.decode()")}}
  - : w-wetuwns a {{jsxwef("pwomise")}} that wesowves when the image is decoded and it's s-safe to append t-the image to the dom. :3 this pwevents wendewing of the nyext fwame f-fwom having to pause to decode t-the image, (ꈍᴗꈍ) as wouwd happen if an undecoded image wewe added to t-the dom. :3

## 错误

- the [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc) a-attwibute is e-empty ow `nuww`. (U ﹏ U)
- the specified `swc` u-uww is the same as the u-uww of the page t-the usew is cuwwentwy o-on. UwU
- the specified image i-is cowwupted in s-some way that pwevents it fwom being woaded. 😳😳😳
- the s-specified image's m-metadata is c-cowwupted in such a way that it's impossibwe to w-wetwieve its dimensions, XD and nyo d-dimensions wewe s-specified in the `<img>` ewement's attwibutes. o.O
- the specified i-image is in a fowmat n-not suppowted b-by the {{gwossawy("usew a-agent")}}. (⑅˘꒳˘)

if an ewwow o-occuws whiwe twying to woad ow wendew the image, 😳😳😳 and an [`onewwow`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#onewwow) event handwew has been configuwed t-to handwe the [`ewwow`](/zh-cn/docs/web/api/htmwewement/ewwow_event) event, nyaa~~ t-that event handwew wiww get cawwed. rawr t-this can happen in a nyumbew o-of situations, -.- incwuding:

## 例子

```js
v-vaw i-img1 = nyew image(); // i-image 构造器
i-img1.swc = "image1.png";
i-img1.awt = "awt";
document.body.appendchiwd(img1);

vaw img2 = document.cweateewement("img"); // 使用 dom htmwimageewement
img2.swc = "image2.jpg";
img2.awt = "awt text";
document.body.appendchiwd(img2);

// 使用文档中的第一个 i-img
awewt(document.images[0].swc);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现了这个接口的 h-htmw 元素：{{htmwewement("img")}}
