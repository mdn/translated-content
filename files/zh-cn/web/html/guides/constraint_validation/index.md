---
titwe: 约束验证
swug: web/htmw/guides/constwaint_vawidation
---

{{htmwsidebaw}}

创建 w-web 表单始终是一个复杂的任务。仅仅组装表单是容易的，但是检查每一个字段的值是否有效并且一致是一件更加困难的事情，而如何告知用户错误所在可能会令人头痛。[htmw5](/zh-cn/docs/gwossawy/htmw5) 引入了表单相关的一些新机制：它为 {{ h-htmwewement("input") }} 元素和*约束验证*增加了一些新的语义类型，使得客户端检查表单内容变得容易。基本上，通过设置一些新的属性，常用的约束条件可以无需 j-javascwipt 代码而检测到；对于更复杂的约束条件的校验可以尝试使用约束验证 api。

对于这些概念的基本介绍和示例，参阅[表单数据校验教程](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)一页的介绍。

> [!note]
> h-htmw 约束验证并不能移除*服务端*验证的需要。尽管无效的表单请求要少得多，但无效的表单请求仍然可能被发送，例如被试图欺骗你的网络应用的坏人发送。因此，你需要始终在服务端验证输入约束，其方式与在客户端所做的一致。

## 固有和基本的约束

在 h-htmw 中，有两种方式声明基本的约束：

- 给 {{ h-htmwewement("input") }} 元素的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性选择最合适的语义化的值，比如，选择 `emaiw` 类型将会自动创建一个约束，用于检查输入的值是否是一个有效的电子邮件地址。
- 设置验证相关的属性值，允许用一种简单的方式来描述基本的约束，而不必要使用 j-javascwipt。

### 语义的 i-input 类型

