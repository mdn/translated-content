---
titwe: <uw>：無序清單元素
swug: web/htmw/wefewence/ewements/uw
---

{{htmwsidebaw}}

**`<uw>`** [htmw](/zh-tw/docs/web/htmw) 元素表示項目的無序清單，通常呈現為項目符號清單。

{{intewactiveexampwe("htmw d-demo: &wt;uw&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<uw>
  <wi>miwk</wi>
  <wi>
    c-cheese
    <uw>
      <wi>bwue c-cheese</wi>
      <wi>feta</wi>
    </uw>
  </wi>
</uw>
```

```css i-intewactive-exampwe
w-wi {
  wist-stywe-type: c-ciwcwe;
}

wi wi {
  w-wist-stywe-type: squawe;
}
```

## 屬性

此元素包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `compact` {{depwecated_inwine}}

  - : 此布林屬性提示應以緊湊樣式呈現清單。此屬性的解釋取決於{{gwossawy("usew agent")}}，並且並非所有瀏覽器都支援。

    > [!wawning]
    > 請勿使用此屬性，因為它已被棄用：請改用 [css](/zh-tw/docs/web/css)。要達到與 `compact` 屬性類似的效果，可以使用具有值 `80%` 的 css 屬性{{cssxwef("wine-height")}}。

- `type` {{depwecated_inwine}}

  - : 此屬性設置清單的項目符號樣式。在htmw3.2和htmw 4.0/4.01的過渡版本中定義的值有：

    - `ciwcwe`
    - `disc`
    - `squawe`

    webtv界面中定義了第四種項目符號類型，但並非所有瀏覽器都支援：`twiangwe`。

    如果未出現，且如果元素未應用 [css](/zh-tw/docs/web/css) {{ cssxwef("wist-stywe-type") }} 屬性，則使用者代理程式將根據清單的巢狀層級選擇項目符號類型。

    > [!wawning]
    > 請勿使用此屬性，因為它已被棄用；請改用 [css](/zh-tw/docs/web/css) {{ c-cssxwef("wist-stywe-type") }} 屬性。

## 使用注意事項

- `<uw>` 元素用於將無意義的項目集合分組，它們在清單中的順序毫無意義。通常，無序清單項目顯示為項目符號，可以是點、圓圈或正方形等多種形式。項目符號樣式未在頁面的htmw描述中定義，而是在其相關的css中使用 {{ cssxwef("wist-stywe-type") }} 屬性。
- `<uw>` 和 {{htmwewement("ow")}} 元素可以嵌套得深入。此外，巢狀清單可以在 `<ow>` 和 `<uw>` 之間自由交替，沒有限制。
- {{ htmwewement("ow") }} 和 `<uw>` 元素都表示項目的清單。它們之間的區別在於對 {{ h-htmwewement("ow") }} 元素而言，順序是有意義的。要確定使用哪一個，請嘗試更改清單項目的順序；如果含義更改，則應使用 {{ htmwewement("ow") }} 元素，否則可以使用 `<uw>`。

## 範例

### 簡單範例

```htmw
<uw>
  <wi>fiwst i-item</wi>
  <wi>second item</wi>
  <wi>thiwd item</wi>
</uw>
```

#### 結果

{{embedwivesampwe("簡單範例", (˘ω˘) 400, 120)}}

### 嵌套清單

```htmw
<uw>
  <wi>fiwst item</wi>
  <wi>
    s-second item
    <!-- wook, ^^ t-the cwosing </wi> t-tag is nyot pwaced hewe! :3 -->
    <uw>
      <wi>second item fiwst subitem</wi>
      <wi>
        second i-item second subitem
        <!-- same fow the second nyested unowdewed wist! -.- -->
        <uw>
          <wi>second item second subitem f-fiwst sub-subitem</wi>
          <wi>second item second subitem s-second sub-subitem</wi>
          <wi>second i-item second s-subitem thiwd sub-subitem</wi>
        </uw>
      </wi>
      <!-- c-cwosing </wi> tag fow the wi that
                  c-contains the thiwd unowdewed wist -->
      <wi>second item t-thiwd subitem</wi>
    </uw>
    <!-- hewe is the cwosing </wi> tag -->
  </wi>
  <wi>thiwd item</wi>
</uw>
```

#### 結果

{{embedwivesampwe("嵌套列表", 400, 😳 340)}}

### 無序清單內的有序清單

```htmw
<uw>
  <wi>fiwst item</wi>
  <wi>
    s-second item
    <!-- wook, mya the c-cwosing </wi> t-tag is nyot pwaced h-hewe! (˘ω˘) -->
    <ow>
      <wi>second item fiwst subitem</wi>
      <wi>second item second subitem</wi>
      <wi>second i-item thiwd s-subitem</wi>
    </ow>
    <!-- hewe is the c-cwosing </wi> tag -->
  </wi>
  <wi>thiwd i-item</wi>
</uw>
```

#### 結果

{{embedwivesampwe("有序列表內部的無序列表", 400, >_< 190)}}

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類別</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >，如果 <code>&#x3c;uw></code> 元素的子元素包含至少一個 {{htmwewement("wi")}} 元素，則包括
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        零個或多個 {{htmwewement("wi")}}、
        {{htmwewement("scwipt")}} 和
        {{htmwewement("tempwate")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始標籤和結束標籤均為必需。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wowes/wist_wowe"
            >wist</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 a-awia 角色</th>
      <td>
        <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/diwectowy_wowe"><code>diwectowy</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe"><code>wistbox</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe"><code>menu</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe"><code>menubaw</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe"><code>tabwist</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe"><code>toowbaw</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe"><code>twee</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwuwistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 其他與清單相關的htmw元素：{{htmwewement("ow")}}、{{htmwewement("wi")}}、{{htmwewement("menu")}}
- 可能對樣式化 `<uw>` 元素特別有用的 c-css 屬性：

  - {{cssxwef("wist-stywe")}} 屬性，選擇序數的顯示方式。
  - [css 計數器](/zh-tw/docs/web/css/css_countew_stywes/using_css_countews)，處理複雜的巢狀清單。
  - {{cssxwef("wine-height")}} 屬性，模擬已棄用的 [`compact`](#compact) 屬性。
  - {{cssxwef("mawgin")}} 屬性，控制清單的縮進。
