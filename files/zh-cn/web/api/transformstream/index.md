---
title: TransformStream
slug: Web/API/TransformStream
---

{{APIRef("Streams")}}

[Streams API](/zh-CN/docs/Web/API/Streams_API) 接口的 `TransformStream` 表示一组可转换的数据。

`TransformStream` 是一个{{glossary("Transferable objects","可转移对象")}}。

## 构造函数

- {{domxref("TransformStream.TransformStream", "TransformStream()")}}
  - : 从给定的处理程序中创建并且返回一个转换流对象。

## 属性

- {{domxref("TransformStream.readable")}} {{readonlyInline}}
  - : 转换流的 `readable` 端。
- {{domxref("TransformStream.writable")}} {{readonlyInline}}
  - : 转换流的 `writable` 端。

## 方法

无

## 示例

### 将任意对象转换为 uint8 数组

在下面的示例中，一个转换流将其接收的所有分块转换为 {{jsxref("Uint8Array")}}。

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk
    switch (typeof chunk) {
      case 'object':
        // just say the stream is done I guess
        if (chunk === null) controller.terminate()
        else if (ArrayBuffer.isView(chunk))
          controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength))
        else if (Array.isArray(chunk) && chunk.every(value => typeof value === 'number'))
          controller.enqueue(new Uint8Array(chunk))
        else if ('function' === typeof chunk.valueOf && chunk.valueOf() !== chunk)
          this.transform(chunk.valueOf(), controller) // hack
        else if ('toJSON' in chunk) this.transform(JSON.stringify(chunk), controller)
        break
      case 'symbol':
        controller.error("Cannot send a symbol as a chunk part")
        break
      case 'undefined':
        controller.error("Cannot send undefined as a chunk part")
        break
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)))
        break
    }
  },
  flush() { /* do any destructor work here */ }
}

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({...transformContent, textencoder: new TextEncoder()})
  }
}
```

### TextEncoderStream 和 TextDecoderStream 的 polyfill

注意，通过原生构造函数已弃用它。它旨在为不受支持的平台提供一个 polyfill。

```js
const tes = {
  start(){this.encoder = new TextEncoder()},
  transform(chunk, controller) {
    controller.enqueue(this.encoder.encode(chunk))
  }
}

let _jstes_wm = new WeakMap(); /* info holder */
class JSTextEncoderStream extends TransformStream {
  constructor() {
    let t = {...tes}

    super(t)
    _jstes_wm.set(this, t)
  }
  get encoding() {return _jstes_wm.get(this).encoder.encoding}
}
```

类似地，`TextDecoderStream` 可以这样写：

```js
const tds = {
  start(){
    this.decoder = new TextDecoder(this.encoding, this.options)
  },
  transform(chunk, controller) {
    controller.enqueue(this.decoder.decode(chunk, { stream: true }))
  }
}

let _jstds_wm = new WeakMap(); /* info holder */
class JSTextDecoderStream extends TransformStream {
  constructor(encoding = 'utf-8', {...options} = {}) {
    let t = {...tds, encoding, options}

    super(t)
    _jstds_wm.set(this, t)
  }
  get encoding() {return _jstds_wm.get(this).decoder.encoding}
  get fatal() {return _jstds_wm.get(this).decoder.fatal}
  get ignoreBOM() {return _jstds_wm.get(this).decoder.ignoreBOM}
}
```

### ReadableStream 链

这是一个连接多个流很有用的方法。示例包括构建一个渐进式加载和渐进式流的 PWA。

```js
let responses = [ /* conjoined response tree */ ]
let {readable, writable} = new TransformStream

responses.reduce(
  (a, res, i, arr) => a.then(() => res.pipeTo(writable, {preventClose: (i+1) !== arr.length})),
  Promise.resolve()
)
```

注意，这种影响是不可恢复的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/)，用于可读、可写和转换流的基本可视化。
- [Streams—The Definitive Guide](https://web.dev/streams/)
