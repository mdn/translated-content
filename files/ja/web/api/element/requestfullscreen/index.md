---
title: "Element: requestFullscreen() メソッド"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: 3957d6261191fdf1252362e7d2092b5d59daca89
---

{{APIRef("Fullscreen API")}}

**`requestFullscreen()`** は {{domxref("Element")}} インターフェイスのメソッドで、要素を全画面モードで表示させるための非同期リクエストを発行します。

## 構文

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### 引数

- `options` {{optional_inline}}
  - : 全画面モードへの移行時の挙動を制御するオブジェクトです。
    利用できるオプションは以下の通りです。
    - `keyboardLock` {{optional_inline}}
      - : 選択したキーボードロックモードを制御します。
        - `"none"`
          - : キーボードロックは適用されていません。
            これがデフォルトのモードです。
        - `"browser"`
          - : ブラウザーのキーボードロックモードが有効になっています。
            このモードでは、通常はブラウザーやシステムのコードによって処理されるキーボードイベントが、ブラウザーからアプリケーションへ転送されます。
            アプリケーションは、使用したいキーやキーの組み合わせに関するイベントを介入し、[`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) を呼び出して、デフォルトの動作をキャンセルする必要があります。

            一部のブラウザーでは、通常は全画面モードを終了するために使用されるキーなど、特定のキーに対するデフォルトの動作が無効化されている場合があります。これは保証されているわけではないため、常に `preventDefault()` を呼び出すようにしてください。
            同時に、ブラウザーには、キーボードロック状態でも全画面モードを終了できる仕組みを提供することが推奨されます。

            情報については、下記の[キーボードのロック](#キーボードのロック)の節をご覧ください。

    - `navigationUI` {{optional_inline}}
      - : 要素が全画面モードのときにナビゲーション UI を表示するかどうかを制御します。
        デフォルト値では `"auto"` であり、これはブラウザーが何をすべきかを決定することを示す。
        - `"hide"`
          - : このとき、ブラウザーのナビゲーションインターフェイスは非表示になり、画面全体が要素の表示に割り当てられます。
        - `"show"`
          - : ブラウザーは、ページナビゲーションコントロールや、場合によっては他のユーザーインターフェイスを表示します。要素の寸法（および画面の知覚サイズ）は、このユーザーインターフェイスのためのスペースを残すために締め付けられます。
        - `"auto"`
          - : 上記の設定のうち、どれを適用するかはブラウザーが選択します。
            これがデフォルト値です。
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : 要素を全画面モードにする画面を指定します。
        これは {{domxref("ScreenDetailed")}} オブジェクトを値として取り、選択された画面を表します。

### 返値

{{JSxRef("Promise")}} です。全画面への移行が完了した時に `undefined` の値で解決し、例外が発生した際は拒否されます。

### 例外

エラーが発生した場合、返される `Promise` は、以下のいずれかの値で拒否されます。

- {{jsxref("TypeError")}}
  - : `TypeError` 例外は以下のいずれかの状況で送出されることがあります。
    - その要素を含む文書が完全にアクティブでない、つまり、現在のアクティブ文書でない。
    - その要素が文書内に含まれていない。
    - この要素は、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)の設定または他のアクセス制御機能により、 `fullscreen` 機能を使用することが許可されていない。
    - 要素とその文書が同じノードである。
    - この要素が[ポップオーバー](/ja/docs/Web/API/Popover_API)であり、既に {{domxref("HTMLElement.showPopover()")}} で表示されている。

- `NotSupportedError` {{domxref("DOMException")}}
  - : 渡された `options.keyboardLock` 引数は、このブラウザーでは対応していません。

## 解説

**`requestFullscreen()`** メソッドは、要素を全画面モードで表示させるための非同期リクエストを発行します。

このメソッドは、権限が要求されます。

- 全画面モードに移行する許可が与えられている場合は、返される {{JSxRef("Promise")}} が解決され、文書が全画面モードになったことを知ることができる {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベントを受け取るようになります。
- 権限が拒否された場合は、代わりに {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} イベントを受け取ります。

要素が元の文書から切り離されている場合、代わりにその文書がこれらのイベントを受け取ります。

### 互換性のある要素

全画面モードにするための要素は、次のようないくつかの単純な条件を満たしていなければなりません。

- 標準の HTML 要素または {{SVGElement("svg")}} または {{MathMLElement("math")}} のいずれかであること。
- {{HTMLElement("dialog")}} 要素ではないこと。
- 最上位の文書内か、[`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性を適用した {{HTMLElement("iframe")}} 内に位置していなければなりません。

さらに、設定された {{httpheader("Permissions-Policy")}} は、`fullscreen` 機能を使用することができる必要があります。

### 全画面起動の検出

全画面モードへの切り替えが成功したかどうかは、 `requestFullscreen()` が返す {{jsxref("Promise")}} を使用することで判断することができます。下記の[例](#例)にある通りです。

他のコードが全画面モードのオンとオフを切り替えたことを知るためには、 {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントに対するリスナーを {{domxref("Document")}} に設置する必要があります。
また、`fullscreenchange` イベントを待ち受けして、例えばユーザーが手動で全画面モードを切り替えた場合や、ユーザーがアプリケーションを切り替えたことでアプリケーションが一時的に全画面モードを終了させた場合などを把握しておくことも重要です。

### キーボードロック

キーボードロックにより、全画面アプリケーションは、通常であればブラウザーや基盤となる OS によって排他的に処理される一部のキーやキーの組み合わせを、介入して処理することができます。
これにより、例えばゲームでは、<kbd>Esc</kbd> キーを全画面モードを終了する代わりにメニューキーとして使用することができるなど、ユーザーの使い勝手を向上させることができます。
また、ほぼすべてのキーイベントをリモートコンピューターに転送したいリモートデスクトップ制御などのアプリケーションでも役立ちます。

全画面モードを有効にする際、[`options.keyboardLock`](#keyboardlock) 引数にキーボードロックモード値 `"browser"` を渡すことで、キーボードロックが有効になります。
全画面モードでキーボードロックが有効になっている場合、ブラウザーは「さらに多くの」キーボードイベントをアプリケーションに転送します。具体的なキーのセットはブラウザーによって異なります。
ウェブアプリケーションでは、まず [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) を呼び出してデフォルトの動作をキャンセルすることで、このイベントを処理する必要があります。
一部のキーの組み合わせはシステムのコントロールに使用されたり、プライバシー上のリスクを伴うため、このメカニズムを使用して介入したり無効化したりすることはできません（例えば Windows の <kbd>Ctrl+Alt+Delete</kbd>）。

なお、一部のブラウザーでは、キーボードロック状態の際、<kbd>Esc</kbd> キーのデフォルト動作が常に無効化されるため、このキーを押しても全画面モードから自動的に終了することはありません。
ただし、これは保証されているわけではないため、<kbd>Esc</kbd> キーの押下によって全画面モードが終了しないようにするには、`preventDefault()` を呼び出しておく必要があります。
より一般的には、いかなるキーボードイベントのデフォルト動作も、デフォルトで無効化されているとは想定できません。

ブラウザーは、キーボードロックが有効になっている場合、全画面モードを終了するための代替メカニズムを提供することが期待されています。
ほとんどのブラウザーでは、通常の全画面モードを終了するには <kbd>Esc</kbd> キーを使用し、キーボードロックを解除するには <kbd>Esc</kbd> キーを長押しします。
ブラウザーが全画面モードを終了すると、キーボードロックは無効になります。

## セキュリティの注意事項

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/Defenses/User_activation)が必要です。
この機能が動作するためには、ユーザーがページまたは UI 要素を操作する必要があります。

全画面モードは、[Permissions-Policy](/ja/docs/Web/HTTP/Guides/Permissions_Policy) ディレクティブ {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}} によって制御されます。

`screen-wake-lock` のデフォルトの許可リストは `self` です。
これにより、同一オリジンの入れ子フレームでは全画面での使用が可能になりますが、サードパーティコンテンツでは使用が制限されます。
サードパーティでの使用を有効にするには、サーバーがまず `Permissions-Policy` ヘッダーを設定し、具体的なサードパーティオリジンに対してその権限を与える必要があります。

```http
Permissions-Policy: fullscreen=(self b.example.com)
```

その場合、そのオリジンからのソースについては、フレームのコンテナー要素に `allow="fullscreen"` 属性を追加しなければなりません。

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

[権限 API](/ja/docs/Web/API/Permissions_API) の `fullscreen` 権限を使用することができます。これにより、このモードの使用権限が `granted`、`denied`、 `prompt`（ユーザーによる確認が要求される）のいずれであるかを検査できます。

## 例

### 全画面モードのリクエスト

この例では、{{HTMLElement("video")}} 要素の全画面モードのオン/オフを、<kbd>Enter</kbd> キーまたは <kbd>Shift</kbd> + <kbd>F</kbd> キーが押されたときに切り替えます。
このスクリプトは、{{domxref("document.fullscreenElement")}} を使用して、文書が現在全画面モードになっているかどうかを調べます。
文書が全画面モードになっている場合は、{{domxref("document.exitFullscreen()")}} を呼び出して全画面モードを終了します。
そうでない場合は、`<video>` 要素に対して `requestFullscreen()` を呼び出します。

```js
const video = document.querySelector("video");

document.addEventListener("keydown", (event) => {
  // なお、"F" は大文字小文字の区別がある（大文字です）
  if (event.key === "Enter" || event.key === "F") {
    // 全画面モードになっているかどうかを調べる
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    // そうでない場合は、全画面モードに入る
    video.requestFullscreen().catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  }
});
```

```html-nolint
<p>
  下記の動画要素には、花が咲く様子をタイムラプスで撮影した映像が再生されます。
  <kbd>Enter</kbd> または <kbd>Shift</kbd> + <kbd>F</kbd>（大文字の "F"）キーを押すと、全画面表示のオン／オフを切り替えることができます。
  この例を正常に動作させるには、埋め込まれた文書に<a href="https://developer.mozilla.org/ja/docs/Web/API/Element/focus_event">フォーカス</a>が設定されている必要があります。
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

{{embedlivesample("requesting_fullscreen_mode", , "400", "", "", "", "fullscreen")}}

### キーボードロックの使用

この例は、前回の例とほぼ同じですが、全画面表示時にキーボードをロックするように指定している点が異なります。

#### JavaScript

```js hidden
const video = document.querySelector("video");
```

変更後のキーイベントリスナーのコードを下記に示します。

まず、全画面モードにおいて、<kbd>Esc</kbd> キーのイベントを処理し、`event.preventDefault()` を呼び出してデフォルトの動作（全画面モードを終了すること）を無効にしている点です。

前の例と同様に、全画面モードでない状態で <kbd>Enter</kbd> または <kbd>Shift+F</kbd> が押された場合、`requestFullscreen()` を呼び出します。
ただし、この場合は `keyboardLock` オプションに値 `"browser"` を指定して渡します。

```js
document.addEventListener("keydown", (event) => {
  // 全画面モードになっているかどうかを調べる
  if (document.fullscreenElement) {
    // Esc キーを押して終了する操作を取り消す
    if (event.key === "Escape") {
      event.preventDefault();
      // Esc キーが押されたときに、することが最適な他の処理をすべて実行する
    }
  } else if (event.key === "Enter" || event.key === "F") {
    // Enter または F 押され、かつまだ全画面表示でない場合は、全画面表示を開く
    // なお、"F" は大文字小文字の区別がある（大文字です）
    video.requestFullscreen({ keyboardLock: "browser" }).catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  }
});
```

```html hidden
<p>
  下記の動画要素には、花が咲く様子をタイムラプスで撮影した映像が再生されます。
  <kbd>Enter</kbd> または <kbd>Shift</kbd> + <kbd>F</kbd>（大文字の "F"）キーを押すと、全画面表示のオン／オフを切り替えることができます。
  この例を正常に動作させるには、埋め込まれた文書に<a href="https://developer.mozilla.org/ja/docs/Web/API/Element/focus_event">フォーカス</a>が設定されている必要があります。
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

#### 結果

フレームを選択し、<kbd>Shift+F</kbd> を押してください。
ページを全画面表示させたら、全画面モードを終了する方法を説明する一時的なメモがページ上部に表示されるので、確認してください。

{{embedlivesample("Using keyboard lock", , "400", "", "", "", "fullscreen")}}

### navigationUI の使用

この例では、 {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} を文書の {{DOMxRef("Document.documentElement")}}、すなわち文書のルートである
{{HTMLElement("html")}} 要素に対して呼び出すことによって、文書全体を全画面モードにすることができるようになっています。

```js
let elem = document.documentElement;

elem
  .requestFullscreen({ navigationUI: "show" })
  .then(() => {})
  .catch((err) => {
    alert(
      `An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`,
    );
  });
```

プロミスの解決ハンドラーは何もしませんが、プロミスが拒否された場合は {{DOMxRef("Window.alert", "alert()")}} を呼び出すことでエラーメッセージが表示します。

### screen オプションの使用

要素を OS の第一画面で全画面にしたい場合は、以下のようなコードを使用することで実現できます。

```js
try {
  const primaryScreen = (await getScreenDetails()).screens.find(
    (screen) => screen.isPrimary,
  );
  await document.body.requestFullscreen({ screen: primaryScreen });
} catch (err) {
  console.error(err.name, err.message);
}
```

{{domxref("Window.getScreenDetails()")}} メソッドを使用して、現在の端末の {{domxref("ScreenDetails")}} オブジェクトを取得します。これには、利用できるさまざまな画面を表す {{domxref("ScreenDetailed")}} オブジェクトが格納されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}
- [`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
