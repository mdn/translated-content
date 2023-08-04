---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`script-src-elem`** ディレクティブは、 JavaScript の {{HTMLElement("script")}} 要素の有効なソースを指定します。

このディレクティブは `<script>` 要素（スクリプトリクエストとブロックの両方）の中で有効なソースのみを指定します。
インラインスクリプトイベントハンドラー (`onclick`) や ["unsafe-eval" チェックでゲートされた](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#安全ではない_eval_式)スクリプト実行メソッド、[XSLT スタイルシート](/ja/docs/Web/XSLT)など、スクリプトの実行のきっかけとなるような他の JavaScript ソースには適用されません。
（有効なソースは、script-src を使用してすべての JavaScript スクリプトソースに指定することも、script-src-attr を使用してインラインスクリプトハンドラーにのみ指定することも可能です。）

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

`script-src-elem` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
Content-Security-Policy: script-src-elem <source>;
Content-Security-Policy: script-src-elem <source> <source>;
```

`script-src-elem` は {{CSP("script-src")}} との組み合わせで使用することができます。

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

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
