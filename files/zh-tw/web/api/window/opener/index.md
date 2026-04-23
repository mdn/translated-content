---
title: Window：opener 屬性
slug: Web/API/Window/opener
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

{{domxref("Window")}} 介面的 **`opener`** 屬性會回傳開啟目前視窗的視窗參考，開啟方式可能是透過 {{domxref("Window.open", "open()")}}，或是導覽具有 [`target`](/zh-TW/docs/Web/HTML/Reference/Elements/a#target) 屬性的連結。

換句話說，如果視窗 `A` 開啟了視窗 `B`，`B.opener` 會回傳 `A`。

## 值

一個類 {{domxref("Window")}} 物件，參考了開啟目前視窗的視窗（使用 {{domxref("window.open()")}}，或透過設定了 [`target`](/zh-TW/docs/Web/HTML/Reference/Elements/a#target) 屬性的連結）。如果此視窗不是由另一個視窗連結或建立的，則回傳 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null)。

如果開啟者與目前頁面不同源，則 opener 物件的功能會受到限制。例如，無法存取視窗物件上的變數和函式。然而，可以導覽開啟者視窗，這表示被開啟的頁面可以在原始分頁或視窗中開啟一個 URL。在某些情況下，這可能導致網路釣魚攻擊，其中新開啟的頁面會將原始視窗中開啟的受信任頁面替換為釣魚頁面。

確切來說，對於跨來源的 opener 物件，可以使用以下屬性：

- {{domxref("Window.window", "window")}}
- {{domxref("Window.self", "self")}}
- {{domxref("Window.location", "location")}}：只有 {{domxref("Location.replace")}} 和 {{domxref("Location.href")}} 屬性可用
- {{domxref("Window.close", "close")}}
- {{domxref("Window.closed", "closed")}}
- {{domxref("Window.focus", "focus")}}
- {{domxref("Window.blur", "blur")}}
- {{domxref("Window.frames", "frames")}}
- {{domxref("Window.length", "length")}}
- {{domxref("Window.top", "top")}}
- `opener`
- {{domxref("Window.parent", "parent")}}
- {{domxref("Window.postMessage", "postMessage")}}
- `window[0]`、`window[1]` 等。

此外，還有一些屬性：[`then`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable)、{{jsxref("Symbol/toStringTag", "[Symbol.toStringTag]")}}、{{jsxref("Symbol/hasInstance", "[Symbol.hasInstance]")}}、{{jsxref("Symbol/isConcatSpreadable", "[Symbol.isConcatSpreadable]")}}，這些屬性被各種 JavaScript 操作使用。這些屬性的值為 `undefined`。存取所有其他屬性時會產生 `SecurityError` {{domxref("DOMException")}}。

在以下情況下，瀏覽器不會填入 `window.opener`，而是將其保留為 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null)：

- 可以透過在連結上指定 [`rel=noopener`](/zh-TW/docs/Web/HTML/Reference/Attributes/rel#noopener)，或在 {{domxref("Window.open", "windowFeatures")}} 參數中傳遞 `noopener` 來省略 opener。
- 因具有 `_blank` 的 [`target`](/zh-TW/docs/Web/HTML/Reference/Elements/a#target) 的連結而開啟的視窗不會獲得 `opener`，除非使用 [`rel=opener`](/zh-TW/docs/Web/HTML/Reference/Attributes/rel#opener) 明確要求。
- 具有值為 `same-origin` 的 {{HTTPHeader("Cross-Origin-Opener-Policy")}} 標頭會阻止設定 `opener`。由於新視窗是在不同的瀏覽情境中載入，因此它不會有對開啟視窗的參考。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
