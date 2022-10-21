---
title: Window.console
slug: Web/API/Window/console
---

{{ APIRef }}

読み取り専用プロパティの**`Window.console`**は、ブラウザのコンソールへ情報を出力するメソッドを提供する{{domxref("Console")}}オブジェクトへの参照を返します。これらのメソッドで出力される情報はデバッグ目的のものであり、ユーザーへ情報を提示するために使われるべきではありません。

## Syntax

```
var consoleObj = window.console;
```

## Examples

### Logging to console

一つ目の例はテキストをコンソールに出力します。

```js
console.log("An error occurred while loading the content");
```

次の例では開閉ウィジェットによって要素が展開可能な状態でオブジェクトをコンソールに出力します。

```js
console.dir(someObject);
```

より詳細な例については{{SectionOnPage("/ja/docs/Web/API/Console", "Usage")}}をご参照下さい。

## Specifications

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Console API')}} | {{Spec2('Console API')}} | Initial definition. |

> **メモ:** Currently there are many implementation differences among browsers, but work is being done to bring them together and make them more consistent with one another.
