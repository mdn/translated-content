---
title: protocol_handlers
slug: Web/Manifest/protocol_handlers
tags:
  - protocol_handlers
  - マニフェスト
  - ウェブ
  - 標準外
translation_of: Web/Manifest/protocol_handlers
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{Non-standard_Header}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

`protocol_handlers` メンバーは、このウェブアプリが登録・処理することができるプロトコルを表すオブジェクトの配列を指定します。プロトコルハンドラーは、 OS のアプリケーション設定にアプリケーションを登録します。登録は、特定のアプリケーションと与えられたプロトコルスキームを関連付けます。例えば、ウェブページで `mailto://` というプロトコルハンドラーを使用すると、登録されたメールアプリケーションが開きます。

プロトコルハンドラーとしてウェブアプリを登録すると、ユーザーがブラウザーやネイティブアプリから `mailto://` や `web+music://` などの特定のスキームを持つハイパーリンクをクリックすると、登録した PWA が開いてその URL を受信することができるようになります。

## 例

この例では、ウェブアプリのマニフェストで、プロトコルの `web+jngl` と `web+jnglstore` を処理するためにアプリを登録することを宣言しています。

```json
"protocol_handlers": [
  {
    "protocol": "web+jngl",
    "url": "/lookup?type=%s"
  },
  {
    "protocol": "web+jnglstore",
    "url": "/shop?for=%s"
  }
]
```

開発者は manifest.json にフィールドを追加して、ウェブアプリがどのプロトコルを処理できるかを宣言することができます。上記の例で見られるように、キーは `protocol_handlers` という名前で、プロトコル ハンドラ宣言オブジェクトの配列が含まれています。

URL スキームを処理するためのアプリケーションの登録は、オペレーティングシステムに依存します。この関連付けは通常、アプリケーションのインストール時に行われますが、既にインストールされているアプリケーションから後で行われることもあります。

## 値

プロトコルハンドラーオブジェクトには、以下の値を指定することができます。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">メンバー</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>protocol</code></td>
      <td>
        必須の文字列で、処理するプロトコルを指定します。 例:
        <code>mailto</code>, <code>ms-word</code>, <code>web+jngl</code>.
      </td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>
        プロトコルを処理するアプリケーションのスコープ (<a href="/en-US/docs/Web/Manifest/scope">scope</a>) 内の必要な HTTPS URL。 <code>%s</code> トークンは、プロトコルハンドラーのスキームで始まる URL に置換されます。 <code>url</code> が相対 URL であった場合、ベース URL はマニフェストの URL になります。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

この機能はどの仕様書にも含まれていません。 [Manifest](https://w3c.github.io/manifest/) 仕様書へ追加する提案が行われています。 [\[1\]](https://github.com/w3c/manifest/issues/846) [\[2\]](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/URLProtocolHandler/explainer.md)

## ブラウザーの互換性

{{Compat("html.manifest.protocol_handlers")}}
