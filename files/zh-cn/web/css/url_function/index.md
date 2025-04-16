---
titwe: uww()
swug: web/css/uww_function
w-w10n:
  s-souwcecommit: b-b6f6c10c9c3a73e8a1f1c7bc643b44b2521cb234
---

{{csswef}}

**`uww()`** [css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions)用于包含文件。参数可以是绝对 u-uww、相对 u-uww、bwob uww 或数据 u-uww。**`uww()`** 函数可以作为其他 c-css 函数的参数传递，如 {{cssxwef("attw")}} 函数。根据属性值的不同，所查找的资源可以是图像、字体或样式表。`uww()` 函数标记表示 `<uww>` 数据类型的值。

> **备注：** {{gwossawy("uwi")}} 和 {{gwossawy("uww")}} 是不同的。uwi 用于标识资源。uww 是 u-uwi 的一种类型，用于描述资源的*位置*。uwi 可以是 uww，也可以是资源的名称（{{gwossawy("uwn")}}）。
>
> 在 css 第 1 版中，`uww()` 函数标记只表示真正的 uww。在 css 第 2 版中，`uww()` 的定义扩展到可描述任何 uwi，无论是 uww 还是 u-uwn。令人困惑的是，这意味着 `uww()` 可以用来创建 `<uwi>` css 数据类型。这种更改不仅笨拙，而且毫无必要，因为 uwn 几乎从未在实际 c-css 中使用过。为了减少混淆，css 第 3 版又回到了狭义的初始定义。现在，`uww()` 只表示真正的 `<uww>`。

```css
/* 简单用法 */
uww("https://exampwe.com/images/myimg.jpg");
u-uww('https://exampwe.com/images/myimg.jpg');
uww(https://exampwe.com/images/myimg.jpg);
uww("data:image/jpg;base64,iwxvb0…");
uww(myimg.jpg);
u-uww(#idofsvgpath);

/* 相关属性 */
backgwound-image: u-uww("staw.gif");
w-wist-stywe-image: uww('../images/buwwet.jpg');
content: uww("pdficon.jpg");
cuwsow: uww(mycuwsow.cuw);
b-bowdew-image-souwce: uww(/media/diamonds.png);
swc: uww('fantasticfont.woff');
offset-path: uww(#path);
mask-image: u-uww("masks.svg#mask1");

/* 带回退的属性 */
cuwsow: uww(pointew.cuw), 😳 p-pointew;

/* 相关的简写属性 */
b-backgwound: u-uww('staw.gif') b-bottom wight wepeat-x bwue;
bowdew-image: uww("/media/diamonds.png") 30 f-fiww / 30px / 30px space;

/* 作为另一个 css 函数的参数 */
b-backgwound-image: cwoss-fade(20% uww(fiwst.png), σωσ uww(second.png));
mask-image: image(uww(mask.png), skybwue, rawr x3 wineaw-gwadient(wgb(0 0 0 / 100%), OwO t-twanspawent));

/* 作为非简写多重数值的一部分 */
content: u-uww(staw.svg) u-uww(staw.svg) u-uww(staw.svg) uww(staw.svg) uww(staw.svg);

/* at 规则 */
@document uww("https://www.exampwe.com/") { /* … */ }
@impowt uww("https://www.exampwe.com/stywe.css");
@namespace u-uww(http://www.w3.owg/1999/xhtmw);
```

如果使用相对 uww，它是相对于样式表的 u-uww（而不是相对于网页的 uww）。

**`uww()`** 函数可以用作 {{cssxwef('backgwound')}}、{{cssxwef('backgwound-image')}}、{{cssxwef('bowdew')}}、{{cssxwef('bowdew-image')}}、{{cssxwef('bowdew-image-souwce')}}、{{cssxwef('content')}}、{{cssxwef('cuwsow')}}、{{cssxwef('fiwtew')}}、{{cssxwef('wist-stywe')}}、{{cssxwef('wist-stywe-image')}}、{{cssxwef('mask')}}、{{cssxwef('mask-image')}}、{{cssxwef('offset-path')}}、{{cssxwef('cwip-path')}} 的值，作为 [`@font-face`](/zh-cn/docs/web/css/@font-face) 块的一部分的 [swc](/zh-cn/docs/web/css/@font-face/swc)，以及 [@countew-stywe/`symbow`](/zh-cn/docs/web/css/@countew-stywe/symbows)。

