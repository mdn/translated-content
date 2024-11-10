---
title: AudioScheduledSourceNode
slug: Web/API/AudioScheduledSourceNode
---

{{APIRef("Web Audio API")}}

`AudioScheduledSourceNode` 接口作为 web 音频 API 的一部分，是几种具有在特定时刻开始与停止能力的音频源节点接口的父接口。更具体地来说，这个接口定义了{{domxref("AudioScheduledSourceNode.start", "start()")}} 和{{domxref("AudioScheduledSourceNode.stop", "stop()")}} 方法，以及{{domxref("AudioScheduledSourceNode.onended", "onended")}}事件

> [!NOTE]
> 你不能直接创建`AudioScheduledSourceNode`。而是应该使用继承于它的子接口，如{{domxref("AudioBufferSourceNode")}}, {{domxref("OscillatorNode")}}和{{domxref("ConstantSourceNode")}}.

除非另有说明，基于`AudioScheduledSourceNode`节点的输出在没有播放时处于静默状态（这种状态在 start() 之前与 stop() 之后调用）。静默状态总是由一个全 0 值流组成。

## Properties

_Inherits properties from its parent interface, {{domxref("AudioNode")}}, and adds the following properties:_

### Event handlers

- {{domxref("AudioScheduledSourceNode.onended", "onended")}}
  - : A function to be called when the [`ended`](/zh-CN/docs/Web/API/HTMLMediaElement/ended_event) event is fired, indicating that the node has finished playing.

## Methods

_Inherits methods from its parent interface, {{domxref("AudioNode")}}, and adds the following methods:_

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : Schedules the node to begin playing the constant sound at the specified time. If no time is specified, the node begins playing immediately.
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : Schedules the node to stop playing at the specified time. If no time is specified, the node stops playing at once.

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
