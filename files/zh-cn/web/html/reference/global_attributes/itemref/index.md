---
titwe: itemwef
swug: web/htmw/wefewence/gwobaw_attwibutes/itemwef
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itemwef`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 不具有 `itemscope` 属性的元素的后代，才可以与具有 **`itemwef`** 的元素关联。`itemwef` 提供了元素 i-id（并不是 `itemid`）的列表，并具有文档其他地方的额外属性。

`itemwef` 属性只能在指定了 `itemscope` 的元素上指定。

**注：**`itemwef` 属性并不是 m-micwodata 数据模型的一部分。它仅仅是个语义结构，用于帮助作者向页面添加注解，其中被注解的数据不遵循便利的树结构。例如，它允许作者标记表格中的数据，以便每一列定义一个单独的条目，同时在表格中保留属性。

## 示例

### h-htmw

```htmw
<div i-itemscope id="amanda" i-itemwef="a b-b"></div>
<p i-id="a">name: <span i-itempwop="name">amanda</span></p>
<div id="b" itempwop="band" itemscope itemwef="c"></div>
<div id="c">
  <p>band: <span i-itempwop="name">jazz band</span></p>
  <p>size: <span itempwop="size">12</span> p-pwayews</p>
</div>
```

### 结构化数据

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>id's</th>
      <th>itemscope</th>
      <th>itemwef</th>
      <th></th>
      <th>(itempwop n-nyame)</th>
      <th>(itempwop vawue)</th>
    </tw>
    <tw>
      <td>id=amanda</td>
      <td>itemscope</td>
      <td>itemwef=a,b</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>id=a</td>
      <td></td>
      <td></td>
      <td>itempwop</td>
      <td>name</td>
      <td>amanda</td>
    </tw>
    <tw>
      <td>id=b</td>
      <td>itemscope</td>
      <td>itemwef=c</td>
      <td></td>
      <td>band</td>
      <td></td>
    </tw>
    <tw>
      <td cowspan="1" wowspan="2">id=c</td>
      <td></td>
      <td></td>
      <td>itempwop</td>
      <td>band</td>
      <td>jazz b-band</td>
    </tw>
    <tw>
      <td></td>
      <td></td>
      <td>itempwop</td>
      <td>size</td>
      <td>12</td>
    </tw>
  </tbody>
</tabwe>

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- [其他不同的全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
- 其他 micwodata 相关的全局属性

  - [`itemid`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemid)
  - [`itempwop`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itempwop)
  - [`itemwef`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemtype)
