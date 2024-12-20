---
title: 用戶介面
slug: Mozilla/Add-ons/WebExtensions/user_interface
---

{{AddonSidebar}}

套件 APIs 提供了幾種介面來完成對用戶的功能。下方是那些介面的概述，每種用戶介面都有更詳細的資訊可以查閱。

> [!NOTE]
> 爲了使用這些 UI 元件在套件裡提供優秀的用戶體驗，建議閱讀[用戶體驗最佳實踐](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)文章。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><p>可用介面</p></th>
      <th scope="col">敘述</th>
      <th scope="col">範例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/Add-ons/WebExtensions/user_interface/Browser_action"
          >工具列按鈕</a
        >
      </td>
      <td>
        一個瀏覽器工具列上的按鈕，被點擊時會送出事件給套件。預設的情況下在所有頁籤都能看到此按鈕。
      </td>
      <td>
        <img
          alt="Example showing a toolbar button (browser action)."
          src="browser-action.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        附帶<a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >彈出視窗</a
        >的工具列按鈕
      </td>
      <td>
        一個按鈕上的彈出視窗，當按鈕被點擊時展開。彈出視窗被一個HTML文件來定義。
      </td>
      <td>
        <img
          alt="Example of the pop-up on a toolbar button"
          src="popup-shadow.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/Add-ons/WebExtensions/user_interface/Page_actions"
          >網址列按鈕</a
        >
      </td>
      <td>
        一個網址列上的按鈕，點擊時傳送事件給套件。預設的情況下，在所有的頁籤中此按鈕都會被隱藏。
      </td>
      <td>
        <img
          alt="Example showing an address bar button (page action) "
          src="address_bar_button.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        附帶<a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >彈出視窗</a
        >的網址列按鈕
      </td>
      <td>
        網址列按鈕上的一個按鈕，當按鈕被點擊時展開，彈出視窗被一個HTML文件來定義。
      </td>
      <td>
        <img
          alt="Example of a popup on the address bar button"
          src="page_action_popup.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items"
          >快捷選單</a
        >
      </td>
      <td>
        在一個或多個瀏覽器快捷選單中的選單項目、核取方塊、選項按鈕。另外，選單可以透過增加分隔線來組成。當選單項目被點擊時傳送一個事件給套件。
      </td>
      <td>
        <img
          alt="Example of content menu items added by a WebExtension, from the context-menu-demo example"
          src="context_menu_example.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars"
          >側邊欄</a
        >
      </td>
      <td>
        <p>
          一個顯示在網頁旁邊的HTML文件，每頁可以顯示獨立的內容。側邊欄會在用戶安裝套件時打開，然後根據用戶對側邊欄的可視選項開關。側邊欄裡的用戶互動由它的HTML文件來控制。
        </p>
      </td>
      <td><img alt="Example of a sidebar" src="bookmarks-sidebar.png" /></td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages"
          >選項頁面</a
        >
      </td>
      <td>
        一個使你可以定義用戶能修改的偏好設定的頁面。用戶可以透過瀏覽器的套件管理畫面進到這裡。
      </td>
      <td>
        <img
          alt="Example showing the options page content added in the favorite colors example."
          src="options_page.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/Add-ons/WebExtensions/user_interface/Extension_pages"
          >套件頁面</a
        >
      </td>
      <td>
        透過套件裡的網頁來在視窗或頁籤內提供表單、幫助訊息或任何需要的內容。
      </td>
      <td>
        <img
          alt="Example of a simple bundled page displayed as a detached panel."
          src="bundled_page_as_panel_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications"
          >通知</a
        >
      </td>
      <td>
        透過作業系統的機制顯示的短暫的通知。當用戶點擊通知或通知關閉時（不論自動關閉或用戶手動關閉）時傳送事件給套件。
      </td>
      <td>
        <img
          alt="Example of an extension triggered system notification"
          src="notify-shadowed.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox"
          >網址列建議</a
        >
      </td>
      <td>當用戶輸入關鍵字時提供自訂的網址列建議。</td>
      <td>
        <img
          alt="Example showing the result of the firefox_code_search WebExtension&#x27;s customization of the address bar suggestions."
          src="omnibox_example_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
          >開發者工具面板</a
        >
      </td>
      <td>一個包含相關HTML文件的頁籤顯示在瀏覽器的開發者工具裡。</td>
      <td>
        <img
          alt="Example showing the result of the firefox_code_search WebExtension&#x27;s customization of the address bar suggestions."
          src="developer_panel_tab.png"
        />
      </td>
    </tr>
  </tbody>
</table>

下面是一些關於建立這些用戶介面的詳細教學：

- [在工具列加入一個按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [建立設定頁面](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [擴充開發者工具](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
