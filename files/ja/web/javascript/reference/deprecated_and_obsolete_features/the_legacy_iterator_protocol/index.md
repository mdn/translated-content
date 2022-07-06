---
title: 古い反復子プロトコル
slug: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
tags:
  - ES2015
  - ガイド
  - JavaScript
  - 古い反復子
translation_of: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
---
{{jsSidebar("More")}}

> **Warning:** 古い反復子プロトコルは SpiderMonkey 固有の機能で、 Firefox 58 で削除されました。将来に向けた使用では、 [for..of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループと[反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を使用することを検討してください。

## 非推奨の Firefox 専用反復子プロトコル

Firefox version 26 以前は、標準の [ES2015 の反復子プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)に似た別の反復子プロトコルを実装していました。

オブジェクトが次の意味をもつ `next()` メソッドを実装している場合、そのオブジェクトは古い反復子で、反復処理の最後に {{jsxref("Global_Objects/StopIteration", "StopIteration")}} をスローします。

| プロパティ |値                                            |
| -------- | ------------------------------------------------ |
| `next`   | 引数なしの関数で、値を返します。 |

### 古い反復子プロトコルと ES2015 反復子プロトコルとの違い

- 値はプレイスホルダーオブジェクトの `value` プロパティではなく、 `next` の呼び出しの返値として直接値が返されていました。
- 反復処理の終了は {{jsxref("Global_Objects/StopIteration", "StopIteration")}} オブジェクトをスローすることで表現されていました。

### 古いプロトコルをもつ簡単な例

```js
function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           if(nextIndex < array.length){
               return array[nextIndex++];
           else
               throw new StopIteration();
       }
    }
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next()); // 'yo'
console.log(it.next()); // 'ya'
try{
    console.log(it.next());
}
catch(e){
    if(e instanceof StopIteration){
         // iteration over
    }
}
```

## 関連情報

- [反復子とジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- 他の[非推奨の機能、廃止された機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
