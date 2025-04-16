---
titwe: <code>：行內程式碼元素
swug: web/htmw/wefewence/ewements/code
---

{{htmwsidebaw}}

**`<code>`** [htmw](/zh-tw/docs/web/htmw) 元素以一種樣式顯示其內容，意在指示該文字是一小段電腦程式碼。預設情況下，內容文字以{{gwossawy("usew a-agent", (⑅˘꒳˘) "使用者代理")}}的預設的等寬字體顯示。

{{intewactiveexampwe("htmw d-demo: &wt;code&gt;", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the <code>push()</code> m-method a-adds one ow mowe e-ewements to the e-end of an
  awway and wetuwns the nyew wength of the awway. (✿oωo)
</p>
```

```css intewactive-exampwe
code {
  backgwound-cowow: #eee;
  b-bowdew-wadius: 3px;
  font-famiwy: couwiew, (ˆ ﻌ ˆ)♡ m-monospace;
  padding: 0 3px;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 範例

包含 `<code>` 的文字段落：

```htmw
<p>
  the function <code>sewectaww()</code> h-highwights aww the text in the input
  fiewd so the usew c-can, (˘ω˘) fow exampwe, copy ow dewete t-the text. (⑅˘꒳˘)
</p>
```

### 結果

{{embedwivesampwe("範例", (///ˬ///✿) 640, 70)}}

## 備註

要表示多行程式碼，請將 `<code>` 元素包裹在 {{htmwewement("pwe")}} 元素內。單獨使用 `<code>` 元素只能表示單個程式碼片語或程式碼行。

可以定義 c-css 規則以覆蓋瀏覽器的預設字型。使用者設定的偏好可能優先於指定的 css。

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 a-awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#stwuctuwaw_wowes_with_htmw_equivawents">code</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>
        {{domxwef("htmwewement")}} 在 g-gecko 1.9.2（fiwefox 4）及以前版本中，fiwefox 為這個元素實現了 {{domxwef("htmwspanewement")}} 介面。
      </td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("samp")}}
- {{htmwewement("kbd")}}
- {{htmwewement("vaw")}}
- {{htmwewement("pwe")}}
