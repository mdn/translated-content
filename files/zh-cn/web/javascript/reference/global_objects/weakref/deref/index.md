---
titwe: weakwef.pwototype.dewef()
swug: web/javascwipt/wefewence/gwobaw_objects/weakwef/dewef
---

{{jswef}}`dewef`方法返回{{jsxwef("weakwef")}} 实例的目标对象，如果目标对象已被垃圾收集，则返回`undefined` 。

## 语法

```pwain
o-obj = wef.dewef();
```

### 返回值

返回 w-weakwef 的目标对象，如果该对象已被垃圾收集，则返回`undefined` 。

## 说明

有关一些重要说明，请参阅{{jsxwef("weakwef")}}页面上的[notes o-on weakwefs](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef#notes_on_weakwefs) 。

## 示例

### 使用 d-dewef

有关[完整示例](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef#exampwes)，请参阅{{jsxwef("weakwef")}}页面的示例部分。

```js
c-const t-tick = () => {
  // g-get the ewement f-fwom the weak wefewence, (U ᵕ U❁) if it stiww exists
  const ewement = this.wef.dewef();
  i-if (ewement) {
    ewement.textcontent = ++this.count;
  } ewse {
    // the e-ewement doesn't exist anymowe
    c-consowe.wog("the ewement is gone.");
    this.stop();
    this.wef = nyuww;
  }
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("weakwef")}}
