---
title: "CSP: fenced-frame-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`fenced-frame-src`** ディレクティブは、ディレクティブは、 {{HTMLElement("fencedframe")}} 要素に読み込まれた、埋め込まれた閲覧コンテキストの有効なソースを指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">代替</th>
      <td>
        このディレクティブがない場合、ユーザーエージェントは {{CSP("frame-src")}} ディレクティブを参照します（これは
        {{CSP("child-src")}} ディレクティブが代替となります）。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`fenced-frame-src` ポリシーには、 1 つ以上のソースが指定できます。

```http
Content-Security-Policy: fenced-frame-src <source>;
Content-Security-Policy: fenced-frame-src <source> <source>;
```

ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、以下のソース表現の値が適用できます。

- [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source) の値 `"https:"`
- [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source) の値 `"https:"`
- 文字列 `"*"`

## 例

### 違反の場合

以下の CSP ヘッダーを指定した場合、

```http
Content-Security-Policy: fenced-frame-src https://example.com/
```

以下のソースはフェンスフレームに読み込まれません。

- `https://not-example.com/` （ドメインが一致しない）
- `https://example.org/` （TLD が一致しない）

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェンスフレーム API](/ja/docs/Web/API/Fenced_frame_API)
- {{HTMLElement("fencedframe")}}
- {{HTTPHeader("Content-Security-Policy")}}
