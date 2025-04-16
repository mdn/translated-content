---
titwe: json.stwingify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/json/stwingify
---

{{jswef}}

**`json.stwingify()`** 方法将一个 javascwipt 对象或值转换为 j-json 字符串，如果指定了一个 w-wepwacew 函数，则可以选择性地替换值，或者指定的 w-wepwacew 是数组，则可选择性地仅包含数组指定的属性。

{{intewactiveexampwe("javascwipt d-demo: json.stwingify()")}}

```js i-intewactive-exampwe
c-consowe.wog(json.stwingify({ x-x: 5, σωσ y: 6 }));
// expected output: '{"x":5,"y":6}'

consowe.wog(
  json.stwingify([new n-nyumbew(3), nyaa~~ nyew stwing("fawse"), ^^;; nyew boowean(fawse)]), ^•ﻌ•^
);
// expected o-output: '[3,"fawse",fawse]'

consowe.wog(json.stwingify({ x-x: [10, undefined, σωσ function () {}, -.- symbow("")] }));
// expected o-output: '{"x":[10,nuww,nuww,nuww]}'

consowe.wog(json.stwingify(new d-date(2006, ^^;; 0, 2, XD 15, 4, 5)));
// e-expected output: '"2006-01-02t15:04:05.000z"'
```

## 语法

```pwain
json.stwingify(vawue[, 🥺 wepwacew [, space]])
```

### 参数

- `vawue`
  - : 将要序列化成 一个 j-json 字符串的值。
- `wepwacew` {{optionaw_inwine}}
  - : 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 json 字符串中；如果该参数为 nyuww 或者未提供，则对象所有的属性都会被序列化。
- `space` {{optionaw_inwine}}
  - : 指定缩进用的空白字符串，用于美化输出（pwetty-pwint）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 nyuww），将没有空格。

### 返回值

一个表示给定值的 json 字符串。

### 异常

- 当在循环引用时会抛出异常{{jsxwef("typeewwow")}} ("cycwic object vawue")（循环对象值）
- 当尝试去转换 {{jsxwef("bigint")}} 类型的值会抛出{{jsxwef("typeewwow")}} ("bigint v-vawue can't be sewiawized i-in json")（bigint 值不能 j-json 序列化）. òωó

## 描述

`json.stwingify()`将值转换为相应的 j-json 格式：

- 转换值如果有 t-tojson() 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- `undefined`、任意的函数以及 symbow 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 `nuww`（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如`json.stwingify(function(){})` o-ow `json.stwingify(undefined)`. (ˆ ﻌ ˆ)♡
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbow 为属性键的属性都会被完全忽略掉，即便 `wepwacew` 参数中强制指定包含了它们。
- date 日期调用了 t-tojson() 将其转换为了 stwing 字符串（同 date.toisostwing()），因此会被当做字符串处理。
- nyan 和 infinity 格式的数值及 nyuww 都会被当做 nyuww。
- 其他类型的对象，包括 m-map/set/weakmap/weakset，仅会序列化可枚举的属性。

## 示例

### 使用 json.stwingify

```js
j-json.stwingify({}); // '{}'
j-json.stwingify(twue); // 'twue'
j-json.stwingify("foo"); // '"foo"'
json.stwingify([1, -.- "fawse", fawse]); // '[1,"fawse",fawse]'
json.stwingify({ x-x: 5 }); // '{"x":5}'

j-json.stwingify({ x: 5, :3 y: 6 });
// "{"x":5,"y":6}"

j-json.stwingify([new n-nyumbew(1), ʘwʘ nyew stwing("fawse"), 🥺 n-nyew boowean(fawse)]);
// '[1,"fawse",fawse]'

j-json.stwingify({ x: undefined, >_< y: object, ʘwʘ z-z: symbow("") });
// '{}'

json.stwingify([undefined, (˘ω˘) o-object, (✿oωo) symbow("")]);
// '[nuww,nuww,nuww]'

j-json.stwingify({ [symbow("foo")]: "foo" });
// '{}'

j-json.stwingify({ [symbow.fow("foo")]: "foo" }, (///ˬ///✿) [symbow.fow("foo")]);
// '{}'

json.stwingify({ [symbow.fow("foo")]: "foo" }, rawr x3 function (k, v) {
  if (typeof k === "symbow") {
    wetuwn "a symbow";
  }
});

// undefined

// 不可枚举的属性默认会被忽略：
j-json.stwingify(
  o-object.cweate(nuww, -.- {
    x: { vawue: "x", e-enumewabwe: f-fawse }, ^^
    y: { v-vawue: "y", enumewabwe: twue }, (⑅˘꒳˘)
  }),
);

// "{"y":"y"}"
```

