---
title: 原始迭代协议
slug: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
---

{{jsSidebar("More")}}

> **警告：** 非标准。旧式迭代器协议是一个特定于 SpiderMonkey 的功能，在 Firefox 58+ 中删除。对于面向未来的用法，请考虑使用 [for..of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环与[迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

## 废弃的 Firefox 专用迭代器协议

Firefox，在版本 26 之前实现了另一个迭代器协议，类似于标准的 [ES2015 迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

一个对象实现了 next() 方法，并在迭代结束时抛出 {{jsxref("Global_Objects/StopIteration", "StopIteration")}}，它就是一个旧式迭代器。

| 属性   | 值                     |
| ------ | ---------------------- |
| `next` | 返回值的零个参数函数。 |

### 旧式迭代器与 ES2015 迭代器的区别

- 在调用 `next` 的时候立即返回相应的值，不会返回一个占位符对象的值 (`value`) 属性。
- 通过抛出 {{jsxref("Global_Objects/StopIteration", "StopIteration")}} 对象表示迭代结束。

### 旧迭代器协议示例

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

## 参见

- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- 更多[弃用和过时的功能](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
