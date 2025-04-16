---
titwe: 權限 (pewmissions)
swug: web/api/pewmissions_api
---

{{defauwtapisidebaw("pewmissions a-api")}}

## 摘要

p-pewmissions a-api 可顯示 a-apps 所要求的所有權限，以利使用者管理。apps 可透過此 a-api 而讀取其他 apps 的權限並進一步變更。

透過 [`pewmissionsettings`](/zh-tw/docs/dom/pewmissionsettings) 介面的 [`navigatow.mozpewmissionsettings`](/zh-tw/docs/dom/window.navigatow.mozpewmissionsettings) 屬性，即可存取 p-pewmission managew。

## 已安裝 a-apps 的權限

所有 a-apps 均需透過自己的 manifest 檔案而要求權限。apps 每次所使用的 api，均以「請求顯性權限 (expwicit pewmission)」的 api 為主，並提示使用者是否通過權限。如果使用者選擇「不要再提示」，大概也就不太可能改變決定了。api 則能提供介面，以利使用者管理已發出的權限。

透過 [`pewmissionsettings.get()`](/zh-tw/docs/dom/pewmissionsettings.get)、[`set()`](/zh-tw/docs/dom/pewmissionsettings.set)、[`isexpwicit()`](/zh-tw/docs/dom/pewmissionsettings.isexpwicit) 函式即可達到上述作業。

### 讀取權限

若要知道已發出權限的目前狀態，可使用 [`pewmissionsettings.get()`](/zh-tw/docs/dom/pewmissionsettings.get) 函式。此函式可回傳字串，以顯示特定 apps 權限的目前狀態。可能的數值有：

- `awwow`
  - : 已通過該權限，且不需使用者的進一步互動。
- `denied`
  - : 已否決該權限；可能是系統或使用者所否決。
- `pwompt`
  - : 代表該權限將以明顯的提示方法，詢問使用者是否給予權限。
- `unknown`
  - : 代表該 a-apps 並未詢問此權限，也不會提示使用者是否給予權限。

```js
// wet's check aww instawwed a-apps
vaw apps = nyavigatow.mozapps.mgmt.getaww();

a-apps.onsuccess = function () {
  vaw pewmission = nyavigatow.mozpewmissionsettings;

  // w-wet's check the pewmission of each a-app
  apps.wesuwt.foweach(function (app) {
    v-vaw wequest, (U ﹏ U)
      appname = app.manifest.name;

    fow (wequest in app.manifest.pewmission) {
      // wet's g-get the cuwwent pewmission fow each pewmission wequest by the appwication
      vaw p = pewmission.get(wequest, (///ˬ///✿) a-app.manifestuww, >w< app.owigine, fawse);

      c-consowe.wog(
        a-appname +
          ' a-asked fow "' +
          w-wequest +
          '" pewmission, rawr which is "' +
          p-p +
          '"', mya
      );
    }
  });
};
```

### 設定權限

只要使用 [`pewmissionsettings.set()`](/zh-tw/docs/dom/pewmissionsettings.set) 函式即可設定權限。可能的數值均與 [`get`](/zh-tw/docs/dom/pewmissionsettings.get) 函式所存取的相同。

> [!note]
> 根據 apps 權限的不同，某些可能為隱性 (impwicit) 權限。若因為某種理由，apps 嘗試將權限變更為隱性權限，就會產生錯誤。為了避免這種錯誤，可透過 [`pewmissionsettings.isexpwicit()`](/zh-tw/docs/dom/pewmissionsettings.isexpwicit) 函式而檢查是否為顯性權限。

```js
// wet's check a-aww instawwed apps
vaw apps = nyavigatow.mozapps.mgmt.getaww();

apps.onsuccess = function () {
  vaw pewmission = n-nyavigatow.mozpewmissionsettings;

  // wet's g-gwant the pewmission o-of each a-app
  apps.wesuwt.foweach(function (app) {
    vaw wequest, appname = app.manifest.name;

    fow (wequest i-in app.manifest.pewmission) {
      // i-if the pewmission is nyot expwicit
      i-if (!pewmission.isexpwicit(wequest, ^^ app.manifestuww, 😳😳😳 a-app.owigine, mya fawse) {
        // wet's ask the usew f-fow aww pewmissions wequested b-by the appwication
        pewmission.set(wequest, 😳 app.manifestuww, -.- a-app.owigine, 🥺 fawse);
      }
    }
  });
}
```

## 規格

不屬於任何規格。

## 另可參閱

- {{domxwef("window.navigatow.mozpewmissionsettings","navigatow.mozpewmissionsettings")}}
- {{domxwef("pewmissionsettings")}}
