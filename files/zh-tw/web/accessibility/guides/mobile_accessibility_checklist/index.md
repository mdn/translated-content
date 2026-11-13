---
title: 行動無障礙檢核清單
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
---

本文提供行動應用程式開發者一個簡潔的無障礙必備要件檢核清單，本文將隨著更多模型產生而不斷地演進。

## 顏色

- 顏色對比**必須**符合[WCAG 2.0](https://www.w3.org/TR/WCAG/) AA 等級要求:
  - 一般文字對比值為 4.5:1(小於 18 點字或 14 點粗體)
  - 大文字對比值為 3:1(大於 18 點字或 14 點粗體)

- 透過顏色傳遞資訊 **必須** 能藉由其他方式獲得資訊 (底線文字表示連結等)

> [!NOTE]
> Jon Snook 已撰寫實用的 [Colour Contrast Checker](http://snook.ca/technical/colour_contrast/colour.html) 能用於檢查背景與前景顏色的對比。同樣地，[Tanaguru Contrast-Finder](http://contrast-finder.tanaguru.com/) 也提供類似功能，而且建議相似且更好的對比顏色提供你考量使用。

## 可視性

- 內容隱藏技術如完全不透明、Z 型態索引順序與螢幕外的配置**必須不能**單獨用於處理可視性。
- 目前可視螢幕之外的所有事物**必須**真正地不可見(特別適用於具有多個卡片的單一頁面應用程式)：
  - **使用** `hidden` 屬性或 `visibility` 或 `display` 樣式屬性。
  - 除非絕對無法避免，否則**不應**使用`aria-hidden` 屬性。

## 焦點

- 所有可觸發的元素**必須**可獲得焦點：
  - 標準的控制措施如連結、按鈕與表單輸入框預設為可獲得焦點。
  - 非標準的控制措施**必須**賦予它們合適的 [ARIA Role](https://www.w3.org/TR/wai-aria/roles)，如按鈕、連結或核取框。

- 焦點應該以邏輯的順序與一致的方式處理。

## 文字相等意義

- 在應用程式之中，為每一個非嚴格呈現的非文字元素提供文字相等意義。
  - 在適當情況下使用*alt 與 title*(使用指引請參見 Steve Faulkner 關於[Using the HTML title attribute](http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/)的文章)。
  - 如果上述屬性不適用，則使用合適的[ARIA 屬性](https://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header)如`aria-label`、`aria-labelledby`或 `aria-describedby。`

- 文字圖片 **必須**避免使用。
- 所有表單控制措施**必須**有標籤({{ htmlelement("label") }} 元素) ，以利於螢幕報讀器使用者使用。

## 處理狀態

- 標準控制措施如選項按鈕與核取框可被作業系統處理。然而，其他客製的控制措施狀態改變必須透過[ARIA 狀態](https://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header)如 `aria-checked`、`aria-disabled`、`ria-selected`、`aria-expanded` 與 `aria-pressed` 來提供。

## 一般準則

- 應用程式的名稱**必須**提供。
- 標題**必須**不能破壞層級結構。

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA 地標角色](https://www.w3.org/TR/wai-aria/roles#landmark_roles_header)**應該**用於描述應用程式或文件結構，例如`banner`、`complementary`、`contentinfo`、 `main`、 `navigation`、`search`。
- 觸控事件處理器**必須**只有在`touchend`事件上觸發。
- 觸控目標**必須**提供使用者足夠大的互動操作(有用的觸控目標大小指引請參見[BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size))。

> [!NOTE]
> [Tanaguru 自動無障礙測試服務](http://www.tanaguru.com/)提供有用的方法去發現一些發生於網頁或安裝的網頁應用程式(如 Firefox OS)無障礙錯誤。你可在[tanaguru.org](http://tanaguru.org/)找到更多關於 Tanaguru 技術開發，以及貢獻該專案的資訊。

> [!NOTE]
> [本文件原始版本](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html)由 [Yura Zenevich](https://yzen.github.io/) 撰寫。
