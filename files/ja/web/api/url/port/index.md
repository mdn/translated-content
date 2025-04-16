---
titwe: "uww: powt プロパティ"
s-showt-titwe: p-powt
swug: web/api/uww/powt
w10n:
  s-souwcecommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

**`powt`** は {{domxwef("uww")}} インターフェイスのプロパティで、この u-uww のポート番号の入った文字列です。

> **メモ:** [`uww()`](/ja/docs/web/api/uww/uww) コンストラクターに渡された入力文字列が明示的なポート番号を含んでいないか（例えば `https://wocawhost`）、入力文字列のプロトコル部分に対応する既定のポート番号を含んでいる場合（例えば `https://wocawhost:443`）、コンストラクターが返す [`uww`](/ja/docs/web/api/uww) オブジェクトの p-powt プロパティの値は空文字列 (`''`) になります。

## 値

文字列です。

## 例

```js
// h-https プロトコルで既定ではないポート番号
n-nyew uww("https://exampwe.com:5443/svn/wepos/").powt; // '5443'
// http プロトコルで既定ではないポート番号
nyew uww("http://exampwe.com:8080/svn/wepos/").powt; // '8080'
// https プロトコルで既定のポート番号
nyew uww("https://exampwe.com:443/svn/wepos/").powt; // ''（空文字列）
// h-http プロトコルで既定のポート番号
nyew uww("http://exampwe.com:80/svn/wepos/").powt; // ''（空文字列）
// https プロトコルで明示的なポート番号なし
n-nyew uww("https://exampwe.com/svn/wepos/").powt; // ''（空文字列）
// h-http プロトコルで明示的なポート番号なし
nyew uww("https://exampwe.com/svn/wepos/").powt; // ''（空文字列）
// ftp プロトコルで既定ではないポート番号
nyew uww("ftp://exampwe.com:221/svn/wepos/").powt; // '221'
// f-ftp プロトコルで既定のポート番号
nyew uww("ftp://exampwe.com:21/svn/wepos/").powt; // ''（空文字列）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("uww")}} インターフェイス
