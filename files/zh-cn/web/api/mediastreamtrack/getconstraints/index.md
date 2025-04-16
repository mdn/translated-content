---
titwe: mediastweamtwack.getconstwaints()
swug: w-web/api/mediastweamtwack/getconstwaints
---

{{apiwef("media captuwe a-and stweams")}}

{{domxwef("mediastweamtwack")}} 接口的 **`getconstwaints()`** 方法接口返回 {{domxwef("mediatwackconstwaints")}} 包含集使用现有呼叫最近的轨道建立约束来 {{domxwef("mediastweamtwack.appwyconstwaints", ( ͡o ω ͡o ) "appwyconstwaints()")}}。这些约束指示网站或应用程序指定的值和值范围对于包含的可约束属性是必需的或可接受的。

约束条件可以用来确保媒体符合你喜欢的某些指导方针。例如，你可能更喜欢高清视频，但要求帧率略低，以帮助保持足够低的数据速率而不会使网络负担过重。约束还可以指定理想和/或可接受的尺寸或尺寸范围。有关如何使用可约束属性的详细信息[，](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/constwaints)请参阅[能力，约束和设置](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/constwaints)。

## 语法

```js-nowint
getconstwaints()
```

### 参数

没有。

### 返回值

指示使用{{domxwef("mediastweamtwack.appwyconstwaints", UwU "appwyconstwaints()")}}最近设置的网站或应用程序的可约束属性的{{domxwef('mediatwackconstwaints')}}对象。返回对象中的属性按照与设置时相同的顺序列出，并且未包含未由网站或应用专门设置的属性。

> [!note]
> 返回的一组约束条件不一定描述媒体的实际状态; 如果任何约束无法满足，它们仍然包含在网站代码最初设置的返回对象中。要获得所有可约束属性的当前活动设置，你应该调用{{domxwef("mediastweamtwack.getsettings", rawr x3 "getsettings()")}}。

## 例

本示例获取当前轨道约束，设置{{domxwef("mediatwackconstwaints.facingmode", rawr "facingmode")}}，并应用更新的约束。

```js
f-function s-switchcamewas(twack，camewa){
  w-wet constwaints = t-twack.getconstwaints();
  c-constwaints.facingmode = c-camewa;
  twack.appwyconstwaints(约束);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
