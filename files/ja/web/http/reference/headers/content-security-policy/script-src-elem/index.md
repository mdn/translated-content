---
title: "CSP: script-src-elem"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`script-src-elem`** ディレクティブは、 JavaScript の {{HTMLElement("script")}} 要素の有効なソースを指定します。

このディレクティブは `<script>` 要素（スクリプトリクエストとブロックの両方）の中で有効なソースのみを指定します。
インラインスクリプトイベントハンドラー (`onclick`) や ["unsafe-eval" チェックでゲートされた](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#安全ではない_eval_式)スクリプト実行メソッド、[XSLT スタイルシート](/ja/docs/Web/XML/XSLT)など、スクリプトの実行のきっかけとなるような他の JavaScript ソースには適用されません。
（有効なソースは、 {{CSP("script-src")}} を使用してすべての JavaScript スクリプトソースに指定することも、 {{CSP("script-src-attr")}} を使用してインラインスクリプトハンドラーにのみ指定することも可能です。）

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>
        あり。
        このディレクティブがない場合、ユーザーエージェントは {{CSP("script-src")}} ディレクティブを探し、両方ともない場合は、 <code>default-src</code> ディレクティブで代替します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: script-src-elem 'none';
Content-Security-Policy: script-src-elem <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、[フェッチディレクティブの構文](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#フェッチディレクティブの構文)に掲載されているソース表現のうち、 [`'unsafe-hashes'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) 以外のいずれかが適用できます。

`script-src-elem` は {{CSP("script-src")}} との組み合わせで使用することができます。

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## 例

### 違反の場合

この CSP ヘッダーがあったとします。

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…以下のスクリプトがブロックされ、読み込まれず、実行されません。

```html
<script src="https://not-example.com/js/library.js"></script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-attr")}}
