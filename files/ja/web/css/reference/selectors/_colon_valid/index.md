---
title: CSS `:valid` 擬似クラス
short-title: :valid
slug: Web/CSS/Reference/Selectors/:valid
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:valid`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、{{htmlelement("input")}} 要素 やその他の {{HTMLElement("form")}} 要素のうち、コンテンツの[検証](/ja/docs/Web/HTML/Guides/Constraint_validation) に成功したものを表します。これにより、有効な入力欄に、データの形式が適切であることをユーザーが確認しやすくなる外観を簡単に適用できるようになります。

{{InteractiveExample("CSS デモ: :valid", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid {
  background-color: ivory;
  border: none;
  outline: 2px solid deepskyblue;
  border-radius: 5px;
  accent-color: gold;
}
```

```html-nolint interactive-example
<form>
  <label for="email">メールアドレス:</label>
  <input id="email" name="email" type="email" value="na@me@example.com" />

  <label for="secret">秘密のコード: (英小文字)</label>
  <input id="secret" name="secret" type="text" value="test" pattern="[a-z]+" />

  <label for="age">年齢: (18 歳以上)</label>
  <input id="age" name="age" type="number" value="5" min="18" />

  <label
    ><input name="tos" type="checkbox" required checked /> - 規約に同意しますか？</label
  >
</form>
```

この擬似クラスは、入力値が正しい入力欄をユーザーに強調表示するのに便利です。

## 構文

```css
:valid {
  /* ... */
}
```

## アクセシビリティ

入力が有効であることを示す際、一般的に緑色が使用されます。特定の種類の色覚異常のある人は、色に頼らずに意味を伝える追加の指標が併記されていない限り、入力の状態を判断することができません。一般的には、説明文やアイコンなどが使用されます。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## 例

### 有効／無効なフォームフィールドを示す

この例では、有効なデータや無効なデータを示すコンテンツを生成するために、追加の `<span>` 要素を含めています。

```html
<form>
  <fieldset>
    <legend>フィードバックフォーム</legend>
    <p>「必須」とあるものは必須項目です。</p>
    <div>
      <label for="fname">苗字: </label>
      <input id="fname" name="fname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="lname">名前: </label>
      <input id="lname" name="lname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="email"> メールアドレス（返事が欲しい場合）: </label>
      <input id="email" name="email" type="email" />
      <span></span>
    </div>
    <div><button>送信</button></div>
  </fieldset>
</form>
```

これらの表示を提供するために、以下の CSS を使用します。

```css hidden
body {
  font-family: sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}

button,
label,
input {
  display: block;
  font-family: inherit;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "必須";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

生成されたコンテンツを相対的に配置できるように `<span>` を `position: relative` に設定します。そして、フォームのデータが有効か無効かに応じて、生成されるコンテンツを絶対位置指定で配置します。無効なデータには、さらに軽く緊急性を表すために、無効になったときに太い赤い枠線をつけています。

> [!NOTE]
> これらのラベルを追加するために `::before` を使ったのは、すでに `::after` を "required" ラベルに使っていたからです。

以下で試してみることができます。

{{EmbedLiveSample("indicating_valid_and_invalid_form_fields", "", 430)}}

必須のテキスト入力は、空の状態では無効ですが、何かが記入されている状態では有効であることに注意してください。一方、メールアドレスの入力は必須ではないため、空の場合は有効ですが、適切なメールアドレスでないものが含まれている場合は無効となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の検証関連の擬似クラス: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [フォームデータの検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- JavaScript からの[検証状態](/ja/docs/Web/API/ValidityState)へのアクセス
