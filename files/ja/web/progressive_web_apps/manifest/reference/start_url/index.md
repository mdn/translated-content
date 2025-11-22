---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`start_url` はマニフェストメンバーで、ユーザーがウェブアプリケーションを起動した際に開くための URL を指定するために使用します。例えば、端末のホーム画面にあるアプリケーションのアイコンをタップしたり、アプリケーションの一覧に掲載されているアプリケーションを起動したりした際などです。

> [!NOTE]
> `start_url` はブラウザーへのヒントです。ブラウザーには、 `start_url` を処理する方法に[自由度が認められており](#解説)、常に指定した値が使用されるとは限りません。

## 構文

```json-nolint
/* 絶対 URL */
"start_url": "https://example.com/myapp"
"start_url": "https://myapp.com/home"

/* 相対 URL */
"start_url": "/"
"start_url": "../index.html"
```

### 値

- `start_url`
  - : ウェブアプリの開始 URL を表す文字列です。
    URL は絶対または相対のどちらかです。
    値が相対の場合は、マニフェストファイルの URL に対して解決されます。

    `start_url` が指定されていない場合、または値が不正な場合（文字列でない、無効なURLである、マニフェストにリンクしているページと{{glossary("Origin", "同一オリジン")}}でないなど）、マニフェストにリンクしているページの URL が使用されます。

    > [!NOTE]
    > 一部のブラウザーでは、 [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#インストール可能性)ために、`start_url` を指定する必要があります（下記の互換性の節を参照してください）。
    > すべてのブラウザーで既定の動作を使用するには、 `"start_url": "./"` に設定します。

    > [!NOTE]
    > マニフェストで [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) を指定しなかった場合、 `start_url` （値が undefined または不正な場合は効果的な `start_url`）から推測されます。

## 解説

`start_url` を使用すると、すべてのユーザーに適切な共通エントリーポイントを推奨することができます。

ユーザーがウェブアプリをインストールすると、現在表示中のページからインストール画面が現れます。
インストール中、ブラウザーは、このページからリンクされたマニフェストファイルを取得します。
マニフェストファイルはどの元からでも提供することができますが、インストールプロセスは開始したページに紐付けられます。
次のようなシナリオを考えてみましょう。

- インストールページは `https://myapp.example.com/index.html` です。
- マニフェストファイルは `https://assets.cdn.com/manifest.json` にホスティングされています。
- `start_url` は `https://myapp.example.com/home` です。

この例では、指定した `start_url` が使用されます。これは、アプリがインストールされるページと同じオリジンであるためです。
指定した `start_url` が異なるオリジン（例えば、`https://differentapp.example.com/home`）にある場合、ブラウザーはインストールページの URL を起点として使用します。
これによって、ウェブアプリは自分自身のオリジン内のページでしか始めることができないことが確実になります。

ただし、ブラウザーが指定された URL を使用するとは限らないことに注意してください。
ブラウザーは指定された値を無視したり、ユーザーに指定された URLを 使用するかどうかを尋ねたりすることがあります。
また、ウェブアプリのブックマークを作成する時点、またはそれ以降の時点で、ユーザーが URL を変更できるようにしている場合もあります。
`start_url` のバリエーションを許可するようにアプリを設計する際には、これに留意してください。

### ベストプラクティス

この URL は、ダッシュボードなど、アプリの重要なページにユーザーを移動させるべきです。
アプリを起動した直後にユーザーがアクセスしたいと思うような機能を考えてみましょう。
アプリのメインページがサイトのルートにある場合は、 `start_url` を `/` に設定します。
また、深いリンク（例：`https://myapp.com/product/whatsnew`）を指定して、アプリ内の特定のコンテンツにユーザーを誘導することもできます。
一般的な開始ページを指定することは避けてください。

セキュリティ上の理由により、`start_url` はマニフェスト URL と同じオリジンでなければなりません。
同じオリジンでない `start_url` を指定すると、ブラウザーは既定でマニフェストにリンクしているページを使用するようになります。

## プライバシーの考慮事項

- **フィンガープリンティング**:

  ユーザーを一意に識別するためのエンコードされた文字列（例：サーバーが割り当てる識別子、例えば `?user=123`、`/user/123/`、`https://user123.foo.bar` など）を `start_url` に含めることで、永続的なフィンガープリントが作成されます。
  ユーザーは、サイトデータを消去した後でも、プライバシーに関わる情報が維持される可能性があることを認識していないかもしれません。
  `start_url` にユーザーを一意に識別できる情報を記載することは、好ましくありません。

  ブラウザーは、この種のフィンガープリンティングに対する保護機能を提供することがあります。
  例えば、ユーザーがオリジンからデータをクリアすると、ブラウザーはそのオリジンが対象とする範囲内のアプリをアンインストールするよう促すことがあります。
  これにより、アプリの `start_url` から潜在的なフィンガープリントが除去されます。

- **立ち上げ追跡**:

  ブラウザー外からアプリが起動されたことを示す引数を `start_url` に追加する（例: `"start_url": "index.html?launcher=homescreen"`）ことは、分析やカスタマイズに役立つことがあります。
  しかし、この情報はユーザーのデジタル指紋の一部として使用できる可能性があります。
  このようなトラッキングを実装する際には、プライバシーへの影響を考慮する必要があります。

## 例

### 開始絶対 URL を指定

例えば、ハイキング用ウェブアプリのマニフェストファイルが `https://hiking-pro.com/resources/manifest.json` にあり、`https://hiking-pro.com/index.html` がそのマニフェストファイルにリンクしているとします。
ユーザーがアプリを起動したときに `trail-hub.html` ページに移動するようにしたいとします。
マニフェストファイルでこれを指定するには、次のようにします。

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

この `start_url` の値は、マニフェスト URL (`https://hiking-pro.com/resources/manifest.json`) と同じオリジンであるため有効です。

次の `start_url` は、マニフェスト URL と同じオリジンではないため、無効な URL です。

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

上記の場合、ユーザーがアプリを起動した際には、既定では `https://hiking-pro.com/index.html` が開始ページとして使用されます。

### 開始相対 URL を指定

以前ご紹介したハイキングアプリの場合、下記に示すように、相対 URL を使用して同じ出発地点を指定することができます。
この相対 URL は、マニフェストファイルの URL（`https://hiking-pro.com/resources/manifest.json`）をベースとして使用し、`https://hiking-pro.com/trail-hub.html` に解決されます。

```json
"start_url": "../trail-hub.html"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Glossary("Application_context", "アプリケーションコンテキスト")}}
- {{Glossary("Same-origin_policy", "同一オリジンポリシー")}}
- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest)で、ウェブアプリをインストール可能にする
- [ウェブのセキュリティ](/ja/docs/Web/Security)
