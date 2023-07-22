---
title: ":-moz-focusring"
slug: conflicting/Web/CSS/:focus-visible
original_slug: Web/CSS/:-moz-focusring
---

{{Non-standard_header}}{{CSSRef}}

**`:-moz-focusring`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、 {{cssxref(":focus")}} 擬似クラスに似ていますが、現在フォーカスが当たっていて、*かつ*フォーカスリングやその他のインジケーターがその周りに描かれる場合のみ一致します。

> **メモ:** このセレクターは CSS Selectors 4 仕様で {{cssxref(":focus-visible")}} に改名されました。

`:-moz-focusring` に一致すると `:focus` にも一致しますが、逆は常に成り立つとは限りません。{{glossary("user agent", "ユーザーエージェント")}}がフォーカスリングの描画を有効にしているかどうか、どのようにして要素にフォーカスが当たったかによります。ユーザーエージェントがフォーカスリングの描画を有効にしているかどうかは、オペレーティングシステムの設定やその他の要因によりますので、この擬似クラスの詳細な動きはプラットフォームごとに異なります。

作業グループは以前、[この機能を CSS Selectors 4 または 5 で](https://lists.w3.org/Archives/Public/www-style/2015Oct/0012.html) `:focus-ring` として追加する意向を持っており、[改名が決定され](https://lists.w3.org/Archives/Public/www-style/2017Dec/0018.html) {{cssxref(":focus-visible")}} となり、 CSS Selectors 4 に追加されました。

> **メモ:** 開発者は `:-moz-focusring` を、 `focus` 状態がユーザーによる**マウスのクリック**と**キーボードのタブ移動**のどちらで行なわれたのかを区別するために使う傾向があります。これは[カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)を作成し、振る舞いに応じてスタイルを変更したい場合にも便利かもしれません。

## 構文

```css
:-moz-focusring
```

## 例

### HTML

```html
<input />
```

### CSS

```css
input {
  margin: 5px;
}

:-moz-focusring {
  color: red;
  outline: 2px dotted green;
}
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":focus-visible")}}
- [Firefox バグ 418521](https://bugzil.la/418521)
