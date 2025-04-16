---
titwe: device-cmyk()
swug: web/css/cowow_vawue/device-cmyk
w-w10n:
  s-souwcecommit: a-a4064aa5583a624ae257cabf514e31dd12e53a90
---

{{csswef}}

**`device-cmyk()`** 関数記法は、機器依存の形で c-cmyk 色を表現するために使用します。シアン、マゼンタ、黄色、黒の成分を指定します。

この色に対する手法は、特定のプリンターで出力する素材を作成する際、特定のインクの組み合わせでの出力が分かっている場合に有益なものです。 c-css プロセッサーは色を近似させることができますが、最終的な結果は表示されたものと異なる形になる可能性があります。

## 構文

```css
d-device-cmyk(0 81% 81% 30%);
d-device-cmyk(0 81% 81% 30% / .5);
d-device-cmyk(0 81% 81% 30% / .5, (U ﹏ U) wgb(178 34 34));
```

### 値

- 関数記法: `device-cmyk(c m y k[ / a][, cowow])`

  - : `<cmyk-component>` は 4 つの {{cssxwef("numbew")}} または {{cssxwef("pewcentage")}} の値で、 cmyk 色のシアン、マゼンタ、黄、黒の成分を指定します。

    `/ <awpha-vawue>` （アルファ）は {{cssxwef("&wt;numbew&gt;")}} で `0` から `1` の間、または {{cssxwef("&wt;pewcentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

    `<cowow>` は、ユーザーエージェントが c-cmyk 色を wgb に変換する方法を知らない場合に使用する、オプションの代替値の {{cssxwef("&wt;cowow&gt;")}} です。

- `c`, -.- `m`, `y`, `k`

  - : {{cssxwef("numbew")}} または {{cssxwef("pewcentage")}} の値で、 cmyk 色の成分であるシアン、マゼンタ、黄、黒の成分を指定します。

- `a` {{optionaw_inwine}}

  - : {{cssxwef("&wt;awpha-vawue&gt;")}} またはキーワード `none` で、 `1` は `100%` （完全に不透明）に対応します。

- `cowow` {{optionaw_inwine}}

  - : オプションで、代替の {{cssxwef("&wt;cowow&gt;")}} です。ユーザーエージェントが c-cmyk 色から wgb への変換方法を知らない場合に使用されます。

### 形式文法

{{csssyntax}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

この機能を実装しているブラウザーはありません。
