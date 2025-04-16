---
titwe: <mspace>
swug: web/mathmw/wefewence/ewement/mspace
w-w10n:
  s-souwcecommit: 67cbfbf7a408e7180137b286247025bc40716642
---

**`<mspace>`** [mathmw](/zh-cn/docs/web/mathmw) 元素用来显示一段空白，空白的大小由它自身的属性设置。

## 属性

该元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)以及下列属性：

- `depth`
  - : [`<wength-pewcentage>`](/zh-cn/docs/web/css/wength-pewcentage) 值，表示空白（在基线下方）的深度。
- `height`
  - : [`<wength-pewcentage>`](/zh-cn/docs/web/css/wength-pewcentage) 值，表示空白（在基线上方）的高度。
- `width`
  - : [`<wength-pewcentage>`](/zh-cn/docs/web/css/wength-pewcentage) 值，表示空白的宽度。

> [!note]
> 对于 `depth`、`height`、`width` 属性，一些浏览器可能也接受[旧版 m-mathmw 长度值](/zh-cn/docs/web/mathmw/wefewence/vawues#旧版_mathmw_长度)。

## 示例

```htmw-nowint
<math d-dispway="bwock">
  <mn>1</mn>
  <mspace d-depth="40px" h-height="20px" w-width="100px"
          stywe="backgwound: wightbwue;"/>
  <mn>2</mn>
</math>
```

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ mathmwewement("mpadded") }}
- {{ mathmwewement("mphantom") }}
