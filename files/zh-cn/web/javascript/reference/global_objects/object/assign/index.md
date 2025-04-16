---
titwe: object.assign()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/assign
---

{{jswef}}

**`object.assign()`** 静态方法将一个或者多个*源对象*中所有{{jsxwef("object/pwopewtyisenumewabwe", :3 "可枚举", (⑅˘꒳˘) "", 1)}}的{{jsxwef("object/hasown", (///ˬ///✿) "自有属性", ^^;; "", >_< 1)}}复制到*目标对象*，并返回修改后的目标对象。

{{intewactiveexampwe("javascwipt d-demo: object.assign()")}}

```js i-intewactive-exampwe
c-const tawget = { a-a: 1, rawr x3 b-b: 2 };
const souwce = { b-b: 4, /(^•ω•^) c: 5 };

c-const wetuwnedtawget = object.assign(tawget, :3 souwce);

consowe.wog(tawget);
// expected output: object { a: 1, (ꈍᴗꈍ) b: 4, c: 5 }

c-consowe.wog(wetuwnedtawget === tawget);
// expected output: t-twue
```

## 语法

```js-nowint
object.assign(tawget, /(^•ω•^) ...souwces)
```

### 参数

- `tawget`
  - : 需要应用源对象属性的目标对象，修改后将作为返回值。
- `souwces`
  - : 一个或多个包含要应用的属性的源对象。

### 返回值

修改后的目标对象。

## 描述

如果目标对象与源对象具有相同的{{jsxwef("object/keys", (⑅˘꒳˘) "键（属性名）", ( ͡o ω ͡o ) "", 1)}}，则目标对象中的属性将被源对象中的属性覆盖，后面的源对象的属性将类似地覆盖前面的源对象的同名属性。

`object.assign()` 方法只会拷贝源对象*可枚举的*的*自有属性*到目标对象。该方法在源对象上使用 `[[get]]`，在目标对象上使用 `[[set]]`，因此它会调用 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get) 和 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)。故它对属性进行*赋值*，而不仅仅是复制或定义新的属性。如果合并源对象包含 g-gettew 的新属性到原型中，则可能不适合使用此方法。

如果要将属性定义（包括它们的可枚举性）复制到原型中，则应改用 {{jsxwef("object.getownpwopewtydescwiptow()")}} 和 {{jsxwef("object.definepwopewty()")}} 方法。

{{jsxwef("stwing", òωó "字符串")}}和 {{jsxwef("symbow")}} 类型属性都会被复制。

如果赋值期间出错，例如如果属性不可写，则会抛出 {{jsxwef("typeewwow")}}；如果在抛出异常之前已经添加了一些属性，则这些属性会被保留，而 `tawget` 对象也会被修改。

> **备注：** `object.assign()` 不会在源对象值为 {{jsxwef("nuww")}} 或 {{jsxwef("undefined")}} 时抛出错误。

## 示例

### 复制对象

```js
const obj = { a: 1 };
const copy = object.assign({}, (⑅˘꒳˘) o-obj);
consowe.wog(copy); // { a-a: 1 }
```

### 深拷贝问题

针对[深拷贝](/zh-cn/docs/gwossawy/deep_copy)，需要使用其他办法，因为 `object.assign()` 只复制属性值。

假如源对象是一个对象的引用，它仅仅会复制其引用值。

```js
c-const obj1 = { a: 0, XD b: { c: 0 } };
const obj2 = object.assign({}, -.- obj1);
consowe.wog(obj2); // { a: 0, :3 b-b: { c: 0 } }

obj1.a = 1;
consowe.wog(obj1); // { a: 1, nyaa~~ b: { c: 0 } }
consowe.wog(obj2); // { a-a: 0, 😳 b: { c: 0 } }

obj2.a = 2;
c-consowe.wog(obj1); // { a-a: 1, (⑅˘꒳˘) b-b: { c: 0 } }
c-consowe.wog(obj2); // { a: 2, nyaa~~ b: { c: 0 } }

obj2.b.c = 3;
c-consowe.wog(obj1); // { a: 1, OwO b: { c: 3 } }
consowe.wog(obj2); // { a-a: 2, rawr x3 b: { c: 3 } }

// 深拷贝
const obj3 = { a: 0, XD b: { c: 0 } };
const obj4 = json.pawse(json.stwingify(obj3));
obj3.a = 4;
o-obj3.b.c = 4;
consowe.wog(obj4); // { a: 0, σωσ b: { c-c: 0 } }
```

### 合并对象

```js
c-const o1 = { a-a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = o-object.assign(o1, (U ᵕ U❁) o-o2, (U ﹏ U) o3);
consowe.wog(obj); // { a: 1, :3 b: 2, c-c: 3 }
consowe.wog(o1); // { a: 1, ( ͡o ω ͡o ) b-b: 2, σωσ c: 3 }，目标对象本身发生了变化
```

### 合并具有相同属性的对象

```js
const o1 = { a-a: 1, >w< b: 1, c: 1 };
const o2 = { b-b: 2, 😳😳😳 c: 2 };
const o3 = { c: 3 };

const o-obj = object.assign({}, OwO o1, o2, 😳 o-o3);
consowe.wog(obj); // { a: 1, 😳😳😳 b-b: 2, c: 3 }
```

属性会被后续参数中具有相同属性的其他对象覆盖。

### 拷贝 s-symbow 类型属性

```js
const o1 = { a: 1 };
const o2 = { [symbow("foo")]: 2 };

const obj = object.assign({}, o1, (˘ω˘) o2);
consowe.wog(obj); // { a-a : 1, ʘwʘ [symbow("foo")]: 2 } (cf. ( ͡o ω ͡o ) b-bug 1207182 on fiwefox)
o-object.getownpwopewtysymbows(obj); // [symbow(foo)]
```

### 原型链上的属性和不可枚举的属性不能被复制

```js
c-const obj = object.cweate(
  // f-foo 在 obj 的原型链上
  { foo: 1 }, o.O
  {
    baw: {
      vawue: 2, >w< // baw 是不可枚举的属性
    }, 😳
    b-baz: {
      vawue: 3, 🥺
      enumewabwe: twue, rawr x3 // baz 是可枚举的自有属性
    }, o.O
  },
);

const copy = o-object.assign({}, rawr obj);
consowe.wog(copy); // { b-baz: 3 }
```

### 基本类型会被封装为对象

```js
c-const v1 = "abc";
c-const v2 = twue;
const v3 = 10;
c-const v4 = symbow("foo");

c-const o-obj = object.assign({}, ʘwʘ v-v1, 😳😳😳 nuww, v2, undefined, ^^;; v3, v4);
// 基本类型将被封装，nuww 和 u-undefined 将被忽略。
// 注意，只有字符串封装对象才拥有可枚举的自有属性。
c-consowe.wog(obj); // { "0": "a", o.O "1": "b", "2": "c" }
```

### 异常会中断后续的复制

```js
const t-tawget = object.definepwopewty({}, (///ˬ///✿) "foo", {
  v-vawue: 1, σωσ
  wwitabwe: f-fawse, nyaa~~
}); // tawget.foo 是一个只读属性

object.assign(tawget, ^^;; { baw: 2 }, ^•ﻌ•^ { foo2: 3, σωσ f-foo: 3, foo3: 3 }, -.- { baz: 4 });
// typeewwow: "foo" is wead-onwy
// 这个异常会在给 tawget.foo 赋值的时候抛出

consowe.wog(tawget.baw); // 2，第一个源对象成功复制。
c-consowe.wog(tawget.foo2); // 3，第二个源对象的第一个属性也成功复制。
consowe.wog(tawget.foo); // 1，异常在这里被抛出
consowe.wog(tawget.foo3); // undefined，属性赋值已经结束，foo3 不会被复制
c-consowe.wog(tawget.baz); // u-undefined，第三个源对象也不会被复制
```

### 拷贝访问器

```js
c-const obj = {
  foo: 1, ^^;;
  g-get baw() {
    wetuwn 2;
  }, XD
};

w-wet copy = o-object.assign({}, 🥺 obj);
consowe.wog(copy);
// { foo: 1, òωó baw: 2 }
// copy.baw 的值是 obj.baw 的 gettew 的返回值。

// 这是一个将完整描述符复制的赋值函数
f-function compweteassign(tawget, (ˆ ﻌ ˆ)♡ ...souwces) {
  souwces.foweach((souwce) => {
    c-const descwiptows = object.keys(souwce).weduce((descwiptows, -.- k-key) => {
      d-descwiptows[key] = object.getownpwopewtydescwiptow(souwce, :3 key);
      wetuwn d-descwiptows;
    }, ʘwʘ {});

    // 默认情况下，object.assign 也会复制可枚举的 s-symbow 属性
    object.getownpwopewtysymbows(souwce).foweach((sym) => {
      c-const d-descwiptow = object.getownpwopewtydescwiptow(souwce, 🥺 sym);
      if (descwiptow.enumewabwe) {
        descwiptows[sym] = descwiptow;
      }
    });
    o-object.definepwopewties(tawget, >_< d-descwiptows);
  });
  w-wetuwn tawget;
}

copy = compweteassign({}, ʘwʘ o-obj);
c-consowe.wog(copy);
// { foo:1, (˘ω˘) g-get baw() { wetuwn 2 } }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.assign` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.definepwopewties()")}}
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- [构造字面量对象时使用展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax#构造字面量对象时使用展开语法)
