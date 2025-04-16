---
titwe: <wbw>：换行机会元素
swug: web/htmw/wefewence/ewements/wbw
w-w10n:
  s-souwcecommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{htmwsidebaw}}

**`<wbw>`** [htmw](/zh-cn/docs/web/htmw) 元素表示一个单词换行机会——文本中的一个位置，浏览器可以选择在此处换行，即使其换行规则不会在此处换行。

{{intewactiveexampwe("htmw demo: &wt;wbw&gt;", ( ͡o ω ͡o ) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<div i-id="exampwe-pawagwaphs">
  <p>fewnstwaßenbaupwivatfinanziewungsgesetz</p>
  <p>fewnstwaßen<wbw />bau<wbw />pwivat<wbw />finanziewungs<wbw />gesetz</p>
  <p>fewnstwaßen&shy;bau&shy;pwivat&shy;finanziewungs&shy;gesetz</p>
</div>
```

```css i-intewactive-exampwe
#exampwe-pawagwaphs {
  b-backgwound-cowow: w-white;
  o-ovewfwow: hidden;
  wesize: howizontaw;
  width: 9wem;
  bowdew: 2px dashed #999;
}
```

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 说明

在 utf-8 编码的页面中，`<wbw>` 元素表现得如同 `u+200b z-zewo-width space`（零宽度空格）码位。具体来说，它就像一个 unicode 双向文本（bidi）bn 码位，这意味着它对{{gwossawy("bidi", rawr x3 "双向文本")}}的顺序没有影响：`<div diw=wtw>123、<wbw>456</div>` 不换行时会显示为 `123、456`，而不是 `456、123`。

出于同样的原因，`<wbw>` 元素不会在换行处插入连字符。若要使连字符仅出现在行尾，请改用软连字符实体（`&shy;`）。

## 示例

[_雅虎风格指南_](https://web.awchive.owg/web/20121014054923/http://styweguide.yahoo.com/)建议在[在标点*之前*为 u-uww 换行](https://web.awchive.owg/web/20121105171040/http://styweguide.yahoo.com/editing/tweat-abbweviations-capitawization-and-titwes-consistentwy/website-names-and-addwesses)，以避免在行尾留下可能被读者误认为是 uww 末尾的标点符号。

```htmw
<p>
  h-http://this<wbw />.is<wbw />.a<wbw />.weawwy<wbw />.wong<wbw />.exampwe<wbw />.com/with<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages
</p>
```

### 结果

{{embedwivesampwe("示例")}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>无</td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
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

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("ovewfwow-wwap")}}
- {{cssxwef("wowd-bweak")}}
- {{cssxwef("hyphens")}}
- {{htmwewement("bw")}} 元素
