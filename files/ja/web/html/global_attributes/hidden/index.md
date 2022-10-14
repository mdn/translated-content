---
title: hidden
slug: Web/HTML/Global_attributes/hidden
---

{{HTMLSidebar("Global_attributes")}}

**`hidden`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は、要素はまだ、あるいはもはや*関連性*がないことを示す論理型属性です。例えば、ログインのプロセスが完了するまで使えない要素を隠すために使用できます。ブラウザーは、 `hidden` 属性を設定している要素を表示しません。

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

`hidden` 属性は、 1 つの表現方法からのみコンテンツを隠す目的で使用してはいけません。何かが hidden とマークされている場合、それは、例えば読み上げアプリを含むすべての表現方法から隠されます。

隠された要素は隠されていない要素からリンクするべきではありません。隠された要素の子孫である要素はまだアクティブであり、スクリプト要素はまだ実行でき、フォーム要素はまだ送信できることを意味します。しかし、要素とスクリプトは、他の文脈で隠された要素を参照することがあります。

例えば、 `href` 属性を使用して `hidden` 属性が設定された部分にリンクを張るのは不適切です。コンテンツが利用できないか無関係ならば、リンクする理由がないからです。

しかし、 ARIA の `aria-describedby` 属性を使って隠された要素の記述を参照することは良いことです。記述を隠すことは、それ自身では役に立たないことを意味しますが、記述された要素から参照される特定の文脈に限っては有用であるように記述することができます。

同様に、 canvas 要素に `hidden` 属性をつけたものはオフスクリーンバッファーとしてグラフィックエンジンを記述することができますし、フォーム制御では hidden のフォーム要素をフォーム属性を使用して参照することができます。

> **メモ:** `hidden` 属性を持つ要素について、 CSS の {{cssxref("display")}} プロパティの値を変更すると、挙動を上書きします。例えば `display: flex` を設定した要素は、 `hidden` 属性が存在しても表示されます。

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考                                                                                          |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#the-hidden-attribute", "hidden")}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。                  |
| {{SpecName('HTML WHATWG', "rendering.html#hiddenCSS", "Hidden elements")}}     | {{Spec2('HTML WHATWG')}} | CSS による `hidden` 属性のデフォルトレンダリング方法の案を定義                                |
| {{SpecName('HTML5.1', "editing.html#the-hidden-attribute", "hidden")}}             | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}} のスナップショットであり、この属性を初めて定義しました。 |

## ブラウザーの互換性

{{Compat("html.global_attributes.hidden")}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- [`aria-hidden` 属性](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute)
