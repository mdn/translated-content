---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
---

{{HTTPSidebar}}

**`Access-Control-Max-Age`** レスポンスヘッダーは、{{glossary("preflight request", "プリフライトリクエスト")}}の結果 (つまり {{HTTPHeader("Access-Control-Allow-Methods")}} および {{HTTPHeader("Access-Control-Allow-Headers")}} ヘッダーに含まれる情報) をキャッシュすることができる時間の長さを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
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

```
Access-Control-Max-Age: <delta-seconds>
```

## ディレクティブ

- \<delta-seconds>
  - : 結果をキャッシュすることができる最長の秒数です。
    Firefox は[24 時間](https://dxr.mozilla.org/mozilla-central/rev/7ae377917236b7e6111146aa9fb4c073c0efc7f4/netwerk/protocol/http/nsCORSListenerProxy.cpp#1131) (86400 秒) キャッシュすることができます。
    Chromium (v76 以前) は[10 分](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=36&rcl=52002151773d8cd9ffc5f557cd7cc880fddcae3e) (600 秒) です。
    Chromium (v76 以降) は[2 時間](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=31&rcl=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa) (7200 秒) です。
    Chromium は既定値を 5 分に設定することもできます。
    **-1**の値はキャッシュを無効にし、すべての呼び出しをチェックするためにプリフライトの OPTIONS が必要になります。

## 例

プリフライト要求の結果は 10 分間キャッシュされます。

```
Access-Control-Max-Age: 600
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
