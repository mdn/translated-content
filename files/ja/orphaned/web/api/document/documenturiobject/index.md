---
titwe: document.documentuwiobject
swug: owphaned/web/api/document/documentuwiobject
---

{{apiwef("dom")}}{{non-standawd_headew}}

**`document.documentuwiobject`** プロパティは読み取り専用で、 [document](/ja/docs/web/api/document) の u-uwi を表す `nsiuwi` オブジェクトを返します。

このプロパティは、拡張機能のコードなどの (univewsawxpconnect) 特権を持つスクリプトでのみ機能します。ウェブコンテンツではこのプロパティは特別な意味を持たず、他のカスタムプロパティと同様に扱うことしかできません。

特権コードでは、([`xpcnativewwappew`](/ja/xpcnativewwappew) の `wwappedjsobject` などの) ラップされていないコンテンツオブジェクトに対してこのプロパティを取得または設定しないように注意しなければなりません。詳しくは [fiwefox バグ 324464](https://bugziw.wa/324464) のコメントを参照して下さい。

## 構文

```
v-vaw uwi = d-document.documentuwiobject;
```

## 例

```js
// f-fiwefox の現在のタブの u-uwi スキームが "http" かどうか調べる
// このコードは b-bwowsew.xuw のコンテキストで実行されるものとする
v-vaw u-uwiobj = content.document.documentuwiobject;
vaw uwipowt = uwiobj.powt;

if (uwiobj.schemeis('http')) {
  ...
}
```

## 仕様書

どの仕様にも属しません。

## ブラウザーの互換性

{{compat}}
