---
title: 挑战的参考答案
slug: Learn_web_development/Core/Challenges
---

本页针对 [CSS 样式处理基础](/zh-CN/docs/Learn_web_development/Core/Styling_basics)模块中提出的挑战提供了解决方案。这些并非唯一可能的解决方案。下面的章节与教程章节的标题相对应。

## SVG 和 CSS

### 改变内层花瓣的颜色

- 挑战
  - : 更改样式表，当鼠标指针移到任何一片花瓣上时，内层花瓣都会变成粉红色，但不改变外层花瓣的工作方式。
- 解决方案

  - : 将 :hover 伪类的位置从特定花瓣移动到所有花瓣

    ```css
    #inner-petals {
      --segment-fill-fill-hover: pink;
    }

    /* 一些老旧浏览器的非标准方法 */
    #inner-petals:hover .segment-fill {
      fill: pink;
      stroke: none;
    }
    ```
