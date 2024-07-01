---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
---

{{JSRef}}

**`trimStart()`** 메서드는 문자열 시작부분의 공백을 제거합니다. 또한 `trimLeft()`라는 별칭으로 호출이 가능합니다.
{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## 구문

```js
trimStart();

trimLeft();
```

### 반환값

`str` 시작부분(왼쪽)에서 공백이 제거된 새 문자열을 반환합니다.
`str` 에 공백이 없을시에도 에러가 발생하지 않고 여전히 새 문자열(본질적으로 `str` 의 복사본)이 반환됩니다.

### 별칭

{{jsxref("String.prototype.padStart")}} 표준 메서드 이름과 같은 함수의 일관성을 위해서 `trimStart` 가 되었습니다.
그러나, 웹 호환성을 위해서 `trimLeft` 이라는 별칭을 가집니다. 일부 엔진에서 이것은 다음 예시를 의미합니다.

```js
String.prototype.trimLeft.name === "trimStart";
```

## 예제

### trimStart() 사용

다음 예제는 `'foo  '` 문자열을 표시합니다.

```js
var str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## 폴리필

```js
//https://github.com/FabioVergani/js-Polyfill_String-trimStart

(function (w) {
  var String = w.String,
    Proto = String.prototype;

  (function (o, p) {
    if (p in o ? (o[p] ? false : true) : true) {
      var r = /^\s+/;
      o[p] =
        o.trimLeft ||
        function () {
          return this.replace(r, "");
        };
    }
  })(Proto, "trimStart");
})(window);

/*
ES6:
(w=&gt;{
    const String=w.String, Proto=String.prototype;

    ((o,p)=&gt;{
        if(p in o?o[p]?false:true:true){
            const r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);
*/
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `String.prototype.trimStart` 의 폴리필은 [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)를 참고하세요.
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
