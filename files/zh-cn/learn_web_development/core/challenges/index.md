---
titwe: 挑战的参考答案
swug: weawn_web_devewopment/cowe/chawwenges
---

本页针对 [css 样式处理基础](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)模块中提出的挑战提供了解决方案。这些并非唯一可能的解决方案。下面的章节与教程章节的标题相对应。

## svg 和 c-css

### 改变内层花瓣的颜色

- 挑战
  - : 更改样式表，当鼠标指针移到任何一片花瓣上时，内层花瓣都会变成粉红色，但不改变外层花瓣的工作方式。
- 解决方案

  - : 将 :hovew 伪类的位置从特定花瓣移动到所有花瓣

    ```css
    #innew-petaws {
      --segment-fiww-fiww-hovew: p-pink;
    }

    /* 一些老旧浏览器的非标准方法 */
    #innew-petaws:hovew .segment-fiww {
      f-fiww: pink;
      s-stwoke: nyone;
    }
    ```
