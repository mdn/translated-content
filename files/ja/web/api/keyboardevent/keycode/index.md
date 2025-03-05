---
title: "KeyboardEvent: keyCode プロパティ"
short-title: keyCode
slug: Web/API/KeyboardEvent/keyCode
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

非推奨の **`KeyboardEvent.keyCode`** 読み取り専用プロパティは、押されたキーの変更されていない値を識別するシステムおよび実装に依存する数値コードを表します。

これは通常、キーに対応する 10 進数の ASCII ({{RFC(20)}}) または Windows 1252 コードです。キーを識別できない場合は、この値は `0` になります。

これはしばらく非推奨となっていますので、できれば使用しないようにしてください。代わりに、もし実装されていれば {{domxref("KeyboardEvent.code")}} を使用してください。残念ながら、まだ実装されていないブラウザーもありますので、対象となるすべてのブラウザーで対応するものを使用するように注意する必要があります。

> [!NOTE]
> ウェブ開発者は `keydown` と `keyup` イベントを処理する際に、表示可能な文字に対して `keyCode` 属性を使用するべきではありません。前述のように、`keyCode` 属性は表示可能な文字、特に <kbd>Shift</kbd> や <kbd>Alt</kbd> キーが押された状態での文字に対しては有用ではありません。ショートカットキーハンドラーを実装する場合、通常は {{domxref("Element/keypress_event", "keypress")}} イベントの方がよいでしょう（少なくとも Gecko を使用するランタイムではそうでしょう）。

## 例

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // 既定のアクションがキャンセルされている場合は何もしないようにします。
    }

    let handled = false;
    if (event.key !== undefined) {
      // KeyboardEvent.key でイベントを処理し、handled を true に設定します。
      handled = true;
    } else if (event.keyCode !== undefined) {
      // KeyboardEvent.keyCode でイベントを処理し、handled を true に設定します。
      handled = true;
    }

    if (handled) {
      // イベントが処理された場合、"ダブルアクション" を抑制する
      event.preventDefault();
    }
  },
  true,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## keyCode の値

### 標準位置で表示可能なキー

標準位置で表示可能なキーを押したり離したりすることで発生するキーイベントの値は、ブラウザー間で互換性がありません。

IE はネイティブの仮想キーコードの値を `KeyboardEvent.keyCode` として公開するだけです。

Google Chrome、Chromium、Safari は入力された文字から値を決定する必要があります。入力文字が US キーボードレイアウトで入力できる場合、 US キーボードレイアウトの `keyCode` 値を使用します。

Firefox は、キーによって入力可能な {{Glossary("ASCII")}} 文字から `keyCode` 値を取得します。 shift 修飾子や ASCII 対応キーボードレイアウトであった場合も含みます。詳しくは以下のルールを参照してください。

