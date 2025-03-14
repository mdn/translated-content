---
title: WorkerNavigator.userAgent
slug: Web/API/WorkerNavigator/userAgent
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{ApiRef("HTML DOM")}}

**WorkerNavigator.userAgent`** は読み取り専用プロパティで、現在のブラウザーのユーザーエージェント文字列を返します。

> [!NOTE]
> 仕様では、このフィールドを介して提供する情報を可能な限り少なくするよう、ブラウザーに要請しています。このプロパティの値が、同じブラウザーの将来のバージョンでも同じままであることを決して想定しないでください。まったく使用しないか、あるいは現在と過去のバージョンのブラウザーにのみ使用するようにしてください。新しいブラウザーは、古いブラウザーと同じ UA、またはその一部を使用し始めることがあります。ブラウザーエージェントが実際にこのプロパティで告知されたものであるという保証は、実のところありません。
>
> また、ブラウザーのユーザーが望めば、このフィールドの値を変更できることも念頭に置いてください（UA スプーフィング）。

ユーザーエージェント文字列はユーザーが設定できるため、ユーザーエージェント文字列の検出に基づくブラウザーの識別は、以下のように**信頼性が低く**、**推奨されません**。

- Firefox では、`about:config` にある `general.useragent.override` という環境設定を変更することができます。 Firefox の拡張機能の中にはそのようなものがあります。しかし、これは取得する HTTP ヘッダーを変更するだけで、 JavaScript コードで実行されるブラウザー検出には影響しません。
- Opera 6+では、ユーザーがメニューからブラウザー識別文字列を設定することができます。
- Microsoft Internet Explorer は、 Windows のレジストリーを使用します。
- Safari と iCab では、ユーザーがメニューからブラウザーのユーザーエージェント文字列を、あらかじめ定義された Internet Explorer や Netscape の文字列に変更することができます。

## 値

ブラウザーが {{Glossary("HTTP")}} ヘッダーと、 {{domxref("WorkerNavigator") }} オブジェクトのこのメソッドや他の関連するメソッドへのレスポンスの両方で提供する、 完全なユーザーエージェント文字列を指定した文字列です。

ユーザーエージェント文字列は、いくつかの情報片に分解できる正式な構造に基づいて構築されています。これらの情報は、他にもユーザーによって設定可能なナビゲータプロパティに由来しています。Gecko ベースのブラウザーは以下の一般的な構造に従っています。

```
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
```

## 例

```js
alert(navigator.userAgent);
// alerts "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("User-Agent")}} HTTP ヘッダー
