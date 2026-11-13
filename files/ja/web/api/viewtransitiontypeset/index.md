---
title: ViewTransitionTypeSet
slug: Web/API/ViewTransitionTypeSet
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

**`ViewTransitionTypeSet`** は{{domxref("View Transition API", "ビュー遷移 API", "", "nocode")}} のインターフェイスで、アクティブなビュー遷移の型を表す [Set 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis)です。 これにより、遷移中にその型を動的に照会したり変更したりすることができます。

`ViewTransitionTypeSet` オブジェクトには、{{domxref("ViewTransition.types")}} プロパティからアクセスできます。

下記のプロパティおよびメソッドのリンクは、JavaScript の {{jsxref("Set")}} オブジェクトのドキュメントへリンクしています。

## インスタンスプロパティ

- {{jsxref("Set.prototype.size")}}
  - : この集合内の値の個数を返します。

## インスタンスメソッド

- {{jsxref("Set.prototype.add")}}
  - : 指定された値がこの集合内に存在しなければ、挿入します。
- {{jsxref("Set.prototype.clear()")}}
  - : この集合からすべての値を取り除きます。
- {{jsxref("Set.prototype.delete()")}}
  - : 指定された値がこの集合内に存在する場合は、取り除きます。
- {{jsxref("Set.prototype.entries()")}}
  - : この集合内の各要素を **`[value, value]` の配列**の形で挿入順で返す、新しいイテレーターオブジェクトを返します。
- {{jsxref("Set.prototype.forEach()")}}
  - : この集合内に存在する各値に対して、挿入順に一度ずつコールバック関数を呼び出します。
- {{jsxref("Set.prototype.has()")}}
  - : 引数で与えられた値をもつ要素がこの集合内に存在するかどうかを示す論理値を返します。
- {{jsxref("Set.prototype.keys()")}}
  - : {{jsxref("Set.prototype.values()")}} の別名です。
- {{jsxref("Set.prototype.values()")}}
  - : この集合内の各要素の**値**を挿入順に返す、新しいイテレーターオブジェクトを返します。
- [`Set.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : この集合内の各要素の**値**を挿入順に返す、新しいイテレーターオブジェクトを返します。

## 例

```js
// ビュー遷移を開始
const vt = document.startViewTransition({
  update: updateTheDOMSomehow,
  types: ["slideLeft", "fadeOut", "flipVertical"],
});

// 他の型を追加
vt.types.add("flipHorizontal");

// 型を削除
vt.types.delete("flipVertical");

// 集合内の型の個数を返す
console.log(vt.types.size);

// それぞれの型をコンソールにログ出力
vt.types.forEach((type) => console.log(type));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ViewTransition.types")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
- [ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
