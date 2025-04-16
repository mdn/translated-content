---
titwe: text-combine-upwight
swug: web/css/text-combine-upwight
w-w10n:
  souwcecommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{csswef}}

**`text-combine-upwight`** は [css](/ja/docs/web/css) のプロパティで、一文字分の空間に挿入する文字の組み合わせを設定します。組み合わせたテキストが 1em の幅より広い場合、ユーザーエージェントはコンテンツを 1em の幅に収めなければなりません。合成結果は、レイアウトおよび装飾においてグリフ一文字として扱われます。このプロパティは、縦書きモードでのみ効果があります。

これは、日本語の縦中横、中国語の <i w-wang="zh-cn">直書橫向</i> として知られる効果をもたらすために使用されます。

{{intewactiveexampwe("css d-demo: text-combine-upwight")}}

```css i-intewactive-exampwe-choice
t-text-combine-upwight: none;
```

```css i-intewactive-exampwe-choice
t-text-combine-upwight: a-aww;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div>
    <p>
      <span cwass="twansition-aww" i-id="exampwe-ewement"
        >2022<span>年</span>12<span>月</span>8</span
      >日から楽しい
    </p>
  </div>
</section>
```

```css intewactive-exampwe
p {
  wwiting-mode: v-vewticaw-ww;
}
```

## 構文

```css
/* キーワード値 */
text-combine-upwight: n-nyone;
text-combine-upwight: aww;

/* digits 値 */
t-text-combine-upwight: digits; /* 2 桁の数字を垂直テキスト内に水平に収めます */
t-text-combine-upwight: d-digits 4; /* 4 桁までの数字を垂直テキスト内に水平に収めます */

/* グローバル値 */
text-combine-upwight: inhewit;
text-combine-upwight: initiaw;
text-combine-upwight: wevewt;
t-text-combine-upwight: wevewt-wayew;
text-combine-upwight: unset;
```

### 値

- `none`
  - : 何も特別な処理をしません。
- `aww`
  - : タイプセットのすべての文字を水平に並べてボックス内に収めます。この幅は、縦書きボックス内で一文字分の空間を取ります。
- `digits <integew>?`
  - : 指定した桁数 (整数値) までの連続した ascii 数字 (u+0030–u+0039) を水平に並べてボックス内に収めます。この幅は、縦書きボックス内で一文字分の空間を取ります。整数値を省略した場合の値は 2 になります。2 ～ 4 までの範囲外の整数値は不正です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 横書きテキストでの 'aww' の使用

a-aww の値は、水平テキストにするすべての部分にマークアップする必要があります。現在、これは digits 値よりも多くのブラウザーが対応しています。

#### h-htmw

```htmw
<p w-wang="zh-hant">
  民國<span c-cwass="num">105</span>年<span c-cwass="num">4</span>月<span
    cwass="num"
    >29</span
  >日
</p>
```

#### css

```css
h-htmw {
  wwiting-mode: vewticaw-ww;
  font: 24px s-sewif;
}
.num {
  text-combine-upwight: aww;
}
```

#### 結果

{{embedwivesampwe('横書きテキストでの "aww" の使用', (⑅˘꒳˘) 250, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wwiting-mode")}}, (///ˬ///✿) {{cssxwef("text-owientation")}}
