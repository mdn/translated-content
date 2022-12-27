---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} 要素の **`reset`** 型はボタンとして表示され、既定の {{domxref("Element/click_event", "click")}} イベントのハンドラーは、フォーム内の入力欄すべてを初期値にリセットします。

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> **メモ:** 通常、フォームにリセットボタンを配置するべきではありません。このようなボタンは便利なものではなく、間違ってボタンをクリックしてしまったユーザーをイライラさせる可能性が高くなります ([送信ボタン](/ja/docs/Web/HTML/Element/input/submit)をクリックしようとしているときにクリックしてしまうことが多いです)。

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">値</a></strong>
      </td>
      <td>ボタンのラベルとして使用する {{domxref("DOMString")}}</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("type", "input")}} および
        {{htmlattrxref("value", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>なし</td>
    </tr>
  </tbody>
</table>

## 値

`<input type="reset">` 要素の {{htmlattrxref("value", "input")}} 属性は、ボタンのラベルとして表示される {{domxref("DOMString")}} を示します。 `reset` などのボタンは他の値を持ちません。

```html
<input type="reset" value="フォームをリセット">
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

`value` を指定しなかった場合は、既定のラベルが付いたボタンが表示されます (通常は「リセット」ですが、{{Glossary("user agent", "ユーザーエージェント")}}によって異なります)。

```html
<input type="reset">
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## リセットボタンの使用

`<input type="reset">` ボタンはフォームをリセットするために使用されます。独自のボタンを作成して JavaScript を使用してカスタマイズしたいのであれば、 [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button) またはよりよい {{htmlelement("button")}} 要素を使用してください。

### 単純なリセットボタン

単純なリセットボタンを作成するところから始めましょう。

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="フォームをリセット">
  </div>
</form>
```

次のように表示されます。

{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}

テキストフィールドにいくらかテキストを入力してから、リセットボタンを押してみてください。

### リセットのショートカットキーの追加

リセットボタンにショートカットキーを追加するには — あらゆる {{HTMLElement("input")}} で通用する方法としてと — グローバル属性の {{htmlattrxref("accesskey")}} を使用します。

この例では、 <kbd>r</kbd> がアクセスキーとして指定されます (<kbd>r</kbd> はブラウザーや OS の組み合わせによる特定の修飾キーを押しながら押す必要があります {{htmlattrxref("accesskey")}} に有益なリストがあります)。

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="Reset the form"
     accesskey="r">
  </div>
</form>
```

{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}

上記の例の問題点は、アクセスキーが何であるかをユーザーが知る方法がないことです。これは特に、一般的には競合を避けるために修飾キーが標準的ではないために特に問題になります。サイトを構築する際には、サイトデザインの邪魔にならないような方法でこの情報を提供するようにしてください (例えば、サイトのアクセスキーについての情報を指す簡単にアクセスできるリンクを提供するなど)。ボタンにツールチップを追加する ({{htmlattrxref("title")}} 属性を使う) ことも役立ちますが、アクセシビリティのためには完全な解決策ではありません。

### リセットボタンの無効化と有効化

リセットボタンを無効化するには、以下のようにグローバル属性の {{htmlattrxref("disabled")}} を指定するだけです。

```html
<input type="reset" value="Disabled" disabled>
```

実行時に `disabled` を `true` または `false` に設定することで、ボタンを有効化したり無効化したりすることができます。 JavaScript では、これは `btn.disabled = true` や `btn.disabled = false` のようになります。

> **メモ:** ボタンの有効化や無効化についてのより詳しい情報は、 [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button#Disabling_and_enabling_a_button) のページを参照してください。

## 検証

ボタンは制約の検証には関係しません。制約を受ける実際の値を持っていません。

## 例

上記に簡単な例を挙げました。リセットボタンについては、これ以上言うことはありません。

## 仕様書

| 仕様書                                                                                                                                   | 状態                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#reset-button-state-(type=reset)', '&lt;input type="reset"&gt;')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5 W3C', 'forms.html#reset-button-state-(type=reset)', '&lt;input type="reset"&gt;')}} | {{Spec2('HTML5 W3C')}}     |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス
- [フォームとボタン](/ja/docs/Learn/Forms/Basic_native_form_controls#Actual_buttons)
- [フォーム (アクセシビリティ)](/ja/docs/Web/Accessibility/ARIA/forms)
- [HTML フォーム](/ja/docs/Learn/HTML/Forms)
- {{HTMLElement("button")}} 要素
- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
