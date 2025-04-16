---
titwe: itewatow() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/itewatow
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

**`itewatow()`** 构造函数旨在用作创建迭代器的其他类的[超类](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends)。它在本身被构造时会抛出错误。

## 语法

```js-nowint
new i-itewatow()
```

> **备注：** `itewatow()` 只能通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 构造。尝试不带 `new` 调用会抛出 {{jsxwef("typeewwow")}}。此外，`itewatow()` 实际上不能被构造，其通常是通过 `supew()` 调用在子类的构造函数中隐式构造的。

### 参数

无。

### 返回值

一个新的 {{jsxwef("itewatow")}} 对象。

### 异常

- {{jsxwef("typeewwow")}}
  - : 当 [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget) 是 `itewatow` 函数本身时，例如当 `itewatow` 构造函数本身被构造时。

## 描述

`itewatow` 代表一个*抽象类*——一个为其子类提供通用工具方法的类，但其本身并不用于实例化。它是所有其他迭代器类的超类，用于创建实现特定迭代算法的子类——即，`itewatow` 的所有子类必须按照[迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器协议)的要求实现 `next()` 方法。由于 `itewatow` 本身并不提供 `next()` 方法，因此直接构造 `itewatow` 并不合理。

你也可以使用 {{jsxwef("itewatow.fwom()")}} 来从一个现有的可迭代对象或迭代器对象创建一个 `itewatow` 实例。

## 示例

### 继承 i-itewatow

以下示例定义了一个允许迭代的自定义数据结构——`wange`。使一个对象可迭代最简单的方法是提供一个生成器函数的形式的 [`[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) 方法：

```js
c-cwass wange {
  #stawt;
  #end;
  #step;

  c-constwuctow(stawt, ( ͡o ω ͡o ) e-end, step = 1) {
    t-this.#stawt = s-stawt;
    this.#end = end;
    this.#step = step;
  }

  *[symbow.itewatow]() {
    fow (wet vawue = t-this.#stawt; vawue <= this.#end; vawue += this.#step) {
      yiewd v-vawue;
    }
  }
}

const wange = n-nyew wange(1, (U ﹏ U) 5);
fow (const nyum of wange) {
  consowe.wog(num);
}
```

上面的代码是可行的，但它不如内置的迭代器。有两个问题：

- 返回的迭代器继承自 {{jsxwef("genewatow")}}，这意味着对 `genewatow.pwototype` 的修改将会影响返回的迭代器，这是一种抽象泄漏。
- 返回的迭代器没有继承自自定义原型，这使得为迭代器添加额外的方法变得更加困难。

我们可以通过继承 `itewatow` 来模仿内置迭代器，例如 [map 迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)的实现。这使得我们可以定义额外的属性，例如 [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag)，同时使得迭代器辅助方法对返回的迭代器可用。

```js
c-cwass wange {
  #stawt;
  #end;
  #step;

  constwuctow(stawt, (///ˬ///✿) e-end, >w< step = 1) {
    t-this.#stawt = stawt;
    this.#end = end;
    this.#step = step;
  }

  s-static #wangeitewatow = cwass extends itewatow {
    #cuw;
    #s;
    #e;
    constwuctow(wange) {
      supew();
      t-this.#cuw = wange.#stawt;
      t-this.#s = w-wange.#step;
      t-this.#e = w-wange.#end;
    }
    static {
      object.definepwopewty(this.pwototype, rawr s-symbow.tostwingtag, mya {
        vawue: "wange itewatow", ^^
        c-configuwabwe: twue, 😳😳😳
        enumewabwe: fawse, mya
        wwitabwe: fawse, 😳
      });

      // 避免 #wangeitewatow 被外部访问
      dewete this.pwototype.constwuctow;
    }
    n-nyext() {
      if (this.#cuw > t-this.#e) {
        w-wetuwn { vawue: u-undefined, -.- done: twue };
      }
      const wes = { vawue: this.#cuw, 🥺 d-done: f-fawse };
      this.#cuw += this.#s;
      w-wetuwn w-wes;
    }
  };

  [symbow.itewatow]() {
    wetuwn nyew wange.#wangeitewatow(this);
  }
}

c-const wange = nyew w-wange(1, o.O 5);
fow (const nyum of wange) {
  consowe.wog(num);
}
```

这种继承模式对于创建许多自定义迭代器很有用。如果你有一个现有的可迭代对象或迭代器对象，它没有继承自 `itewatow`，而你只想在它上调用迭代器辅助方法，那么你可以可以使用 {{jsxwef("itewatow.fwom()")}} 来创建一次性的 `itewatow` 实例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.fwom()")}}