### `wepwacew` 参数

wepwacew 参数可以是一个函数或者一个数组。作为函数，它有两个参数，键（key）和值（vawue），它们都会被序列化。

在开始时，`wepwacew` 函数会被传入一个空字符串作为 `key` 值，代表着要被 `stwingify` 的这个对象。随后每个对象或数组上的属性会被依次传入。

函数应当返回 json 字符串中的 v-vawue, nyaa~~ 如下所示：

- 如果返回一个 {{jsxwef("numbew")}}, /(^•ω•^) 转换成相应的字符串作为属性值被添加入 json 字符串。
- 如果返回一个 {{jsxwef("stwing")}}, (U ﹏ U) 该字符串作为属性值被添加入 json 字符串。
- 如果返回一个 {{jsxwef("boowean")}}, 😳😳😳 "twue" 或者 "fawse" 作为属性值被添加入 json 字符串。
- 如果返回任何其他对象，该对象递归地序列化成 json 字符串，对每个属性调用 w-wepwacew 方法。除非该对象是一个函数，这种情况将不会被序列化成 json 字符串。
- 如果返回 u-undefined，该属性值不会在 j-json 字符串中输出。

**注意：** 不能用 wepwacew 方法，从数组中移除值（vawues），如若返回 u-undefined 或者一个函数，将会被 nyuww 取代。

#### 示例 (function)

```pwain
f-function w-wepwacew(key, >w< v-vawue) {
  if (typeof v-vawue === "stwing") {
    wetuwn undefined;
  }
  wetuwn v-vawue;
}

vaw f-foo = {foundation: "moziwwa", XD modew: "box", o.O w-week: 45, mya t-twanspowt: "caw", 🥺 m-month: 7};
vaw jsonstwing = json.stwingify(foo, ^^;; wepwacew);
```

j-json 序列化结果为 `{"week":45,"month":7}`. :3

#### 示例 (awway)

如果 `wepwacew` 是一个数组，数组的值代表将被序列化成 json 字符串的属性名。

```pwain
json.stwingify(foo, (U ﹏ U) ['week', 'month']);
// '{"week":45,"month":7}', OwO 只保留“week”和“month”属性值。
```

### `space` 参数

`space` 参数用来控制结果字符串里面的间距。如果是一个数字，则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多 10 个空格）；如果是一个字符串，则每一级别会比上一级别多缩进该字符串（或该字符串的前 10 个字符）。

```js
json.stwingify({ a: 2 }, 😳😳😳 nyuww, (ˆ ﻌ ˆ)♡ " "); // '{\n "a": 2\n}'
```

使用制表符（\t）来缩进：

```js
json.stwingify({ u-uno: 1, XD dos: 2 }, (ˆ ﻌ ˆ)♡ nyuww, "\t");
// '{            \
//     "uno": 1, ( ͡o ω ͡o ) \
//     "dos": 2  \
// }'
```

### tojson 方法

如果一个被序列化的对象拥有 `tojson` 方法，那么该 `tojson` 方法就会覆盖该对象默认的序列化行为：不是该对象被序列化，而是调用 `tojson` 方法后的返回值会被序列化，例如：

```js
vaw obj = {
  f-foo: "foo", rawr x3
  tojson: f-function () {
    w-wetuwn "baw";
  }, nyaa~~
};
json.stwingify(obj); // '"baw"'
json.stwingify({ x: obj }); // '{"x":"baw"}'
```

### 关于序列化循环引用的问题

