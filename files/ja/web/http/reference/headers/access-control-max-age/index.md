---
title: Access-Control-Max-Age ヘッダー
short-title: Access-Control-Max-Age
slug: Web/HTTP/Reference/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Access-Control-Max-Age`** {{Glossary("response header", "レスポンスヘッダー")}}は、{{glossary("preflight request", "プリフライトリクエスト")}}の結果（つまり {{HTTPHeader("Access-Control-Allow-Methods")}} および {{HTTPHeader("Access-Control-Allow-Headers")}} ヘッダーに含まれる情報）をキャッシュすることができる時間の長さを示します。

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
Access-Control-Max-Age: <delta-seconds>
```

## ディレクティブ

- `<delta-seconds>`
  - : 結果をキャッシュできる最大秒数を、符号なしの非負の整数で指定します。
    Firefox は [24 時間](https://searchfox.org/firefox-main/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1393)（86400 秒）キャッシュすることができます。
    Chromium (v76 以前) は [10 分](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36)（600 秒）です。
    Chromium (v76 以降) は [2 時間](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31)（7200 秒）です。
    デフォルト値は 5 秒です。

## 例

プリフライトリクエストの結果は 10 分間キャッシュされます。

```http
Access-Control-Max-Age: 600
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