1. システムが Windows で、押されたキーのネイティブキーコードが a-z または 0-9 であることを示す場合、そのキーコードを使用します。
2. システムが Mac で、押されたキーのネイティブキーコードが 0-9 である場合、そのキーコードを使用します。
3. 押されたキーが ASCII のアルファベットまたは数字を修飾キーなしで入力する場合、それに対応するキーコードを使用します。
4. 押されたキーが、 ASCII アルファベットまたは数字を Shift キーで修飾して入力する場合、そのキーコードを使用します。
5. 押されたキーが、別の ASCII 文字を修飾キーなしで入力する場合、それに対応するキーコードを使用します。
6. 押されたキーが、別の ASCII文字を Shift キー修飾で入力する場合、それに対応するキーコードを使用します。
7. それ以外の場合、すなわち、押されたキーが Unicode 文字を入力する場合は以下の通り。

   1. キーボードレイアウトが ASCII 対応の（ASCII アルファベットを入力できる）場合、 0 を使用するか、[下記の追加ルール](#keycode_of_punctuation_keys_on_some_keyboard_layout)で計算します。
   2. それ以外の場合、つまりキーボードレイアウトが ASCII に対応していない場合は、最も優先度の高い環境にインストールされている ASCII に対応したキーボードレイアウトを使用します。

      1. 代替キーボードレイアウトで押されたキーが ASCII のアルファベットまたは数字を入力する場合、そのキーコードを使用します。
      2. それ以外の場合、 0 を使用するか、[下記の追加ルール](#keycode_of_punctuation_keys_on_some_keyboard_layout)で計算します。

Gecko は区切り記号キーの `keyCode` 値を、できる限り以下の規則で設定します（上記のリストのポイント 7.1 または 7.2 に到達したとき）。

> [!WARNING]
> これらの新しい追加ルールの目的は、米国式キーボードレイアウトの区切り記号キーに unicode 文字をマッピングしているユーザーが、 Firefox に対応したウェブアプリケーションを ASCII に対応したキーボードレイアウトのみ、または米国式キーボードレイアウトのみで使用できるようにするためです。そうでなければ、新しく割り当てられた `keyCode` 値が他のキーと衝突する可能性があります。例えば、アクティブなキーボードレイアウトがロシア語の場合、 `"Period"` キーと `"Slash"` キーの `keyCode` 値は**どちらも** `190` (`KeyEvent.DOM_VK_PERIOD`) になります。もし、これらのキーを区別する必要があるが、世界中の全てのキーボードレイアウトに自分で対応したくない場合は、おそらく {{domxref("KeyboardEvent.code")}} を使用した方が良いでしょう。

1. macOS または Linux を使用している場合

   1. アクティブなキーボードレイアウトが ASCII に対応したものではなく、代替の ASCII 対応のキーボードレイアウトが利用可能な場合。

      1. もし、 ASCII に対応したキーボードレイアウトが、修飾されていないキーだけで ASCII 文字を生成する場合、その文字の `keyCode` を使用します。
      2. もし、代替の ASCII に対応したキーボードレイアウトで、 Shift キーで修飾した ASCII 文字が生成された場合、シフトされた文字の `keyCode`を使用します。
      3. それ以外の場合は、 US キーボードレイアウトがアクティブなときにキーが生成する ASCII 文字を `keyCode` に使用します。

   2. それ以外の場合は、 US キーボードレイアウトがアクティブなときにキーが生成する ASCII 文字を `keyCode` に使用します。

2. Windows を使用している場合

   1. US キーボードレイアウトがアクティブなときに Windows の同じ仮想キーコードに割り当てられたキーによって生成される ASCII 文字を `keyCode` 値に使用します。

<table class="no-markdown">
  <caption>
    標準的な位置にある表示可能なキーによって発生する keydown イベントのブラウザーごとの keyCode 値
  </caption>
  <thead>
    <tr>
      <th scope="row">{{domxref("KeyboardEvent.code")}}</th>
      <th colspan="3" scope="col">IE 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th></th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Digit1"</code></th>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit2"</code></th>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit3"</code></th>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit4"</code></th>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit5"</code></th>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit6"</code></th>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit7"</code></th>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit8"</code></th>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit9"</code></th>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit0"</code></th>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyA"</code></th>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyB"</code></th>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyC"</code></th>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyD"</code></th>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyE"</code></th>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyF"</code></th>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyG"</code></th>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyH"</code></th>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyI"</code></th>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyJ"</code></th>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyK"</code></th>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyL"</code></th>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyM"</code></th>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyN"</code></th>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyO"</code></th>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyP"</code></th>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyQ"</code></th>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyR"</code></th>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyS"</code></th>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyT"</code></th>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyU"</code></th>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyV"</code></th>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyW"</code></th>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyX"</code></th>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyY"</code></th>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyZ"</code></th>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Internet Explorer 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

<table class="no-markdown">
  <caption>
    標準的な位置（US レイアウトでは区切り記号）にある表示可能なキーによって発生する keydown イベントのブラウザー別の keyCode の値。
  </caption>
  <thead>
    <tr>
      <th scope="row">{{domxref("KeyboardEvent.code")}}</th>
      <th colspan="3" scope="col">IE 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows (10.9)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th></th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Comma"</code></th>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Comma"</code></th>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code></th>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Period"</code></th>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code></th>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBB (187)</code>⚠️</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBB (187)</code>⚠️</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> [1]</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [2]</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [3]</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> [1]</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [2]</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code> [1]</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Semicolon"</code></th>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code></th>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Quote"</code></th>
      <td><code>0xDE (222)</code>⚠️ [1]</td>
      <td><code>0x38 (56)</code>⚠️</td>
      <td><code>0xDE (222)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code></th>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xC0(192)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xC0(192)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0x32 (50)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"BracketLeft"</code></th>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xC0 (192)</code>⚠️</td>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code></th>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"BracketRight"</code></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code></th>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xF4 (244)</code>⚠️</td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Backquote"</code></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code></th>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Backslash"</code></th>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code></th>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> [1]</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> [1]</td>
      <td><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code>[1]</td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Minus"</code></th>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBD (189)</code></td>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBD (189)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code></th>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xDE (222)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xDE (222)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code> [1]</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0x36 (54)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code>[1]</td>
      <td><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"Equal"</code></th>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xC0 (192)</code>⚠️</td>
      <td><code>0xBB (187)</code></td>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code></th>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xE2 (226)</code>⚠️</td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xE2 (226)</code>⚠️</td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [5]</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xA7 (167)</code></td>
      <td rowspan="2"><code>0xA7 (167)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"IntlRo"</code></th>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code></th>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [5]</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC </code>(220)</td>
      <td rowspan="2"><code>0xDC </code>(220)</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><kbd>Shift</kbd> + <code>"IntlYen"</code></th>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xBD (189)</code>⚠️</td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
      <th scope="col">米国</th>
      <th scope="col">日本語</th>
      <th scope="col">ギリシャ語</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Internet Explorer 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] JIS キーボードから入力される値です。 ANSI キーボードを使用すると、 US キーボードレイアウトから選択した keyCode 値と入力文字になります。

\[2] このキーはデッドキーです。イベント `keyup` の値は `0xBA (186)` です。

\[3] このキーはデッドキーです。イベント `keyup` の値は `0x10 (16)` です。

\[4] キーイベントは発行されない。

\[5] ギリシャ語キーボードレイアウトでは、そのキーは使用できません（いかなる文字も入力しません）。イベント `keyup` の値は `0x00 (0)` です。

### 非表示キー（機能キー）

<table class="no-markdown">
  <caption>
    修飾キーによって発生する keydown イベントのブラウザー別の keyCode の値
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"AltLeft"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"AltRight"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"AltRight"</code> （<code>"AltGraph"</code> キーであった場合）
      </th>
      <td>[1]</td>
      <td>[1]</td>
      <td>❌N/A</td>
      <td><code>0xE1 (225)</code>⚠️</td>
      <td>❌ N/A</td>
      <td>[1]</td>
      <td>❌ N/A</td>
      <td><code>0xE1 (225)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlLeft"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlRight"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"MetaLeft"</code></th>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0xE0 (224)</code>⚠️</td>
      <td><code>0x5B (91)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"MetaRight"</code></th>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5D (93)</code>⚠️</td>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5D (93)</code>⚠️</td>
      <td><code>0x5B (91)</code>⚠️</td>
      <td><code>0xE0 (224)</code>⚠️</td>
      <td><code>0x5B (91)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftLeft"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftRight"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] Windows では、 <kbd>AltGraph</kbd> キーを押すと `"ControlLeft"` と `"AltRight"` の両方のキーイベントを発行します。

