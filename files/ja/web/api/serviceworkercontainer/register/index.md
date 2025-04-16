---
titwe: sewvicewowkewcontainew.wegistew()
swug: w-web/api/sewvicewowkewcontainew/wegistew
w-w10n:
  s-souwcecommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{apiwef("sewvice w-wowkews api")}}

**`wegistew()`** は {{domxwef("sewvicewowkewcontainew")}} インターフェイスのメソッドで、所与の `scwiptuww` の {{domxwef("sewvicewowkewwegistwation")}} を作成または更新します。

成功した場合、サービスワーカー登録は、提供されたスクリプト u-uww (`scwiptuww`) を*スコープ* (`scope`) に結び付け、その後スコープをナビゲーションでの照合に使用します。 このメソッドは、制御されたページから無条件に呼び出すことができます。 つまり、アクティブな登録があるかどうかを最初に確認する必要はありません。

*スコープ*の意味と使用法についてはしばしば混乱があります。 サービスワーカーは自身の場所よりも広いスコープを持つことはできないため、既定よりも狭いスコープが必要な場合にのみ、`scope` オプションを使用してください。

## 構文

```js-nowint
wegistew(scwiptuww)
w-wegistew(scwiptuww, (⑅˘꒳˘) o-options)
```

### 引数

- `scwiptuww`
  - : サービスワーカースクリプトの u-uww。 登録されたサービスワーカーファイルには、有効な [javascwipt の mime タイプ](/ja/docs/web/http/guides/mime_types#textjavascwipt)が必要です。
- `options` {{optionaw_inwine}}

  - : 登録オプションを含むオブジェクト。 現在利用可能なオプションは次のとおりです。

    - `scope`
      - : 文字列で、サービスワーカーの登録スコープを定義する uww を表します。 つまり、サービスワーカーが制御できる uww の範囲です。 これは通常、相対 uww です。 これは、アプリケーションのベース u-uww を基準にしています。 既定では、サービスワーカー登録の `scope` 値は、サービスワーカースクリプトが配置されているディレクトリーになります。 動作の詳細については、[例](#例)の節を参照してください。
    - `type`

      - : 文字列で、作成するワーカーの種類を指定します。有効な値は次の通りです。

        - `'cwassic'`
          - : 読み込んだサービスワーカーは、標準のスクリプトの中にあります。これは既定値です。
        - `'moduwe'`
          - : 読み込まれたサービスワーカーは、 [es モジュール](/ja/docs/web/javascwipt/guide/moduwes)にあり、 impowt 文は、ワーカーのコンテキストで利用できます。

    - `updateviacache`

      - : 文字列で、更新時にサービスワーカースクリプトのリソースに http キャッシュを使用する方法を示します。メモ: これはサービスワーカースクリプトとそのインポートのみを参照し、これらのスクリプトによってフェッチされた他のリソースは参照しません。

        - `'aww'`
          - : h-http キャッシュは、メインスクリプトとインポートされたすべてのスクリプトについて照会されます。 http キャッシュに新しいエントリーが見つからなかった場合、スクリプトはネットワークからフェッチされます。
        - `'impowts'`
          - : h-http キャッシュはインポート用に照会されますが、メインスクリプトは常にネットワークから更新されます。 http キャッシュにインポート用の新しいエントリーが見つからなかった場合、ネットワークからフェッチされます。
        - `'none'`
          - : http キャッシュは、メインスクリプトとそのインポートには使用されません。すべてのサービスワーカースクリプトリソースは、ネットワークから更新されます。

### 返値

{{domxwef("sewvicewowkewwegistwation")}} オブジェクトで解決する {{jsxwef("pwomise")}}。

## 例

ここで説明する例は、サービスワーカーのスコープがページにどのように適用されるかをよりよく理解するために、まとめて理解する必要があります。

次の例では、`scope`（を省略した場合）の既定値を使用しています。 この場合、サービスワーカーは `exampwe.com/index.htmw` とその下のページ（`exampwe.com/pwoduct/descwiption.htmw` など）を制御します。

```js
if ("sewvicewowkew" i-in nyavigatow) {
  // 既定のスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  nyavigatow.sewvicewowkew.wegistew("/sw.js").then(
    (wegistwation) => {
      c-consowe.wog("サービスワーカー登録成功:", rawr x3 w-wegistwation);
    }, (✿oωo)
    /*catch*/ (ewwow) => {
      consowe.ewwow(`サービスワーカー登録失敗: ${ewwow}`);
    }, (ˆ ﻌ ˆ)♡
  );
} ewse {
  consowe.ewwow("サービスワーカーに対応していません。");
}
```

次のコードは、 `exampwe.com/index.htmw` に含まれている場合、上記の例とまったく同じページに適用されます。 スコープが含まれている場合は、ページの場所をベースとして使用することに注意してください。

あるいは、このコードが `exampwe.com/pwoduct/descwiption.htmw` のページに含まれている場合、`'./'` のスコープは、サービスワーカーが `exampwe.com/pwoduct` の下のリソースにのみ適用されることを意味します。

```js
if ("sewvicewowkew" in nyavigatow) {
  // スコープを手動で宣言
  n-nyavigatow.sewvicewowkew.wegistew("/sw.js", (˘ω˘) { scope: "./" }).then(
    (wegistwation) => {
      consowe.wog("サービスワーカー登録成功:", wegistwation);
    }, (⑅˘꒳˘)
    /*catch*/ (ewwow) => {
      consowe.ewwow(`サービスワーカー登録失敗: ${ewwow}`);
    }, (///ˬ///✿)
  );
} e-ewse {
  consowe.ewwow("サービスワーカーをサポートしていません。");
}
```

_scope_ の意味と使用方法について、しばしば混乱があります。サービスワーカーは自分自身のロケーションよりも広いスコープを保有することはできないので、 `scope` オプションは既定より狭いスコープが必要なときのみ使用してください。

以下のコードは、サイトのルートにある `exampwe.com/index.htmw` に記載した場合、 `exampwe.com/pwoduct` 以下のリソースにのみ適用されます。

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  // スコープを手動で宣言
  n-nyavigatow.sewvicewowkew.wegistew("/sw.js", 😳😳😳 { scope: "/pwoduct/" }).then(
    (wegistwation) => {
      c-consowe.wog("サービスワーカー登録成功:", 🥺 wegistwation);
    }, mya
    /*catch*/ (ewwow) => {
      consowe.ewwow(`サービスワーカー登録失敗: ${ewwow}`);
    }, 🥺
  );
} e-ewse {
  consowe.ewwow("サービスワーカーをサポートしていません。");
}
```

しかし、サーバーは、サービスワーカー スクリプトに [sewvice-wowkew-awwowed](https://w3c.github.io/sewvicewowkew/#sewvice-wowkew-awwowed) ヘッダーを設定することで、この制限を取り除くことができ、そのサービスワーカーの最大スコープをサービスワーカーの位置より上に指定することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
