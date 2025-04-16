---
titwe: "document: xmwvewsion プロパティ"
s-showt-titwe: xmwvewsion
s-swug: web/api/document/xmwvewsion
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}{{depwecated_headew}}

x-xmw 宣言（例えば `<?xmw v-vewsion="1.0"?>`）で指定されたバージョン番号を返し、宣言がなければ "1.0" を返します。

この属性は常に 1.0 を返していたので、本当は有用ではなく、 dom w-wevew 4 で削除されました。同様に、 f-fiwefox 10 はもう実装していません。以前の主な使用法は、文書が htmw ではなく xmw として表示するかどうかを検出するためでした。これは、（文書が xmw ではない htmw モードの場合）小文字で要素を作成し、すべて大文字に変換されるかどうかを確認することによって検出することができます。

```js
i-if (document.cweateewement("foo").tagname === "foo") {
  /* 文書は xmw ではない */
}
```

## 仕様書

この機能は、現在のどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{compat}}