\[2] 日本語キーボードレイアウトがアクティブである場合、 <kbd>CapsLock</kbd> キーを <kbd>Shift</kbd> なしで押すと `0xF0 (240)` が発生します。このキーは <kbd>Alphanumeric</kbd> キー (`"英数"`) として動作します。

\[3] 日本語キーボードレイアウトがアクティブである場合、 <kbd>CapsLock</kbd> キーを <kbd>Shift</kbd> なしで押すと `0x00 (0)` が発生します。このキーは <kbd>Alphanumeric</kbd> キー (`"英数"`) として動作します。

<table class="no-markdown">
  <caption>
    非表示キーによって発生した keydown イベントのブラウザー別の keyCode の値
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"ContextMenu"</code></th>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Enter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Space"</code></th>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Tab"</code></th>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Delete"</code></th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"End"</code></th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Help"</code></th>
      <td>❌ N/A</td>
      <td>❌ N/A</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td><code>0x2F (47)</code><br />⚠️ [3]</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td>❌ N/A</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td><code>0x06 (6)</code><br />⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"Home"</code></th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Insert"</code></th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageDown"</code></th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageUp"</code></th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowDown"</code></th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowLeft"</code></th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowRight"</code></th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowUp"</code></th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Escape"</code></th>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PrintScreen"</code></th>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x7C (124)</code><br />⚠️ [5]</td>
      <td><code>0x2A (42)</code>⚠️</td>
      <td><code>0x7C (124)</code><br />⚠️ [5]</td>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x2C (44)</code></td>
      <td><code>0x2A (42)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7D (125)</code><br />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7D (125)</code><br />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Pause"</code></th>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x7E (126)</code><br />⚠️ [5]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x7E (126)</code><br />⚠️ [5]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x13 (19)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] `keypress` イベントが発行され、その `keyCode` と `charCode` は `0x10 (16)` になりますが、実際にはテキストはエディターに入力されません。

\[2] Mac では、 <kbd>Help</kbd> キーは PC のキーボードの <kbd>Insert</kbd> キーに割り当てられています。これらの `keyCode` 値は <kbd>Insert</kbd> キーの `keyCode` 値と同じです。

\[3] Fedora 20 でテストしました。

\[4] `keyup` イベントのみが発生します。

\[5] PC の <kbd>PrintScreen</kbd>, <kbd>ScrollLock</kbd>, <kbd>Pause</kbd> はそれぞれ Mac の <kbd>F13</kbd>, <kbd>F14</kbd>, <kbd>F15</kbd> に割り当てられます。 Chrome と Safari はこれらを Mac のキーと同じ `keyCode` 値に割り当てています。

