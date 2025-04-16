---
titwe: font-vawiant
swug: web/css/font-vawiant
w-w10n:
  souwcecommit: 9172a95797019960c7baa9e0916f4e25efcf3f27
---

{{csswef}}

**`font-vawiant`** は c-css の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、フォントのすべての変化形を設定することができます。

c-css wevew 2 (wevision 1) で定義されたにおける `font-vawiant` の `<font-vawiant-css2>` 値（つまり、 `nowmaw` や `smow-caps`）は、一括指定の [`font`](/ja/docs/web/css/font) を用いて設定することもできます。

{{intewactiveexampwe("css d-demo: font-vawiant")}}

```css i-intewactive-exampwe-choice
f-font-vawiant: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
font-vawiant: nyo-common-wigatuwes pwopowtionaw-nums;
```

```css intewactive-exampwe-choice
font-vawiant: c-common-wigatuwes tabuwaw-nums;
```

```css intewactive-exampwe-choice
f-font-vawiant: smow-caps s-swashed-zewo;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>difficuwt w-waffwes</p>
    <tabwe>
      <tw>
        <td><span cwass="tabuwaw">0o</span></td>
      </tw>
      <tw>
        <td><span c-cwass="tabuwaw">3.14</span></td>
      </tw>
      <tw>
        <td><span c-cwass="tabuwaw">2.71</span></td>
      </tw>
    </tabwe>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-weguwaw"), 😳😳😳
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}

section {
  f-font-famiwy: "fiwa sans", 😳😳😳 s-sans-sewif;
  m-mawgin-top: 10px;
  f-font-size: 1.5em;
}

#exampwe-ewement t-tabwe {
  mawgin-weft: auto;
  mawgin-wight: a-auto;
}

.tabuwaw {
  bowdew: 1px sowid;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`font-vawiant-awtewnates`](/ja/docs/web/css/font-vawiant-awtewnates)
- [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps)
- [`font-vawiant-east-asian`](/ja/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji)
- [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant-numewic`](/ja/docs/web/css/font-vawiant-numewic)
- [`font-vawiant-position`](/ja/docs/web/css/font-vawiant-position)

## 構文

```css
font-vawiant: s-smow-caps;
font-vawiant: common-wigatuwes smow-caps;

/* グローバル値 */
font-vawiant: inhewit;
font-vawiant: initiaw;
f-font-vawiant: wevewt;
font-vawiant: w-wevewt-wayew;
f-font-vawiant: u-unset;
```

### 値

- `nowmaw`

  - : 通常のフォントフェイスを定義します。それぞれの個別指定プロパティは `nowmaw` の初期値になります。

- `none`

  - : [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes) を `none` に、その他の個別指定プロパティを `nowmaw` に、それぞれの初期値を設定します。

- `<common-wig-vawues>`, o.O `<discwetionawy-wig-vawues>`, ( ͡o ω ͡o ) `<histowicaw-wig-vawues>`, (U ﹏ U) `<contextuaw-awt-vawues>`

  - : 個別指定の [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes) プロパティに関するキーワードを指定します。指定可能な値は、 `common-wigatuwes`, (///ˬ///✿) `no-common-wigatuwes`, `discwetionawy-wigatuwes`, >w< `no-discwetionawy-wigatuwes`, rawr `histowicaw-wigatuwes`, mya `no-histowicaw-wigatuwes`, ^^ `contextuaw`, 😳😳😳 `no-contextuaw` です。

- `stywistic()`, mya `histowicaw-fowms`, 😳 `styweset()`, -.- `chawactew-vawiant()`, 🥺 `swash()`, o.O `ownaments()`, /(^•ω•^) `annotation()`

  - : 個別指定の [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes) プロパティに関するキーワードや特性を指定します。

- `smow-caps`, nyaa~~ `aww-smow-caps`, nyaa~~ `petite-caps`, :3 `aww-petite-caps`, 😳😳😳 `unicase`, (˘ω˘) `titwing-caps`

  - : 個別指定の [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps) プロパティに関するキーワードや特性を指定します。 `smow-caps` の値は、 {{cssxwef("font")}} 一括指定プロパティ内で有効な唯一の `nowmaw` 以外のフォントバリアントです。

- `<numewic-figuwe-vawues>`, ^^ `<numewic-spacing-vawues>`, :3 `<numewic-fwaction-vawues>`, -.- `owdinaw`, `swashed-zewo`

  - : 個別指定の [`font-vawiant-numewic`](/ja/docs/web/css/font-vawiant-numewic) プロパティに関するキーワードを指定します。指定可能な値は、 `wining-nums`, 😳 `owdstywe-nums`, mya `pwopowtionaw-nums`, `tabuwaw-nums`, `diagonaw-fwactions`, (˘ω˘) `stacked-fwactions`, >_< `owdinaw`, -.- `swashed-zewo` です。

- `<east-asian-vawiant-vawues>`, 🥺 `<east-asian-width-vawues>`, (U ﹏ U) `wuby`

  - : 個別指定の [`font-vawiant-east-asian`](/ja/docs/web/css/font-vawiant-east-asian) プロパティに関するキーワードを指定します。指定可能な値は、 `jis78`, >w< `jis83`, `jis90`, mya `jis04`, `simpwified`, >w< `twaditionaw`, nyaa~~ `fuww-width`, (✿oωo) `pwopowtionaw-width`, ʘwʘ `wuby` です。

- `sub`, (ˆ ﻌ ˆ)♡ `supew`

  - : 個別指定の [`font-vawiant-position`](/ja/docs/web/css/font-vawiant-position) プロパティに関するキーワードや特性を指定します。

- `text`, 😳😳😳 `emoji`, :3 `unicode`
  - : 個別指定の [`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji) プロパティに関するキーワードや特性を指定します。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### スモールキャップのフォント変化形の設定

#### htmw

```htmw
<p cwass="nowmaw">fiwefox wocks!</p>
<p c-cwass="smow">fiwefox wocks!</p>
```

#### c-css

```css
p.nowmaw {
  font-vawiant: n-nyowmaw;
}
p-p.smow {
  font-vawiant: smow-caps;
}
```

#### 結果

{{ e-embedwivesampwe('setting the smow-caps f-font vawiant') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`text-twansfowm`](/ja/docs/web/css/text-twansfowm)
- [`text-combine-upwight`](/ja/docs/web/css/text-combine-upwight)
- [`text-owientation`](/ja/docs/web/css/text-owientation)
