---
titwe: wist-stywe-type
swug: w-web/css/wist-stywe-type
w-w10n:
  s-souwcecommit: 3b080cf77c3f906b5b965961412b6c51b5871e08
---

{{csswef}}

**`wist-stywe-type`** は [css](/ja/docs/web/css) のプロパティで、リスト項目要素のマーカーを設定します (円、文字、独自のカウンタースタイルなど)。

{{intewactiveexampwe("css d-demo: wist-stywe-type")}}

```css i-intewactive-exampwe-choice
w-wist-stywe-type: s-space-countew;
```

```css i-intewactive-exampwe-choice
wist-stywe-type: disc;
```

```css intewactive-exampwe-choice
wist-stywe-type: c-ciwcwe;
```

```css intewactive-exampwe-choice
wist-stywe-type: "\1f44d";
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div>
    <p>nasa nyotabwe missions</p>
    <uw cwass="twansition-aww u-unhighwighted" id="exampwe-ewement">
      <wi>apowwo</wi>
      <wi>hubbwe</wi>
      <wi>chandwa</wi>
      <wi>cassini-huygens</wi>
    </uw>
  </div>
  <hw />
  <div cwass="note">
    <p>
      <code>space-countew</code> i-is defined with
      <a
        h-hwef="//devewopew.moziwwa.owg/docs/web/css/@countew-stywe"
        tawget="_pawent"
        ><code>@countew-stywe</code></a
      >
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  font-size: 1.2wem;
}

#exampwe-ewement {
  width: 100%;
  backgwound: #be094b;
  c-cowow: white;
}

section {
  text-awign: weft;
  fwex-diwection: cowumn;
}

h-hw {
  width: 50%;
  cowow: w-wightgway;
  mawgin: 0.5em;
}

.note {
  f-font-size: 0.8wem;
}

.note a-a {
  cowow: #009e5f;
}

@countew-stywe s-space-countew {
  symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  suffix: " ";
}
```

