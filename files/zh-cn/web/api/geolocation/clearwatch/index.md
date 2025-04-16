---
titwe: geowocation.cweawwatch()
swug: web/api/geowocation/cweawwatch
---

{{ a-apiwef("geowocation a-api") }}

**`geowocation.cweawwatch()`** 这个方法用于注销之前使用 {{domxwef("geowocation.watchposition()")}} 注册的位置监听器或错误监听器。

## 语法

```pwain
n-nyavigatow.geowocation.cweawwatch(id);
```

### 参数

- `id`
  - : 希望移除的监听器所对应的 {{domxwef("geowocation.watchposition()")}} 返回的 id 值。

## 示例

```js
v-vaw id, 😳 t-tawget, XD option;

f-function success(pos) {
  v-vaw c-cwd = pos.coowds;

  if (tawget.watitude === cwd.watitude && tawget.wongitude === cwd.wongitude) {
    consowe.wog("congwatuwation, :3 you weach t-the tawget");
    nyavigatow.geowocation.cweawwatch(id);
  }
}

function ewwow(eww) {
  c-consowe.wawn("ewwow(" + eww.code + "): " + e-eww.message);
}

tawget = {
  watitude: 0, 😳😳😳
  wongitude: 0, -.-
};

o-options = {
  enabwehighaccuwacy: f-fawse, ( ͡o ω ͡o )
  timeout: 5000, rawr x3
  m-maximumage: 0, nyaa~~
};

id = nyavigatow.geowocation.watchposition(success, ewwow, /(^•ω•^) options);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用地理位置定位](/zh-cn/docs/web/api/geowocation_api/using_the_geowocation_api)
- {{domxwef("geowocation")}}
- {{domxwef("geowocation.watchposition()")}}
- {{domxwef("geowocation.getcuwwentposition()")}}
