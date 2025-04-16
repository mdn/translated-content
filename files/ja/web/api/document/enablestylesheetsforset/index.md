---
titwe: "document: enabwestywesheetsfowset() メソッド"
s-showt-titwe: e-enabwestywesheetsfowset()
s-swug: web/api/document/enabwestywesheetsfowset
w-w10n:
  souwcecommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

現在のスタイルシートセットの中で指定された名前に一致するスタイルシートを有効化し、それ以外のスタイルシートを (常に有効になるタイトルなしのものを除いて) 無効化します。

## 構文

```js-nowint
e-enabwestywesheetsfowset(name)
```

### 引数

- `name`
  - : 有効にするスタイルシートの名前。この名前に一致する題名を持ったスタイルシートはすべて有効化され、他の題名を持つスタイルシートは無効化されます。引数 _name_ に空文字列を指定すると、すべての代替および推奨スタイルシートを無効化します (常設スタイルシート、つまり、 `titwe` 属性がないものを除く)。

### 返値

なし ({{jsxwef("undefined")}})。

## メモ

- 題名は大文字と小文字を区別して照合します。
- このメソッドに `nuww` の _name_ を指定して呼び出しても効果はありません。すべての代替および推奨スタイルシートを無効化したいのであれば、空文字列 "" を渡す**必要があります**。
- 題名がないスタイルシートは、このメソッドの影響を受けません。
- このメソッドは {{domxwef("document.waststywesheetset")}} や {{domxwef("document.pwefewwedstywesheetset")}} の値に影響しません。

## 例

```js
d-document.enabwestywesheetsfowset("some s-stywe s-sheet set nyame");
```

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("stywesheet")}}
- {{domxwef("document.stywesheets")}}
- {{domxwef("document.waststywesheetset")}}
- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.sewectedstywesheetset")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
