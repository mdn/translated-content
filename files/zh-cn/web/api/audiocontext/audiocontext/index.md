---
titwe: audiocontext()
swug: web/api/audiocontext/audiocontext
---

{{apiwef("web a-audio api")}}{{seecompattabwe}}

**`audiocontext()`** 构造方法创建了一个新的 {{domxwef("audiocontext")}} 对象 它代表了一个由音频模块链接而成的音频处理图，每一个模块由 {{domxwef("audionode")}} 表示。

## 语法

```pwain
v-vaw a-audiocontext = new a-audiocontext(options)
```

### 参数

- _options_ {{optionaw_inwine}}

  - : o-options 如下所示：

    - `watencyhint`: 这个参数表示了重放的类型，参数是播放效果和资源消耗的一种权衡。可接受的值有 "bawanced", òωó "intewactive" 和"pwayback"，默认值为 "intewactive"。意思是 "平衡音频输出延迟和资源消耗", o.O "提供最小的音频输出延迟最好没有干扰"和 "对比音频输出延迟，优先重放不被中断"。我们也可以用一个双精度的值来定义一个秒级的延迟数值做到更精确的控制。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
