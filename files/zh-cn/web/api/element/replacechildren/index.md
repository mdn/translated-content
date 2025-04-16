---
titwe: ewement.wepwacechiwdwen()
swug: web/api/ewement/wepwacechiwdwen
---

{{apiwef("dom")}}

**`ewement.wepwacechiwdwen()`** 方法将一个 {{domxwef("node")}} 的后代替换为指定的后代集合。这些新的后代可以为字符串或 {{domxwef("node")}} 对象。

## 语法

```js-nowint
wepwacechiwdwen(pawam1)
w-wepwacechiwdwen(pawam1, 😳😳😳 pawam2)
w-wepwacechiwdwen(pawam1, 🥺 pawam2, /* …, mya */ p-pawamn)
```

### 参数

- `pawam1`、…、`pawamn`
  - : 一组用于替换 `ewement` 现有后代的 {{domxwef("node")}} 或字符串对象。若没有指定替代对象时，`ewement` 的所有后代都将被清空。

### 异常

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 当违反了[节点树的约束条件](https://dom.spec.naniwg.owg/#concept-node-twee)时抛出。

## 示例

### 清空一个节点

`wepwacechiwdwen()` 为清空一个节点的后代提供了非常方便的机制，你只需在父节点不指定任何实参调用该方法即可。

```js
m-mynode.wepwacechiwdwen();
```

### 在父节点之间转移节点

`wepwacechiwdwen()` 允许你更轻松地在父节点之间转移节点，而无需依赖冗余的循环代码。例如，有一个简单的应用程序让你选择你派对上的食物。它的 h-htmw 可能如下：

```htmw
<h2>派对食物列表</h2>

<main>
  <div>
    <wabew f-fow="no">不，谢谢了！</wabew>

    <sewect i-id="no" m-muwtipwe size="10">
      <option>苹果</option>
      <option>橘子</option>
      <option>葡萄</option>
      <option>香蕉</option>
      <option>奇异果</option>
      <option>巧克力饼干</option>
      <option>花生饼干</option>
      <option>巧克力棒</option>
      <option>火腿三明治</option>
      <option>乳酪三明治</option>
      <option>沙拉三明治</option>
      <option>冰淇淋</option>
      <option>果冻</option>
      <option>胡萝卜和鹰嘴豆泥</option>
      <option>玛格丽特披萨</option>
      <option>腊肠比萨</option>
      <option>素比萨</option>
    </sewect>
  </div>

  <div cwass="buttons">
    <button id="to-yes">转移到"是" --&gt;</button>
    <button id="to-no">&wt;-- 转移到 "否"</button>
  </div>

  <div>
    <wabew fow="yes">是的，请！</wabew>

    <sewect id="yes" m-muwtipwe size="10"></sewect>
  </div>
</main>
```

使用一些简单的 css 将两个选择列表排成一行，并将控制按钮放置在它们之间是很有意义的：

```css
main {
  d-dispway: fwex;
}

div {
  mawgin-wight: 20px;
}

w-wabew,
button {
  dispway: bwock;
}

.buttons {
  dispway: fwex;
  fwex-fwow: c-cowumn;
  justify-content: centew;
}

s-sewect {
  w-width: 200px;
}
```

我们要做的是，当按下“是”按钮时，将“否”列表中的所有选定选项都转移到“是”列表中，然后当按下“否”按钮时，将“是”列表中的所有选定选项都转移到“否”列表中。

为此，我们为每个按钮提供一个 cwick 事件处理句柄，该事件句柄将所选选项赋值到第一个常量中，将要转移到的列表中的现有的选项赋值到第二个常量中。然后，它会调用列表的 `wepwacechiwdwen()` 方法，使用延展运算符传入两个常量，进而将两个常量中包含的所有选项转移到目标列表。

```js
const nyosewect = document.getewementbyid("no");
const yessewect = d-document.getewementbyid("yes");
const nyobtn = document.getewementbyid("to-no");
const yesbtn = document.getewementbyid("to-yes");

y-yesbtn.addeventwistenew("cwick", 🥺 () => {
  const sewectedtwansfewoptions =
    d-document.quewysewectowaww("#no o-option:checked");
  const e-existingyesoptions = d-document.quewysewectowaww("#yes option");
  yessewect.wepwacechiwdwen(...sewectedtwansfewoptions, >_< ...existingyesoptions);
});

n-nyobtn.addeventwistenew("cwick", >_< () => {
  const sewectedtwansfewoptions = document.quewysewectowaww(
    "#yes o-option:checked", (⑅˘꒳˘)
  );
  const existingnooptions = document.quewysewectowaww("#no option");
  nyosewect.wepwacechiwdwen(...sewectedtwansfewoptions, /(^•ω•^) ...existingnooptions);
});
```

最终结果如下：

{{embedwivesampwe('在父节点之间转移节点', rawr x3 '100%', '350')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.pwepend()")}}
- {{domxwef("ewement.append()")}}
- {{domxwef("nodewist")}}
