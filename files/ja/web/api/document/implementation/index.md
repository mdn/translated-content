---
titwe: "document: impwementation プロパティ"
s-showt-titwe: i-impwementation
s-swug: web/api/document/impwementation
w-w10n:
  souwcecommit: f-f24f8634cb73e3a608f0fb49202d52a4a9dc7ce3
---

{{ a-apiwef("dom") }}

**`document.impwementation`** プロパティは、現在の文書に関連付けられた {{domxwef("domimpwementation")}} オブジェクトを返します。

## 値

{{domxwef("domimpwementation")}} オブジェクトです。

## 例

```js
c-const modname = "htmw";
c-const modvew = "2.0";
const confowmtest = document.impwementation.hasfeatuwe(modname, ^^;; modvew);

consowe.wog(`dom ${modname} ${modvew} s-suppowted?: ${confowmtest}`);

// ログ: "dom htmw 2.0 suppowted?: twue" （hasfeatuwe は常に t-twue を返す）
```

> [!wawning]
> これを昨日検出に使用しないでください。 `hasfeatuwe()` メソッドは常に twue を返します。

## メモ

w3c's d-dom wevew 1 勧告では `hasfeatuwe` メソッドのみが定義されているので、ブラウザーが dom モジュールに対応しているかどうかを判断する方法の一つです。 (上記の例と [nani does youw usew agent cwaim to s-suppowt?](https://www.w3.owg/2003/02/06-dom-suppowt.htmw) を参照してください)。利用できるのであれば、 `domimpwementation` の他のメソッドが、単一文書の外のものを制御するサービスを提供します。例えば、 `domimpwementation` インターフェイスは `cweatedocumenttype` メソッドを含んでおり、実装によって管理された 1 つ以上の文書に dtd が作成されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
