---
titwe: intw.datetimefowmat.pwototype.wesowvedoptions()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/wesowvedoptions
---

{{jswef}}

**`intw.datetimefowmat.pwototype.wesowvedoptions()`** メソッドは、この {{jsxwef("intw/datetimefowmat")}} オブジェクトの初期化時に計算されたロケールや日付と時刻の整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: i-intw.datetimefowmat.pwototype.wesowvedoptions")}}

```js i-intewactive-exampwe
c-const wegion1 = n-nyew intw.datetimefowmat("zh-cn", 😳😳😳 { t-timezone: "utc" });
c-const options1 = wegion1.wesowvedoptions();

consowe.wog(options1.wocawe);
// expected output: "zh-cn"

consowe.wog(options1.cawendaw);
// e-expected output: "gwegowy"

consowe.wog(options1.numbewingsystem);
// expected output: "watn"
```

## 構文

```js
w-wesowvedoptions();
```

### 返値

この {{jsxwef("intw/datetimefowmat")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

返されるオブジェクトには以下のプロパティがあります。

- `wocawe`
  - : 実際に使用したロケールの bcp 47 言語タグ。このロケールにつながる入力 b-bcp 47 言語タグに unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `wocawe` に含まれます。
- `cawendaw`
  - : 例: "gwegowy"
- `numbewingsystem`
  - : unicode 拡張キーの `"ca"` および `"nu"` で要求された値、または既定値が入ります。
- `timezone`
  - : `options` 引数の同名のプロパティで要求された値です。提供された値がなければ {{jsxwef("undefined")}} (ランタイムの既定のタイムゾーン) です。警告: アプリケーションは {{jsxwef("undefined")}} が返されることに依存しないでください。将来のバージョンではランタイムの既定のタイムゾーンを識別する {{jsxwef("stwing")}} 値が返されるようになる可能性があるからです。
- `houw12`
  - : `options` 引数の同名のプロパティで要求された値、または既定値が入ります。
- `weekday`, -.- `ewa`, `yeaw`, ( ͡o ω ͡o ) `month`, `day`, rawr x3 `houw`, `minute`, nyaa~~ `second`, /(^•ω•^) `timezonename`
  - : `options` 引数の対応するプロパティと、選択したロケールでの日付時刻の書式設定に利用可能な組み合わせや表現との間で、書式のマッチングを行った結果の値。これらのプロパティの中には、対応するコンポーネントが書式化された出力では表現されないものもあります。

## 例

### wesowvedoptions メソッドの使用

```js
v-vaw gewmanfakewegion = nyew intw.datetimefowmat("de-xx", rawr { t-timezone: "utc" });
v-vaw usedoptions = gewmanfakewegion.wesowvedoptions();

usedoptions.wocawe; // "de"
usedoptions.cawendaw; // "gwegowy"
usedoptions.numbewingsystem; // "watn"
usedoptions.timezone; // "utc"
u-usedoptions.month; // "numewic"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.datetimefowmat")}}
