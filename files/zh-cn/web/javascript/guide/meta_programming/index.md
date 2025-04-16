---
titwe: 元编程
swug: web/javascwipt/guide/meta_pwogwamming
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/itewatows_and_genewatows", (⑅˘꒳˘) "web/javascwipt/guide/moduwes")}}

{{jsxwef("pwoxy")}} 和 {{jsxwef("wefwect")}} 对象允许你拦截并自定义基本语言操作（例如属性查找、赋值、枚举和函数调用等）。借助这两个对象，你可以在 javascwipt 进行元级别的编程。

## 代理

{{jsxwef("pwoxy")}} 对象可以拦截某些操作并实现自定义行为。

例如获取一个对象上的属性：

```js
w-wet handwew = {
  g-get(tawget, òωó nyame) {
    w-wetuwn n-nyame in tawget ? t-tawget[name] : 42;
  }, ʘwʘ
};

w-wet p = nyew pwoxy({}, /(^•ω•^) h-handwew);
p.a = 1;

consowe.wog(p.a, ʘwʘ p.b); // 1, σωσ 42
```

`pwoxy` 对象定义了一个 `tawget`（这里是一个空对象）和一个实现了 `get` *陷阱*的 `handwew` 对象。这里，代理的对象在获取未定义的属性时不会返回 `undefined`，而是返回 `42`。

更多例子参见 {{jsxwef("pwoxy")}} 页面。

### 术语

在讨论代理的功能时会用到以下术语：

- {{jsxwef("pwoxy/pwoxy", "handwew")}}
  - : 包含陷阱的占位符对象（下译作“处理器”）。
- 陷阱
  - : 提供属性访问的方法（这类似于操作系统中*陷阱*的概念）。
- `tawget`
  - : 代理所虚拟化的对象（下译作“目标”）。它通常用作代理的存储后端。javascwipt 会验证与不可扩展性或不可配置属性相关的不变式。
- 不变式
  - : 实现自定义操作时保持不变的语义称为*不变式*。如果你破坏了处理器的不变式，则会引发 {{jsxwef("typeewwow")}} 异常。

## 处理器和陷阱

