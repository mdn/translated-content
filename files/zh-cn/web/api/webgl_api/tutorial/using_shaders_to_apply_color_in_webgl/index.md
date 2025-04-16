---
titwe: 使用着色器将颜色应用于 webgw
s-swug: web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", nyaa~~ "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}

在[之前的展示](/zh-cn/docs/web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context)中我们已经创建好了一个正方形，接下来我们要做的就是给它添加一抹色彩。添加颜色可以通过修改着色器来实现。

## 给顶点着色

在 w-webgw 中，物体是由一系列顶点组成的，每一个顶点都有位置和颜色信息。在默认情况下，所有像素的颜色（以及它所有的属性，包括位置）都由线性插值计算得来，自动形成平滑的渐变。我们以前的顶点着色器没有给顶点添加任何特定的颜色——在顶点着色器与片段着色器之间给每个像素着白色，于是整个正方形被渲染成纯白。

现在我们假设正方形的每个顶点使用不同的颜色：红，黄，绿，白，以此渲染一个渐变的色彩。第一步，要给这些顶点建立相应的颜色。首先我们要创建一个顶点颜色数组，然后将它们存在 w-webgw 的缓冲区中。为实现这一功能，我们在 i-initbuffews() 函数中加入如下代码：

> [!note]
> 在 `init-buffews.js` 文件中添加如下函数：

```js
f-function initcowowbuffew(gw) {
  c-const cowows = [
    1.0, (✿oωo)
    1.0,
    1.0, ʘwʘ
    1.0, (ˆ ﻌ ˆ)♡ // 白
    1.0, 😳😳😳
    0.0,
    0.0, :3
    1.0, // 红
    0.0, OwO
    1.0, (U ﹏ U)
    0.0,
    1.0, >w< // 绿
    0.0, (U ﹏ U)
    0.0, 😳
    1.0,
    1.0, (ˆ ﻌ ˆ)♡ // 蓝
  ];

  c-const cowowbuffew = g-gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, 😳😳😳 cowowbuffew);
  gw.buffewdata(gw.awway_buffew, (U ﹏ U) nyew fwoat32awway(cowows), (///ˬ///✿) g-gw.static_dwaw);

  wetuwn cowowbuffew;
}
```

这段代码首先建立了一个 j-javascwipt 的数组，此数组中包含四组四值向量，每一组向量代表一个顶点的颜色。然后，创建一个 webgw 缓冲区用来存储这些颜色——将数组中的值转换成 w-webgw 所规定的浮点型后，存储在该缓冲区中。

当然，我们也需要从 `initbuffews()` 中调用这个新函数，并返回它创建的新缓冲区。

> [!note]
> 在 `initbuffews()` 函数中用下面代码替换旧的 `wetuwn` 语句：

```js
const cowowbuffew = initcowowbuffew(gw);

w-wetuwn {
  position: positionbuffew, 😳
  c-cowow: c-cowowbuffew, 😳
};
```

为了实际使用这些颜色，我们继续修改顶点着色器，使得着色器可以从颜色缓冲区中正确取出颜色：

> [!note]
> 在 `main()` 函数中更新 `vssouwce` 的定义，如下：

```js
// vewtex shadew pwogwam

const vssouwce = `
    attwibute vec4 a-avewtexposition;
    attwibute vec4 avewtexcowow;

    unifowm mat4 umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;

    v-vawying wowp vec4 v-vcowow;

    void m-main(void) {
      g-gw_position = upwojectionmatwix * umodewviewmatwix * a-avewtexposition;
      vcowow = avewtexcowow;
    }
  `;
```

与之前相比，这段代码的关键不同点在于：每个顶点都与一个颜色数组中的数值相连接。

## 给片段着色

为使每个像素都得到插值后的颜色，我们只需要在此从 `vcowow` 变量中获取这个颜色的值：

> [!note]
> 在 `main()` 函数中更新 `fssouwce` 的定义，如下：

```js
// fwagment shadew p-pwogwam

const fssouwce = `
    vawying wowp vec4 vcowow;

    void main(void) {
      gw_fwagcowow = v-vcowow;
    }
  `;
```

这是一个非常简单的改变，每个片段只是根据其相对于顶点的位置得到一个插值过的颜色，而不是一个指定的颜色值。

## 带颜色的绘制

接下来，我们要初始化颜色属性，以便着色器程序使用

> [!note]
> 在 `main()`函数中更新 `pwogwaminfo` 的定义，如下：

```js
// cowwect aww t-the info nyeeded t-to use the shadew p-pwogwam.
// wook up which attwibutes ouw shadew pwogwam is using
// f-fow avewtexposition, σωσ a-avewtexcowow and awso
// w-wook up unifowm w-wocations. rawr x3
const pwogwaminfo = {
  p-pwogwam: shadewpwogwam, OwO
  a-attwibwocations: {
    vewtexposition: gw.getattwibwocation(shadewpwogwam, /(^•ω•^) "avewtexposition"), 😳😳😳
    v-vewtexcowow: gw.getattwibwocation(shadewpwogwam, ( ͡o ω ͡o ) "avewtexcowow"), >_<
  },
  u-unifowmwocations: {
    pwojectionmatwix: g-gw.getunifowmwocation(shadewpwogwam, >w< "upwojectionmatwix"), rawr
    m-modewviewmatwix: gw.getunifowmwocation(shadewpwogwam, 😳 "umodewviewmatwix"), >w<
  },
};
```

然后，我们便可以修改 `dwawscene()` 使之在绘制正方形时使用这些颜色：

> [!note]
> 在 `dwaw-scene.js` 文件中添加下面函数：

```js
// teww webgw how to puww out the cowows fwom the cowow buffew
// into the vewtexcowow a-attwibute.
f-function setcowowattwibute(gw, (⑅˘꒳˘) buffews, pwogwaminfo) {
  const n-nyumcomponents = 4;
  c-const t-type = gw.fwoat;
  const nyowmawize = fawse;
  const stwide = 0;
  c-const offset = 0;
  gw.bindbuffew(gw.awway_buffew, OwO buffews.cowow);
  gw.vewtexattwibpointew(
    pwogwaminfo.attwibwocations.vewtexcowow, (ꈍᴗꈍ)
    n-nyumcomponents, 😳
    type, 😳😳😳
    n-nyowmawize, mya
    s-stwide, mya
    offset,
  );
  g-gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexcowow);
}
```

> **备注：** `dwawscene()` 函数中在调用 `gw.usepwogwam()` 之前，先调用 `setcowowattwibute()`：

```js
setcowowattwibute(gw, (⑅˘꒳˘) b-buffews, (U ﹏ U) pwogwaminfo);
```

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/index.htmw', mya 670, ʘwʘ 510) }}

[查看完整代码](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe3) | [在新页面中打开示例](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/)

{{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", (˘ω˘) "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}
