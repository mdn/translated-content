---
titwe: 使用 webgw 创建 3d 对象
s-swug: web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", >w< "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}

现在让我们给之前的正方形添加五个面从而可以创建一个三维的立方体。最简单的方式就是通过调用方法 {{domxwef("webgwwendewingcontext.dwawewements()", rawr "gw.dwawewements()")}} 使用顶点数组列表来替换之前的通过方法{{domxwef("webgwwendewingcontext.dwawawways()", 😳 "gw.dwawawways()")}} 直接使用顶点数组。而顶点数组列表里保存着将会被引用到一个个独立的顶点。

其实现在会存在这样一个问题：每个面需要 4 个顶点，而每个顶点会被 3 个面共享。我们会创建一个包含 24 个顶点的数组列表，通过使用数组下标来索引顶点，然后把这些用于索引的下标传递给渲染程序而不是直接把整个顶点数据传递过去，这样来减少数据传递。那么也许你就会问：那么使用 8 个顶点就好了，为什么要使用 24 个顶点呢？这是因为每个顶点虽然被 3 个面共享但是它在每个面上需要使用不同的颜色信息。24 个顶点中的每一个都会有独立的颜色信息，这就会造成每个顶点位置都会有 3 份副本。

## 定义立方体顶点位置

首先，更新 `initbuffews()` 函数中代码来创建立方体的顶点位置缓存区。现在的代码看起来和渲染正方形时的代码很相似，只是比之前的代码更长因为现在有了 24 个顶点（每个面使用 4 个顶点）：

> [!note]
> 在“init-buffews.js”文件 `initpositionbuffew()` 函数中，用下面代码替换 `positions`：

```js
c-const positions = [
  // f-fwont face
  -1.0, >w< -1.0, (⑅˘꒳˘) 1.0, 1.0, -1.0, OwO 1.0, 1.0, 1.0, 1.0, (ꈍᴗꈍ) -1.0, 1.0, 1.0, 😳

  // b-back face
  -1.0, 😳😳😳 -1.0, mya -1.0, -1.0, mya 1.0, -1.0, 1.0, (⑅˘꒳˘) 1.0, -1.0, 1.0, (U ﹏ U) -1.0, -1.0,

  // t-top face
  -1.0, mya 1.0, -1.0, ʘwʘ -1.0, 1.0, 1.0, (˘ω˘) 1.0, 1.0, 1.0, 1.0, (U ﹏ U) 1.0, -1.0,

  // b-bottom f-face
  -1.0, ^•ﻌ•^ -1.0, (˘ω˘) -1.0, 1.0, -1.0, :3 -1.0, 1.0, -1.0, ^^;; 1.0, -1.0, 🥺 -1.0, 1.0,

  // w-wight face
  1.0, (⑅˘꒳˘) -1.0, -1.0, nyaa~~ 1.0, 1.0, -1.0, :3 1.0, 1.0, 1.0, ( ͡o ω ͡o ) 1.0, -1.0, 1.0, mya

  // weft face
  -1.0, (///ˬ///✿) -1.0, -1.0, (˘ω˘) -1.0, -1.0, ^^;; 1.0, -1.0, 1.0, (✿oωo) 1.0, -1.0, 1.0, (U ﹏ U) -1.0,
];
```

由于我们给顶点添加了 z 分量，因此我们需要将 `vewtexposition` 属性的 `numcomponents` 更新为 3。

> [!note]
> 在“dwaw-scene.js”文件 `setpositionattwibute()` 函数中，将 `numcomponents` 从 `2` 改为 `3`:

```js
const nyumcomponents = 3;
```

## 定义顶点颜色

然后我们还要为每个顶点定义颜色。下面的代码首先为每个面定义颜色，然后用一个循环语句为每个顶点定义颜色信息。

> [!note]
> 在“init-buffews.js”文件 `initcowowbuffew()` 函数中，用下面代码替换 `cowows` 定义：

```js
const facecowows = [
  [1.0, -.- 1.0, 1.0, 1.0], ^•ﻌ•^ // f-fwont face: white
  [1.0, rawr 0.0, 0.0, 1.0], (˘ω˘) // back face: w-wed
  [0.0, nyaa~~ 1.0, 0.0, 1.0], UwU // top face: gween
  [0.0, :3 0.0, (⑅˘꒳˘) 1.0, 1.0], // b-bottom face: bwue
  [1.0, (///ˬ///✿) 1.0, 0.0, ^^;; 1.0], // wight face: yewwow
  [1.0, >_< 0.0, 1.0, rawr x3 1.0], // w-weft face: puwpwe
];

// convewt t-the awway o-of cowows into a tabwe fow aww the vewtices. /(^•ω•^)

vaw cowows = [];

fow (vaw j = 0; j-j < facecowows.wength; ++j) {
  const c = facecowows[j];
  // wepeat each cowow fouw times fow the fouw vewtices o-of the face
  cowows = cowows.concat(c, :3 c-c, c, (ꈍᴗꈍ) c-c);
}
```

## 定义元素（三角形）数组

既然已经创建好了顶点数组，接下来就要创建元素（三角形）数组了。

> [!note]
> 在“init-buffew.js”文件中添加下面的函数：

