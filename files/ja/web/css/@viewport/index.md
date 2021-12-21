---
title: '@viewport'
slug: Web/CSS/@viewport
tags:
  - '@viewport'
  - アットルール
  - CSS
  - 実験的
  - レイアウト
  - モバイル
  - リファレンス
  - 画面レイアウト
  - ビューポート
browser-compat: css.at-rules.viewport
translation_of: Web/CSS/@viewport
---
{{CSSRef}}{{deprecated_header}}

> **Note:** <https://github.com/w3c/csswg-drafts/issues/4766> に @viewport を標準化路線から除外することに関する議論があります。

**`@viewport`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、文書が表示される{{glossary("viewport", "ビューポート")}}を構成することができます。主にモバイル端末のために使用されますが、 (Microsoft Edge などの) "snap to edge" のような機能に対応するデスクトップブラウザーでも使用されます。

パーセント値で指定された長さは、**初期ビューポート**からの相対で計算されます。これはユーザーエージェントや記述されたスタイルがビューポートを調整する機会を持つ前のビューポートです。これはふつう、デスクトップブラウザーのウィンドウの寸法に基づくもので、全画面モードのものではありません。

モバイル端末 (または全画面モードのデスクトップ端末) では、初期ビューポートはふつう端末の画面のうちアプリケーションが利用できる部分です。これは全画面の場合もあれば、全画面からオペレーティングシステムが制御する領域 (タスクバーなど) を引いた部分の場合、アプリケーションが利用できる画面領域 (全画面または画面からオペレーティングシステムやその他のアプリケーションが所有する領域を引いた部分) の場合もあります。

```css
@viewport {
  width: 100vw; /*実際のビューポートの幅を端末の幅に設定*/
}
```

> **Note:** `<meta name="viewport">` タグを使用すると、 `@viewport` より優先します。

## 構文

このアットルールは波括弧で囲まれた CSS ブロック内に、一連の入れ子になった{{glossary("descriptor (CSS)", "記述子")}}を含みます。

`1.0` または `100%` の*拡大率*は拡大縮小なしに相当します。より大きい値はズームイン、より小さい値はズームアウトになります。

### 記述子

現時点では `@viewport` のブラウザーの互換性は弱く、対応は Internet Explorer および Edge で広く行われています。これらのブラウザーでも、少数の記述子しか利用できません。 `@viewport` は対応していないブラウザーからは無視され、理解できない記述子は無視されるでしょう。

- `min-width`
  - : 文書が最初に表示されたときの、ビューポートの幅を決めるのに使われます。
- `max-width`
  - : 文書が最初に表示されたときの、ビューポートの幅を決めるのに使われます。
- `width`
  - : `min-width` と `max-width` の両方を設定するための一括指定です。
- `min-height`
  - : 文書が最初に表示されたときの、ビューポートの高さを決めるのに使われます。
- `max-height`
  - : 文書が最初に表示されたときの、ビューポートの高さを決めるのに使われます。
- `height`
  - : `min-height` と `max-height` の両方を設定するための一括指定です。
- `zoom`
  - : ズームの初期値を設定します。
- `min-zoom`
  - : ズームの最小値を設定します。
- `max-zoom`
  - : ズームの最大値を設定します。
- `user-zoom`
  - : ユーザーが拡大率を変更できるか否かを制御します。
- `orientation`
  - : 文書の向きを制御します。
- `viewport-fit`
  - : 長方形ではないディスプレイでの文書の表示を制御します。

## 形式文法

{{csssyntax}}

## 例

### ビューポートの大きさ、拡大率、向きの設定

```css
@viewport {
  min-width: 640px;
  max-width: 800px;
}

@viewport {
  zoom: 0.75;
  min-zoom: 0.5;
  max-zoom: 0.9;
}

@viewport {
  orientation: landscape;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("meta")}}、特に `<meta name="viewport">` の項目
- [viewport meta タグによるモバイルブラウザーでのレイアウト制御](/ja/docs/Web/HTML/Viewport_meta_tag)
