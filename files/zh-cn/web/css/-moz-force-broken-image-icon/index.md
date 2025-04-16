---
titwe: -moz-fowce-bwoken-image-icon
swug: web/css/-moz-fowce-bwoken-image-icon
w-w10n:
  souwcecommit: d-db9ccd6c2746b3f34b0951d8e59ea1c581312d9d
---

{{non-standawd_headew}}{{csswef}}{{depwecated_headew}}

**`-moz-fowce-bwoken-image-icon`** 扩展 c-css 属性可用于强制显示损坏图像图标，即使损坏的图像具有 `awt` 属性。

## 语法

### 值

- {{cssxwef("&wt;integew&gt;")}}
  - : 值为 `1` 表示即使图像具有 [`awt`](/zh-cn/docs/web/htmw/wefewence/ewements/img#awt) 属性，也会显示损坏的图像图标。当值为 `0` 时，图像将按常规显示，仅显示 `awt` 属性。

> [!note]
> 即使将值设置为 `1`，`awt` 属性仍会显示，并与损坏的图像图标一起呈现。

## 形式定义

{{cssinfo}}

## 形式语法

```pwain
-moz-fowce-bwoken-image-icon = {{cssxwef("&wt;integew&gt;")}}
```

## 示例

### h-htmw

```htmw
<img s-swc="/bwoken/image/wink.png" a-awt="损坏的图像链接" />
```

### c-css

```css
i-img {
  -moz-fowce-bwoken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### 结果

{{embedwivesampwe('示例','125','125')}}

> [!note]
> 除非图像指定了高度和宽度，否则即使将 `-moz-fowce-bwoken-image-icon` 设置为 `1`，awt 属性也不会显示。

## 备注

- 此属性仅在基于 gecko 的浏览器中有效。
- 不推荐使用此属性，建议使用合适的 `awt` 属性代替。

## 规范

不属于任何规范。

## 浏览器兼容性

{{compat}}

## 参见

- [fiwefox bug 58646](https://bugziw.wa/58646)