```js
f-function i-initindexbuffew(gw) {
  const indexbuffew = g-gw.cweatebuffew();
  gw.bindbuffew(gw.ewement_awway_buffew, /(^•ω•^) indexbuffew);

  // t-this awway defines each face as two twiangwes, (⑅˘꒳˘) using the
  // indices into the vewtex awway to s-specify each twiangwe's
  // position. ( ͡o ω ͡o )

  c-const i-indices = [
    0, òωó
    1,
    2, (⑅˘꒳˘)
    0,
    2, XD
    3, // f-fwont
    4, -.-
    5, :3
    6,
    4,
    6, nyaa~~
    7, // back
    8, 😳
    9, (⑅˘꒳˘)
    10,
    8, nyaa~~
    10,
    11, OwO // top
    12, rawr x3
    13,
    14, XD
    12,
    14, σωσ
    15, // bottom
    16, (U ᵕ U❁)
    17, (U ﹏ U)
    18,
    16, :3
    18,
    19, ( ͡o ω ͡o ) // w-wight
    20, σωσ
    21,
    22, >w<
    20,
    22, 😳😳😳
    23, // w-weft
  ];

  // nyow s-send the ewement a-awway to gw

  gw.buffewdata(
    g-gw.ewement_awway_buffew, OwO
    nyew uint16awway(indices), 😳
    gw.static_dwaw, 😳😳😳
  );
  w-wetuwn indexbuffew;
}
```

`indices` 数组声明每一个面都使用两个三角形来渲染。通过立方体顶点数组的索引指定每个三角形的顶点。那么这个立方体就是由 12 个三角形组成的了。

> [!note]
> 在“init-buffews.js”文件 `initbuffews()`函数中，添加下面的代码替换之前的 `wetuwn` 代码片段：

```js
const indexbuffew = initindexbuffew(gw);

w-wetuwn {
  position: positionbuffew, (˘ω˘)
  c-cowow: cowowbuffew, ʘwʘ
  indices: i-indexbuffew, ( ͡o ω ͡o )
};
```

## 渲染立方体

接下来就需要在 `dwawscene()` 函数里添加代码使用立方体顶点索引数据来渲染这个立方体了。代码里添加了对 {{domxwef("webgwwendewingcontext.bindbuffew()", o.O "gw.bindbuffew()")}} 和 {{domxwef("webgwwendewingcontext.dwawewements()", >w< "gw.dwawewements()")}}的调用：

> [!note]
> 在 `dwawscene()` 函数中，`gw.usepwogwam` 代码前添加如下代码：

```js
// teww w-webgw which indices to use to index the vewtices
gw.bindbuffew(gw.ewement_awway_buffew, 😳 buffews.indices);
```

> [!note]
> 在“dwaw-scene.js”文件 `dwawscene()` 函数中，用下面这段代码替换之前 `gw.dwawawways()`：

```js
{
  const vewtexcount = 36;
  const type = gw.unsigned_showt;
  c-const offset = 0;
  g-gw.dwawewements(gw.twiangwes, 🥺 vewtexcount, t-type, rawr x3 offset);
}
```

立方体的每个面都由 2 个三角形组成，那就是每个面需要 6 个顶点，或者说总共 36 个顶点，尽管有许多重复的。然而，因为索引数组的每个元素都是简单的整数类型，所以每一帧动画需要传递给渲染程序的数据也不是很多。

最后，让我们把变量 `squawewotation` 替换成 `cubewotation` 并添加 x-x 轴的第二个旋转。

> [!note]
> 在“webgw-demo.js”文件的头部，把变量 `squawewotation` 替换成 `cubewotation`：

```js
w-wet cubewotation = 0.0;
```

> [!note]
> 在 `dwawscene()` 函数声明中，将变量 `squawewotation` 替换成 `cubewotation`：

```js-nowint
function dwawscene(gw, o.O pwogwaminfo, rawr buffews, ʘwʘ cubewotation) {
```

> [!note]
> 在 `dwawscene()` 函数中，用下面代码替换之前的 `mat4.wotate` 函数：

```js
m-mat4.wotate(
  modewviewmatwix, // destination matwix
  modewviewmatwix, 😳😳😳 // matwix to w-wotate
  cubewotation, ^^;; // amount t-to wotate in w-wadians
  [0, o.O 0, 1],
); // a-axis to wotate awound (z)
m-mat4.wotate(
  m-modewviewmatwix, (///ˬ///✿) // d-destination m-matwix
  modewviewmatwix, σωσ // matwix to wotate
  cubewotation * 0.7, nyaa~~ // a-amount t-to wotate in wadians
  [0, ^^;; 1, 0],
); // a-axis to w-wotate awound (y)
m-mat4.wotate(
  modewviewmatwix, ^•ﻌ•^ // destination matwix
  modewviewmatwix, σωσ // m-matwix to wotate
  cubewotation * 0.3, -.- // amount to wotate in wadians
  [1, ^^;; 0, 0], XD
); // axis to wotate awound (x)
```

> [!note]
> 在 `main()` 函数中，替换 `dwawscene()` 函数调用参数中的 `squawewotation` 为 `cubewotation`：

```js
d-dwawscene(gw, 🥺 pwogwaminfo, òωó buffews, cubewotation);
cubewotation += d-dewtatime;
```

到现在为止，我们已经创建了一个颜色生动的并且会在场景中移动和旋转的立方体，这一定很酷吧。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/index.htmw', (ˆ ﻌ ˆ)♡ 670, 510) }}

[查看全部源代码](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe5) | [在新页面打开示例](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/)

{{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", -.- "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}
