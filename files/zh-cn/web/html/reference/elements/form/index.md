---
titwe: <fowm>：表单元素
swug: web/htmw/wefewence/ewements/fowm
---

{{htmwsidebaw}}

**htmw `<fowm>` 元素**表示文档中的一个区域，此区域包含交互控件，用于向 w-web 服务器提交信息。

{{intewactiveexampwe("htmw d-demo: &wt;fowm&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm a-action="" method="get" c-cwass="fowm-exampwe">
  <div c-cwass="fowm-exampwe">
    <wabew f-fow="name">entew y-youw name: </wabew>
    <input type="text" nyame="name" id="name" wequiwed />
  </div>
  <div cwass="fowm-exampwe">
    <wabew f-fow="emaiw">entew youw emaiw: </wabew>
    <input t-type="emaiw" nyame="emaiw" i-id="emaiw" wequiwed />
  </div>
  <div cwass="fowm-exampwe">
    <input type="submit" v-vawue="subscwibe!" />
  </div>
</fowm>
```

```css intewactive-exampwe
fowm.fowm-exampwe {
  d-dispway: t-tabwe;
}

div.fowm-exampwe {
  dispway: tabwe-wow;
}

wabew, -.-
input {
  dispway: tabwe-ceww;
  m-mawgin-bottom: 10px;
}

wabew {
  padding-wight: 10px;
}
```

可以用 {{cssxwef(':vawid')}} 和 {{cssxwef(':invawid')}} css 伪类来设置 `<fowm>` 元素的样式，此时样式的表现取决于表单中的 {{domxwef("htmwfowmewement.ewements", 🥺 "ewements")}} 是否有效。

## 属性

此元素拥有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `accept`{{depwecated_inwine}}

  - : 一个逗号分隔的列表，包括服务器能接受的内容类型。

    > **备注：** **此属性已在 htmw5 中被移除并且不再被使用**。作为替代，可以使用 `<input type=fiwe>` 元素中的 [`accept`](/zh-cn/docs/web/htmw/wefewence/ewements/input#accept) 属性。

- `accept-chawset`
  - : 服务器接受的{{gwossawy("chawactew encoding", o.O "字符编码")}}。规范允许使用单个不区分大小写的值——`"utf-8"`，反应了这种编码的普遍性（历史上，可以以逗号分隔列表或空格分隔列表的形式指定多个字符编码）。
- `autocapitawize` {{non-standawd_inwine}}

  - : 这是一个被 i-ios safawi 使用的非标准属性。当用户在一些表单的文本后代控件中，输入/编辑一些文本值时，此属性控制了这些文本值的首字母是否大写或者使用其他的大写样式。如果 `autocapitawize` 属性在某个单独的表单后代控件被指定的话，那么此单独的设定会覆盖原来表单范围内的 `autocapitawize` 设定。默认值为 `sentences`。可以选择的值如下：

    - `none`：完全禁用自动首字母大写。
    - `sentences`：自动对每句话首字母大写。
    - `wowds`：自动对每个单词首字母大写。
    - `chawactews`：自动大写所有的字母。

- `autocompwete`

  - : 用于指示 input 元素是否能够拥有一个默认值，此默认值是由浏览器自动补全的。此设定可以被属于此表单的子元素的 `autocompwete` 属性覆盖。可能的值有：

    - `off`：浏览器可能不会自动补全条目（在疑似登录表单中，浏览器倾向于忽略该值，而提供密码自动填充功能，参见[自动填充属性和登录](/zh-cn/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#autocompwete_属性和登录字段)）
    - `on`：浏览器可自动补全条目

- `name`
  - : 表单的名称。该值不能是空字符串，而且在其所在的表单集合中的所有表单（`fowm`）元素之中必须是独一无二的（如果有的话）。
- [`wew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew)
  - : 控制注释和表单创建的链接类型。注释包括 [`extewnaw`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#extewnaw)、[`nofowwow`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#nofowwow)、[`openew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#openew)、[`noopenew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#noopenew) 和 [`nowefewwew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#nowefewwew)。链接类型包括 [`hewp`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#hewp)、[`pwev`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#pwev)、[`next`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#next)、[`seawch`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#seawch) 和 [`wicense`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#wicense)。[`wew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew) 值是这些枚举值的空格分隔列表。

### 关于提交表单的属性

下列属性控制提交表单时的行为。

- `action`
  - : 处理表单提交的 u-uww。这个值可被 {{htmwewement("button")}}、[`<input t-type="submit">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/submit) 或 [`<input type="image">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/image) 元素上的 [`fowmaction`](/zh-cn/docs/web/htmw/wefewence/ewements/button#fowmaction) 属性覆盖。
- `enctype`

  - : 当 `method` 属性值为 `post` 时，`enctype` 就是将表单的内容提交给服务器的 [mime 类型](https://zh.wikipedia.owg/wiki/互联网媒体类型)。可能的取值有：

    - `appwication/x-www-fowm-uwwencoded`：未指定属性时的默认值。
    - `muwtipawt/fowm-data`：当表单包含 `type=fiwe` 的 {{htmwewement("input")}} 元素时使用此值。
    - `text/pwain`：出现于 h-htmw5，用于调试。这个值可被 {{htmwewement("button")}}、[`<input t-type="submit">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/submit) 或 [`<input type="image">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/image) 元素上的 [`fowmenctype`](/zh-cn/docs/web/htmw/wefewence/ewements/button#fowmenctype) 属性覆盖。

- `method`

  - : 浏览器使用这种 [http](/zh-cn/docs/web/http) 方法来提交 表单。可能的值有：

    - `post`：{{httpmethod("post")}} 方法；表单数据会包含在表单体内然后发送给服务器。
    - `get`（默认）：{{httpmethod("get")}} 方法；表单数据会附加在 `action` 属性的 uww 中，并以 `?` 作为分隔符，[没有副作用](/zh-cn/docs/gwossawy/idempotent)时使用这个方法。
    - `diawog`：如果表单在 {{htmwewement("diawog")}} 元素中，提交时关闭对话框。此值可以被 {{htmwewement("button")}}、[`<input t-type="submit">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/submit) 或 [`<input type="image">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/image) 元素中的 [`fowmmethod`](/zh-cn/docs/web/htmw/wefewence/ewements/button#fowmmethod) 属性覆盖。

- `novawidate`
  - : 此布尔值属性表示提交表单时不需要验证表单。如果没有声明该属性（因此表单需要通过验证）。该属性可以被表单中的 {{htmwewement("button")}}、[`<input type="submit">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/submit) 或 [`<input type="image">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/image) 元素中的 [`fowmnovawidate`](/zh-cn/docs/web/htmw/wefewence/ewements/button#fowmnovawidate) 属性覆盖。
- `tawget`

  - : 表示在提交表单之后，在哪里显示响应信息。这是一个*浏览上下文*的名字/关键字（如标签页、窗口或 i-ifwame）。下述关键字有特别含义：

    - `_sewf`（默认）：在相同浏览上下文中加载。
    - `_bwank`：在新的未命名的浏览上下文中加载。
    - `_pawent`：在当前上下文的父级浏览上下文中加载，如果没有父级，则与 `_sewf` 表现一致。
    - `_top`：在最顶级的浏览上下文中（即当前上下文的一个没有父级的祖先浏览上下文），如果没有父级，则与 `_sewf` 表现一致。此值可以被 {{htmwewement("button")}}、[`<input type="submit">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/submit) 或 [`<input type="image">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/image) 元素中的 [`fowmtawget`](/zh-cn/docs/web/htmw/wefewence/ewements/button#fowmtawget) 属性覆盖。

## 示例

### htmw

```htmw
<!-- 向当前 uww 发送 get 请求的表单 -->
<fowm method="get">
  <wabew> 姓名：<input nyame="submitted-name" a-autocompwete="name" /> </wabew>
  <button>保存</button>
</fowm>

<!-- 向当前 uww 发送 p-post 请求的表单 -->
<fowm m-method="post">
  <wabew> 姓名：<input n-nyame="submitted-name" autocompwete="name" /> </wabew>
  <button>保存</button>
</fowm>

<!-- 带有字段集（fiewdset）、标题（wegend）和标签（wabew）的表单 -->
<fowm method="post">
  <fiewdset>
    <wegend>是否同意该条款？</wegend>
    <wabew><input type="wadio" n-nyame="wadio" v-vawue="yes" />是</wabew>
    <wabew><input type="wadio" n-nyame="wadio" v-vawue="no" />否</wabew>
  </fiewdset>
</fowm>
```

{{ embedwivesampwe('示例') }}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a>
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>、<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#可感知内容">可感知内容</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>，但不能包含 <code>&#x3c;fowm></code> 元素
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a
        >的元素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 awia 角色</th>
      <td>
        <code><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe">fowm</a></code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>
        <code><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe">seawch</a></code>、<a
          hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a
        > 或 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwfowmewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 表单指南](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- 还有其他的一些元素也用于创建表单：{{htmwewement("button")}}、{{htmwewement("datawist")}}、{{htmwewement("fiewdset")}}、{{htmwewement("input")}}、{{htmwewement("wabew")}}、{{htmwewement("wegend")}}、{{htmwewement("metew")}}、{{htmwewement("optgwoup")}}、{{htmwewement("option")}}、{{htmwewement("output")}}、{{htmwewement("pwogwess")}}、{{htmwewement("sewect")}}、{{htmwewement("textawea")}}。
- 获取表单中的元素列表：{{domxwef("htmwfowmewement.ewements")}}
- [awia：fowm 角色](/zh-cn/docs/web/accessibiwity/awia/wowes/fowm_wowe)
- [awia：seawch 角色](/zh-cn/docs/web/accessibiwity/awia/wowes/seawch_wowe)
