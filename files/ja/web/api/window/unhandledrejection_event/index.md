---
title: 'Window: unhandledrejection イベント'
slug: Web/API/Window/unhandledrejection_event
---

{{APIRef("HTML DOM")}}

**`unhandledrejection`** イベントは、 JavaScript の拒否ハンドラーを持たない {{jsxref("Promise")}} が拒否されたときにスクリプトのグローバルスコープに送られます。 通常、これは {{domxref("window")}} ですが、 {{domxref("Worker")}} であることもあります。 これはデバッグや、予期しない場面でのエラーハンドリングのエラーの代替手段を提供するために利用することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PromiseRejectionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}}
      </td>
    </tr>
  </tbody>
</table>

## 使用上のメモ

`unhandledrejection` イベントにバブリングを許すと、結局はコンソールにエラーメッセージを出力することになります。 これは {{domxref("PromiseRejectionEvent")}} の {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出すことで防ぐことができます。 例は以下の [Preventing default handling](#preventing_default_handling) を参照してください。

## 例

ここで `unhandledrejection` イベントの使い方が分かる例をいくつか見てみましょう。 イベントには 2 つの有用な情報があります。

- `promise`
  - : 拒否を扱うために利用できるハンドラーがなく拒否された実際の {{jsxref("Promise")}} です。
- `reason`
  - : 拒否ハンドラーに渡されるはずだった理由です。 詳しくは {{jsxref("Promise.catch", "catch()")}} を参照してください。

### 基本的なエラーのログ

この例では、処理されなかった Promise の拒否についての情報を単純にコンソールにログ出力します。

```js
window.addEventListener("unhandledrejection", event => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

イベントハンドラープロパティを使用して、イベントリスナーを設定することもできます。

```js
window.onunhandledrejection = event => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### 既定のハンドリングの防止

({{Glossary("Node.js")}} など) 多くの環境では、既定では処理されなかった Promise の拒否はコンソールに報告されます。 `unhandledrejection` イベントのハンドラー — と、さらに実行したいその他のタスク — を追加して、 {{domxref("Event.preventDefault()", "preventDefault()")}} を呼び出すことでイベントをキャンセルし、実行時のログ出力コードが扱われるまでバブリングすることを防ぐことができます。 これは `unhandledrejection` がキャンセル可能であるためです。

```js
window.addEventListener('unhandledrejection', function (event) {
  // ...your code here to handle the unhandled rejection...

  // Prevent the default handling (such as outputting the
  // error to the console

  event.preventDefault();
});
```

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#unhandled-promise-rejections', 'unhandledrejection')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Window.unhandledrejection_event")}}

## 関連情報

- {{SectionOnPage("/ja/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}
- {{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}} イベントハンドラープロパティ[1](#seealso-footnote-1)
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}} イベント
- {{jsxref("Promise")}}

\[1] 対応するイベントハンドラープロパティは、{{domxref("WindowEventHandlers")}} ミックスインで定義されています。 これは、{{domxref("Window")}} インターフェイスとすべての種類の {{domxref("Worker")}} インターフェイスの両方で使用できます。
