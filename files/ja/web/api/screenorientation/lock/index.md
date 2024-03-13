---
title: ScreenOrientation.lock()
slug: Web/API/ScreenOrientation/lock
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("Screen Orientation")}}

{{domxref("ScreenOrientation")}} インターフェイスの **`lock()`** プロパティは、含んでいる文書の向きを指定された向きに固定します。

通常、向きの固定はモバイルデバイスで、かつブラウザーがフルスクリーン表示になっているときのみ有効です。向きの固定に対応している場合、以下で挙げる引数の値全てで動作しなければなりません。

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
      - : OS が定義する画面の自然な向きで、`portrait-primary` または `landscape-primary` のいずれかです。
    - `"landscape"`
      - : 画面の幅が画面の高さより長い向きです。プラットフォームの仕様により、`landscape-primary` か、`landscape-secondary` か、またはその両方です。
    - `"portrait"`
      - : 画面の高さが画面の幅より長い向きです。プラットフォームの仕様により、`portrait-primary` か、`portrait-secondary` か、またはその両方です。
    - `"portrait-primary"`
      - : 1 番目のポートレートモードです。自然な向きがポートレートモード (画面の高さが画面の幅より長い) のときは、これは自然な向きと同じであり、角度は 0 度に対応します。自然な向きがランドスケープモードのときは、どっちのポートレートの向きが `portrait-primary` でどっちが `portrait-secondary` かはユーザーエージェントが決めることができ、どっちかが 90 度、もう一方が270 度に対応します。
    - `"portrait-secondary"`
      - : 2 番目のポートレートの向きです。自然な向きがポートレートモードのときは、これは角度 180 度に対応します。(すなわち、デバイスは自然な向きから上下逆さまになっています) 自然な向きがランドスケープモードのときは、これはユーザーエージェントが決めることができ、`portrait-primary` として選ばれなかったほうの向きです。
    - `"landscape-primary"`
      - : 1 番目のランドスケープモードです。自然な向きがランドスケープモード (画面の幅が画面の高さより長い) のときは、これは自然な向きと同じであり、角度は 0 度に対応します。自然な向きがポートレートモードのときは、どっちのランドスケープの向きを `landscape-primary` とし、角度を 90 度とするか 270 度とするかはユーザーエージェントが決めることができます。(`landscape-secondary` がもう一方の向きと角度になります)
    - `"landscape-secondary"`
      - : 2 番目のランドスケープモードです。自然な向きがランドスケープモードのときは、自然な向きから上下逆さまであり、角度は 180 度です。自然な向きがポートレートモードのときは、これはユーザーエージェントが決めることができ、`landscape-primary` として選ばれなかったほうです。

### 返値

固定に成功した後解決する {{jsxref("Promise")}} です。

### 例外

プロミスが以下の例外により拒否されることがあります。

- `NotSupportedError` {{domxref("DOMException")}}

  - : ユーザーエージェントが画面の向きの固定に対応していません。

- `SecurityError` {{domxref("DOMException")}}

  - : ユーザーエージェント定義の固定前の条件を満たしていません。例えば、ブラウザーがトップレベルのブラウジングコンテキストの `Document` がフルスクリーンになっていることを要求するかもしれません。文書でブラウジングコンテキストの画面の向きの固定のサンドボックス化フラグが立っている場合も、プロミスがこのエラーで拒否されることがあります。

- {{jsxref("TypeError")}}
  - : 引数 `orientation` がありません。

## 例

この例は、画面の向きを現在の向きの反対に固定する方法を示します。なお、この例はモバイルデバイスおよび向きの変更に対応したその他のデバイスでのみ動作するでしょう。

```html
<div id="example_container">
  <button id="fullscreen_button">フルスクリーン</button>
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

// フルスクリーンボタン: 例をフルスクリーンにします
const fullscreen_btn = document.querySelector("#fullscreen_button");
fullscreen_btn.addEventListener("click", () => {
  log.textContent += "フルスクリーンボタンが押されました\n";
  const container = document.querySelector("#example_container");
  container.requestFullscreen().catch((error) => {
    log.textContent += `${error}\n`;
  });
});
```

この例を試すには、まずフルスクリーンボタンを押してください。例がフルスクリーンになったら、固定ボタンを押すと向きを切り替えることができ、固定解除ボタンを押すと自然な向きに戻すことができます。

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
