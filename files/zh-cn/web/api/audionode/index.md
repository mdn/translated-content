---
title: AudioNode
slug: Web/API/AudioNode
---

{{ APIRef("Web Audio API") }} {{SeeCompatTable}}

![AudioNodes participating in an AudioContext create a audio routing graph.](webaudiobasics.png)**`AudioNode`** 接口是一个处理音频的通用模块，比如一个音频源 (e.g. 一个 HTML {{HTMLElement("audio")}} or {{HTMLElement("video")}} 元素), 一个音频地址或者一个中间处理模块 (e.g. 一个过滤器如 {{domxref("BiquadFilterNode")}}, 或一个音量控制器如 {{domxref("GainNode")}}).

一个 `AudioNode` 既有输入也有输出。输入与输出都有一定数量的通道。_只有一个输出而没有输入的_ `AudioNode` 叫做音频源。

处理多个 `AudioNode` 时，一般来说，一个模块读取它的输入，做一些处理。后输出新生成的结果。

不同的模块可以连接在一起构建一个处理图。这样一个处理图包含 {{domxref("AudioContext")}}。每个 `AudioNode` 只有一个这样的上下文。

一个 `AudioNode` 可以作为事件的目标，所以它实现了 {{domxref("EventTarget")}} 接口。

## 属性

- {{domxref("AudioNode.context")}} {{readonlyInline}}
  - : 链接到关联的 {{domxref("AudioContext")}}，处理图中模块的上下文对象。
- {{domxref("AudioNode.numberOfInputs")}} {{readonlyInline}}
  - : 返回这个 node 需要的输入数量。Source nodes are defined as nodes having a `numberOfInputs` attributes with a value of `0`.
- {{domxref("AudioNode.numberOfOutputs")}} {{readonlyInline}}
  - : 返回这个 node 的输出数量。Destination nodes, like `AudioDestinationNode`, have a value of `0` for this attribute.
- {{domxref("AudioNode.channelCount")}}
  - : Represents an integer used in determining how many channels outputs must contains. Its usage and precise definition depends of the value of `AudioNode.channelCountMode`: it is ignored if the value is `"max"`, used as a maximum value for `"clamped-max"`, or used as the effective value for `"explicit"`.
- {{domxref("AudioNode.channelCountMode")}}

  - : Represents an enumerated value describing the way channels must be matched between the inputs and the outputs. Possible values are:

    | Value           | Description                                                                                                                                             | Used as default for the following `AudioNode` children                                                                                                                                                                      |
    | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `"max"`         | The number of channels is the maximum of the number of channels all connections. That implies that `channelCount` is ignored and only up-mixing happens | {{domxref("GainNode")}}, {{domxref("DelayNode")}}, {{domxref("ScriptProcessorNode")}}, {{domxref("ChannelSplitterNode")}}, {{domxref("ChannelMergerNode")}}, {{domxref("BiquadFilterNode")}}, {{domxref("WaveShaperNode")}} |
    | `"clamped-max"` | The number of channels is the maximum of the number of channels of all connections, _clamped_ to the value of `channelCount`.                           | {{domxref("PannerNode")}}, {{domxref("ConvolverNode")}}                                                                                                                                                                     |
    | `"explicit"`    | The number of channels is defined by the value of `channelCount`.                                                                                       | {{domxref("AudioDestinationNode")}}, {{domxref("AnalyserNode")}}, {{domxref("DynamicsCompressorNode")}}                                                                                                                     |

