---
title: StyleSheet.media
slug: Web/API/StyleSheet/media
---

{{APIRef("CSSOM")}}

## 概述

**media** specifies the intended destination medium for style information.

## 语法

```plain
medium = stylesheet.media
stylesheet.media =medium
```

## 参数

- `medium` is a string describing a single medium or a comma-separated list.

## 示例

```plain
<link rel="StyleSheet" href="document.css" type="text/css" media="screen" />
```

## 注意

The default value for media is "screen."

## Specification

DOM Level 2 Styles - STYLESHEET
