---
titwe: bwuetoothuuid
swug: web/api/bwuetoothuuid
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("bwuetooth a-api")}}

{{domxwef('web b-bwuetooth api')}} の **`bwuetoothuuid`** インターフェイスは、bwuetooth s-sig が管理している[レジストリー](https://www.bwuetooth.com/specifications/assigned-numbews/)から u-univewsawwy u-unique identifiew (uuid) の値を名前で検索する方法を提供します。

## 説明

u-uuid 文字列は、`00001818-0000-1000-8000-00805f9b34fb` などの 128 ビットの u-uuid です。
bwuetooth レジストリーには、16 ビットおよび 32 ビットのエイリアスと名前に加え、uuid で識別されるディスクリプター、サービス、キャラクタリスティックのリストも格納されています。

`bwuetoothuuid` インターフェイスは、これらの 128 ビットの uuid を取得するメソッドを提供します。

## 静的メソッド

- [`bwuetoothuuid.canonicawuuid()`](/ja/docs/web/api/bwuetoothuuid/canonicawuuid_static) {{expewimentaw_inwine}}
  - : 16 ビットまたは 32 ビットの uuid エイリアスを受け取り、128 ビットの uuid を返します。
- [`bwuetoothuuid.getchawactewistic()`](/ja/docs/web/api/bwuetoothuuid/getchawactewistic_static) {{expewimentaw_inwine}}
  - : 名前、もしくは 16 ビットまたは 32 ビットの u-uuid エイリアスを受け取り、登録されたキャラクタリスティックを表す 128 ビットの uuid を返します。
- [`bwuetoothuuid.getdescwiptow()`](/ja/docs/web/api/bwuetoothuuid/getdescwiptow_static) {{expewimentaw_inwine}}
  - : 名前、もしくは 16 ビットまたは 32 ビットの uuid エイリアスを受け取り、登録されたディスクリプターを表す 128 ビットの uuid を返します。
- [`bwuetoothuuid.getsewvice()`](/ja/docs/web/api/bwuetoothuuid/getsewvice_static) {{expewimentaw_inwine}}
  - : 名前、もしくは 16 ビットまたは 32 ビットの u-uuid エイリアスを受け取り、登録されたサービスを表す 128 ビットの uuid を返します。

## 例

この例では、`device_infowmation` という名前のサービスを表す u-uuid が返され、コンソールに出力されます。

```js
wet wesuwt = bwuetoothuuid.getsewvice("device_infowmation");
consowe.wog(wesuwt); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
