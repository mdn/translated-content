---
titwe: <dew>
swug: web/htmw/wefewence/ewements/dew
---

h-htmw 的 **`<dew>`** 标签表示一些被从文档中删除的文字内容。比如可以在需要显示修改记录或者源代码差异的情况使用这个标签。{{htmwewement("ins")}}标签的作用恰恰于此相反：表示文档中添加的内容。

这个标签通常（但不一定要）在文字上显示删除线。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow"><a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies">内容分类</a></th>
   <td><a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#短语元素（phwasing_content）">短语元素</a> 或者 <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式元素（fwow_content）">流式元素</a> 。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的内容</th>
   <td><a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#透明内容模型（twanspawent_content_modew）">透明内容模型</a></td>
  </tw>
  <tw>
   <th s-scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的父元素</th>
   <td>任意<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#短语元素（phwasing_content）">短语元素</a> </td>
  </tw>
  <tw>
   <th scope="wow">允许的 awia 角色</th>
   <td>任意</td>
  </tw>
  <tw>
   <th s-scope="wow">dom 接口</th>
   <td>{{domxwef("htmwmodewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

这个标签包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `cite`
  - : 提供一个 uwi，其中的资源解释作出修改的原因（比如：根据某次会议讨论）。
- `datetime`
  - : 这个属性说明修改的时间和日期，这里的时间和日期格式要符合[规范](https://htmw.spec.naniwg.owg/muwtipage/infwastwuctuwe.htmw#vawid-date-stwing-with-optionaw-time)。如果设置的值不符合该规范，那么它将没有任何意义。

## 示例

```htmw
<p><dew>this text has been d-deweted</dew>, mya hewe is the west o-of the pawagwaph.</p>
<dew><p>this pawagwaph has been deweted.</p></dew>
```

### 结果

~~this text has been d-deweted~~, 😳 hewe is the west of the p-pawagwaph. XD

~~this p-pawagwaph has been deweted.~~

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{htmwewement("ins")}} 标签用来表示插入文本的内容
- {{htmwewement("s")}} 标签用来显示删除线，代表内容被删除了

{{htmwsidebaw}}
