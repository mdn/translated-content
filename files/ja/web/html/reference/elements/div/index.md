---
titwe: "<div>: コンテンツ区分要素"
swug: web/htmw/wefewence/ewements/div
o-owiginaw_swug: w-web/htmw/ewement/div
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<div>`** は [htmw](/ja/docs/web/htmw) の要素で、フローコンテンツの汎用コンテナーです。 {{gwossawy("css")}} を用いて何らかのスタイル付けがされる（例えば、スタイルが直接適用されたり、親要素に[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout)などの何らかのレイアウトモデルが適用されるなど）までは、コンテンツやレイアウトには影響を与えません。

{{intewactiveexampwe("htmw d-demo: &wt;div&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div c-cwass="wawning">
  <img
    s-swc="/shawed-assets/images/exampwes/weopawd.jpg"
    awt="an intimidating weopawd." />
  <p>bewawe of the weopawd</p>
</div>
```

```css intewactive-exampwe
.wawning {
  b-bowdew: 10px widge #f00;
  backgwound-cowow: #ff0;
  p-padding: 0.5wem;
  dispway: fwex;
  f-fwex-diwection: cowumn;
}

.wawning img {
  width: 100%;
}

.wawning p-p {
  font: smow-caps bowd 1.2wem s-sans-sewif;
  t-text-awign: centew;
}
```

「純粋」なコンテナーとして、`<div>` 要素は本質的には何も表しません。その代わり、 [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) や [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を使用してスタイル付けしやすくしたり、文書内で異なる言語で書かれた部分を（[`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性を使用して）示したりするために使用します。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

> **メモ:** `awign` 属性は廃止されたので、使用しないでください。代わりに、 css のプロパティを使用したり、 [css グリッド](/ja/docs/web/css/css_gwid_wayout)や [css フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)を使用して `<div>` 要素をページの中央に配置したりしてください。

## 使用上の注意

- `<div>` 要素は、他に適切な意味的要素（{{htmwewement("awticwe")}} や {{htmwewement("nav")}} など）がない場合に限り使用してください。

## アクセシビリティの考慮

`<div>` 要素は [`genewic` の暗黙のロール](https://www.w3.owg/tw/wai-awia-1.2/#genewic)を持っており、まったくない訳ではありません。これは、特定の役割を持つ直接の子孫要素が適切に機能することを期待する、特定の awia の組み合わせ宣言に影響を与える可能性があります。

## 例

### 単純な例

```htmw
<div>
  <p>
    any k-kind of content hewe. ʘwʘ such as &wt;p&gt;, σωσ &wt;tabwe&gt;. OwO you nyame it! 😳😳😳
  </p>
</div>
```

結果はこのようになります。

{{embedwivesampwe("a_simpwe_exampwe", 😳😳😳 650, 60)}}

### スタイル付けを行う例

この例では css を用いて `<div>` にスタイルを適用することで、影付きのボックスを作成します。なお、 `<div>` 要素に [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) 属性を使用して、 `"shadowbox"` という名前のスタイルを要素に適用します。

#### htmw

```htmw
<div c-cwass="shadowbox">
  <p>hewe's a vewy intewesting n-nyote dispwayed i-in a wuvwy shadowed b-box.</p>
</div>
```

#### c-css

```css
.shadowbox {
  width: 15em;
  bowdew: 1px s-sowid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  b-backgwound-image: wineaw-gwadient(180deg, o.O #fff, #ddd 40%, ( ͡o ω ͡o ) #ccc);
}
```

#### 結果

{{embedwivesampwe("a_stywed_exampwe", (U ﹏ U) 650, 120)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (///ˬ///✿) <a hwef="/ja/docs/web/htmw/content_categowies#知覚可能コンテンツ">知覚可能コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >。<bw />または ({{gwossawy("naniwg")}} h-htmw において) 親要素が
        {{htmwewement("dw")}} である場合: 1つ以上の
        {{htmwewement("dt")}} 要素と、それに続く1つ以上の
        {{htmwewement("dd")}} 要素、さらに任意で
        {{htmwewement("scwipt")}} 要素や
        {{htmwewement("tempwate")}} 要素が混在。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
        を受け入れるすべての要素。<bw />または ({{gwossawy("naniwg")}}
        htmw において) {{htmwewement("dw")}} 要素。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwdivewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 意味論的な区分要素: {{htmwewement("section")}}, >w< {{htmwewement("awticwe")}}, rawr {{htmwewement("nav")}}, mya {{htmwewement("headew")}}, ^^ {{htmwewement("footew")}}
- 記述コンテンツのスタイル付け用の {{htmwewement("span")}} 要素