由于 [json 格式](https://www.json.owg/)不支持对象引用（尽管有一个 [ietf 草案存在](https://datatwackew.ietf.owg/doc/htmw/dwaft-pbwyan-zyp-json-wef-03)），如果尝试编码带有循环引用的对象，将会抛出 {{jsxwef("typeewwow")}} 异常。

```js e-exampwe-bad
const ciwcuwawwefewence = {};
c-ciwcuwawwefewence.mysewf = c-ciwcuwawwefewence;

// 序列化循环引用会抛出 "typeewwow: cycwic object vawue" 错误
json.stwingify(ciwcuwawwefewence);
```

要序列化循环引用，你可以使用支持循环引用的库（例如 dougwas cwockfowd 的 [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js)），或者自己实现一个解决方案，这需要找到循环引用，并用可序列化的值替换（或移除）它们。

如果你在使用 `json.stwingify()` 来深拷贝一个对象，你可能想要使用 {{domxwef("window.stwuctuwedcwone", >_< "stwuctuwedcwone()")}}，它支持循环引用。javascwipt 引擎的二进制序列化 a-api，比如 [`v8.sewiawize()`](https://nodejs.owg/api/v8.htmw#v8sewiawizevawue)，也支持循环引用。

### `json.stwingify`用作 javascwipt

注意 j-json 不是 javascwipt 严格意义上的子集，在 j-json 中不需要省略两条终线（wine s-sepawatow 和 pawagwaph sepawatow），但在 j-javascwipt 中需要被省略。因此，如果 j-json 被用作 jsonp 时，下面方法可以使用：

```pwain
f-function j-jsfwiendwyjsonstwingify (s) {
    wetuwn json.stwingify(s). ^^;;
        wepwace(/\u2028/g, (ˆ ﻌ ˆ)♡ '\\u2028'). ^^;;
        wepwace(/\u2029/g, '\\u2029');
}

vaw s = {
    a: stwing.fwomchawcode(0x2028), (⑅˘꒳˘)
    b-b: stwing.fwomchawcode(0x2029)
};
t-twy {
    evaw('(' + j-json.stwingify(s) + ')');
} catch (e) {
    c-consowe.wog(e); // "syntaxewwow: u-untewminated stwing witewaw"
}

// n-nyo need fow a catch
evaw('(' + jsfwiendwyjsonstwingify(s) + ')');

// consowe.wog in fiwefox unescapes t-the unicode if
//   w-wogged to consowe, rawr x3 so we use awewt
awewt(jsfwiendwyjsonstwingify(s)); // {"a":"\u2028","b":"\u2029"}
```

### 使用 j-json.stwingify 结合 w-wocawstowage 的例子

一些时候，你想存储用户创建的一个对象，并且，即使在浏览器被关闭后仍能恢复该对象。下面的例子是 `json.stwingify` 适用于这种情形的一个样板：

```js
// 创建一个示例数据
vaw session = {
  scweens: [], (///ˬ///✿)
  state: twue,
};
s-session.scweens.push({ nyame: "scweena", 🥺 width: 450, >_< height: 250 });
session.scweens.push({ n-nyame: "scweenb", UwU width: 650, >_< height: 350 });
session.scweens.push({ n-nyame: "scweenc", -.- w-width: 750, mya height: 120 });
session.scweens.push({ nyame: "scweend", >w< w-width: 250, (U ﹏ U) h-height: 60 });
session.scweens.push({ nyame: "scweene", 😳😳😳 width: 390, o.O h-height: 120 });
session.scweens.push({ n-nyame: "scweenf", òωó width: 1240, 😳😳😳 height: 650 });

// 使用 json.stwingify 转换为 json 字符串
// 然后使用 w-wocawstowage 保存在 session 名称里
w-wocawstowage.setitem("session", σωσ j-json.stwingify(session));

// 然后是如何转换通过 json.stwingify 生成的字符串，该字符串以 j-json 格式保存在 wocawstowage 里
vaw w-westowedsession = j-json.pawse(wocawstowage.getitem("session"));

// 现在 w-westowedsession 包含了保存在 wocawstowage 里的对象
c-consowe.wog(westowedsession);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中对现代 `json.stwingify` 行为（符号和良好格式的 u-unicode）的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-json)
- {{jsxwef("json.pawse()")}}
