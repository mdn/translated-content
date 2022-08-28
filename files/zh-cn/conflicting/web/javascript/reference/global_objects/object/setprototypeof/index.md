---
title: The performance hazards of  [[Prototype]] mutation
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
original_slug: Web/JavaScript/The_performance_hazards_of_prototype_mutation
---
{{jsSidebar("Advanced")}}

每个 JavaScript 对象都拥有一个`[[Prototype]]`对象。 获取一个对象的属性时首先会搜索其自身，然后就是它的 `[[Prototype]]`对象，之后再搜索此`[[Prototype]]`对象的 `[[Prototype]]`对象，直到找到这个属性或者搜索链条达到终点。这个类似链条的查找过程被称为原型链。 原型链在[对象继承](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)中非常重要。

ECMAScript 6 引入了一种方式来修改 `[[Prototype]]`对象。 提升了灵活性的代价是降低了性能。 **修改`[[Prototype]]` 对象会损害降低所有现代 JavaScrip 引擎的性能**。这篇文章解释了修改 `[[Prototype]]` 对象在*所有*浏览器中都很慢的原因并给出了替代方案。

## JavaScript 引擎是如何提升访问对象属性的性能的

Objects are hashes，所以理论上来说 (实际上也是如此) 访问属性所花费的时间是恒定不变的. 但是 "恒定不变" 的背后也可能有成千上万的机器指令. 幸运的是，大多数情况下对象和属性是"可预测的", 在这些情况下它们的底层结构也是可预测的. 即时编译器可以据此来减少对象属性的访问所花费时间。

引擎根据添加到对象的顺序属性进行优化。大多数属性都是按照非常相似的顺序添加到对象中的。(经常使用 obj\[val] 风格的随机访问访问对象是一个明显的例外。)

```js
function Landmark(lat, lon, desc) {
  this.location = { lat: lat, long: lon };
  this.description = desc;
}
var lm1 = new Landmark(-90, 0, "South Pole");
var lm2 = new Landmark(-24.3756466, -128.311018, "Pitcairn Islands");
```

在上面的例子中，每生成一个 `Landmark` 对象时都将按照 `location` 和 `description` 两个属性顺序加载，而存储“经度/纬度”信息的 location 也具有 lat 到 long 的顺序。随后的代码可以删除一个属性。但这是不可能的，因为引擎在这种情况下会生成一段不太理想的代码。在 SpiderMonkey（火狐的 JavaScript 引擎）里，属性的特定顺序（以及属性的其他一些方面，但不包括值）我们称之为“形状”（shape）（谷歌 V8 引擎里，这个概念名为“结构 ID”(structure ID))。如果两个对象共享同一个 shape，那么他们属性的存储也相同。

`Landmark` 对象在引擎内部的（简化）版本如同下面的 C++：

```cpp
struct Property {
  Property* prev; // null if first property
  String name; // name of property
  unsigned int index; // index of its value in storage
};
using Shape = Property*;
struct Object {
  Shape shape;
  Value* properties;
  Object* prototype;
};
```

例子中的 JS 表达式对应下面的 C++:

```cpp
lm1->properties[0]; // loc1.location
lm1->properties[1]; // loc1.description
lm2->properties[0].toObject()->properties[1]; // loc2.location.long
```

如果引擎知道一个对象具有特殊 shape，就可以根据 shape 假定这个对象所有属性的索引。这样一来进行一次访问特定属性，也就相当于几个指针访问所花费的时间。机器语言去检查对象是否具有特定 shape 也很容易，如果有，那么假定索引快速访问；如果没有，那么慢慢来。

## Naively optimizing inherited properties

Many properties don't exist _directly_ on the object: lookups often find properties on the prototype chain. Accesses to properties on prototypes is just extra "hops" through the `prototype` field to the object containing the property. Optimizing _correctly_ requires that no object along the way have the property, so every hop must check that object's shape.

```js
var d = new Date();
d.toDateString(); // Date.prototype.toDateString

function Pair(x, y) { this.x = x; this.y = y; }
Pair.prototype.sum = function() { return this.x + this.y; };

var p = new Pair(3, 7);
p.sum(); // Pair.prototype.sum
```

Engines take this quick-and-dirty approach in many cases. But in especially performance-sensitive JavaScript, this isn't good enough.

## Intelligently optimizing inherited properties

