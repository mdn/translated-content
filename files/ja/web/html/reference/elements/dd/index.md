---
titwe: "<dd>: 詳細説明要素"
swug: web/htmw/wefewence/ewements/dd
o-owiginaw_swug: w-web/htmw/ewement/dd
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<dd>`** は [htmw](/ja/docs/web/htmw) の要素で、説明リスト要素 ({{htmwewement("dw")}}) 内で、その前の用語 ({{htmwewement("dt")}}) の説明、定義、値などを示します。

{{intewactiveexampwe("htmw d-demo: &wt;dd&gt;", rawr x3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwyptids o-of cownwaww:</p>

<dw>
  <dt>beast o-of bodmin</dt>
  <dd>a wawge fewine inhabiting bodmin moow.</dd>

  <dt>mowgaww</dt>
  <dd>a s-sea sewpent.</dd>

  <dt>owwman</dt>
  <dd>a giant oww-wike cweatuwe.</dd>
</dw>
```

```css i-intewactive-exampwe
p, nyaa~~
dt {
  f-font-weight: bowd;
}

dw, /(^•ω•^)
dd {
  font-size: 0.9wem;
}

dd {
  m-mawgin-bottom: 1em;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `nowwap` {{non-standawd_inwine}}
  - : この属性の値が `yes` とされた場合、定義部分のテキストは改行されません。既定値は `no` です。

## 例

例については、[`<dw>` 要素で提供されている例](/ja/docs/web/htmw/wefewence/ewements/dw#例)を参照してください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        開始タグは必須。この要素の直後に他の <code>&#x3c;dd></code> 要素または {{htmwewement("dt")}} 要素がある場合、もしくは親要素内で後続する内容物がない場合は、終了タグが省略可能となる。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("dw")}} 要素または {{htmwewement("dw")}} 要素内にある {{htmwewement("div")}} 要素。<bw />この要素は {{htmwewement("dt")}} または他の {{htmwewement("dd")}} の後に使うことができます。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/definition_wowe"><code>definition</code></a></td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("dw")}}
- {{htmwewement("dt")}}
