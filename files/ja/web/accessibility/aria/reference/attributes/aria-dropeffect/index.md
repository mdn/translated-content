---
title: "ARIA: aria-dropeffect 属性"
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect
l10n:
  sourceCommit: 4c0588c10b4266b8a87a1f80d93e8f99eabc1a4e
---

グローバルな `aria-dropeffect` 属性は、ドラッグされたオブジェクトがドロップターゲット上で離されたときに実行される機能を示します。{{deprecated_inline}}

## 解説

ARIA 1.1 で非推奨となった `aria-dropeffect` プロパティは、ドラッグされたオブジェクトがドロップターゲット上で離されたときに実行される機能を示します。グローバルな `aria-dropeffect` 属性は、支援技術ユーザーに対して、目の見えるユーザーがドロップエフェクトアイコンを通じて得る [`DataTransfer.dropEffect`](/ja/docs/Web/API/DataTransfer/dropEffect) の情報と同じものを提供します。

テキスト選択、画像、リンクはデフォルトでドラッグ可能です。HTML5 の [ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) の一部であるグローバル属性 [`draggable="true"`](/ja/docs/Web/HTML/Reference/Global_attributes/draggable) を設定し、[`dragstart` イベントハンドラー](/ja/docs/Web/API/HTMLElement/dragstart_event) を使うことで、任意の DOM ノードもドラッグ可能にできます。

ドラッグイベントが発生すると、ドラッグされた要素の半透明画像が生成され、ドラッグ中はユーザーのポインターに追従します。デフォルトの画像は [`setDragImage`](/ja/docs/Web/API/DataTransfer/setDragImage) で任意の画像に変更できます。ドラッグされている要素を示すデフォルト画像に加え、[`dataTransfer.dropEffect`](/ja/docs/Web/API/DataTransfer/dropEffect) プロパティを使って、ドラッグ＆ドロップ操作中にユーザーに与える視覚的フィードバックを制御できます。`aria-dropeffect` プロパティは、`dataTransfer.dropEffect` プロパティを通じて目の見えるユーザーに提供されるフィードバックと同じものを支援技術ユーザーに提供するために使用します。

`dropeffect` は、ドラッグ中にブラウザーが表示するカーソルを定義し、要素がドロップ可能な要素に設定します。ドラッグ操作中、ドラッグ可能な要素が異なるドロップエリア上に移動すると、`dataTransfer.dropeffect` と `aria-dropeffect` の両方を変更して、ドロップ時に実行される操作の種類を示す必要があります。

1つの要素で複数のドロップエフェクトがサポートされる場合があります。そのため、`aria-dropeffect` 属性の値は、スペース区切りの機能リストです。機能には `copy`、`execute`、`link`、`move` があります。既定値は `none` で、アプリケーションでサポートされている機能がないことを意味します。`aria-dropeffect="popup"` を設定すると、支援技術ユーザーにドラッグ操作を選択できるポップアップメニューやダイアログがあることを通知します。

この属性を含めることで、支援技術は利用可能なドラッグオプションをユーザーに伝えることができますが、実際の機能が追加されるわけではありません。

`aria-dropeffect` プロパティは、将来の WAI-ARIA のバージョンで新しい機能に置き換えられる予定であり、非推奨とされています。

通常、ドロップエフェクト機能は、オブジェクトがドラッグ操作のために掴まれた後にのみ提供できます。なぜなら、利用可能なドロップエフェクト機能はドラッグされるオブジェクトによって異なるためです。そのため、一般的には {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントが発生したときに、すべての潜在的なドロップターゲットに `aria-dropeffect` を追加します。

## 値

値はスペース区切りの可能なアクションのリストです。以下が有効なトークンです：

- `copy`
  - : ソースオブジェクトの複製がターゲットにドロップされます。
- `execute`
  - : ドロップターゲットがサポートする機能が、ドラッグソースを入力として実行されます。
- `link`
  - : ドラッグされたオブジェクトへの参照またはショートカットがターゲットオブジェクトに作成されます。
- `move`
  - : ソースオブジェクトが現在の場所から削除され、ターゲットにドロップされます。
- `none`（既定値）
  - : 操作は実行できません。ドロップしようとした場合、ドラッグ操作はキャンセルされます。他のトークン値と組み合わせた場合は無視されます（例: 'none copy' は 'copy' と同等）。
- `popup`
  - : ユーザーがドラッグ操作（コピー、移動、リンク、実行）やキャンセルなどその他の機能を選択できるポップアップメニューやダイアログがあります。

## 関連するロール

**すべての**ロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-grabbed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [HTML グローバル `draggable` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/draggable)
- [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
