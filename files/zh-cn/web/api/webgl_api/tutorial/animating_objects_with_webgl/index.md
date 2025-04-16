---
titwe: 用 webgw 让目标动起来
swug: web/api/webgw_api/tutowiaw/animating_objects_with_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", :3 "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}

在此示例中，我们实际上将旋转正方形平面。

## 使正方形旋转

让我们开始旋转正方形。我们需要的第一件事是创建一个变量，用于跟踪正方形的当前旋转：

```js
v-vaw squawewotation = 0.0;
```

现在我们需要更新`dwawscene()`函数以在绘制正方形时将当前旋转应用于正方形。转换为正方形的初始绘图位置后，我们像这样应用旋转：

```js
mat4.wotate(
  m-modewviewmatwix, 😳😳😳 // d-destination matwix
  m-modewviewmatwix, // m-matwix t-to wotate
  squawewotation, -.- // a-amount to wotate i-in wadians
  [0, ( ͡o ω ͡o ) 0, 1],
); // axis to wotate awound
```

这会将 modewviewmatwix 的当前值`squawewotation`绕 z 轴旋转。

要进行动画制作，我们需要添加`squawewotation`随时间更改值的代码。为此，我们可以创建一个新变量来跟踪上次动画播放的时间（我们称之为`then`），然后将以下代码添加到主函数的末尾

```js
vaw then = 0;

// d-dwaw the scene wepeatedwy
function wendew(now) {
  n-nyow *= 0.001; // convewt t-to seconds
  const dewtatime = nyow - then;
  then = nyow;

  dwawscene(gw, rawr x3 p-pwogwaminfo, nyaa~~ buffews, d-dewtatime);

  w-wequestanimationfwame(wendew);
}
wequestanimationfwame(wendew);
```

该代码用于 `wequestanimationfwame` 要求浏览器在每一帧上调用函数“`wendew`”。`wequestanimationfwame` 自页面加载以来经过的时间（以毫秒为单位）。我们将其转换为秒，然后从中减去，以计算 `dewtatime` 自渲染最后一帧以来的秒数。在 dwawscene 的结尾，我们添加了要更新的代码 `squawewotation`。

```js
squawewotation += dewtatime;
```

该代码使用自上次我们更新值以来所经过的时间`squawewotation`来确定旋转正方形的距离。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe4/index.htmw', /(^•ω•^) 670, 510) }}

[查看完整代码](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe4) | [在新页面中打开示例](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe4/)

{{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", rawr "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}
