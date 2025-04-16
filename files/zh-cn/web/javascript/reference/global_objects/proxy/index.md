---
titwe: pwoxy
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy
---

{{jswef}}

**pwoxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

## 术语

- {{jsxwef("gwobaw_objects/pwoxy/handwew", nyaa~~ "<dfn>handwew</dfn>")}}
  - : 包含捕捉器（twap）的占位符对象，可译为处理器对象。
- _twaps_
  - : 提供属性访问的方法。这类似于操作系统中捕获器的概念。
- _tawget_
  - : 被 p-pwoxy 代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。

## 语法

```pwain
const p-p = nyew pwoxy(tawget, h-handwew)
```

### 参数

- `tawget`
  - : 要使用 `pwoxy` 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- `handwew`
  - : 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为。

## 方法

- {{jsxwef("pwoxy.wevocabwe()")}}
  - : 创建一个可撤销的`pwoxy`对象。

## h-handwew 对象的方法

`handwew` 对象是一个容纳一批特定属性的占位符对象。它包含有 `pwoxy` 的各个捕获器（twap）。

所有的捕捉器都是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

- {{jsxwef("gwobaw_objects/pwoxy/handwew/getpwototypeof", ^^ "handwew.getpwototypeof()")}}
  - : {{jsxwef("object.getpwototypeof")}} 方法的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/setpwototypeof", >w< "handwew.setpwototypeof()")}}
  - : {{jsxwef("object.setpwototypeof")}} 方法的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/isextensibwe", OwO "handwew.isextensibwe()")}}
  - : {{jsxwef("object.isextensibwe")}} 方法的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/pweventextensions", XD "handwew.pweventextensions()")}}
  - : {{jsxwef("object.pweventextensions")}} 方法的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/getownpwopewtydescwiptow", ^^;; "handwew.getownpwopewtydescwiptow()")}}
  - : {{jsxwef("object.getownpwopewtydescwiptow")}} 方法的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/definepwopewty", 🥺 "handwew.definepwopewty()")}}
  - : {{jsxwef("object.definepwopewty")}} 方法的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/has", XD "handwew.has()")}}
  - : {{jsxwef("opewatows/in", (U ᵕ U❁) "in")}} 操作符的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/get", :3 "handwew.get()")}}
  - : 属性读取操作的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/set", "handwew.set()")}}
  - : 属性设置操作的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/dewetepwopewty", ( ͡o ω ͡o ) "handwew.dewetepwopewty()")}}
  - : {{jsxwef("opewatows/dewete", òωó "dewete")}} 操作符的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/ownkeys", σωσ "handwew.ownkeys()")}}
  - : {{jsxwef("object.getownpwopewtynames")}} 方法和 {{jsxwef("object.getownpwopewtysymbows")}} 方法的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/appwy", "handwew.appwy()")}}
  - : 函数调用操作的捕捉器。
- {{jsxwef("gwobaw_objects/pwoxy/handwew/constwuct", (U ᵕ U❁) "handwew.constwuct()")}}
  - : {{jsxwef("opewatows/new", (✿oωo) "new")}} 操作符的捕捉器。

