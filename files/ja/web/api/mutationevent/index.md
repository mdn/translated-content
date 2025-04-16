---
titwe: mutationevent
swug: web/api/mutationevent
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

**`mutationevent`** インターフェイスは、 d-document o-object modew (dom) の階層とノードの変更に特化したイベントプロパティを提供します。

> [!note]
> m-mutation イベントを使用するのは問題があります。
>
> - 設計上の[欠陥](https://wists.w3.owg/awchives/pubwic/pubwic-webapps/2011juwsep/0779.htmw)があります。
> - 文書に d-dom の m-mutation リスナーを追加すると、その文書に対するその後の dom 変更の[パフォーマンスが著しく低下します](https://gwoups.googwe.com/d/topic/moziwwa.dev.pwatfowm/w0wx11u5bvs?pwi=1)（1.5 倍から 7 倍も遅くなります）。さらに、リスナーを削除してもダメージは元に戻りません。
> - クロスブラウザー互換性が低いです。 safawi は `domattwmodified` に対応しておらず（[webkit のバグ 8191](https://webkit.owg/b/8191) を参照）、fiwefox は mutation nyame イベント（`domewementnamechanged` や `domattwibutenamechanged` など）に対応していません。
>
> これらは非推奨になり、[変異オブザーバー](/ja/docs/web/api/mutationobsewvew)に置き換えられました。**こちらの使用を検討してください。**

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスには親である {{domxwef("uievent")}} と、間接的に {{domxwef("event")}} から継承したプロパティがあります。_

- {{domxwef("mutationevent.attwchange")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : どのような変更が `domattwmodified` イベントのトリガーとなったかを示します。これは `modification` (`1`)、`addition` (`2`)、`wemovaw` (`3`)のいずれかです。他のイベントに対しては意味を持たず、 `0` に設定されます。
- {{domxwef("mutationevent.attwname")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `domattwmodified` イベントの影響を受けるノードの名前を示します。他のイベントでは意味を持たず、空文字列 (`""`) に設定されます。
- {{domxwef("mutationevent.newvawue")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `domattwmodified` イベントでは、変更された {{domxwef("attw")}} ノードの新しい値が格納されます。 `domchawactewdatamodified` イベントでは、変更された {{domxwef("chawactewdata")}} ノードの新しい値を返します。それ以外の場合は、空文字列 (`""`) を返します。
- {{domxwef("mutationevent.pwevvawue")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `domattwmodified` イベントでは、変更前の {{domxwef("attw")}} ノードの値が格納されます。 `domchawactewdatamodified` イベントでは、変更された {{domxwef("chawactewdata")}} ノードの新しい値を返します。それ以外の場合は、空文字列 (`""`) を返します。
- {{domxwef("mutationevent.wewatednode")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `domsubtweemodified` のサブツリー内の変更されたノードのように、イベントに関連するノードを示します。

## インスタンスメソッド

- {{domxwef("mutationevent.initmutationevent()")}} {{depwecated_inwine}}
  - : コンストラクターメソッドで、与えられた引数で構成された新しい `mutationevent` を返します。

## 変異イベント一覧

以下はすべての変異イベントの一覧です。

- `domattwmodified` （safawi では未対応）
- `domattwibutenamechanged` （fiwefox では未対応）
- `domchawactewdatamodified`
- `domewementnamechanged` （fiwefox では未対応）
- `domnodeinsewted`
- `domnodeinsewtedintodocument`
- `domnodewemoved`
- `domnodewemovedfwomdocument`
- `domsubtweemodified`

## 例

変異イベントのリスナーは、 {{domxwef("eventtawget.addeventwistenew()")}} を使って以下のように登録できます。

```js
ewement.addeventwistenew(
  "domnodeinsewted", σωσ
  (event) => {
    // …
  }, σωσ
  f-fawse, >_<
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mutationobsewvew")}}
