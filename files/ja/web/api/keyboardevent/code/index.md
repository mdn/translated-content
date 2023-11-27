---
title: "KeyboardEvent: code プロパティ"
short-title: code
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

`KeyboardEvent.code` プロパティは、（キー入力によって入力された文字ではなく）キーボード上の物理的なキーを表します。つまり、このプロパティはキーボードレイアウトや修飾キーの状態によって変更される前の値を返します。

入力機器が物理キーボードではなく、仮想キーボードやアクセシビリティ機器である場合、返値は物理キーボードから入力された場合にできるだけ近づくよう、物理キーボードと仮想入力機器との互換性を最大にするよう、ブラウザーによって設定されます。

このプロパティは、キーに関連付けられている文字ではなく、入力機器上の物理的な位置に基づいてキー入力を扱いたいときに役立ちます。これは特に、キーボードをゲームパッドのように使いたい場合などに有用です。ただし、 `KeyboardEvent.code` で報告された値を用いてキー入力で生成される文字を判断するべきではありません。キーコード名がキー上に印刷されている実際の文字や、キーが押されたときにコンピューターが生成する文字と一致するとは限らないからです。

例えば、返ってきた `code` が "`KeyQ`" は QWERTY レイアウトのキーボードでは <kbd>Q</kbd> キーですが、同じ Dvorak キーボードでは同じ `code` の値が <kbd>'</kbd> キーを表し、 AZERTY キーボードでは <kbd>A</kbd> キーを表すものでもあります。したがって、すべてのユーザーが特定のキーボードレイアウトを使用しているわけではないため、 `code` の値を用いてユーザーが認識しているキーの名前が何であるかを特定することはできません。

キーイベントに対応する文字が何であるかを判別するには、代わりに {{domxref("KeyboardEvent.key")}} プロパティを使用してください。

## 値

Windows, Linux, macOS におけるコード値は、 [KeyboardEvent: コード値](/ja/docs/Web/API/UI_Events/Keyboard_event_code_values)のページにあります。

## 例

### KeyboardEvent の使用例

#### HTML

```html-nolint
<p>
  キーボードのキーを押して、 KeyboardEvent のキーとコードの値がそれぞれどうなっているかを確認しましょう。
</p>
<div id="output" tabindex="0"></div>
```

#### CSS

```css
#output {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
  width: 95%;
  margin: auto;
}
#output:focus-visible {
  outline: 3px solid dodgerblue;
}
```

#### JavaScript

```js
window.addEventListener(
  "keydown",
  (event) => {
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    document.getElementById("output").appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
  },
  true,
);
```

#### 試してみましょう

キー入力をサンプルコードに取得させるために、キーを入力する前に output ボックスをクリックしてください。

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### ゲームでのキーボードイベントの扱い

この例では、典型的な "WASD" キーボードレイアウトを使用して前進、左折、後退、右折するゲームのキーボード入力を処理する {{domxref("Element/keydown_event", "keydown")}} イベントに対するイベントリスナーを確立しています。これは、ユーザーが AZERTY キーボードを使用している場合など、実際に対応する文字が何であるかに関係なく、物理的に同じ 4 つのキーを使用します。

#### HTML

```html
<p>
  WASD キー（AZERTY キーボードでは
  ZQSD）を使って移動したり方向を変えたりしましょう。
</p>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  class="world"
  tabindex="0">
  <polygon id="spaceship" points="15,0 0,30 30,30" />
</svg>
```

#### CSS

```css
.world {
  margin: 0px;
  padding: 0px;
  background-color: black;
  width: 400px;
  height: 400px;
}
.world:focus-visible {
  outline: 5px solid dodgerblue;
}
#spaceship {
  fill: orange;
  stroke: red;
  stroke-width: 2px;
}
```

#### JavaScript

この JavaScript のコードの最初の部分では、これから使用するいくつかの変数を定義しています。 `shipSize` にはプレイヤーが移動する船の大きさが入ります。 `position` はプレイフィールド内での船の位置を追跡するために使用します。 `moveRate` はキーを押すごとに船を前後に何ピクセル動かすかを表し、 `turnRate` はキーを押すごとに左右の操舵コントロールで何度回転させるかを表します。 `angle` は現在船に適用されている回転の量を度数で表し、 0 度（真上向き）から始まります。最後に、 `spaceship` は ID `"spaceship"` の要素を指すように設定されています。これは、プレイヤーが操作する船を表す SVG ポリゴンを指します。

```js
let shipSize = {
  width: 30,
  height: 30,
};

let position = {
  x: 200,
  y: 200,
};

let moveRate = 9;
let turnRate = 5;

let angle = 0;

let spaceship = document.getElementById("spaceship");
```

次に、関数 `updatePosition()` があります。この関数は、船を移動させる距離を入力として受け取ります。正の値は前進、負の値は後退を意味します。この関数は、移動した距離と船が現在向いている方向から、船の新しい位置を計算します。また、プレイフィールドの境界を越えた際に船が消えず、境界をまたぐようにする処理も行います。

```js
function updatePosition(offset) {
  let rad = angle * (Math.PI / 180);
  position.x += Math.sin(rad) * offset;
  position.y -= Math.cos(rad) * offset;

  if (position.x < 0) {
    position.x = 399;
  } else if (position.x > 399) {
    position.x = 0;
  }

  if (position.y < 0) {
    position.y = 399;
  } else if (position.y > 399) {
    position.y = 0;
  }
}
```

`refresh()` 関数は [SVG の transform](/ja/docs/Web/SVG/Attribute/transform) を使用して、向きと位置を適用する処理を行います。

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

最後に、`addEventListener()` メソッドを使用して {{domxref("Element/keydown_event", "keydown")}} イベントの待ち受けを開始します。それぞれのイベントで船の位置と回転角を更新し、 `refresh()` を呼び出して新しい位置と角度で船を描画するように動作します。

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }

    switch (event.code) {
      case "KeyS":
      case "ArrowDown":
        // Handle "back"
        updatePosition(-moveRate);
        break;
      case "KeyW":
      case "ArrowUp":
        // Handle "forward"
        updatePosition(moveRate);
        break;
      case "KeyA":
      case "ArrowLeft":
        // Handle "turn left"
        angle -= turnRate;
        break;
      case "KeyD":
      case "ArrowRight":
        // Handle "turn right"
        angle += turnRate;
        break;
    }

    refresh();

    if (event.code !== "Tab") {
      // Consume the event so it doesn't get handled twice,
      // as long as the user isn't trying to move focus away
      event.preventDefault();
    }
  },
  true,
);
```

#### 試してみましょう

キー入力が確実にサンプルコードに反映されるように、キーを押す前に下の黒いゲームプレイフィールドをクリックまたはフォーカスしてください。

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

このコードを改善する方法はいくつかあります。実際のゲームでは、キーリピートに頼るのではなく、{{domxref("Element/keydown_event", "keydown")}} イベントを監視して、それが発生したら動作を開始し、対応する {{domxref("Element/keyup_event", "keyup")}} が発生したら動作を停止することがほとんどだと思います。そうすることで、よりスムーズで高速な移動が可能になり、プレイヤーは移動と操舵を同時に行えるようになります。トランジションやアニメーションを使用して、自機の動きをより滑らかにすることもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
