---
title: Navigator.userAgent
slug: Web/API/Navigator/userAgent
---

{{ApiRef("HTML DOM")}}

**`NavigatorID.userAgent`** は読み取り専用のプロパティで、現在のブラウザーのユーザーエージェント文字列を返します。

> **メモ:** 仕様書では、ブラウザーがこのフィールドを介して提供する情報をできるだけ少なくすることを求めています。このプロパティの値は、同じブラウザーの将来のバージョンでも同じままであると仮定してはいけません。まったく使用しないようにしたり、ブラウザーの現在のバージョンと過去のバージョンのためだけに使用するようにしてください。新しいブラウザーは、古いブラウザーと同じ UA、またはその一部を使い始めるかもしれません。ブラウザーエージェントが本当にこのプロパティによって広告されたものであるという保証は本当にありません。
>
> また、ブラウザーのユーザーはこのフィールドの値を変更することができることを覚えておいてください (UA なりすまし)。

ユーザーエージェント文字列の検出に基づくブラウザーの識別は**信頼性が低く**、ユーザーエージェント文字列はユーザーが設定可能なので**推奨されません**。例えば、以下のようになります。

- Firefox では、 about:config の "general.useragent.override" 設定を使うことができます。いくつかの Firefox の拡張や多機能バーでも設定可能です。
- Opera 6 以降では、メニューからブラウザー識別文字列を設定できます。
- Microsoft Internet Explorer では、 Windows レジストリーを使用します。
- Safari と iCab は、メニューから、ブラウザーユーザエージェントを定義済みの Internet Explorer、または、 Netscape の文字列に変更できます。

## 構文

```js
var ua = navigator.userAgent;
```

### 値

{{domxref("DOMString")}} で、ブラウザーが {{Glossary("HTTP")}} ヘッダーで提供する完全なユーザーエージェント文字列と、 {{domxref("Navigator")}} オブジェクト上のメソッドやその他の関連メソッドへのレスポンスを指定します。

ユーザーエージェント文字列は形式的な構造に基づいて構築されており、いくつかの情報に分解することができます。これらの情報の各部分は、ユーザ－が設定可能な他の Navigator のプロパティから来ています。Gecko ベースのブラウザは以下の一般的な構造に準拠しています。

```js
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
```

## 例

```js
alert(window.navigator.userAgent)
// alerts "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("User-Agent")}} HTTP ヘッダー
