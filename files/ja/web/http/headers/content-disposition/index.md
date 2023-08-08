---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
---

{{HTTPSidebar}}

通常の HTTP レスポンスにおける **`Content-Disposition`** レスポンスヘッダーは、コンテンツがブラウザーで*インライン*で表示されることを求められているか、つまり、ウェブページとして表示するか、ウェブページの一部として表示するか、ダウンロードしてローカルに保存する*添付ファイル*とするかを示します。

本文が `multipart/form-data` である場合、 **`Content-Disposition`** ヘッダーは、マルチパートを構成する各サブパートに付与され、そのフィールドに関する情報を示します。サブパートは{{HTTPHeader("Content-Type")}} ヘッダーで定義された _boundary_ によって区切られます。マルチパートの本文自体に付与した場合、 `Content-Disposition` は何の意味も持ちません。

`Content-Disposition` ヘッダーはメールにおける MIME メッセージのより広い用途で定義されたものですが、 HTTP のフォームと {{HTTPMethod("POST")}} リクエストに利用可能な引数は一部だけです。ヘッダーの値である `form-data` と、省略可能なディレクティブ `name` と `filename` のみが HTTP の用途で使用することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
        (本文の場合)<br />{{Glossary("General header", "一般ヘッダー")}}
        (マルチパート本文の一部の場合)
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

### 本文に適用するレスポンスヘッダーとして

この用法では、`inline` (既定値。ウェブページの一部として、またはウェブページとして表示可能であることを示します)、もしくは `attachment` (ダウンロードすべきであることを示します。多くのブラウザーは `filename` 引数の値を使い、「名前を付けて保存」ダイアログを表示します) を最初の引数して指定します。

```
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

### マルチパート本文で使うヘッダーとして

この用法では最初の引数は常に `form-data` です。追加のパラメーターは大文字小文字を区別せず、 `'='` 記号に続けてクォートされた文字列で引数を指定します。複数の引数はセミコロン (`';'`) で区切ります。

```
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### ディレクティブ

- `name`
  - : このサブパートの内容が参照するフォームの HTML フィールドの名前を含む文字列が続きます。同じフィールド内の複数のファイルを扱う場合 (例えば、 `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` 要素の [`multiple`](/ja/docs/Web/HTML/Element/input#multiple) 属性)、同じ名前を持つ複数のサブパートが存在することがあります。
    `name` の値が `'_charset_'` という値である場合は、その部分が HTML フィールドではなく、明示的な文字セット情報のない部分に使用される既定の文字セットであることを示します。
- `filename`
  - : 送信された元のファイル名を含む文字列を指定します。このファイル名は常に任意であり、アプリケーションで使用する際は注意が必要です。例えばパス情報を取り除いたり、サーバーのファイルシステムに合わせてファイル名の変換を行ったりすべきです。この引数は、ほとんどの情報を提供します。 `Content-Disposition: attachment` と組み合わせて使用すると、ユーザーに表示される「名前を付けて保存」ダイアログの既定のファイル名として使用されます。
- `filename*`
  - : 引数の `filename` と `filename*` の違いは、 `filename*` が [RFC 5987](https://tools.ietf.org/html/rfc5987) で定義されているエンコーディングを使用するという点のみです。単一のヘッダーフィールドの値に `filename` と `filename*` の両方が存在する場合は、両方が解釈できる場合、 `filename*` が `filename` よりも優先されます。

## 例

「ファイル名を付けて保存」ダイアログを起動するレスポンスです。

```
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

このサンプル HTML ファイルは、ブラウザーに表示されるのではなく、通常のダウンロードとして保存されます。ほとんどのブラウザーは、 (既定で) `cool.html` というファイル名で保存することを提案します。

`multipart/form-data` 形式を使用して送信された HTML フォームの例で、 `Content-Disposition` ヘッダーを使用したものです。

```
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## 仕様書

| 仕様書          | 題名                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------- |
| {{RFC("7578")}} | Returning Values from Forms: multipart/form-data                                                  |
| {{RFC("6266")}} | Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)             |
| {{RFC("2183")}} | Communicating Presentation Information in Internet Messages: The Content-Disposition Header Field |

## ブラウザーの互換性

{{Compat("http.headers.Content-Disposition")}}

## 互換性の注意

- Firefox 5 は、 `Content-Disposition` レスポンスヘッダーで `filename` と `filename*` の両引数が提供されている場合、より効果的に処理します。 `filename` 引数が先にあった場合でも、提供されたすべての名前を調べ、利用可能な場合は `filename*` 引数を使用します。以前は、先に一致した引数がより適切な名前が使われていませんでした。 [Firefox バグ 588781](https://bugzil.la/588781) を参照してください。

## 関連情報

- [HTML Forms](/ja/docs/Web/Guide/HTML/Forms)
- {{HTTPHeader("Content-Type")}}: マルチパート本文の境界を定義
- {{domxref("FormData")}} インターフェイス: {{domxref("XMLHttpRequest")}} API でフォームデータを操作するために使用