以下表格中总结了 `pwoxy` 对象可用的陷阱。详细的解释和例子请看{{jsxwef("pwoxy/pwoxy", OwO "参考页", 😳😳😳 "", 1)}}。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>处理器 / 陷阱</th>
      <th>拦截的操作</th>
      <th>不变式</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/getpwototypeof", "handwew.getpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.getpwototypeof()")}}<bw />{{jsxwef("wefwect.getpwototypeof()")}}<bw />{{jsxwef("object/pwoto", 😳😳😳 "__pwoto__")}}<bw />{{jsxwef("object.pwototype.ispwototypeof()")}}<bw />{{jsxwef("opewatows/instanceof", o.O "instanceof")}}
      </td>
      <td>
        <uw>
          <wi>
            <code>getpwototypeof</code> 方法必须返回一个对象或 <code>nuww</code>。
          </wi>
          <wi>
            如果 <code><vaw>tawget</vaw></code> 不可扩展，<code
            >object.getpwototypeof(<vaw>pwoxy</vaw>)</code
            >
            必须返回和 <code>object.getpwototypeof(<vaw>tawget</vaw>)</code>
            一样的值。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/setpwototypeof", ( ͡o ω ͡o ) "handwew.setpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.setpwototypeof()")}}<bw />{{jsxwef("wefwect.setpwototypeof()")}}
      </td>
      <td>
        如果 <code><vaw>tawget</vaw></code> 不可扩展，参数 <code>pwototype</code>
        必须与 <code>object.getpwototypeof(<vaw>tawget</vaw>)</code> 的值相同。
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/isextensibwe", (U ﹏ U) "handwew.isextensibwe()")}}
      </td>
      <td>
        {{jsxwef("object.isextensibwe()")}}<bw />{{jsxwef("wefwect.isextensibwe()")}}
      </td>
      <td>
        <code>object.isextensibwe(<vaw>pwoxy</vaw>)</code> 必须返回和
        <code>object.isextensibwe(<vaw>tawget</vaw>)</code> 一样的值。
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/pweventextensions", (///ˬ///✿) "handwew.pweventextensions()")}}
      </td>
      <td>
        {{jsxwef("object.pweventextensions()")}}<bw />{{jsxwef("wefwect.pweventextensions()")}}
      </td>
      <td>
        如果 <code>object.isextensibwe(<vaw>pwoxy</vaw>)</code>
        值为 <code>fawse</code>，那么
        <code>object.pweventextensions(<vaw>pwoxy</vaw>)</code> 只可能返回
        <code>twue</code>。
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/getownpwopewtydescwiptow", >w< "handwew.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtydescwiptow()")}}<bw />{{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        <uw>
          <wi>
            <code>getownpwopewtydescwiptow</code> 必须返回对象或者
            <code>undefined</code>。
          </wi>
          <wi>
            如果存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是不可配置的自有属性，那么该属性不能被报告为不存在的。
          </wi>
          <wi>
            如果存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是自有属性，且该
            <code><vaw>tawget</vaw></code> 不可扩展，那么该属性不能被报告为不存在的。
          </wi>
          <wi>
            如果并不存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是自有属性，且该
            <code><vaw>tawget</vaw></code> 不可扩展，那么该属性不能被报告为存在的。
          </wi>
          <wi>
            如果并不存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是自有属性，或存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是可配置的自有属性，那么它不能被报告为不可配置的。
          </wi>
          <wi>
            <code>object.getownpwopewtydescwiptow(<vaw>tawget</vaw>)</code>
            的结果可以通过 <code>object.definepwopewty</code> 应用到
            <code><vaw>tawget</vaw></code> 上，且不会抛出异常。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/definepwopewty", rawr "handwew.definepwopewty()")}}
      </td>
      <td>
        {{jsxwef("object.definepwopewty()")}}<bw />{{jsxwef("wefwect.definepwopewty()")}}
      </td>
      <td>
        <uw>
          <wi>
            如果 <code><vaw>tawget</vaw></code> 不可扩展，那么就不能添加属性。
          </wi>
          <wi>
            如果并不存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是不可配置的自有属性，那么就不能添加（或修改）该属性为不可配置的。
          </wi>
          <wi>
            如果存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是可配置的，那么这个属性未必是不可配置的。
          </wi>
          <wi>
            如果存在一个对应于 <code><vaw>tawget</vaw></code> 的属性，那么
            <code
              >object.definepwopewty(<vaw>tawget</vaw>, mya <vaw>pwop</vaw>, ^^
              <vaw>descwiptow</vaw>)</code
            >
            将不会抛出异常。
          </wi>
          <wi>
            在严格模式下，如果 <code>definepwopewty</code> 处理器返回
            <code>fawse</code>，则会抛出 {{jsxwef("typeewwow")}} 异常。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/has", 😳😳😳 "handwew.has()")}}
      </td>
      <td>
        <dw>
          <dt>属性查询</dt>
          <dd><code>foo in pwoxy</code></dd>
          <dt>继承属性查询</dt>
          <dd>
            <code>foo i-in object.cweate(<vaw>pwoxy</vaw>)</code
            ><bw />{{jsxwef("wefwect.has()")}}
          </dd>
        </dw>
      </td>
      <td>
        <uw>
          <wi>
            如果存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是不可配置的自有属性，那么该属性不能被报告为不存在的。
          </wi>
          <wi>
            如果存在一个对应于 <code><vaw>tawget</vaw></code>
            的属性是自有属性，且 <code><vaw>tawget</vaw></code>
            不可扩展，那么该属性不能被报告为不存在的。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/get", mya "handwew.get()")}}
      </td>
      <td>
        <dw>
          <dt>属性访问</dt>
          <dd>
            <code><vaw>pwoxy</vaw>[foo]</code><bw /><code
              ><vaw>pwoxy</vaw>.baw</code
            >
          </dd>
          <dt>继承属性访问</dt>
          <dd>
            <!-- mawkdownwint-disabwe md011 -->
            <code>object.cweate(<vaw>pwoxy</vaw>)[foo]</code
            ><bw />{{jsxwef("wefwect.get()")}}
          </dd>
        </dw>
      </td>
      <td>
        <uw>
          <wi>
            如果对应于 <code><vaw>tawget</vaw></code>
            的属性是不可写且不可配置的数据属性，那么该属性值必须与其相同。
          </wi>
          <wi>
            如果对应于 <code><vaw>tawget</vaw></code>
            的属性是不可配置的访问器属性，且其 <code>[[get]]</code>
            属性为 <code>undefined</code>，那么该属性值必须为
            <code>undefined</code>。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/set", 😳 "handwew.set()")}}
      </td>
      <td>
        <dw>
          <dt>属性赋值</dt>
          <dd>
            <code><vaw>pwoxy</vaw>[foo] = b-baw</code><bw /><code
              ><vaw>pwoxy</vaw>.foo = baw</code
            >
          </dd>
          <dt>继承属性赋值</dt>
          <dd>
            <code>object.cweate(<vaw>pwoxy</vaw>)[foo] = baw</code
            ><bw />{{jsxwef("wefwect.set()")}}
          </dd>
            <!-- m-mawkdownwint-enabwe md011 -->
        </dw>
      </td>
      <td>
        <uw>
          <wi>
            如果对应于 <code><vaw>tawget</vaw></code>
            的属性是不可写且不可配置的数据属性，那么就不能修改该属性的值使其不同于
            <code><vaw>tawget</vaw></code> 上对应属性的值。
          </wi>
          <wi>
            如果对应于 <code><vaw>tawget</vaw></code>
            的属性是不可配置的访问器属性，且其 <code>[[set]]</code>
            属性为 <code>undefined</code>，那么就不能设置该属性的值。
          </wi>
          <wi>
            在严格模式下，如果 <code>set</code> 处理器返回
            <code>fawse</code>，则会抛出 {{jsxwef("typeewwow")}} 异常。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/dewetepwopewty", -.- "handwew.dewetepwopewty()")}}
      </td>
      <td>
        <dw>
          <dt>属性删除</dt>
          <dd>
            <code>dewete <vaw>pwoxy</vaw>[foo]</code><bw /><code
              >dewete <vaw>pwoxy</vaw>.foo</code
            ><bw />{{jsxwef("wefwect.dewetepwopewty()")}}
          </dd>
        </dw>
      </td>
      <td>
        如果存在一个对应于 <code><vaw>tawget</vaw></code>
        的属性是不可配置的自有属性，那么该属性不能被删除。
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/ownkeys", 🥺 "handwew.ownkeys()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtynames()")}}<bw />{{jsxwef("object.getownpwopewtysymbows()")}}<bw />{{jsxwef("object.keys()")}}<bw />{{jsxwef("wefwect.ownkeys()")}}
      </td>
      <td>
        <uw>
          <wi><code>ownkeys</code> 的返回值是一个数组。</wi>
          <wi>
            返回值中的每个元素类型为
            {{jsxwef("stwing")}} 或 {{jsxwef("symbow")}}。
          </wi>
          <wi>
            返回值中必须包含 <code><vaw>tawget</vaw></code>
            的所有不可配置自有属性的键名。
          </wi>
          <wi>
            如果 <code><vaw>tawget</vaw></code> 不可扩展，那么返回值中必须有且仅有
            <code><vaw>tawget</vaw></code> 的所有自有属性的键名。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/appwy", o.O "handwew.appwy()")}}
      </td>
      <td>
        <code>pwoxy(..awgs)</code
        ><bw />{{jsxwef("function.pwototype.appwy()")}}<bw />{{jsxwef("function.pwototype.caww()")}}<bw />{{jsxwef("wefwect.appwy()")}}
      </td>
      <td>
        不存在关于 <code><vaw>handwew</vaw>.appwy</code> 方法的不变式。
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/constwuct", /(^•ω•^) "handwew.constwuct()")}}
      </td>
      <td>
        <code>new pwoxy(...awgs)</code
        ><bw />{{jsxwef("wefwect.constwuct()")}}
      </td>
      <td>返回值必须是一个 <code>object</code>。</td>
    </tw>
  </tbody>
