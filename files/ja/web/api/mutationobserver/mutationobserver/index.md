---
title: MutationObserver.MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
---

{{APIRef("DOM WHATWG")}}

**MutationObserver()** コンストラクタ ({{domxref("MutationObserver")}} インターフェースの一部) は、指定されたコールバックを DOM イベントが発生したときに実行するオブザーバを作成して返します。DOM の監視はすぐに開始されるわけではありません。最初に {{domxref("MutationObserver.observe", "observe()")}} メソッドを呼び出し、DOM のどの部分を監視し、どのような変更を監視するかを決めなければなりません。

## 構文

```
var observer = new MutationObserver(callback);
```

### 引数

- `callback`
  - : 対象となるノードやサブツリー、および指定されたオプションの条件を満たす DOM の変更が起きるたびに呼び出される関数。このコールバック関数は、２つの引数を受け取ります。発生したそれぞれの変更を記述した {{domxref("MutationRecord")}} オブジェクトの配列、そしてコールバックを実行した {{domxref("MutationObserver")}} です。詳細については、以下の[例](#例)を参照してください。

### 戻り値

指定されたコールバックを DOM の変更が発生したときに呼び出すように設定された {{domxref("MutationObserver")}} オブジェクト。

## 例

この例では、ノードとそのすべての子において、ツリーへの要素の追加と削除、およびツリー内の要素の属性の変更を監視するように設定された MutationObserver を作成します。

### コールバック関数

```js
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "childList":
        /* ツリーに１つ以上の子が追加されたか、ツリーから削除された。
           mutation.addedNodes と mutation.removedNodes を参照。 */
        break;
      case "attributes":
        /* Mutation.target の要素の属性値が変更された。
           属性名は mutation.attributeName にあり、
           以前の値は mutation.oldValue にある。 */
        break;
    }
  });
}
```

callback() 関数は、{{domxref("MutationObserver.observe", "observe()")}} を呼び出して DOM の監視を開始するときに指定された監視リクエストの設定と一致する変更をオブザーバが確認したときに実行されます。

発生した変更の種類 (子のリストの変更または属性の変更のいずれか) は、{{domxref("MutationRecord.type", "mutation.type")}} プロパティを調べることによって判明します。

### オブザーバの作成と開始

このコードでは、実際に監視プロセスを設定します。

```js
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  childList: true,
  attributes: true,
  subtree: true, // 省略するか、false に設定すると、親ノードへの変更のみを監視する。
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
```

目的のサブツリーは、ID が "someElement" の要素を検索することで見つかります。オブザーバのオプションのセットは、observerOptions のレコードで設定します。この中で、childList と attributes の両方に true の値を指定することで、目的の情報を得ることができます。

そして、callback() 関数を指定して observer をインスタンス化し、対象のノードとオプションのレコードを指定して observe() を呼び出すことで、対象の DOM ノードの監視を開始します。

この時点から {{domxref("MutationObserver.disconnect", "disconnect()")}} が呼び出されるまで、targetNode をルートとする DOM ツリーに要素が追加されたり削除されたり、あるいは要素の属性が変更されるたびに `callback()` が呼び出されます。

## 仕様書

{{Specifications}}

## 各ブラウザの対応状況

{{Compat("api.MutationObserver.MutationObserver")}}
