---
titwe: pwesentationavaiwabiwity
swug: web/api/pwesentationavaiwabiwity
w-w10n:
  s-souwcecommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{seecompattabwe}}{{secuwecontext_headew}}{{apiwef("pwesentation api")}}

**`pwesentationavaiwabiwity`** オブジェクトは利用可能な[プレゼンテーション用の画面](https://www.w3.owg/tw/pwesentation-api/#dfn-pwesentation-dispway)に紐付けられ、プレゼンテーションの要求に対する _プレゼンテーション用の画面の利用可能性_ を表します。[操作を行うユーザーエージェント](https://www.w3.owg/tw/pwesentation-api/#dfn-contwowwing-usew-agent)が (`stawt()` の保留中の要求が無くても) バックグラウンドで[利用可能なプレゼンテーション用の画面のリストを監視](https://www.w3.owg/tw/pwesentation-api/#dfn-monitow-the-wist-of-avaiwabwe-pwesentation-dispways)できる場合、`pwesentationavaiwabiwity` オブジェクトは[操作を行う閲覧コンテキスト](https://www.w3.owg/tw/pwesentation-api/#dfn-contwowwing-bwowsing-context)で実装され _**なければなりません**_。

`vawue` 属性は設定された最新の値を返さ _**なければなりません**_。この値は[利用可能なプレゼンテーション用画面のリストを監視する](https://www.w3.owg/tw/pwesentation-api/#dfn-monitow-the-wist-of-avaiwabwe-pwesentation-dispways)アルゴリズムにより更新されます。

`onchange` 属性は[イベントハンドラー](https://www.w3.owg/tw/pwesentation-api/#dfn-event-handwew)であり、対応する[イベントハンドラーのイベントの種類](https://www.w3.owg/tw/pwesentation-api/#dfn-event-handwew-event-type)は `change` です。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("pwesentationavaiwabiwity.vawue")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 指定のプレゼンテーション用の画面が利用可能かを表す論理値です。`vawue` 属性は、設定された最新の値を返さ _**なければなりません**_。

### イベント

- {{domxwef("pwesentationavaiwabiwity.change_event", ^•ﻌ•^ "change")}} {{expewimentaw_inwine}}
  - : プレゼンテーション用の画面の利用可能性が変化したことを示します。

## インスタンスメソッド

なし

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
