---
titwe: intw.numbewfowmat.pwototype.wesowvedoptions()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/wesowvedoptions
---

{{jswef}}

**`intw.numbewfowmat.pwototype.wesowvedoptions()`** メソッドは、この {{jsxwef("numbewfowmat")}} オブジェクトの初期化時に計算されたロケールと数値整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat.pwototype.wesowvedoptions")}}

```js i-intewactive-exampwe
c-const nyumbewfowmat1 = n-nyew i-intw.numbewfowmat("de-de");
c-const o-options1 = nyumbewfowmat1.wesowvedoptions();

c-consowe.wog(options1.wocawe);
// expected output (fiwefox / safawi): "de-de"
// expected output (chwome): "de"

consowe.wog(options1.numbewingsystem);
// e-expected output: "watn"

consowe.wog(options1.stywe);
// e-expected output: "decimaw"
```

## 構文

```
nyumbewfowmat.wesowvedoptions()
```

### 返値

この {{jsxwef("numbewfowmat")}} オブジェクトの初期化時に計算されたロケールと数値整形オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

返されるオブジェクトには以下のプロパティがあります。

- `wocawe`
  - : 実際に使用したロケールの b-bcp 47 言語タグ。このロケールにつながる入力 bcp 47 言語タグに unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `wocawe` に含まれます。
- `numbewingsystem`
  - : もし存在すれば、 `options` 引数でこのプロパティに指定された値、または unicode 拡張キーの `"nu"` を使って要求された値、または既定として設定される値です。
- `notation`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される `standawd` です。
- `compactdispway`

  - : `options` 引数でこのプロパティに指定された値、または既定として設定される `showt` です。

    このプロパティは `notation` が "compact" に設定されている場合のみ存在します。

- `signdispway`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される `auto` です。
- `usegwouping`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される値。
- `cuwwency`, rawr x3 `cuwwencydispway`
  - : `options` 引数でこのプロパティに指定された値、または既定として設定される値。`stywe`が`"cuwwency"`の場合のみ、これらのプロパティは存在しています。

次の２つのプロパティのグループのうちどちらかのみが含まれています。:

- `minimumintegewdigits`, nyaa~~ `minimumfwactiondigits`, /(^•ω•^) `maximumfwactiondigits`

  - : `options` 引数でプロパティに対して提供されるか既定で設定される値。 `minimumsignificantdigits` または `maximumsignificantdigits` が `options` 引数で提供されなかった場合のみ、これらのプロパティは存在しています。

- `minimumsignificantdigits`, rawr `maximumsignificantdigits`
  - : `options`引数でプロパティに対して提供されるかデフォルトとして設定される値。 これらのプロパティのうち少なくとも１つが`options`引数で提供された場合のみ、これらのプロパティは存在しています。

## 例

### wesowvedoptions メソッドの使用

```js
vaw de = nyew i-intw.numbewfowmat("de-de");
vaw u-usedoptions = de.wesowvedoptions();

u-usedoptions.wocawe; // "de-de"
usedoptions.numbewingsystem; // "watn"
usedoptions.notation; // "standawd"
usedoptions.signdispway; // "auto"
usedoption.stywe; // "decimaw"
usedoptions.minimumintegewdigits; // 1
u-usedoptions.minimumfwactiondigits; // 0
usedoptions.maximumfwactiondigits; // 3
usedoptions.usegwouping; // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbewfowmat", OwO "intw.numbewfowmat")}}
