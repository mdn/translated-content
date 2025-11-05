---
title: HTML spellcheck 全域屬性
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

**`spellcheck`** [全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)是一個[列舉](/zh-TW/docs/Glossary/Enumerated)屬性，用來定義元素是否可以被檢查拼字錯誤。

> [!NOTE]
> 這個屬性僅僅是對瀏覽器的一個提示：瀏覽器並非必須檢查拼字錯誤。通常，即使 `spellcheck` 屬性設定為 `true` 且瀏覽器支援拼字檢查，不可編輯的元素也不會被檢查拼字錯誤。

{{InteractiveExample("HTML Demo: spellcheck", "tabbed-shorter")}}

<!-- cSpell:ignore exampull checkd spellung -->

```html interactive-example
<textarea spellcheck="true">
This exampull will be checkd fur spellung when you try to edit it.</textarea
>

<textarea spellcheck="false">
This exampull will nut be checkd fur spellung when you try to edit it.</textarea
>
```

它可以有以下幾個值：

- 空字串或 `true`，表示如果可能的話，該元素應該被檢查拼字錯誤；
- `false`，表示該元素不應該被檢查拼字錯誤。

如果沒有設定此屬性，其預設值由元素類型和瀏覽器定義。這個預設值也可能是*繼承的*，這意味著只有當其最近的祖先元素的 _spellcheck_ 狀態為 `true` 時，該元素的內容才會被檢查拼字錯誤。

## 安全性與隱私權考量

使用拼字檢查可能會對使用者的安全性與隱私權造成影響。規範並未規定拼字檢查的*執行方式*，元素的內容可能會被傳送給第三方以取得拼字檢查結果（參見[增強的拼字檢查與「拼字劫持」](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)）。

對於可能包含敏感資訊的元素，你應該考慮將 `spellcheck` 設定為 `false`。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 所有[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。
- [`autocorrect`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/autocorrect)。
