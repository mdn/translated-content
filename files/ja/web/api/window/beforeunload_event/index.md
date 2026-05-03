---
title: "Window: beforeunload イベント"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

**`beforeunload`** イベントは、現在のウィンドウ、そこに含まれる文書、関連するリソースがアンロードされる直前に発生します。文書はまだ表示されており、この時点ではイベントはキャンセル可能です。

このイベントの主な用途は、ユーザーがページを閉じたり、再読み込みしたり、別のページに移動しようとした際に、本当にそのページを離れることを確認するブラウザーの確認ダイアログを表示することです。これによって、保存されていないデータの消失を防止することができます。

このダイアログは、次の方法で表示させることができます。

- イベントオブジェクトの {{domxref("Event.preventDefault()", "preventDefault()")}} メソッドを呼び出す。
- イベントオブジェクトの {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} プロパティを、空でない文字列値またはその他の[真値](/ja/docs/Glossary/Truthy)に設定する。
- イベントハンドラー関数から真値を返す（例えば `return "string"`）。なお、これは関数が `onbeforeunload` プロパティを介して登録されている場合にのみ機能し、{{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを介して登録された場合には動作しません。この動作は、Firefox、Safari、Chrome の現行のバージョンにおいて一貫しています。

最後の2つの仕組みは古い機能です。最善の手法としては、イベントオブジェクトに対して `preventDefault()` を呼び出してダイアログを表示させ、かつ古い仕様の場合に対応するために `returnValue` を設定することが推奨されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("beforeunload", (event) => { })

onbeforeunload = (event) => { }
```

## イベント型

{{domxref("BeforeUnloadEvent")}} です。{{domxref("Event")}} を継承しています。

## 使用上のメモ

ユーザーがタブを閉じたり、別のタブに移動したりした際にダイアログを表示させるには、`beforeunload` イベントハンドラー関数で、イベントオブジェクトに対して {{domxref("Event.preventDefault()", "preventDefault()")}} を呼び出す必要があります。なお、現行の実装では以下の点に留意してください。

- ダイアログを表示させるには、[持続的有効化](/ja/docs/Glossary/Sticky_activation)が要求されます。言い換えれば、フレームまたは埋め込みされたフレームがユーザーのジェスチャーや操作を受けた場合にのみ、ブラウザーはダイアログボックスを表示します。ユーザーがページと一度も操作したことがない場合、保存すべきユーザーデータが存在しないため、このダイアログの正当な使用ケースは存在しません。
- 表示されるダイアログには、ブラウザーが指定する汎用的な文字列のみを表示させます。これはウェブページのコードでは制御できません。

`beforeunload` イベントには、いくつかの問題があります。

- 特にモバイルプラットフォームでは、確実に発生するとは限りません。例えば、次のような状況では、`beforeunload` イベントはまったく発生しません。
  1. モバイルユーザーがページにアクセスします。
  2. それから、ユーザーが別のアプリに切り替えます。
  3. その後、ユーザーがアプリマネージャーからブラウザーを閉じます。

  > [!NOTE]
  > 以上のような問題を回避し、アプリの状態自動保存をより確実に実行するためのシグナルとして、{{domxref(「Document.visibilitychange_event」, 「visibilitychange」)}} イベントの使用をお勧めします。詳細については、[Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) をご覧ください。

- Firefox では、`beforeunload` は[バックフォワードキャッシュ](https://web.dev/articles/bfcache) (bfcache) と互換性がありません。つまり、Firefox は `beforeunload` リスナーが設定されているページを bfcache に保存しないため、パフォーマンスに悪影響を及ぼします。

したがって、開発者は、ユーザーが未保存の変更を持っている場合にのみ `beforeunload` を待ち受けし、前述のダイアログを使用してデータが失われる可能性について警告し、必要がなくなったらリスナーを除去することをお勧めします。`beforeunload` の待ち受けを控えめに行うことで、パフォーマンスへの影響を最小限に抑えることができます。

## イベントハンドラーの別名

`Window` インターフェイスに加え、イベントハンドラープロパティ `onbeforeunload` は、以下のターゲットでも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

次の例では、変更可能で保存が要求されるデータを表す HTML テキスト {{htmlelement("input")}} を使用しています。

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

この JavaScript は、`<input>` 要素に{{domxref("Element/input_event", "input")}} イベントリスナーを設定し、入力値の変更を待ち受けます。値が空でない値に更新されると、{{domxref("Window")}} オブジェクトに `beforeunload` イベントリスナーを設定します。

値が再び空文字列になった場合（つまり、値が削除された場合）、`beforeunload` イベントリスナーは再度除去されます。上記の[使用上のメモ](#使用上のメモ)にもあるように、警告すべき未保存のデータがなくなった場合は、リスナーを除去する必要があります。

`beforeunload` イベントハンドラー関数は、ユーザーがタブを閉じたり別のページに移動したりした際に警告ダイアログを表示するため、`event.preventDefault()` を呼び出します。また、`event.preventDefault()` に対応していないブラウザーでもこのデモが正しく実行されるように、ハンドラー関数内に `event.returnValue = true` を記載しています。

```js
const beforeUnloadHandler = (event) => {
  // 推奨する方法
  event.preventDefault();

  // 古いブラウザー、例えば Chrome/Edge の 119 以前向けの対応
  event.returnValue = true;
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
```

`<input>` の値が空でない場合、ページを閉じたり、別のページに移動したり、再読み込みしようとすると、ブラウザーに警告ダイアログを表示させます。試してみてください。

{{EmbedLiveSample("Examples", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BeforeUnloadEvent")}} インターフェイス
- 関連イベント:
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Window/load_event", "load")}}
  - {{domxref("Window/unload_event", "unload")}}
- [ページライフサイクル API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) では、ウェブアプリにおけるページのライフサイクルの動作を処理するための、より有益なガイダンスが提供されています。
