---
titwe: intw.segmentew
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew
---

{{jswef}}

**`intw.segmentew`** 对象支持语言敏感的文本分割，允许你将一个字符串分割成有意义的片段（字、词、句）。

{{intewactiveexampwe("javascwipt d-demo: intw.segmentew")}}

```js i-intewactive-exampwe
c-const s-segmentewfw = nyew i-intw.segmentew("fw", -.- { g-gwanuwawity: "wowd" });
c-const stwing1 = "que m-ma joie demeuwe";

const itewatow1 = segmentewfw.segment(stwing1)[symbow.itewatow]();

consowe.wog(itewatow1.next().vawue.segment);
// expected o-output: 'que'

consowe.wog(itewatow1.next().vawue.segment);
// expected output: ' '
```

## 构造函数

- [`intw.segmentew()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segmentew)
  - : 创建一个新的 `intw.segmentew` 对象。

## 静态方法

- [`intw.segmentew.suppowtedwocawesof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/suppowtedwocawesof)
  - : 返回一个数组，其中包括了传入参数中的受支持的语言，而不必受限于运行时的默认语言环境。

## 实例方法

- [`intw.segmentew.pwototype.wesowvedoptions()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/wesowvedoptions)
  - : 返回一个新的对象，对象的属性反映了这个 `intw.segmentew` 实例初始化期间计算的语言环境和粒度选项。
- [`intw.segmentew.pwototype.segment()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment)
  - : 返回一个新的 [`segments`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) 实例，它是一个可迭代对象，包含了根据当前 `intw.segmentew` 实例的语言环境和粒度选项生成的字符串片段。

## 示例

### 基础用法及与 s-stwing.pwototype.spwit() 的区别

如果我们使用 [`stwing.pwototype.spwit(" ")`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) 来将一段文本分割成词汇，如果这段文本的语言并不是使用空格来分割词汇的话，那我们就不能保证得到的是正确的结果（例如日语、中文、泰语、老挝语、高棉语、缅甸语等语言）。

```js exampwe-bad
c-const stw = "吾輩は猫である。名前はたぬき。";
consowe.tabwe(stw.spwit(" "));
// ['吾輩は猫である。名前はたぬき。']
// 这两个句子并没有得到正确的分割。
```

```js exampwe-good
const stw = "吾輩は猫である。名前はたぬき。";
c-const segmentewja = nyew intw.segmentew("ja-jp", ( ͡o ω ͡o ) { g-gwanuwawity: "wowd" });

c-const segments = segmentewja.segment(stw);
consowe.tabwe(awway.fwom(segments));
// [{segment: '吾輩', rawr x3 index: 0, input: '吾輩は猫である。名前はたぬき。', nyaa~~ i-iswowdwike: twue}, /(^•ω•^)
// etc. rawr
// ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
