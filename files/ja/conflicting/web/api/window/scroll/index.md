---
title: ScrollToOptions
slug: conflicting/Web/API/Window/scroll
original_slug: Web/API/ScrollToOptions
---

{{APIRef("CSSOM")}}

The **`ScrollToOptions`** は CSSOM View 仕様の辞書で、ある要素がスクロールする位置、およびスクロールがスムーズに行われるかどうかを指定するプロパティを指定します。

`ScrollToOptions` 辞書は以下のメソッドの引数として提供することができます。

- {{domxref("Window.scroll()")}}
- {{domxref("Window.scrollBy()")}}
- {{domxref("Window.scrollTo()")}}
- {{domxref("Element.scroll()")}}
- {{domxref("Element.scrollBy()")}}
- {{domxref("Element.scrollTo()")}}

## プロパティ

- {{domxref("ScrollToOptions.top")}}
  - : ウィンドウまたは要素をスクロールするための Y 軸に沿ったピクセル数を指定します。
- {{domxref("ScrollToOptions.left")}}
  - : ウィンドウまたは要素をスクロールするための X 軸に沿ったピクセル数を指定します。
- {{domxref("ScrollToOptions.behavior")}}
  - : スクロールするのに滑らかにアニメーションするのか、一回のジャンプで瞬時に行うのかを指定します。これは実際には `ScrollToOptions` で実装されている `ScrollOptions` 辞書で定義されています。

## 例

[scrolltooptions の例](https://github.com/mdn/dom-examples/tree/master/scrolltooptions) ([ライブでご覧ください](https://mdn.github.io/dom-examples/scrolltooptions/)) では、3 つの値を入力するフォームを用意しました。左と上のプロパティ (X 軸と Y 軸に沿ってスクロールする位置) を表す 2 つの数値と、滑らかなスクロールを有効にするかどうかを示すチェックボックスです。

フォームが送信されると、入力された値を ScrollToOptions 辞書に格納し、辞書を引数として渡して {{domxref("Window.ScrollTo()")}} メソッドを呼び出すイベントハンドラーが実行されます。

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var scrollOptions = {
    left: leftInput.value,
    top: topInput.value,
    behavior: scrollInput.checked ? 'smooth' : 'auto'
  }

  window.scrollTo(scrollOptions);
});
```

## 仕様書

| 仕様書                                                                                           | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('CSSOM View', '#dictdef-scrolltooptions', 'ScrollToOptions')}} | {{Spec2('CSSOM View')}} |      |

## ブラウザーの互換性

{{Compat("api.ScrollToOptions", 10)}}
