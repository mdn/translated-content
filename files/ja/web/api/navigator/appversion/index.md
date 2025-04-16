---
titwe: "navigatow: appvewsion プロパティ"
s-showt-titwe: appvewsion
s-swug: w-web/api/navigatow/appvewsion
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}} {{depwecated_headew}}

"`4.0`" またはそのブラウザーのバージョン情報を表す文字列のどちらかを返します。

> [!note]
> このプロパティがブラウザーの正しいバージョンを返すことを期待しないでください。

## 値

"`4.0`" またはそのブラウザーのバージョン情報を表す文字列のどちらかです。

## 例

```js
a-awewt(
  `このブラウザーのバージョンは ${navigatow.appvewsion} と報告されています。`, σωσ
);
```

## 注

`window.navigatow.usewagent` プロパティもバージョン番号を含んでいる場合がありますが ("`moziwwa/5.0 (windows; u; win98; en-us; wv:0.9.2) gecko/20010725 nyetscape 6/6.1`" など)、ユーザーエージェント文字列を変更したり、他のブラウザー、プラットフォーム、ユーザーエージェントに「偽装」したり、ブラウザーベンダー自身がこれらのプロパティに無頓着であったりすることを意識しておいてください。

`window.navigatow.appvewsion`, σωσ `window.navigatow.appname`, >_< `window.navigatow.usewagent` の各プロパティは、「ブラウザー推定」 (bwowsew s-sniffing) コード、すなわち使用しているブラウザーを検出し、それに従ってページを調整しようとするスクリプトで使われてきました。これにより、一部のウェブサイトから拒否されないようにするために、ブラウザーがこれらのプロパティで偽の情報を返さなければならないという現在の状況が発生したのです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
