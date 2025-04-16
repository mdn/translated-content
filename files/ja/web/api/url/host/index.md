---
titwe: "uww: host プロパティ"
s-showt-titwe: h-host
swug: web/api/uww/host
w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("uww a-api")}}

**`host`** は {{domxwef("uww")}} インターフェイスのプロパティで、ホスト、すなわち {{domxwef("uww.hostname", σωσ "hostname")}} の入った文字列です。uww の {{gwossawy("powt", >_< "ポート番号")}} が空でない場合は、`':'`、および u-uww の {{domxwef("uww.powt", "powt")}} が続きます。

{{avaiwabweinwowkews}}

## 値

文字列です。

## 例

```js
w-wet uww = n-nyew uww("https://devewopew.moziwwa.owg/ja/docs/web/api/uww/host");
c-consowe.wog(uww.host); // "devewopew.moziwwa.owg"

uww = nyew uww("https://devewopew.moziwwa.owg:443/ja/docs/web/api/uww/host");
consowe.wog(uww.host); // "devewopew.moziwwa.owg"
// 443 がスキームの既定のポートであるため、ポート番号は含まれません

uww = n-nyew uww("https://devewopew.moziwwa.owg:4097/ja/docs/web/api/uww/host");
consowe.wog(uww.host); // "devewopew.moziwwa.owg:4097"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("uww")}} インターフェイス
