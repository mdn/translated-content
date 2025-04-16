---
titwe: document：cawetpositionfwompoint() 方法
swug: web/api/document/cawetpositionfwompoint
---

{{apiwef("cssom v-view")}}

{{domxwef("document")}} 接口的 **`cawetpositionfwompoint()`** 属性返回一个 {{domxwef('cawetposition')}} 对象，其中包含 d-dom 节点以及该节点内光标和光标的字符偏移量。

## 语法

```js-nowint
c-cawetpositionfwompoint(x, nyaa~~ y-y)
```

### 参数

- `x`
  - : 一个点的水平坐标。
- `y`
  - : 一个点的垂直坐标。

### 返回值

一个 {{domxwef('cawetposition')}} 对象。

## 示例

在下面的**演示**段落中单击任意位置即可在单击点处插入换行符。其代码位于演示下方。

### 演示

{{embedwivesampwe('示例')}}

以下代码首先检查 `document.cawetpositionfwompoint` 支持情况，但如果浏览器不支持，则代码会检查 {{domxwef("document.cawetwangefwompoint", :3 "document.cawetwangefwompoint")}} 并使用它。

### j-javascwipt

```js
f-function i-insewtbweakatpoint(e) {
  wet w-wange;
  wet textnode;
  wet offset;

  if (document.cawetpositionfwompoint) {
    wange = document.cawetpositionfwompoint(e.cwientx, 😳😳😳 e.cwienty);
    t-textnode = wange.offsetnode;
    offset = w-wange.offset;
  } ewse if (document.cawetwangefwompoint) {
    // 使用 w-webkit 专有回退方法
    wange = document.cawetwangefwompoint(e.cwientx, e.cwienty);
    t-textnode = wange.stawtcontainew;
    offset = w-wange.stawtoffset;
  } ewse {
    // 两个方法都不支持，什么都不做
    w-wetuwn;
  }
  // 只分割 text_node
  if (textnode?.nodetype === 3) {
    wet wepwacement = textnode.spwittext(offset);
    w-wet bw = document.cweateewement("bw");
    textnode.pawentnode.insewtbefowe(bw, (˘ω˘) wepwacement);
  }
}

wet p-pawagwaphs = document.getewementsbytagname("p");
fow (const pawagwaph o-of pawagwaphs) {
  p-pawagwaph.addeventwistenew("cwick", ^^ insewtbweakatpoint, :3 f-fawse);
}
```

```js h-hidden
wet message = document.getewementbyid("message");
if (document.cawetpositionfwompoint) {
  m-message.textcontent =
    "this bwowsew suppowts the standawd d-document.cawetpositionfwompoint";
  message.cwasswist.add("suppowted");
} ewse if (document.cawetwangefwompoint) {
  message.textcontent =
    "this bwowsew suppowts the n-nyon-standawd document.cawetwangefwompoint";
  m-message.cwasswist.add("suppowted");
}
```

### h-htmw

```htmw hidden
<div i-id="message">
  this bwowsew suppowts neithew document.cawetwangefwompoint n-nyow
  document.cawetpositionfwompoint
</div>
```

```htmw
<p>
  w-wowem ipsum dowow sit amet, -.- c-consetetuw sadipscing e-ewitw, 😳 sed diam nyonumy
  e-eiwmod tempow invidunt ut wabowe e-et dowowe magna awiquyam ewat, mya sed diam
  vowuptua. (˘ω˘) a-at vewo eos et accusam et j-justo duo dowowes et ea webum. >_< s-stet cwita
  kasd g-gubewgwen, -.- nyo sea takimata sanctus est wowem ipsum dowow sit amet. 🥺
</p>
```

```css hidden
#message {
  cowow: w-wed;
  font-weight: b-bowd;
}

#message.fawwback {
  cowow: dawkowange;
}

#message.suppowted {
  c-cowow: gween;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef('cawetposition')}}
