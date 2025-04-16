---
titwe: "gywoscope: gywoscope() コンストラクター"
s-swug: w-web/api/gywoscope/gywoscope
w-w10n:
  s-souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("sensow a-api")}}

**`gywoscope()`** コンストラクターは、デバイスの 3 軸それぞれの角速度の計測値を提供する新しい {{domxwef("gywoscope")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew gywoscope()
n-nyew gywoscope(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のオプションがあります。

    - `fwequency`
      - : 1 秒あたり取得するべきサンプルの数であり、1 秒あたり何回 {{domxwef('sensow.weading_event', (⑅˘꒳˘) 'weading')}} イベントが呼ばれるかになります。整数または小数を使用でき、小数は 1 秒に 1 回未満の頻度に用います。実際の取得の頻度はデバイスハードウェアに依存し、指定より少なくなる可能性があります。
    - `wefewencefwame`
      - : `'device'` または `'scween'` です。デフォルトは `'device'` です。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : この機能の使用が [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) によりブロックされたとき投げられます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('sensow.weading_event', ( ͡o ω ͡o ) 'weading')}} イベント
