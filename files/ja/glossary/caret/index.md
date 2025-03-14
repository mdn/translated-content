---
title: caret (キャレット)
slug: Glossary/Caret
---

{{GlossarySidebar}}

**キャレット** (テキストカーソルとも呼ばれる) は、テキスト入力が挿入される場所を示すために画面に表示されるインジケーターです。 ほとんどのユーザーインターフェイスは、細い縦線または点滅する文字サイズの四角形を使用してキャレットを表しますが、これはさまざまです。 テキスト内のこの位置は**挿入位置**と呼ばれます。「キャレット」という単語は、テキストの挿入位置をマウスカーソル (マウスポインター) と区別するためのものです。

ウェブ上では、{{HTMLElement("input")}} 要素と {{HTMLElement("textarea")}} 要素と、[`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) 属性が設定されている要素の挿入位置を表すためにキャレットが使用され、要素の内容をユーザーが編集できるようにします。

## より詳しく知る

### 一般知識

- Wikipedia 上の [Caret navigation](https://en.wikipedia.org/wiki/Caret_navigation)（英語）
- Wikipedia 上の [キャレット](https://ja.wikipedia.org/wiki/キャレット)

### キャレットに関連する CSS

要素の CSS の {{cssxref("caret-color")}} プロパティを適切な {{cssxref("&lt;color&gt;")}} 値に設定することで、特定の要素の編集可能なコンテンツのキャレットの色を設定できます。

### キャレットを表示する HTML 要素

これらの要素はテキスト入力フィールドまたはボックスを提供し、したがってキャレットを使用します。

- [`<input type="text">`](/ja/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/ja/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/ja/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/ja/docs/Web/HTML/Element/input/date), [`<input type="time">`](/ja/docs/Web/HTML/Element/input/time), [`<input type="datetime">`](/ja/docs/Web/HTML/Element/input/datetime-local), and [`<input type="datetime-local">`](/ja/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/ja/docs/Web/HTML/Element/input/number), [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/ja/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/ja/docs/Web/HTML/Element/input/tel), and [`<input type="url">`](/ja/docs/Web/HTML/Element/input/url)
- {{HTMLElement("textarea")}}
- [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) 属性が設定された要素
