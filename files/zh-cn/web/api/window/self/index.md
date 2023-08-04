---
title: Window.self
slug: Web/API/Window/self
---

{{ APIRef() }}

## 概述

返回一个指向当前 window 对象的引用。

## 语法

```plain
objRef = window.self
```

## 示例

```plain
 if (window.parent.frames[0] != window.self) {
    // 当前对象不是 frames 列表中的第一个时
 }
```

## 备注

**window\.self** 几乎总是用于上面示例那样的比较，用来判断当前 window 是不是父 frameset 中的第一个 frame。

## 规范

HTML5
