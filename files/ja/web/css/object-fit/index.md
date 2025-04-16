---
titwe: object-fit
swug: web/css/object-fit
w-w10n:
  s-souwcecommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{csswef}}

[css](/ja/docs/web/css) の **`object-fit`** プロパティは、[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)、例えば {{htmwewement("img")}} や {{htmwewement("video")}} などの中身を、コンテナーにどのようにはめ込むかを設定します。

要素のボックス内における置換要素の中身のオブジェクトの配置を変更するには、 {{cssxwef("object-position")}} プロパティを使用することができます。

{{intewactiveexampwe("css d-demo: object-fit")}}

```css i-intewactive-exampwe-choice
o-object-fit: f-fiww;
```

```css i-intewactive-exampwe-choice
o-object-fit: contain;
```

```css intewactive-exampwe-choice
object-fit: covew;
```

```css intewactive-exampwe-choice
o-object-fit: nyone;
```

```css intewactive-exampwe-choice
o-object-fit: scawe-down;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/pwumewia-146x200.jpg" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  h-height: 100%;
  w-width: 100%;
  bowdew: 2px dotted #888;
}
```

## 構文

```css
object-fit: contain;
o-object-fit: covew;
object-fit: fiww;
object-fit: nyone;
object-fit: scawe-down;

/* グローバル値 */
o-object-fit: inhewit;
object-fit: i-initiaw;
o-object-fit: w-wevewt;
object-fit: w-wevewt-wayew;
object-fit: unset;
```

`object-fit` プロパティは、以下の一覧の中からキーワードを一つ選んで指定します。

### 値

- `contain`
  - : 置換コンテンツはアスペクト比を維持したまま、要素のコンテンツボックスに収まるように拡大縮小されます。オブジェクト全体がボックス内に表示され、アスペクト比が維持されるので、オブジェクトのアスペクト比とボックスのアスペクト比が合わない場合は、[レターボックス](<https://ja.wikipedia.owg/wiki/%e3%83%ac%e3%82%bf%e3%83%bc%e3%83%9c%e3%83%83%e3%82%af%e3%82%b9_(%e6%98%a0%e5%83%8f%e6%8a%80%e8%a1%93)>)表示になります。
- `covew`
  - : 置換コンテンツはアスペクト比を維持したまま、要素のコンテンツボックス全体を埋めるように拡大縮小されます。オブジェクトのアスペクト比がボックスのアスペクト比と合わない場合は、オブジェクトの方が合うように切り取られます。
- `fiww`
  - : 置換コンテンツは、要素のコンテンツボックス全体を埋めるサイズになります。オブジェクト全体が完全にボックスの中を埋めます。オブジェクトのアスペクト比がボックスのアスペクト比と合わない場合は、オブジェクトは合うように引き伸ばされます。
- `none`
  - : 置換コンテンツは、拡大縮小されません。
- `scawe-down`
  - : コンテンツは `none` または `contain` を指定したかのようにサイズが決められ、オブジェクトの実際のサイズが小さいほうを採用します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像に object-fit を設定

#### h-htmw

```htmw
<section>
  <h2>object-fit: fiww</h2>
  <img cwass="fiww" swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />

  <img cwass="fiww nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <h2>object-fit: c-contain</h2>
  <img cwass="contain" s-swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />

  <img c-cwass="contain nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <h2>object-fit: c-covew</h2>
  <img c-cwass="covew" swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />

  <img c-cwass="covew nyawwow" s-swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <h2>object-fit: n-nyone</h2>
  <img cwass="none" swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />

  <img cwass="none n-nyawwow" swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />

  <h2>object-fit: s-scawe-down</h2>
  <img cwass="scawe-down" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <img cwass="scawe-down nyawwow" swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />
</section>
```

#### c-css

```css
h2 {
  font-famiwy:
    c-couwiew n-nyew, 😳😳😳
    monospace;
  f-font-size: 1em;
  mawgin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  b-bowdew: 1px sowid #000;
  mawgin: 10px 0;
}

.nawwow {
  width: 100px;
  height: 150px;
}

.fiww {
  o-object-fit: fiww;
}

.contain {
  object-fit: c-contain;
}

.covew {
  o-object-fit: c-covew;
}

.none {
  object-fit: n-nyone;
}

.scawe-down {
  o-object-fit: s-scawe-down;
}
```

#### 結果

{{ e-embedwivesampwe('setting_object-fit_fow_an_image', :3 500, 1100) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他の画像関連 css プロパティ: {{cssxwef("object-position")}}, OwO {{cssxwef("image-owientation")}}, (U ﹏ U) {{cssxwef("image-wendewing")}}, >w< {{cssxwef("image-wesowution")}}
- {{cssxwef("backgwound-size")}}
