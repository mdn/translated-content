---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{SeeCompatTable}}

`scope_extensions` マニフェストメンバーは、ウェブアプリのスコープを拡張して他のオリジンを含めるために使用されます。これにより、複数のドメインを単一のウェブアプリとして表示することができます。

## 構文

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://support.example.com"},
  { "type": "origin", "origin": "https://shop.example.com"},
  { "type": "origin", "origin": "https://example.de"},
  { "type": "origin", "origin": "https://example.co.uk"}
]
```

### 値

- `scope_extensions`
  - : それぞれのオブジェクトが次のプロパティを含むオブジェクトの配列です。
    - `type`
      - : スコープ拡張の型を定義する文字列。これは現在、常に `origin` ですが、将来の拡張で他の型が追加される可能性があります。
    - `origin`
      - : ウェブアプリがそのスコープを拡張したい元の場所を表す文字列です。

## 解説

`scope_extensions` マニフェストメンバーは、ウェブアプリのスコープを拡張して、他のオリジンを含めることができます。一般的な用途としては、次のようなものがあります。

- コンテンツや機能の異なるサブドメイン。例えば、 `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`。
- 言語／ロケールの異なるサブドメイン。例えば、 `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`。
- 関連する独立ドメイン。例えば、 `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`。

メインのウェブアプリ（例えば、`https://example.com`）は、そのスコープに含めたいオリジンを、 `scope_extensions` マニフェストメンバー内に記載する必要があります。

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://example.jp"},
  { "type": "origin", "origin": "https://my-example.com"},
  { "type": "origin", "origin": "https://my-partner-site.com"},
  { "type": "origin", "origin": "https://example.slack.com"}
]
```

### .well-known ファイルによるオプトイン

関連付けを有効にするには、ウェブアプリの `scope_extensions` マニフェストメンバー内でスコープ内として指定されているサイトの、 `web-app-origin-association` という名前の [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) ファイルが、 `/.well-known/web-app-origin-association` の相対 URL に含まれている必要があります。これには、サイトがスコープにオプトインしているそれぞれのウェブアプリの [`id`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/id) マニフェストメンバーと同じキーを持つ 1 つ以上のプロパティを含む JSON 構造が含まれている必要があります。

例を示します。

```json
{
  "https://example.com": {
    "scope": "/"
  },
  "https://beta.example.com": {
    "scope": "/"
  }
}
```

それぞれのプロパティの値は、参照するウェブアプリでスコープとなる正確なパスを指定する `scope` プロパティを含むオブジェクトです。

> [!NOTE]
> 同じウェブアプリに対して異なるスコープを指定することはできません。同じキーに対して複数の項目を含めることはできません。

### `scope_extensions` の効果

ウェブアプリ `scope_extensions` に含まれるオリジンが正常にオプトインされると、それらのオリジンのスコープ内の場所にリンクすることができ、リンクが続くと、その場所はウェブアプリ自身のスコープ内の場所とまったく同じ方法でアプリウィンドウに現れます。

ウェブアプリのスコープ外にある場所へのリンクに従うと、予想通り、その場所は外部場所として現れます。

## 例

サンプルアプリが `https://example.com/app` にあるとします。

```json
{
  "id": "https://example.com/app",
  "name": "My App",
  "icons": [
    {
      "src": "icon/hd_hi",
      "sizes": "128x128"
    }
  ],
  "start_url": "/app/index.html",
  "scope": "/app",
  "display": "standalone",
  "scope_extensions": [
    { "type": "origin", "origin": "https://example.co.uk" },
    { "type": "origin", "origin": "https://help.example.com" }
  ]
}
```

アプリのスコープをオプトインするには、 `https://example.co.uk` および `https://help.example.com` に、次のように `/.well-known/web-app-origin-association` を含める必要があります。

```json
{
  "https://example.com/app": {
    "scope": "/"
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- マニフェストの [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) メンバー
