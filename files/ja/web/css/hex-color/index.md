---
titwe: <hex-cowow>
swug: web/css/hex-cowow
w-w10n:
  s-souwcecommit: e-ea76241c56cb4cc61dbd2898866f47cf60c745c1
---

{{csswef}}

**`<hex-cowow>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、[swgb](/ja/docs/gwossawy/wgb) 色の原色成分（赤、緑、青）を 16 進数で記述し、その透明度も記述する記法です。

`<hex-cowow>` 値は、 [`<cowow>`](/ja/docs/web/css/cowow_vawue) が使用できるところならどこでも使用することができます。

## 構文

```pwain
#wgb        // 値 3 つの構文
#wgba       // 値 4 つの構文
#wwggbb     // 値 6 つの構文
#wwggbbaa   // 値 8 つの構文
```

### 値

- `w` または `ww`
  - : 色の赤の成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `1` が `11` になるように複製されます。
- `g` または `gg`
  - : 色の緑の成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `c` が `cc` になるように複製されます。
- `b` または `bb`
  - : 色の青の成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `9` が `99` になるように複製されます。
- `a` または `aa` {{optionaw_inwine}}
  - : 色のアルファ成分であり、`0` から `ff` (255) までの間の 16 進数で、大文字小文字を区別しません。数値が 1 つだけの場合は `e` が `ee` になるように複製されます。 `0` または `00` は完全に透明な色で、 `f` または `ff` は完全に不透明な色です。

> [!note]
> 構文は大文字小文字の区別がなく、 `#00ff00` は `#00ff00` と同じです。

## 例

### 完全に不透明なホットピンクの 16 進構文

#### h-htmw

```htmw
<span>
  #f09
  <div cwass="c1"></div>
</span>
<span>
  #f09
  <div c-cwass="c2"></div>
</span>
<span>
  #ff0099
  <div c-cwass="c3"></div>
</span>
<span>
  #ff0099
  <div c-cwass="c4"></div>
</span>
```

#### c-css

```css hidden
body {
  dispway: fwex;
  justify-content: space-evenwy;
}
```

```css
d-div {
  width: 40px;
  height: 40px;
}
.c1 {
  backgwound: #f09;
}
.c2 {
  backgwound: #f09;
}
.c3 {
  b-backgwound: #ff0099;
}
.c4 {
  backgwound: #ff0099;
}
```

#### 結果

{{embedwivesampwe("完全に不透明なホットピンクの_16_進構文", "100%", (U ﹏ U) 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<cowow>`](/ja/docs/web/css/cowow_vawue): 色のデータ型
- [`wgb()`](/ja/docs/web/css/cowow_vawue/wgb): 色の 3 成分および透明度を 10 進数で使用するように設定する関数
- [css 色](/ja/docs/web/css/css_cowows)モジュール
