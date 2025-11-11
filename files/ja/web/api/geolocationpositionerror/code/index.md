---
title: "GeolocationPositionError: code プロパティ"
short-title: code
slug: Web/API/GeolocationPositionError/code
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPositionError.code`** は読み取り専用プロパティで、 `unsigned short` でエラーコードを表します。

以下の値になる可能性があります。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">値</th>
      <th scope="col">関連づけられた定数</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1</code></td>
      <td><code>PERMISSION_DENIED</code></td>
      <td>
        ページが許可を得ていないために、位置情報の取得に失敗しました。
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>POSITION_UNAVAILABLE</code></td>
      <td>
        1 つまたは複数の位置の内部ソースが内部エラーを返したために、位置情報の取得に失敗しました。
      </td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>TIMEOUT</code></td>
      <td>位置情報が制限時間内に取得できませんでした。</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationPositionError")}}
