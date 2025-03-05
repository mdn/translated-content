---
title: CSS アットルール関数
slug: Web/CSS/At-rule-functions
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**[CSS](/ja/docs/Web/CSS) [アットルール](/ja/docs/Web/CSS/At-rule)関数**は、複雑なルールを表したり、特別なデータ処理や計算を呼び出すことができるアットルール文です。

## 構文

```css
@identifier 関数([引数]? [, 引数]!) {
}
```

構文はアット記号 `@` と `import` などのアットルール識別子で始まります。これに**アットルール関数の名前**、例えば `url` などが続き、開き括弧と閉じ括弧のペアが続きます。括弧の中に 1 つ以上の引数を指定します。

アットルール関数によっては複数の引数を取ることができ、それらは CSS のプロパティ値に似た書式になります。ホワイトスペースは許されますが、括弧の中はオプションです。複数の引数はカンマかスペースを使用して区切ることができます。

## @import 関数

{{CSSxRef("@import")}} アットルールは、他のスタイルシートからスタイルをインポートするために使用します。

- {{CSSxRef("@import", "@import url()")}}
  - : 指定した URL からスタイルシートファイルをインポートします。
- {{CSSxRef("@import", "@import src()")}}
  - : 指定したソースからスタイルシートファイルをインポートします。
- {{CSSxRef("@import", "@import supports()")}}
  - : ブラウザーの対応状況に基づいてスタイルシートファイルをインポートします。
- {{CSSxRef("@import", "@import layer()")}}
  - : 指定されたカスケードレイヤーの中にスタイルシートファイルをインポートします。

## @supports 関数

{{CSSxRef("@supports")}} アットルールは、指定した CSS 機能のブラウザーの対応状況を調べ、 CSS スタイル設定を行います。

- {{CSSxRef("@supports", "@supports selector()")}}
  - : 指定するセレクター構文へのブラウザーの対応を調べた上で、CSS ルールを適用します。
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : 指定するフォント技術にブラウザーが対応しているかを調べた上で、CSS ルールを適用します。
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : 指定するフォント形式へのブラウザーの対応を調べた上で、CSS ルールを適用します。

## @namespace 関数

{{CSSxRef("@namespace")}} アットルールは、CSS スタイルシートで使用する XML 名前空間を指定します。

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : XML 名前空間を指定した URL から定義します。
- {{CSSxRef("@namespace", "@namespace src()")}}
  - : XML 名前空間を指定したソースから定義します。

## @container 関数

{{CSSxRef("@container")}} アットルールは、コンテナーコンテキストのスタイル設定を指定するために使用します。

- {{CSSxRef("@container", "@container style()")}}
  - : コンテナーコンテキストのスタイルを定義します。
