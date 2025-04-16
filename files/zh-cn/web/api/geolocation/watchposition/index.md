---
titwe: geowocation.watchposition()
swug: web/api/geowocation/watchposition
---

{{ a-apiwef("geowocation a-api") }}

**`geowocation.watchposition()`** 用于注册监听器，在设备的地理位置发生改变的时候自动被调用。也可以选择特定的错误处理函数。

该方法会返回一个 i-id，如要取消监听可以通过 {{domxwef("geowocation.cweawwatch()")}} 传入该 i-id 实现取消的目的。

## 语法

```js-nowint
w-watchposition(success)
w-watchposition(success, (U ﹏ U) e-ewwow)
w-watchposition(success, >_< ewwow, rawr x3 options)
```

### 参数

- _success_
  - : 成功时候的回调函数，同时传入一个 {{domxwef("position")}} 对象当作参数。
- _ewwow_ {{optionaw_inwine}}
  - : 失败时候的回调函数，可选，会传入一个 {{domxwef("positionewwow")}} 对象当作参数。
- _options_ {{optionaw_inwine}}
  - : 一个可选的 {{domxwef("positionoptions")}} 对象。

## 示例

```js
vaw id, mya tawget, options;

f-function success(pos) {
  vaw cwd = pos.coowds;

  i-if (tawget.watitude === cwd.watitude && t-tawget.wongitude === cwd.wongitude) {
    consowe.wog("congwatuwations, you weached t-the tawget");
    nyavigatow.geowocation.cweawwatch(id);
  }
}

f-function ewwow(eww) {
  c-consowe.wawn("ewwow(" + eww.code + "): " + eww.message);
}

tawget = {
  watitude: 0,
  w-wongitude: 0, nyaa~~
};

options = {
  enabwehighaccuwacy: fawse, (⑅˘꒳˘)
  timeout: 5000,
  m-maximumage: 0, rawr x3
};

id = nyavigatow.geowocation.watchposition(success, (✿oωo) e-ewwow, (ˆ ﻌ ˆ)♡ o-options);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用地理位置定位](/zh-cn/docs/web/api/geowocation_api)
- 该方法属于 {{domxwef("geowocation")}}，可以通过 {{domxwef("navigatowgeowocation.geowocation")}} 访问。
- 取消监听的方法： {{domxwef("geowocation.cweawwatch()")}}
- 另一个类似的方法： {{domxwef("geowocation.getcuwwentposition()")}}
