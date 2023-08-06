---
title: ユーザ入力とコントロール
slug: Web/Guide/User_input_methods
---

現代のウェブのユーザー入力は、単純なマウスやキーボードだけではありません。この記事では、ユーザー入力を管理し、オープンなウェブアプリに制御を実装するための推奨事項を、FAQ、実例、および基礎となる技術について、より詳細な情報を必要とする人のための詳細な情報へのリンクとともに提供します。関連する API とイベントには、[タッチイベント](/ja/docs/Web/API/Touch_events)、[Pointer Lock API](/ja/docs/Web/API/Pointer_Lock_API)、[Screen Orientation API](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)、[Fullscreen API](/ja/docs/Web/API/Fullscreen_API)、[ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) などがあります。

## ユーザー入力とコントロールのワークフロー

次の図式は、ユーザー入力の仕組みを実装するための典型的なワークフローを説明しています。

![](user-input-and-controls.png)

最初に、マウス、キーボード、指でのタッチなどから、アプリケーションで対象としたい入力の仕組みをどれにするかを決める必要があります。入力の仕組みを決めたのであれば、ウェブプラットフォームや JavaScript ライブラリーによって提供されているツールを使い、制御することができます。

## 推奨事項

利用できる入力の仕組みはアプリを動かしているデバイスの性能に依存します。

- デバイスの中にはタッチスクリーンディスプレイを提供するものがあります。そのウェブプラットフォームは、タッチを基にしたユーザーインターフェースで指の動きを解釈するための[タッチイベント](/ja/docs/Web/API/Touch_events)を提供します。
- ポインターを操作する方法としてマウスやタッチパッドを提供しているデバイスの場合、[Pointer Lock API](/ja/docs/Web/API/Pointer_Lock_API) が一人称視点の 3D ゲームの実装や、他のアプリがポイントを合わせているデバイスの全ての制御を要求するのに役立ちます。そして [Fullscreen API](/ja/docs/Web/API/Fullscreen_API) は、あなたのアプリを全画面モードで表示するのに役立ちます。
- [コンテンツが編集可能な要素（contentEditable など）](/ja/docs/Web/Guide/HTML/Editable_content)のような機能を使うことで、速いリッチテキストエディターを実装することができ、そして[ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)はユーザーがあなたのアプリ内に要素を移動することを可能にします。画面の向きがあなたのアプリで問題である時、[Screen Orientation API](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) を通して、画面の向きの状態を参照でき、またその他のアクションを実行できます。
- キーボードのアクセシビリティが適切か常に気に掛ける必要があります。多くのユーザーはキーボードのみを使いウェブサイトやアプリを操作します。ですので、あなたのシステムの機能性からそれを除外することは良くない考えです。

以下は推奨事項一式であり、オープンなウェブアプリでそのようなツールを利用するためのベストプラクティスです。

### 使用する入力の仕組みを決める

#### キーボード

