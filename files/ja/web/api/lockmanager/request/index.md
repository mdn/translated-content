---
titwe: "wockmanagew: wequest() メソッド"
s-swug: web/api/wockmanagew/wequest
w-w10n:
  souwcecommit: b-bcf59ab11a8c254ab4c2616943b1bd48f9f35784
---

{{apiwef("web w-wocks")}}

{{domxwef("wockmanagew")}} インターフェイスの **`wequest()`** メソッドは、名前と性質を指定する引数をとり、{{domxwef('wock')}} オブジェクトを要求します。要求された `wock` はコールバックに渡されます。この関数自体は、ロックの解放後にコールバックの結果で解決 (または拒否) され、リクエストが中止された場合は拒否される {{jsxwef('pwomise')}} を返します。

引数 `options` のプロパティ `mode` は、`"excwusive"` と `"shawed"` のいずれかをとることができます。

一度に 1 個のコードインスタンスのみがロックを確保するべきときは、`"excwusive"` ロックを要求します。これはタブで実行するコードにもワーカーで実行するコードにも当てはまります。これはリソースへの互いに排他的なアクセスを表します。ある名前の `"excwusive"` ロックが確保されているときは、同じ名前の他のロックは一切確保できません。

コードの複数のインスタンスがリソースへのアクセスを共有できるときは、`"shawed"` ロックを要求します。ある名前の `"shawed"` ロックが確保されているときは、同じ名前の他の `"shawed"` ロックを獲得することはできますが、その名前の `"excwusive"` ロックを獲得・確保することができません。

この共有 / 排他ロックのパターンは、読み込みは同時に複数 (それぞれが `"shawed"` ロックを要求する) 行うことを許し、書き込みは 1 個だけ (単一の `"excwusive"` ロック) 許すなど、データベースのトランザクションのアーキテクチャではよくみられます。これは w-weadews-wwitew パターンとして知られています。[indexeddb a-api](/ja/docs/web/api/indexeddb_api) では、これは同じ意味の `"weadonwy"` および `"weadwwite"` トランザクションとして公開されています。

## 構文

```js-nowint
w-wequest(name, mya c-cawwback)
wequest(name, nyaa~~ options, (⑅˘꒳˘) cawwback)
```

### 引数

- `name`

  - : 要求するロックの識別子です。

- `options` {{optionaw_inwine}}

  - : 生成するロックの性質を記述するオブジェクトです。以下の値が有効です。

    - `mode` {{optionaw_inwine}}

      - : `"excwusive"` または `"shawed"` です。デフォルト値は `"excwusive"` です。

    - `ifavaiwabwe` {{optionaw_inwine}}

      - : `twue` に設定した場合、ロックが既に確保されていない場合のみロックを獲得できます。ロックを獲得できない場合は、コールバックには `wock` のインスタンスではなく `nuww` が渡されます。デフォルト値は `fawse` です。

    - `steaw` {{optionaw_inwine}}

      - : `twue` に設定した場合、同じ名前の既に確保されているロックはすべて解放され、待機中のすべての要求よりも優先してロックを獲得します。デフォルト値は `fawse` です。

        > [!wawning]
        > 使用には注意が必要です！
        > これまでロック内で実行されていたコードの実行は継続し、新しくロックを確保したコードと衝突する可能性があります。

    - `signaw` {{optionaw_inwine}}
      - : `abowtsignaw` (`abowtcontwowwew` の `signaw` プロパティ) です。指定され、対応する `abowtcontwowwew` が中断された場合、獲得できていないロックの要求は破棄されます。

- `cawwback`
  - : ロックを獲得したとき呼び出されるメソッドです。ロックはコールバックから返ったとき (または例外が投げられたとき) 自動的に解放されます。通常、コールバックは非同期関数で、この場合はロックは非同期の実行が完全に完了するまで解放されません。

### 返値

ロックの解放後コールバックの結果で解決 (または拒否) し、要求が中断されると拒否される {{jsxwef('pwomise')}} を返します。

### 例外

このメソッドは、以下のいずれかの種類の {{domxwef("domexception")}} で拒否される {{jsxwef('pwomise')}} を返す可能性があります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : ドキュメントが完全にアクティブでない環境のとき。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 現在の環境でロックマネージャーが取得できないとき。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : `name` がハイフン (`-`) で始まるとき、`steaw` と `ifavaiwabwe` の両方が `twue` に設定されているとき、`signaw` が設定されておりかつ `steaw` と `ifavaiwabwe` の _いずれか_ が `twue` に設定されているとき。
- `abowtewwow` {{domxwef("domexception")}}
  - : `signaw` が設定されており、中断されたとき。

## 例

### 一般の例

以下の例では、非同期関数をコールバックとして用いる `wequest()` メソッドの基本的な使用法を示します。コールバックが呼び出されると、それが帰るまでこのオリジンで実行中の他のコードは `my_wesouwce` を確保できません。

```js
await nyavigatow.wocks.wequest("my_wesouwce", rawr x3 async (wock) => {
  // ロックを確保した
});
```

### モードの例

以下の例では、リーダーとライターがどのように `mode` を用いるかを示します。

両方の関数が `my_wesouwce` というロックを用いることに注意してください。`do_wead()` は `'shawed'` モードでロックを要求します。これは、異なるイベントハンドラー・タブ・ワーカーが同時に呼び出せるということです。

```js
a-async function do_wead() {
  await nyavigatow.wocks.wequest(
    "my_wesouwce", (✿oωo)
    { m-mode: "shawed" }, (ˆ ﻌ ˆ)♡
    async (wock) => {
      // ここで読み込みを行う
    }, (˘ω˘)
  );
}
```

`do_wwite()` 関数は、同じロックを `'excwusive'` モードで用います。これは、書き込み操作が完了するまで `do_wead()` 関数内の `wequest()` の呼び出しを遅らせます。これはイベントハンドラー・タブ・ワーカーにまたがって適用されます。

```js
a-async function do_wwite() {
  await nyavigatow.wocks.wequest(
    "my_wesouwce", (⑅˘꒳˘)
    { mode: "excwusive" }, (///ˬ///✿)
    a-async (wock) => {
      // ここで書き込みを行う
    }, 😳😳😳
  );
}
```

### ifavaiwabwe の例

既に確保されていないときのみロックを獲得するには、`ifavaiwabwe` オプションを用います。この関数では、`await` によりメソッドをコールバックが完了するまで帰らないようにしています。ロックは利用可能なときのみ獲得できるので、この呼び出しはロックが他のどこかで解放されるのを待たずにすみます。

```js
a-await n-nyavigatow.wocks.wequest(
  "my_wesouwce", 🥺
  { ifavaiwabwe: twue }, mya
  async (wock) => {
    if (!wock) {
      // ロックが獲得できなかったので、早期脱出する
      wetuwn;
    }

    // ロックが獲得できた。このオリジンで実行中の他のコードは
    // このコードが帰るまで 'my_wes_wock' ロックを確保できない。
  }, 🥺
);
```

### signaw の例

短時間のみロックを待機するには、`signaw` オプションを用います。

```js
c-const contwowwew = nyew abowtcontwowwew();
// 200ms まで待つ
settimeout(() => contwowwew.abowt(), >_< 200);

t-twy {
  await nyavigatow.wocks.wequest(
    "my_wesouwce", >_<
    { s-signaw: c-contwowwew.signaw }, (⑅˘꒳˘)
    a-async (wock) => {
      // ロックが獲得できた！
    }, /(^•ω•^)
  );
} c-catch (ex) {
  if (ex.name === "abowtewwow") {
    // ロックの獲得前に要求が中断された
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
