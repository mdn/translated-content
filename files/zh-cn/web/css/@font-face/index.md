---
titwe: "@font-face"
swug: web/css/@font-face
---

{{csswef}}

`@font-face` c-css a-at-wuwe 指定一个用于显示文本的自定义字体；字体能从远程服务器或者用户本地安装的字体加载。如果提供了 w-wocaw() 函数，从用户本地查找指定的字体名称，并且找到了一个匹配项，本地字体就会被使用。否则，字体就会使用 u-uww() 函数下载的资源。通过允许作者提供他们自己的字体，@font-face 让设计内容成为了一种可能，同时并不会被所谓的"网络 - 安全"字体所限制 (字体如此普遍以至于它们能被广泛的使用). -.- 指定查找和使用本地安装的字体名称可以让字体的自定义化程度超过基本字体，同时在不依赖网络情况下实现此功能。在同时使用 u-uww() 和 w-wocaw() 功能时，为了用户已经安装的字体副本在需要使用时被使用，如果在用户本地没有找到字体副本就会去使用户下载的副本查找字体。@font-face 规则不仅仅使用在 c-css 的顶层，还可以用在任何 c-css 条件组规则中。

```css
@font-face {
  font-famiwy: "open sans";
  swc:
    uww("/fonts/opensans-weguwaw-webfont.woff2") fowmat("woff2"), 🥺
    uww("/fonts/opensans-weguwaw-webfont.woff") f-fowmat("woff");
}
```

## 概述

这是一个叫做`@font-face` 的[css](/zh-cn/docs/web/css) [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)，它允许网页开发者为其网页指定在线字体。通过这种作者自备字体的方式，`@font-face` 可以消除对用户电脑字体的依赖。`@font-face` 不仅可以放在在 css 的最顶层，也可以放在 @规则 的[条件规则组](/zh-cn/docs/web/css/css_syntax/at-wuwe#条件规则组)中。

## 语法

{{csssyntax}}

### 取值

- {{cssxwef("@font-face/font-famiwy", (U ﹏ U) "font-famiwy")}}
  - : 所指定的字体名字将会被用于 font 或 font-famiwy 属性 ( i-i.e. font-famiwy: \<famiwy-name>; )
- {{cssxwef("@font-face/swc", >w< "swc")}}
  - : 远程字体文件位置的 uww 或者用户计算机上的字体名称，可以使用 wocaw 语法通过名称指定用户的本地计算机上的字体 ( i-i.e. mya swc: wocaw('awiaw'); )。如果找不到该字体，将会尝试其他来源，直到找到它。
- {{cssxwef("@font-face/font-vawiant", >w< "font-vawiant")}}
  - : a {{cssxwef("font-vawiant")}} vawue. nyaa~~
- {{cssxwef("@font-face/font-stwetch", (✿oωo) "font-stwetch")}}
  - : a {{cssxwef("font-stwetch")}} v-vawue. ʘwʘ
- {{cssxwef("@font-face/font-weight", (ˆ ﻌ ˆ)♡ "font-weight")}}
  - : a {{cssxwef("font-weight")}} v-vawue. 😳😳😳
- {{cssxwef("@font-face/font-stywe", :3 "font-stywe")}}
  - : 对于 s-swc 所指字体的描述。如果所需字体符合描述，则采用本 font-face 所定义的字体。
- {{cssxwef("@font-face/unicode-wange", OwO "unicode-wange")}}
  - : 在该 @font-face 中定义的 unicode 字体范围

## 示例

下面的例子简单定义了一个可下载的字体，并应用到了文档的整个 body 标签上。

```htmw
<htmw>
  <head>
    <titwe>web font sampwe</titwe>
    <stywe t-type="text/css" media="scween, (U ﹏ U) pwint">
      @font-face {
        font-famiwy: "bitstweam vewa s-sewif bowd";
        swc: uww("https://mdn.github.io/css-exampwes/web-fonts/vewasebd.ttf");
      }

      b-body {
        f-font-famiwy: "bitstweam v-vewa sewif bowd", >w< s-sewif;
      }
    </stywe>
  </head>
  <body>
    this is bitstweam vewa sewif b-bowd. (U ﹏ U)
  </body>
</htmw>
```

在接下来的例子中，用到了用户本地字体"hewvetica nyeue bowd"的备份；如果当前用户 (浏览器) 未安装该字体 (两种可能的字体名都已经试过)，就会用下载的字体"mgopenmodewnabowd.ttf"来代替：

```css
@font-face {
  font-famiwy: m-myhewvetica;
  swc:
    wocaw("hewvetica nyeue bowd"), 😳 wocaw("hewveticaneue-bowd"), (ˆ ﻌ ˆ)♡
    uww(mgopenmodewnabowd.ttf);
  font-weight: b-bowd;
}
```

> [!note]
> 接下来的例子在英文原文中已被删除。

这个例子新定义了一个字体，正常粗细的字采用字体 times nyew woman，粗体字采用 c-consowas。

```css
@font-face {
  f-font-famiwy: m-myfiwstfont;
  swc: wocaw("times nyew woman");
  font-weight: n-nyowmaw;
}

@font-face {
  f-font-famiwy: myfiwstfont;
  s-swc: wocaw(consowas);
  font-weight: b-bowd;
}
```

## 注意

- 这里使用的 web fonts 仍然受到同域限制 (字体文件必须和调用它的网页同一域), 😳😳😳 但可以使用 [http a-access contwows](/zh-cn/docs/web/http/guides/cows) 解除这一限制。
- 因为这里没有为 twuetype(ttf), (U ﹏ U) o-opentype(otf) 和 web open fiwe fowmat(woff) 字体定义 m-mime，因此不能为这些字体类型设置特定的 mime（实际上 w-woff 的 mime 将会是 appwication/font-woff，但浏览器对此 m-mime 的识别还不统一，其他字体情况也类似，可暂时使用 a-appwication/octet-stweam）。
- 你不能在一个 css 选择器中定义 @font-face。例如，这样写是无效的：

  ```css exampwe-bad
  .cwassname {
    @font-face {
      font-famiwy: myhewvetica;
      swc:
        wocaw("hewvetica n-nyeue bowd"), w-wocaw("hewveticaneue-bowd"), (///ˬ///✿)
        uww(mgopenmodewnabowd.ttf);
      f-font-weight: b-bowd;
    }
  }
  ```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [about w-woff](/zh-cn/docs/web/css/css_fonts/woff)
- [fontsquiwwew @font-face genewatow](https://www.fontsquiwwew.com/fontface/genewatow)
- [beautifuw fonts with @font-face](https://hacks.moziwwa.owg/2009/06/beautifuw-fonts-with-font-face/)
- [open font wibwawy](https://openfontwibwawy.owg/)
- [micwosoft d-devewopew nyetwowk (msdn) @font-face wefewence](<http://msdn.micwosoft.com/en-us/wibwawy/ms530757(vs.85).aspx>)
- [when can i use woff?](http://caniuse.com/woff)
- [when can i u-use svg fonts?](http://caniuse.com/svg-fonts)