\[6] <kbd>Pause</kbd> キーを <kbd>Control</kbd> 付きで推すと `0x03 (3)` を生成します。

<table class="no-markdown">
  <caption>
    機能キーによる keydown イベントのブラウザー別の keyCode の値
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"F1"</code></th>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F2"</code></th>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F3"</code></th>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F4"</code></th>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F5"</code></th>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F6"</code></th>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F7"</code></th>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F8"</code></th>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F9"</code></th>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F10"</code></th>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F11"</code></th>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F12"</code></th>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F13"</code></th>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code> [1]</td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x2C (44)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F14"</code></th>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code> [1]</td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x91 (145)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F15"</code></th>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code> [1]</td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x13 (19)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F16"</code></th>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code> [1]</td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F17"</code></th>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code> [1]</td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F18"</code></th>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code> [1]</td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F19"</code></th>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F20"</code></th>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0xE5 (229)</code>⚠️ [5]</td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F21"</code></th>
      <td><code>0x84 (132)</code></td>
      <td><code>0x84 (132)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x84 (132)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F22"</code></th>
      <td><code>0x85 (133)</code></td>
      <td><code>0x85 (133)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x85 (133)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F23"</code></th>
      <td><code>0x86 (134)</code></td>
      <td><code>0x86 (134)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x86 (134)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F24"</code></th>
      <td><code>0x87 (135)</code></td>
      <td><code>0x87 (135)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x87 (135)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] Fedora 20 でテストしました。

\[2] PC では、<kbd>PrintScreen</kbd>、<kbd>ScrollLock</kbd>、<kbd>Pause</kbd> はそれぞれ Mac の <kbd>F13</kbd>、<kbd>F14</kbd>、<kbd>F15</kbd> に割り当てられています。Firefox はそれらに、PC のキーと同じ `keyCode` 値を設定します。

\[3] Fedora 20 でテストしました。 このキーは `GDK_Fxx` の keysyms を発生させません。キーが適切な keysyms を発生させる場合、これらの値は IE と同じでなければなりません。

\[4] Fedora 20 でテストしました。 Chromium では、このキーは DOM キーイベントを発生させません。

\[5] `keyUp` イベントの `keyCode` の値は `0x83 (131)` です。

\[6] Fedora 20 でテストしました。 Firefox では、このキーは DOM キーイベントを発生させません。

\[7] `keydown` イベントのみが発行されます。

\[8] Firefox では、 DOM キーイベントは発行されません。

### テンキー

