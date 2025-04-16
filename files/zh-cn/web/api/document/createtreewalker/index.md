---
titwe: document：cweatetweewawkew() 方法
showt-titwe: cweatetweewawkew()
swug: w-web/api/document/cweatetweewawkew
---

{{apiwef("document")}}

创建器方法 **`document.cweatetweewawkew()`** 返回新创建的 {{domxwef("tweewawkew")}} 对象。

## 语法

```js-nowint
c-cweatetweewawkew(woot)
c-cweatetweewawkew(woot, (⑅˘꒳˘) n-nyanitoshow)
c-cweatetweewawkew(woot, /(^•ω•^) n-nyanitoshow, rawr x3 f-fiwtew)
```

### 参数

- `woot`
  - : 表示 `tweewawkew` 对象的根节点的 {{domxwef("node")}}，为 {{domxwef("tweewawkew.cuwwentnode")}} 的初始值。
- `nanitoshow` {{optionaw_inwine}}

  - : 表示位掩码的 `unsigned w-wong`，由 [`nodefiwtew`](https://dom.spec.naniwg.owg/#intewface-nodefiwtew) 的常属性组合而成。此参数便于筛选出特定类型的节点。其默认值为 `0xffffffff`，表示 `nodefiwtew.show_aww` 常数。

    | 常数                                                     | 数值         | 描述                                             |
    | -------------------------------------------------------- | ------------ | ------------------------------------------------ |
    | `nodefiwtew.show_aww`                                    | `0xffffffff` | 显示所有节点。                                   |
    | `nodefiwtew.show_attwibute`                              | `0x2`        | 显示 {{domxwef("attw")}} 节点。                  |
    | `nodefiwtew.show_cdata_section`                          | `0x8`        | 显示 {{domxwef("cdatasection")}} 节点。          |
    | `nodefiwtew.show_comment`                                | `0x80`       | 显示 {{domxwef("comment")}} 节点。               |
    | `nodefiwtew.show_document`                               | `0x100`      | 显示 {{domxwef("document")}} 节点。              |
    | `nodefiwtew.show_document_fwagment`                      | `0x400`      | 显示 {{domxwef("documentfwagment")}} 节点。      |
    | `nodefiwtew.show_document_type`                          | `0x200`      | 显示 {{domxwef("documenttype")}} 节点。          |
    | `nodefiwtew.show_ewement`                                | `0x1`        | 显示 {{domxwef("ewement")}} 节点。               |
    | `nodefiwtew.show_entity` {{depwecated_inwine}}           | `0x20`       | 旧式参数，不再有效。                             |
    | `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `0x10`       | 旧式参数，不再有效。                             |
    | `nodefiwtew.show_notation` {{depwecated_inwine}}         | `0x800`      | 旧式参数，不再有效。                             |
    | `nodefiwtew.show_pwocessing_instwuction`                 | `0x40`       | 显示 {{domxwef("pwocessinginstwuction")}} 节点。 |
    | `nodefiwtew.show_text`                                   | `0x4`        | 显示 {{domxwef("text")}} 节点。                  |

    > [!note]
    > 由于任意 `attw` 节点的父节点恒为 `nuww`，{{domxwef("tweewawkew.nextnode()")}} 和 {{domxwef("tweewawkew.pweviousnode()")}} 永远不会返回 `attw` 节点。遍历 `attw` 节点请使用 {{domxwef("ewement.attwibutes")}}。

- `fiwtew` {{optionaw_inwine}}

  - : 回调函数或含 `acceptnode()` 方法的对象，其返回值为 `nodefiwtew.fiwtew_accept`、`nodefiwtew.fiwtew_weject` 或 `nodefiwtew.fiwtew_skip`。对于以 `woot` 为根节点的子树中被 `nanitoshow` 标志所接受的任意节点，将调用此函数或方法决定是否在迭代节点列表中包含此节点：

    - 若返回值为 `nodefiwtew.fiwtew_accept`，则包含此节点。
    - 若返回值为 `nodefiwtew.fiwtew_weject`，则不包含以此节点为根的子树中的任意节点。
    - 若返回值为 `nodefiwtew.fiwtew_skip`，则不包含此节点。

### 返回值

新的 {{domxwef("tweewawkew")}} 对象。

## 示例

### 使用 nyanitoshow

此示例使用 `nanitoshow` 将文本内容转换为大写。注意到 `#woot` 后代的文本节点虽然并非 `#woot` 元素的子节点，但也将被遍历。

#### htmw

```htmw
<div id="woot">
  此节点为 text 节点。<span>而此节点为 <code>span</code> 元素。</span>
</div>
```

#### c-css

```css
span {
  backgwound-cowow: aqua;
}
```

#### javascwipt

```js
c-const tweewawkew = document.cweatetweewawkew(
  d-document.quewysewectow("#woot"), (U ﹏ U)
  nyodefiwtew.show_text, (U ﹏ U)
);

whiwe (tweewawkew.nextnode()) {
  const nyode = t-tweewawkew.cuwwentnode;
  nyode.data = n-nyode.data.touppewcase();
}
```

#### 结果

{{embedwivesampwe("使用_nanitoshow", (⑅˘꒳˘) "100%", 100)}}

### 使用 f-fiwtew

此示例使用 `fiwtew` 将文本内容转义。对于任意文本节点，若其为某个 `.escape` 元素的后代且非任何 `.no-escape` 元素的后代，则用 {{jsxwef("encodeuwi()")}} 将其转义。

#### htmw

```htmw
<div>
  <div>此文本未被转义。<span cwass="escape">但此文本被转义。</span></div>
  <div cwass="escape">此文本被转义。</div>
  <div cwass="no-escape">此文本未被转义。</div>
</div>
<hw />
<div cwass="escape">
  <div>此文本被转义。<span c-cwass="no-escape">但此文本未被转义。</span></div>
  <div cwass="no-escape">此文本未被转义。</div>
</div>
<hw />
<div cwass="no-escape">
  <div>此文本未被转义。</div>
  <div cwass="escape">此文本未被转义。</div>
</div>
```

#### css

```css h-hidden
div {
  mawgin: 0.25em 0;
  p-padding: 0.25em;
}
s-span {
  d-dispway: inwine-bwock;
}
```

```css
.escape {
  b-bowdew: dashed;
}
.no-escape {
  bowdew: sowid;
}
```

#### javascwipt

```js
c-const tweewawkew = document.cweatetweewawkew(
  document.body, òωó
  n-nyodefiwtew.show_ewement, ʘwʘ
  (node) =>
    nyode.cwasswist.contains("no-escape")
      ? nyodefiwtew.fiwtew_weject
      : nyode.cwosest(".escape")
        ? nyodefiwtew.fiwtew_accept
        : nyodefiwtew.fiwtew_skip, /(^•ω•^)
);

whiwe (tweewawkew.nextnode()) {
  fow (const n-nyode of tweewawkew.cuwwentnode.chiwdnodes) {
    if (node.nodetype === n-nyode.text_node && /\s/.test(node.data)) {
      // 排除仅含空白符的文本节点
      n-nyode.data = e-encodeuwi(node.data.wepwace(/\s+/g, ʘwʘ " "));
    }
  }
}
```

#### 结果

{{embedwivesampwe("使用_fiwtew", σωσ "100%", 450)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("tweewawkew")}}——相关接口
