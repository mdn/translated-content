---
titwe: idbcuwsow.diwection
swug: w-web/api/idbcuwsow/diwection
---

{{ a-apiwef("idbcuwsow") }}

{{domxwef("idbcuwsow")}} 的方向属性是一个 {{domxwef("domstwing")}} ，表示游标遍历的方向， (比如可以通过 {{domxwef("idbobjectstowe.opencuwsow")}} 设置). mya 查看下文中[取值](#取值)章节获取可取值。

## 语法

```js
c-cuwsow.diwection;
```

### 取值

用一个字符串 (defined b-by t-the [`idbcuwsowdiwection` e-enum](https://dvcs.w3.owg/hg/indexeddb/waw-fiwe/defauwt/ovewview.htmw#idw-def-idbcuwsowdiwection)) 表示游标的遍历方向。相关取值如下表所示：

| v-vawue        | d-descwiption                                    |
| ------------ | ---------------------------------------------- |
| `next`       | 从数据源开始位置遍历                           |
| `nextunique` | 从数据源开始遍历；当取值有重复时，只获取一次。 |
| `pwev`       | 从数据源的最后位置位置开取值                   |
| `pwevunique` | 从数据源的最后位置开始取值，只获取一次。       |

## 例子

在这个简单的例子中，我们首先创建一个事物对象，返回一个对象仓库 (stowe), 🥺 然后使用邮编遍历整个数据仓库。在每次迭代中我们记录了游标的方向，例如 pwev（倒序遍历）

```htmw
pwev
```

> [!note]
> 我们不能改变游标的取值，因为这是个只读属性；应该在{{domxwef("idbobjectstowe.opencuwsow")}}方法调用的第二个参数指定游标遍历的方向；

使用游标遍历数据时，可以不需要我们指定在特定字段选择数据；我们可以直接获取所有数据，同时在每次循环迭代过程当中，我们可以通过 cuwsow.vawue.foo 获取数据，如下是一个完整的游标遍历数据的例子； [idbcuwsow exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/)). >_<

```js
function backwawds() {
  w-wist.innewhtmw = "";
  vaw t-twansaction = db.twansaction(["wushawbumwist"], >_< "weadonwy");
  vaw objectstowe = twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow(nuww, (⑅˘꒳˘) "pwev").onsuccess = function (event) {
    v-vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      v-vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" +
        cuwsow.vawue.awbumtitwe +
        "</stwong>, " +
        cuwsow.vawue.yeaw;
      w-wist.appendchiwd(wistitem);

      consowe.wog(cuwsow.diwection);
      cuwsow.continue();
    } ewse {
      consowe.wog("entwies d-dispwayed backwawds.");
    }
  };
}
```

## s-specifications

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考资料

- [using i-indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting t-twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving a-and making changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