<table class="no-markdown">
  <caption>
    NumLock 状態のテンキーで発生した keydown イベントのそれぞれのブラウザーの keyCode の値
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td><code>0x90 (144)</code></td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0C (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0C (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0C (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad0"</code></th>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code></th>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code></th>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code></th>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code></th>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code></th>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code></th>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code></th>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code></th>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadAdd"</code></th>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadComma"</code> （<code>","</code> を入力）</th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xBC (188)</code>⚠️</td>
      <td>❌ <em>常に <code>"."</code> を入力</em></td>
      <td><code>0xBC (188)</code>⚠️</td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
      <td>❌ <em>常に <code>"."</code> を入力</em></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadComma"</code> （<code>"."</code> または空文字列を入力）
      </th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xBE (190)</code>⚠️</td>
      <td><code>0x6E (110)</code>⚠️</td>
      <td><code>0xBE (190)</code>⚠️</td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
      <td><code>0x6E (110)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> （<code>"."</code> を入力）
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> （<code>","</code> を入力）
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDivide"</code></th>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEnter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEqual"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x3D (61)</code>⚠️</td>
      <td><code>0x3D (61)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadMultiply"</code></th>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadSubtract"</code></th>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] `"NumLock"` キーは Mac では `"Clear"` キーとして動作します。

<table class="no-markdown">
  <caption>
    NumLock 状態でないテンキーで発生した keydown イベントのブラウザー別の keyCode の値
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Numpad0"</code> (<code>"Insert"</code>)</th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code> (<code>"End"</code>)</th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code> (<code>"ArrowDown"</code>)</th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code> (<code>"PageDown"</code>)</th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code> (<code>"ArrowLeft"</code>)</th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code> (<code>"ArrowRight"</code>)</th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code> (<code>"Home"</code>)</th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code> (<code>"ArrowUp"</code>)</th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code> (<code>"PageUp"</code>)</th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDecimal"</code> (<code>"Delete"</code>)</th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

> [!NOTE]
> 最近の Mac には <kbd>NumLock</kbd> キーがないので、状態が分かりません。そのため、ロック解除の状態が利用できません。

## keyCode 値の定数

Gecko は、対応表を明示的に作成するために、`KeyboardEvent` に多くの `keyCode` 値を定義しています。これらの値は、Firefox のアドオン開発者にとっては便利ですが、一般的なウェブページではあまり有用ではありません。

<table class="no-markdown">
  <thead>
    <tr>
      <th>定数</th>
      <th>値</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_VK_CANCEL</code></td>
      <td>0x03 (3)</td>
      <td>キャンセルキー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HELP</code></td>
      <td>0x06 (6)</td>
      <td>Help キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_SPACE</code></td>
      <td>0x08 (8)</td>
      <td>Backspace キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_TAB</code></td>
      <td>0x09 (9)</td>
      <td>Tab キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLEAR</code></td>
      <td>0x0C (12)</td>
      <td>
        NumLock を解除した状態における、テンキーの "5" キー。 Mac の場合は、 NumLock キーと同じ位置にあるクリアキーを押します。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_RETURN</code></td>
      <td>0x0D (13)</td>
      <td>メインキーボードのリターン/エンターキー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ENTER</code></td>
      <td>0x0E (14)</td>
      <td>
        予約済みですが、使用されていません。 {{deprecated_inline}} （削除。
        [Firefox バグ 969247](https://bugzil.la/969247) を参照）
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_SHIFT</code></td>
      <td>0x10 (16)</td>
      <td>Shift キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONTROL</code></td>
      <td>0x11 (17)</td>
      <td>Control キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ALT</code></td>
      <td>0x12 (18)</td>
      <td>Alt （Mac では Option）キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAUSE</code></td>
      <td>0x13 (19)</td>
      <td>Pause キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CAPS_LOCK</code></td>
      <td>0x14 (20)</td>
      <td>Caps lock。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_KANA</code></td>
      <td>0x15 (21)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HANGUL</code></td>
      <td>0x15 (21)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EISU</code></td>
      <td>0x 16 (22)</td>
      <td>日本語の Mac キーボードの "英数" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_JUNJA</code></td>
      <td>0x17 (23)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_FINAL</code></td>
      <td>0x18 (24)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HANJA</code></td>
      <td>0x19 (25)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_KANJI</code></td>
      <td>0x19 (25)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ESCAPE</code></td>
      <td>0x1B (27)</td>
      <td>Escape キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONVERT</code></td>
      <td>0x1C (28)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NONCONVERT</code></td>
      <td>0x1D (29)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ACCEPT</code></td>
      <td>0x1E (30)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_MODECHANGE</code></td>
      <td>0x1F (31)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SPACE</code></td>
      <td>0x20 (32)</td>
      <td>スペースバー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAGE_UP</code></td>
      <td>0x21 (33)</td>
      <td>Page Up キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAGE_DOWN</code></td>
      <td>0x22 (34)</td>
      <td>Page Down キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_END</code></td>
      <td>0x23 (35)</td>
      <td>End キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HOME</code></td>
      <td>0x24 (36)</td>
      <td>Home キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_LEFT</code></td>
      <td>0x25 (37)</td>
      <td>左矢印。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_UP</code></td>
      <td>0x26 (38)</td>
      <td>上矢印。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_RIGHT</code></td>
      <td>0x27 (39)</td>
      <td>右矢印。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOWN</code></td>
      <td>0x28 (40)</td>
      <td>下矢印。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SELECT</code></td>
      <td>0x29 (41)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PRINT</code></td>
      <td>0x2A (42)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXECUTE</code></td>
      <td>0x2B (43)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PRINTSCREEN</code></td>
      <td>0x2C (44)</td>
      <td>Print Screen キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_INSERT</code></td>
      <td>0x2D (45)</td>
      <td>Ins(ert) キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DELETE</code></td>
      <td>0x2E (46)</td>
      <td>Del(ete) キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_0</code></td>
      <td>0x30 (48)</td>
      <td>"0" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_1</code></td>
      <td>0x31 (49)</td>
      <td>"1" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_2</code></td>
      <td>0x32 (50)</td>
      <td>"2" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_3</code></td>
      <td>0x33 (51)</td>
      <td>"3" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_4</code></td>
      <td>0x34 (52)</td>
      <td>"4" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_5</code></td>
      <td>0x35 (53)</td>
      <td>"5" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_6</code></td>
      <td>0x36 (54)</td>
      <td>"6" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_7</code></td>
      <td>0x37 (55)</td>
      <td>"7" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_8</code></td>
      <td>0x38 (56)</td>
      <td>"8" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_9</code></td>
      <td>0x39 (57)</td>
      <td>"9" キー（メインキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_COLON</code></td>
      <td>0x3A (58)</td>
      <td>コロン (":") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SEMICOLON</code></td>
      <td>0x3B (59)</td>
      <td>セミコロン (";") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_LESS_THAN</code></td>
      <td>0x3C (60)</td>
      <td>小なり ("&#x3C;") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EQUALS</code></td>
      <td>0x3D (61)</td>
      <td>等号 ("=") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_GREATER_THAN</code></td>
      <td>0x3E (62)</td>
      <td>大なり (">") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_QUESTION_MARK</code></td>
      <td>0x3F (63)</td>
      <td>疑問符 ("?") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_AT</code></td>
      <td>0x40 (64)</td>
      <td>アットマーク ("@") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_A</code></td>
      <td>0x41 (65)</td>
      <td>"A" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_B</code></td>
      <td>0x42 (66)</td>
      <td>"B" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_C</code></td>
      <td>0x43 (67)</td>
      <td>"C" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_D</code></td>
      <td>0x44 (68)</td>
      <td>"D" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_E</code></td>
      <td>0x45 (69)</td>
      <td>"E" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F</code></td>
      <td>0x46 (70)</td>
      <td>"F" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_G</code></td>
      <td>0x47 (71)</td>
      <td>"G" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_H</code></td>
      <td>0x48 (72)</td>
      <td>"H" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_I</code></td>
      <td>0x49 (73)</td>
      <td>"I" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_J</code></td>
      <td>0x4A (74)</td>
      <td>"J" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_K</code></td>
      <td>0x4B (75)</td>
      <td>"K" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_L</code></td>
      <td>0x4C (76)</td>
      <td>"L" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_M</code></td>
      <td>0x4D (77)</td>
      <td>"M" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_N</code></td>
      <td>0x4E (78)</td>
      <td>"N" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_O</code></td>
      <td>0x4F (79)</td>
      <td>"O" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_P</code></td>
      <td>0x50 (80)</td>
      <td>"P" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Q</code></td>
      <td>0x51 (81)</td>
      <td>"Q" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_R</code></td>
      <td>0x52 (82)</td>
      <td>"R" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_S</code></td>
      <td>0x53 (83)</td>
      <td>"S" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_T</code></td>
      <td>0x54 (84)</td>
      <td>"T" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_U</code></td>
      <td>0x55 (85)</td>
      <td>"U" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_V</code></td>
      <td>0x56 (86)</td>
      <td>"V" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_W</code></td>
      <td>0x57 (87)</td>
      <td>"W" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_X</code></td>
      <td>0x58 (88)</td>
      <td>"X" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Y</code></td>
      <td>0x59 (89)</td>
      <td>"Y" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Z</code></td>
      <td>0x5A (90)</td>
      <td>"Z" キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN</code></td>
      <td>0x5B (91)</td>
      <td>Windows では Windows ロゴキー。 Linux ではスーパー／ハイパーキー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONTEXT_MENU</code></td>
      <td>0x5D (93)</td>
      <td>コンテキストメニューを開くキー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SLEEP</code></td>
      <td>0x5F (95)</td>
      <td>このキーコードの Linux 対応は Gecko 4.0 で追加されました。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD0</code></td>
      <td>0x60 (96)</td>
      <td>"0" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD1</code></td>
      <td>0x61 (97)</td>
      <td>"1" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD2</code></td>
      <td>0x62 (98)</td>
      <td>"2" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD3</code></td>
      <td>0x63 (99)</td>
      <td>"3" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD4</code></td>
      <td>0x64 (100)</td>
      <td>"4" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD5</code></td>
      <td>0x65 (101)</td>
      <td>"5" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD6</code></td>
      <td>0x66 (102)</td>
      <td>"6" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD7</code></td>
      <td>0x67 (103)</td>
      <td>"7" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD8</code></td>
      <td>0x68 (104)</td>
      <td>"8" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD9</code></td>
      <td>0x69 (105)</td>
      <td>"9" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_MULTIPLY</code></td>
      <td>0x6A (106)</td>
      <td>"*" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ADD</code></td>
      <td>0x6B (107)</td>
      <td>"+" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SEPARATOR</code></td>
      <td>0x6C (108)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>DOM_VK_SUBTRACT</code></td>
      <td>0x6D (109)</td>
      <td>"-" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DECIMAL</code></td>
      <td>0x6E (110)</td>
      <td>テンキーの浮動小数点キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DIVIDE</code></td>
      <td>0x6F (111)</td>
      <td>"/" キー（テンキー）。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F1</code></td>
      <td>0x70 (112)</td>
      <td>F1 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F2</code></td>
      <td>0x71 (113)</td>
      <td>F2 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F3</code></td>
      <td>0x72 (114)</td>
      <td>F3 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F4</code></td>
      <td>0x73 (115)</td>
      <td>F4 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F5</code></td>
      <td>0x74 (116)</td>
      <td>F5 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F6</code></td>
      <td>0x75 (117)</td>
      <td>F6 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F7</code></td>
      <td>0x76 (118)</td>
      <td>F7 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F8</code></td>
      <td>0x77 (119)</td>
      <td>F8 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F9</code></td>
      <td>0x78 (120)</td>
      <td>F9 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F10</code></td>
      <td>0x79 (121)</td>
      <td>F10 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F11</code></td>
      <td>0x7A (122)</td>
      <td>F11 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F12</code></td>
      <td>0x7B (123)</td>
      <td>F12 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F13</code></td>
      <td>0x7C (124)</td>
      <td>F13 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F14</code></td>
      <td>0x7D (125)</td>
      <td>F14 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F15</code></td>
      <td>0x7E (126)</td>
      <td>F15 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F16</code></td>
      <td>0x7F (127)</td>
      <td>F16 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F17</code></td>
      <td>0x80 (128)</td>
      <td>F17 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F18</code></td>
      <td>0x81 (129)</td>
      <td>F18 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F19</code></td>
      <td>0x82 (130)</td>
      <td>F19 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F20</code></td>
      <td>0x83 (131)</td>
      <td>F20 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F21</code></td>
      <td>0x84 (132)</td>
      <td>F21 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F22</code></td>
      <td>0x85 (133)</td>
      <td>F22 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F23</code></td>
      <td>0x86 (134)</td>
      <td>F23 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F24</code></td>
      <td>0x87 (135)</td>
      <td>F24 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUM_LOCK</code></td>
      <td>0x90 (144)</td>
      <td>Num Lock キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SCROLL_LOCK</code></td>
      <td>0x91 (145)</td>
      <td>Scroll Lock キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_JISHO</code></td>
      <td>0x92 (146)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは富士通の OASYS で「辞書」キーに使われていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_MASSHOU</code></td>
      <td>0x93 (147)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは富士通の OASYS で「単語登録解除」キーに使われていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_TOUROKU</code></td>
      <td>0x94 (148)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは富士通の OASYS で「単語登録」キーに使われていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_LOYA</code></td>
      <td>0x95 (149)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは富士通の OASYS で「左親指シフト」キーに使われていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_ROYA</code></td>
      <td>0x96 (150)</td>
      <td>
        An
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは富士通の OASYS で「右親指シフト」キーに使われていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_CIRCUMFLEX</code></td>
      <td>0xA0 (160)</td>
      <td>サーカムフレックス ("^") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXCLAMATION</code></td>
      <td>0xA1 (161)</td>
      <td>感嘆符 ("!") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOUBLE_QUOTE</code></td>
      <td>0xA3 (162)</td>
      <td>二重引用符 (""") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HASH</code></td>
      <td>0xA3 (163)</td>
      <td>ハッシュ ("#") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOLLAR</code></td>
      <td>0xA4 (164)</td>
      <td>ドル記号 ("$") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PERCENT</code></td>
      <td>0xA5 (165)</td>
      <td>パーセント ("%") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_AMPERSAND</code></td>
      <td>0xA6 (166)</td>
      <td>アンパーサンド ("&#x26;") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_UNDERSCORE</code></td>
      <td>0xA7 (167)</td>
      <td>アンダースコア ("_") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_PAREN</code></td>
      <td>0xA8 (168)</td>
      <td>開き括弧 ("(") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_PAREN</code></td>
      <td>0xA9 (169)</td>
      <td>閉じ括弧 (")") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ASTERISK</code></td>
      <td>0xAA (170)</td>
      <td>アスタリスク ("*") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PLUS</code></td>
      <td>0xAB (171)</td>
      <td>正記号 ("+") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PIPE</code></td>
      <td>0xAC (172)</td>
      <td>パイプ ("|") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HYPHEN_MINUS</code></td>
      <td>0xAD (173)</td>
      <td>ハイフン/マイナス ("-") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_CURLY_BRACKET</code></td>
      <td>0xAE (174)</td>
      <td>開き波括弧 ("{") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_CURLY_BRACKET</code></td>
      <td>0xAF (175)</td>
      <td>閉じ波括弧 ("}") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_TILDE</code></td>
      <td>0xB0 (176)</td>
      <td>チルダ ("~") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_MUTE</code></td>
      <td>0xB5 (181)</td>
      <td>消音キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_DOWN</code></td>
      <td>0xB6 (182)</td>
      <td>音量下げキー</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_UP</code></td>
      <td>0xB7 (183)</td>
      <td>音量上げキー</td>
    </tr>
    <tr>
      <td><code>DOM_VK_COMMA</code></td>
      <td>0xBC (188)</td>
      <td>カンマ (",") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PERIOD</code></td>
      <td>0xBE (190)</td>
      <td>ピリオド (".") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SLASH</code></td>
      <td>0xBF (191)</td>
      <td>スラッシュ ("/") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_QUOTE</code></td>
      <td>0xC0 (192)</td>
      <td>逆引用符 ("`") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_BRACKET</code></td>
      <td>0xDB (219)</td>
      <td>開き角括弧 ("[") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_SLASH</code></td>
      <td>0xDC (220)</td>
      <td>バックスラッシュ ("\") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_BRACKET</code></td>
      <td>0xDD (221)</td>
      <td>閉じ角括弧 ("]") キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_QUOTE</code></td>
      <td>0xDE (222)</td>
      <td>単一引用符 (''') キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_META</code></td>
      <td>0xE0 (224)</td>
      <td>Linux の Meta キー、 Mac の Command キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ALTGR</code></td>
      <td>0xE1 (225)</td>
      <td>Linux の AltGr キー (Level 3 Shift キーまたは Level 5 Shift キー)。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_HELP</code></td>
      <td>0xE3 (227)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Olivetti ICO キーボードで使われています（いました？）
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_00</code></td>
      <td>0xE4 (228)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Olivetti ICO キーボードで使われています（いました？）
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_CLEAR</code></td>
      <td>0xE6 (230)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Olivetti ICO キーボードで使われています（いました？）
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_RESET</code></td>
      <td>0xE9 (233)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_JUMP</code></td>
      <td>0xEA (234)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA1</code></td>
      <td>0xEB (235)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA2</code></td>
      <td>0xEC (236)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA3</code></td>
      <td>0xED (237)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_WSCTRL</code></td>
      <td>0xEE (238)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_CUSEL</code></td>
      <td>0xEF (239)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_ATTN</code></td>
      <td>0xF0 (240)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FINISH</code></td>
      <td>0xF1 (241)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_COPY</code></td>
      <td>0xF2 (242)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_AUTO</code></td>
      <td>0xF3 (243)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_ENLW</code></td>
      <td>0xF4 (244)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_BACKTAB</code></td>
      <td>0xF5 (245)</td>
      <td>
        <a href="#windows_の_oem_固有キー">Windows の OEM 固有キー</a>。
        これは Nokia/Ericsson の端末で使用されていました。
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_ATTN</code></td>
      <td>0xF6 (246)</td>
      <td>IBM ミッドレンジコンピューター（AS/400 など）の Attn (Attention) キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CRSEL</code></td>
      <td>0xF7 (247)</td>
      <td>IBM 3270 キーボードレイアウトの CrSel （カーソル選択）キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXSEL</code></td>
      <td>0xF8 (248)</td>
      <td>IBM 3270 キーボードレイアウトの ExSel （拡張選択）キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EREOF</code></td>
      <td>0xF9 (249)</td>
      <td>IBM 3270 キーボードレイアウトの Erase EOF キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PLAY</code></td>
      <td>0xFA (250)</td>
      <td>IBM 3270 キーボードレイアウトの Play キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ZOOM</code></td>
      <td>0xFB (251)</td>
      <td>Zoom キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PA1</code></td>
      <td>0xFD (253)</td>
      <td>IBM 3270 キーボードレイアウトの PA1 キー。</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_CLEAR</code></td>
      <td>0xFE (254)</td>
      <td>
        クリアキーです。ただし、 <code>DOM_VK_CLEAR</code> との違いは分かりません。
      </td>
    </tr>
  </tbody>
</table>

### Windows の OEM 固有キー

Windows では、仮想キーコードのいくつかの値は、 OEM の特定のキー用に定義（予約）されています。これらは、非標準のキーボードの特殊なキーで利用可能です。言い換えれば、いくつかの値は、2 つ以上のベンダー（またはハードウェア）によって異なる意味で使用されています。

Gecko 21 （および 15 より古いバージョン）では、OEM 固有のキー値は Windows 上でのみ keyCode 属性で利用可能です。そのため、通常のウェブアプリケーションでは使用できません。それらはイントラネットのアプリケーション、または同様の状況においてのみ使用されます。

詳しくは MSDN の "[Manufacturer-specific Virtual-Key Codes (Windows CE 5.0)](<https://docs.microsoft.com/en-us/previous-versions/windows/embedded/aa452679(v=msdn.10)>)" を参照してください。
