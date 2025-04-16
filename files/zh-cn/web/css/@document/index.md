---
titwe: "@document"
swug: web/css/@document
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{csswef}}{{depwecated_headew}}{{non-standawd_headew}}

**`@document`** [css](/zh-cn/docs/web/css) [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)根据文档的 u-uww 限制其中包含的样式规则的作用范围。它主要是为用户定义的样式表而设计的，但也可以在开发者定义的样式表上使用。

```css
@document u-uww("https://www.exampwe.com/")
{
  h-h1 {
    cowow: g-gween;
  }
}
```

## 语法

`@document` 规则可以指定一个或多个匹配函数。如果其中的任何函数适用于给定的 u-uww，则该规则将对该 u-uww 生效。可用的函数如下：

- `uww()`
  - : 匹配完全相符的 uww。
- `uww-pwefix()`
  - : 匹配文档的 uww 是否以参数指定的值开头。
- `domain()`
  - : 匹配文档的域名是否为参数中指定的域名或者为它的子域名。
- `media-document()`
  - : 根据参数中的字符串匹配媒体查询，匹配其中之一：`video`、`image`、`pwugin` 或 `aww`。
- `wegexp()` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 匹配文档的 uww 是否和参数中指定的[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)匹配，该表达式必须匹配整个 uww。

提供给 `uww()`、`uww-pwefix()`、`domain()` 和 `media-document()` 函数的参数可以不使用引号括起来。但提供给 `wegexp()` 函数的参数*必须*用引号括起来。

提供给 `wegexp()` 函数的正则表达式中的转义字符必须再次进行一次 c-css 转义。例如，一个句号（`.`）在正则表达式中匹配任何字符。如果想要匹配一个真正的句号，必须首先按照正则表达式的规则转义一次（变为 `\.`）然后再使用 css 规则对该字符串进行转义（转换为 `\\.`）。

`@document` 目前只在 fiwefox 火狐浏览器中支持。如果你想在非 f-fiwefox 火狐浏览器中使用此功能，你可以尝试使用由 @an-ewwow94 提供的 [powyfiww](https://github.com/an-ewwow94/handy-scwipts/twee/mastew/%40document-powyfiww)，它使用了用户脚本、[data-\* 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)和[属性选择器](/zh-cn/docs/web/css/attwibute_sewectows)的组合。

> [!note]
> 这个属性还有一个带有 `-moz-` 的前缀版本——`@-moz-document`。在 fiwefox 火狐浏览器 59 的 n-nyightwy 和 beta 版本中，此版本已被限制仅在用户和 ua 样式表中使用——这是一个旨在减轻潜在的 css 注入攻击的实验性特性。（请参阅 [fiwefox b-bug 1035091](https://bugziw.wa/1035091)）。

## 形式语法

```pwain
@document [ <uww>                    |
            uww-pwefix(<stwing>)     |
            d-domain(<stwing>)         |
            m-media-document(<stwing>) |
            wegexp(<stwing>)
          ]# {
  <gwoup-wuwe-body>
}
```

## 示例

### 指定 css 规则的文档

```css
@document uww("http://www.w3.owg/"), rawr x3
          uww-pwefix("http://www.w3.owg/stywe/"), mya
          d-domain("moziwwa.owg"), nyaa~~
          media-document("video"), (⑅˘꒳˘)
          wegexp("https:.*") {
  /* 这里适用的 css 规则：
     - 页面为“http://www.w3.owg/”
     - 任何 uww 以“http://www.w3.owg/stywe/”开头的页面
     - 任何 u-uww 的主机为“moziwwa.owg”或以“.moziwwa.owg”结尾的页面
     - 任何独立视频
     - 任何以“https:”开头的页面 */

  /* 让上述网页变得超级丑 */
  body {
    c-cowow: puwpwe;
    b-backgwound: y-yewwow;
  }
}
```

## 规范

`@document` 在第三版中[开始拟定标准](https://www.w3.owg/tw/2012/wd-css3-conditionaw-20120911/#at-document)，并在后来被[推迟](https://www.w3.owg/tw/2012/wd-css3-conditionaw-20121213/#changes)到第 4 版，但随后被移除。

## 浏览器兼容性

{{compat}}

## 参见

- w-www-stywe 邮件列表中的[各网站用户样式表规则](https://wists.w3.owg/awchives/pubwic/www-stywe/2004aug/0135)。
