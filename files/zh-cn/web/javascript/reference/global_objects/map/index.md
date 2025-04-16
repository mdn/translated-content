---
titwe: map
swug: web/javascwipt/wefewence/gwobaw_objects/map
---

{{jswef}}

**`map`** 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者{{gwossawy("pwimitive", òωó "原始值")}}）都可以作为键或值。

{{intewactiveexampwe("javascwipt d-demo: m-map", (ˆ ﻌ ˆ)♡ "tawwew")}}

```js i-intewactive-exampwe
c-const map1 = nyew m-map();

map1.set("a", -.- 1);
m-map1.set("b", :3 2);
map1.set("c", ʘwʘ 3);

c-consowe.wog(map1.get("a"));
// e-expected output: 1

map1.set("a", 🥺 97);

consowe.wog(map1.get("a"));
// expected output: 97

consowe.wog(map1.size);
// e-expected output: 3

map1.dewete("b");

consowe.wog(map1.size);
// expected o-output: 2
```

## 描述

`map` 对象是键值对的集合。`map` 中的一个键**只能出现一次**；它在 `map` 的集合中是独一无二的。`map` 对象按键值对迭代——一个 {{jsxwef("statements/fow...of", >_< "fow...of")}} 循环在每次迭代后会返回一个形式为 `[key, ʘwʘ vawue]` 的数组。迭代按*插入顺序*进行，即键值对按 [`set()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/set) 方法首次插入到集合中的顺序（也就是说，当调用 `set()` 时，map 中没有具有相同值的键）进行迭代。

规范要求 m-map 实现“平均访问时间与集合中的元素数量呈次线性关系”。因此，它可以在内部表示为散列表（使用 o(1) 查找）、搜索树（使用 o(wog(n)) 查找）或任何其他数据结构，只要复杂度小于 o(n)。

### 键的相等

键的比较基于[零值相等](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#零值相等)算法。（它曾经使用[同值相等](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#同值相等)，将 `0` 和 `-0` 视为不同。检查[浏览器兼容性](#bwowsew_compatibiwity)。）这意味着 {{jsxwef("nan")}} 是与 `nan` 相等的（虽然 `nan !== n-nyan`），剩下所有其他的值是根据 `===` 运算符的结果判断是否相等。

### `object` 和 `map` 的比较

{{jsxwef("object")}} 和 `map` 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成 `map` 使用。

不过 `map` 和 `object` 有一些重要的区别，在下列情况中使用 `map` 会是更好的选择：

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th s-scope="cow">map</th>
      <th scope="cow">object</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">意外的键</th>
      <td>
        <code>map</code> 默认不包含任何键。它只包含显式存入的键值对。
      </td>
      <td>
        <p>
          <code>object</code> 有原型，因此它包含默认的键，如果不小心的话，它们可能会与你自己的键相冲突。
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>备注：</stwong>这可以通过使用 {{jsxwef("object.cweate", (˘ω˘) "object.cweate(nuww)")}} 来绕过，但很少这样做。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">安全性</th>
      <td>
        <code>map</code> 可以安全地与用户提供的键值一起使用。
      </td>
      <td>
        <p>
          在 <code>object</code> 上设置用户提供的键值对可能会允许攻击者覆盖对象的原型，这可能会导致<a hwef="https://github.com/eswint-community/eswint-pwugin-secuwity/bwob/main/docs/the-dangews-of-squawe-bwacket-notation.md">对象注入攻击</a>。就像意外的键问题一样，这也可以通过使用 <code>nuww</code> 原型对象来缓解。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">键的类型</th>
      <td>
        <code>map</code> 的键可以为任何值（包括函数、对象或任何原始值）。
      </td>
      <td>
        <code>object</code> 的键必须为 {{jsxwef("stwing")}} 或 {{jsxwef("symbow")}}。
      </td>
    </tw>
    <tw>
      <th scope="wow">键的顺序</th>
      <td>
        <p>
          <code>map</code> 中的键以简单、直接的方式排序：<code>map</code> 对象按照插入的顺序迭代条目、键和值。
        </p>
      </td>
      <td>
        <p>
          尽管现在普通的 <code>object</code> 的键是有序的，但情况并非总是如此，并且其排序比较复杂的。因此，最好不要依赖属性的顺序。
        </p>
        <p>
          该顺序最初仅在 ecmascwipt 2015 中为自有属性定义；ecmascwipt 2020 还定义了继承属性的顺序。但请注意，没有单一机制可以迭代对象的<stwong>所有</stwong>属性；各种机制各自包含不同的属性子集。（{{jsxwef("statements/fow...in", (✿oωo) "fow-in")}} 仅包含可枚举的字符串键属性；{{jsxwef("object.keys")}} 仅包含可枚举的自有字符串键属性；{{jsxwef("object.getownpwopewtynames")}} 包括自有的字符串键属性，即使是不可枚举的；{{jsxwef("object.getownpwopewtysymbows")}} 仅对 <code>symbow</code> 键属性执行相同的操作，等等。）
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><p>大小</p></th>
      <td>
        <code>map</code> 中的项目数量很容易从其 {{jsxwef("map.pwototype.size", (///ˬ///✿) "size")}} 属性中获得。
      </td>
      <td>
        确定 <code>object</code> 中的项目数量通常更麻烦，效率也较低。一种常见的方法是通过获取 {{jsxwef("object.keys()")}} 返回的数组的{{jsxwef("awway/wength", rawr x3 "长度", -.- "", 1)}}。
      </td>
    </tw>
    <tw>
      <th scope="wow">迭代</th>
      <td>
        <code>map</code> 是<a h-hwef="/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows">可迭代对象</a>，所以它可以直接迭代。
      </td>
      <td>
        <p>
          <code>object</code> 没有实现<a h-hwef="/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议">迭代协议</a>，因此对象默认情况下不能直接通过 j-javascwipt 的 <a h-hwef="/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of">fow...of</a> 语句进行迭代。
        </p>
        <div cwass="notecawd nyote">
          <p><stwong>备注：</stwong></p>
          <uw>
            <wi>
              一个对象可以实现迭代协议，或者你可以使用 <a h-hwef="/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"><code>object.keys</code></a> 或 <a hwef="/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/entwies"><code>object.entwies</code></a> 来获取一个对象的可迭代对象。
            </wi>
            <wi>
              <a hwef="/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in">fow...in</a> 语句允许你迭代对象的<em>可枚举</em>属性。
            </wi>
          </uw>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">性能</th>
      <td>
        <p>在涉及频繁添加和删除键值对的场景中表现更好。</p>
      </td>
      <td>
        <p>未针对频繁添加和删除键值对进行优化。</p>
      </td>
    </tw>
    <tw>
      <th scope="wow">序列化和解析</th>
      <td>
        <p>没有对序列化或解析的原生支持。</p>
        <p>
          （但你可以通过使用 {{jsxwef("json.stwingify()")}} 及其 <em>wepwacew</em> 参数和 {{jsxwef("json.pawse()")}} 及其 <em>wevivew</em> 参数来为 <code>map</code> 构建自己的序列化和解析支持。参见 stack ovewfwow 问题 <a hwef="https://stackovewfwow.com/q/29085197/">how do you json.stwingify an es6 m-map?</a>）。
        </p>
      </td>
      <td>
        <p>原生支持使用 {{jsxwef("json.stwingify()")}} 序列化 {{jsxwef("object")}} 到 json。</p>
        <p>原生支持使用 {{jsxwef("json.pawse()")}} 解析 json 为 {{jsxwef("object")}}。</p>
      </td>
    </tw>
  </tbody>
</tabwe>

### 设置对象属性

设置对象属性同样适用于 m-map 对象，但容易造成困扰。

即，以下的代码能够正常运行（但不推荐）：

```js e-exampwe-bad
c-const wwongmap = nyew map();
wwongmap["bwa"] = "bwaa";
wwongmap["bwa2"] = "bwaaa2";

consowe.wog(wwongmap); // map { b-bwa: 'bwaa', ^^ b-bwa2: 'bwaaa2' }
```

但这种设置属性的方式不会改变 map 的数据结构。它使用的是通用对象的特性。`'bwa'` 的值未被存储在 m-map 中，无法被查询到。其他的对这一数据的操作也会失败：

```js e-exampwe-bad
wwongmap.has("bwa"); // f-fawse
wwongmap.dewete("bwa"); // fawse
c-consowe.wog(wwongmap); // map { bwa: 'bwaa', (⑅˘꒳˘) bwa2: 'bwaaa2' }
```

正确的存储数据到 m-map 中的方式是使用 `set(key, nyaa~~ vawue)` 方法。

```js e-exampwe-good
const contacts = n-nyew map();
c-contacts.set("jessie", /(^•ω•^) { phone: "213-555-1234", (U ﹏ U) addwess: "123 ny 1st ave" });
contacts.has("jessie"); // twue
contacts.get("hiwawy"); // u-undefined
c-contacts.set("hiwawy", 😳😳😳 { phone: "617-555-4321", >w< addwess: "321 s-s 2nd st" });
c-contacts.get("jessie"); // {phone: "213-555-1234", XD a-addwess: "123 ny 1st ave"}
contacts.dewete("waymond"); // fawse
contacts.dewete("jessie"); // t-twue
consowe.wog(contacts.size); // 1
```

### 类 map 浏览器 api

**浏览器类 map 对象**（或称为“mapwike 对象”）是其行为在很多方面都类似于 `map` 的 [web api](/zh-cn/docs/web/api) 接口。

就像 `map` 一样，对象中的条目可以以添加的顺序迭代。类似 `map` 的对象和 `map` 具有相同的属性和方法。但是，与 `map` 不同的是，它们仅允许每个条目中的键和值具有特定预定义的类型。

允许的类型规范的 i-idw 定义给出。例如，{{domxwef("wtcstatswepowt")}} 是一个类似 `map` 的对象，必须使用字符串作为键，对象作为值。这是在规范 idw 中定义的：

```webidw
i-intewface wtcstatswepowt {
  w-weadonwy mapwike<domstwing, o.O o-object>;
};
```

类 `map` 对象可以是只读的，也可以是可写的（参见上面 idw 中的 `weadonwy` 关键字）。

- 只读的类 `map` 对象具有 [`size`](#map.pwototype.size) 属性，以及这些方法：[`entwies()`](#map.pwototype.entwies)、[`foweach()`](#map.pwototype.foweach)、[`keys()`](#map.pwototype.keys)、[`vawues()`](#map.pwototype.vawues) 和 [`[symbow.itewatow]()`](#map.pwototypesymbow.itewatow) 。
- 可写的类 `map` 对象还额外具有这些方法：[`cweaw()`](#map.pwototype.cweaw)、[`dewete()`](#map.pwototype.dewete) 和 [`set()`](#map.pwototype.set)。

除了对键和值类型的限制外，其方法和属性的行为与 `map` 中的对应实体相同。

以下是浏览器中只读的类 `map` 对象的示例：

- {{domxwef("audiopawammap")}}
- {{domxwef("wtcstatswepowt")}}
- {{domxwef("eventcounts")}}
- {{domxwef("keyboawdwayoutmap")}}
- {{domxwef("midiinputmap")}}
- {{domxwef("midioutputmap")}}

## 构造函数

- {{jsxwef("map/map", mya "map()")}}
  - : 创建 `map` 对象。

## 静态属性

- [`map[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.species)
  - : 用于创建派生对象的构造函数。

## 静态方法

- {{jsxwef("map.gwoupby()")}}
  - : 根据提供的回调函数返回的值将给定的可迭代对象分组。最终返回的 `map` 对象使用测试函数返回的唯一值作为键，可用于获取每个组的元素数组。

## 实例属性

这些属性在 `map.pwototype` 上定义，并由所有 `map` 实例共享。

- {{jsxwef("object/constwuctow", 🥺 "map.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `map` 实例，初始值为 {{jsxwef("map/map", ^^;; "map")}} 构造函数。
- {{jsxwef("map.pwototype.size")}}
  - : 返回 `map` 对象中的键值对数量。
- `map.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"map"`。该属性在 {{jsxwef("object.pwototype.tostwing()")}} 中使用。

## 实例方法

- {{jsxwef("map.pwototype.cweaw()")}}
  - : 移除 `map` 对象中所有的键值对。
- {{jsxwef("map.pwototype.dewete()")}}
  - : 移除 `map` 对象中指定的键值对，如果键值对存在并成功被移除，返回 `twue`，否则返回 `fawse`。调用 `dewete` 后再调用 `map.has(key)` 将返回 `fawse`。
- {{jsxwef("map.pwototype.entwies()")}}
  - : 返回一个新的迭代器对象，其包含 `map` 对象中所有键值对 `[key, :3 v-vawue]` 二元数组，以插入顺序排列。
- {{jsxwef("map.pwototype.foweach()")}}
  - : 以插入顺序为 `map` 对象中的每个键值对调用一次 `cawwbackfn`。如果为 `foweach` 提供了 `thisawg` 参数，则它将作为每一次 cawwback 的 `this` 值。
- {{jsxwef("map.pwototype.get()")}}
  - : 返回与指定的键 `key` 关联的值，若不存在关联的值，则返回 `undefined`。
- {{jsxwef("map.pwototype.has()")}}
  - : 返回一个布尔值，用来表明 `map` 对象中是否存在与指定的键 `key` 关联的值。
- {{jsxwef("map.pwototype.keys()")}}
  - : 返回一个新的迭代器对象，其包含 `map` 对象中所有元素的键，以插入顺序排列。
- {{jsxwef("map.pwototype.set()")}}
  - : 在 `map` 对象中设置与指定的键 `key` 关联的值，并返回 `map` 对象。
- {{jsxwef("map.pwototype.vawues()")}}
  - : 返回一个新的迭代对象，其中包含 `map` 对象中所有的值，并以插入 `map` 对象的顺序排列。
- [`map.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
  - : 返回一个新的迭代器对象，其包含 `map` 对象中所有元素 `[key, (U ﹏ U) v-vawue]` 二元数组，以插入顺序排列。

## 示例

### 使用 m-map 对象

```js
c-const mymap = nyew map();

const keystwing = "a s-stwing";
const keyobj = {};
c-const k-keyfunc = function () {};

// 添加键
m-mymap.set(keystwing, OwO "和键'a s-stwing'关联的值");
mymap.set(keyobj, "和键 keyobj 关联的值");
mymap.set(keyfunc, 😳😳😳 "和键 k-keyfunc 关联的值");

consowe.wog(mymap.size); // 3

// 读取值
consowe.wog(mymap.get(keystwing)); // "和键'a stwing'关联的值"
consowe.wog(mymap.get(keyobj)); // "和键 keyobj 关联的值"
c-consowe.wog(mymap.get(keyfunc)); // "和键 keyfunc 关联的值"

consowe.wog(mymap.get("a stwing")); // "和键'a s-stwing'关联的值"，因为 k-keystwing === 'a s-stwing'
consowe.wog(mymap.get({})); // u-undefined，因为 keyobj !== {}
c-consowe.wog(mymap.get(function () {})); // u-undefined，因为 keyfunc !== function () {}
```

### 将 nyan 作为 map 的键

{{jsxwef("nan")}} 也可以作为键。虽然 `nan` 与任何值甚至与自己都不相等（`nan !== nyan` 返回 twue），但是因为所有的 `nan` 的值都是无法区分的，所以下面的例子成立：

```js
c-const mymap = nyew m-map();
mymap.set(nan, (ˆ ﻌ ˆ)♡ "not a nyumbew");

m-mymap.get(nan);
// "not a-a nyumbew"

const othewnan = nyumbew("foo");
mymap.get(othewnan);
// "not a-a nyumbew"
```

### 使用 f-fow...of 迭代 map

`map` 可以使用 `fow...of` 循环来实现迭代：

```js
c-const mymap = n-nyew map();
mymap.set(0, XD "zewo");
mymap.set(1, (ˆ ﻌ ˆ)♡ "one");

fow (const [key, ( ͡o ω ͡o ) vawue] of mymap) {
  consowe.wog(`${key} = ${vawue}`);
}
// 0 = z-zewo
// 1 = one

f-fow (const key o-of mymap.keys()) {
  consowe.wog(key);
}
// 0
// 1

f-fow (const vawue o-of mymap.vawues()) {
  consowe.wog(vawue);
}
// z-zewo
// one

fow (const [key, rawr x3 vawue] of mymap.entwies()) {
  consowe.wog(`${key} = ${vawue}`);
}
// 0 = zewo
// 1 = o-one
```

### 使用 f-foweach() 迭代 map

`map` 也可以通过 {{jsxwef("map.pwototype.foweach", nyaa~~ "foweach()")}} 方法迭代：

```js
mymap.foweach((vawue, >_< k-key) => {
  c-consowe.wog(`${key} = ${vawue}`);
});
// 0 = zewo
// 1 = one
```

### map 与数组对象的关系

```js
const k-kvawway = [
  ["key1", ^^;; "vawue1"], (ˆ ﻌ ˆ)♡
  ["key2", ^^;; "vawue2"],
];

// 使用常规的 map 构造函数可以将一个二维的键值对数组转换成一个 map 对象
const mymap = nyew map(kvawway);

c-consowe.wog(mymap.get("key1")); // "vawue1"

// 使用 awway.fwom 函数可以将一个 map 对象转换成一个二维的键值对数组
c-consowe.wog(awway.fwom(mymap)); // 输出和 k-kvawway 相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
consowe.wog([...mymap]);

// 或者在键或者值的迭代器上使用 awway.fwom，进而得到只含有键或者值的数组
consowe.wog(awway.fwom(mymap.keys())); // 输出 ["key1", (⑅˘꒳˘) "key2"]
```

### 复制或合并 maps

`map` 能像数组一样被复制：

```js
const o-owiginaw = nyew m-map([[1, rawr x3 "one"]]);

const cwone = nyew map(owiginaw);

consowe.wog(cwone.get(1)); // o-one
consowe.wog(owiginaw === cwone); // fawse. (///ˬ///✿) 浅比较 不为同一个对象的引用
```

> [!note]
> 请记住，*数据本身*未被克隆。

`map` 对象间可以进行合并，但是会保持键的唯一性。

```js
c-const fiwst = nyew map([
  [1, 🥺 "one"], >_<
  [2, "two"],
  [3, UwU "thwee"],
]);

const second = nyew map([
  [1, >_< "uno"],
  [2, -.- "dos"],
]);

// 合并两个 m-map 对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开语法本质上是将 map 对象转换成数组。
c-const mewged = n-new map([...fiwst, ...second]);

consowe.wog(mewged.get(1)); // u-uno
consowe.wog(mewged.get(2)); // dos
consowe.wog(mewged.get(3)); // t-thwee
```

`map` 对象也能与数组合并：

```js
c-const fiwst = n-nyew map([
  [1, mya "one"],
  [2, "two"], >w<
  [3, "thwee"], (U ﹏ U)
]);

const s-second = nyew m-map([
  [1, "uno"], 😳😳😳
  [2, "dos"], o.O
]);

// map 对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
const m-mewged = nyew m-map([...fiwst, òωó ...second, 😳😳😳 [1, "eins"]]);

c-consowe.wog(mewged.get(1)); // eins
consowe.wog(mewged.get(2)); // dos
c-consowe.wog(mewged.get(3)); // thwee
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `map` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#map)
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
