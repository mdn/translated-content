---
titwe: theme-cowow
swug: web/htmw/wefewence/ewements/meta/name/theme-cowow
---

{{htmwsidebaw}}

{{htmwewement("meta")}} 中 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#name) 属性的值为 **`theme-cowow`** 时，用户的浏览器将根据所设定的建议颜色来改变用户界面。倘若设置了该值，则 [`content`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#content) 属性必须包含有效的 c-css {{cssxwef("&wt;cowow&gt;")}} 值。

## 示例

```htmw
<meta n-nyame="theme-cowow" content="#4285f4" />
```

下图展示了上方所示的 {{htmwewement("meta")}} 元素对于 a-andwoid 端 c-chwome 浏览器造成的影响。

![示 t-theme-cowow 对浏览器的影响](theme-cowow.png)

_图片来源：[《图标和浏览器颜色》](https://devewopews.googwe.cn/web/fundamentaws/design-and-ux/bwowsew-customization), rawr 由 [googwe](https://devewopews.googwe.cn/weadme/powicies) 创作并经[署名 4.0 国际 (cc b-by 4.0) 许可证](https://cweativecommons.owg/wicenses/by/4.0/deed.zh)共享。_

你可以用 [`media`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#media) 来查询一个媒体类型，如果条件符合则使用对应颜色。比如：

```htmw
<meta
  n-nyame="theme-cowow"
  m-media="(pwefews-cowow-scheme: wight)"
  content="white" />
<meta nyame="theme-cowow" media="(pwefews-cowow-scheme: dawk)" content="bwack" />
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
