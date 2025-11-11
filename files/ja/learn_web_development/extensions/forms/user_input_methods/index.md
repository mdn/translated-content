---
title: ユーザー入力方法とコントロール
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

ウェブフォームでは、ユーザーの入力が要求されます。ウェブフォームを設計する際、あるいは実にあらゆるウェブコンテンツを設計する際には、ユーザーが端末やブラウザーをどのように操作するかを考慮することが重要です。ウェブユーザーの入力は、単純なマウスやキーボード操作にとどまりません。例えばパネルを考えてみてください。

この記事では、ユーザーがフォームや他のウェブコンテンツを操作する方法について、さまざまな方法を見ていきます。また、ユーザー入力の管理方法、現実世界の例、さらに詳しい情報へのリンクを指定します。

より複雑で操作性の高いフォームや他の UI 機能の開発を進める場合、調査が必要となる HTML 要素や JavaScript API は数多くあります。例えば、コンテンツの編集を可能にするためにセマンティック要素以外の要素を必要とするカスタムフォームコントロールを作成したい場合もあるでしょう。 タッチイベントに対応したり、画面の向きを決定または制御したり、フォームを全画面表示にしたり、ドラッグ＆ドロップ機能を有効にしたりしたい場合もあるでしょう。 このガイドでは、これらの機能すべてを紹介し、各トピックの詳細情報へのリンクも提供しています。

より多くのユーザーに良い使い勝手を得てもらうためには、マウス、キーボード、指でのタッチなど、複数の入力方法に対応する必要があります。利用できる入力メカニズムは、アプリケーションを実行する端末の能力に依存します。

常にキーボードのアクセシビリティを念頭に置くべきです。多くのウェブユーザーは、ウェブサイトやアプリを操作する際にキーボードのみを使用しています。彼らを機能から締め出すのは、良い考えではありません。

## 扱うトピック

