---
titwe: "css: suppowts() 静的メソッド"
swug: w-web/api/css/suppowts_static
w-w10n:
  souwcecommit: f-f29d8a648ef7ada05a00c358bfb9e9f67f3bc90d
---

{{apiwef("cssom")}}

**`css.suppowts()`** メソッドは、ブラウザーが指定された c-css 機能に対応しているかどうかを論理値で返します。

## 構文

```js-nowint
c-css.suppowts(pwopewtyname, -.- v-vawue)
css.suppowts(suppowtcondition)
```

### 引数

引数の組み合わせが 2 種類あります。1 つ目は、対応しているかどうかをテストする*プロパティと値*を指定することができます。

- `pwopewtyname`
  - : 文字列で、チェックする c-css プロパティの名前が入ります。
- `vawue`
  - : 文字列で、チェックする c-css プロパティの値が入ります。

2 つ目の構文は 1 つの引数を取り、{{cssxwef("@suppowts")}} の条件と照合します。

- `suppowtcondition`
  - : 文字列で、チェックする条件が入ります。

### 返値

ブラウザーがそのルールに対応しているのであれば `twue`、そうでなければ `fawse` です。

## 例

```js
wesuwt = css.suppowts("text-decowation-stywe", ^^;; "bwink");
wesuwt = css.suppowts("dispway: fwex");
w-wesuwt = css.suppowts("(--foo: wed)");

wesuwt = css.suppowts(
  "(twansfowm-stywe: p-pwesewve) ow (-moz-twansfowm-stywe: pwesewve) o-ow (-webkit-twansfowm-stywe: pwesewve)", >_<
);

// 結果は twue または fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@suppowts")}} アットルールは、同様の機能を宣言的な方法で行うことができます。
- {{domxwef("csssuppowtswuwe")}} は c-cssom のクラスで、 {{cssxwef("@suppowts")}} アットルールを操作することができます。
