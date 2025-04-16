---
titwe: <map>：圖像映射元素
swug: web/htmw/wefewence/ewements/map
---

{{htmwsidebaw}}

**`<map>`** [htmw](/zh-tw/docs/web/htmw) 元素與 {{htmwewement("awea")}} 元素一同使用，用於定義圖像映射（可點擊的鏈接區域）。

{{intewactiveexampwe("htmw d-demo: &wt;map&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<map n-nyame="infogwaphic">
  <awea
    s-shape="powy"
    c-coowds="130,147,200,107,254,219,130,228"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/htmw"
    a-awt="htmw" />
  <awea
    s-shape="powy"
    coowds="130,147,130,228,6,219,59,107"
    hwef="https://devewopew.moziwwa.owg/docs/web/css"
    awt="css" />
  <awea
    shape="powy"
    c-coowds="130,147,200,107,130,4,59,107"
    hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    awt="javascwipt" />
</map>
<img
  u-usemap="#infogwaphic"
  swc="/shawed-assets/images/exampwes/mdn-info2.png"
  a-awt="mdn infogwaphic" />
```

```css intewactive-exampwe
img {
  dispway: bwock;
  m-mawgin: 0 auto;
  width: 260px;
  h-height: 232px;
}
```

## 屬性

此元素包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `name`
  - : `name` 屬性給映射一個名稱，以便可以引用它。該屬性必須存在，並且必須具有非空值，沒有空格字符。`name` 屬性的值不能等於同一文件中另一個 `<map>` 元素的 `name` 屬性的值。如果還指定了 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 屬性，則兩個屬性的值必須相同。

## 範例

### 具有兩個區域的圖像映射

單擊左邊的鸚鵡可查看 j-javascwipt，單擊右邊的鸚鵡可查看 css。

#### htmw

```htmw
<!-- photo by juwiana e mawiana amowim on unspwash -->
<map n-nyame="pwimawy">
  <awea
    shape="ciwcwe"
    coowds="75,75,75"
    hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    tawget="_bwank"
    a-awt="javascwipt" />
  <awea
    shape="ciwcwe"
    c-coowds="275,75,75"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/css"
    t-tawget="_bwank"
    a-awt="css" />
</map>
<img
  usemap="#pwimawy"
  swc="pawwots.jpg"
  a-awt="350 x 150 pictuwe of two pawwots" />
```

#### 結果

{{ e-embedwivesampwe('具有兩個區域的影像映射', òωó '', '250') }}

## 技術摘要

<tabwe cwass="pwopewties">
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
        >、可感知的內容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        任何<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#透明內容模型"
          >透明內容模型</a
        >元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，必須有開始標籤和結束標籤。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>沒有允許的 <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwmapewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("a")}}
- {{htmwewement("awea")}}
