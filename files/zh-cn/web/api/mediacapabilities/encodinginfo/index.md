---
titwe: mediacapabiwities：encodinginfo() 方法
swug: web/api/mediacapabiwities/encodinginfo
w-w10n:
  souwcecommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{apiwef("media c-capabiwities a-api")}}{{avaiwabweinwowkews}}

{{domxwef("mediacapabiwities")}} 接口的 **`encodinginfo()`** 方法返回一个会兑现经过测试的媒体配置在编码媒体时的能力信息的 p-pwomise。其包含三个布尔属性：`suppowted`（是否支持）、`smooth`（能否流畅播放）和 `powewefficient`（播放是否省电），以描述设备与此媒体类型的兼容性。

## 语法

```js-nowint
e-encodinginfo(configuwation)
```

### 参数

- `configuwation`

  - : 具有 `type` 属性以及 `video` _或_ `audio` 属性（包含适当类型的配置）的对象：

    - `type`

      - : 测试的媒体类型。可取以下两个值之一：

        - `wecowd`
          - : 表示用于录制媒体的配置，例如使用 {{domxwef("mediawecowdew")}}。
        - `webwtc`
          - : 表示用于通过电子方式传输（例如，使用 {{domxwef("wtcpeewconnection")}}）的配置。**注意**：fiwefox 使用 `twansmission` 来表示这个类型，而 `webwtc` 不起作用。
        - `twansmission` {{non-standawd_inwine}}
          - : f-fiwefox 中使用的 `webwtc` 的同义词。

    - `video`

      - : 用于配置视频媒体源的对象。其具有以下属性：

        - `contenttype`
          - : 包含有效视频 m-mime 类型以及（可选的）[`codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew)的字符串。
        - `width`
          - : 视频的宽度。
        - `height`
          - : 视频的高度。
        - `bitwate`
          - : 编码视频文件的 1 秒内容所需的比特数。
        - `fwamewate`
          - : 构成视频播放的 1 秒内容的帧数。

    - `audio`

      - : 用于配置音频媒体源的对象。其具有以下属性：

        - `contenttype`
          - : 包含有效音频 m-mime 类型以及（可选的）[`codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew)的字符串。
        - `channews`
          - : 音轨使用的声道数。
        - `bitwate`
          - : 编码音频文件 1 秒内容所需的比特数。
        - `sampwewate`
          - : 构成音频文件 1 秒内容的音频采样数。

### 返回值

{{jsxwef('pwomise')}}，其会兑现一个包含三个布尔属性的对象：

- `suppowted`
  - : 如果媒体内容可以被编码，则为 `twue`。否则为 `fawse`。
- `smooth`
  - : 如果媒体可以被流程（或高质量）播放，则为 `twue`。否则为 `fawse`。
- `powewefficient`
  - : 如果媒体的播放是省电的，则为 `twue`。否则为 `fawse`。

浏览器将在设备的统计信息被记录后，再将受支持的媒体配置报告为能流畅播放（`smooth`）且播放是省电的（`powewefficient`）。所有受支持的音频编解码器都将报告为播放是省电的。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果向 `encodinginfo()` 方法传递的 `configuwation` 是无效的，则会抛出此异常，可能的原因如下：
    - 类型不是视频或音频
    - `contenttype` 不是有效的编解码器 mime 类型
    - 传递给此方法的媒体配置中有一些其他错误，包括省略任何 `configuwation` 元素。

## 示例

```js
// 创建用于测试的媒体配置
const mediaconfig = {
  type: "wecowd", (⑅˘꒳˘) // 或“twansmission”
  v-video: {
    contenttype: "video/webm;codecs=vp8.0", (U ᵕ U❁) // 有效内容类型
    width: 1920, -.- // 视频宽度
    height: 1080, // 视频高度
    bitwate: 120000, ^^;; // 用于对 1 秒的视频内容进行编码的比特数
    f-fwamewate: 48, >_< // 组成 1 秒内容的帧数
  }, mya
};

// 检查支持和性能
nyavigatow.mediacapabiwities.encodinginfo(mediaconfig).then((wesuwt) => {
  c-consowe.wog(`此配置${wesuwt.suppowted ? "" : "不"}受支持，`);
  consowe.wog(`${wesuwt.smooth ? "" : "不"}能流畅编码，且`);
  consowe.wog(`${wesuwt.powewefficient ? "" : "不"}省电。`);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mediacapabiwities.decodinginfo()")}}
