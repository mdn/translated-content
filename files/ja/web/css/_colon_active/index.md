---
title: ":active"
slug: Web/CSS/:active
---

{{CSSRef}}

**`:active`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、ユーザーによってアクティブ化されている要素 (ボタンなど) を表します。マウスを使用する場合は、「アクティブ化」とはふつう、主ボタンを押し下げたときに始まります。

```css
/* アクティブ化されている <a> をすべて選択します */
a:active {
  color: red;
}
```

`:active` 擬似クラスは、 {{HTMLElement("a")}} および {{HTMLElement("button")}} 要素で使われます。この擬似クラスで他のよくあるターゲットとしては、アクティブ化される要素を*含む*要素や、関連付けられた {{HTMLElement("label")}} 要素を通してアクティブ化されるフォーム要素です。

`:active` 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス （{{cssxref(":link")}}、{{cssxref(":hover")}}、 {{cssxref(":visited")}}）によって上書きされます。適切にリンクにスタイルを適用するには、 _LVHA 順_: `:link` — `:visited` — `:hover` — `:active` で定義されるように、他のすべてのリンク関連ルールの後に `:active` ルールを置いてください。

> **メモ:** 複数ボタンのマウスを使うシステムでは、 CSS 3 は `:active` 擬似クラスは主ボタン、つまり右手用のマウスではふつう最も左のボタンにのみ適用しなければならないと定義しています。

## 構文

```
:active
```

## 例

### アクティブなリンク

#### HTML

```html
<p>
  この段落にはリンクが含まれています。
  <a href="#">このリンクはクリックすると赤色になります。</a>
  この段落は段落やリンクをクリックすると灰色になります。
</p>
```

#### CSS

```css
a:link {
  color: blue;
} /* 未訪問リンク */
a:visited {
  color: purple;
} /* 訪問済みリンク */
a:hover {
  background: yellow;
} /* ホバー時 */
a:active {
  color: red;
} /* アクティブなリンク */

p:active {
  background: #eee;
} /* アクティブな段落 */
```

#### 結果

{{EmbedLiveSample('Active_links')}}

### フォーム要素をアクティブ化

#### HTML

```html
<form>
  <label for="my-button">ボタン: </label>
  <button id="my-button" type="button">
    ここかラベルをクリックしてみてください。
  </button>
</form>
```

#### CSS

```css
form :active {
  color: red;
}

form button {
  background: white;
}
```

#### 結果

{{EmbedLiveSample('Active_form_elements')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- リンク関連の擬似クラス: {{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":hover")}}
