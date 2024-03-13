---
title: "Navigator: userAgent プロパティ"
short-title: userAgent
slug: Web/API/Navigator/userAgent
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{ApiRef("HTML DOM")}}

**`Navigator.userAgent`** は読み取り専用のプロパティで、現在のブラウザーのユーザーエージェント文字列を返します。

> **メモ:** 仕様書では、ブラウザーがこのフィールドを介して提供する情報をできるだけ少なくすることを求めています。このプロパティの値は、同じブラウザーの将来のバージョンでも同じままであると仮定してはいけません。まったく使用しないようにしたり、ブラウザーの現在のバージョンと過去のバージョンのためだけに使用するようにしてください。新しいブラウザーは、古いブラウザーと同じ UA、またはその一部を使い始めるかもしれません。ブラウザーエージェントが本当にこのプロパティによって広告されたものであるという保証は本当にありません。
>
> また、ブラウザーのユーザーはこのフィールドの値を変更することができることを覚えておいてください (UA なりすまし)。

ユーザーエージェント文字列の検出に基づくブラウザーの識別は**信頼できず**、ユーザーエージェント文字列はユーザーが設定可能なので**推奨されません**。例えば、以下のようになります。

- Firefox では、 about:config の `general.useragent.override` 設定を使って変更することができます。一部の Firefox 拡張機能でも設定可能です。しかし、これは取得する HTTP ヘッダーと `navigator.userAgent` が返す HTTP ヘッダーを変更するだけです。
  他にも JavaScript コードを利用してブラウザー識別を行うメソッドがあるかもしれません。
- Opera 6 以降では、メニューからブラウザー識別文字列を設定できます。

## 値

文字列で、ブラウザーが {{Glossary("HTTP")}} ヘッダーで提供する完全なユーザーエージェント文字列と、 {{domxref("Navigator")}} オブジェクト上のメソッドやその他の関連メソッドへのレスポンスを指定します。

ユーザーエージェント文字列は形式的な構造に基づいて構築されており、いくつかの情報に分解することができます。これらの情報の各部分は、ユーザ－が設定可能な他の Navigator のプロパティから来ています。Gecko ベースのブラウザは以下の一般的な構造に準拠しています。

```plain
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
```

## 例

```js
alert(window.navigator.userAgent);
// alerts "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("User-Agent")}} HTTP ヘッダー
