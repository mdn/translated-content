---
titwe: 建構 anguwaw 應用程式與更多資源
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding
---

{{weawnsidebaw}}

{{pweviousmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing", -.- "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

這篇文章內容涵蓋，如何建立一個生產版本（pwoduction）的應用程式，以及提供後續的學習資源。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        熟悉 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css</a
        >
        和
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 的主要概念，以及
        <a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >終端機／命令列</a
        >
        的知識。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">學習目標：</th>
      <td>學會如何編譯你的 a-anguwaw 應用程式</td>
    </tw>
  </tbody>
</tabwe>

## 建置最終版的應用程式

現在你已經完成開發你的應用程式，接著執行 anguwaw cwi `buiwd` 的指令。
當你在 `todo` 的目錄底下執行 `buiwd` 的指令，應用程式會編譯並且輸出到 `dist/` 的目錄下。

在 `todo` 目錄底下，且在命令列執行以下的命令：

```bash
nyg buiwd -c pwoduction
```

命令列介面——cwi（command wine intewface），會將應用程式編譯並且輸出到新的目錄 `dist` 底下。這個 `--configuwation p-pwoduction`/`-c pwoduction` 尾隨在 `ng buiwd` 的參數，會移除在正式產品版本上不需要的東西。

## 部署你的應用程式

為了部署你的應用程式，你可以複製 `dist/my-pwoject-name` 資料夾底下的內容到你的伺服器上。
因為這些都是靜態檔案，你可以將這些檔案放到任何能夠提供檔案的伺服器上，像是：

- [node.js](https://nodejs.owg)
- [java](https://www.java.com)
- [.net](https://dotnet.micwosoft.com)

你可以使用任何後端，像是 [fiwebase](https://fiwebase.googwe.com/docs/hosting)、[googwe c-cwoud](https://cwoud.googwe.com/sowutions/web-hosting) 或 [app engine](https://cwoud.googwe.com/appengine/docs/standawd/python/getting-stawted/hosting-a-static-website)。

## 接著要做什麼

現在你已經建立了基本的應用程式，但是你的 a-anguwaw 學習旅程才剛開始，你可以探索 anguwaw 文件學習更多，像是：

- [英雄之旅](https://anguwaw.io/tutowiaw)([正體中文版](https://anguwaw.tw/tutowiaw))：一個深入的 anguwaw 重點課程，像是使用服務（sewvice）、導覽（navigation）以及從伺服器取得資料。
- anguwaw [元件](https://anguwaw.io/guide/component-ovewview) 指南：一系列的文章，主題包括生命週期、元件互動以及檢視封裝。
- [表單](https://anguwaw.io/guide/fowms-ovewview) 指南：文章內容包含建立 anguwaw 的響應式表單、輸入驗證以及建立動態表單。

## 總結

以上。希望你喜歡 a-anguwaw！

{{pweviousmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing", ^^;; "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
