---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
---

{{JSRef}}

**`trimStart()`** メソッドは、文字列の先頭のホワイトスペースを削除します。 `trimLeft()` はこのメソッドのエイリアスです。

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## 構文

```
str.trimStart();
str.trimLeft();
```

### 返値

呼び出した文字列から先頭 (左端) からホワイトスペースを削除した新しい文字列です。

## 解説

`trimStart()` と `trimLeft()` メソッドは、左端のホワイトスペースを取り除いた文字列を返します。 `trimLeft()` または `trimStart()` は元の文字列自身の値に影響を与えません。

### エイリアス

{{jsxref("String.prototype.padStart")}} のような関数との一貫性を持たせるため、標準メソッドの名前は `trimStart` となっています。しかし、ウェブの互換性の観点から、 `trimLeft` が `trimStart` のエイリアスとして残されます。エンジンによっては、以下のように解釈されます。

```js
String.prototype.trimLeft.name === "trimStart";
```

## 例

### trimStart() の使用

以下の例では、小文字の文字列 `'foo '` を表示します。

```js
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo  '
```

## ポリフィル

```js
//https://github.com/FabioVergani/js-Polyfill_String-trimStart

(function(w){
    var String=w.String, Proto=String.prototype;

    (function(o,p){
        if(p in o?o[p]?false:true:true){
            var r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);


/*
ES6:
(w=>{
    const String=w.String, Proto=String.prototype;

    ((o,p)=>{
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

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.trimstart', ' String.prototype.trimStart')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.trimStart")}}

## 関連情報

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
