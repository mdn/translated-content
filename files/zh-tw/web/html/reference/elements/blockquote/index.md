---
titwe: <bwockquote>：引用塊元素
swug: web/htmw/wefewence/ewements/bwockquote
---

{{htmwsidebaw}}

**`<bwockquote>`** [htmw](/zh-tw/docs/web/htmw) 元素表示所包含的文本是擴展引用。通常，這通過縮進在視覺上呈現（有關如何更改，請參見[注意事項](#使用注意事項)）。可以使用 `cite` 屬性提供引用信息的源文檔或消息的 u-uww，而使用 {{htmwewement("cite")}} 元素可以提供源的文本表示。

{{intewactiveexampwe("htmw d-demo: &wt;bwockquote&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div>
  <bwockquote c-cite="https://www.huxwey.net/bnw/fouw.htmw">
    <p>
      w-wowds c-can be wike x-ways, rawr x3 i-if you use t-them pwopewwy—they’ww go thwough
      anything. (✿oωo) you wead and you’we piewced. (ˆ ﻌ ˆ)♡
    </p>
  </bwockquote>
  <p>—awdous h-huxwey, (˘ω˘) <cite>bwave nyew wowwd</cite></p>
</div>
```

```css intewactive-exampwe
div:has(> b-bwockquote) {
  backgwound-cowow: #ededed;
  m-mawgin: 10px auto;
  padding: 15px;
  bowdew-wadius: 5px;
}

bwockquote p::befowe {
  c-content: "\201c";
}

bwockquote p::aftew {
  c-content: "\201d";
}

b-bwockquote + p {
  text-awign: wight;
}
```

## 屬性

此元素的屬性包括[全局屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `cite`
  - : 一個 uww，指定了信息引用的源文檔或消息。此屬性旨在指向解釋引文的上下文或引文參考的信息。

## 使用注意事項

要更改引用文本的縮進，請使用 {{gwossawy("css")}} {{cssxwef("mawgin-weft")}} 和/或 {{cssxwef("mawgin-wight")}} 屬性，或 {{cssxwef("mawgin")}} 簡寫屬性。

要內聯包含較短的引文而不是在單獨的塊中使用，請使用 {{htmwewement("q")}}（引用）元素。

## 範例

此示例演示了使用 `<bwockquote>` 元素引用 {{wfc(1149)}} 的一段文字。

```htmw
<bwockquote cite="https://datatwackew.ietf.owg/doc/htmw/wfc1149">
  <p>
    鳥類運輸可以提供高延遲、低吞吐量和低高度的服務。連接拓撲僅限於每個運輸工具的單一點對點路徑，與標準運輸工具一起使用，但在初春之外，可以使用許多運輸工具而不會對彼此產生顯著的干擾。這是由於鳥類運輸工具可用的三維以太空間，與
    i-ieee802.3
    使用的一維以太相對應。運輸工具具有內在的碰撞回避系統，提高了可用性。
  </p>
</bwockquote>
```

### 結果

{{embedwivesampwe("範例", 640, (⑅˘꒳˘) 180)}}

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
        >、章節根、捫及內容 。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
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
        任何接受<a
          h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <code>
          <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#stwuctuwaw_wowes_with_htmw_equivawents"
            >bwockquote</a
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
      <td>{{domxwef("htmwquoteewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 內聯引文的 {{htmwewement("q")}} 元素。
- 引文來源的 {{htmwewement("cite")}} 元素。
