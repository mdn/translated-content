---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`reset`** 型はボタンとして表示され、既定の {{domxref("Element/click_event", "click")}} イベントのハンドラーは、フォーム内の入力欄すべてを初期値にリセットします。

{{InteractiveExample("HTML Demo: &lt;input type=&quot;reset&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<form>
  <div class="controls">
    <label for="id">User ID:</label>
    <input type="text" id="id" name="id" />

    <input type="reset" value="Reset" />
    <input type="submit" value="Submit" />
  </div>
</form>
```

```css interactive-example
.controls {
  padding-top: 1rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 2fr;
  gap: 0.7rem;
}

label {
  font-size: 0.8rem;
  justify-self: end;
}

input[type="reset"],
input[type="submit"] {
  width: 5rem;
  justify-self: end;
}

input[type="reset"] {
  grid-column: 2;
  grid-row: 2;
}

input[type="submit"] {
  grid-column: 2;
  grid-row: 3;
}
```

> [!NOTE]
> 通常、フォームにリセットボタンを配置するべきではありません。このようなボタンは便利なものではなく、間違ってボタンをクリックしてしまったユーザーをイライラさせる可能性が高くなります（[送信ボタン](/ja/docs/Web/HTML/Element/input/submit)をクリックしようとしているときにクリックしてしまうことが多いです）。

## 値

`<input type="reset">` 要素の [`value`](/ja/docs/Web/HTML/Element/input#value) 属性は、ボタンのラベルとして表示される文字列を示します。 `reset` などのボタンは他の値を持ちません。 `value` はボタンの{{glossary("Accessible description", "アクセシブル説明")}}を指定します。

### value 属性の設定

```html
<input type="reset" value="フォームをリセット" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### value 属性の省略

`value` を指定しなかった場合は、既定のラベルが付いたボタンが表示されます（通常は「リセット」ですが、{{Glossary("User agent", "ユーザーエージェント")}}によって異なります）。

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## リセットボタンの使用

`<input type="reset">` ボタンはフォームをリセットするために使用されます。独自のボタンを作成して JavaScript を使用してカスタマイズしたいのであれば、 [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button) またはよりよい {{htmlelement("button")}} 要素を使用してください。

### 基本的なリセットボタン

基本的なリセットボタンを作成するところから始めましょう。

```html
<form>
  <div>
    <label for="example">何かテキストの例を入力してください</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="フォームをリセット" />
  </div>
</form>
```

次のように表示されます。

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

テキストフィールドにいくらかテキストを入力してから、リセットボタンを押してみてください。

### リセットのショートカットキーの追加

リセットボタンにショートカットキーを追加するには — あらゆる {{HTMLElement("input")}} で通用する方法としてと — グローバル属性の [`accesskey`](/ja/docs/Web/HTML/Global_attributes/accesskey) を使用します。

この例では、 <kbd>r</kbd> がアクセスキーとして指定されます (<kbd>r</kbd> はブラウザーや OS の組み合わせによる特定の修飾キーを押しながら押す必要があります [`accesskey`](/ja/docs/Web/HTML/Global_attributes/accesskey) に有益なリストがあります)。

```html
<form>
  <div>
    <label for="example">何かテキストの例を入力してください</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="フォームをリセット" accesskey="r" />
  </div>
</form>
```

{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}

上記の例の問題点は、アクセスキーが何であるかをユーザーが知る方法がないことです。これは特に、一般的には競合を避けるために修飾キーが標準的ではないために特に問題になります。サイトを構築する際には、サイトデザインの邪魔にならないような方法でこの情報を提供するようにしてください（例えば、サイトのアクセスキーについての情報を指す簡単にアクセスできるリンクを提供するなど）。ボタンにツールチップを追加する（[`title`](/ja/docs/Web/HTML/Global_attributes/title) 属性を使う）ことも役立ちますが、アクセシビリティのためには完全な解決策ではありません。

### リセットボタンの無効化と有効化

リセットボタンを無効化するには、以下のようにグローバル属性の [`disabled`](/ja/docs/Web/HTML/Element/input#disabled) を指定するだけです。

```html
<input type="reset" value="Disabled" disabled />
```

実行時に `disabled` を `true` または `false` に設定することで、ボタンを有効化したり無効化したりすることができます。 JavaScript では、これは `btn.disabled = true` や `btn.disabled = false` のようになります。

> [!NOTE]
> ボタンの有効化や無効化についてのより詳しい情報は、 [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button#ボタンの無効化と有効化) のページを参照してください。

## 検証

ボタンは制約の検証には関係しません。制約を受ける実際の値を持っていません。

## 例

上記に簡単な例を挙げました。リセットボタンについては、これ以上言うことはありません。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>ボタンのラベルとして使用する文字列</td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Element/input#type"><code>type</code></a> および
        <a href="/ja/docs/Web/HTML/Element/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>なし</td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} およびそれが実装している {{domxref("HTMLInputElement")}} インターフェイス
- [フォームとボタン](/ja/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#実際のボタン)
- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("button")}} 要素
