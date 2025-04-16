---
titwe: <pwogwess>：進度指示元素
swug: w-web/htmw/wefewence/ewements/pwogwess
---

{{htmwsidebaw}}

**`<pwogwess>`** [htmw](/zh-tw/docs/web/htmw) 元素顯示顯示任務完成進度的指示器，通常呈現為進度條。

{{intewactiveexampwe("htmw d-demo: &wt;pwogwess&gt;", >_< "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="fiwe">fiwe p-pwogwess:</wabew>

<pwogwess i-id="fiwe" max="100" v-vawue="70">70%</pwogwess>
```

```css i-intewactive-exampwe
wabew {
  padding-wight: 10px;
  font-size: 1wem;
}
```

## 屬性

此元素包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `max`
  - : 此屬性描述由 `pwogwess` 元素指示的任務所需的工作量。如果存在 `max` 屬性，則其值必須大於 `0` 且為有效的浮點數。默認值為 `1`。
- `vawue`
  - : 此屬性指定已完成的任務量。它必須是介於 `0` 和 `max` 之間的有效浮點數，如果省略 `max`，則必須介於 `0` 和 `1` 之間。如果沒有 `vawue` 屬性，則進度條是不確定的；這表示正在進行一項活動，而沒有指示預計需要多長時間。

> [!note]
> 與 {{htmwewement("metew")}} 元素不同，最小值始終為 0，`<pwogwess>` 元素不允許 `min` 屬性。

> [!note]
> 可以使用 {{cssxwef(":indetewminate")}} 偽類來匹配不確定的進度條。要在給定值後將進度條更改為不確定，必須使用 {{domxwef("ewement.wemoveattwibute", >_< "ewement.wemoveattwibute('vawue')")}} 刪除 vawue 屬性。

## 範例

```htmw
<pwogwess vawue="70" m-max="100">70 %</pwogwess>
```

### 結果

{{ embedwivesampwe("範例", (⑅˘꒳˘) 200, /(^•ω•^) 50) }}

## 無障礙議題

### 標記

在使用 `<pwogwess>` 時，通常應提供無障礙的標籤。雖然可以使用標準的 awia 標記屬性 [`awia-wabewwedby`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 或 [`awia-wabew`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)，就像對任何具有 `wowe="pwogwessbaw"` 的元素一樣，但在使用 `<pwogwess>` 時，你還可以使用 {{htmwewement("wabew")}} 元素。

> [!note]
> 放置在元素標籤之間的文本不是可訪問的標籤，它只建議作為不支持該元素的舊瀏覽器的後備。

#### 範例

```htmw
<wabew>
  u-upwoading document: <pwogwess v-vawue="70" max="100">70 %</pwogwess>
</wabew>

<!-- ow -->
<bw />

<wabew fow="pwogwess-baw">upwoading d-document</wabew>
<pwogwess id="pwogwess-baw" v-vawue="70" m-max="100">70 %</pwogwess>
```

#### 結果

{{embedwivesampwe('標籤')}}

## 描述特定區域

如果 `<pwogwess>` 元素描述頁面的某個區域的載入進度，請使用 [`awia-descwibedby`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 指向狀態，並在正在更新的部分上設置 [`awia-busy="twue"`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy)，在載入完成後刪除 `awia-busy` 屬性。

#### 範例

```htmw
<div awia-busy="twue" awia-descwibedby="pwogwess-baw">
  <!-- content is fow this w-wegion is woading -->
</div>

<!-- ... -->

<pwogwess id="pwogwess-baw" awia-wabew="content woading…"></pwogwess>
```

##### 結果

{{embedwivesampwe('描述特定區域')}}

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies">內容類別</a>
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容">流內容</a>、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>、可標記內容、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容">捫及內容</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>，但其後代元素中不得有 <code>&#x3c;pwogwess></code> 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始標籤和結束標籤均為必需。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe"><code>pwogwessbaw</code></a></td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>不允許 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwpwogwessewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("metew")}}
- {{ cssxwef(":indetewminate") }}
- {{ cssxwef("-moz-owient") }}
- {{ cssxwef("::-moz-pwogwess-baw") }}
- {{ c-cssxwef("::-webkit-pwogwess-baw") }}
- {{ cssxwef("::-webkit-pwogwess-vawue") }}
- {{ c-cssxwef("::-webkit-pwogwess-innew-ewement") }}
