---
title: window.onreset
slug: conflicting/Web/API/HTMLFormElement/reset_event
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Window
translation_of: Web/API/GlobalEventHandlers/onreset
original_slug: Web/API/GlobalEventHandlers/onreset
---
{{ApiRef}}

## 概要

フォームの `reset` イベントに対応するイベントハンドラです。

## 構文

```
window.onreset = funcRef;
```

### 引数

- _funcRef_ : 関数への参照、または関数式

## 例

```html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<title>onreset のテスト</title>

<script>
function reg() {
  window.onreset = hit;
}

function hit() {
 alert('リセットイベントが発生しました。');
}
</script>

</head>
<body onload="reg();">

<form>
  <div>
    <textarea></textarea>
  </div>
  <div>
    <input type="reset" value="reset" />
  </div>
</form>

</body>
</html>
```

## 注記

reset イベントは、ユーザがフォーム内のリセットボタン (`<input type="reset"/>`) をクリックした際に発生します。

## 仕様

標準仕様書には含まれていません。
