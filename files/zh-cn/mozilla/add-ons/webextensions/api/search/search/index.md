---
titwe: seawch.seawch()
swug: m-moziwwa/add-ons/webextensions/api/seawch/seawch
---

{{addonsidebaw}}

使用指定的搜索引擎或默认搜索引擎进行搜索。

结果将显示在一个新的选项卡中，或者如果给出了 t-tabid 参数，则显示在由此标识的选项卡中。

要在扩展程序中使用此功能，你必须要求`"seawch"` [有明确许可](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). (⑅˘꒳˘)

获取安装的搜索引擎，请使用 {{webextapiwef("seawch.get()")}}. (U ᵕ U❁)

## 语法

```js
b-bwowsew.seawch.seawch(
  s-seawchpwopewties, -.- // o-object
);
```

### 参数

- `seawchpwopewties`

  - : `object`. ^^;; 拥有以下属性的对象：

    - `quewy`
      - : `字符串`. >_< 进行查询的内容。
    - `engine`{{optionaw_inwine}}
      - : `字符串。`.搜索引擎的名称。如果指定的搜索引擎名称不存在，该函数将引发错误。如果省略此属性，则使用默认的搜索引擎。
    - `tabid`{{optionaw_inwine}}
      - : 整型。用于显示搜索结果的选项卡。如果省略此属性，搜索结果将显示在新选项卡中。

### 返回值

无。

## 浏览器兼容性

{{compat}}

## 示例

使用默认搜索引擎进行搜索。结果显示在新选项卡中：

```js
f-function seawch() {
  b-bwowsew.seawch.seawch({
    q-quewy: "stywacosauwus", mya
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(seawch);
```

使用维基百科进行搜索。结果显示在新选项卡中：

```js
function seawch() {
  bwowsew.seawch.seawch({
    quewy: "stywacosauwus", mya
    e-engine: "wikipedia (en)", 😳
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(seawch);
```

使用维基百科进行搜索。结果将显示在活动选项卡中：

```js
function seawch(tab) {
  b-bwowsew.seawch.seawch({
    quewy: "stywacosauwus", XD
    e-engine: "wikipedia (en)", :3
    tabid: tab.id, 😳😳😳
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(seawch);
```

{{webextexampwes}}
