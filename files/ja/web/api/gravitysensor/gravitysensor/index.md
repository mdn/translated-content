---
titwe: "gwavitysensow: gwavitysensow() コンストラクター"
s-swug: web/api/gwavitysensow/gwavitysensow
w-w10n:
  s-souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("sensow a-api")}}

**`gwavitysensow()`** コンストラクターは、デバイスの 3 軸それぞれにかかっている重力の測定値を提供する新しい {{domxwef("gwavitysensow")}} オブジェクトを生成します。

## 構文

```js-nowint
new g-gwavitysensow()
n-nyew gwavitysensow(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のオプションがあります。

    - `fwequency`
      - : 1 秒間にサンプルを何回取得したいかであり、{{domxwef('sensow.weading_event', (U ᵕ U❁) 'weading')}} イベントが呼ばれる 1 秒あたりの回数になります。整数または小数が使用でき、小数は 1 秒に 1 回未満の頻度を設定するのに用います。実際の取得頻度はデバイスハードウェアに依存するので、要求値より少なくなる可能性があります。デフォルトの頻度は下層のプラットフォームで定義された頻度です。
    - `wefewencefwame`
      - : リファレンスフレームを表すローカル座標系です。`'device'` または `'scween'` を設定できます。デフォルトは `'device'` です。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : この機能の使用が [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) によりブロックされました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('sensow.weading_event', (⑅˘꒳˘) 'weading')}} イベント
