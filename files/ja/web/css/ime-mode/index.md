---
title: ime-mode
slug: Web/CSS/ime-mode
tags:
  - CSS
  - CSS プロパティ
  - Deprecated
  - recipe:css-property
browser-compat: css.properties.ime-mode
translation_of: Web/CSS/ime-mode
---
{{CSSRef}} {{deprecated_header}}

**`ime-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストフィールドで Input Method Editor (以下 IME) をコントロールします。このプロパティは廃止されました。

```css
/* Keyword values */
ime-mode: auto;
ime-mode: normal;
ime-mode: active;
ime-mode: inactive;
ime-mode: disabled;

/* グローバル値 */
ime-mode: inherit;
ime-mode: initial;
ime-mode: revert;
ime-mode: unset;
```

`ime-mode`は、一部のブラウザーで無秩序に実装されたプロパティです。これは、Microsoft が独自の拡張機能として Internet Explorer 5 で導入したものです。{{spec("https://msdn.microsoft.com/library/ms530767(VS.85).aspx","-ms-ime-mode Attribute | imeMode Property")}}

> **Note:** 一般に、公開されたウェブサイトが IME モードを変更することは適切ではありません。このプロパティは、私的ななウェブアプリケーションでのみ使用すべきです。また、以前に古いコードで設定されていた場合は、プロパティを元に戻すべきです。

## 構文

`ime-mode` プロパティは、以下のキーワード値のうちの一つを使用して指定します。

### 値

- `auto`
  - : 現在の IME の状態を変更しません。これが既定値です。
- `normal`
  - : IME の状態を通常の状態に変更します。この値はユーザースタイルシートでウェブページが指定した値を上書きするために用意されました。_この値は Internet Explorer は対応していません_。
- `active`
  - : コンテンツがフォーカスを得た時に IME が自動的にオンになります。ユーザーがオフにしない限りテキスト入力には IME が使用されます。_Linux では対応していません。_
- `inactive`
  - : コンテンツがフォーカスを得た時に IME は自動的にオフに設定されますが、ユーザーは任意で IME をオンにすることができます。_Linux では対応していません。_
- `disabled`
  - : IME は無効になり、ユーザーがオンにすることはできません。

## 解説

Internet Explorer とは異なり、Firefox の `ime-mode` は `<input type="password">` にも適用できます。しかし、これはユーザーの使い勝手にはマイナスの影響を与えます。パスワードフィールドでは IME は有効に*されるべきではありません*。ユーザーは以下の CSS をユーザースタイルシートに挿入することで、推奨された設定に従わないサイトの動作を修正することができます。

```css
input[type=password] {
  ime-mode: auto !important;
}
```

Gecko 1.9 (Firefox 3) の Mac 版では、disabled に設定されたフィールドがフォーカスを失う際に、IME の状態を以前の状態に戻すことができません。そのため、Mac ユーザーは `disabled` 値を利用したフォームの利用に苛立ちを覚えるかもしれません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インプットメソッドの対応の無効化

この例は、フィールドの IME の対応を無効にします。これは、 拡張文字セットに対応していないデータベースにデータを入力するフィールドで一般的に行われていました。

```html
<input type="text" name="name" value="initial value" style="ime-mode: disabled">
```

> **Note:** IME を無効にしたからといって、拡張文字がフォームを通過しないとは限りません。IME を無効にしても、ユーザーは拡張文字をフォームのフィールドに貼り付けることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
