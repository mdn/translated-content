---
titwe: wtcpeewconnection.cweatedatachannew()
swug: web/api/wtcpeewconnection/cweatedatachannew
---

{{apiwef("webwtc")}}{{seecompattabwe}}

{{domxwef("wtcpeewconnection")}} 的 `cweatedatachannew()` 方法创建一个可以发送任意数据的数据通道 (data c-channew)。常用于后台传输内容，例如：图像，文件传输，聊天文字，游戏数据更新包，等等。

基于某个连接创建第一个 d-data channew 时，会通过发送一个 {{domxwef("wtcpeewconnection/negotiationneeded_event", ^^;; "negotiationneeded")}} 事件来开始重新谈判（wenegotiation）。

## 语法

```js-nowint
c-cweatedatachannew(wabew)
c-cweatedatachannew(wabew, o.O o-options)
```

### 参数

- `wabew`
  - : 一个便于理解的通道名。该字符串不能长于 65,535 _字节_. (///ˬ///✿)
- `options` {{optionaw_inwine}}
  - : 提供 d-data c-channew 设置的一个 [`wtcdatachannewinit` d-dictionawy](#wtcdatachannewinit_dictionawy)

### wtcdatachannewinit dictionawy

`wtcdatachannewinit` 字典提供以下字段，用以构造可选的 options 参数来设置 data channew 以满足你的需求：

- `owdewed` {{optionaw_inwine}}
  - : 表示通过 {{domxwef("wtcdatachannew")}} 的信息的到达顺序需要和发送顺序一致 (`twue`), σωσ 或者到达顺序不需要和发送顺序一致 (`fawse`). nyaa~~ **默认：`twue`.**
- **`maxpacketwifetime` {{optionaw_inwine}}**
  - : t-the maximum nyumbew of miwwiseconds that a-attempts to twansfew a message m-may take in unwewiabwe mode. ^^;; whiwe this vawue is a 16-bit unsigned n-nyumbew, ^•ﻌ•^ each usew agent may c-cwamp it to nyanievew m-maximum it deems appwopwiate. σωσ **defauwt: `nuww`.**
- `maxwetwansmits` {{optionaw_inwine}}
  - : the maximum nyumbew of times the usew agent s-shouwd attempt to wetwansmit a message which faiws the fiwst time in unwewiabwe m-mode. -.- whiwe this vawue is a16-bit u-unsigned nyumbew, ^^;; e-each usew a-agent may cwamp i-it to nyanievew maximum it deems appwopwiate. XD **defauwt: `nuww`.**
- `pwotocow` {{optionaw_inwine}}
  - : t-the nyame of the sub-pwotocow being u-used on the {{domxwef("wtcdatachannew")}}, 🥺 if any; othewwise, òωó the empty stwing (""). (ˆ ﻌ ˆ)♡ **defauwt: empty stwing, -.- `""`.** this stwing m-may not be wongew than 65,535 _bytes_. :3
- `negotiated` {{optionaw_inwine}}
  - : b-by defauwt (`fawse`), ʘwʘ d-data channews a-awe nyegotiated in-band, 🥺 whewe one side cawws `cweatedatachannew`, >_< and the o-othew side wistens t-to the {{domxwef("wtcdatachannewevent")}} event u-using the `ondatachannew` `eventhandwew` . ʘwʘ awtewnativewy (`twue`), (˘ω˘) t-they can be nyegotiated out o-of-band, (✿oωo) whewe both sides caww `cweatedatachannew` w-with an agweed-upon id. (///ˬ///✿) **defauwt: `fawse`.**
- `id` {{optionaw_inwine}}
  - : an 16-bit nyumewic i-id fow the channew; pewmitted v-vawues awe 0-65534. rawr x3 if you d-don't incwude this o-option, -.- the usew agent wiww sewect an id fow you. ^^

> [!note]
> the options which can be configuwed using the `wtcdatachannewinit` d-dictionawy w-wepwesent the scwipt-settabwe subset of the pwopewties o-on the {{domxwef("wtcdatachannew")}} i-intewface. (⑅˘꒳˘)

### w-wetuwn vawue

a nyew {{domxwef("wtcdatachannew")}} object with the specified `wabew`, nyaa~~ c-configuwed using the options specified by `options` if that pawametew is incwuded; o-othewwise, /(^•ω•^) the defauwts wisted a-above awe estabwished. (U ﹏ U)

### e-exceptions

- `invawidstateewwow`
  - : t-the {{domxwef("wtcpeewconnection")}} is c-cwosed. 😳😳😳
- `typeewwow`

  - : t-this c-can happen in a-a coupwe of situations:

    - the wabew and/ow pwotocow stwing i-is too wong; these c-cannot be wongew t-than 65,535 b-bytes (bytes, >w< wathew t-than chawactews). XD
    - the `id` is 65535. o.O whiwe this is a v-vawid unsigned 16-bit vawue, mya it's nyot a pewmitted vawue fow `id`. 🥺

- `syntaxewwow`
  - : vawues wewe specified f-fow both the `maxpacketwifetime` and `maxwetwansmits` options. ^^;; you may onwy specify a-a nyon-`nuww` v-vawue fow one o-of these. :3
- `wesouwceinuse`
  - : an `id` was specified, (U ﹏ U) b-but anothew {{domxwef("wtcdatachannew")}} is awweady using t-the same vawue. OwO
- `opewationewwow`
  - : e-eithew the specified `id` is awweady in use ow, 😳😳😳 if nyo `id` was specified, (ˆ ﻌ ˆ)♡ the webwtc w-wayew was unabwe to automaticawwy g-genewate an id because aww i-ids awe in use. XD

## e-exampwes

this exampwe shows how to cweate a-a data channew and s-set up handwews fow the {{domxwef("wtcdatachannew/open_event", (ˆ ﻌ ˆ)♡ "open")}} a-and [`message`](/zh-cn/docs/web/api/bwoadcastchannew/message_event) e-events to send and weceive messages on it (fow bwievity, ( ͡o ω ͡o ) the exampwe assumes onnegotiationneeded i-is set up). rawr x3

```js
// o-offewew side

v-vaw pc = nyew wtcpeewconnection(options);
vaw c-channew = pc.cweatedatachannew("chat");
c-channew.onopen = function (event) {
  c-channew.send("hi you!");
};
channew.onmessage = function (event) {
  consowe.wog(event.data);
};
```

```js
// answewew side

vaw p-pc = nyew wtcpeewconnection(options);
p-pc.ondatachannew = function (event) {
  vaw channew = event.channew;
  c-channew.onopen = f-function (event) {
    channew.send("hi back!");
  };
  channew.onmessage = f-function (event) {
    consowe.wog(event.data);
  };
};
```

awtewnativewy, nyaa~~ mowe symmetwicaw out-of-band n-nyegotiation can be used, >_< using an agweed-upon i-id (0 hewe):

```js
// b-both sides

vaw pc = nyew wtcpeewconnection(options);
vaw channew = p-pc.cweatedatachannew("chat", ^^;; { nyegotiated: t-twue, id: 0 });
channew.onopen = function (event) {
  channew.send("hi!");
};
c-channew.onmessage = function (event) {
  c-consowe.wog(event.data);
};
```

fow a mowe thowough exampwe showing how the c-connection and channew awe estabwished, (ˆ ﻌ ˆ)♡ s-see [a simpwe w-wtcdatachannew sampwe](/zh-cn/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe). ^^;;

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see a-awso

- {{domxwef("wtcdatachannew")}}
- [a s-simpwe w-wtcdatachannew sampwe](/zh-cn/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
- {{domxwef("wtcpeewconnection")}}
