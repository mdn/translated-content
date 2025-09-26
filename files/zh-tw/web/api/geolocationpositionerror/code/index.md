---
title: GeolocationPositionError：code 屬性
slug: Web/API/GeolocationPositionError/code
l10n:
  sourceCommit: 066d55a090927fa19ba19c2a4b2417470e1a979f
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("GeolocationPositionError")}} 介面的 **`code`** 唯讀屬性是一個表示錯誤碼的 `unsigned short`。

可能的值如下：

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">值</th>
      <th scope="col">相關常數</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1</code></td>
      <td><code>PERMISSION_DENIED</code></td>
      <td>
        取得地理位置訊息失敗，因為頁面沒有權限執行此操作。
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>POSITION_UNAVAILABLE</code></td>
      <td>
        取得地理位置失敗，因為一個或多個內部位置來源回傳了內部錯誤。
      </td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>TIMEOUT</code></td>
      <td>未能在允許的時間內取得地理位置訊息。</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用地理位置](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationPositionError")}}