キーボード入力はあなたのアプリによって制御できます。例えば、何らかのキーが押された時に制御を追加したい場合、ウィンドウオブジェクトにイベントリスナーを追加する必要があります。

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` と `handleKeyUp` は、`keydown` と `keyup` イベントについての制御を実装する関数です。

> **メモ:** キーボードイベントについて、より知りたい人は[イベントリファレンス](/ja/docs/Web/Reference/Events) と {{domxref("KeyboardEvent")}} ガイドをご確認ください。

#### マウス

ユーザーがマウスのようなポインティングデバイスと関わっている時に発生するイベントは {{domxref("MouseEvent")}} DOM インターフェースによって表されます。一般的なマウスイベントは、[`click イベント`](/ja/docs/Web/Reference/Events/click)、[`dblclick イベント`](/ja/docs/Web/API/Element/dblclick_event)、[`mouseup イベント`](/ja/docs/Web/API/Element/mouseup_event)、そして [`mousedown イベント`](/ja/docs/Web/Reference/Events/mousedown)を含みます。マウスイベントインターフェースが使用している全てのイベントの一覧は、[イベントリファレンス](/ja/docs/Web/Reference/Events)に記載されています。

入力デバイスがマウスの場合、ユーザー入力を Pointer Lock API やドラッグ＆ドロップ API の実装でも制御できます (下記を参照してください)。

#### 指でのタッチ

タッチスクリーンデバイスにインストールされることを目的としている ウェブアプリを開発している時、ディスプレイ解像度とユーザー入力に関して異なる性能を考慮することは良いプラクティスです。[タッチイベント](/ja/docs/Web/API/Touch_events)は、タッチスクリーンデバイス上のインタラクションな要素と一般的なインタラクションジェスチャーを実装するのに役立ちます。

タッチイベントを使いたいのであれば、イベントリスナーを追加して、イベントが発火された時に呼び出されるハンドラー関数を指定する必要があります。

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

ここでの `element` は、あなたがタッチイベントを登録したい DOM 要素です。

> **メモ:** タッチイベントでできることについての更なる情報は、[タッチイベントガイド](/ja/docs/Web/API/Touch_events)を読んでください。

#### ポインターイベント

マウス、指でのタッチ、ペン入力など複数の入力形式が内蔵されているデバイスを扱う時、これら全ての異なる制御の仕組みを機能させるソリューションを開発することは難しいかもしれません。[Pointer Events](http://www.w3.org/TR/pointerevents/) は、デバイス毎の扱いを標準化することにより、開発者がデバイスを横断してイベントを管理することをより簡単にするのに役立ちます。マウスカーソル、ペン、タッチ（マルチタッチを含む）、またはその他のポインティング入力デバイスによって、ポインターはスクリーン上のあらゆる接点となることができます。汎用的なポインター入力を扱うためのイベントは、`pointerdown`、`pointermove`、`pointerup`、`pointerover`、`pointerout` などのマウス用のイベントとよく似ています。

> **メモ:** Pointer Events はまだ広くサポートされていませんが、[pointer.js polyfill](https://github.com/mozilla/pointer.js) は Mozilla Github で利用可能です。

### コントロールの実装

#### ポインターロック

典型的なゲーム開発では、ブラウザやスクリーンの境界を超えた時でさえもマウスイベントにアクセスすることが必要なケースがあるかもしれません。[Pointer Lock API](/ja/docs/Web/API/Pointer_Lock_API) はポインティングデバイスの全ての制御を可能にします。

以下は `element` にポインターロックをリクエストしているコードです。

```js
element.requestPointerLock();
```

> **メモ:** 全てのチュートリアルとリファレンスは、[Pointer Lock API](/ja/docs/Web/API/Pointer_Lock_API) のページを読んでください。

#### 画面の向き

画面の向きがあなたのアプリケーションの問題である時、[Screen Orientation API](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) を通して画面の向きの状態を参照し、状態が変化した時に通知し、そして画面の向きを特定の状態（大抵はポートレートもしくはランドスケープ）に固定することができます。

画面の向きのデータは {{domxref("screen.orientation")}} 属性、または [`orientation`](/ja/docs/Web/CSS/@media/orientation) メディア特性を通して取得することができます。`screen.orientation` が変化した時、{{domxref("screen.orientationchange")}} イベントがスクリーンオブジェクトで発火されます。{{domxref("screen.lockOrientation")}} メソッドを呼ぶことで画面の向きを固定することができます。また、{{domxref("screen.unlockOrientation")}} メソッドはそれまで設定されていた画面のロックを全て解除します。

> **メモ:** Screen Orientation API についてのより多くの情報は[画面の向きの管理](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)で確認することができます。

#### 全画面

あなたのアプリケーションの要素を全画面モードで表示する必要があるかもしれません(例えば {{ htmlelement("video") }} のような)。その要素で {{domxref("Element.requestFullscreen()")}} を呼び出すことによって全画面モードを実現することができます。多くのブラウザーが、これをまだベンダー接頭辞とともに実装していることを覚えておいてください。ですので、あなたのコードを以下のようにフォークする必要があるかもしれません:

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
```

