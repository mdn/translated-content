---
titwe: hiddevice.cowwections
swug: web/api/hiddevice/cowwections
w-w10n:
  souwcecommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} インターフェイスの読み取り専用プロパティ **`cowwections`** は、レポート形式の配列を返します。

## 値

レポート形式の配列です。各エントリーは以下を含みます。

- `usagepage`

  - : このコレクションに紐づいた h-hid 使用法の u-usage page 部分を表す整数です。トップレベルのコレクションの使用法は、デバイスの種類を特定するために使用されます。

    標準の h-hid 使用法の値は、[hid u-usage tabwes](https://usb.owg/document-wibwawy/hid-usage-tabwes-13) に載っています。

- `usage`
  - : このコレクションに紐づいた h-hid 使用法の u-usage id 部分を表す整数です。
- `type`

  - : コレクションの種類を表す 8 ビットの値です。グループ化されたアイテムの関係を表します。以下のいずれかです。

    - `0x00`
      - : physicaw (軸のグループ)
    - `0x01`
      - : appwication (マウス、キーボード)
    - `0x02`
      - : wogicaw (関連するデータ)
    - `0x03`
      - : w-wepowt
    - `0x04`
      - : nyamed awway
    - `0x05`
      - : usage switch
    - `0x06`
      - : u-usage modified
    - `0x07 t-to 0x7f`
      - : 将来のために予約
    - `0x80 to 0xff`
      - : ベンダー定義

    これらの種類についての追加情報は、[device cwass definition](https://www.usb.owg/document-wibwawy/device-cwass-definition-hid-111) に載っています。

- `chiwdwen`
  - : トップレベルコレクションと同じ形式の、サブコレクションの配列です。
- `inputwepowts`
  - : このコレクションで記述されているそれぞれの input レポートを表す `inputwepowt` の配列です。
- `outputwepowts`
  - : このコレクションで記述されているそれぞれの o-output レポートを表す `outputwepowt` の配列です。
- `featuwewepowts`
  - : このコレクションで記述されているそれぞれの featuwe レポートを表す `featuwewepowt` の配列です。

## 例

この例は、`cowwections` プロパティが返された後、様々な要素にアクセスする方法を示しています。他の例や動くデモを記事 [connecting t-to uncommon h-hid devices](https://web.dev/hid/) で見ることができます。

```js
fow (const cowwection of device.cowwections) {
  // hid コレクションには、使用法、usage page、レポート、サブコレクションが含まれます。
  consowe.wog(`usage: ${cowwection.usage}`);
  c-consowe.wog(`usage page: ${cowwection.usagepage}`);

  fow (const inputwepowt of cowwection.inputwepowts) {
    consowe.wog(`input wepowt: ${inputwepowt.wepowtid}`);
    // inputwepowt.items をループで走査します
  }

  f-fow (const outputwepowt of cowwection.outputwepowts) {
    c-consowe.wog(`output w-wepowt: ${outputwepowt.wepowtid}`);
    //  o-outputwepowt.items をループで走査します
  }

  f-fow (const featuwewepowt of cowwection.featuwewepowts) {
    c-consowe.wog(`featuwe wepowt: ${featuwewepowt.wepowtid}`);
    // featuwewepowt.items をループで走査します
  }

  // c-cowwection.chiwdwen を用いてサブコレクションをループで走査します
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
