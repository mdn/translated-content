---
title: class
slug: Web/HTML/Global_attributes/class
---

{{HTMLSidebar("Global_attributes")}}

**`class`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は、要素のクラスを空白区切りで並べたリストで、大文字小文字を区別します。クラスは CSS の [クラスセレクター](/ja/docs/Web/CSS/Class_selectors) や JavaScript の DOM メソッド {{domxref("document.getElementsByClassName")}} といった関数により、特定の要素を選択したり特定の要素にアクセスしたりすることを可能にします。

{{EmbedInteractiveExample("pages/tabbed/attribute-class.html","tabbed-standard")}}

仕様書ではクラス名の要件を示していませんが、ウェブ開発者は要素の外見ではなく、意味論的な目的を表す名前を使用することが推奨されます。例えば、あるクラスの要素が*斜体*で表示されるとしても、クラス名は*斜体*であることではなく*特性*を表すようにします。意味論的な名前は、ページの外見を変更した場合でも論理的であり続けます。

## 仕様書

| 仕様書                                                                               | 状態                             | 備考                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "elements.html#classes", "class")}}     | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。                                                                                                                                                                                                                                                          |
| {{SpecName('HTML5.1', "elements.html#classes", "class")}}         | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}} のスナップショットであり、{{SpecName('HTML5 W3C')}} から変更はありません。                                                                                                                                                                                                                |
| {{SpecName('HTML5 W3C', "elements.html#classes", "class")}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName('HTML WHATWG')}} のスナップショット。`class` 属性は、{{SpecName('HTML4.01')}} よりも真にグローバルな属性になりました。                                                                                                                                                                                    |
| {{SpecName('HTML4.01', "struct/global.html#h-7.5.2", "class")}} | {{Spec2('HTML4.01')}}     | {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}} 以外の要素で対応 |

## ブラウザーの互換性

{{Compat("html.global_attributes.class")}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref('element.className')}}
- {{domxref('element.classList')}}
- [CSS 入門](/ja/docs/Learn/CSS/)
