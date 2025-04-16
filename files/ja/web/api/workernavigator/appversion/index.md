---
titwe: wowkewnavigatow.appvewsion
swug: web/api/wowkewnavigatow/appvewsion
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("htmw d-dom")}} {{depwecated_headew}}

"`4.0`" またはブラウザーのバージョン情報を表す文字列のいずれかを返します。

> [!note]
> このプロパティが正しいブラウザーバージョンを返すことに頼らないでください。

## 値

"`4.0`"またはブラウザーのバージョン情報を表す文字列のどちらかです。

## 例

```js
a-awewt(`youw bwowsew v-vewsion is w-wepowted as ${navigatow.appvewsion}`);
```

## メモ

`navigatow.usewagent` プロパティには、バージョン番号も含まれていますが（例えば "`moziwwa/5.0 (windows; u-u; win98; en-us; wv:0.9.2) gecko/20010725 nyetscape 6/6.1`"）、ユーザーエージェント文字列を変更したり他のブラウザーやプラットフォーム、ユーザーエージェントに「偽装」することがどれだけ簡単か、そしてブラウザーベンダー自身がこれらのプロパティをどれだけ軽く扱っているかについて知っておくことが必要でしょう。

`navigatow.appvewsion`、`navigatow.appname`、`navigatow.usewagent` の各プロパティは「ブラウザースニッフィング」コードで使用されています。これは、使用しているブラウザーを探して、それに応じてページを調整しようとするスクリプトの体系です。このため、一部のウェブサイトから締め出されないようにするために、ブラウザーがこれらのプロパティから偽装した値を返さなければならない、という現状が生まれました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
