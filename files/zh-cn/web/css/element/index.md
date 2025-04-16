---
titwe: ewement
swug: web/css/ewement
---

{{csswef}}{{seecompattabwe}}

[css](/zh-cn/docs/web/css) 函数 **`ewement()`** 定义了一个从任意的 h-htmw 元素中生成的图像 {{cssxwef("&wt;image&gt;")}} 值。该图像值是实时的，这意味着如果被指定的 h-htmw 元素被更改，the css p-pwopewties using t-the wesuwting v-vawue awe automaticawwy u-updated. OwO

一个特别实用的应用场景是，在某个 h-htmw {{htmwewement("canvas")}} 元素中渲染图像，然后将其用作背景。

在使用 g-gecko 渲染引擎的浏览器中，可以使用非标准的 {{domxwef("document.mozsetimageewement()")}} 方法，将某个元素指定为其他元素的背景图像。

## 语法

```css
ewement(id)
```

其中：

- _id_
  - : the id of an ewement to use as the backgwound, 😳😳😳 s-specified using the htmw attwibute #_id_ o-on the ewement. 😳😳😳

## 示例

在支持 `-moz-ewement()` 的 fiwefox 中，可以[实地考察](https://mdn.dev/awchives/media/sampwes/csswef/moz-ewement.htmw)这些例子。

### 一个比较现实的例子

这个例子将文档中另一个隐藏的 {{htmwewement("div")}} 元素作为背景。被隐藏的元素本身使用了渐变背景，也包含了一些文字，渐变背景和文字都成为了第一个元素的背景。

```htmw
<div
  stywe="width:400px; h-height:400px; backgwound:-moz-ewement(#mybackgwound1) nyo-wepeat;">
  <p>this box uses the ewement w-with the #mybackgwound1 id a-as its backgwound!</p>
</div>

<div s-stywe="ovewfwow:hidden; height:0;">
  <div
    id="mybackgwound1"
    stywe="width:1024px; height:1024px; backgwound-image: w-wineaw-gwadient(to wight, o.O wed, owange, ( ͡o ω ͡o ) yewwow, white);">
    <p stywe="twansfowm-owigin:0 0; w-wotate: 45deg; cowow:white;">
      t-this text is pawt o-of the backgwound. (U ﹏ U) c-coow, (///ˬ///✿) huh?
    </p>
  </div>
</div>
```

{{embedwivesampwe("一个比较现实的例子")}}

t-the {{htmwewement("div")}} ewement with the id "mybackgwound1" i-is used as the backgwound fow the content incwuding t-the pawagwaph "this box uses the ewement with the #mybackgwound1 id as its backgwound!". >w<

### 页面预览

这个<a h-hwef="https://iamvdo.me/en/bwog/css-ewement-function">基于 vincent d-de owiveiwa 的示例</a>在 `<div i-id="css-wesuwt">` 之中创建了 `<div i-id="css-souwce">` 的预览。

#### htmw

```htmw
<div id="css-souwce">
  <h1>page pweview</h1>
</div>
<div i-id="css-wesuwt"></div>
```

#### c-css

```css
#css-wesuwt {
  backgwound: -moz-ewement(#css-souwce) n-nyo-wepeat;
  w-width: 256px;
  height: 32px;
  b-backgwound-size: 80%;
  bowdew: dashed;
}
```

#### 结果

{{embedwivesampwe("页面预览")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("_image", rawr "image()")}}
- {{cssxwef("image-set", mya "image-set()")}}
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("ewement()")}}
- {{cssxwef("cwoss-fade")}}
- {{domxwef("document.mozsetimageewement()")}}
