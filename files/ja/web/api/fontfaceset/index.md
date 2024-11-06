---
title: FontFaceSet
slug: Web/API/FontFaceSet
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{APIRef("CSS Font Loading API")}}

**`FontFaceSet`** は [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) のインターフェイスで、フォントフェイスのダウンロードとダウンロード状況の問い合わせを管理します。

`FontFaceSet` インスタンスは [`Set` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) であり、 {{domxref("FontFace")}} オブジェクトの順序付けられた集合を保持することができます。

このプロパティは {{domxref("Document.fonts")}}、または[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)内の `self.fonts` として利用可能です。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("FontFaceSet.status")}} {{ReadOnlyInline}}
  - : フォントフェイスの読み込み状態を示します。 `'loading'` または `'loaded'` のどちらかになります。
- {{domxref("FontFaceSet.ready")}} {{ReadOnlyInline}}
  - : {{jsxref("Promise")}} で、フォントの読み込みとレイアウト操作が完全に完了すると解決されます。
- {{domxref("FontFaceSet.size")}} {{ReadOnlyInline}}
  - : `FontFaceSet` に含まれる値の数を返します。

### イベント

- {{domxref("FontFaceSet.loading_event", "loading")}}
  - : フォントフェイスの集合の読み込みが開始されたときに発行されます。
- {{domxref("FontFaceSet.loadingdone_event", "loadingdone")}}
  - : フォントフェイスの集合の読み込みが完了したときに発行されます。
- {{domxref("FontFaceSet.loadingerror_event", "loadingerror")}}
  - : フォントフェイスの集合を読み込む際にエラーが発生した場合に発行されます。

## インスタンスメソッド

- {{domxref("FontFaceSet.add","FontFaceSet.add()")}}
  - : フォント集合にフォントを追加します。
- {{domxref("FontFaceSet.check","FontFaceSet.check()")}}
  - : 論理値で、フォントが読み込まれているかどうかを示しますが、読み込まれていないときは読み込みを開始しません。
- {{domxref("FontFaceSet.clear", "FontFaceSet.clear()")}}
  - : 手動で追加したフォントをすべてフォント集合から除去されます。[CSS に接続された](https://www.w3.org/TR/css-font-loading-3/#css-connected)フォントは影響を受けません。
- {{domxref("FontFaceSet.delete","FontFaceSet.delete()")}}
  - : 手動で追加したフォントをフォント集合から取り除きます。[CSS に接続された](https://www.w3.org/TR/css-font-loading-3/#css-connected)フォントは影響を受けません。
- {{domxref("FontFaceSet.entries","FontFaceSet.entries()")}}
  - : `FontFaceSet` の各要素の値を挿入順に返す新しいイテレーターを返します。
- {{domxref("FontFaceSet.forEach","FontFaceSet.forEach()")}}
  - : 指定された関数を `FontFaceSet` オブジェクトの各値に対して実行します。
- {{domxref("FontFaceSet.has","FontFaceSet.has()")}}
  - : 指定された値で要素が存在するかどうかを検査して {{jsxref("Boolean")}} で返します。
- {{domxref("FontFaceSet.keys","FontFaceSet.keys()")}}
  - : {{domxref("FontFaceSet.values()")}} の別名です。
- {{domxref("FontFaceSet.load","FontFaceSet.load()")}}
  - : 要求されたフォントのフォントフェイスのリストで解決する {{jsxref("Promise")}} を返します。
- {{domxref("FontFaceSet.values","FontFaceSet.values()")}}
  - : `FontFaceSet` オブジェクトの各要素の値を挿入順に返す新しいイテレーターオブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
