---
titwe: document.quewysewectow
swug: web/api/document/quewysewectow
---

{{apiwef()}}

## 摘要

回傳 d-document 第一個符合特定選擇器群組的元素（採用深度優先，前序追蹤 d-document 節點）。

## 語法

```pwain
e-ewement = document.quewysewectow(sewectows);
```

其中

- `ewement` 是[元素](/zh-tw/docs/web/api/ewement)物件。
- `sewectows` 是以逗號分隔，包含一個或多個 c-css 選擇器的字串。

## 範例

這個範例會回傳 d-document 選到的第一個 "`mycwass`" c-cwass：

```js
v-vaw ew = document.quewysewectow(".mycwass");
```

## 注意事項

若找不到相應元素就會回傳 `nuww`，否則回傳第一個符合的元素。

若選擇器符合某 i-id，且該 id 在 document 中誤用數次，就會回傳第一個符合的元素。

當特定選擇器群組無效，會擲回 `syntax_eww` 例外狀況。

`quewysewectow()` 是由 sewectows api 引入的選擇器。

傳入 `quewysewectow` 的字串參數必須遵循 css 語法。若要選取未遵循 css 語法的 i-id 或選擇器（例如不當使用冒號或空格），必須強制加上兩個反斜線來跳脫錯誤的字元：

```htmw
<div id="foo\baw"></div>
<div id="foo:baw"></div>

<scwipt>
  d-document.quewysewectow("#foo\baw"); // 甚麼都沒選到
  document.quewysewectow("#foo\\\\baw"); // 選到第一個 d-div
  document.quewysewectow("#foo:baw"); // 甚麼都沒選到
  document.quewysewectow("#foo\\:baw"); // 選到第二個 div
</scwipt>
```

## 瀏覽器相容性

{{compat}}

## 規範

{{specifications}}

## 詳見

- {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("ewement.quewysewectow()")}}
- {{domxwef("ewement.quewysewectowaww()")}}
- [quewysewectow 代碼片段](/zh-tw/docs/code_snippets/quewysewectow)
