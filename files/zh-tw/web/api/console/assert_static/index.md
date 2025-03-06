---
title: Console.assert()
slug: Web/API/console/assert_static
---

{{APIRef("Console API")}}

如果斷言（assertion）為非（false），主控台會顯示錯誤訊息；如果斷言為是（true），則不發生任何事。

{{AvailableInWorkers}}

> [!NOTE]
> 在 Node.js 內 `console.assert()` 方法的實做，與瀏覽器並不相同。瀏覽器內呼叫 falsy 的 `console.assert()` 斷言出現 `message`，但不會中斷程式碼的執行。然而在 Node.js 裡面，falsy 斷言會拋出 `AssertionError` 錯誤。

## 語法

```js-nolint
assert(assertion, obj1)
assert(assertion, obj1, obj2)
assert(assertion, obj1, obj2, /* …, */ objN)

assert(assertion, msg)
assert(assertion, msg, subst1)
assert(assertion, msg, subst1, /* …, */ substN)
```

### 參數

- `assertion`
  - : 布林表達式。如果斷言為非，訊息會出現在主控台上。
- `obj1` ... `objN`
  - : 要印出來的 JavaScript 物件名單。 The string representations of each of these objects are appended together in the order listed and output.
- `msg`
  - : 包含零個以上的 JavaScript 替代（substitution）字串。
- `subst1` ... `substN`
  - : JavaScript objects with which to replace substitution strings within `msg`. This parameter gives you additional control over the format of the output.

請參見 {{domxref("console")}} 的 [Outputting text to the console](/zh-TW/docs/Web/API/console#Outputting_text_to_the_console) 以獲取詳細資訊。

## 範例

以下程式碼示範一個 JavaScript 物件的斷言使用：

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number += 1) {
  console.log("the # is " + number);
  console.assert(number % 2 === 0, { number: number, errorMsg: errorMsg });
  // or, using ES2015 object property shorthand:
  // console.assert(number % 2 === 0, {number, errorMsg});
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

請注意，雖然包含替換字符串的字符串在 Node 中用作 `console.log` 的參數，但很多（如果不是大多數）瀏覽器...

```js
console.log("the word is %s", "foo");
// output: the word is foo
```

...在所有瀏覽器中，使用此類字符串目前無法作為 console.assert 的參數使用：

```js
console.assert(false, "the word is %s", "foo");
// correct output in Node (e.g. v8.10.0) and some browsers
//     (e.g. Firefox v60.0.2):
// Assertion failed: the word is foo
// incorrect output in some browsers
//     (e.g. Chrome v67.0.3396.87):
// Assertion failed: the word is %s foo
```

有關詳細信息，請參閱 {{domxref("console")}} 文檔中的[將文本輸出到控制台](/zh-TW/docs/Web/API/console#Outputting_text_to_the_console)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [WHATWG Console Standard: console.assert](https://console.spec.whatwg.org/#assert-condition-data)
- [Opera Dragonfly documentation: Console](https://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](<https://learn.microsoft.com/zh-tw/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [Chrome Developer Tools: Using the Console](https://developer.chrome.com/docs/devtools#assertions)
