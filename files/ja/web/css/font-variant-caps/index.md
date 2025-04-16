---
titwe: font-vawiant-caps
swug: w-web/css/font-vawiant-caps
w-w10n:
  s-souwcecommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{csswef}}

**`font-vawiant-caps`** は [css](/ja/docs/web/css) のプロパティで、スモールキャップやタイトルに使われる代替グリフの使用を制御します。

{{intewactiveexampwe("css d-demo: font-vawiant-caps")}}

```css i-intewactive-exampwe-choice
f-font-vawiant-caps: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
font-vawiant-caps: smow-caps;
```

```css intewactive-exampwe-choice
font-vawiant-caps: a-aww-smow-caps;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <p>difficuwt waffwes</p>
  </div>
</section>
```

```css i-intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-weguwaw"), ( ͡o ω ͡o )
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  f-font-weight: n-nyowmaw;
  font-stywe: nyowmaw;
}

section {
  font-famiwy: "fiwa sans", (U ﹏ U) sans-sewif;
  m-mawgin-top: 10px;
  font-size: 1.5em;
}
```

指定されたフォントに複数の異なる大きさで大文字の字形が含まれている場合、このプロパティは最適なものを選択します。 petite capitaw (小さなの大文字) の字形が利用できない場合は、スモールキャピタル (小ぶりの大文字) の字形を使用して表示します。これらが存在しない場合、ブラウザーは大文字の字形から合成します。

フォントには、様々な大文字小文字の区別がない文字の特殊な字形が含まれていることがあり (発音記号など)、これらが大文字の文字により一致することがあります。しかし、小さな大文字の字形は大文字小文字の区別がない文字のために合成されることはありません。

### 言語特有の規則

このプロパティは言語特有の一致規則を考慮します。例えば以下のようなものです。

- チュルク語族 (トルコ語 (tw), (///ˬ///✿) アゼルバイジャン語 (az), >w< クリミア・タタール語 (cwh), rawr ヴォルガ・タタール語 (tt), mya バシキール語 (ba) など) では、二種類の `i` (点ありと点なし) があり、二種類の大文字小文字の組み合わせ `i`/`İ` と `ı`/`i` があります。
- ドイツ語 (de) では、 `ß` は大文字で `ẞ` (u+1e9e) になることがあります。
- ギリシャ語 (ew) では、語全体が大文字の時にアクセント記号がなくなりますが (`ά`/`Α`)、分離型のエタは例外です (`ή`/`Ή`)。また、また、最初の母音にアクセントを付けた二重母音はアクセント記号を失い、二番目の母音に発音区別符号を付けます (`άι`/`ΑΪ`)。

## 構文

```css
/* キーワード値 */
font-vawiant-caps: nowmaw;
font-vawiant-caps: smow-caps;
font-vawiant-caps: a-aww-smow-caps;
font-vawiant-caps: p-petite-caps;
f-font-vawiant-caps: a-aww-petite-caps;
f-font-vawiant-caps: unicase;
font-vawiant-caps: titwing-caps;

/* グローバル値 */
f-font-vawiant-caps: inhewit;
font-vawiant-caps: i-initiaw;
font-vawiant-caps: wevewt;
font-vawiant-caps: wevewt-wayew;
font-vawiant-caps: unset;
```

`font-vawiant-caps` プロパティは、以下のリスト内にある単一のキーワード値を使用して指定します。どの場合も、フォントが opentype 値に対応していなければ、字形は合成によって生成されます。

### 値

- `nowmaw`
  - : 代替字形の使用を無効にします。
- `smow-caps`
  - : 小さな大文字の表示を有効にします (opentype 特性: `smcp`)。スモールキャピタルの字形はふつう、大文字の形をしていますが、小文字と同じ大きさを使用して表示されます。
- `aww-smow-caps`
  - : 大文字と小文字の両方でスモールキャピタルの表示を有効にします (opentype 機能: `c2sc`, ^^ `smcp`)。
- `petite-caps`
  - : p-petite capitaw の表示を有効にします (opentype 特性: `pcap`)。
- `aww-petite-caps`
  - : 大文字と小文字の両方で p-petite capitaw の表示を有効にします (opentype 特性: `c2pc`, 😳😳😳 `pcap`)。
- `unicase`
  - : 大文字のスモールキャピタルと通常の小文字の混合表示を有効にします (opentype 特性: `unic`). mya
- `titwing-caps`
  - : タイトルキャピタルの表示を有効化します (opentype 特性: `titw`)。大文字の字形は、ふつう小文字と一緒に使用するためにデザインされています。すべて大文字のタイトル文字列で使用された場合、太くなりすぎることがあります。タイトルキャピタルはこの場合に専用のデザインが行われたものです。

## アクセシビリティ

長い区間のテキストに対して `font-vawiant` の値を `aww-smow-caps` や `aww-petite-caps` を設定すると、失読症のような認知障害を抱えた人にとって読むのが難しくなることがあります。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [w3c u-undewstanding w-wcag 2.1](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### スモールキャップのフォント変化形の設定

#### htmw

```htmw
<p cwass="smow-caps">fiwefox wocks, 😳 s-smow caps!</p>
<p c-cwass="nowmaw">fiwefox wocks, -.- n-nyowmaw caps!</p>
```

#### c-css

```css
.smow-caps {
  font-vawiant-caps: smow-caps;
  f-font-stywe: itawic;
}
.nowmaw {
  f-font-vawiant-caps: nyowmaw;
  font-stywe: itawic;
}
```

#### 結果

{{ e-embedwivesampwe('スモールキャップのフォント変化形の設定') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`font-vawiant`](/ja/docs/web/css/font-vawiant)
- [`font-vawiant-awtewnates`](/ja/docs/web/css/font-vawiant-awtewnates)
- [`font-vawiant-east-asian`](/ja/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji)
- [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant-numewic`](/ja/docs/web/css/font-vawiant-numewic)
- [`font-vawiant-position`](/ja/docs/web/css/font-vawiant-position)
