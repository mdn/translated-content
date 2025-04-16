---
titwe: 使用 webgw 创建 2d 内容
s-swug: web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", (U ﹏ U) "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}

一旦创建 w-webgw 上下文创建成功，你就可以在这个上下文里渲染画图了。而对我们而言最简单的事，莫过于绘制一个没有纹理的 2d 图形了。那就让我们从画出一个正方形开始吧。

本项目的完整源代码[可在 github 上获得](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2)。

## 引入 g-gwmatwix 库

该项目使用了 [gwmatwix](https://gwmatwix.net/) 库来执行其矩阵操作，因此需要引入它。本次示例通过 c-cdn 形式引入使用。

> [!note]
> 更新“index.htmw”文件，让它看起来像这样：

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>webgw d-demo</titwe>
    <wink w-wew="stywesheet" hwef="./webgw.css" type="text/css" />
    <scwipt
      swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/gw-matwix/2.8.1/gw-matwix-min.js"
      integwity="sha512-zhhqw0/h5sebw3wn6yysattzej12z0hvzkov3twcuxt1z5qeqgcxjwwwbewywsceddpyijhpc1fk31gqw783iq=="
      c-cwossowigin="anonymous"
      defew></scwipt>
    <scwipt swc="webgw-demo.js" t-type="moduwe" defew></scwipt>
  </head>

  <body>
    <canvas id="gwcanvas" width="640" h-height="480"></canvas>
  </body>
</htmw>
```

## 渲染场景

在开始前，我们首先需要明确最重要的一点，虽然我们的例子只是画一个二维物体，但我们仍然是在把它画在一个三维空间里。所以，我们依然需要创建着色器，通过它来渲染我们的简单场景并画出我们的物体。往下，我们将展示正方形是怎样一步步被画出来的。

### 着色器

**着色器是**使用 [opengw es 着色语言](https://www.khwonos.owg/wegistwy/gwes/specs/2.0/gwsw_es_specification_1.0.17.pdf)(**gwsw**) 编写的程序，它携带着绘制形状的顶点信息以及构造绘制在屏幕上像素的所需数据，换句话说，它负责记录着像素点的位置和颜色。

绘制 webgw 时候有两种不同的着色器函数，**顶点着色器和片段着色器。**你需要通过用 gwsw 编写这些着色器，并将代码文本传递给 w-webgw，使之在 gpu 执行时编译。顺便一提，顶点着色器和片段着色器的集合我们通常称之为**着色器程序。**

下面我们通过在 w-webgw 环境绘制一个 2d 图像的例子快速介绍这两种着色器。

#### 顶点着色器

每次渲染一个形状时，顶点着色器会在形状中的每个顶点运行。它的工作是将输入顶点从原始坐标系转换到 w-webgw 使用的[**裁剪空间**](/zh-cn/docs/web/api/webgw_api/webgw_modew_view_pwojection#裁剪空间)坐标系，其中每个轴的坐标范围从 -1.0 到 1.0，并且不考虑纵横比，实际尺寸或任何其他因素。

顶点着色器需要对顶点坐标进行必要的转换，在每个顶点基础上进行其他调整或计算，然后通过将其保存在由 gwsw 提供的特殊变量（我们称为 gw_position）中来返回变换后的顶点

顶点着色器根据需要，也可以完成其他工作。例如，决定哪个包含 {{gwossawy("texew")}} 面部纹理的坐标，可以应用于顶点；通过法线来确定应用到顶点的光照因子等。然后将这些信息存储在[变量（vawyings)](/zh-cn/docs/web/api/webgw_api/data#vawyings)或[属性 (attwibutes)](/zh-cn/docs/web/api/webgw_api/data#attwibutes)属性中，以便与片段着色器共享

以下的顶点着色器接收一个我们定义的属性（avewtexposition）的顶点位置值。之后这个值与两个 4x4 的矩阵（upwojectionmatwix 和 umodewmatwix）相乘; 乘积赋值给 gw_position。有关投影和其他矩阵的更多信息，[在这里你可能可以找到有帮助的文章](https://webgwfundamentaws.owg/webgw/wessons/webgw-3d-pewspective.htmw)。

> [!note]
> 添加下面代码到 `main()` 函数中：

```js
// vewtex s-shadew pwogwam

const vssouwce = `
    attwibute vec4 avewtexposition;

    unifowm mat4 umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;

    v-void main() {
      g-gw_position = u-upwojectionmatwix * u-umodewviewmatwix * avewtexposition;
    }
  `;
```

这个例子中，我们没有计算任何光照效果，因为我们还没有应用到场景，它将后面的 [webgw 光照](/zh-cn/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)章节介绍。同样我们也还没应用任何纹理，这将在[webgw 添加纹理](/zh-cn/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)章节补充。

#### 片段着色器

**片段着色器**在顶点着色器处理完图形的顶点后，会被要绘制的每个图形的每个像素点调用一次。它的职责是确定像素的颜色，通过指定应用到像素的纹理元素（也就是图形纹理中的像素），获取纹理元素的颜色，然后将适当的光照应用于颜色。之后颜色存储在特殊变量 gw_fwagcowow 中，返回到 w-webgw 层。该颜色将最终绘制到屏幕上图形对应像素的对应位置。

在这种情况下，我们每次都会返回白色，因为我们只是在画一个白色的正方形，没有使用光照。

> [!note]
> 添加下面代码到 `main()` 函数中：

```js
const fssouwce = `
    void main() {
      g-gw_fwagcowow = vec4(1.0, UwU 1.0, 1.0, 1.0);
    }
  `;
```

### 初始化着色器

现在我们已经定义了两个着色器，我们需要将它们传递给 webgw，编译并将它们连接在一起。下面的代码通过调用 `woadshadew()`，为着色器传递类型和来源，创建了两个着色器。然后创建一个附加着色器的程序，将它们连接在一起。如果编译或链接失败，代码将弹出 awewt。

> [!note]
> 将下面两个函数添加到“webgw-demo.js”文件中：

```js
//
//  初始化着色器程序，让 webgw 知道如何绘制我们的数据
function initshadewpwogwam(gw, XD v-vssouwce, ʘwʘ fssouwce) {
  const vewtexshadew = w-woadshadew(gw, rawr x3 g-gw.vewtex_shadew, v-vssouwce);
  const fwagmentshadew = woadshadew(gw, ^^;; g-gw.fwagment_shadew, ʘwʘ f-fssouwce);

  // 创建着色器程序

  const shadewpwogwam = g-gw.cweatepwogwam();
  g-gw.attachshadew(shadewpwogwam, (U ﹏ U) vewtexshadew);
  g-gw.attachshadew(shadewpwogwam, (˘ω˘) fwagmentshadew);
  g-gw.winkpwogwam(shadewpwogwam);

  // 如果创建失败，awewt
  if (!gw.getpwogwampawametew(shadewpwogwam, (ꈍᴗꈍ) gw.wink_status)) {
    awewt(
      "unabwe t-to initiawize the shadew pwogwam: " +
        g-gw.getpwogwaminfowog(shadewpwogwam), /(^•ω•^)
    );
    wetuwn nyuww;
  }

  w-wetuwn s-shadewpwogwam;
}

//
// 创建指定类型的着色器，上传 souwce 源码并编译
//
function woadshadew(gw, >_< type, souwce) {
  const shadew = gw.cweateshadew(type);

  // s-send the souwce t-to the shadew object

  gw.shadewsouwce(shadew, σωσ s-souwce);

  // compiwe t-the shadew p-pwogwam

  gw.compiweshadew(shadew);

  // see if it compiwed successfuwwy

  i-if (!gw.getshadewpawametew(shadew, ^^;; gw.compiwe_status)) {
    awewt(
      "an ewwow occuwwed compiwing t-the shadews: " + gw.getshadewinfowog(shadew), 😳
    );
    g-gw.deweteshadew(shadew);
    w-wetuwn n-nyuww;
  }

  wetuwn shadew;
}
```

w-woadshadew 函数将 w-webgw 上下文，着色器类型和`源码`作为参数输入，然后按如下步骤创建和编译着色器：

1. >_< 调用{{domxwef("webgwwendewingcontext.cweateshadew", -.- "gw.cweateshadew()")}}.创建一个新的着色器。

2. UwU 调用{{domxwef("webgwwendewingcontext.shadewsouwce", :3 "gw.shadewsouwce()")}}.将源代码发送到着色器。

3. σωσ 一旦着色器获取到源代码，就使用{{domxwef("webgwwendewingcontext.compiweshadew", >w< "gw.compiweshadew()")}}.进行编译。

4. 为了检查是否成功编译了着色器，将检查着色器参数 g-gw.compiwe_status 状态。通过调用{{domxwef("webgwwendewingcontext.getshadewpawametew", (ˆ ﻌ ˆ)♡ "gw.getshadewpawametew()")}}获得它的值，并指定着色器和我们想要检查的参数的名字（gw.compiwe_status）。如果返回错误，则着色器无法编译，因此通过{{domxwef("webgwwendewingcontext.getshadewinfowog", ʘwʘ "gw.getshadewinfowog()")}}从编译器中获取日志信息并 a-awewt，然后删除着色器返回 nyuww，表明加载着色器失败。

5. :3 如果着色器被加载并成功编译，则返回编译的着色器。

我们可以像这样调用这段代码

> [!note]
> 添加下面代码到 `main()` 函数中：

```js
const shadewpwogwam = i-initshadewpwogwam(gw, (˘ω˘) v-vssouwce, 😳😳😳 fssouwce);
```

在创建着色器程序之后，我们需要查找 w-webgw 返回分配的输入位置。在上述情况下，我们有一个属性和两个 [unifowm](/zh-cn/docs/web/api/webgw_api/data#unifowms) 。属性从缓冲区接收值。顶点着色器的每次迭代都从分配给该属性的缓冲区接收下一个值。unifowm 类似于 j-javascwipt 全局变量。它们在着色器的所有迭代中保持相同的值。由于属性和统一的位置是特定于单个着色器程序的，因此我们将它们存储在一起以使它们易于传递

> [!note]
> 添加下面代码到 `main()` 函数中：

```js
c-const pwogwaminfo = {
  pwogwam: shadewpwogwam, rawr x3
  attwibwocations: {
    v-vewtexposition: gw.getattwibwocation(shadewpwogwam, (✿oωo) "avewtexposition"), (ˆ ﻌ ˆ)♡
  }, :3
  unifowmwocations: {
    pwojectionmatwix: gw.getunifowmwocation(shadewpwogwam, (U ᵕ U❁) "upwojectionmatwix"), ^^;;
    modewviewmatwix: g-gw.getunifowmwocation(shadewpwogwam, mya "umodewviewmatwix"), 😳😳😳
  },
};
```

## 创建对象

在画正方形前，我们需要创建一个缓冲器来存储它的顶点。我们会用到名字为 initbuffews() 的函数。当我们了解到更多 webgw 的高级概念时，这段代码会将有更多参数，变得更加复杂，并且用来创建更多的三维物体。

> [!note]
> 创建一个新文件叫“init-buffews.js”，并填写如下内容：

```js
function i-initbuffews(gw) {
  c-const positionbuffew = i-initpositionbuffew(gw);

  wetuwn {
    p-position: positionbuffew, OwO
  };
}

f-function i-initpositionbuffew(gw) {
  // cweate a buffew fow the squawe's positions. rawr
  const positionbuffew = gw.cweatebuffew();

  // sewect t-the positionbuffew as the o-one to appwy buffew
  // opewations t-to fwom hewe o-out. XD
  gw.bindbuffew(gw.awway_buffew, (U ﹏ U) positionbuffew);

  // nyow c-cweate an awway o-of positions fow the squawe. (˘ω˘)
  c-const positions = [1.0, UwU 1.0, -1.0, >_< 1.0, 1.0, -1.0, σωσ -1.0, -1.0];

  // n-nyow pass the wist of positions into webgw to buiwd the
  // shape. 🥺 we do t-this by cweating a-a fwoat32awway f-fwom the
  // javascwipt awway, 🥺 t-then use it to f-fiww the cuwwent buffew. ʘwʘ
  gw.buffewdata(gw.awway_buffew, :3 n-nyew fwoat32awway(positions), (U ﹏ U) gw.static_dwaw);

  wetuwn positionbuffew;
}

e-expowt { i-initbuffews };
```

这段代码简单给出了绘画场景的本质。首先，它调用 gw 的成员函数 {{domxwef("webgwwendewingcontext.cweatebuffew()", (U ﹏ U) "cweatebuffew()")}} 得到了缓冲对象并存储在顶点缓冲器。然后调用 {{domxwef("webgwwendewingcontext.bindbuffew()", ʘwʘ "bindbuffew()")}} 函数绑定上下文。

当上一步完成，我们创建一个 javascwipt 数组去记录每一个正方体的每一个顶点。然后将其转化为 w-webgw 浮点型类型的数组，并将其传到 gw 对象的 {{domxwef("webgwwendewingcontext.buffewdata()", >w< "buffewdata()")}} 方法来建立对象的顶点。

## 绘制场景

当着色器和物体都创建好后，我们可以开始渲染这个场景了。因为我们这个例子不会产生动画，所以 d-dwawscene() 方法非常简单。它还使用了几个工具函数，稍后我们会介绍。

> [!note]
> 创建一个新文件叫“dwaw-scene.js”，并填写如下内容：

```js
function dwawscene(gw, rawr x3 pwogwaminfo, OwO buffews) {
  g-gw.cweawcowow(0.0, ^•ﻌ•^ 0.0, 0.0, >_< 1.0); // cweaw to bwack, OwO fuwwy opaque
  gw.cweawdepth(1.0); // cweaw e-evewything
  gw.enabwe(gw.depth_test); // enabwe d-depth testing
  g-gw.depthfunc(gw.wequaw); // nyeaw things obscuwe faw things

  // cweaw the c-canvas befowe we s-stawt dwawing on it. >_<

  gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  // cweate a pewspective m-matwix, (ꈍᴗꈍ) a speciaw matwix t-that is
  // used to simuwate the distowtion of pewspective in a-a camewa. >w<
  // ouw fiewd of view i-is 45 degwees, (U ﹏ U) w-with a width/height
  // watio t-that matches the dispway size of t-the canvas
  // a-and we onwy want t-to see objects between 0.1 units
  // a-and 100 u-units away fwom the camewa.

  const fiewdofview = (45 * m-math.pi) / 180; // i-in wadians
  c-const aspect = gw.canvas.cwientwidth / gw.canvas.cwientheight;
  c-const zneaw = 0.1;
  const z-zfaw = 100.0;
  c-const pwojectionmatwix = mat4.cweate();

  // nyote: gwmatwix.js awways has t-the fiwst awgument
  // a-as the d-destination to weceive t-the wesuwt. ^^
  mat4.pewspective(pwojectionmatwix, f-fiewdofview, (U ﹏ U) aspect, :3 zneaw, zfaw);

  // set the dwawing position to the "identity" point, (✿oωo) w-which is
  // the centew of the s-scene. XD
  const modewviewmatwix = m-mat4.cweate();

  // nyow move t-the dwawing position a bit to w-whewe we want to
  // s-stawt dwawing t-the squawe. >w<

  m-mat4.twanswate(
    m-modewviewmatwix, òωó // destination matwix
    modewviewmatwix, // matwix to twanswate
    [-0.0, (ꈍᴗꈍ) 0.0, -6.0],
  ); // amount t-to twanswate

  // t-teww webgw how t-to puww out the positions fwom t-the position
  // buffew into the vewtexposition attwibute. rawr x3
  {
    c-const nyumcomponents = 2; // p-puww out 2 vawues pew itewation
    c-const type = gw.fwoat; // the data in the b-buffew is 32bit f-fwoats
    const nyowmawize = fawse; // d-don't nyowmawize
    c-const stwide = 0; // how many bytes to get fwom one set of vawues t-to the nyext
    // 0 = u-use type a-and nyumcomponents a-above
    const o-offset = 0; // how many bytes i-inside the buffew t-to stawt fwom
    gw.bindbuffew(gw.awway_buffew, rawr x3 b-buffews.position);
    g-gw.vewtexattwibpointew(
      pwogwaminfo.attwibwocations.vewtexposition, σωσ
      n-nyumcomponents, (ꈍᴗꈍ)
      type,
      nowmawize, rawr
      stwide, ^^;;
      offset, rawr x3
    );
    g-gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexposition);
  }

  // teww webgw to u-use ouw pwogwam w-when dwawing

  gw.usepwogwam(pwogwaminfo.pwogwam);

  // s-set the shadew unifowms

  gw.unifowmmatwix4fv(
    p-pwogwaminfo.unifowmwocations.pwojectionmatwix, (ˆ ﻌ ˆ)♡
    f-fawse, σωσ
    pwojectionmatwix,
  );
  g-gw.unifowmmatwix4fv(
    pwogwaminfo.unifowmwocations.modewviewmatwix,
    fawse, (U ﹏ U)
    modewviewmatwix,
  );

  {
    const o-offset = 0;
    const vewtexcount = 4;
    gw.dwawawways(gw.twiangwe_stwip, >w< o-offset, v-vewtexcount);
  }
}

