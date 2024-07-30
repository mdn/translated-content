---
title: "EventTarget: EventTarget() コンストラクター"
short-title: EventTarget()
slug: Web/API/EventTarget/EventTarget
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`EventTarget()`** コンストラクターは、新しい {{domxref("EventTarget")}} オブジェクトのインスタンスを作成します。

> [!NOTE]
> このコンストラクターを明示的に呼び出すことは、非常にまれです。ほとんどの場合、このコンストラクターは {{domxref("EventTarget")}} から派生したオブジェクトのコンストラクターの中で、 [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) キーワードによって使用されます。

## 構文

```js-nolint
new EventTarget()
```

### 引数

なし。

### 返値

{{domxref("EventTarget")}} オブジェクトのインスタンス。

## 例

### カウンターの実装

この例では、 `increment()` メソッドと `decrement()` メソッドを持つ `Counter` クラスを実装します。これらのメソッドが呼び出されると、カスタムイベント `"valuechange"` が発生します。

#### HTML

```html
<button id="dec" aria-label="Decrement">-</button>
<span id="currentValue">0</span>
<button id="inc" aria-label="Increment">+</button>
```

#### JavaScript

```js
class Counter extends EventTarget {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }

  #emitChangeEvent() {
    this.dispatchEvent(new CustomEvent("valuechange", { detail: this.value }));
  }

  increment() {
    this.value++;
    this.#emitChangeEvent();
  }

  decrement() {
    this.value--;
    this.#emitChangeEvent();
  }
}

const initialValue = 0;
const counter = new Counter(initialValue);
document.querySelector("#currentValue").innerText = initialValue;

counter.addEventListener("valuechange", (event) => {
  document.querySelector("#currentValue").innerText = event.detail;
});

document.querySelector("#inc").addEventListener("click", () => {
  counter.increment();
});

document.querySelector("#dec").addEventListener("click", () => {
  counter.decrement();
});
```

#### 結果

{{EmbedLiveSample("Implementing a counter")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventTarget")}}
