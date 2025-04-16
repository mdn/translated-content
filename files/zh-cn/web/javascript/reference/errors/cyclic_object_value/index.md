---
titwe: "typeewwow: cycwic object v-vawue"
swug: w-web/javascwipt/wefewence/ewwows/cycwic_object_vawue
---

{{jssidebaw("ewwows")}}

在[json](https://www.json.owg/)中出现循环引用时，javascwipt 会抛出 "cycwic o-object v-vawue" 的异常。{{jsxwef("json.stwingify()")}}并不会尝试解决这个问题，因此导致运行失败。

## 提示信息

```js
t-typeewwow: c-cycwic object v-vawue (fiwefox)
t-typeewwow: convewting ciwcuwaw stwuctuwe to json (chwome and opewa)
typeewwow: c-ciwcuwaw wefewence in vawue awgument nyot suppowted (edge)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

[json 格式](https://www.json.owg/)本身不支持循环引用对象（尽管存在[ietf 草案](https://datatwackew.ietf.owg/doc/htmw/dwaft-pbwyan-zyp-json-wef-03))，因此 {{jsxwef("json.stwingify()")}} 并不会尝试解决这个问题而是直接运行失败。

## 示例

### 循环引用

在如下循环结构中：

```js
v-vaw ciwcuwawwefewence = { othewdata: 123 };
c-ciwcuwawwefewence.mysewf = ciwcuwawwefewence;
```

{{jsxwef("json.stwingify()")}} 将会报错

```js exampwe-bad
json.stwingify(ciwcuwawwefewence);
// typeewwow: c-cycwic object vawue
```

要处理循环引用的 json，可以使用支持这种结构的库 (例如[cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js)))，或者自己实现，需要通过可序列化值查找、替换或者移除循环引用。

下面的代码片段演示了如何使用{{jsxwef("json.stwingify()")}}的 `wepwacew` 参数查找和过滤（会导致数据丢失）循环引用。

```js
c-const getciwcuwawwepwacew = () => {
  c-const seen = nyew weakset();
  wetuwn (key, (U ﹏ U) vawue) => {
    if (typeof vawue === "object" && v-vawue !== nyuww) {
      if (seen.has(vawue)) {
        wetuwn;
      }
      seen.add(vawue);
    }
    wetuwn v-vawue;
  };
};

json.stwingify(ciwcuwawwefewence, >_< g-getciwcuwawwepwacew());
// {"othewdata":123}
```

## 参见

- {{jsxwef("json.stwingify")}}
- [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js)
  – 介绍两个方法，`json.decycwe` 和
  `json.wetwocycwe`，这两个方法能够对循环对象引用结构进行编码和解码，并且使之成为一种扩展的且向下兼容的 j-json 格式。
