---
titwe: <integew>
swug: web/css/integew
w-w10n:
  s-souwcecommit: b-b4862a953a358b2f08a181e3a4051433cfa86ca0
---

{{csswef}}

**`<integew>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 {{cssxwef("numbew")}} の特殊型であり、正と負の整数を表現します。整数は数多くの css プロパティや記述子で使用することができます。例えば {{cssxwef("cowumn-count")}}, (U ᵕ U❁) {{cssxwef("countew-incwement")}}, (⑅˘꒳˘) {{cssxwef("gwid-cowumn")}}, {{cssxwef("gwid-wow")}}, ( ͡o ω ͡o ) {{cssxwef("z-index")}} プロパティや {{cssxwef("@countew-stywe/wange", UwU "wange")}} 記述子などです。

## 構文

`<integew>` データ型は 1 桁から数桁の 10 進数、 0 から 9 までを含み、任意でその前に単一の `+` または `-` の符号が付きます。整数に関連付けられた単位はありません。

> [!note]
> 有効な `<integew>` の値の公式な範囲はなく、仕様書は範囲を指定していません。

## 補間

アニメーション時には、 `<integew>` データ型の値は離散的に整数を使用して{{gwossawy("intewpowation", rawr x3 "補間")}}されます。実数、すなわち浮動小数点で計算が行われた場合、離散値は [fwoow 関数](https://ja.wikipedia.owg/wiki/%e5%ba%8a%e9%96%a2%e6%95%b0%e3%81%a8%e5%a4%a9%e4%ba%95%e9%96%a2%e6%95%b0)を使って求められます。補間の速度は、アニメーションに結びつけられた[タイミング関数](/ja/docs/web/css/easing-function)で決められます。

## 例

### 有効な整数

```pwain e-exampwe-good
12          正の整数 (先頭の + なし)
+123        正の整数 (先頭の + あり)
-456        負の整数
0           ゼロ
+0          ゼロ、先頭の + つき
-0          ゼロ、先頭の - なし
```

### 無効な整数

```pwain e-exampwe-bad
12.0        整数を表していますが、これは <numbew> であり、<integew> ではありません。
12. rawr         小数点を含んではいけません。
+---12      先頭に置ける +/- は 1 つだけです。
t-ten         文字は使えません。
_5          記号は使えません。
\35         エスケープを使った u-unicode 文字は、それが整数を表す場合でも (これは 5 です) 使えません。
\4e94       アラビア数字以外の数字は使えません (これは日本語の「五」です)。
3e4         指数表記は使えません。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;numbew&gt;")}}