Predictable property accesses _usually_ find the property a constant number of hops along the `[[Prototype]]` chain; intervening objects _usually_ don't acquire new properties; the ultimate object _usually_ won't have any properties [deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete). Finally: **`[[Prototype]]` mutation is rare**. All these common assumptions are necessary to avoid slow prototype-hopping. Different engines choose different approaches to intelligently optimize inherited properties.

- The shape of the _ultimate_ object containing the inherited can be checked.

  - : In this case, a shape match must imply that no intervening object's `[[Prototype]]` has been modified. Therefore, when an object's `[[Prototype]]` is mutated, every object along its `[[Prototype]]` chain must also have its shape changed.

    ```js
    var obj1 = {};
    var obj2 = Object.create(obj1);
    var obj3 = Object.create(obj2);

    // Objects whose shapes would change: obj3, obj2, obj1, Object.prototype
    obj3.__proto__ = {};
    ```

- The shape of the object initially accessed can be checked.

  - : Every object that might inherit through a changed-`[[Prototype]]` object must change, reflecting the `[[Prototype]]` mutation having happened

    ```js
    var obj1 = {};
    var obj2 = Object.create(obj1);
    var obj3 = Object.create(obj2);

    // Objects whose shapes would change: obj1, obj2, obj3
    obj1.__proto__ = {};
    ```

## Pernicious effects of `[[Prototype]]` mutation

`[[Prototype]]` mutation's adverse performance impact occurs in two phases: at the time mutation occurs, and in subsequent execution. First, **mutating `[[Prototype]]` is slow**. Second, **mutating `[[Prototype]]` slows down code that interacts with mutated-`[[Prototype]]` objects**.

### Mutating `[[Prototype]] is slow`

While the spec considers mutating `[[Prototype]]` to be modifying a single hidden property, real-world implementations are considerably more complex. Both shape-changing tactics described above require examining (and modifying) more than one object. Which approach modifies fewer objects in practice, depends upon the workload.

### Mutated `[[Prototype]]`s slow down other code

The bad effects of `[[Prototype]]` mutation don't end once the mutation is complete. Because so many property-examination operations implicitly depend on `[[Prototype]]` chains not changing, when engines observe a mutation, _an object with mutated `[[Prototype]] "taints" all code the object flows through`_. This tainting flows through all code that ever observes a mutated-`[[Prototype]]` object. As a near-worst-case illustration, consider these patterns of behavior:

```js
var obj = {};
obj.__proto__ = { x: 3 }; // gratuitous mutation

var arr = [obj];
for (var i = 0; i < 5; i++)
  arr.push({ x: i });

function f(v, i) {
  var elt = v[i];
  var r =  elt.x > 2 // pessimized
           ? elt
           : { x: elt.x + 1 };
  return r;
}
var c = f(arr, 0);
c.x; // pessimized: return value has unknown properties
c = f(arr, 1);
c.x; // still pessimized!

var arr2 = [c];
arr2[0].x; // pessimized
```

(Only code that runs many times is optimized, so this doesn't trigger _all_ these bad behaviors. But every breakdown could happen if it appeared in "hot" code.)

Recognizing exactly where a mutated-`[[Prototype]]` object flows, often across multiple scripts, is extraordinarily difficult. It depends on careful textual analysis of the code and particular runtime behaviors. Far-distant changes, that trigger subtly different control flow, can taint previously-optimal code paths with pessimal behavior. _It's impossible to recognize all the places that will become slower, **even for a JavaScript language implementer**._

remaining constant.Mutation must, in addition to changing other objects' shapes,

But this requires storing _cross-object_ information.

Cross-object information is different from shape, in that it can't easily be checked. One modification to this information may affect many locations, none obviously connected to it: where to look to verify assumptions? So instead of checking the assumptions before use, _all_ code making assumptions is _invalidated_ when a modification happens. When a `[[Prototype]]` changes, _all_ code depending on it must be thrown away. The operation `obj.__proto__ = ...` is thus inherently slow. And by throwing away already-optimized code, it makes that code much slower when it runs later.

But it's worse than that. When evaluating `obj.prop` sees an object whose `[[Prototype]]` has been mutated, so much previously-known information about the object becomes useless that SpiderMonkey considers the object to have wholly-unknown characteristics. Any code path that touches such an object in the future will assume the worst. Optimizing JIT engines assume that _future execution is like past execution_. If an object with mutated `[[Prototype]]` is observed by some code, that code will likely observe more such objects. Therefore, **operations that interact with an object with mutated `[[Prototype]]`, anywhere, in any scripts, are un-optimizable**.

The un-optimizability of objects with mutated `[[Prototype]]` is not
