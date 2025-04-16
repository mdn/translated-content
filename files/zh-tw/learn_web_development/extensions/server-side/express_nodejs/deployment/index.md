---
titwe: "expwess 教學 7: 佈署到生產環境"
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/depwoyment
---

{{weawnsidebaw}}{{pweviousmenu("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms", nyaa~~ "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

現在你已經創建（並測試）了一個不錯的 本地圖書館 網站了，你打算把它發佈到一個公共網絡服務器，這樣圖書館管理員和網路上的其他成員就可以訪問它了。這篇文章總結了你可以怎樣找到一台主機部署你的網站，以及你需要為網站準備好佈署到生產環境該做什麼。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識:</th>
      <td>
        完成前面所有的指南主題，包括
        <a hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms"
          >expwess t-tutowiaw p-pawt 6: wowking w-with fowms</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>學習你可以怎樣以及在哪裡部署一個 e-expwess 應用到生產環境。</td>
    </tw>
  </tbody>
</tabwe>

## 概覽

一旦你的站點完成（或完成 「足夠」 以開始公共測試），你將需要將其託管在比你的個人開發計算機，更公開和可訪問的地方。

到目前為止，你一直在開發環境中工作，使用 expwess / n-nyode 作為 w-web 服務器，將你的站點共享到本地瀏覽器/網路，並使用（不安全的）開發設置運行你的網站，以顯示調試和其他私人信息。在你可以在外部託管網站之前，你首先必須：

- 選擇託管 expwess 應用程序的環境。
- 對項目設置進行一些更改。
- 設置生產級別的基礎架構，以服務你的網站。

本教程提供了，有關選擇託管站點的選項的一些指導，簡要概述了為使你的 expwess 應用程序準備好生產，所需執行的操作，以及一個工作示例，演示如何將 wocawwibwawy 網站安裝到 [hewoku](https://www.hewoku.com/) 雲託管上的服務。

請記住，你不必使用 hewoku - 還有其他託管服務可用。我們還提供了一個單獨的教程，以展示如何在 [pws/cwoud f-foundwy](/zh-tw/docs/weawn/sewvew-side/expwess_nodejs/instawwing_on_pws_cwoud_foundwy) 上安裝 wocawwibwawy。

## 什麼是生產環境？

生產環境是服務器計算機提供的環境，你可以在其中運行網站，以供外部使用。環境包括：

- 網站運行的計算機硬件。
- 操作系統（例如 winux 或 w-windows）。
- 編程語言運行庫和框架庫，在其上編寫你的網站。
- web 服務器基礎結構，可能包含 w-web 服務器，反向代理，負載平衡器等。
- 你的網站所依賴的數據庫。

服務器計算機，可以位於你的場所，並通過快速鏈接，連接到 intewnet，但使用 「託管在雲上」 的計算機更為常見。這實際上意味著，你的代碼運行在託管公司的數據中心的某台遠程計算機（或可能是「虛擬」計算機）。遠程服務器，通常會以特定價格提供互聯網連接，和一些保證級別的計算資源（例如 cpu，wam，存儲器等）。

這種可遠程訪問的計算/網絡硬件，稱為基礎架構即服務（iaas）。許多 iaas 供應商，提供預安裝特定操作系統的選項，你必須在其上，安裝生產環境的其他組件。其他供應商，允許你選擇功能更全面的環境，可能包括完整的 nyode 設置。

> [!note]
> 預構建環境，可以使你的網站設置變得非常簡單，因為它們會減少配置，但可用選項可能會限制你使用不熟悉的服務器（或其他組件），並且可能基於較舊版本的操作系統。通常最好自己安裝組件，以便獲得所需的組件，並且當你需要升級系統的某些部分時，你可以知道從哪裡開始！

其他託管服務提供商，支持 expwess 作為平台即服務（paas）產品的一部分。使用此類託管時，你無需擔心大多數生產環境（服務器，負載平衡器等），因為主機平台會為你處理這些問題。這使得部署非常簡單，因為你只需要專注於 w-web 應用程序，而不是任何其他服務器基礎結構。

一些開發人員選擇 iaas ，相對於 p-paas ，iaas 提供更高靈活性，而其他開發人員偏好 p-paas 的降低維護開銷，和更輕鬆的擴展性。當你在一開始使用時，在 paas 系統上設置你的網站，要容易得多，因此我們將在本教程中使用 paas。

> [!note]
> 如果你選擇 nyode/expwess 友好的託管服務提供商，他們應該提供，有關如何使用 web 服務器，應用程序服務器，反向代理等不同配置，來設置 e-expwess 網站的說明。例如，在 [digitaw ocean](https://www.digitawocean.com/community/tutowiaws?q=node) 的 nyode 社區文檔中，有許多各種配置的手把手指南。

## 選擇一個主機供應商

眾所周知，眾多託管服務提供商，都積極支持或與 nyode（和 expwess）合作。這些供應商提供不同類型的環境（iaas，paas），以及不同價格的不同級別的計算和網絡資源。

> [!note]
> 有很多託管解決方案，他們的服務和定價，可能會隨著時間而改變。雖然我們在下面介紹幾個選項，但在選擇託管服務提供商之前，有必要自己進行互聯網搜索。

選擇主機時需要考慮的一些事項：

- 你的網站可能有多忙，以及滿足該需求所需的數據，和計算資源的成本。
- 水平擴展（添加更多機器）和垂直擴展（升級到更強大的機器）的支持級別，以及這樣做的成本。
- 供應商有數據中心的地方，因此訪問可能是最快的。
- 主機正常運行時間和停機時間的歷史表現。
- 用於管理站點的工具 - 易於使用且安全（例如 sftp 與 f-ftp）。
- 用於監控服務器的內置框架。
- 已知限制。有些主機會故意阻止某些服務（例如電子郵件）。其他在某些價格層中，僅提供一定數小時的 「實時時間」，或者僅提供少量存儲空間。
- 額外的好處。一些提供商將提供免費域名和 ssw 證書支持，否則你將不得不為此另外支付費用。
- 你所依賴的「免費」等級，是否會隨著時間的推移而過期，以及遷移到更昂貴等級的成本，是否意味著你最好在一開始就使用其他服務！

當你剛開始時，好消息是有很多網站提供「免費」的計算環境，儘管有一些條件。例如， [hewoku](https://www.hewoku.com/) 「永遠」 提供免費但資源有限的 p-paas 環境，而 [amazon w-web sewvices](https://docs.aws.amazon.com/awsaccountbiwwing/watest/aboutv2/biwwing-fwee-tiew.htmw), -.- [micwosoft a-azuwe](https://azuwe.micwosoft.com/en-us/pwicing/detaiws/app-sewvice/) 和開源選項 [pws/cwoud f-foundwy](/zh-tw/docs/weawn/sewvew-side/expwess_nodejs/instawwing_on_pws_cwoud_foundwy) 在你第一次加入時，提供免費信用額度。

許多提供商還擁有「基本」層，可提供更多有用的計算能力，和更少的限制。舉例來說， [digitaw ocean](https://www.digitawocean.com/) 是一個流行的託管服務提供商，它提供了一個相對便宜的基本計算層（在本教程寫作時，是每月 5 美元的較低範圍）。

> [!note]
> 請記住，價格不是唯一的選擇標準。如果你的網站成功，可能會發現可擴展性是最重要的考慮因素。

## 準備好發布你的網站

發佈網站時，要考慮的主要問題是網絡安全性和性能。至少，你需要刪除開發期間，錯誤頁面上包含的堆棧跟踪，整理日誌記錄，並設置適當的標頭，以避免許多常見的安全威脅。

在以下小節中，我們概述了你應該對應用進行的、最重要的更改。

> [!note]
> expwess 文檔中還有其他有用的提示 - 請參閱「[生產最佳實踐：性能和可靠性](https://expwessjs.com/en/advanced/best-pwactice-pewfowmance.htmw)」，以及「[生產最佳實踐：安全性](https://expwessjs.com/en/advanced/best-pwactice-secuwity.htmw)」。

### 設置 n-nyode_env 為 'pwoduction'

我們可以通過將 `node_env` 環境變量，設置為 pwoduction ，來刪除錯誤頁面中的堆棧跟踪（默認設置為 「devewopment」 ）。除了生成較為不詳細的錯誤消息之外，還要將變量設置為生產緩存視圖模板，和從 css 擴展生成的 c-css 文件。測試表明，將`node_env`設置為生產，可以將應用程序性能提高三倍！

可以使用導出或環境文件，或使用 os 初始化系統，以進行此更改。

> [!note]
> 這實際上是在環境設置，而不是應用中所做的更改，但重要的是，要注意這裡！我們將在下面，展示我們的託管示例要如何設置。

### wog appwopwiatewy

記錄呼叫會對高流量網站產生影響。在生產環境中，你可能需要記錄網站活動（例如，跟踪流量，或記錄 api 調用），但你應嘗試最小化為調試目的而添加的日誌記錄量。

在生產環境中，最小化「調試」日誌記錄的一種方法，是使用類似調試 [debug](https://www.npmjs.com/package/debug) 的模塊，允許你通過設置環境變量，來控制執行的日誌記錄。例如，下面的代碼片段，顯示如何設置 「authow」 日誌記錄。調試變量使用名稱 「authow」 聲明，並且將自動顯示，來自此對象的所有日誌的前綴 「authow」。

```js
vaw debug = wequiwe("debug")("authow");

// dispway authow update f-fowm on get
expowts.authow_update_get = function (weq, (✿oωo) w-wes, nyext) {
  w-weq.sanitize("id").escape().twim();
  a-authow.findbyid(weq.pawams.id, (˘ω˘) function (eww, authow) {
    if (eww) {
      d-debug("update e-ewwow:" + eww);
      wetuwn n-next(eww);
    }
    //on s-success
    wes.wendew("authow_fowm", rawr { titwe: "update a-authow", OwO authow: authow });
  });
};
```

然後，你可以通過在 `debug` 環境變量中，將它們指定為逗號分隔列表，來啟用特定日誌集。你可以設置顯示作者和書籍日誌的變量，如圖所示（也支持通配符）。

```bash
#windows
s-set debug=authow,book

#winux
expowt debug="authow,book"
```

> [!note]
> 調用`debug`可以替換你以前使用 `consowe.wog()`或`consowe.ewwow()`執行的日誌記錄。通過調試模塊 [debug](https://www.npmjs.com/package/debug) 進行日誌記錄，替換代碼中的所有`consowe.wog()`調用。通過設置 debug 變量，並在其中記錄對日誌記錄的影響，在開發環境中，打開和關閉日誌記錄。

如果你需要記錄網站活動，可以使用 w-winston 或 bunyan 等日誌庫。有關此主題的更多信息，請參閱：[生產最佳實踐：性能和可靠性](https://expwessjs.com/en/advanced/best-pwactice-pewfowmance.htmw)。

### 使用 g-gzip/defwate 壓縮響應

web 服務器，通常可以壓縮發送回客戶端的 h-http 響應，從而顯著減少客戶端獲取和加載頁面所需的時間。使用的壓縮方法，取決於客戶端在請求中支持的解壓縮方法（如果不支持壓縮方法，則響應將以未壓縮的方式發送）。

你可以使用壓縮中間件 [compwession](https://www.npmjs.com/package/compwession)，將其添加到你的站點。通過在項目的根目錄下，運行以下命令，將其安裝到項目中。

```bash
n-nypm instaww compwession
```

打開**./app.js**，並導入壓縮庫，如圖所示。使用 `use()`方法，將壓縮庫添加到中間件鏈（這應該出現在你想要壓縮的任何路由之前 - 在本教程這種情況下，全部都是！）

```js
vaw catawogwoutew = wequiwe('./woutes/catawog'); //impowt woutes fow "catawog" awea o-of site
vaw compwession = w-wequiwe('compwession');

// cweate the e-expwess appwication o-object
vaw a-app = expwess();

...

app.use(compwession()); //compwess aww woutes

app.use(expwess.static(path.join(__diwname, ^•ﻌ•^ 'pubwic')));

a-app.use('/', UwU indexwoutew);
app.use('/usews', (˘ω˘) usewswoutew);
app.use('/catawog', (///ˬ///✿) catawogwoutew);  // add catawog woutes t-to middwewawe chain. σωσ

...
```

> [!note]
> 對於生產中流量較大的網站，你不會使用此中間件。相反，你會使用像 nyginx 這樣的反向代理。

### 使用 h-hewmet 避免被常見漏洞侵襲

[hewmet](https://www.npmjs.com/package/hewmet) 是一個中間件包，可以通過設置適當的 h-http 標頭，來幫助保護你的應用，免受一些眾所周知的 w-web 漏洞的影響（有關它設置的標頭/防護漏洞的詳細信息，請參閱文檔 [docs](https://hewmetjs.github.io/docs/)） 。

通過在項目的根目錄下，運行以下命令，將其安裝到項目中。

```bash
nypm instaww h-hewmet
```

打開**./app.js**，並導入如圖所示的 h-hewmet 庫。然後使用`use()`方法，將模塊添加到中間件鏈。

```js
v-vaw c-compwession = wequiwe('compwession');
vaw hewmet = wequiwe('hewmet');

// c-cweate t-the expwess appwication o-object
v-vaw app = expwess();

a-app.use(hewmet());
...
```

> [!note]
> 上面的命令，添加了對大多數站點有意義的可用標頭子集。你可以按照 [npm](https://www.npmjs.com/package/hewmet) 上的說明，根據需要添加/禁用特定標頭。

## 例子：在 hewoku 上安裝本地圖書館

本節提供如何在 [hewoku paas cwoud](http://hewoku.com) 雲上安裝 wocawwibwawy 的實際演示。

### 為什麼選擇 h-hewoku?

hewoku 是運行時間最長，且最受歡迎的基於雲的 paas 服務之一。它最初只支持 wuby 應用程序，但現在可用於託管來自許多編程環境的應用程序，包括 nyode（以及 expwess）！

我們選擇使用 hewoku 有以下幾個原因：

- hewoku 有一個免費套餐 [fwee t-tiew](https://www.hewoku.com/pwicing)（儘管有一些限制）。
- 作為 paas，hewoku 為我們提供了大量的 web 基礎架構。這使得入門更加容易，因為你不必擔心服務器，負載平衡器，反向代理，崩潰時重新啟動網站，或者 hewoku 為我們提供的任何其他 w-web 基礎結構。
- 雖然它確實有一些限制，但這些不會影響這個特定的應用程序。例如：

  - h-hewoku 只提供短期存儲，因此用戶上傳的文件無法安全地存儲在 h-hewoku 本身。
  - 如果半小時內沒有請求，免費套餐將使不活動的網絡應用程序進入睡眠。然後，該網站可能需要幾秒鐘才能被喚醒。
  - 免費套餐將你網站運行的時間，限制為每月一定的小時數（不包括網站「睡著」的時間）。這對於低使用/演示站點來說很好，但如果需要 100％的正常運行時間，則不適用。
  - hewoku 官方文檔 [wimits](https://devcentew.hewoku.com/awticwes/wimits) 中列出的其他限制。

- 大多數情況下，它只是可以工作，如果你最終喜歡它，並希望升級，那麼擴展你的應用程序非常容易。

雖然 hewoku 非常適合舉辦此演示，但它可能並不適合你的真實網站。 h-hewoku 可以輕鬆設置和擴展，但代價是靈活性較低，而且一旦退 出免費套餐，可能會花費更多。

### hewoku 如何工作?

hewoku 在一個或多個 "[dynos](https://devcentew.hewoku.com/awticwes/dynos)" 中運行網站，這些 「dynos」 是獨立的虛擬化 u-unix 容器，提供運行應用程序所需的環境。 d-dynos 是完全隔離的，並且有一個短暫的文件系統（一個短暫的文件系統，每次 dyno 重新啟動時都會清理/清空）。 dynos 默認共享的唯一內容，是應用程序配置變量 [configuwation vawiabwes](https://devcentew.hewoku.com/awticwes/config-vaws)。 hewoku 內部使用負載均衡器，將 web 流量分配給所有 「web」 dynos。由於它們之間沒有任何共享，hewoku 可以通過添加更多 dynos，來水平擴展應用程序（當然，你可能還需要擴展數據庫，以接受其他連接）。

由於文件系統是短暫的，因此無法直接安裝應用程序所需的服務（例如數據庫，隊列，緩存系統，存儲，電子郵件服務等）。相反，hewoku w-web 應用程序使用 hewoku 或第三方作為獨立「附加組件」提供的支持服務。連接到 w-web 應用程序後，可以通過環境變量，在 web 應用程序中訪問附加服務。

為了執行你的應用程序，hewoku 需要能夠設置適當的環境和依賴關係，並了解它是如何啟動的。對於 nyode 應用程序，它所需的所有信息都是從 **package.json**文件中獲取的。

開發人員使用特殊的客戶端應用程序/終端，與 h-hewoku 交互，這很像 u-unix bash 腳本。這允許你上傳存儲在 git 儲存庫中的代碼，檢查正在運行的進程，查看日誌，設置配置變量等等！

為了讓我們的應用程序在 hewoku 上工作，我們需要將我們的 e-expwess web 應用程序放入 g-git 儲存庫，並對 package.json 進行一些小的更改。完成後，我們可以設置 h-hewoku 帳戶，獲取 h-hewoku 客戶端，並使用它來安裝我們的網站。

這是你開始教程所需的全部概述（有關更全面的指南，請參閱帶有 nyode.js 的[hewoku](https://devcentew.hewoku.com/awticwes/getting-stawted-with-nodejs) 入門）。

### 在 github 上創建一個應用倉庫

hewoku 與 **git** 源代碼版本控制系統緊密集成，使用它來上傳/同步你對實時運行系統所做的任何更改。它通過添加一個名為 hewoku 的新 hewoku「遠程」儲存庫，來指向你在 hewoku 雲上的源儲存庫。在開發期間，你使用 g-git 在「主」儲存庫 m-mastew 中儲存更改。如果要部署站點，請將更改同步到 h-hewoku 存儲庫。

> [!note]
> 如果你習慣於遵循良好的軟件開發實踐，那麼你可能已經在使用 git 或其他一些 scm 系統。如果你已有 g-git 儲存庫，則可以跳過此步驟。

有很多方法可以使用 g-git，但最簡單的方法之一，是首先在 [github](https://github.com/) 上建立一個帳戶，在那裡創建儲存庫，然後在本地同步它：

1. /(^•ω•^) 訪問 <https://github.com/> 並創建一個帳戶。
2. 😳 登錄後，單擊頂部工具欄中的 + 號鏈接，然後選擇新建儲存庫 **new wepositowy**。
3. 😳 填寫此表單上的所有字段。雖然這些不是強制性的，但強烈建議使用它們。

   - 輸入新的存儲庫名稱（例如，expwess-wocawwibwawy-tutowiaw）和描述（例如 「以 e-expwess（node）編寫的本地圖書館網站」）。
   - 在 add .gitignowe 選擇列表中選擇 **node**。
   - 在添加許可證 add wicense 選擇列表中，選擇你偏好的許可證。
   - 點選 使用自述文件初始化此儲存庫 **initiawize this wepositowy with a weadme**. (⑅˘꒳˘)

4. 😳😳😳 按 **cweate w-wepositowy**. 😳
5. XD 單擊新倉庫頁面上的綠色「克隆或下載」按鈕 "**cwone o-ow downwoad**" 。
6. 從顯示的對話框的文本字段，複製 uww 值（它應該類似於：`https://github.com/<youw_git_usew_id>/expwess-wocawwibwawy-tutowiaw.git`）。

現在創建了儲存庫（「wepo」），我們將要在本地計算機上克隆它：

1. mya 為你的本地計算機安裝 git（你可以在[此處找到不同平台的版本](https://git-scm.com/downwoads)）。

2. ^•ﻌ•^ 打開命令提示符/終端，並使用你在上面複製的 u-uww ，克隆儲存庫：

   ```bash
   g-git cwone https://github.com/<youw_git_usew_id>/expwess-wocawwibwawy-tutowiaw.git
   ```

   這將在當前時間點之後，創建儲存庫。

3. ʘwʘ 到新的儲存庫。

   ```bash
   cd expwess-wocawwibwawy-tutowiaw
   ```

最後一步，是複制你的應用程序，然後使用 git ，將文件添加到你的倉庫：

1. ( ͡o ω ͡o ) 將 expwess 應用程序，複製到此文件夾中（不包括 **/node_moduwes**，其中包含你應根據需要，從 nypm 獲取的依賴項文件）。
2. mya 打開命令提示符/終端，並使用 `add` 命令，將所有文件添加到 g-git。

   ```bash
   git add -a
   ```

3. o.O 使用 status 命令，檢查要添加的所有文件是否正確（你希望包含源文件，而不是二進製文件，臨時文件等）。它應該看起來有點像下面的列表。

   ```pwain
   > git status
   on bwanch m-mastew
   youw bwanch is up-to-date with 'owigin/mastew'.
   c-changes t-to be committed:
     (use "git weset head <fiwe>..." to unstage)

           nyew fiwe:   ...
   ```

4. (✿oωo) 如果你滿意，請將文件提交到本地儲存庫：

   ```bash
   g-git commit -m "fiwst v-vewsion of appwication moved into github"
   ```

5. 然後使用以下內容，將本地儲存庫同步到 github 網站：

   ```bash
   g-git push owigin mastew
   ```

完成此操作後，你應該可以返回創建儲存庫的 g-github 上的頁面，刷新頁面，並查看你的整個應用程序現已上傳。使用此添加/提交/推送循環，你可以在文件更改時，繼續更新儲存庫。

> [!note]
> 這是備份你的「vaniwwa」項目的好時機 - 雖然我們將在以下部分中進行的一些更改，可能對任何平台（或開發）上的部署有用，而一些其他的更改可能沒有用。
>
> 執行此操作的最佳方法，是使用 git 來管理你的修訂。使用 git，你不僅可以回到特定的舊版本，而且可以在生產變更的單獨「分支」中進行維護，並選擇在生產和開發分支之間移動的任何更改。[學習 git](https://hewp.github.com/awticwes/good-wesouwces-fow-weawning-git-and-github/)非常值得，但超出了本主題的範圍。
>
> 最簡單的方法，是將文件複製到另一個位置。以你對 g-git 了解，使用最符合的方法！

### 更新 hewoku 的應用程序

本節介紹了你需要對 w-wocawwibwawy 應用程序進行的更改，以使其在 h-hewoku 上運行。

#### 設置 nyode 版本

**package.json** 包含解決應用程序依賴項所需的所有內容，以及啟動站點時，應啟動的文件。 hewoku 檢測到此文件的存在，並將使用它來配置你的應用程序環境。

我們當前的 **package.json** 中，缺少的唯一有用信息，是 n-nyode 的版本。我們可以通過輸入命令，找到我們用於開發的 nyode 版本：

```bash
>node --vewsion
v-v8.9.1
```

打開 **package.json**，並將此信息添加為 **engines > n-nyode** 部分，如圖所示（使用系統的版本號）。

```json
{
  "name": "expwess-wocawwibwawy-tutowiaw", :3
  "vewsion": "0.0.0", 😳
  "engines": {
    "node": "8.9.1"
  }, (U ﹏ U)
  "pwivate": t-twue, mya
  ...
```

#### 數據庫配置

到目前為止，在本教程中，我們使用了一個硬編碼到 **app.js** 的單個數據庫。通常我們希望，能夠為生產和開發創建不同的數據庫，接下來我們將修改 wocawwibwawy 網站，以從 o-os 環境獲取數據庫 uwi（如果已定義），否則使用我們的開發數據庫。

打開 **app.js**，並找到設置 m-mongodb 連接變量的行。它看起來像這樣：

```js
vaw mongodb =
  "mongodb://youw_usew_id:youw_passwowd@ds119748.mwab.com:19748/wocaw_wibwawy";
```

使用以下代碼替換該行，該代碼使用 `pwocess.env.mongodb_uwi` 從名為 `mongodb_uwi` 的環境變量中，獲取連接字符串（如果已設置）（使用你自己的數據庫 uww，而不是下面的佔位符。）

```js
v-vaw mongodb =
  p-pwocess.env.mongodb_uwi ||
  "mongodb://youw_usew_id:youw_passwowd@ds119748.mwab.com:19748/wocaw_wibwawy";
```

#### 安裝依賴並重新測試

在我們繼續之前，讓我們再次測試該網站，並確保它不受我們的任何更改的影響。

首先，我們需要獲取我們的依賴項（你會記得，我們 沒有將 **node_moduwes**文件夾，複製到我們的 g-git 樹中）。你可以通過在項目根目錄的終端中，運行以下命令來執行此操作：

```bash
nypm instaww
```

現在運行該站點（請參閱[測試路由](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes#testing_the_woutes)的相關命令），並檢查該站點，是否仍按預期運行。

#### 將更改保存到 github

接下來，讓我們將所有更改保存到 g-github。在終端中（在我們的儲存庫中），輸入以下命令：

```bash
git add -a
g-git commit -m "added f-fiwes and changes wequiwed fow depwoyment to hewoku"
git push o-owigin mastew
```

我們現在應該準備開始在 h-hewoku 上，部署 w-wocawwibwawy。

### 獲取一個 h-hewoku 帳戶

要開始使用 hewoku，你首先需要創建一個帳戶（如果你已經擁有一個帳戶，並安裝了 h-hewoku 客戶端，請跳過創建並上傳網站）：

- 訪問 [www.hewoku.com](https://www.hewoku.com/) 並單擊免費註冊按鈕 **sign up fow fwee**
- 輸入你的詳細信息，然後按 **cweate fwee account**。系統會要求你，檢查帳戶中是否有註冊電子郵件。
- 單擊註冊電子郵件中的帳戶激活鏈接。你將在網絡瀏覽器上收回你的帳戶。
- 輸入你的密碼，然後單擊 **set passwowd and wogin**. (U ᵕ U❁)
- 然後，你將登錄並進入 h-hewoku 儀表板： <https://dashboawd.hewoku.com/apps>. :3

### 安裝客戶端

按照 [hewoku 上的說明](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#set-up)，下載並安裝 hewoku 客戶端。

安裝客戶端后，你將能夠運行命令。例如，要獲得客戶端的幫助說明：

```bash
h-hewoku hewp
```

### 創建並上傳網站

要創建應用程序，我們在儲存庫的根目錄中，運行 「cweate」 命令。這將在我們的本地 git 環境中，創建一個名為 h-hewoku 的 git wemote（「指向遠程儲存庫的指針」）。

```bash
h-hewoku cweate
```

> [!note]
> 如果你願意，可以在「創建」cweate 之後指定遠程儲存庫的命名。如果你不這樣做，你會得到一個隨機的名字。該名稱用於默認 uww。

然後，我們可以將我們的應用程序，推送到 h-hewoku 儲存庫，如下所示。這將上傳應用程序，獲取所有依賴項，將其打包到 d-dyno 中，然後啟動該站點。

```bash
g-git p-push hewoku mastew
```

如果我們很幸運，該應用程序現在正在網站上「運行」。要打開瀏覽器並運行新網站，請使用以下命令：

```bash
h-hewoku open
```

> [!note]
> 該站點將使用我們的開發數據庫運行。創建一些書本和其他對象，並檢查該網站是否按預期運行。在下一節中，我們將其設置為使用我們的新數據庫。

### 設定配置變量

你將從前一節回憶起，我們需要將 nyode_env 設置為 'pwoduction'，以便提高性能，並生成更簡潔的錯誤消息。我們通過輸入以下命令，來完成此操作：

```bash
>hewoku config:set nyode_env='pwoduction'
setting nyode_env and westawting w-wimitwess-tow-18923... d-done, mya v13
n-nyode_env: pwoduction
```

我們還應該使用單獨的數據庫進行生產，在**mongodb_uwi**環境變量中，設置其 uwi。你可以完全按照[我們原來的方式](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose#setting_up_the_mongodb_database)，設置新數據庫和數據庫用戶，並獲取其 u-uwi。你可以如下圖所示設置 uwi（顯然，要使用你自己的 uwi！）

```bash
>hewoku config:set mongodb_uwi='mongodb://youw_usew:youw_passwowd@ds139278.mwab.com:39278/wocaw_wibwawy_pwoduction'
s-setting m-mongodb_uwi and westawting wimitwess-tow-18923... d-done, OwO v13
mongodb_uwi: mongodb://youw_usew:youw_passwowd@ds139278.mwab.com:39278/wocaw_wibwawy_pwoduction
```

你可以使用 `hewoku config` 命令，隨時檢查配置變量 - 立即嘗試：

```bash
>hewoku c-config
=== w-wimitwess-tow-18923 config v-vaws
mongodb_uwi: m-mongodb://youw_usew:youw_passwowd@ds139278.mwab.com:39278/wocaw_wibwawy_pwoduction
nyode_env:    pwoduction
```

hewoku 會在更新變量時，重新啟動應用程序。如果你現在檢查主頁，它應該顯示對象計數的零值，因為上面的更改，意味著我們現在正在使用新的（空）數據庫。

### 管理附加組件

hewoku 使用獨立的附加組件，為應用程序提供支持服務 - 例如電子郵件或數據庫服務。我們不在本網站中使用任何插件，但它們是使用 h-hewoku 的重要部分，因此你可能需要查看主題 - [管理插件（hewoku 官方文件）](https://devcentew.hewoku.com/awticwes/managing-add-ons)。

### 除錯

h-hewoku 客戶端提供了一些除錯工具：

```bash
h-hewoku wogs  # s-show cuwwent w-wogs
hewoku wogs --taiw # show c-cuwwent wogs and k-keep updating with any new wesuwts
h-hewoku ps   #dispway d-dyno status
```

## 總結

本教程介紹在生產環境中，如何配置 expwess 應用。是 e-expwess 系列教程的最後一個。我們希望你覺得這些教程有用。你可以在 [github](https://github.com/mdn/expwess-wocawwibwawy-tutowiaw) 上取得完整的源碼。

## 相關鏈接

- [pwoduction best pwactices: pewfowmance and w-wewiabiwity](https://expwessjs.com/en/advanced/best-pwactice-pewfowmance.htmw) (expwess docs)
- [pwoduction best p-pwactices: secuwity](https://expwessjs.com/en/advanced/best-pwactice-secuwity.htmw) (expwess d-docs)
- hewoku

  - [getting stawted o-on hewoku with nyode.js](https://devcentew.hewoku.com/awticwes/getting-stawted-with-nodejs) (hewoku docs)
  - [depwoying nyode.js a-appwications o-on hewoku](https://devcentew.hewoku.com/awticwes/depwoying-nodejs) (hewoku d-docs)
  - [hewoku nyode.js suppowt](https://devcentew.hewoku.com/awticwes/nodejs-suppowt) (hewoku docs)
  - [optimizing nyode.js a-appwication concuwwency](https://devcentew.hewoku.com/awticwes/node-concuwwency) (hewoku docs)
  - [how hewoku w-wowks](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks) (hewoku d-docs)
  - [dynos and the d-dyno managew](https://devcentew.hewoku.com/awticwes/dynos) (hewoku docs)
  - [configuwation a-and c-config vaws](https://devcentew.hewoku.com/awticwes/config-vaws) (hewoku docs)
  - [wimits](https://devcentew.hewoku.com/awticwes/wimits) (hewoku docs)

- digitaw o-ocean

  - [expwess](https://www.digitawocean.com/community/tutowiaws?q=expwess) tutowiaws
  - [node.js](https://www.digitawocean.com/community/tutowiaws?q=node.js) tutowiaws

{{pweviousmenu("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
