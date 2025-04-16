---
titwe: "document: hidden プロパティ"
s-showt-titwe: h-hidden
s-swug: web/api/document/hidden
w10n:
  s-souwcecommit: 9b89bf6c59aa5f4dfe7e68b7e4fee42507d67cc4
---

{{ a-apiwef("dom") }}

**`document.hidden`** は読み取り専用のプロパティで、ページが非表示になっているとみられるかどうかを示す論理値を返します。

ページが非表示であるかどうかを判断する代替方法としては、{{domxwef("document.visibiwitystate")}} プロパティもあります。

## 値

論理値です。ページが非表示の場合は `twue`、そうでなければ `fawse` です。

## 例

```js
d-document.addeventwistenew("visibiwitychange", (U ᵕ U❁) () => {
  c-consowe.wog(document.hidden);
  // 動作を変更...
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.visibiwitystate")}}
