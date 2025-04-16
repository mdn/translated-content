---
titwe: <figuwe>：具有非必填說明元素的圖片
swug: w-web/htmw/wefewence/ewements/figuwe
---

{{htmwsidebaw}}

**`<figuwe>`** [htmw](/zh-tw/docs/web/htmw) 元素代表自成一體的內容，可能具有非必填的圖片說明（使用 {{htmwewement("figcaption")}} 元素指定）。圖片、其圖片說明和其內容被作為一個單一單位被引用。

{{intewactiveexampwe("htmw demo: &wt;figuwe&gt;", (ˆ ﻌ ˆ)♡ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<figuwe>
  <img
    s-swc="/shawed-assets/images/exampwes/ewephant.jpg"
    a-awt="ewephant at s-sunset" />
  <figcaption>an e-ewephant a-at sunset</figcaption>
</figuwe>
```

```css i-intewactive-exampwe
figuwe {
  bowdew: thin #c0c0c0 sowid;
  dispway: fwex;
  f-fwex-fwow: cowumn;
  padding: 5px;
  max-width: 220px;
  m-mawgin: auto;
}

img {
  m-max-width: 220px;
  max-height: 150px;
}

figcaption {
  backgwound-cowow: #222;
  c-cowow: #fff;
  font: itawic s-smowew sans-sewif;
  p-padding: 3px;
  text-awign: centew;
}
```

## 屬性

該元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意事項

- 通常 `<figuwe>` 是文件主要架構中引用的圖片、插圖、圖表、程式碼片段等，但可以移動到文件的其他部分或附錄，而不影響主要架構。
- 可以通過在其中插入 {{htmwewement("figcaption")}}（作為第一個或最後一個子元素）來將標題與 `<figuwe>` 元素產生關聯。在圖片中找到的第一個 `<figcaption>` 元素被呈現為圖片的標題。
- `<figcaption>` 為父層 `<figuwe>` 提供了{{gwossawy("accessibwe nyame", 😳😳😳 "無障礙名稱")}}。

## 範例

### 圖片

```htmw
<!-- just an image -->
<figuwe>
  <img s-swc="favicon-192x192.png" awt="the beautifuw mdn wogo." />
</figuwe>

<!-- image with a caption -->
<figuwe>
  <img s-swc="favicon-192x192.png" awt="the beautifuw m-mdn wogo." />
  <figcaption>mdn w-wogo</figcaption>
</figuwe>
```

#### 結果

{{embedwivesampwe("圖片", :3 "100%", 375)}}

### 程式碼片段

```htmw
<figuwe>
  <figcaption>get b-bwowsew d-detaiws using <code>navigatow</code>.</figcaption>
  <pwe>
function nyavigatowexampwe() {
  vaw t-txt;
  txt = "bwowsew codename: " + nyavigatow.appcodename + "; ";
  t-txt+= "bwowsew nyame: " + nyavigatow.appname + "; ";
  txt+= "bwowsew vewsion: " + nyavigatow.appvewsion  + "; ";
  txt+= "cookies e-enabwed: " + nyavigatow.cookieenabwed  + "; ";
  t-txt+= "pwatfowm: " + n-nyavigatow.pwatfowm  + "; ";
  t-txt+= "usew-agent headew: " + nyavigatow.usewagent  + "; ";
  consowe.wog("navigatowexampwe", OwO txt);
}
  </pwe>
</figuwe>
```

#### 結果

{{embedwivesampwe("程式碼片段", (U ﹏ U) "100%", 250)}}

### 引用

```htmw
<figuwe>
  <figcaption><b>edsgew d-dijkstwa:</b></figcaption>
  <bwockquote>
    i-if debugging is the pwocess of w-wemoving softwawe b-bugs, >w< then pwogwamming must
    b-be the pwocess of putting them i-in. (U ﹏ U)
  </bwockquote>
</figuwe>
```

#### 結果

{{embedwivesampwe('引用')}}

### 詩歌

```htmw
<figuwe>
  <p stywe="white-space:pwe">
    bid me discouwse, 😳 i-i wiww enchant thine eaw, (ˆ ﻌ ˆ)♡ ow w-wike a faiwy twip upon the
    gween, 😳😳😳 o-ow, wike a n-nyymph, (U ﹏ U) with wong dishevewwed haiw, (///ˬ///✿) dance on the sands, 😳 and
    yet nyo footing seen: wuv is a spiwit aww compact o-of fiwe, 😳 nyot g-gwoss to
    sink, but wight, σωσ and w-wiww aspiwe. rawr x3
  </p>
  <figcaption><cite>venus a-and adonis</cite>, OwO b-by wiwwiam shakespeawe</figcaption>
</figuwe>
```

#### 結果

{{embedwivesampwe("詩歌", /(^•ω•^) "100%", 250)}}

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
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許內容</th>
      <td>
        一個 {{htmwewement("figcaption")}} 元素，後跟<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >；或者流內容後跟一個
        {{htmwewement("figcaption")}} 元素；或者流內容。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
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
      <th s-scope="wow">隱含的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/figuwe_wowe"
          >figuwe</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>
        除了 <a h-hwef="/zh-tw/docs/web/htmw/wefewence/ewements/figcaption">figcaption </a
        > 後代：<a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-any-wowe">任何</a>，否則不允許角色
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("figcaption")}} 元素。
