---
title: class
slug: Web/HTML/Global_attributes/class
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`class`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は、要素のクラスを空白区切りで並べたリストで、大文字小文字を区別します。クラスは CSS の [クラスセレクター](/ja/docs/Web/CSS/Class_selectors) や JavaScript の DOM メソッド {{domxref("document.getElementsByClassName")}} といった関数により、特定の要素を選択したり特定の要素にアクセスしたりすることを可能にします。

{{InteractiveExample("HTML Demo: class", "tabbed-standard")}}

```html interactive-example
<p>Narrator: This is the beginning of the play.</p>

<p class="note editorial">Above point sounds a bit obvious. Remove/rewrite?</p>

<p>Narrator: I must warn you now folks that this beginning is very exciting.</p>

<p class="note">[Lights go up and wind blows; Caspian enters stage right]</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255, 0, 0, 0.25);
  padding: 10px;
}

.editorial:before {
  content: "Editor: ";
}
```

仕様書ではクラス名の要件を示していませんが、ウェブ開発者は要素の外見ではなく、意味論的な目的を表す名前を使用することが推奨されます。例えば、あるクラスの要素が _イタリック体_ で表示されるとしても、クラス名は _attribute_ の方が _italics_ よりも属性を説明します。意味論的な名前は、ページの外見を変更した場合でも論理的であり続けます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref('element.className')}}
- {{domxref('element.classList')}}
- [CSS 入門](/ja/docs/Learn/CSS)
