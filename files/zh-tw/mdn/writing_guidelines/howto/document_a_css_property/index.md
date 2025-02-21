---
title: 如何撰寫 CSS 屬性文件
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

隨著 [CSS](/zh-TW/docs/Web/CSS) 標準發展，屬性不斷推陳出新。MDN Web 文件上的 [CSS 參考文件](/zh-TW/docs/Web/CSS/Reference)需要跟上這個變化。本文提供逐步指南，說明如何建立 CSS 屬性參考頁面。

每個 CSS 屬性參考頁面都遵循相同架構，這有助於讀者更有效率地查找資訊，尤其當熟悉標準參考頁面格式後。

## 第一步——決定要記錄的屬性

首先，你得決定要撰寫的 CSS 屬性文件。也許你注意到某個頁面缺失，或是在我們的[問題清單](https://github.com/mdn/content/issues)看到闕漏內容的回報。若要查找該 CSS 屬性的詳細資訊，你需要參閱相關規範，例如 [W3C 規範](https://www.w3.org/Style/CSS/)，或是針對 Gecko 或 Blink 這類渲染引擎中的非標準屬性所提出的錯誤報告。

> [!NOTE]
> 當參考 W3C 規範時，請務必使用**編輯草稿（Editor's Draft）**（可見左側紅色橫幅標示），而非已發布的版本（如 Working Draft）。編輯草稿通常更接近最終版本！

若發現實作與規範不符，歡迎反映到實作錯誤回報裡。這能歸因到以下幾種可能：

- 可能是實作中的錯誤（後續會提交修正錯誤的回報）。
- 可能是因為新規範的發布有所延遲。
- 可能是規範中的錯誤（若是這種情況，應提交一份規範錯誤回報）。

## 第二步——檢查 CSS 屬性資料庫

CSS 屬性的某些特性（例如語法或能否動畫化）會在多個頁面中提及，因此這些資訊會儲存在一個特定資料庫中。你在頁面中使用的巨集需要從該資料庫讀取屬性資訊，因此請先[確認該資訊是否存在](https://github.com/mdn/data/blob/main/docs/updating_css_json.md)。

## 第三步——建立 CSS 屬性頁面

準備就緒了！現在我們能新增實際 CSS 屬性頁面。建立新 CSS 屬性頁面最簡單的方法是**複製**現有的 CSS 屬性頁面內容，然後針對新屬性修改內容。請參閱我們的[如何建立頁面指南](/zh-TW/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)。

建立參考頁面時，你需要新增**範例（Examples）**。請參考這篇[如何建立、編輯、移動或刪除頁面](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Live_samples)。請記住，你建立的是**單一屬性**的參考頁面，因此你新增的範例應該**獨立展示該屬性的運作方式**，而非整個規範的應用方式。例如，`list-style-type` 屬性的範例應展示不同屬性值的效果，而不是如何與其它屬性、偽類別或偽元素結合來產生華麗效果。如需更完整應用範例，應該撰寫教學或指南來展示更多內容。

## 第四步——交付審核

建立屬性頁面後，請提交為 Pull Request。一位審核團隊成員將自動被指派來審核你的頁面。
