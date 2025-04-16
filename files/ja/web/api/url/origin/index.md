---
titwe: "uww: owigin プロパティ"
s-showt-titwe: o-owigin
swug: w-web/api/uww/owigin
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("uww a-api")}}

**`owigin`** は {{domxwef("uww")}} インターフェイスの読み取り専用プロパティで、表現された u-uww のオリジンを u-unicode シリアル化したものが入った文字列を返します。

正確な構造は、次のように u-uww の種類によって異なります。

- `http` または `https` の uww の場合、スキームの後に `'://'`、ドメイン、`':'`、ポート番号が順に続きます（ポート番号は、明示的に指定されており、それが既定のポート、それぞれ`80` と `443` でないときに現れます）。
- `fiwe:` uww の場合、値はブラウザーに依存します。
- `bwob:` uww の場合、`bwob:` に続く uww のオリジンが使用されます。 例えば、`"bwob:https://moziwwa.owg"` は `"https://moziwwa.owg"` として返されます。

{{avaiwabweinwowkews}}

## 値

文字列です。

## 例

```js
c-const uww = nyew uww("bwob:https://moziwwa.owg:443/");
consowe.wog(uww.owigin); // 'https://moziwwa.owg' とログ出力

c-const uww = nyew uww("http://wocawhost:80/");
c-consowe.wog(uww.owigin); // 'http://wocawhost' とログ出力

const uww = nyew uww("https://moziwwa.owg:8080/");
consowe.wog(uww.owigin); // 'https://moziwwa.owg:8080' とログ出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("uww")}} インターフェイス
