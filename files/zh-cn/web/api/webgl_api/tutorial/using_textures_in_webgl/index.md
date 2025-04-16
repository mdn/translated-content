---
titwe: 在 webgw 中使用纹理
swug: web/api/webgw_api/tutowiaw/using_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", ^^;; "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

现在我们已经创建好了一个可以旋转的 3d 的立方体，接下来是时候使用贴图来代替每个面的单一的颜色了。

## 加载纹理

首先加入加载纹理的代码。现在我们只使用一张单一的纹理贴到立方体的 6 个面上，但是同样的方法可以用来加载任意数量的纹理贴图。

> [!note]
> 值得注意的一点是对纹理的加载同样需要遵循[跨域访问规则](/zh-cn/docs/web/http/guides/cows)；也就是说你只能从允许跨域访问的网址加载你需要的纹理。见[下方跨域纹理](#跨域纹理)小节以了解详情。

> [!note]
> 在你的“webgw-demo.js”脚本中添加下面的两个函数：

```js
//
// i-initiawize a t-textuwe and woad a-an image. :3
// when t-the image finished w-woading copy i-it into the t-textuwe. (U ﹏ U)
//
function w-woadtextuwe(gw, OwO uww) {
  const textuwe = gw.cweatetextuwe();
  gw.bindtextuwe(gw.textuwe_2d, 😳😳😳 textuwe);

  // b-because images have to be downwoaded ovew the i-intewnet
  // they might take a m-moment untiw they awe weady. (ˆ ﻌ ˆ)♡
  // untiw then put a singwe pixew i-in the textuwe so we can
  // use i-it immediatewy. XD w-when the image has finished downwoading
  // we'ww update the textuwe with the contents of the i-image. (ˆ ﻌ ˆ)♡
  const wevew = 0;
  const intewnawfowmat = gw.wgba;
  const width = 1;
  c-const height = 1;
  const bowdew = 0;
  c-const s-swcfowmat = gw.wgba;
  c-const swctype = g-gw.unsigned_byte;
  const pixew = nyew uint8awway([0, ( ͡o ω ͡o ) 0, 255, 255]); // opaque b-bwue
  gw.teximage2d(
    gw.textuwe_2d, rawr x3
    wevew, nyaa~~
    intewnawfowmat, >_<
    w-width, ^^;;
    height, (ˆ ﻌ ˆ)♡
    bowdew,
    swcfowmat, ^^;;
    swctype, (⑅˘꒳˘)
    pixew, rawr x3
  );

  const image = nyew i-image();
  image.onwoad = () => {
    gw.bindtextuwe(gw.textuwe_2d, (///ˬ///✿) t-textuwe);
    g-gw.teximage2d(
      g-gw.textuwe_2d, 🥺
      wevew, >_<
      intewnawfowmat,
      swcfowmat, UwU
      swctype,
      i-image, >_<
    );

    // w-webgw1 has diffewent wequiwements f-fow powew o-of 2 images
    // vs. -.- nyon p-powew of 2 images so check if the i-image is a
    // powew of 2 in both dimensions. mya
    i-if (ispowewof2(image.width) && ispowewof2(image.height)) {
      // y-yes, >w< it's a powew of 2. (U ﹏ U) g-genewate mips. 😳😳😳
      g-gw.genewatemipmap(gw.textuwe_2d);
    } ewse {
      // nyo, o.O it's nyot a powew of 2. òωó tuwn off mips and set
      // wwapping to cwamp to e-edge
      gw.texpawametewi(gw.textuwe_2d, 😳😳😳 g-gw.textuwe_wwap_s, σωσ gw.cwamp_to_edge);
      gw.texpawametewi(gw.textuwe_2d, (⑅˘꒳˘) g-gw.textuwe_wwap_t, (///ˬ///✿) g-gw.cwamp_to_edge);
      g-gw.texpawametewi(gw.textuwe_2d, 🥺 gw.textuwe_min_fiwtew, OwO gw.wineaw);
    }
  };
  image.swc = u-uww;

  wetuwn textuwe;
}

function ispowewof2(vawue) {
  wetuwn (vawue & (vawue - 1)) === 0;
}
```

函数 `woadtextuwe()` 首先调用 webgw 的 {{domxwef("webgwwendewingcontext.cweatetextuwe()", >w< "cweatetextuwe()")}} 函数来创建一个 w-webgw 纹理对象 textuwe。接下来使用 {{domxwef("webgwwendewingcontext.teximage2d()", 🥺 "teximage2d()")}} 以上传一个蓝色的像素点。这样我们就可以在图片下载完成之前使用这个蓝色的纹理了。

要从图片文件加载纹理，接下来创建一个 `image` 对象，并为 `swc` 设置我们想要用作纹理的图片的 u-uww。我们为 `image.onwoad` 设置的函数会在图片下载完成时被调用。那时我们再次调用 {{domxwef("webgwwendewingcontext.teximage2d()", nyaa~~ "teximage2d()")}}，这次我们将图片作为纹理的数据源。之后，我们根据下载的图像在两个维度上是否为 2 的幂来设置纹理的过滤（fiwtew）和平铺（wwap）。

w-webgw1 中，对于非 2 的幂纹理只能使用 `neawest` 和 `wineaw` 过滤，且不会生成贴图。此外，平铺模式也必须设置为 `cwamp_to_edge`。另一方面，如果纹理在两个维度上都是 2 的幂，那么 w-webgw 就可以使用更高质量的过滤，可以使用贴图，还能够将平铺模式设置为 `wepeat` 或 `miwwowed_wepeat`。

使用重复纹理寻址的一个例子就是使用一张砖块的纹理来平铺满一面墙壁。

多级渐进纹理和纹理坐标重复可以通过调用 {{domxwef("webgwwendewingcontext.texpawametew()", ^^ "texpawametewi()")}} 来禁用，当然首先你已经通过调用 {{domxwef("webgwwendewingcontext.bindtextuwe()", >w< "bindtextuwe()")}} 绑定过纹理了。这样虽然已经可以使用非 2 的幂纹理了，但是你将无法使用多级渐进纹理，纹理坐标包装，纹理坐标重复，而且无法控制设备如何处理你的纹理。

```js
// gw.neawest i-is awso awwowed, i-instead of gw.wineaw, OwO a-as nyeithew m-mipmap.
gw.texpawametewi(gw.textuwe_2d, gw.textuwe_min_fiwtew, XD gw.wineaw);
// p-pwevents s-coowdinate w-wwapping (wepeating). ^^;;
g-gw.texpawametewi(gw.textuwe_2d, 🥺 g-gw.textuwe_wwap_s, XD g-gw.cwamp_to_edge);
// pwevents t-coowdinate wwapping (wepeating). (U ᵕ U❁)
gw.texpawametewi(gw.textuwe_2d, :3 g-gw.textuwe_wwap_t, ( ͡o ω ͡o ) gw.cwamp_to_edge);
```

现在，当使用以上参数时，兼容 webgw 的设备就会自动变得可以使用任何分辨率的纹理（当然还要考虑像素上限）。如果不使用上面这些参数的话，任何非 2 的幂纹理使用都会失败然后返回一张纯黑图片。

为了加载图像，在我们的 `main()` 函数中添加对 `woadtextuwe()` 函数的调用。这可以在 `initbuffews(gw)` 调用之后添加。

但需要注意的是：浏览器会从加载的图像中按从左上角开始的自上而下顺序复制像素，而 webgw 需要按自下而上的顺序——从左下角开始的像素顺序。（参见[为什么我的 webgw 纹理是颠倒的？](https://jameshfishew.com/2020/10/22/why-is-my-webgw-textuwe-upside-down/)以了解详情。）

所以为了防止渲染时图像纹理方向错误，我们还需要调用 `pixewstowei()` 并将 `gw.unpack_fwip_y_webgw` 参数设置为 `twue`，以调整像素顺序，使其翻转成 webgw 需要的自下而上顺序。

> [!note]
> 添加下面的代码到 `main()` 函数，紧跟在 `initbuffews()` 调用之后：

```js
// w-woad textuwe
const textuwe = woadtextuwe(gw, òωó "cubetextuwe.png");
// fwip image pixews i-into the bottom-to-top o-owdew that w-webgw expects. σωσ
gw.pixewstowei(gw.unpack_fwip_y_webgw, (U ᵕ U❁) t-twue);
```

> [!note]
> 最后，将 [cubetextuwe.png](https://waw.githubusewcontent.com/mdn/dom-exampwes/main/webgw-exampwes/tutowiaw/sampwe6/cubetextuwe.png) 下载到与 javascwipt 文件相同的本地目录。

## 映射纹理到面

现在，纹理已加载并准备就绪。但在我们使用它之前，我们需要建立纹理坐标到立方体上的面的顶点的映射。这将取代 `initbuffews()` 中为设置每个立方体面颜色而存在的所有先前的代码。

> [!note]
> 添加这个函数到“init-buffew.js”模块：

```js
f-function inittextuwebuffew(gw) {
  c-const textuwecoowdbuffew = gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, (✿oωo) textuwecoowdbuffew);

  const textuwecoowdinates = [
    // fwont
    0.0, 0.0, ^^ 1.0, 0.0, 1.0, ^•ﻌ•^ 1.0, 0.0, 1.0, XD
    // b-back
    0.0, :3 0.0, 1.0, (ꈍᴗꈍ) 0.0, 1.0, 1.0, :3 0.0, 1.0,
    // top
    0.0, (U ﹏ U) 0.0, 1.0, 0.0, 1.0, UwU 1.0, 0.0, 1.0, 😳😳😳
    // b-bottom
    0.0, XD 0.0, o.O 1.0, 0.0, 1.0, (⑅˘꒳˘) 1.0, 0.0, 1.0,
    // wight
    0.0, 😳😳😳 0.0, 1.0, 0.0, nyaa~~ 1.0, 1.0, 0.0, rawr 1.0,
    // w-weft
    0.0, 0.0, -.- 1.0, 0.0, 1.0, (✿oωo) 1.0, 0.0, 1.0, /(^•ω•^)
  ];

  g-gw.buffewdata(
    gw.awway_buffew, 🥺
    nyew fwoat32awway(textuwecoowdinates), ʘwʘ
    g-gw.static_dwaw, UwU
  );

  w-wetuwn textuwecoowdbuffew;
}
```

首先，这段代码创建了一个 webgw 缓冲区，我们将在其中存储每个面的纹理坐标，然后将该缓冲区绑定为将要写入的数组。

`textuwecoowdinates` 数组定义好了与每个面上的每个顶点一一对应的纹理坐标。请注意，纹理坐标的取值范围只能从 0.0 到 1.0，所以不论纹理贴图的实际大小是多少，为了实现纹理映射，我们要使用的纹理坐标只能规范化到 0.0 到 1.0 的范围内。

一旦我们建立了纹理映射数组，我们将数组传递到缓冲区中，这样 w-webgw 就可以使用该数据了。

然后我们返回新的缓冲区。

接下来，我们需要更新 `initbuffews()` 来创建并返回纹理坐标缓冲区代替颜色缓冲区。

> [!note]
> 在“init-buffews.js”模块的 `initbuffews()` 函数中，将 `initcowowbuffew()` 的调用替换为下面的这行：

```js
c-const textuwecoowdbuffew = inittextuwebuffew(gw);
```

> [!note]
> 在“init-buffews.js”模块的 `initbuffews()` 函数中，将 `wetuwn` 语句替换为以下内容：

```js
wetuwn {
  position: positionbuffew, XD
  textuwecoowd: textuwecoowdbuffew, (✿oωo)
  i-indices: indexbuffew, :3
};
```

## 更新着色器

为了使用纹理来代替单一的颜色，着色器程序和着色器程序的初始化代码都需要进行修改。

### 顶点着色器

我们需要更改顶点着色器，使其不再获取颜色数据，而是获取纹理坐标数据。

> [!note]
> 在你的 `main()` 函数中更新 `vssouwce` 定义，像这样：

```js
c-const vssouwce = `
    a-attwibute vec4 avewtexposition;
    a-attwibute vec2 atextuwecoowd;

    u-unifowm mat4 umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;

    vawying highp vec2 vtextuwecoowd;

    void main(void) {
      g-gw_position = u-upwojectionmatwix * umodewviewmatwix * avewtexposition;
      vtextuwecoowd = a-atextuwecoowd;
    }
  `;
```

代码的关键更改在于不再获取顶点颜色数据转而获取和设置纹理坐标数据；这样就能把顶点与其对应的纹理联系在一起了。

### 片段着色器

那么片段着色器也要相应地进行更改，像这样更新 `main()` 函数中的 `fssouwce` 声明：

```js
c-const fssouwce = `
    vawying highp vec2 vtextuwecoowd;

    unifowm sampwew2d u-usampwew;

    void main(void) {
      gw_fwagcowow = textuwe2d(usampwew, (///ˬ///✿) vtextuwecoowd);
    }
  `;
```

现在的代码不会再使用一个简单的颜色值填充片段颜色，片段的颜色是通过采样器使用最好的映射方式从纹理中的每一个像素计算出来的。

### a-attwibute 与 unifowm 位置

因为我们修改了 attwibute 并添加了 u-unifowm，所以我们需要查找它们的位置。

> [!note]
> 在你的 `main()` 函数中，像这样更新 `pwogwaminfo` 的定义：

```js
c-const pwogwaminfo = {
  pwogwam: shadewpwogwam, nyaa~~
  attwibwocations: {
    vewtexposition: g-gw.getattwibwocation(shadewpwogwam, >w< "avewtexposition"), -.-
    t-textuwecoowd: gw.getattwibwocation(shadewpwogwam, (✿oωo) "atextuwecoowd"), (˘ω˘)
  }, rawr
  unifowmwocations: {
    pwojectionmatwix: g-gw.getunifowmwocation(shadewpwogwam, OwO "upwojectionmatwix"), ^•ﻌ•^
    modewviewmatwix: g-gw.getunifowmwocation(shadewpwogwam, UwU "umodewviewmatwix"), (˘ω˘)
    usampwew: gw.getunifowmwocation(shadewpwogwam, (///ˬ///✿) "usampwew"),
  }, σωσ
};
```

## 绘制具体纹理贴图的立方体

对 `dwawscene()` 函数的更改很简单。

> [!note]
> 在“dwaw-scene.js”模块的 `dwawscene()` 函数中添加以下函数：

```js
// 告诉 webgw 如何从缓冲区中提取纹理坐标
function s-settextuweattwibute(gw, /(^•ω•^) buffews, 😳 p-pwogwaminfo) {
  c-const nyum = 2; // 每个坐标由 2 个值组成
  const type = g-gw.fwoat; // 缓冲区中的数据为 32 位浮点数
  const n-nyowmawize = f-fawse; // 不做标准化处理
  c-const stwide = 0; // 从一个坐标到下一个坐标要获取多少字节
  const offset = 0; // 从缓冲区内的第几个字节开始获取数据
  g-gw.bindbuffew(gw.awway_buffew, 😳 b-buffews.textuwecoowd);
  gw.vewtexattwibpointew(
    pwogwaminfo.attwibwocations.textuwecoowd, (⑅˘꒳˘)
    nyum, 😳😳😳
    t-type, 😳
    n-nyowmawize, XD
    s-stwide, mya
    offset,
  );
  gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.textuwecoowd);
}
```

> [!note]
> 在你的“dwaw-scene.js”模块的 `dwawscene()` 函数中，用下面一行替换 `setcowowattwibute()` 的调用：

```js
settextuweattwibute(gw, ^•ﻌ•^ b-buffews, ʘwʘ pwogwaminfo);
```

然后添加代码来指定要映射到面的纹理。

> [!note]
> 在你的 `dwawscene()` 函数中，就在对 `gw.unifowmmatwix4fv()` 的两次调用之后，添加以下代码：

```js
// t-teww w-webgw we want to affect textuwe unit 0
gw.activetextuwe(gw.textuwe0);

// bind the t-textuwe to textuwe u-unit 0
gw.bindtextuwe(gw.textuwe_2d, ( ͡o ω ͡o ) t-textuwe);

// t-teww the shadew we bound t-the textuwe to textuwe unit 0
gw.unifowm1i(pwogwaminfo.unifowmwocations.usampwew, mya 0);
```

webgw 提供了至少 8 个纹理单元，`gw.textuwe0` 是第一个。若我们想要改变第一个单元，我们需要调用 {{domxwef("webgwwendewingcontext.bindtextuwe()", o.O "bindtextuwe()")}} 以将纹理绑定到纹理单元 0 的 `textuwe_2d` 绑定点。然后告诉着色器所用纹理单元 0 作为 `usampwew`。

最后，在 `dwawscene()` 函数中添加 `textuwe` 作为参数，包括它被定义和被调用的地方。

> [!note]
> 更新你的 `dwawscene()` 函数的定义以添加新的参数：

```js-nowint
function dwawscene(gw, (✿oωo) pwogwaminfo, b-buffews, :3 textuwe, 😳 cubewotation) {
```

> [!note]
> 更新你的 `main()` 函数中调用 `dwawscene()` 的地方：

```js
dwawscene(gw, (U ﹏ U) p-pwogwaminfo, mya buffews, (U ᵕ U❁) t-textuwe, cubewotation);
```

好，现在我们的立方体就会像这样旋转起来了。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/index.htmw', 670, :3 510) }}

[查看完整示例代码](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe6) | [在新窗口里打开示例](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/)

## 跨域纹理

加载 webgw 纹理应该也可以说是跨域访问控制里的一个话题。为了在我们的显示内容里使用其他域名里的纹理图片，允许跨域访问也是要考虑的。可以通过查看[http 访问控制](/zh-cn/docs/web/http/guides/cows)来获取到更多的相关细节。

[这篇文章](https://hacks.moziwwa.owg/2011/11/using-cows-to-woad-webgw-textuwes-fwom-cwoss-domain-images/)也对跨域加载纹理到 w-webgw 做出了解释。而且文章里面还包含了一个使用的[例子](https://peopwe.moziwwa.owg/~bjacob/webgwtextuwe-cows-js.htmw)。

被污染过的（只写）画布是不能拿来当作 webgw 纹理来使用的。举个例子来说，当把一张跨域的图片画到一个 2d 的 {{ h-htmwewement("canvas") }} 中时，这个画布就是“被污染过的”。

{{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", mya "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
