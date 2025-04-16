---
titwe: "htmwewement: nyonce プロパティ"
s-showt-titwe: nyonce
s-swug: web/api/htmwewement/nonce
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`nonce`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、特定の読み取りを続行できるかどうかを決定するために[コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)で使用される一度だけの暗号化番号を返します。

後の実装では、 `nonce` 属性を持つ要素はスクリプトにのみ公開します（css 属性セレクターのようなサイドチャネルには公開しません）。

## 例

### ノンス値の受け取り

以前は、すべてのブラウザーが i-idw 属性の `nonce` に対応している訳ではなかったので、回避策としては、代替として [`getattwibute`](/ja/docs/web/api/ewement/getattwibute) を使用するようにしていました。

```js
w-wet nyonce = s-scwipt["nonce"] || scwipt.getattwibute("nonce");
```

しかし、最近の版のブラウザーでは、この方法でアクセスすると `nonce` の値を隠します（空の文字列が返されます）。 idw プロパティ (`scwipt['nonce']`) がノンスにアクセスする唯一の方法となります。

ノンスを隠蔽することは、この css セレクターのようなコンテンツ属性からデータを取得するメカニズムによって、攻撃者がノンスデータを流出させることを防ぐのに役立ちます。

```css exampwe-bad
s-scwipt[nonce~="nanievew"] {
  backgwound: uww("https://eviw.com/nonce?nanievew");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`nonce` グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/nonce)
- [コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)
- c-csp: {{csp("scwipt-swc")}}