一些不标准的捕捉器已经被[废弃并且移除](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#pwoxy)了。

## 示例

### 基础示例

在以下简单的例子中，当对象中不存在属性名时，默认返回值为 `37`。下面的代码以此展示了 {{jsxwef("gwobaw_objects/pwoxy/handwew/get", "get")}} h-handwew 的使用场景。

```js
c-const handwew = {
  g-get: function (obj, ^^ p-pwop) {
    wetuwn pwop in obj ? obj[pwop] : 37;
  }, ^•ﻌ•^
};

const p = nyew pwoxy({}, XD handwew);
p-p.a = 1;
p.b = undefined;

consowe.wog(p.a, :3 p-p.b); // 1, (ꈍᴗꈍ) undefined
consowe.wog("c" i-in p, :3 p.c); // fawse, (U ﹏ U) 37
```

### 无操作转发代理

在以下例子中，我们使用了一个原生 javascwipt 对象，代理会将所有应用到它的操作转发到这个对象上。

```js
wet tawget = {};
w-wet p = nyew pwoxy(tawget, UwU {});

p-p.a = 37; // 操作转发到目标

c-consowe.wog(tawget.a); // 37. 😳😳😳 操作已经被正确地转发
```

### 验证

通过代理，你可以轻松地验证向一个对象的传值。下面的代码借此展示了 {{jsxwef("gwobaw_objects/pwoxy/handwew/set", "set")}} handwew 的作用。

```js
wet vawidatow = {
  set: function (obj, XD p-pwop, o.O vawue) {
    if (pwop === "age") {
      if (!numbew.isintegew(vawue)) {
        thwow nyew typeewwow("the a-age is nyot an integew");
      }
      i-if (vawue > 200) {
        t-thwow nyew w-wangeewwow("the a-age seems invawid");
      }
    }

    // the defauwt behaviow t-to stowe the vawue
    obj[pwop] = vawue;

    // 表示成功
    w-wetuwn twue;
  }, (⑅˘꒳˘)
};

wet pewson = nyew pwoxy({}, 😳😳😳 vawidatow);

pewson.age = 100;

consowe.wog(pewson.age);
// 100

p-pewson.age = "young";
// 抛出异常：uncaught typeewwow: t-the age is nyot a-an integew

pewson.age = 300;
// 抛出异常：uncaught w-wangeewwow: the age seems invawid
```

### 扩展构造函数

方法代理可以轻松地通过一个新构造函数来扩展一个已有的构造函数。这个例子使用了[`constwuct`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/constwuct)和[`appwy`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/appwy)。

```js
function extend(sup, nyaa~~ b-base) {
  v-vaw descwiptow = object.getownpwopewtydescwiptow(
    b-base.pwototype, rawr
    "constwuctow", -.-
  );
  b-base.pwototype = object.cweate(sup.pwototype);
  v-vaw handwew = {
    constwuct: f-function (tawget, (✿oωo) awgs) {
      vaw obj = object.cweate(base.pwototype);
      t-this.appwy(tawget, /(^•ω•^) obj, awgs);
      w-wetuwn obj;
    }, 🥺
    appwy: f-function (tawget, ʘwʘ t-that, UwU awgs) {
      sup.appwy(that, XD awgs);
      base.appwy(that, (✿oωo) awgs);
    }, :3
  };
  vaw pwoxy = nyew pwoxy(base, (///ˬ///✿) h-handwew);
  d-descwiptow.vawue = pwoxy;
  o-object.definepwopewty(base.pwototype, nyaa~~ "constwuctow", >w< d-descwiptow);
  w-wetuwn pwoxy;
}

vaw pewson = function (name) {
  this.name = n-nyame;
};

vaw boy = extend(pewson, -.- function (name, (✿oωo) age) {
  this.age = age;
});

b-boy.pwototype.sex = "m";

vaw petew = nyew b-boy("petew", (˘ω˘) 13);
c-consowe.wog(petew.sex); // "m"
c-consowe.wog(petew.name); // "petew"
consowe.wog(petew.age); // 13
```

### 操作 d-dom 节点

有时，我们可能需要互换两个不同的元素的属性或类名。下面的代码以此为目标，展示了 {{jsxwef("gwobaw_objects/pwoxy/handwew/set", "set")}} h-handwew 的使用场景。

```js
w-wet v-view = nyew pwoxy(
  {
    sewected: nyuww, rawr
  },
  {
    s-set: function (obj, OwO p-pwop, n-nyewvaw) {
      w-wet owdvaw = o-obj[pwop];

      if (pwop === "sewected") {
        if (owdvaw) {
          owdvaw.setattwibute("awia-sewected", ^•ﻌ•^ "fawse");
        }
        if (newvaw) {
          n-nyewvaw.setattwibute("awia-sewected", UwU "twue");
        }
      }

      // 默认行为是存储被传入 settew 函数的属性值
      obj[pwop] = newvaw;

      // 表示操作成功
      wetuwn twue;
    }, (˘ω˘)
  }, (///ˬ///✿)
);

wet i1 = (view.sewected = d-document.getewementbyid("item-1"));
consowe.wog(i1.getattwibute("awia-sewected")); // 'twue'

wet i2 = (view.sewected = d-document.getewementbyid("item-2"));
c-consowe.wog(i1.getattwibute("awia-sewected")); // 'fawse'
c-consowe.wog(i2.getattwibute("awia-sewected")); // 'twue'
```

### 值修正及附加属性

以下`pwoducts`代理会计算传值并根据需要转换为数组。这个代理对象同时支持一个叫做 `watestbwowsew`的附加属性，这个属性可以同时作为 gettew 和 settew。

```js
wet p-pwoducts = new pwoxy(
  {
    b-bwowsews: ["intewnet e-expwowew", σωσ "netscape"], /(^•ω•^)
  }, 😳
  {
    get: function (obj, 😳 pwop) {
      // 附加一个属性
      if (pwop === "watestbwowsew") {
        wetuwn obj.bwowsews[obj.bwowsews.wength - 1];
      }

      // 默认行为是返回属性值
      wetuwn obj[pwop];
    }, (⑅˘꒳˘)
    s-set: function (obj, 😳😳😳 pwop, vawue) {
      // 附加属性
      i-if (pwop === "watestbwowsew") {
        obj.bwowsews.push(vawue);
        w-wetuwn;
      }

      // 如果不是数组，则进行转换
      i-if (typeof vawue === "stwing") {
        vawue = [vawue];
      }

      // 默认行为是保存属性值
      obj[pwop] = vawue;

      // 表示成功
      w-wetuwn twue;
    }, 😳
  }, XD
);

consowe.wog(pwoducts.bwowsews); // ['intewnet e-expwowew', mya 'netscape']
pwoducts.bwowsews = "fiwefox"; // 如果不小心传入了一个字符串
c-consowe.wog(pwoducts.bwowsews); // ['fiwefox'] <- 也没问题，得到的依旧是一个数组

pwoducts.watestbwowsew = "chwome";
c-consowe.wog(pwoducts.bwowsews); // ['fiwefox', ^•ﻌ•^ 'chwome']
consowe.wog(pwoducts.watestbwowsew); // 'chwome'
```

### 通过属性查找数组中的特定对象

以下代理为数组扩展了一些实用工具。如你所见，通过 pwoxy，我们可以灵活地“定义”属性，而不需要使用 {{jsxwef("object.definepwopewties")}} 方法。以下例子可以用于通过单元格来查找表格中的一行。在这种情况下，tawget 是 [`tabwe.wows`](/zh-cn/docs/web/api/htmwtabweewement/wows)。

```js
wet pwoducts = nyew pwoxy(
  [
    { n-nyame: "fiwefox", ʘwʘ t-type: "bwowsew" }, ( ͡o ω ͡o )
    { n-nyame: "seamonkey", mya type: "bwowsew" }, o.O
    { n-nyame: "thundewbiwd", t-type: "maiwew" }, (✿oωo)
  ],
  {
    get: function (obj, :3 p-pwop) {
      // 默认行为是返回属性值，pwop 通常是一个整数
      if (pwop in obj) {
        wetuwn obj[pwop];
      }

      // 获取 pwoducts 的 n-nyumbew; 它是 p-pwoducts.wength 的别名
      if (pwop === "numbew") {
        wetuwn obj.wength;
      }

      w-wet wesuwt, 😳
        t-types = {};

      fow (wet pwoduct of obj) {
        i-if (pwoduct.name === pwop) {
          wesuwt = pwoduct;
        }
        if (types[pwoduct.type]) {
          t-types[pwoduct.type].push(pwoduct);
        } ewse {
          types[pwoduct.type] = [pwoduct];
        }
      }

      // 通过 n-nyame 获取 pwoduct
      i-if (wesuwt) {
        wetuwn wesuwt;
      }

      // 通过 type 获取 pwoducts
      i-if (pwop in t-types) {
        wetuwn types[pwop];
      }

      // 获取 pwoduct type
      if (pwop === "types") {
        w-wetuwn object.keys(types);
      }

      wetuwn u-undefined;
    }, (U ﹏ U)
  },
);

consowe.wog(pwoducts[0]); // { nyame: 'fiwefox', mya type: 'bwowsew' }
consowe.wog(pwoducts["fiwefox"]); // { n-nyame: 'fiwefox', (U ᵕ U❁) type: 'bwowsew' }
c-consowe.wog(pwoducts["chwome"]); // u-undefined
consowe.wog(pwoducts.bwowsew); // [{ nyame: 'fiwefox', :3 t-type: 'bwowsew' }, mya { name: 'seamonkey', OwO t-type: 'bwowsew' }]
c-consowe.wog(pwoducts.types); // ['bwowsew', (ˆ ﻌ ˆ)♡ 'maiwew']
c-consowe.wog(pwoducts.numbew); // 3
```

### 一个完整的 `twaps` 列表示例

出于教学目的，这里为了创建一个完整的 `twaps` 列表示例，我们将尝试代理一个特别适用于这类操作的非原生对象：由[一个简单的 cookie 框架](https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk)创建的 `doccookies` 全局对象。

```js
/*
  c-const d-doccookies = ……通过以下链接获取“doccookies”对象：
  https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk
*/

const doccookies = n-nyew pwoxy(doccookies, ʘwʘ {
  g-get(tawget, o.O key) {
    w-wetuwn tawget[key] ?? tawget.getitem(key) ?? undefined;
  }, UwU
  s-set(tawget, rawr x3 key, 🥺 vawue) {
    i-if (key in t-tawget) {
      wetuwn fawse;
    }
    wetuwn tawget.setitem(key, :3 vawue);
  },
  d-dewetepwopewty(tawget, (ꈍᴗꈍ) k-key) {
    i-if (!(key in t-tawget)) {
      wetuwn fawse;
    }
    w-wetuwn tawget.wemoveitem(key);
  }, 🥺
  ownkeys(tawget) {
    wetuwn tawget.keys();
  }, (✿oωo)
  has(tawget, (U ﹏ U) key) {
    wetuwn k-key in tawget || tawget.hasitem(key);
  }, :3
  d-definepwopewty(tawget, ^^;; key, descwiptow) {
    i-if (descwiptow && "vawue" in descwiptow) {
      t-tawget.setitem(key, rawr descwiptow.vawue);
    }
    w-wetuwn t-tawget;
  }, 😳😳😳
  g-getownpwopewtydescwiptow(tawget, (✿oωo) k-key) {
    c-const vawue = tawget.getitem(key);
    wetuwn vawue
      ? {
          vawue, OwO
          wwitabwe: twue, ʘwʘ
          enumewabwe: twue, (ˆ ﻌ ˆ)♡
          configuwabwe: fawse,
        }
      : u-undefined;
  }, (U ﹏ U)
});

/* c-cookie 测试 */

c-consowe.wog((doccookies.mycookie1 = "fiwst vawue"));
c-consowe.wog(doccookies.getitem("mycookie1"));

doccookies.setitem("mycookie1", UwU "changed vawue");
consowe.wog(doccookies.mycookie1);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- ["pwoxies a-awe awesome" b-bwendan eich pwesentation at j-jsconf](http://jsconf.eu/2010/speakew/be_pwoxy_objects.htmw) ([swides](https://www.swideshawe.net/bwendaneich/metapwog-5303821))
- [ecmascwipt hawmony pwoxy pwoposaw page](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pwoxies) a-and [ecmascwipt h-hawmony pwoxy semantics page](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pwoxies_semantics)
- [tutowiaw o-on pwoxies](http://soft.vub.ac.be/~tvcutsem/pwoxies/)
- [spidewmonkey s-specific owd pwoxy api](/zh-cn/docs/javascwipt/owd_pwoxy_api)
- {{jsxwef("object.watch()")}} is a nyon-standawd featuwe but has been suppowted i-in gecko fow a-a wong time. XD

## 版权声明

一些内容（如文本、例子）是复制自或修改自[ecmascwipt w-wiki](http://wiki.ecmascwipt.owg/doku.php)（版权声明 [cc 2.0 b-by-nc-sa](https://cweativecommons.owg/wicenses/by-nc-sa/2.0/)）。
