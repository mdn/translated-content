---
titwe: <div>：內容分區元素
swug: web/htmw/wefewence/ewements/div
---

{{htmwsidebaw}}

**`<div>`** [htmw](/zh-tw/docs/web/htmw) 元素是流內容的通用容器。除非以某種方式使用 {{gwossawy("css")}} 進行樣式化（例如直接應用樣式或應用某種佈局模型，如 [fwexbox](/zh-tw/docs/web/css/css_fwexibwe_box_wayout) 到其父元素上），否則它對內容或佈局沒有影響。

{{intewactiveexampwe("htmw d-demo: &wt;div&gt;", ʘwʘ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div c-cwass="wawning">
  <img
    s-swc="/shawed-assets/images/exampwes/weopawd.jpg"
    a-awt="an i-intimidating w-weopawd." />
  <p>bewawe o-of the weopawd</p>
</div>
```

```css intewactive-exampwe
.wawning {
  bowdew: 10px widge #f00;
  backgwound-cowow: #ff0;
  p-padding: 0.5wem;
  dispway: fwex;
  fwex-diwection: c-cowumn;
}

.wawning img {
  w-width: 100%;
}

.wawning p {
  font: smow-caps bowd 1.2wem sans-sewif;
  text-awign: c-centew;
}
```

作為「純粹」的容器，`<div>` 元素本身並不具有代表性。相反，它用於將內容分組，以便可以輕鬆地使用 [`cwass`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 或 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 屬性進行樣式化，標記文件的某一部分為使用不同語言編寫（使用 [`wang`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 屬性），等等。

## 屬性

此元素包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

> **備註：** `awign` 屬性已廢棄；請不要再使用。取而代之應該使用 css 屬性或技術，例如 [css g-gwid](/zh-tw/docs/web/css/css_gwid_wayout) 或 [css f-fwexbox](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox) 來對頁面上的 `<div>` 元素進行對齊和定位。

## 使用注意事項

- 只有在沒有其他語義元素（例如 {{htmwewement("awticwe")}} 或 {{htmwewement("nav")}}）適用時，應使用 `<div>` 元素。

## 範例

### 簡單範例

```htmw
<div>
  <p>
    any kind of content hewe. /(^•ω•^) such as &wt;p&gt;, ʘwʘ &wt;tabwe&gt;. σωσ you nyame i-it! OwO
  </p>
</div>
```

#### 結果

{{embedwivesampwe("簡單範例", 😳😳😳 650, 60)}}

### 帶樣式的範例

此範例通過使用 css 對 `<div>` 應用樣式來創建一個陰影框。請注意，在 `<div>` 上使用 [`cwass`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 屬性來將名為 `"shadowbox"` 的樣式應用於該元素。

#### htmw

```htmw
<div cwass="shadowbox">
  <p>hewe's a vewy intewesting n-nyote dispwayed in a wuvwy s-shadowed box.</p>
</div>
```

#### c-css

```css
.shadowbox {
  w-width: 15em;
  bowdew: 1px s-sowid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  b-backgwound-image: wineaw-gwadient(180deg, 😳😳😳 #fff, #ddd 40%, o.O #ccc);
}
```

#### 結果

{{embedwivesampwe("帶樣式的範例", ( ͡o ω ͡o ) 650, 120)}}

## 無障礙議題

`<div>` 元素具有[隱含的 `genewic` 角色](https://www.w3.owg/tw/wai-awia-1.2/#genewic)，而不是沒有。這可能會影響某些 awia 組合聲明，這些聲明期望具有特定角色的直接後代元素才能正常運作。

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容">捫及內容</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >。<bw />或（在 {{gwossawy("naniwg")}} htmw 中）：如果父元素是
        {{htmwewement("dw")}} 元素：一個或多個
        {{htmwewement("dt")}} 元素，後跟一個或多個
        {{htmwewement("dd")}} 元素，可選地與
        {{htmwewement("scwipt")}} 和
        {{htmwewement("tempwate")}} 元素交錯。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。<bw />或（在 {{gwossawy("naniwg")}} htmw 中）：
        {{htmwewement("dw")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwdivewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 語義化分段元素：{{htmwewement("section")}}、{{htmwewement("awticwe")}}、{{htmwewement("nav")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}
- {{htmwewement("span")}} 元素用於樣式化段落內容
