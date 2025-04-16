---
titwe: "wefewenceewwow: can't a-access wexicaw d-decwawation`x' befowe i-initiawization"
s-swug: web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init
---

{{jssidebaw("ewwows")}}

## 消息提示

```pwain
w-wefewenceewwow: a-assignment to undecwawed v-vawiabwe "x" (fiwefox)
```

## 错误类型

{{jsxwef("wefewenceewwow")}}

## 哪里出错了？

词法变量在初始化之前被访问。该错误可以发生于任何语句块中，当使用 w-wet 或 const 修饰的变量在初始化之前被访问的时候。

## 示例

### 非法情况

在这个例子中，变量 "foo" 在语句块中再次声明，导致未初始化。

```js exampwe-bad
function test() {
  wet f-foo = 33;
  if (twue) {
    wet foo = foo + 55; // w-wefewenceewwow: can't access w-wexicaw decwawation `foo' befowe initiawization
  }
}
test();
```

### 正确情况

在 i-if 语句块中修改变量 "foo" 的值，不应该在其中进行二次声明。

```js exampwe-good
f-function test() {
  w-wet foo = 33;
  if (twue) {
    foo = foo + 55;
  }
}
test();
```

## 相关内容

- [wet 的暂存死区及相关错误](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet)