- {{domxref("AudioNode.channelInterpretation")}}

  - : Represents an enumerated value describing the meaning of the channels. This interpretation will define how the up-mixing and the down-mixing will happen.
    The possible values are `"speakers"` or `"discrete"`. In the case of `"speakers"`, the ordering of the channels have the following meaning, and the channels are often represented by a standard abbreviation:

    | Value    | Description                                                                                        |
    | -------- | -------------------------------------------------------------------------------------------------- |
    | _Mono_   | `0: M: mono`                                                                                       |
    | _Stereo_ | `0: L: left 1: R: right`                                                                           |
    | _Quad_   | `0: L: left 1: R: right 2: SL: surround left 3: SR: surround right`                                |
    | _5.1_    | `0: L: left 1: R: right 2: C: center 3: LFE: subwoofer 4: SL: surround left 5: SR: surround right` |

    When the amount of channels doesn't match between an input and an output, up- or down-mixing happens according the following rules:

    <table>
      <thead>
        <tr>
          <th scope="row">Interpretation</th>
          <th scope="col">Input channels</th>
          <th scope="col">Output channels</th>
          <th scope="col">Mixing rules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="1" rowspan="13" scope="row"><code>speakers</code></th>
          <td><code>1</code> <em>(Mono)</em></td>
          <td><code>2</code> <em>(Stereo)</em></td>
          <td>
            <em>Up-mix from mono to stereo</em>.<br />The <code>M</code> input
            channel is used for both output channels (<code>L</code> and
            <code>R</code>).<br /><code
              >output.L = input.M<br />output.R = input.M</code
            >
          </td>
        </tr>
        <tr>
          <td><code>1</code> <em>(Mono)</em></td>
          <td><code>4</code> <em>(Quad)</em></td>
          <td>
            <em>Up-mix from mono to quad.</em><br />The <code>M</code> input channel
            is used for non-surround output channels (<code>L</code> and
            <code>R</code>). Surround output channels (<code>SL</code> and
            <code>SR</code>) are silent.<br /><code
              >output.L = input.M<br />output.R = input.M<br />output.SL = 0<br />output.SR
              = 0</code
            >
          </td>
        </tr>
        <tr>
          <td><code>1</code> <em>(Mono)</em></td>
          <td><code>6</code> <em>(5.1)</em></td>
          <td>
            <em>Up-mix from mono to 5.1.</em><br />The <code>M</code> input channel
            is used for the center output channel (<code>C</code>). All the others
            (<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code>, and
            <code>SR</code>) are silent.<br /><code
              >output.L = 0<br />output.R = 0</code
            ><br /><code
              >output.C = input.M<br />output.LFE = 0<br />output.SL = 0<br />output.SR
              = 0</code
            >
          </td>
        </tr>
        <tr>
          <td><code>2</code> <em>(Stereo)</em></td>
          <td><code>1</code> <em>(Mono)</em></td>
          <td>
            <em>Down-mix from stereo to mono</em>.<br />Both input channels (<code
              >L</code
            >
            and <code>R</code>) are equally combined to produce the unique output
            channel (<code>M</code>).<br /><code
              >output.M = 0.5 * (input.L + input.R)</code
            >
          </td>
        </tr>
        <tr>
          <td><code>2</code> <em>(Stereo)</em></td>
          <td><code>4</code> <em>(Quad)</em></td>
          <td>
            <em>Up-mix from stereo to quad.</em><br />The <code>L</code> and
            <code>R </code>input channels are used for their non-surround respective
            output channels (<code>L</code> and <code>R</code>). Surround output
            channels (<code>SL</code> and <code>SR</code>) are silent.<br /><code
              >output.L = input.L<br />output.R = input.R<br />output.SL = 0<br />output.SR
              = 0</code
            >
          </td>
        </tr>
        <tr>
          <td><code>2</code> <em>(Stereo)</em></td>
          <td><code>6</code> <em>(5.1)</em></td>
          <td>
            <em>Up-mix from stereo to 5.1.</em><br />The <code>L</code> and
            <code>R </code>input channels are used for their non-surround respective
            output channels (<code>L</code> and <code>R</code>). Surround output
            channels (<code>SL</code> and <code>SR</code>), as well as the center
            (<code>C</code>) and subwoofer (<code>LFE</code>) channels, are left
            silent.<br /><code
              >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
              = 0<br />output.SL = 0<br />output.SR = 0</code
            >
          </td>
        </tr>
        <tr>
          <td><code>4</code> <em>(Quad)</em></td>
          <td><code>1</code> <em>(Mono)</em></td>
          <td>
            <em>Down-mix from quad to mono</em>.<br />All four input channels
            (<code>L</code>, <code>R</code>, <code>SL</code>, and <code>SR</code>)
            are equally combined to produce the unique output channel
            (<code>M</code>).<br /><code
              >output.M = 0.25 * (input.L + input.R + </code
            ><code>input.SL + input.SR</code><code>)</code>
          </td>
        </tr>
        <tr>
          <td><code>4</code> <em>(Quad)</em></td>
          <td><code>2</code> <em>(Stereo)</em></td>
          <td>
            <em>Down-mix from quad to mono</em>.<br />Both left input channels
            (<code>L</code> and <code>SL</code>) are equally combined to produce the
            unique left output channel (<code>L</code>). And similarly, both right
            input channels (<code>R</code> and <code>SR</code>) are equally combined
            to produce the unique right output channel (<code>R</code>).<br /><code
              >output.L = 0.5 * (input.L + input.SL</code
            ><code>)</code><br /><code>output.R = 0.5 * (input.R + input.SR</code
            ><code>)</code>
          </td>
        </tr>
        <tr>
          <td><code>4</code> <em>(Quad)</em></td>
          <td><code>6</code> <em>(5.1)</em></td>
          <td>
            <em>Up-mix from quad to 5.1.</em><br />The <code>L</code>,
            <code>R</code>, <code>SL</code>, and <code>SR</code> input channels are
            used for their respective output channels (<code>L</code> and
            <code>R</code>). Center (<code>C</code>) and subwoofer
            (<code>LFE</code>) channels are left silent.<br /><code
              >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
              = 0<br />output.SL = input.SL<br />output.SR = input.SR</code
            >
          </td>
        </tr>
        <tr>
          <td><code>6</code> <em>(5.1)</em></td>
          <td><code>1</code> <em>(Mono)</em></td>
          <td>
            <em>Down-mix from 5.1 to stereo.</em><br />The left and right, both
            surround or not, and the central channels are all mixed together. The
            surround channels are slightly attenuated and the regular lateral
            channels are power-compensated to make them count as a single channel.
            The subwoofer (<code>LFE</code>) channel is lost.<br /><code
              >output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL +
              input.SR)</code
            >
          </td>
        </tr>
        <tr>
          <td><code>6</code> <em>(5.1)</em></td>
          <td><code>2</code> <em>(Stereo)</em></td>
          <td>
            <em>Down-mix from 5.1 to stereo.</em><br />The central (<code>C</code>)
            is summed with each lateral surround channels (<code>SL</code> or
            <code>SR</code>) and mixed to each lateral channel. As it is mixed in
            two channels, it is mixed at lower power, that is they are multiplied by
            <code>√2/2</code>. The subwoofer (<code>LFE</code>) channel is lost.<br /><code
              >output.L = input.L + 0.7071 * (input.C + input.SL)<br />output.R =
              input.R </code
            ><code>+ 0.7071 * (input.C + input.SR)</code>
          </td>
        </tr>
        <tr>
          <td><code>6</code> <em>(5.1)</em></td>
          <td><code>4</code> <em>(Quad)</em></td>
          <td>
            <em>Down-mix from 5.1 to quad.</em><br />The central (<code>C</code>) is
            mixed with the lateral non-surround channels (<code>L</code> and
            <code>R</code>). As it is mixed in two channels, it is mixed at lower
            power, that is they are multiplied by <code>√2/2</code>. The surround
            channels are passed unchanged. The subwoofer (<code>LFE</code>) channel
            is lost.<br /><code
              >output.L = input.L + 0.7071 * input.C<br />output.R = input.R<br />output.SL
              = input.SL<br />output.SR = input.SR</code
            >
          </td>
        </tr>
        <tr>
          <td colspan="2" rowspan="1">Other</td>
          <td>
            As these are non-standard channel layout, they are handled as if
            <code>channelInterpretation</code> was set to
            <code>discrete</code>.<br />The specification explicitly allow the
            future definition of new speakers layout. This fallback is therefore not
            future proof as the behavior of the browsers for a specific amount of
            channels may change in the future.
          </td>
        </tr>
        <tr>
          <th colspan="1" rowspan="2" scope="row"><code>discrete</code></th>
          <td rowspan="1">any (<code>x</code>)</td>
          <td rowspan="1">any (<code>y</code>) where <code>x&#x3C;y</code></td>
          <td>
            <em>Up-mix discrete channels.</em><br />Fill each output channel with
            its input counterpart, that is the input channel with the same index.
            Channels with no corresponding input channels are left silent.
          </td>
        </tr>
        <tr>
          <td rowspan="1">any (<code>x</code>)</td>
          <td rowspan="1">any (<code>y</code>) where <code>x>y</code></td>
          <td>
            <em>Down-mix discrete channels.</em><br />Fill each output channel with
            its input counterpart, that is the input channel with the same index.
            Input channels with no corresponding output channels are dropped.
          </td>
        </tr>
      </tbody>
    </table>

## 方法

_Also implements methods from the interface_ {{domxref("EventTarget")}}.

- {{domxref("AudioNode.connect(AudioNode)")}}
  - : 允许将此节点的一个输出连接到另一个节点的一个输入。
- {{domxref("AudioNode.connect(AudioParam)")}}
  - : 允许将此节点的一个输出连接到音频参数的一个输入。
- {{domxref("AudioNode.disconnect()")}}
  - : 允许将这个节点从另一个节点断开连接。

## 例子

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- Using Web Audio
