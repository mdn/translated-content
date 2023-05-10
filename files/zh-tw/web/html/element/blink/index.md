---
title: <blink>：文字閃爍元素（已過時）
slug: Web/HTML/Element/blink
---

{{Deprecated_header}}

非標準元素 **HTML Blink**（`<blink>`）可以讓該元素裡面的文字緩慢閃爍。

> **警告：** 不要使用這個元素，因為它已經**被棄用**，而且是糟糕的設計。無障礙標準不會接受閃爍文字、而 CSS 規範上允許瀏覽器忽略閃爍效果。

## DOM 介面

此元素並未被支援，因此是透過 {{domxref("HTMLUnknownElement")}} 介面實做。

## 示例

```html
<blink>Why would somebody use this?</blink>
```

### 結果（已經過淡化！）

![Image:HTMLBlinkElement.gif](htmlblinkelement.gif)

## 規範

此元素並非標準元素，也不屬於任何規範。不信的話，[你自己來看 HTML 規範](http://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#non-conforming-features)。

## CSS Polyfill

如果真的需要 polyfill，請使用以下的 CSS。它支援 IE10 以上。

```html
blink {
    -webkit-animation: 2s linear infinite condemned_blink_effect; // for android
    animation: 2s linear infinite condemned_blink_effect;
}
@-webkit-keyframes condemned_blink_effect { // for android
    0% {
        visibility: hidden;
    }
    50% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
}
@keyframes condemned_blink_effect {
    0% {
        visibility: hidden;
    }
    50% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
}
```

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTML `<blink>` 元素的創建史](http://www.montulli.org/theoriginofthe%3Cblink%3Etag)。
- {{cssxref("text-decoration")}}，儘管有 blink 值，多數瀏覽器並不需要實做閃爍效果。
- {{htmlelement("marquee")}}，類似的非標準元素。
- [CSS 動畫](/zh-TW/docs/Web/Guide/CSS/Using_CSS_animations)能得出與此元素相同的效果。

{{HTMLSidebar}}