> **メモ:** 全画面の機能性をあなたのアプリケーションに追加することについてもっと知るには、私たちの[全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)についてのドキュメントを読んでください。

#### ドラッグ＆ドロップ

[ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) によりあなたのアプリケーションのユーザーは、クリックして要素を超えてマウスボタンを押し続け、他の場所にドラッグし、そしてその要素を移動先にドロップするためにマウスボタンを離すことができます。

以下は、コンテンツのセクションにドラッグできるようにする例です。

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

私たちが実装する点は以下です:

- ドラッグ可能にしたい要素の [`draggable`](/ja/docs/Web/HTML/Global_attributes#attr-draggable) 属性を true にセットします。
- [`dragstart`](/ja/docs/Web/API/Document/dragstart_event) イベントのためのリスナーを追加し、このリスナーの中にドラッグデータをセットします。

> **メモ:** [MDN のドラッグ＆ドロップドキュメント](/ja/docs/Web/API/HTML_Drag_and_Drop_API)でもっと多くの情報を確認することができます。

#### コンテンツを編集可能にする

[`contenteditable`](/ja/docs/Web/HTML/Global_attributes#attr-contenteditable) 属性を使うことで、開いているウェブアプリのあらゆる DOM 要素を直接編集することができます。

```html
<div contenteditable="true">このテキストは閲覧者が編集することができます。</div>
```

> **メモ:** 互換性や例、その他リソースに関する情報は [コンテンツを編集可能にするガイド](/ja/docs/Web/Guide/HTML/Editable_content)で確認することができます。

## 例

- **[複数のタッチポイントを同時に追跡する](/ja/DOM/Touch_events#Example)**
  - : この例は一度に複数のタッチ箇所を追跡しており、ユーザーは `{{htmlelement("canvas")}}` の中で一本以上の指で同時に描くことができます。タッチイベントをサポートしているブラウザーでのみ動きます。
- **[シンプルなポインターロックデモ](/ja/docs/Web/API/Pointer_Lock_API#example)**
  - : シンプルなコントロールシステムをセットアップするためのポインターロックの使い方を紹介するために、シンプルなポインターロックデモを記載しています。このデモでは `{{htmlelement("canvas")}}` 要素の中にボールを描くために JavaScript を使っています。canvas をクリックすると、ポインターロックはその後、マウスポインターの除去と直接マウスを使ってボールを移動させるために利用されます。
- **[コンテンツを編集可能にするデモ](http://html5demos.com/contenteditable)**
  - : このデモは、編集可能なドキュメントセクションを作成することに利用できる contenteditable がどのように動くか表示しており、その状態はその後 [ローカルストレージ](/ja/docs/Web/API/Web_Storage_API)を使い保存されます。

## チュートリアル

- [タッチイベントガイド](/ja/docs/Web/Guide/DOM/Events/Touch_events)
- [画面の向きの管理](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)
- [複数のアイテムのドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [ドラッグ操作ガイド](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)

## 関連情報

- {{domxref("MouseEvent")}}
- {{domxref("KeyboardEvent")}}
- [タッチイベント](/ja/docs/Web/API/Touch_events)
- [Pointer Lock API](/ja/docs/Web/API/Pointer_Lock_API)
- [Screen Orientation API](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [コンテンツを編集可能にする](/ja/docs/Web/Guide/HTML/Editable_content)
- [Keyboard events in Firefox OS TV](/ja/Firefox_OS/Platform/Keyboard_events_in_Firefox_OS_TV)
- [Implementing TV remote control navigation](/ja/docs/Mozilla/Firefox_OS/TVs_connected_devices/TV_remote_control_navigation)
