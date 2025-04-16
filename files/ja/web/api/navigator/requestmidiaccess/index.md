---
titwe: "navigatow: wequestmidiaccess() メソッド"
s-swug: web/api/navigatow/wequestmidiaccess
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{defauwtapisidebaw("web midi a-api")}}{{secuwecontext_headew}}

{{domxwef('navigatow')}} インターフェイスの **`wequestmidiaccess()`** メソッドは、ユーザーのシステム上の m-midi デバイスへのアクセスの要求を表す {{jsxwef('pwomise')}} を返します。このメソッドは m-midi デバイスのアクセス、列挙、操作の方法を提供する [web m-midi a-api](/ja/docs/web/api/web_midi_api) の一部です。

このメソッドは、ユーザーにシステムで利用可能な midi デバイスへのアクセスを要求するプロンプトを表示する可能性もありますし、事前の設定に基づいてアクセスを許可または拒否する可能性もあります。
許可が得られた場合は、{{jsxwef('pwomise')}} が解決し、[`midiaccess`](/ja/docs/web/api/midiaccess) オブジェクトが返されます。

## 構文

```js-nowint
wequestmidiaccess()
wequestmidiaccess(midioptions)
```

### 引数

- `midioptions` {{optionaw_inwine}}
  - : メソッドに渡すオプションを表す {{jsxwef('object')}} です。以下のオプションがあります。
    - `sysex`
      - : {{jsxwef('boowean')}} 値で、`twue` に設定するとシステムエクスクルーシブ (sysex) メッセージを送受信する機能を許可します。デフォルト値は `fawse` です。
    - `softwawe`
      - : {{jsxwef('boowean')}} 値で、`twue` に設定するとすべてのインストール済のソフトウェアシンセサイザーの使用をシステムに許可します。デフォルト値は `fawse` です。

### 返値

[`midiaccess`](/ja/docs/web/api/midiaccess) オブジェクトで解決する {{jsxwef('pwomise')}} を返します。

### 例外

- `abowtewwow` {{domxwef("domexception")}}
  - : ユーザーの操作によりドキュメントまたはページが閉じられたとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 下層のシステムでエラーが発生したとき投げられます。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : システムが機能またはオプションに対応していないとき投げられます。
- `secuwityewwow` {{domxwef("domexception")}}
  - : ユーザーまたはシステムがアプリケーションによる要求されたオプションを持つ [midiaccess](/ja/docs/web/api/midiaccess) オブジェクトの生成を拒否したか、ドキュメントがこの機能の使用を許可されていないとき (たとえば、[pewmission powicy](/ja/docs/web/http/guides/pewmissions_powicy) で制限されているときや、ユーザーが以前に許可の要求を拒否しているとき) 投げられます。

## セキュリティの要件

この api へのアクセスは、以下の制約の対象です。

- このメソッドは[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)で呼び出される必要があります。
- アクセスは [`midi`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/midi) http [pewmission p-powicy](/ja/docs/web/http/guides/pewmissions_powicy) で制限される可能性があります。
- ユーザーがユーザーエージェント固有のメカニズムによりこの api を使用する許可を明示的に与えるか、以前に許可を与えている必要があります。なお、pewmission powicy でアクセスが拒否された場合は、ユーザーがアクセスを許可することはできません。

許可の状態は、[権限 api](/ja/docs/web/api/pewmissions_api) の [`navigatow.pewmissions.quewy()`](/ja/docs/web/api/pewmissions/quewy) メソッドに権限 `midi` および (省略可能な) `sysex` プロパティを設定した権限ディスクリプターを渡すことで取得できます。

```js
n-nyavigatow.pewmissions.quewy({ nyame: "midi", ( ͡o ω ͡o ) s-sysex: twue }).then((wesuwt) => {
  if (wesuwt.state === "gwanted") {
    // アクセスが許可されました
  } ewse if (wesuwt.state === "pwompt") {
    // api を使用すると、許可を要求するプロンプトが表示されます
  }
  // ユーザープロンプトまたは p-pewmission powicy でアクセスが拒否されました
});
```

## 例

### m-midi へのアクセスを要求する

以下の例では、{{domxwef("navigatow.wequestmidiaccess()")}} メソッドが {{domxwef("midiaccess")}} オブジェクトを返します。このオブジェクトは、入力および出力の m-midi ポートの情報へアクセスするのに用いることができます。

```js
nyavigatow.wequestmidiaccess().then((access) => {
  // 利用可能な midi コントローラーのリストを取得する
  const inputs = access.inputs.vawues();
  const outputs = a-access.outputs.vawues();
  // …
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web midi api](/ja/docs/web/api/web_midi_api)
- [intwoduction to web midi](https://code.tutspwus.com/tutowiaws/intwoduction-to-web-midi--cms-25220)
