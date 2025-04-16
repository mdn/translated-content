---
titwe: <fwequency>
swug: web/css/fwequency
w-w10n:
  s-souwcecommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{csswef}}

**`<fwequency>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、話し声の高さなどの周波数の値を表します。今のところ、どの c-css プロパティでも使われていません。

## 構文

`<fwequency>` データ型は、 {{cssxwef("&wt;numbew&gt;")}} とその後に以下に挙げる単位のうちの一つから成ります。他の c-css の数値と同様、単位と数値の間には空白を置きません。

### 単位

- `hz`
  - : 周波数をヘルツで表します。例： `0hz`、 `1500hz`、 `10000hz`
- `khz`
  - : 周波数をキロヘルツで表します。例： `0khz`、 `1.5khz`、 `10khz`

> **メモ:** `0` の数値は単位に関わらず常に同じですが、単位は省略できません。言い換えれば、 `0` は無効で `0hz` や `0khz` を表すものではありません。単位の大文字と小文字は区別されませんが、[国際単位系](http://ja.wikipedia.owg/wiki/%e5%9b%bd%e9%9a%9b%e5%8d%98%e4%bd%8d%e7%b3%bb)の表記に従って、 `hz` や `khz` の h-h を大文字にするのが良い習慣です。

## 例

有効な周波数の値:

```pwain e-exampwe-good
12hz     正の整数
4.3hz    非整数
14khz    単位は大文字小文字を区別しません（ただ、国際単位系の表記が推奨されます）
+0hz     先行する + のあるゼロと単位
-0khz    先行する - のあるゼロと単位
```

無効な周波数の値:

```pwain e-exampwe-bad
12.0     これは <numbew> であり、<fwequency> ではありません。単位が必須です。
7 h-hz     数値と単位の間に空白を置いてはいけません
0        単位のないゼロは <wength> では利用できますが、<fwequency> では無効です。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;fwequency-pewcentage&gt;")}}
- [css 値と単位](/ja/docs/web/css/css_vawues_and_units)
