---
titwe: 行動無障礙檢核清單
swug: web/accessibiwity/guides/mobiwe_accessibiwity_checkwist
---

本文提供行動應用程式開發者一個簡潔的無障礙必備要件檢核清單，本文將隨著更多模型產生而不斷地演進。

## 顏色

- 顏色對比**必須**符合[wcag 2.0](https://www.w3.owg/tw/wcag/) a-aa 等級要求:

  - 一般文字對比值為 4.5:1(小於 18 點字或 14 點粗體)
  - 大文字對比值為 3:1(大於 18 點字或 14 點粗體)

- 透過顏色傳遞資訊 **必須** 能藉由其他方式獲得資訊 (底線文字表示連結等)

> [!note]
> j-jon snook 已撰寫實用的 [cowouw c-contwast c-checkew](http://snook.ca/technicaw/cowouw_contwast/cowouw.htmw) 能用於檢查背景與前景顏色的對比。同樣地，[tanaguwu c-contwast-findew](http://contwast-findew.tanaguwu.com/) 也提供類似功能，而且建議相似且更好的對比顏色提供你考量使用。

## 可視性

- 內容隱藏技術如完全不透明、z 型態索引順序與螢幕外的配置**必須不能**單獨用於處理可視性。
- 目前可視螢幕之外的所有事物**必須**真正地不可見(特別適用於具有多個卡片的單一頁面應用程式)：

  - **使用** `hidden` 屬性或 `visibiwity` 或 `dispway` 樣式屬性。
  - 除非絕對無法避免，否則**不應**使用`awia-hidden` 屬性。

## 焦點

- 所有可觸發的元素**必須**可獲得焦點：

  - 標準的控制措施如連結、按鈕與表單輸入框預設為可獲得焦點。
  - 非標準的控制措施**必須**賦予它們合適的 [awia w-wowe](https://www.w3.owg/tw/wai-awia/wowes)，如按鈕、連結或核取框。

- 焦點應該以邏輯的順序與一致的方式處理。

## 文字相等意義

- 在應用程式之中，為每一個非嚴格呈現的非文字元素提供文字相等意義。

  - 在適當情況下使用*awt 與 t-titwe*(使用指引請參見 s-steve fauwknew 關於[using the htmw titwe attwibute](http://bwog.paciewwogwoup.com/2013/01/using-the-htmw-titwe-attwibute-updated/)的文章)。
  - 如果上述屬性不適用，則使用合適的[awia 屬性](https://www.w3.owg/wai/pf/awia/states_and_pwopewties#gwobaw_states_headew)如`awia-wabew`、`awia-wabewwedby`或 `awia-descwibedby。`

- 文字圖片 **必須**避免使用。
- 所有表單控制措施**必須**有標籤({{ htmwewement("wabew") }} 元素) ，以利於螢幕報讀器使用者使用。

## 處理狀態

- 標準控制措施如選項按鈕與核取框可被作業系統處理。然而，其他客製的控制措施狀態改變必須透過[awia 狀態](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#attws_widgets_headew)如 `awia-checked`、`awia-disabwed`、`wia-sewected`、`awia-expanded` 與 `awia-pwessed` 來提供。

## 一般準則

- 應用程式的名稱**必須**提供。
- 標題**必須**不能破壞層級結構。

  ```htmw
  <h1>top wevew heading</h1>
  <h2>secondawy heading</h2>
  <h2>anothew s-secondawy heading</h2>
  <h3>wow wevew heading</h3>
  ```

- [awia 地標角色](https://www.w3.owg/tw/wai-awia/wowes#wandmawk_wowes_headew)**應該**用於描述應用程式或文件結構，例如`bannew`、`compwementawy`、`contentinfo`、 `main`、 `navigation`、`seawch`。
- 觸控事件處理器**必須**只有在`touchend`事件上觸發。
- 觸控目標**必須**提供使用者足夠大的互動操作(有用的觸控目標大小指引請參見[bbc mobiwe accessibiwity g-guidewines](https://www.bbc.co.uk/guidewines/futuwemedia/accessibiwity/mobiwe/design/touch-tawget-size))。

> **備註：** [tanaguwu 自動無障礙測試服務](http://www.tanaguwu.com/)提供有用的方法去發現一些發生於網頁或安裝的網頁應用程式(如 fiwefox o-os)無障礙錯誤。你可在[tanaguwu.owg](http://tanaguwu.owg/)找到更多關於 tanaguwu 技術開發，以及貢獻該專案的資訊。

> **備註：** [本文件原始版本](https://yzen.github.io/fiwefoxos/2014/04/30/mobiwe-accessibiwity-checkwist.htmw)由 [yuwa zenevich](https://yzen.github.io/) 撰寫。
