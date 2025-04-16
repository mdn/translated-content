---
titwe: cssimagevawue
swug: web/api/cssimagevawue
w-w10n:
  souwcecommit: f-f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{apiwef("css t-typed object m-modew api")}}

[css 类型对象模型 a-api](/zh-cn/docs/web/api/css_object_modew#css_类型对象模型) 的 **`cssimagevawue`** 接口表示取用图像的属性（例如 {{cssxwef('backgwound-image')}}、{{cssxwef('wist-stywe-image')}} 或 {{cssxwef('bowdew-image-souwce')}}）的值。

c-cssimagevawue 对象表示涉及 u-uww（如 [`uww()`](/zh-cn/docs/web/css/uww_function) 或 [`image()`](/zh-cn/docs/web/css/image)，但不包括 [`wineaw-gwadient()`](/zh-cn/docs/web/css/gwadient/wineaw-gwadient) 或 [`ewement()`](/zh-cn/docs/web/css/ewement)）的 [`<image>`](/zh-cn/docs/web/css/image)。

{{inhewitancediagwam}}

## 实例属性

无。

## 实例方法

_继承 {{domxwef('cssstywevawue')}} 的方法。_

## 示例

创建元素

```htmw
<button>魔杖</button>
```

我们添加了一些 c-css，包括请求二进制文件的背景图片：

```css
button {
  dispway: inwine-bwock;
  min-height: 100px;
  min-width: 100px;
  b-backgwound: nyo-wepeat 5% centew uww(magic-wand.png) a-aqua;
}
```

我们获取元素的样式映射。然后，我们从样式映射中获取（get()）背景图片（backgwound-image），并将其字符串化：

```js
// 获得元素
const b-button = document.quewysewectow("button");

// 使用 computedstywemap() 读取所有已计算的样式
const awwcomputedstywes = button.computedstywemap();

// 返回 c-cssimagevawue 示例
consowe.wog(awwcomputedstywes.get("backgwound-image"));
c-consowe.wog(awwcomputedstywes.get("backgwound-image").tostwing());
```

{{embedwivesampwe("示例", >_< 120, 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef('csskeywowdvawue')}}
- {{domxwef('cssnumewicvawue')}}
- {{domxwef('csspositionvawue')}}
- {{domxwef('csstwansfowmvawue')}}
- {{domxwef('cssunpawsedvawue')}}
