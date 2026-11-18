---
title: "ToggleEvent: source プロパティ"
short-title: source
slug: Web/API/ToggleEvent/source
l10n:
  sourceCommit: 2597731017bf54bd583bd533fce1a5fab064b597
---

{{APIRef("Popover API")}}

**`source`** は {{domxref("ToggleEvent")}} インターフェイスの読み取り専用プロパティで、切り替えを開始した HTML のポップオーバー制御要素を表す {{domxref("Element")}} オブジェクトのインスタンスです。

## 値

{{domxref("Element")}} オブジェクトのインスタンスです。ポップオーバーが制御要素によってアクティブ化されていない場合は `null` です。

## 解説

{{htmlelement("button")}} 要素は、ポップオーバー要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) または [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性に指定することで、ポップオーバー制御要素にできます（`<input type="button">` を使用する場合は、`popovertarget` 属性のみが機能します）。

ポップオーバーで [`toggle`](/ja/docs/Web/API/HTMLElement/toggle_event) イベントが発生すると、イベントオブジェクトの `source` プロパティには、切り替えを開始したポップオーバー制御ボタンへの参照が格納されます。
どの制御ボタンが切り替えを開始したかに応じて、`toggle` イベントへの応答として異なるコードを実行できます（[例](#source_プロパティの基本的な使い方)を参照してください）。

`source` プロパティが存在する前は、同じような識別情報を得るために JavaScript で `command` 属性の機能を手動で再実装し、どのボタンがポップオーバーを起動したかを特定するためにその識別情報を監視する必要がありました。
さらに、このような JavaScript の処理がポップオーバーの表示や非表示を妨げるおそれもありました。
`toggle` イベントは非同期なので、この問題を避けられます。

ポップオーバー要素が制御ボタンによってアクティブ化されていない場合、例えば {{domxref("HTMLElement.togglePopover()")}} のような JavaScript メソッドで制御されている場合は、`source` プロパティは `null` になります。

## 例

### `source` プロパティの基本的な使い方

このデモでは、ポップオーバー要素を閉じた制御ボタンに応じて異なる処理を行うために、`source` プロパティを使う方法を示します。

#### HTML

マークアップには、`<button>`、{{htmlelement("p")}}、{{htmlelement("div")}} 要素が含まれています。`<div>` は[`auto` ポップオーバー](/ja/docs/Web/API/Popover_API/Using#自動状態と簡単な解除)として指定されており、ボタンは [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) 属性と [`command`](/ja/docs/Web/HTML/Reference/Elements/button#command) 属性を使って、ポップオーバーを表示する制御ボタンとして指定されています。
ポップオーバーには、クッキーが欲しいかを尋ねる見出しと、回答を選べる **はい** と **いいえ** のボタンがあります。これらのボタンはそれぞれ、ポップオーバーを非表示にする制御ボタンとして指定されています。

```html live-sample___toggleevent-source
<button commandfor="popover" command="show-popover">
  クッキーの設定を選択
</button>
<p id="output"></p>
<div id="popover" popover="auto">
  <h3>クッキーはいかがですか？</h3>
  <button id="yes" commandfor="popover" command="hide-popover">はい</button>
  <button id="no" commandfor="popover" command="hide-popover">いいえ</button>
</div>
```

```css hidden live-sample___toggleevent-source
html {
  font-family: sans-serif;
}

[popover] {
  border: 1px solid grey;
  padding: 10px 20px;
  border-radius: 5px;
}

[popover] h3 {
  margin: 0 0 10px;
}
```

#### JavaScript

スクリプトでは、まず `id` が `"yes"` と `"no"` のボタン、ポップオーバー、出力先の `<p>` 要素への参照を取得します。

```js live-sample___toggleevent-source
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popover = document.getElementById("popover");
const output = document.getElementById("output");
```

ここでは、HTML の `command` 属性と `source` プロパティの機能検出を行います。いずれかに対応していない場合は、`<p>` 要素にメッセージを表示します。両方に対応している場合は、ポップオーバー要素に [`toggle`](/ja/docs/Web/API/HTMLElement/toggle_event) イベントリスナーを追加します。
イベントが発生すると、`"yes"` または `"no"` のボタンを使ってポップオーバー要素を切り替え（非表示にし）たかをコードで確認し、それぞれに応じたメッセージを出力先の `<p>` に表示します。

```js-nolint live-sample___toggleevent-source
if (yesBtn.command === undefined) {
  output.textContent = "ポップオーバー制御用の command 属性に対応していません。";
} else {
  popover.addEventListener("toggle", (event) => {
    if (event.source === undefined) {
      output.textContent = "ToggleEvent.source プロパティに対応していません。";
    } else if (event.source === yesBtn) {
      output.textContent = "クッキーを設定しました！";
    } else if (event.source === noBtn) {
      output.textContent = "クッキーは設定されませんでした。";
    }
  });
}
```

#### 結果

{{embedlivesample("toggleevent-source", "100%", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
