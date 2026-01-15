---
title: :default
slug: Web/CSS/Reference/Selectors/:default
original_slug: Web/CSS/:default
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`:default`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、関連する要素のグループ内で既定となっているフォーム上の要素を選択します。

{{InteractiveExample("CSS デモ: :default", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

input:default {
  border: none;
  outline: 2px solid deeppink;
}
```

```html-nolint interactive-example
<form>
  <p>どのように私たちを知りましたか？</p>
  <label
    ><input name="origin" type="radio" value="google" checked /> Google</label
  >
  <label><input name="origin" type="radio" value="facebook" /> Facebook</label>
  <p>利用規約に同意してください。</p>

  <label
    ><input name="newsletter" type="checkbox" checked /> パーソナライズされたニュースレターを購読したいです。</label
  >

  <label
    ><input name="privacy" type="checkbox" />プライバシーポリシーをを読み、同意します。</label
  >

  <input type="submit" value="送信フォーム" />
</form>
```

このセレクターが何に一致するかについては、 [HTML Standard §4.16.3 Pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) で定義されています。 — {{htmlelement("button")}}、[`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)、[`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio)、{{htmlelement("option")}} 要素に一致させることができます。

- 既定の option 要素は `selected` 属性が付いた最初のもの、または DOM 順で最初の有効な選択肢です。 `multiple` が付いた {{htmlelement("select")}} は、複数の `selected` がついた選択肢を持つことができますので、すべてが `:default` に一致します。
- `<input type="checkbox">` と `<input type="radio">` は `checked` 属性があるときに一致します。
- {{htmlelement("button")}} は {{htmlelement("form")}} の [既定の送信ボタン](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission)である場合に一致します。フォームに所属する `<button>` のうち、 DOM 順で最初のものです。これはフォームを送信する {{htmlelement("input")}} 型、例えば `image` または `submit` にも適用されます。

## 構文

```css
:default {
  /* ... */
}
```

## 例

### HTML

```html
<fieldset>
  <legend>好きな季節</legend>

  <input type="radio" name="season" id="spring" value="spring" />
  <label for="spring">春</label>

  <input type="radio" name="season" id="summer" value="summer" checked />
  <label for="summer">夏</label>

  <input type="radio" name="season" id="fall" value="fall" />
  <label for="fall">秋</label>

  <input type="radio" name="season" id="winter" value="winter" />
  <label for="winter">冬</label>
</fieldset>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/Learn_web_development/Extensions/Forms)
- [ウェブフォームのスタイル付け](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- 関連する HTML 要素: {{htmlelement("button")}}, [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio), {{htmlelement("option")}}
