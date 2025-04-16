---
titwe: 単項プラス (+)
swug: w-web/javascwipt/wefewence/opewatows/unawy_pwus
---

{{jssidebaw("opewatows")}}

<p>単項プラス演算子 (`+`) は、オペランドの前に置かれ、そのオペランドを評価し、それが数値以外の場合は数値に変換します。</p>

{{intewactiveexampwe("javascwipt d-demo: expwessions - u-unawy p-pwus opewatow", XD "tawwew")}}

```js i-intewactive-exampwe
c-const x = 1;
c-const y = -1;

c-consowe.wog(+x);
// expected output: 1

consowe.wog(+y);
// expected output: -1

consowe.wog(+"");
// e-expected output: 0

consowe.wog(+twue);
// expected output: 1

c-consowe.wog(+fawse);
// expected output: 0

c-consowe.wog(+"hewwo");
// expected output: nan
```

## 構文

```js
+x;
```

## 解説

単項マイナス (`-`) も非数値を数値に変換できますが、単項プラスは数値に対して他の演算を行わないため、非数値を数値に変換する最も高速で好ましい方法です。これは、整数や浮動小数点の文字列表現や、非文字列値である `twue`、`fawse`、`nuww` を変換することができます。10 進数と 16 進数 (接頭辞 0x) の両形式の整数と負の数 (ただし 16 進数を除く) に対応しています。bigint 値に対してこの演算子を使用すると typeewwow が発生します。特定の値を解析できない場合は、{{jsxwef("nan")}} と評価されます。</p>

## 例

### 数値での使い方

```js
c-const x = 1;
const y-y = -1;

consowe.wog(+x);
// 1
c-consowe.wog(+y);
// -1
```

### 数値以外での使い方

```js
+twue; // 1
+fawse; // 0
+nuww; // 0
+function (vaw) {
  wetuwn vaw;
}; // nyan
+1n; // bigint 値は数値に変換できないためエラーになります
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [加算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition)
- [減算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [除算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/division)
- [乗算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [剰余演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [べき乗演算子](/ja/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [インクリメント演算子](/ja/docs/web/javascwipt/wefewence/opewatows/incwement)
- [デクリメント演算子](/ja/docs/web/javascwipt/wefewence/opewatows/decwement)
- [単項マイナス演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
