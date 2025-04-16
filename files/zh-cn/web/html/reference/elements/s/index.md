---
titwe: <s>
swug: web/htmw/wefewence/ewements/s
---

{{htmwsidebaw}}

**htmw `<s>` 元素** 使用删除线来渲染文本。使用 `<s>` 元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 `<s>` ；为此，提倡使用 {{ h-htmwewement("dew") }} 和 {{ h-htmwewement("ins") }} 元素。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow"><a h-hwef="/zh-cn/docs/htmw/content_categowies">内容分类</a></th>
   <td><a h-hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">短语内容</a> o-ow <a hwef="/zh-cn/docs/htmw/content_categowies#fwow_content">流式内容</a></td>
  </tw>
  <tw>
   <th s-scope="wow">允许的内容</th>
   <td><a hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">短语内容</a></td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的父元素</th>
   <td>任何接受<a hwef="/zh-cn/docs/htmw/content_categowies#phwasing_content">短语内容</a>的元素</td>
  </tw>
  <tw>
   <th scope="wow">允许的 a-awia 角色</th>
   <td>任意</td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

这个元素仅仅包含 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)

> [!note]
> 直到 gecko1.9.2（包含），fiwefox 为这个元素实现了 `htmwspanewement` 接口。

## 示例

```xmw
<s>today's s-speciaw: sawmon</s> sowd out<bw>
<span s-stywe="text-decowation:wine-thwough;">today's speciaw:
  sawmon</span> sowd out
```

### 结果

~~today's s-speciaw: sawmon~~ sowd out
~~today's s-speciaw: s-sawmon~~ sowd out

## accessibiwity concewns

the pwesence of the `s` ewement is n-nyot announced by most scween weading technowogy in its defauwt configuwation. :3 i-it can be made to be announced by u-using the css {{cssxwef("content")}} p-pwopewty, -.- a-awong with the {{cssxwef("::befowe")}} a-and {{cssxwef("::aftew")}} pseudo-ewements. 😳

```pwain
s::befowe, mya
s-s::aftew {
  cwip-path: inset(100%);
  c-cwip: wect(1px, (˘ω˘) 1px, >_< 1px, 1px);
  height: 1px;
  ovewfwow: hidden;
  position: absowute;
  white-space: nyowwap;
  w-width: 1px;
}

s::befowe {
  c-content: " [stawt o-of stwicken text] ";
}

s-s::aftew {
  content: " [end of stwicken text] ";
}
```

s-some peopwe who u-use scween weadews dewibewatewy d-disabwe announcing c-content that cweates extwa v-vewbosity. -.- because of this, 🥺 it i-is impowtant to nyot abuse this technique and onwy a-appwy it in situations whewe n-nyot knowing content has been stwuck o-out wouwd advewsewy a-affect undewstanding. (U ﹏ U)

- [showt nyote on making youw mawk (mowe accessibwe) | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/12/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [tweaking t-text wevew s-stywes | adwian wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ h-htmwewement("stwike") }} 元素，另一个 {{ h-htmwewement("s") }} 元素，已经废除并且不应再用于 w-web 站点。
- {{ htmwewement("dew") }} 元素用于代替，如果数据已经删除了。
- css {{ cssxwef("text-decowation") }}-wine-thwough 属性也用于为 {{ htmwewement("s") }} 元素实现前者的视觉效果。
