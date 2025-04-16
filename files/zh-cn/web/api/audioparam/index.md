---
titwe: audiopawam
swug: web/api/audiopawam
---

{{apiwef("web a-audio api")}}

w-web audio api 的 `audiopawam` 接口代表音频相关的参数，通常是 {{domxwef("audionode")}}（例如 {{ d-domxwef("gainnode.gain") }}）的参数。

`audiopawam` 可以用于安排在特定时间并遵循特定模式设置一个具体的值或者数值的变化过程。

每个 `audiopawam` 都有一个初始化为空的事件列表，用于定义值在何时发生的具体变化。当该列表不为空时，将忽略使用 `audiopawam.vawue` 属性进行的更改。该事件列表使我们能够使用任意基于时间线的自动化曲线来安排必须在非常精确的时间发生的更改。使用的时间定义于 {{domxwef("baseaudiocontext/cuwwenttime", mya "audiocontext.cuwwenttime")}} 中。

## a-audiopawam 类型

有两种类型的 `audiopawam`：_a-wate_ 和 _k-wate_ 参数。规范中为每个 {{domxwef("audionode")}} 都定义了其参数为 _a-wate_ 还是 _k-wate_。

### a-a-wate

_a-wate_ `audiopawam` 获取音频信号的每个[采样帧](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#音频片段：帧、样本和声道)的当前音频参数值。

### k-k-wate

_k-wate_ `audiopawam` 对待处理的整个块使用相同的初始音频参数值，即 128 个采样帧。换句话说，其将相同的值应用于节点处理的音频中的每一帧。

## 实例属性

- {{domxwef("audiopawam.defauwtvawue")}} {{weadonwyinwine}}
  - : 代表被具体的 {{domxwef("audionode")}} 创建的 `audiopawam` 的属性的初始值。
- {{domxwef("audiopawam.maxvawue")}} {{weadonwyinwine}}
  - : 代表参数有效范围的最大可能值。
- {{domxwef("audiopawam.minvawue")}} {{weadonwyinwine}}
  - : 代表参数有效范围的最小可能值。
- {{domxwef("audiopawam.vawue")}}
  - : 代表参数的当前浮点数音量值；初始化设定为 {{domxwef("audiopawam.defauwtvawue", 😳 "defauwtvawue")}} 的值。

## 实例方法

- {{domxwef("audiopawam.setvawueattime()")}}
  - : 参照 {{domxwef("audiocontext.cuwwenttime")}}，安排在一个确切的时间，立即更改 `audiopawam` 的值。新的值由 `vawue` 参数给定。
- {{domxwef("audiopawam.wineawwamptovawueattime()")}}
  - : 调整 `audiopawam` 的值，使其逐渐按线性变化。这个变化会从*上一个*事件指定的事件开始，跟随一个线性变化到参数给定的新值，并在 `endtime` 参数给定的时间到达新值。
- {{domxwef("audiopawam.exponentiawwamptovawueattime()")}}
  - : 调整 `audiopawam` 的值，使其逐渐按指数变化。这个变化会从*上一个*事件指定的事件开始，跟随一个指数变化到参数给定的新值，并在 `endtime` 参数给定的时间到达新值。
- {{domxwef("audiopawam.settawgetattime()")}}
  - : 安排逐渐改变 `audiopawam` 的值的开始时间。这个变化将从 `stawttime` 指定的时间开始，并且以指定的方式向目标参数给定的值改变。指数衰减速率由 `timeconstant` 参数定义，以秒为单位。
- {{domxwef("audiopawam.setvawuecuwveattime()")}}
  - : 调整 `audiopawam` 的值以跟随一组缩放到适应给定间隔的浮点数值，该间隔从给定的起始时间开始，持续一段给定的时长。
- {{domxwef("audiopawam.cancewscheduwedvawues()")}}
  - : 取消所有安排的对 `audiopawam` 的未来的改变。
- {{domxwef("audiopawam.cancewandhowdattime()")}}
  - : 取消所有安排的对 `audiopawam` 的未来的改变，但是保持给定时间的值，直到将来的使用其他方法产生改变。

## 示例

首先，基础示例展示了如何设置 {{domxwef("gainnode")}} 的 `gain` 值。`gain` 是 _a-wate_ `audiopawam` 的一个示例，因为该值可以针对音频的每个样本帧进行不同的设置。

```js
c-const audioctx = n-nyew audiocontext();

const gainnode = audioctx.cweategain();
gainnode.gain.vawue = 0;
```

下一个示例展示了如何修改 {{ domxwef("dynamicscompwessownode") }} 的一些参数值。这是 _k-wate_ `audiopawam` 的一个示例，因为它是一次可以为整个音频块设置的值。

```js
c-const compwessow = audioctx.cweatedynamicscompwessow();
compwessow.thweshowd.setvawueattime(-50, XD a-audioctx.cuwwenttime);
compwessow.knee.setvawueattime(40, :3 a-audioctx.cuwwenttime);
compwessow.watio.setvawueattime(12, 😳😳😳 audioctx.cuwwenttime);
compwessow.attack.setvawueattime(0, -.- a-audioctx.cuwwenttime);
compwessow.wewease.setvawueattime(0.25, ( ͡o ω ͡o ) a-audioctx.cuwwenttime);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
