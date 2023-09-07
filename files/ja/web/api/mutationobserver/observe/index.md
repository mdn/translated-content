---
title: MutationObserver.observe()
slug: Web/API/MutationObserver/observe
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} の **`observe()`** メソッドは、`MutationObserver` コールバックを設定し、与えられたオプションに適合する DOM への変更の通知の受信を開始します。設定によっては、オブザーバーは DOM ツリー内の単一の {{domxref("Node", "ノード")}} を監視したり、そのノードとその子孫ノードの一部またはすべてを監視したりします。

`MutationObserver` を停止するには、{{domxref("MutationObserver.disconnect()")}} を呼び出してください。(これにより、そのコールバックはそれ以降発生しなくなります。)

## 構文

```
mutationObserver.observe(target, options)
```

### 引数

- `target`
  - : DOM ツリー内で変更を監視したり、監視するノードのサブツリーのルートになったりする DOM{{domxref("Node", "ノード")}} (あるいは、{{domxref("Element", "要素")}}である可能性もあります。)
- `options`
  - : どの DOM の変更を`mutationObserver`の`callback`に報告するかを記述するオプションを提供する、{{domxref("MutationObserverInit")}}オブジェクト。

### 戻り値

`undefined`

### 例外

- {{jsxref('TypeError')}}

  - : 以下のいずれかの状況でスローされます。

    - 実際には何も監視されないように`options`が設定されている場合。
      (例えば、 {{domxref("MutationObserverInit.childList")}}、 {{domxref("MutationObserverInit.attributes")}}、{{domxref("MutationObserverInit.characterData")}} が全て`false`の場合)
    - `options.attributes` の値が `false` (これは属性の変更を監視しないことを示す)であるにも関わらず、`attributeOldValue` は `true` であるか、または、`attributeFilter` が存在する場合。
    - {{domxref("MutaitonObserverInit.characterDataOldValue", "characterDataOldValue")}} は `true` であるにも関わらず、 {{domxref("MutationObserverInit.characterData")}} が `false` (これは、文字の変更を監視しないことを示す)である場合。

## 使用における注意点

### MutationObserver の再利用

同一の `MutationObserver` で、`observe()` を複数回呼び出すことで、DOM ツリーの異なる部分や異なる種類の変更を監視することができます。ただし、注意すべき点がいくつかあります。

- 同じ`MutationObserver`で既に監視されているノードで`observe()`を呼び出すと、新しいオブザーバーがアクティブになる前に、監視されているすべてのターゲットから既存のすべてのオブザーバーが自動的に削除されます。
- 同じ`MutationObserver`がターゲットで使用されていない場合は、既存のオブザーバーを残して新しいオブザーバーを追加します。

### ノードの切り離しが行われた際の監視の追従

MutationObserver は、ノード間の直接接続が切断されても、時間の経過とともに目的のノードセットを監視できるようにすることを目的としています。ノードのサブツリーの監視を開始し、そのサブツリーの一部が切り離されて DOM 内の別の場所に移動した場合、切り離されたノードのセグメントを監視し続け、元のサブツリーからノードが切り離される前と同じコールバックを受け取ります。

つまり、監視しているサブツリーからノードが切り離されたことが通知されるまでは、切り離されたサブツリーとそのノードへの変更の通知を受けます。これにより、接続が切断された後、移動したノードやサブツリーの変更を監視し始める前に発生した変更を見逃してしまうことを防ぐことができます。

理論的には、発生した変更を記述した {{domxref("MutationRecord")}} オブジェクトを追跡していれば、変更を「元に戻す」ことができ、DOM を初期状態に戻すことができるはずです。

## 例

この例では、{{domxref("MutationObserver")}} のインスタンス上で **`observe()`** メソッドを呼び出す方法を示します。一度設定したら、ターゲット要素と {{domxref("MutationObserverInit")}} オプションオブジェクトを渡します。

```js
// identify an element to observe
const elementToObserve = document.querySelector("#targetElementId");

// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(function () {
  console.log("callback that runs when observer is triggered");
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, { subtree: true, childList: true });
```

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat("api.MutationObserver.observe")}}
