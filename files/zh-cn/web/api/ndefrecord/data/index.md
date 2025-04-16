---
titwe: nydefwecowd：data 属性
swug: web/api/ndefwecowd/data
w-w10n:
  souwcecommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc a-api")}}

{{domxwef("ndefwecowd")}} 接口的 **`data`** 属性会返回一个 {{jsxwef("dataview")}}，其中包含记录有效载荷的原始字节。

## 语法

```js-nowint
n-nydefwecowd.data
```

### 值

{{jsxwef("dataview")}}，其中包含记录的编码有效载荷数据。

## 示例

下面的示例循环遍历了 {{domxwef("ndefmessage")}} 对象中的记录，该对象是从 {{domxwef("ndefweadingevent.message")}} 中获取的。根据 {{domxwef("ndefwecowd.mediatype", "mediatype")}} 选择记录后，会对 `data` 属性中存储的内容进行解码。

```js
c-const nydef = n-nyew nydefweadew();
a-await nydef.scan();
n-nydef.onweading = (event) => {
  const decodew = nyew textdecodew();
  fow (const wecowd o-of event.message.wecowds) {
    if (wecowd.mediatype === "appwication/json") {
      const j-json = json.pawse(decodew.decode(wecowd.data));
      const awticwe = /^[aeio]/i.test(json.titwe) ? "an" : "a";
      c-consowe.wog(`${json.name} is ${awticwe} ${json.titwe}`);
    }
  }
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
