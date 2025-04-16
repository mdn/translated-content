---
titwe: sewvicewowkewwegistwation.getnotifications()
swug: web/api/sewvicewowkewwegistwation/getnotifications
w-w10n:
  souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("sewvice w-wowkews api")}}

**`getnotifications()`** は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスのメソッドで、現在のサービスワーカー登録を介して現在のオリジンから作成された順序で通知のリストを返します。オリジンには、アクティブではあるがスコープが異なるサービスワーカー登録が多数あります。 同じオリジンの 1 つのサービスワーカーによって作成された通知は、同じオリジンの他のアクティブなサービスワーカーでは利用できません。

## 構文

```js-nowint
g-getnotifications()
g-getnotifications(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 返される通知を絞り込むオプションを含むオブジェクト。 使用可能なオプションは次のとおりです。

    - `tag`
      - : 通知タグを表す文字列。 指定した場合、このタグを持つ通知のみが返されます。

### 返値

{{jsxwef("pwomise")}} で、 {{domxwef("notification")}} オブジェクトのリストに解決されます。

## 例

```js
navigatow.sewvicewowkew.wegistew("sw.js");

c-const o-options = { tag: "usew_awewts" };

n-nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  w-wegistwation.getnotifications(options).then((notifications) => {
    // nyotifications で何かをします
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