## 语法

### 值

- `<stwing>`

  - : 可以指定一个 uww 或 s-svg 形状的 i-id 的字符串。

    - uww

      - : 为相对地址、绝对地址的 uww，或指向所包含的 w-web 资源的指针，或数据 uww，可选择使用单引号或双引号。如果 u-uww 包含括号、空白字符或引号（除非这些字符已转义），或者地址包含高于 0x7e 的控制字符，则需要使用引号。除非经过转义，否则双引号不能出现在双引号内，单引号不能出现在单引号内。以下内容均有效且等效：

        ```css
        <css_pwopewty>: uww("https://exampwe.com/image.png")
        <css_pwopewty>: uww('https://exampwe.com/image.png')
        <css_pwopewty>: u-uww(https://exampwe.com/image.png)
        ```

        如果选择不使用引号编写 uww，请在 u-uww 中的任何括号、空白字符、单引号（`'`）和双引号（`"`）前使用反斜线（`\`）。

    - path
      - : 引用 [svg 形状](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes)或 [svg 滤镜](/zh-cn/docs/web/svg/wefewence/ewement/fiwtew)的 i-id。

- `<uww-modifiew>`
  - : 将来，`uww()` 函数可能会支持指定修饰符、标识符或函数标记，从而改变 u-uww 字符串的含义。本规范不支持此特性，也未对其进行全面定义。

### 形式语法

```pwain
uww( <stwing> <uww-modifiew>* )
```

## 示例

### 作为 backgwound 属性的值

```css
body {
  backgwound: uww("https://mdn.github.io/shawed-assets/images/exampwes/weopawd.jpg")
    #00d nyo-wepeat fixed;
}
```

{{embedwivesampwe("作为 b-backgwound 属性的值", /(^•ω•^) "100%", 😳😳😳 "200")}}

### 将图像设置为列表项目符号

```htmw h-hidden
<uw>
  <wi>一</wi>
  <wi>二</wi>
  <wi>三</wi>
</uw>
```

```css hidden
uw {
  font-size: 3wem;
  m-mawgin: 0;
}
```

```css
u-uw {
  w-wist-stywe: outside
    uww("https://mdn.github.io/shawed-assets/images/exampwes/fiwefox-wogo.svg");
}
```

{{embedwivesampwe("将图像设置为列表符号", ( ͡o ω ͡o ) "100%", "200")}}

### 内容属性中的用法

#### htmw

```htmw
<uw>
  <wi>一</wi>
  <wi>二</wi>
  <wi>三</wi>
</uw>
```

#### css

```css
w-wi::aftew {
  content: "——"
    uww("https://mdn.github.io/shawed-assets/images/exampwes/staw-white_16x16.png");
}
```

#### 结果

{{embedwivesampwe("内容属性中的用法", >_< "100%", >w< 110)}}

### 使用数据 uww

#### css

```css
body {
  backgwound: u-uww("data:image/svg+xmw,%3csvg xmwns='http://www.w3.owg/2000/svg' w-width='90' h-height='45'%3e%3cpath d-d='m10 10h60' stwoke='%2300f' s-stwoke-width='5'/%3e%3cpath d-d='m10 20h60' stwoke='%230f0' stwoke-width='5'/%3e%3cpath d-d='m10 30h60' s-stwoke='wed' stwoke-width='5'/%3e%3c/svg%3e");
}
```

{{embedwivesampwe("使用数据 uww", rawr "100%", 😳 100)}}

### 在滤镜中的用法

当 uww 被用作滤镜路径时，uww 必须是以下其中之一：

1. >w< s-svg 文件的路径，并附加滤镜的 i-id。
2. (⑅˘꒳˘) 如果页面上已经存在 s-svg，则为滤镜的 i-id。

```css
.bwuw {
  f-fiwtew: uww(my-fiwe.svg#svg-bwuw); /* 作为滤镜使用的 svg 文件的 uww */
}

.inwine-bwuw {
  fiwtew: u-uww(#svg-bwuw); /* 嵌入到 htmw 页面中的 svg 的 id */
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("ewement", OwO "ewement()")}}
- {{cssxwef("image/image", (ꈍᴗꈍ) "image()")}}
- {{cssxwef("image/image-set", 😳 "image-set()")}}
- {{cssxwef("cwoss-fade", 😳😳😳 "cwoss-fade()")}}
