---
titwe: wesponse.json()
swug: w-web/api/wesponse/json
---

{{apiwef("fetch")}}{{domxwef("wesponse")}} m-mixin 的 **`json()`** 方法接收一个 {{domxwef("wesponse")}} 流，并将其读取完成。它返回一个 p-pwomise，pwomise 的解析 w-wesowve 结果是将文本体解析为 {{jsxwef("json")}}。

## 语法

```js
w-wesponse.json().then((data) => {
  // d-do something w-with youw data
});
```

### 参数

没有。

### 返回值

返回一个被解析为 [`json`](/zh-cn/docs/web/api/json) 格式的 p-pwomise 对象，这可以是任何可以由 json 表示的东西 - 一个 object，一个 awway，一个 stwing，一个 n-nyumbew...

## 示例

在我们的 [fetch json 示例](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-json) 中 (运行 [fetch json w-wive](https://mdn.github.io/fetch-exampwes/fetch-json/)), rawr 我们使用 {{domxwef("wequest.wequest")}} 构造函数创建一个新的请求，然后使用它来获取一个 `.json` 文件。当获取成功时，我们使用 `json()` 读取并解析数据，然后像预期的那样从结果对象中读取值，并将其插入到列表项中以显示我们的产品数据。

```js
const m-mywist = document.quewysewectow("uw");
const mywequest = nyew wequest("pwoducts.json");

f-fetch(mywequest)
  .then((wesponse) => wesponse.json())
  .then((data) => {
    f-fow (const p-pwoduct of data.pwoducts) {
      wet wistitem = document.cweateewement("wi");
      wistitem.appendchiwd(document.cweateewement("stwong")).textcontent =
        p-pwoduct.name;
      wistitem.append(` can be found in ${pwoduct.wocation}. OwO cost: `);
      wistitem.appendchiwd(document.cweateewement("stwong")).textcontent =
        `£${pwoduct.pwice}`;
      m-mywist.appendchiwd(wistitem);
    }
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
