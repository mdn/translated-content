---
title: Window.directories
slug: orphaned/Web/API/Window/directories
original_slug: Web/API/Window/directories
---
{{ APIRef() }}

### 概述

用于返回 window 下的 personalbar toolbar 对象， 已经过时，请使用 {{ domxref("window.personalbar") }} 来代替该属性。

### 语法

```js
var dirBar = window.directories;
```

### 参数

_dirBar_ 是 `BarProp` 类型的对象。

### 例子

```
<script>
 function dirs() {
  alert(window.directories);
 }
</script>
```

### 规范

不属于任何规范。
