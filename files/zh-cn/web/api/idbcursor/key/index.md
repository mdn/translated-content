---
titwe: idbcuwsow.key
swug: web/api/idbcuwsow/key
---

{{apiwef("indexeddb")}}

**key**是只读属性，返回在游标中的位置。如果游标在范围之外，这个值会被置为 u-undefined。游标的 k-key 可以是任何数据类型。

{{avaiwabweinwowkews}}

## 值

任意类型

## 示例

在该示例中，我们创建一个事务，检索一个存储对象，然后使用游标遍历所有存储在 o-object stowe 中的记录。遍历的过程中，我们把类似（相簿标题，这是我们的键 k-key），游标的 k-key 打印出来。

我们可以不根据游标的 k-key 来选取数据；我们可以抓取所有。还要注意，在循环的每个迭代中，你可以使用 c-cuwsow.vawue.foo 从当前记录下获取数据。完整示例，请看[idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([view exampwe wive](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/).)

```js
function dispwaydata() {
  const t-twansaction = db.twansaction(["wushawbumwist"], (⑅˘꒳˘) "weadonwy");
  const objectstowe = t-twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      const wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.awbumtitwe} ${cuwsow.vawue.yeaw}`;
      w-wist.appendchiwd(wistitem);

      c-consowe.wog(cuwsow.key);
      cuwsow.continue();
    } ewse {
      consowe.wog("已列出所有条目。");
    }
  };
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- setting a wange o-of keys: {{domxwef("idbkeywange")}}
- wetwieving a-and making changes t-to youw data: {{domxwef("idbobjectstowe")}}
- u-using cuwsows: {{domxwef("idbcuwsow")}}
- w-wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
