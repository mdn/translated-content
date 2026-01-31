---
title: Content-Disposition ヘッダー
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

HTTP の **`Content-Disposition`** ヘッダーは、コンテンツがウェブページとしてブラウザー内にインラインで表示されることを求められているか、ウェブページの一部であるのか、ダウンロードしてローカルに保存する「添付ファイル」とするかを示します。

マルチパートの本体では、それぞれのサブパートに対応するフィールド情報を提供するために、このヘッダーを使用する必要があります。サブパートは、{{HTTPHeader("Content-Type")}} ヘッダーで定義された境界によって区切られます。本文自体に付与した場合、 `Content-Disposition` は何の意味も持ちません。

`Content-Disposition` ヘッダーはメールにおける MIME メッセージのより広い用途で定義されたものですが、 HTTP のフォームと {{HTTPMethod("POST")}} リクエストに利用可能な引数は一部だけです。ヘッダーの値である `form-data` と、省略可能なディレクティブ `name` と `filename` のみが HTTP の用途で使用することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}（本文の場合）、<br />{{Glossary("Request header", "リクエストヘッダー")}}（マルチパート本文の一部の場合）
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

### 本文に適用するレスポンスヘッダーとして

この用法では、`inline` (既定値。ウェブページの一部として、またはウェブページとして表示可能であることを示します)、もしくは `attachment` (ダウンロードすべきであることを示します。多くのブラウザーは `filename` 引数の値を使い、「名前を付けて保存」ダイアログを表示します) を最初の引数して指定します。

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

ファイル名の引用符は省略可能ですが、ファイル名にスペースなどの特殊文字を使用する場合は必要となります。

引数 `filename` と `filename*` の違いは、`filename*` が {{rfc("5987", "", "3.2")}} で定義されたエンコーディングを使用する点のみです。
単一のヘッダーフィールド値に `filename` と `filename*` の両方が存在する場合、両方が理解される場合は `filename*` が `filename` より推奨されます。最大限の互換性を確保するため、両方を記載することが推奨されます。また、非 ASCII 文字を ASCII 相当文字に置換することで（例えば `é` を `e` に変換）、`filename*` を `filename` に変換できます。
`filename` 内のパーセントエスケープシーケンスは、ブラウザー間で処理が統一されていないため、避けるべきでしょう。（Firefox と Chrome はデコードしますが、Safari はデコードしません。）

ブラウザーは、ファイルシステムの要件に適合させるために変換を適用する場合があります。例えば、パス区切り文字（`/` および `\`）をアンダースコア (`_`) に変換するなどです。

> [!NOTE]
> Chrome および Firefox 82 以降では、HTML [`<a>` 要素](/ja/docs/Web/HTML/Reference/Elements/a) の `download` 属性が、`Content-Disposition: inline` 引数よりも優先されます（[同一オリジン URL](/ja/docs/Web/Security/Defenses/Same-origin_policy) の場合）。それ以前のバージョンの Firefox では、ヘッダーを優先し、コンテンツをインラインで表示させていました。

### マルチパート本文で使うヘッダーとして

`multipart/form-data` 形式の本文では、フォームのそれぞれのサブパート（例えば、それぞれのフォームフィールドおよびフィールドデータの一部であるファイル）に関する情報を提供するために、`Content-Disposition` ヘッダーが必要になります。
最初のディレクティブは常に `form-data` であり、ヘッダーには関連するフィールドを識別するための `name` 引数も含める必要があります。追加のディレクティブは大文字と小文字を区別しません。
引数（`=` 記号の後）の値は、トークンまたは引用符で囲まれた文字列のどちらかです。
引用符で囲まれた文字列が推奨されており、多くのサーバー実装では値を引用符で囲むことが要求されます。
これは、`Content-Disposition` のような MIME タイプヘッダーではトークンが US-ASCII でなければならないためであり、US-ASCII ではファイル名やその他の値で一般的な一部の文字を利用することができないからです。
複数の引数はセミコロン (`;`) で区切ります。

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### ディレクティブ

- `name`
  - : このサブパートの内容が参照するフォームの HTML フィールドの名前を含む文字列が続きます。同じフィールド内の複数のファイルを扱う場合 (例えば、 `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` 要素の [`multiple`](/ja/docs/Web/HTML/Reference/Elements/input#multiple) 属性)、同じ名前を持つ複数のサブパートが存在することがあります。

    `name` の値が `'_charset_'` という値である場合は、その部分が HTML フィールドではなく、明示的な文字セット情報のない部分に使用される既定の文字セットであることを示します。

- `filename`
  - : 送信されたファイルの元の名前を含む文字列が続きます。この引数は主に補助的な情報を指定します。[RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) の提案が適用されます。
    - 可能な限り ASCII 文字を使用すること（クライアントがパーセントエンコードしても構わないが、サーバー実装がデコードできることが条件）。
    - パス情報は、例えば `/` を `_` に置き換えるなどして、すべて削除する必要があります。
    - ディスクへの書き込み時には、既存のファイルを上書きすべきではありません。
    - セキュリティ上の問題を引き起こす可能性のある特別なファイルを作成することは避けてください。例えば、コマンド検索パス上にファイルを作成することなどです。
    - 制限文字や長さの制限、その他のファイルシステムの要件を満たします。

リクエストヘッダーに `filename*` 引数がない場合、RFC 5987 エンコーディングを許容しないことに注意してください。

## 例

### リソースのためのダウンロードプロンプトを起動

「ファイル名を付けて保存」ダイアログを起動するレスポンスです。

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

このサンプル HTML ファイルは、ブラウザーに表示されずにダウンロードされます。
ほとんどのブラウザーは、デフォルトで `cool.html` というファイル名（`filename` ディレクティブで指定された通り）で保存することを提案します。

### multipart/form-data コンテンツタイプで送信する HTML

`multipart/form-data` 形式を使用して送信された HTML フォームの例で、 `Content-Disposition` ヘッダーを使用したものです。
実際には、境界値 `delimiter123` は `----8721656041911415653955004498` のようにブラウザーによって生成された文字列です。

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="delimiter123"

--delimiter123
Content-Disposition: form-data; name="field1"

value1
--delimiter123
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--delimiter123--
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
- {{HTTPHeader("Content-Type")}}: マルチパート本文の境界を定義
- {{domxref("FormData")}} インターフェイス: {{domxref("Window/fetch", "fetch()")}} または {{domxref("XMLHttpRequest")}} API でフォームデータを操作するために使用
