---
title: キーボード API
slug: Web/API/Keyboard_API
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Keyboard API")}}

キーボード API は、ブラウザーを実行している端末に取り付けられている物理キーボードを操作するためのメソッドを提供します。

いくつかの機能を提供します。「キーボードマッピング」は、キーボードの特定の物理キーによって生成された文字列を取得するためのインターフェイスを提供し、そのキーをユーザーに正しく識別させます。「キーボードロック」は、通常ユーザーエージェントやオペレーティングシステムによって予約されているキーを、ウェブページがキャプチャできるようにします。キーボード API の使用目的は、ゲームやリモートアクセスアプリなど、全画面の没入感を提供するウェブアプリケーションです。

## 概念と使用方法

### キーボードマッピング

物理的なキーボードでは、 `code` 属性は押されたキーの物理的な位置に、 `key` 属性はキーボードの物理的な位置でキーを押したときに生成される文字列になります。 `key` の値はキーボードのロケール（'en-US' など）、レイアウト（'QWERTY' など）、修飾キーの状態（<kbd>Shift</kbd>、<kbd>Control</kbd> など）に影響されます。歴史的に、その情報を取得する方法はありませんでした。

キーボードマップ API は、 {{domxref('Keyboard')}} インターフェイスと {{domxref('KeyboardLayoutMap')}} インターフェイスを通して、特定のキー押下によって生成された文字列を取得する方法を提供します。 {{domxref('Keyboard')}} インターフェイスは {{domxref('navigator.keyboard')}} からアクセスします。 {{domxref('Keyboard')}} は {{domxref('Keyboard.getLayoutMap')}} メソッドを提供し、コードをキーに変換するためのメンバーを含む {{domxref('KeyboardLayoutMap')}} オブジェクトで解決するプロミスを返します。有効なコード値のリストは、 [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/) 仕様の [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) の節にあります。

次の例は、英語の QWERTY キーボードで <kbd>W</kbd> と書かれたキーに関連する場所固有またはレイアウト固有の文字列を取得する方法を示しています。

```js
if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  keyboard.getLayoutMap().then((keyboardLayoutMap) => {
    const upKey = keyboardLayoutMap.get("KeyW");
    window.alert(`Press ${upKey} to move up.`);
  });
} else {
  // ここで何かを行う
}
```

### キーボードロック

リッチで双方向的なウェブページ、ゲーム、リモートストリーミングの体験では、全画面表示モード中に特別なキーやキーボード ショートカットにアクセスする必要があることがよくあります。このようなキーや キーの組み合わせの例には、<kbd>Escape</kbd>、<kbd>Alt+Tab</kbd>、<kbd>Ctrl+N</kbd> などがあります。これらのキーとキーの組み合わせは、通常、次の例に示すように、ユーザーエージェントまたは基礎となるオペレーティングシステムによってキャプチャされます。

<kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd>、<kbd>D</kbd> の各キーをキャプチャするには、それぞれのキーのキーコード属性値を含むリストで `lock()` を呼び出します。

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

これは、キーを押したときにどの修飾キーが使われたかに関係なく、これらのキーを捕捉します。標準的なアメリカ合衆国の QWERTY 配列と仮定すると、 `KeyW` を登録することで、<kbd>W</kbd>、<kbd>Shift+W</kbd>、<kbd>Control+W</kbd>、<kbd>Control+Shift+W</kbd>、およびその他のすべての修飾キーと <kbd>W</kbd> の組み合わせが確実にアプリに送信されます。 `KeyA`、`KeyS`、`KeyD` についても同様です。

### システムキーの書き込み

{{domxref('Keyboard.lock')}} と {{domxref('KeyboardLayoutMap')}} インターフェイスの様々なメソッドに渡されるコードを「システムキーの書き込み」と呼びます。

物理キーは現在のロケールやキーボードレイアウトによって意味が変わるため、 [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) は [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/) 仕様の [Writing System Keys](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) の章で定義されています。これらのキーを以下に示します。青いキーはすべての標準的なキーボードにありますが、緑のキーは一部のキーボードにしかありません。

![UI Events KeyboardEvent code Values 仕様で定義されているシステムキーの書き込み。](writing-system-keys.png)

## インターフェイス

- {{domxref('Keyboard')}} {{experimental_inline}}
  - : キーボードレイアウトマップを取得し、物理キーボードからのキー押下のキャプチャを切り替える関数を提供します。
- {{domxref('KeyboardLayoutMap')}} {{experimental_inline}}
  - : 特定の物理キーに関連付けられた文字列を取得するための関数を持つ、マップ風のオブジェクトです。

### 他のインターフェイスへの拡張

- {{domxref('navigator.keyboard')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : キーボードレイアウトマップを取得し、物理キーボードからのキー押下のキャプチャを切り替える関数へのアクセスを提供する {{domxref('Keyboard')}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
