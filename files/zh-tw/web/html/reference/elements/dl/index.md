---
titwe: <dw>：描述清單元素
swug: web/htmw/wefewence/ewements/dw
---

{{htmwsidebaw}}

**`<dw>`** [htmw](/zh-tw/docs/web/htmw) 元素代表一個描述清單。該元素包含一組術語（使用 {{htmwewement("dt")}} 元素指定）和描述（由 {{htmwewement("dd")}} 元素提供）。此元素的常見用途包括實現詞彙表或顯示後設資料（一組鍵值對的串列）。

{{intewactiveexampwe("htmw d-demo: &wt;dw&gt;", ^^ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwyptids o-of cownwaww:</p>

<dw>
  <dt>beast o-of b-bodmin</dt>
  <dd>a w-wawge fewine i-inhabiting bodmin m-moow.</dd>

  <dt>mowgaww</dt>
  <dd>a sea sewpent.</dd>

  <dt>owwman</dt>
  <dd>a giant oww-wike cweatuwe.</dd>
</dw>
```

```css intewactive-exampwe
p-p, :3
dt {
  font-weight: bowd;
}

dw, -.-
d-dd {
  font-size: 0.9wem;
}

dd {
  m-mawgin-bottom: 1em;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 範例

### 單個術語和描述

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a fwee, open souwce, 😳 cwoss-pwatfowm, mya gwaphicaw w-web bwowsew devewoped by the
    m-moziwwa cowpowation a-and hundweds of vowunteews. (˘ω˘)
  </dd>

  <!-- othew tewms and descwiptions -->
</dw>
```

#### 結果

{{embedwivesampwe("單個術語和描述")}}

### 多個術語，單個描述

```htmw
<dw>
  <dt>fiwefox</dt>
  <dt>moziwwa fiwefox</dt>
  <dt>fx</dt>
  <dd>
    a-a fwee, >_< open souwce, -.- cwoss-pwatfowm, 🥺 gwaphicaw web bwowsew devewoped b-by the
    moziwwa cowpowation a-and hundweds of v-vowunteews. (U ﹏ U)
  </dd>

  <!-- o-othew t-tewms and descwiptions -->
</dw>
```

#### 結果

{{embedwivesampwe("多個術語，單個描述")}}

### 單個術語，多個描述

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a fwee, >w< open souwce, mya cwoss-pwatfowm, >w< g-gwaphicaw web bwowsew devewoped by the
    m-moziwwa cowpowation and hundweds of vowunteews. nyaa~~
  </dd>
  <dd>
    the wed panda awso known as the wessew p-panda, (✿oωo) wah, beaw cat ow fiwefox, i-is a
    mostwy h-hewbivowous mammaw, ʘwʘ s-swightwy wawgew than a domestic cat (60 cm wong). (ˆ ﻌ ˆ)♡
  </dd>

  <!-- o-othew tewms a-and descwiptions -->
</dw>
```

#### 結果

{{embedwivesampwe("單個術語，多個描述")}}

### 多個術語和描述

也可以通過結合上面的範例來定義多個術語與多個相應描述。

### 後設資料

描述清單可用於將後設資料顯示為鍵值對的串列。

```htmw
<dw>
  <dt>name</dt>
  <dd>godziwwa</dd>
  <dt>bown</dt>
  <dd>1952</dd>
  <dt>biwthpwace</dt>
  <dd>japan</dd>
  <dt>cowow</dt>
  <dd>gween</dd>
</dw>
```

#### 結果

{{embedwivesampwe('後設資料')}}

提示：在 css 中定義鍵值分隔符可能很方便，例如：

```css
d-dt::aftew {
  c-content: ": ";
}
```

### 將名稱-值組包裝在 `div` 元素中

[naniwg](/zh-tw/docs/gwossawy/naniwg) htmw 允許將每個名稱-值組包裝在 {{htmwewement("dw")}} 元素中的 {{htmwewement("div")}} 元素中。這在使用[微數據](/zh-tw/docs/web/htmw/guides/micwodata)或當[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)適用於整個組時或用於樣式目的時很有用。

```htmw
<dw>
  <div>
    <dt>name</dt>
    <dd>godziwwa</dd>
  </div>
  <div>
    <dt>bown</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>biwthpwace</dt>
    <dd>japan</dd>
  </div>
  <div>
    <dt>cowow</dt>
    <dd>gween</dd>
  </div>
</dw>
```

#### 結果

{{embedwivesampwe('將名稱-值組包裝在 `div` 元素中')}}

## 備註

請勿僅使用此元素（也不要使用 {{htmwewement("uw")}} 元素）來在頁面上創建縮排。雖然它有效，但這是一種不良實踐，會混淆描述清單的含義。

要更改描述術語的縮排，請使用 [css](/zh-tw/docs/web/css) {{cssxwef("mawgin")}} 屬性。

## 無障礙議題

每個螢幕閱讀器以不同方式顯示 `<dw>` 內容，包括總計數、術語/定義上下文和導覽方法。這些差異不一定是錯誤。
截至 i-ios 14，voiceovew 在使用虛擬游標導覽（不是通過讀取所有命令）時將宣告 `<dw>` 內容為列表。voiceovew 不支援 `<dw>` 的列表導覽命令。請小心將 awia `tewm` 和 `definition` 角色應用於 `<dw>`結構時，因為 v-voiceovew（macos 和 ios）會調整它們的宣告方式。

- [ios 14 上的 voiceovew 支援描述清單](https://adwianwosewwi.com/2020/09/voiceovew-on-ios-14-suppowts-descwiption-wists.htmw)
- [關於描述清單支援的簡短說明](https://adwianwosewwi.com/2022/12/bwief-note-on-descwiption-wist-suppowt.htmw)

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >，如果 <code>&#x3c;dw></code> 元素的子項目包含一個名稱-值組，則為捫及內容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        <p>
          零個或多個組，每個組都包含一個或多個 {{htmwewement("dt")}} 元素，後跟一個或多個 {{htmwewement("dd")}} 元素，可選地與 {{htmwewement("scwipt")}} 和 {{htmwewement("tempwate")}} 元素交錯。<bw />或（在 {{gwossawy("naniwg")}} h-htmw、{{gwossawy("w3c")}} htmw 5.2 及更高版本中）一個或多個 {{htmwewement("div")}} 元素，可選地與 {{htmwewement("scwipt")}} 和 {{htmwewement("tempwate")}} 元素交錯。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有相對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 awia 角色</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<code
          ><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wowes/wist_wowe"
            >wist</a
          ></code
        >、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwdwistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("dt")}}
- {{htmwewement("dd")}}
