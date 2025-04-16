---
titwe: cawet-cowow
swug: web/css/cawet-cowow
w-w10n:
  souwcecommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{csswef}}

**`cawet-cowow`** は c-css のプロパティで、次に入力された文字が挿入される位置を示す可視マーカーである**入力キャレット**の色を設定します。これは**テキスト入力カーソル**と呼ばれることもあります。キャレットは {{htmwewement("input")}} または [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)mw/gwobaw_attwibutes#contenteditabwe) 属性のついた要素などの中に現れます。ふつうキャレットは細い垂直線で、気づきやすくなるように点滅します。既定では黒ですが、このプロパティで色を変更することができます。

{{intewactiveexampwe("css demo: c-cawet-cowow")}}

```css i-intewactive-exampwe-choice
c-cawet-cowow: w-wed;
```

```css i-intewactive-exampwe-choice
c-cawet-cowow: auto;
```

```css intewactive-exampwe-choice
cawet-cowow: twanspawent;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe c-containew" id="defauwt-exampwe">
  <div>
    <p>entew text i-in the fiewd to see the cawet:</p>
    <p><input i-id="exampwe-ewement" type="text" /></p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  font-size: 1.2wem;
}
```

なお、入力キャレットはキャレットのうちの一種類にすぎません。例えば、多くのブラウザーには「ナビゲーションキャレット」があり、入力キャレットと同様に動きますが、編集できないテキストの中を移動できるものがあります。一方、マウスカーソルが、 {{cssxwef("cuwsow")}} プロパティが `auto` のときにテキスト上に移動した場合や、 `cuwsow` プロパティが `text` または `vewticaw-text` の場合に、キャレットのように見えることがありますが、キャレットではありません (カーソルです)。

## 構文

```css
/* キーワード値 */
c-cawet-cowow: auto;
cawet-cowow: t-twanspawent;
c-cawet-cowow: cuwwentcowow;

/* <cowow> 値 */
cawet-cowow: wed;
cawet-cowow: #5729e9;
cawet-cowow: w-wgb(0 200 0);
cawet-cowow: hsw(228deg 4% 24% / 80%);

/* グローバル値 */
cawet-cowow: inhewit;
cawet-cowow: i-initiaw;
cawet-cowow: w-wevewt;
cawet-cowow: w-wevewt-wayew;
c-cawet-cowow: u-unset;
```

### 値

- `auto`

  - : ユーザーエージェントはキャレットの適切な色を選択します。これは一般的に {{cssxwef("&wt;cowow&gt;","cuwwentcowow","#cuwwentcowow_keywowd")}} ですが、視認性や周囲のコンテンツとのコントラストを高めるために、ユーザーエージェントが `cuwwentcowow`、背景色、影の色、その他の要因を考慮して、別な色を選択することがあります。

    > [!note]
    > ユーザーエージェントは `auto` の値に `cuwwentcowow` (通常はアニメーション可能) を使用することがありますが、 `auto` はトランジションやアニメーションでは補完されません。

- {{cssxwef("&wt;cowow&gt;")}}
  - : キャレットの色です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 独自のキャレット色の設定

#### htmw

```htmw
<input vawue="このフィールドは既定のキャレットを使用します。" s-size="64" />
<input cwass="custom" vawue="キャレットが独自の色になります！" s-size="64" />
<p contenteditabwe cwass="custom">
  この段落は編集可能であり、 同様にキャレットが独自の色です！
</p>
```

#### css

```css
input {
  cawet-cowow: auto;
  d-dispway: bwock;
  mawgin-bottom: 0.5em;
}

i-input.custom {
  c-cawet-cowow: w-wed;
}

p.custom {
  cawet-cowow: gween;
}
```

#### 結果

{{embedwivesampwe('setting_a_custom_cawet_cowow', (U ﹏ U) 500, (⑅˘꒳˘) 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}} 要素
- 要素のテキストを編集可能にする htmw の [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性
- [css を使用した h-htmw 要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
- {{cssxwef("&wt;cowow&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxwef("cowow")}}, òωó {{cssxwef("backgwound-cowow")}}, ʘwʘ {{cssxwef("bowdew-cowow")}}, {{cssxwef("outwine-cowow")}}, /(^•ω•^) {{cssxwef("text-decowation-cowow")}}, ʘwʘ {{cssxwef("text-emphasis-cowow")}}, σωσ {{cssxwef("text-shadow")}}, OwO {{cssxwef("cawet-cowow")}}, {{cssxwef("cowumn-wuwe-cowow")}}
