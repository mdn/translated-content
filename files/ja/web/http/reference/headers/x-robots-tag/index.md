---
title: X-Robots-Tag ヘッダー
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

**`X-Robots-Tag`** {{Glossary("response header", "レスポンスヘッダー")}} は、{{glossary("Crawler", "クローラー")}}が URL をどのようにインデックス化すべきかを定義します。
どの仕様の一部でもありませんが、検索ボット、ウェブクローラー、類似のユーザーエージェントと通信するための事実上の標準的な手法となっています。
検索関連のクローラーは、`X-Robots-Tag`ヘッダーのルールに基づいて、検索結果におけるウェブページやその他のリソースの表示方法を調整します。

インデックス登録のルールは、`X-Robots-Tag` ヘッダーまたは [`<meta name="robots">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/robots) という HTML 要素（一般に「ロボットタグ」と呼ばれる）で定義され、URL がクロールされた際に検出されます。
HTTP ヘッダーでインデックス作成ルールを指定することは、画像や PDF、その他のメディアなど、HTML 以外の文書において有用です。

> [!NOTE]
> これらのルールに従うのは協調型ロボットのみであり、クローラーはヘッダーやメタ要素を読み取るために、まずリソースにアクセスする必要があります（[robots.txt との相互作用](#robots.txt_との相互作用)を参照）。
> クローラーによる帯域幅の消費を防ぎたい場合、リソースのクロールをブロックする制限的な {{Glossary("robots.txt")}} ファイルの方が、インデックス作成ルールよりも効果的です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

オプションの `<bot-name>:` を指定すると、その後に続くルールが適用されるユーザーエージェントを指定できます。

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

例については、[ユーザーエージェントの指定](#ユーザーエージェントの指定)を参照してください。

## ディレクティブ

以下のインデックス作成ルールのいずれかを使用できます。

- `all`
  - : インデックス登録や検索結果への表示に関する制限はありません。
    このルールはデフォルト値であり、明示的に指定された場合は効果がありません。
- `noindex`
  - : このページ、メディア、リソースを検索結果に表示しません。
    指定しない場合、そのページ、メディア、またはリソースはインデックスに登録され、検索結果に表示される可能性があります。
- `nofollow`
  - : このページにあるリンクを追跡しません。
    これを省略すると、検索エンジンがページ上のリンクを利用して、リンク先のページを発見する可能性があります。
- `none`
  - : `noindex, nofollow` と同等です。
- `nosnippet`
  - : このページの検索結果には、テキストの抜粋や動画のプレビューを表示しません。
    静的な画像のサムネイルは（ある場合）、引き続き表示されることがあります。
    省略した場合、検索エンジンはページ上の情報に基づいてテキストの抜粋や動画のプレビューを生成することがあります。
    コンテンツの特定のセクションを検索結果の抜粋に表示させないようにするには、[`data-nosnippet` HTML 属性](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr)を使用してください。
- `indexifembedded`
  - : ページの内容が、iframe や同様の HTML 要素を通じて別のページに埋め込まれている場合、検索エンジンは `noindex` ルールが設定されていても、そのページの内容をインデックスに登録することができます。
    `indexifembedded` は、`noindex` と併せて指定された場合にのみ効果を発揮します。
- `max-snippet: <number>`
  - : この検索結果のテキストスニペットには、最大 `<number>` 文字を使用します。
    有効な `<number>` が指定されていない場合は無視されます。
- `max-image-preview: <setting>`
  - : 検索結果におけるこのページの画像プレビューの最大サイズです。
    省略した場合、検索エンジンはデフォルトサイズの画像プレビューを表示することがあります。
    検索エンジンに大きなサムネイル画像を使用させたくない場合は、`max-image-preview` の値を `standard` または `none` に指定してください。指定可能な値は以下の通りです。
    - `none`
      - : 画像のプレビューは表示されません。
    - `standard`
      - : デフォルトの画像プレビューが表示される場合があります。
    - `large`
      - : ビューポートの幅まで拡大された画像のプレビューが表示される場合があります。
- `max-video-preview: <number>`
  - : 検索結果に表示されるこのページの動画の動画スニペットには、最大 `<number>` 秒を使用します。
    これを省略した場合、検索エンジンは検索結果に動画のスニペットを表示することがあり、プレビューの長さは検索エンジンが決定します。
    有効な `<number>` が指定されていない場合は無視されます。
    特別な値は以下の通りです。
    - `0`
      - : `max-image-preview` の設定に従い、静止画像は最大で 1 枚まで使用できます。
    - `-1`
      - : 動画の長さに制限はありません。
- `notranslate`
  - : 検索結果にこのページの翻訳を表示しません。
    これを省略した場合、検索エンジンは検索結果のタイトルやスニペットを、検索クエリーの言語に翻訳することがあります。
- `noimageindex`
  - : このページの画像はインデックスに登録しません。
    これを省略した場合、ページ上の画像がインデックスに登録され、検索結果に表示される可能性があります。
- `unavailable_after: <date/time>`
  - : 指定された `<date/time>` 以降、検索結果にこのページを表示しないよう要求します。
    有効な `<date/time>` が指定されていない場合は無視されます。
    日付は、{{RFC("822")}}、{{RFC("850")}}、ISO 8601 などの形式で指定する必要があります。

    デフォルトでは、コンテンツに有効期限は設定されていません。
    この設定を省略した場合、このページは検索結果に無期限に表示される可能性があります。
    指定された日時以降、クローラーはその URL のクロール頻度を大幅に低下させることが想定されています。

## 解説

`<meta name="robots">` および `X-Robots-Tag` によるインデックス登録ルールは、URL がクロールされた際に検出されます。
ほとんどのクローラーは、`<meta name="robots">` 要素で使用できる `X-Robots-Tag` HTTP ヘッダーのルールをサポートしています。

`X-Robots-Tag` 内のロボットルール同士、あるいは HTTP の `X-Robots-Tag` ヘッダーと `<meta name="robots">` 要素の間でルールが矛盾する場合、より制限の厳しいルールが適用されます。
たとえば、あるページに `max-snippet:50` と `nosnippet` の両方のルールが設定されている場合、`nosnippet` ルールが適用されます。
`robots.txt` ファイルによってパスのクロールがブロックされている場合、インデックス登録に関するルールは検出も適用もされません。

`index` と `noindex`、あるいは `follow` と `nofollow` のように、互いに排他的な値もあります。
このような場合、クローラーの挙動は未定義であり、状況によって異なる可能性があります。

### robots.txt との相互作用

`robots.txt` ファイルによってリソースのクロールがブロックされている場合、`<meta name="robots">` や HTTP の `X-Robots-Tag` ヘッダーを使用して指定されたインデックス登録や配信に関するルールは検出されないため、無視されます。

クロールがブロックされているページであっても、別の文書から参照されている場合は、インデックスに登録される可能性があります（[`nofollow`](#nofollow) ディレクティブを参照）。
検索インデックスからページを削除したい場合、通常は `X-Robots-Tag: noindex` が有効ですが、ロボットが `X-Robots-Tag` のルールを検出するには、まずそのページを再訪問する必要があります。

## 例

### X-Robots-Tag の使用

以下の `X-Robots-Tag` ヘッダーには `noindex` が指定されており、クローラーに対して、このページ、メディア、またはリソースを検索結果に表示しないよう指示しています。

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### 複数のヘッダー

以下のレスポンスには、それぞれインデックス作成ルールが指定された 2 つの `X-Robots-Tag` ヘッダーが含まれています。

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### ユーザーエージェントの指定

どのユーザーエージェントにルールを適用するかを指定することができます。
次の例には、2 つの `X-Robots-Tag` ヘッダーが含まれており、`googlebot` に対してこのページ上のリンクを辿らないよう、また架空のクローラー `BadBot` に対してこのページをインデックスに登録したり、ページ上のリンクを辿ったりしないよう要求しています。

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

次のレスポンスでは、同じインデックス作成ルールが定義されていますが、1 つのヘッダー内にまとめられています。
各インデックス作成ルールは、その後に指定されたユーザーエージェントに適用されます。

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

複数のクローラーが、それぞれ異なるルールとともに指定されている場合、検索エンジンは否定ルールを合わせたものを適用します。
例を示します。

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

これらのヘッダーを含むページは、`googlebot` によってクロールされた際、`noindex, nofollow` のルールが適用されているものとみなされます。

## 仕様書

現行の仕様には含まれていません。

## 関連情報

- {{Glossary("robots.txt")}}
- {{Glossary("Search engine", "検索エンジン")}}
- [`<meta name="robots">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML 要素（「ロボットタグ」）
- [robots.txt の構成](/ja/docs/Web/Security/Practical_implementation_guides/Robots_txt)セキュリティガイド
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Using the X-Robots-Tag HTTP header](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) - developers.google.com
