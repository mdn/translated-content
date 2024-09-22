---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

**`KeyboardEvent`** オブジェクトは、キーボードによるユーザーの操作を示します。個々のイベントがユーザーとキーとの間の単一の操作（または修飾キーとの組み合わせ）を表します。イベントの種類 ({{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keypress_event", "keypress")}}, {{domxref("Element/keyup_event", "keyup")}}) はキーボード操作が発生した種類を識別します。

> **メモ:** `KeyboardEvent` は、単にユーザーがキーボードのキーで行った操作が何であるかを低水準で示すものであり、その操作のその場面における意味は持ちません。テキストの入力を処理したい場合は、代わりに {{domxref("Element/input_event", "input")}} イベントを使用してください。ユーザーが他の種類のテキスト入力、例えば、タブレット端末やタブレット機器による手書き入力システムなどを使用している場合、キーボードイベントが発生することはありません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : `KeyboardEvent` オブジェクトを生成します。

## 定数

`KeyboardEvent` インターフェイスは、以下の定数を定義しています。

### キーボード上の位置

以下の定数は、キーイベントがキーボードのどの部分から発生したかを識別します。これらは、 `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` などとしてアクセスされます。

<table class="standard-table">
  <caption>
    キーボード上の位置の識別子
  </caption>
  <thead>
    <tr>
      <th scope="col">定数</th>
      <th scope="col">値</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0x00</td>
      <td>
        <p>
          このイベントによって記述されたキーは、キーボードの特定の範囲にあるものではないことを表します。テンキー上にあるわけでもなく（NumLock キーでない限り）、キーボードの左右で重複しているキーについては、何らかの理由でその位置と関連付けないことになっています。
        </p>
        <p>
          例としては、標準的な PC 101 US キーボードの英数字キー、 NumLock キー、スペースバーなどがあります。
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          このキーは、キーボード上の複数の位置に存在する可能性があるものであり、この場合は、キーボードの左側にあるものです。
        </p>
        <p>
          例としては、左の Ctrl キー、 Macintosh キーボードの左の Command キー、左の Shift キーなどがあります。
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>0x02</td>
      <td>
        <p>
          このキーは、キーボード上の複数の位置に存在する可能性があるものであり、この場合は、キーボードの右側にあるものです。
        </p>
        <p>
          例としては、右の Shift キーや右の Alt キー（Mac キーボードの Option キー）などがあります。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>0x03</td>
      <td>
        <p>
          このキーは、テンキー上に配置されているか、キーが複数の場所から発信される場合は、テンキーに関連付けられた仮想キーとなります。 NumLock キーはこのグループには該当せず、常に位置を <code>DOM_KEY_LOCATION_STANDARD</code> として符号化されます。
        </p>
        <p>
          例としては、テンキーの数字、テンキー側の Enter キー、テンキー側の小数点などがあります。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("UIEvent")}} および {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Alt</kbd> （macOS の場合は <kbd>Option</kbd> または <kbd>⌥</kbd>）キーが押されていれば `true` を返します。

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : 文字列で、このイベントが表す物理キーのコード値を返します。

    > [!WARNING]
    > これはユーザーのキーボードレイアウトを無視します。つまり、ユーザーが QWERTY キーボードレイアウトの "Y" の位置（ホーム行の上の行の中央付近）でキーを押した場合、ユーザーが QWERTZ キーボード（これはユーザーが "Z" を期待し、他のすべてのプロパティが "Z" を示すことになる）または Dvorak キーボードレイアウト（これはユーザーが "F" を期待する）であっても、常に "KeyY" を返します。ユーザーに正しいキーストロークを表示したい場合は、 {{domxref("Keyboard.getLayoutMap()")}} を使用してください。

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : 論理値で、そのキーイベントが発生した際に <kbd>Ctrl</kbd> キーが押されていれば `true` を返します。

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : 論理値で、このイベントが `compositionstart` と `compositionend` の間に発生したものであれば `true` を返します。
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントが表すキーのキー値を表します。
- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : 数値で、キーボードなどの入力機器上のキーの位置を表す値を返します。位置を特定する定数の一覧は、上記の[キーボード上の位置](#キーボード上の位置)にあります。
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Meta</kbd> キー（Mac キーボードでは <kbd>⌘ Command</kbd> キー、 Windows キーボードでは Windows キー (<kbd>⊞</kbd>)）が押されていれば `true` を返します。

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : 論理値で、このキーが押し続けられて自動リピートしている場合に `true` を返します。
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : 論理値で、このキーイベントが発生した際に <kbd>Shift</kbd> キーが押されていれば `true` を返します。

### 古いプロパティ

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}} {{ReadOnlyInline}}

  - : キーの Unicode 参照番号を表す数値を返します。このプロパティは `keypress` イベントでのみ使用されます。 `char` プロパティが複数の文字を含むキーの場合、これはそのプロパティの最初の文字の Unicode 値です。Firefox 26 では、表示可能な文字のコードが返されます。

- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}} {{ReadOnlyInline}}

  - : 押されたキーの修飾されていない値を識別する、システムおよび実装に依存する数値コードを表す数値を返します。

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : このプロパティは標準外であり、{{domxref("KeyboardEvent.key")}} に置き換えられて非推奨とされています。これは、DOM Level 3 Events の古い版に含まれていました。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("UIEvent")}} および {{domxref("Event")}} から継承したメソッドもあります。_

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : そのイベントが発生した際に修飾キー (<kbd>Alt</kbd> / <kbd>Shift</kbd> / <kbd>Ctrl</kbd> / <kbd>Meta</kbd>) が押されていたかどうかを表す論理値を返します。

