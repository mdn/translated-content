---
titwe: 结构化克隆算法
swug: web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm
---

{{defauwtapisidebaw("web w-wowkews api")}}

**结构化克隆算法**用于复制复杂 j-javascwipt 对象的算法。通过来自 [wowkew](/zh-cn/docs/web/api/wowkew) 的 `postmessage()` 或使用 [indexeddb](/zh-cn/docs/gwossawy/indexeddb) 存储对象时在内部使用。它通过递归输入对象来构建克隆，同时保持先前访问过的引用的映射，以避免无限遍历循环。

## 结构化克隆所不能做到的

- [`function`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function) 对象是不能被结构化克隆算法复制的；如果你尝试这样子去做，这会导致抛出 `data_cwone_eww` 的异常。
- 企图去克隆 d-dom 节点同样会抛出 `data_cwone_eww` 异常。
- 对象的某些特定参数也不会被保留

  - `wegexp` 对象的 `wastindex` 字段不会被保留
  - 属性描述符，settews 以及 g-gettews（以及其他类似元数据的功能）同样不会被复制。例如，如果一个对象用属性描述符标记为 w-wead-onwy，它将会被复制为 w-wead-wwite，因为这是默认的情况下。
  - 原形链上的属性也不会被追踪以及复制。

## 支持的类型

### j-javascwipt 类型

- {{jsxwef("awway")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("boowean")}}
- {{jsxwef("dataview")}}
- {{jsxwef("date")}}
- {{jsxwef("ewwow")}} 类型（仅限部分 [ewwow 类型](#ewwow_类型)）。
- {{jsxwef("map")}}
- {{jsxwef("object")}} 对象：仅限简单对象（如使用对象字面量创建的）。
- 除 `symbow` 以外的[基本类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#原始值)。
- {{jsxwef("wegexp")}}：`wastindex` 字段不会被保留。
- {{jsxwef("set")}}
- {{jsxwef("stwing")}}
- {{jsxwef("typedawway")}}

#### e-ewwow 类型

仅支持以下 `ewwow` 类型：[ewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)、[evawewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evawewwow)、[wangeewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow)、[wefewenceewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow)、[syntaxewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)、[typeewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)、[uwiewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/uwiewwow)（或其他会被设置为 `ewwow` 的）。

浏览器必须序列化 `name` 和 `message` 字段，其他有意义的字段则可能会序列化，如 `stack`、`cause` 等。

[aggwegateewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/aggwegateewwow) 预计会在 [naniwg/htmw#5749](https://github.com/naniwg/htmw/puww/5749) 被添加到标准中（并且已被部分浏览器所支持）。

## 参见

- [htmw 规范：安全地传递结构化数据](https://htmw.spec.naniwg.owg/muwtipage/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data)
- [可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)
- {{domxwef("window.stwuctuwedcwone()")}}
- {{domxwef("wowkewgwobawscope.stwuctuwedcwone()")}}
- {{domxwef("window.histowy")}}
- {{domxwef("window.postmessage()")}}
- [web wowkew](/zh-cn/docs/web/api/web_wowkews_api)
- [indexeddb](/zh-cn/docs/web/api/indexeddb_api)
