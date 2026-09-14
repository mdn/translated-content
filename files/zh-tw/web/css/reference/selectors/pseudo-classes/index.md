---
title: 虛擬類別
slug: Web/CSS/Reference/Selectors/Pseudo-classes
---

CSS **虛擬類別**（pseudo-class）的元素，在特殊狀態下被選取的話，會作為關鍵字被加到選擇器裡面。例如 {{ Cssxref(":hover") }} 會讓用戶的滑鼠停在某個元素的時候，套用指定選擇器的樣式。

虛擬類別與 {{ Cssxref("pseudo-elements") }} 能讓你不只能給文件樹（document tree）本身的相關內容套用樣式，還能給諸如瀏覽歷史（{{ cssxref(":visited") }}）、內容的狀態（{{ cssxref(":checked") }}）、還有滑鼠的位置（像 {{ cssxref(":hover") }} 就能讓偵測滑鼠是否在元件上）之類的外部相關因素套用樣式。

## 語法

```css
selector:pseudo-class {
  property: value;
}
```

## 基本虛擬類別的目錄

- {{ Cssxref(":active") }}
- {{ cssxref(':any')}}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":default") }}
- {{ Cssxref(":dir", ":dir()")}}
- {{ Cssxref(":disabled") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":first") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":fullscreen") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":indeterminate") }}
- {{ Cssxref(":in-range") }}
- {{ Cssxref(":invalid") }}
- {{ Cssxref(":lang", ":lang()") }}
- {{ Cssxref(":last-child") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":left") }}
- {{ Cssxref(":link") }}
- {{ Cssxref(":not", ":not()") }}
- {{ Cssxref(":nth-child", ":nth-child()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":only-child") }}
- {{ Cssxref(":only-of-type") }}
- {{ Cssxref(":optional") }}
- {{ Cssxref(":out-of-range") }}
- {{ Cssxref(":read-only") }}
- {{ Cssxref(":read-write") }}
- {{ Cssxref(":required") }}
- {{ Cssxref(":right") }}
- {{ Cssxref(":root") }}
- {{ Cssxref(":scope") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":valid") }}
- {{ Cssxref(":visited") }}

## 規範

{{Specifications}}

## 參閱

- {{ Cssxref("pseudo-elements") }}
