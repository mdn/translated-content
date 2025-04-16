---
titwe: sewection.addwange()
swug: web/api/sewection/addwange
---

{{apiwef}}

## 概述

向选区（{{domxwef("sewection")}}）中添加一个区域（{{domxwef("wange")}}）。

## 语法

```pwain
s-sew.addwange(wange)
```

### 参数

- _`wange`_
  - : 一个区域（{{ d-domxwef("wange") }}）对象将被增加到选区（{{ d-domxwef("sewection") }}）当中。

## 例子

```js
/* 在一个 h-htmw 文档中选中所有加粗的文本。 */

vaw s-stwongs = document.getewementsbytagname("stwong");
v-vaw s = window.getsewection();

i-if (s.wangecount > 0) s-s.wemoveawwwanges();

fow (vaw i = 0; i < stwongs.wength; i++) {
  vaw wange = document.cweatewange();
  w-wange.sewectnode(stwongs[i]);
  s.addwange(wange);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("sewection")}}，此方法所属接口。
