---
title: 使用 CSS 解決常見問題
slug: Learn_web_development/Howto/Solve_CSS_problems
---

此頁總結問與答，以及 MDN 網站上其它能幫助你解決常見 CSS 問題的資源。

## 修飾盒子

- [如何為元素新增 Drop-Shadow？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : 陰影可以透過 {{cssxref("box-shadow")}} 屬性添加給盒子。這個教學解釋它如何運作並提供範例。
- [如何用圖片填滿盒子同時不讓該圖片變形？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : {{cssxref("object-fit")}} 屬性提供將圖片置入長寬比不同的盒子中的各種方式。你能在這個教學中了解如何利用它們。
- [什麼方法可以用來修飾盒子？](/zh-TW/docs/Learn/CSS/Howto/create_fancy_boxes)
  - : 展示一系列用 CSS 修飾盒子時能派上用場的屬性。
- [如何把元素設為半透明？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : {{cssxref("opacity")}} 屬性及擁有 alpha 通道的顏色數值可以解決這個問題。

### 盒子修飾教學與指南

- [盒子模型](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [修飾背景與邊界](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS 與文字

- [如何為文字新增 Drop-Shadow？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : 陰影可以透過 {{cssxref("text-shadow")}} 屬性添加給文字。這個教學解釋它如何運作並提供範例。
- [如何強調段落第一行？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : 了解如何透過偽元素 {{cssxref("::first-line")}} 抓到段落第一行。
- [如何強調文章第一段？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : 了解如何透過偽類別 {{cssxref("::first-child")}} 抓到第一個段落。
- [如何僅強調出現在標題之後的第一段？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : 組合器能幫助你基於文件裡的位置精準抓取元素；這個教學解釋如何使用讓 CSS 僅套用於出現在標題之後的第一段。

### 文字修飾教學與指南

- [如何修飾文字？](/zh-TW/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [如何修飾列表元素？](/zh-TW/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [如何修飾超連結？](/zh-TW/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS 選擇器](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS 布局

- [如何置中項目？](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : 在盒子裡將項目水平或垂直置中以前很麻煩，但現在彈性盒子讓它變得很簡單。

### 布局指南

- [使用 CSS 彈性盒子](/zh-TW/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [使用 CSS 多行布局](/zh-TW/docs/Web/CSS/Guides/Multicol_layout/Using)
- [使用 CSS 格線布局](/zh-TW/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [使用 CSS 生成內容](/zh-TW/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> 我們有一本針對 [CSS 布局解法](/zh-TW/docs/Web/CSS/How_to/Layout_cookbook)的食譜，內有可正常執行的範例與常見布局任務說明。
