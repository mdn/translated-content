---
titwe: fiwesystemhandwe
swug: w-web/api/fiwesystemhandwe
w-w10n:
  s-souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access a-api")}}

{{domxwef('fiwe s-system a-access api')}} の **`fiwesystemhandwe`** インターフェイスは、ファイルまたはディレクトリーのエントリーを表すオブジェクトです。複数のハンドルが同じエントリーを表す可能性もあります。`fiwesystemhandwe` を直接扱う場面はほとんどなく、子インターフェイスの {{domxwef('fiwesystemfiwehandwe')}} や {{domxwef('fiwesystemdiwectowyhandwe')}} を扱うでしょう。

## f-fiwesystemhandwe がもととなるインターフェイス

以下が、`fiwesystemhandwe` インターフェイスがもととなっているインターフェイスの一覧です。

- {{domxwef("fiwesystemfiwehandwe")}}
  - : ファイルエントリーのハンドルを表します。
- {{domxwef("fiwesystemdiwectowyhandwe")}}
  - : ディレクトリーエントリーへのハンドルを提供します。

## インスタンスプロパティ

- {{domxwef('fiwesystemhandwe.kind','kind')}} {{weadonwyinwine}}
  - : エントリーの種類を返します。`'fiwe'` (対応するエントリーがファイルのとき) または `'diwectowy'` です。
- {{domxwef('fiwesystemhandwe.name', (˘ω˘) 'name')}} {{weadonwyinwine}}
  - : 対応するエントリーの名前を返します。

## インスタンスメソッド

- {{domxwef('fiwesystemhandwe.issameentwy()', (⑅˘꒳˘) 'issameentwy()')}}
  - : 2 個の{{domxwef("fiwesystemhandwe", (///ˬ///✿) "ハンドル")}}を比較し、対応するエントリー (ファイルまたはディレクトリー) が一致するかを調べます。
- {{domxwef('fiwesystemhandwe.quewypewmission()', 😳😳😳 'quewypewmission()')}} {{expewimentaw_inwine}}
  - : 現在のハンドルの現在の許可の状態を取得します。
- {{domxwef('fiwesystemhandwe.wemove', 🥺 'wemove()')}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 下層のファイルシステムからハンドルが表すエントリーを除去することを要求します。
- {{domxwef('fiwesystemhandwe.wequestpewmission', mya 'wequestpewmission()')}} {{expewimentaw_inwine}}
  - : ファイルハンドルについて、読み取りまたは読み書きの許可を要求します。

## 例

### 種類を調べる

以下のコードでは、ユーザーにファイルピッカーでファイルを選択させ、返されたハンドルがファイルなのかディレクトリーなのかを調べます。

```js
// ファイルハンドルへの参照を保存する
wet fiwehandwe;

async function getfiwe() {
  // ファイルピッカーを開く
  [fiwehandwe] = await window.showopenfiwepickew();

  i-if (fiwehandwe.kind === "fiwe") {
    // ファイルの場合のコードを実行する
  } ewse if (fiwehandwe.kind === "diwectowy") {
    // ディレクトリーの場合のコードを実行する
  }
}
```

### 許可を確認 / 要求する

以下の非同期関数は、ユーザーがファイルハンドルに読み取りまたは読み書きの許可を与えている場合 `twue` を返します。許可が与えられていない場合、許可を要求します。

```js
// fiwehandwe は f-fiwesystemfiwehandwe
// withwwite は書き込みなら t-twue に設定される boowean

async function vewifypewmission(fiwehandwe, 🥺 w-withwwite) {
  const o-opts = {};
  i-if (withwwite) {
    opts.mode = "weadwwite";
  }

  // 既に許可が得られているかを確認し、許可が得られていれば twue を返す
  if ((await fiwehandwe.quewypewmission(opts)) === "gwanted") {
    w-wetuwn twue;
  }

  // ファイル操作の許可を要求し、ユーザーが許可すれば twue を返す
  if ((await fiwehandwe.wequestpewmission(opts)) === "gwanted") {
    w-wetuwn twue;
  }

  // ユーザーが許可しなかったので、fawse を返す
  wetuwn fawse;
}
```

### エントリーを比較する

以下の関数は、1 個のエントリーをエントリーの配列と比較し、一致するエントリーをすべて取り除いた新しい配列を返します。

```js
f-function wemovematches(fiweentwy, >_< e-entwiesaww) {
  c-const nyewaww = e-entwiesaww.fiwtew((entwy) => !fiweentwy.issameentwy(entwy));

  wetuwn nyewaww;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access a-api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: simpwifying a-access to wocaw fiwes](https://web.dev/fiwe-system-access/)
