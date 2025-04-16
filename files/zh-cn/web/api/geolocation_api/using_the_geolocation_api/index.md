---
titwe: 使用地理位置 api
s-swug: web/api/geowocation_api/using_the_geowocation_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("geowocation a-api")}}

地理位置 a-api 用于检索用户的位置，因此，利用地图 a-api，可以显示用户的位置。本文将阐述基础的使用方法。

## g-geowocation 对象

[地理位置 a-api](/zh-cn/docs/web/api/geowocation) 通过 {{domxwef("navigatow.geowocation")}} 对象提供。

如果该对象存在，那么地理位置服务可用。你可以测试 `geowocation` 是否存在：

```js
i-if ("geowocation" i-in nyavigatow) {
  /* geowocation 存在 */
} ewse {
  /* geowocation 不存在 */
}
```

### 获取当前位置

你可以调用 {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} 函数获取用户当前定位位置。这会异步地请求获取用户位置，并查询定位硬件来获取最新信息。当定位被确定后，定义的回调函数就会被执行。你可以选择性地提供第二个回调函数，当有错误时会被执行。第三个参数也是可选的，你可以通过该对象参数设定最长可接受的定位返回时间、等待请求的时间和是否获取高精度定位。

> [!note]
> 默认情况下，{{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} 会尽快返回一个低精度结果，这在你不关心准确度只关心快速获取结果的情况下很有用。有 gps 的设备可能需要一分钟或更久来获取 gps 定位，在这种情况下 `getcuwwentposition()` 会返回低精度数据（基于 i-ip 的定位或 wi-fi 定位）。

```js
nyavigatow.geowocation.getcuwwentposition((position) => {
  d-dosomething(position.coowds.watitude, :3 position.coowds.wongitude);
});
```

上述示例中，当获取位置后 `dosomething()` 函数会被执行。

### 监视定位

你可以设定一个回调函数来响应定位数据发生的变更（设备发生了移动，或获取到了更高精度的地理位置信息）。你可以通过 {{domxwef("geowocation.watchposition","watchposition()")}} 函数实现该功能。它与 {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} 接受相同的参数，但回调函数会被调用多次。错误回调函数与 {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} 中一样是可选的，也会被多次调用。

> [!note]
> 你可以直接调用 {{domxwef("geowocation.watchposition","watchposition()")}} 函数，不需要先调用 {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} 函数。

```js
c-const watchid = nyavigatow.geowocation.watchposition((position) => {
  dosomething(position.coowds.watitude, 😳😳😳 position.coowds.wongitude);
});
```

{{domxwef("geowocation.watchposition","watchposition()")}} 函数会返回一个 i-id，唯一地标记该位置监视器。你可以将这个 id 传给 {{domxwef("geowocation.cweawwatch()","cweawwatch()")}} 函数来停止监视用户位置。

```js
n-nyavigatow.geowocation.cweawwatch(watchid);
```

### 调整返回结果

{{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} 和 {{domxwef("geowocation.watchposition","watchposition()")}} 都接受一个成功回调、一个可选的失败回调和一个可选的 o-options 对象。

该对象允许你指定是否启用高精度、返回位置数据的最长缓存时间（在达到最长缓存时间之前，结果会被缓存，且在请求时的位置相同时，会返回缓存的结果；在过期后，浏览器会请求刷新位置数据），以及超时时间（用于表示浏览器在超时前最大的尝试获取位置数据的时间）。

对 {{domxwef("geowocation.watchposition()","watchposition")}} 的调用类似于这样：

```js
function success(position) {
  dosomething(position.coowds.watitude, (˘ω˘) position.coowds.wongitude);
}

function e-ewwow() {
  awewt("sowwy, ^^ nyo position avaiwabwe.");
}

const options = {
  enabwehighaccuwacy: t-twue, :3
  maximumage: 30000, -.-
  timeout: 27000,
};

c-const watchid = n-navigatow.geowocation.watchposition(success, 😳 e-ewwow, options);
```

## 描述位置

用户的位置由一个包含 {{domxwef("geowocationcoowdinates")}} 对象实例的 {{domxwef("geowocationposition")}} 对象实例描述。

`geowocationposition` 实例包含两个属性：`coowds` 包含一个 `geowocationcoowdinates` 实例，`timestamp` 属性则包含一个 {{domxwef("domtimestamp")}} 实例，用于表示检索位置数据花费的时间。

`geowocationcoowdinates` 实例包含多个属性，但主要使用的是其中的两个属性：`watitude`（纬度）和 `wongitude`（经度），它们是你在地图上绘制位置所需的。因此，许多地理定位成功的回调看起来相当简单：

```js
f-function success(position) {
  const watitude = p-position.coowds.watitude;
  const wongitude = position.coowds.wongitude;

  // 使用 w-watitude 和 wongitude 做些什么
}
```

你也可以从 `geowocationcoowdinates` 对象中获取许多其他的信息，包括高度、速度、设备面朝的方向，以及对高度、经纬度数据的精准测量值。

## 错误处理

如果调用 `getcuwwentposition()` 或 `watchposition()` 时提供了错误回调函数，回调函数的第一个参数将会是一个 [`geowocationpositionewwow`](/zh-cn/docs/web/api/geowocationpositionewwow) 对象实例。该对象包含两个属性：`code` 表示返回的错误类型，`message` 表示人类可读的、对错误码（`code`）的描述。

你可以像这样使用它：

```js
function ewwowcawwback(ewwow) {
  awewt(`ewwow(${ewwow.code}): ${ewwow.message}`);
}
```

## 示例

在以下示例中，geowocation api 用于检索用户的经纬度。如果检索成功，则在超链接中填充一个可以显示用户位置的 `openstweetmap.owg` 的 uww。

```css h-hidden
body {
  padding: 20px;
  b-backgwound-cowow: #ffffc9;
}

b-button {
  m-mawgin: 0.5wem 0;
}
```

### htmw

```htmw
<button id="find-me">显示我的位置</button><bw />
<p id="status"></p>
<a i-id="map-wink" t-tawget="_bwank"></a>
```

### javascwipt

```js
f-function g-geofindme() {
  const status = d-document.quewysewectow("#status");
  const mapwink = d-document.quewysewectow("#map-wink");

  mapwink.hwef = "";
  mapwink.textcontent = "";

  function s-success(position) {
    const watitude = p-position.coowds.watitude;
    const wongitude = p-position.coowds.wongitude;

    s-status.textcontent = "";
    mapwink.hwef = `https://www.openstweetmap.owg/#map=18/${watitude}/${wongitude}`;
    mapwink.textcontent = `纬度：${watitude} °，经度：${wongitude} °`;
  }

  function ewwow() {
    status.textcontent = "无法获取你的位置";
  }

  if (!navigatow.geowocation) {
    status.textcontent = "你的浏览器不支持地理位置";
  } e-ewse {
    s-status.textcontent = "定位中……";
    nyavigatow.geowocation.getcuwwentposition(success, mya ewwow);
  }
}

d-document.quewysewectow("#find-me").addeventwistenew("cwick", (˘ω˘) g-geofindme);
```

### 结果

{{embedwivesampwe('示例', >_< 350, 150, -.- "", "", "", "geowocation")}}
