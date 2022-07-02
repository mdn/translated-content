---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
tags:
  - メソッド
  - リファレンス
browser-compat: api.EventTarget.removeEventListener
translation_of: Web/API/EventTarget/removeEventListener
---
{{APIRef("DOM")}}

**`removeEventListener()`** は {{domxref("EventTarget")}} インターフェイスのメソッドで、以前に {{domxref("EventTarget.addEventListener()")}} で登録されたイベントリスナーを取り外します。
取り外されるイベントリスナーはイベントの型、イベントリスナー関数そのもの、照合プロセスに影響を与えるさまざまな任意のオプションを使用して識別します。
[取り外すイベントリスナーの照合](#取り外すイベントリスナーの照合)を参照してください。

`removeEventListener()` を呼び出したときの引数で `EventTarget` に登録されている {{domxref("EventListener")}} が特定できなかった場合は、何も起こりません。

{{domxref("EventListener")}} が {{domxref("EventTarget")}} の他のリスナーのイベント処理中に外された場合、イベントによって起動させることはありません。しかし、再接続は可能です。

> **Warning:** リスナーが _capture_ フラグを設定したものと設定しないものの 2 つ登録されている場合、それぞれを別々に取り外す必要があります。キャプチャするリスナーを取り外しても、同じリスナーのキャプチャしないバージョンには影響しませんし、その逆も同様です。

イベントリスナーを取り外すには、 {{domxref("AbortSignal")}} を {{domxref("EventTarget/addEventListener()", "addEventListener()")}} に渡して、後でそのシグナルを所有するコントローラーで {{domxref("AbortController/abort()", "abort()")}} を呼び出して行うことも可能です。

## 構文

```js
removeEventListener(type, listener);
removeEventListener(type, listener, options);
removeEventListener(type, listener, useCapture);
```

### 引数

- `type`
  - : 文字列で、イベントリスナーを取り外すイベントの種類を表します。
- `listener`
  - : イベントターゲットから取り外すイベントハンドラーの {{domxref("EventListener")}} 関数です。
- `options` {{optional_inline}}
  - : イベントリスナーに関する特性を指定する、オプションのオブジェクトです。

    次のオプションが使用できます。

    - `capture`: 論理値で、取り外す {{domxref("EventListener")}} がキャプチャリスナーとして登録されているか否かを指定します。この引数がない場合、既定の値として `false` が想定される。

- `useCapture` {{optional_inline}}
  - : 取り外す {{domxref("EventListener")}} がキャプチャリスナーとして登録されているかを指定します。この引数を省略した場合は、既定値の `false` であるとみなします。

### 返値

なし。

### 取り外すイベントリスナーの照合

以前に {{domxref("EventTarget.addEventListener", "addEventListener()")}} を呼び出して追加したイベントリスナーがある場合、最終的にそれを取り外す必要がある場合があります。当然ながら、同じ `type` と `listener` 引数を `removeEventListener()` には指定する必要があります。しかし、 `options` や `useCapture` 引数はどうでしょうか。

`addEventListener()` は、オプションが異なれば同じリスナーを同じ種類に複数回追加することができますが、 `removeEventListener()` がチェックするオプションは `capture`/`useCapture` フラグのみとなります。この値は `removeEventListener()` で一致するためには一致していなければなりませんが、他の値は一致していなくてもかまいません。

例えば、以下の `addEventListener()` で考えましょう。

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

そして、以下 2 つの `removeEventListener()` の呼び出しについて考えましょう。

```js
element.removeEventListener("mousedown", handleMouseDown, false);     // 失敗
element.removeEventListener("mousedown", handleMouseDown, true);      // 成功
```

1 番目の呼び出しは、 `useCapture` の値が異なるため失敗します。2 番目は、`useCapture` が一致するので成功します。

次に、以下の呼び出しを考えましょう。

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

ここでは `options` で `passive` を `true` に設定して指定していますが、他のオプションは既定値の `false` のままです。

では、以下の `removeEventListener()` の呼び出しについて、順番に見ていきましょう。`capture` または `useCapture` が `true` であるものは失敗して、そのほかは成功します。

`capture` の設定だけが `removeEventListener()` に関与します。

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // 成功
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // 成功
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // 失敗
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // 成功
element.removeEventListener("mousedown", handleMouseDown, false);                 // 成功
element.removeEventListener("mousedown", handleMouseDown, true);                  // 失敗
```

この点については、いくつかのブラウザのリリースで一貫性がないことに注意してください。特に理由がない限り、`addEventListener()` の呼び出しで使用したのと同じ値を `removeEventListener()` の呼び出しでも使用することが賢明でしょう。

## 例

この例は、`mouseover` ベースのイベントリスナーを追加して `click` ベースのイベントリスナーを取り外す方法を示します。

```js
const body = document.querySelector('body')
const clickTarget = document.getElementById('click-target')
const mouseOverTarget = document.getElementById('mouse-over-target')

let toggle = false;
function makeBackgroundYellow() {
  if (toggle) {
    body.style.backgroundColor = 'white';
  } else {
    body.style.backgroundColor = 'yellow';
  }

  toggle = !toggle;
}

clickTarget.addEventListener('click',
  makeBackgroundYellow,
  false
);

mouseOverTarget.addEventListener('mouseover', function () {
  clickTarget.removeEventListener('click',
    makeBackgroundYellow,
    false
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventTarget.addEventListener()")}}
