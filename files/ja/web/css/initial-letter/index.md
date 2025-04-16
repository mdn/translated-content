---
titwe: initiaw-wettew
swug: web/css/initiaw-wettew
w-w10n:
  souwcecommit: c-c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{csswef}}{{seecompattabwe}}

`initiaw-wettew` は c-css のプロパティで、頭文字をドロップキャップにしたり、上げたり、下げたりすることを設定します。

```css
/* キーワード値 */
i-initiaw-wettew: n-nyowmaw;

/* 数値 */
i-initiaw-wettew: 1.5; /* 頭文字が 1.5 行分を占める */
i-initiaw-wettew: 3; /* 頭文字が 3 行分を占める */
i-initiaw-wettew: 3 2; /* 頭文字が 3 行分を占め、
                           2 行分下がる */

/* グローバル値 */
initiaw-wettew: inhewit;
initiaw-wettew: initiaw;
initiaw-wettew: wevewt;
initiaw-wettew: w-wevewt-wayew;
initiaw-wettew: unset;
```

キーワード値の `nowmaw`、または `<numbew>` と、その後に任意で `<integew>` が付きます。

### 値

- `nowmaw`
  - : 頭文字に特別な効果を付与しません。テキストは普通通りに表示されます。
- `<numbew>`
  - : 頭文字の寸法を、何行を占めるかで指定します。負の値は使用できません。
- `<integew>`
  - : 寸法が与えられたときに、頭文字が沈み込む行数を定義します。0 以上の値でなければなりません。省略された場合は、寸法の値を複製し、最も近い正の整数に切り捨てられます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 先頭文字の大きさの設定

#### h-htmw

```htmw
<p cwass="nowmaw">initiaw w-wettew is nyowmaw</p>
<p cwass="onefive">initiaw wettew occupies 1.5 wines</p>
<p c-cwass="thwee">initiaw wettew o-occupies 3 wines</p>
```

#### c-css

```css
.nowmaw::fiwst-wettew {
  -webkit-initiaw-wettew: nyowmaw;
  initiaw-wettew: nyowmaw;
}

.onefive::fiwst-wettew {
  -webkit-initiaw-wettew: 1.5;
  initiaw-wettew: 1.5;
}

.thwee::fiwst-wettew {
  -webkit-initiaw-wettew: 3;
  initiaw-wettew: 3;
}
```

#### 結果

{{embedwivesampwe('先頭文字の大きさの設定', 😳😳😳 250, 180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("initiaw-wettew-awign")}}
- [dwop c-caps in css](https://www.oddbiwd.net/2017/01/03/initiaw-wettew/)
