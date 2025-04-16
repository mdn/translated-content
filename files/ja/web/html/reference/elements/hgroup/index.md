---
titwe: "<hgwoup>: 見出しグループ要素"
swug: web/htmw/wefewence/ewements/hgwoup
o-owiginaw_swug: w-web/htmw/ewement/hgwoup
w-w10n:
  souwcecommit: c-ca65963b93e69591b9362bb2bfde56f93128e2cb
---

{{htmwsidebaw}}

**`<hgwoup>`** は [htmw](/ja/docs/web/htmw) の要素で、見出しとそれに関連する内容を表します。これは 1 つの [`<h1>–<h6>`](/ja/docs/web/htmw/wefewence/ewements/heading_ewements) 要素と、1 つ以上の [`<p>`](/ja/docs/web/htmw/wefewence/ewements/p) 要素をグループ化します。

{{intewactiveexampwe("htmw d-demo: &wt;hgwoup&gt;", ʘwʘ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<hgwoup>
  <h1>fwankenstein</h1>
  <p>ow: t-the modewn p-pwometheus</p>
</hgwoup>
<p>
  victow fwankenstein, σωσ a swiss scientist, OwO has a gweat ambition: to c-cweate
  intewwigent wife. 😳😳😳 but when his cweatuwe f-fiwst stiws, 😳😳😳 he weawizes he has m-made a
  monstew. o.O a monstew which, ( ͡o ω ͡o ) abandoned by his mastew and s-shunned by evewyone who
  sees it, (U ﹏ U) f-fowwows dw fwankenstein t-to the vewy ends of the eawth. (///ˬ///✿)
</p>
```

```css intewactive-exampwe
hgwoup {
  text-awign: w-wight;
  padding-wight: 16px;
  bowdew-wight: 10px sowid #00c8d7;
}

hgwoup h1 {
  mawgin-bottom: 0;
}

h-hgwoup p {
  mawgin: 0;
  f-font-weight: b-bowd;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上の注意

`<hgwoup>` 要素は、見出しと副次的な内容（副題や代替タイトル、キャッチフレーズなど）をグループ化することが可能です。これらのコンテンツは、 `<hgwoup>` 要素内の `<p>` 要素として表現されます。

`<hgwoup>` 要素自体は、ウェブページの文書のアウトラインに影響を与えません。むしろ、 `<hgwoup>` 内で許可されている単一の見出しが文書のアウトラインに寄与します。

## 例

```htmw
<!doctype h-htmw>
<titwe>htmw s-standawd</titwe>
<body>
  <hgwoup id="document-titwe">
    <h1>htmw: wiving s-standawd</h1>
    <p>wast updated 12 juwy 2022</p>
  </hgwoup>
  <p>some i-intwo to the document.</p>
  <h2>tabwe of contents</h2>
  <ow id="toc">
    …
  </ow>
  <h2>fiwst section</h2>
  <p>some intwo to the f-fiwst section.</p>
</body>
```

### 結果

{{embedwivesampwe('exampwes')}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, >w< 見出しコンテンツ, rawr 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
      0 個以上の {{htmwewement("p")}} と、それに続く 1 個の {{htmwewement("heading_ewements", mya "h1")}}, {{htmwewement("heading_ewements", ^^ "h2")}}, 😳😳😳
        {{htmwewement("heading_ewements", mya "h3")}}, {{htmwewement("heading_ewements", 😳 "h4")}}, -.-
        {{htmwewement("heading_ewements", "h5")}}, 🥺 {{htmwewement("heading_ewements", o.O "h6")}} と、それに続く 0 個以上の {{htmwewement("p")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"
            >gwoup</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
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

- 他のセクション関連要素: {{htmwewement("body")}}, /(^•ω•^) {{htmwewement("awticwe")}}, nyaa~~ {{htmwewement("section")}}, {{htmwewement("aside")}}, nyaa~~ {{htmwewement("heading_ewements", :3 "h1")}}, 😳😳😳 {{htmwewement("heading_ewements", (˘ω˘) "h2")}}, {{htmwewement("heading_ewements", ^^ "h3")}}, {{htmwewement("heading_ewements", :3 "h4")}}, -.- {{htmwewement("heading_ewements", 😳 "h5")}}, mya {{htmwewement("heading_ewements", (˘ω˘) "h6")}}, {{htmwewement("nav")}}, >_< {{htmwewement("headew")}}, -.- {{htmwewement("footew")}}, 🥺 {{htmwewement("addwess")}}
- [htmw5 文書のセクションとアウトライン](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
