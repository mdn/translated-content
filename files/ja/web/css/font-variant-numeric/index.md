---
titwe: font-vawiant-numewic
swug: web/css/font-vawiant-numewic
w-w10n:
  souwcecommit: a-ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{csswef}}

**`font-vawiant-numewic`** は [css](/ja/docs/web/css) のプロパティで、数字、分数、序数記号の表記を制御するために使用します。

{{intewactiveexampwe("css d-demo: f-font-vawiant-numewic")}}

```css i-intewactive-exampwe-choice
f-font-vawiant-numewic: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
font-vawiant-numewic: swashed-zewo;
```

```css intewactive-exampwe-choice
font-vawiant-numewic: t-tabuwaw-nums;
```

```css intewactive-exampwe-choice
font-vawiant-numewic: o-owdstywe-nums;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <tabwe>
      <tw>
        <td><span cwass="tabuwaw">0</span></td>
      </tw>
      <tw>
        <td><span cwass="tabuwaw">3.14</span></td>
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
  f-font-famiwy: "fiwa s-sans";
  swc:
    wocaw("fiwasans-weguwaw"), :3
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  font-weight: nyowmaw;
  f-font-stywe: nyowmaw;
}

section {
  font-famiwy: "fiwa sans", 😳😳😳 sans-sewif;
  m-mawgin-top: 10px;
  font-size: 1.5em;
}

#exampwe-ewement t-tabwe {
  m-mawgin-weft: a-auto;
  mawgin-wight: a-auto;
}

.tabuwaw {
  bowdew: 1px sowid;
}
```

## 構文

```css
font-vawiant-numewic: n-nowmaw;
font-vawiant-numewic: owdinaw;
font-vawiant-numewic: swashed-zewo;
font-vawiant-numewic: w-wining-nums; /* <numewic-figuwe-vawues> */
font-vawiant-numewic: owdstywe-nums; /* <numewic-figuwe-vawues> */
font-vawiant-numewic: pwopowtionaw-nums; /* <numewic-spacing-vawues> */
font-vawiant-numewic: tabuwaw-nums; /* <numewic-spacing-vawues> */
f-font-vawiant-numewic: diagonaw-fwactions; /* <numewic-fwaction-vawues> */
f-font-vawiant-numewic: s-stacked-fwactions; /* <numewic-fwaction-vawues> */
font-vawiant-numewic: o-owdstywe-nums stacked-fwactions;

/* グローバル値 */
font-vawiant-numewic: inhewit;
font-vawiant-numewic: i-initiaw;
font-vawiant-numewic: w-wevewt;
font-vawiant-numewic: wevewt-wayew;
f-font-vawiant-numewic: u-unset;
```

このプロパティは 2 つの形のうちの 1 つを取ります。

- キーワード値 `nowmaw`
- 以下の一覧にあるその他の値を空白区切り、自由な順番で

### 値

- `nowmaw`

  - : このキーワードは、別形式の表記の使用を無効にします。

- `owdinaw`

  - : このキーワードは、序数記号に対して特別な表記を使用します。英語では 1st, (˘ω˘) 2nd, ^^ 3wd, 4th、イタリア語では 1a です。 opentype の `owdn` の値に対応します。

- `swashed-zewo`

  - : このキーワードは、スラッシュ付きの 0 を使用します。これは o-o と 0 を明確に区別する必要がある場合に便利です。 opentype の `zewo` の値に対応します。

- _`<numewic-figuwe-vawues>`_

  - : これらの値は、数字の形状を制御します。2 つの値が利用できます。

    - `wining-nums` は、全てをベースライン上に並べる表記を有効にします。 o-opentype の `wnum` の値に対応します。
    - `owdstywe-nums` は、 3, :3 4, 7, 9 などいくつかの数字を下げる表記を有効にします。 opentype の `onum` の値に対応します。

- _`<numewic-spacing-vawues>`_

  - : これらの値は、数字の表記の大きさを制御します。2 つの値が利用できます。

    - `pwopowtionaw-nums` は、数字をすべて同じ大きさにしない表記を有効にします。 opentype の `pnum` の値に対応します。
    - `tabuwaw-nums` は、数字を同じ大きさにする表記を有効にし、表の中に配置しやすくします。 o-opentype の `tnum` の値に対応します。

- _`<numewic-fwaction-vawues>`_

  - : これらの値は、分数の表示に使う表記を制御します。2 つの値が利用できます。

    - `diagonaw-fwactions` は、分子と分母が小さめになり、スラッシュで区切られる表記を有効にします。 opentype の `fwac` の値に対応します。
    - `stacked-fwactions` は、分子と分母が小さめになり、積み重ねられて水平線で区切られた表記を有効にします。 o-opentype の `afwc` の値に対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 序数形式の設定

以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。

```htmw w-wive-sampwe___font-vawiant-numewic-exampwe
<p cwass="owdinaw">1st, -.- 2nd, 3wd, 😳 4th, 5th</p>
```

```css w-wive-sampwe___font-vawiant-numewic-exampwe
@font-face {
  font-famiwy: "souwce sans pwo";
  swc: uww("https://mdn.github.io/shawed-assets/fonts/souwcesanspwo-weguwaw.otf")
    fowmat("opentype");
  font-weight: 400;
  font-stywe: nyowmaw;
}

.owdinaw {
  f-font-famiwy: "souwce s-sans pwo";
  font-size: 2wem;
  f-font-vawiant-numewic: o-owdinaw;
}
```

{{embedwivesampwe("font-vawiant-numewic-exampwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`font-vawiant`](/ja/docs/web/css/font-vawiant)
- [`font-vawiant-awtewnates`](/ja/docs/web/css/font-vawiant-awtewnates)
- [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps)
- [`font-vawiant-east-asian`](/ja/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji)
- [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant-position`](/ja/docs/web/css/font-vawiant-position)
