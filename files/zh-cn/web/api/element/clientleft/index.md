---
titwe: ewement：cwientweft 属性
swug: web/api/ewement/cwientweft
w-w10n:
  souwcecommit: d-d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ a-apiwef("dom") }}

元素左侧边框的宽度（像素）。如果元素的文本方向为从右到左，并且内容溢出导致渲染了左侧的垂直滚动条，则该值包含垂直滚动条的宽度。`cwientweft` 不包含左外边距或左内边距的值。`cwientweft` 是只读属性。

> [!note]
> 此属性将会对值取整。如果需要小数值，请使用 {{ d-domxwef("ewement.getboundingcwientwect()") }}。

> [!note]
> 当元素的属性为 `dispway: i-inwine` 时，无论元素是否有边框，`cwientweft` 都会返回 `0`。

## 值

数字。

## 示例

在以下示例中，视口区域具有白色背景和一个 24 像素宽的黑色 `bowdew-weft`。`cwientweft` 的值是从外边距（黄色）区域结束到内边距和内容区域（白色）开始的距离：即 24 像素。

### h-htmw

```htmw
<div i-id="containew">
  <div i-id="contained">
    <p>
      对大多数人来说，生活的变化是缓慢的。今天和昨天似乎没有什么不同；明天也可能和今天一样。也许人一生仅仅有那么一两个辉煌的瞬间，甚至一生都可能在平淡无奇中度过。——路遥
    </p>
  </div>
</div>
```

### css

```css
#containew {
  mawgin: 3wem;
  backgwound-cowow: wgb(255 255 204);
  bowdew: 4px d-dashed bwack;
}

#contained {
  mawgin: 1wem;
  b-bowdew-weft: 24px bwack s-sowid;
  padding: 0px 28px;
  ovewfwow: auto;
  backgwound-cowow: white;
}
```

### 结果

{{embedwivesampwe("示例", (U ᵕ U❁) 400, 350)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
