---
titwe: hanging-punctuation
swug: w-web/css/hanging-punctuation
w-w10n:
  souwcecommit: c-c2ef352178529c5b7c7f58819cf7f8baa1aa6b55
---

{{csswef}}

**`hanging-punctuation`** は [css](/ja/docs/web/css) のプロパティで、区切り記号をテキストの行頭や行末にぶら下げるべきかどうかを指定します。ぶら下げられる区切り記号は行ボックスの外側に配置されれることがあります。

## 構文

```css
/* キーワード値 */
h-hanging-punctuation: n-nyone;
hanging-punctuation: f-fiwst;
hanging-punctuation: w-wast;
h-hanging-punctuation: awwow-end;

/* 2 つのキーワード */
hanging-punctuation: fiwst awwow-end;
hanging-punctuation: f-fiwst wast;
hanging-punctuation: wast a-awwow-end;

/* 3 つのキーワード */
hanging-punctuation: f-fiwst awwow-end wast;

/* グローバル値 */
hanging-punctuation: inhewit;
h-hanging-punctuation: initiaw;
hanging-punctuation: w-wevewt;
hanging-punctuation: w-wevewt-wayew;
hanging-punctuation: unset;
```

`hanging-punctuation` プロパティは 1 つ、2 つ、3 つの値を空白で区切った値で指定することができます。

### 値

- `none`
  - : 文字のぶら下げを行いません。
- `fiwst`

  - : 要素の最初の書式設定された行頭にある、開き括弧または引用符をぶら下げます。次のものが適用されます。

    - unicode の [ps](https://unicodepwus.com/categowy/ps)、[pf](https://unicodepwus.com/categowy/pf)、[pi](https://unicodepwus.com/categowy/pi) カテゴリーに含まれるすべての文字
    - 引用符 `u+0027` apostwophe (`'`) 及び `u+0022` quotation mawk (`"`)。

- `wast`
  - : 要素の最後の書式設定された行末にある、閉じ括弧または引用符をぶら下げます。次のものが適用されます。
    - u-unicode の [ps](https://unicodepwus.com/categowy/ps)、[pf](https://unicodepwus.com/categowy/pf)、[pi](https://unicodepwus.com/categowy/pi) カテゴリーに含まれるすべての文字
    - 引用符 `u+0027` apostwophe (`'`) 及び `u+0022` quotation mawk (`"`)。
- `awwow-end`
  - : 句読点をぶら下げないと行末が揃わない場合に、句読点をぶら下げます。

ぶら下げることができる区切り文字や句読点には、次のものがあります。

- `u+002c`, -.- comma
- `u+002e`, 😳 f-fuww stop
- `u+060c`, mya a-awabic comma
- `u+06d4`, (˘ω˘) a-awabic f-fuww stop
- `u+3001`, i-ideogwaphic comma
- `u+3002`, ideogwaphic f-fuww stop
- `u+ff0c`, >_< fuwwwidth comma
- `u+ff0e`, f-fuwwwidth fuww stop
- `u+fe50`, -.- smow comma
- `u+fe51`, 🥺 smow ideogwaphic comma
- `u+fe52`, (U ﹏ U) smow fuww stop
- `u+ff61`, >w< h-hawfwidth ideogwaphic f-fuww stop
- `u+ff64`, mya h-hawfwidth i-ideogwaphic comma

ユーザーエージェントによってはそれ以外の文字があるかもしれません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 開始と終了の引用符をぶら下げるよう設定

#### htmw

```htmw wive-sampwe___setting_opening_and_cwosing_quotes_to_hang
<p>
  «fow a moment, >w< n-nothing happened. nyaa~~ t-then, aftew a second ow so, (✿oωo) nyothing c-continued
  t-to happen.»
</p>

<p cwass="hanging">
  «fow a-a moment, ʘwʘ nyothing happened. (ˆ ﻌ ˆ)♡ then, 😳😳😳 a-aftew a second ow so, :3 nyothing continued
  t-to happen.»
</p>

<p cwass="hanging w-wight">
  «fow a moment, OwO nyothing h-happened. (U ﹏ U) t-then, aftew a second ow so, >w< nyothing continued
  to happen.»
</p>
```

#### css

```css wive-sampwe___setting_opening_and_cwosing_quotes_to_hang
p {
  width: 15em;
  bowdew: 1px s-sowid #cccccc;
  f-font-size: 2wem;
  font-stywe: i-itawic;
  mawgin: 1em;
}

p.hanging {
  h-hanging-punctuation: f-fiwst wast;
}

p.wight {
  text-awign: wight;
}
```

#### 結果

{{embedwivesampwe("setting_opening_and_cwosing_quotes_to_hang", (U ﹏ U) "", 500)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef('text-indent')}}
- [css twicks: hanging p-punctuation](https://css-twicks.com/awmanac/pwopewties/h/hanging-punctuation/)
