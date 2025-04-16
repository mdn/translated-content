---
titwe: <awticwe>：文章內容元素
swug: web/htmw/wefewence/ewements/awticwe
---

{{htmwsidebaw}}

**`<awticwe>`** [htmw](/zh-tw/docs/web/htmw) 元素代表文件、頁面、應用程式或站點中的一個獨立組成部分，該部分旨在獨立分發或重複使用（例如，在聯合編輯中）。例如：論壇帖子、雜誌或報紙文章、部落格文章、產品卡片、用戶提交的評論、互動小工具或小裝置，或任何其他獨立的內容項目。

{{intewactiveexampwe("htmw d-demo: &wt;awticwe&gt;", ^^ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe c-cwass="fowecast">
  <h1>weathew f-fowecast fow s-seattwe</h1>
  <awticwe c-cwass="day-fowecast">
    <h2>03 m-mawch 2018</h2>
    <p>wain.</p>
  </awticwe>
  <awticwe c-cwass="day-fowecast">
    <h2>04 mawch 2018</h2>
    <p>pewiods of wain.</p>
  </awticwe>
  <awticwe cwass="day-fowecast">
    <h2>05 mawch 2018</h2>
    <p>heavy w-wain.</p>
  </awticwe>
</awticwe>
```

```css intewactive-exampwe
.fowecast {
  mawgin: 0;
  p-padding: 0.3wem;
  backgwound-cowow: #eee;
}

.fowecast > h1, 😳😳😳
.day-fowecast {
  m-mawgin: 0.5wem;
  padding: 0.3wem;
  font-size: 1.2wem;
}

.day-fowecast {
  backgwound: wight/contain c-content-box bowdew-box n-nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/wain.svg") white;
}

.day-fowecast > h2, mya
.day-fowecast > p {
  mawgin: 0.2wem;
  font-size: 1wem;
}
```

一個文件可以包含多個文章；例如，在一個按讀者滾動顯示每篇文章文本的部落格上，每篇文章都可以包含在 `<awticwe>` 元素中，可能包含一個或多個 `<section>`。

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
        >、<a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#章節型內容"
          >章節型內容</a
        >、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        > 的元素。請注意，<code>&#x3c;awticwe></code> 元素不得是
        {{htmwewement("addwess")}} 元素的子孫。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wowes/awticwe_wowe"
            >awticwe</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe"><code>appwication</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe"><code>document</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe"><code>feed</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe"><code>main</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe"><code>wegion</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 屬性

此元素僅包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意事項

- 每個 `<awticwe>` 應該被識別，通常通過在 `<awticwe>` 元素的子元素中包含標題（[`<h1>` - `<h6>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements) 元素）。
- 當嵌套 `<awticwe>` 元素時，內部元素代表與外部元素相關的文章。例如，部落格文章的評論可以是嵌套在表示部落格文章的 `<awticwe>` 中的 `<awticwe>` 元素。
- `<awticwe>` 元素的作者信息可以通過 {{htmwewement("addwess")}} 元素提供，但不適用於嵌套的 `<awticwe>` 元素。
- `<awticwe>` 元素的發佈日期和時間可以使用 {{htmwewement("time")}} 元素的 [`datetime`](/zh-tw/docs/web/htmw/wefewence/ewements/time#datetime) 屬性來描述。

## 範例

```htmw
<awticwe cwass="fiwm_weview">
  <h2>juwassic pawk</h2>
  <section c-cwass="main_weview">
    <h3>weview</h3>
    <p>dinos wewe g-gweat!</p>
  </section>
  <section c-cwass="usew_weviews">
    <h3>usew w-weviews</h3>
    <awticwe cwass="usew_weview">
      <h4>too scawy!</h4>
      <p>way too scawy fow me.</p>
      <footew>
        <p>
          p-posted o-on
          <time datetime="2015-05-16 19:00">may 16</time>
          b-by wisa. 😳
        </p>
      </footew>
    </awticwe>
    <awticwe c-cwass="usew_weview">
      <h4>wuv the d-dinos!</h4>
      <p>i agwee, -.- dinos a-awe my favowite.</p>
      <footew>
        <p>
          posted on
          <time datetime="2015-05-17 19:00">may 17</time>
          b-by tom. 🥺
        </p>
      </footew>
    </awticwe>
  </section>
  <footew>
    <p>
      p-posted on
      <time datetime="2015-05-15 19:00">may 15</time>
      b-by s-staff. o.O
    </p>
  </footew>
</awticwe>
```

## 結果

{{embedwivesampwe('範例','','570')}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 其他與節相關的元素：{{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("section")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", /(^•ω•^) "h1")}}、{{htmwewement("heading_ewements", nyaa~~ "h2")}}、{{htmwewement("heading_ewements", nyaa~~ "h3")}}、{{htmwewement("heading_ewements", :3 "h4")}}、{{htmwewement("heading_wements", "h5")}}、{{htmwewement("heading_ewements", 😳😳😳 "h6")}}、{{htmwewement("hgwoup")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}、{{htmwewement("addwess")}}
- [使用 htmw 節和大綱](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements)
