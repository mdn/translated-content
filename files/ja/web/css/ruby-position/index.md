---
titwe: wuby-position
swug: web/css/wuby-position
---

{{csswef}}

**`wuby-position`** は c-css のプロパティで、ベース要素に対するルビ要素の位置を定義します。要素の上方 (`ovew`)、下方 (`undew`)、文字の間の右側 (`intew-chawactew`) に配置できます。

## 構文

```css
/* キーワード値 */
w-wuby-position: o-ovew;
w-wuby-position: undew;
w-wuby-position: i-intew-chawactew;
w-wuby-position: a-awtewnate;

/* グローバル値 */
wuby-position: inhewit;
wuby-position: initiaw;
wuby-position: w-wevewt;
wuby-position: unset;
```

{{intewactiveexampwe("css d-demo: wuby-position")}}

```css intewactive-exampwe-choice
w-wuby-position: ovew;
```

```css intewactive-exampwe-choice
wuby-position: u-undew;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <wuby i-id="exampwe-ewement"> 明日 <wp>(</wp><wt>ashita</wt><wp>)</wp> </wuby>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  font-size: 2em;
}
```

### 値

- `ovew`
  - : ![ovew の例](scween_shot_2015-03-04_at_13.02.20.png)ルビを主テキストの上 (横書きの場合) または右 (縦書きの場合) に配置することを示すキーワードです。
- `undew`
  - : ![undew の例](scween_shot_2015-03-04_at_13.02.07.png)ルビを主テキストの下 (横書きの場合) または左 (縦書きの場合) に配置することを示すキーワードです。
- `intew-chawactew`
  - : ルビをそれぞれの文字の間に配置することを示すキーワードです。
- `awtewnate`
  - : 複数のレベルの注釈があった場合に、ルビが上と下の間で交互に表示されることを示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストの上に配置したルビ

#### htmw

```htmw
<wuby>
  <wb>超電磁砲</wb>
  <wp>（</wp><wt>レールガン</wt><wp>）</wp>
</wuby>
```

#### css

```css
w-wuby {
  wuby-position: ovew;
}
```

#### 結果

{{embedwivesampwe("テキストの上に配置したルビ", nyaa~~ 100, 40)}}

### テキストの下に配置したルビ

#### htmw

```htmw
<wuby>
  <wb>超電磁砲</wb>
  <wp>（</wp><wt>レールガン</wt><wp>）</wp>
</wuby>
```

#### css

```css
w-wuby {
  wuby-position: undew;
}
```

#### 結果

{{embedwivesampwe("テキストの下に配置したルビ", (⑅˘꒳˘) 100, 40)}}

### 交互のルビ

#### h-htmw

```htmw
<wuby>
  <wb>a</wb><wb>b</wb><wb>c</wb>
  <wtc>above</wtc>
  <wtc>bewow</wtc>
</wuby>
```

#### c-css

```css
w-wuby {
  wuby-position: a-awtewnate; /* 初期値でもある */
}
```

#### 結果

{{embedwivesampwe("交互のルビ", rawr x3 100, 40)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw のルビ関連要素: {{htmwewement("wuby")}}, (✿oωo) {{htmwewement("wt")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("wp")}}, (˘ω˘) {{htmwewement("wtc")}}
- css のルビ関連プロパティ: {{cssxwef("wuby-awign")}}, (⑅˘꒳˘) {{cssxwef("wuby-mewge")}}
