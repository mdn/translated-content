---
title: "MutationObserver: observe() メソッド"
short-title: observe()
slug: Web/API/MutationObserver/observe
l10n:
  sourceCommit: 3fe05682ce997e441f705bd8b74a498e0485db11
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} の **`observe()`** メソッドは、`MutationObserver` コールバックを設定し、与えられたオプションに適合する DOM への変更の通知の受信を開始します。

設定によっては、オブザーバーは DOM ツリー内の単一のノード ({{domxref("Node")}}) を監視したり、そのノードとその子孫ノードの一部またはすべてを監視したりします。
同じノードは複数のオブザーバーによって監視することができ、同じ `MutationObserver` を複数回 `observe()` を呼び出すことで、DOMツリーのさまざまな部分の変更や、さまざまな型の変更を監視することができます。

`MutationObserver` を停止するには、{{domxref("MutationObserver.disconnect()")}} を呼び出してください。（これにより、そのコールバックはそれ以降発生しなくなります。）

## 構文

```js-nolint
observe(target, options)
```

### 引数

- `target`
  - : DOM ツリー内で変更を監視したり、監視するノードのサブツリーのルートになったりする DOM ノード ({{domxref("Node")}})（あるいは要素 ({{domxref("Element")}}) である可能性もあります）。
- `options`

  - : どの DOM の変更を `mutationObserver` の `callback` に報告するかを記述するオプションを提供するオブジェクト。
    `observe()` を呼ぶ際には、`childList`、`attribute`、`characterData` のうちの少なくとも 1 つは `true` でなければなりません。
    そうでない場合は、`TypeError` 例外が発生します。

    オプションは次の通りです。

    - `subtree` {{optional_inline}}
      - : `true` に設定すると、`target` を基点とするノードのサブツリー全体に監視が拡張されます。
        他のプロパティはすべて、`target` ノードだけに適用されるのではなく、サブツリーのすべてのノードに拡張されます。既定値は `false` です。 `target` の子孫が除去された場合、その子孫のサブツリーに対する変更は、その除去に関する通知が配信されるまで、引き続き監視されます。
    - `childList` {{optional_inline}}
      - : `true` に設定すると、対象とするノード（および `subtree` が `true` の場合はその子孫）に新しい子ノードが追加されたり、既存の子ノードが除去されたりしたかどうかを監視します。
        既定値は `false` です。
    - `attributes` {{optional_inline}}
      - : `true` に設定すると、監視対象のノードまたはノードの属性値の変更を監視します。 `attributeFilter` または `attributeOldValue` のいずれかを指定した場合は、既定値は `true` です。それ以外の場合、既定値は `false` です。
    - `attributeFilter` {{optional_inline}}
      - : 監視対象とする具体的な属性名の配列です。
        このプロパティが含まれていない場合、すべての属性に対する変更が変更通知を発生させます。
    - `attributeOldValue` {{optional_inline}}
      - : `true` に設定すると、ノードまたはノードの属性変更を監視している際に変更される属性の値を前回記録した値で置き換えます。
        属性の変更を監視し、値を記録する例については、[属性値の監視](#属性値の監視)を参照してください。
        既定値は `false` です。
    - `characterData` {{optional_inline}}
      - : `true` に設定すると、指定したターゲットノード（および `subtree` が `true` の場合はその子孫）を監視し、そのノードまたはノード群に格納されている文字データに変更があったかどうかを確認します。
        既定では、`characterDataOldValue` を指定した場合は `true`、指定しない場合は `false` です。
    - `characterDataOldValue` {{optional_inline}}
      - : `true` に設定すると、監視対象のノードのテキストが変更されるたびに、そのノードのテキストの前回値が記録されます。
        既定値は `false` です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref('TypeError')}}

  - : 以下のいずれかの状況で発生します。

    - `options` が、実際には何も監視しないように設定されている場合。
      （例えば、`childList`、`attributes`、`characterData` がすべて `false` の場合。）
    - `options.attributes` の値が `false` （これは属性の変更を監視しないことを示す）であるにもかかわらず、`attributeOldValue` は `true` であるか、または、`attributeFilter` が存在する場合。
    - `characterDataOldValue` は `true` であるにもかかわらず、 `characterData` が `false`（これは、文字の変更を監視しないことを示す）である場合。

## 例

### 基本的な使い方

