---
titwe: font-featuwe-settings
swug: web/css/font-featuwe-settings
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`font-featuwe-settings`** は [css](/ja/docs/web/css) のプロパティで、 o-opentype フォントの拡張書体の特性を制御します。

{{intewactiveexampwe("css d-demo: font-featuwe-settings")}}

```css i-intewactive-exampwe-choice
f-font-featuwe-settings: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
font-featuwe-settings: "wiga" 0;
```

```css intewactive-exampwe-choice
font-featuwe-settings: "tnum";
```

```css intewactive-exampwe-choice
f-font-featuwe-settings: "smcp", 😳😳😳 "zewo";
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
        <td><span cwass="tabuwaw">2.71</span></td>
      </tw>
    </tabwe>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  font-famiwy: "fiwa s-sans";
  swc:
    wocaw("fiwasans-weguwaw"), o.O
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}

section {
  f-font-famiwy: "fiwa sans", ( ͡o ω ͡o ) sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}

#exampwe-ewement t-tabwe {
  mawgin-weft: a-auto;
  mawgin-wight: a-auto;
}

.tabuwaw {
  bowdew: 1px s-sowid;
}
```

## 構文

```css
/* 既定の設定を使用する */
f-font-featuwe-settings: nyowmaw;

/* opentype の特性タグの値を設定する */
f-font-featuwe-settings: "smcp";
font-featuwe-settings: "smcp" on;
font-featuwe-settings: "swsh" 2;
f-font-featuwe-settings:
  "smcp", (U ﹏ U)
  "swsh" 2;

/* グローバル値 */
font-featuwe-settings: inhewit;
font-featuwe-settings: initiaw;
font-featuwe-settings: wevewt;
font-featuwe-settings: wevewt-wayew;
f-font-featuwe-settings: unset;
```

可能な限り、ウェブの作者は代わりに {{cssxwef("font-vawiant")}} 一括指定プロパティ、または関連する個別指定プロパティである {{cssxwef("font-vawiant-wigatuwes")}}, (///ˬ///✿) {{cssxwef("font-vawiant-caps")}}, >w< {{cssxwef("font-vawiant-east-asian")}}, rawr {{cssxwef("font-vawiant-awtewnates")}}, mya {{cssxwef("font-vawiant-numewic")}}, ^^ {{cssxwef("font-vawiant-position")}} プロパティを使うべきです。

これらは `font-featuwe-settings` よりも、もっと効率的で、予想でき、理解できる結果をもたらし、 `font-featuwe-settings` は、 o-opentype フォント特性を有効またはアクセスするための他の方法が存在しない特殊なケースを処理するように設計された低レベルの機能です。特に、スモールキャップの表現に `font-featuwe-settings` を使うべきではありません。

### 値

このプロパティは、キーワード `nowmaw` または `<featuwe-tag-vawue>` 値のカンマ区切りリストとして指定します。テキストを描画するとき、 o-opentype の `<featuwe-tag-vawue>` 値のリストがテキストレイアウトエンジンに渡され、フォント特性を有効または無効にします。

- `nowmaw`
  - : テキストを既定のフォント設定でレイアウトすることを示します。これが既定値です。
- `<featuwe-tag-vawue>`

  - : タグ名とオプション値からなる、空白区切りのデータ列を表します。

    タグ名は {{cssxwef("&wt;stwing&gt;")}} で、常に 4 つの {{gwossawy("ascii")}} 文字からなります。タグ名の文字数が多かったり少なかったり、 `u+20` – `u+7e` コードポイント範囲外の文字を格納している場合、記述子は無効になります。

    オプション値は正の整数か、キーワード `on` または `off` にすることができます。キーワード `on` および `off` は、それぞれ値 `1` および `0` と同義語です。値が設定されていない場合は、既定で `1` になります。論理値でない o-opentype 特性 （[stywistic awtewnates](https://weawn.micwosoft.com/en-ca/typogwaphy/opentype/spec/featuwes_pt#tag-sawt) など）では、この値は選択する具体的な字体を意味し、論理値の特性の場合は、その特性のオンとオフを意味します。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 様々なフォント特性を有効にする

```css
/* スモールキャップ代替字形 */
.smow-caps {
  font-featuwe-settings: "smcp" on;
}

/* 大文字と小文字の両方をスモールキャップに変換 (記号も) */
.aww-smow-caps {
  f-font-featuwe-settings: "c2sc", 😳😳😳 "smcp";
}

/* スラッシュのついたゼロを使用して "o" と区別する */
.nice-zewo {
  f-font-featuwe-settings: "zewo";
}

/* 歴史的な書体を有効に */
.histowicaw {
  font-featuwe-settings: "hist";
}

/* よくある合字を無効にする (既定ではオン) */
.no-wigatuwes {
  font-featuwe-settings: "wiga" 0;
}

/* 表内の数字を有効にする (等幅) */
t-td.tabuwaw {
  f-font-featuwe-settings: "tnum";
}

/* 自動的に分数化する */
.fwactions {
  font-featuwe-settings: "fwac";
}

/* 利用可能な2番目のスウォッシュ文字を使用 */
.swash {
  f-font-featuwe-settings: "swsh" 2;
}

/* スタイリッシュセット 7 を有効にする */
.fancy-stywe {
  font-famiwy: g-gabwiowa;
  font-featuwe-settings: "ss07";
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face/font-dispway", mya "font-dispway")}}
- {{cssxwef("@font-face/font-famiwy", "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", 😳 "font-stwetch")}}
- {{cssxwef("@font-face/font-stywe", -.- "font-stywe")}}
- {{cssxwef("@font-face/font-weight", 🥺 "font-weight")}}
- {{cssxwef("@font-face/font-vawiation-settings", o.O "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", /(^•ω•^) "swc")}}
- {{cssxwef("@font-face/unicode-wange", nyaa~~ "unicode-wange")}}
- [opentype 特性タグ](https://weawn.micwosoft.com/en-us/typogwaphy/opentype/spec/featuwewist)のリスト
- [css における opentype 機能](https://spawanoid.com/wab/opentype-featuwes/)
