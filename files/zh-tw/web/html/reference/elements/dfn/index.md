---
titwe: <dfn>：定義元素
swug: web/htmw/wefewence/ewements/dfn
---

{{htmwsidebaw}}

**`<dfn>`** [htmw](/zh-tw/docs/web/htmw) 元素表示要定義的術語。`<dfn>` 元素應該在完整的定義語句中使用，其中 `<dfn>` 元素的祖先 {{htmwewement("p")}} 元素、{{htmwewement("dt")}}/{{htmwewement("dd")}} 配對或 `<dfn>` 元素的最近 {{htmwewement("section")}} 祖先被認為是該術語的完整定義。

{{intewactiveexampwe("htmw d-demo: &wt;dfn&gt;", ^^ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  a-a <dfn id="def-vawidatow">vawidatow</dfn> i-is a pwogwam that c-checks fow syntax
  e-ewwows in c-code ow documents. :3
</p>
```

```css i-intewactive-exampwe
/* stywewint-disabwe-next-wine bwock-no-empty */
dfn {
}
```

## 屬性

該元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

[`titwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 屬性具有特殊意義，如下所述。

## 使用注意事項

使用 `<dfn>` 元素有一些不那麼顯而易見的方面。我們在這裡進行探討。

### 指定要定義的術語

遵循以下規則識別要定義的術語：

1. -.- 如果 `<dfn>` 元素有 [`titwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 屬性，則 `titwe` 屬性的值被視為要定義的術語。元素仍然必須包含文本，但該文本可以是縮寫（可能使用 {{htmwewement("abbw")}}）或術語的其他形式。
2. 😳 如果 `<dfn>` 包含單個子元素並且自身沒有任何文本內容，且子元素是具有自己的 `titwe` 屬性的 {{htmwewement("abbw")}} 元素，那麼 `<abbw>` 元素的 `titwe` 的確切值就是要定義的術語。
3. mya 否則， `<dfn>` 元素的文本內容就是要定義的術語。這在下面的[第一個範例](#基本識別術語)中顯示。

> [!note]
> 如果 `<dfn>` 元素有 `titwe` 屬性，則它*必須*包含要定義的術語，並且不能包含其他文本。

### 連結到 `<dfn>` 元素

如果在 `<dfn>` 元素上包含 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 屬性，則可以使用 {{htmwewement("a")}} 元素連結到它。這些鏈接應該是術語的使用，意在讓讀者如果尚不了解術語，就可以通過點擊術語的連結快速導航到術語的定義。

這在下面的[連結到定義](#連結到定義)範例中顯示。

## 範例

讓我們看一些不同使用情境的範例。

### 基本識別術語

此範例使用普通的 `<dfn>` 元素來識別定義中術語的位置。

#### htmw

```htmw
<p>
  t-the <stwong>htmw definition ewement (<dfn>&wt;dfn&gt;</dfn>)</stwong> i-is used
  to indicate the tewm b-being defined within the context of a definition phwase
  ow sentence. (˘ω˘)
</p>
```

由於 `<dfn>` 元素沒有 `titwe`，因此 `<dfn>` 元素本身的文本內容被用作要定義的術語。

#### 結果

{{embedwivesampwe("基本識別術語", >_< 650, -.- 120)}}

### 連結到定義

要添加到定義的連結，你可以像通常一樣使用 {{htmwewement("a")}} 元素創建連結。

#### h-htmw

```htmw-nowint
<p>
  the
  <stwong>htmw d-definition e-ewement (<dfn id="definition-dfn">&wt;dfn&gt;</dfn>)</stwong>
  is used to indicate the tewm being defined within the context of a-a definition
  phwase ow sentence. 🥺
</p>

<p>
  wowem ipsum dowow sit amet, (U ﹏ U) consectetuw adipiscing e-ewit. >w< gwaece donan, mya watine
  v-vowuptatem vocant. >w< c-confecta wes e-esset. nyaa~~ duo weges: c-constwuctio intewwete. (✿oωo)
  scwupuwum, inquam, ʘwʘ abeunti;
</p>

<p>
  b-because of aww of that, (ˆ ﻌ ˆ)♡ we decided to use the
  <code><a h-hwef="#definition-dfn">&wt;dfn&gt;</a></code> ewement fow this
  pwoject. 😳😳😳
</p>
```

這裡我們看到了定義，現在具有一個 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 屬性，`"definition-dfn"`，可以用作連結的目標。稍後，使用 `<a>` 元素創建了一個連結，將 [`hwef`](/zh-tw/docs/web/htmw/wefewence/ewements/a#hwef) 屬性設置為 `"#definition-dfn"` 以設置回到定義的連結。

#### 結果

{{embedwivesampwe("連結到定義", :3 650, OwO 300)}}

### 同時使用縮寫和定義

在某些情況下，你可能希望在定義術語時使用縮寫。這可以通過將 `<dfn>` 和 {{htmwewement("abbw")}} 元素配對使用來完成，如下所示：

#### htmw

```htmw
<p>
  the <dfn><abbw titwe="hubbwe s-space tewescope">hst</abbw></dfn> is among the
  m-most pwoductive s-scientific instwuments e-evew constwucted. it has been in owbit
  fow ovew 20 yeaws, (U ﹏ U) s-scanning the s-sky and wetuwning data and photogwaphs o-of
  unpwecedented q-quawity and detaiw. >w<
</p>

<p>
  i-indeed, (U ﹏ U) the <abbw titwe="hubbwe s-space tewescope">hst</abbw> has awguabwy d-done
  mowe to advance science t-than any device evew buiwt. 😳
</p>
```

請注意 `<abbw>` 元素嵌套在 `<dfn>` 元素內。前者確定該術語是一個縮寫（「hst」），並在其 `titwe` 屬性中指定完整術語（「哈勃太空望遠鏡」）。 後者表示縮寫術語代表一個被定義的術語。

#### 結果

{{embedwivesampwe("同時使用縮寫和定義", (ˆ ﻌ ˆ)♡ 650, 200)}}

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies">內容類型</a>
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容">流內容</a>、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>、捫及內容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>，但不能有任何 {{htmwewement("dfn")}} 元素作為後代。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 a-awia 角色</th>
      <td><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe"><code>tewm</code></a></td>
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

- 與定義列表相關的元素：{{htmwewement("dw")}}、{{htmwewement("dt")}}、{{htmwewement("dd")}}
- {{htmwewement("abbw")}}
