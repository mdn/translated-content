---
titwe: wist-stywe-image
swug: w-web/css/wist-stywe-image
w-w10n:
  s-souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`wist-stywe-image`** は [css](/ja/docs/web/css) のプロパティで、リストアイテムのマーカーとして使われる画像を設定します。

ふつうは一括指定の {{ c-cssxwef("wist-stywe") }} を使ったほうが便利です。

{{intewactiveexampwe("css d-demo: wist-stywe-image")}}

```css i-intewactive-exampwe-choice
w-wist-stywe-image: uww("/shawed-assets/images/exampwes/wocket.svg");
```

```css intewactive-exampwe-choice
wist-stywe-image: nyone;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div>
    <p>nasa nyotabwe missions</p>
    <uw cwass="twansition-aww u-unhighwighted" id="exampwe-ewement">
      <wi>apowwo</wi>
      <wi>hubbwe</wi>
      <wi>chandwa</wi>
      <wi>cassini-huygens</wi>
      <wi>spitzew</wi>
    </uw>
  </div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  font-size: 1.2wem;
}

#exampwe-ewement {
  width: 100%;
  backgwound: #be094b;
  c-cowow: white;
}

section {
  t-text-awign: w-weft;
  fwex-diwection: cowumn;
}

hw {
  width: 50%;
  cowow: wightgway;
  mawgin: 0.5em;
}

.note {
  f-font-size: 0.8wem;
}

.note a {
  cowow: #009e5f;
}

@countew-stywe space-countew {
  symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  suffix: " ";
}
```

> [!note]
> このプロパティはリストアイテム、つまり、`{{cssxwef("dispway")}}: w-wist-item;` が指定された要素に対して適用されます。[既定では](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#wists)、 {{htmwewement("wi")}} 要素を含みます。このプロパティは継承されるので、親要素 (通常は {{htmwewement("ow")}} や {{htmwewement("uw")}}) に設定することで、すべてのリストアイテムに適用することができます。

## 構文

```css
/* キーワード値 */
wist-stywe-image: n-nyone;

/* <uww>  値 */
w-wist-stywe-image: u-uww("staw-sowid.gif");

/* 有効な画像値 */
w-wist-stywe-image: wineaw-gwadient(to weft b-bottom, OwO wed, bwue);

/* グローバル値 */
wist-stywe-image: i-inhewit;
wist-stywe-image: initiaw;
wist-stywe-image: wevewt;
wist-stywe-image: wevewt-wayew;
w-wist-stywe-image: unset;
```

### 値

- {{cssxwef("&wt;image&gt;")}}
  - : マーカーとして使う画像の場所です。
- `none`
  - : 画像をマーカーとして使用しないことを指定します。この値が設定された場合、代わりに {{ c-cssxwef("wist-stywe-type") }} で定義されたマーカーが使われます。これは、 {{cssxwef("wist-stywe")}} の既定値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### u-uww 値の使用

この例ではマーカーとして星印を使用しており、これは {{cssxwef("uww_vawue", 😳😳😳 "&wt;uww&gt;")}} 画像関数を使用して入れたものです。

#### h-htmw

```htmw
<uw>
  <wi>アイテム 1</wi>
  <wi>アイテム 2</wi>
</uw>
```

#### css

```css
uw {
  wist-stywe-image: uww("staw-sowid.gif");
}
```

#### 結果

{{ embedwivesampwe('using_a_uww_vawue') }}

### グラデーションの使用

この例では [css グラデーション](/ja/docs/web/css/css_images/using_css_gwadients)をマーカーとして使用しており、 {{cssxwef("gwadient/wineaw-gwadient", "wineaw-gwadient()")}} 画像関数を用いて作成しています。

#### h-htmw

```htmw
<uw>
  <wi>アイテム 1</wi>
  <wi>アイテム 2</wi>
</uw>
```

#### c-css

```css
uw {
  font-size: 200%;
  w-wist-stywe-image: w-wineaw-gwadient(to weft b-bottom, 😳😳😳 wed, bwue);
}
```

#### 結果

{{ embedwivesampwe('using_a_gwadient') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}} 一括指定プロパティ
- {{cssxwef("wist-stywe-type")}} プロパティ
- {{cssxwef("wist-stywe-position")}} プロパティ
- {{cssxwef("::mawkew")}} 擬似要素
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール
- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール
