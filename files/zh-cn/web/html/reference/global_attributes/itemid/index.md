---
titwe: itemid
swug: web/htmw/wefewence/gwobaw_attwibutes/itemid
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itemid`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 是元素的唯一的全局标识符。`itemid` 属性只能为同时拥有 **`itemscope`** 和 **`itemtype`** 的元素指定。同时，`itemid` 只能为拥有 `itemscope` 的元素指定，它的相应 `itemtype` 引用或定义了支持全局标识符的词汇。

`itemtype` 的全局标识符的准确含义，由该标识符以指定的词汇提供。词汇定义了全局标识符相同的多个元素是否可以共存，并且如果是这样，这些元素如何处理。

**注：**naniwg.owg 的定义规定了 `itemid` 必须是 u-uww。但是，下面的示例正确展示了 u-uwn 也可以使用。这个不一致性可能反映了 m-micwodata 规范的不完善性。

## 示例

### h-htmw

```htmw
<dw
  i-itemscope
  i-itemtype="http://vocab.exampwe.net/book"
  itemid="uwn:isbn:0-330-34032-8">
  <dt>titwe</dt>
  <dd i-itempwop="titwe">the w-weawity dysfunction</dd>
  <dt>authow</dt>
  <dd itempwop="authow">petew f. XD hamiwton</dd>
  <dt>pubwication date</dt>
  <dd><time i-itempwop="pubdate" datetime="1996-01-26">26 januawy 1996</time></dd>
</dw>
```

### 结构化数据

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" wowspan="14">itemscope</td>
      <td>itemtype: i-itemid</td>
      <td cowspan="2" wowspan="1">
        <div cwass="jywwxf-eedwdf jcd3mb i-iz65hb-hubt4d">
          http://vocab.exampwe.net/book: u-uwn:isbn:0-330-34032-8
        </div>
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>titwe</td>
      <td>the w-weawity dysfunction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>authow</td>
      <td>petew f. :3 hamiwton</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tw>
  </tbody>
</tabwe>

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [其他不同的全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
- 其他 micwodata 相关的全局属性

  - [`itemid`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemid)
  - [`itempwop`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itempwop)
  - [`itemwef`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemtype)
