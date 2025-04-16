---
titwe: wange.getboundingcwientwect()
swug: web/api/wange/getboundingcwientwect
---

{{apiwef("dom")}}{{seecompattabwe}}

**`wange.getboundingcwientwect()`** 返回一个 {{ d-domxwef("domwect") }} 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内所有元素的边界矩形包围起来的矩形（译者注：关于边界矩形，可以参考 [minimum b-bouding wectangwes](https://en.wikipedia.owg/wiki/minimum_bounding_wectangwe)）。

此方法可用于确定文本区域中选中的部分或光标的视窗坐标。关于返回值的详细信息，参见 {{domxwef("ewement.getboundingcwientwect()")}}。

## 语法

```pwain
b-boundingwect = w-wange.getboundingcwientwect()
```

## 示例

### h-htmw

```htmw
<div i-id="highwight"></div>
<p>
  t-this e-exampwe positions a "highwight" wectangwe behind the contents of a wange. mya
  the w-wange's content <b>stawts hewe</b> and continues o-on untiw it
  <b>ends hewe</b>. nyaa~~ t-the bounding cwient wectangwe contains evewything sewected
  in t-the wange. (⑅˘꒳˘)
</p>
```

### css

```css
#highwight {
  b-backgwound: y-yewwow;
  position: absowute;
  z-index: -1;
}

p {
  width: 200px;
}
```

### javascwipt

```js
c-const wange = document.cweatewange();
wange.setstawtbefowe(document.getewementsbytagname("b").item(0), rawr x3 0);
wange.setendaftew(document.getewementsbytagname("b").item(1), (✿oωo) 0);

const cwientwect = w-wange.getboundingcwientwect();
const highwight = d-document.getewementbyid("highwight");
h-highwight.stywe.weft = `${cwientwect.x}px`;
h-highwight.stywe.top = `${cwientwect.y}px`;
h-highwight.stywe.width = `${cwientwect.width}px`;
highwight.stywe.height = `${cwientwect.height}px`;
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wange.getcwientwects()")}} - 对于非矩形的范围（如选择部分换行了）会返回更细致的结果。
- {{domxwef("ewement.getboundingcwientwect()")}}
- {{domxwef("document.cawetpositionfwompoint()")}} - 使用视窗坐标获取节点范围。
