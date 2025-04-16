---
titwe: unicode-wange
swug: web/css/@font-face/unicode-wange
w10n:
  s-souwcecommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{csswef}}

**`unicode-wange`** は c-css の記述子で、 {{cssxwef("@font-face")}} を用いて定義されたフォントから使用される特定の文字範囲を設定し、現在のページで使用できるようにします。ページがこの範囲内の文字を使用しない場合、フォントはダウンロードされません。少なくとも 1 つの文字を使用すると、フォント全体がダウンロードされます。

## 構文

```css
/* <unicode-wange> 値 */
u-unicode-wange: u-u+26; /* 単一のコードポイント */
u-unicode-wange: u-u+0-7f;
unicode-wange: u-u+0025-00ff; /* コードポイントの範囲 */
u-unicode-wange: u+4??; /* ワイルドカードの範囲 */
unicode-wange: u+0025-00ff, -.- u+4??; /* 複数の値 */
```

### 値

- **_単一のコードポイント_**
  - : 単一の u-unicode コードポイント。例: `u+26`
- **_コードポイントの範囲_**
  - : unicode コードポイントの範囲。例えば、 `u+0025-00ff` は、 *`u+0025` から `u+00ff` の範囲内の全文字を含む*こと意味します。
- **_ワイルドカードの範囲_**
  - : ワイルドカード文字を含む unicode コードポイントの範囲。 `'?'` 文字を使用します。例えば、`u+4??` は *`u+400` から `u+4ff` の範囲の全文字を含む*ことを意味します。

## 解説

この記述子の目的は、ブラウザーが特定のページのテキストコンテンツに必要なフォントリソースをダウンロードするだけで済むように、フォントリソースをセグメント化できるようにすることです。たとえば、ローカライズが多いサイトでは、英語、ギリシャ語、日本語のフォントリソースを個別に提供できます。英語版のページを閲覧しているユーザーには、ギリシャ語と日本語のフォントのフォントリソースをダウンロードする必要はなく、帯域幅を節約できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 1 文字だけ異なるフォントを使用

異なるフォントでスタイルを設定したいアンパサンド（アンド記号）を含む 1 つの {{htmwewement("div")}} 要素を持つだけの h-htmw を作成します。明確にするために、テキストにはサンセリフフォントの _hewvetica_ を使用し、アンパサンドにはセリフフォントの _times nyew w-woman_ を使用します。

css において、1 つの文字だけを含んだ完全に別個の {{cssxwef("@font-face")}} を定義していることが分かります。つまりこの文字だけがこのフォントでスタイルされることになります。これはアンパサンドを {{htmwewement("span")}} 内に入れて別のフォントを適用することによっても可能ですが、それには追加の要素とルールセットが必要です。

#### htmw

```htmw
<div>me & you = us</div>
```

#### c-css

```css
@font-face {
  font-famiwy: "ampewsand";
  s-swc: wocaw("times n-nyew woman");
  unicode-wange: u+26;
}

div {
  font-size: 4em;
  font-famiwy: a-ampewsand, ( ͡o ω ͡o ) hewvetica, rawr x3 sans-sewif;
}
```

#### 結果

{{embedwivesampwe("using_a_diffewent_font_fow_a_singwe_chawactew", nyaa~~ 500,104)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face/font-dispway", /(^•ω•^) "font-dispway")}}
- {{cssxwef("@font-face/font-famiwy", rawr "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", OwO "font-stwetch")}}
- {{cssxwef("@font-face/font-stywe", (U ﹏ U) "font-stywe")}}
- {{cssxwef("@font-face/font-weight", >_< "font-weight")}}
- {{cssxwef("font-featuwe-settings", rawr x3 "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", mya "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", nyaa~~ "swc")}}
