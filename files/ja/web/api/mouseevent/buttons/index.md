---
title: MouseEvent.buttons
slug: Web/API/MouseEvent/buttons
tags:
  - API
  - DOM
  - DOM イベント
  - プロパティ
  - 読み取り専用
  - リファレンス
  - UIEvent
browser-compat: api.MouseEvent.buttons
translation_of: Web/API/MouseEvent/buttons
---
{{APIRef("DOM Events")}}

**`MouseEvent.buttons`** は読み取り専用のプロパティで、マウスイベントが発行されたときにマウス（またはその他の入力機器）のどのボタンが押されていたかを示します。

押されている可能性があるそれぞれのボタンは、数字で表されます（下図参照）。
複数のボタンが押された場合は、ボタンの値を足し合わせて新しい数値が生成されます。
例えば、副ボタン（`2`）と補助ボタン（`4`）を同時に押した場合、その値は`6`（すなわち、`2 + 4`）となります。

> **Note:** このプロパティを {{domxref("MouseEvent.button")}} プロパティと混同しないでください。
> {{domxref("MouseEvent.buttons")}} プロパティはあらゆる種類のマウスイベントの際に押されていたボタンの状態を示すのに対して、
> {{domxref("MouseEvent.button")}} プロパティは 1 つまたは複数のボタンを押したか離したことによって引き起こされたマウスイベントのみ、正しい値を保証します。

## 値

1 つまたは複数のボタンを表す数値です。
複数のボタンが同時に押されていた場合、値が組み合わされます（例えば、 `3` は主ボタン＋副ボタンです）。

- `0`: ボタンが押されていない、または初期化されていない
- `1`: 主ボタン (通常は左ボタン)
- `2`: 副ボタン (通常は右ボタン)
- `4`: 補助ボタン (通常はマウスホイールボタンまたは中央ボタン)
- `8`: 第四ボタン (通常は「ブラウザーで戻る」ボタン)
- `16` : 第五ボタン (通常は「ブラウザーで進む」ボタン)

## 例

この例では、 {{domxref("Element/mousedown_event", "mousedown")}} イベントを発行したときに `buttons` プロパティを記録します。

### HTML

```html
<p>1 つまたは複数のボタンでどこかをクリックしてください</p>
<pre id="log">buttons: </pre>
```

### JavaScript

```js
let log = document.createTextNode('?');   // let log = new Text('?');

function logButtons(e) {
  log.data = `${e.buttons} (${e.type})`;  // log.nodeValue= `${e.buttons} (${e.type})`;
}

document.addEventListener('mouseup', logButtons);
document.addEventListener('mousedown', logButtons);
// document.addEventListener('mousemove', logButtons);

document.querySelector('#log').appendChild(log)
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Firefox のメモ

Firefox は `buttons` 属性に Windows, Linux (GTK), macOS で対応していますが、以下の制限があります。

- ユーティリティで、ボタン操作のカスタマイズをすることができます。
  したがって、*主ボタン*は機器の左ボタンではない、*副ボタン*は右ボタンではない、などということもありえます。
  また、中（ホイール）ボタン、第四ボタン、第五ボタンは、押されても値が割り当てられないかもしれません。
- 単一ボタンの機器では、ボタンとキーボードの押下の組み合わせで追加のボタンをエミュレートすることができます。
- タッチ機器では、設定可能なジェスチャー（例えば、 1 本指タッチで「主ボタン」、2 本指タッチで「副ボタン」等）でボタンをエミュレートすることができます。
- Linux (GTK) では、第四ボタンと第五ボタンには対応していません。
  加えて {{domxref("Element/mouseup_event", "mouseup")}} イベントでは、常に `buttons` の値に離したボタンの情報を含みます。
- Mac OS X 10.5 では、 `buttons` 属性は常に `0` を返します。プラットフォームの API がこの機能を実装していないからです。

## 関連情報

- {{domxref("MouseEvent")}}
