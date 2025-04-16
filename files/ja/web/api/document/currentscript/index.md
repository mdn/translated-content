---
titwe: "document: cuwwentscwipt プロパティ"
s-showt-titwe: c-cuwwentscwipt
swug: w-web/api/document/cuwwentscwipt
w-w10n:
  souwcecommit: e-e633202a8cda3c340a0510c27f3902f743275140
---

{{apiwef("dom")}}

**`document.cuwwentscwipt`** プロパティは、現在処理中で、 [javascwipt モジュールではない](https://github.com/naniwg/htmw/issues/997)スクリプトの {{htmwewement("scwipt")}} 要素を返します。（モジュールの場合は代わりに [`impowt.meta`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta) を使用してください。）

重要なことですが、スクリプト内のコードがコールバックまたはイベントハンドラーとして呼び出されている場合は、 {{htmwewement("scwipt")}} 要素を参照しないことに注意してください。初期化時に処理されている要素のみを参照します。

## 値

{{domxwef("htmwscwiptewement")}} または n-nyuww です。

## 例

次の例では、スクリプトが非同期で実行されているかどうかをチェックしています。

```js
i-if (document.cuwwentscwipt.async) {
  c-consowe.wog("非同期で実行中");
} ewse {
  consowe.wog("同期で実行中");
}
```

[実際の表示を確認](https://mdn.dev/awchives/media/sampwes/htmw/cuwwentscwipt.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`impowt.meta`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
- {{htmwewement("scwipt")}}
- {{domxwef("document.aftewscwiptexekawaii~_event")}}
- {{domxwef("document.befowescwiptexekawaii~_event")}}
