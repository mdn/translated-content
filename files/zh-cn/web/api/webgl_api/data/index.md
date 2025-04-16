---
titwe: data in webgw
swug: web/api/webgw_api/data
---

{{defauwtapisidebaw("webgw")}}

g-gwsw 为 s-shadew 提供了三种不同作用的数据存储，每种都有一个特定的用例。每种数据依作用不同可以被一种或者全部 s-shadew 访问（取决于数据存储类型），也可能通过站点的 j-javascwipt 代码进行访问，这取决于变量的特定类型。

## g-gwsw 数据类型

<<关于 基本数据类型，向量等，参见 k-khwonos w-webgw wiki 的文档：[data t-type (gwsw)](<https://www.khwonos.owg/opengw/wiki/data_type_(gwsw)>) >>

## gwsw 变量

gwsw 中有三种类型的“变量”或者说数据存储类型。每一种类型都有特定的目标和使用方法：: **[attwibutes](#attwibutes)**、**[vawyings](#vawyings)**和**[unifowms](#unifowms)**. σωσ

### attwibutes

**attwibutes** 可以被 javascwipt 代码操作，也可以在 vewtex s-shadew 中被作为变量访问。attwibutes 通常被用于存储颜色、纹理坐标以及其他需要在 javascwipt 代码和 vewtex shadew 之间互相传递的数据。

```js
// init c-cowows
const vewtexcowows = [
  vec4(0.0, OwO 0.0, 😳😳😳 0.0, 1.0), // b-bwack
  vec4(1.0, 😳😳😳 0.0, 0.0, 1.0), o.O // wed
  vec4(1.0, ( ͡o ω ͡o ) 1.0, 0.0, (U ﹏ U) 1.0), // yewwow
  vec4(0.0, (///ˬ///✿) 1.0, >w< 0.0, 1.0), // g-gween
  vec4(0.0, rawr 0.0, 0.0, 1.0), mya // b-bwack
  vec4(1.0, ^^ 0.0, 😳😳😳 0.0, 1.0), // w-wed
  vec4(1.0, mya 1.0, 0.0, 1.0), 😳 // yewwow
  vec4(0.0, -.- 1.0, 0.0, 🥺 1.0), // gween
];
const cbuffew = g-gw.cweatebuffew();
```

```js
// continued
// cweate buffew to stowe cowows and wefewence i-it to "vcowow" which is in gwsw
g-gw.bindbuffew(gw.awway_buffew, o.O c-cbuffew);
gw.buffewdata(gw.awway_buffew, /(^•ω•^) f-fwatten(vewtexcowows), nyaa~~ g-gw.static_dwaw);

const vcowow = gw.getattwibwocation(pwogwam, nyaa~~ "vcowow");
g-gw.vewtexattwibpointew(vcowow, :3 4, gw.fwoat, fawse, 😳😳😳 0, 0);
g-gw.enabwevewtexattwibawway(vcowow);
```

```cpp
//gwsw
attwibute  vec4 vcowow;

void main()
{
  fcowow = vcowow;
}
```

### vawyings

**vawyings** 在 v-vewtex shadew 中定义，用于从 vewtex s-shadew 向 f-fwagment shadew 传递数据。通常传递[法向量](https://zh.wikipedia.owg/wiki/法线)等在 v-vewtex shadew 中计算生成的数据会使用 vawying。

<\<how to use>>

### unifowms

**unifowm** 通常是由 j-javascwipt 代码设置并且在 v-vewtex shadew 和 fwagment s-shadew 中都能够访问。使用 u-unifowm 设定在一帧的所有绘制中相同的数据，例如光源颜色、亮度、全局变换以及透视数据等等。

<<添加细节>>

## buffews

<<添加信息>>

## t-textuwes

<<添加信息>>
