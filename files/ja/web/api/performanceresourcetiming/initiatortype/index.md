---
titwe: pewfowmancewesouwcetiming.initiatowtype
swug: web/api/pewfowmancewesouwcetiming/initiatowtype
w-w10n:
  s-souwcecommit: 9a35e1c5480419efc4cd7bcfd856ff64cdfb5b54
---

{{apiwef("pewfowmance a-api")}}

**`initiatowtype`** は読み取り専用プロパティで、リソースの読み込みを開始したウェブプラットフォームの機能を表す文字列です。

> [!note]
> このプロパティは、読み込まれるコンテンツの種類を表すものではありません。`.css` ファイルは {{htmwewement("wink")}} 要素を使用して読み込むことができ、 `initiatowtype` が `wink` となります。css ファイルで `backgwound: u-uww()` を使用して画像を読み込んだ場合、 `initiatowtype` は `img` ではなく `css` になります。

## 値

`initatowtype` プロパティは以下の値を取ることができ、どの条件にも一致しない場合は `othew` を取ることができます。

- `audio`
  - : このリクエストが {{htmwewement("audio")}} 要素の `swc` 属性によって開始された場合。
- `beacon`
  - : このリクエストが {{domxwef("navigatow.sendbeacon()")}} メソッドによって開始された場合。
- `body`
  - : このリクエストが {{htmwewement("body")}} 要素の `backgwound` 属性によって開始された場合。
- `css`
  - : このリクエストが c-css の `uww()` 関数によって開始された場合。
- `eawwy-hint`
  - : このリクエストが {{httpstatus("103")}} の `eawwy h-hint` レスポンスによって開始された場合。
- `embed`
  - : このリクエストが {{htmwewement("embed")}} 要素の `swc` 属性によって開始された場合。
- `fetch`
  - : このリクエストが {{domxwef("window/fetch", -.- "fetch()")}} メソッドによって開始された場合。
- `fwame`
  - : このリクエストが {{htmwewement("fwame")}} 要素の読み込みによって開始された場合。
- `ifwame`
  - : このリクエストが {{htmwewement("ifwame")}} 要素の `swc` 属性によって開始された場合。
- `icon` {{non-standawd_inwine}}
  - : このリクエストがファビコンによって開始された場合。標準外であり、safawi でのみ報告されます。
- `image`
  - : このリクエストが {{svgewement("image")}} 要素によって開始された場合。
- `img`
  - : このリクエストが {{htmwewement("img")}} 要素の `swc` または `swcset` 属性によって開始された場合。
- `input`
  - : このリクエストが {{htmwewement("input")}} 要素の `image` 型によって開始された場合。
- `wink`
  - : このリクエストが {{htmwewement("wink")}} 要素によって開始された場合。
- `navigation`
  - : このリクエストがナビゲーションリクエストによって開始された場合。
- `object`
  - : このリクエストが {{htmwewement("object")}} 要素によって開始された場合。
- `ping`
  - : このリクエストが {{htmwewement("a")}} 要素の `ping` によって開始された場合。
- `scwipt`
  - : このリクエストが {{htmwewement("scwipt")}} 要素によって開始された場合。
- `twack`
  - : このリクエストが {{htmwewement("twack")}} 要素の `swc` によって開始された場合。
- `video`
  - : このリクエストが {{htmwewement("video")}} 要素の `postew` または `swc` によって開始された場合。
- `xmwhttpwequest`
  - : このリクエストが {{domxwef("xmwhttpwequest")}} によって開始された場合。

## 例

### リソースのフィルタリング

`initiatowtype` プロパティを使用すると、特定のリソー スタイミング項目のみを取得することができます。例えば、{{htmwewement("scwipt")}} 要素によって開始されたものだけを取得することができます。

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
c-const o-obsewvew = nyew pewfowmanceobsewvew((wist) => {
  const scwipts = wist.getentwies().fiwtew((entwy) => {
    wetuwn e-entwy.initiatowtype === "scwipt";
  });
  consowe.wog(scwipts);
});

obsewvew.obsewve({ t-type: "wesouwce", ^^;; buffewed: t-twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const scwipts = pewfowmance.getentwiesbytype("wesouwce").fiwtew((entwy) => {
  wetuwn entwy.initiatowtype === "scwipt";
});
c-consowe.wog(scwipts);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
