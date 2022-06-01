---
title: セレクターリスト
slug: Web/CSS/Selector_list
tags:
  - CSS
  - セレクター
  - セレクターリスト
browser-compat: css.selectors.list
translation_of: Web/CSS/Selector_list
---
{{CSSRef}}

CSS の **セレクターリスト** (selector list) (`,`) は，すべての一致するノードを選択します。

```css
/* すべての一致する要素を選択 */
span,
div {
  border: red 2px solid;
}
```

スタイルシートの大きさを縮小するために、グループセレクターをカンマ区切りのリストにすることができます。

## 構文

```css
element, element, element { スタイルプロパティ }
```

## 例

### 単一行のグループ化

カンマ区切りのリストを使用して単一行にしたグループ化セレクターです。

```css
h1, h2, h3, h4, h5, h6 { font-family: helvetica; }
```

### 複数行のグループ化

カンマ区切りのリストを使用して複数行にしたグループ化セレクターです。

```css
#main,
.content,
article {
  font-size: 1.1em;
}
```

### セレクターリストの無効化

セレクターリストを使用する欠点は、以下のものが等価ではないことです。

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
h1, h2:maybe-unsupported, h3 { font-family: sans-serif }
```

これは、セレクターリスト内に未対応のセレクターが一つでもあった場合は、ルール全体が無効化されてしまうためです。

この対策方法としては、 {{CSSxRef(":is", ":is()")}} や {{CSSxRef(":where", ":where()")}} セレクターを使用すれば、セレクターリストを寛容に受け止めることができます。こうすると、リスト内の無効なセレクターは無視しますが、有効なセレクターは受け入れます。

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
:is(h1, h2:maybe-unsupported, h3) { font-family: sans-serif }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- The {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} および {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} 擬似クラスは、セレクターリストを寛容に受け入れます。
