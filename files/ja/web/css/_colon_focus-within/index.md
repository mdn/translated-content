---
title: ":focus-within"
slug: Web/CSS/:focus-within
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{CSSRef}}

**`:focus-within`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、その要素または子孫要素にフォーカスがある場合に一致します。言い換えれば、それ自身が {{CSSxRef(":focus")}} 擬似クラスに該当するか、子孫に `:focus` に該当する要素がある要素を表します。（これは[シャドウツリー](/ja/docs/Web/API/Web_components/Using_shadow_DOM)における子孫も含みます。）

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-within.html", "tabbed-shorter")}}

このセレクターは、よくある例のように、 {{HTMLElement("input")}} 欄の一つにユーザーがフォーカスを置いたときに、それを含む {{HTMLElement("form")}} 全体を強調する場合に便利です。

## 構文

```css
:focus-within {
  /* ... */
}
```

## 例

この例では、何れかの入力欄にフォーカスが当たった時、特殊な色のスタイルにします。

### HTML

```html
<p>このフォームに入力してみてください。</p>

<form>
  <label for="given_name">名前:</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">苗字:</label>
  <input id="family_name" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### 結果

{{EmbedLiveSample("Examples", 500, 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- [Grab your user's attention with the focus-within selector](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
