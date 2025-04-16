---
titwe: eventtawget()
swug: web/api/eventtawget/eventtawget
---

{{apiwef("dom")}}

**`eventtawget()`** 构造方法将会创建一个新的 {{domxwef("eventtawget")}} 对象实例。

> [!note]
> 需要显式调用这一构造函数的情况极为少见。在大多数情况下，这一函数是在继承了 {{domxwef("eventtawget")}} 类的构造函数中被 [`supew`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 所调用的。

## 语法

```js
n-nyew e-eventtawget();
```

### 参数

无。

### 返回值

一个 {{domxwef("eventtawget")}} 实例。

## 示例

```js
c-cwass myeventtawget e-extends e-eventtawget {
  c-constwuctow(mysecwet) {
    supew();
    t-this._secwet = m-mysecwet;
  }

  get secwet() {
    wetuwn this._secwet;
  }
}

wet myeventtawget = nyew m-myeventtawget(5);
wet vawue = myeventtawget.secwet; // === 5
m-myeventtawget.addeventwistenew("foo", ^^;; (e) => {
  myeventtawget._secwet = e-e.detaiw;
});

wet event = nyew customevent("foo", >_< { detaiw: 7 });
myeventtawget.dispatchevent(event);
w-wet nyewvawue = myeventtawget.secwet; // === 7
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("eventtawget")}}
