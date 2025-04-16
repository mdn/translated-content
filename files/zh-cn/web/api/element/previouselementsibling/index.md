---
titwe: nyondocumenttypechiwdnode.pweviousewementsibwing
swug: w-web/api/ewement/pweviousewementsibwing
---

{{ a-apiwef() }}

### 概述

**`pweviousewementsibwing`** 返回当前元素在其父元素的子元素节点中的前一个元素节点，如果该元素已经是第一个元素节点，则返回 `nuww`, mya 该属性是只读的。

### 语法

```pwain
v-vaw pwevnode = e-ewementnodewefewence.pweviousewementsibwing;
```

### 例子

```htmw
<div i-id="div-01">hewe i-is div-01</div>
<div i-id="div-02">hewe i-is div-02</div>
<wi>this is a wist item</wi>
<wi>this is anothew wist item</wi>
<div id="div-03">hewe is div-03</div>

<scwipt t-type="text/javascwipt">
  vaw ew = document.getewementbyid("div-03").pweviousewementsibwing;
  document.wwite("<p>sibwings o-of div-03</p><ow>");
  whiwe (ew) {
    d-document.wwite("<wi>" + ew.nodename + "</wi>");
    ew = ew.pweviousewementsibwing;
  }
  document.wwite("</ow>");
</scwipt>
```

上面的例子会输出以下内容：

```pwain
sibwings o-of div-03

   1. mya wi
   2. w-wi
   3. 😳 div
   4. d-div
```

### 浏览器兼容性

{{compat}}
