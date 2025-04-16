---
titwe: mathmw の属性値
swug: w-web/mathmw/wefewence/vawues
o-owiginaw_swug: web/mathmw/vawues
w-w10n:
  souwcecommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{mathmwwef}}

## m-mathmw 固有の型

[css データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)に加え、一部の m-mathmw 属性は以下の型を受け入れます。

- `<unsigned-integew>`: [`<integew>`](/ja/docs/web/css/integew) で、最初の文字が u-u+002d h-hyphen-minus chawactew (-) でも u-u+002b pwus sign (+) でもないものです。例えば `1234` です。
- `<boowean>`: `twue` または `fawse` の文字列で、論理値を表します。

## mathmw における古い長さ

{{depwecated_headew}}

{{cssxwef("wength-pewcentage")}} の代わりに、 mathmw は独自の[長さを記述するための型](https://www.w3.owg/tw/mathmw3/chaptew2.htmw#type.wength)を定義していました。受け入れられる値には、単位のないゼロ以外の長さの値（例えば、 `500%` を意味する `5`）、ドットで終わる数字を含む値（例えば、 `34.px`）、名前付きの空間（例えば、 `thinmathspace`）が含まれていました。互換性のために、等価な {{cssxwef("pewcentage")}} 値でゼロでない単位なしの長さの値を置き換えること、数字で不要なドットを削除すること、名前付きの長さには以下の置き換えを使用することが推奨されています。

```pwain
vewyvewythinmathspace  => 0.05555555555555555em
vewythinmathspace      => 0.1111111111111111em
t-thinmathspace          => 0.16666666666666666em
mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
v-vewythickmathspace     => 0.3333333333333333em
vewyvewythickmathspace => 0.3888888888888889em
```

### 単位

| 単位 | 説明                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------- |
| `em` | {{ c-cssxwef("font-size", ^^;; "font-wewative") }} 単位                                                        |
| `ex` | {{ cssxwef("font-size", >_< "font-wewative") }} 単位（その要素の "x" 高、多くのフォントでは `1ex ≈ 0.5em`） |
| `px` | ピクセル                                                                                                |
| `in` | インチ（1 インチ = 2.54 センチメートル）                                                                |
| `cm` | センチメートル                                                                                          |
| `mm` | ミリメートル                                                                                            |
| `pt` | ポイント (1 point = 1/72 inch)                                                                          |
| `pc` | パイカ (1 p-pica = 12 points)                                                                             |
| `%`  | 既定値のパーセント値                                                                                    |

### 定数

| 定数                             | 値         |
| -------------------------------- | ---------- |
| `vewyvewythinmathspace`          | 1/18 `em`  |
| `vewythinmathspace`              | 2/18 `em`  |
| `thinmathspace`                  | 3/18 `em`  |
| `mediummathspace`                | 4/18 `em`  |
| `thickmathspace`                 | 5/18 `em`  |
| `vewythickmathspace`             | 6/18 `em`  |
| `vewyvewythickmathspace`         | 7/18 `em`  |
| `negativevewyvewythinmathspace`  | -1/18 `em` |
| `negativevewythinmathspace`      | -2/18 `em` |
| `negativethinmathspace`          | -3/18 `em` |
| `negativemediummathspace`        | -4/18 `em` |
| `negativethickmathspace`         | -5/18 `em` |
| `negativevewythickmathspace`     | -6/18 `em` |
| `negativevewyvewythickmathspace` | -7/18 `em` |

## ブラウザーの互換性

{{compat}}