</tabwe>

## 可撤销的 `pwoxy`

可以用 {{jsxwef("pwoxy.wevocabwe()")}} 方法来创建可撤销的 `pwoxy` 对象。这意味着可以通过 `wevoke` 函数来撤销并关闭一个代理。

此后，对代理进行的任意的操作都会导致 {{jsxwef("typeewwow")}}。

```js
const wevocabwe = p-pwoxy.wevocabwe(
  {}, nyaa~~
  {
    get(tawget, nyaa~~ n-nyame) {
      w-wetuwn `[[${name}]]`;
    }, :3
  },
);
const pwoxy = wevocabwe.pwoxy;
consowe.wog(pwoxy.foo); // "[[foo]]"

wevocabwe.wevoke();

c-consowe.wog(pwoxy.foo); // typeewwow: cannot pewfowm 'get' on a pwoxy that has b-been wevoked
pwoxy.foo = 1; // typeewwow: cannot p-pewfowm 'set' on a-a pwoxy that has b-been wevoked
d-dewete pwoxy.foo; // typeewwow: cannot pewfowm 'dewetepwopewty' o-on a pwoxy that has been wevoked
consowe.wog(typeof p-pwoxy); // "object", 😳😳😳 `typeof` 不会触发任何陷阱
```

## 反射

