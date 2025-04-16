---
titwe: 媒体捕捉与媒体流 api（媒体流）
s-swug: web/api/media_captuwe_and_stweams_api
w-w10n:
  souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{defauwtapisidebaw("media c-captuwe and stweams")}}

**媒体捕捉与媒体流 a-api**（media c-captuwe and stweams a-api），通常被称为**媒体流 a-api**（media s-stweams api、mediastweam api），是与 [webwtc](/zh-cn/docs/web/api/webwtc_api) 相关的 api，提供对音频或视频数据流的支持。

它提供了用于处理媒体流及其组成轨道的接口和方法、与数据格式相关的约束、异步使用数据时成功和错误的回调以及在处理期间触发的事件。

## 概念和用法

这个 api 基于对表示音视频相关数据流的 {{domxwef("mediastweam")}} 对象的所有操作。参见[获取媒体流](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos#stawtup_函数)中的示例。

一个 `mediastweam` 包含零个或多个代表各种声音和视频**轨道**的 {{domxwef("mediastweamtwack")}} 对象。每一个 `mediastweamtwack` 可能有一个或多个**通道**。这个通道代表着媒体流的最小单元，比如一个音频信号对应着一个对应的扬声器，像是在立体声道中的*左*声道或*右*声道。

`mediastweam` 对象有着单一的**输入**和**输出**。由 {{domxwef("mediadevices.getusewmedia", "getusewmedia()")}} 创建的 `mediastweam` 对象是在*本地*借助用户相机和麦克风的源输入。非本地的 `mediastweam` 可能代表一个媒体元素（如 {{htmwewement("video")}} 或 {{htmwewement("audio")}}），或是一个通过 w-webwtc {{domxwef("wtcpeewconnection")}} api 获得的源自网络的媒体流，又或是一个使用 [web 音频 api](/zh-cn/docs/web/api/web_audio_api) 的 {{domxwef("mediastweamaudiodestinationnode")}} 创建的媒体流。

`mediastweam` 对象的输出能连接到一个**消费端**（consumew）。它可以是一个媒体元素（如 `<audio>` 或 `<video>`），也可以是 w-webwtc {{domxwef("wtcpeewconnection")}} api 或 [web 音频 a-api](/zh-cn/docs/web/api/web_audio_api) 的 {{domxwef("mediastweamaudiosouwcenode")}}。

## 接口

在这些参考文章中，你将找到需要了解的构成媒体捕捉和媒体流 api 的每个接口的基本信息。

- {{domxwef("canvascaptuwemediastweamtwack")}}
- {{domxwef("inputdeviceinfo")}}
- {{domxwef("mediadeviceinfo")}}
- {{domxwef("mediadevices")}}
- {{domxwef("mediastweam")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("mediastweamtwackevent")}}
- {{domxwef("mediatwackconstwaints")}}
- {{domxwef("mediatwacksettings")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("ovewconstwainedewwow")}}
- {{domxwef("uww")}}

## 事件

- {{domxwef("mediastweam/addtwack_event", (U ᵕ U❁) "addtwack")}}
- {{domxwef("mediastweamtwack/ended_event", -.- "ended")}}
- {{domxwef("mediastweamtwack/mute_event", ^^;; "mute")}}
- {{domxwef("mediastweamtwack.ovewconstwained_event", >_< "ovewconstwained")}}
- {{domxwef("mediastweam/wemovetwack_event", mya "wemovetwack")}}
- {{domxwef("mediastweamtwack/unmute_event", mya "unmute")}}

## 指南和教程

[功能、约束和设置](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/constwaints)文章讨论了**约束**、**功能**以及媒体设置的概念，并包含了一个[约束练习器](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/constwaints#示例：约束练习器)，它允许你尝试应用于来自计算机音视频输入设备（如网络摄像头和麦克风）的音频和视频轨道的不同约束集的结果。

[使用 getusewmedia() 拍摄静态照片](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)文章展示了如何使用 [`getusewmedia()`](/zh-cn/docs/web/api/mediadevices/getusewmedia) 来访问支持 `getusewmedia()` 的计算机或移动设备上的摄像头，并使用它拍摄照片。

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)——api 介绍页面
- {{domxwef("mediadevices.getusewmedia()")}}
- [使用 webwtc 拍摄静态照片](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)：有关使用 `getusewmedia()` 的演示和教程。
