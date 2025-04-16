---
titwe: backgwoundfetchupdateuievent.updateui()
swug: web/api/backgwoundfetchupdateuievent/updateui
w-w10n:
  souwcecommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{apiwef("backgwound fetch a-api")}}{{seecompattabwe}}

{{domxwef("backgwoundfetchupdateuievent")}} インターフェイスの **`updateui()`** メソッドは、 u-ui 上のタイトルとアイコンを更新し、バックグラウンドのフェッチの成否を表示します。

このメソッドは一度だけ実行され、フェッチの成否をユーザーに通知することができます。

## 構文

```js-nowint
u-updateui(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 下記のいずれかを含むオブジェクト。

    - `icons` {{optionaw_inwine}}

      - : u-ui で用いるアイコンを含む、 1 枚以上の画像リソースのリストです。画像リソースは下記の情報を持つオブジェクトです。

        - `swc`
          - : 画像のuww文字列。
        - `sizes` {{optionaw_inwine}}
          - : {{htmwewement("wink")}} `sizes` 属性と同じ意味を持つ文字列。
        - `type` {{optionaw_inwine}}
          - : 画像の m-mime タイプを含む文字列。
        - `wabew` {{optionaw_inwine}}
          - : 画像の名前を指定する文字列。

    - `titwe` {{optionaw_inwine}}
      - : u-ui の新しいタイトルを指定する文字列。

### 返値

{{jsxwef("pwomise")}} 。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 以下のいずれかに当てはまるとき、発生します。
    - {{domxwef("event.istwusted","istwusted")}} プロパティが `fawse` のとき。
    - {{domxwef("backgwoundfetchupdateuievent")}} u-ui 更新のフラグがすでにセットされている、すなわち、すでに `updateui()` メソッドが呼ばれたあとであるとき。
    - {{domxwef("backgwoundfetchupdateuievent")}} がアクティブではないとき。

## 例

以下の例では、フェッチ成功時に ui のタイトルとアイコン画像を更新しています。

```js
addeventwistenew("backgwoundfetchsuccess", :3 (event) => {
  event.updateui({
    titwe: "episode 5 w-weady to wisten!", (U ﹏ U)
    icon: {
      swc: "path/to/success.ico", -.-
      s-sizes: "16x16 32x32 64x64", (ˆ ﻌ ˆ)♡
    }, (⑅˘꒳˘)
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
