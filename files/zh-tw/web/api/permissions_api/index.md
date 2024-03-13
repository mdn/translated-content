---
title: 權限 (Permissions)
slug: Web/API/Permissions_API
---

{{DefaultAPISidebar("Permissions API")}}

## 摘要

Permissions API 可顯示 Apps 所要求的所有權限，以利使用者管理。Apps 可透過此 API 而讀取其他 Apps 的權限並進一步變更。

透過 [`PermissionSettings`](/zh-TW/docs/DOM/PermissionSettings) 介面的 [`navigator.mozPermissionSettings`](/zh-TW/docs/DOM/window.navigator.mozPermissionSettings) 屬性，即可存取 Permission Manager。

## 已安裝 Apps 的權限

所有 Apps 均需透過自己的 manifest 檔案而要求權限。Apps 每次所使用的 API，均以「請求顯性權限 (Explicit Permission)」的 API 為主，並提示使用者是否通過權限。如果使用者選擇「不要再提示」，大概也就不太可能改變決定了。API 則能提供介面，以利使用者管理已發出的權限。

透過 [`PermissionSettings.get()`](/zh-TW/docs/DOM/PermissionSettings.get)、[`set()`](/zh-TW/docs/DOM/PermissionSettings.set)、[`isExplicit()`](/zh-TW/docs/DOM/PermissionSettings.isExplicit) 函式即可達到上述作業。

### 讀取權限

若要知道已發出權限的目前狀態，可使用 [`PermissionSettings.get()`](/zh-TW/docs/DOM/PermissionSettings.get) 函式。此函式可回傳字串，以顯示特定 Apps 權限的目前狀態。可能的數值有：

- `allow`
  - : 已通過該權限，且不需使用者的進一步互動。
- `denied`
  - : 已否決該權限；可能是系統或使用者所否決。
- `prompt`
  - : 代表該權限將以明顯的提示方法，詢問使用者是否給予權限。
- `unknown`
  - : 代表該 Apps 並未詢問此權限，也不會提示使用者是否給予權限。

```js
// Let's check all installed apps
var apps = navigator.mozApps.mgmt.getAll();

apps.onsuccess = function () {
  var permission = navigator.mozPermissionSettings;

  // Let's check the permission of each app
  apps.result.forEach(function (app) {
    var request,
      appName = app.manifest.name;

    for (request in app.manifest.permission) {
      // Let's get the current permission for each permission request by the application
      var p = permission.get(request, app.manifestUrl, app.origine, false);

      console.log(
        appName +
          ' asked for "' +
          request +
          '" permission, which is "' +
          p +
          '"',
      );
    }
  });
};
```

### 設定權限

只要使用 [`PermissionSettings.set()`](/zh-TW/docs/DOM/PermissionSettings.set) 函式即可設定權限。可能的數值均與 [`get`](/zh-TW/docs/DOM/PermissionSettings.get) 函式所存取的相同。

> **備註：** 根據 Apps 權限的不同，某些可能為隱性 (Implicit) 權限。若因為某種理由，Apps 嘗試將權限變更為隱性權限，就會產生錯誤。為了避免這種錯誤，可透過 [`PermissionSettings.isExplicit()`](/zh-TW/docs/DOM/PermissionSettings.isExplicit) 函式而檢查是否為顯性權限。

```js
// Let's check all installed apps
var apps = navigator.mozApps.mgmt.getAll();

apps.onsuccess = function () {
  var permission = navigator.mozPermissionSettings;

  // Let's grant the permission of each app
  apps.result.forEach(function (app) {
    var request, appName = app.manifest.name;

    for (request in app.manifest.permission) {
      // If the permission is not explicit
      if (!permission.isExplicit(request, app.manifestUrl, app.origine, false) {
        // Let's ask the user for all permissions requested by the application
        permission.set(request, app.manifestUrl, app.origine, false);
      }
    }
  });
}
```

## 規格

不屬於任何規格。

## 另可參閱

- {{domxref("window.navigator.mozPermissionSettings","navigator.mozPermissionSettings")}}
- {{domxref("PermissionSettings")}}
