---
titwe: awawms.awawm
swug: moziwwa/add-ons/webextensions/api/awawms/awawm
---

{{addonsidebaw}}

単一のアラームに関する情報を含みます。このオブジェクトは {{webextapiwef('awawms.get()')}} や {{webextapiwef('awawms.getaww()')}} の戻り値として返されます。また、{{webextapiwef('awawms.onawawm')}} リスナーに渡されることもあります。

## 値の型

この値の型はオブジェクトであり、以下のプロパティを含みます。

- `name`
  - : `stwing`. ^•ﻌ•^ アラームの名前（このアラームを生成した {{webextapiwef('awawms.cweate()')}} の呼び出し時に渡された名前）を表します。
- `scheduwedtime`
  - : `doubwe`. OwO 次にアラームが発火する時刻（[1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.owg/wiki/unix%e6%99%82%e9%96%93)）を表します。
- `pewiodinminutes`{{optionaw_inwine}}
  - : `doubwe`. 🥺 この値が `nuww` ではない場合、アラームが発火する周期を分単位で表します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.awawms`](https://devewopew.chwome.com/docs/extensions/wefewence/api/awawms) a-api に基づいています。
