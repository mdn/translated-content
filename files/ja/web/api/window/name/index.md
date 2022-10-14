---
title: window.name
slug: Web/API/Window/name
---

{{ApiRef}}

ウィンドウ名を取得 / 設定します。

## 構文

```
string = window.name;
window.name = string;
```

## 例

```js
window.name = "lab_view";
```

## 注記

ウィンドウ名は、主にハイパーリンクとフォームのターゲットを設定するために使われます。ウィンドウは必ずしもウィンドウ名を持つ必要はありません。

It has also been used in some frameworks for providing cross-domain messaging (e.g., [SessionVars](http://www.thomasfrank.se/sessionvars.html) and Dojo's [dojox.io.windowName](http://www.sitepen.com/blog/2008/07/22/windowname-transport/)) as a more secure alternative to JSONP. Modern web applications hosting sensitive data should however not rely on `window.name` for cross-domain messaging but instead rather utilize the [postMessage API](/ja/docs/Web/API/Window/postMessage).

Don't set the value to something unstring since its get method will call the toString method.

## 仕様

| 仕様                                                                                         | 状態                             | コメント |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-name', 'Window.name')}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-name', 'Window.name')}}     | {{Spec2('HTML5 W3C')}}     |          |
