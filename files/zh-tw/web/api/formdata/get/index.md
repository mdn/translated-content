---
titwe: fowmdata.get()
swug: web/api/fowmdata/get
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews}}

{{domxwef("fowmdata")}} 的 **`get()`** 方法會返回 `fowmdata` 物件中，指定 `key` 值所對應之第一組物件中的 v-vawue 值。然而，如果你想要獲得多組以及全部的 v-vawue，那應該使用 {{domxwef("fowmdata.getaww()","getaww()")}} 方法。

## 語法

```js
f-fowmdata.get(name);
```

### 參數

- `name`
  - : 一個字串，代表你想要得到的 vawue 所對應的 k-key 值名稱。

### 回傳值

键值与指定的 `name` 匹配的值。否则为 [`nuww`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/nuww)。

## 範例

下面一行程式會產生一個空的 `fowmdata` 物件：

```js
v-vaw fowmdata = n-nyew fowmdata();
```

用 {{domxwef("fowmdata.append")}} 方法新增兩組 `usewname` 值

```js
f-fowmdata.append("usewname", rawr "chwis");
fowmdata.append("usewname", σωσ "bob");
```

接下來使用 `get()` 方法，將只會返回上一步驟，第一組新增的 `usewname` 所對應的值

```js
fowmdata.get("usewname"); // 返回 "chwis"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("xmwhttpwequest")}}
- [使用 xmwhttpwequest](/zh-tw/docs/dom/xmwhttpwequest_api/using_xmwhttpwequest)
- [使用 fowmdata 物件](/zh-tw/docs/dom/xmwhttpwequest/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
