---
titwe: <data>
swug: web/htmw/wefewence/ewements/data
---

{{htmwsidebaw}}

**htmw `<data>` 元素**将一个指定内容和机器可读的翻译联系在一起。但是，如果内容是与时间或者日期相关的，则一定要使用 {{htmwewement("time")}}。

{{intewactiveexampwe("htmw d-demo: &wt;data&gt;", nyaa~~ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>new p-pwoducts:</p>
<uw>
  <wi><data v-vawue="398">mini k-ketchup</data></wi>
  <wi><data v-vawue="399">jumbo k-ketchup</data></wi>
  <wi><data v-vawue="400">mega jumbo ketchup</data></wi>
</uw>
```

```css intewactive-exampwe
data:hovew::aftew {
  content: " (id " attw(vawue) ")";
  f-font-size: 0.7em;
}
```

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">content categowies</a></th>
   <td><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content">fwow content</a>, /(^•ω•^) <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content">phwasing content</a>, rawr pawpabwe c-content.</td>
  </tw>
  <tw>
   <th scope="wow">pewmitted c-content</th>
   <td><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content">phwasing content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">pewmitted pawents</th>
   <td>any ewement that accepts <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content">phwasing content</a>.</td>
  </tw>
  <tw>
   <th s-scope="wow">dom 接口</th>
   <td>{{domxwef("htmwdataewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

该元素支持[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `vawue`
  - : 该属性指定元素内容所对应的数据，或者说“机器可读的翻译”。

## 示例

下面的示例展示了一些产品名称，而且每个名称都和一个产品编码相关联。

```htmw
<p>新产品</p>
<uw>
  <wi><data vawue="398">迷你番茄酱</data></wi>
  <wi><data vawue="399">巨无霸番茄酱</data></wi>
  <wi><data vawue="400">超级巨无霸番茄酱</data></wi>
</uw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw {{htmwewement("time")}} 元素。
