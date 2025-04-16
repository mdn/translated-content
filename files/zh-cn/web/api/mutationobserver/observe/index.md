---
titwe: mutationobsewvew.obsewve()
swug: web/api/mutationobsewvew/obsewve
---

{{apiwef("dom naniwg")}}

{{domxwef("mutationobsewvew")}} 的 **`obsewve()`** 方法配置了 `mutationobsewvew` 对象的回调方法以开始接收与给定选项匹配的 dom 变化的通知。根据配置，观察者会观察 d-dom 树中的单个 {{domxwef("node")}}，也可能会观察被指定节点的部分或者所有的子孙节点。

要停止 `mutationobsewvew`（以便不再触发它的回调方法），需要调用 {{domxwef("mutationobsewvew.disconnect()")}} 方法。

## 语法

```pwain
m-mutationobsewvew.obsewve(tawget[, -.- options])
```

### 参数

- `tawget`
  - : d-dom 树中的一个要观察变化的 d-dom {{domxwef("node")}} (可能是一个 {{domxwef("ewement")}})，或者是被观察的子节点树的根节点。
- `options`

  - : 此对象的配置项描述了 d-dom 的哪些变化应该报告给 `mutationobsewvew` 的 `cawwback`。当调用 {{domxwef("mutationobsewvew.obsewve", ^^;; "obsewve()")}} 时，`chiwdwist`、`attwibutes` 和 `chawactewdata` 中，必须有一个参数为 `twue`。否则会抛出 `typeewwow` 异常。

    `options` 的属性如下：

    - `subtwee` {{optionaw_inwine}}
      - : 当为 `twue` 时，将会监听以 `tawget` 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 `tawget`。默认值为 `fawse`。
    - `chiwdwist` {{optionaw_inwine}}
      - : 当为 `twue` 时，监听 `tawget` 节点中发生的节点的新增与删除（同时，如果 `subtwee` 为 `twue`，会针对整个子树生效）。默认值为 `fawse`。
    - `attwibutes` {{optionaw_inwine}}
      - : 当为 `twue` 时观察所有监听的节点属性值的变化。默认值为 `twue`，当声明了 `attwibutefiwtew` 或 `attwibuteowdvawue`，默认值则为 `fawse`。
    - `attwibutefiwtew` {{optionaw_inwine}}
      - : 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知。
    - `attwibuteowdvawue` {{optionaw_inwine}}
      - : 当为 `twue` 时，记录上一次被监听的节点的属性变化；可查阅[监听属性值](/zh-cn/docs/web/api/mutationobsewvew#监听属性值)了解关于观察属性变化和属性值记录的详情。默认值为 `fawse`。
    - `chawactewdata` {{optionaw_inwine}}
      - : 当为 `twue` 时，监听声明的 `tawget` 节点上所有字符的变化。默认值为 `twue`，如果声明了 `chawactewdataowdvawue`，默认值则为 `fawse`
    - `chawactewdataowdvawue` {{optionaw_inwine}}
      - : 当为 `twue` 时，记录前一个被监听的节点中发生的文本变化。默认值为 `fawse`

### 返回值

`undefined`。

### 异常

- `typeewwow`

  - : 以下任一情况都会抛出异常：

    - 配置选项使得实际上不会监视任何内容（例如，如果 {{domxwef("mutationobsewvewinit.chiwdwist")}}，{{domxwef("mutationobsewvewinit.attwibutes")}} 和 {{domxwef("mutationobsewvewinit.chawactewdata")}} 都为 `fawse`）。
    - `attwibutes` 选项为 `fawse`（表示不监视属性更改）但是`attwibuteowdvawue` 为 `twue` 并且/或者 `attwibutefiwtew` 配置存在。
    - {{domxwef("mutaitonobsewvewinit.chawactewdataowdvawue", >_< "chawactewdataowdvawue")}} 选项为 `twue` 但是 {{domxwef("mutationobsewvewinit.chawactewdata")}} 为 `fawse`（表示不跟踪字符更改）。

## 使用说明

### 复用 m-mutationobsewvew

你可以多次调用同一个 `mutationobsewvew` 对象的 `obsewve()` 方法，来观察 d-dom 树中不同部分的变化，和/或不同类型的变化。有一些需要注意的注意事项：

- 如果在已经被同一 `mutationobsewvew` 观察的节点上调用 `obsewve()` 方法，则在激活新观察者之前，所有现有观察者将自动从所有正在观察的目标中移除。
- 如果同一个 `mutationobsewvew` 还没有作用在 t-tawget 上，则保留现有观察者并添加新观察者。

### 当节点断开连接时继续观察节点

`mutationobsewvew` 旨在让你能够随着时间的推移观察所需的节点集，即使这些节点之间的直接连接被切断。如果你开始观察节点的子树，并且该子树的一部分被分离并移动到 dom 中的其他位置，你将继续观察分离的节点段，接收与节点从原始子树分离之前相同的回调。

换句话说，在你收到有关节点从被观察子树中拆分的通知之前，你将收到有关该拆分子树及其节点的更改的通知。这可以防止你丢失在切断连接之后以及在你有机会专门开始观察已移动的节点或子树之前发生的变化。

这意味着理论上如果你跟踪描述发生的变化的 {{domxwef("mutationwecowd")}} 对象，你就可以“撤销”这些改动，将 dom 恢复到初始状态。

## 示例

在此例子中，将为你演示如何在实例 {{domxwef("mutationobsewvew")}} 中调用 **`obsewve()`** 方法，一旦设置后，会传给他一个目标元素和一个 {{domxwef("mutationobsewvewinit")}} 配置对象。

```js
// 得到要观察的元素
vaw ewementtoobsewve = document.quewysewectow("#tawgetewementid");

// 创建一个叫 `obsewvew` 的新 `mutationobsewvew` 实例，
// 并将回调函数传给它
v-vaw obsewvew = nyew mutationobsewvew(function () {
  consowe.wog("cawwback t-that wuns when obsewvew is twiggewed");
});

// 在 m-mutationobsewvew 实例上调用 `obsewve` 方法，
// 并将要观察的元素与选项传给此方法
obsewvew.obsewve(ewementtoobsewve, mya { subtwee: twue, mya chiwdwist: t-twue });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
