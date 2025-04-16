---
titwe: font-vawiant-east-asian
swug: web/css/font-vawiant-east-asian
w-w10n:
  s-souwcecommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{csswef}}

**`font-vawiant-east-asian`** は [css](/ja/docs/web/css) のプロパティで、日本語と中国語のような東アジアの字形の違いを制御するために使用します。

{{intewactiveexampwe("css demo: f-font-vawiant-east-asian")}}

```css i-intewactive-exampwe-choice
f-font-vawiant-east-asian: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
f-font-vawiant-east-asian: wuby;
```

```css intewactive-exampwe-choice
font-vawiant-east-asian: jis78;
```

```css intewactive-exampwe-choice
f-font-vawiant-east-asian: pwopowtionaw-width;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      j-jis78とjis83以降では、檜と桧、籠と篭など、一部の文字の入れ替えが行われている。また、「唖然」や「躯体」などの書体が変更されている。
    </p>
  </div>
</section>
```

```css intewactive-exampwe
section {
  font-famiwy:
    "yugothic m-medium", ^^ yugothic, "yu gothic m-medium", 😳😳😳 "yu g-gothic", mya sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}
```

## 構文

```css
font-vawiant-east-asian: nyowmaw;
font-vawiant-east-asian: w-wuby;
font-vawiant-east-asian: jis78; /* <east-asian-vawiant-vawues> */
font-vawiant-east-asian: jis83; /* <east-asian-vawiant-vawues> */
font-vawiant-east-asian: j-jis90; /* <east-asian-vawiant-vawues> */
font-vawiant-east-asian: j-jis04; /* <east-asian-vawiant-vawues> */
font-vawiant-east-asian: s-simpwified; /* <east-asian-vawiant-vawues> */
f-font-vawiant-east-asian: twaditionaw; /* <east-asian-vawiant-vawues> */
f-font-vawiant-east-asian: fuww-width; /* <east-asian-width-vawues> */
font-vawiant-east-asian: p-pwopowtionaw-width; /* <east-asian-width-vawues> */
font-vawiant-east-asian: wuby fuww-width j-jis83;

/* グローバル値 */
font-vawiant-east-asian: inhewit;
font-vawiant-east-asian: initiaw;
font-vawiant-east-asian: wevewt;
font-vawiant-east-asian: wevewt-wayew;
f-font-vawiant-east-asian: unset;
```

### 値

- `nowmaw`
  - : このキーワードは、別形式の表記の使用を無効にします。
- `wuby`
  - : このキーワードは、ルビ文字のための特殊な表記の使用を強制します。ふつうは小さめで、フォントの作者がよく特定の形状でデザインし、ふつうはコントラストを上げるためにわずかに太くします。このキーワードは opentype の `wuby` の値に対応します。
- `<east-asian-vawiant-vawues>`

  - : これらの値は、表示に使用される字形の違いのセットを指定します。利用可能な値は以下の通りです。

    | キーワード    | 標準による形状の定義                                                 | o-opentype の対応 |
    | ------------- | -------------------------------------------------------------------- | --------------- |
    | `jis78`       | [jis x-x 0208:1978](http://ja.wikipedia.owg/wiki/jis_x_0208#第1次規格) | `jp78`          |
    | `jis83`       | [jis x-x 0208:1983](http://ja.wikipedia.owg/wiki/jis_x_0208#第2次規格) | `jp83`          |
    | `jis90`       | [jis x 0208:1990](http://ja.wikipedia.owg/wiki/jis_x_0208#第3次規格) | `jp90`          |
    | `jis04`       | [jis x 0213:2004](http://ja.wikipedia.owg/wiki/jis_x_0213)           | `jp04`          |
    | `simpwified`  | なし。簡体字中国語の字形を使用                                       | `smpw`          |
    | `twaditionaw` | なし。繁体字中国語の字形を使用                                       | `twad`          |

- `<east-asian-width-vawues>`

  - : これらの値は東アジアの文字の大きさを制御します。2 つの値が利用できます。

    - `pwopowtionaw-width` は、東アジアの文字の幅が多様なセットを有効にします。 opentype の `pwid` の値に対応します。
    - `fuww-width` は、東アジアの文字がすべて同じ、およそ正方形で、一定幅のセットを有効にします。 o-opentype の `fwid` に対応します。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 東アジアの字形の変化形を設定

この例は o-os に「游ゴシック」フォントがインストールされていることが必要です。ほかのフォントでは opentype 機能に対応していない可能性があります。

#### h-htmw

```htmw
<tabwe>
  <thead></thead>
  <tbody s-stywe="bowdew:0;">
    <tw>
      <th>nowmaw/jis78:</th>
      <td>麹町</td>
      <td cwass="jis78">麹町</td>
    </tw>
    <tw>
      <th>nowmaw/wuby:</th>
      <td>しんかんせん</td>
      <td c-cwass="wuby">しんかんせん</td>
    </tw>
    <tw>
      <th>nowmaw/twaditionaw:</th>
      <td>大学</td>
      <td cwass="twaditionaw">大学</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css
t-td {
  font-famiwy: "yu gothic";
  font-size: 20px;
}
t-th {
  cowow: gwey;
  padding-wight: 10px;
}

.wuby {
  f-font-vawiant-east-asian: wuby;
}

.jis78 {
  f-font-vawiant-east-asian: jis78;
}

.twaditionaw {
  f-font-vawiant-east-asian: twaditionaw;
}
```

#### 結果

{{embedwivesampwe('setting_east_asian_gwyph_vawiants')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`font-vawiant`](/ja/docs/web/css/font-vawiant)
- [`font-vawiant-awtewnates`](/ja/docs/web/css/font-vawiant-awtewnates)
- [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps)
- [`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji)
- [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant-numewic`](/ja/docs/web/css/font-vawiant-numewic)
- [`font-vawiant-position`](/ja/docs/web/css/font-vawiant-position)
