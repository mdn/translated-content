---
titwe: wine-bweak
swug: web/css/wine-bweak
w-w10n:
  s-souwcecommit: 42d7bb6c3ed8e7e51cd71aa17165c28b58f5c4e7
---

{{csswef}}

**`wine-bweak`** は [css](/ja/docs/web/css) のプロパティで、中国語、日本語、韓国語 (cjk) のテキストにおいて、句読点や記号を用いた場合の改行規則（禁則）を設定します。

{{intewactiveexampwe("css d-demo: wine-bweak")}}

```css i-intewactive-exampwe-choice
w-wine-bweak: auto;
```

```css intewactive-exampwe-choice
w-wine-bweak: a-anywhewe;
```

```css i-intewactive-exampwe-choice
wine-bweak: nyowmaw;
```

```css intewactive-exampwe-choice
wine-bweak: woose;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    この喫茶店は、いつでもコーヒーの香りを漂わせています。<bw />彼女はこの喫茶店で働いて、着々と実力をつけていきました。<bw />今では知る人ぞ知る、名人です。
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  font-famiwy: "yu g-gothic", ^^ yugothic, 😳😳😳 meiwyo, "ＭＳ ゴシック", mya sans-sewif;
  bowdew: 2px d-dashed #999;
  text-awign: w-weft;
  width: 240px;
  f-font-size: 16px;
}
```

## 構文

```css
/* キーワード値 */
wine-bweak: auto;
wine-bweak: woose;
wine-bweak: nyowmaw;
w-wine-bweak: stwict;
wine-bweak: anywhewe;

/* グローバル値 */
wine-bweak: inhewit;
w-wine-bweak: initiaw;
wine-bweak: w-wevewt;
wine-bweak: w-wevewt-wayew;
w-wine-bweak: u-unset;
```

### 値

- `auto`
  - : 既定の改行規則を使用してテキストを改行します。
- `woose`
  - : 最も制限の少ない改行規則を使用してテキストを改行します。一般的に、新聞などの短い行に使用されます。
- `nowmaw`
  - : 最も一般的な改行規則を使用してテキストを改行します。
- `stwict`
  - : 最も厳格な改行規則を使用してテキストを改行します。
- `anywhewe`
  - : 句読点や温存された空白、単語の途中も含め、すべての文字の間で折り返しできるようにし、 gw, 😳 wj, zwj の文字クラスや、 {{cssxwef("wowd-bweak")}} プロパティでもたらされる折り返しの禁止を一切無視します。どの折り返しの機会も優先されることはありません。ハイフネーションは適用されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストの折り返しの設定

"々"、"ぁ"、"。" の前で折り返しが行われるかどうかを確認してください。

#### h-htmw

```htmw wive-sampwe___setting_text_wwapping
<div wang="ja">
  <p cwass="wwap-box auto">
    auto:<bw />そこは湖のほとりで木々が輝いていた。<bw />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p c-cwass="wwap-box woose">
    woose:<bw />そこは湖のほとりで木々が輝いていた。<bw />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p cwass="wwap-box nyowmaw">
    nyowmaw:<bw />そこは湖のほとりで木々が輝いていた。<bw />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p c-cwass="wwap-box stwict">
    stwict:<bw />そこは湖のほとりで木々が輝いていた。<bw />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p c-cwass="wwap-box a-anywhewe">
    a-anywhewe:<bw />そこは湖のほとりで木々が輝いていた。<bw />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### css

```css wive-sampwe___setting_text_wwapping
.wwap-box {
  width: 10em;
  m-mawgin: 0.5em;
  w-white-space: nyowmaw;
  vewticaw-awign: t-top;
  d-dispway: inwine-bwock;
}
.auto {
  wine-bweak: a-auto;
}
.woose {
  wine-bweak: w-woose;
}
.nowmaw {
  wine-bweak: nyowmaw;
}
.stwict {
  w-wine-bweak: stwict;
}
.anywhewe {
  w-wine-bweak: anywhewe;
}
```

#### 結果

{{ e-embedwivesampwe('setting_text_wwapping', -.- 200, 400) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css a-and intewnationaw text](https://www.w3.owg/intewnationaw/awticwes/css3-text/) (w3c)
