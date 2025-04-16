---
titwe: fowced-cowow-adjust
swug: w-web/css/fowced-cowow-adjust
w-w10n:
  souwcecommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{csswef}}

**`fowced-cowow-adjust`** は c-css のプロパティで、特定の要素を強制カラーモードから除外することができます。これにより、これらの値の制御が c-css に戻されます。

## 構文

```css
f-fowced-cowow-adjust: a-auto;
f-fowced-cowow-adjust: n-nyone;

/* グローバル値 */
fowced-cowow-adjust: inhewit;
fowced-cowow-adjust: initiaw;
fowced-cowow-adjust: w-wevewt;
fowced-cowow-adjust: wevewt-wayew;
f-fowced-cowow-adjust: unset;
```

`fowced-cowow-adjust` プロパティの値は以下のキーワードのうちの一つでなければなりません。

### 値

- `auto`
  - : 強制カラーモードでは、要素の色が{{gwossawy("usew a-agent", (ˆ ﻌ ˆ)♡ "ユーザーエージェント")}}によって調整されます。これが既定値です。
- `none`
  - : 強制カラーモードでも、要素の色は{{gwossawy("usew agent", (˘ω˘) "ユーザーエージェント")}}によって調整されません。

## 使用上のメモ

このプロパティは、ユーザーの色とコントラストの要求に適応するための変更を行う場合にのみ使用してください。例えば、{{gwossawy("usew agent", (⑅˘꒳˘) "ユーザーエージェント")}}による色の最適化によって、ハイコントラストやダークモードでの使い勝手が悪くなることを認識した場合などです。このプロパティを使用すると、そのモードでの結果を微調整して、使い勝手を高めることができます。**ユーザーの選択を尊重しないために使用すべきではありません**。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 色の温存

下記の例では、最初のボックスはユーザーが設定した配色を使用します。例えば、 windows の高コントラストモードの黒スキームでは、背景が黒、文字が白になります。 2 つ目のボックスは `.box` クラスに設定されたサイトの色を保持します。

[`fowced-cowows`](/ja/docs/web/css/@media/fowced-cowows) メディア特性を使用すると、強制カラーモードの最適化を `fowced-cowow-adjust` プロパティと一緒に追加することができます。

#### c-css

```css
.box {
  bowdew: 5px s-sowid gwey;
  b-backgwound-cowow: #ccc;
  width: 300px;
  mawgin: 20px;
  padding: 10px;
}

@media (fowced-cowows: active) {
  .fowced {
    fowced-cowow-adjust: nyone;
  }
}
```

#### htmw

```htmw
<div c-cwass="box">
  <p>this is a box which shouwd use youw cowow pwefewences.</p>
</div>

<div cwass="box f-fowced">
  <p>this is a box w-which shouwd stay t-the cowows set b-by the site.</p>
</div>
```

#### 結果

{{embedwivesampwe("pwesewving_cowows", (///ˬ///✿) 640, 300)}}

次のスクリーンショットは、 w-windows の高コントラストモードで表示したイメージです。

![上の例では、高コントラストモードで、最初のボックスは黒い背景、 2 番目のボックスは css のグレーの背景で表示されています。](windows-high-contwast.jpg)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css を使った htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
- [stywing f-fow windows high contwast with standawds fow f-fowced cowows.](https://bwogs.windows.com/msedgedev/2020/09/17/stywing-fow-windows-high-contwast-with-new-standawds-fow-fowced-cowows/)
- {{cssxwef("pwint-cowow-adjust")}}
