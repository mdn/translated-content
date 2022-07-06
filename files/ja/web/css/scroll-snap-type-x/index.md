---
title: scroll-snap-type-x
slug: Web/CSS/scroll-snap-type-x
tags:
  - CSS
  - CSS プロパティ
  - CSS スクロールスナップ
  - NeedsExample
  - Non-standard
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.scroll-snap-type-x
translation_of: Web/CSS/scroll-snap-type-x
---
{{CSSRef}}{{deprecated_header}}

**`scroll-snap-type-x`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロールコンテナーの水平軸にスナップ点がある場合に、どの程度厳密に実行されるかを定義します。

これらのスナップ点を強制するために使用される正確なアニメーションや物理学の指定は、このプロパティでは扱っておらず、ユーザーエージェントに任されています。

```css
/* キーワード値 */
scroll-snap-type-x: none;
scroll-snap-type-x: mandatory;
scroll-snap-type-x: proximity;

/* グローバル値 */
scroll-snap-type-x: inherit;
scroll-snap-type-x: initial;
scroll-snap-type-x: unset;
```

## 構文

### 値

- `none`
  - : このスクロールコンテナーの視覚的{{Glossary("viewport", "ビューポート")}}が水平方向にスクロールされるとき、スナップ点を無視しなければならない。
- `mandatory`
  - : このスクロールコンテナーの視覚的ビューポートは、現在水平方向にスクロールされていない場合、スナップ点で静止します。つまり、可能であれば、スクロール動作が終了した時点でその点にスナップします。コンテンツが追加、移動、削除、サイズ変更された場合、スクロールオフセットは、そのスナップ点での静止状態を維持するように調整されます。
- `proximity`
  - : このスクロールコンテナーの視覚的ビューポートは、ユーザーエージェントのスクロール引数を考慮して、現在水平方向にスクロールされていない場合、スナップ点に静止することができる。コンテンツが追加、移動、削除、サイズ変更された場合、スクロールオフセットは、そのスナップ点での静止を維持するために調整されるかもしれません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`scroll-snap-type-y`](/ja/docs/Web/CSS/scroll-snap-type-y)
- [`scroll-snap-type`](/ja/docs/Web/CSS/scroll-snap-type)