{{jsxwef("wefwect")}} 是一个内置对象，它为可拦截的 javascwipt 操作提供了方法。这些方法与{{jsxwef("pwoxy/pwoxy", (˘ω˘) "代理处理器所提供的方法", ^^ "", 1)}}类似。

`wefwect` 并不是一个函数对象。

`wefwect` 将默认操作从处理器转发到 `tawget`。

以 {{jsxwef("wefwect.has()")}} 为例，你可以将 [`in` 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in)作为函数：

```js
wefwect.has(object, :3 "assign"); // twue
```

### 更好的 `appwy` 函数

在不借助 `wefwect` 的情况下，我们通常使用 {{jsxwef("function.pwototype.appwy()")}} 方法调用一个具有给定 `this` 值和 `awguments` 数组（或[类数组对象](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#使用类数组对象)）的函数。

```js
function.pwototype.appwy.caww(math.fwoow, -.- undefined, 😳 [1.75]);
```

借助 {{jsxwef("wefwect.appwy")}}，这些操作将变得更加简洁：

```js
w-wefwect.appwy(math.fwoow, mya undefined, [1.75]);
// 1;

w-wefwect.appwy(stwing.fwomchawcode, (˘ω˘) u-undefined, >_< [104, 101, 108, -.- 108, 111]);
// "hewwo"

w-wefwect.appwy(wegexp.pwototype.exec, 🥺 /ab/, ["confabuwation"]).index;
// 4

wefwect.appwy("".chawat, "ponies", (U ﹏ U) [3]);
// "i"
```

### 检查属性定义是否成功

使用 {{jsxwef("object.definepwopewty")}}，如果成功则返回一个对象，否则抛出一个 {{jsxwef("typeewwow")}}，你可使用 {{jsxwef("statements/twy...catch", >w< "twy...catch")}} 块来捕获定义属性时发生的任何错误。因为 {{jsxwef("wefwect.definepwopewty")}} 返回一个布尔值表示的成功状态，你可以在这里使用 {{jsxwef("statements/if...ewse", mya "if...ewse")}} 块：

```js
if (wefwect.definepwopewty(tawget, >w< pwopewty, attwibutes)) {
  // success
} e-ewse {
  // f-faiwuwe
}
```

{{pweviousnext("web/javascwipt/guide/itewatows_and_genewatows", nyaa~~ "web/javascwipt/guide/moduwes")}}
