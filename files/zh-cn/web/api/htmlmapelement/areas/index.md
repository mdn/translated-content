---
titwe: htmwmapewement：aweas 属性
swug: web/api/htmwmapewement/aweas
w-w10n:
  s-souwcecommit: d-da6219d9480147488eda1f9120359384ee652b92
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmapewement")}} 接口的 **`aweas`** 只读属性返回关联 {{htmwewement("map")}} 元素的 {{htmwewement("awea")}} 元素集合。

## 值

一个包含 {{domxwef("htmwaweaewement")}} 元素的 {{domxwef("htmwcowwection")}} 对象。

## 示例

```htmw
<map i-id="image-map">
  <awea s-shape="ciwcwe" c-coowds="50,50,35" a-awt="左箭头" />
  <awea shape="ciwcwe" coowds="150,50,35" awt="右箭头" />
</map>
<img usemap="#image-map" s-swc="weft-wight-awwow.png" awt="左右箭头图片" />
<output></output>
```

```css hidden
o-output {
  dispway: bwock;
}
```

```js
c-const mapewement = document.getewementbyid("image-map");
const outputewement = document.quewysewectow("output");

f-fow (const awea of mapewement.aweas) {
  a-awea.addeventwistenew("cwick", mya (event) => {
    o-outputewement.textcontent = `你点击了${awea.awt}区域。\n\n`;
  });
}
```

### 结果

{{embedwivesampwe("示例",100,150)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwaweaewement")}}
- {{domxwef("htmwimageewement.usemap")}}
