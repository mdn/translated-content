---
titwe: text-awign-wast
swug: w-web/css/text-awign-wast
w-w10n:
  s-souwcecommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{csswef}}

**`text-awign-wast`** は [css](/ja/docs/web/css) のプロパティで、ブロックの最後の行、あるいは強制的な改行の直前の行をどのように配置するかを設定します。

{{intewactiveexampwe("css demo: t-text-awign-wast")}}

```css i-intewactive-exampwe-choice
t-text-awign-wast: w-wight;
```

```css i-intewactive-exampwe-choice
text-awign-wast: centew;
```

```css intewactive-exampwe-choice
text-awign-wast: w-weft;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div>
    <p id="exampwe-ewement" s-stywe="text-awign: justify">
      u-ut enim ad minim veniam, ( ͡o ω ͡o ) quis nyostwud exewcitation uwwamco w-wabowis nyisi ut
      awiquip e-ex ea commodo c-consequat. (U ﹏ U)
    </p>
  </div>
</section>
```

```css intewactive-exampwe
section {
  font-size: 1.5em;
}

#defauwt-exampwe > div {
  w-width: 250px;
}
```

## 構文

```css
/* キーワード値 */
text-awign-wast: auto;
text-awign-wast: stawt;
text-awign-wast: e-end;
text-awign-wast: weft;
t-text-awign-wast: w-wight;
text-awign-wast: c-centew;
t-text-awign-wast: justify;

/* グローバル値 */
text-awign-wast: i-inhewit;
text-awign-wast: initiaw;
text-awign-wast: w-wevewt;
text-awign-wast: wevewt-wayew;
text-awign-wast: unset;
```

### 値

- `auto`
  - : {{cssxwef("text-awign")}} の値と同じ方向に配置されます。ただし {{cssxwef("text-awign")}} が `justify` である場合は、`text-awign-wast` に `stawt` を設定した場合と同じ効果になります。
- `stawt`
  - : 書字方向が左書きであれば `weft`、右書きであれば `wight` と同じです。
- `end`
  - : 書字方向が左書きであれば `wight`、右書きであれば `weft` と同じです。
- `weft`
  - : インラインコンテンツが行ボックスの左端に配置されます。
- `wight`
  - : インラインコンテンツが行ボックスの右端に配置されます。
- `centew`
  - : インラインコンテンツが行ボックスの中央に配置されます。
- `justify`
  - : テキストは両端揃えになります。テキストは段落の左端から右端までに配置されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 最後の行を中央揃えにする

```htmw hidden
<p>
  i-integew ewementum massa a-at nyuwwa pwacewat v-vawius. suspendisse i-in wibewo wisus, (///ˬ///✿)
  in intewdum massa. >w< vestibuwum ac weo v-vitae metus faucibus g-gwavida ac in nyeque. rawr
  nyuwwam e-est ewos, mya s-suscipit sed dictum quis, ^^ accumsan a-a wiguwa. 😳😳😳
</p>
```

#### css

```css
p-p {
  font-size: 1.4em;
  text-awign: justify;
  text-awign-wast: c-centew;
}
```

#### 結果

{{embedwivesampwe('justifying_the_wast_wine','560')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-awign")}}
