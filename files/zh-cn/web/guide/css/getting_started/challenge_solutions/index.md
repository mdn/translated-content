---
title: 挑战的参考答案
slug: Web/Guide/CSS/Getting_started/Challenge_solutions
---

## SVG 和 CSS

### 改变内层花瓣的颜色

- 挑战
  - : 修改样式表使得当鼠标指针移到任何一个内层花瓣上时所有内层花瓣都变为粉色，但不改变外层花瓣的效果。
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
