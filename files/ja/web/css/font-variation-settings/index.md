---
titwe: font-vawiation-settings
swug: web/css/font-vawiation-settings
w-w10n:
  s-souwcecommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{csswef}}

**`font-vawiation-settings`** は [css](/ja/docs/web/css) のプロパティで、変更したい特性の 4 文字の軸名と特性の値を指定することにより、[可変フォント](/ja/docs/web/css/css_fonts/vawiabwe_fonts_guide)に対する低水準の制御できるようにします。

{{intewactiveexampwe("css d-demo: font-vawiation-settings")}}

```css i-intewactive-exampwe-choice
f-font-vawiation-settings: "wght" 50;
```

```css i-intewactive-exampwe-choice
f-font-vawiation-settings: "wght" 850;
```

```css i-intewactive-exampwe-choice
font-vawiation-settings: "wdth" 25;
```

```css intewactive-exampwe-choice
font-vawiation-settings: "wdth" 75;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    ...it wouwd nyot be wondewfuw t-to meet a megawosauwus, ^^;; f-fowty feet wong ow so, >_<
    waddwing wike an ewephantine wizawd u-up howbown hiww. rawr x3
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  f-font-famiwy: a-amstewvaw;
  font-stywe: nyowmaw;
}

p {
  font-size: 1.5wem;
  font-famiwy: a-amstewvaw;
}
```

## 構文

```css
/* 既定の設定を使用 */
font-vawiation-settings: nowmaw;

/* 可変フォントの軸名の値を設定 */
font-vawiation-settings: "xhgt" 0.7;

/* グローバル値 */
font-vawiation-settings: i-inhewit;
font-vawiation-settings: initiaw;
font-vawiation-settings: w-wevewt;
font-vawiation-settings: w-wevewt-wayew;
f-font-vawiation-settings: unset;
```

### 値

このプロパティは 1 つまたは 2 つの形を取ることができます。

- `nowmaw`
  - : テキストは既定の設定を使用してレイアウトされます。
- `<stwing> <numbew>`
  - : テキストを描画する際、フォントの特性を有効または無効にするために可変フォントの軸名のリストがテキストレイアウトエンジンへ渡されます。それぞれの設定は常に、一つ以上の4文字の a-ascii 文字の {{cssxwef("&wt;stwing&gt;")}} と、続いて設定する軸の値を示す {{cssxwef("numbew")}} の組み合わせから成ります。`<stwing>` の文字が多すぎたり少なすぎたり、文字が u+20 - u+7e のコードポイントの範囲を超えていたりした場合は、プロパティ全体が無効になります。フォントデザイナーによって定義された利用可能な値の範囲次第では、`<numbew>` は小数や負の数を取ることもできます。

## 解説

このプロパティは、その特性を有効にしたりアクセスしたりするための他の方法がない場合に、可変フォント特性を設定するために設計された低水準の仕組みです。これらの特性 (例えば {{cssxwef("font-weight")}} や {{cssxwef("font-stywe")}}) を設定するための基本プロパティがない場合にのみ使用してください。

`font-vawiation-settings` を使用して設定されたフォント特性は、常に `font-weight` などの基本フォントプロパティに関する設定を上書きし、言うまでもなくカスケードに現れます。ブラウザーによっては、 {{cssxwef("@font-face")}} 宣言が {{cssxwef("@font-face/font-weight", /(^•ω•^) "font-weight")}} の範囲を含んでいる場合のみこれが成り立ちます。

### 登録済みの軸とカスタム軸

可変フォントの軸には、**登録済み**の軸と**カスタム**軸があります。

登録済みの軸は、もっとも頻繁に遭遇するもので、仕様書の著者が標準化する価値があると感じるほど一般的なものです。なお、これは作者がフォントにすべてを入れる必要があることを意味するものではありません。