- タッチパネルのディスプレイに対応するるため、[タッチイベント](/ja/docs/Web/API/Touch_events)は、モバイル端末から冷蔵庫のパネル、博物館のキオスクディスプレイに至るまで、タッチベースのユーザーインターフェイス上での指の動きを解釈します。
- [全画面 API](/ja/docs/Web/API/Fullscreen_API) を使用すると、コンテンツを全画面モードで表示することができます。これは、冷蔵庫や博物館のキオスクでフォームを表示する場合に必要となります。
- リッチテキストエディターのようなカスタムフォームコントロールを作成する必要がある場合、 [`contentEditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を使用すると、通常は編集できない HTML 要素から編集可能なコントロールを作成することができます。0
- [ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) により、ユーザーはページ上の要素をドラッグして、異なる場所にドロップすることができます。 これによって、アップロードするファイルの選択や、ページ内のコンテンツモジュールの並べ替えなどを行う際の使い勝手が改善されます。
- レイアウトで画面方向が重要である場合、 [CSS メディアクエリー](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation)を使用してブラウザーの方向に基づいてフォームのスタイル設定を行うことができます。また、 [画面方向 API](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) を使用して画面方向の状態を読み取り、他のアクションを行うことができます。

次の節では、可能な限り幅広いユーザーが貴社のウェブサイトやアプリケーションを使用できるようにするための推奨事項と最善の手法を設定して提供しています。

## 使用する入力の仕組みを決める

### キーボード

ほとんどのユーザーは、フォームコントロールにデータを入力する際にキーボードを使用します。また、一部のユーザーは、フォームコントロールに移動する際にもキーボードを使用します。アクセシビリティを確保し、より使い勝手の良いものにするには、[すべてのフォームコントロールに適切なラベルを付ける](/ja/docs/Learn_web_development/Extensions/Forms/Your_first_form#label、input、textarea_要素)ことが重要です。各フォームコントロールに正しく関連付けられた {{htmlelement("label")}} ラベルが設定されていれば、フォームはすべての人にとって完全にアクセス可能になります。特に、キーボードやスクリーンリーダーを操作してフォームにアクセスする人、あるいはまったく画面を使用しない人にとっては、その利便性が高まります。

特定のキーが押されたときに、あるフォームコントロールを検証するなど、キーボード操作を追加したい場合は、イベントリスナーを使用してキーボードイベントを捕捉し、対応する動作をすることができます。例えば、任意のキーが押されたときにコントロールを追加したい場合は、 window オブジェクトにイベントリスナーを追加する必要があります。

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` と `handleKeyUp` は、`keydown` と `keyup` イベントについての制御を実装する関数です。

> [!NOTE]
> キーボードイベントについて、より知りたい人は[イベントリファレンス](/ja/docs/Web/API/Document_Object_Model/Events) と {{domxref("KeyboardEvent")}} ガイドをご確認ください。

### マウス

マウスや他のポインターイベントも捕捉できます。ユーザーがマウスのようなポインティングデバイスと関わっている時に発生するイベントは {{domxref("MouseEvent")}} DOM インターフェイスによって表されます。一般的なマウスイベントには、[`click`](/ja/docs/Web/API/Element/click_event)、[`dblclick`](/ja/docs/Web/API/Element/dblclick_event)、[`mouseup`](/ja/docs/Web/API/Element/mouseup_event)、[`mousedown`](/ja/docs/Web/API/Element/mousedown_event) などのイベントがあります。マウスイベントインターフェイスが使用しているすべてのイベントの一覧は、[イベントリファレンス](/ja/docs/Web/API/Document_Object_Model/Events)にあります。

入力機器がマウスの場合、ユーザー入力をポインターロック API や、ドラッグ＆ドロップ API を実装することでも制御できます（下記を参照してください）。 [CSS を使用して、ポインティングデバイスの対応を調べる](/ja/docs/Learn_web_development/Core/CSS_layout/Media_queries#ポインティングデバイスの使用)こともできます。

### 指でのタッチ

タッチパネル端末に追加対応するためには、画面の解像度やユーザー入力の面で異なる機能性を考慮することが望ましいでしょう。[タッチイベント](/ja/docs/Web/API/Touch_events)は、タッチパネル端末に対話要素や一般的な対話ジェスチャーを実装するのに役立ちます。

タッチイベントを使用したい場合は、イベントリスナーを追加し、イベントが発生したときに呼び出されるハンドラー関数を指定する必要があります。

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

ここでの `element` は、あなたがタッチイベントを登録したい DOM 要素です。

> [!NOTE]
> タッチイベントでできることについての更なる情報は、[タッチイベントガイド](/ja/docs/Web/API/Touch_events)を読んでください。

### ポインターイベント

マウスだけがポインティングデバイスではありません。ユーザーの端末には、マウス、指先でのタッチ、ペン入力など、複数の入力方法が組み込まれている場合があります。これらのポインターはそれぞれサイズが異なります。各端末のイベント処理を標準化して、端末間のイベント管理を行う必要がある場合は、[ポインターイベント API](/ja/docs/Web/API/Pointer_events) が便利です。ポインターとは、マウスカーソル、ペン、タッチ（マルチタッチを含む）、または他のポインティング入力デバイスによって画面上で接触される任意の点のことです。

一般的なポインター入力を処理するイベントは、`pointerdown`、`pointermove`、`pointerup`、`pointerover`、`pointerout` などように、マウス用のイベントとよく似ています。 [`PointerEvent` インターフェイス](/ja/docs/Web/API/PointerEvent)では、サイズ、圧力、角度など、ポインティングデバイスについて把握したいすべての詳細が指定されています。

## コントロールの実装

### 画面の方向

ユーザーが縦向きまたは横向きのどちらのモードで使用しているかによって、若干異なるレイアウトが必要な場合は、 [CSS メディアクエリー](/ja/docs/Learn_web_development/Core/CSS_layout/Media_queries#メディア特性のルール)を使用して、[ウェブフォームのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)をする際に、画面のサイズや方向に基づいて異なるレイアウトやフォームコントロールの幅を定義することができます。

画面方向がフォームにとって影響がある場合、[画面方向 API](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) を通して画面方向の状態を読み取ったり、この状態が変更された際に通知を受け取ったり、画面方向を特定の状態（通常は縦長または横長）に固定したりすることができます。

- 方向のデータは、 {{domxref("ScreenOrientation.type")}} を通じて、または CSS で [`orientation`](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation) メディア特性を通じて取得できます。
- 画面の方向が変更されると、 {{domxref("ScreenOrientation.change_event", "change")}} イベントが画面オブジェクトに発行されます。
- 画面の方向を固定することは、 {{domxref("ScreenOrientation.lock()")}} メソッドを呼び出すことで可能です。
- {{domxref("ScreenOrientation.unlock()")}} メソッドは、過去に設定されていた画面ロックがすべて除去されます。

> [!NOTE]
> 画面方向 API についてのより多くの情報は、[画面の向きの制御](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)で確認することができます。

### 全画面

フォームを全画面モードで表示する必要がある場合、例えば、博物館のキオスク、料金所、あるいは実にあらゆる公に表示されるユーザーインターフェイスでフォームを表示する場合など、その要素で {{domxref("Element.requestFullscreen()")}} を呼び出すことで実現可能です。

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> 全画面表示機能をアプリケーションに追加する方法としては、[全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)についてのドキュメントを読んでください。

### ドラッグ＆ドロップ

一般的なユーザー操作としては、画面上の別の場所にドロップする要素を物理的にドラッグすることが挙げられます。 ドラッグ＆ドロップは、アップロードするファイルの選択や、ページ内のコンテンツモジュールの並べ替えなどを行う際に、ユーザーの使い勝手を改善する手助けとなります。 そのための API があります。

[ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) により、ユーザーは要素の上でマウスボタンをクリックしたまま、別の場所にドラッグし、マウスボタンを離して要素をドロップすることができます。

こちらは、コンテンツの一部分をドラッグできる例です。

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'このテキストはドラッグできます。')">
  このテキストはドラッグ<strong>できます</strong>。
</div>
```

私たちが実装する点は以下です:

- ドラッグ可能にしたい要素の [`draggable`](/ja/docs/Web/HTML/Reference/Global_attributes/draggable) 属性を `true` にセットします。
- [`dragstart`](/ja/docs/Web/API/HTMLElement/dragstart_event) イベントのためのリスナーを追加し、このリスナーの中にドラッグデータをセットします。

> [!NOTE]
> [MDN のドラッグ＆ドロップドキュメント](/ja/docs/Web/API/HTML_Drag_and_Drop_API)でもっと多くの情報を確認することができます。

### contentEditable

一般に、ユーザーからデータを収集するには、 {{HTMLElement("form")}} 内の {{HTMLElement("textarea")}} または適切な {{HTMLElement("input")}} 型を、 {{HTMLElement("form")}} 内で説明用の {{HTMLElement("label")}} とともに使用すべきです。しかし、これらの要素がニーズを満たさない場合もあります。例えば、リッチテキストエディターは、イタリック体、太字、通常文字を収集できますが、リッチテキストを収集できるフォームコントロールは存在しません。このようなケースでは、スタイル設定や編集が可能なカスタムコントロールを作成する必要があります。そのための属性があります。

どの DOM 要素も、 [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を使うことで、直接編集することができるようになります。

```css hidden
div {
  width: 300px;
  height: 130px;
  border: 1px solid gray;
}
```

```html-nolint
<div contenteditable="true">このテキストはユーザーが編集することができます。</div>
```

`contenteditable` 属性を指定すると、自動的に要素が文書の既定のタブ順序に追加されます。つまり、 [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を追加する必要はありません。しかし、[独自のフォームコントロールを作成](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)する際に、データ入力用に意味を持たない要素を使用する場合は、 JavaScript と [ARIA](/ja/docs/Web/Accessibility/ARIA) を追加して、フォームコントロールの機能を持たせる必要があります。

使い勝手を良くするためには、作成するカスタムフォームコントロールは、アクセシビリティがあり、ネイティブのフォームコントロールと同じ機能を持つ必要があります。

- 要素の [`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)、[ラベル](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)、[説明](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) を ARIA で追加する必要があります。
- すべてのユーザー入力方法、たとえば[キーボード](#キーボード)、[マウス](#マウス)、[タッチ](#指でのタッチ)、[ポインター](#ポインターイベント)の各イベントに対応する必要があります。
- ユーザーが更新したコンテンツの[検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)、[送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)、[保存](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)などの機能を処理するには、 JavaScript が必要です。

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> 例やその他リソースに関する情報は[コンテンツを編集可能にするガイド](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable)で確認することができます。

## チュートリアル

- [タッチイベントガイド](/ja/docs/Web/API/Touch_events)
- [画面の向きの管理](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)
- [ドラッグ操作ガイド](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [JavaScript によるフォームの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## 関連情報

- {{domxref("MouseEvent")}} インターフェイス
- {{domxref("KeyboardEvent")}} インターフェイス
- [タッチイベント](/ja/docs/Web/API/Touch_events) API
- [Pointer Lock](/ja/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [全画面](/ja/docs/Web/API/Fullscreen_API) API
- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML の [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性
