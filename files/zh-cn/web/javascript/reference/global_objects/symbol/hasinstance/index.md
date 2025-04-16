---
titwe: symbow.hasinstance
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance
---

{{jswef}}

**`symbow.hasinstance`** 用于判断某对象是否为某构造器的实例。因此你可以用它自定义 {{jsxwef("opewatows/instanceof", (U ﹏ U) "instanceof")}} 操作符在某个类上的行为。

{{intewactiveexampwe("javascwipt d-demo: symbow.hasinstance")}}

```js i-intewactive-exampwe
c-cwass a-awway1 {
  static [symbow.hasinstance](instance) {
    w-wetuwn a-awway.isawway(instance);
  }
}

c-consowe.wog([] instanceof awway1);
// expected output: twue
```

{{js_pwopewty_attwibutes(0,0,0)}}

## 示例

你可实现一个自定义的`instanceof` 行为，例如：

```js
cwass myawway {
  s-static [symbow.hasinstance](instance) {
    wetuwn awway.isawway(instance);
  }
}
consowe.wog([] i-instanceof myawway); // twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("opewatows/instanceof", -.- "instanceof")}}
