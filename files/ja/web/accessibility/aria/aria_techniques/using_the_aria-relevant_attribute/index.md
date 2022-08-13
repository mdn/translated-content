---
title: aria-relevant 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute
tags:
  - ARIA
  - Accessibility
  - ariaLive
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute
---
[`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) 属性は、[`aria-live`](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) リージョンにどのような変更が生じたかを記述するために使用されるオプションの値で、関連性があり、アナウンスする必要があります。 関連性のない変更は、`aria-live` 属性が `off` に設定されている場合と同じように動作します。

`aria-relevant` は、ウェブページにページを表示中に更新される可能性のあるコンテンツが含まれている場合によく使用されます。

### 値

スペースで区切られた次の値の 1 つ以上のリスト。

- **"**`additions`" は、ライブリージョンにノードを挿入することです。 関連性があるとみなされるべきです。
- "`removals`" は、ノードの削除です。 関連性があるとみなされるべきです。
- **"**`text`" は、既存のノードのテキストコンテンツに対する変更です。 関連性があるとみなされるべきです。
- "`all`" は、"`additions removals text`" と同等です。

`aria-relevant="additions text"` は、ライブリージョンのデフォルト値です。

### その他のリソース

- [aria-relevant の WAI-ARIA 仕様](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant)（英語）
