---
title: "Element: mousewheel イベント"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

古い標準外の **`mousewheel`** イベントは、このイベントは {{domxref("Element")}} で非同期に発生し、マウスホイールまたは類似の機器を操作している間の更新を提供します。`mousewheel` イベントはどの標準にも含まれておらず、いくつかのブラウザーで実装されていましたが、 Firefox で実装されることはありませんでした。

> [!NOTE]
> この古いイベントの代わりに、標準の {{domxref("Element.wheel_event", "wheel")}} イベントを使用してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("mousewheel", (event) => {});

onmousewheel = (event) => {};
```

## イベント型

{{domxref("WheelEvent")}} です。 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}}、{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("WheelEvent")}}

## イベントプロパティ

_このインターフェイスには、祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} から継承したプロパティがあります。_

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : 水平スクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : 垂直方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : z 軸のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : `delta*` 値のスクロール量の単位を表す `unsigned long` を返します。指定可能な値は次の通りです。

    | 定数                         | 値     | 説明                                                                                            |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | `delta*` の値はピクセル単位で指定します。                                                       |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | `delta*` 値は行単位で指定します。行の高さを計算するために使用する方法はブラウザーに依存します。 |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | `delta*` 値はページ単位で指定します。各マウスクリックはコンテンツのページをスクロールします。   |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : ピクセル単位で距離を表す整数（32 ビット）を返します。
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 水平スクロール量を表す整数を返します。
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 垂直スクロール量を表す整数を返します。

## detail プロパティ

{{domxref("UIEvent/detail", "detail")}} プロパティの値は常にゼロです。ただし、Opera では `detail` は Firefox 専用の {{domxref("Element.DOMMouseScroll_event", "DOMMouseScroll")}} イベントの `detail` 値はスクロール距離を行単位で示し、負の値はスクロール移動が下方向または右方向であることを示し、正の値は上方向または左方向であることを示します。

> [!NOTE]
> macOS では、スクロール距離（したがって `detail` の値）は加速スクロール距離に基づいて計算されます。

Linux では、`2` または `-2` がネイティブのホイールイベントごとに設定されます。

## wheelDelta, wheelDeltaX, wheelDeltaY の値

`wheelDelta` 属性の値は、ホイールがどれだけ回転したかを示す抽象的な値です。ホイールがユーザーから離れる方向に回転した場合は正の値、そうでない場合は負の値となります。これはデルタ値の符号が DOM Level 3 Event の `wheel` と異なることを意味しています。しかし、これらの値の量の意味はブラウザー間で同じではありません。詳しくは以下の説明を参照してください。

IE と Opera (Presto) は `wheelDelta` 属性にのみ対応しており、水平スクロールには対応していません。

`wheelDeltaX` 属性値は、横軸に沿った `wheelDelta` 属性値を示します。ユーザーが右にスクロールする機器を運営する場合、値は負になります。そうでない場合、つまり左にスクロールする場合、値は正の値になります。

`wheelDeltaY` 属性値は縦軸の `wheelDelta` 属性値を示します。値の符号は `wheelDelta` 属性値と同じです。

### Chrome

Windows では `WM_MOUSEWHEEL` または `WM_MOUSEHWHEEL` の差分値と同じになります。また、システム設定のスクロール量がページスクロールであっても値は変わりません。

Linux の場合、値はネイティブホイールイベントごとに `120` または `-120` です。これは Windows の IE や Chrome と同じ動作になります。

Macの場合、値は複雑です。ネイティブホイールイベントを発生させる**機器**が連続スクロールに対応している場合、値が変更されます。

連続スクロールに対応している機器（MacBook のトラックパッドや滑らかに回転するマウスホイールなど）の場合は、加速スクロール量から値が計算されます。この場合、値は Safari と同じです。

機器が連続スクロールに対応して**いない**場合（典型的な例として、スムーズに回転させることができない古いマウスホイール）、値は非加速スクロール量（1 ノッチあたり 120）から計算されます。この場合、値は Safari とは異なります。

この違いはウェブアプリケーションの開発者にとって深刻な課題となります。つまり、ウェブ開発者は `mousewheel` イベントがどの機器によって発生させられたのかを知ることができません。

### Safari

値は常に加速スクロール量から計算されます。これは、連続スクロールに対応している Chrome 以外のブラウザーとは実に異なります。

### Opera (Presto)

値は常に `detail` 属性の値 ✕ `40` です。

Windows では、`detail` 属性の値は実際のスクロール量から計算されるため、システム設定やページで 1 ノッチあたりのスクロール量が 3 行になる以外は、他のブラウザーとは値が異なります。

Linuxでは、値はネイティブホイールイベントごとに `80` または `-80` です。これは他のブラウザーとは異なります。

Mac では、`detail` 属性の値はネイティブイベントの加速スクロール量から計算されます。この値は通常、Safari や Chrome の値よりもはるかに大きくなります。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 代わりに待ち受けすべき標準の {{domxref("Element/wheel_event", "wheel")}} イベント。
