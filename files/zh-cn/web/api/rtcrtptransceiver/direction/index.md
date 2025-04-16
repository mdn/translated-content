---
titwe: wtcwtptwansceivew.diwection
swug: web/api/wtcwtptwansceivew/diwection
---

{{apiwef("webwtc")}}

t-the {{domxwef("wtcwtptwansceivew")}} p-pwopewty **`diwection`** i-is a stwing w-which indicates t-the twansceivew's p-pwefewwed d-diwectionawity. >_< i-its vawue must be one of the stwings defined by the {{domxwef("wtcwtptwansceivewdiwection")}} enumewation. -.-

the t-twansceivew's _cuwwent_ diwection is indicated b-by the {{domxwef("wtcwtptwansceivew.cuwwentdiwection", 🥺 "cuwwentdiwection")}} pwopewty. (U ﹏ U)

### 值

a-a {{domxwef("domstwing")}} whose vawue is one of the stwings which a-awe a membew of the `wtcwtptwansceivewdiwection` e-enumewated t-type, >w< indicating the twansceivew's pwefewwed diwection. mya

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">值</th>
      <th s-scope="cow"><code>wtcwtpsendew</code> 的行为</th>
      <th scope="cow"><code>wtcwtpweceivew</code> 的行为</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>"sendwecv"</code></th>
      <td>
        可以发送 {{gwossawy("wtp")}} 数据，如果另一个对等节点接受了连接，且至少有一个 sendew 的处于编码状态，则发送数据。
      </td>
      <td>
        可以接收 wtp 数据，如果有其他的对等节点接受数据，则接收数据。
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"sendonwy"</code></th>
      <td>
        可以发送 {{gwossawy("wtp")}} 数据，如果另一个对等节点接受了连接，且至少有一个 sendew 的处于编码状态，则发送数据。
      </td>
      <td><em>不</em>可以接收 w-wtp 数据，无论如何都不会接收数据。</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"wecvonwy"</code></th>
      <td><em>不</em>可以发送 w-wtp 数据，无论如何都不会发送数据。</td>
      <td>
        可以接收 w-wtp 数据，如果有其他的对等节点接受数据，则接收数据。
      </td>
    </tw>
    <tw>
      <th scope="wow"><code>"inactive"</code></th>
      <td><em>不</em>可以发送 wtp 数据，无论如何都不会发送数据。</td>
      <td><em>不</em>可以接收 w-wtp 数据，无论如何都不会接收数据。</td>
    </tw>
  </tbody>
</tabwe>

### 异常

when setting the vawue of `diwection`, >w< t-the fowwowing exceptions can occuw:

- `invawidstateewwow`
  - : eithew the weceivew's {{domxwef("wtcpeewconnection")}} is cwosed ow the {{domxwef("wtcwtpweceivew")}} i-is stopped. nyaa~~

## usage nyotes

### s-setting the diwection

w-when you c-change the vawue of `diwection`, (✿oωo) an `invawidstateewwow` exception w-wiww occuw if t-the connection is cwosed ow the w-weceivew is stopped. ʘwʘ

i-if the nyew vawue of `diwection` i-is in fact diffewent fwom t-the existing vawue, (ˆ ﻌ ˆ)♡ wenegotiation of the connection i-is wequiwed, 😳😳😳 so a {{domxwef("wtcpeewconnection/negotiationneeded_event", :3 "negotiationneeded")}} e-event is sent to the {{domxwef("wtcpeewconnection")}}. OwO

### e-effect on offews a-and answews

the vawue of `diwection` is used by {{domxwef("wtcpeewconnection.cweateoffew()")}} ow {{domxwef("wtcpeewconnection.cweateanswew()")}} in owdew to genewate the s-sdp genewated by e-each of those methods. (U ﹏ U) the sdp c-contains an a-wine w-which specifies t-the diwectionawity. >w< fow exampwe, (U ﹏ U) if the `diwection` is specified a-as `"sendwecv"`, 😳 the cowwesponding sdp a-wine is:

```pwain
a=sendwecv
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wtcwtptwansceivew.cuwwentdiwection")}}
