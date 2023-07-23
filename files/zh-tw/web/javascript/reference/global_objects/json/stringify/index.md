---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---

{{JSRef}}

**`JSON.stringify()`** method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## 語法

```js-nolint
JSON.stringify(value[, replacer[, space]])
```

### 參數

- `value`
  - : The value to convert to a JSON string.
- `replacer` {{optional_inline}}
  - : A function that alters the behavior of the stringification process, or an array of {{jsxref("String")}} and {{jsxref("Number")}} objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string.
- `space` {{optional_inline}}
  - : A {{jsxref("String")}} or {{jsxref("Number")}} object that's used to insert white space into the output JSON string for readability purposes. If this is a `Number`, it indicates the number of space characters to use as white space; this number is capped at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used. If this is a `String`, the string (or the first 10 characters of the string, if it's longer than that) is used as white space. If this parameter is not provided (or is null), no white space is used.

### 回傳值

A JSON string representing the given value.

## Description

`JSON.stringify()` converts a value to JSON notation representing it:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, and {{jsxref("String")}} objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.
- If {{jsxref("undefined")}}, a function, or a symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to {{jsxref("null")}} (when it is found in an array). `JSON.stringify` can also just return `undefined` when passing in "pure" values like `JSON.stringify(function(){})` or `JSON.stringify(undefined)`.
- All symbol-keyed properties will be completely ignored, even when using the `replacer` function.
- Non-enumerable properties will be ignored

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// '{}'

// Non-enumerable properties:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'
```

### The `replacer` parameter

The `replacer` parameter can be either a function or an array. As a function, it takes two parameters, the key and the value being stringified. The object in which the key was found is provided as the replacer's `this` parameter. Initially it gets called with an empty key representing the object being stringified, and it then gets called for each property on the object or array being stringified. It should return the value that should be added to the JSON string, as follows:

- If you return a {{jsxref("Number")}}, the string corresponding to that number is used as the value for the property when added to the JSON string.
- If you return a {{jsxref("String")}}, that string is used as the property's value when adding it to the JSON string.
- If you return a {{jsxref("Boolean")}}, "true" or "false" is used as the property's value, as appropriate, when adding it to the JSON string.
- If you return any other object, the object is recursively stringified into the JSON string, calling the `replacer` function on each property, unless the object is a function, in which case nothing is added to the JSON string.
- If you return `undefined`, the property is not included (i.e., filtered out) in the output JSON string.

> **備註：** You cannot use the `replacer` function to remove values from an array. If you return `undefined` or a function then `null` is used instead.

#### Example with a function

```js
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

#### Example with an array

If `replacer` is an array, the array's values indicate the names of the properties in the object that should be included in the resulting JSON string.

```js
JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', only keep "week" and "month" properties
```

### The `space` argument

The `space` argument may be used to control spacing in the final string. If it is a number, successive levels in the stringification will each be indented by this many space characters (up to 10). If it is a string, successive levels will be indented by this string (or the first ten characters of it).

```js
JSON.stringify({ a: 2 }, null, " ");
// '{
//  "a": 2
// }'
```

Using a tab character mimics standard pretty-print appearance:

```js
JSON.stringify({ uno: 1, dos: 2 }, null, "\t");
// returns the string:
// '{
//     "uno": 1,
//     "dos": 2
// }'
```

### `toJSON()` behavior

If an object being stringified has a property named `toJSON` whose value is a function, then the `toJSON()` method customizes JSON stringification behavior: instead of the object being serialized, the value returned by the `toJSON()` method when called will be serialized. `JSON.stringify()` calls `toJSON` with one parameter:

- if this object is a property value, the property name
- if it is in an array, the index in the array, as a string
- an empty string if `JSON.stringify()` was directly called on this object

For example:

```js
const bonnie = {
  name: "Bonnie Washington",
  age: 17,
  class: "Year 5 Wisdom",
  isMonitor: false,
  toJSON: function (key) {
    // Clone object to prevent accidentally performing modification on the original object
    const cloneObj = { ...this };

    delete cloneObj.age;
    delete cloneObj.isMonitor;
    cloneObj.year = 5;
    cloneObj.class = "Wisdom";

    if (key) {
      cloneObj.code = key;
    }

    return cloneObj;
  },
};

JSON.stringify(bonnie);
// Returns '{"name":"Bonnie Washington","class":"Wisdom","year":5}'

const students = { bonnie };
JSON.stringify(students);
// Returns '{"bonnie":{"name":"Bonnie Washington","class":"Wisdom","year":5,"code":"bonnie"}}'

const monitorCandidate = [bonnie];
JSON.stringify(monitorCandidate);
// Returns '[{"name":"Bonnie Washington","class":"Wisdom","year":5,"code":"0"}]'
```

### Issue with plain `JSON.stringify` for use as JavaScript

Note that JSON is [not a completely strict subset of JavaScript](http://timelessrepo.com/json-isnt-a-javascript-subset), with two line terminators (Line separator and Paragraph separator) not needing to be escaped in JSON but needing to be escaped in JavaScript. Therefore, if the JSON is meant to be evaluated or directly utilized within [JSONP](https://en.wikipedia.org/wiki/JSONP), the following utility can be used:

```js
function jsFriendlyJSONStringify(s) {
  return JSON.stringify(s)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

var s = {
  a: String.fromCharCode(0x2028),
  b: String.fromCharCode(0x2029),
};
try {
  eval("(" + JSON.stringify(s) + ")");
} catch (e) {
  console.log(e); // "SyntaxError: unterminated string literal"
}

// No need for a catch
eval("(" + jsFriendlyJSONStringify(s) + ")");

// console.log in Firefox unescapes the Unicode if
//   logged to console, so we use alert
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

### Example of using `JSON.stringify()` with `localStorage`

In a case where you want to store an object created by your user and allowing it to be restored even after the browser has been closed, the following example is a model for the applicability of `JSON.stringify()`:

> **警告：** Functions are not a valid JSON data type so they will not work. However, they can be displayed if first converted to a string (e.g. in the replacer), via the function's toString method. Also, some objects like {{jsxref("Date")}} will be a string after {{jsxref("JSON.parse()")}}.

```js
// Creating an example of JSON
var session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem("session", JSON.stringify(session));

// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
var restoredSession = JSON.parse(localStorage.getItem("session"));

// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("JSON.parse()")}}
