---
title: WheelEvent
slug: Web/API/WheelEvent
---

{{APIRef("DOM Events")}}

**`WheelEvent`** インターフェイスは、ユーザーがマウスホイールやそれに似た機器を動かしたときに発行されるイベントを表します。

> **メモ:** これは標準のホイールイベントインターフェイスです。古いバージョンのブラウザーは、標準外でブラウザー間の互換性のない {{DOMxRef("MouseWheelEvent")}} および {{DOMxRef("MouseScrollEvent")}} インターフェイスを実装していました。これらを避けて、このインターフェイスを使用してください。

> **メモ:** {{domxref("Element/wheel_event", "wheel")}} イベントと {{domxref("Element/scroll_event", "scroll")}} イベントを混同しないでください。 `wheel` イベントの既定のアクションは実装固有のものです。したがって、 `wheel` イベントは必ずしも `scroll` イベントを発行するわけではありません。その場合でも、 `wheel` イベントの `delta*` 値は必ずしもコンテンツのスクロール方向を反映しているとは限りません。したがって、スクロールの方向を取得するために、 `wheel` イベントの `delta*` プロパティに頼らないようにしてください。代わりに、 `scroll` イベント内のターゲットの {{DOMxRef("Element.scrollLeft", "scrollLeft")}} や {{DOMxRef("Element.scrollTop", "scrollTop")}} の値の変化を検出するようにしてください。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("WheelEvent.WheelEvent", "WheelEvent()")}}
  - : `WheelEvent` オブジェクトを生成します。

## プロパティ

_このインターフェイスは、その祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} からプロパティを継承しています。_

- {{DOMxRef("WheelEvent.deltaX")}}{{ReadOnlyInline}}
  - : 水平方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaY")}}{{ReadOnlyInline}}
  - : 垂直方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaZ")}}{{ReadOnlyInline}}
  - : Z 軸方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaMode")}}{{ReadOnlyInline}}

  - : スクロール量の差分値の単位を表す `unsigned long` を返します。許容値は以下のとおりです:

    | 定数              | 値     | 説明                                  |
    | ----------------- | ------ | ------------------------------------- |
    | `DOM_DELTA_PIXEL` | `0x00` | `delta*` はピクセル数で指定されます。 |
    | `DOM_DELTA_LINE`  | `0x01` | `delta*` は行数で指定されます。       |
    | `DOM_DELTA_PAGE`  | `0x02` | `delta*` はページ数で指定されます。   |

## メソッド

_このインターフェイスではメソッドが定義されていませんが、祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} のメソッドを継承しています。_

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("UI Events", "#interface-wheelevent", "The <code>WheelEvent</code> interface")}} | {{Spec2("UI Events")}}     |          |
| {{SpecName('DOM3 Events', '#interface-wheelevent', 'WheelEvent')}}                                 | {{Spec2('DOM3 Events')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.WheelEvent")}}

## 関連情報

- {{domxref("Element/wheel_event", "wheel")}} イベント
- 置き換えたインターフェイス:

  - Gecko の古いマウスホイールイベントオブジェクト: {{DOMxRef("MouseScrollEvent")}}
  - Gecko 以外のブラウザーの古いマウスホイールイベントオブジェクト: {{DOMxRef("MouseWheelEvent")}}