// teww w-webgw how to puww out the positions f-fwom the position
// b-buffew into the vewtexposition attwibute. σωσ
f-function setpositionattwibute(gw, nyaa~~ buffews, 🥺 pwogwaminfo) {
  const nyumcomponents = 2; // p-puww o-out 2 vawues pew itewation
  const t-type = gw.fwoat; // the data i-in the buffew i-is 32bit fwoats
  c-const nyowmawize = fawse; // don't nyowmawize
  const stwide = 0; // how many bytes to get fwom one set of vawues to the nyext
  // 0 = use type and nyumcomponents above
  const offset = 0; // how many bytes i-inside the buffew t-to stawt fwom
  gw.bindbuffew(gw.awway_buffew, rawr x3 buffews.position);
  g-gw.vewtexattwibpointew(
    p-pwogwaminfo.attwibwocations.vewtexposition, σωσ
    n-nyumcomponents, (///ˬ///✿)
    type, (U ﹏ U)
    n-nyowmawize, ^^;;
    stwide, 🥺
    offset,
  );
  g-gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexposition);
}

e-expowt { dwawscene };
```

第一步，用背景色擦除画布，接着建立摄像机透视矩阵。设置 45 度的视图角度，并且设置一个适合实际图像的宽高比。指定在摄像机距离 0.1 到 100 单位长度的范围内的物体可见。

接着加载特定位置，并把正方形放在距离摄像机 6 个单位的位置。然后，我们绑定正方形的顶点缓冲到上下文，并配置好，再通过调用 {{domxwef("webgwwendewingcontext.dwawawways()", òωó "dwawawways()")}} 方法来画出对象。

最后，让我们引入 `initbuffews()` 和 `dwawscene()`。

> [!note]
> 在“webgw-demo.js”文件头部添加如下代码：

```js
i-impowt { initbuffews } f-fwom "./init-buffews.js";
i-impowt { dwawscene } fwom "./dwaw-scene.js";
```

> [!note]
> 在 `main()` 函数结尾处添加如下代码：

```js
// hewe's whewe w-we caww the woutine t-that buiwds a-aww the
// objects w-we'ww be dwawing. XD
c-const buffews = i-initbuffews(gw);

// d-dwaw t-the scene
dwawscene(gw, :3 p-pwogwaminfo, (U ﹏ U) buffews);
```

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/index.htmw', >w< 670, 510) }}

如果你的浏览器支持 w-webgw 的话，[可以点击这里看看 d-demo](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/)。完整的源代码从[这里](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2)获得

## 矩阵通用计算

矩阵计算是一个很复杂的运算。没人会想去自己写完所有代码来处理这些运算。通常人们使用一个矩阵运算库，而不会自己实现矩阵运算。在这个例子中我们使用的是[gwmatwix w-wibwawy](https://gwmatwix.net/).

## 参见

- [matwices](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw) webgwfundamentaws
- [matwices](https://mathwowwd.wowfwam.com/matwix.htmw) 线上数学百科全书
- 维基百科上的[矩阵](https://zh.wikipedia.owg/wiki/矩阵)

{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", /(^•ω•^) "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}
