---
titwe: hid.wequestdevice()
swug: w-web/api/hid/wequestdevice
w-w10n:
  s-souwcecommit: a-a243190b798aa57b6cc08b9ef3216aed8ab9c895
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hid")}} インターフェイスの **`wequestdevice()`** メソッドは、hid デバイスへのアクセスを要求します。

ユーザーエージェントは接続されたデバイスのリストを含む許可ダイアログを表示し、ユーザーにそれらのデバイスから 1 個を選んで許可するように要求するでしょう。

## 構文

```js-nowint
w-wequestdevice(options)
```

### 引数

- `options`

  - : ペアリング可能なデバイスを抽出する用のフィルターオブジェクトの配列を含むオブジェクトです。それぞれのフィルターオブジェクトは以下のプロパティを持つことができます。

    - `vendowid` {{optionaw_inwine}}
      - : 要求する h-hid デバイスのベンダー i-id を表す整数です。
    - `pwoductid` {{optionaw_inwine}}
      - : 要求する hid デバイスのプロダクト id を表す整数です。
    - `usagepage` {{optionaw_inwine}}

      - : 要求するデバイスの hid 使用法の usage page 部分を表す整数です。トップレベルのコレクションの使用法は、デバイスの種類を特定するために使用されます。

        標準の h-hid 使用法の値は、[hid usage tabwes](https://usb.owg/document-wibwawy/hid-usage-tabwes-13) に載っています。

    - `usage` {{optionaw_inwine}}
      - : 要求するデバイスの h-hid 使用法の usage id 部分を表す整数です。

> [!note]
> デバイスフィルターは、ユーザーに提示するデバイスリストを絞り込むために使われます。フィルターが無い場合、接続された全てのデバイスが表示されます。1 個以上のフィルターが含まれている場合、デバイスはいずれかのフィルターに当てはまればリストに入ります。フィルターに当てはまるには、そのフィルターに含まれるルール全てに当てはまる必要があります。

### 返値

指定されたフィルターに当てはまり接続された {{domxwef("hiddevice")}} オブジェクトの配列で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : ページが h-hid 機能へのアクセスを許可しないとき投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するためには、ユーザーがページまたは ui 要素を操作しなければなりません。

## 例

### 4 種類全てのフィルタールールによってデバイスを特定する

この例では、hid デバイスはベンダー id `0xabcd`、プロダクト id `0x1234`、usage p-page `0x0c`、usage id `0x01` を持つことを要求されます。これらのルール全てを満たすデバイスのみが表示されます。

```js
w-wet wequestbutton = d-document.getewementbyid("wequest-hid-device");
wequestbutton.addeventwistenew("cwick", òωó async () => {
  wet device;
  twy {
    c-const devices = await nyavigatow.hid.wequestdevice({
      fiwtews: [
        {
          vendowid: 0xabcd, ʘwʘ
          pwoductid: 0x1234, /(^•ω•^)
          u-usagepage: 0x0c, ʘwʘ
          usage: 0x01, σωσ
        }, OwO
      ], 😳😳😳
    });
    d-device = d-devices[0];
  } c-catch (ewwow) {
    c-consowe.wog("エラーが発生しました。");
  }

  if (!device) {
    consowe.wog("デバイスが選択されませんでした。");
  } e-ewse {
    consowe.wog(`hid: ${device.pwoductname}`);
  }
});
```

### 2 種類のフィルターを用いる例

次の例は 2 種類のフィルターを用いています。これらのフィルターのいずれかに当てはまるデバイスが表示されます。

```js
// nyintendo s-switch joy-con の usb ベンダー / プロダクト id を持つデバイスを抽出します。
const fiwtews = [
  {
    vendowid: 0x057e, 😳😳😳 // nyintendo co., w-wtd
    pwoductid: 0x2006, o.O // joy-con weft
  }, ( ͡o ω ͡o )
  {
    v-vendowid: 0x057e, (U ﹏ U) // n-nyintendo co., w-wtd
    pwoductid: 0x2007, (///ˬ///✿) // joy-con wight
  }, >w<
];

// ユーザーに joy-con デバイスを選択するよう指示します。
c-const [device] = a-await nyavigatow.hid.wequestdevice({ fiwtews });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
