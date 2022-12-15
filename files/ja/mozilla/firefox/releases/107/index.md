---
title: Firefox 107 for developers
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 6981069687e0bf594a783ffffdeba8e55e581f42
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 107 の変更点をまとめています。Firefox 107 は、2022 年 11 月 15 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### MathML

- [`<ms>`](/ja/docs/Web/MathML/Element/ms) MathML 要素で、独自の始めと終わりの引用符を示すための非推奨属性であった `lquote` および `rquote` 属性を無効にしました。
  この動作は `mathml.ms_lquote_rquote_attributes.disabled` で設定しており、既定値を `true` にしました ({{bug(1793387)}})。

### CSS

- [`contain-intrinsic-size`](/ja/docs/Web/CSS/contain-intrinsic-size) ショートハンド CSS プロパティを、[サイズの封じ込め](/ja/docs/Web/CSS/CSS_Containment#size_containment) の対象になる UI 要素のサイズを指定するために適用できるようになりました。
  これはユーザーエージェントが、子要素をレンダリングせずに要素のサイズを特定することを可能にします。
  ショートハンドプロパティの [`contain-intrinsic-width`](/ja/docs/Web/CSS/contain-intrinsic-width) および [`contain-intrinsic-height`](/ja/docs/Web/CSS/contain-intrinsic-height) とともに、[論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties) の [`contain-intrinsic-block-size`](/ja/docs/Web/CSS/contain-intrinsic-block-size) および [`contain-intrinsic-inline-size`](/ja/docs/Web/CSS/contain-intrinsic-inline-size) もサポートしました
  ({{bug(1597529)}})。

### JavaScript

変更なし。

### API

#### 廃止

- 非標準かつ非推奨である [`SVGSVGElement.useCurrentView`](/ja/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) プロパティを削除しました
  (詳しくは {{bug(1174097)}} をご覧ください)。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `script.evaluate`、`script.callFunction`、`script.disown` コマンドの `target` 引数でレルムをサポートしました ({{bug("1779231")}})。

- `WeakMap` や `Uint8Array` など、コンテナ型の値フィールドを持つ複雑なオブジェクトの JSON シリアライズをサポートしました ({{bug("1770754")}})。

- `browsingContext.create` コマンドの `context` 引数をサポートしました。既存のタブに関連する新しいタブを開くことができます ({{bug("1765619")}})。

- `wait` 引数を `none` に設定して `browsingContext.navigate` コマンドを呼び出したときの信頼性が向上しました ({{bug("1763109")}})。

#### Marionette

- `WebDriver:ElementSendKeys` コマンドが、要素にフォーカスがあたっていない場合に限ってキャレットを設定するようになりました ({{bug("1791736")}})。

- `WebDriver:PerformAction` コマンドを、`pointerMove` および `wheel` アクションのさまざまな引数で `undefined` を値として受け入れないように更新しました ({{bug("1781066")}})。

- [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) を、最近の WebDriver 仕様書の変更点に合わせて更新しました ({{bug("1771942")}})。

## アドオン開発者向けの変更点一覧

### 廃止

### その他

## 過去のバージョン

{{Firefox_for_developers(106)}}
