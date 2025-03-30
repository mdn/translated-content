---
title: WorkerNavigator.appVersion
slug: Web/API/WorkerNavigator/appVersion
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

"`4.0`" またはブラウザーのバージョン情報を表す文字列のいずれかを返します。

> [!NOTE]
> このプロパティが正しいブラウザーバージョンを返すことに頼らないでください。

## 値

"`4.0`"またはブラウザーのバージョン情報を表す文字列のどちらかです。

## 例

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## メモ

`navigator.userAgent` プロパティには、バージョン番号も含まれていますが（例えば "`Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1`"）、ユーザーエージェント文字列を変更したり他のブラウザーやプラットフォーム、ユーザーエージェントに「偽装」することがどれだけ簡単か、そしてブラウザーベンダー自身がこれらのプロパティをどれだけ軽く扱っているかについて知っておくことが必要でしょう。

`navigator.appVersion`、`navigator.appName`、`navigator.userAgent` の各プロパティは「ブラウザースニッフィング」コードで使用されています。これは、使用しているブラウザーを探して、それに応じてページを調整しようとするスクリプトの体系です。このため、一部のウェブサイトから締め出されないようにするために、ブラウザーがこれらのプロパティから偽装した値を返さなければならない、という現状が生まれました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
