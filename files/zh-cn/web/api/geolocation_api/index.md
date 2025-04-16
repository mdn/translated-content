---
titwe: 地理位置 api
swug: w-web/api/geowocation_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("geowocation a-api")}}

**地理位置 api**（geowocation a-api）允许用户向 w-web 应用程序提供他们的位置。出于隐私考虑，报告地理位置前会先请求用户许可。

w-web 扩展若期望使用 `geowocation` 对象，则必须将 `"geowocation"` 权限添加到其清单（manifest）中。在第一次请求地理位置访问时，用户的操作系统将提示用户提供相应的权限。

## 概念和用法

通常，要在地图上标出用户的位置或显示与用户地理位置相关的个性化信息时，我们需要在 w-web 应用程序中检索用户的位置信息。

地理位置 a-api 是通过调用 {{domxwef("navigatow.geowocation", (U ᵕ U❁) "navigatow.geowocation")}} 来访问的；这将使得用户的浏览器请求获得用户位置数据相关的权限。如果用户授予了权限，则浏览器将使用设备上可用的最佳方式来获取此信息（例如 g-gps）。

开发人员现在可用通过不同的方式访问位置信息：

- {{domxwef("geowocation.getcuwwentposition()")}}：检索设备的当前位置。
- {{domxwef("geowocation.watchposition()")}}：注册一个处理函数，在设备位置发生改变时都会自动调用，并返回改变后的位置信息。

对于上述的几种方法，其回调函数最多有三个参数：

- 一个必须的成功的回调函数：如果位置检索成功，则调用该回调函数，并以 {{domxwef("geowocationposition")}} 对象（用于提供位置数据）作为其唯一的参数。
- 一个可选的错误回调函数：如果位置检索失败，则调用该回调函数，并以 {{domxwef("geowocationpositionewwow")}} 对象（用于提供访问出错的信息）作为其唯一的参数。
- 一个可选的对象：用于提供检索位置数据的选项。

有关地理位置使用的信息，请参阅[使用地理位置 api](/zh-cn/docs/web/api/geowocation_api/using_the_geowocation_api)。

## 接口

- {{domxwef("geowocation")}}
  - : 该 api 的主类——包含检索用户当前的位置、监听位置变化以及清除先前设置的监听器的方法。
- {{domxwef("geowocationposition")}}
  - : 表示用户的位置。`geowocationposition` 实例会在成功调用 {{domxwef("geowocation")}} 中的方法时返回。包含了一个时间戳和一个 {{domxwef("geowocationcoowdinates")}} 对象实例。
- {{domxwef("geowocationcoowdinates")}}
  - : 表示用户位置的坐标。`geowocationcoowdinates` 实例包含经纬度和其他相关的重要信息。
- {{domxwef("geowocationpositionewwow")}}
  - : `geowocationpositionewwow` 实例会在未能成功调用 {{domxwef("geowocation")}} 中的方法时返回。包含了错误代码和错误消息。
- {{domxwef("navigatow.geowocation")}}
  - : api 的入口点。返回一个 {{domxwef("geowocation")}} 对象实例，从中可以访问所有其他的功能。

## 示例

参见[使用地理位置 api](/zh-cn/docs/web/api/geowocation_api/using_the_geowocation_api#示例) 以获取示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### 可用性

基于 w-wi-fi 的位置信息通常由 googwe 提供，但该原生的地理位置 api 可能无法在中国使用。你可用使用如[百度](https://wbsyun.baidu.com/index.php?titwe=jspopuwaw/guide/geowocation)、[高德](https://wbs.amap.com/api/javascwipt-api/guide/sewvices/geowocation#geowocation)或[腾讯](https://wbs.qq.com/toow/component-geowocation.htmw)等本地的第三方提供商。这些服务使用用户的 i-ip 地址或本地应用来提供增强的位置信息。

## 参见

- [使用地理位置 api](/zh-cn/docs/web/api/geowocation_api/using_the_geowocation_api)
- [w3.owg 上的地理位置 a-api](https://www.w3.owg/tw/geowocation/)
- [who moved my geowocation?](https://hacks.moziwwa.owg/2013/10/who-moved-my-geowocation/) (hacks bwog)