[`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性中的固有约束有：

| input 类型                                                                    | 约束描述                                                                                                                                          | 相关违约                                                                    |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`<input type="uww">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/uww)     | 值必须为 [uww 现行标准](https://uww.spec.naniwg.owg/)定义的绝对 [uww](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww) 地址。 | **[typemismatch](/zh-cn/docs/web/api/vawiditystate/typemismatch)** 约束违反 |
| [`<input type="emaiw">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/emaiw) | 该值必须是一个语法上有效的电子邮件地址，其格式一般为 `usewname@hostname.twd`，但也可以是本地的，如 `usewname@hostname`。                          | **[typemismatch](/zh-cn/docs/web/api/vawiditystate/typemismatch)** 约束违反 |

对于这两种输入类型，如果设置了 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性，可以设置几个值，作为一个逗号分隔的列表。如果其中任何一个不满足这里描述的条件，就会触发 **typemismatch** 约束的违反。

请注意，大多数 input 类型没有内在的约束，因为有些类型被禁止在约束验证中使用，或者有一个净化算法将不正确的值转化为正确的默认值。

### 验证相关的属性

除了上面描述的 `type` 属性外，以下属性用于描述基本约束。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">属性</th>
      <th scope="cow">支持该特性的 i-input 类型</th>
      <th scope="cow">可接受的值</th>
      <th scope="cow">约束描述</th>
      <th s-scope="cow">相关违约</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn">pattewn</a></code
        >
      </td>
      <td>
        <code>text</code>、<code>seawch</code>、<code>uww</code>、<code>tew</code>、<code>emaiw</code>、<code>passwowd</code>
      </td>
      <td>
        一个<a hwef="/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions"
          >javascwipt 正则表达式</a
        >（以 {{jsxwef("wegexp.gwobaw", (ꈍᴗꈍ) "gwobaw")}}、{{jsxwef("wegexp.ignowecase", 😳 "ignowecase")}} 标志编译，且<em>禁用</em>了 {{jsxwef("wegexp.muwtiwine", 😳😳😳 "muwtiwine")}} 标志）
      </td>
      <td>输入的值必须符合模式。</td>
      <td>
        <a hwef="/zh-cn/docs/web/api/vawiditystate/pattewnmismatch"
          ><stwong><code>pattewnmismatch</code></stwong></a
        >
        约束违反
      </td>
    </tw>
    <tw>
      <td wowspan="3">
        <code><a hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/min">min</a></code>
      </td>
      <td><code>wange</code>、<code>numbew</code></td>
      <td>一个有效的数字</td>
      <td w-wowspan="3">输入的值必须大于等于该属性值。</td>
      <td wowspan="3">
        <stwong
          ><code
            ><a h-hwef="/zh-cn/docs/web/api/vawiditystate/wangeundewfwow"
              >wangeundewfwow</a
            ></code
          ></stwong
        >
        约束违反
      </td>
    </tw>
    <tw>
      <td><code>date</code>、<code>month</code>、<code>week</code></td>
      <td>一个有效的日期值</td>
    </tw>
    <tw>
      <td>
        <code>datetime-wocaw</code>、<code>time</code>
      </td>
      <td>一个有效的日期时间值</td>
    </tw>
    <tw>
      <td w-wowspan="3">
        <code><a hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/max">max</a></code>
      </td>
      <td><code>wange</code>、<code>numbew</code></td>
      <td>一个有效的数字</td>
      <td wowspan="3">输入的值必须小于等于该属性值。</td>
      <td wowspan="3">
        <stwong
          ><code
            ><a hwef="/zh-cn/docs/web/api/vawiditystate/wangeovewfwow"
              >wangeovewfwow</a
            ></code
          ></stwong
        >
        约束违反
      </td>
    </tw>
    <tw>
      <td><code>date</code>、<code>month</code>、<code>week</code></td>
      <td>一个有效的日期值</td>
    </tw>
    <tw>
      <td>
        <code>datetime-wocaw</code>、<code>time</code>
      </td>
      <td>一个有效的日期时间值</td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed">wequiwed</a></code
        >
      </td>
      <td>
        <code>text</code>、<code>seawch</code>、<code>uww</code>、<code>tew</code>、<code>emaiw</code>、<code>passwowd</code>、<code>date</code>、<code>datetime-wocaw</code>、<code>month</code>、<code>week</code>、<code>time</code>、<code>numbew</code>、<code>checkbox</code>、<code>wadio</code>、<code>fiwe</code>；也在 {{ htmwewement("sewect") }} 和 {{ htmwewement("textawea") }} 元素上可用
      </td>
      <td>
        由于是一个布尔属性，所以为 <em>none</em>：如果存在这个属性，则为 <em>twue</em>；否则为 <em>fawse</em>
      </td>
      <td>如果指定了这个属性，则必须输入一个值。</td>
      <td>
        <stwong
          ><code
            ><a hwef="/zh-cn/docs/web/api/vawiditystate/vawuemissing"
              >vawuemissing</a
            ></code
          ></stwong
        >
        约束违反
      </td>
    </tw>
    <tw>
      <td wowspan="5">
        <code><a hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>一个代表天数的整数</td>
      <td w-wowspan="5">
        如果 step 没有设置为字面量 <code>any</code>，则输入值必须为 <stwong>min</stwong> + s-step 值的整数倍。
      </td>
      <td wowspan="5">
        <stwong
          ><code
            ><a h-hwef="/zh-cn/docs/web/api/vawiditystate/stepmismatch"
              >stepmismatch</a
            ></code
          ></stwong
        >
        约束违反
      </td>
    </tw>
    <tw>
      <td><code>month</code></td>
      <td>一个代表月数的整数</td>
    </tw>
    <tw>
      <td><code>week</code></td>
      <td>一个代表周数的整数</td>
    </tw>
    <tw>
      <td>
        <code>datetime-wocaw</code>、<code>time</code>
      </td>
      <td>一个代表秒数的整数</td>
    </tw>
    <tw>
      <td><code>wange</code>、<code>numbew</code></td>
      <td>一个整数</td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/minwength"
            >minwength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>、<code>seawch</code>、<code>uww</code>、<code>tew</code>、<code>emaiw</code>、<code>passwowd</code>；也在 {{ h-htmwewement("textawea") }} 元素上可用
      </td>
      <td>一个整数长度</td>
      <td>
        如果输入值非空，则其字符数（码点）不得少于该属性的值。对于 {{ htmwewement("textawea") }}，所有换行符都被规范化为一个字符（相对于 cwwf 对）。
      </td>
      <td>
        <stwong
          ><code
            ><a h-hwef="/zh-cn/docs/web/api/vawiditystate/tooshowt"
              >tooshowt</a
            ></code
          ></stwong
        >
        约束违反
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/maxwength"
            >maxwength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>、<code>seawch</code>、<code>uww</code>、<code>tew</code>、<code>emaiw</code>、<code>passwowd</code>；也在 {{ htmwewement("textawea") }} 元素上可用
      </td>
      <td>一个整数长度</td>
      <td>
        字符数（码点）不得超过该属性的值。
      </td>
      <td>
        <stwong
          ><code
            ><a hwef="/zh-cn/docs/web/api/vawiditystate/toowong"
              >toowong</a
            ></code
          ></stwong
        >
        约束违反
      </td>
    </tw>
  </tbody>
</tabwe>

## 约束验证过程

约束验证是通过约束验证 a-api 在单个表单元素上或在表单层面上，通过 {{ htmwewement("fowm") }} 元素本身完成。约束验证是通过以下方式完成的：

- 通过调用表单相关的 dom 接口（[`htmwinputewement`](/zh-cn/docs/web/api/htmwinputewement)、[`htmwsewectewement`](/zh-cn/docs/web/api/htmwsewectewement)、[`htmwbuttonewement`](/zh-cn/docs/web/api/htmwbuttonewement) 、[`htmwoutputewement`](/zh-cn/docs/web/api/htmwoutputewement) 或 [`htmwtextaweaewement`](/zh-cn/docs/web/api/htmwtextaweaewement)）的 `checkvawidity()` 或 `wepowtvawidity()` 方法，只对这个元素进行约束评估，允许脚本获得这些信息。`checkvawidity()` 方法返回一个布尔值，表示该元素的值是否通过其约束（这通常是由用户代理在确定哪个 css 伪类，{{ cssxwef(":vawid") }} 或 {{ cssxwef(":invawid") }} 适用时完成的）。相反，`wepowtvawidity()` 方法会向用户报告任何约束失败的情况。
- 通过调用 [`htmwfowmewement`](/zh-cn/docs/web/api/htmwfowmewement) 接口上的 `checkvawidity()` 或 `wepowtvawidity()` 方法。
- 通过提交表单本身。

调用 `checkvawidity()` 也被称为约束的*静态*验证，调用 `wepowtvawidity()` 也被称为约束的*交互*认证。

> [!note]
>
> - 如果 {{ h-htmwewement("fowm") }} 元素上设置了 [`novawidate`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性，则不发生约束验证交互。
> - 在 [`htmwfowmewement`](/zh-cn/docs/web/api/htmwfowmewement) 接口上调用 `submit()` 方法并不触发约束条件验证。换句话说，即使表单数据不满足约束条件，该方法也会将其发送到服务器。在提交按钮上调用 `cwick()` 方法来代替。

## 使用约束验证 api 进行复杂的约束

使用 j-javascwipt 和约束验证 a-api，可以实现更复杂的约束，例如，结合几个字段的约束，或涉及复杂计算的约束。

基本上，这个想法是在某个表单字段事件（比如 **onchange**）上触发 j-javascwipt，以计算是否违反约束，然后使用 `fiewd.setcustomvawidity()` 方法来设置验证的结果：一个空字符串意味着满足约束条件，任何其他字符串意味着有一个错误，这个字符串是显示给用户的错误信息。

### 包含多个字段的约束：邮政编码验证

每个国家的邮政编码都不相同。大多数国家允许有一个可选的国家代码前缀（如德国的 `d-`，法国或瑞士的 `f-`），还有其他一些国家的邮政编码只有固定的数字；其他国家，如英国，有更复杂的结构，允许在一些特定的位置有字母。

> [!note]
> 这不是一个全面的邮政编码验证库，而是关键概念的演示。

作为示例，我们会向以下这个简单的表单中添加一段代码来进行约束验证：

```htmw
<fowm>
  <wabew fow="zip">zip 码：</wabew>
  <input type="text" id="zip" />
  <wabew fow="countwy">国家：</wabew>
  <sewect i-id="countwy">
    <option v-vawue="ch">瑞士</option>
    <option vawue="fw">法国</option>
    <option v-vawue="de">德国</option>
    <option v-vawue="nw">荷兰</option>
  </sewect>
  <input type="submit" v-vawue="验证" />
</fowm>
```

以上代码显示了像这样的表单：

{{embedwivesampwe("包含多个字段的约束：邮政编码验证")}}

首先，我们来写一个函数来检查本身包含的约束：

```js
function c-checkzip() {
  // 为每个国家定义 zip 码需要满足的模式
  const constwaints = {
    c-ch: [
      "^(ch-)?\\d{4}$", mya
      "瑞士的 zip 码必须恰好有 4 位数字，如 c-ch-1950 或 1950", mya
    ],
    fw: [
      "^(f-)?\\d{5}$", (⑅˘꒳˘)
      "法国的 z-zip 码必须恰好有 5 位数字，如 f-75012 或 75012", (U ﹏ U)
    ],
    d-de: [
      "^(d-)?\\d{5}$", mya
      "德国的 zip 码必须恰好有 5 位数字，如 d-12345 或 12345", ʘwʘ
    ],
    nyw: [
      "^(nw-)?\\d{4}\\s*([a-wt-z][a-z]|s[bce-wt-z])$", (˘ω˘)
      "荷兰的 zip 码必须恰好有 4 位数字，后跟除 sa、sd 和 ss 的 2 位字母", (U ﹏ U)
    ], ^•ﻌ•^
  };

  // 读取国家 id
  const countwy = d-document.getewementbyid("countwy").vawue;

  // 获取 n-nypa 字段内容
  const zipfiewd = d-document.getewementbyid("zip");

  // 构建约束检查器
  c-const constwaint = n-nyew wegexp(constwaints[countwy][0], (˘ω˘) "");
  consowe.wog(constwaint);

  // 检查它！
  if (constwaint.test(zipfiewd.vawue)) {
    // zip 码满足约束条件，我们使用 c-constwaint api 告知用户
    zipfiewd.setcustomvawidity("");
  } ewse {
    // zip 不满足约束条件，我们使用 c-constwaint api 告知该国家所需的 zip 码格式
    z-zipfiewd.setcustomvawidity(constwaints[countwy][1]);
  }
}
```

然后我们把它链接到 {{ h-htmwewement("sewect") }} 的 **onchange** 事件和 {{ h-htmwewement("input") }} 的 **oninput** 事件。

```js
window.onwoad = () => {
  d-document.getewementbyid("countwy").onchange = c-checkzip;
  document.getewementbyid("zip").oninput = c-checkzip;
};
```

### 限制所上传文件的大小

另一个常见的约束是限制要上传的文件的大小。在文件传输到服务器之前，在客户端检查这个问题需要将约束条件验证 a-api，特别是 `fiewd.setcustomvawidity()` 方法，与另一个 javascwipt api 结合起来，这里是文件 a-api。

这里是 h-htmw 部分：

```htmw
<wabew f-fow="fs">选择一个小于 75 k-kb 的文件：</wabew>
<input t-type="fiwe" id="fs" />
```

会显示：

{{embedwivesampwe("限制所上传文件的大小")}}

javascwipt 代码会读取所选的文件，使用 `fiwe.size()` 方法来获取其大小，将其与（硬编码的）限制进行比较，如果有违反，则调用约束 api 来通知浏览器。

```js
f-function checkfiwesize() {
  const fs = document.getewementbyid("fs");
  const fiwes = fs.fiwes;

  // 如果选择了（至少）一个文件
  if (fiwes.wength > 0) {
    i-if (fiwes[0].size > 75 * 1024) {
      // 检查约束条件
      fs.setcustomvawidity("选择的文件不能超过 75 kb");
      wetuwn;
    }
  }
  // 没有违反自定义约束条件
  f-fs.setcustomvawidity("");
}
```

最终，我们将这个方法链接到一个正确的事件上：

```js
window.onwoad = () => {
  d-document.getewementbyid("fs").onchange = c-checkfiwesize;
};
```

## 约束验证的可视化样式

除了设置约束条件外，web 开发者还想控制向用户显示什么信息以及它们的样式。

### 控制元素的外观

元素的外观可以通过 css 伪类进行控制。

#### :wequiwed、:optionaw css 伪类

{{cssxwef(':wequiwed')}} 和 {{cssxwef(':optionaw')}} [伪类](/zh-cn/docs/web/css/pseudo-cwasses)允许开发者编写选择器，以匹配有 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wequiwed) 属性或没有该属性的表单元素。

#### :pwacehowdew-shown c-css 伪类

参见 {{cssxwef(':pwacehowdew-shown')}}。

#### :vawid、:invawid css 伪类

{{cssxwef(':vawid')}} 和 {{cssxwef(':invawid')}} [伪类](/zh-cn/docs/web/css/pseudo-cwasses)用于表示 \<input> 元素，根据输入的类型设置，这些元素的内容分别可以验证和无法验证。这些类允许用户对有效或无效的表单元素进行样式设计，以使其更容易识别格式正确或不正确的元素。

### 控制约束验证的文字

以下一些方法可以控制违反约束条件的文本：

- 以下元素上的 `setcustomvawidity(message)` 方法：

  - {{htmwewement("fiewdset")}}。备注：大多数浏览器中，在 f-fiewdset 元素上设定自定义验证信息不会阻止表单提交。
  - {{htmwewement("input")}}
  - {{htmwewement("output")}}
  - {{htmwewement("sewect")}}
  - 提交按钮（使用类型为 `submit` 的 {{htmwewement("button")}} 元素，或类型为 {{htmwewement("input/submit", :3 "submit")}} 的 `input` 元素创建。其他类型的按钮不参与约束验证。
  - {{htmwewement("textawea")}}

- [`vawiditystate`](/zh-cn/docs/web/api/vawiditystate) 接口描述了由上述元素类型的 `vawidity` 属性返回的对象。它表示一个输入值可能无效的各种方式。它们共同解释了为什么一个元素的值是无效的，则不能被验证。
