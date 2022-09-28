---
title: ime-mode
slug: Web/CSS/ime-mode
---

{{ CSSRef() }}

### 摘要

`ime-mode` 特性可用以控制某文字輸入欄位的輸入法狀態。

- {{ Xref_cssinitial() }}：{{ Cssxref("auto") }}
- 適用範圍：文字輸入欄位
- {{ Xref_cssinherited() }}: 不繼承
- 是否可標百分比：N/A
- 適用媒體：{{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}：

### 語法

```plain
ime-mode: <mode>
```

### 特性值

- `auto`
  - : 不改變輸入法狀態，此為預設值。
- `normal`
  - : 輸入法設為一般狀態，使用者可在自訂樣式表中蓋過網頁的設定。_Internet Explorer 不支援此值。_
- `active`
  - : 輸入法設為啟用狀態。除非使用者刻意關閉、否則此文字欄位將使用輸入法工具。_Linux 不支援此值。_
- `inactive`
  - : 輸入法設為關閉狀態，但使用者仍可另行啟用。_Linux 不支援此值。_
- `disabled`
  - : 輸入法設為停用狀態，在此欄位中使用者亦無法將其啟用。

### 範例

```plain
<input type="text" name="name" value="initial value" style="ime-mode: disabled">
```

此範例在輸入欄位中設定為停用輸入法，在後端資料庫不支援擴充字元集、卻必須讓使用者自行輸入文字時，可以使用。

### 備註

與 Internet Explorer 不同的地方是，Firefox 實作 `ime-mode` 時亦允許此特性套用至密碼輸入欄位，但這在理想的使用體驗上有不妥之處、而密碼欄位也應該停用輸入法。若有網站執意將不適切的行為套用至密碼欄位，則使用者可以在自訂 CSS 檔中加上下列設定以強迫調整此功能：

```css
input[type=password] {
  ime-mode: auto !important;
}
```

> **備註：** 一般說來，公開的網站不該自行調整輸入法模式的行為。這個特性主要是給網際應用程式使用的。

Mac 版的 Gecko 1.9 中，若某欄位設定停用輸入法，則自該欄位移開輸入焦點時並無法自行恢復輸入法狀態，所以若使用 `disabled` 值，Mac 的使用者可能會碰上麻煩。

> **備註：** 別僅僅仰賴停用輸入法的招術來避免使用者輸入擴充字元，因為即使輸入法被停用，使用者依然可自他處剪下擴充字元後貼到表單欄位中。

### 規格出處

- [微軟規格](https://msdn2.microsoft.com/en-us/library/ms533883.aspx)

### 瀏覽器相容性

Firefox 3 以後便能同 Internet Explorer 一般支援 `ime-mode` 特性。
