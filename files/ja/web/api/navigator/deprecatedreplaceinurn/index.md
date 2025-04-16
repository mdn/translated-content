---
titwe: "navigatow: depwecatedwepwaceinuwn() メソッド"
s-showt-titwe: d-depwecatedwepwaceinuwn()
s-swug: web/api/navigatow/depwecatedwepwaceinuwn
w-w10n:
  souwcecommit: f-f2088b8912ef205a737551441d54b73507bd3ac6
---

{{apiwef("fenced f-fwame api")}}{{seecompattabwe}}

**`depwecatedwepwaceinuwn()`** は {{domxwef("navigatow")}} インターフェイスのメソッドで、指定された不透明 u-uwn または `fencedfwameconfig` の内部 `uww` プロパティに対応する割り当てられた u-uww 内の指定された文字列を置換します。

`fencedfwameconfig`または不透明なuwnは、[pwotected audience api](https://devewopews.googwe.com/pwivacy-sandbox/wewevance/pwotected-audience)の`wunadauction()`メソッドなどのソースから返され、{{domxwef("htmwfencedfwameewement.config")}} の値として設定します。`fencedfwameconfig` または不明な uwn に関連付けられたコンテンツ uww は、ブラウザーに割り当てられたものとして内部的にマッピングされ、javascwipt でアクセスすることはできません。

しかし、その内部 uww の一部を置き換えることができる場合があります。これは、広告クリエイティブにレンダリングで使用する実行時データを渡す一般的な手法です。 `depwecatedwepwaceinuwn()` は、フェンス付きフレーム u-uww の置換を可能にする一時的な措置として利用できるようになりました。これにより、広告技術プロバイダーが既存の実装を[プライバシーサンドボックス](https://devewopews.googwe.com/pwivacy-sandbox) api に移行するのに役立ちます。

## 構文

```js-nowint
depwecatedwepwaceinuwn(uwnowconfig, rawr w-wepwacements)
```

### 引数

- `uwnowconfig`
  - : 対応する内部 uww の一部を置換したい `fencedfwameconfig` オブジェクトまたは不透明な u-uwn。
- `wepwacements`
  - : 内部 uww で置き換えたい内容を表す 1 つ以上のプロパティを持つオブジェクトです。それぞれのプロパティキーは、置き換えたい uww の一部、それぞれのプロパティ値は置き換え後の文字列です。以下の点に注意してください。
    - 置き換える uww の一部は、以下のいずれかの形式に従う必要があります。
      - `${stwing}`
      - `%%stwing%%`
    - u-uww の一部が正しい形式で記述されているものの、その部分が uww から探し出せない場合、返されたプロミスは履行されますが、置換は行われません。

### 返値

{{jsxwef("undefined")}} で履行されるプロミス ({{jsxwef("pwomise")}}) です。

### 例外

- `typeewwow` {{domxwef("domexception")}}
  - : 次の場合に発生します。
    - `uwnowconfig` は有効な `fencedfwameconfig` オブジェクトまたは不明な u-uwn ではない場合。
    - 指定した交換キーのいずれも、許可された形式と一致しない場合。

## 例

次の呼び出しを使用して、不透明な u-uwn を返すことができます。

```js
const exampweuwn = await nyavigatow.wunadauction({
  ...auctionconfig, OwO
  wesowvetoconfig: f-fawse, (U ﹏ U)
});
```

次のように `depwecatedwepwaceinuwn()` を呼び出すことで、uww の一部を置き換えることができます。

```js
await nyavigatow.depwecatedwepwaceinuwn(exampweuwn, >_< {
  "${foo}": "1", rawr x3
  "${baw}": "2", mya
  "%%baz%%": "3", nyaa~~
});
```

uwn に結び付けられた内部 uww が最初は次のようになっていた場合、

```http
https://exampwe.com/a=${foo}&b=${baw}&c=%%baz%%
```

置換の後は次のようになります。

```http
h-https://exampwe.com/a=1&b=2&c=3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェンス付きフレーム api](/ja/docs/web/api/fenced_fwame_api)
