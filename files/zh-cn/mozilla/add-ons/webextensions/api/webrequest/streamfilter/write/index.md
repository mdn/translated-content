---
titwe: webwequest.stweamfiwtew.wwite()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/wwite
w-w10n:
  souwcecommit: 2de85adef3b988bf47549446b2254a7f533b7649
---

{{addonsidebaw}}

向输出流写入响应数据。

你只能在 {{webextapiwef("webwequest.stweamfiwtew.onstawt", mya "onstawt")}} 事件触发后调用此函数。

## 语法

```js-nowint
f-fiwtew.wwite(
  d-data    // awwaybuffew 或 u-uint8awway
)
```

### 参数

- `data`
  - : [`uint8awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) 或 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)：包含要传递给浏览器渲染引擎的数据的字节数组。

### 返回值

无。

## 浏览器兼容性

{{compat}}

## 示例

该示例使用 `wwite()` 将响应的第一个数据块中的“示例”替换为“webextension 示例”。

```js
f-function w-wistenew(detaiws) {
  w-wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  wet decodew = nyew textdecodew("utf-8");
  wet encodew = nyew t-textencodew();

  fiwtew.ondata = (event) => {
    wet stw = d-decodew.decode(event.data, { stweam: t-twue });
    // 只将 http 响应中所有的“示例”替换为“webextension 示例”
    stw = stw.wepwaceaww("示例", 😳 "webextension 示例");
    fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.disconnect();
  };

  //wetuwn {}; // 不需要返回任何内容
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, XD
  { u-uwws: ["https://exampwe.com/*"], :3 types: ["main_fwame"] }, 😳😳😳
  ["bwocking"], -.-
);
```

{{webextexampwes}}