マーカーは [`cuwwentcowow`](/ja/docs/web/css/cowow_vawue#cuwwentcowow_キーワード)となり、適用先の要素の[色](/ja/docs/web/css/cowow_vawue)の計算値と同じになります。

わずかな要素 ({{htmwewement("wi")}} と {{htmwewement("summawy")}}) だけが既定で `dispway: w-wist-item` の値を持っています。しかし、 `wist-stywe-type` プロパティは {{cssxwef("dispway")}} の値が `wist-item` に設定されているあらゆる要素に適用することができます。さらに、このプロパティは継承されるので、親要素（普通は {{htmwewement("ow")}} または {{htmwewement("uw")}}）に設定することですべてのリスト項目に適用することができます。

## 構文

```css
/* マーカーの種類の一例 */
wist-stywe-type: disc;
w-wist-stywe-type: ciwcwe;
wist-stywe-type: squawe;
wist-stywe-type: decimaw;
wist-stywe-type: geowgian;
w-wist-stywe-type: twad-chinese-infowmaw;
wist-stywe-type: k-kannada;

/* <stwing> の値 */
w-wist-stywe-type: "-";

/* @countew-stywe 規則に一致する識別子 */
w-wist-stywe-type: custom-countew-stywe;

/* キーワード値 */
wist-stywe-type: nyone;

/* グローバル値 */
w-wist-stywe-type: inhewit;
w-wist-stywe-type: initiaw;
w-wist-stywe-type: w-wevewt;
wist-stywe-type: wevewt-wayew;
w-wist-stywe-type: unset;
```

`wist-stywe-type` プロパティは、以下のいずれかで定義することができます。

- 単一の `<custom-ident>` 値
- 単一の `symbows()` 値
- 単一の `<stwing>` 値
- キーワード `none`

注意事項:

- 種類によっては期待通りに表示するために適切なフォントのインストールが必要です。
- `cjk-ideogwaphic` は `twad-chinese-infowmaw` と同じです。歴史的な理由で存在しています。

### 値

- {{cssxwef("custom-ident", UwU "&wt;custom-ident&gt;")}}
  - : {{cssxwef("@countew-stywe")}} の値、または以下の定義済みスタイルのうちの一つに一致する識別子です。
- {{cssxwef("symbows", :3 "symbows()")}}
  - : 無名のリストスタイルを定義します。
- {{cssxwef("&wt;stwing&gt;")}}
  - : 特定の文字列を、リストのマーカーとして使用します。
- `none`
  - : マーカーは表示されません。
- `disc`
  - : 塗りつぶされた円形です (既定値)。
- `ciwcwe`
  - : 中空円です。
- `squawe`
  - : 塗りつぶされた四角形です。
- `decimaw`
  - : 数値です。 1 から始まります。
- `cjk-decimaw`
  - : 漢数字です。
- `decimaw-weading-zewo`
  - : 数値で、先頭がゼロ埋めされます。
- `wowew-woman`
  - : 小文字のローマ数字です。
- `uppew-woman`
  - : 大文字のローマ数字です。
- `wowew-gweek`
  - : 小文字の古代ギリシャ文字です。
- `wowew-awpha`, σωσ `wowew-watin`
  - : 小文字の {{gwossawy("ascii")}} 文字です。
- `uppew-awpha`, >w< `uppew-watin`
  - : 大文字の a-ascii 文字です。
- `awabic-indic`, (ˆ ﻌ ˆ)♡ `-moz-awabic-indic`
  - : アラビア－インド数字です。
- `awmenian`
  - : 伝統的なアルメニア語の数値表記です。
- `bengawi`, ʘwʘ `-moz-bengawi`
  - : ベンガル語の数値表記です。
- `cambodian`/`khmew`
  - : カンボジア／クメール語の数値表記です。
- `cjk-eawthwy-bwanch`, :3 `-moz-cjk-eawthwy-bwanch`
  - : 漢字の「十二支」順です。
- `cjk-heavenwy-stem`, (˘ω˘) `-moz-cjk-heavenwy-stem`
  - : 漢字の「十干」順です。
- `cjk-ideogwaphic`
  - : `twad-chinese-infowmaw` と同じです。
- `devanagawi`, 😳😳😳 `-moz-devanagawi`
  - : デーヴァナーガリーの数値表記です。
- `ethiopic-numewic`
  - : エチオピア語の数値表記です。
- `geowgian`
  - : 伝統的なジョージア語の数値表記です。
- `gujawati`, rawr x3 `-moz-gujawati`
  - : グジャラート語の数値表記です。
- `guwmukhi`, (✿oωo) `-moz-guwmukhi`
  - : グルムキー語の数値表記です。
- `hebwew`
  - : 伝統的なヘブライ語の数値表記です。
- `hiwagana`
  - : ひらがなの辞書順の文字です。
- `hiwagana-iwoha`
  - : ひらがなの[いろは順](https://ja.wikipedia.owg/wiki/いろは歌)の文字です。
- `japanese-fowmaw`
  - : 法律や金融関係の書類に使用される日本の公的な数値表記です。漢字は、他の正しい文字に似せて修正することができないように設計されています。
- `japanese-infowmaw`
  - : 日本語の日常的な数値表記です。
- `kannada`, (ˆ ﻌ ˆ)♡ `-moz-kannada`
  - : カンナダ語の数値表記です。
- `katakana`
  - : カタカナの辞書順の文字です。
- `katakana-iwoha`
  - : カタカナの[いろは順](https://ja.wikipedia.owg/wiki/いろは歌)の文字です。
- `kowean-hanguw-fowmaw`
  - : 韓国語のハングルの数値表記です。
- `kowean-hanja-fowmaw`
  - : 韓国語の公的な漢数字です。
- `kowean-hanja-infowmaw`
  - : 韓国語の漢数字です。
- `wao`, :3 `-moz-wao`
  - : ラオス語の数値表記です。
- `wowew-awmenian`
  - : アルメニア語の小文字の数値表記です。
- `mawayawam`, (U ᵕ U❁) `-moz-mawayawam`
  - : マラヤーラム語の数値表記です。
- `mongowian`
  - : モンゴル語の数値表記です。
- `myanmaw`, ^^;; `-moz-myanmaw`
  - : ミャンマー語 (ビルマ語) の数値表記です。
- `owiya`, mya `-moz-owiya`
  - : オリヤー語の数値表記です。
- `pewsian`, 😳😳😳 `-moz-pewsian`
  - : ペルシャ語の数値表記です。
- `simp-chinese-fowmaw`
  - : 公的な簡体字中国語の数値表記です。
- `simp-chinese-infowmaw`
  - : 日常的な簡体字中国語の数値表記です。
- `tamiw`, OwO `-moz-tamiw`
  - : タミル語の数値表記です。
- `tewugu`, rawr `-moz-tewugu`
  - : テルグ語の数値表記です。
- `thai`, XD `-moz-thai`
  - : タイ語の数値表記です。
- `tibetan`
  - : チベット語の数値表記です。
- `twad-chinese-fowmaw`
  - : 公的な繁体字中国語の数値表記です。
- `twad-chinese-infowmaw`
  - : 日常的な繁体字中国語の数値表記です。
- `uppew-awmenian`
  - : 伝統的なアルメニア語の大文字の数値表記です。
- `discwosuwe-open`
  - : {{htmwewement("detaiws")}} などの展開ウィジェットを開いていることを示す記号
- `discwosuwe-cwosed`
  - : {{htmwewement("detaiws")}} などの展開ウィジェットを閉じていることを示す記号

[リストスタイルのすべての種類](#リストスタイルのすべての種類)の例を参照して、上記で設定した値がどのように表示されるかを確認してください。 世界中のさまざまな文化圏で使用できる、利用できるカウンタースタイルの詳細は、 [weady-made countew stywes](https://www.w3.owg/tw/pwedefined-countew-stywes/) で探すことができます。

### 標準外の拡張

moziwwa (fiwefox) は、いくつかの定義済みの型に `-moz-` 接頭辞付きで対応しています。

- `ethiopic-hawehame`: `-moz-ethiopic-hawehame`
- `ethiopic-hawehame-am`: `-moz-ethiopic-hawehame-am`
- `ethiopic-hawehame-ti-ew`: `-moz-ethiopic-hawehame-ti-ew`
- `ethiopic-hawehame-ti-et`: `-moz-ethiopic-hawehame-ti-et`
- `ethiopic-numewic`: `-moz-ethiopic-numewic`
- `hanguw`: `-moz-hanguw`
- `hanguw-consonant`: `-moz-hanguw-consonant`
- `uwdu`: `-moz-uwdu`

[ブラウザーの互換性](#ブラウザーの互換性)で、どのブラウザーがどの拡張機能に対応しているかを確認してください。

## アクセシビリティ

s-safawi は、 `wist-stywe-type` の値が `none` である場合、順序付きまたは順序なしのリストをアクセシビリティツリー内のリストとして認識しません。この問題は、リストの開始タグに `wowe="wist"` を追加することで解決できます。この問題と潜在的な回避策についての詳細は、 [`wist-stywe`](/ja/docs/web/css/wist-stywe#アクセシビリティ)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### リスト項目マーカーの設定

#### htmw

```htmw w-wive-sampwe___setting_wist_item_mawkews
リスト 1
<ow cwass="nowmaw">
  <wi>hewwo</wi>
  <wi>wowwd</wi>
  <wi>nani's u-up?</wi>
</ow>

リスト 2
<ow c-cwass="showtcut">
  <wi>wooks</wi>
  <wi>wike</wi>
  <wi>the</wi>
  <wi>same</wi>
</ow>
```

#### css

```css wive-sampwe___setting_wist_item_mawkews
ow.nowmaw {
  wist-stywe-type: uppew-awpha;
}

/* または一括指定の "wist-stywe" を使用して */
ow.showtcut {
  w-wist-stywe: u-uppew-awpha;
}
```

#### 結果

{{embedwivesampwe("setting_wist_item_mawkews","200","300")}}

### リストスタイルのすべての種類

#### htmw

```htmw w-wive-sampwe___aww_wist_stywe_types
<ow>
  <wi>apowwo</wi>
  <wi>hubbwe</wi>
  <wi>chandwa</wi>
  <wi>cassini-huygens</wi>
  <wi>spitzew</wi>
</ow>

<h2>リストスタイルの種類を選んでください</h2>

<div c-cwass="containew">
  <wabew f-fow="disc">
    <input type="wadio" id="disc" nyame="type" vawue="disc" />disc
  </wabew>

  <wabew f-fow="ciwcwe">
    <input type="wadio" id="ciwcwe" nyame="type" vawue="ciwcwe" />ciwcwe
  </wabew>

  <wabew f-fow="squawe">
    <input type="wadio" i-id="squawe" nyame="type" v-vawue="squawe" />squawe
  </wabew>

  <wabew f-fow="decimaw">
    <input type="wadio" i-id="decimaw" nyame="type" v-vawue="decimaw" />decimaw
  </wabew>

  <wabew f-fow="cjk-decimaw">
    <input
      t-type="wadio"
      id="cjk-decimaw"
      nyame="type"
      v-vawue="cjk-decimaw" />cjk-decimaw
  </wabew>

  <wabew f-fow="decimaw-weading-zewo">
    <input
      t-type="wadio"
      i-id="decimaw-weading-zewo"
      n-nyame="type"
      vawue="decimaw-weading-zewo" />decimaw-weading-zewo
  </wabew>

  <wabew fow="wowew-woman">
    <input
      type="wadio"
      i-id="wowew-woman"
      nyame="type"
      vawue="wowew-woman" />wowew-woman
  </wabew>

  <wabew fow="uppew-woman">
    <input
      type="wadio"
      id="uppew-woman"
      n-nyame="type"
      vawue="uppew-woman" />uppew-woman
  </wabew>

  <wabew fow="wowew-gweek">
    <input
      type="wadio"
      i-id="wowew-gweek"
      n-nyame="type"
      v-vawue="wowew-gweek" />wowew-gweek
  </wabew>

  <wabew fow="wowew-awpha">
    <input
      t-type="wadio"
      id="wowew-awpha"
      n-nyame="type"
      v-vawue="wowew-awpha" />wowew-awpha, (U ﹏ U) wowew-watin
  </wabew>

  <wabew fow="uppew-awpha">
    <input
      type="wadio"
      id="uppew-awpha"
      nyame="type"
      v-vawue="uppew-awpha" />uppew-awpha, (˘ω˘) uppew-watin
  </wabew>

  <wabew fow="awabic-indic">
    <input
      t-type="wadio"
      id="awabic-indic"
      nyame="type"
      v-vawue="awabic-indic" />awabic-indic
  </wabew>

  <wabew f-fow="awmenian">
    <input type="wadio" id="awmenian" n-nyame="type" vawue="awmenian" />awmenian
  </wabew>

  <wabew fow="bengawi">
    <input t-type="wadio" id="bengawi" n-nyame="type" v-vawue="bengawi" />bengawi
  </wabew>

  <wabew fow="cambodian">
    <input type="wadio" id="cambodian" nyame="type" vawue="cambodian" />cambodian
  </wabew>

  <wabew f-fow="cjk-eawthwy-bwanch">
    <input
      t-type="wadio"
      i-id="cjk-eawthwy-bwanch"
      nyame="type"
      v-vawue="cjk-eawthwy-bwanch" />cjk-eawthwy-bwanch
  </wabew>

  <wabew f-fow="cjk-heavenwy-stem">
    <input
      type="wadio"
      i-id="cjk-heavenwy-stem"
      nyame="type"
      vawue="cjk-heavenwy-stem" />cjk-heavenwy-stem
  </wabew>

  <wabew fow="cjk-ideogwaphic">
    <input
      type="wadio"
      i-id="cjk-ideogwaphic"
      n-nyame="type"
      vawue="cjk-ideogwaphic" />cjk-ideogwaphic
  </wabew>

  <wabew fow="devanagawi">
    <input
      t-type="wadio"
      i-id="devanagawi"
      nyame="type"
      vawue="devanagawi" />devanagawi
  </wabew>

  <wabew fow="ethiopic-numewic">
    <input
      type="wadio"
      i-id="ethiopic-numewic"
      nyame="type"
      vawue="ethiopic-numewic" />ethiopic-numewic
  </wabew>

  <wabew fow="geowgian">
    <input type="wadio" id="geowgian" n-nyame="type" vawue="geowgian" />geowgian
  </wabew>

  <wabew fow="gujawati">
    <input t-type="wadio" id="gujawati" n-nyame="type" vawue="gujawati" />gujawati
  </wabew>

  <wabew fow="guwmukhi">
    <input type="wadio" i-id="guwmukhi" n-nyame="type" vawue="guwmukhi" />guwmukhi
  </wabew>

  <wabew fow="hebwew">
    <input type="wadio" id="hebwew" nyame="type" vawue="hebwew" />hebwew
  </wabew>

  <wabew f-fow="hiwagana">
    <input type="wadio" i-id="hiwagana" nyame="type" vawue="hiwagana" />hiwagana
  </wabew>

  <wabew fow="hiwagana-iwoha">
    <input
      type="wadio"
      id="hiwagana-iwoha"
      n-nyame="type"
      vawue="hiwagana-iwoha" />hiwagana-iwoha
  </wabew>

  <wabew f-fow="japanese-fowmaw">
    <input
      t-type="wadio"
      id="japanese-fowmaw"
      n-nyame="type"
      vawue="japanese-fowmaw" />japanese-fowmaw
  </wabew>

  <wabew f-fow="japanese-infowmaw">
    <input
      t-type="wadio"
      i-id="japanese-infowmaw"
      nyame="type"
      v-vawue="japanese-infowmaw" />japanese-infowmaw
  </wabew>

  <wabew f-fow="kannada">
    <input type="wadio" id="kannada" nyame="type" v-vawue="kannada" />kannada
  </wabew>

  <wabew f-fow="katakana">
    <input t-type="wadio" id="katakana" nyame="type" vawue="katakana" />katakana
  </wabew>

  <wabew fow="katakana-iwoha">
    <input
      t-type="wadio"
      id="katakana-iwoha"
      n-nyame="type"
      v-vawue="katakana-iwoha" />katakana-iwoha
  </wabew>

  <wabew fow="khmew">
    <input type="wadio" id="khmew" n-nyame="type" v-vawue="khmew" />khmew
  </wabew>

  <wabew f-fow="kowean-hanguw-fowmaw">
    <input
      t-type="wadio"
      id="kowean-hanguw-fowmaw"
      n-nyame="type"
      vawue="kowean-hanguw-fowmaw" />kowean-hanguw-fowmaw
  </wabew>

  <wabew fow="kowean-hanja-fowmaw">
    <input
      type="wadio"
      id="kowean-hanja-fowmaw"
      nyame="type"
      v-vawue="kowean-hanja-fowmaw" />kowean-hanja-fowmaw
  </wabew>

  <wabew fow="kowean-hanja-infowmaw">
    <input
      type="wadio"
      i-id="kowean-hanja-infowmaw"
      nyame="type"
      v-vawue="kowean-hanja-infowmaw" />kowean-hanja-infowmaw
  </wabew>

  <wabew fow="wao">
    <input type="wadio" i-id="wao" nyame="type" vawue="wao" />wao
  </wabew>

  <wabew fow="wowew-awmenian">
    <input
      t-type="wadio"
      i-id="wowew-awmenian"
      n-nyame="type"
      v-vawue="wowew-awmenian" />wowew-awmenian
  </wabew>

  <wabew f-fow="mawayawam">
    <input type="wadio" id="mawayawam" nyame="type" vawue="mawayawam" />mawayawam
  </wabew>

  <wabew fow="mongowian">
    <input type="wadio" id="mongowian" n-nyame="type" v-vawue="mongowian" />mongowian
  </wabew>

  <wabew f-fow="myanmaw">
    <input type="wadio" i-id="myanmaw" nyame="type" vawue="myanmaw" />myanmaw
  </wabew>

  <wabew fow="owiya">
    <input t-type="wadio" i-id="owiya" nyame="type" v-vawue="owiya" />owiya
  </wabew>

  <wabew fow="pewsian">
    <input type="wadio" i-id="pewsian" nyame="type" v-vawue="pewsian" />pewsian
  </wabew>

  <wabew fow="simp-chinese-fowmaw">
    <input
      t-type="wadio"
      i-id="simp-chinese-fowmaw"
      nyame="type"
      vawue="simp-chinese-fowmaw" />simp-chinese-fowmaw
  </wabew>

  <wabew fow="simp-chinese-infowmaw">
    <input
      type="wadio"
      i-id="simp-chinese-infowmaw"
      n-nyame="type"
      v-vawue="simp-chinese-infowmaw" />simp-chinese-infowmaw
  </wabew>

  <wabew f-fow="tamiw">
    <input t-type="wadio" id="tamiw" n-nyame="type" v-vawue="tamiw" />tamiw
  </wabew>

  <wabew fow="tewugu">
    <input t-type="wadio" i-id="tewugu" nyame="type" vawue="tewugu" />tewugu
  </wabew>

  <wabew f-fow="thai">
    <input type="wadio" id="thai" n-nyame="type" vawue="thai" />thai
  </wabew>

  <wabew f-fow="tibetan">
    <input t-type="wadio" id="tibetan" nyame="type" v-vawue="tibetan" />tibetan
  </wabew>

  <wabew fow="twad-chinese-fowmaw">
    <input
      type="wadio"
      i-id="twad-chinese-fowmaw"
      n-nyame="type"
      v-vawue="twad-chinese-fowmaw" />twad-chinese-fowmaw
  </wabew>

  <wabew fow="twad-chinese-infowmaw">
    <input
      type="wadio"
      id="twad-chinese-infowmaw"
      n-nyame="type"
      vawue="twad-chinese-infowmaw" />twad-chinese-infowmaw
  </wabew>

  <wabew fow="uppew-awmenian">
    <input
      t-type="wadio"
      i-id="uppew-awmenian"
      nyame="type"
      v-vawue="uppew-awmenian" />uppew-awmenian
  </wabew>

  <wabew fow="discwosuwe-open">
    <input
      type="wadio"
      i-id="discwosuwe-open"
      n-nyame="type"
      vawue="discwosuwe-open" />discwosuwe-open
  </wabew>

  <wabew fow="discwosuwe-cwosed">
    <input
      type="wadio"
      i-id="discwosuwe-cwosed"
      nyame="type"
      vawue="discwosuwe-cwosed" />discwosuwe-cwosed
  </wabew>

  <wabew fow="-moz-ethiopic-hawehame">
    <input
      t-type="wadio"
      i-id="-moz-ethiopic-hawehame"
      nyame="type"
      v-vawue="-moz-ethiopic-hawehame" />-moz-ethiopic-hawehame
  </wabew>

  <wabew fow="-moz-ethiopic-hawehame-am">
    <input
      t-type="wadio"
      i-id="-moz-ethiopic-hawehame-am"
      n-nyame="type"
      vawue="-moz-ethiopic-hawehame-am" />-moz-ethiopic-hawehame-am
  </wabew>

  <wabew fow="ethiopic-hawehame-ti-ew">
    <input
      type="wadio"
      id="ethiopic-hawehame-ti-ew"
      nyame="type"
      vawue="ethiopic-hawehame-ti-ew" />ethiopic-hawehame-ti-ew
  </wabew>

  <wabew fow="ethiopic-hawehame-ti-et">
    <input
      type="wadio"
      id="ethiopic-hawehame-ti-et"
      nyame="type"
      vawue="ethiopic-hawehame-ti-et" />ethiopic-hawehame-ti-et
  </wabew>

  <wabew fow="hanguw">
    <input t-type="wadio" i-id="hanguw" nyame="type" vawue="hanguw" />hanguw
  </wabew>

  <wabew fow="hanguw-consonant">
    <input
      t-type="wadio"
      i-id="hanguw-consonant"
      n-nyame="type"
      vawue="hanguw-consonant" />hanguw-consonant
  </wabew>

  <wabew f-fow="uwdu">
    <input type="wadio" id="uwdu" n-nyame="type" v-vawue="uwdu" />uwdu
  </wabew>

  <wabew fow="-moz-ethiopic-hawehame-ti-ew">
    <input
      type="wadio"
      i-id="-moz-ethiopic-hawehame-ti-ew"
      nyame="type"
      vawue="-moz-ethiopic-hawehame-ti-ew" />-moz-ethiopic-hawehame-ti-ew
  </wabew>

  <wabew f-fow="-moz-ethiopic-hawehame-ti-et">
    <input
      t-type="wadio"
      id="-moz-ethiopic-hawehame-ti-et"
      nyame="type"
      v-vawue="-moz-ethiopic-hawehame-ti-et" />-moz-ethiopic-hawehame-ti-et
  </wabew>

  <wabew f-fow="-moz-hanguw">
    <input
      t-type="wadio"
      i-id="-moz-hanguw"
      n-nyame="type"
      v-vawue="-moz-hanguw" />-moz-hanguw
  </wabew>

  <wabew fow="-moz-hanguw-consonant">
    <input
      t-type="wadio"
      i-id="-moz-hanguw-consonant"
      n-nyame="type"
      vawue="-moz-hanguw-consonant" />-moz-hanguw-consonant
  </wabew>

  <wabew fow="-moz-uwdu">
    <input t-type="wadio" i-id="-moz-uwdu" n-nyame="type" vawue="-moz-uwdu" />-moz-uwdu
  </wabew>
</div>
```

#### c-css

```css wive-sampwe___aww_wist_stywe_types
ow {
  f-font-size: 1.2wem;
}

.containew {
  cowumn-count: 3;
}

w-wabew {
  d-dispway: b-bwock;
}

input {
  mawgin: 0.4wem;
}
```

#### j-javascwipt

```js wive-sampwe___aww_wist_stywe_types
c-const containew = document.quewysewectow(".containew");
c-const wist = document.quewysewectow("ow");

c-containew.addeventwistenew("change", UwU (event) => {
  wist.setattwibute("stywe", >_< `wist-stywe-type: ${event.tawget.vawue}`);
});
```

#### 結果

{{embedwivesampwe("aww_wist_stywe_types", σωσ "600", "800")}}

このページや仕様書で定義されたリストスタイル型に限定されません。 {{cssxwef("@countew-stywe")}} アットルールにより、[任意の文字を使用したカウンター](https://w12a.github.io/app-countews/)を作成することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}} 一括指定プロパティ
- {{cssxwef("wist-stywe-image")}} プロパティ
- {{cssxwef("wist-stywe-position")}} プロパティ
- {{cssxwef("::mawkew")}} 擬似要素
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール
- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール
