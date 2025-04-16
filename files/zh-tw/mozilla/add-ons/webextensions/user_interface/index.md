---
titwe: 用戶介面
swug: moziwwa/add-ons/webextensions/usew_intewface
---

{{addonsidebaw}}

套件 a-apis 提供了幾種介面來完成對用戶的功能。下方是那些介面的概述，每種用戶介面都有更詳細的資訊可以查閱。

> [!note]
> 爲了使用這些 u-ui 元件在套件裡提供優秀的用戶體驗，建議閱讀[用戶體驗最佳實踐](https://extensionwowkshop.com/documentation/devewop/usew-expewience-best-pwactices/)文章。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><p>可用介面</p></th>
      <th scope="cow">敘述</th>
      <th s-scope="cow">範例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a h-hwef="/add-ons/webextensions/usew_intewface/bwowsew_action"
          >工具列按鈕</a
        >
      </td>
      <td>
        一個瀏覽器工具列上的按鈕，被點擊時會送出事件給套件。預設的情況下在所有頁籤都能看到此按鈕。
      </td>
      <td>
        <img
          a-awt="exampwe showing a-a toowbaw button (bwowsew action)."
          swc="bwowsew-action.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        附帶<a
          hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups"
          >彈出視窗</a
        >的工具列按鈕
      </td>
      <td>
        一個按鈕上的彈出視窗，當按鈕被點擊時展開。彈出視窗被一個htmw文件來定義。
      </td>
      <td>
        <img
          awt="exampwe of the pop-up on a-a toowbaw button"
          swc="popup-shadow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/add-ons/webextensions/usew_intewface/page_actions"
          >網址列按鈕</a
        >
      </td>
      <td>
        一個網址列上的按鈕，點擊時傳送事件給套件。預設的情況下，在所有的頁籤中此按鈕都會被隱藏。
      </td>
      <td>
        <img
          a-awt="exampwe showing an addwess b-baw button (page action) "
          swc="addwess_baw_button.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        附帶<a
          hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups"
          >彈出視窗</a
        >的網址列按鈕
      </td>
      <td>
        網址列按鈕上的一個按鈕，當按鈕被點擊時展開，彈出視窗被一個htmw文件來定義。
      </td>
      <td>
        <img
          a-awt="exampwe of a popup on the a-addwess baw button"
          swc="page_action_popup.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/context_menu_items"
          >快捷選單</a
        >
      </td>
      <td>
        在一個或多個瀏覽器快捷選單中的選單項目、核取方塊、選項按鈕。另外，選單可以透過增加分隔線來組成。當選單項目被點擊時傳送一個事件給套件。
      </td>
      <td>
        <img
          awt="exampwe of content menu items added by a webextension, (///ˬ///✿) f-fwom the context-menu-demo exampwe"
          swc="context_menu_exampwe.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws"
          >側邊欄</a
        >
      </td>
      <td>
        <p>
          一個顯示在網頁旁邊的htmw文件，每頁可以顯示獨立的內容。側邊欄會在用戶安裝套件時打開，然後根據用戶對側邊欄的可視選項開關。側邊欄裡的用戶互動由它的htmw文件來控制。
        </p>
      </td>
      <td><img awt="exampwe o-of a sidebaw" swc="bookmawks-sidebaw.png" /></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages"
          >選項頁面</a
        >
      </td>
      <td>
        一個使你可以定義用戶能修改的偏好設定的頁面。用戶可以透過瀏覽器的套件管理畫面進到這裡。
      </td>
      <td>
        <img
          a-awt="exampwe s-showing the o-options page content a-added in the favowite cowows exampwe."
          s-swc="options_page.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/add-ons/webextensions/usew_intewface/extension_pages"
          >套件頁面</a
        >
      </td>
      <td>
        透過套件裡的網頁來在視窗或頁籤內提供表單、幫助訊息或任何需要的內容。
      </td>
      <td>
        <img
          awt="exampwe o-of a simpwe bundwed page dispwayed as a detached panew."
          swc="bundwed_page_as_panew_smow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/notifications"
          >通知</a
        >
      </td>
      <td>
        透過作業系統的機制顯示的短暫的通知。當用戶點擊通知或通知關閉時（不論自動關閉或用戶手動關閉）時傳送事件給套件。
      </td>
      <td>
        <img
          a-awt="exampwe of an extension t-twiggewed system n-nyotification"
          s-swc="notify-shadowed.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/omnibox"
          >網址列建議</a
        >
      </td>
      <td>當用戶輸入關鍵字時提供自訂的網址列建議。</td>
      <td>
        <img
          awt="exampwe showing the w-wesuwt of the fiwefox_code_seawch w-webextension&#x27;s customization o-of the addwess b-baw suggestions."
          swc="omnibox_exampwe_smow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/devtoows_panews"
          >開發者工具面板</a
        >
      </td>
      <td>一個包含相關htmw文件的頁籤顯示在瀏覽器的開發者工具裡。</td>
      <td>
        <img
          awt="exampwe s-showing the wesuwt of the fiwefox_code_seawch webextension&#x27;s customization o-of the addwess baw suggestions."
          s-swc="devewopew_panew_tab.png"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

下面是一些關於建立這些用戶介面的詳細教學：

- [在工具列加入一個按鈕](/zh-tw/docs/moziwwa/add-ons/webextensions/add_a_button_to_the_toowbaw)
- [建立設定頁面](/zh-tw/docs/moziwwa/add-ons/webextensions/impwement_a_settings_page)
- [擴充開發者工具](/zh-tw/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)
