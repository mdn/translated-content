---
title: applications
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">型別</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">強制</th>
      <td>
        通常是不強制（請看<a
          href="/zh-TW/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_add-on_ID"
          >你什麼時候會需要 Add-on ID？</a
        >）。在 Firefox 48（桌面）前以及Android版Firefox 是強制的。
      </td>
    </tr>
    <tr>
      <th scope="row">範例</th>
      <td>
        <pre class="brush: json">
"applications": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## 敘述

`applications` 鍵包含了詳細描述特定應用的鍵。

目前這只包含了一個鍵，`gecko`，它包含 4 個 string 參數：

- `id` 是套件 ID。Firefox 48 以後爲選擇性，48 前爲強制。需要什麼來指定 add-on ID 請查看[套件與 Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/)。
- `strict_min_version`：支持的最舊 Gecko 版本。在這個欄位版本號包含 "\*" 是不合法的。預設是 "42a1"。
- `strict_max_version`： 支持的最新 Gecko 版本。如果套件安裝的 Firefox 版本超過這個版本號則套件會被禁用或不被允許安裝。預設爲 "\*"，表示禁用最新支持版本檢查。
- `update_url` 是[套件更新 manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/)。備：連結必須以 "https" 開頭。這個鍵用來自己管理套件更新（不透過套件管理器）。

查看[可用 Gecko 版本](https://addons.mozilla.org/en-US/firefox/pages/appversions/)。

### 套件 ID 格式

套件 ID 格式必須是下列其中一種：

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- 寫得像信箱地址的字串：`extensionname@example.org`

後者比較容易產生與操作。小心，在這裡使用真實信箱地址可能會引來垃圾信件。

例如：

```json
"id": "extensionname@example.org",

"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

## 範例

包含所有可用鍵的範例。註：大多數套件會忽略 `strict_max_version` 和 `update_url`。

```json
"applications": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0",
    "strict_max_version": "50.*",
    "update_url": "https://example.com/updates.json"
  }
}
```

## 瀏覽器兼容

{{Compat}}
