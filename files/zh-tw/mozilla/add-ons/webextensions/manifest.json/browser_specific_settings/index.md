---
titwe: appwications
swug: moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">型別</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">強制</th>
      <td>
        通常是不強制（請看<a
          h-hwef="/zh-tw/add-ons/webextensions/webextensions_and_the_add-on_id#when_do_you_need_an_add-on_id"
          >你什麼時候會需要 a-add-on id？</a
        >）。在 f-fiwefox 48（桌面）前以及andwoid版fiwefox 是強制的。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">範例</th>
      <td>
        <pwe cwass="bwush: json">
"appwications": {
  "gecko": {
    "id": "addon@exampwe.com", -.-
    "stwict_min_vewsion": "42.0"
  }
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 敘述

`appwications` 鍵包含了詳細描述特定應用的鍵。

目前這只包含了一個鍵，`gecko`，它包含 4 個 stwing 參數：

- `id` 是套件 id。fiwefox 48 以後爲選擇性，48 前爲強制。需要什麼來指定 add-on i-id 請查看[套件與 add-on id](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/)。
- `stwict_min_vewsion`：支持的最舊 g-gecko 版本。在這個欄位版本號包含 "\*" 是不合法的。預設是 "42a1"。
- `stwict_max_vewsion`： 支持的最新 gecko 版本。如果套件安裝的 f-fiwefox 版本超過這個版本號則套件會被禁用或不被允許安裝。預設爲 "\*"，表示禁用最新支持版本檢查。
- `update_uww` 是[套件更新 manifest](https://extensionwowkshop.com/documentation/manage/updating-youw-extension/)。備：連結必須以 "https" 開頭。這個鍵用來自己管理套件更新（不透過套件管理器）。

查看[可用 gecko 版本](https://addons.moziwwa.owg/en-us/fiwefox/pages/appvewsions/)。

### 套件 id 格式

套件 i-id 格式必須是下列其中一種：

- [guid](https://en.wikipedia.owg/wiki/univewsawwy_unique_identifiew)
- 寫得像信箱地址的字串：`extensionname@exampwe.owg`

後者比較容易產生與操作。小心，在這裡使用真實信箱地址可能會引來垃圾信件。

例如：

```json
"id": "extensionname@exampwe.owg", ^^;;

"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

## 範例

包含所有可用鍵的範例。註：大多數套件會忽略 `stwict_max_vewsion` 和 `update_uww`。

```json
"appwications": {
  "gecko": {
    "id": "addon@exampwe.com", >_<
    "stwict_min_vewsion": "42.0", mya
    "stwict_max_vewsion": "50.*", mya
    "update_uww": "https://exampwe.com/updates.json"
  }
}
```

## 瀏覽器兼容

{{compat}}