この例では、**`observe()`** を {{domxref("MutationObserver")}} のインスタンスに対して呼び出し、設定した後、ターゲット要素とオプションオブジェクトを渡すとどうなるかを示します。

```js
// `MutationObserver` の新しいインスタンスを `observer` という名前で作成し、
// コールバック関数を渡す
const observer = new MutationObserver(() => {
  console.log("オブザーバーが検出を行ったときに実行されるコールバック");
});

// `observe()` を呼び出し、監視する要素とオプションオブジェクトを渡す
observer.observe(document.querySelector("#element-to-observe"), {
  subtree: true,
  childList: true,
});
```

### `subtree` を使用する際に子孫を除去

`subtree` オプションを使用してノードを監視している場合、そのサブツリーの一部が除去された後でも、そのノードの子孫に対する変更の通知を受け続けることができます。 ただし、除去に関する通知が配信された後は、切り離されたサブツリーに対するそれ以上の変更は、オブザーバーが検出を行わなくなります。

これにより、接続が切断された後、移されたノードまたはサブツリーの詳細な変更監視を開始する前に発生する変更を見逃すことを防ぎます。理論的には、発生した変更を記述する {{domxref("MutationRecord")}} オブジェクトを追跡していれば、変更を「元に戻す」ことができ、DOM を初期状態に巻き戻すことができるはずです。

```html
<div id="target">
  <div id="child"></div>
</div>
```

```js
const target = document.getElementById("target");
const child = document.getElementById("child");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log(mutation.type, mutation.target.id, mutation.attributeName);

    if (mutation.type === "childList" && mutation.target.id === "target") {
      // 子要素が除去されたという通知を受け取った後、切り離されたサブツリーに対する
      // さらなる変更については、オブザーバーが検出を行わなくなる
      child.setAttribute("data-bar", "");
    }
  });
});

observer.observe(target, {
  attributes: true,
  childList: true,
  subtree: true,
});

target.removeChild(child);
// この変更は "childList" を対象とする通知が配信される前に発生するため、
// これもオブザーバーが検出します。
child.setAttribute("data-foo", "");

// 出力:
// childList target null
// attributes child data-foo
// "attributes child data-bar" の通知はありません。
```

### `attributeFilter` の使用

この例では、変更オブザーバーを設定し、チャットルームのユーザーの名前を表示するサブツリー内の要素の `status` と `username` 属性の変更を監視します。これにより、例えば、ユーザーのニックネームの変更をコードに反映させたり、ユーザーがキーボードから離れている (AFK) またはオフラインであることをマークしたりすることができます。

```js
function callback(mutationList) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "attributes":
        switch (mutation.attributeName) {
          case "status":
            userStatusChanged(mutation.target.username, mutation.target.status);
            break;
          case "username":
            usernameChanged(mutation.oldValue, mutation.target.username);
            break;
        }
        break;
    }
  });
}

const userListElement = document.querySelector("#userlist");

const observer = new MutationObserver(callback);
observer.observe(userListElement, {
  attributeFilter: ["status", "username"],
  attributeOldValue: true,
  subtree: true,
});
```

### 属性値の監視

この例では、属性値の変更を監視する要素を観察し、その要素の [`dir`](/ja/docs/Web/HTML/Global_attributes/dir) 属性を `"ltr"` と `"rtl"` との間で切り替えるボタンを追加します。オブザーバーのコールバックの中で、属性の古い値をログ出力します。

#### HTML

```html
<button id="toggle">方向を切り替え</button><br />
<div id="container">
  <input type="text" id="rhubarb" dir="ltr" value="Tofu" />
</div>
<pre id="output"></pre>
```

#### CSS

```css
body {
  background-color: paleturquoise;
}

button,
input,
pre {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const toggle = document.querySelector("#toggle");
const rhubarb = document.querySelector("#rhubarb");
const observerTarget = document.querySelector("#container");
const output = document.querySelector("#output");

toggle.addEventListener("click", () => {
  rhubarb.dir = rhubarb.dir === "ltr" ? "rtl" : "ltr";
});

const config = {
  subtree: true,
  attributeOldValue: true,
};

const callback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "attributes") {
      output.textContent = `${mutation.attributeName} 属性は "${mutation.oldValue}" から変化しました。`;
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(observerTarget, config);
```

#### 結果

{{EmbedLiveSample("Monitoring attribute values")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
