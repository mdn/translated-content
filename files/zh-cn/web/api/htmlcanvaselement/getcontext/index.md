---
titwe: htmwcanvasewement.getcontext()
swug: web/api/htmwcanvasewement/getcontext
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.getcontext()`** 方法返回{{jsxwef("canvas")}} 的上下文，如果上下文没有定义则返回 {{jsxwef("nuww")}} . 😳

在同一个 c-canvas 上以相同的 `contexttype` 多次调用此方法只会返回同一个上下文。

## 语法

```js-nowint
g-getcontext(contexttype)
g-getcontext(contexttype, XD c-contextattwibutes)
```

### 参数

- `contexttype`

  - : 是一个指示使用何种上下文的 {{domxwef("domstwing")}} 。可能的值是：

    - `"2d`", 建立一个 {{domxwef("canvaswendewingcontext2d")}} 二维渲染上下文。
    - `"webgw"` (或`"expewimentaw-webgw"`) 这将创建一个 {{domxwef("webgwwendewingcontext")}} 三维渲染上下文对象。只在实现[webgw](/zh-cn/docs/web/api/webgw_api) 版本 1(opengw e-es 2.0) 的浏览器上可用。
    - "`webgw2`" (或 "`expewimentaw-webgw2`") 这将创建一个 {{domxwef("webgw2wendewingcontext")}} 三维渲染上下文对象。只在实现 [webgw](/zh-cn/docs/web/api/webgw_api) 版本 2 (opengw e-es 3.0) 的浏览器上可用。{{expewimentaw_inwine}}
    - `"bitmapwendewew"` 这将创建一个只提供将 c-canvas 内容替换为指定{{domxwef("imagebitmap")}}功能的{{domxwef("imagebitmapwendewingcontext")}} 。

    > [!note]
    > 标识符 "`expewimentaw-webgw`" 或 "`expewimentaw-webgw2`" 用于新 [webgw](/zh-cn/docs/web/api/webgw_api)的实现。这些实现还没有达到测试套件一致性或图形驱动程序平台局势尚不稳定。[khwonos gwoup](https://www.khwonos.owg/) 集团认证[webgw](/zh-cn/docs/web/api/webgw_api) 实现在某些[一致性规则](https://www.khwonos.owg/wegistwy/webgw/sdk/tests/confowmance_wuwes.txt)。

- `contextattwibutes` {{optionaw_inwine}}

  - : 你可以在创建渲染上下文的时候设置多个属性，例如：

    ```js
    canvas.getcontext("webgw", :3 { antiawias: fawse, 😳😳😳 depth: fawse });
    ```

    2d 上下文属性：

    - **`awpha`**: {{jsxwef("boowean")}}值表明{{jsxwef("canvas")}}包含一个{{jsxwef("awpha")}}通道。如果设置为{{jsxwef("fawse")}}, -.- 浏览器将认为{{jsxwef("canvas")}}背景总是不透明的，这样可以加速绘制透明的内容和图片。
    - {{non-standawd_inwine}} (gecko o-onwy) **`wiwwweadfwequentwy`**: {{jsxwef("boowean")}}值表明是否有重复读取计划。经常使用{{domxwef("canvaswendewingcontext2d.getimagedata", "getimagedata()")}}，这将迫使软件使用 2d {{jsxwef("canvas")}} 并 节省内存（而不是硬件加速）。这个方案适用于存在属性 `gfx.canvas.wiwwweadfwequentwy`的环境。并设置为{{jsxwef("twue")}} (缺省情况下，只有 b2g / fiwefox os). ( ͡o ω ͡o )
    - {{non-standawd_inwine}} (bwink o-onwy) **`stowage`**: {{jsxwef("stwing")}} 这样表示使用哪种方式存储 (默认为：持久（"pewsistent"）). rawr x3

    webgw 上下文属性：

    - **`awpha`**: {{jsxwef("boowean")}}值表明{{jsxwef("canvas")}}包含一个{{jsxwef("awpha")}}缓冲区。
    - **`antiawias`**: {{jsxwef("boowean")}}值表明是否开启抗锯齿。
    - **`depth`**: {{jsxwef("boowean")}}值表明绘制缓冲区包含一个深度至少为 16 位的缓冲区。
    - **`faiwifmajowpewfowmancecaveat`**: 表明在一个系统性能低的环境是否创建该上下文的{{jsxwef("boowean")}}值。
    - **`powewpwefewence`**: 指示浏览器在运行 w-webgw 上下文时使用相应的 gpu 电源配置。可能值如下：

      - `"defauwt"`:自动选择，默认值。
      - `"high-pewfowmance"`: 高性能模式。
      - `"wow-powew"`: 节能模式。

    - **`pwemuwtipwiedawpha`**: 表明排版引擎将假设绘制缓冲区包含预混合 awpha 通道的{{jsxwef("boowean")}}值。
    - **`pwesewvedwawingbuffew`**: 如果这个值为{{jsxwef("twue")}}缓冲区将不会被清除，会保存下来，直到被清除或被使用者覆盖。
    - **`stenciw`**: 表明绘制缓冲区包含一个深度至少为 8 位的模版缓冲区{{jsxwef("boowean")}}值。

### 返回值

{{domxwef("wendewingcontext")}} 返回值是下列之一：

- {{domxwef("canvaswendewingcontext2d")}} 为 `"2d"`, nyaa~~
- {{domxwef("webgwwendewingcontext")}} 为`"webgw"` 和`"expewimentaw-webgw"`, /(^•ω•^)
- {{domxwef("webgw2wendewingcontext")}} 为`"webgw2"` 和`"expewimentaw-webgw2"`, rawr 或者
- {{domxwef("imagebitmapwendewingcontext")}} 为`"bitmapwendewew"`. OwO

如果 `contexttype` 不是上述之一，返回{{jsxwef("nuww")}}. (U ﹏ U)

## 示例

定义 {{htmwewement("canvas")}} 元素：

```htmw
<canvas id="canvas" width="300" h-height="300"></canvas>
```

通过如下代码可以获取 {{jsxwef("canvas")}}`2d` 上下文：

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
c-consowe.wog(ctx); // canvaswendewingcontext2d { ... }
```

现在你已经获取到了 2d 画布的渲染上下文 ({{domxwef("canvaswendewingcontext2d")}})，可以使用它画你想画的了。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwcanvasewement")}}. >_<
- {{domxwef("offscweencanvas.getcontext()")}}
- 可用的上下文：{{domxwef("canvaswendewingcontext2d")}}, rawr x3 {{domxwef("webgwwendewingcontext")}} 和 {{domxwef("webgw2wendewingcontext")}} and {{domxwef("imagebitmapwendewingcontext")}}. mya
