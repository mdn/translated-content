---
title: SubmitEvent.submitter
slug: Web/API/SubmitEvent/submitter
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("HTML DOM")}}

**`submitter`** は {{domxref("SubmitEvent")}} インターフェイスにある読み取り専用プロパティで、フォームを送信させるために呼び出された送信ボタンや他の要素を指定します。

## 値

要素で、フォームに送信した {{domxref("HTMLFormElement.submit_event", "submit")}} イベントを送った要素を表します。これは、 {{HTMLElement("input")}} 要素で [`type`](/ja/docs/Web/HTML/Element/input#type) が `submit` であるものや、 {{HTMLElement("button")}} 要素で [`type`](/ja/docs/Web/HTML/Element/input#type) が `submit` であるものが多いのですが、送信処理を開始した要素は他のものである可能性があります。

送信が何らかのボタンによって発生したものでない場合、 `submitter` の値は `null` になります。

## 例

コード例は [`SubmitEvent`](/ja/docs/Web/API/SubmitEvent#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