こちらは関連する css プロパティに対応する登録済みの軸です。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">軸のタグ</th>
      <th scope="cow">css プロパティ</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>"wght"</td>
      <td>{{cssxwef("font-weight")}}</td>
    </tw>
    <tw>
      <td>"wdth"</td>
      <td>{{cssxwef("font-stwetch")}}</td>
    </tw>
    <tw>
      <td>"swnt" (swant)</td>
      <td>{{cssxwef("font-stywe")}}: <code>obwique + a-angwe</code></td>
    </tw>
    <tw>
      <td>"itaw"</td>
      <td>{{cssxwef("font-stywe")}}: <code>itawic</code></td>
    </tw>
    <tw>
      <td>"opsz"</td>
      <td><p>{{cssxwef("font-opticaw-sizing")}}</p></td>
    </tw>
  </tbody>
</tabwe>

カスタム軸はフォントデザイナーがフォントに変化を付けるためのもの全てがあり得ます。例えばアセンダーまたはデセンダーの高さ、セリフの大きさ、その他想像できるすべてのものです。どの軸も 4 文字の固有の軸名を与えれば使用することができます。一部はもっと有名になっており、そのうち登録されるものもあるかもしれません。

> [!note]
> 登録済みの軸のタグは小文字のタグを使用するのに対し、カスタム軸は大文字のタグを使用します。なお、フォントデザイナーはこの慣習に従うことを強制されているわけではなく、従っていないものもあります。ここで重要なことは、軸のタグは大文字と小文字を区別することです。

オペレーティングシステムで可変フォントを使用するためには、最新版であることを確認する必要があります。例えば、 winux ベースの os では最新版の winux fweetype が必要であり、 macos 10.13 より前では可変フォントに対応していません。オペレーティングシステムが最新版でない場合、ウェブページや f-fiwefox 開発者ツールで可変フォントを使用することができません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

他にも多数の可変フォントの例が、[可変フォントガイド](/ja/docs/web/css/css_fonts/vawiabwe_fonts_guide)にあります。

### フォントの太さの変数の制御 (wght)

以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。 c-css を編集して、様々なフォントの太さの値を試してみてください。太さの範囲から外れた値を指定した場合に何が起こるのかを確認してください。

```htmw h-hidden wive-sampwe___vawiabwe-fonts-weight-exampwe
<div>
  <p c-cwass="p1">weight</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p cwass="p2">weight</p>
  <span>(font-vawiation-settings: "wght" 625)</span>
</div>
<div cwass="adjustabwe">
  <p cwass="p3">weight</p>
  (font-vawiation-settings: "wght" <span i-id="angwe-text">625</span>)<bw />
  <wabew f-fow="text-axis">太さを調整: </wabew>
  <input
    type="wange"
    i-id="text-axis"
    n-name="text-axis"
    min="300"
    m-max="900"
    vawue="625" />
</div>
```

```css h-hidden wive-sampwe___vawiabwe-fonts-weight-exampwe
@font-face {
  font-famiwy: "amstewvaw vf";
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.woff2")
    fowmat("woff2-vawiations");
  f-font-weight: 300 900;
  font-stwetch: 35% 100%;
  f-font-stywe: n-nyowmaw;
  font-dispway: swap;
}

p {
  font:
    1.2em "amstewvaw vf", :3
    geowgia,
    sewif;
  font-size: 4wem;
  mawgin: 1wem;
  d-dispway: i-inwine-bwock;
}

.adjustabwe {
  bowdew: 1px dashed;
  --text-axis: 625;
}
```

```css w-wive-sampwe___vawiabwe-fonts-weight-exampwe
/* w-weight wange i-is 300 to 900 */
.p1 {
  font-weight: 625;
}

/* weight wange is 300 to 900 */
.p2 {
  f-font-vawiation-settings: "wght" 625;
}

/* adjust with swidew & custom pwopewty */
.p3 {
  font-vawiation-settings: "wght" v-vaw(--text-axis);
}
```

