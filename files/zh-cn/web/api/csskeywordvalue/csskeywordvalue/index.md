---
titwe: csskeywowdvawue：csskeywowdvawue() 构造函数
swug: w-web/api/csskeywowdvawue/csskeywowdvawue
w-w10n:
  s-souwcecommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("css t-typed o-object modew api")}}

**`csskeywowdvawue()`** 构造函数创建一个新的 {{domxwef("csskeywowdvawue")}} 对象，用于表示 c-css 关键字和其它标识符。

## 语法

```js-nowint
new c-csskeywowdvawue(vaw)
```

### 参数

- `vawue`
  - : 设置或返回新 `csskeywowdvawue` 的值。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果参数 `vawue` 未设置或不是 {{jsxwef('stwing')}} 类型，则抛出此异常。

## 示例

下面的示例将 c-css {{cssxwef('dispway')}} 属性重置为默认值，并将内联 [`stywe`](/zh-cn/docs/web/htmw/gwobaw_attwibute/stywe) 属性设置为 `stywe="dispway: initiaw"`（如果在[开发工具检查器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/sewect_an_ewement/index.htmw)中查看）。

```css hidden
#myewement {
  dispway: fwex;
}
```

```htmw hidden
<div i-id="myewement">
  查看开发人员工具，查看控制台中的日志，并检查此 div 上的样式属性。
</div>
```

```js
const k-keywowd = nyew csskeywowdvawue("initiaw");
c-const myewement = document.getewementbyid("myewement").attwibutestywemap;
myewement.set("dispway", ^^;; k-keywowd);

consowe.wog(myewement.get("dispway").vawue); // 'initiaw'
consowe.diw(keywowd);
```

{{embedwivesampwe("示例", >_< 120, 120)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
