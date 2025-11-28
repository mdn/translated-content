---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`viewport`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で、{{glossary("viewport", "ビューポート")}}の初期サイズについてのヒントを与えます。
指定した場合、 `<meta>` 要素の [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content) 属性では、カンマ区切りで 1 つ以上の値として指定して、ビューポートに関する動作を定義します。

例えば、ビューポートを端末の幅に一致させ、コンテンツを 100% ズームで表示するように設定するには、次のようにします。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 使用上のメモ

`<meta name="viewport">` 要素には、次の追加属性があります。

- [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content)
  - : `content` 属性は定義する必要があり、その値はビューポート関連のさまざまな動作を設定します。
    カンマで区切られたリスト内の次のキーワードを 1 つ以上受け入れます。
    - `width`
      - : ウェブサイトをレンダリングするビューポートのピクセル数の幅を定義します。
        正の整数値、またはキーワード `device-width` が指定できます。
    - `height`
      - : ビューポートの高さを定義します。
        正の整数値、またはキーワード `device-height` が指定できます。
        これはどのブラウザーでも使用されていません。
    - `initial-scale`
      - : 端末の幅（縦長画面の `device-width`、横長画面の `device-height`）とビューポートの寸法の比率を定義します。
        これは `0.0` から `10.0` までの数値です。
    - `maximum-scale`
      - : 最大ズーム倍率を定義します。
        これは `minimum-scale` 以上である必要があります。それより小さい場合、動作は未定義になります。
        ブラウザーの設定ではこのルールを無視することができ、 iOS10 以降では既定で無視されます。
        これは `0.0` から `10.0` までの数値です。
    - `minimum-scale`
      - : 最小ズームレベルを定義します。
        これは `maximum-scale` 以下でなければなりません。そうしないと、動作が未定義になります。
        ブラウザーの設定ではこのルールを無視することができ、 iOS10 以降では既定で無視されます。
        これは `0.0` から `10.0` までの数値です。
    - `user-scalable`
      - : 論理値で、ユーザーがウェブページをズームできるかどうかを示します。
        ブラウザーの設定ではこのルールを無視することができ、 iOS10 以降では既定で無視されます。
        これは `yes` または `no` のどちらかを取り、既定では `yes` です。
        > [!WARNING]
        > `user-scalable` を `no` の値に設定してズーム機能を無効にすると、視力の低下したユーザーが、ページコンテンツを読んだり理解したりすることができなくなります。
        >
        > - [MDN WCAG を理解する、ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
        > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `viewport-fit`
      - : ウェブページの表示される部分を定義します。
        キーワード `auto`、`contain`、`cover` のいずれかです。
        - `auto`: 最初のレイアウトのビューポートには影響せず、ウェブページ全体が表示されます。
        - `contain`: ビューポートは、表示領域内に収まる最大の長方形に合わせて変倍されます。
        - `cover`: ビューポートは、端末のディスプレイに収まるように変倍されます。
          重要なコンテンツがディスプレイの外に表示されないように、[safe-area-inset-\*](/ja/docs/Web/CSS/Reference/Values/env) 変数を使用することを強くお勧めします。

## 例

### meta viewport サイズの使用

次の例は、ページを端末の幅で表示することをブラウザーに示します。

```html
<meta name="viewport" content="width=device-width" />
```

### メディアクエリーによる viewport メタの使用

次の `content` 値では、モバイル端末のノッチなどの表示の切り取りを避けるのに役立つ `viewport-fit` とともに、全画面モードを使用するようにブラウザーに指示する複数のキーワードを使用しています。

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 用語集の{{glossary("viewport", "ビューポート")}}
