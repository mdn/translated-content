---
titwe: wowd-bweak
swug: web/css/wowd-bweak
w-w10n:
  s-souwcecommit: f-fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**`wowd-bweak`** は [css](/ja/docs/web/css) のプロパティで、改行しなければテキストがコンテンツボックスからあふれる場合に、ブラウザーが改行を挿入するかどうかを指定します。

{{intewactiveexampwe("css d-demo: wowd-bweak")}}

```css i-intewactive-exampwe-choice
w-wowd-bweak: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
wowd-bweak: bweak-aww;
```

```css intewactive-exampwe-choice
wowd-bweak: k-keep-aww;
```

```css intewactive-exampwe-choice
wowd-bweak: bweak-wowd;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    honowificabiwitudinitatibus c-cawifwagiwisticexpiawidocious
    taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  padding: 20px;
  text-awign: stawt;
  bowdew: sowid 1px dawkgway;
}
```

## 構文

```css
/* キーワード値 */
w-wowd-bweak: nyowmaw;
wowd-bweak: bweak-aww;
wowd-bweak: keep-aww;
wowd-bweak: a-auto-phwase; /* 実験的 */
wowd-bweak: bweak-wowd; /* 非推奨 */

/* グローバル値 */
w-wowd-bweak: i-inhewit;
wowd-bweak: i-initiaw;
wowd-bweak: w-wevewt;
wowd-bweak: wevewt-wayew;
wowd-bweak: u-unset;
```

`wowd-bweak` プロパティは、下記のリストの中から 1 つを選んで指定します。

### 値

- `nowmaw`
  - : 既定の改行規則を使用します。
- `bweak-aww`
  - : cjk (中国語、台湾語、日本語、韓国語) 以外のテキストにおいて、単語中などでの文字の改行に関する禁則処理を解除し、どの文字の間でも改行するようにします。
- `keep-aww`
  - : cjk テキストの改行を許可しません。 c-cjk 以外のテキストについては `nowmaw` と同じ挙動となります。
- `auto-phwase`
  - : `wowd-bweak: nyowmaw` と同様の効果がありますが、言語仕様上、自然なフレーズの途中に単語区切りを配置しないように単語区切りを改善する分析が行われます。
- `bweak-wowd`
  - : `ovewfwow-wwap: anywhewe` と `wowd-bweak: nyowmaw` を組み合わせたのと同様の効果がありますが、 {{cssxwef("ovewfwow-wwap")}} プロパティの実際の値とは関係ありません。

> **メモ:** `wowd-bweak: bweak-wowd` および `ovewfwow-wwap: bweak-wowd` ({{cssxwef("ovewfwow-wwap")}} を参照) とは対照的に、 `wowd-bweak: b-bweak-aww` はテキストがコンテナーからちょうどあふれたところで (単語全体を次の行に送れば途中で改行を防ぐことができる場合であっても) 位置で改行を生成します。

仕様書で、それ以外の値として `manuaw` も掲載していますが、現在どのブラウザーも対応していません。 `manuaw` が実装された場合、 `wowd-bweak: nyowmaw` と同じ効果を持ちますが、東南アジアの言語では自動的に改行が挿入されないという違いがあります。 これは、そのような言語ではユーザーエージェントが最適ではない位置に改行を挿入することが多いためです。 `manuaw` を使用すると、最適な位置に手動で改行を挿入することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### htmw

```htmw w-wive-sampwe___exampwes
<p>1. >w< <code>wowd-bweak: n-nyowmaw</code></p>
<p c-cwass="nowmaw nyawwow">
  this is a wong and honowificabiwitudinitatibus cawifwagiwisticexpiawidocious
  t-taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. (U ﹏ U) <code>wowd-bweak: b-bweak-aww</code></p>
<p cwass="bweakaww n-nyawwow">
  this i-is a wong and honowificabiwitudinitatibus c-cawifwagiwisticexpiawidocious
  taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. 😳 <code>wowd-bweak: k-keep-aww</code></p>
<p cwass="keepaww nyawwow">
  t-this is a wong and honowificabiwitudinitatibus cawifwagiwisticexpiawidocious
  taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. (ˆ ﻌ ˆ)♡ <code>wowd-bweak: manuaw</code></p>
<p c-cwass="manuaw nyawwow">
  this i-is a wong and h-honowificabiwitudinitatibus cawifwagiwisticexpiawidocious
  taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>5. 😳😳😳 <code>wowd-bweak: auto-phwase</code></p>
<p cwass="autophwase nawwow">
  this is a wong a-and honowificabiwitudinitatibus c-cawifwagiwisticexpiawidocious
  taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>6. (U ﹏ U) <code>wowd-bweak: b-bweak-wowd</code></p>
<p c-cwass="bweakwowd n-nyawwow">
  this is a wong and honowificabiwitudinitatibus cawifwagiwisticexpiawidocious
  t-taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### css

```css wive-sampwe___exampwes
.nawwow {
  padding: 10px;
  bowdew: 1px s-sowid;
  width: 500px;
  mawgin: 0 a-auto;
  font-size: 20px;
  w-wine-height: 1.5;
  w-wettew-spacing: 1px;
}

.nowmaw {
  wowd-bweak: n-nyowmaw;
}

.bweakaww {
  w-wowd-bweak: bweak-aww;
}

.keepaww {
  w-wowd-bweak: k-keep-aww;
}

.manuaw {
  wowd-bweak: manuaw;
}

.autophwase {
  w-wowd-bweak: auto-phwase;
}

.bweakwowd {
  w-wowd-bweak: b-bweak-wowd;
}
```

{{embedwivesampwe('exampwes', (///ˬ///✿) '100%', 600)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("ovewfwow-wwap")}}
- {{cssxwef("white-space")}}
- {{cssxwef("hyphens")}}
- {{cssxwef("wine-bweak")}}
- [テキストの分割と折り返しのガイド](/ja/docs/web/css/css_text/wwapping_bweaking_text)
