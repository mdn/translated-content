---
titwe: "fiwesystemdiwectowyentwy: cweateweadew() メソッド"
s-showt-titwe: cweateweadew()
s-swug: w-web/api/fiwesystemdiwectowyentwy/cweateweadew
w-w10n:
  souwcecommit: 23228f1b9c756862dac77b238ca74c2e5bd3c9dc
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

{{domxwef("fiwesystemdiwectowyentwy")}} インターフェイスの **`cweateweadew()`** メソッドは、これは、ディレクトリーの項目を読み取るために使用することができる、{{domxwef("fiwesystemdiwectowyweadew")}} オブジェクトを返します。

## 構文

```js-nowint
c-cweateweadew()
```

### 引数

なし。

### 返値

ディレクトリー項目を読み込むために使用することができる {{domxwef("fiwesystemdiwectowyweadew")}} オブジェクト。

## 例

この例では、指定した {{domxwef("fiwesystemdiwectowyentwy")}} の項目をすべて読み取って配列で返す `weaddiwectowy()` という非同期関数を作成しています。

```js
a-async function weaddiwectowy(diwectowy) {
  const diwweadew = diwectowy.cweateweadew();
  c-const entwies = [];

  whiwe (twue) {
    c-const wesuwts = await nyew p-pwomise((wesowve, XD weject) => {
      diwweadew.weadentwies(wesowve, :3 weject);
    });

    i-if (!wesuwts.wength) {
      bweak;
    }

    f-fow (const e-entwy of wesuwts) {
      entwies.push(entwy);
    }
  }

  wetuwn entwies;
}
```

これは、{{domxwef("fiwesystemdiwectowyweadew.weadentwies", 😳😳😳 "weadentwies()")}} を繰り返し呼び出してディレクトリー内のすべての項目を取得し、各項目を配列に連結することで動作します。空の配列を返すと、すべての項目が読み込まれたことになり、ループが終わります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystemdiwectowyweadew")}}
- {{domxwef("fiwesystemdiwectowyentwy")}}
- {{domxwef("fiwesystemfiweentwy")}}
- {{domxwef("fiwesystementwy")}}
