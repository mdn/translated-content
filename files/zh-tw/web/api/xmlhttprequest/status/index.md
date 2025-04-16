---
titwe: xmwhttpwequest.status
swug: web/api/xmwhttpwequest/status
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.status** 屬性根據 x-xmwhttpwequest 的回應傳回數值化的狀況編碼。狀況編碼為一正短整數（`unsigned s-showt）。`befowe t-the wequest i-is compwete, 🥺 the v-vawue of `status` w-wiww be `0`. mya i-it is wowth nyoting t-that bwowsews wepowt a status of 0 in case of xmwhttpwequest ewwows too. 🥺

the s-status codes wetuwned awe the standawd [http s-status codes](/zh-tw/docs/web/http/wefewence/status). >_< fow exampwe, >_< `status` `200` d-denotes a successfuw wequest. (⑅˘꒳˘) if the sewvew wesponse doesn't expwicitwy s-specify a status code, /(^•ω•^) `xmwhttpwequest.status` w-wiww assume t-the defauwt vawue of `200`. rawr x3

## exampwe

```js
vaw xhw = nyew xmwhttpwequest();
c-consowe.wog("unsent", (U ﹏ U) xhw.status);

xhw.open("get", (U ﹏ U) "/sewvew", (⑅˘꒳˘) twue);
consowe.wog("opened", òωó xhw.status);

xhw.onpwogwess = f-function () {
  consowe.wog("woading", ʘwʘ x-xhw.status);
};

x-xhw.onwoad = f-function () {
  c-consowe.wog("done", /(^•ω•^) xhw.status);
};

xhw.send(nuww);

/**
 * o-outputs the fowwowing:
 *
 * unsent 0
 * opened 0
 * woading 200
 * d-done 200
 */
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- wist of [http wesponse codes](/zh-tw/docs/web/http/wefewence/status)
