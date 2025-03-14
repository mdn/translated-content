---
title: MediaStreamTrack.getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 接口的 **`getConstraints()`** 方法接口返回 {{domxref("MediaTrackConstraints")}} 包含集使用现有呼叫最近的轨道建立约束来 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}。这些约束指示网站或应用程序指定的值和值范围对于包含的可约束属性是必需的或可接受的。

约束条件可以用来确保媒体符合你喜欢的某些指导方针。例如，你可能更喜欢高清视频，但要求帧率略低，以帮助保持足够低的数据速率而不会使网络负担过重。约束还可以指定理想和/或可接受的尺寸或尺寸范围。有关如何使用可约束属性的详细信息[，](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Constraints)请参阅[能力，约束和设置](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Constraints)。

## 语法

```js-nolint
getConstraints()
```

### 参数

没有。

### 返回值

指示使用{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}最近设置的网站或应用程序的可约束属性的{{domxref('MediaTrackConstraints')}}对象。返回对象中的属性按照与设置时相同的顺序列出，并且未包含未由网站或应用专门设置的属性。

> [!NOTE]
> 返回的一组约束条件不一定描述媒体的实际状态; 如果任何约束无法满足，它们仍然包含在网站代码最初设置的返回对象中。要获得所有可约束属性的当前活动设置，你应该调用{{domxref("MediaStreamTrack.getSettings", "getSettings()")}}。

## 例

本示例获取当前轨道约束，设置{{domxref("MediaTrackConstraints.facingMode", "facingMode")}}，并应用更新的约束。

```js
function switchCameras(track，camera){
  let constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(约束);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
