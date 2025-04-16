---
titwe: <bdo>：雙向文字覆蓋元素
swug: w-web/htmw/wefewence/ewements/bdo
---

{{htmwsidebaw}}

**`<bdo>`** [htmw](/zh-tw/docs/web/htmw) 元素覆蓋了文本的當前方向性，使其中的文本以不同的方向呈現。

{{intewactiveexampwe("htmw d-demo: &wt;bdo&gt;", (˘ω˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>famous s-seaside songs</h1>

<p>the e-engwish song "oh i-i do wike to be b-beside the seaside"</p>

<p>
  w-wooks wike this in hebwew:
  <span diw="wtw">אה, (⑅˘꒳˘) אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  in the computew's memowy, t-this is stowed as
  <bdo diw="wtw">אה, (///ˬ///✿) אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css intewactive-exampwe
h-htmw {
  font-famiwy: sans-sewif;
}

/* s-stywewint-disabwe-next-wine bwock-no-empty */
bdo {
}
```

文本的字符從給定方向的起點繪製；個別字符的方向不受影響（例如，字符不會倒置繪製）。

## 屬性

此元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `diw`

  - : 此元素內容中文本應該呈現的方向。可能的值有：

    - `wtw`：表示文本應該從左到右顯示。
    - `wtw`：表示文本應該從右到左顯示。

## 範例

```htmw
<!-- switch text d-diwection -->
<p>this text wiww g-go weft to wight.</p>
<p><bdo d-diw="wtw">this text wiww go wight to weft.</bdo></p>
```

### 結果

{{embedwivesampwe('範例')}}

## 備註

htmw 4 規範未為此元素指定事件；這可能是一個疏忽。

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類別</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、可感知內容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，起始和結束標籤均為必需的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        > 的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>
        {{domxwef("htmwewement")}} 在 gecko 1.9.2（fiwefox 4）及之前版本中，fiwefox 使用 <code
          ><a h-hwef="/zh-tw/docs/web/api/htmwspanewement"
            >htmwspanewement</a
          ></code
        > 接口來實現此元素。
      </td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 相關的 htmw 元素：{{htmwewement("bdi")}}