### 古いメソッド

- {{domxref("KeyboardEvent.initKeyEvent()")}} {{deprecated_inline}}
  - : `KeyboardEvent` オブジェクトを初期化します。これは Firefox でのみ実装されていたものですが、もう Firefox でも対応していません。代わりに {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} コンストラクターを使用してください。
- {{domxref("KeyboardEvent.initKeyboardEvent()")}} {{deprecated_inline}}
  - : `KeyboardEvent` オブジェクトを初期化します。これは非推奨になりました。代わりに {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} コンストラクターを使用してください。

## イベント

以下のイベントは `KeyboardEvent` 型に基づいています。以下のリストでは、各イベントは、そのイベントの `Element` のハンドラーのドキュメントにリンクしおり、これは一般的にすべての宛先、例えば {{domxref("Element")}}、{{domxref("Document")}}、{{domxref("Window")}} に適用されます。

- {{domxref("Element.keydown_event", "keydown")}}
  - : キーが押されました。
- {{domxref("Element.keyup_event", "keyup")}}
  - : キーが離されました。

### 古いイベント

- {{domxref("Element.keypress_event", "keypress")}} {{deprecated_inline}}
  - : 通常は文字値を生成するキーが押されました。このイベントは端末への依存度が高いため、廃止されました。使用すべきではありません。

## 使用上の注意

イベントには {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keypress_event", "keypress")}}, {{domxref("Element/keyup_event", "keyup")}} の 3 種類があります。 Gecko ではほとんどのキーにおいて、以下のようにキーイベントが連続して発生します。

1. そのキーが最初に押された時点で `keydown` イベントが発生します。
2. そのキーが修飾キーでなかった場合、 `keypress` イベントが発生します。
3. ユーザーがキーから指を離した時点で `keyup` イベントが発生します。

### 特殊な場合

Caps Lock や Num Lock、 Scroll Lock などのキーは LED 表示も切り替わります。 Windows と Linux では、このようなキーは `keydown` と `keyup` イベントのみが発生します。

> [!NOTE]
> Linux の Firefox 12 以前では `keypress` イベントも発生していました。

しかし Mac OS X のイベントモデルに関する制約から、Mac OS X の Caps Lock は `keydown` イベントのみが発生します。（2007 年モデル以前の）ノート型では Num Lock にも対応していましたが、今日の Mac OS X では外部キーボードにおいても Num Lock に対応していません。 Num Lock キーがある古い MacBook 上では、Num Lock キーによってイベントは何も発生しません。また、 F14 キーが接続されている外部キーボードであれば、 Gecko は Scroll Lock に対応しています。古い特定のバージョンの Firefox では、このキーによって `keypress` イベントが発生していました。この矛盾する挙動は [Firefox バグ 602812](https://bugzil.la/602812) で修正されました。

### 自動リピートの扱い

キーが押されたままになると自動リピートが始まります。これによって以下のようにイベントが連続して発生します。

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<ユーザーがキーから指を離すまで繰り返し>>
6. `keyup`

この流れは DOM Level 3 仕様書に定義されているものです。しかし、これには以下のような注意点があります。

#### Ubuntu 9.4 など一部の GTK 環境における自動リピート

GTK を用いた環境の中には、自動リピート時にネイティブの key-up イベントが発生するものがあります。このため、キーが連続して押されているのか自動リピートなのかを Gecko 側から認識することはできません。そのようなプラットフォームでの自動リピート時では、以下のようにキーイベントが連続して発生します。

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<ユーザーがキーから指を離すまで繰り返し>>
8. `keyup`

こういった環境では残念ながら、自動リピートなのか連打されただけなのかをウェブコンテンツ側から区別することはできません。

## 例

```js
document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
      // do not alert when only Control key is pressed.
      return;
    }

    if (event.ctrlKey) {
      // Even though event.key is not 'Control' (e.g., 'a' is pressed),
      // event.ctrlKey may be true if Ctrl key is pressed at the same time.
      alert(`Combination of ctrlKey + ${keyName}`);
    } else {
      alert(`Key pressed ${keyName}`);
    }
  },
  false,
);

document.addEventListener(
  "keyup",
  (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === "Control") {
      alert("Control key was released");
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

`KeyboardEvent` インターフェイスの草案は数多く提案されてきました。まず最初は DOM Events Level 2 でしたが意見がまとまらず破棄され、続いて DOM Events Level 3 が提案されました。これにより、標準外な初期化メソッドが実装されてしまいました (Gecko では DOM Events Level 2 の初期に定義されていた {{domxref("KeyboardEvent.initKeyEvent()")}} が、他のブラウザーでは DOM Events Level 3 の初期に定義されていた {{domxref("KeyboardEvent.initKeyboardEvent()")}} です)。しかし両者のメソッドは、現代的なコンストラクターである {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} で置き換えられてました。

## ブラウザーの互換性

{{Compat}}

### 互換性のメモ

- Firefox 65 では、 `keypress` イベントは[表示可能でないキー](/ja/docs/Web/API/KeyboardEvent/keyCode#非表示キー（機能キー）)では発生しなくなりました（[Firefox バグ 968056](https://bugzil.la/968056)）が、 <kbd>Enter</kbd> キー、 <kbd>Shift</kbd> + <kbd>Enter</kbd> キー、 <kbd>Ctrl</kbd> + <kbd>Enter</kbd> キーの組み合わせでは発生します (これらはブラウザー間の互換性の目的のために維持されています)。

## 関連情報

- {{domxref("KeyboardEvent.code")}}
- {{domxref("KeyboardEvent.key")}}
- {{domxref("KeyboardEvent.getModifierState()")}}
