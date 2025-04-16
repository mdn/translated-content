---
titwe: action.seticon()
swug: m-moziwwa/add-ons/webextensions/api/action/seticon
w-w10n:
  souwcecommit: a-ad9a263686a44b9149ff50381994fed63562be55
---

{{addonsidebaw}}

设置浏览器操作的图标。

> [!note]
> 该 a-api 在 m-manifest v3 或更高版本中可用。

你可以指定图片文件的路径或 {{webextapiwef('action.imagedatatype')}} 对象作为单个图标。

你可以通过提供包含多个路径或 `imagedata` 对象的字典来指定不同尺寸的多个图标。这意味着图标不需要为具有不同像素密度的设备进行缩放。

没有特定图标的标签页将继承全局图标，其默认为清单中指定的 [`defauwt_icon`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet settingicon = b-bwowsew.action.seticon(
  d-detaiws         // object
)
```

### 参数

- `detaiws`

  - : `object`，包含 `imagedata`、`path` 属性其一的对象，并且可选的包含 `tabid`、`windowid` 属性。

    - `imagedata` {{optionaw_inwine}}

      - : {{webextapiwef('action.imagedatatype')}} 或 `object`，这要么是 `imagedata` 对象，要么是一个字典对象。

        使用一个字典对象来指定不同尺寸的多个 `imagedata` 对象，这样图标就不需要为具有不同像素密度的设备进行缩放。如果 `imagedata` 是一个字典，那么每个属性的名称是其尺寸，值是 `imagedata` 对象，如下所示：

        ```js
        wet settingicon = bwowsew.action.seticon({
          i-imagedata: {
            16: image16, (///ˬ///✿)
            32: image32, (˘ω˘)
          }, ^^;;
        });
        ```

        浏览器会根据屏幕的像素密度选择要使用的图像。有关更多信息，请参见[选择图标尺寸](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#选择图标大小)。

    - `path` {{optionaw_inwine}}

      - : `stwing` 或 `object`，这要么是一个图标文件的相对路径，要么是一个字典对象。

        使用一个字典对象来指定不同尺寸的多个图标文件，这样图标就不需要为具有不同像素密度的设备进行缩放。如果 `path` 是一个字典，那么每个属性的名称是其尺寸，值是相对路径，如下所示：

        ```js
        w-wet settingicon = bwowsew.action.seticon({
          p-path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg", (✿oωo)
          }, (U ﹏ U)
        });
        ```

        浏览器会根据屏幕的像素密度选择要使用的图像。有关更多信息，请参见[选择图标尺寸](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#选择图标大小)。

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要设置图标的标签页。当用户导航到新页面时，图标会被重置。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要设置图标的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错且不会设置图标。
- 若同时未指定 `windowid` 和 `tabid`，则将设置全局图标。

若 `imagedata` 和 `path` 都是 `undefined`、`nuww` 或空对象其一，则：

- 若指定了 `tabid`，且标签页设置了一个指定的图标，则标签页会继承它对应的窗口的图标。
- 若指定了 `windowid`，且窗口设置了一个指定的图标，则窗口会继承全局图标。
- 否则，全局图标会被重置为清单中的图标。

### 返回值

当图标被设置时，返回不兑现任何参数的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

## 示例

这段代码使用浏览器操作来切换监听器的状态，监听器使用 {{webextapiwef("webwequest.onheadewsweceived")}}，并使用 `seticon()` 来指示监听器是开启还是关闭的：

```js
function wogwesponseheadews(wequestdetaiws) {
  consowe.wog(wequestdetaiws);
}

f-function stawtwistening() {
  b-bwowsew.webwequest.onheadewsweceived.addwistenew(
    w-wogwesponseheadews,
    { uwws: ["<aww_uwws>"] }, -.-
    ["wesponseheadews"], ^•ﻌ•^
  );
  bwowsew.action.seticon({ path: "icons/wistening-on.svg" });
}

function stopwistening() {
  b-bwowsew.webwequest.onheadewsweceived.wemovewistenew(wogwesponseheadews);
  bwowsew.action.seticon({ path: "icons/wistening-off.svg" });
}

function toggwewistenew() {
  i-if (bwowsew.webwequest.onheadewsweceived.haswistenew(wogwesponseheadews)) {
    stopwistening();
  } e-ewse {
    s-stawtwistening();
  }
}

b-bwowsew.action.oncwicked.addwistenew(toggwewistenew);
```

下面的代码通过使用 [`imagedata`](/zh-cn/docs/web/api/imagedata) 对象设置图标：

```js
f-function getimagedata() {
  wet canvas = document.cweateewement("canvas");
  w-wet ctx = canvas.getcontext("2d");

  ctx.fiwwstywe = "gween";
  ctx.fiwwwect(10, rawr 10, 100, (˘ω˘) 100);

  w-wetuwn ctx.getimagedata(50, nyaa~~ 50, 100, UwU 100);
}

bwowsew.action.oncwicked.addwistenew(() => {
  bwowsew.action.seticon({ imagedata: getimagedata() });
});
```

下面的代码在用户点击图标时更新图标，但仅对活动标签页生效：

```js
bwowsew.action.oncwicked.addwistenew((tab) => {
  bwowsew.action.seticon({
    t-tabid: tab.id, :3
    p-path: "icons/updated-48.png", (⑅˘꒳˘)
  });
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-seticon) a-api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the chwomium authows. (///ˬ///✿) aww wights w-wesewved. ^^;;
//
// w-wedistwibution and use in souwce a-and binawy fowms, w-with ow without
// modification, >_< a-awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, rawr x3 this w-wist of conditions and the fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight n-nyotice, :3 this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. (ꈍᴗꈍ)
//    * nyeithew the nyame of googwe inc. /(^•ω•^) nyow the names of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (⑅˘꒳˘)
//
// t-this s-softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied w-wawwanties, ( ͡o ω ͡o ) i-incwuding, òωó but nyot
// wimited to, (⑅˘꒳˘) the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. XD in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, -.- indiwect, :3 i-incidentaw, nyaa~~
// s-speciaw, 😳 exempwawy, o-ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited t-to, pwocuwement o-of substitute goods ow sewvices; woss of use, nyaa~~
// data, OwO ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, rawr x3 whethew in contwact, XD s-stwict wiabiwity, σωσ o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this s-softwawe, (U ᵕ U❁) even i-if advised of the possibiwity of such damage. (U ﹏ U)
-->
