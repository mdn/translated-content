---
title: 相等比較
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
---

在 ES2015，有四個相等比較方法：

- 一般相等 (`==`)
- 嚴格相等 (`===`)：被用於 `Array.prototype.indexOf`、 `Array.prototype.lastIndexOf` 和 `case`-matching
- 零值相等：被用於 `%TypedArray%` 和 `ArrayBuffer` 建構子，以及 `Map` 和 `Set` 運算子，還有將在 ES2016 新增的 `String.prototype.includes。`
- 同值相等： 用在除上面提及的所有情況。

JavaScript 提供三種不同的值比較運算操作：

- 嚴格相等 (或稱 "三等於"、"全等") 使用 [===](/zh-TW/docs/Web/JavaScript/Reference/Operators#identity)
- 一般相等 ("雙等於") 使用 [==](/zh-TW/docs/Web/JavaScript/Reference/Operators#equality)
- 還有 [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) (ECMAScript 2015 新加入)

要用哪個操作取決於你要哪種類型的比較。

簡單來說，一般相等會將型別一致化後比較；嚴格相等則不會（也就是說若型別不同，就會回傳 fasle）；`Object.is` 會和嚴格相等做同樣的事，但會將 `NaN`、`-0` 和 `+0` 獨立處理，因此這三個不會相等，而 `Object.is(NaN, NaN)` 則會回傳 true 。（用一般相等或嚴格相等比較兩個 `NaN` 時會回傳 `false` ，因為 IEEE 754 如此規範。） 切記，這三種判斷必須考慮原型，因為他們在設計上不被考慮為相等。對於任何非原型物件 x、y，即使他們有著相同結構，但如果是不同物件，比較就會是 false。

## 嚴格相等（`===`）

嚴格相等比較兩個值，而被比較的兩個值都不會轉換成其他型別。如果值是不同型別，就會被視為不相等。如果兩值型別相同但不是數字，若值相同，則為相等。此外，如果兩個值皆為數字，只要他們是 NaN 以外的同一值，或者 +0 和 -0，則為相等。

```js
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

嚴格比較適合在絕大多數情況下使用。對於所有非數字的值，嚴格比較就如字面：一個值只相等於自己。而數字則使用稍微不同的方式：第一種情況是浮點數 0 同時為正和負，在解決某些數學問題時，`+0` 和 `-0` 是不同的，但在大部分情況下我們不需要考慮這種情境，因此嚴格比較將他們視為相同的。第二種情況是非數字，`NaN`，用來表示某些定義不明確的數學問題的解， 例如：負無窮加正無窮，嚴格比較認為 `NaN` 不等於任何值，包含他本身。（`(x !== x)`只有在 `x` 是 `NaN`時會是 `true`。）

## 一般相等（==）

一般相等會*先將*比較值轉換成同型別後比較。轉換後（可能一個或兩個都被轉換），接著進行的幾乎和嚴格比較（`===`）一樣。 一般相等會*對稱*： `A == B` 等同 `B == A` ，無論 `A` 和 `B` 是什麼。（除了型別轉換的順序）

不同型別的一般相等運作如下表：

<table>
  <thead>
    <tr>
      <th scope="row"></th>
      <th colspan="7" scope="col">比較值 B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>Undefined</td>
      <td>Null</td>
      <td>Number</td>
      <td>String</td>
      <td>Boolean</td>
      <td>Object</td>
    </tr>
    <tr>
      <th colspan="1" rowspan="6" scope="row">比較值 A</th>
      <td>Undefined</td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Null</td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Number</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>A === B</code></td>
      <td><code>A === ToNumber(B)</code></td>
      <td><code>A === ToNumber(B)</code></td>
      <td><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>String</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToNumber(A) === B</code></td>
      <td><code>A === B</code></td>
      <td><code>ToNumber(A) === ToNumber(B)</code></td>
      <td><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToNumber(A) === B</code></td>
      <td><code>ToNumber(A) === ToNumber(B)</code></td>
      <td><code>A === B</code></td>
      <td><code>ToNumber(A) == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>Object</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToPrimitive(A) == B</code></td>
      <td><code>ToPrimitive(A) == B</code></td>
      <td><code>ToPrimitive(A) == ToNumber(B)</code></td>
      <td><code>A === B</code></td>
    </tr>
  </tbody>
</table>

根據上表， `ToNumber(A)` 嘗試在比較前轉換成一個數字。 這等同 `+A` （單 + 運算子）。`ToPrimitive(A)` 嘗試從物件轉換成原生值，透過嘗試對 A 使用 `A.toString` 和 `A.valueOf` 方法。

一般來說，根據 ECMAScript 規範，所有物件應該不等於 `undefined` 和 `null`。但大多數瀏覽器允許很小部分的物件（尤其是所有頁面的 `document.all` 物件）在某些情況下*當成* `undefined`。一般相等是其中一種：當 A 是個被*模擬* 成 `undefined` 的物件，`null == A` 和 `undefined == A` 會是 true。而在其他情況下物件不會等同於 `undefined` 或 `null。`

```js
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// 除了少數情況，這兩個應該是 false。
console.log(obj == null);
console.log(obj == undefined);
```

部分開發者認為最好別用一般相等。嚴格比較更容易預測，且因為不必轉型，因此效率更好。

## 同值相等

同值相等解決了最後一個情況：比較兩個值是否*功能相同* 。（這裡用了[里氏替換原則](https://zh.wikipedia.org/wiki/里氏替换原则)為例）當試圖修改一個不可變的屬性：

```js
// 新增一個不可變 NEGATIVE_ZERO 屬性到 Number 原型。
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

當修改一個不可變屬性時， `Object.defineProperty` 會出現例外，但若沒有真的要求修改，就沒事。如果 `v` 是 `-0`，就不會有修改，也就不會有錯誤出現。但若 `v` 是 `+0`，`Number.NEGATIVE_ZERO` 不再擁有自己的不可變屬性。在內部，當一個不可變屬性被重新定義，新的值會用同值相等和原值比較。

[`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 方法提供同值相等比較。

## 零值相等

和同值相等一樣，但將 `+0` 和 `-0` 視為相同。

## 一般相等、嚴格相等和同值相等的規範

在 ES5，一般相等 [`==`](/zh-TW/docs/Web/JavaScript/Reference/Operators) 在 [Section 11.9.3, The Abstract Equality Algorithm](https://262.ecma-international.org/5.1/#sec-11.9.3) 中規範。嚴格相等 [`===`](/zh-TW/docs/Web/JavaScript/Reference/Operators) 在 [11.9.6, The Strict Equality Algorithm](https://262.ecma-international.org/5.1/#sec-11.9.6)。（可以看看，這很簡短且可讀。註：先讀嚴格相等。）ES5 也在 [Section 9.12, The SameValue Algorithm](https://262.ecma-international.org/5.1/#sec-9.12) 規範 JS 引擎的行為。他幾乎和嚴格相等一樣，除了 11.9.6.4 和 9.12.4 在處理 [`Number`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number) 時的不同。ES2015 簡短的提出了 `Object.is`。

我們可以發現在 11.9.6.1 中，除了 11.9.6.1 規範型別檢查，嚴格相等規範是從屬於一般相等規範，因為 11.9.6.2–7 和 11.9.3.1.a–f 相應。

## 理解相等比較模型

ES2015 以後，你或許會將雙等於和三等於解讀成是彼此的「加強版」。比如，有人或許會說雙等於是三等於的延伸版本，因為前者做的事情和後者事情一模一樣，只差在運算元的型別轉換。舉例來說，`6 == "6"` （又或者說，有人可能會講說雙等於是基底，而三等於是加強版，因為它要求兩個運算元是同型別，所以它多了一個限制。至於哪個是較好的理解模型，取決於你的觀點。

儘管如此，這個思考內建相同運算子的方法，並非是延伸 ES2015 中的 [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 方法。 [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 不是單純地比雙等號「更寬鬆」或比三等號「更嚴謹」，也不適合將其放在兩者之間（即，比雙等號嚴謹，但較三等號寬鬆）。我們可以從下方的比較表格看到，一切是起源於 [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 可以處理 [`NaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN) 的比較運算。要注意的是，如果 `Object.is(NaN, NaN)` 的運算結果是 `false` ，我們就可以因為它區分 `-0` 和 `+0` 的結果，使用寬鬆和嚴謹的範疇來界定它是比三等號更嚴謹的那一區段。然而，區別 [`NaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN) 的方式並不確實。Unfortunately, [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) simply has to be thought of in terms of its specific characteristics, rather than its looseness or strictness with regard to the equality operators.

| x                   | y                   | `==`    | `===`   | `Object.is` |
| ------------------- | ------------------- | ------- | ------- | ----------- |
| `undefined`         | `undefined`         | `true`  | `true`  | `true`      |
| `null`              | `null`              | `true`  | `true`  | `true`      |
| `true`              | `true`              | `true`  | `true`  | `true`      |
| `false`             | `false`             | `true`  | `true`  | `true`      |
| `"foo"`             | `"foo"`             | `true`  | `true`  | `true`      |
| `{ foo: "bar" }`    | `x`                 | `true`  | `true`  | `true`      |
| `0`                 | `0`                 | `true`  | `true`  | `true`      |
| `+0`                | `-0`                | `true`  | `true`  | `false`     |
| `0`                 | `false`             | `true`  | `false` | `false`     |
| `""`                | `false`             | `true`  | `false` | `false`     |
| `""`                | `0`                 | `true`  | `false` | `false`     |
| `"0"`               | `0`                 | `true`  | `false` | `false`     |
| `"17"`              | `17`                | `true`  | `false` | `false`     |
| `[1,2]`             | `"1,2"`             | `true`  | `false` | `false`     |
| `new String("foo")` | `"foo"`             | `true`  | `false` | `false`     |
| `null`              | `undefined`         | `true`  | `false` | `false`     |
| `null`              | `false`             | `false` | `false` | `false`     |
| `undefined`         | `false`             | `false` | `false` | `false`     |
| `{ foo: "bar" }`    | `{ foo: "bar" }`    | `false` | `false` | `false`     |
| `new String("foo")` | `new String("foo")` | `false` | `false` | `false`     |
| `0`                 | `null`              | `false` | `false` | `false`     |
| `0`                 | `NaN`               | `false` | `false` | `false`     |
| `"foo"`             | `NaN`               | `false` | `false` | `false`     |
| `NaN`               | `NaN`               | `false` | `false` | `true`      |

## When to use [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) versus triple equals

Aside from the way it treats [`NaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN), generally, the only time [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is)'s special behavior towards zeros is likely to be of interest is in the pursuit of certain meta-programming schemes, especially regarding property descriptors when it is desirable for your work to mirror some of the characteristics of [`Object.defineProperty`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). If your use case does not require this, it is suggested to avoid [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) and use [`===`](/zh-TW/docs/Web/JavaScript/Reference/Operators) instead. Even if your requirements involve having comparisons between two [`NaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN) values evaluate to `true`, generally it is easier to special-case the [`NaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN) checks (using the [`isNaN`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN) method available from previous versions of ECMAScript) than it is to work out how surrounding computations might affect the sign of any zeros you encounter in your comparison.

Here's an in-exhaustive list of built-in methods and operators that might cause a distinction between `-0` and `+0` to manifest itself in your code:

- [`- (unary negation)`](/zh-TW/docs/Web/JavaScript/Reference/Operators#-_.28unary_negation.29)
  - : It's obvious that negating `0` produces `-0`. But the abstraction of an expression can cause `-0` to creep in when you don't realize it. For example, consider:`js let stoppingForce = obj.mass * -obj.velocity` If `obj.velocity` is `0` (or computes to `0`), a `-0` is introduced at that place and propogates out into `stoppingForce`.
- [`Math.atan2`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2),
  [`Math.ceil`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil),
  [`Math.pow`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/pow),
  [`Math.round`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
  - : It's possible for a `-0` to be introduced into an expression as a return value of these methods in some cases, even when no `-0` exists as one of the parameters. E.g., using [`Math.pow`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) to raise `-Infinity` to the power of any negative, odd exponent evaluates to `-0`. Refer to the documentation for the individual methods.
- [`Math.floor`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor),
  [`Math.max`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/max),
  [`Math.min`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/min),
  [`Math.sin`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/sin),
  [`Math.sqrt`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt),
  [`Math.tan`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)
  - : It's possible to get a `-0` return value out of these methods in some cases where a `-0` exists as one of the parameters. E.g., `Math.min(-0, +0)` evalutes to `-0`. Refer to the documentation for the individual methods.
- [`~`](/zh-TW/docs/Web/JavaScript/Reference/Operators),
  [`<<`](/zh-TW/docs/Web/JavaScript/Reference/Operators),
  [`>>`](/zh-TW/docs/Web/JavaScript/Reference/Operators)
  - : Each of these operators uses the ToInt32 algorithm internally. Since there is only one representation for 0 in the internal 32-bit integer type, `-0` will not survive a round trip after an inverse operation. E.g., both `Object.is(~~(-0), -0)` and `Object.is(-0 << 2 >> 2, -0)` evaluate to `false`.

Relying on [`Object.is`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is) when the signedness of zeros is not taken into account can be hazardous. Of course, when the intent is to distinguish between `-0` and `+0`, it does exactly what's desired.

## See also

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
