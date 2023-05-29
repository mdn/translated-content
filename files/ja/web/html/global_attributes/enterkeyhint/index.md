---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`enterkeyhint`** は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、属性であり、仮想キーボードの \[Enter] キーにどのようなアクションラベル（またはアイコン）を表示するかを定義する[列挙型](/ja/docs/Glossary/Enumerated)属性です。

{{EmbedInteractiveExample("pages/tabbed/attribute-enterkeyhint.html","tabbed-shorter")}}

## 解説

[フォームコントロール](/ja/docs/Learn/Forms)（[`<textarea>`](/ja/docs/Web/HTML/Element/textarea) や [`<input>`](/ja/docs/Web/HTML/Element/input) 要素など）や [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) を使用している要素は、
[`inputmode`](/ja/docs/Web/HTML/Global_attributes/inputmode) 属性を指定して、どのような仮想キーボードを使用するかを制御することができます。さらに使い勝手を向上させるために、 \[Enter] キーをどのようにラベル付けするか （またはどのアイコンを表示するか） を示す `enterkeyhint` 属性を指定することで、\[Enter] キーを特別にカスタマイズすることができます。\[Enter] キーは通常、ユーザーが次に何をすべきかを表します。よくある操作としては、テキストの送信、改行の挿入、検索などがあります。

もし `enterkeyhint` 属性が指定されなければ、ユーザーエージェントは [`inputmode`](/ja/docs/Web/HTML/Global_attributes/inputmode), [`type`](/ja/docs/Web/HTML/Element/input#input_types), [`pattern`](/ja/docs/Web/HTML/Element/input#pattern) 属性から文脈に合った情報を得て、適した \[Enter] キーのラベル（またはアイコン）を表示するかもしれません。

### 値

`enterkeyhint` 属性は[列挙型](/ja/docs/Glossary/Enumerated)属性で、以下の値のみを受け入れることができます。

<table class="no-markdown">
  <thead>
    <tr>
      <th>値</th>
      <th>説明</th>
      <th>ラベルの例（ユーザーエージェントとユーザーの言語に依存）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>ふつうは改行を挿入します。</td>
      <td><kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>
        通常、それ以上のことは入力できず、インプットメソッドエディター (IME) が閉じられることを意味します。
      </td>
      <td><kbd>完了</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>
        一般的に、ユーザーが入力したテキストのターゲットに移動することを意味しています。
      </td>
      <td><kbd>開く</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>
        通常、ユーザーをテキストを受け入れる次のフィールドへ導きます。
      </td>
      <td><kbd>次へ</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>
        通常、ユーザーをテキストを受け入れる前のフィールドへ導きます。
      </td>
      <td><kbd>前へ</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>
        通常、ユーザーを入力したテキストを検索した結果へ導きます。
      </td>
      <td><kbd>検索</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>通常、このテキストをターゲットに配信します。</td>
      <td><kbd>送信</kbd></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`HTMLElement.enterKeyHint`](/ja/docs/Web/API/HTMLElement/enterKeyHint) プロパティはこの属性を反映します
- [`inputmode`](/ja/docs/Web/HTML/Global_attributes/inputmode) グローバル属性
- [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) グローバル属性
- [`type`](/ja/docs/Web/HTML/Element/input#input_types) および
  [`pattern`](/ja/docs/Web/HTML/Element/input#pattern) 属性（[`<input>`](/ja/docs/Web/HTML/Element/input) 要素）
