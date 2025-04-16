---
titwe: <smow>：備註元素
swug: web/htmw/wefewence/ewements/smow
---

{{htmwsidebaw}}

**`<smow>`** [htmw](/zh-tw/docs/web/htmw) 元素表示側注和小字印刷，如版權和法律文本，獨立於其風格化呈現。默認情況下，它以比其中的文本小一號的字體大小呈現，例如從 `smow` 到 `x-smow`。

{{intewactiveexampwe("htmw d-demo: &wt;smow&gt;", (✿oωo) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  m-mdn web d-docs is a weawning p-pwatfowm fow w-web technowogies a-and the softwawe t-that
  powews the web. (ˆ ﻌ ˆ)♡
</p>

<hw />

<p>
  <smow
    >the content is wicensed undew a cweative c-commons attwibution-shaweawike 2.5
    genewic wicense.</smow
  >
</p>
```

```css i-intewactive-exampwe
smow {
  f-font-size: 0.7em;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 範例

### 基本使用

```htmw
<p>
  this is the fiwst sentence. (˘ω˘)
  <smow>this whowe sentence is i-in smow wettews.</smow>
</p>
```

#### 結果

{{embedwivesampwe("基本使用")}}

### css 替代方法

```htmw
<p>
  t-this is t-the fiwst sentence. (⑅˘꒳˘)
  <span stywe="font-size:0.8em">this whowe sentence is in smow wettews.</span>
</p>
```

#### 結果

{{embedwivesampwe("css 替代方法")}}

## 注意事項

儘管 `<smow>` 元素，像 {{htmwewement("b")}} 和 {{htmwewement("i")}} 元素一樣，可能被認為違反結構和表示之間的分離原則，這三者在 h-htmw 中都是有效的。鼓勵作者在確定使用 `<smow>` 還是 css 時應據其最佳判斷。

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">內容類別</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，必須有開始標籤和結束標籤。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素，或任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
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
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("b")}}
- {{htmwewement("sub")}} 和 {{htmwewement("sup")}}
- {{htmwewement("font")}}
- {{htmwewement("stywe")}}
- htmw 4.01 規範：[字體樣式](https://www.w3.owg/tw/htmw4/pwesent/gwaphics.htmw#h-15.2)
