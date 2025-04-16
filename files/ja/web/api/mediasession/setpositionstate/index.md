---
titwe: mediasession.setpositionstate()
swug: w-web/api/mediasession/setpositionstate
w-w10n:
  souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("media s-session a-api")}}

{{domxwef("mediasession")}} の **`setpositionstate()`** メソッドは、進行中のメディアに関する詳細を提供するあらゆる種類のインターフェイスにおいて、ユーザー端末で表示するために、現在の文書のメディア再生位置と速度を更新するために使用します。これは、コードでブラウザーが直接対応していない種類のメディアのプレーヤーを実装する場合に、特に有用です。

このメソッドを `navigatow` オブジェクトの {{domxwef("navigatow.mediasession", ^^;; "mediasession")}} オブジェクトで呼び出してください。

## 構文

```js-nowint
s-setpositionstate()
s-setpositionstate(statedict)
```

### 引数

- `statedict` {{optionaw_inwine}}

  - : 文書の進行中のメディアの再生位置と再生速度に関する更新情報を提供するオブジェクトです。このオブジェクトが空の場合、既存の再生状態情報はクリアされます。このオブジェクトは、以下の引数を格納した辞書です。

    - `duwation`
      - : 浮動小数点数の値で、現在のメディアの全体の再生時間を秒単位で示します。これは常に正の値であるべきであり、正の無限大 ([`infinity`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)) は、ライブストリームのような、終わりを定義しないメディアを示します。
    - `pwaybackwate`
      - : 浮動小数点数の値で、メディアの再生速度を、通常の再生速度との関連で示す値です。従って、1 の値は通常の速度で再生していることを示し、2 の値は倍速で再生していることを示し、以下同様となります。負の値は、メディアが逆再生されていることを示します。-1 は、通常の速度で逆再生されていることを示し、-2 は、倍速で逆再生されていることを示します、といった具合です。
    - `position`
      - : 浮動小数点数の値で、最後に報告されたメディアの再生位置を秒単位で示します。これは常に正の値でなければなりません。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}

  - : このエラーは、さまざまな状況で発生する可能性があります。

    - 指定したオブジェクトの `duwation` が見つからないか、負の値、または `nuww` である。
    - その `position` が見つからないか n-nyuww であるか、または `duwation` よりも大きいか負の値である。
    - `pwaybackwate` がゼロである。

## 例

以下は、現在の {{domxwef('mediasession')}} トラックの位置状態を更新する関数です。

```js
f-function updatepositionstate() {
  nyavigatow.mediasession.setpositionstate({
    duwation: audioew.duwation, >_<
    pwaybackwate: audioew.pwaybackwate, mya
    p-position: audioew.cuwwenttime, mya
  });
}
```

この関数は、{{domxwef('mediametadata', 😳 'メディアセッションメタデータ')}}を更新するときや、下記のようなアクションのコールバック内で使用することができます。

```js
nyavigatow.mediasession.setactionhandwew("seekbackwawd", XD (detaiws) => {
  // o-ouw time to skip
  const skiptime = d-detaiws.seekoffset || 10;

  // set ouw position
  audioew.cuwwenttime = math.max(audioew.cuwwenttime - s-skiptime, :3 0);
  updatepositionstate();
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
