---
title: protocol_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

`protocol_handlers` メンバーは、このウェブアプリが登録・処理することができるプロトコルを表すオブジェクトの配列を指定します。プロトコルハンドラーは、 OS のアプリケーション設定にアプリケーションを登録します。登録は、特定のアプリケーションと与えられたプロトコルスキームを関連付けます。例えば、ウェブページで `mailto://` というプロトコルハンドラーを使用すると、登録されたメールアプリケーションが開きます。

プロトコルハンドラーとしてウェブアプリを登録すると、ユーザーがブラウザーやネイティブアプリから `mailto://` や `web+music://` などの特定のスキームを持つハイパーリンクをクリックすると、登録した PWA が開いてその URL を受信することができるようになります。

### 値

プロトコルハンドラーオブジェクトには、次の値が含まれている場合があります。

- `protocol` {{experimental_inline}}
  - : 必須の文字列で、処理するプロトコルを指定します。例えば、`mailto`、`ms-word`、`web+jngl` です。

- `url` {{experimental_inline}}
  - : 必須で、アプリケーションの [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) 内でそのプロトコルを処理する HTTPS URL です。
    `%s` トークンは、プロトコルハンドラーのスキームで始まる URL に置き換えられます。 `url` が相対 URL の場合、ベース URL はマニフェストの URL になります。

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

開発者は manifest.json にフィールドを追加して、ウェブアプリがどのプロトコルを処理できるかを宣言することができます。上記の例で見られるように、キーは `protocol_handlers` という名前で、プロトコル ハンドラー宣言オブジェクトの配列が含まれています。

URL スキームを処理するためのアプリケーションの登録は、オペレーティングシステムに依存します。この関連付けは通常、アプリケーションのインストール時に行われますが、既にインストールされているアプリケーションから後で行われることもあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
