---
title: "ScreenOrientation: lock() メソッド"
short-title: lock()
slug: Web/API/ScreenOrientation/lock
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("Screen Orientation")}}

**`lock()`** は {{domxref("ScreenOrientation")}} インターフェイスのメソッドで、含んでいる文書の向きを指定された向きに固定します。

通常、向きの固定はモバイル端末で、かつブラウザーが全画面表示になっているときのみ有効です。向きの固定に対応している場合、以下で挙げる引数の値全てで動作しなければなりません。

## 構文

```js-nolint
lock(orientation)
```

### 引数

- `orientation`

  - : 向きの固定のタイプです。以下のいずれかです。

    - `"any"`
      - : `portrait-primary`、`portrait-secondary`、`landscape-primary`、`landscape-secondary` のいずれかです。
    - `"natural"`
      - : OS が定義する画面の自然な向きで、`portrait-primary` または `landscape-primary` のどちらかです。
    - `"landscape"`
      - : 画面の幅が画面の高さより長い向きです。プラットフォームの仕様により、`landscape-primary` か、`landscape-secondary` か、またはその両方です。
    - `"portrait"`
      - : 画面の高さが画面の幅より長い向きです。プラットフォームの仕様により、`portrait-primary` か、`portrait-secondary` か、またはその両方です。
    - `"portrait-primary"`
      - : 主ポートレートモードです。
        自然な向きがポートレートモード (画面の高さが画面の幅より長い) のときは、これは自然な向きと同じであり、角度は 0 度に対応します。
        自然な向きがランドスケープモードのときは、ユーザーエージェントがポートレートの向きを `portrait-primary` と `portrait-secondary` のどちらかで選択することができます。一方が 90 度、もう一方が 270 度に対応します。
    - `"portrait-secondary"`
      - : 副ポートレート方向です。
        自然な向きがポートレートモードのときは、これは角度 180 度に対応します（すなわち、端末は自然な向きから上下逆さまになっています）。
        自然な向きがランドスケープモードのときは、これはユーザーエージェントが決めることができ、`portrait-primary` として選ばれなかったほうの向きです。
    - `"landscape-primary"`
      - : 主ランドスケープモードです。
        自然な向きがランドスケープモード（画面の幅が画面の高さより長い）のときは、これは自然な向きと同じであり、角度は 0 度に対応します。
        自然な向きがポートレートモードのときは、`landscape-primary` とするランドスケープの向きを、90 度または 270 度のどちらかでユーザーエージェントが決めることができます（`landscape-secondary` がもう一方の角度の向きになります）。
    - `"landscape-secondary"`
      - : 副ランドスケープモードです。
        自然な向きがランドスケープモードのときは、自然な向きから上下逆さまであり、角度は 180 度です。
        自然な向きがポートレートモードのときは、これはユーザーエージェントが決めることができ、`landscape-primary` として選ばれなかったほうです。

### 返値

固定に成功した後解決する {{jsxref("Promise")}} です。

### 例外

プロミスが以下の例外により拒否されることがあります。

- `InvalidStateError` {{domxref("DOMException")}}

  - : 文書が完全にはアクティブでなかった場合に発生します。

- `SecurityError` {{domxref("DOMException")}}

  - : 文書の表示状態が非表示の場合、または文書がその機能の使用を禁止されている場合(例えば、 `iframe` 要素の `sandbox` 属性のキーワード `allow-orientation-lock` を省略した場合)に発生します。

- `NotSupportedError` {{domxref("DOMException")}}

  - : ユーザーエージェントが特定の画面の向きに固定できない場合に発生します。

- `AbortError` {{domxref("DOMException")}}

  - : 他の `lock()` メソッドが呼び出されている場合に発生します。

## 例

この例は、画面の向きを現在の向きの反対に固定する方法を示します。
なお、この例はモバイル端末および向きの変更に対応したその他の端末でのみ動作するでしょう。

```html
<div id="example_container">
  <button id="fullscreen_button">全画面</button>
  <button id="lock_button">固定</button>
  <button id="unlock_button">固定解除</button>
  <textarea id="log" rows="7" cols="85"></textarea>
</div>
```

```js
const log = document.getElementById("log");

// 固定ボタン: 画面の向きをもう一方の向き (90 度回転させた向き) に固定します
const rotate_btn = document.querySelector("#lock_button");
rotate_btn.addEventListener("click", () => {
  log.textContent += `固定ボタンが押されました\n`;

  const oppositeOrientation = screen.orientation.type.startsWith("portrait")
    ? "landscape"
    : "portrait";
  screen.orientation
    .lock(oppositeOrientation)
    .then(() => {
      log.textContent = `${oppositeOrientation} に固定しました\n`;
    })
    .catch((error) => {
      log.textContent += `${error}\n`;
    });
});

// 固定解除ボタン: (固定されていれば) 画面の向きの固定を解除します
const unlock_btn = document.querySelector("#unlock_button");
unlock_btn.addEventListener("click", () => {
  log.textContent += "固定解除ボタンが押されました\n";
  screen.orientation.unlock();
});

// 全画面ボタン: 例を全画面にします
const fullscreen_btn = document.querySelector("#fullscreen_button");
fullscreen_btn.addEventListener("click", () => {
  log.textContent += "全画面ボタンが押されました\n";
  const container = document.querySelector("#example_container");
  container.requestFullscreen().catch((error) => {
    log.textContent += `${error}\n`;
  });
});
```

この例を試すには、まず全画面ボタンを押してください。例が全画面になったら、固定ボタンを押すと向きを切り替えることができ、固定解除ボタンを押すと自然な向きに戻すことができます。

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
