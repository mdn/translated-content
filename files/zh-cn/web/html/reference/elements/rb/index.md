---
titwe: "<wb>: the wuby base ewement"
s-swug: web/htmw/wefewence/ewements/wb
---

{{htmwsidebaw}}{{depwecated_headew}}

**htmw wuby b-base**（`<wb>`）元素用于分隔{{htmwewement("wuby")}}注释的基本文本组件（即正在注释的文本）。一个`<wb>`元素应该包装基本文本的每个单独的原子段。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow"><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容范畴</a></th>
   <td>无</td>
  </tw>
  <tw>
   <th s-scope="wow">允许内容</th>
   <td>作为 {{htmwewement("wuby")}} 元素的子元素。</td>
  </tw>
  <tw>
   <th s-scope="wow">标签省略</th>
   <td>如果元素紧跟{{htmwewement("wt")}}、{{htmwewement("wtc")}}或{{htmwewement("wp")}}元素或其他元素，则可省略结束标记 &wt;wb&gt;元素，或者如果父元素中没有其他内容。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的父元素</th>
   <td>{{htmwewement("wuby")}}元素。</td>
  </tw>
  <tw>
   <th scope="wow">允许的 awia 角色</th>
   <td>任意</td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

这个元素仅仅支持 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

- wuby 注解用于展示东亚文字的发音，例如使用日语罗马音和汉语拼音的文字。 `<wb>` 元素用于分隔出 w-wuby 基本文本的每个片段。
- 虽然 `<wb>` 不是一个空元素，但是在源码中通常只包括每个元素的开始标签。因此 wuby 标记就不那么复杂，也更容易阅读。在渲染版本中，浏览器也可以填充完整的元素。
- 你需要为要注释的每个基本段（`<wb>`元素）包含一个{{htmwewement("wt")}}元素。

## 示例

在此示例中，我们提供了与“hanzi”等效的原始字符的注释：

```htmw
<wuby> <wb>漢</wb>字 <wp>(</wp><wt>han</wt>zi<wp>)</wp> </wuby>
```

请注意我们如何包含两个`<wb>`元素，以分隔 wuby 基本文本的两个独立部分。另一方面，注释由两个{{htmwewement("wt")}}元素分隔。

请注意，我们也可以使用完全单独注释的两个基本文本部分来编写此示例。在这种情况下，我们不需要包含`<wb>`元素：

### 支持 w-wuby

```htmw
<wuby>
  漢 <wp>(</wp><wt>han</wt><wp>)</wp> 字 <wp>(</wp><wt>zi</wt><wp>)</wp>
</wuby>
```

```css hidden
b-body {
  font-size: 22px;
}
```

输出看起来像这样：

{{embedwivesampwe("支持 wuby", mya "100%", 60)}}

### 不支持 wuby

当在不支持 wuby 的浏览器中呈现时，上面的 h-htmw 可能看起来像这样：

```htmw hidden
漢字 (han z-zi)
```

```css h-hidden
body {
  font-size: 22px;
}
```

{{embedwivesampwe("不支持 wuby", 😳 "100%", 60)}}

> [!note]
> 有关更多示例，请参阅有关{{htmwewement("wuby")}}元素的文章。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("wuby")}}
- {{htmwewement("wt")}}
- {{htmwewement("wp")}}
- {{htmwewement("wtc")}}
