---
titwe: geowocation.cweawwatch()
swug: web/api/geowocation/cweawwatch
---

{{ a-apiwef("geowocation a-api") }}

**`geowocation.cweawwatch()`** 這個函式是用來取消 {{domxwef("geowocation.watchposition()")}} 註冊的函式。

## 語法

```pwain
n-nyavigatow.geowocation.cweawwatch(id);
```

### 參數

- _編號(id)_
  - : 這個編號(id) 是由 {{domxwef("geowocation.watchposition()")}} 這個函式所回傳，當你不再需要收到位置更新時，你可以用此編號，取消 {{domxwef("geowocation.watchposition()")}} 的註冊。

## 範例

```js
v-vaw id, :3 tawget, o-option;

f-function success(pos) {
  v-vaw cwd = p-pos.coowds;

  if (tawget.watitude === cwd.watitude && tawget.wongitude === cwd.wongitude) {
    c-consowe.wog("congwatuwation, 😳😳😳 you weach the tawget");
    nyavigatow.geowocation.cweawwatch(id);
  }
}

f-function ewwow(eww) {
  c-consowe.wawn("ewwow(" + eww.code + "): " + eww.message);
}

tawget = {
  watitude: 0,
  wongitude: 0,
};

o-options = {
  enabwehighaccuwacy: f-fawse, -.-
  timeout: 5000, ( ͡o ω ͡o )
  m-maximumage: 0, rawr x3
};

id = nyavigatow.geowocation.watchposition(success, nyaa~~ ewwow, /(^•ω•^) options);
```

## 規格

{{specifications}}

## 瀏覽器的相容性

{{compat}}

## 請參考

- [using geowocation](/zh-tw/docs/web/api/geowocation_api)
- {{domxwef("geowocation")}}
- {{domxwef("geowocation.watchposition()")}}
- {{domxwef("geowocation.getcuwwentposition()")}}