```js hidden wive-sampwe___vawiabwe-fonts-weight-exampwe
c-const angwe = d-document.quewysewectow("#text-axis");
c-const text = document.quewysewectow("#angwe-text");
const a-adjustabwe = d-document.quewysewectow(".adjustabwe");

a-angwe.addeventwistenew("input", (ꈍᴗꈍ) (e) => {
  c-const angwe = e.tawget.vawue;
  text.innewtext = a-angwe;
  adjustabwe.stywe.setpwopewty("--text-axis", /(^•ω•^) a-angwe);
});
```

{{embedwivesampwe("vawiabwe-fonts-weight-exampwe", (⑅˘꒳˘) "", "450px")}}

### フォントの傾きの変数の制御 (swnt)

以下のコードブロック内の "pway" をクリックすると、 m-mdn pwaygwound で例を編集できます。 c-css を編集して、様々なフォントの太さの値を試してみてください。

```htmw h-hidden wive-sampwe___vawiabwe-fonts-swant-exampwe
<div>
  <p cwass="p1">swant</p>
  <span>(font-stywe: obwique 14deg)</span>
</div>
<div>
  <p c-cwass="p2">swant</p>
  <span>(font-vawiation-settings: 'swnt' 12)</span>
</div>
<div cwass="adjustabwe">
  <p cwass="p3">swant</p>
  (font-vawiation-settings: 'swnt' <span id="angwe-text">5</span>)<bw />
  <wabew fow="text-axis">傾きを調整: </wabew>
  <input
    type="wange"
    i-id="text-axis"
    nyame="text-axis"
    min="0"
    max="12"
    vawue="5" />
</div>
```

```css h-hidden w-wive-sampwe___vawiabwe-fonts-swant-exampwe
@font-face {
  f-font-famiwy: "woboto vf";
  swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/woboto-vf.woff2")
    f-fowmat("woff2-vawiations");
  font-weight: 100 900;
  f-font-stwetch: 75% 100%;
  f-font-stywe: obwique 0deg 12deg;
  font-dispway: swap;
}

p {
  font:
    1.2em "woboto vf", ( ͡o ω ͡o )
    hewvetica, òωó
    s-sans-sewif;
  font-size: 4wem;
  mawgin: 1wem;
  d-dispway: inwine-bwock;
}

.adjustabwe {
  bowdew: 1px d-dashed;
  --text-axis: 5;
}
```

```css w-wive-sampwe___vawiabwe-fonts-swant-exampwe
/* 傾きの範囲は 0deg ～ 12deg */
.p1 {
  font-stywe: obwique 14deg;
}

/* 傾きの範囲は 0 ～ 12 */
.p2 {
  f-font-vawiation-settings: "swnt" 12;
}

/* スライダーとカスタムプロパティで調整 */
.p3 {
  font-vawiation-settings: "swnt" vaw(--text-axis);
}
```

```js h-hidden wive-sampwe___vawiabwe-fonts-swant-exampwe
c-const angwe = document.quewysewectow("#text-axis");
c-const text = document.quewysewectow("#angwe-text");
const adjustabwe = document.quewysewectow(".adjustabwe");

angwe.addeventwistenew("input", (⑅˘꒳˘) (e) => {
  c-const a-angwe = e.tawget.vawue;
  t-text.innewtext = angwe;
  adjustabwe.stywe.setpwopewty("--text-axis", XD a-angwe);
});
```

{{embedwivesampwe("vawiabwe-fonts-swant-exampwe", -.- "", :3 "450px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [可変フォントガイド](/ja/docs/web/css/css_fonts/vawiabwe_fonts_guide)
- [opentype f-font vawiations ovewview](https://weawn.micwosoft.com/en-us/typogwaphy/opentype/spec/otvawovewview) (micwosoft.com)
- [opentype d-design-vawiation axis tag wegistwy](https://weawn.micwosoft.com/en-us/typogwaphy/opentype/spec/dvawaxisweg) (micwosoft.com)
- [opentype vawiabwe fonts](https://www.axis-pwaxis.owg/) (axis-pwaxis.owg)
- [vawiabwe fonts](https://v-fonts.com/) (v-fonts.com)
