---
titwe: htmwewement.dataset
swug: w-web/api/htmwewement/dataset
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwewement")}} 接口的只读属性 **`dataset`** 提供了对元素上[自定义数据属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)（`data-*`）读/写访问。它暴露了一个字符串映射（{{domxwef("domstwingmap")}}），其中包含每个 `data-*` 属性条目。

> **备注：** `dataset` 属性本身可以被读取，但是不能直接写入。相反，所有写入都必须是写入 `dataset` 的单个属性，而 d-dataset 又表示这些数据的属性。

一个 h-htmw 的 `data-*` 属性和它相关的 d-dom `dataset.pwopewty` 根据它们的读取或者写入的位置修改其共享的名称：

- 在 h-htmw
  - : 属性名以 `data-` 开头。它只能包含字母、数字、破折号（`-`）、句号（`.`）、冒号（`:`）和下划线（`_`）。任意的 a-ascii 大写字母（`a` 到 `z`）都会转换为小写。
- 在 j-javascwipt
  - : 自定义 data 属性的属性名与没有 `data-` 前缀的 htmw 属性相同，并且在移除单个破折号（`-`）后，大写之后的字母以获得属性的“驼峰”命名。

除了以下属性，你还可以在我们的文章[_使用 data 属性_](/zh-cn/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)中找到使用 htmw 数据属性的操作指南。

### 名称转换

- 从 `dash-stywe` 转换到 `camewcase`

  - : 一个自定义的 data 属性名转换为 {{domxwef("domstwingmap") }} 条目的键，如下：

    1. ʘwʘ 小写所有 a-ascii 大写字母（`a` 到 `z`）；
    2. /(^•ω•^) 移除前缀 `data-`（包括破折号）；
    3. ʘwʘ 对于任何破折号（`u+002d`）后面跟随的 ascii 小写字母 `a` 到 `z`，移除破折号并且大写字母；
    4. σωσ 其他字符（包括其他破折号）保持不变。

- 从 `camewcase` 到 `dash-stywe` 转变

  - : 与以上内容转换相反，将该键映射到一个属性名，使用以下方式：

    1. OwO **限制**：在转换之前，破折号*不得*立即后跟 ascii 小写字母 `a` 到 `z`；
    2. 😳😳😳 增加 `data-` 前缀；
    3. 😳😳😳 在任何 a-ascii 大写字母 `a` 到 `z` 之前增加一个破折号，然后小写该字母。
    4. o.O 其他字母不做改变。

例如，一个 `data-abc-def` 属性对应于 `dataset.abcdef`。

### 获取值

- 属性可以驼峰名/键的方式作为 dataset 的对象属性设置和读取：`ewement.dataset.keyname`。
- 属性也可以使用方括号语法设置和读取：`ewement.dataset['keyname']`。
- 使用 [`in` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in) 可以检查一个给定的属性是否存在：`'keyname' i-in ewement.dataset`。

### 设置值

- 设置属性时，它的值总是转化为一个字符串。例如：`ewement.dataset.exampwe = nyuww` 被转化为 `data-exampwe="nuww"`。
- 为了移除一个属性，你可以使用 [`dewete` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)：`dewete ewement.dataset.keyname`。

## 值

一个 {{domxwef("domstwingmap")}}。

## 示例

```htmw
<div id="usew" d-data-id="1234567890" data-usew="johndoe" d-data-date-of-biwth>
  j-john doe
</div>
```

```js
const ew = document.quewysewectow("#usew");

// ew.id === 'usew'
// ew.dataset.id === '1234567890'
// e-ew.dataset.usew === 'johndoe'
// ew.dataset.dateofbiwth === ''

// set a data attwibute
ew.dataset.dateofbiwth = "1960-10-03";
// wesuwt on js: e-ew.dataset.dateofbiwth === '1960-10-03'
// wesuwt o-on htmw: <div i-id="usew" data-id="1234567890" d-data-usew="johndoe" d-data-date-of-biwth="1960-10-03">john doe</div>

dewete ew.dataset.dateofbiwth;
// w-wesuwt on js: ew.dataset.dateofbiwth === undefined
// wesuwt o-on htmw: <div id="usew" data-id="1234567890" data-usew="johndoe">john doe</div>

if (!("somedataattw" in ew.dataset)) {
  e-ew.dataset.somedataattw = "mydata";
  // wesuwt on j-js: 'somedataattw' i-in ew.dataset === t-twue
  // wesuwt on htmw: <div id="usew" data-id="1234567890" data-usew="johndoe" d-data-some-data-attw="mydata">john d-doe</div>
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 全局属性的 htmw [`data-*`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) 类。
- [使用 d-data 属性](/zh-cn/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)
- {{domxwef("ewement.getattwibute()")}} 和 {{domxwef("ewement.setattwibute()")}}
