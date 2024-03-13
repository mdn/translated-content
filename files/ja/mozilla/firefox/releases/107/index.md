---
title: Firefox 107 for developers
slug: Mozilla/Firefox/Releases/107
l10n:
  sourceCommit: 27ae7e9c347490290a7327a48842575d333b2f31
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 107 の変更点をまとめています。Firefox 107 は、2022 年 11 月 15 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

変更なし。

### MathML

- [`<ms>`](/ja/docs/Web/MathML/Element/ms) MathML 要素で、独自の始めと終わりの引用符を示すための非推奨属性であった `lquote` および `rquote` 属性を無効にしました。
  この動作は `mathml.ms_lquote_rquote_attributes.disabled` で設定しており、既定値を `true` にしました ([Firefox バグ 1793387](https://bugzil.la/1793387))。

### CSS

- [`contain-intrinsic-size`](/ja/docs/Web/CSS/contain-intrinsic-size) ショートハンド CSS プロパティを、[サイズの封じ込め](/ja/docs/Web/CSS/CSS_Containment#size_containment) の対象になる UI 要素のサイズを指定するために適用できるようになりました。
  これはユーザーエージェントが、子要素をレンダリングせずに要素のサイズを特定することを可能にします。
  ショートハンドプロパティの [`contain-intrinsic-width`](/ja/docs/Web/CSS/contain-intrinsic-width) および [`contain-intrinsic-height`](/ja/docs/Web/CSS/contain-intrinsic-height) とともに、[論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties) の [`contain-intrinsic-block-size`](/ja/docs/Web/CSS/contain-intrinsic-block-size) および [`contain-intrinsic-inline-size`](/ja/docs/Web/CSS/contain-intrinsic-inline-size) もサポートしました ([Firefox バグ 1597529](https://bugzil.la/1597529))。
- [font-palette](/ja/docs/Web/CSS/font-palette) によって、カラーフォントをサポートしました ([Firefox バグ 1791558](https://bugzil.la/1791558))。また、[@font-palette-values](/ja/docs/Web/CSS/@font-palette-values) CSS アットルールと、その記述子である [font-family](/ja/docs/Web/CSS/@font-palette-values/font-family)、[base-palette](/ja/docs/Web/CSS/@font-palette-values/base-palette)、[override-colors](/ja/docs/Web/CSS/@font-palette-values/override-colors) でも、カラーフォントをサポートしました。これらを合わせて、カラーパレットの定義を支援します ([Firefox バグ 1791558](https://bugzil.la/1791558))。

### JavaScript

変更なし。

### API

#### 廃止

- 非標準かつ非推奨である [`SVGSVGElement.useCurrentView`](/ja/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) プロパティを削除しました (詳しくは [Firefox バグ 1174097](https://bugzil.la/1174097) をご覧ください)。

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `script.evaluate`、`script.callFunction`、`script.disown` コマンドの `target` 引数でレルムをサポートしました ([Firefox バグ 1779231](https://bugzil.la/1779231))。

- `WeakMap` や `Uint8Array` など、コンテナ型の値フィールドを持つ複雑なオブジェクトの JSON シリアライズをサポートしました ([Firefox バグ 1770754](https://bugzil.la/1770754))。

- `browsingContext.create` コマンドの `context` 引数をサポートしました。既存のタブに関連する新しいタブを開くことができます ([Firefox バグ 1765619](https://bugzil.la/1765619))。

- `wait` 引数を `none` に設定して `browsingContext.navigate` コマンドを呼び出したときの信頼性が向上しました ([Firefox バグ 1763109](https://bugzil.la/1763109))。

#### Marionette

- `WebDriver:ElementSendKeys` コマンドが、要素にフォーカスがあたっていない場合に限ってキャレットを設定するようになりました ([Firefox バグ 1791736](https://bugzil.la/1791736))。

- `WebDriver:PerformAction` コマンドを、`pointerMove` および `wheel` アクションのさまざまな引数で `undefined` を値として受け入れないように更新しました ([Firefox バグ 1781066](https://bugzil.la/1781066))。

- [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) を、最近の WebDriver 仕様書の変更点に合わせて更新しました ([Firefox バグ 1771942](https://bugzil.la/1771942))。

## アドオン開発者向けの変更点一覧

### 廃止

### その他

- {{WebExtAPIRef("scripting.executeScript")}} でエラーが発生したときに返される `error` プロパティが、メッセージプロパティを持つオブジェクトだけでなく、スクリプトがスローしたり拒否拒否したりした任意の値を表すようになりました ([Firefox バグ 1740608](https://bugzil.la/1740608))。

## 過去のバージョン

{{Firefox_for_developers(106)}}
