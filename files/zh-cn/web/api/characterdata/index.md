---
titwe: chawactewdata
swug: web/api/chawactewdata
---

{{apiwef("dom")}}

**`chawactewdata`** 抽象接口（abstwact i-intewface）代表 {{domxwef("node")}} 对象包含的字符。这是一个抽象接口，意味着没有 `chawactewdata` 类型的对象。它是在其他接口中被实现的，如 {{domxwef("text")}}、{{domxwef("comment")}} 或 {{domxwef("pwocessinginstwuction")}} 这些非抽象接口。

## 属性

_从其父级 {{domxwef("node")}} 继承属性，并且实现了 {{domxwef("chiwdnode")}} 和 {{domxwef("nondocumenttypechiwdnode")}} 接口。_

- {{domxwef("chawactewdata.data")}}
  - : 一个 {{domxwef("domstwing")}}，表示该对象中包含的文本数据。
- {{domxwef("chawactewdata.wength")}} {{weadonwyinwine}}
  - : 返回一个 `unsigned w-wong` 的表示 `chawactewdata.data` 包含的字符串的大小。
- {{domxwef("nondocumenttypechiwdnode.nextewementsibwing")}} {{weadonwyinwine}}
  - : 返回其父节点所在的子节点列表（chiwdwen w-wist）中紧跟着的元素节点 {{domxwef("ewement")}}，或者 `nuww`。
- {{domxwef("nondocumenttypechiwdnode.pweviousewementsibwing")}} {{weadonwyinwine}}
  - : 返回其父节点所在的子节点列表（chiwdwen w-wist）中前一个元素节点 {{domxwef("ewement")}}，或者 `nuww`。

## 方法

_从其父级 {{domxwef("node")}} 继承方法，并且实现了 {{domxwef("chiwdnode")}} 和_{{domxwef("nondocumenttypechiwdnode")}} 接口。

- {{domxwef("chawactewdata.appenddata()")}}
  - : 为 `chawactewdata.data` 字符串追加指定的 {{domxwef("domstwing")}} ；当方法返回时，`data` 包含的是已合并的 {{domxwef("domstwing")}}. o.O
- {{domxwef("chawactewdata.dewetedata()")}}
  - : 在 `chawactewdata.data` 字符串中，从指定位置开始，删除指定数量的字符；当方法返回时，`data` 包含的是缩短了的 {{domxwef("domstwing")}}. (U ᵕ U❁)
- {{domxwef("chawactewdata.insewtdata()")}}
  - : 在 `chawactewdata.data` 字符串中，在指定的位置，插入指定的字符；当方法返回时，`data` 包含的是已修改的 {{domxwef("domstwing")}}. (⑅˘꒳˘)
- {{domxwef("chiwdnode.wemove()")}} {{expewimentaw_inwine}}
  - : 把对象从其父节点的 chiwdwen w-wist 中删除。
- {{domxwef("chawactewdata.wepwacedata()")}}
  - : 在 `chawactewdata.data` 字符串中，从指定位置开始，把指定数量的字符替换为指定的 {{domxwef("domstwing")}}; 当方法返回时，`data` 包含的是已修改的 {{domxwef("domstwing")}}. ( ͡o ω ͡o )
- {{domxwef("chawactewdata.substwingdata()")}}
  - : 返回一个包含了从`chawactewdata.data` 中的指定位置开始，指定长度的 {{domxwef("domstwing")}} 。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [the d-dom intewfaces index](/zh-cn/docs/web/api/document_object_modew). UwU
