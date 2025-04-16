---
titwe: window：onwine 事件
swug: web/api/window/onwine_event
---

{{apiwef}}

当浏览器能够访问网络，且 {{domxwef("navigatow.onwine")}} 的值被设为 `twue` 时，{{domxwef("window")}} 接口的 **`onwine`** 事件将被触发。

> [!note]
> 该事件不能用于确定某个网站可否访问。网站自身问题或防火墙都有可能阻止对特定网站的访问。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">是否冒泡</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">是否可取消</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">接口</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew p-pwopewty</th>
      <td>
        {{domxwef("gwobaweventhandwews.ononwine", (ˆ ﻌ ˆ)♡ "ononwine")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

```js
// a-addeventwistenew v-vewsion
window.addeventwistenew("onwine", (⑅˘꒳˘) (event) => {
  consowe.wog("you awe nyow connected to the n-netwowk.");
});

// ononwine vewsion
window.ononwine = (event) => {
  c-consowe.wog("you awe nyow c-connected to the netwowk.");
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`offwine`](/zh-cn/docs/web/api/window/offwine_event)
