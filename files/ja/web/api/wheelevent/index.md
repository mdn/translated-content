---
title: WheelEvent
slug: Web/API/WheelEvent
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{APIRef("UI Events")}}

**`WheelEvent`** インターフェイスは、ユーザーがマウスホイールやそれに似た機器を動かしたときに発行されるイベントを表します。

> [!NOTE]
> これは標準のホイールイベントインターフェイスです。古いバージョンのブラウザーは、標準外でブラウザー間の互換性のない `MouseWheelEvent` および {{DOMxRef("MouseScrollEvent")}} インターフェイスを実装していました。これらを避けて、このインターフェイスを使用してください。

> [!NOTE]
> {{domxref("Element/wheel_event", "wheel")}} イベントと {{domxref("Element/scroll_event", "scroll")}} イベントを混同しないでください。 `wheel` イベントの既定のアクションは実装固有のものです。したがって、 `wheel` イベントは必ずしも `scroll` イベントを発行するわけではありません。その場合でも、 `wheel` イベントの `delta*` 値は必ずしもコンテンツのスクロール方向を反映しているとは限りません。したがって、スクロールの方向を取得するために、 `wheel` イベントの `delta*` プロパティに頼らないようにしてください。代わりに、 `scroll` イベント内のターゲットの {{DOMxRef("Element.scrollLeft", "scrollLeft")}} や {{DOMxRef("Element.scrollTop", "scrollTop")}} の値の変化を検出するようにしてください。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("WheelEvent.WheelEvent", "WheelEvent()")}}
  - : `WheelEvent` オブジェクトを生成します。

## プロパティ

_このインターフェイスは、その祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} からプロパティを継承しています。_

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : 水平方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : 垂直方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : Z 軸方向のスクロール量を表す `double` を返します。
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}
  - : スクロール量の差分値の単位を表す `unsigned long` を返します。許容値は以下のとおりです:

    | 定数              | 値     | 説明                                                                                                                                                           |
    | ----------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `DOM_DELTA_PIXEL` | `0x00` | `delta*` はピクセル数で指定されます。                                                                                                                          |
    | `DOM_DELTA_LINE`  | `0x01` | `delta*` は行数で指定されます。マウスをクリックするたびに、コンテンツを 1 行スクロールします。行の高さを計算するために使用する方法は、ブラウザーに依存します。 |
    | `DOM_DELTA_PAGE`  | `0x02` | `delta*` はページ数で指定されます。マウスをクリックするたびに、コンテンツを 1 ページスクロールします。                                                         |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ピクセル単位の距離を表す整数（32 ビット）を返します。
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 水平スクロール量を表す整数を返します。
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 垂直スクロール量を表す整数を返します。

> [!NOTE]
> [Element: mousewheel イベント](/ja/docs/Web/API/Element/mousewheel_event)には、非推奨の `wheelDelta`、`wheelDeltaX`、`wheelDeltaY` プロパティについての追加の文書があります。

## メソッド

_このインターフェイスではメソッドが定義されていませんが、祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} のメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/wheel_event", "wheel")}} イベント
- 置き換えたインターフェイス:
  - Gecko の古いマウスホイールイベントオブジェクト: {{DOMxRef("MouseScrollEvent")}}
