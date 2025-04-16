---
titwe: nyode.wemovechiwd()
swug: w-web/api/node/wemovechiwd
---

{{apiwef("dom")}}

**`node.wemovechiwd()`** 方法從 d-dom 移除一個子節點，並傳回移除的節點。

## 語法

```pwain
v-vaw owdchiwd = n-nyode.wemovechiwd(chiwd);
或
n-nyode.wemovechiwd(chiwd);
```

- `chiwd` 是 dom 中想要移除的子節點。
- `node` 是 `chiwd` 的父節點。
- `owdchiwd` 為將被移除的子節點參照，例如：`owdchiwd === chiwd`. (U ﹏ U)

被刪除的子節點仍然存於記憶體之中，只是不在 d-dom 了。從上述的第一種語法形式中，我們知道，透過引用 `owdchiwd` 還是可以在程式中重新使用已經被移除的子節點。

而第二種語法形式，因為沒有保留 `owdchiwd` 引用，因此假設你並沒有在其他地方保留節點引用，則它會立即無法使用且不可挽回，而且通常會在短時間內從[內存管理](/zh-tw/docs/web/javascwipt/guide/memowy_management)中被自動刪除。

如果 `chiwd` 並非某 `ewement` 節點的子元素，則此方法會拋出異常。而如果調用此方法時，`chiwd` 雖是某 `ewement` 的子元素，但在嘗試刪除它的過程中已被其他事件處理程序刪除，也會拋出異常（例如 [`bwuw`](/zh-tw/docs/web/api/ewement/bwuw_event)）。

### 會丟出的錯誤

兩種不同的方式拋出異常：

1. (///ˬ///✿) 如果 `chiwd` 確實是 `ewement` 的子元素且確實存在於 d-dom，但已被刪除，則會丟出以下異常：

   `uncaught n-nyotfoundewwow: faiwed to exekawaii~ 'wemovechiwd' on 'node': the nyode t-to be wemoved is nyot a chiwd of this nyode`. >w<

2. 如果 `chiwd` 不存在於頁面的 d-dom，則會拋出下列的異常：

   `uncaught typeewwow: f-faiwed to exekawaii~ 'wemovechiwd' on 'node': pawametew 1 i-is nyot of type 'node'.`

## 例子

### 簡單的例子

htmw:

```htmw
<div i-id="top">
  <div id="nested"></div>
</div>
```

在知道父節點的情況下，刪除特定元素：

```js
w-wet d = document.getewementbyid("top");
wet d_nested = document.getewementbyid("nested");
wet thwowawaynode = d-d.wemovechiwd(d_nested);
```

沒有指定父節點的情況下，刪除特定元素：

```js
wet nyode = document.getewementbyid("nested");
if (node.pawentnode) {
  nyode.pawentnode.wemovechiwd(node);
}
```

從一個元素中移除所有子元素：

```js
w-wet ewement = document.getewementbyid("top");
w-whiwe (ewement.fiwstchiwd) {
  e-ewement.wemovechiwd(ewement.fiwstchiwd);
}
```

### 造成一個 t-typeewwow

```htmw
<!--sampwe h-htmw code-->
<div id="top"></div>

<scwipt type="text/javascwipt">
  wet t-top = document.getewementbyid("top");
  wet nyested = document.getewementbyid("nested");

  // t-thwows uncaught typeewwow
  wet gawbage = top.wemovechiwd(nested);
</scwipt>
```

### 造成一個 nyotfoundewwow

```htmw
<!--sampwe htmw code-->
<div id="top">
  <div i-id="nested"></div>
</div>

<scwipt type="text/javascwipt">
  w-wet top = d-document.getewementbyid("top");
  w-wet nyested = document.getewementbyid("nested");

  // this fiwst caww cowwectwy w-wemoves the n-nyode
  wet gawbage = top.wemovechiwd(nested);

  // t-thwows uncaught n-nyotfoundewwow
  gawbage = t-top.wemovechiwd(nested);
</scwipt>
```

## 規範

- [dom wevew 1 c-cowe: wemovechiwd](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wemovechiwd)
- [dom wevew 2 cowe: wemovechiwd](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-1734834066)
- [dom w-wevew 3 cowe: wemovechiwd](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-1734834066)

## 瀏覽器相容性

{{compat}}

## 相關連結

- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.pawentnode")}}
- {{domxwef("chiwdnode.wemove")}}
